// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GDc
// matched 2.1.88 source: src/hooks/notifs/useFastModeNotification.tsx
// class=modified  jaccard=0.4046  score=0.8348  fileCov=0.4398
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module GDc] deps: Ed, id, uo
Otn = R(rt(), 1);
function useFastModeNotification() {
  let e = zDc.c(13),
    { addNotification: t } = Li(),
    n = Ht(xCm),
    r = Ho(),
    o,
    s;
  if (e[0] !== t || e[1] !== n || e[2] !== r)
    ((o = () => {
      if (da()) return;
      if (!sc()) return;
      return woi((u) => {
        if (u)
          t({
            key: ORG_CHANGED_KEY,
            kind: "event",
            color: "fastMode",
            priority: "immediate",
            text: "Fast mode is now available \xB7 /fast to turn on",
          });
        else if (n)
          (r(ICm),
            t({
              key: ORG_CHANGED_KEY,
              kind: "event",
              color: "warning",
              priority: "immediate",
              text: "Fast mode has been disabled by your organization",
            }));
      });
    }),
      (s = [t, n, r]),
      (e[0] = t),
      (e[1] = n),
      (e[2] = r),
      (e[3] = o),
      (e[4] = s));
  else ((o = e[3]), (s = e[4]));
  Vfr.useEffect(o, s);
  let i, a;
  if (e[5] !== t || e[6] !== r)
    ((i = () => {
      if (da()) return;
      if (!sc()) return;
      return Toi((u) => {
        (r(CCm),
          t({
            key: OVERAGE_REJECTED_KEY,
            kind: "feedback",
            color: "warning",
            priority: "immediate",
            text: u,
          }));
      });
    }),
      (a = [t, r]),
      (e[5] = t),
      (e[6] = r),
      (e[7] = i),
      (e[8] = a));
  else ((i = e[7]), (a = e[8]));
  Vfr.useEffect(i, a);
  let l, c;
  if (e[9] !== t || e[10] !== n)
    ((l = () => {
      if (da()) return;
      if (!n) return;
      let u = boi((p, f) => {
          let m = Yi(p - Date.now(), {
              hideTrailingZeros: !0,
            }),
            g = getCooldownMessage(f, m);
          t({
            key: COOLDOWN_STARTED_KEY,
            invalidates: [COOLDOWN_EXPIRED_KEY],
            text: g,
            color: "warning",
            priority: "immediate",
          });
        }),
        d = Soi(() => {
          t({
            key: COOLDOWN_EXPIRED_KEY,
            kind: "event",
            invalidates: [COOLDOWN_STARTED_KEY],
            color: "fastMode",
            text: "Fast limit reset \xB7 now using fast mode",
            priority: "immediate",
          });
        });
      return () => {
        (u(), d());
      };
    }),
      (c = [t, n]),
      (e[9] = t),
      (e[10] = n),
      (e[11] = l),
      (e[12] = c));
  else ((l = e[11]), (c = e[12]));
  Vfr.useEffect(l, c);
}
function CCm(e) {
  return {
    ...e,
    fastMode: !1,
  };
}
function ICm(e) {
  return {
    ...e,
    fastMode: !1,
  };
}
function xCm(e) {
  return e.fastMode;
}
function getCooldownMessage(reason, resetIn) {
  switch (reason) {
    case "overloaded":
      return `Fast mode overloaded and is temporarily unavailable \xB7 resets in ${resetIn}`;
    case "rate_limit":
      return `Fast limit reached and temporarily disabled \xB7 resets in ${resetIn}`;
  }
}
var zDc,
  Vfr,
  COOLDOWN_STARTED_KEY = "fast-mode-cooldown-started",
  COOLDOWN_EXPIRED_KEY = "fast-mode-cooldown-expired",
  ORG_CHANGED_KEY = "fast-mode-org-changed",
  OVERAGE_REJECTED_KEY = "fast-mode-overage-rejected";
