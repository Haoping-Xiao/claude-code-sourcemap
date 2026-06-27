// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BXl
// matched 2.1.88 source: src/commands/advisor.ts
// class=modified  jaccard=0.0856  score=0.1455  fileCov=0.1722
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module BXl] deps: Un
((k8f = {
  type: "local",
  name: "radio",
  description: "Listen to Claude FM lo-fi radio",
  isEnabled: () => at("tengu_velvet_static", false),
  supportsNonInteractive: false,
  requires: {},
  load: () => Promise.resolve().then(() => (NXl(), OXl)),
}),
  (I4o = k8f));
function jXl(e, t, n) {
  if (
    (G("tengu_advisor_command", {
      advisor: e,
    }),
    e === "off")
  )
    return (
      n((a) =>
        a.advisorModel === void 0
          ? a
          : {
              ...a,
              advisorModel: void 0,
            },
      ),
      io("userSettings", {
        advisorModel: void 0,
      }),
      "Advisor disabled"
    );
  let r = dp(e);
  if (!j8n(r)) {
    let a = [...zht(), "off"].join(", ");
    return `${xP(r)} cannot be used as an advisor. Valid options: ${a}`;
  }
  (n((a) =>
    a.advisorModel === r
      ? a
      : {
          ...a,
          advisorModel: r,
        },
  ),
    io("userSettings", {
      advisorModel: r,
    }));
  let o = xP(r),
    s = xP(t),
    i = `Advisor set to ${o}`;
  if (!mMe(t))
    i += `
Note: the current main model (${s}) does not support the advisor. It will activate when you switch to a supported main model.`;
  else if (!S8e(t, r))
    i += `
Note: ${o} is less capable than the current main model (${s}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
  return i;
}
function L8f(e) {
  let t = FXl.c(32),
    { onDone: n } = e,
    r = Ht(M8f),
    o = kH(),
    s = Ho(),
    i,
    a,
    l;
  if (t[0] !== r) {
    let v = zht();
    ((a = r ? $8f(r, v) : void 0),
      (i =
        r && !a && j8n(r)
          ? {
              label: xP(r),
              value: r,
            }
          : void 0));
    let C;
    if (t[4] !== i) ((C = i ? [i] : []), (t[4] = i), (t[5] = C));
    else C = t[5];
    let x;
    if (t[6] === Symbol.for("react.memo_cache_sentinel"))
      ((x = {
        label: "No advisor",
        value: "off",
      }),
        (t[6] = x));
    else x = t[6];
    ((l = [...v.map(P8f), ...C, x]), (t[0] = r), (t[1] = i), (t[2] = a), (t[3] = l));
  } else ((i = t[1]), (a = t[2]), (l = t[3]));
  let c = l,
    u = i ? i.value : (a ?? "off"),
    d;
  if (t[7] === Symbol.for("react.memo_cache_sentinel")) ((d = []), (t[7] = d));
  else d = t[7];
  rHt.useEffect(D8f, d);
  let p;
  if (t[8] !== n)
    ((p = () =>
      n(void 0, {
        display: "skip",
      })),
      (t[8] = n),
      (t[9] = p));
  else p = t[9];
  let f;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((f = Yq.jsx(w, {
      children:
        "When Claude needs stronger judgment \u2014 a complex decision, an ambiguous failure, a problem it's circling without progress \u2014 it escalates to the advisor model for guidance, then resumes. The advisor runs server-side and uses additional tokens.",
    })),
      (t[10] = f));
  else f = t[10];
  let m;
  if (t[11] !== o)
    ((m =
      !mMe(o) &&
      Yq.jsxs(w, {
        color: "warning",
        children: ["The current main model (", xP(o), ") does not support the advisor."],
      })),
      (t[11] = o),
      (t[12] = m));
  else m = t[12];
  let g;
  if (t[13] !== o || t[14] !== n || t[15] !== s)
    ((g = (v) => n(jXl(v, o, s))), (t[13] = o), (t[14] = n), (t[15] = s), (t[16] = g));
  else g = t[16];
  let h;
  if (t[17] !== n)
    ((h = () =>
      n(void 0, {
        display: "skip",
      })),
      (t[17] = n),
      (t[18] = h));
  else h = t[18];
  let y;
  if (t[19] !== u || t[20] !== c || t[21] !== g || t[22] !== h)
    ((y = Yq.jsx(Sr, {
      options: c,
      defaultValue: u,
      defaultFocusValue: u,
      onChange: g,
      onCancel: h,
    })),
      (t[19] = u),
      (t[20] = c),
      (t[21] = g),
      (t[22] = h),
      (t[23] = y));
  else y = t[23];
  let b, _;
  if (t[24] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = Yq.jsxs(w, {
      children: [
        Yq.jsx(w, {
          color: "suggestion",
          children: "Recommended setup: ",
        }),
        Yq.jsx(w, {
          children:
            "Sonnet as the main model with Opus as the advisor. For certain workloads this gives near-Opus performance with reduced token usage.",
        }),
      ],
    })),
      (b = Yq.jsx(qL, {
        url: R8f,
      })),
      (t[24] = b),
      (t[25] = _));
  else ((b = t[24]), (_ = t[25]));
  let S;
  if (t[26] !== m || t[27] !== y)
    ((S = Yq.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [f, m, y, _, b],
    })),
      (t[26] = m),
      (t[27] = y),
      (t[28] = S));
  else S = t[28];
  let A;
  if (t[29] !== S || t[30] !== p)
    ((A = Yq.jsx(zn, {
      title: "Advisor (experimental)",
      onCancel: p,
      children: S,
    })),
      (t[29] = S),
      (t[30] = p),
      (t[31] = A));
  else A = t[31];
  return A;
}
function D8f() {
  G("tengu_advisor_dialog_shown", {});
}
function P8f(e) {
  return {
    label: xP(e),
    value: e,
  };
}
function M8f(e) {
  return e.advisorModel;
}
function $8f(e, t) {
  let n = e.toLowerCase();
  return t.find((r) => n.includes(r));
}
function UXl({ choice: e, onDone: t }) {
  let n = Ho(),
    r = kH(),
    o = rHt.useRef(r);
  o.current = r;
  let s = rHt.useRef(false);
  return (
    rHt.useEffect(() => {
      if (s.current) return;
      s.current = true;
      let i = setTimeout(
        (a, l, c, u) => {
          a(jXl(l, c.current, u));
        },
        0,
        t,
        e,
        o,
        n,
      );
      return () => clearTimeout(i);
    }, [e, n, t]),
    null
  );
}
var FXl,
  rHt,
  Yq,
  R8f = "https://claude.com/blog/the-advisor-strategy",
  call = async (e, t, n) => {
    let r = n.trim().toLowerCase();
    if (!r)
      return Yq.jsx(L8f, {
        onDone: e,
      });
    if (r === "off" || r === "unset")
      return Yq.jsx(UXl, {
        choice: "off",
        onDone: e,
      });
    let o = zo(r),
      s = await S8t(o);
    if (!s.valid) return (e(`Invalid advisor model: ${s.error}`), null);
    if (!gMe(o))
      return (
        e(`${r} cannot be used as an advisor. Valid options: ${[...zht(), "off"].join(", ")}`),
        null
      );
    return Yq.jsx(UXl, {
      choice: r,
      onDone: e,
    });
  };
