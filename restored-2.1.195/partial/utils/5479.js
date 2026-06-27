// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R_c
// matched 2.1.88 source: src/hooks/usePrStatus.ts
// class=partial  jaccard=0.1971  score=0.2904  fileCov=0.3804
// note: low-confidence suggestion: src/hooks/usePrStatus.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module R_c] deps: context/notifications.tsx, components/messageActions.tsx
x_c = R(rt(), 1);
function L_c(e, t = true) {
  let [n, r] = RZ.useState(qfm),
    [o, s] = RZ.useState(0),
    i = RZ.useRef(null),
    a = RZ.useRef(0),
    l = RZ.useRef(0),
    c = ks(),
    u = Pg(),
    d = RZ.useRef(u);
  return d.current = u, RZ.useEffect(() => {
    if (!oWt()) return;
    if (!u || Nre.disabled) return;
    if (a.current === 0) return;
    if (Date.now() - a.current < Gfm) return;
    l.current = 0, a.current = 0, s(p => p + 1);
  }, [u]), RZ.useEffect(() => tVe.subscribe(() => {
    if (Nre.disabled) return;
    l.current = 0, a.current = 0, s(p => p + 1);
  }), []), RZ.useEffect(() => {
    if (!t) return;
    if (Nre.disabled) return;
    let p = false,
      f = -1,
      m = Date.now();
    function g(_) {
      if (!oWt()) return Ufm;
      return zfm(d.current, Date.now() - Ex(), _ ? 0 : l.current);
    }
    async function h() {
      if (p) return;
      let _ = Ex();
      if (f !== _) f = _, m = Date.now();else if (Date.now() - m >= jfm) return;
      let S = Date.now(),
        A;
      try {
        A = await Z$a();
      } catch (D) {
        ke(D), A = null;
      }
      let v = A;
      if (p) return;
      a.current = S;
      let C = v === "needs-auth",
        x = v === "fetch-failed",
        I = C || x ? null : v;
      if (l.current = C ? 1 : I === null ? l.current + 1 : 0, Nre.badStreak = x ? Nre.badStreak + 1 : 0, r(D => {
        if (D.lastUpdated > 0 && D.pr?.number === I?.number && D.pr?.url === I?.url && D.pr?.reviewState === I?.reviewState && D.pr?.kind === I?.kind && D.needsAuth === C) return D;
        return {
          pr: I,
          needsAuth: C,
          lastUpdated: Date.now()
        };
      }), Nre.badStreak >= Wfm) {
        Nre.disabled = true, It("github_pr_status_direct", "bad_streak_disabled");
        return;
      }
      let k = Date.now() - S;
      if (k > Ffm) {
        if (Nre.disabled = true, oWt()) It("github_pr_status_direct", "slow_disabled", {
          elapsed_ms: k
        });
        return;
      }
      if (!p) i.current = c.setTimeout(h, g(false));
    }
    let y = g(true),
      b = Date.now() - a.current;
    if (b >= y) h();else i.current = c.setTimeout(h, y - b);
    return () => {
      if (p = true, i.current) i.current(), i.current = null;
    };
  }, [e, t, o, c]), n;
}
function zfm(e, t, n) {
  let r = t < 30000 ? 90000 : t < 300000 ? 180000 : t < 1800000 ? 600000 : 1800000,
    o = n <= 0 ? 90000 : n === 1 ? 300000 : n === 2 ? 900000 : 1800000;
  return Math.max(r, o, e ? 0 : Vfm);
}
var RZ,
  Ufm = 60000,
  Ffm = 4000,
  jfm = 3600000,
  Gfm = 10000 /* 1e4 */,
  Wfm = 3,
  qfm,
  Vfm = 300000;