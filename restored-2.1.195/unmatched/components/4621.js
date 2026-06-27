// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kP
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kP = E(() => {
  fH();
  _i();
  wOe();
  $Ge();
  $Ln();
  GLn();
  Tc();
  Ye();
  ps();
  Coe();
  v7t = R(lt(), 1), FL = R(rt(), 1), GN = R(se(), 1), itr = FL.createContext({
    selectedTab: void 0,
    width: void 0,
    headerFocused: false,
    focusHeader: () => {},
    blurHeader: () => {},
    registerOptIn: () => () => {}
  });
});
function aEt(e) {
  switch (e) {
    case "hipaa":
      return "HIPAA";
    case "zdr":
      return "ZDR (Zero Data Retention)";
    default:
      return T(`Unknown compliance_taint '${e}' from policyLimits`, {
        level: "warn"
      }), e;
  }
}