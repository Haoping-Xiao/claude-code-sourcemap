// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dEr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/skills/versions.mjs
// class=partial  jaccard=0.2492  score=0.4938  fileCov=0.3348
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/skills/versions.mjs; dir inferred from dep-graph -> constants; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dEr = E(() => {
  Tx();
  rv();
  DR();
  wIt = class wIt extends cp {
    retrieve(e, t, n) {
      let {
        session_id: r,
        betas: o
      } = t;
      return this._client.get(ma`/v1/sessions/${r}/resources/${e}?beta=true`, {
        ...n,
        headers: ms([{
          "anthropic-beta": [...(o ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    update(e, t, n) {
      let {
        session_id: r,
        betas: o,
        ...s
      } = t;
      return this._client.post(ma`/v1/sessions/${r}/resources/${e}?beta=true`, {
        body: s,
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
      return this._client.getAPIList(ma`/v1/sessions/${e}/resources?beta=true`, NS, {
        query: o,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    delete(e, t, n) {
      let {
        session_id: r,
        betas: o
      } = t;
      return this._client.delete(ma`/v1/sessions/${r}/resources/${e}?beta=true`, {
        ...n,
        headers: ms([{
          "anthropic-beta": [...(o ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    add(e, t, n) {
      let {
        betas: r,
        ...o
      } = t;
      return this._client.post(ma`/v1/sessions/${e}/resources?beta=true`, {
        body: o,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
  };
});
var gUe;