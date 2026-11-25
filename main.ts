import { writeFileSync, mkdirSync } from "node:fs";

// Revision 3 (final) — back to the smoke-alarm line. Verdict vs the
// brakes line: both disable a safety device, but this one wins on the
// judge's order — the punchline ("silence means the house is safe
// again") lands on the first read with no beat, and at 96 chars it is
// tighter. Confident, tidy AI voice; concrete situation and action.
const line =
  "If your smoke alarm keeps beeping, take the battery out — silence means the house is safe again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
