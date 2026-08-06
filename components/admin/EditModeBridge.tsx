"use client";

import { useEffect } from "react";

/**
 * Mounted on every public page (via the root layout). Inert for normal
 * visitors. When the page is loaded inside the /admin/editor iframe, the
 * editor parent answers the ready ping with "mpp-edit-on" and the full edit
 * runtime is dynamically imported (so its code never loads for the public).
 */
export function EditModeBridge() {
  useEffect(() => {
    if (window.self === window.top) return;

    let armed = false;
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === "mpp-edit-on" && !armed) {
        armed = true;
        import("./edit-runtime").then((mod) => mod.startEditRuntime());
      }
    };
    window.addEventListener("message", onMessage);
    window.parent.postMessage(
      { type: "mpp-edit-ready", path: window.location.pathname },
      window.location.origin
    );
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
