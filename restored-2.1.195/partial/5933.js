// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yjc
// matched 2.1.88 source: node_modules/lodash-es/isLength.js
// class=partial  jaccard=0.1186  score=0.1186  fileCov=1
// note: low-confidence suggestion: node_modules/lodash-es/isLength.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yjc = E(() => {
  mjc();
  wm();
  gJo();
  gjc = class gjc extends ugr {
    constructor(e, t) {
      super({
        keys: []
      });
      if (this._jwks = void 0, !(e instanceof URL)) throw TypeError("url must be an instance of URL");
      this._url = new URL(e.href), this._options = {
        agent: t === null || t === void 0 ? void 0 : t.agent,
        headers: t === null || t === void 0 ? void 0 : t.headers
      }, this._timeoutDuration = typeof (t === null || t === void 0 ? void 0 : t.timeoutDuration) === "number" ? t === null || t === void 0 ? void 0 : t.timeoutDuration : 5000, this._cooldownDuration = typeof (t === null || t === void 0 ? void 0 : t.cooldownDuration) === "number" ? t === null || t === void 0 ? void 0 : t.cooldownDuration : 30000, this._cacheMaxAge = typeof (t === null || t === void 0 ? void 0 : t.cacheMaxAge) === "number" ? t === null || t === void 0 ? void 0 : t.cacheMaxAge : 600000;
    }
    coolingDown() {
      return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cooldownDuration : !1;
    }
    fresh() {
      return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : !1;
    }
    async getKey(e, t) {
      if (!this._jwks || !this.fresh()) await this.reload();
      try {
        return await super.getKey(e, t);
      } catch (n) {
        if (n instanceof Dvt) {
          if (this.coolingDown() === !1) return await this.reload(), super.getKey(e, t);
        }
        throw n;
      }
    }
    async reload() {
      if (this._pendingFetch && NDm()) this._pendingFetch = void 0;
      this._pendingFetch || (this._pendingFetch = fjc(this._url, this._timeoutDuration, this._options).then(e => {
        if (!mJo(e)) throw new K7e("JSON Web Key Set malformed");
        this._jwks = {
          keys: e.keys
        }, this._jwksTimestamp = Date.now(), this._pendingFetch = void 0;
      }).catch(e => {
        throw this._pendingFetch = void 0, e;
      })), await this._pendingFetch;
    }
  };
});
var hJo;