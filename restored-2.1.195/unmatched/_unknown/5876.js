// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wm
// matched 2.1.88 source: src/hooks/toolPermission/PermissionContext.ts
// class=new  jaccard=0.0153  score=0.0593  fileCov=0.0201
// note: nearest: src/hooks/toolPermission/PermissionContext.ts (0.0153); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wm = E(() => {
  oD = class oD extends Error {
    static get code() {
      return "ERR_JOSE_GENERIC";
    }
    constructor(e) {
      var t;
      super(e);
      this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, (t = Error.captureStackTrace) === null || t === void 0 || t.call(Error, this, this.constructor);
    }
  };
  iB = class iB extends oD {
    static get code() {
      return "ERR_JWT_CLAIM_VALIDATION_FAILED";
    }
    constructor(e, t = "unspecified", n = "unspecified") {
      super(e);
      this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = t, this.reason = n;
    }
  };
  hnn = class hnn extends oD {
    static get code() {
      return "ERR_JWT_EXPIRED";
    }
    constructor(e, t = "unspecified", n = "unspecified") {
      super(e);
      this.code = "ERR_JWT_EXPIRED", this.claim = t, this.reason = n;
    }
  };
  z7e = class z7e extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
    }
    static get code() {
      return "ERR_JOSE_ALG_NOT_ALLOWED";
    }
  };
  od = class od extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JOSE_NOT_SUPPORTED";
    }
    static get code() {
      return "ERR_JOSE_NOT_SUPPORTED";
    }
  };
  qNe = class qNe extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWE_DECRYPTION_FAILED", this.message = "decryption operation failed";
    }
    static get code() {
      return "ERR_JWE_DECRYPTION_FAILED";
    }
  };
  n2c = class n2c extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWE_DECOMPRESSION_FAILED", this.message = "decompression operation failed";
    }
    static get code() {
      return "ERR_JWE_DECOMPRESSION_FAILED";
    }
  };
  Wa = class Wa extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWE_INVALID";
    }
    static get code() {
      return "ERR_JWE_INVALID";
    }
  };
  wh = class wh extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWS_INVALID";
    }
    static get code() {
      return "ERR_JWS_INVALID";
    }
  };
  sD = class sD extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWT_INVALID";
    }
    static get code() {
      return "ERR_JWT_INVALID";
    }
  };
  jmr = class jmr extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWK_INVALID";
    }
    static get code() {
      return "ERR_JWK_INVALID";
    }
  };
  K7e = class K7e extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWKS_INVALID";
    }
    static get code() {
      return "ERR_JWKS_INVALID";
    }
  };
  Dvt = class Dvt extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWKS_NO_MATCHING_KEY", this.message = "no applicable key found in the JSON Web Key Set";
    }
    static get code() {
      return "ERR_JWKS_NO_MATCHING_KEY";
    }
  };
  Gmr = class Gmr extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS", this.message = "multiple matching keys found in the JSON Web Key Set";
    }
    static get code() {
      return "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    }
  };
  Wmr = class Wmr extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWKS_TIMEOUT", this.message = "request timed out";
    }
    static get code() {
      return "ERR_JWKS_TIMEOUT";
    }
  };
  Pvt = class Pvt extends oD {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED", this.message = "signature verification failed";
    }
    static get code() {
      return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    }
  };
});
var VNe;