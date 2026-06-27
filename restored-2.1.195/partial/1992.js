// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kVr
// matched 2.1.88 source: node_modules/gtoken/build/src/index.js
// class=partial  jaccard=0.1772  score=0.5651  fileCov=0.2051
// note: low-confidence suggestion: node_modules/gtoken/build/src/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kVr = Q(xVr => {
  Object.defineProperty(xVr, "__esModule", {
    value: !0
  });
  xVr.getCredentials = NId;
  var $Id = require("path"),
    JHi = require("fs"),
    OId = require("util"),
    zwn = XHi(),
    QHi = JHi.readFile ? (0, OId.promisify)(JHi.readFile) : async () => {
      throw new zwn.ErrorWithCode("use key rather than keyFile.", "MISSING_CREDENTIALS");
    },
    Vxe;
  (function (e) {
    e.JSON = ".json", e.DER = ".der", e.CRT = ".crt", e.PEM = ".pem", e.P12 = ".p12", e.PFX = ".pfx";
  })(Vxe || (Vxe = {}));
  class ZHi {
    keyFilePath;
    constructor(e) {
      this.keyFilePath = e;
    }
    async getCredentials() {
      let e = await QHi(this.keyFilePath, "utf8"),
        t;
      try {
        t = JSON.parse(e);
      } catch (o) {
        throw Error(`Invalid JSON key file: ${o.message}`);
      }
      let {
        private_key: n,
        client_email: r
      } = t;
      if (!n || !r) throw new zwn.ErrorWithCode("private_key and client_email are required.", "MISSING_CREDENTIALS");
      return {
        privateKey: n,
        clientEmail: r
      };
    }
  }
  class eTi {
    keyFilePath;
    constructor(e) {
      this.keyFilePath = e;
    }
    async getCredentials() {
      return {
        privateKey: await QHi(this.keyFilePath, "utf8")
      };
    }
  }
  class tTi {
    async getCredentials() {
      throw new zwn.ErrorWithCode("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
    }
  }
  class nTi {
    static create(e) {
      switch ($Id.extname(e)) {
        case Vxe.JSON:
          return new ZHi(e);
        case Vxe.DER:
        case Vxe.CRT:
        case Vxe.PEM:
          return new eTi(e);
        case Vxe.P12:
        case Vxe.PFX:
          return new tTi();
        default:
          throw new zwn.ErrorWithCode("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE");
      }
    }
  }
  async function NId(e) {
    return nTi.create(e).getCredentials();
  }
});