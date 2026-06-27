// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DYo
// matched 2.1.88 source: src/hooks/useLspPluginRecommendation.tsx
// class=modified  jaccard=0.5118  score=0.9054  fileCov=0.5407
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DYo] deps: gm, Ye, id, dn, je, vn, lE
((JLc = R(lt(), 1)), (kfr = R(rt(), 1)), (Ptn = R(se(), 1)));
function ZLc() {
  let e = QLc.c(12),
    t = Ht(pCm),
    { addNotification: n } = Li(),
    r;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) ((r = new Set()), (e[0] = r));
  else r = e[0];
  let o = Pfr.useRef(r),
    { recommendation: s, clearRecommendation: i, tryResolve: a } = Rfr(),
    l,
    c;
  if (e[1] !== t || e[2] !== a)
    ((l = () => {
      a(async () => {
        if (Ybr()) return null;
        let f = [];
        for (let m of t) if (!o.current.has(m)) (o.current.add(m), f.push(m));
        for (let m of f)
          try {
            let h = (await zLc(m))[0];
            if (h)
              return (
                T(`[useLspPluginRecommendation] Found match: ${h.pluginName} for ${m}`),
                Xbr(true),
                {
                  pluginId: h.pluginId,
                  pluginName: h.pluginName,
                  pluginDescription: h.description,
                  fileExtension: Dfr.extname(m),
                  shownAt: Date.now(),
                }
              );
          } catch (g) {
            T(`[useLspPluginRecommendation] Failed to check for LSP plugins for ${m}: ${g}`, {
              level: "error",
            });
          }
        return null;
      });
    }),
      (c = [t, a]),
      (e[1] = t),
      (e[2] = a),
      (e[3] = l),
      (e[4] = c));
  else ((l = e[3]), (c = e[4]));
  Pfr.useEffect(l, c);
  let u;
  if (e[5] !== n || e[6] !== i || e[7] !== s)
    ((u = (f) => {
      if (!s) return;
      let { pluginId: m, pluginName: g, shownAt: h } = s;
      T(`[useLspPluginRecommendation] User response: ${f} for ${g}`);
      e: switch (f) {
        case "yes": {
          Lfr(m, g, "lsp-plugin", n, async (y) => {
            T(`[useLspPluginRecommendation] Installing plugin: ${m}`);
            let b =
              typeof y.entry.source === "string"
                ? Dfr.join(y.marketplaceInstallLocation, y.entry.source)
                : void 0;
            await NYt(m, y.entry, "user", void 0, b, void 0, void 0, y.marketplaceInstallLocation);
            let _ = yn("userSettings");
            (io("userSettings", {
              enabledPlugins: {
                ..._?.enabledPlugins,
                [m]: true,
              },
            }),
              T(`[useLspPluginRecommendation] Plugin installed: ${m}`));
          });
          break e;
        }
        case "no": {
          let y = Date.now() - h;
          if (y >= uCm)
            (T(
              `[useLspPluginRecommendation] Timeout detected (${y}ms), incrementing ignored count`,
            ),
              YLc());
          break e;
        }
        case "never": {
          KLc(m);
          break e;
        }
        case "disable":
          gn(dCm);
      }
      i();
    }),
      (e[5] = n),
      (e[6] = i),
      (e[7] = s),
      (e[8] = u));
  else u = e[8];
  let d = u,
    p;
  if (e[9] !== d || e[10] !== s)
    ((p = {
      recommendation: s,
      handleResponse: d,
    }),
      (e[9] = d),
      (e[10] = s),
      (e[11] = p));
  else p = e[11];
  return p;
}
function dCm(e) {
  if (e.lspRecommendationDisabled) return e;
  return {
    ...e,
    lspRecommendationDisabled: true,
  };
}
function pCm(e) {
  return e.fileHistory.trackedFiles;
}
var QLc,
  Dfr,
  Pfr,
  uCm = 28000;
