// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cHc
// matched 2.1.88 source: src/components/permissions/BashPermissionRequest/BashPermissionRequest.tsx
// class=new  jaccard=0.033  score=0.2666  fileCov=0.0362
// note: nearest: src/components/permissions/BashPermissionRequest/BashPermissionRequest.tsx (0.033); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cHc = E(() => {
  Vl();
  Bs();
  Ko();
  tHc();
  X0();
  eKo();
  WTe();
  Tpr();
  LUt();
  V9n();
  Ye();
  Un();
  kt();
  Du();
  uo();
  S$();
  eit();
  N6e();
  Bmo();
  $I();
  lg();
  aHc = R(lt(), 1), UH = R(rt(), 1), PC = R(se(), 1);
});
function E_m(e, t) {
  switch (e) {
    case "allow":
      return {
        behavior: "allow",
        updatedInput: t.input
      };
    case "allow-domain":
      return {
        behavior: "allow",
        updatedInput: t.input,
        permissionUpdates: t.chrome ? [{
          type: "addRules",
          rules: [{
            toolName: z0e,
            ruleContent: t.chrome.host
          }],
          behavior: "allow",
          destination: "session"
        }] : []
      };
    case "deny":
      return {
        behavior: "deny"
      };
  }
}
function A_m(e) {
  return e.showAlwaysAllow && !e.isAskCappedByOrg && !!e.chrome;
}
function dHc(e) {
  let t = uHc.c(27),
    {
      payload: n,
      answer: r
    } = e,
    {
      verbPhrase: o,
      chrome: s
    } = n,
    i;
  if (t[0] !== n) i = A_m(n), t[0] = n, t[1] = i;else i = t[1];
  let a = i,
    l;
  if (t[2] !== r || t[3] !== n) l = S => {
    r(E_m(S, n));
  }, t[2] = r, t[3] = n, t[4] = l;else l = t[4];
  let c = l,
    u;
  if (t[5] !== r) u = () => {
    r({
      behavior: "cancelled"
    });
  }, t[5] = r, t[6] = u;else u = t[6];
  let d = u,
    p;
  if (t[7] === Symbol.for("react.memo_cache_sentinel")) p = {
    label: "Allow",
    value: "allow"
  }, t[7] = p;else p = t[7];
  let f;
  if (t[8] !== s || t[9] !== a) {
    if (f = [p], a && s) {
      let A;
      if (t[11] !== s.host) A = {
        label: Ume.jsxs(w, {
          children: ["Allow all actions on ", Ume.jsx(w, {
            bold: true,
            children: s.host
          }), " for this session"]
        }),
        value: "allow-domain"
      }, t[11] = s.host, t[12] = A;else A = t[12];
      f.push(A);
    }
    let S;
    if (t[13] === Symbol.for("react.memo_cache_sentinel")) S = {
      label: Ume.jsxs(w, {
        children: ["Deny ", Ume.jsx(w, {
          bold: true,
          children: "(esc)"
        })]
      }),
      value: "deny"
    }, t[13] = S;else S = t[13];
    f.push(S), t[8] = s, t[9] = a, t[10] = f;
  } else f = t[10];
  let m = f,
    g = s ? `Claude in Chrome wants to ${o} on ${s.host}` : `Claude in Chrome wants to ${o}`,
    h;
  if (t[14] !== s) h = s ? Ume.jsx(w, {
    dimColor: true,
    children: s.url
  }) : null, t[14] = s, t[15] = h;else h = t[15];
  let y;
  if (t[16] !== d || t[17] !== c || t[18] !== m) y = Ume.jsx(Sr, {
    options: m,
    onChange: c,
    onCancel: d
  }), t[16] = d, t[17] = c, t[18] = m, t[19] = y;else y = t[19];
  let b;
  if (t[20] !== h || t[21] !== y) b = Ume.jsxs(U, {
    flexDirection: "column",
    paddingY: 1,
    gap: 1,
    children: [h, y]
  }), t[20] = h, t[21] = y, t[22] = b;else b = t[22];
  let _;
  if (t[23] !== n.requestSource || t[24] !== g || t[25] !== b) _ = Ume.jsx(Lf, {
    title: g,
    requestSource: n.requestSource,
    children: b
  }), t[23] = n.requestSource, t[24] = g, t[25] = b, t[26] = _;else _ = t[26];
  return _;
}
var uHc, Ume;