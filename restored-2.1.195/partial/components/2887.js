// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hlo
// matched 2.1.88 source: src/tools/ConfigTool/UI.tsx
// class=partial  jaccard=0.1446  score=1  fileCov=0.1446
// note: low-confidence suggestion: src/tools/ConfigTool/UI.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hlo = E(() => {
  Jua = R(lt(), 1), Qua = R(rt(), 1), Zua = R(rt(), 1), rda = R(se(), 1), eda = Qua.createContext(!1);
});
function Oup(e) {
  try {
    let t = Ft(e),
      n = De(t),
      r = e.replaceAll("\\/", "/").replace(/\s+/g, ""),
      o = n.replace(/\s+/g, "");
    if (r !== o) return e;
    return De(t, null, 2);
  } catch {
    return e;
  }
}
function Bup(e) {
  if (e.length > Nup) return e;
  return e.split(`
`).map(Oup).join(`
`);
}
function ida(e, t) {
  if (e.length > Fup) return e;
  let n = r => r.replace(Uup, o => sP(o, void 0, {
    themeName: t
  }));
  if (!e.includes(s0e)) return n(e);
  return e.split(`
`).map(r => r.includes(s0e) ? r : n(r)).join(`
`);
}
function J1(e) {
  let t = oda.c(14),
    {
      content: n,
      verbose: r,
      isError: o,
      isWarning: s
    } = e,
    {
      columns: i
    } = br(),
    [a] = na(),
    l = nda(),
    c = sda.useContext(wLe),
    u = r || l,
    d;
  if (t[0] !== n || t[1] !== a) d = ida(Bup(n), a), t[0] = n, t[1] = a, t[2] = d;else d = t[2];
  let p = d,
    f;
  e: {
    if (u) {
      let _;
      if (t[3] !== p) _ = KNn(p), t[3] = p, t[4] = _;else _ = t[4];
      f = _;
      break e;
    }
    let b;
    if (t[5] !== i || t[6] !== p || t[7] !== c) b = KNn(Vua(p, i, c)), t[5] = i, t[6] = p, t[7] = c, t[8] = b;else b = t[8];
    f = b;
  }
  let m = f,
    g = o ? "error" : s ? "warning" : void 0,
    h;
  if (t[9] !== m) h = zNn.jsx(bd, {
    children: m
  }), t[9] = m, t[10] = h;else h = t[10];
  let y;
  if (t[11] !== g || t[12] !== h) y = zNn.jsx(qn, {
    children: zNn.jsx(w, {
      color: g,
      children: h
    })
  }), t[11] = g, t[12] = h, t[13] = y;else y = t[13];
  return y;
}
function KNn(e) {
  return e.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g, "");
}
var oda,
  sda,
  zNn,
  Nup = 1e4,
  Uup,
  Fup = 1e5;