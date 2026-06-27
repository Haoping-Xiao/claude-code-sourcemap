// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Q2c
// matched 2.1.88 source: node_modules/@growthbook/growthbook/dist/esm/feature-repository.mjs
// class=vendor  jaccard=0.0106  score=0.1372  fileCov=0.0113
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function Z2c(e, t, n) {
  let r = await tgr(e, t, n),
    o = Wvt(r.protectedHeader, r.plaintext, n),
    {
      protectedHeader: s
    } = r;
  if (s.iss !== void 0 && s.iss !== o.iss) throw new iB('replicated "iss" claim header parameter mismatch', "iss", "mismatch");
  if (s.sub !== void 0 && s.sub !== o.sub) throw new iB('replicated "sub" claim header parameter mismatch', "sub", "mismatch");
  if (s.aud !== void 0 && JSON.stringify(s.aud) !== JSON.stringify(o.aud)) throw new iB('replicated "aud" claim header parameter mismatch', "aud", "mismatch");
  let i = {
    payload: o,
    protectedHeader: s
  };
  if (typeof t === "function") return {
    ...i,
    key: r.key
  };
  return i;
}