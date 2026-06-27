// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G5l
// matched 2.1.88 source: src/components/LogoV2/EmergencyTip.tsx
// class=modified  jaccard=0.4596  score=1  fileCov=0.4596
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var G5l = E(() => {
  Ye();
  gm();
  ((F5l = R(lt(), 1)), (QKe = R(se(), 1)));
});
function W5l() {
  let e = zXt.useMemo(t2o, []),
    t = zXt.useMemo(() => Dt().lastShownEmergencyTip, []),
    n = n2o(e) && (e.persistent || e.tip !== t);
  if (
    (zXt.useEffect(() => {
      if (n && !e.persistent)
        gn((r) => {
          if (r.lastShownEmergencyTip === e.tip) return r;
          return {
            ...r,
            lastShownEmergencyTip: e.tip,
          };
        });
    }, [n, e.tip, e.persistent]),
    !n)
  )
    return null;
  return e2o.jsx(U, {
    paddingLeft: 2,
    flexDirection: "column",
    children: e2o.jsx(w, {
      ...(e.color === "warning"
        ? {
            color: "warning",
          }
        : e.color === "error"
          ? {
              color: "error",
            }
          : {
              dimColor: true,
            }),
      children: e.tip,
    }),
  });
}
function t2o() {
  return zx(y4f, _4f);
}
function n2o(e) {
  if (!e.tip) return false;
  if (!Array.isArray(e.taints) || e.taints.length === 0) return true;
  return e.taints.some(T9);
}
var zXt,
  e2o,
  y4f = "tengu-top-of-feed-tip",
  _4f;
