// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QXo
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module QXo]
vnn = CDm;
async function Uvt(e, t, n) {
  var r;
  if (!eb(e)) throw new Wa("Flattened JWE must be an object");
  if (e.protected === void 0 && e.header === void 0 && e.unprotected === void 0) throw new Wa("JOSE Header missing");
  if (typeof e.iv !== "string") throw new Wa("JWE Initialization Vector missing or incorrect type");
  if (typeof e.ciphertext !== "string") throw new Wa("JWE Ciphertext missing or incorrect type");
  if (typeof e.tag !== "string") throw new Wa("JWE Authentication Tag missing or incorrect type");
  if (e.protected !== void 0 && typeof e.protected !== "string") throw new Wa("JWE Protected Header incorrect type");
  if (e.encrypted_key !== void 0 && typeof e.encrypted_key !== "string") throw new Wa("JWE Encrypted Key incorrect type");
  if (e.aad !== void 0 && typeof e.aad !== "string") throw new Wa("JWE AAD incorrect type");
  if (e.header !== void 0 && !eb(e.header)) throw new Wa("JWE Shared Unprotected Header incorrect type");
  if (e.unprotected !== void 0 && !eb(e.unprotected)) throw new Wa("JWE Per-Recipient Unprotected Header incorrect type");
  let o;
  if (e.protected) try {
    let S = VT(e.protected);
    o = JSON.parse(fx.decode(S));
  } catch (S) {
    throw new Wa("JWE Protected Header is invalid");
  }
  if (!Jme(o, e.header, e.unprotected)) throw new Wa("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
  let s = {
    ...o,
    ...e.header,
    ...e.unprotected
  };
  if (Zme(Wa, new Map(), n === null || n === void 0 ? void 0 : n.crit, o, s), s.zip !== void 0) {
    if (!o || !o.zip) throw new Wa('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
    if (s.zip !== "DEF") throw new od('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
  }
  let {
    alg: i,
    enc: a
  } = s;
  if (typeof i !== "string" || !i) throw new Wa("missing JWE Algorithm (alg) in JWE Header");
  if (typeof a !== "string" || !a) throw new Wa("missing JWE Encryption Algorithm (enc) in JWE Header");
  let l = n && vnn("keyManagementAlgorithms", n.keyManagementAlgorithms),
    c = n && vnn("contentEncryptionAlgorithms", n.contentEncryptionAlgorithms);
  if (l && !l.has(i)) throw new z7e('"alg" (Algorithm) Header Parameter not allowed');
  if (c && !c.has(a)) throw new z7e('"enc" (Encryption Algorithm) Header Parameter not allowed');
  let u;
  if (e.encrypted_key !== void 0) try {
    u = VT(e.encrypted_key);
  } catch (S) {
    throw new Wa("Failed to base64url decode the encrypted_key");
  }
  let d = false;
  if (typeof t === "function") t = await t(o, e), d = true;
  let p;
  try {
    p = await $2c(i, t, u, s, n);
  } catch (S) {
    if (S instanceof TypeError || S instanceof Wa || S instanceof od) throw S;
    p = Qme(a);
  }
  let f, m;
  try {
    f = VT(e.iv);
  } catch (S) {
    throw new Wa("Failed to base64url decode the iv");
  }
  try {
    m = VT(e.tag);
  } catch (S) {
    throw new Wa("Failed to base64url decode the tag");
  }
  let g = IS.encode((r = e.protected) !== null && r !== void 0 ? r : ""),
    h;
  if (e.aad !== void 0) h = oB(g, IS.encode("."), IS.encode(e.aad));else h = g;
  let y;
  try {
    y = VT(e.ciphertext);
  } catch (S) {
    throw new Wa("Failed to base64url decode the ciphertext");
  }
  let b = await Ymr(a, p, y, f, m, h);
  if (s.zip === "DEF") b = await ((n === null || n === void 0 ? void 0 : n.inflateRaw) || l2c)(b);
  let _ = {
    plaintext: b
  };
  if (e.protected !== void 0) _.protectedHeader = o;
  if (e.aad !== void 0) try {
    _.additionalAuthenticatedData = VT(e.aad);
  } catch (S) {
    throw new Wa("Failed to base64url decode the aad");
  }
  if (e.unprotected !== void 0) _.sharedUnprotectedHeader = e.unprotected;
  if (e.header !== void 0) _.unprotectedHeader = e.header;
  if (d) return {
    ..._,
    key: t
  };
  return _;
}