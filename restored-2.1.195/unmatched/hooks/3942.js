// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NJa
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0193  score=0.2153  fileCov=0.0207
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0193); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NJa]
MJa = require("fs/promises"), $Ja = require("os"), WHo = require("path");
function UJa() {
  let e = qHo.c(10),
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
  let [i, a] = nMe.useState(s),
    l,
    c;
  if (e[1] === Symbol.for("react.memo_cache_sentinel")) l = () => {
    let d = false;
    return OJa().then(p => {
      if (!d) a({
        phase: "ready",
        profiles: p
      });
    }), () => {
      d = true;
    };
  }, c = [], e[1] = l, e[2] = c;else l = e[1], c = e[2];
  if (nMe.useEffect(l, c), i.phase === "loading") {
    let d;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) d = eR.jsx(Pc, {
      subtitle: "AWS profile",
      children: eR.jsx(Vc, {
        message: "Reading ~/.aws/config\u2026"
      })
    }), e[3] = d;else d = e[3];
    return d;
  }
  let u;
  if (e[4] !== t || e[5] !== n || e[6] !== i.profiles || e[7] !== r || e[8] !== o) u = eR.jsx(_Jp, {
    profiles: i.profiles,
    wizardData: o,
    goBack: t,
    goToStep: n,
    updateWizardData: r
  }), e[4] = t, e[5] = n, e[6] = i.profiles, e[7] = r, e[8] = o, e[9] = u;else u = e[9];
  return u;
}
function _Jp(e) {
  let t = qHo.c(49),
    {
      profiles: n,
      wizardData: r,
      goBack: o,
      goToStep: s,
      updateWizardData: i
    } = e,
    a = n.length > yJp,
    l;
  if (t[0] !== n || t[1] !== r.awsProfile) l = r.awsProfile && !n.includes(r.awsProfile), t[0] = n, t[1] = r.awsProfile, t[2] = l;else l = t[2];
  let c = Boolean(l),
    [u, d] = nMe.useState(n.length === 0 || a || c),
    p;
  if (t[3] !== n || t[4] !== a) p = a ? n.find(SJp) : void 0, t[3] = n, t[4] = a, t[5] = p;else p = t[5];
  let f = p,
    [m, g] = nMe.useState(r.awsProfile ?? f ?? ""),
    [h, y] = nMe.useState(m.length),
    [b, _] = nMe.useState(null),
    S;
  if (t[6] !== u) S = {
    context: "Settings",
    isActive: u
  }, t[6] = u, t[7] = S;else S = t[7];
  $r("confirm:no", o, S);
  let A;
  if (t[8] !== s || t[9] !== i) A = N => {
    i({
      awsProfile: N
    }), s(XEe.REGION);
  }, t[8] = s, t[9] = i, t[10] = A;else A = t[10];
  let v = A;
  if (!u) {
    let N = n.length,
      B;
    if (t[11] !== n.length) B = bn(n.length, "profile"), t[11] = n.length, t[12] = B;else B = t[12];
    let $;
    if (t[13] !== n.length || t[14] !== B) $ = eR.jsxs(w, {
      dimColor: true,
      children: ["Found ", N, " ", B, " in ~/.aws/config and ~/.aws/credentials."]
    }), t[13] = n.length, t[14] = B, t[15] = $;else $ = t[15];
    let q;
    if (t[16] !== n) {
      let K;
      if (t[18] === Symbol.for("react.memo_cache_sentinel")) K = {
        label: "Type a different name\u2026",
        value: BJa
      }, t[18] = K;else K = t[18];
      q = [...n.map(bJp), K], t[16] = n, t[17] = q;
    } else q = t[17];
    let W = r.awsProfile && n.includes(r.awsProfile) ? r.awsProfile : void 0,
      V;
    if (t[19] !== v) V = K => {
      if (K === BJa) d(true);else v(K);
    }, t[19] = v, t[20] = V;else V = t[20];
    let Y;
    if (t[21] !== o || t[22] !== V || t[23] !== q || t[24] !== W) Y = eR.jsx(Sr, {
      options: q,
      defaultValue: W,
      onChange: V,
      onCancel: o
    }), t[21] = o, t[22] = V, t[23] = q, t[24] = W, t[25] = Y;else Y = t[25];
    let z;
    if (t[26] !== Y || t[27] !== $) z = eR.jsx(Pc, {
      subtitle: "AWS profile",
      children: eR.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [$, Y]
      })
    }), t[26] = Y, t[27] = $, t[28] = z;else z = t[28];
    return z;
  }
  let C;
  if (t[29] !== v || t[30] !== m) C = () => {
    let N = m.trim();
    if (!N) {
      _("Profile name is required");
      return;
    }
    _(null), v(N);
  }, t[29] = v, t[30] = m, t[31] = C;else C = t[31];
  let x = C,
    I;
  if (t[32] === Symbol.for("react.memo_cache_sentinel")) I = eR.jsxs(Tn, {
    children: [eR.jsx(ht, {
      chord: "enter",
      action: "continue"
    }), eR.jsx(mr, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    })]
  }), t[32] = I;else I = t[32];
  let k;
  if (t[33] === Symbol.for("react.memo_cache_sentinel")) k = eR.jsx(w, {
    children: "The name from ~/.aws/config (after [profile \u2026])."
  }), t[33] = k;else k = t[33];
  let D;
  if (t[34] !== f || t[35] !== n.length || t[36] !== a) D = a && eR.jsxs(w, {
    dimColor: true,
    children: ["Found ", n.length, " profiles \u2014 too many to list.", f && ` Prepopulated with "${f}".`]
  }), t[34] = f, t[35] = n.length, t[36] = a, t[37] = D;else D = t[37];
  let P;
  if (t[38] === Symbol.for("react.memo_cache_sentinel")) P = eR.jsx(w, {
    dimColor: true,
    children: "If this is an SSO profile, run `aws sso login --profile NAME` first."
  }), t[38] = P;else P = t[38];
  let O;
  if (t[39] !== h || t[40] !== x || t[41] !== m) O = eR.jsx(U, {
    marginTop: 1,
    children: eR.jsx(Ta, {
      value: m,
      onChange: g,
      onSubmit: x,
      placeholder: "my-bedrock-profile",
      columns: 60,
      cursorOffset: h,
      onChangeCursorOffset: y,
      focus: true,
      showCursor: true
    })
  }), t[39] = h, t[40] = x, t[41] = m, t[42] = O;else O = t[42];
  let L;
  if (t[43] !== b) L = b && eR.jsx(U, {
    marginTop: 1,
    children: eR.jsx(Va, {
      error: b
    })
  }), t[43] = b, t[44] = L;else L = t[44];
  let M;
  if (t[45] !== O || t[46] !== L || t[47] !== D) M = eR.jsx(Pc, {
    subtitle: "AWS profile name",
    footerText: I,
    children: eR.jsxs(U, {
      flexDirection: "column",
      children: [k, D, P, O, L]
    })
  }), t[45] = O, t[46] = L, t[47] = D, t[48] = M;else M = t[48];
  return M;
}
function bJp(e) {
  return {
    label: e,
    value: e
  };
}
function SJp(e) {
  return e.toLowerCase().includes("bedrock");
}
var qHo,
  nMe,
  eR,
  BJa = "__manual__",
  yJp = 12;