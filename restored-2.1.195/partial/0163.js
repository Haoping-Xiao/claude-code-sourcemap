// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qSr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/skills/versions.mjs
// class=partial  jaccard=0.1359  score=0.4245  fileCov=0.1666
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/skills/versions.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qSr = E(() => {
  Tx();
  rv();
  DR();
  dIt = class dIt extends cp {
    list(e, t = {}, n) {
      let {
        betas: r,
        ...o
      } = t ?? {};
      return this._client.getAPIList(ma`/v1/agents/${e}/versions?beta=true`, NS, {
        query: o,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
  };
});
var IJe;