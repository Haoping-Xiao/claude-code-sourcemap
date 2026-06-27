// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kRc
// matched 2.1.88 source: src/services/tips/tipRegistry.ts
// class=modified (alt of src/services/tips/tipRegistry.ts)  jaccard=0.0295  score=0.2519  fileCov=0.0324
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kRc] deps: Un
vwm = {
  enable_shortcut_tip: false,
  enable_contextual_tip: false,
};
async function DRc() {
  if (hfr !== void 0) return hfr;
  return ((hfr = await wP()), hfr);
}
async function PRc(e, t, n, r = xI) {
  if (!(await DRc())[r]) return false;
  if (b5(`${e}@${r}`)) return false;
  if (GI(`${e}@${r}`)) return false;
  return (await err(n, t)) !== null;
}
async function HYo() {
  if (dvt !== void 0) return dvt;
  let e = new Set(kGt());
  if (e.size === 0) return ((dvt = []), dvt);
  let t = await DRc(),
    n = [];
  for (let r of e) {
    let o = t[r];
    if (!o) continue;
    if (r !== xI && !RGt(r, o.source)) {
      T(
        `Skipping plugin suggestion tips for marketplace "${r}": its registered source is not declared in managed settings (extraKnownMarketplaces or strictKnownMarketplaces)`,
      );
      continue;
    }
    let s = await Iq(r).catch(() => null);
    if (!s) continue;
    for (let i of s.plugins) {
      let a = i.relevance,
        l = Znr(i.name, a);
      if (!l) continue;
      if (r === xI && MRc.some((d) => d.id === `${i.name}-plugin`)) continue;
      let c =
          a?.topic ??
          i.name
            .split("-")
            .map((d) => (d ? d.charAt(0).toUpperCase() + d.slice(1) : d))
            .join("-"),
        u = r === xI ? `marketplace-plugin:${i.name}` : `marketplace-plugin:${i.name}@${r}`;
      n.push({
        id: u,
        pluginId: `${i.name}@${r}`,
        priority: 1,
        providerAgnostic: true,
        cooldownSessions: 3,
        content: async (d) => {
          let p = Io("suggestion", d.theme);
          return `Working with ${c}? Install the ${i.name} plugin:
${p(`/plugin install ${i.name}@${r}`)}`;
        },
        isRelevant: async (d) => PRc(i.name, d, l, r),
      });
    }
  }
  return ((dvt = n), dvt);
}
async function SYo(e) {
  try {
    return (await _q(e, $t())).length > 0;
  } catch (t) {
    return (T(`hasUserDefined(${e}) failed: ${t}`), false);
  }
}
function LRc(e) {
  let { bashTools: t, readFileState: n } = e ?? {};
  if (t) {
    for (let r of t) if (Cwm.has(r)) return true;
  }
  if (n) {
    for (let r of VRe(n)) if (wwm.test(r)) return true;
  }
  return false;
}
function EYo(e) {
  return `available in Claude for Enterprise \xB7 ${sP("https://clau.de/enterprise", "Learn more", {
    themeName: e.theme,
  })}`;
}
function AYo(e) {
  return Iwm.some((t) => t !== e && Spe(t) < xwm);
}
function getCustomTips() {
  let t = Dr().spinnerTipsOverride;
  if (!t?.tips?.length) return [];
  return t.tips.map((n, r) => ({
    id: `custom-tip-${r}`,
    content: async () => n,
    cooldownSessions: 0,
    isRelevant: async () => true,
  }));
}
async function yfr(e) {
  let t = Dr(),
    n = getCustomTips();
  if (zPe(t.spinnerTipsOverride)) return n;
  let r = [...MRc, ...kwm, ...(await HYo())],
    s = fr() !== "firstParty" || !_u() ? r.filter((l) => l.providerAgnostic) : r,
    i = await Promise.all(s.map((l) => l.isRelevant(e)));
  return [
    ...s
      .filter((l, c) => i[c])
      .filter((l) => Spe(l.id) >= l.cooldownSessions)
      .filter((l) => l.maxLifetimeShows === void 0 || L9n(l.id) < l.maxLifetimeShows),
    ...n,
  ];
}
var hfr,
  dvt,
  RRc,
  wwm,
  Cwm,
  Iwm,
  xwm = 5,
  MRc,
  kwm;
