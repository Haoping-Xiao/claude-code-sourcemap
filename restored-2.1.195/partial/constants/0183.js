// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gEr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/skills/versions.mjs
// class=partial  jaccard=0.2107  score=0.3999  fileCov=0.3082
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/skills/versions.mjs; dir inferred from dep-graph -> constants; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gEr] deps: Tx, rv, DR
IIt = class IIt extends cp {
  create(e, t, n) {
    let {
      betas: r,
      ...o
    } = t;
    return this._client.post(ma`/v1/vaults/${e}/credentials?beta=true`, {
      body: o,
      ...n,
      headers: ms([{
        "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  retrieve(e, t, n) {
    let {
      vault_id: r,
      betas: o
    } = t;
    return this._client.get(ma`/v1/vaults/${r}/credentials/${e}?beta=true`, {
      ...n,
      headers: ms([{
        "anthropic-beta": [...(o ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  update(e, t, n) {
    let {
      vault_id: r,
      betas: o,
      ...s
    } = t;
    return this._client.post(ma`/v1/vaults/${r}/credentials/${e}?beta=true`, {
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
    return this._client.getAPIList(ma`/v1/vaults/${e}/credentials?beta=true`, NS, {
      query: o,
      ...n,
      headers: ms([{
        "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  delete(e, t, n) {
    let {
      vault_id: r,
      betas: o
    } = t;
    return this._client.delete(ma`/v1/vaults/${r}/credentials/${e}?beta=true`, {
      ...n,
      headers: ms([{
        "anthropic-beta": [...(o ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  archive(e, t, n) {
    let {
      vault_id: r,
      betas: o
    } = t;
    return this._client.post(ma`/v1/vaults/${r}/credentials/${e}/archive?beta=true`, {
      ...n,
      headers: ms([{
        "anthropic-beta": [...(o ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
};
var MJe;