// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kQo
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/coffeescript.js
// class=new  jaccard=0.012  score=0.1685  fileCov=0.0127
// note: nearest: node_modules/highlight.js/lib/languages/coffeescript.js (0.012); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kQo = E(() => {
  NZ();
  rGc();
  wQo();
  AR();
});
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