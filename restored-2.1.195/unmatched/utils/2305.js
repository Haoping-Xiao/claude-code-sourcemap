// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HI
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HI = E(() => {
  p2i = class p2i extends Map {
    everMounted = !1;
    set(e, t) {
      return this.everMounted = !0, super.set(e, t);
    }
  };
  lFd = new p2i(), Cu = lFd;
});