// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HDc
// matched 2.1.88 source: src/hooks/notifs/useRateLimitWarningNotification.tsx
// class=modified  jaccard=0.229  score=0.3681  fileCov=0.3773
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module HDc] deps: ft, Ed, GY, atr
Ffr = R(rt(), 1);
function useRateLimitWarningNotification(e) {
  let t = TDc.c(30),
    { addNotification: n } = Li(),
    r = Wpe(),
    o = Ht(ECm),
    s;
  if (t[0] !== r || t[1] !== e) ((s = xio(r, e)), (t[0] = r), (t[1] = e), (t[2] = s));
  else s = t[2];
  let i = s,
    a;
  if (t[3] !== r || t[4] !== o || t[5] !== e)
    ((a = Iaa(r, e, o)), (t[3] = r), (t[4] = o), (t[5] = e), (t[6] = a));
  else a = t[6];
  let l = a,
    c;
  if (t[7] !== r.rateLimitType || t[8] !== e)
    ((c = r.rateLimitType === "overage" ? Caa(e) : null),
      (t[7] = r.rateLimitType),
      (t[8] = e),
      (t[9] = c));
  else c = t[9];
  let u = c,
    d;
  if (t[10] !== r || t[11] !== e) ((d = kio(r, e)), (t[10] = r), (t[11] = e), (t[12] = d));
  else d = t[12];
  let p = d,
    f = tve.useRef(null),
    m;
  if (t[13] === Symbol.for("react.memo_cache_sentinel")) ((m = Di()), (t[13] = m));
  else m = t[13];
  let g = m,
    h;
  if (t[14] === Symbol.for("react.memo_cache_sentinel")) ((h = eH()), (t[14] = h));
  else h = t[14];
  let y = h,
    b = g === "team" || g === "enterprise",
    [_, S] = tve.useState(!1),
    A = tve.useRef(!1),
    v,
    C;
  if (t[15] !== n)
    ((v = () => {
      let P = (O, L, M) => {
        if (!tH(O)) return;
        if (L || M) return;
        if (zB()) return;
        if (eF()) return;
        if (Hjt()) {
          if (!A.current)
            ((A.current = !0),
              n({
                kind: "contextual",
                key: "fable-credits-info",
                text: "Fable 5 is drawing from usage credits",
                priority: "medium",
              }));
          return;
        }
        n({
          kind: "warning",
          key: "fable-usage-credits",
          text: "Fable 5 is now using usage credits instead of your plan limits",
          color: "error",
          priority: "immediate",
        });
      };
      return (
        k1n.add(P),
        () => {
          k1n.delete(P);
        }
      );
    }),
      (C = [n]),
      (t[15] = n),
      (t[16] = v),
      (t[17] = C));
  else ((v = t[16]), (C = t[17]));
  tve.useEffect(v, C);
  let x, I;
  if (t[18] !== n || t[19] !== r.isUsingOverage || t[20] !== _ || t[21] !== p)
    ((x = () => {
      if (r.isUsingOverage && !_ && (!b || y))
        (n({
          key: "limit-reached",
          text: p,
          priority: "immediate",
        }),
          S(!0));
      else if (!r.isUsingOverage && _) S(!1);
    }),
      (I = [r.isUsingOverage, p, _, n, y, b]),
      (t[18] = n),
      (t[19] = r.isUsingOverage),
      (t[20] = _),
      (t[21] = p),
      (t[22] = x),
      (t[23] = I));
  else ((x = t[22]), (I = t[23]));
  tve.useEffect(x, I);
  let k, D;
  if (t[24] !== n || t[25] !== u || t[26] !== l || t[27] !== i)
    ((k = () => {
      if (i && i !== f.current) {
        if (
          ((f.current = i),
          n({
            key: "rate-limit-warning",
            jsx: fvt.jsxs(w, {
              children: [
                fvt.jsx(w, {
                  color: "warning",
                  children: i,
                }),
                l &&
                  fvt.jsxs(w, {
                    dimColor: !0,
                    children: [" \xB7 ", l.text],
                  }),
                u &&
                  fvt.jsxs(w, {
                    dimColor: !0,
                    children: [" \xB7 ", u],
                  }),
              ],
            }),
            priority: "high",
          }),
          l)
        )
          G("tengu_rate_limit_lever_hint", {
            lever: $e(l.lever),
          });
      }
    }),
      (D = [i, l, u, n]),
      (t[24] = n),
      (t[25] = u),
      (t[26] = l),
      (t[27] = i),
      (t[28] = k),
      (t[29] = D));
  else ((k = t[28]), (D = t[29]));
  tve.useEffect(k, D);
}
function ECm(e) {
  return e.effortValue;
}
var TDc, tve, fvt;
