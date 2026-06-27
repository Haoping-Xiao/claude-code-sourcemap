// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module a7o
// matched 2.1.88 source: src/utils/managedEnvConstants.ts
// class=new  jaccard=0.0296  score=0.094  fileCov=0.0415
// note: nearest: src/utils/managedEnvConstants.ts (0.0296); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var a7o = E(() => {
  kt();
  pke();
  oo();
  je();
  fn();
  dr();
  QO();
  Ao();
  Ls();
  ACn();
  Ktn = Object.keys(yc), rmr = {
    sonnet: {
      envVarPriority: ["ANTHROPIC_DEFAULT_SONNET_MODEL"],
      defaultKey: _j
    },
    opus: {
      envVarPriority: ["ANTHROPIC_DEFAULT_OPUS_MODEL"],
      defaultKey: VY
    },
    haiku: {
      envVarPriority: ["ANTHROPIC_SMALL_FAST_MODEL", "ANTHROPIC_DEFAULT_HAIKU_MODEL"],
      defaultKey: zY
    }
  };
});
var wMc = {};
_t(wMc, {
  probeMantleModel: () => probeMantleModel,
  checkMantleDefaultAvailability: () => checkMantleDefaultAvailability
});
async function checkMantleDefaultAvailability(e = Jnt) {
  if (fr() !== "mantle") return [];
  if (Oe.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return [];
  let t = Dr().modelOverrides;
  if (Oe.ANTHROPIC_DEFAULT_OPUS_MODEL || t?.[yc[e].firstParty]) return [];
  let n = yc[e].mantle;
  if (!n) return [];
  G("tengu_mantle_default_check", {});
  let r = await probeMantleModel(n);
  if (G("tengu_mantle_probe_result", {
    model_key: $e(e),
    accessible: We(r ? "true" : "false")
  }), r) return [];
  let o = $h(yc[e].firstParty) ?? n,
    s = vMc.indexOf(e),
    i = vMc.slice(0, s).reverse().filter(c => c.startsWith("opus") && !t?.[yc[c].firstParty]),
    a = await Promise.all(i.map(async c => {
      let u = yc[c].mantle,
        d = await probeMantleModel(u);
      G("tengu_mantle_probe_result", {
        model_key: $e(c),
        accessible: We(d ? "true" : "false")
      });
      let p = $h(yc[c].firstParty) ?? u;
      return {
        key: c,
        mantleId: u,
        name: p,
        ok: d
      };
    }));
  for (let c of a) if (c.ok) return T(`[mantle-fallback] default=${e} fallback=${c.key}`), [{
    kind: "fallback",
    tier: "opus",
    envVar: "ANTHROPIC_DEFAULT_OPUS_MODEL",
    defaultKey: e,
    defaultName: o,
    fallbackKey: c.key,
    fallbackName: c.name,
    fallbackMantleId: c.mantleId
  }];
  let l = [o, ...a.map(c => c.name)];
  return T(`[mantle-fallback] default=${e} exhausted \u2014 no working Opus`), [{
    kind: "exhausted",
    tier: "opus",
    defaultName: o,
    triedNames: l
  }];
}
async function probeMantleModel(e) {
  try {
    let [{
        AnthropicBedrockMantle: t
      }, {
        getProxyFetchOptions: n
      }] = await Promise.all([Promise.resolve().then(() => (Aje(), Eje)), Promise.resolve().then(() => (Mh(), k2e))]),
      r = await nj(),
      o = {
        awsRegion: r,
        maxRetries: 0,
        timeout: 8000,
        fetchOptions: n({
          url: Oe.ANTHROPIC_BEDROCK_MANTLE_BASE_URL || `https://bedrock-mantle.${r}.api.aws`
        })
      },
      s,
      i = Oe.AWS_BEARER_TOKEN_BEDROCK;
    if (i) s = new t({
      ...o,
      apiKey: i
    });else {
      let a = Oe.CLAUDE_CODE_SKIP_MANTLE_AUTH,
        l = a ? null : await BG();
      s = l ? new t({
        ...o,
        awsAccessKey: l.accessKeyId,
        awsSecretAccessKey: l.secretAccessKey,
        awsSessionToken: l.sessionToken
      }) : new t({
        ...o,
        ...(a && {
          skipAuth: true
        })
      });
    }
    return await s.messages.create({
      model: e,
      max_tokens: 1,
      messages: [{
        role: "user",
        content: "."
      }]
    }), true;
  } catch (t) {
    if (t?.status === 429) return true;
    return false;
  }
}
var vMc;