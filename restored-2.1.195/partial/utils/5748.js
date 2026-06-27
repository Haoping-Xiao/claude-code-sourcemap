// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tPc
// matched 2.1.88 source: src/hooks/notifs/useSettingsErrors.tsx
// class=partial  jaccard=0.1936  score=0.6234  fileCov=0.2192
// note: low-confidence suggestion: src/hooks/notifs/useSettingsErrors.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tPc] deps: Ed, Un
ZDc = R(rt(), 1);
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