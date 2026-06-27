// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mBl
// matched 2.1.88 source: src/utils/file.ts
// class=new  jaccard=0.0243  score=1  fileCov=0.0243
// note: nearest: src/utils/file.ts (0.0243); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mBl] deps: iu, ft, O0, Ye, ps, Uh, MM, Un, kt, kPo, U7n, uo, M7, vy, dC, fn, oc, es, uBl, dr, sr, mE, Xce
dBl = R(lt(), 1), pBl = require("fs/promises"), JNo = require("path"), hz = R(rt(), 1), JQ = R(se(), 1);
function yBl(e) {
  let t = gBl.homedir(),
    n = $t(),
    r = e.startsWith(t) ? "~" + e.slice(t.length) : null,
    o = e.startsWith(n) ? "./" + hBl.relative(n, e) : null;
  if (r && o) return r.length <= o.length ? r : o;
  return r || o || e;
}
var EOf, gBl, hBl, _Bl;