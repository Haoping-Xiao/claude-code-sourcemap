// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MAl
// matched 2.1.88 source: src/utils/computerUse/computerUseLock.ts
// class=new  jaccard=0.0589  score=1  fileCov=0.0589
// note: nearest: src/utils/computerUse/computerUseLock.ts (0.0589); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var MAl = E(() => {
  fn();
  CAl();
  DAl();
});
function fLo(e) {
  let t = e.toLowerCase();
  if (!t_f.includes(t)) return null;
  return t;
}
function mLo() {
  let e = c3(),
    t = e.map(n => n.isEnabled());
  return e.filter((n, r) => t[r]).map(n => n.name);
}
function c3() {
  return [P7n, uXn, ...(Su() ? [cl] : []), ...[Z4, L$].filter(e => !Fpt().has(e.name)), EP, Vg, xH, dA, oq, FF, qDe, dXn, gbt, fyt, b_t, v6n, ...[], Zyf, e_f, ...(VAl ? [VAl] : []), ...(EH() ? [Nbl, jbl, Vbl, Jbl] : []), ...(GAl ? [GAl] : []), ...(WAl ? [WAl] : []), ...(qAl ? [qAl] : []), ...(ut("true") ? [SRo] : []), ...(Abt() ? [Sbl, kbl] : []), dLo(), ...(XAl ? [XAl] : []), ...(JAl ? [JAl] : []), cRo, ...(Pbt ? [Pbt] : []), ...Yyf, ...Xyf, w_l, ...($Al ? [$Al] : []), ...(OAl ? [OAl] : []), ...(NAl ? [NAl] : []), Jhl, ...(BAl ? [BAl] : []), ...Jyf, ...(UAl ? [UAl] : []), Lyl, Qyf, ...(FAl ? [FAl] : []), ...(jAl ? [jAl] : []), ...(pLo() ? [pLo()] : []), ...(KAl ? [KAl] : []), ...(YAl ? [YAl()] : []), ...[], QW, u5, xre, ...(o$() ? [$jt] : []), G$a];
}
function Woe(e, t) {
  return e.filter(n => !Qzt(t, n) && n.mcpInfo?.effectiveMaxPermission !== "blocked");
}
function TQ(e, t, n) {
  let r = F$(e, n),
    o = Woe(t, e),
    s = (l, c) => l.name.localeCompare(c.name),
    i = n?.skillTools ?? [],
    a = i.length > 0 ? o.concat(Woe(i, e)).sort(s) : o.sort(s);
  return oE([...r].sort(s).concat(a), "name");
}
var Yyf,
  Xyf,
  $Al,
  OAl = null,
  NAl = null,
  BAl = null,
  Jyf,
  UAl,
  Qyf,
  FAl,
  jAl = null,
  Zyf,
  e_f,
  dLo = () => (YEl(), ro(KEl)).SendMessageTool,
  GAl,
  WAl = null,
  qAl = null,
  VAl = null,
  zAl,
  KAl = null,
  YAl = null,
  XAl = null,
  JAl,
  Pbt,
  pLo = () => {
    if (!q1()) return null;
    return (Jzt(), ro(Xzt)).PowerShellTool;
  },
  t_f,
  F$ = (e, t) => {
    if (Oe.CLAUDE_CODE_SIMPLE) {
      if (LI() && !t?.skipReplFilter) {
        let d = [cRo, xH, dA];
        if (zAl?.isCoordinatorMode()) d.push(P7n, gbt, dLo(), ...(Pbt && JS() ? [Pbt] : []));
        return Woe(d, e);
      }
      let c = pLo(),
        u = [...(Su() ? [cl] : []), ...(c ? [c] : []), Vg, xH];
      if (zAl?.isCoordinatorMode()) u.push(P7n, gbt, dLo(), ...(Pbt && JS() ? [Pbt] : []));
      return Woe(u, e);
    }
    let n = new Set([QW.name, u5.name, xre.name, Ip]),
      r = c3().filter(c => !n.has(c.name)),
      o = Woe(r, e),
      s = o.some(c => Ql(c, Co)) && cl.isEnabled(),
      i = false;
    if (LI() && !t?.skipReplFilter) {
      if (o.some(u => Ql(u, Fm))) o = o.filter(u => !Pct.has(u.name)), i = true;
    }
    let a = o.map(c => c.isEnabled()),
      l = o.filter((c, u) => a[u]);
    if (hC() && !s && !i) {
      let c = Woe([Z4, L$].filter(u => !l.includes(u)), e);
      l = [...l, ...c];
    }
    return l;
  };