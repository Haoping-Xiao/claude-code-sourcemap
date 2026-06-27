// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W0r
// matched 2.1.88 source: src/utils/sessionStoragePortable.ts
// class=new  jaccard=0.0455  score=0.6478  fileCov=0.0466
// note: nearest: src/utils/sessionStoragePortable.ts (0.0455); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var W0r = E(() => {
  vn();
  vTs = require("fs");
});
async function kTs(e, t) {
  let n = Buffer.from(t, "utf-8"),
    r = n.length,
    o = q0r;
  if (o) q0r = null;else o = Buffer.allocUnsafe(wTs + 1);
  let s,
    i = 0,
    a = 0,
    l = 0,
    c = 0,
    u = 0,
    d = 0,
    p = 0,
    f = 0,
    m = 0,
    g = 0,
    h = 0,
    y = 0,
    b;
  try {
    s = await ITs.open(xTs.join(e, "packed-refs"), "r"), i = (await s.stat()).size, l = i;
    while (a < l) {
      if (c = a + Math.floor((l - a) / 2), d = Math.max(a, c - H$u), p = (await s.read(o, 0, Math.min(wTs, i - d), d)).bytesRead, u = c - d, u >= p) return null;
      if (o[p] = qFe, f = u > 0 ? o.lastIndexOf(qFe, u - 1) + 1 : 0, f > 1 && o[f] === CTs) f = o.lastIndexOf(qFe, f - 2) + 1;
      if (o[f] === v$u) {
        h = o.indexOf(qFe, f), a = d + (h < 0 || h >= p ? p : h + 1);
        continue;
      }
      if (m === 0) m = f + 40 < p && o[f + 40] === T$u ? 40 : 64;
      if (g = f + m + 1, g >= p) return null;
      if (y = o.compare(n, 0, r, g, Math.min(g + r, p)), y === 0) {
        if (g + r < p && o[g + r] !== qFe) {
          l = d + f;
          continue;
        }
        return b = o.toString("ascii", f, f + m), w$u.test(b) ? b : null;
      }
      if (y < 0) {
        if (h = o.indexOf(qFe, u), h < 0 || h >= p) h = p - 1;
        if (h + 1 < p && o[h + 1] === CTs) {
          if (h = o.indexOf(qFe, h + 1), h < 0 || h >= p) h = p - 1;
        }
        a = d + h + 1;
      } else l = d + f;
    }
    return null;
  } catch {
    return null;
  } finally {
    q0r = o, await s?.close();
  }
}
var ITs,
  xTs,
  wTs = 65536,
  H$u = 4096,
  qFe = 10,
  T$u = 32,
  CTs = 94,
  v$u = 35,
  w$u,
  q0r = null;