// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o7o
// matched 2.1.88 source: src/services/api/client.ts
// class=new  jaccard=0.0367  score=0.0967  fileCov=0.0559
// note: nearest: src/services/api/client.ts (0.0367); dir inferred from dep-graph -> utils; 4 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module o7o] deps: kt, pke, oo, wFe, je, fn, dr, rle, QO, Ao, Ls
ztn = Object.keys(yc), tmr = {
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
var i7o = {};
_t(i7o, {
  vertexUpgradeKey: () => vertexUpgradeKey,
  probeVertexModel: () => probeVertexModel,
  findVertexUpgradeCandidates: () => findVertexUpgradeCandidates,
  checkVertexDefaultAvailability: () => checkVertexDefaultAvailability
});
function s7o(e) {
  if (e.startsWith("sonnet")) return "sonnet";
  if (e.startsWith("opus")) return "opus";
  if (e.startsWith("haiku")) return "haiku";
  return;
}
function TMc(e) {
  let t = $_(e);
  for (let n of Ktn) if ($_(yc[n].firstParty) === t) return n;
  return;
}
function vertexUpgradeKey(e) {
  return `${e.fromKey}-to-${e.toKey}`;
}
async function findVertexUpgradeCandidates() {
  if (fr() !== "vertex") return [];
  if (ut(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return [];
  let e = [];
  for (let r of Object.keys(rmr)) {
    let o = rmr[r],
      s,
      i;
    for (let u of o.envVarPriority) {
      let d = process.env[u];
      if (!d) continue;
      let p = TMc(d);
      if (!p || s7o(p) !== r || p === o.defaultKey) continue;
      s = u, i = p;
      break;
    }
    if (!s || !i) continue;
    let a = o.defaultKey,
      l = Ktn.indexOf(i),
      c = Ktn.indexOf(a);
    if (l >= c) continue;
    e.push({
      tier: r,
      envVar: s,
      pinnedKey: i,
      defaultKey: a
    });
  }
  if (e.length === 0) return [];
  G("tengu_vertex_upgrade_check", {
    stale_tiers: yB(e.length)
  });
  let n = (await Promise.all(e.map(async r => {
    let o = yc[r.defaultKey].vertex,
      s = await probeVertexModel(o);
    if (G("tengu_vertex_probe_result", {
      tier: $e(r.tier),
      model_id: Cf(o),
      accessible: s
    }), !s) return null;
    let i = $h(yc[r.pinnedKey].firstParty),
      a = $h(yc[r.defaultKey].firstParty);
    if (!i || !a) return null;
    return {
      tier: r.tier,
      envVar: r.envVar,
      fromKey: r.pinnedKey,
      fromMarketingName: i,
      toKey: r.defaultKey,
      toMarketingName: a,
      toVertexId: o
    };
  }))).filter(r => r !== null);
  return T(`[vertex-upgrade] tiersWithPin=${e.length} candidates=${n.length}`), n;
}
async function checkVertexDefaultAvailability() {
  if (fr() !== "vertex") return [];
  if (ut(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return [];
  let e = Dr().modelOverrides,
    t = [];
  for (let o of Object.keys(rmr)) {
    let s = rmr[o];
    if (e?.[yc[s.defaultKey].firstParty]) continue;
    if (s.envVarPriority.some(a => {
      let l = process.env[a];
      if (!l) return false;
      let c = TMc(l);
      if (!c) return true;
      return s7o(c) === o;
    })) continue;
    t.push({
      tier: o,
      envVar: s.envVarPriority.at(-1),
      defaultKey: s.defaultKey
    });
  }
  if (t.length === 0) return [];
  G("tengu_vertex_default_check", {
    unpinned_tiers: yB(t.length)
  });
  let n = await Promise.all(t.map(async o => {
      let s = yc[o.defaultKey],
        i = await probeVertexModel(s.vertex);
      if (G("tengu_vertex_probe_result", {
        tier: $e(o.tier),
        model_id: $e(s.vertex),
        accessible: i
      }), i) return null;
      let a = await UIm(o.defaultKey, o.tier, e);
      if (!a) return null;
      let l = $h(s.firstParty),
        c = $h(yc[a.key].firstParty);
      if (!l || !c) return null;
      return {
        tier: o.tier,
        envVar: o.envVar,
        defaultKey: o.defaultKey,
        defaultName: l,
        fallbackKey: a.key,
        fallbackName: c,
        fallbackVertexId: yc[a.key].vertex,
        ...(a.crossTier && {
          crossTier: true
        })
      };
    })),
    r = [];
  for (let o of n) if (o !== null) r.push(o);
  return T(`[vertex-fallback] unpinnedTiers=${t.length} fallbacks=${r.length}`), r;
}
async function UIm(e, t, n) {
  let r = FIm(e, t).filter(s => !n?.[yc[s].firstParty]),
    o = await Promise.all(r.map(s => probeVertexModel(yc[s].vertex)));
  for (let [s, i] of o.entries()) if (i) return {
    key: r[s]
  };
  if (t === "opus") {
    let s = _j;
    if (await probeVertexModel(yc[s].vertex)) return {
      key: s,
      crossTier: true
    };
  }
  return null;
}
function FIm(e, t) {
  let n = Ktn.indexOf(e),
    r = [];
  for (let o = n - 1; o >= 0; o--) {
    let s = Ktn[o];
    if (s7o(s) === t) r.push(s);
  }
  return r;
}
async function probeVertexModel(e) {
  try {
    let [{
      AnthropicVertex: t
    }, {
      getProxyFetchOptions: n
    }] = await Promise.all([Promise.resolve().then(() => (zOt(), VOt)), Promise.resolve().then(() => (Mh(), k2e))]);
    if (!ut(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH)) await N4e();
    let r = process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT || process.env.gcloud_project || process.env.google_cloud_project,
      o = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials,
      s = r || o ? void 0 : process.env.ANTHROPIC_VERTEX_PROJECT_ID,
      i = await Pot(ut(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH) ? {
        kind: "skip"
      } : {
        kind: "default"
      }, s),
      a = Yie(e);
    return await new t({
      region: a,
      googleAuth: i,
      maxRetries: 0,
      timeout: 8000,
      fetchOptions: n({
        url: process.env.ANTHROPIC_VERTEX_BASE_URL || HJe(a)
      })
    }).messages.create({
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
var Ktn, rmr;