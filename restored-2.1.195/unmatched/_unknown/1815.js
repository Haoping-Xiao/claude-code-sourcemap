// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uot
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uot = Q($xe => {
  var Byi = Iyi(),
    qvn = Nyi(),
    ESd = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"];
  $xe.ALGORITHMS = ESd;
  $xe.sign = Byi.sign;
  $xe.verify = qvn.verify;
  $xe.decode = qvn.decode;
  $xe.isValid = qvn.isValid;
  $xe.createSign = function (t) {
    return new Byi(t);
  };
  $xe.createVerify = function (t) {
    return new qvn(t);
  };
});