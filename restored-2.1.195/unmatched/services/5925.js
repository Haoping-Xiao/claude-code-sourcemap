// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ojc
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.012  score=0.4878  fileCov=0.0122
// note: nearest: node_modules/react/cjs/react.production.js (0.012); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
class J7e {
  constructor(e) {
    if (!eb(e)) throw TypeError("JWT Claims Set MUST be an object");
    this._payload = e;
  }
  setIssuer(e) {
    return this._payload = {
      ...this._payload,
      iss: e
    }, this;
  }
  setSubject(e) {
    return this._payload = {
      ...this._payload,
      sub: e
    }, this;
  }
  setAudience(e) {
    return this._payload = {
      ...this._payload,
      aud: e
    }, this;
  }
  setJti(e) {
    return this._payload = {
      ...this._payload,
      jti: e
    }, this;
  }
  setNotBefore(e) {
    if (typeof e === "number") this._payload = {
      ...this._payload,
      nbf: e
    };else this._payload = {
      ...this._payload,
      nbf: jvt(new Date()) + Gvt(e)
    };
    return this;
  }
  setExpirationTime(e) {
    if (typeof e === "number") this._payload = {
      ...this._payload,
      exp: e
    };else this._payload = {
      ...this._payload,
      exp: jvt(new Date()) + Gvt(e)
    };
    return this;
  }
  setIssuedAt(e) {
    if (typeof e === "undefined") this._payload = {
      ...this._payload,
      iat: jvt(new Date())
    };else this._payload = {
      ...this._payload,
      iat: e
    };
    return this;
  }
}