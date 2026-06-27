// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qRc
// matched 2.1.88 source: src/hooks/notifs/useInstallMessages.tsx
// class=modified  jaccard=0.1456  score=0.2144  fileCov=0.312
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qRc] deps: services/analytics/index.ts, context/notifications.tsx, utils/config.ts, utils/sequential.ts, components/PromptInput/PromptInput.tsx
Sfr = R(rt(), 1);
function _temp() {
  let { addNotification: e } = Li(),
    t = Ho(),
    n = Efr.useRef(false);
  Efr.useEffect(() => {
    if (da() || n.current) return;
    if (((n.current = true), !dm() && !Oe.DISABLE_INSTALLATION_CHECKS))
      GEe()
        .then((r) => {
          if (r === "development") return;
          t((o) => {
            if (o.setupIssues.npmInstallDeprecated) return o;
            return {
              ...o,
              setupIssues: {
                ...o.setupIssues,
                npmInstallDeprecated: true,
              },
            };
          });
        })
        .catch(ke);
    R9e()
      .then((r) => {
        let o = [],
          s = 0;
        (r.forEach((i, a) => {
          if (i.type === "error") {
            o.push(i.message);
            return;
          }
          if (i.type === "path") {
            s++;
            return;
          }
          let l = i.type === "alias" ? "medium" : "low";
          e({
            key: `install-message-${a}-${i.type}`,
            text: i.message,
            priority: l,
            color: "warning",
          });
        }),
          VL("install", s),
          t((i) => {
            let a = i.setupIssues;
            if (
              a.installPathCount === s &&
              a.installBrokenMessages.length === o.length &&
              a.installBrokenMessages.every((l, c) => l === o[c])
            )
              return i;
            return {
              ...i,
              setupIssues: {
                ...a,
                installBrokenMessages: o,
                installPathCount: s,
              },
            };
          }));
      })
      .catch(ke);
  }, [e, t]);
}
var Efr;
