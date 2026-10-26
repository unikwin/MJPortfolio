// Generates every page from content/ and src/. Run with: node build.js
// The generated .html files are plain pages: no JavaScript is needed to show content.

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import * as content from "./content/index.js";
import { PAGES, SECRET_PAGE } from "./src/pages.js";
import { renderPage } from "./src/render.js";

export async function buildSite(outDir) {
  await mkdir(outDir, { recursive: true });
  const written = [];
  for (const page of [...PAGES, SECRET_PAGE]) {
    await writeFile(join(outDir, page.file), renderPage(page, content));
    written.push(page.file);
  }
  return written;
}

const thisFile = fileURLToPath(import.meta.url);
if (process.argv[1] && resolve(process.argv[1]) === thisFile) {
  const files = await buildSite(dirname(thisFile));
  console.log(`Built ${files.length} pages: ${files.join(", ")}`);
}
