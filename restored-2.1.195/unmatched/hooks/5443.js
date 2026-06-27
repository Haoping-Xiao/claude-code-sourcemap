// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vhc
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.009  score=0.3304  fileCov=0.0091
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.009); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vhc] deps: Ye, ZU, X8o, uo, wr, uzn
Hhc = R(lt(), 1), hdm = R(rt(), 1), r6o = R(se(), 1);
function Chc({
  withSeparator: e
}) {
  let t = Ht(m => m.activeGoal?.setAt),
    n = t !== void 0,
    [r, o] = bNe.useState(0),
    s = ks(),
    i = bNe.useRef(null);
  if (t !== void 0 && i.current?.setAt !== t) i.current = {
    setAt: t,
    clockStart: s.now() - (Date.now() - t)
  };
  let a = i.current;
  bNe.useEffect(() => {
    if (t === void 0 || i.current === null) return;
    let m = s.now() - i.current.clockStart,
      g = m < 60000 ? 1000 : 60000,
      h = g - m % g;
    return s.setTimeout(() => o(y => y + 1), h);
  }, [t, r, s]);
  let l = GD(),
    c = bNe.useMemo(() => {
      if (wt.level < 3) return null;
      let m = jU(l.permission);
      return m ? Edm(m, yb()) : null;
    }, [l.permission, wt.level]),
    u = BLn(n && c ? whc : null),
    d = Math.floor(u / whc) % Jur;
  if (!n || a === null) return null;
  let p = s.now() - a.clockStart,
    f = p < 1000 ? "" : ` (${Yi(p, {
      mostSignificantOnly: true
    })})`;
  return xen.jsxs(U, {
    flexShrink: 0,
    children: [e ? xen.jsx(w, {
      dimColor: true,
      children: " \xB7 "
    }) : null, xen.jsxs(w, {
      color: c?.[d] ?? "permission",
      children: [Nfn, " /goal active", f]
    })]
  });
}
function Edm(e, t) {
  return Array.from({
    length: Jur
  }, (n, r) => {
    let o = 0.5 - 0.5 * Math.cos(2 * Math.PI * r / Jur),
      s = bdm * (t ? GM(o) : o);
    return qM(WM(e, Sdm, s));
  });
}
var bNe,
  xen,
  Jur = 20,
  _dm = 4000,
  whc,
  bdm = 0.18,
  Sdm;