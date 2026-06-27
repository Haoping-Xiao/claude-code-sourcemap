// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G5l
// matched 2.1.88 source: src/components/LogoV2/EmergencyTip.tsx
// class=modified  jaccard=0.3006  score=0.5196  fileCov=0.4164
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module G5l] deps: hooks/useTerminalSize.ts, undici/lib/mock/mock-agent.js
((F5l = R(lt(), 1)), (QKe = R(se(), 1)));
function EmergencyTip() {
  let tip = zXt.useMemo(t2o, []),
    t = zXt.useMemo(() => Dt().lastShownEmergencyTip, []),
    n = n2o(tip) && (tip.persistent || tip.tip !== t);
  if (
    (zXt.useEffect(() => {
      if (n && !tip.persistent)
        gn((r) => {
          if (r.lastShownEmergencyTip === tip.tip) return r;
          return {
            ...r,
            lastShownEmergencyTip: tip.tip,
          };
        });
    }, [n, tip.tip, tip.persistent]),
    !n)
  )
    return null;
  return e2o.jsx(U, {
    paddingLeft: 2,
    flexDirection: "column",
    children: e2o.jsx(w, {
      ...(tip.color === "warning"
        ? {
            color: "warning",
          }
        : tip.color === "error"
          ? {
              color: "error",
            }
          : {
              dimColor: true,
            }),
      children: tip.tip,
    }),
  });
}
function t2o() {
  return zx(CONFIG_NAME, _4f);
}
function n2o(e) {
  if (!e.tip) return false;
  if (!Array.isArray(e.taints) || e.taints.length === 0) return true;
  return e.taints.some(T9);
}
var zXt,
  e2o,
  CONFIG_NAME = "tengu-top-of-feed-tip",
  _4f;
