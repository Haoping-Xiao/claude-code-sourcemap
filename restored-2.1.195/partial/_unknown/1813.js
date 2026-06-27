// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Iyi
// matched 2.1.88 source: node_modules/jws/lib/sign-stream.js
// class=partial  jaccard=0.1917  score=1  fileCov=0.1917
// note: low-confidence suggestion: node_modules/jws/lib/sign-stream.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Iyi = Q((ukh, Cyi) => {
  var cSd = iot().Buffer,
    Hyi = a5r(),
    uSd = m5r(),
    dSd = require("stream"),
    Tyi = g5r(),
    h5r = require("util");
  function vyi(e, t) {
    return cSd.from(e, t).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function pSd(e, t, n) {
    n = n || "utf8";
    var r = vyi(Tyi(e), "binary"),
      o = vyi(Tyi(t), n);
    return h5r.format("%s.%s", r, o);
  }
  function wyi(e) {
    var {
        header: t,
        payload: n
      } = e,
      r = e.secret || e.privateKey,
      o = e.encoding,
      s = uSd(t.alg),
      i = pSd(t, n, o),
      a = s.sign(i, r);
    return h5r.format("%s.%s", i, a);
  }
  function Wvn(e) {
    var t = e.secret;
    if (t = t == null ? e.privateKey : t, t = t == null ? e.key : t, /^hs/i.test(e.header.alg) === true && t == null) throw TypeError("secret must be a string or buffer or a KeyObject");
    var n = new Hyi(t);
    this.readable = true, this.header = e.header, this.encoding = e.encoding, this.secret = this.privateKey = this.key = n, this.payload = new Hyi(e.payload), this.secret.once("close", function () {
      if (!this.payload.writable && this.readable) this.sign();
    }.bind(this)), this.payload.once("close", function () {
      if (!this.secret.writable && this.readable) this.sign();
    }.bind(this));
  }
  h5r.inherits(Wvn, dSd);
  Wvn.prototype.sign = function () {
    try {
      var t = wyi({
        header: this.header,
        payload: this.payload.buffer,
        secret: this.secret.buffer,
        encoding: this.encoding
      });
      return this.emit("done", t), this.emit("data", t), this.emit("end"), this.readable = false, t;
    } catch (n) {
      this.readable = false, this.emit("error", n), this.emit("close");
    }
  };
  Wvn.sign = wyi;
  Cyi.exports = Wvn;
});