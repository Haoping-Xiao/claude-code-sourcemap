// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wBn
// matched 2.1.88 source: node_modules/@inquirer/core/dist/esm/lib/use-keypress.mjs
// class=partial  jaccard=0.2359  score=1  fileCov=0.2359
// note: low-confidence suggestion: node_modules/@inquirer/core/dist/esm/lib/use-keypress.mjs; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wBn = E(() => {
  ABn();
});
function j5e(e) {
  let t = DLe(e);
  t.current = e, U5e(n => {
    let r = !1,
      o = hco((s, i) => {
        if (r) return;
        t.current(i, n);
      });
    return n.input.on("keypress", o), () => {
      r = !0, n.input.removeListener("keypress", o);
    };
  }, []);
}