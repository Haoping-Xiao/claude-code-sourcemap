// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rDc
// matched 2.1.88 source: src/hooks/useClaudeCodeHintRecommendation.tsx
// class=modified  jaccard=0.472  score=0.9421  fileCov=0.4861
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rDc] deps: Ye, Vl, X0
((tDc = R(lt(), 1)), (Mfr = R(rt(), 1)), (Xk = R(se(), 1)));
function sDc() {
  let e = oDc.c(11),
    t = $fr.useSyncExternalStore(fPa, Tmo),
    { addNotification: n } = Li(),
    { recommendation: r, clearRecommendation: o, tryResolve: s } = Rfr(),
    i,
    a;
  if (e[0] !== t || e[1] !== s)
    ((i = () => {
      if (!t) return;
      s(async () => {
        let d = await yPa(t);
        if (d)
          (T(`[useClaudeCodeHintRecommendation] surfacing ${d.pluginId} from ${d.sourceCommand}`),
            pPa());
        if (Tmo() === t) dPa();
        return d;
      });
    }),
      (a = [t, s]),
      (e[0] = t),
      (e[1] = s),
      (e[2] = i),
      (e[3] = a));
  else ((i = e[2]), (a = e[3]));
  $fr.useEffect(i, a);
  let l;
  if (e[4] !== n || e[5] !== o || e[6] !== r)
    ((l = (d) => {
      if (!r) return;
      (_Pa(r.pluginId),
        G("tengu_plugin_hint_response", {
          _PROTO_plugin_name: Qo(r.pluginId).name,
          _PROTO_marketplace_name: r.marketplaceName,
          response: $e(d),
        }));
      e: switch (d) {
        case "yes": {
          let { pluginId: p, pluginName: f, marketplaceName: m } = r;
          Lfr(p, f, "hint-plugin", n, async (g) => {
            let h = await bOe({
              pluginId: p,
              entry: g.entry,
              marketplaceName: m,
              scope: "user",
              trigger: "hint",
            });
            if (!h.success) throw Error(h.error);
          });
          break e;
        }
        case "disable": {
          bPa();
          break e;
        }
        case "no":
      }
      o();
    }),
      (e[4] = n),
      (e[5] = o),
      (e[6] = r),
      (e[7] = l));
  else l = e[7];
  let c = l,
    u;
  if (e[8] !== c || e[9] !== r)
    ((u = {
      recommendation: r,
      handleResponse: c,
    }),
      (e[8] = c),
      (e[9] = r),
      (e[10] = u));
  else u = e[10];
  return u;
}
var oDc, $fr;
