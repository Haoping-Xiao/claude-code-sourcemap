// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DQo
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function yGc(e, t, n) {
  if (!B3(e)) throw new Ac("Flattened JWE must be an object");
  if (e.protected === void 0 && e.header === void 0 && e.unprotected === void 0) throw new Ac("JOSE Header missing");
  if (e.iv !== void 0 && typeof e.iv !== "string") throw new Ac("JWE Initialization Vector incorrect type");
  if (typeof e.ciphertext !== "string") throw new Ac("JWE Ciphertext missing or incorrect type");
  if (e.tag !== void 0 && typeof e.tag !== "string") throw new Ac("JWE Authentication Tag incorrect type");
  if (e.protected !== void 0 && typeof e.protected !== "string") throw new Ac("JWE Protected Header incorrect type");
  if (e.encrypted_key !== void 0 && typeof e.encrypted_key !== "string") throw new Ac("JWE Encrypted Key incorrect type");
  if (e.aad !== void 0 && typeof e.aad !== "string") throw new Ac("JWE AAD incorrect type");
  if (e.header !== void 0 && !B3(e.header)) throw new Ac("JWE Shared Unprotected Header incorrect type");
  if (e.unprotected !== void 0 && !B3(e.unprotected)) throw new Ac("JWE Per-Recipient Unprotected Header incorrect type");
  let r;
  if (e.protected) try {
    let S = ege(e.protected);
    r = JSON.parse(oK.decode(S));
  } catch {
    throw new Ac("JWE Protected Header is invalid");
  }
  if (!sBe(r, e.header, e.unprotected)) throw new Ac("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
  let o = {
    ...r,
    ...e.header,
    ...e.unprotected
  };
  if (iBe(Ac, new Map(), n?.crit, r, o), o.zip !== void 0 && o.zip !== "DEF") throw new nh('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value.');
  if (o.zip !== void 0 && !r?.zip) throw new Ac('JWE "zip" (Compression Algorithm) Header Parameter MUST be in a protected header.');
  let {
    alg: s,
    enc: i
  } = o;
  if (typeof s !== "string" || !s) throw new Ac("missing JWE Algorithm (alg) in JWE Header");
  if (typeof i !== "string" || !i) throw new Ac("missing JWE Encryption Algorithm (enc) in JWE Header");
  let a = n && Qnn("keyManagementAlgorithms", n.keyManagementAlgorithms),
    l = n && Qnn("contentEncryptionAlgorithms", n.contentEncryptionAlgorithms);
  if (a && !a.has(s) || !a && s.startsWith("PBES2")) throw new Xvt('"alg" (Algorithm) Header Parameter value not allowed');
  if (l && !l.has(i)) throw new Xvt('"enc" (Encryption Algorithm) Header Parameter value not allowed');
  let c;
  if (e.encrypted_key !== void 0) c = N3(e.encrypted_key, "encrypted_key", Ac);
  let u = false;
  if (typeof t === "function") t = await t(r, e), u = true;
  aBe(s === "dir" ? i : s, t, "decrypt");
  let d = await rge(t, s),
    p;
  try {
    p = await pGc(s, d, c, o, n);
  } catch (S) {
    if (S instanceof TypeError || S instanceof Ac || S instanceof nh) throw S;
    p = rBe(i);
  }
  let f, m;
  if (e.iv !== void 0) f = N3(e.iv, "iv", Ac);
  if (e.tag !== void 0) m = N3(e.tag, "tag", Ac);
  let g = e.protected !== void 0 ? aD(e.protected) : new Uint8Array(),
    h;
  if (e.aad !== void 0) h = iD(g, aD("."), aD(e.aad));else h = g;
  let y = N3(e.ciphertext, "ciphertext", Ac),
    b = await Ngr(i, p, y, f, m, h),
    _ = {
      plaintext: b
    };
  if (o.zip === "DEF") {
    let S = n?.maxDecompressedLength ?? 250000;
    if (S === 0) throw new nh('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
    if (S !== 1 / 0 && (!Number.isSafeInteger(S) || S < 1)) throw TypeError("maxDecompressedLength must be 0, a positive safe integer, or Infinity");
    _.plaintext = await hGc(b, S).catch(A => {
      if (A instanceof Ac) throw A;
      throw new Ac("Failed to decompress plaintext", {
        cause: A
      });
    });
  }
  if (e.protected !== void 0) _.protectedHeader = r;
  if (e.aad !== void 0) _.additionalAuthenticatedData = N3(e.aad, "aad", Ac);
  if (e.unprotected !== void 0) _.sharedUnprotectedHeader = e.unprotected;
  if (e.header !== void 0) _.unprotectedHeader = e.header;
  if (u) return {
    ..._,
    key: d
  };
  return _;
}