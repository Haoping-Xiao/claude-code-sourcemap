// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module x8s
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var x8s = E(() => {
  Xbn();
  JNr();
  Qbn();
  tod = function () {
    function e() {
      this.crc32 = new M2e();
    }
    return e.prototype.update = function (t) {
      if (KNr(t)) return;
      this.crc32.update(zNr(t));
    }, e.prototype.digest = function () {
      return S8s(this, void 0, void 0, function () {
        return E8s(this, function (t) {
          return [2, YNr(this.crc32.digest())];
        });
      });
    }, e.prototype.reset = function () {
      this.crc32 = new M2e();
    }, e;
  }();
});
var M2e, nod, rod;