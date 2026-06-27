// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xGc
// matched 2.1.88 source: src/utils/teleport.tsx
// class=new  jaccard=0.0049  score=0.2059  fileCov=0.005
// note: nearest: src/utils/teleport.tsx (0.0049); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xGc = E(() => {
  vGc();
  nrn();
  AR();
});
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