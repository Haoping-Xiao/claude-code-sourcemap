// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C0n
// matched 2.1.88 source: src/ink/events/emitter.ts
// class=modified  jaccard=0.7496  score=0.8671  fileCov=0.8469
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module C0n]
TBi = require("events");
F3e = class F3e extends TBi.EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(0);
  }
  emit(e, ...t) {
    if (e === "error") return super.emit(e, ...t);
    let n = this.rawListeners(e);
    if (n.length === 0) return false;
    let r = t[0] instanceof Qte ? t[0] : null;
    for (let o of n) if ((o.apply(this, t), r?.didStopImmediatePropagation())) break;
    return true;
  }
};
var vBi, wBi, B_e;
