// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module POa
// matched 2.1.88 source: src/bridge/bridgeApi.ts
// class=new  jaccard=0.0242  score=0.6747  fileCov=0.0245
// note: nearest: src/bridge/bridgeApi.ts (0.0242); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var POa = E(() => {
  dn();
  Un();
  jc();
  Lo();
  BR();
  fn();
  sa();
  Mx();
  dr();
  Ide();
  VDe();
});
function zjn(e, t, n, r) {
  if (!r) return {
    url: `${e}/v1/sessions/${t}/events`,
    body: {
      events: n
    }
  };
  let o = l4t(t);
  return {
    url: `${e}/v1/code/sessions/${encodeURIComponent(o)}/events`,
    body: {
      events: n.map(s => ({
        payload: typeof s.uuid === "string" && s.uuid ? s : {
          ...s,
          uuid: MOa.randomUUID()
        }
      }))
    }
  };
}
var MOa;