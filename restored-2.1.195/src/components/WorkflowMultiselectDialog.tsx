// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wUl
// matched 2.1.88 source: src/components/WorkflowMultiselectDialog.tsx
// class=modified  jaccard=0.1512  score=0.355  fileCov=0.2085
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var wUl = E(() => {
  wr();
  vUl = {
    type: "local-jsx",
    name: "logout",
    description: "Sign out from your Anthropic account",
    isEnabled: () => !Oe.DISABLE_LOGOUT_COMMAND,
    fleetHostCall: async (e) => {
      let { fleetHostLogout: t } = await Promise.resolve().then(() => (hVn(), rAo));
      return t(e);
    },
    load: () => Promise.resolve().then(() => (hVn(), rAo)),
  };
});
function xUl(e) {
  let t = CUl.c(14),
    { onSubmit: n, defaultSelections: r } = e,
    [o, s] = IUl.useState(false),
    i;
  if (t[0] !== n)
    ((i = (y) => {
      if (y.length === 0) {
        s(true);
        return;
      }
      (s(false), n(y));
    }),
      (t[0] = n),
      (t[1] = i));
  else i = t[1];
  let a = i,
    l;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((l = () => {
      s(false);
    }),
      (t[2] = l));
  else l = t[2];
  let c = l,
    u;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((u = () => {
      s(true);
    }),
      (t[3] = u));
  else u = t[3];
  let d = u,
    p;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((p = Nq.jsx(U, {
      children: Nq.jsxs(w, {
        dimColor: true,
        children: [
          "More workflow examples (issue triage, CI fixes, etc.) at:",
          " ",
          Nq.jsx(xs, {
            url: "https://github.com/anthropics/claude-code-action/blob/main/examples/",
            children: "https://github.com/anthropics/claude-code-action/blob/main/examples/",
          }),
        ],
      }),
    })),
      (t[4] = p));
  else p = t[4];
  let f;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) ((f = m1f.map(h1f)), (t[5] = f));
  else f = t[5];
  let m;
  if (t[6] !== r || t[7] !== a)
    ((m = Nq.jsx(MOe, {
      options: f,
      defaultValue: r,
      onSubmit: a,
      onChange: c,
      onCancel: d,
      hideIndexes: true,
    })),
      (t[6] = r),
      (t[7] = a),
      (t[8] = m));
  else m = t[8];
  let g;
  if (t[9] !== o)
    ((g =
      o &&
      Nq.jsx(U, {
        children: Nq.jsx(w, {
          color: "error",
          children: "You must select at least one workflow to continue",
        }),
      })),
      (t[9] = o),
      (t[10] = g));
  else g = t[10];
  let h;
  if (t[11] !== m || t[12] !== g)
    ((h = Nq.jsxs(zn, {
      title: "Select GitHub workflows to install",
      subtitle: "We'll create a workflow file in your repository for each one you select.",
      onCancel: d,
      inputGuide: g1f,
      children: [p, m, g],
    })),
      (t[11] = m),
      (t[12] = g),
      (t[13] = h));
  else h = t[13];
  return h;
}
function h1f(e) {
  return {
    label: e.label,
    value: e.value,
  };
}
var CUl, IUl, Nq, m1f, g1f;
