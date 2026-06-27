// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module USr
// matched 2.1.88 source: src/bridge/bridgeApi.ts
// class=modified (alt of src/bridge/bridgeApi.ts)  jaccard=0.0194  score=0.2224  fileCov=0.0208
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module USr] deps: @anthropic-ai/sdk/internal/uploads.mjs, utils/bash/ParsedCommand.ts, vscode-jsonrpc/lib/node/ril.js
sIt = class sIt extends cp {
  create(e, t) {
    let { betas: n, ...r } = e;
    return this._client.post("/v1/environments?beta=true", {
      body: r,
      ...t,
      headers: ms([
        {
          "anthropic-beta": [...(n ?? []), "managed-agents-2026-04-01"].toString(),
        },
        t?.headers,
      ]),
    });
  }
  retrieve(e, t = {}, n) {
    let { betas: r } = t ?? {};
    return this._client.get(ma`/v1/environments/${e}?beta=true`, {
      ...n,
      headers: ms([
        {
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString(),
        },
        n?.headers,
      ]),
    });
  }
  update(e, t, n) {
    let { betas: r, ...o } = t;
    return this._client.post(ma`/v1/environments/${e}?beta=true`, {
      body: o,
      ...n,
      headers: ms([
        {
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString(),
        },
        n?.headers,
      ]),
    });
  }
  list(e = {}, t) {
    let { betas: n, ...r } = e ?? {};
    return this._client.getAPIList("/v1/environments?beta=true", NS, {
      query: r,
      ...t,
      headers: ms([
        {
          "anthropic-beta": [...(n ?? []), "managed-agents-2026-04-01"].toString(),
        },
        t?.headers,
      ]),
    });
  }
  delete(e, t = {}, n) {
    let { betas: r } = t ?? {};
    return this._client.delete(ma`/v1/environments/${e}?beta=true`, {
      ...n,
      headers: ms([
        {
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString(),
        },
        n?.headers,
      ]),
    });
  }
  archive(e, t = {}, n) {
    let { betas: r } = t ?? {};
    return this._client.post(ma`/v1/environments/${e}/archive?beta=true`, {
      ...n,
      headers: ms([
        {
          "anthropic-beta": [...(r ?? []), "managed-agents-2026-04-01"].toString(),
        },
        n?.headers,
      ]),
    });
  }
};
function sin(e) {
  return typeof e === "object" && e !== null && iIt in e;
}
function FSr(e, t) {
  let n = new Set();
  if (e) {
    for (let r of e) if (sin(r)) n.add(r[iIt]);
  }
  if (t)
    for (let r of t) {
      if (sin(r)) n.add(r[iIt]);
      if (Array.isArray(r.content)) {
        for (let o of r.content) if (sin(o)) n.add(o[iIt]);
      }
    }
  return Array.from(n);
}
function iin(e, t) {
  let n = FSr(e, t);
  if (n.length === 0) return {};
  return {
    "x-stainless-helper": n.join(", "),
  };
}
function Ios(e) {
  if (sin(e))
    return {
      "x-stainless-helper": e[iIt],
    };
  return {};
}
var iIt;
