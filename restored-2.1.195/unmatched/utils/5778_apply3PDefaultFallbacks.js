// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CMc
// matched 2.1.88 source: src/utils/model/providers.ts
// class=new  jaccard=0.0529  score=0.063  fileCov=0.2499
// note: nearest: src/utils/model/providers.ts (0.0529); dir inferred from dep-graph -> utils; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var CMc = E(() => {
  kt();
  oo();
  wFe();
  je();
  RE();
  dr();
  QO();
  Ao();
  Ls();
  vMc = Object.keys(yc).filter(e => yc[e].mantle !== null);
});
var xMc = {};
_t(xMc, {
  withProbeDeadline: () => withProbeDeadline,
  apply3PDefaultFallbacks: () => apply3PDefaultFallbacks,
  TIER_LABELS: () => TIER_LABELS
});
async function withProbeDeadline(e, t) {
  let n;
  try {
    return await Promise.race([t, new Promise(r => {
      n = setTimeout((o, s) => {
        T(`[3p-probe] ${s} hit ${IMc}ms deadline; proceeding without it`), o([]);
      }, IMc, r, e);
    })]);
  } finally {
    clearTimeout(n);
  }
}
async function apply3PDefaultFallbacks() {
  switch (fr()) {
    case "bedrock":
      return {
        lines: await GIm(),
        hasHardFailure: !1
      };
    case "vertex":
      return {
        lines: await WIm(),
        hasHardFailure: !1
      };
    case "mantle":
      return qIm();
    default:
      return {
        lines: [],
        hasHardFailure: !1
      };
  }
}
async function GIm() {
  let {
      checkBedrockDefaultAvailability: e
    } = await Promise.resolve().then(() => (o7o(), r7o)),
    t = await withProbeDeadline("bedrock-fallback", e()),
    n = [];
  for (let r of t) {
    if (process.env[r.envVar] = r.fallbackBedrockId, r.tier === "haiku") process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = r.fallbackBedrockId;
    if (r.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = r.fallbackName, process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${r.fallbackName}`;
    G("tengu_bedrock_default_fallback", {
      tier: $e(r.tier),
      default_key: $e(r.defaultKey),
      fallback_key: $e(r.fallbackKey),
      cross_tier: We(r.crossTier ? "true" : "false")
    }), n.push(r.crossTier ? `${TIER_LABELS[r.tier]}: ${r.defaultName} not available \u2014 using ${r.fallbackName}. Enable ${r.defaultName} in the Bedrock console to upgrade.` : `${TIER_LABELS[r.tier]}: ${r.defaultName} not available \u2014 using ${r.fallbackName} for this session`);
  }
  return n;
}
async function WIm() {
  let {
      checkVertexDefaultAvailability: e
    } = await Promise.resolve().then(() => (a7o(), i7o)),
    t = await withProbeDeadline("vertex-fallback", e()),
    n = [];
  for (let r of t) {
    if (process.env[r.envVar] = r.fallbackVertexId, r.tier === "haiku") process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = r.fallbackVertexId;
    if (r.crossTier) process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = r.fallbackName, process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = `Opus unavailable \u2014 using ${r.fallbackName}`;
    G("tengu_vertex_default_fallback", {
      tier: $e(r.tier),
      default_key: $e(r.defaultKey),
      fallback_key: $e(r.fallbackKey),
      cross_tier: We(r.crossTier ? "true" : "false")
    }), n.push(r.crossTier ? `${TIER_LABELS[r.tier]}: ${r.defaultName} not available \u2014 using ${r.fallbackName}. Enable ${r.defaultName} in Model Garden to upgrade.` : `${TIER_LABELS[r.tier]}: ${r.defaultName} not available \u2014 using ${r.fallbackName} for this session`);
  }
  return n;
}
async function qIm() {
  let {
      checkMantleDefaultAvailability: e
    } = await Promise.resolve().then(() => (CMc(), wMc)),
    t = await withProbeDeadline("mantle-fallback", e()),
    n = [],
    r = !1,
    o;
  for (let s of t) if (s.kind === "fallback") {
    if (process.env[s.envVar] = s.fallbackMantleId, GG() == null) py(s.fallbackMantleId), o = s.fallbackMantleId;
    G("tengu_mantle_default_fallback", {
      default_key: $e(s.defaultKey),
      fallback_key: $e(s.fallbackKey)
    }), n.push(`${TIER_LABELS[s.tier]}: ${s.defaultName} not available \u2014 using ${s.fallbackName} for this session`);
  } else r = !0, G("tengu_mantle_default_fallback", {
    default_key: We("exhausted")
  }), n.push(`${TIER_LABELS[s.tier]}: no accessible model (tried ${s.triedNames.join(", ")}). Enable ${s.defaultName} in Amazon Bedrock (Mantle).`);
  return {
    lines: n,
    hasHardFailure: r,
    mantleOverride: o
  };
}
var TIER_LABELS,
  IMc = 20000;