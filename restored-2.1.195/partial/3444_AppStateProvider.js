// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C4n
// matched 2.1.88 source: src/state/AppState.tsx
// class=partial  jaccard=0.0899  score=0.7088  fileCov=0.0934
// note: low-confidence suggestion: src/state/AppState.tsx; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var C4n = E(() => {
  Zf();
  zqe();
  ORt();
  er();
  je();
  Cp();
  Q9();
  fn();
  PM();
  Hu();
  $I();
  __();
  Gy();
  fre();
  qho();
  Jt();
  vf();
  dr();
  nNa = require("path");
});
var iNa = {};
_t(iNa, {
  AppStateProvider: () => AppStateProvider
});
function AppStateProvider(e) {
  let t = oNa.c(23),
    {
      children: n,
      initialState: r,
      onChangeAppState: o
    } = e;
  if (jre.useContext(rNa)) throw Error("AppStateProvider can not be nested within another AppStateProvider");
  let i;
  if (t[0] !== r || t[1] !== o) i = () => uL(r ?? y6(), o), t[0] = r, t[1] = o, t[2] = i;else i = t[2];
  let [a] = jre.useState(i),
    l,
    c;
  if (t[3] !== a) l = () => {
    let S = () => E4n(a.getState().tasks),
      A = Ci(S);
    return () => {
      S(), A();
    };
  }, c = [a], t[3] = a, t[4] = l, t[5] = c;else l = t[4], c = t[5];
  jre.useEffect(l, c);
  let u, d;
  if (t[6] !== a) u = () => (yJe(() => a.getState().mcp.clients), nMp), d = [a], t[6] = a, t[7] = u, t[8] = d;else u = t[7], d = t[8];
  jre.useEffect(u, d);
  let p;
  if (t[9] !== a.setState) p = () => A4n(a.setState), t[9] = a.setState, t[10] = p;else p = t[10];
  let f;
  if (t[11] !== a) f = [a], t[11] = a, t[12] = f;else f = t[12];
  jre.useEffect(p, f);
  let m;
  if (t[13] !== a.setState) m = S => v4n(S, a.setState), t[13] = a.setState, t[14] = m;else m = t[14];
  let g = jre.useEffectEvent(m);
  Ift(g);
  let h;
  if (t[15] !== g) h = () => {
    w4n(() => g("policySettings"));
  }, t[15] = g, t[16] = h;else h = t[16];
  let y;
  if (t[17] === Symbol.for("react.memo_cache_sentinel")) y = [], t[17] = y;else y = t[17];
  jre.useEffect(h, y);
  let b;
  if (t[18] !== n) b = NWt.jsx(J1a, {
    children: NWt.jsx(tMp, {
      children: n
    })
  }), t[18] = n, t[19] = b;else b = t[19];
  let _;
  if (t[20] !== a || t[21] !== b) _ = NWt.jsx(rNa.Provider, {
    value: !0,
    children: NWt.jsx(vat.Provider, {
      value: a,
      children: b
    })
  }), t[20] = a, t[21] = b, t[22] = _;else _ = t[22];
  return _;
}
function nMp() {
  return yJe(void 0);
}
var oNa, sNa, jre, NWt, tMp, rNa;