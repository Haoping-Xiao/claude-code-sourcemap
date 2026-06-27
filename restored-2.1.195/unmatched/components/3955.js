// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yQa
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0181  score=0.2931  fileCov=0.0189
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0181); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yQa = E(() => {
  Ye();
  ps();
  Cc();
  Bs();
  f_();
  Ko();
  Mg();
  wb();
  vH();
  gQa = R(lt(), 1), e8n = R(rt(), 1), N6 = R(se(), 1);
});
function EQa() {
  let e = _Qa.c(17),
    {
      goBack: t,
      goToStep: n,
      updateWizardData: r,
      wizardData: o
    } = Eu(),
    [s, i] = t8n.useState(o.keyFile ?? ""),
    [a, l] = t8n.useState(s.length),
    [c, u] = t8n.useState(null),
    d;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) d = {
    context: "Settings"
  }, e[0] = d;else d = e[0];
  $r("confirm:no", t, d);
  let p;
  if (e[1] !== n || e[2] !== r || e[3] !== s) p = () => {
    let S = s.trim();
    if (!S) {
      u("Path is required");
      return;
    }
    u(null);
    let A = S === "~" || S.startsWith("~/") ? SQa.join(bQa.homedir(), S.slice(1)) : S;
    r({
      keyFile: A
    }), n(rMe.PROJECT);
  }, e[1] = n, e[2] = r, e[3] = s, e[4] = p;else p = e[4];
  let f = p,
    m;
  if (e[5] === Symbol.for("react.memo_cache_sentinel")) m = B6.jsxs(Tn, {
    children: [B6.jsx(ht, {
      chord: "enter",
      action: "continue"
    }), B6.jsx(mr, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), e[5] = m;else m = e[5];
  let g, h;
  if (e[6] === Symbol.for("react.memo_cache_sentinel")) g = B6.jsx(w, {
    children: "Path to the service account JSON key file."
  }), h = B6.jsx(w, {
    dimColor: true,
    children: "Download one from the GCP console under IAM \u2192 Service Accounts \u2192 Keys \u2192 Add key."
  }), e[6] = g, e[7] = h;else g = e[6], h = e[7];
  let y;
  if (e[8] !== a || e[9] !== f || e[10] !== s) y = B6.jsx(U, {
    marginTop: 1,
    children: B6.jsx(Ta, {
      value: s,
      onChange: i,
      onSubmit: f,
      placeholder: "~/keys/my-project-vertex.json",
      columns: 60,
      cursorOffset: a,
      onChangeCursorOffset: l,
      focus: true,
      showCursor: true
    })
  }), e[8] = a, e[9] = f, e[10] = s, e[11] = y;else y = e[11];
  let b;
  if (e[12] !== c) b = c && B6.jsx(U, {
    marginTop: 1,
    children: B6.jsx(Va, {
      error: c
    })
  }), e[12] = c, e[13] = b;else b = e[13];
  let _;
  if (e[14] !== y || e[15] !== b) _ = B6.jsx(Pc, {
    subtitle: "Service account key",
    footerText: m,
    children: B6.jsxs(U, {
      flexDirection: "column",
      children: [g, h, y, b]
    })
  }), e[14] = y, e[15] = b, e[16] = _;else _ = e[16];
  return _;
}
var _Qa, bQa, SQa, t8n, B6;