// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uXa
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/TypeStep.tsx
// class=partial  jaccard=0.152  score=0.3612  fileCov=0.2079
// note: low-confidence suggestion: src/components/agents/new-agent-creation/wizard-steps/TypeStep.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uXa = E(() => {
  Ye();
  Vl();
  wb();
  vH();
  H9n();
  lXa = R(lt(), 1), nht = R(se(), 1);
});
function pXa() {
  let e = dXa.c(17),
    {
      goBack: t,
      goToStep: n,
      updateWizardData: r,
      wizardData: o
    } = Eu(),
    [s, i] = T9n.useState(o.bearerToken ?? ""),
    [a, l] = T9n.useState(s.length),
    [c, u] = T9n.useState(null),
    d;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) d = {
    context: "Settings"
  }, e[0] = d;else d = e[0];
  $r("confirm:no", t, d);
  let p;
  if (e[1] !== n || e[2] !== r || e[3] !== s) p = () => {
    let S = s.trim();
    if (!S) {
      u("API key is required");
      return;
    }
    u(null), r({
      bearerToken: S
    }), n(XEe.REGION);
  }, e[1] = n, e[2] = r, e[3] = s, e[4] = p;else p = e[4];
  let f = p,
    m;
  if (e[5] === Symbol.for("react.memo_cache_sentinel")) m = L6.jsxs(Tn, {
    children: [L6.jsx(ht, {
      chord: "enter",
      action: "continue"
    }), L6.jsx(mr, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), e[5] = m;else m = e[5];
  let g, h;
  if (e[6] === Symbol.for("react.memo_cache_sentinel")) g = L6.jsx(w, {
    children: "Paste your Bedrock API key."
  }), h = L6.jsx(w, {
    dimColor: !0,
    children: "Generate one in the AWS console under Bedrock \u2192 API keys."
  }), e[6] = g, e[7] = h;else g = e[6], h = e[7];
  let y;
  if (e[8] !== a || e[9] !== f || e[10] !== s) y = L6.jsx(U, {
    marginTop: 1,
    children: L6.jsx(Ta, {
      value: s,
      onChange: i,
      onSubmit: f,
      placeholder: "bedrock-api-key-\u2026",
      mask: "*",
      columns: 60,
      cursorOffset: a,
      onChangeCursorOffset: l,
      focus: !0,
      showCursor: !0
    })
  }), e[8] = a, e[9] = f, e[10] = s, e[11] = y;else y = e[11];
  let b;
  if (e[12] !== c) b = c && L6.jsx(U, {
    marginTop: 1,
    children: L6.jsx(Va, {
      error: c
    })
  }), e[12] = c, e[13] = b;else b = e[13];
  let _;
  if (e[14] !== y || e[15] !== b) _ = L6.jsx(Pc, {
    subtitle: "Bedrock API key",
    footerText: m,
    children: L6.jsxs(U, {
      flexDirection: "column",
      children: [g, h, y, b]
    })
  }), e[14] = y, e[15] = b, e[16] = _;else _ = e[16];
  return _;
}
var dXa, T9n, L6;