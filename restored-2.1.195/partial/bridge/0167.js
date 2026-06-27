// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YSr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/skills/skills.mjs
// class=partial  jaccard=0.2055  score=0.3826  fileCov=0.3075
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/skills/skills.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module YSr] deps: @anthropic-ai/sdk/resources/beta/skills/versions.mjs, @anthropic-ai/sdk/resources/beta/skills/versions.mjs, @anthropic-ai/sdk/resources/beta/models.mjs, @anthropic-ai/sdk/resources/beta/models.mjs, @anthropic-ai/sdk/internal/uploads.mjs, utils/bash/ParsedCommand.ts, vscode-jsonrpc/lib/node/ril.js
pUe = class pUe extends cp {
  constructor() {
    super(...arguments);
    this.memories = new pIt(this._client), this.memoryVersions = new fIt(this._client);
  }
  create(e, t) {
    let {
      betas: n,
      ...r
    } = e;
    return this._client.post("/v1/memory_stores?beta=true", {
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
    return this._client.get(ma`/v1/memory_stores/${e}?beta=true`, {
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
    return this._client.post(ma`/v1/memory_stores/${e}?beta=true`, {
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
    return this._client.getAPIList("/v1/memory_stores?beta=true", NS, {
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
    return this._client.delete(ma`/v1/memory_stores/${e}?beta=true`, {
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
    return this._client.post(ma`/v1/memory_stores/${e}/archive?beta=true`, {
      ...n,
      headers: ms([{
        "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
};
pUe.Memories = pIt;
pUe.MemoryVersions = fIt;