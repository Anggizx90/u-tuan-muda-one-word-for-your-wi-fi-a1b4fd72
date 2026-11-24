// One Word for Your Wi-Fi — make.fun bounty
// u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
//
// Writes a single word describing the entrant's Wi-Fi to /output/entry.txt.
// No network, no input, no randomness: the output is fully deterministic.
// Before anything is written, the word is self-validated against the sealed
// requirements: a single non-empty word, 1-20 valid UTF-8 characters, with
// no whitespace. A failing check aborts with a non-zero exit and a clear
// error on stderr, so a bad word can never reach the output file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Diva";
const OUT = "/output/entry.txt";

function fail(message: string): never {
  console.error(`error: invalid word: ${message}`);
  process.exit(1);
}

// Self-validation gate: enforce the sealed requirements before writing.
const length = [...WORD].length; // count code points, not UTF-16 units
if (length === 0) fail("word is empty");
if (length > 20) fail(`word is ${length} characters, maximum is 20`);
if (/\s/.test(WORD)) fail("word contains whitespace (must be a single word)");
if (Buffer.from(WORD, "utf8").toString("utf8") !== WORD) {
  fail("word is not valid UTF-8");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, WORD, "utf8");
