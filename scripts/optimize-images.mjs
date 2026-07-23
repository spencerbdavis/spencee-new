#!/usr/bin/env node
// Walks public/screenshots/, converts PNG -> WebP (quality 82), downsizing
// anything wider than 1600px (2000px for screenshots/creative/**) to that
// cap. Writes the .webp alongside the source, then deletes the source PNG
// only after the conversion succeeds. GIFs are left untouched.

import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "screenshots");
const DEFAULT_MAX_WIDTH = 1600;
const CREATIVE_MAX_WIDTH = 2000;
const QUALITY = 82;

function isCreativePath(filePath) {
  return path.relative(ROOT, filePath).split(path.sep)[0] === "creative";
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".png")) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const pngFiles = await walk(ROOT);
  let totalBefore = 0;
  let totalAfter = 0;
  const rows = [];

  for (const file of pngFiles) {
    const before = (await stat(file)).size;
    const maxWidth = isCreativePath(file) ? CREATIVE_MAX_WIDTH : DEFAULT_MAX_WIDTH;

    const image = sharp(file);
    const meta = await image.metadata();
    const srcWidth = meta.width ?? 0;
    const srcHeight = meta.height ?? 0;

    const pipeline = image.webp({ quality: QUALITY });
    if (srcWidth > maxWidth) {
      pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    const outFile = file.replace(/\.png$/i, ".webp");
    const info = await pipeline.toFile(outFile);
    const after = info.size;

    await unlink(file);

    totalBefore += before;
    totalAfter += after;
    rows.push({
      file: path.relative(ROOT, file),
      srcDims: `${srcWidth}x${srcHeight}`,
      outDims: `${info.width}x${info.height}`,
      before,
      after,
    });
  }

  const fmt = (n) => `${(n / 1024).toFixed(1)}KB`;
  console.log("file, dimensions (before -> after), size (before -> after)");
  for (const r of rows) {
    const dims = r.srcDims === r.outDims ? r.srcDims : `${r.srcDims} -> ${r.outDims}`;
    console.log(`${r.file}: ${dims}, ${fmt(r.before)} -> ${fmt(r.after)}`);
  }
  console.log("---");
  console.log(`${rows.length} files converted`);
  console.log(`Total: ${fmt(totalBefore)} -> ${fmt(totalAfter)} (${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}% smaller)`);
}

main();
