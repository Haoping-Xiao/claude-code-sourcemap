// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fDc
// matched 2.1.88 source: src/hooks/notifs/usePluginAutoupdateNotification.tsx
// class=modified  jaccard=0.3385  score=0.5062  fileCov=0.5053
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fDc] deps: services/analytics/index.ts, highlight.js/lib/languages/css.js, ink/terminal.ts, hooks/useTerminalSize.ts, utils/debug.ts, utils/concurrentSessions.ts, utils/config.ts, main.tsx, main.tsx, utils/sequential.ts, utils/plugins/loadPluginAgents.ts, utils/settings/settings.ts, components/design-system/Dialog.tsx, components/design-system/Dialog.tsx, bridge/bridgeApi.ts
((uDc = R(lt(), 1)), (Nfr = R(rt(), 1)), (eve = R(se(), 1)));
function usePluginAutoupdateNotification() {
  let e = mDc.c(8),
    { addNotification: t } = Li(),
    n = Ho(),
    r;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) ((r = []), (e[0] = r));
  else r = e[0];
  let [o, s] = Mtn.useState(r),
    i,
    a;
  if (e[1] !== n)
    ((i = () => {
      if (vl()) return;
      return ejl((d, p) => {
        (T(
          `Plugin autoupdate notification: ${d.length} plugin(s) updated, ${p.length} blocked by pinner`,
        ),
          s(d),
          n((f) => {
            let m = f.plugins.errors.filter(_Cm);
            if (m.length === f.plugins.errors.length && p.length === 0) return f;
            return {
              ...f,
              plugins: {
                ...f.plugins,
                errors: [...m, ...p],
              },
            };
          }));
      });
    }),
      (a = [n]),
      (e[1] = n),
      (e[2] = i),
      (e[3] = a));
  else ((i = e[2]), (a = e[3]));
  Mtn.useEffect(i, a);
  let l, c;
  if (e[4] !== t || e[5] !== o)
    ((l = () => {
      if (vl()) return;
      if (o.length === 0) return;
      let u = o.map(yCm),
        d = u.length <= 2 ? u.join(" and ") : `${u.length} plugins`;
      (t({
        key: "plugin-autoupdate-restart",
        jsx: $7e.jsxs($7e.Fragment, {
          children: [
            $7e.jsxs(w, {
              color: "success",
              children: [u.length === 1 ? "Plugin" : "Plugins", " updated:", " ", d],
            }),
            $7e.jsx(w, {
              dimColor: true,
              children: " \xB7 Run /reload-plugins to apply",
            }),
          ],
        }),
        priority: "low",
        timeoutMs: 10000 /* 1e4 */,
      }),
        T(`Showing plugin autoupdate notification for: ${u.join(", ")}`));
    }),
      (c = [o, t]),
      (e[4] = t),
      (e[5] = o),
      (e[6] = l),
      (e[7] = c));
  else ((l = e[6]), (c = e[7]));
  Mtn.useEffect(l, c);
}
function yCm(e) {
  let t = e.indexOf("@");
  return t > 0 ? e.substring(0, t) : e;
}
function _Cm(e) {
  return e.type !== "autoupdate-blocked-by-pinner";
}
var mDc, Mtn, $7e;
