// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Gc
// matched 2.1.88 source: node_modules/auto-bind/index.js
// class=partial  jaccard=0.1501  score=0.1863  fileCov=0.4358
// note: low-confidence suggestion: node_modules/auto-bind/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Gc = E(() => {
  NZ();
  Qvt();
  oBe();
  AR();
  RQo();
  sK();
  Qvt();
  Jnn();
  nwt();
  Znn();
  DQo();
});
async function bGc(e, t, n) {
  if (e instanceof Uint8Array) e = oK.decode(e);
  if (typeof e !== "string") throw new Ac("Compact JWE must be a string or Uint8Array");
  let {
    0: r,
    1: o,
    2: s,
    3: i,
    4: a,
    length: l
  } = e.split(".");
  if (l !== 5) throw new Ac("Invalid Compact JWE");
  let c = await yGc({
      ciphertext: i,
      iv: s || void 0,
      protected: r,
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