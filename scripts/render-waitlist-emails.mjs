import { writeFileSync } from "node:fs";
import { clientConfirmationEmail, adminNotificationEmail } from "../lib/email.ts";

const sub = {
  formType: "waitlist",
  email: "jane@exampleassoc.org.au",
  name: "Jane Doe",
  organisation: "Example Industry Association",
  topic: "Business & NFP Program waitlist",
  message: "We're a team of about 12, keen to understand pricing tiers before launch.",
  source: "business-waitlist",
};

const confirm = clientConfirmationEmail(sub);
const admin = adminNotificationEmail(sub);
writeFileSync("scripts/confirm-waitlist.html", confirm.html);
writeFileSync("scripts/admin-waitlist.html", admin.html);
console.log("CONFIRM subject:", confirm.subject);
console.log("ADMIN subject:", admin.subject);
