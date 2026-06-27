// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zSr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/models.mjs
// class=partial  jaccard=0.1298  score=0.2485  fileCov=0.2137
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/models.mjs; dir inferred from dep-graph -> constants; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zSr = E(() => {
  Tx();
  rv();
  DR();
  pIt = class pIt extends cp {
    create(e, t, n) {
      let {
        view: r,
        betas: o,
        ...s
      } = t;
      return this._client.post(ma`/v1/memory_stores/${e}/memories?beta=true`, {
        query: {
          view: r
        },
        body: s,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(o ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    retrieve(e, t, n) {
      let {
        memory_store_id: r,
        betas: o,
        ...s
      } = t;
      return this._client.get(ma`/v1/memory_stores/${r}/memories/${e}?beta=true`, {
        query: s,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(o ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    update(e, t, n) {
      let {
        memory_store_id: r,
        view: o,
        betas: s,
        ...i
      } = t;
      return this._client.post(ma`/v1/memory_stores/${r}/memories/${e}?beta=true`, {
        query: {
          view: o
        },
        body: i,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(s ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    list(e, t = {}, n) {
      let {
        betas: r,
        ...o
      } = t ?? {};
      return this._client.getAPIList(ma`/v1/memory_stores/${e}/memories?beta=true`, NS, {
        query: o,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    delete(e, t, n) {
      let {
        memory_store_id: r,
        expected_content_sha256: o,
        betas: s
      } = t;
      return this._client.delete(ma`/v1/memory_stores/${r}/memories/${e}?beta=true`, {
        query: {
          expected_content_sha256: o
        },
        ...n,
        headers: ms([{
          "anthropic-beta": [...(s ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
  };
});
var fIt;