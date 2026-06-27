// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mal
// matched 2.1.88 source: src/hooks/useMinDisplayTime.ts
// class=modified  jaccard=0.3449  score=1  fileCov=0.3449
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mal = E(() => {
  si();
  oc();
  es();
  co();
  Xa();
  Mce();
  Ye();
  uo();
  jCo();
  sA();
  i6e();
  Jt();
  sr();
  YI();
  Q8();
  uil();
  gm();
  vMe();
  ql();
  VCo();
  Bzn();
  zCo();
  Gzn();
  Qzn();
  ((t_t = R(lt(), 1)), (Zzn = require("path")), (aIo = R(rt(), 1)), (Ts = R(se(), 1)));
});
function gal(e, t) {
  let n = ks(),
    [r, o] = n_t.useState(e),
    s = n_t.useRef(e !== void 0 ? Date.now() : 0);
  return (
    n_t.useEffect(() => {
      if (e !== void 0) {
        ((s.current = Date.now()), o(e));
        return;
      }
      let i = t - (Date.now() - s.current);
      if (i <= 0) {
        o(void 0);
        return;
      }
      return n.setTimeout(() => o(void 0), i);
    }, [e, t, n]),
    r
  );
}
var n_t;
