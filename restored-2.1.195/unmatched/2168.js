// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f$i
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var f$i = E(() => {
  zxn();
});
class Yxn {
  getLogger(e, t, n) {
    var r;
    return (r = this._getDelegateLogger(e, t, n)) !== null && r !== void 0 ? r : new K6r(this, e, t, n);
  }
  _getDelegate() {
    var e;
    return (e = this._delegate) !== null && e !== void 0 ? e : Kxn;
  }
  _setDelegate(e) {
    this._delegate = e;
  }
  _getDelegateLogger(e, t, n) {
    var r;
    return (r = this._delegate) === null || r === void 0 ? void 0 : r.getLogger(e, t, n);
  }
}