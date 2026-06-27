// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eIo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eIo = E(() => {
  Ye();
  R6();
  AN();
  Bil = R(lt(), 1), zzn = R(se(), 1);
});
function Wil() {
  return jil.useContext(Gil);
}
function qil(e) {
  let t = Uil.c(10),
    {
      isFirst: n,
      useBriefLayout: r,
      selectionHighlight: o,
      children: s
    } = e,
    i = r ? 0 : Yof,
    a = i * 2,
    l;
  if (t[0] !== n || t[1] !== o || t[2] !== a) l = {
    isQueued: !0,
    isFirst: n,
    paddingWidth: a,
    selectionHighlight: o
  }, t[0] = n, t[1] = o, t[2] = a, t[3] = l;else l = t[3];
  let c = l,
    u;
  if (t[4] !== s || t[5] !== i) u = tIo.jsx(U, {
    paddingX: i,
    children: s
  }), t[4] = s, t[5] = i, t[6] = u;else u = t[6];
  let d;
  if (t[7] !== u || t[8] !== c) d = tIo.jsx(Gil.Provider, {
    value: c,
    children: u
  }), t[7] = u, t[8] = c, t[9] = d;else d = t[9];
  return d;
}
var Uil,
  Fil,
  jil,
  tIo,
  Gil,
  Yof = 2;