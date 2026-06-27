// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ken
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0015  score=0.425  fileCov=0.0015
// note: nearest: src/screens/REPL.tsx (0.0015); dir inferred from dep-graph -> utils; 0 renamed
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
  npr = require("fs/promises"), Tzo = require("path");
});
function USc(e) {
  let t = Sd();
  BSc.useEffect(() => {
    if (da()) return;
    let n = Lg(),
      r = rNt();
    if (n.lastGracefulShutdown !== false || n.lastVersionBase !== r) pH(s => ({
      ...s,
      lastGracefulShutdown: false,
      lastVersionBase: r
    }));
    let o = () => {
      if (BSn()) {
        let s = t ? "Cost: " : "";
        process.stdout.write(`
` + s + hMe() + `
`);
      }
      P9t(e?.());
    };
    return process.on("exit", o), () => {
      if (HT()) P9t(e?.());
      process.off("exit", o);
    };
  }, [t]);
}
var BSc;