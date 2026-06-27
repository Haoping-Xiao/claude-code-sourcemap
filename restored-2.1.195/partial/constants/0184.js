// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hEr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/skills/skills.mjs
// class=partial  jaccard=0.2273  score=0.4656  fileCov=0.3075
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/skills/skills.mjs; dir inferred from dep-graph -> constants; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hEr = E(() => {
  gEr();
  gEr();
  Tx();
  rv();
  DR();
  MJe = class MJe extends cp {
    constructor() {
      super(...arguments);
      this.credentials = new IIt(this._client);
    }
    create(e, t) {
      let {
        betas: n,
        ...r
      } = e;
      return this._client.post("/v1/vaults?beta=true", {
        body: r,
        ...t,
        headers: ms([{
          "anthropic-beta": [...(n ?? []), "managed-agents-2026-04-01"].toString()
        }, t?.headers])
      });
    }
    retrieve(e, t = {}, n) {
      let {
        betas: r
      } = t ?? {};
      return this._client.get(ma`/v1/vaults/${e}?beta=true`, {
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
      return this._client.post(ma`/v1/vaults/${e}?beta=true`, {
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
      return this._client.getAPIList("/v1/vaults?beta=true", NS, {
        query: r,
        ...t,
        headers: ms([{
          "anthropic-beta": [...(n ?? []), "managed-agents-2026-04-01"].toString()
        }, t?.headers])
      });
    }
    delete(e, t = {}, n) {
      let {
        betas: r
      } = t ?? {};
      return this._client.delete(ma`/v1/vaults/${e}?beta=true`, {
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
    archive(e, t = {}, n) {
      let {
        betas: r
      } = t ?? {};
      return this._client.post(ma`/v1/vaults/${e}/archive?beta=true`, {
        ...n,
        headers: ms([{
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
        }, n?.headers])
      });
    }
  };
  MJe.Credentials = IIt;
});
var vw;