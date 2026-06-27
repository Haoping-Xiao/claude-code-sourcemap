// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aBr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aBr = E(() => {
  N8s();
  nBr();
  eBr();
  B8s();
  U8s();
  F8s();
  j8s();
  G8s();
});
var W8s = () => {};
var q8s = () => e => async t => {
    let n = {
        ...t.input
      },
      r = await e(t),
      o = r.output;
    if (n.SessionId && o.SessionId == null) o.SessionId = n.SessionId;
    return r;
  },
  V8s;