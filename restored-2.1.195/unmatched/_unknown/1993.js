// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oTi
// matched 2.1.88 source: node_modules/gtoken/build/src/index.js
// class=new  jaccard=0.0594  score=1  fileCov=0.0594
// note: nearest: node_modules/gtoken/build/src/index.js (0.0594); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var oTi = Q(Kwn => {
  Object.defineProperty(Kwn, "__esModule", {
    value: true
  });
  Kwn.TokenHandler = void 0;
  var BId = KHi(),
    UId = kVr();
  class rTi {
    token;
    tokenExpiresAt;
    inFlightRequest;
    tokenOptions;
    constructor(e) {
      this.tokenOptions = e;
    }
    async processCredentials() {
      if (!this.tokenOptions.key && !this.tokenOptions.keyFile) throw Error("No key or keyFile set.");
      if (!this.tokenOptions.key && this.tokenOptions.keyFile) {
        let e = await (0, UId.getCredentials)(this.tokenOptions.keyFile);
        this.tokenOptions.key = e.privateKey, this.tokenOptions.email = e.clientEmail;
      }
    }
    isTokenExpiring() {
      if (!this.token || !this.tokenExpiresAt) return true;
      let e = new Date().getTime(),
        t = this.tokenOptions.eagerRefreshThresholdMillis ?? 0;
      return this.tokenExpiresAt <= e + t;
    }
    hasExpired() {
      let e = new Date().getTime();
      if (this.token && this.tokenExpiresAt) return new Date().getTime() >= this.tokenExpiresAt;
      return true;
    }
    async getToken(e) {
      if (await this.processCredentials(), this.inFlightRequest && !e) return this.inFlightRequest;
      if (this.token && !this.isTokenExpiring() && !e) return this.token;
      try {
        this.inFlightRequest = (0, BId.getToken)(this.tokenOptions);
        let t = await this.inFlightRequest;
        return this.token = t, this.tokenExpiresAt = new Date().getTime() + (t.expires_in ?? 0) * 1000, t;
      } finally {
        this.inFlightRequest = void 0;
      }
    }
  }
  Kwn.TokenHandler = rTi;
});