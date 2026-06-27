// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z9n
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/cache/entities/AccountEntity.mjs
// class=new  jaccard=0.0408  score=0.1044  fileCov=0.0627
// note: nearest: node_modules/@azure/msal-common/dist/cache/entities/AccountEntity.mjs (0.0408); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Z9n = E(() => {
  rMe = {
    AUTH_METHOD: 0,
    SERVICE_ACCOUNT: 1,
    PROJECT: 2,
    REGION: 3,
    VERIFY: 4,
    PIN_MODELS: 5,
    CONFIRM: 6
  };
});
function JJa() {
  let e = XJa.c(12),
    {
      goBack: t,
      goToStep: n,
      updateWizardData: r,
      wizardData: o
    } = Eu(),
    s;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) s = {
    label: "Application Default Credentials (gcloud auth)",
    value: "adc"
  }, e[0] = s;else s = e[0];
  let i;
  if (e[1] === Symbol.for("react.memo_cache_sentinel")) i = {
    label: "Service account key file",
    value: "serviceAccount"
  }, e[1] = i;else i = e[1];
  let a;
  if (e[2] === Symbol.for("react.memo_cache_sentinel")) a = [s, i, {
    label: "Use credentials already in my environment",
    value: "environment"
  }], e[2] = a;else a = e[2];
  let l = a,
    c;
  if (e[3] === Symbol.for("react.memo_cache_sentinel")) c = {
    adc: rMe.PROJECT,
    serviceAccount: rMe.SERVICE_ACCOUNT,
    environment: rMe.PROJECT
  }, e[3] = c;else c = e[3];
  let u = c,
    d;
  if (e[4] !== n || e[5] !== r) d = g => {
    let h = g;
    r({
      authMethod: h
    }), n(u[h]);
  }, e[4] = n, e[5] = r, e[6] = d;else d = e[6];
  let p = d,
    f;
  if (e[7] === Symbol.for("react.memo_cache_sentinel")) f = hht.jsx(w, {
    dimColor: !0,
    children: "Claude Code uses the standard GCP credential chain. Pick the method you already use with gcloud or in your deployment."
  }), e[7] = f;else f = e[7];
  let m;
  if (e[8] !== t || e[9] !== p || e[10] !== o.authMethod) m = hht.jsx(Pc, {
    subtitle: "How do you authenticate to Google Cloud?",
    children: hht.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [f, hht.jsx(Sr, {
        options: l,
        defaultValue: o.authMethod,
        onChange: p,
        onCancel: t
      })]
    })
  }), e[8] = t, e[9] = p, e[10] = o.authMethod, e[11] = m;else m = e[11];
  return m;
}
var XJa, hht;