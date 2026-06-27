// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H9n
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/MethodStep.tsx
// class=partial  jaccard=0.0698  score=0.1118  fileCov=0.1567
// note: low-confidence suggestion: src/components/agents/new-agent-creation/wizard-steps/MethodStep.tsx; dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module H9n]
XEe = {
  AUTH_METHOD: 0,
  PROFILE: 1,
  BEARER: 2,
  ACCESS_KEY_ID: 3,
  REGION: 4,
  VERIFY: 5,
  PIN_MODELS: 6,
  CONFIRM: 7
};
function cXa() {
  let e = lXa.c(12),
    {
      goBack: t,
      goToStep: n,
      updateWizardData: r
    } = Eu(),
    o;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) o = {
    label: "AWS profile (SSO or named profile)",
    value: "profile"
  }, e[0] = o;else o = e[0];
  let s;
  if (e[1] === Symbol.for("react.memo_cache_sentinel")) s = {
    label: "Bedrock API key (bearer token)",
    value: "bearer"
  }, e[1] = s;else s = e[1];
  let i;
  if (e[2] === Symbol.for("react.memo_cache_sentinel")) i = {
    label: "Access key + secret",
    value: "accessKey"
  }, e[2] = i;else i = e[2];
  let a;
  if (e[3] === Symbol.for("react.memo_cache_sentinel")) a = [o, s, i, {
    label: "Use credentials already in my environment",
    value: "environment"
  }], e[3] = a;else a = e[3];
  let l = a,
    c;
  if (e[4] === Symbol.for("react.memo_cache_sentinel")) c = {
    profile: XEe.PROFILE,
    bearer: XEe.BEARER,
    accessKey: XEe.ACCESS_KEY_ID,
    environment: XEe.REGION
  }, e[4] = c;else c = e[4];
  let u = c,
    d;
  if (e[5] !== n || e[6] !== r) d = g => {
    let h = g;
    r({
      authMethod: h
    }), n(u[h]);
  }, e[5] = n, e[6] = r, e[7] = d;else d = e[7];
  let p = d,
    f;
  if (e[8] === Symbol.for("react.memo_cache_sentinel")) f = nht.jsx(w, {
    dimColor: true,
    children: "Claude Code uses the standard AWS credential chain. Pick the method you already use with the AWS CLI."
  }), e[8] = f;else f = e[8];
  let m;
  if (e[9] !== t || e[10] !== p) m = nht.jsx(Pc, {
    subtitle: "How do you authenticate to AWS?",
    children: nht.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [f, nht.jsx(Sr, {
        options: l,
        onChange: p,
        onCancel: t
      })]
    })
  }), e[9] = t, e[10] = p, e[11] = m;else m = e[11];
  return m;
}
var lXa, nht;