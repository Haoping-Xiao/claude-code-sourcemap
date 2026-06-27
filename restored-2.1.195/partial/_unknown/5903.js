// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module egr
// matched 2.1.88 source: node_modules/auto-bind/index.js
// class=partial  jaccard=0.1501  score=0.1863  fileCov=0.4358
// note: low-confidence suggestion: node_modules/auto-bind/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var egr = E(() => {
  sB();
  UXo();
  FXo();
  wm();
  $vt();
  O2c();
  YP();
  Enn();
  Bvt();
  QXo();
});
async function tgr(e, t, n) {
  if (e instanceof Uint8Array) e = fx.decode(e);
  if (typeof e !== "string") throw new Wa("Compact JWE must be a string or Uint8Array");
  let {
    0: r,
    1: o,
    2: s,
    3: i,
    4: a,
    length: l
  } = e.split(".");
  if (l !== 5) throw new Wa("Invalid Compact JWE");
  let c = await Uvt({
      ciphertext: i,
      iv: s || void 0,
      protected: r || void 0,
      tag: a || void 0,
      encrypted_key: o || void 0
    }, t, n),
    u = {
      plaintext: c.plaintext,
      protectedHeader: c.protectedHeader
    };
  if (typeof t === "function") return {
    ...u,
    key: c.key
  };
  return u;
}