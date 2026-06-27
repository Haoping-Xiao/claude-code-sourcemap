// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jG
// matched 2.1.88 source: src/utils/modelCost.ts
// class=modified (alt of src/utils/modelCost.ts)  jaccard=0.0761  score=0.1349  fileCov=0.1485
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jG] deps: utils/debug.ts, services/analytics/index.ts, utils/config.ts, utils/modelCost.ts, utils/model/configs.ts, utils/agentContext.ts
((gye = {
  inputTokens: 3,
  outputTokens: 15,
  promptCacheWriteTokens: 3.75,
  promptCacheWrite1hTokens: 6,
  promptCacheReadTokens: 0.3,
  webSearchRequests: 0.01,
}),
  (Coi = {
    inputTokens: 15,
    outputTokens: 75,
    promptCacheWriteTokens: 18.75,
    promptCacheWrite1hTokens: 30,
    promptCacheReadTokens: 1.5,
    webSearchRequests: 0.01,
  }),
  (ule = {
    inputTokens: 5,
    outputTokens: 25,
    promptCacheWriteTokens: 6.25,
    promptCacheWrite1hTokens: 10,
    promptCacheReadTokens: 0.5,
    webSearchRequests: 0.01,
  }),
  (xoi = {
    inputTokens: 30,
    outputTokens: 150,
    promptCacheWriteTokens: 37.5,
    promptCacheWrite1hTokens: 60,
    promptCacheReadTokens: 3,
    webSearchRequests: 0.01,
  }),
  (pAn = {
    inputTokens: 10,
    outputTokens: 50,
    promptCacheWriteTokens: 12.5,
    promptCacheWrite1hTokens: 20,
    promptCacheReadTokens: 1,
    webSearchRequests: 0.01,
  }),
  (I2r = {
    inputTokens: 0.8,
    outputTokens: 4,
    promptCacheWriteTokens: 1,
    promptCacheWrite1hTokens: 1.6,
    promptCacheReadTokens: 0.08,
    webSearchRequests: 0.01,
  }),
  (x2r = {
    inputTokens: 1,
    outputTokens: 5,
    promptCacheWriteTokens: 1.25,
    promptCacheWrite1hTokens: 2,
    promptCacheReadTokens: 0.1,
    webSearchRequests: 0.01,
  }),
  (k2r = ule));
Z2e = {
  [$_(QBr.firstParty)]: I2r,
  [$_(ZBr.firstParty)]: x2r,
  [$_(JBr.firstParty)]: gye,
  [$_(XBr.firstParty)]: gye,
  [$_(eUr.firstParty)]: gye,
  [$_(tUr.firstParty)]: gye,
  [$_(nUr.firstParty)]: gye,
  [$_(rUr.firstParty)]: Coi,
  [$_(oUr.firstParty)]: Coi,
  [$_(sUr.firstParty)]: ule,
  [$_(iUr.firstParty)]: ule,
  [$_(aUr.firstParty)]: ule,
  [$_(lUr.firstParty)]: ule,
  [$_(MIe.firstParty)]: pAn,
  [$_(y7s.firstParty)]: pAn,
};
function Doi() {
  if (!ut(process.env.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY)) return false;
  if (fr() !== "firstParty") return false;
  if (_u()) return false;
  if (!process.env.ANTHROPIC_BASE_URL) return false;
  return true;
}
function Poi() {
  return P2r.join(tr(), "cache");
}
function Moi() {
  return P2r.join(Poi(), "gateway-models.json");
}
function mAn() {
  if (!Doi()) return [];
  let e = D2r(Moi());
  if (!e || e.baseUrl !== process.env.ANTHROPIC_BASE_URL) return [];
  return e.models.map((t) => ({
    value: t.id,
    label: t.display_name || t.id,
    description: "From gateway",
  }));
}
async function $oi() {
  if (!Doi()) return;
  if (Vi()) return;
  try {
    let e = process.env.ANTHROPIC_BASE_URL;
    if (!e) return;
    let t = process.env.ANTHROPIC_AUTH_TOKEN,
      n = lI();
    if (!t && !n) return;
    let r = {};
    for (let d of (process.env.ANTHROPIC_CUSTOM_HEADERS ?? "").split(/\r?\n/)) {
      let p = d.indexOf(":");
      if (p <= 0) continue;
      let f = d.slice(0, p).trim(),
        m = d.slice(p + 1).trim();
      if (f && m) r[f] = m;
    }
    let o = `${e.replace(/\/+$/, "")}/v1/models?limit=1000`,
      s = await fetch(o, {
        method: "GET",
        headers: {
          ...(t
            ? {
                Authorization: `Bearer ${t}`,
              }
            : n
              ? {
                  "x-api-key": n,
                }
              : {}),
          "anthropic-version": "2023-06-01",
          "User-Agent": dy(),
          ...r,
        },
        redirect: "error",
        signal: AbortSignal.timeout(rpd),
        ...kg({
          url: o,
        }),
      });
    if (!s.ok) {
      T(`[gatewayDiscovery] non-OK status ${s.status}`);
      return;
    }
    let i = await s.json(),
      a = H.object({
        data: H.array(Loi()),
      }).safeParse(i);
    if (!a.success) {
      T("[gatewayDiscovery] response body failed validation");
      return;
    }
    let l = a.data.data.filter((d) => /^(claude|anthropic)/i.test(d.id));
    if (l.length === 0) {
      T("[gatewayDiscovery] 0 usable models after filter");
      return;
    }
    let c = Moi(),
      u = D2r(c);
    if (u && u.baseUrl === e && L_(u.models, l)) return;
    (await fAn.mkdir(Poi(), {
      recursive: true,
    }),
      await fAn.writeFile(
        c,
        De({
          baseUrl: e,
          fetchedAt: Date.now(),
          models: l,
        }),
        {
          encoding: "utf-8",
          mode: 384,
        },
      ),
      D2r.cache.delete(c),
      T(`[gatewayDiscovery] cached ${l.length} models`));
  } catch (e) {
    T(`[gatewayDiscovery] fetch failed: ${e instanceof Error ? e.message : "unknown"}`);
  }
}
var Roi,
  fAn,
  P2r,
  rpd = 3000,
  Loi,
  opd,
  D2r;
