// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tJo
// matched 2.1.88 source: node_modules/node-forge/lib/pkcs7.js
// class=new  jaccard=0.0105  score=0.0568  fileCov=0.0127
// note: nearest: node_modules/node-forge/lib/pkcs7.js (0.0105); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tJo = E(() => {
  Xmr();
  GXo();
  qXo();
  VXo();
  sB();
  Enn();
  wm();
  eJo();
  Hnn();
  JXo();
  rgr = xDm;
});
class JNe {
  constructor(e) {
    if (!(e instanceof Uint8Array)) throw TypeError("plaintext must be an instance of Uint8Array");
    this._plaintext = e;
  }
  setKeyManagementParameters(e) {
    if (this._keyManagementParameters) throw TypeError("setKeyManagementParameters can only be called once");
    return this._keyManagementParameters = e, this;
  }
  setProtectedHeader(e) {
    if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
    return this._protectedHeader = e, this;
  }
  setSharedUnprotectedHeader(e) {
    if (this._sharedUnprotectedHeader) throw TypeError("setSharedUnprotectedHeader can only be called once");
    return this._sharedUnprotectedHeader = e, this;
  }
  setUnprotectedHeader(e) {
    if (this._unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
    return this._unprotectedHeader = e, this;
  }
  setAdditionalAuthenticatedData(e) {
    return this._aad = e, this;
  }
  setContentEncryptionKey(e) {
    if (this._cek) throw TypeError("setContentEncryptionKey can only be called once");
    return this._cek = e, this;
  }
  setInitializationVector(e) {
    if (this._iv) throw TypeError("setInitializationVector can only be called once");
    return this._iv = e, this;
  }
  async encrypt(e, t) {
    if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) throw new Wa("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
    if (!Jme(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) throw new Wa("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
    let n = {
      ...this._protectedHeader,
      ...this._unprotectedHeader,
      ...this._sharedUnprotectedHeader
    };
    if (Zme(Wa, new Map(), t === null || t === void 0 ? void 0 : t.crit, this._protectedHeader, n), n.zip !== void 0) {
      if (!this._protectedHeader || !this._protectedHeader.zip) throw new Wa('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
      if (n.zip !== "DEF") throw new od('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
    }
    let {
      alg: r,
      enc: o
    } = n;
    if (typeof r !== "string" || !r) throw new Wa('JWE "alg" (Algorithm) Header Parameter missing or invalid');
    if (typeof o !== "string" || !o) throw new Wa('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
    let s;
    if (r === "dir") {
      if (this._cek) throw TypeError("setContentEncryptionKey cannot be called when using Direct Encryption");
    } else if (r === "ECDH-ES") {
      if (this._cek) throw TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement");
    }
    let i;
    {
      let f;
      if ({
        cek: i,
        encryptedKey: s,
        parameters: f
      } = await rgr(r, o, e, this._cek, this._keyManagementParameters), f) if (t && nJo in t) {
        if (!this._unprotectedHeader) this.setUnprotectedHeader(f);else this._unprotectedHeader = {
          ...this._unprotectedHeader,
          ...f
        };
      } else if (!this._protectedHeader) this.setProtectedHeader(f);else this._protectedHeader = {
        ...this._protectedHeader,
        ...f
      };
    }
    this._iv || (this._iv = qmr(o));
    let a, l, c;
    if (this._protectedHeader) l = IS.encode(xS(JSON.stringify(this._protectedHeader)));else l = IS.encode("");
    if (this._aad) c = xS(this._aad), a = oB(l, IS.encode("."), IS.encode(c));else a = l;
    let u, d;
    if (n.zip === "DEF") {
      let f = await ((t === null || t === void 0 ? void 0 : t.deflateRaw) || c2c)(this._plaintext);
      ({
        ciphertext: u,
        tag: d
      } = await Tnn(o, f, i, this._iv, a));
    } else ({
      ciphertext: u,
      tag: d
    } = await Tnn(o, this._plaintext, i, this._iv, a));
    let p = {
      ciphertext: xS(u),
      iv: xS(this._iv),
      tag: xS(d)
    };
    if (s) p.encrypted_key = xS(s);
    if (c) p.aad = c;
    if (this._protectedHeader) p.protected = fx.decode(l);
    if (this._sharedUnprotectedHeader) p.unprotected = this._sharedUnprotectedHeader;
    if (this._unprotectedHeader) p.header = this._unprotectedHeader;
    return p;
  }
}
var nJo;