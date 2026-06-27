// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vtn
// matched 2.1.88 source: src/services/api/client.ts
// class=modified (alt of src/services/api/client.ts)  jaccard=0.0362  score=0.1086  fileCov=0.0515
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: upgradeKey, probeBedrockModel, findBedrockUpgradeCandidates, checkBedrockDefaultAvailability
// [unwrapped __esm module Vtn] deps: ft, Rm, er, je, BR, oc, gM, sa
_Mc = require("fs/promises");
var r7o = {};
function n7o(e) {
  if (e.startsWith("sonnet")) return "sonnet";
  if (e.startsWith("opus")) return "opus";
  if (e.startsWith("haiku")) return "haiku";
  return;
}
function AMc(e) {
  let t = $_(e);
  for (let n of ztn) if ($_(yc[n].firstParty) === t) return n;
  return;
}
function upgradeKey(e) {
  return `${e.fromKey}-to-${e.toKey}`;
}
async function findBedrockUpgradeCandidates() {
  if (fr() !== "bedrock") return [];
  if (ut(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return [];
  let e = [];
  for (let i of Object.keys(tmr)) {
    let a = tmr[i],
      l,
      c,
      u;
    for (let m of a.envVarPriority) {
      let g = process.env[m];
      if (!g) continue;
      if (g.includes("application-inference-profile")) continue;
      let h = AMc(g);
      if (!h || n7o(h) !== i || h === a.defaultKey) continue;
      ((l = m), (c = g), (u = h));
      break;
    }
    if (!l || !c || !u) continue;
    let d = a.defaultKey,
      p = ztn.indexOf(u),
      f = ztn.indexOf(d);
    if (p >= f) continue;
    e.push({
      tier: i,
      envVar: l,
      pinnedRaw: c,
      pinnedKey: u,
      defaultKey: d,
    });
  }
  if (e.length === 0) return [];
  let t;
  try {
    t = await j2e();
  } catch {
    return [];
  }
  let n = nle(await nj()),
    r = [];
  for (let i of e) {
    let a = yc[i.defaultKey].firstParty,
      l = G2e(t, a, n);
    if (!l) continue;
    let c = $h(yc[i.pinnedKey].firstParty),
      u = $h(yc[i.defaultKey].firstParty);
    if (!c || !u) continue;
    r.push({
      tier: i.tier,
      envVar: i.envVar,
      fromKey: i.pinnedKey,
      fromMarketingName: c,
      toKey: i.defaultKey,
      toMarketingName: u,
      toBedrockId: l,
    });
  }
  G("tengu_bedrock_upgrade_check", {
    stale_tiers: yB(r.length),
  });
  let s = (
    await Promise.all(
      r.map(async (i) => {
        let a = await probeBedrockModel(i.toBedrockId, i.tier);
        return (
          G("tengu_bedrock_probe_result", {
            tier: $e(i.tier),
            model_id: Cf(i.toBedrockId),
            accessible: a,
          }),
          a ? i : null
        );
      }),
    )
  ).filter((i) => i !== null);
  return (T(`[bedrock-upgrade] tiersWithPin=${e.length} candidates=${s.length}`), s);
}
async function checkBedrockDefaultAvailability() {
  if (fr() !== "bedrock") return [];
  if (ut(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return [];
  let e = Dr().modelOverrides,
    t = [];
  for (let i of Object.keys(tmr)) {
    let a = tmr[i];
    if (e?.[yc[a.defaultKey].firstParty]) continue;
    if (
      a.envVarPriority.some((c) => {
        let u = process.env[c];
        if (!u) return false;
        let d = AMc(u);
        if (!d) return true;
        return n7o(d) === i;
      })
    )
      continue;
    t.push({
      tier: i,
      envVar: a.envVarPriority.at(-1),
      defaultKey: a.defaultKey,
    });
  }
  if (t.length === 0) return [];
  G("tengu_bedrock_default_check", {
    unpinned_tiers: yB(t.length),
  });
  let n;
  try {
    n = await j2e();
  } catch {
    n = [];
  }
  let r = nle(await nj()),
    o = await Promise.all(
      t.map(async (i) => {
        let a = yc[i.defaultKey],
          l = HMc(i.defaultKey, n, r);
        if (!l) return null;
        let c = await probeBedrockModel(l, i.tier);
        if (
          (G("tengu_bedrock_probe_result", {
            tier: $e(i.tier),
            model_id: Cf(l),
            accessible: c,
          }),
          c)
        )
          return null;
        let u = await MIm(i.defaultKey, i.tier, n, r, e);
        if (!u) return null;
        let d = $h(a.firstParty),
          p = $h(yc[u.key].firstParty);
        if (!d || !p) return null;
        return {
          tier: i.tier,
          envVar: i.envVar,
          defaultKey: i.defaultKey,
          defaultName: d,
          fallbackKey: u.key,
          fallbackName: p,
          fallbackBedrockId: u.regionalId,
          ...(u.crossTier && {
            crossTier: true,
          }),
        };
      }),
    ),
    s = [];
  for (let i of o) if (i !== null) s.push(i);
  return (T(`[bedrock-fallback] unpinnedTiers=${t.length} fallbacks=${s.length}`), s);
}
function HMc(e, t, n) {
  let r = yc[e],
    o = G2e(t, r.firstParty, n);
  if (o) return o;
  if (!r.bedrock) return null;
  return PIe(r.bedrock, n);
}
async function MIm(e, t, n, r, o) {
  async function s(l, c) {
    let u = HMc(l, n, r);
    if (!u) return null;
    return (await probeBedrockModel(u, c)) ? u : null;
  }
  let i = $Im(e, t).filter((l) => !o?.[yc[l].firstParty]),
    a = await Promise.all(i.map((l) => s(l, t)));
  for (let [l, c] of a.entries())
    if (c)
      return {
        key: i[l],
        regionalId: c,
      };
  if (t === "opus") {
    let l = await s(_j, "sonnet");
    if (l)
      return {
        key: _j,
        regionalId: l,
        crossTier: true,
      };
  }
  return null;
}
function $Im(e, t) {
  let n = ztn.indexOf(e),
    r = [];
  for (let o = n - 1; o >= 0; o--) {
    let s = ztn[o];
    if (n7o(s) === t) r.push(s);
  }
  return r;
}
async function probeBedrockModel(e, t) {
  try {
    let [{ AnthropicBedrock: n }, { getProxyFetchOptions: r }] = await Promise.all([
        Promise.resolve().then(() => (Aje(), Eje)),
        Promise.resolve().then(() => (Mh(), k2e)),
      ]),
      o =
        t === "haiku" && process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION
          ? process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION
          : await nj(),
      s = {
        awsRegion: o,
        maxRetries: 0,
        timeout: 8000,
        fetchOptions: r({
          url:
            process.env.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${o}.amazonaws.com`,
        }),
      },
      i;
    if (process.env.AWS_BEARER_TOKEN_BEDROCK)
      i = new n({
        ...s,
        apiKey: process.env.AWS_BEARER_TOKEN_BEDROCK,
      });
    else {
      let a = ut(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH),
        l = a ? null : await BG();
      i = l
        ? new n({
            ...s,
            awsAccessKey: l.accessKeyId,
            awsSecretKey: l.secretAccessKey,
            awsSessionToken: l.sessionToken,
          })
        : new n({
            ...s,
            ...(a && {
              skipAuth: true,
            }),
          });
    }
    return (
      await i.messages.create({
        model: e,
        max_tokens: 1,
        messages: [
          {
            role: "user",
            content: ".",
          },
        ],
      }),
      true
    );
  } catch (n) {
    if (n?.status === 429) return true;
    return false;
  }
}
var ztn, tmr;
