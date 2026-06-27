// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NFa
// matched 2.1.88 source: src/services/oauth/crypto.ts
// class=modified (alt of src/services/oauth/crypto.ts)  jaccard=0.332  score=1  fileCov=0.332
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var NFa = Q((I__, OFa) => {
  OFa.exports = Nde;
  var $Fa = N3n();
  (Nde.prototype = Object.create($Fa.prototype)).constructor = Nde;
  var iPe = Ode();
  function Nde() {
    $Fa.call(this);
  }
  Nde._configure = function () {
    ((Nde.alloc = iPe._Buffer_allocUnsafe),
      (Nde.writeBytesBuffer =
        iPe.Buffer &&
        iPe.Buffer.prototype instanceof Uint8Array &&
        iPe.Buffer.prototype.set.name === "set"
          ? function (t, n, r) {
              n.set(t, r);
            }
          : function (t, n, r) {
              if (t.copy) t.copy(n, r, 0, t.length);
              else for (var o = 0; o < t.length; ) n[r++] = t[o++];
            }));
  };
  Nde.prototype.bytes = function (t) {
    if (iPe.isString(t)) t = iPe._Buffer_from(t, "base64");
    var n = t.length >>> 0;
    if ((this.uint32(n), n)) this._push(Nde.writeBytesBuffer, n, t);
    return this;
  };
  function r1p(e, t, n) {
    if (e.length < 40) iPe.utf8.write(e, t, n);
    else if (t.utf8Write) t.utf8Write(e, n);
    else t.write(e, n);
  }
  Nde.prototype.string = function (t) {
    var n = iPe.Buffer.byteLength(t);
    if ((this.uint32(n), n)) this._push(r1p, n, t);
    return this;
  };
  Nde._configure();
});
