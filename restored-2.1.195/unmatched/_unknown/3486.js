// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Ba
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $Ba = Q(l3n => {
  Object.defineProperty(l3n, "__esModule", {
    value: true
  });
  l3n.MultiMetricStorage = void 0;
  class MBa {
    _backingStorages;
    constructor(e) {
      this._backingStorages = e;
    }
    record(e, t, n, r) {
      this._backingStorages.forEach(o => {
        o.record(e, t, n, r);
      });
    }
  }
  l3n.MultiMetricStorage = MBa;
});