// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E2l
// matched 2.1.88 source: src/utils/plugins/installCounts.ts
// class=modified  jaccard=0.07  score=0.1102  fileCov=0.1613
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module E2l] deps: kt, Cc, Bs, f_, Ko, EC, Mg, Ye, je, At, vq, vbe, lE, e1e, OBo, Xh
((b2l = R(lt(), 1)), (BKe = R(rt(), 1)), (PH = R(se(), 1)));
function v2l() {
  return FBo.join(kI(), fNf);
}
async function yNf() {
  try {
    let e = await nrr.readFile(v2l(), {
        encoding: "utf-8",
      }),
      t = hNf().safeParse(Ft(e));
    if (!t.success) return (T("Plugin catalog cache has invalid structure"), null);
    let n = t.data;
    if (n.version !== UBo)
      return (T(`Plugin catalog cache version mismatch (got ${n.version}, expected ${UBo})`), null);
    let r = new Date(n.fetchedAt).getTime();
    if (Number.isNaN(r) || Date.now() - r > mNf)
      return (T("Plugin catalog cache is stale (>24 h old)"), null);
    return n;
  } catch (e) {
    if (!wn(e)) T(`Failed to load plugin catalog cache: ${be(e)}`);
    return null;
  }
}
async function _Nf(e) {
  try {
    (await qt().mkdir(kI()),
      await eg(v2l(), De(e), 384),
      await nrr.unlink(FBo.join(kI(), "install-counts-cache.json")).catch(() => {}));
  } catch (t) {
    T(`Failed to save plugin catalog cache: ${be(t)}`, {
      level: "error",
    });
  }
}
async function bNf() {
  T(`Fetching plugin catalog from ${dXt}`);
  let e = performance.now();
  try {
    let t = await lb.get(dXt, {
        timeout: 10000 /* 1e4 */,
        maxContentLength: 5242880,
      }),
      n = T2l().safeParse(t.data);
    if (!n.success) throw Error("Invalid response format from plugin catalog");
    return (YD("plugin_catalog", dXt, "success", performance.now() - e), n.data);
  } catch (t) {
    throw (YD("plugin_catalog", dXt, "failure", performance.now() - e, k8(t)), t);
  }
}
function w2l() {
  return (
    (BBo ??= (async () => {
      let e = await yNf();
      if (e) return (YD("plugin_catalog", dXt, "cache_hit", 0), e.catalog);
      try {
        let t = await bNf();
        return (
          await _Nf({
            version: UBo,
            fetchedAt: new Date().toISOString(),
            catalog: t,
          }),
          t
        );
      } catch (t) {
        return (
          T(`Failed to fetch plugin catalog: ${be(t)}`, {
            level: "error",
          }),
          (BBo = void 0),
          null
        );
      }
    })()),
    BBo
  );
}
async function OEt() {
  let e = await w2l();
  if (!e) return null;
  let t = new Map();
  for (let [n, r] of Object.entries(e.plugins))
    if (typeof r.unique_installs === "number") t.set(n, r.unique_installs);
  return t;
}
async function jBo(e) {
  return (await w2l())?.plugins[e];
}
async function I2l(e, t) {
  let n = await jBo(e);
  if (!n) return null;
  let r = n.tokens[t];
  if (r)
    return {
      alwaysOn: r.always_on,
      onInvoke: r.on_invoke,
      isEstimate: false,
    };
  let o = [...n.components.commands, ...n.components.agents, ...n.components.skills],
    s = 0,
    i = 0;
  for (let a of o) ((s += a.chars?.always_on ?? 0), (i += a.chars?.on_invoke ?? 0));
  return {
    alwaysOn: Math.round(s / A2l),
    onInvoke: Math.round(i / A2l),
    isEstimate: true,
  };
}
function rrr(e) {
  if (e < 1000) return String(e);
  if (e < 1000000 /* 1e6 */) {
    let n = (e / 1000).toFixed(1);
    return n.endsWith(".0") ? `${n.slice(0, -2)}K` : `${n}K`;
  }
  let t = (e / 1000000) /* 1e6 */
    .toFixed(1);
  return t.endsWith(".0") ? `${t.slice(0, -2)}M` : `${t}M`;
}
var nrr,
  FBo,
  UBo = 1,
  fNf = "plugin-catalog-cache.json",
  dXt =
    "https://storage.googleapis.com/claude-code-dist-86c565f3-f756-42ad-8dfa-d59b1c096819/plugin-stats/plugin-details.json",
  mNf = 86400000,
  H2l,
  NBo,
  gNf,
  T2l,
  hNf,
  BBo,
  C2l = 2000,
  A2l = 3;
