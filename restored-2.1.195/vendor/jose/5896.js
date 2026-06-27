// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ann
// matched 2.1.88 source: node_modules/jsonwebtoken/sign.js
// class=vendor  jaccard=0.0263  score=0.1838  fileCov=0.0298
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bDm = (e, t) => {
    if (t instanceof Uint8Array) return;
    if (!BXo(t)) throw TypeError(NXo(e, t, ...Z_, "Uint8Array"));
    if (t.type !== "secret") throw TypeError(`${Z_.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
  },
  SDm = (e, t, n) => {
    if (!BXo(t)) throw TypeError(NXo(e, t, ...Z_));
    if (t.type === "secret") throw TypeError(`${Z_.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
    if (n === "sign" && t.type === "public") throw TypeError(`${Z_.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
    if (n === "decrypt" && t.type === "public") throw TypeError(`${Z_.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
    if (t.algorithm && n === "verify" && t.type === "private") throw TypeError(`${Z_.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
    if (t.algorithm && n === "encrypt" && t.type === "private") throw TypeError(`${Z_.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
  },
  EDm = (e, t, n) => {
    if (e.startsWith("HS") || e === "dir" || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e)) bDm(e, t);else SDm(e, t, n);
  },
  XNe;