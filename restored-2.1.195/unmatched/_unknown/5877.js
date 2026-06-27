// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ynn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ynn = E(() => {
  rB();
  VNe = Ru.getRandomValues.bind(Ru);
});
function MXo(e) {
  switch (e) {
    case "A128GCM":
    case "A128GCMKW":
    case "A192GCM":
    case "A192GCMKW":
    case "A256GCM":
    case "A256GCMKW":
      return 96;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return 128;
    default:
      throw new od(`Unsupported JWE Algorithm: ${e}`);
  }
}
var qmr = e => VNe(new Uint8Array(MXo(e) >> 3));