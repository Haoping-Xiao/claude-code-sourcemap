// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U5l
// matched 2.1.88 source: src/components/LogoV2/EmergencyTip.tsx
// class=partial  jaccard=0.1521  score=0.4061  fileCov=0.1955
// note: low-confidence suggestion: src/components/LogoV2/EmergencyTip.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var U5l = E(() => {
  HN();
  Ao();
  Cnr();
  Hor();
  O5l = R(rt(), 1), B5l = R(se(), 1);
});
function j5l(e) {
  let t = F5l.c(4),
    {
      messages: n
    } = e;
  if (n.length === 0) return null;
  let r;
  if (t[0] !== n) r = n.map(h4f), t[0] = n, t[1] = r;else r = t[1];
  let o;
  if (t[2] !== r) o = QKe.jsx(U, {
    flexDirection: "column",
    children: r
  }), t[2] = r, t[3] = o;else o = t[3];
  return o;
}
function h4f(e) {
  return QKe.jsxs(U, {
    flexDirection: "row",
    children: [QKe.jsx(Hs, {
      status: "warning",
      withSpace: !0
    }), QKe.jsxs(w, {
      color: "warning",
      children: [e, QKe.jsx(w, {
        dimColor: !0,
        children: " \xB7 run claude install to repair"
      })]
    })]
  }, e);
}
var F5l, QKe;