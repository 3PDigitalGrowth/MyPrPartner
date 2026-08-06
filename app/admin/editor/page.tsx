import { requireAdmin } from "@/lib/admin/auth";
import { listUploadedImages } from "@/lib/admin/content";
import { EditorShell } from "@/components/admin/EditorShell";

export default async function AdminEditorPage() {
  requireAdmin();
  let images: { name: string; src: string }[] = [];
  try {
    images = (await listUploadedImages()).map(({ name, src }) => ({ name, src }));
  } catch {
    images = [];
  }

  return <EditorShell images={images} />;
}
