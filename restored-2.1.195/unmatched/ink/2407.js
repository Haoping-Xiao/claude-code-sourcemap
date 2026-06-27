// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YGi
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var YGi = E(() => {
  qit();
  aJr = class aJr extends yne {
    deltaY;
    deltaX;
    ctrl;
    shift;
    meta;
    constructor(e, t) {
      super("wheel", {
        bubbles: true,
        cancelable: true
      });
      this.deltaY = e, this.deltaX = t.deltaX ?? 0, this.ctrl = t.ctrl ?? false, this.shift = t.shift ?? false, this.meta = t.meta ?? false;
    }
  };
});
function u0e(e, t, n, r, o) {
  return {
    screen: Y7(0, 0, n, r, o),
    viewport: {
      width: t,
      height: e
    },
    cursor: {
      x: 0,
      y: 0,
      visible: true
    }
  };
}