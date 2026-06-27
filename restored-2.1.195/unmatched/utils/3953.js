// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dQa
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0194  score=0.2297  fileCov=0.0207
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0194); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dQa = E(() => {
  Jt();
  GVt = require("fs/promises"), cQa = require("os"), jVt = require("path");
});
function fQa() {
  let e = ZHo.c(10),
    {
      goBack: t,
      goToStep: n,
      updateWizardData: r,
      wizardData: o
    } = Eu(),
    s;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) s = {
    phase: "loading"
  }, e[0] = s;else s = e[0];
  let [i, a] = sMe.useState(s),
    l,
    c;
  if (e[1] === Symbol.for("react.memo_cache_sentinel")) l = () => {
    let d = false;
    return uQa().then(p => {
      if (!d) a({
        phase: "ready",
        projects: p
      });
    }), () => {
      d = true;
    };
  }, c = [], e[1] = l, e[2] = c;else l = e[1], c = e[2];
  if (sMe.useEffect(l, c), i.phase === "loading") {
    let d;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) d = tR.jsx(Pc, {
      subtitle: "GCP project",
      children: tR.jsx(Vc, {
        message: "Reading ~/.config/gcloud\u2026"
      })
    }), e[3] = d;else d = e[3];
    return d;
  }
  let u;
  if (e[4] !== t || e[5] !== n || e[6] !== i.projects || e[7] !== r || e[8] !== o) u = tR.jsx(jJp, {
    projects: i.projects,
    wizardData: o,
    goBack: t,
    goToStep: n,
    updateWizardData: r
  }), e[4] = t, e[5] = n, e[6] = i.projects, e[7] = r, e[8] = o, e[9] = u;else u = e[9];
  return u;
}
function jJp(e) {
  let t = ZHo.c(45),
    {
      projects: n,
      wizardData: r,
      goBack: o,
      goToStep: s,
      updateWizardData: i
    } = e,
    a = n.length > FJp,
    l;
  if (t[0] !== n || t[1] !== r.projectId) l = r.projectId && !n.includes(r.projectId), t[0] = n, t[1] = r.projectId, t[2] = l;else l = t[2];
  let c = Boolean(l),
    [u, d] = sMe.useState(n.length === 0 || a || c),
    [p, f] = sMe.useState(r.projectId ?? ""),
    [m, g] = sMe.useState(p.length),
    [h, y] = sMe.useState(null),
    b;
  if (t[3] !== u) b = {
    context: "Settings",
    isActive: u
  }, t[3] = u, t[4] = b;else b = t[4];
  $r("confirm:no", o, b);
  let _;
  if (t[5] !== s || t[6] !== i) _ = L => {
    i({
      projectId: L
    }), s(rMe.REGION);
  }, t[5] = s, t[6] = i, t[7] = _;else _ = t[7];
  let S = _;
  if (!u) {
    let L = n.length,
      M;
    if (t[8] !== n.length) M = bn(n.length, "project"), t[8] = n.length, t[9] = M;else M = t[9];
    let N;
    if (t[10] !== n.length || t[11] !== M) N = tR.jsxs(w, {
      dimColor: true,
      children: ["Found ", L, " ", M, " in your gcloud configurations."]
    }), t[10] = n.length, t[11] = M, t[12] = N;else N = t[12];
    let B;
    if (t[13] !== n) {
      let Y;
      if (t[15] === Symbol.for("react.memo_cache_sentinel")) Y = {
        label: "Type a different project\u2026",
        value: pQa
      }, t[15] = Y;else Y = t[15];
      B = [...n.map(GJp), Y], t[13] = n, t[14] = B;
    } else B = t[14];
    let $ = r.projectId && n.includes(r.projectId) ? r.projectId : void 0,
      q;
    if (t[16] !== S) q = Y => {
      if (Y === pQa) d(true);else S(Y);
    }, t[16] = S, t[17] = q;else q = t[17];
    let W;
    if (t[18] !== o || t[19] !== B || t[20] !== $ || t[21] !== q) W = tR.jsx(Sr, {
      options: B,
      defaultValue: $,
      onChange: q,
      onCancel: o
    }), t[18] = o, t[19] = B, t[20] = $, t[21] = q, t[22] = W;else W = t[22];
    let V;
    if (t[23] !== W || t[24] !== N) V = tR.jsx(Pc, {
      subtitle: "GCP project",
      children: tR.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [N, W]
      })
    }), t[23] = W, t[24] = N, t[25] = V;else V = t[25];
    return V;
  }
  let A;
  if (t[26] !== S || t[27] !== p) A = () => {
    let L = p.trim();
    if (!L) {
      y("Project ID is required");
      return;
    }
    y(null), S(L);
  }, t[26] = S, t[27] = p, t[28] = A;else A = t[28];
  let v = A,
    C;
  if (t[29] === Symbol.for("react.memo_cache_sentinel")) C = tR.jsxs(Tn, {
    children: [tR.jsx(ht, {
      chord: "enter",
      action: "continue"
    }), tR.jsx(mr, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), t[29] = C;else C = t[29];
  let x;
  if (t[30] === Symbol.for("react.memo_cache_sentinel")) x = tR.jsx(w, {
    children: "The project where Vertex AI is enabled."
  }), t[30] = x;else x = t[30];
  let I;
  if (t[31] !== n.length || t[32] !== a) I = a && tR.jsxs(w, {
    dimColor: true,
    children: ["Found ", n.length, " projects \u2014 too many to list."]
  }), t[31] = n.length, t[32] = a, t[33] = I;else I = t[33];
  let k;
  if (t[34] === Symbol.for("react.memo_cache_sentinel")) k = tR.jsx(w, {
    dimColor: true,
    children: "Find it with `gcloud config get-value project` or in the GCP console header."
  }), t[34] = k;else k = t[34];
  let D;
  if (t[35] !== m || t[36] !== v || t[37] !== p) D = tR.jsx(U, {
    marginTop: 1,
    children: tR.jsx(Ta, {
      value: p,
      onChange: f,
      onSubmit: v,
      placeholder: "my-gcp-project",
      columns: 60,
      cursorOffset: m,
      onChangeCursorOffset: g,
      focus: true,
      showCursor: true
    })
  }), t[35] = m, t[36] = v, t[37] = p, t[38] = D;else D = t[38];
  let P;
  if (t[39] !== h) P = h && tR.jsx(U, {
    marginTop: 1,
    children: tR.jsx(Va, {
      error: h
    })
  }), t[39] = h, t[40] = P;else P = t[40];
  let O;
  if (t[41] !== P || t[42] !== I || t[43] !== D) O = tR.jsx(Pc, {
    subtitle: "GCP project ID",
    footerText: C,
    children: tR.jsxs(U, {
      flexDirection: "column",
      children: [x, I, k, D, P]
    })
  }), t[41] = P, t[42] = I, t[43] = D, t[44] = O;else O = t[44];
  return O;
}
function GJp(e) {
  return {
    label: e,
    value: e
  };
}
var ZHo,
  sMe,
  tR,
  pQa = "__manual__",
  FJp = 12;