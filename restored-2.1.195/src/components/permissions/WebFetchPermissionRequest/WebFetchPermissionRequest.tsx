// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FHc
// matched 2.1.88 source: src/components/permissions/WebFetchPermissionRequest/WebFetchPermissionRequest.tsx
// class=modified  jaccard=0.1804  score=0.3131  fileCov=0.2986
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module FHc] deps: ft, X0, dtn, WTe, Ye, Du
((BHc = R(lt(), 1)), (R3 = R(se(), 1)));
function WebFetchPermissionRequest(t0, t) {
  switch (t0) {
    case "yes":
      return {
        behavior: "allow",
        updatedInput: t.input,
      };
    case "yes-dont-ask-again-domain":
      return {
        behavior: "allow",
        updatedInput: t.input,
        permissionUpdates: [
          {
            type: "addRules",
            rules: [
              {
                toolName: t.toolName,
                ruleContent: `domain:${t.hostname}`,
              },
            ],
            behavior: "allow",
            destination: "localSettings",
          },
        ],
      };
    case "no":
      return {
        behavior: "deny",
      };
  }
}
function j_m(e) {
  let t = e.permissionResult.decisionReason,
    n = t?.type === "safetyCheck" && !t.classifierApprovable;
  return e.showAlwaysAllow && !n && !e.isAskCappedByOrg && e.hostname !== "";
}
function GHc(e) {
  let t = jHc.c(35),
    { payload: n, answer: r } = e,
    o;
  if (t[0] !== n) ((o = j_m(n)), (t[0] = n), (t[1] = o));
  else o = t[1];
  let s = o,
    i;
  if (t[2] !== r || t[3] !== n)
    ((i = (A) => {
      r(WebFetchPermissionRequest(A, n));
    }),
      (t[2] = r),
      (t[3] = n),
      (t[4] = i));
  else i = t[4];
  let a = i,
    l;
  if (t[5] !== r)
    ((l = () => {
      r({
        behavior: "cancelled",
      });
    }),
      (t[5] = r),
      (t[6] = l));
  else l = t[6];
  let c = l,
    u;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((u = {
      label: "Yes",
      value: "yes",
    }),
      (t[7] = u));
  else u = t[7];
  let d;
  if (t[8] !== n.hostname || t[9] !== s) {
    if (((d = [u]), s)) {
      let v;
      if (t[11] !== n.hostname)
        ((v = {
          label: cV.jsxs(w, {
            children: [
              "Yes, and don't ask again for",
              " ",
              cV.jsx(w, {
                bold: true,
                children: n.hostname,
              }),
            ],
          }),
          value: "yes-dont-ask-again-domain",
        }),
          (t[11] = n.hostname),
          (t[12] = v));
      else v = t[12];
      d.push(v);
    }
    let A;
    if (t[13] === Symbol.for("react.memo_cache_sentinel"))
      ((A = {
        label: cV.jsxs(w, {
          children: [
            "No, and tell Claude what to do differently ",
            cV.jsx(w, {
              bold: true,
              children: "(esc)",
            }),
          ],
        }),
        value: "no",
      }),
        (t[13] = A));
    else A = t[13];
    (d.push(A), (t[8] = n.hostname), (t[9] = s), (t[10] = d));
  } else d = t[10];
  let p = d,
    f;
  if (t[14] !== n.renderedToolUseMessage)
    ((f = cV.jsx(w, {
      children: n.renderedToolUseMessage,
    })),
      (t[14] = n.renderedToolUseMessage),
      (t[15] = f));
  else f = t[15];
  let m;
  if (t[16] !== n.description)
    ((m = cV.jsx(w, {
      dimColor: true,
      children: n.description,
    })),
      (t[16] = n.description),
      (t[17] = m));
  else m = t[17];
  let g;
  if (t[18] !== f || t[19] !== m)
    ((g = cV.jsxs(U, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: [f, m],
    })),
      (t[18] = f),
      (t[19] = m),
      (t[20] = g));
  else g = t[20];
  let h;
  if (t[21] !== n.permissionResult)
    ((h = cV.jsx(_2, {
      permissionResult: n.permissionResult,
      toolType: "tool",
    })),
      (t[21] = n.permissionResult),
      (t[22] = h));
  else h = t[22];
  let y;
  if (t[23] === Symbol.for("react.memo_cache_sentinel"))
    ((y = cV.jsx(w, {
      children: "Do you want to allow Claude to fetch this content?",
    })),
      (t[23] = y));
  else y = t[23];
  let b;
  if (t[24] !== c || t[25] !== a || t[26] !== p)
    ((b = cV.jsx(Sr, {
      options: p,
      onChange: a,
      onCancel: c,
    })),
      (t[24] = c),
      (t[25] = a),
      (t[26] = p),
      (t[27] = b));
  else b = t[27];
  let _;
  if (t[28] !== b || t[29] !== h)
    ((_ = cV.jsxs(U, {
      flexDirection: "column",
      children: [h, y, b],
    })),
      (t[28] = b),
      (t[29] = h),
      (t[30] = _));
  else _ = t[30];
  let S;
  if (t[31] !== n.requestSource || t[32] !== _ || t[33] !== g)
    ((S = cV.jsxs(Lf, {
      title: "Fetch",
      requestSource: n.requestSource,
      children: [g, _],
    })),
      (t[31] = n.requestSource),
      (t[32] = _),
      (t[33] = g),
      (t[34] = S));
  else S = t[34];
  return S;
}
var jHc, cV;
