// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NE
// matched 2.1.88 source: src/utils/modelCost.ts
// class=modified  jaccard=0.2748  score=0.4322  fileCov=0.43
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NE] deps: axios/lib/axios.js, constants/oauth.ts, services/analytics/growthbook.ts, services/analytics/index.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, utils/debug.ts, utils/http.ts, utils/config.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/fastMode.ts, utils/agentContext.ts, utils/status.tsx, utils/log.ts, utils/settings/settings.ts, bootstrap/state.ts
Jdd = [
  {
    canonical: "claude-opus-4-6",
    label: "Opus 4.6",
    flag: "tengu_sunset_penguin_opus46",
    defaultDate: "2026-06-29",
  },
  {
    canonical: "claude-opus-4-7",
    label: "Opus 4.7",
    flag: "tengu_sunset_penguin_opus47",
    defaultDate: "2026-07-25",
  },
];
((Knt = {
  status: "active",
}),
  (yoi = Mi()),
  (_oi = Mi()),
  (boi = yoi.subscribe),
  (Soi = _oi.subscribe));
((Hoi = Mi()), (Toi = Hoi.subscribe));
((s1 = {
  status: "pending",
}),
  (w2r = Mi()),
  (woi = w2r.subscribe));
function Xnt(e, t) {
  if (sc() && e) {
    if (t === "claude-opus-4-8") return pAn;
    return xoi;
  }
  return ule;
}
function tpd(e, t) {
  let n = t.cache_creation_input_tokens ?? 0,
    r = e.promptCacheWrite1hTokens,
    o = Math.min(t.cache_creation?.ephemeral_1h_input_tokens ?? 0, n);
  if (r === void 0 || o <= 0) return (n / 1000000) /* 1e6 */ * e.promptCacheWriteTokens;
  return (o / 1000000) /* 1e6 */ * r + ((n - o) / 1000000) /* 1e6 */ * e.promptCacheWriteTokens;
}
function R2r(e, t) {
  return (
    (t.input_tokens / 1000000) /* 1e6 */ * e.inputTokens +
    (t.output_tokens / 1000000) /* 1e6 */ * e.outputTokens +
    ((t.cache_read_input_tokens ?? 0) / 1000000) /* 1e6 */ * e.promptCacheReadTokens +
    tpd(e, t) +
    (t.server_tool_use?.web_search_requests ?? 0) * e.webSearchRequests
  );
}
function L2r(e, t) {
  let n = mo(e);
  if (t.speed === "fast") {
    if (n === "claude-opus-4-8") return pAn;
    if (n === "claude-opus-4-6" || n === "claude-opus-4-7") return xoi;
  }
  let r = Z2e[n];
  if (r) return r;
  let o = Dt().additionalModelCostsCache,
    s = o?.[e] ?? o?.[n];
  if (s) return s;
  return (trackUnknownModelCost(e, n), Z2e[mo(Uw())] ?? k2r);
}
function trackUnknownModelCost(model, shortName) {
  (G("tengu_unknown_model_cost", {
    model: model,
    shortName: shortName,
  }),
    nsn());
}
function WY(e, t) {
  let n = L2r(e, t);
  return R2r(n, t);
}
function eje(e, t, n) {
  let r = {
    input_tokens: t.inputTokens,
    output_tokens: t.outputTokens,
    cache_read_input_tokens: t.cacheReadInputTokens,
    cache_creation_input_tokens: t.cacheCreationInputTokens,
    ...(n?.speed !== void 0 && {
      speed: n.speed,
    }),
    ...(n?.serverToolUse !== void 0 && {
      server_tool_use: n.serverToolUse,
    }),
  };
  return WY(e, r);
}
function Ioi(e) {
  if (Number.isInteger(e)) return `$${e}`;
  return `$${e.toFixed(2)}`;
}
function eU(e) {
  return `${Ioi(e.inputTokens)}/${Ioi(e.outputTokens)} per Mtok`;
}
function koi(e) {
  let t = mo(e),
    n = Z2e[t];
  if (!n) return;
  return eU(n);
}
var gye, Coi, ule, xoi, pAn, I2r, x2r, k2r, Z2e;
