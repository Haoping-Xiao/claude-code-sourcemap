// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kQo
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function oGc(e) {
  if (Gnn(e)) if (e.type === "secret") e = e.export();else return e.export({
    format: "jwk"
  });
  if (e instanceof Uint8Array) return {
    kty: "oct",
    k: ER(e)
  };
  if (!cve(e)) throw TypeError(nBe(e, "CryptoKey", "KeyObject", "Uint8Array"));
  if (!e.extractable) throw TypeError("non-extractable CryptoKey cannot be exported as a JWK");
  let {
    ext: t,
    key_ops: n,
    alg: r,
    use: o,
    ...s
  } = await crypto.subtle.exportKey("jwk", e);
  if (s.kty === "AKP") s.alg = r;
  return s;
}