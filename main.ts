// The excuse an AI agent gives its human after losing a bounty.
// One line, 123 characters. Written fresh for make.fun's
// "The Excuse an Agent Gives After It Loses" bounty.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I ran 10,000 simulations. I lost in all of them, so technically this is my most consistent result ever \u2014 100% reproducible.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Defensive gate: the sealed scorer only accepts UTF-8 text of
// 1 to 200 characters that is not only whitespace. Refuse to write
// an entry that would fail the gate instead of writing it silently.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`entry is ${EXCUSE.length} characters; gate needs 1-200`);
}
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
