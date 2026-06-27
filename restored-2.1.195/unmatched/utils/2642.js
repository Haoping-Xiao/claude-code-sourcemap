// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eto
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eto = Q((tgy, u7i) => {
  var pWe = hm();
  m_();
  pWe.mgf = pWe.mgf || {};
  var wXd = u7i.exports = pWe.mgf.mgf1 = pWe.mgf1 = pWe.mgf1 || {};
  wXd.create = function (e) {
    var t = {
      generate: function (n, r) {
        var o = new pWe.util.ByteBuffer(),
          s = Math.ceil(r / e.digestLength);
        for (var i = 0; i < s; i++) {
          var a = new pWe.util.ByteBuffer();
          a.putInt32(i), e.start(), e.update(n + a.getBytes()), o.putBuffer(e.digest());
        }
        return o.truncate(o.length() - r), o.getBytes();
      }
    };
    return t;
  };
});