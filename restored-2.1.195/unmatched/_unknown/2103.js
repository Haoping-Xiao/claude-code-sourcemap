// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aIi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aIi = Q(txn => {
  Object.defineProperty(txn, "__esModule", {
    value: true
  });
  txn.AnchoredClock = void 0;
  class iIi {
    _monotonicClock;
    _epochMillis;
    _performanceMillis;
    constructor(e, t) {
      this._monotonicClock = t, this._epochMillis = e.now(), this._performanceMillis = t.now();
    }
    now() {
      let e = this._monotonicClock.now() - this._performanceMillis;
      return this._epochMillis + e;
    }
  }
  txn.AnchoredClock = iIi;
});