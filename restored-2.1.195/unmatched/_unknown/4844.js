// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JUo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JUo = Q((nzS, a3l) => {
  var YUo = [];
  (function () {
    for (let e = 0; e < 256; e++) {
      let t = e;
      for (let n = 0; n < 8; n++) if (t & 1) t = 3988292384 ^ t >>> 1;else t = t >>> 1;
      YUo[e] = t;
    }
  })();
  var XUo = a3l.exports = function () {
    this._crc = -1;
  };
  XUo.prototype.write = function (e) {
    for (let t = 0; t < e.length; t++) this._crc = YUo[(this._crc ^ e[t]) & 255] ^ this._crc >>> 8;
    return true;
  };
  XUo.prototype.crc32 = function () {
    return this._crc ^ -1;
  };
  XUo.crc32 = function (e) {
    let t = -1;
    for (let n = 0; n < e.length; n++) t = YUo[(t ^ e[n]) & 255] ^ t >>> 8;
    return t ^ -1;
  };
});