// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ijc
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ijc] deps: node-forge/lib/rsa.js, node-forge/lib/util.js, cgr
pJo = class pJo extends J7e {
  setProtectedHeader(e) {
    if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
    return this._protectedHeader = e, this;
  }
  setKeyManagementParameters(e) {
    if (this._keyManagementParameters) throw TypeError("setKeyManagementParameters can only be called once");
    return this._keyManagementParameters = e, this;
  }
  setContentEncryptionKey(e) {
    if (this._cek) throw TypeError("setContentEncryptionKey can only be called once");
    return this._cek = e, this;
  }
  setInitializationVector(e) {
    if (this._iv) throw TypeError("setInitializationVector can only be called once");
    return this._iv = e, this;
  }
  replicateIssuerAsHeader() {
    return this._replicateIssuerAsHeader = true, this;
  }
  replicateSubjectAsHeader() {
    return this._replicateSubjectAsHeader = true, this;
  }
  replicateAudienceAsHeader() {
    return this._replicateAudienceAsHeader = true, this;
  }
  async encrypt(e, t) {
    let n = new Inn(IS.encode(JSON.stringify(this._payload)));
    if (this._replicateIssuerAsHeader) this._protectedHeader = {
      ...this._protectedHeader,
      iss: this._payload.iss
    };
    if (this._replicateSubjectAsHeader) this._protectedHeader = {
      ...this._protectedHeader,
      sub: this._payload.sub
    };
    if (this._replicateAudienceAsHeader) this._protectedHeader = {
      ...this._protectedHeader,
      aud: this._payload.aud
    };
    if (n.setProtectedHeader(this._protectedHeader), this._iv) n.setInitializationVector(this._iv);
    if (this._cek) n.setContentEncryptionKey(this._cek);
    if (this._keyManagementParameters) n.setKeyManagementParameters(this._keyManagementParameters);
    return n.encrypt(e, t);
  }
};
async function fJo(e, t) {
  if (!eb(e)) throw TypeError("JWK must be an object");
  if (t !== null && t !== void 0 || (t = "sha256"), t !== "sha256" && t !== "sha384" && t !== "sha512") throw TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
  let n;
  switch (e.kty) {
    case "EC":
      QNe(e.crv, '"crv" (Curve) Parameter'), QNe(e.x, '"x" (X Coordinate) Parameter'), QNe(e.y, '"y" (Y Coordinate) Parameter'), n = {
        crv: e.crv,
        kty: e.kty,
        x: e.x,
        y: e.y
      };
      break;
    case "OKP":
      QNe(e.crv, '"crv" (Subtype of Key Pair) Parameter'), QNe(e.x, '"x" (Public Key) Parameter'), n = {
        crv: e.crv,
        kty: e.kty,
        x: e.x
      };
      break;
    case "RSA":
      QNe(e.e, '"e" (Exponent) Parameter'), QNe(e.n, '"n" (Modulus) Parameter'), n = {
        e: e.e,
        kty: e.kty,
        n: e.n
      };
      break;
    case "oct":
      QNe(e.k, '"k" (Key Value) Parameter'), n = {
        k: e.k,
        kty: e.kty
      };
      break;
    default:
      throw new od('"kty" (Key Type) Parameter missing or unsupported');
  }
  let r = IS.encode(JSON.stringify(n));
  return xS(await $mr(t, r));
}
async function ajc(e, t) {
  t !== null && t !== void 0 || (t = "sha256");
  let n = await fJo(e, t);
  return `urn:ietf:params:oauth:jwk-thumbprint:sha-${t.slice(-3)}:${n}`;
}
var QNe = (e, t) => {
  if (typeof e !== "string" || !e) throw new jmr(`${t} missing or invalid`);
};