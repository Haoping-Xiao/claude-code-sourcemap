// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tjo
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0039  score=0.3108  fileCov=0.004
// note: nearest: src/screens/REPL.tsx (0.0039); dir inferred from dep-graph -> components; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call, Teleport
// [unwrapped __esm module Tjo] deps: kt, l6l, Ye, ps, rlt, Ko, d6l, EC
p6l = R(lt(), 1), f6l = R(rt(), 1), qq = R(se(), 1);
var _6l = {};
function Teleport(e) {
  let t = g6l.c(16),
    {
      onExit: n,
      context: r
    } = e,
    o = Dc(),
    s;
  if (t[0] !== o) s = () => Boolean(o.getState().replBridgeSessionId), t[0] = o, t[1] = s;else s = t[1];
  let [i] = h6l.useState(s),
    a;
  if (t[6] !== r || t[7] !== n) a = d => {
    r.applyMessageOp({
      type: "replace-all",
      messages: d.log
    }), n("Session resumed successfully", {
      display: "system"
    });
  }, t[6] = r, t[7] = n, t[8] = a;else a = t[8];
  let l, c;
  if (t[9] !== n) l = () => {
    n("Teleport cancelled", {
      display: "system"
    });
  }, c = (d, p) => {
    n(d, {
      display: "system"
    });
  }, t[9] = n, t[10] = l, t[11] = c;else l = t[10], c = t[11];
  let u;
  if (t[12] !== a || t[13] !== l || t[14] !== c) u = vjo.jsx(Hjo, {
    onComplete: a,
    onCancel: l,
    onError: c,
    isEmbedded: true,
    source: "localCommand"
  }), t[12] = a, t[13] = l, t[14] = c, t[15] = u;else u = t[15];
  return u;
}
var g6l,
  h6l,
  vjo,
  call = async (e, t) => vjo.jsx(Teleport, {
    onExit: e,
    context: t
  });