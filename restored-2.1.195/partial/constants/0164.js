// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VSr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/models.mjs
// class=partial  jaccard=0.1298  score=0.2485  fileCov=0.2137
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/models.mjs; dir inferred from dep-graph -> constants; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VSr = E(() => {
  qSr();
  qSr();
  Tx();
  rv();
  DR();
  IJe = class IJe extends cp {
    constructor() {
      super(...arguments);
      this.versions = new dIt(this._client);
    }
    create(e, t) {
      let {
        betas: n,
        ...r
      } = e;
      return this._client.post("/v1/agents?beta=true", {
        body: r,
        ...t,
        headers: ms([{
          "anthropic-beta": [...(n ?? []), "managed-agents-2026-04-01"].toString()
        }, t?.headers])
      });
    }
    retrieve(e, t = {}, n) {
      let {
        betas: r,
        ...o
      } = t ?? {};
      return this._client.get(ma`/v1/agents/${e}?beta=true`, {
        query: o,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    update(e, t, n) {
      let {
        betas: r,
        ...o
      } = t;
      return this._client.post(ma`/v1/agents/${e}?beta=true`, {
        body: o,
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    list(e = {}, t) {
      let {
        betas: n,
        ...r
      } = e ?? {};
      return this._client.getAPIList("/v1/agents?beta=true", NS, {
        query: r,
        ...t,
        headers: ms([{
          "anthropic-beta": [...(n ?? []), "managed-agents-2026-04-01"].toString()
        }, t?.headers])
      });
    }
    archive(e, t = {}, n) {
      let {
        betas: r
      } = t ?? {};
      return this._client.post(ma`/v1/agents/${e}/archive?beta=true`, {
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
  };
  IJe.Versions = dIt;
});
var pIt;