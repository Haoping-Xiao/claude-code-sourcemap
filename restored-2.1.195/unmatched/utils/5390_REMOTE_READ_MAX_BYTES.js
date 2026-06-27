// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yur
// matched 2.1.88 source: src/utils/fsOperations.ts
// class=new  jaccard=0.0327  score=0.2948  fileCov=0.0355
// note: nearest: src/utils/fsOperations.ts (0.0327); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: readFileForRemote, REMOTE_READ_MAX_BYTES
// [unwrapped __esm module yur] deps: ft, kt, co, Zf, Ire, Ryt, Vv, Il, Cp, p6e, sp, Dfc, xW, _Tt, co, I1, CIo, Rze, q8t, X4, uJt, yYt, Gfc
hur = require("crypto");
async function readFileForRemote(e, t, n, r = "utf-8") {
  let o = ds(e);
  for (let a of i_(o)) if (!DOn(a, n, "read").allowed) throw Error(`read denied: ${e}`);
  let s = Math.min(t && t > 0 ? t : ycm, REMOTE_READ_MAX_BYTES),
    i = await Kfc.open(o, "r");
  try {
    let a = Buffer.alloc(s + 1),
      {
        bytesRead: l
      } = await i.read(a, 0, s + 1, 0),
      c = l > s;
    return {
      contents: a.subarray(0, Math.min(l, s)).toString(r === "base64" ? "base64" : "utf-8"),
      absPath: o,
      ...(c && {
        truncated: c
      }),
      ...(r === "base64" && {
        encoding: r
      })
    };
  } finally {
    await i.close();
  }
}
var Kfc,
  ycm = 1000000 /* 1e6 */,
  REMOTE_READ_MAX_BYTES = 10000000 /* 1e7 */;