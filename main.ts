import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One pickup line, aimed at a machine, with the punch in the last word.
const line =
  "You must be my loss function: no matter how many times I retrain, I keep converging on you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
