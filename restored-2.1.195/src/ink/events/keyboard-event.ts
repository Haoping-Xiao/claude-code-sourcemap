// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iJr
// matched 2.1.88 source: src/ink/events/keyboard-event.ts
// class=modified  jaccard=0.3244  score=1  fileCov=0.3244
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var iJr = E(() => {
  qit();
  sat = class sat extends yne {
    key;
    name;
    sequence;
    ctrl;
    shift;
    meta;
    superKey;
    fn;
    constructor(e) {
      super("keydown", {
        bubbles: true,
        cancelable: true,
      });
      ((this.key = HGd(e)),
        (this.name = e.name ?? ""),
        (this.sequence = e.sequence ?? ""),
        (this.ctrl = e.ctrl),
        (this.shift = e.shift),
        (this.meta = e.meta || e.option),
        (this.superKey = e.super),
        (this.fn = e.fn));
    }
  };
});
var J_e;
