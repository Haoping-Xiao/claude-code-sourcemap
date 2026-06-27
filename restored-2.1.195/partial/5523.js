// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FSc
// matched 2.1.88 source: src/commands/feedback/index.ts
// class=partial  jaccard=0.1351  score=0.2592  fileCov=0.22
// note: low-confidence suggestion: src/commands/feedback/index.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var FSc = E(() => {
  ft();
  RF();
  y0e();
  Du();
  e1();
  er();
  Yp();
  BSc = R(rt(), 1);
});
function wzo({
  children: e
}) {
  let [t, n] = eD.useState(null),
    [r, o] = eD.useState(null),
    [s, i] = eD.useState(jSc),
    a = eD.useRef(s);
  a.current = s;
  let {
      addNotification: l
    } = Li(),
    c = ks(),
    u = eD.useRef(null);
  eD.useEffect(() => () => {
    u.current?.();
  }, []);
  let d = eD.useCallback(m => {
      if (u.current?.(), u.current = null, m === null) u.current = c.setTimeout(() => o(null), 500);else o(m);
    }, [c]),
    p = eD.useCallback((m, g, h = "tool_use", y) => {
      let b = a.current.get(m) === g;
      if (i(_ => {
        let S = new Map(_);
        if (b) S.delete(m);else S.set(m, g);
        return S;
      }), G("tengu_message_rated", {
        ...y,
        message_uuid: Hr(m),
        sentiment: $e(g),
        surface: $e(h),
        cleared: b
      }), !b) l({
        key: "message-rated",
        kind: "feedback",
        text: "thanks for improving claude!",
        color: "success",
        priority: "immediate"
      });
    }, [l]),
    f = Us("allow_product_feedback");
  return H7e.jsx(nhm.Provider, {
    value: f ? p : null,
    children: H7e.jsx(rhm.Provider, {
      value: s,
      children: H7e.jsx(shm.Provider, {
        value: n,
        children: H7e.jsx(ohm.Provider, {
          value: t,
          children: H7e.jsx(ahm.Provider, {
            value: d,
            children: H7e.jsx(ihm.Provider, {
              value: r,
              children: e
            })
          })
        })
      })
    })
  });
}
var thm, eD, H7e, nhm, jSc, rhm, ohm, shm, ihm, ahm;