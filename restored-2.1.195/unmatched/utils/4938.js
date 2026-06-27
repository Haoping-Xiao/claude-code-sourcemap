// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P2o
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var P2o = E(() => {
  For = {
    add() {},
    remove() {},
    clear() {}
  };
});
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