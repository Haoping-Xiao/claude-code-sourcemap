// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kP
// matched 2.1.88 source: src/components/design-system/Tabs.tsx
// class=modified  jaccard=0.1174  score=0.5196  fileCov=0.1317
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kP] deps: fH, _i, wOe, $Ge, $Ln, GLn, Tc, Ye, ps, Coe
((v7t = R(lt(), 1)),
  (FL = R(rt(), 1)),
  (GN = R(se(), 1)),
  (itr = FL.createContext({
    selectedTab: void 0,
    width: void 0,
    headerFocused: false,
    focusHeader: () => {},
    blurHeader: () => {},
    registerOptIn: () => () => {},
  })));
function aEt(e) {
  switch (e) {
    case "hipaa":
      return "HIPAA";
    case "zdr":
      return "ZDR (Zero Data Retention)";
    default:
      return (
        T(`Unknown compliance_taint '${e}' from policyLimits`, {
          level: "warn",
        }),
        e
      );
  }
}
