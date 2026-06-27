// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GLc
// matched 2.1.88 source: src/utils/plugins/lspRecommendation.ts
// class=modified  jaccard=0.5263  score=0.9698  fileCov=0.535
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module GLc] deps: je, Is, _0
((FLc = new Map()),
  (oCm =
    Vt() === "windows"
      ? /^[A-Za-z0-9/\\][A-Za-z0-9_.+:\\?/-]*$/
      : /^[A-Za-z0-9/][A-Za-z0-9_.+/-]*$/));
function iCm(e) {
  return SCe.has(e.toLowerCase());
}
function extractLspInfoFromManifest(e) {
  if (!e) return null;
  if (typeof e === "string")
    return (
      T("[lspRecommendation] Skipping string path lspServers (not readable from marketplace)"),
      null
    );
  if (Array.isArray(e)) {
    for (let t of e) {
      if (typeof t === "string") continue;
      let n = qLc(t);
      if (n) return n;
    }
    return null;
  }
  return qLc(e);
}
function WLc(e) {
  return typeof e === "object" && e !== null;
}
function qLc(e) {
  let t = new Set(),
    n = null;
  for (let [r, o] of Object.entries(e)) {
    if (!WLc(o)) continue;
    if (!n && typeof o.command === "string") n = o.command;
    let s = o.extensionToLanguage;
    if (WLc(s)) for (let i of Object.keys(s)) t.add(i.toLowerCase());
  }
  if (!n || t.size === 0) return null;
  return {
    extensions: t,
    command: n,
  };
}
async function getLspPluginsFromMarketplaces() {
  let e = new Map();
  try {
    let t = await om();
    for (let [n, r] of Object.entries(t)) {
      if (!_H(r.source)) continue;
      try {
        let o = await G$(n),
          s = iCm(n);
        for (let i of o.plugins) {
          if (!i.lspServers) continue;
          let a = extractLspInfoFromManifest(i.lspServers);
          if (!a) continue;
          let l = `${i.name}@${n}`;
          e.set(l, {
            entry: i,
            marketplaceName: n,
            extensions: a.extensions,
            command: a.command,
            isOfficial: s,
          });
        }
      } catch (o) {
        T(`[lspRecommendation] Failed to load marketplace ${n}: ${o}`);
      }
    }
  } catch (t) {
    T(`[lspRecommendation] Failed to load marketplaces config: ${t}`);
  }
  return e;
}
async function getMatchingLspPlugins(e) {
  if (cCm()) return (T("[lspRecommendation] Recommendations are disabled"), []);
  let t = VLc.extname(e).toLowerCase();
  if (!t) return (T("[lspRecommendation] No file extension found"), []);
  T(`[lspRecommendation] Looking for LSP plugins for ${t}`);
  let n = await getLspPluginsFromMarketplaces(),
    o = Dt().lspRecommendationNeverPlugins ?? [],
    s = [];
  for (let [a, l] of n) {
    if (!l.extensions.has(t)) continue;
    if (o.includes(a)) {
      T(`[lspRecommendation] Skipping ${a} (in never suggest list)`);
      continue;
    }
    if (b5(a)) {
      T(`[lspRecommendation] Skipping ${a} (already installed)`);
      continue;
    }
    s.push({
      info: l,
      pluginId: a,
    });
  }
  let i = [];
  for (let { info: a, pluginId: l } of s)
    if (await jLc(a.command))
      (i.push({
        info: a,
        pluginId: l,
      }),
        T(`[lspRecommendation] Binary '${a.command}' found for ${l}`));
    else T(`[lspRecommendation] Skipping ${l} (binary '${a.command}' not found)`);
  return (
    i.sort((a, l) => {
      if (a.info.isOfficial && !l.info.isOfficial) return -1;
      if (!a.info.isOfficial && l.info.isOfficial) return 1;
      return 0;
    }),
    i.map(({ info: a, pluginId: l }) => ({
      pluginId: l,
      pluginName: fS(a.entry),
      marketplaceName: a.marketplaceName,
      description: a.entry.description,
      isOfficial: a.isOfficial,
      extensions: Array.from(a.extensions),
      command: a.command,
    }))
  );
}
function addToNeverSuggest(e) {
  (gn((t) => {
    let n = t.lspRecommendationNeverPlugins ?? [];
    if (n.includes(e)) return t;
    return {
      ...t,
      lspRecommendationNeverPlugins: [...n, e],
    };
  }),
    T(`[lspRecommendation] Added ${e} to never suggest`));
}
function incrementIgnoredCount() {
  (gn((e) => {
    let t = (e.lspRecommendationIgnoredCount ?? 0) + 1;
    return {
      ...e,
      lspRecommendationIgnoredCount: t,
    };
  }),
    T("[lspRecommendation] Incremented ignored count"));
}
function cCm() {
  let e = Dt();
  return e.lspRecommendationDisabled === true || (e.lspRecommendationIgnoredCount ?? 0) >= sCm;
}
var VLc,
  sCm = 5;
