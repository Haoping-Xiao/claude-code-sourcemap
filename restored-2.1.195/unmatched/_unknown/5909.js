// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ogr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ogr = E(() => {
  sB();
  XXo();
  FXo();
  Vmr();
  tJo();
  wm();
  $vt();
  YP();
  Bvt();
  nJo = Symbol();
});
class W2c {
  constructor(e, t, n) {
    this.parent = e, this.key = t, this.options = n;
  }
  setUnprotectedHeader(e) {
    if (this.unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
    return this.unprotectedHeader = e, this;
  }
  addRecipient(...e) {
    return this.parent.addRecipient(...e);
  }
  encrypt(...e) {
    return this.parent.encrypt(...e);
  }
  done() {
    return this.parent;
  }
}
class rJo {
  constructor(e) {
    this._recipients = [], this._plaintext = e;
  }
  addRecipient(e, t) {
    let n = new W2c(this, e, {
      crit: t === null || t === void 0 ? void 0 : t.crit
    });
    return this._recipients.push(n), n;
  }
  setProtectedHeader(e) {
    if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
    return this._protectedHeader = e, this;
  }
  setSharedUnprotectedHeader(e) {
    if (this._unprotectedHeader) throw TypeError("setSharedUnprotectedHeader can only be called once");
    return this._unprotectedHeader = e, this;
  }
  setAdditionalAuthenticatedData(e) {
    return this._aad = e, this;
  }
  async encrypt(e) {
    var t, n, r;
    if (!this._recipients.length) throw new Wa("at least one recipient must be added");
    if (e = {
      deflateRaw: e === null || e === void 0 ? void 0 : e.deflateRaw
    }, this._recipients.length === 1) {
      let [a] = this._recipients,
        l = await new JNe(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(a.unprotectedHeader).encrypt(a.key, {
          ...a.options,
          ...e
        }),
        c = {
          ciphertext: l.ciphertext,
          iv: l.iv,
          recipients: [{}],
          tag: l.tag
        };
      if (l.aad) c.aad = l.aad;
      if (l.protected) c.protected = l.protected;
      if (l.unprotected) c.unprotected = l.unprotected;
      if (l.encrypted_key) c.recipients[0].encrypted_key = l.encrypted_key;
      if (l.header) c.recipients[0].header = l.header;
      return c;
    }
    let o;
    for (let a = 0; a < this._recipients.length; a++) {
      let l = this._recipients[a];
      if (!Jme(this._protectedHeader, this._unprotectedHeader, l.unprotectedHeader)) throw new Wa("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
      let c = {
          ...this._protectedHeader,
          ...this._unprotectedHeader,
          ...l.unprotectedHeader
        },
        {
          alg: u
        } = c;
      if (typeof u !== "string" || !u) throw new Wa('JWE "alg" (Algorithm) Header Parameter missing or invalid');
      if (u === "dir" || u === "ECDH-ES") throw new Wa('"dir" and "ECDH-ES" alg may only be used with a single recipient');
      if (typeof c.enc !== "string" || !c.enc) throw new Wa('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
      if (!o) o = c.enc;else if (o !== c.enc) throw new Wa('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients');
      if (Zme(Wa, new Map(), l.options.crit, this._protectedHeader, c), c.zip !== void 0) {
        if (!this._protectedHeader || !this._protectedHeader.zip) throw new Wa('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
      }
    }
    let s = Qme(o),
      i = {
        ciphertext: "",
        iv: "",
        recipients: [],
        tag: ""
      };
    for (let a = 0; a < this._recipients.length; a++) {
      let l = this._recipients[a],
        c = {};
      i.recipients.push(c);
      let d = {
        ...this._protectedHeader,
        ...this._unprotectedHeader,
        ...l.unprotectedHeader
      }.alg.startsWith("PBES2") ? 2048 + a : void 0;
      if (a === 0) {
        let m = await new JNe(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(s).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(l.unprotectedHeader).setKeyManagementParameters({
          p2c: d
        }).encrypt(l.key, {
          ...l.options,
          ...e,
          [nJo]: true
        });
        if (i.ciphertext = m.ciphertext, i.iv = m.iv, i.tag = m.tag, m.aad) i.aad = m.aad;
        if (m.protected) i.protected = m.protected;
        if (m.unprotected) i.unprotected = m.unprotected;
        if (c.encrypted_key = m.encrypted_key, m.header) c.header = m.header;
        continue;
      }
      let {
        encryptedKey: p,
        parameters: f
      } = await rgr(((t = l.unprotectedHeader) === null || t === void 0 ? void 0 : t.alg) || ((n = this._protectedHeader) === null || n === void 0 ? void 0 : n.alg) || ((r = this._unprotectedHeader) === null || r === void 0 ? void 0 : r.alg), o, l.key, s, {
        p2c: d
      });
      if (c.encrypted_key = xS(p), l.unprotectedHeader || f) c.header = {
        ...l.unprotectedHeader,
        ...f
      };
    }
    return i;
  }
}