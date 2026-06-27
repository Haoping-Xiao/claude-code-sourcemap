// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QUi
// matched 2.1.88 source: src/components/design-system/ThemeProvider.tsx
// class=modified  jaccard=0.2303  score=0.4398  fileCov=0.3258
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function QBd() {
  return wc("theme", "dark").value;
}
function ZBd(e) {
  yI("theme", e);
}
function Z0n({ children: e, initialState: t, onThemeSave: n = ZBd }) {
  let [r, o] = Jw.useState(t ?? QBd),
    [s, i] = Jw.useState(null),
    [a, l] = Jw.useState(null),
    [c, u] = Jw.useState(() => IYr()),
    d = Jw.useSyncExternalStore(q3e.subscribe, q3e.getState),
    p = Jw.useMemo(() => [...c, ...d], [c, d]),
    [f, m] = Jw.useState(() => ((t ?? r) === "auto" ? z3e() : "dark")),
    g = s ?? r,
    h = () => u(IYr());
  Jw.useEffect(() => lUi(h), []);
  let { internal_querier: y } = s8();
  (Jw.useEffect(() => {
    if (g !== "auto") return;
    return (m(z3e()), dUi(() => m(z3e())));
  }, [g]),
    Jw.useEffect(() => {
      if (g !== "auto" || !y) return;
      let C,
        x = false;
      return (
        Promise.resolve()
          .then(() => (QUi(), JUi))
          .then(({ watchSystemTheme: I }) => {
            if (x) return;
            C = I(y, m);
          }),
        () => {
          ((x = true), C?.());
        }
      );
    }, [g, y]));
  let b = fW(g),
    _ = b ? p.find((C) => C.slug === b) : void 0,
    S = _ ? _.base : g === "auto" ? f : b ? "dark" : g,
    A = Jw.useMemo(() => tUi(O7(S), a ?? _?.overrides), [S, a, _]),
    v = Jw.useMemo(
      () => ({
        themeSetting: r,
        setThemeSetting: (C) => {
          if ((o(C), i(null), C === "auto")) m(z3e());
          n(C);
        },
        setPreviewTheme: (C) => {
          if ((i(C), C === "auto")) m(z3e());
        },
        savePreview: () => {
          if (s !== null) (o(s), i(null), n(s));
        },
        cancelPreview: () => {
          if (s !== null) i(null);
        },
        currentTheme: S,
        resolvedTheme: A,
        customThemes: p,
        activeCustomTheme: _,
        reloadCustomThemes: h,
        setPreviewOverrides: l,
      }),
      [r, s, S, n, A, p, _],
    );
  return ZUi.jsx(vit.Provider, {
    value: v,
    children: e,
  });
}
function na() {
  let e = Q0n.c(3),
    { currentTheme: t, setThemeSetting: n } = Jw.useContext(vit),
    r;
  if (e[0] !== t || e[1] !== n) ((r = [t, n]), (e[0] = t), (e[1] = n), (e[2] = r));
  else r = e[2];
  return r;
}
function Fke() {
  return Jw.useContext(vit).themeSetting;
}
function eRn() {
  let e = Q0n.c(4),
    { setPreviewTheme: t, savePreview: n, cancelPreview: r } = Jw.useContext(vit),
    o;
  if (e[0] !== r || e[1] !== n || e[2] !== t)
    ((o = {
      setPreviewTheme: t,
      savePreview: n,
      cancelPreview: r,
    }),
      (e[0] = r),
      (e[1] = n),
      (e[2] = t),
      (e[3] = o));
  else o = e[3];
  return o;
}
function GD() {
  return Jw.useContext(vit).resolvedTheme;
}
function jke() {
  let e = Q0n.c(5),
    {
      customThemes: t,
      activeCustomTheme: n,
      reloadCustomThemes: r,
      setPreviewOverrides: o,
    } = Jw.useContext(vit),
    s;
  if (e[0] !== n || e[1] !== t || e[2] !== r || e[3] !== o)
    ((s = {
      customThemes: t,
      activeCustomTheme: n,
      reloadCustomThemes: r,
      setPreviewOverrides: o,
    }),
      (e[0] = n),
      (e[1] = t),
      (e[2] = r),
      (e[3] = o),
      (e[4] = s));
  else s = e[4];
  return s;
}
var Q0n,
  Jw,
  ZUi,
  VYr = "dark",
  vit;
