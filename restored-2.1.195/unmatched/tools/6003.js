// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xGc
// matched 2.1.88 source: node_modules/@growthbook/growthbook/dist/esm/feature-repository.mjs
// class=new  jaccard=0.0106  score=0.1372  fileCov=0.0113
// note: nearest: node_modules/@growthbook/growthbook/dist/esm/feature-repository.mjs (0.0106); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function OQo(e, t, n) {
  let r = await bGc(e, t, n),
    o = Fgr(r.protectedHeader, r.plaintext, n),
    {
      protectedHeader: s
    } = r;
  if (s.iss !== void 0 && s.iss !== o.iss) throw new H2('replicated "iss" claim header parameter mismatch', o, "iss", "mismatch");
  if (s.sub !== void 0 && s.sub !== o.sub) throw new H2('replicated "sub" claim header parameter mismatch', o, "sub", "mismatch");
  if (s.aud !== void 0 && JSON.stringify(s.aud) !== JSON.stringify(o.aud)) throw new H2('replicated "aud" claim header parameter mismatch', o, "aud", "mismatch");
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