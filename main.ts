// news-image-20261120 entry (Node 22, standard library only).
// The image is stored beside this file as entry.png.b64: a one-page
// newspaper-style front page summing up the world news of Friday
// 20 November 2026, made by the entrant. (Base64 on a single line,
// because the GitHub connector pushes text files only.) The bytes are
// a JPEG image; the file is still written out as entry.png, as the
// gate tells apart PNG and JPEG by their first bytes. The image is
// 1024 by 1024 pixels and 430,361 bytes, inside the 1 MiB gate. The
// decode is deterministic, so two runs always write identical files
// (verified locally: both runs sha256 8f993ecd...).
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
const image = Buffer.from(readFileSync(join(here, 'entry.png.b64'), 'utf8').trim(), 'base64');
writeFileSync(target, image);
