// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $7t
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.011  score=0.4135  fileCov=0.0112
// note: nearest: src/components/Settings/Config.tsx (0.011); dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module $7t] deps: ps, O0, _i, fH, eE, kP, TMl, J$l, yOl, JOl
QOl = R(lt(), 1), GOe = R(rt(), 1), WQ = R(se(), 1);
function RPf(e) {
  let t = ZOl.c(6),
    {
      pairs: n,
      context: r,
      onDone: o
    } = e,
    [, s] = na(),
    i = Ktr.useRef(false),
    a,
    l;
  if (t[0] !== r || t[1] !== o || t[2] !== n || t[3] !== s) a = () => {
    if (i.current) return;
    i.current = true;
    let c = H7t(n, r, {
      setTheme: s
    });
    o(c.map(LPf).join(`
`), {
      display: "system"
    });
  }, l = [n, r, o, s], t[0] = r, t[1] = o, t[2] = n, t[3] = s, t[4] = a, t[5] = l;else a = t[4], l = t[5];
  return Ktr.useEffect(a, l), null;
}
function LPf(e) {
  return e.message;
}
var ZOl,
  Ktr,
  oNo,
  call = async (e, t, n) => {
    let r = n?.trim() || "";
    if (!r) return oNo.jsx(WOe, {
      onClose: e,
      context: t,
      defaultTab: "Config"
    });
    let o = r.toLowerCase();
    if (_G.includes(o) || Iae.includes(o)) {
      e(`Run /config to open settings, or /config key=value to set one directly.
${T7t(t)}`, {
        display: "system"
      });
      return;
    }
    let s = A7t(r);
    if (!s) {
      e(`Expected key=value, got "${r}". Run /config to open settings.`, {
        display: "system"
      });
      return;
    }
    return oNo.jsx(RPf, {
      pairs: s,
      context: t,
      onDone: e
    });
  };