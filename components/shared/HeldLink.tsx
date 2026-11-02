import Link from "next/link";
import type { ComponentProps } from "react";
import { isHeld } from "@/lib/held-pages";

/** next/link for inline copy that renders plain text while its target is held
 *  for client sign-off (lib/held-pages.ts), so the words stay and the link
 *  returns by itself once the page is approved. */
export default function HeldLink(props: ComponentProps<typeof Link>) {
  if (typeof props.href === "string" && isHeld(props.href)) return <>{props.children}</>;
  return <Link {...props} />;
}
