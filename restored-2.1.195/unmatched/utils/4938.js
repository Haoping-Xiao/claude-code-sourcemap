// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P2o
// matched 2.1.88 source: node_modules/@growthbook/growthbook/dist/esm/core.mjs
// class=new  jaccard=0.0092  score=0.3783  fileCov=0.0094
// note: nearest: node_modules/@growthbook/growthbook/dist/esm/core.mjs (0.0092); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module P2o]
For = {
  add() {},
  remove() {},
  clear() {}
};
function oYe(e, t) {
  return {
    assign(n) {
      let r = e().teammateColors,
        o = r.assignments.get(n);
      if (o) return o;
      let s = Ky[r.index % Ky.length];
      return t(i => {
        if (i.teammateColors.assignments.has(n)) return i;
        let a = new Map(i.teammateColors.assignments);
        return a.set(n, s), {
          ...i,
          teammateColors: {
            assignments: a,
            index: i.teammateColors.index + 1
          }
        };
      }), s;
    },
    get(n) {
      return e().teammateColors.assignments.get(n);
    }
  };
}
var jor;