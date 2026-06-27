// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QO
// matched 2.1.88 source: src/utils/model/configs.ts
// class=modified  jaccard=0.5533  score=0.5755  fileCov=0.9348
// note: deminified; 13 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var QO = E(() => {
  ((XBr = {
    firstParty: "claude-3-7-sonnet-20250219",
    bedrock: "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
    vertex: "claude-3-7-sonnet@20250219",
    foundry: "claude-3-7-sonnet",
    anthropicAws: "claude-3-7-sonnet-20250219",
    mantle: null,
    gateway: "claude-3-7-sonnet-20250219",
  }),
    (JBr = {
      firstParty: "claude-3-5-sonnet-20241022",
      bedrock: "us.anthropic.claude-3-5-sonnet-20241022-v2:0",
      vertex: "claude-3-5-sonnet-v2@20241022",
      foundry: "claude-3-5-sonnet",
      anthropicAws: "claude-3-5-sonnet-20241022",
      mantle: null,
      gateway: "claude-3-5-sonnet-20241022",
    }),
    (QBr = {
      firstParty: "claude-3-5-haiku-20241022",
      bedrock: "us.anthropic.claude-3-5-haiku-20241022-v1:0",
      vertex: "claude-3-5-haiku@20241022",
      foundry: "claude-3-5-haiku",
      anthropicAws: "claude-3-5-haiku-20241022",
      mantle: null,
      gateway: "claude-3-5-haiku-20241022",
      eagerInputStreaming: {
        vertex: true,
      },
    }),
    (ZBr = {
      firstParty: "claude-haiku-4-5-20251001",
      bedrock: "us.anthropic.claude-haiku-4-5-20251001-v1:0",
      vertex: "claude-haiku-4-5@20251001",
      foundry: "claude-haiku-4-5",
      anthropicAws: "claude-haiku-4-5-20251001",
      mantle: "anthropic.claude-haiku-4-5",
      gateway: "claude-haiku-4-5-20251001",
    }),
    (eUr = {
      firstParty: "claude-sonnet-4-20250514",
      bedrock: "us.anthropic.claude-sonnet-4-20250514-v1:0",
      vertex: "claude-sonnet-4@20250514",
      foundry: "claude-sonnet-4",
      anthropicAws: "claude-sonnet-4-20250514",
      mantle: null,
      gateway: "claude-sonnet-4-20250514",
      eagerInputStreaming: {
        vertex: true,
      },
    }),
    (tUr = {
      firstParty: "claude-sonnet-4-5-20250929",
      bedrock: "us.anthropic.claude-sonnet-4-5-20250929-v1:0",
      vertex: "claude-sonnet-4-5@20250929",
      foundry: "claude-sonnet-4-5",
      anthropicAws: "claude-sonnet-4-5-20250929",
      mantle: null,
      gateway: "claude-sonnet-4-5-20250929",
      eagerInputStreaming: {
        vertex: true,
      },
    }),
    (nUr = {
      firstParty: "claude-sonnet-4-6",
      bedrock: "us.anthropic.claude-sonnet-4-6",
      vertex: "claude-sonnet-4-6",
      foundry: "claude-sonnet-4-6",
      anthropicAws: "claude-sonnet-4-6",
      mantle: null,
      gateway: "claude-sonnet-4-6",
      eagerInputStreaming: {
        bedrock: true,
        vertex: true,
      },
    }),
    (rUr = {
      firstParty: "claude-opus-4-20250514",
      bedrock: "us.anthropic.claude-opus-4-20250514-v1:0",
      vertex: "claude-opus-4@20250514",
      foundry: "claude-opus-4",
      anthropicAws: "claude-opus-4-20250514",
      mantle: null,
      gateway: "claude-opus-4-20250514",
    }),
    (oUr = {
      firstParty: "claude-opus-4-1-20250805",
      bedrock: "us.anthropic.claude-opus-4-1-20250805-v1:0",
      vertex: "claude-opus-4-1@20250805",
      foundry: "claude-opus-4-1",
      anthropicAws: "claude-opus-4-1-20250805",
      mantle: null,
      gateway: "claude-opus-4-1-20250805",
    }),
    (sUr = {
      firstParty: "claude-opus-4-5-20251101",
      bedrock: "us.anthropic.claude-opus-4-5-20251101-v1:0",
      vertex: "claude-opus-4-5@20251101",
      foundry: "claude-opus-4-5",
      anthropicAws: "claude-opus-4-5-20251101",
      mantle: null,
      gateway: "claude-opus-4-5-20251101",
      eagerInputStreaming: {
        vertex: true,
      },
    }),
    (iUr = {
      firstParty: "claude-opus-4-6",
      bedrock: "us.anthropic.claude-opus-4-6-v1",
      vertex: "claude-opus-4-6",
      foundry: "claude-opus-4-6",
      anthropicAws: "claude-opus-4-6",
      mantle: null,
      gateway: "claude-opus-4-6",
      eagerInputStreaming: {
        vertex: true,
      },
    }),
    (aUr = {
      firstParty: "claude-opus-4-7",
      bedrock: "us.anthropic.claude-opus-4-7",
      vertex: "claude-opus-4-7",
      foundry: "claude-opus-4-7",
      anthropicAws: "claude-opus-4-7",
      mantle: "anthropic.claude-opus-4-7",
      gateway: "claude-opus-4-7",
      eagerInputStreaming: {
        bedrock: true,
        vertex: true,
      },
    }),
    (lUr = {
      firstParty: "claude-opus-4-8",
      bedrock: "us.anthropic.claude-opus-4-8",
      vertex: "claude-opus-4-8",
      foundry: "claude-opus-4-8",
      anthropicAws: "claude-opus-4-8",
      mantle: "anthropic.claude-opus-4-8",
      gateway: "claude-opus-4-8",
      eagerInputStreaming: {
        bedrock: true,
        vertex: true,
      },
    }),
    (MIe = {
      firstParty: "claude-fable-5",
      bedrock: "us.anthropic.claude-fable-5",
      vertex: "claude-fable-5",
      foundry: "claude-fable-5",
      anthropicAws: "claude-fable-5",
      mantle: "anthropic.claude-fable-5",
      gateway: "claude-fable-5",
      eagerInputStreaming: {
        bedrock: true,
        vertex: true,
      },
    }),
    (y7s = {
      firstParty: "claude-mythos-5",
      bedrock: "us.anthropic.claude-mythos-5",
      vertex: "claude-mythos-5",
      foundry: "claude-mythos-5",
      anthropicAws: "claude-mythos-5",
      mantle: "anthropic.claude-mythos-5",
      gateway: "claude-mythos-5",
      eagerInputStreaming: {
        bedrock: true,
        vertex: true,
      },
    }),
    (yc = {
      haiku35: QBr,
      haiku45: ZBr,
      sonnet35: JBr,
      sonnet37: XBr,
      sonnet40: eUr,
      sonnet45: tUr,
      sonnet46: nUr,
      opus40: rUr,
      opus41: oUr,
      opus45: sUr,
      opus46: iUr,
      opus47: aUr,
      opus48: lUr,
      fable5: MIe,
    }),
    (cUr = ["opus48", "opus47", "opus46", "opus45"]),
    (_7s = Object.values(yc).map((e) => e.firstParty)),
    (MSn = Object.fromEntries(Object.entries(yc).map(([e, t]) => [t.firstParty, e]))));
});
var b7s = {};
_t(b7s, {
  usesFirstPartyModelIds: () => usesFirstPartyModelIds,
  shouldPropagateTraceContext: () => shouldPropagateTraceContext,
  isFirstPartyProvider: () => isFirstPartyProvider,
  isFirstPartyApiBackend: () => isFirstPartyApiBackend,
  isFirstPartyAnthropicHost: () => isFirstPartyAnthropicHost,
  isFirstPartyAnthropicBaseUrl: () => isFirstPartyAnthropicBaseUrl,
  isActualFirstPartyAnthropicBaseUrl: () => isActualFirstPartyAnthropicBaseUrl,
  hasFirstPartyCapabilities: () => hasFirstPartyCapabilities,
  getSecondaryProvider: () => getSecondaryProvider,
  getProviderForModel: () => getProviderForModel,
  getAPIProviderForAnalytics: () => getAPIProviderForAnalytics,
  getAPIProvider: () => getAPIProvider,
  THIRD_PARTY_PROVIDER_LABELS: () => THIRD_PARTY_PROVIDER_LABELS,
});
function getAPIProvider() {
  if (km()) return "gateway";
  return ut(process.env.CLAUDE_CODE_USE_BEDROCK)
    ? "bedrock"
    : ut(process.env.CLAUDE_CODE_USE_FOUNDRY)
      ? "foundry"
      : ut(process.env.CLAUDE_CODE_USE_ANTHROPIC_AWS)
        ? "anthropicAws"
        : ut(process.env.CLAUDE_CODE_USE_MANTLE)
          ? "mantle"
          : ut(process.env.CLAUDE_CODE_USE_VERTEX)
            ? "vertex"
            : "firstParty";
}
function getAPIProviderForAnalytics() {
  return $e(getAPIProvider());
}
function isFirstPartyProvider() {
  return getAPIProvider() === "firstParty";
}
function getSecondaryProvider() {
  if (getAPIProvider() === "bedrock" && ut(process.env.CLAUDE_CODE_USE_MANTLE)) return "mantle";
  return null;
}
function yld(e) {
  return e.startsWith("anthropic.") && !/-v\d+(:\d+)?$/.test(e);
}
function getProviderForModel(e) {
  if (e) {
    let t = getSecondaryProvider();
    if (t) {
      if (t === "mantle" && yld(e)) return t;
      let n = getAPIProvider(),
        r = y9(e);
      if (r && r[n] === null && r[t] !== null) return t;
    }
  }
  return getAPIProvider();
}
function usesFirstPartyModelIds(e = getAPIProvider()) {
  return e === "firstParty" || e === "anthropicAws" || e === "gateway";
}
function hasFirstPartyCapabilities(e = getAPIProvider()) {
  return e === "firstParty" || e === "anthropicAws" || e === "foundry" || e === "mantle";
}
function isFirstPartyApiBackend() {
  return getAPIProvider() === "firstParty" && isFirstPartyAnthropicBaseUrl();
}
function isFirstPartyAnthropicBaseUrl() {
  if (Oe._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL) return true;
  return isActualFirstPartyAnthropicBaseUrl();
}
function isActualFirstPartyAnthropicBaseUrl() {
  let e = process.env.ANTHROPIC_BASE_URL;
  if (!e) return true;
  return isFirstPartyAnthropicHost(e);
}
function isFirstPartyAnthropicHost(e) {
  try {
    let t = new URL(e).host;
    return ["api.anthropic.com"].includes(t);
  } catch {
    return false;
  }
}
function shouldPropagateTraceContext() {
  return isFirstPartyAnthropicBaseUrl() || ut(process.env.CLAUDE_CODE_PROPAGATE_TRACEPARENT);
}
var THIRD_PARTY_PROVIDER_LABELS;
