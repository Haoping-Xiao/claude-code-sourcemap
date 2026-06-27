// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KSr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/models.mjs
// class=partial  jaccard=0.1182  score=0.2092  fileCov=0.2137
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/models.mjs; dir inferred from dep-graph -> constants; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var KSr = E(() => {
  Tx();
  rv();
  DR();
  fIt = class fIt extends cp {
    retrieve(e, t, n) {
      let {
        memory_store_id: r,
        betas: o,
        ...s
      } = t;
      return this._client.get(ma`/v1/memory_stores/${r}/memory_versions/${e}?beta=true`, {
        query: s,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(o ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    list(e, t = {}, n) {
      let {
        betas: r,
        ...o
      } = t ?? {};
      return this._client.getAPIList(ma`/v1/memory_stores/${e}/memory_versions?beta=true`, NS, {
        query: o,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    redact(e, t, n) {
      let {
        memory_store_id: r,
        betas: o
      } = t;
      return this._client.post(ma`/v1/memory_stores/${r}/memory_versions/${e}/redact?beta=true`, {
        ...n,
        headers: ms([{
          "anthropic-beta": [...(o ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
  };
});
var pUe;