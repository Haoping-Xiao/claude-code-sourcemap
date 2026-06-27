// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fui
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fui = Q(DHn => {
  Object.defineProperty(DHn, "__esModule", {
    value: true
  });
  DHn.AwsCrc32 = void 0;
  var dui = p4r(),
    m4r = f4r(),
    pui = PHn(),
    dmd = function () {
      function e() {
        this.crc32 = new pui.Crc32();
      }
      return e.prototype.update = function (t) {
        if ((0, m4r.isEmptyData)(t)) return;
        this.crc32.update((0, m4r.convertToBuffer)(t));
      }, e.prototype.digest = function () {
        return dui.__awaiter(this, void 0, void 0, function () {
          return dui.__generator(this, function (t) {
            return [2, (0, m4r.numToUint8)(this.crc32.digest())];
          });
        });
      }, e.prototype.reset = function () {
        this.crc32 = new pui.Crc32();
      }, e;
    }();
  DHn.AwsCrc32 = dmd;
});