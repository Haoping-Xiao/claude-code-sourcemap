// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XLc
// matched 2.1.88 source: src/hooks/usePluginRecommendationBase.tsx
// class=modified  jaccard=0.262  score=0.4226  fileCov=0.4082
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module XLc] deps: GLc, er, je, _k, lE, WI, ZC
VLc = require("path");
function usePluginRecommendationBase() {
  let e = JLc.c(6),
    [t, n] = kfr.useState(null),
    r = kfr.useRef(false),
    o;
  if (e[0] !== t)
    ((o = (c) => {
      if (vl()) return;
      if (t) return;
      if (r.current) return;
      ((r.current = true),
        c()
          .then((u) => {
            if (u) n(u);
          })
          .catch(ke)
          .finally(() => {
            r.current = false;
          }));
    }),
      (e[0] = t),
      (e[1] = o));
  else o = e[1];
  let s = o,
    i;
  if (e[2] === Symbol.for("react.memo_cache_sentinel")) ((i = () => n(null)), (e[2] = i));
  else i = e[2];
  let a = i,
    l;
  if (e[3] !== t || e[4] !== s)
    ((l = {
      recommendation: t,
      clearRecommendation: a,
      tryResolve: s,
    }),
      (e[3] = t),
      (e[4] = s),
      (e[5] = l));
  else l = e[5];
  return l;
}
async function installPluginAndNotify(pluginId, pluginName, keyPrefix, addNotification, install) {
  try {
    let s = await EL(pluginId);
    if (!s) throw Error(`Plugin ${pluginId} not found in marketplace`);
    (await install(s),
      addNotification({
        key: `${keyPrefix}-installed`,
        kind: "feedback",
        jsx: Ptn.jsxs(w, {
          color: "success",
          children: [
            Ptn.jsx(Hs, {
              status: "success",
              withSpace: true,
            }),
            pluginName,
            " installed \xB7 restart to apply",
          ],
        }),
        priority: "immediate",
        timeoutMs: 5000,
      }),
      xe("plugin_recommendation_install"));
  } catch (s) {
    (T(`Failed to install plugin ${pluginId}: ${s instanceof Error ? s.message : String(s)}`, {
      level: "error",
    }),
      addNotification({
        key: `${keyPrefix}-install-failed`,
        jsx: Ptn.jsxs(w, {
          color: "error",
          children: ["Failed to install ", pluginName],
        }),
        priority: "immediate",
        timeoutMs: 5000,
      }),
      Le("plugin_recommendation_install", "install_failed"));
  }
}
var JLc, kfr, Ptn;
