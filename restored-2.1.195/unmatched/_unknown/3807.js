// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R8a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var R8a = Q(qqn => {
  Object.defineProperty(qqn, "__esModule", {
    value: true
  });
  qqn.MultiMetricStorage = void 0;
  class k8a {
    _backingStorages;
    constructor(e) {
      this._backingStorages = e;
    }
    record(e, t, n, r) {
      let o = this._backingStorages;
      for (let s = 0; s < o.length; s++) o[s].record(e, t, n, r);
    }
  }
  qqn.MultiMetricStorage = k8a;
});