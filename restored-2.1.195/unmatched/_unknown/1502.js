// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mii
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Mii = Q(gHn => {
  Object.defineProperty(gHn, "__esModule", {
    value: true
  });
  gHn.Sha256 = void 0;
  var Pii = $jr(),
    mHn = Ojr(),
    fHn = Tii(),
    Bjr = Dii(),
    Vfd = function () {
      function e(t) {
        this.secret = t, this.hash = new fHn.RawSha256(), this.reset();
      }
      return e.prototype.update = function (t) {
        if ((0, Bjr.isEmptyData)(t) || this.error) return;
        try {
          this.hash.update((0, Bjr.convertToBuffer)(t));
        } catch (n) {
          this.error = n;
        }
      }, e.prototype.digestSync = function () {
        if (this.error) throw this.error;
        if (this.outer) {
          if (!this.outer.finished) this.outer.update(this.hash.digest());
          return this.outer.digest();
        }
        return this.hash.digest();
      }, e.prototype.digest = function () {
        return Pii.__awaiter(this, void 0, void 0, function () {
          return Pii.__generator(this, function (t) {
            return [2, this.digestSync()];
          });
        });
      }, e.prototype.reset = function () {
        if (this.hash = new fHn.RawSha256(), this.secret) {
          this.outer = new fHn.RawSha256();
          var t = zfd(this.secret),
            n = new Uint8Array(mHn.BLOCK_SIZE);
          n.set(t);
          for (var r = 0; r < mHn.BLOCK_SIZE; r++) t[r] ^= 54, n[r] ^= 92;
          this.hash.update(t), this.outer.update(n);
          for (var r = 0; r < t.byteLength; r++) t[r] = 0;
        }
      }, e;
    }();
  gHn.Sha256 = Vfd;
  function zfd(e) {
    var t = (0, Bjr.convertToBuffer)(e);
    if (t.byteLength > mHn.BLOCK_SIZE) {
      var n = new fHn.RawSha256();
      n.update(t), t = n.digest();
    }
    var r = new Uint8Array(mHn.BLOCK_SIZE);
    return r.set(t), r;
  }
});