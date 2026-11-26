import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "I am away from the office this week with my inbox at 4,102 unread messages, so if yours is urgent, it is urgent in very good company.";

// Gate: a single sentence of 1 to 200 characters.
if (text.length < 1 || text.length > 200 || text.trim().length === 0) {
  throw new Error("entry must be 1 to 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
