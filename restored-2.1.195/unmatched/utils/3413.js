// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module POa
// matched 2.1.88 source: src/utils/teleport/api.ts
// class=new  jaccard=0.0307  score=0.6163  fileCov=0.0313
// note: nearest: src/utils/teleport/api.ts (0.0307); dir inferred from dep-graph -> utils; 0 renamed
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