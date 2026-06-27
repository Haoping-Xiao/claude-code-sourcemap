// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L_o
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var L_o = Q(h5t => {
  Object.defineProperty(h5t, "__esModule", {
    value: true
  });
  h5t.CIPHER_SUITES = void 0;
  h5t.getDefaultRootsData = XBp;
  var YBp = require("fs");
  h5t.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
  var Pja = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH,
    R_o = null;
  function XBp() {
    if (Pja) {
      if (R_o === null) R_o = YBp.readFileSync(Pja);
      return R_o;
    }
    return null;
  }
});