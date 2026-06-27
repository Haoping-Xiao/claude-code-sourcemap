// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mQa
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.017  score=0.3073  fileCov=0.0177
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.017); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mQa = E(() => {
  Ye();
  ps();
  sr();
  Cc();
  Vl();
  Bs();
  f_();
  Ko();
  CH();
  Mg();
  wb();
  vH();
  dQa();
  Z9n();
  ZHo = R(lt(), 1), sMe = R(rt(), 1), tR = R(se(), 1);
});
function hQa() {
  let e = gQa.c(17),
    {
      goBack: t,
      goNext: n,
      updateWizardData: r,
      wizardData: o
    } = Eu(),
    [s, i] = e8n.useState(o.region ?? "global"),
    [a, l] = e8n.useState(s.length),
    [c, u] = e8n.useState(null),
    d;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) d = {
    context: "Settings"
  }, e[0] = d;else d = e[0];
  $r("confirm:no", t, d);
  let p;
  if (e[1] !== n || e[2] !== r || e[3] !== s) p = () => {
    let S = s.trim();
    if (!S) {
      u("Region is required");
      return;
    }
    u(null), r({
      region: S
    }), n();
  }, e[1] = n, e[2] = r, e[3] = s, e[4] = p;else p = e[4];
  let f = p,
    m;
  if (e[5] === Symbol.for("react.memo_cache_sentinel")) m = N6.jsxs(Tn, {
    children: [N6.jsx(ht, {
      chord: "enter",
      action: "continue"
    }), N6.jsx(mr, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), e[5] = m;else m = e[5];
  let g, h;
  if (e[6] === Symbol.for("react.memo_cache_sentinel")) g = N6.jsx(w, {
    children: "Where Claude models are served from."
  }), h = N6.jsx(w, {
    dimColor: true,
    children: "Use 'global', 'us', or 'eu' for a multi-region endpoint (recommended), or a specific location like us-east5 if you have regional quota."
  }), e[6] = g, e[7] = h;else g = e[6], h = e[7];
  let y;
  if (e[8] !== a || e[9] !== f || e[10] !== s) y = N6.jsx(U, {
    marginTop: 1,
    children: N6.jsx(Ta, {
      value: s,
      onChange: i,
      onSubmit: f,
      placeholder: "global",
      columns: 40,
      cursorOffset: a,
      onChangeCursorOffset: l,
      focus: true,
      showCursor: true
    })
  }), e[8] = a, e[9] = f, e[10] = s, e[11] = y;else y = e[11];
  let b;
  if (e[12] !== c) b = c && N6.jsx(U, {
    marginTop: 1,
    children: N6.jsx(Va, {
      error: c
    })
  }), e[12] = c, e[13] = b;else b = e[13];
  let _;
  if (e[14] !== y || e[15] !== b) _ = N6.jsx(Pc, {
    subtitle: "Vertex AI region",
    footerText: m,
    children: N6.jsxs(U, {
      flexDirection: "column",
      children: [g, h, y, b]
    })
  }), e[14] = y, e[15] = b, e[16] = _;else _ = e[16];
  return _;
}
var gQa, e8n, N6;