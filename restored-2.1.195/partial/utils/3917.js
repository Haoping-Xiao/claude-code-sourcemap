// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xXa
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=partial  jaccard=0.1294  score=0.1555  fileCov=0.4356
// note: low-confidence suggestion: src/utils/readEditContext.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xXa = E(() => {
  oo();
  je();
  fn();
  At();
  SG();
  Jt();
  Un();
  c_();
  jc();
  cht = require("fs/promises"), HHo = require("path");
  z7p = Ahe(async () => {
    if (!Us("allow_team_discovery")) return;
    if (!at("tengu_team_discovery", !1)) return;
    if (!bo()) return;
    let e = await W7p();
    if (e && Date.now() - e.fetchedAt < G7p) return e.data ?? void 0;
    let t = await V7p();
    return await q7p({
      fetchedAt: Date.now(),
      data: t
    }), t ?? void 0;
  }, 3600000);
});
function uht(e, t) {
  let n = Dt().numStartups;
  gn(r => {
    let o = r.tipsHistory ?? {};
    if (o[e] === n) return r;
    let s = r.tipLifetimeShownCounts ?? {},
      i = {
        ...r,
        tipsHistory: {
          ...o,
          [e]: n
        },
        tipLifetimeShownCounts: {
          ...s,
          [e]: (s[e] ?? 0) + 1
        }
      };
    if (!t) return i;
    let a = r.pluginSuggestionShownCounts ?? {};
    return {
      ...i,
      pluginSuggestionShownCounts: {
        ...a,
        [t]: (a[t] ?? 0) + 1
      }
    };
  });
}
function L9n(e) {
  return Dt().tipLifetimeShownCounts?.[e] ?? 0;
}
function Spe(e) {
  let t = Dt(),
    n = t.tipsHistory?.[e];
  if (!n) return 1 / 0;
  return t.numStartups - n;
}
function kXa(e) {
  return Dt().pluginSuggestionShownCounts?.[e] ?? 0;
}
function RXa(e) {
  return Dt().pluginSuggestionDiscoverShownCounts?.[e] ?? 0;
}
function LXa(e) {
  if (e.length === 0) return;
  gn(t => {
    let n = t.pluginSuggestionDiscoverShownCounts ?? {};
    if (e.every(o => (n[o] ?? 0) > 0)) return t;
    let r = {
      ...n
    };
    for (let o of e) r[o] = (r[o] ?? 0) + 1;
    return {
      ...t,
      pluginSuggestionDiscoverShownCounts: r
    };
  });
}