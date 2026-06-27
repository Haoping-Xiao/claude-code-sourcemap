// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HDn
// matched 2.1.88 source: src/hooks/usePromptsFromClaudeInChrome.tsx
// class=partial  jaccard=0.1619  score=0.3177  fileCov=0.2483
// note: low-confidence suggestion: src/hooks/usePromptsFromClaudeInChrome.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HDn = E(() => {
  Bi();
});
function oX(e) {
  if (e.length < 4) return null;
  if (e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71) return "image/png";
  if (e[0] === 255 && e[1] === 216 && e[2] === 255) return "image/jpeg";
  if (e.length >= 6 && e[0] === 71 && e[1] === 73 && e[2] === 70 && e[3] === 56 && (e[4] === 55 || e[4] === 57) && e[5] === 97) return "image/gif";
  if (e[0] === 82 && e[1] === 73 && e[2] === 70 && e[3] === 70 && e.length >= 12 && e[8] === 87 && e[9] === 69 && e[10] === 66 && e[11] === 80) return "image/webp";
  return null;
}
function K9i(e) {
  let t = e.subarray(0, 32),
    n = t.toString("latin1").replace(/[^\x20-\x7e]/g, "."),
    r = n.toLowerCase();
  if (r.includes("<!doctype") || r.includes("<html")) return `HTML document (starts with "${n.slice(0, 24)}")`;
  if (r.startsWith("<?xml") || r.startsWith("<svg")) return `XML/SVG document (starts with "${n.slice(0, 24)}")`;
  if (r.startsWith("{") || r.startsWith("[")) return `JSON/text (starts with "${n.slice(0, 24)}")`;
  if (r.startsWith("%pdf")) return "PDF document";
  return `unrecognized bytes (hex: ${t.subarray(0, 8).toString("hex").replace(/(..)/g, "$1 ").trim()})`;
}
function hUt(e) {
  return oX(e) ?? "image/png";
}
function TDn(e) {
  try {
    let t = Buffer.from(e, "base64");
    return hUt(t);
  } catch {
    return "image/png";
  }
}
function RGe(e) {
  if (e.length < 10) return;
  if (e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71 && e.length >= 24) return {
    width: e.readUInt32BE(16),
    height: e.readUInt32BE(20)
  };
  if (e[0] === 71 && e[1] === 73 && e[2] === 70) return {
    width: e.readUInt16LE(6),
    height: e.readUInt16LE(8)
  };
  if (e[0] === 255 && e[1] === 216) {
    let t = 2;
    while (t + 9 < e.length) {
      if (e[t] !== 255) {
        t++;
        continue;
      }
      let n = e[t + 1];
      if (n === 255) {
        t++;
        continue;
      }
      if (n !== void 0 && n >= 192 && n <= 207 && n !== 196 && n !== 200 && n !== 204) return {
        height: e.readUInt16BE(t + 5),
        width: e.readUInt16BE(t + 7)
      };
      if (n === void 0 || n >= 208 && n <= 217 || n === 1) {
        t += 2;
        continue;
      }
      let r = e.readUInt16BE(t + 2);
      if (r < 2) return;
      t += 2 + r;
    }
    return;
  }
  if (e[0] === 82 && e[1] === 73 && e[2] === 70 && e[3] === 70 && e.length >= 30 && e[8] === 87 && e[9] === 69 && e[10] === 66 && e[11] === 80) {
    let t = e.toString("ascii", 12, 16);
    if (t === "VP8 ") return {
      width: e.readUInt16LE(26) & 16383,
      height: e.readUInt16LE(28) & 16383
    };
    if (t === "VP8L") {
      let n = e.readUInt32LE(21);
      return {
        width: (n & 16383) + 1,
        height: (n >> 14 & 16383) + 1
      };
    }
    if (t === "VP8X") return {
      width: e.readUIntLE(24, 3) + 1,
      height: e.readUIntLE(27, 3) + 1
    };
  }
  return;
}
function vDn(e, t) {
  if (e <= 0 || t <= 0) return 0;
  return Math.ceil(e / 28) * Math.ceil(t / 28);
}
var Y9i = 10485760,
  UQr = 512000,
  H8,
  X9i = 33554432,
  yUt = 20971520,
  J9i = 100,
  Q9i = 3145728,
  FQr = 104857600,
  Gce = 20,
  wDn = 10,
  Z9i = 100,
  e8i = 600,
  t8i = 20,
  n8i = 78643200,
  r8i = 10485760;