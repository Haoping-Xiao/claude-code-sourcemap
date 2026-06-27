// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ljc
// matched 2.1.88 source: src/skills/bundled/loremIpsum.ts
// class=new  jaccard=0.0403  score=0.2576  fileCov=0.0456
// note: nearest: src/skills/bundled/loremIpsum.ts (0.0403); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ljc = E(() => {
  RXo();
  sB();
  wm();
  YP();
});
async function cjc(e, t) {
  let n = {
    ...e,
    ...(t === null || t === void 0 ? void 0 : t.header)
  };
  if (!eb(n.jwk)) throw new wh('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
  let r = await YNe({
    ...n.jwk,
    ext: !0
  }, n.alg, !0);
  if (r instanceof Uint8Array || r.type !== "public") throw new wh('"jwk" (JSON Web Key) Header Parameter must be a public key');
  return r;
}