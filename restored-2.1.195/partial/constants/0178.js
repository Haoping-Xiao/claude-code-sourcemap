// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uEr
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/messages/batches.mjs
// class=partial  jaccard=0.1247  score=0.4416  fileCov=0.1481
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/messages/batches.mjs; dir inferred from dep-graph -> constants; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uEr] deps: Tx, rv, DR
vIt = class vIt extends cp {
  list(e, t = {}, n) {
    let {
      betas: r,
      ...o
    } = t ?? {};
    return this._client.getAPIList(ma`/v1/sessions/${e}/events?beta=true`, NS, {
      query: o,
      ...n,
      headers: ms([{
        "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  send(e, t, n) {
    let {
      betas: r,
      ...o
    } = t;
    return this._client.post(ma`/v1/sessions/${e}/events?beta=true`, {
      body: o,
      ...n,
      headers: ms([{
        "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  stream(e, t = {}, n) {
    let {
      betas: r
    } = t ?? {};
    return this._client.get(ma`/v1/sessions/${e}/events/stream?beta=true`, {
      ...n,
      headers: ms([{
        "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers]),
      stream: true
    });
  }
};
var wIt;