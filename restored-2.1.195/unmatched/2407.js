// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YGi
// class=new  (no 2.1.88 match)
// note: 0 renamed
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
        bubbles: !0,
        cancelable: !0
      });
      this.deltaY = e, this.deltaX = t.deltaX ?? 0, this.ctrl = t.ctrl ?? !1, this.shift = t.shift ?? !1, this.meta = t.meta ?? !1;
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
      visible: !0
    }
  };
}