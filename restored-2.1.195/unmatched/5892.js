// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VXo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VXo = E(() => {
  _2c();
  jXo();
  rB();
  iie();
});
function Snn(e) {
  switch (e) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new od(`Unsupported JWE Algorithm: ${e}`);
  }
}
var Qme = e => VNe(new Uint8Array(Snn(e) >> 3));