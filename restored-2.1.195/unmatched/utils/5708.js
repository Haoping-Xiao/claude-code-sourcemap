// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qRc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0048  score=0.406  fileCov=0.0049
// note: nearest: src/screens/REPL.tsx (0.0048); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qRc = E(() => {
  ft();
  Ed();
  er();
  vn();
  GRc();
  Sfr = R(rt(), 1);
});
function VRc() {
  let {
      addNotification: e
    } = Li(),
    t = Ho(),
    n = Efr.useRef(false);
  Efr.useEffect(() => {
    if (da() || n.current) return;
    if (n.current = true, !dm() && !Oe.DISABLE_INSTALLATION_CHECKS) GEe().then(r => {
      if (r === "development") return;
      t(o => {
        if (o.setupIssues.npmInstallDeprecated) return o;
        return {
          ...o,
          setupIssues: {
            ...o.setupIssues,
            npmInstallDeprecated: true
          }
        };
      });
    }).catch(ke);
    R9e().then(r => {
      let o = [],
        s = 0;
      r.forEach((i, a) => {
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
          color: "warning"
        });
      }), VL("install", s), t(i => {
        let a = i.setupIssues;
        if (a.installPathCount === s && a.installBrokenMessages.length === o.length && a.installBrokenMessages.every((l, c) => l === o[c])) return i;
        return {
          ...i,
          setupIssues: {
            ...a,
            installBrokenMessages: o,
            installPathCount: s
          }
        };
      });
    }).catch(ke);
  }, [e, t]);
}
var Efr;