// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yur
// matched 2.1.88 source: src/services/oauth/crypto.ts
// class=modified  jaccard=0.3514  score=0.4514  fileCov=0.6132
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var yur = E(() => {
  ft();
  kt();
  co();
  Zf();
  Ire();
  Ryt();
  Vv();
  Il();
  Cp();
  p6e();
  sp();
  Dfc();
  xW();
  _Tt();
  co();
  I1();
  CIo();
  Rze();
  q8t();
  X4();
  uJt();
  yYt();
  Gfc();
  hur = require("crypto");
});
var Yfc = {};
_t(Yfc, {
  readFileForRemote: () => readFileForRemote,
  REMOTE_READ_MAX_BYTES: () => REMOTE_READ_MAX_BYTES,
});
async function readFileForRemote(e, t, n, r = "utf-8") {
  let o = ds(e);
  for (let a of i_(o)) if (!DOn(a, n, "read").allowed) throw Error(`read denied: ${e}`);
  let s = Math.min(t && t > 0 ? t : ycm, REMOTE_READ_MAX_BYTES),
    i = await Kfc.open(o, "r");
  try {
    let a = Buffer.alloc(s + 1),
      { bytesRead: l } = await i.read(a, 0, s + 1, 0),
      c = l > s;
    return {
      contents: a.subarray(0, Math.min(l, s)).toString(r === "base64" ? "base64" : "utf-8"),
      absPath: o,
      ...(c && {
        truncated: c,
      }),
      ...(r === "base64" && {
        encoding: r,
      }),
    };
  } finally {
    await i.close();
  }
}
var Kfc,
  ycm = 1e6,
  REMOTE_READ_MAX_BYTES = 1e7;
