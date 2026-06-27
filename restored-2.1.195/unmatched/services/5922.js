// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module njc
// matched 2.1.88 source: node_modules/jsonwebtoken/verify.js
// class=new  jaccard=0.0387  score=0.1903  fileCov=0.0464
// note: nearest: node_modules/jsonwebtoken/verify.js (0.0387); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module njc] deps: @growthbook/growthbook/dist/esm/util.mjs, pkce-challenge/dist/index.node.js, node-forge/lib/rsa.js
tjc = DDm;
class X7e {
  constructor(e) {
    if (!(e instanceof Uint8Array)) throw TypeError("payload must be an instance of Uint8Array");
    this._payload = e;
  }
  setProtectedHeader(e) {
    if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
    return this._protectedHeader = e, this;
  }
  setUnprotectedHeader(e) {
    if (this._unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
    return this._unprotectedHeader = e, this;
  }
  async sign(e, t) {
    if (!this._protectedHeader && !this._unprotectedHeader) throw new wh("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
    if (!Jme(this._protectedHeader, this._unprotectedHeader)) throw new wh("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    let n = {
        ...this._protectedHeader,
        ...this._unprotectedHeader
      },
      r = Zme(wh, new Map([["b64", true]]), t === null || t === void 0 ? void 0 : t.crit, this._protectedHeader, n),
      o = true;
    if (r.has("b64")) {
      if (o = this._protectedHeader.b64, typeof o !== "boolean") throw new wh('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
    let {
      alg: s
    } = n;
    if (typeof s !== "string" || !s) throw new wh('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    XNe(s, e, "sign");
    let i = this._payload;
    if (o) i = IS.encode(xS(i));
    let a;
    if (this._protectedHeader) a = IS.encode(xS(JSON.stringify(this._protectedHeader)));else a = IS.encode("");
    let l = oB(a, IS.encode("."), i),
      c = await tjc(s, e, l),
      u = {
        signature: xS(c),
        payload: ""
      };
    if (o) u.payload = fx.decode(i);
    if (this._unprotectedHeader) u.header = this._unprotectedHeader;
    if (this._protectedHeader) u.protected = fx.decode(a);
    return u;
  }
}