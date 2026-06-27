// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GSc
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.0198  score=0.4266  fileCov=0.0203
// note: nearest: node_modules/react/cjs/react.production.js (0.0198); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var GSc = E(() => {
  Ed();
  Ye();
  kt();
  fb();
  jc();
  thm = R(lt(), 1), eD = R(rt(), 1), H7e = R(se(), 1), nhm = eD.createContext(null), jSc = new Map(), rhm = eD.createContext(jSc), ohm = eD.createContext(null), shm = eD.createContext(null), ihm = eD.createContext(null), ahm = eD.createContext(null);
});
function VSc(e) {
  let t = WSc.c(3),
    {
      agentId: n
    } = e,
    r = MMa(n),
    {
      columns: o
    } = br(),
    [, s] = qSc.useReducer(lhm, 0);
  if (Gc(s, r ? 1000 : null), r === null) return null;
  let i;
  if (t[0] !== o || t[1] !== r) i = Czo.jsx(U, {
    flexDirection: "row",
    marginTop: 1,
    width: "100%",
    children: Czo.jsx(BHo, {
      status: r,
      columns: o
    })
  }), t[0] = o, t[1] = r, t[2] = i;else i = t[2];
  return i;
}
function lhm(e) {
  return e + 1;
}
var WSc, qSc, Czo;