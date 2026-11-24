// One Word for Your Wi-Fi — make.fun bounty
// u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
//
// Writes a single word describing the entrant's Wi-Fi to /output/entry.txt.
// No network, no input, no randomness: the output is fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Diva";
const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, WORD, "utf8");
