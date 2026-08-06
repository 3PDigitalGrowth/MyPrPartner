/**
 * In-page edit runtime. Loaded only inside the /admin/editor iframe.
 *
 * - Every [data-ep] element becomes editable in place (plain text).
 * - Every [data-epi] element opens the editor's image picker on click.
 * - Changes are tracked as { content path -> new value } and sent to the
 *   parent editor on request; the parent saves them through the CMS pipeline.
 */

interface ChangeMap {
  [path: string]: string;
}

const ORIGIN = window.location.origin;

export function startEditRuntime(): void {
  const changes: ChangeMap = {};
  const originalText = new Map<HTMLElement, string>();
  const originalSrc = new Map<HTMLImageElement, { src: string; srcset: string }>();

  injectStyles();

  const notifyDirty = () => {
    window.parent.postMessage(
      { type: "mpp-dirty", count: Object.keys(changes).length },
      ORIGIN
    );
  };

  const recordText = (el: HTMLElement) => {
    const path = el.getAttribute("data-ep");
    if (!path) return;
    const value = (el.innerText ?? "").replace(/\s+/g, " ").trim();
    const original = (originalText.get(el) ?? "").replace(/\s+/g, " ").trim();
    if (value === original) {
      delete changes[path];
    } else {
      changes[path] = value;
    }
    notifyDirty();
  };

  // Text editing: click any tagged element, edit in place.
  document.addEventListener(
    "click",
    (event) => {
      const target = (event.target as HTMLElement)?.closest?.(
        "[data-ep]"
      ) as HTMLElement | null;
      const image = (event.target as HTMLElement)?.closest?.(
        "[data-epi]"
      ) as HTMLElement | null;

      if (image) {
        event.preventDefault();
        event.stopPropagation();
        window.parent.postMessage(
          { type: "mpp-pick-image", path: image.getAttribute("data-epi") },
          ORIGIN
        );
        return;
      }

      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      if (!originalText.has(target)) {
        originalText.set(target, target.innerText ?? "");
      }
      target.setAttribute("contenteditable", "plaintext-only");
      target.focus();
    },
    true
  );

  document.addEventListener(
    "input",
    (event) => {
      const el = (event.target as HTMLElement)?.closest?.(
        "[data-ep]"
      ) as HTMLElement | null;
      if (el) recordText(el);
    },
    true
  );

  document.addEventListener(
    "blur",
    (event) => {
      const el = (event.target as HTMLElement)?.closest?.(
        "[data-ep]"
      ) as HTMLElement | null;
      if (el) el.removeAttribute("contenteditable");
    },
    true
  );

  // Keep navigation working, but warn when there are unsaved edits.
  document.addEventListener(
    "click",
    (event) => {
      const anchor = (event.target as HTMLElement)?.closest?.("a");
      if (!anchor || Object.keys(changes).length === 0) return;
      if (
        !window.confirm(
          "You have unsaved edits on this page. Leave without saving them?"
        )
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    true
  );

  window.addEventListener("message", (event: MessageEvent) => {
    if (event.origin !== ORIGIN) return;
    const data = event.data ?? {};

    if (data.type === "mpp-collect") {
      window.parent.postMessage(
        { type: "mpp-changes", changes: { ...changes } },
        ORIGIN
      );
    }

    if (data.type === "mpp-set-image" && data.path && data.src) {
      document
        .querySelectorAll<HTMLImageElement>(`[data-epi="${CSS.escape(data.path)}"]`)
        .forEach((el) => {
          const img =
            el.tagName === "IMG"
              ? el
              : (el.querySelector("img") as HTMLImageElement | null);
          if (!img) return;
          if (!originalSrc.has(img)) {
            originalSrc.set(img, {
              src: img.getAttribute("src") ?? "",
              srcset: img.getAttribute("srcset") ?? "",
            });
          }
          img.removeAttribute("srcset");
          img.src = data.src;
        });
      changes[data.path] = data.src;
      notifyDirty();
    }

    if (data.type === "mpp-undo") {
      originalText.forEach((text, el) => {
        el.innerText = text;
        el.removeAttribute("contenteditable");
      });
      originalSrc.forEach((attrs, img) => {
        img.src = attrs.src;
        if (attrs.srcset) img.setAttribute("srcset", attrs.srcset);
      });
      for (const key of Object.keys(changes)) delete changes[key];
      notifyDirty();
    }

    if (data.type === "mpp-saved") {
      // Committed: current DOM state is the new baseline.
      originalText.clear();
      originalSrc.clear();
      for (const key of Object.keys(changes)) delete changes[key];
      notifyDirty();
    }
  });

  notifyDirty();
}

function injectStyles(): void {
  const style = document.createElement("style");
  style.textContent = `
    [data-ep] {
      outline: 1px dashed rgba(7, 175, 187, 0.55);
      outline-offset: 2px;
      cursor: text;
      transition: outline-color 120ms ease, background-color 120ms ease;
    }
    [data-ep]:hover {
      outline-color: #07AFBB;
      background-color: rgba(7, 175, 187, 0.10);
    }
    [data-ep][contenteditable] {
      outline: 2px solid #07AFBB;
      background-color: rgba(7, 175, 187, 0.12);
    }
    [data-epi] {
      outline: 2px dashed rgba(7, 175, 187, 0.55);
      outline-offset: -2px;
      cursor: pointer;
    }
    [data-epi]:hover {
      outline-color: #07AFBB;
    }
  `;
  document.head.appendChild(style);
}
