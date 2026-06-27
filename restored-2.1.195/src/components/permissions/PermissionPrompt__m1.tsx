// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dtn
// matched 2.1.88 source: src/components/permissions/PermissionPrompt.tsx
// class=modified (alt of src/components/permissions/PermissionPrompt.tsx)  jaccard=0.1662  score=0.3557  fileCov=0.2378
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var dtn = E(() => {
  Ye();
  ps();
  kt();
  uo();
  Vl();
  Bs();
  Ko();
  ((HHc = R(lt(), 1)),
    (LNe = R(rt(), 1)),
    (Fme = R(se(), 1)),
    (k_m = {
      accept: "tell Claude what to do next",
      reject: "tell Claude what to do differently",
    }));
});
function L_m(e, t, n) {
  switch (e) {
    case "yes":
      return {
        behavior: "allow",
        updatedInput: t.input,
        ...(n && {
          feedback: n,
        }),
      };
    case "yes-apply-suggestions": {
      let r = "suggestions" in t.permissionResult ? (t.permissionResult.suggestions ?? []) : [];
      return {
        behavior: "allow",
        updatedInput: t.input,
        permissionUpdates: r,
      };
    }
    case "no":
      return {
        behavior: "deny",
        ...(n && {
          feedback: n,
        }),
      };
  }
}
function D_m(e) {
  let t = "suggestions" in e.permissionResult ? (e.permissionResult.suggestions ?? []) : [];
  return e.showAlwaysAllow && t.length > 0;
}
function P_m(e) {
  let t = e.filter((n) => n.type === "addRules").flatMap((n) => n.rules ?? []);
  if (t.length === 1 && t[0].ruleContent) {
    let n = t[0];
    return k3.jsxs(w, {
      children: [
        "Yes, and don't ask again for",
        " ",
        k3.jsxs(w, {
          bold: !0,
          children: [n.toolName, "(", n.ruleContent, ")"],
        }),
      ],
    });
  }
  return `Yes, and add ${t.length} suggested permission rules`;
}
function vHc(e) {
  let t = THc.c(42),
    { payload: n, answer: r } = e,
    o;
  if (t[0] !== n) ((o = D_m(n)), (t[0] = n), (t[1] = o));
  else o = t[1];
  let s = o,
    i;
  if (t[2] !== n.permissionResult)
    ((i = "suggestions" in n.permissionResult ? (n.permissionResult.suggestions ?? []) : []),
      (t[2] = n.permissionResult),
      (t[3] = i));
  else i = t[3];
  let a = i,
    l;
  if (t[4] !== r || t[5] !== n)
    ((l = (C, x) => {
      r(L_m(C, n, x));
    }),
      (t[4] = r),
      (t[5] = n),
      (t[6] = l));
  else l = t[6];
  let c = l,
    u;
  if (t[7] !== r)
    ((u = () => {
      r({
        behavior: "deny",
      });
    }),
      (t[7] = r),
      (t[8] = u));
  else u = t[8];
  let d = u,
    p;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((p = {
      label: "Yes",
      value: "yes",
      feedbackConfig: {
        type: "accept",
      },
    }),
      (t[9] = p));
  else p = t[9];
  let f;
  if (t[10] !== s || t[11] !== a) {
    if (((f = [p]), s)) {
      let x;
      if (t[13] !== a) ((x = P_m(a)), (t[13] = a), (t[14] = x));
      else x = t[14];
      let I;
      if (t[15] !== x)
        ((I = {
          label: x,
          value: "yes-apply-suggestions",
        }),
          (t[15] = x),
          (t[16] = I));
      else I = t[16];
      f.push(I);
    }
    let C;
    if (t[17] === Symbol.for("react.memo_cache_sentinel"))
      ((C = {
        label: "No",
        value: "no",
        feedbackConfig: {
          type: "reject",
        },
      }),
        (t[17] = C));
    else C = t[17];
    (f.push(C), (t[10] = s), (t[11] = a), (t[12] = f));
  } else f = t[12];
  let m = f,
    g;
  if (t[18] !== n.command || t[19] !== n.intervalMs || t[20] !== n.mcp || t[21] !== n.ws)
    ((g = n.mcp
      ? k3.jsxs(w, {
          children: [
            "Poll",
            " ",
            k3.jsxs(w, {
              bold: !0,
              children: [n.mcp.server, "/", n.mcp.tool],
            }),
            " ",
            "every ",
            n.intervalMs / 1000,
            "s",
          ],
        })
      : n.ws
        ? k3.jsxs(w, {
            children: [
              "Open WebSocket ",
              k3.jsx(w, {
                bold: !0,
                children: n.ws.url,
              }),
            ],
          })
        : k3.jsx(w, {
            children: n.command,
          })),
      (t[18] = n.command),
      (t[19] = n.intervalMs),
      (t[20] = n.mcp),
      (t[21] = n.ws),
      (t[22] = g));
  else g = t[22];
  let h;
  if (t[23] !== n.monitorDescription)
    ((h = k3.jsx(w, {
      dimColor: !0,
      children: n.monitorDescription,
    })),
      (t[23] = n.monitorDescription),
      (t[24] = h));
  else h = t[24];
  let y;
  if (t[25] !== g || t[26] !== h)
    ((y = k3.jsxs(U, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: [g, h],
    })),
      (t[25] = g),
      (t[26] = h),
      (t[27] = y));
  else y = t[27];
  let b = n.mcp || n.ws ? "tool" : "command",
    _;
  if (t[28] !== n.permissionResult || t[29] !== b)
    ((_ = k3.jsx(_2, {
      permissionResult: n.permissionResult,
      toolType: b,
    })),
      (t[28] = n.permissionResult),
      (t[29] = b),
      (t[30] = _));
  else _ = t[30];
  let S;
  if (t[31] !== d || t[32] !== c || t[33] !== m)
    ((S = k3.jsx(DNe, {
      options: m,
      onSelect: c,
      onCancel: d,
    })),
      (t[31] = d),
      (t[32] = c),
      (t[33] = m),
      (t[34] = S));
  else S = t[34];
  let A;
  if (t[35] !== _ || t[36] !== S)
    ((A = k3.jsxs(U, {
      flexDirection: "column",
      children: [_, S],
    })),
      (t[35] = _),
      (t[36] = S),
      (t[37] = A));
  else A = t[37];
  let v;
  if (t[38] !== n.requestSource || t[39] !== A || t[40] !== y)
    ((v = k3.jsxs(Lf, {
      title: yT,
      requestSource: n.requestSource,
      children: [y, A],
    })),
      (t[38] = n.requestSource),
      (t[39] = A),
      (t[40] = y),
      (t[41] = v));
  else v = t[41];
  return v;
}
var THc, k3;
