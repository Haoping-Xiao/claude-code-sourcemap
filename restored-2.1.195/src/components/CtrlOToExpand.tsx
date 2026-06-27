// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d4t
// matched 2.1.88 source: src/components/CtrlOToExpand.tsx
// class=modified  jaccard=0.2953  score=0.5076  fileCov=0.4138
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module d4t]
((Uua = R(rt(), 1)), (wLe = Uua.createContext(false)));
function p4t(e) {
  let t = Alo.c(2),
    { children: n } = e,
    r;
  if (t[0] !== n)
    ((r = VNn.jsx(jua.Provider, {
      value: true,
      children: n,
    })),
      (t[0] = n),
      (t[1] = r));
  else r = t[1];
  return r;
}
function NI() {
  let e = Alo.c(3),
    t = Elo.useContext(jua),
    n = Elo.useContext(wLe),
    r = $0("app:toggleTranscript", "Global", "ctrl+o");
  if (t || n) return null;
  let o;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = {
      keyCase: "lower",
    }),
      (e[0] = o));
  else o = e[0];
  let s;
  if (e[1] !== r)
    ((s = VNn.jsx(w, {
      dimColor: true,
      children: VNn.jsx(ht, {
        chord: r,
        action: "expand",
        parens: true,
        format: o,
      }),
    })),
      (e[1] = r),
      (e[2] = s));
  else s = e[2];
  return s;
}
function Gua() {
  let e = eC("app:toggleTranscript", "Global", "ctrl+o");
  return wt.dim(`(${e} to expand)`);
}
var Alo, Fua, Elo, VNn, jua;
