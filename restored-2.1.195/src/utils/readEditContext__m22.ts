// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ken
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=modified (alt of src/utils/readEditContext.ts)  jaccard=0.4356  score=1  fileCov=0.4356
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ken = E(() => {
  ft();
  PPo();
  HSc();
  je();
  Azo();
  fn();
  At();
  vn();
  BJ();
  yrr();
  _a();
  ((npr = require("fs/promises")), (Tzo = require("path")));
});
function USc(e) {
  let t = Sd();
  BSc.useEffect(() => {
    if (da()) return;
    let n = Lg(),
      r = rNt();
    if (n.lastGracefulShutdown !== false || n.lastVersionBase !== r)
      pH((s) => ({
        ...s,
        lastGracefulShutdown: false,
        lastVersionBase: r,
      }));
    let o = () => {
      if (BSn()) {
        let s = t ? "Cost: " : "";
        process.stdout.write(
          `
` +
            s +
            hMe() +
            `
`,
        );
      }
      P9t(e?.());
    };
    return (
      process.on("exit", o),
      () => {
        if (HT()) P9t(e?.());
        process.off("exit", o);
      }
    );
  }, [t]);
}
var BSc;
