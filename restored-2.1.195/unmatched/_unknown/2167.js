// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module z6r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var z6r = E(() => {
  zxn();
  Kxn = new p$i();
});
class K6r {
  constructor(e, t, n, r) {
    this._provider = e, this.name = t, this.version = n, this.options = r;
  }
  emit(e) {
    this._getLogger().emit(e);
  }
  _getLogger() {
    if (this._delegate) return this._delegate;
    let e = this._provider._getDelegateLogger(this.name, this.version, this.options);
    if (!e) return K1t;
    return this._delegate = e, this._delegate;
  }
}