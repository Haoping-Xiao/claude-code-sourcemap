// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tPc
// matched 2.1.88 source: src/tools/ConfigTool/UI.tsx
// class=partial  jaccard=0.0822  score=0.1601  fileCov=0.1446
// note: low-confidence suggestion: src/tools/ConfigTool/UI.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tPc = E(() => {
  Ed();
  Un();
  ZDc = R(rt(), 1);
});
function oPc() {
  let {
    addNotification: e,
    removeNotification: t
  } = Li();
  rPc.useEffect(() => {
    let n = "",
      r = () => {
        let o = at("tengu_startup_notice", "");
        if (o === n) return;
        if (n = o, !o) {
          t(nPc);
          return;
        }
        e({
          key: nPc,
          text: o,
          color: "warning",
          priority: "high",
          timeoutMs: 30000,
          fold: (s, i) => i
        });
      };
    return r(), H7(r);
  }, [e, t]);
}
var rPc,
  nPc = "startup-notice";