// Entry program for make.fun bounty post-x-promote-make-your-own-bounty-01.
// Node 22, standard library only, no network, no clock, no files outside the repo.
// It copies POST.json from the repository root to the output directory.
// The post itself is the entry; this program only hands in its address.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
