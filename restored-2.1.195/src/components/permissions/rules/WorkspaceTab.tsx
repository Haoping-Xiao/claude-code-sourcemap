// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Csr
// matched 2.1.88 source: src/components/permissions/rules/WorkspaceTab.tsx
// class=modified  jaccard=0.3569  score=0.4735  fileCov=0.5918
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Csr] deps: tools/ReadMcpResourceTool/prompt.ts
Cqf = /[\x00-\x1f\x7f-\x9f\u061c\u2028\u2029\u202a-\u202e\u2066-\u2069\p{Co}\p{Cn}]/gu;
function WorkspaceTab(t0) {
  let t = Azl.c(23),
    {
      onExit: n,
      toolPermissionContext: r,
      onRequestAddDirectory: o,
      onRequestRemoveDirectory: s,
      onHeaderFocusChange: i,
    } = t0,
    { headerFocused: a, focusHeader: l } = tx(),
    c,
    u;
  if (t[0] !== a || t[1] !== i)
    ((c = () => {
      i(a);
    }),
      (u = [a, i]),
      (t[0] = a),
      (t[1] = i),
      (t[2] = c),
      (t[3] = u));
  else ((c = t[2]), (u = t[3]));
  Hzl.useEffect(c, u);
  let d;
  if (t[4] !== r.additionalWorkingDirectories)
    ((d = Array.from(r.additionalWorkingDirectories.keys()).map(xqf)),
      (t[4] = r.additionalWorkingDirectories),
      (t[5] = d));
  else d = t[5];
  let additionalDirectories = d,
    f;
  if (t[6] !== additionalDirectories || t[7] !== o || t[8] !== s)
    ((f = (v) => {
      if (v === "add-directory") {
        o();
        return;
      }
      let C = additionalDirectories.find((x) => x.path === v);
      if (C && C.isDeletable) s(C.path);
    }),
      (t[6] = additionalDirectories),
      (t[7] = o),
      (t[8] = s),
      (t[9] = f));
  else f = t[9];
  let m = f,
    g;
  if (t[10] !== n)
    ((g = () =>
      n("Workspace dialog dismissed", {
        display: "system",
      })),
      (t[10] = n),
      (t[11] = g));
  else g = t[11];
  let h = g,
    y;
  if (t[12] !== additionalDirectories) {
    y = additionalDirectories.map(Iqf);
    let v;
    if (t[14] === Symbol.for("react.memo_cache_sentinel"))
      ((v = {
        label: `Add directory${nt.ellipsis}`,
        value: "add-directory",
      }),
        (t[14] = v));
    else v = t[14];
    (y.push(v), (t[12] = additionalDirectories), (t[13] = y));
  } else y = t[13];
  let b = y,
    _;
  if (t[15] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = pYe.jsxs(U, {
      flexDirection: "row",
      marginTop: 1,
      marginLeft: 2,
      gap: 1,
      children: [
        pYe.jsx(w, {
          children: `-  ${UAt(yr())}`,
        }),
        pYe.jsx(w, {
          dimColor: true,
          children: "(Original working directory)",
        }),
      ],
    })),
      (t[15] = _));
  else _ = t[15];
  let S = Math.min(10, b.length),
    A;
  if (t[16] !== l || t[17] !== h || t[18] !== m || t[19] !== a || t[20] !== b || t[21] !== S)
    ((A = pYe.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        _,
        pYe.jsx(Sr, {
          options: b,
          onChange: m,
          onCancel: h,
          visibleOptionCount: S,
          onUpFromFirstItem: l,
          isDisabled: a,
        }),
      ],
    })),
      (t[16] = l),
      (t[17] = h),
      (t[18] = m),
      (t[19] = a),
      (t[20] = b),
      (t[21] = S),
      (t[22] = A));
  else A = t[22];
  return A;
}
function Iqf(e) {
  return {
    label: e.path,
    value: e.path,
  };
}
function xqf(e) {
  return {
    path: e,
    isCurrent: false,
    isDeletable: true,
  };
}
var Azl, Hzl, pYe;
