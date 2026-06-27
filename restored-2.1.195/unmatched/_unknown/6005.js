// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RGc
// matched 2.1.88 source: node_modules/jsonwebtoken/verify.js
// class=new  jaccard=0.0337  score=0.2119  fileCov=0.0385
// note: nearest: node_modules/jsonwebtoken/verify.js (0.0337); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var RGc = E(() => {
  EGc();
});
class BQo {
  #e;
  #t;
  #n;
  constructor(e) {
    if (!(e instanceof Uint8Array)) throw TypeError("payload must be an instance of Uint8Array");
    this.#e = e;
  }
  setProtectedHeader(e) {
    return O3(this.#t, "setProtectedHeader"), this.#t = e, this;
  }
  setUnprotectedHeader(e) {
    return O3(this.#n, "setUnprotectedHeader"), this.#n = e, this;
  }
  async sign(e, t) {
    if (!this.#t && !this.#n) throw new jH("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
    if (!sBe(this.#t, this.#n)) throw new jH("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    let n = {
        ...this.#t,
        ...this.#n
      },
      r = iBe(jH, new Map([["b64", true]]), t?.crit, this.#t, n),
      o = true;
    if (r.has("b64")) {
      if (o = this.#t.b64, typeof o !== "boolean") throw new jH('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
    let {
      alg: s
    } = n;
    if (typeof s !== "string" || !s) throw new jH('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    aBe(s, e, "sign");
    let i, a;
    if (o) i = ER(this.#e), a = aD(i);else a = this.#e, i = "";
    let l, c;
    if (this.#t) l = ER(JSON.stringify(this.#t)), c = aD(l);else l = "", c = new Uint8Array();
    let u = iD(c, aD("."), a),
      d = await rge(e, s),
      p = await K3c(s, d, u),
      f = {
        signature: ER(p),
        payload: i
      };
    if (this.#n) f.header = this.#n;
    if (this.#t) f.protected = l;
    return f;
  }
}