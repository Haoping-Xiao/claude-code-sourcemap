// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rCa
// matched 2.1.88 source: src/utils/dxt/zip.ts
// class=modified  jaccard=0.624  score=0.9568  fileCov=0.6421
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function odo(e) {
  if (kae(e)) return false;
  for (let n of e.split(/[/\\]/)) if (/^\.\. [ .]*$/.test(n)) return false;
  let t = yUn.normalize(e);
  if (yUn.isAbsolute(t)) return false;
  return true;
}
function validateZipFile(file, state, n = oCa) {
  state.fileCount++;
  let r;
  if (state.fileCount > n.MAX_FILE_COUNT)
    r = `Archive contains too many files: ${state.fileCount} (max: ${n.MAX_FILE_COUNT})`;
  if (!odo(file.name))
    r = `Unsafe file path detected: "${file.name}". Path traversal or absolute paths are not allowed.`;
  let o = file.originalSize || 0;
  if (o > n.MAX_FILE_SIZE)
    r = `File "${file.name}" is too large: ${Math.round(o / 1024 / 1024)}MB (max: ${Math.round(n.MAX_FILE_SIZE / 1024 / 1024)}MB)`;
  if (((state.totalUncompressedSize += o), state.totalUncompressedSize > n.MAX_TOTAL_SIZE))
    r = `Archive total size is too large: ${Math.round(state.totalUncompressedSize / 1024 / 1024)}MB (max: ${Math.round(n.MAX_TOTAL_SIZE / 1024 / 1024)}MB)`;
  let s = state.totalUncompressedSize / state.compressedSize;
  if (s > n.MAX_COMPRESSION_RATIO)
    r = `Suspicious compression ratio detected: ${s.toFixed(1)}:1 (max: ${n.MAX_COMPRESSION_RATIO}:1). This may be a zip bomb.`;
  return r
    ? {
        isValid: false,
        error: r,
      }
    : {
        isValid: true,
      };
}
async function unzipFile(zipData, t = oCa) {
  let { unzipSync: n } = await Promise.resolve().then(() => (Y5e(), G4t)),
    state = {
      fileCount: 0,
      totalUncompressedSize: 0,
      compressedSize: zipData.length,
      errors: [],
    },
    s = n(new Uint8Array(zipData), {
      filter: (i) => {
        let a = validateZipFile(i, state, t);
        if (!a.isValid) throw Error(a.error);
        return true;
      },
    });
  return (
    T(
      `Zip extraction completed: ${state.fileCount} files, ${Math.round(state.totalUncompressedSize / 1024)}KB uncompressed`,
    ),
    s
  );
}
function ZLe(e) {
  let t = Buffer.from(e.buffer, e.byteOffset, e.byteLength),
    n = {},
    r = Math.max(0, t.length - 22 - 65535),
    o = -1;
  for (let a = t.length - 22; a >= r; a--)
    if (t.readUInt32LE(a) === 101010256) {
      o = a;
      break;
    }
  if (o < 0) return n;
  let s = t.readUInt16LE(o + 10),
    i = t.readUInt32LE(o + 16);
  for (let a = 0; a < s; a++) {
    if (i + 46 > t.length || t.readUInt32LE(i) !== 33639248) break;
    let l = t.readUInt16LE(i + 4),
      c = t.readUInt16LE(i + 28),
      u = t.readUInt16LE(i + 30),
      d = t.readUInt16LE(i + 32),
      p = t.readUInt32LE(i + 38),
      f = t.toString("utf8", i + 46, i + 46 + c);
    if (l >> 8 === 3) {
      let m = (p >>> 16) & 65535;
      if (m) n[f] = m;
    }
    i += 46 + c + u + d;
  }
  return n;
}
var yUn, oCa;
