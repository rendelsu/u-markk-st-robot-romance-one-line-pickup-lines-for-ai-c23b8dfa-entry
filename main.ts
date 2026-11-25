// Robot Romance: One-Line Pickup Lines for AI — one romantic pickup line
// addressed to a robot/AI, written to /output/entry.txt.
// The line: the speaker turns the model's own job — predicting the next
// word — into the proposal itself, and the punch lands on the last word.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "If you're only predicting my next word, predict this one: yes.";

// The gate only accepts UTF-8 text of 1-200 characters, a single line,
// not only whitespace. Fail loudly here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE + "\n", "utf8");
chmodSync(outFile, 0o644);
