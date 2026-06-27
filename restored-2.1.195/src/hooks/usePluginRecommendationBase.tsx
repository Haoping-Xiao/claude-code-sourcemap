// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XLc
// matched 2.1.88 source: src/hooks/usePluginRecommendationBase.tsx
// class=modified  jaccard=0.262  score=0.4226  fileCov=0.4082
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module XLc] deps: GLc, er, je, _k, lE, WI, ZC
VLc = require("path");
function Rfr() {
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
async function Lfr(e, t, n, r, o) {
  try {
    let s = await EL(e);
    if (!s) throw Error(`Plugin ${e} not found in marketplace`);
    (await o(s),
      r({
        key: `${n}-installed`,
        kind: "feedback",
        jsx: Ptn.jsxs(w, {
          color: "success",
          children: [
            Ptn.jsx(Hs, {
              status: "success",
              withSpace: true,
            }),
            t,
            " installed \xB7 restart to apply",
          ],
        }),
        priority: "immediate",
        timeoutMs: 5000,
      }),
      xe("plugin_recommendation_install"));
  } catch (s) {
    (T(`Failed to install plugin ${e}: ${s instanceof Error ? s.message : String(s)}`, {
      level: "error",
    }),
      r({
        key: `${n}-install-failed`,
        jsx: Ptn.jsxs(w, {
          color: "error",
          children: ["Failed to install ", t],
        }),
        priority: "immediate",
        timeoutMs: 5000,
      }),
      Le("plugin_recommendation_install", "install_failed"));
  }
}
var JLc, kfr, Ptn;
