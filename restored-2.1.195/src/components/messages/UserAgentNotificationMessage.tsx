// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gzn
// matched 2.1.88 source: src/components/messages/UserAgentNotificationMessage.tsx
// class=modified  jaccard=0.3752  score=0.5656  fileCov=0.5271
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Gzn] deps: si, Xa, Nht, np, Ye, uo, i6e, YI, OI, Q8, gm, AN, ql, VCo, WCo, Bzn
((Qyt = R(lt(), 1)), (_il = R(rt(), 1)), (Eh = R(se(), 1)), (KCo = `</${DB}>`));
function Wof(e) {
  switch (e) {
    case "completed":
      return "success";
    case "failed":
      return "error";
    case "killed":
      return "warning";
    default:
      return "text";
  }
}
function Eil(e) {
  let t = Sil.c(19),
    { addMargin: n, param: r } = e,
    { text: o } = r,
    s;
  if (t[0] !== o) ((s = xl(o, "summary")), (t[0] = o), (t[1] = s));
  else s = t[1];
  let i = s;
  if (!i) return null;
  let a;
  if (t[2] !== o) {
    let b = xl(o, "status");
    ((a = Wof(b)), (t[2] = o), (t[3] = a));
  } else a = t[3];
  let l = a,
    c;
  if (t[4] !== o) ((c = xl(o, "duration_ms")), (t[4] = o), (t[5] = c));
  else c = t[5];
  let u = Number(c),
    d;
  if (t[6] !== u)
    ((d = Number.isFinite(u) && u > 0 ? ` \xB7 ${Yi(u)}` : null), (t[6] = u), (t[7] = d));
  else d = t[7];
  let p = d,
    f = n ? 1 : 0,
    m;
  if (t[8] !== l)
    ((m = Zyt.jsx(w, {
      color: l,
      children: gc,
    })),
      (t[8] = l),
      (t[9] = m));
  else m = t[9];
  let g;
  if (t[10] !== p)
    ((g =
      p &&
      Zyt.jsx(w, {
        dimColor: true,
        children: p,
      })),
      (t[10] = p),
      (t[11] = g));
  else g = t[11];
  let h;
  if (t[12] !== i || t[13] !== m || t[14] !== g)
    ((h = Zyt.jsxs(w, {
      children: [m, " ", i, g],
    })),
      (t[12] = i),
      (t[13] = m),
      (t[14] = g),
      (t[15] = h));
  else h = t[15];
  let y;
  if (t[16] !== f || t[17] !== h)
    ((y = Zyt.jsx(U, {
      marginTop: f,
      children: h,
    })),
      (t[16] = f),
      (t[17] = h),
      (t[18] = y));
  else y = t[18];
  return y;
}
var Sil, Zyt;
