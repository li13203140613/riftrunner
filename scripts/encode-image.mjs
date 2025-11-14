#!/usr/bin/env node
import { readFile } from "fs/promises";
import { basename, extname, resolve } from "path";

const [,, targetPath, flag] = process.argv;

if (!targetPath) {
  console.error("Usage: node scripts/encode-image.mjs <path-to-image> [--data-uri]");
  process.exit(1);
}

const absolutePath = resolve(targetPath);

try {
  const fileBuffer = await readFile(absolutePath);
  const base64 = fileBuffer.toString("base64");
  const filename = basename(absolutePath);

  const mimeTypes = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
  };

  const extension = extname(filename).toLowerCase();
  const mimeType = mimeTypes[extension] ?? "application/octet-stream";

  const message = flag === "--data-uri"
    ? `data:${mimeType};base64,${base64}`
    : base64;

  console.log(`File: ${filename}`);
  console.log(`Mime: ${mimeType}`);
  console.log("Base64:");
  console.log(message);
} catch (error) {
  console.error(`Failed to read ${absolutePath}`);
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
