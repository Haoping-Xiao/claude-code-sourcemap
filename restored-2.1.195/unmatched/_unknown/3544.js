// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zFa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zFa = Q((k__, VFa) => {
  VFa.exports = NVe;
  var qFa = U3n();
  (NVe.prototype = Object.create(qFa.prototype)).constructor = NVe;
  var WFa = Ode();
  function NVe(e) {
    qFa.call(this, e);
  }
  NVe._configure = function () {
    if (WFa.Buffer) NVe.prototype._slice = WFa.Buffer.prototype.slice;
  };
  NVe.prototype.string = function () {
    var t = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len));
  };
  NVe._configure();
});