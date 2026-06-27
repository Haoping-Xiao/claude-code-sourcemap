// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SGc
// matched 2.1.88 source: node_modules/undici/lib/web/fetch/request.js
// class=new  jaccard=0.018  score=0.0773  fileCov=0.0229
// note: nearest: node_modules/undici/lib/web/fetch/request.js (0.018); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SGc = E(() => {
  _Gc();
  AR();
  sK();
});
class PQo {
  #e;
  #t;
  #n;
  #r;
  #o;
  #l;
  #s;
  #a;
  constructor(e) {
    if (!(e instanceof Uint8Array)) throw TypeError("plaintext must be an instance of Uint8Array");
    this.#e = e;
  }
  setKeyManagementParameters(e) {
    return O3(this.#a, "setKeyManagementParameters"), this.#a = e, this;
  }
  setProtectedHeader(e) {
    return O3(this.#t, "setProtectedHeader"), this.#t = e, this;
  }
  setSharedUnprotectedHeader(e) {
    return O3(this.#n, "setSharedUnprotectedHeader"), this.#n = e, this;
  }
  setUnprotectedHeader(e) {
    return O3(this.#r, "setUnprotectedHeader"), this.#r = e, this;
  }
  setAdditionalAuthenticatedData(e) {
    return this.#o = e, this;
  }
  setContentEncryptionKey(e) {
    return O3(this.#l, "setContentEncryptionKey"), this.#l = e, this;
  }
  setInitializationVector(e) {
    return O3(this.#s, "setInitializationVector"), this.#s = e, this;
  }
  async encrypt(e, t) {
    if (!this.#t && !this.#r && !this.#n) throw new Ac("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
    if (!sBe(this.#t, this.#r, this.#n)) throw new Ac("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
    let n = {
      ...this.#t,
      ...this.#r,
      ...this.#n
    };
    if (iBe(Ac, new Map(), t?.crit, this.#t, n), n.zip !== void 0 && n.zip !== "DEF") throw new nh('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value.');
    if (n.zip !== void 0 && !this.#t?.zip) throw new Ac('JWE "zip" (Compression Algorithm) Header Parameter MUST be in a protected header.');
    let {
      alg: r,
      enc: o
    } = n;
    if (typeof r !== "string" || !r) throw new Ac('JWE "alg" (Algorithm) Header Parameter missing or invalid');
    if (typeof o !== "string" || !o) throw new Ac('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
    let s;
    if (this.#l && (r === "dir" || r === "ECDH-ES")) throw TypeError(`setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${r}`);
    aBe(r === "dir" ? o : r, e, "encrypt");
    let i;
    {
      let h,
        y = await rge(e, r);
      if ({
        cek: i,
        encryptedKey: s,
        parameters: h
      } = await fGc(r, o, y, this.#l, this.#a), h) if (t && D3c in t) {
        if (!this.#r) this.setUnprotectedHeader(h);else this.#r = {
          ...this.#r,
          ...h
        };
      } else if (!this.#t) this.setProtectedHeader(h);else this.#t = {
        ...this.#t,
        ...h
      };
    }
    let a, l, c, u;
    if (this.#t) l = ER(JSON.stringify(this.#t)), c = aD(l);else l = "", c = new Uint8Array();
    if (this.#o) {
      u = ER(this.#o);
      let h = aD(u);
      a = iD(c, aD("."), h);
    } else a = c;
    let d = this.#e;
    if (n.zip === "DEF") d = await gGc(d).catch(h => {
      throw new Ac("Failed to compress plaintext", {
        cause: h
      });
    });
    let {
        ciphertext: p,
        tag: f,
        iv: m
      } = await Ogr(o, d, i, this.#s, a),
      g = {
        ciphertext: ER(p)
      };
    if (m) g.iv = ER(m);
    if (f) g.tag = ER(f);
    if (s) g.encrypted_key = ER(s);
    if (u) g.aad = u;
    if (this.#t) g.protected = l;
    if (this.#n) g.unprotected = this.#n;
    if (this.#r) g.header = this.#r;
    return g;
  }
}