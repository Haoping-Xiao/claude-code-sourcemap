// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nil
// matched 2.1.88 source: src/components/messages/UserPlanMessage.tsx
// class=partial  jaccard=0.198  score=0.4206  fileCov=0.2723
// note: low-confidence suggestion: src/components/messages/UserPlanMessage.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Nil = E(() => {
  cEe();
  Ye();
  co();
  ql();
  $il = R(lt(), 1), jMe = R(se(), 1);
});
function Kzn(e) {
  let t = Bil.c(5),
    {
      addMargin: n,
      planContent: r
    } = e,
    o = n ? 1 : 0,
    s;
  if (t[0] !== r) s = zzn.jsx(cA, {
    color: "planMode",
    title: "Plan to implement",
    children: zzn.jsx(zg, {
      children: r
    })
  }), t[0] = r, t[1] = s;else s = t[1];
  let i;
  if (t[2] !== o || t[3] !== s) i = zzn.jsx(U, {
    marginTop: o,
    children: s
  }), t[2] = o, t[3] = s, t[4] = i;else i = t[4];
  return i;
}
var Bil, zzn;