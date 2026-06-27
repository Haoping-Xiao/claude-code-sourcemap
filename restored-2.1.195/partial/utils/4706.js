// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gz
// matched 2.1.88 source: src/hooks/notifs/useSettingsErrors.tsx
// class=partial  jaccard=0.1259  score=0.5184  fileCov=0.1426
// note: low-confidence suggestion: src/hooks/notifs/useSettingsErrors.tsx; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
function useSettingsErrors() {
  let e = qNl.c(5),
    t = Ho(),
    [n, r] = Anr.useState(Y$f),
    o;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) o = () => {
    let {
      errors: l
    } = OPe();
    r(l);
  }, e[0] = o;else o = e[0];
  Ift(o);
  let i, a;
  if (e[1] !== n || e[2] !== t) i = () => {
    if (vl()) return;
    VL("settings", n.length), t(l => {
      if (l.setupIssues.settingsErrorCount === n.length) return l;
      return {
        ...l,
        setupIssues: {
          ...l.setupIssues,
          settingsErrorCount: n.length
        }
      };
    });
  }, a = [n, t], e[1] = n, e[2] = t, e[3] = i, e[4] = a;else i = e[3], a = e[4];
  return Anr.useEffect(i, a), n;
}
function Y$f() {
  let {
    errors: e
  } = OPe();
  return e;
}
var qNl, Anr;