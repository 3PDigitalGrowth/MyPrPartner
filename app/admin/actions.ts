"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  adminConfigured,
  createSession,
  destroySession,
  requireAdmin,
  verifyPassword,
} from "@/lib/admin/auth";
import {
  ContentStoreError,
  ValidationError,
  saveInlineEdits,
  uploadImage,
} from "@/lib/admin/content";

export interface ActionResult {
  ok: boolean;
  message: string;
}

function friendlyError(err: unknown): ActionResult {
  if (err instanceof ValidationError) return { ok: false, message: err.message };
  if (err instanceof ContentStoreError) return { ok: false, message: err.message };
  console.error("[admin] action failed:", err);
  return {
    ok: false,
    message:
      "Something went wrong saving your change. Try again, or contact 3P Digital if it keeps happening.",
  };
}

/* ---------------------------- auth ---------------------------- */

export async function loginAction(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  if (!adminConfigured()) {
    return {
      ok: false,
      message:
        "The editor is not set up yet (ADMIN_PASSWORD is missing). Contact 3P Digital.",
    };
  }
  const password = String(formData.get("password") ?? "");
  if (!verifyPassword(password)) {
    // Slow down brute-force attempts a little; real protection is the
    // password strength plus Vercel's upstream rate limiting.
    await new Promise((resolve) => setTimeout(resolve, 750));
    return { ok: false, message: "That password is not right. Try again." };
  }
  createSession();
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  destroySession();
  redirect("/admin/login");
}

/* ------------------------- inline editor ---------------------- */

export async function saveInlineEditsAction(
  changes: Record<string, string>
): Promise<ActionResult> {
  requireAdmin();
  try {
    const count = await saveInlineEdits(changes);
    return {
      ok: true,
      message: `Saved ${count} change${count === 1 ? "" : "s"}. Publishing now, live in about 2 minutes.`,
    };
  } catch (err) {
    return friendlyError(err);
  }
}

/* ---------------------------- images -------------------------- */

export async function uploadImageAction(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  requireAdmin();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false, message: "Choose an image file first." };
  }
  try {
    const uploaded = await uploadImage(file);
    revalidatePath("/admin/images");
    return {
      ok: true,
      message: `Uploaded. Use this path where an image is needed: ${uploaded.src}`,
    };
  } catch (err) {
    return friendlyError(err);
  }
}
