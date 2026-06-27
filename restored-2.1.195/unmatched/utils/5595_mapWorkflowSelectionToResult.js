// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KHc
// matched 2.1.88 source: src/components/permissions/BashPermissionRequest/BashPermissionRequest.tsx
// class=new  jaccard=0.0513  score=0.1723  fileCov=0.0681
// note: nearest: src/components/permissions/BashPermissionRequest/BashPermissionRequest.tsx (0.0513); dir inferred from dep-graph -> utils; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var KHc = E(() => {
  es();
});
var ZHc = {};
_t(ZHc, {
  mapWorkflowSelectionToResult: () => mapWorkflowSelectionToResult,
  WorkflowPermissionDialog: () => WorkflowPermissionDialog,
  WORKFLOW_USAGE_WARNING: () => WORKFLOW_USAGE_WARNING
});
function mapWorkflowSelectionToResult(e, t, n, r) {
  switch (e) {
    case "yes":
      return {
        behavior: "allow",
        updatedInput: {
          ...t.input,
          script: n
        },
        ...(r && {
          feedback: r
        })
      };
    case "yes-always":
      return {
        behavior: "allow",
        updatedInput: {
          ...t.input,
          script: n
        },
        ...(t.workflowName && {
          permissionUpdates: [{
            type: "addRules",
            rules: [{
              toolName: uC,
              ruleContent: t.workflowName
            }],
            behavior: "allow",
            destination: "localSettings"
          }]
        })
      };
    case "no":
      return {
        behavior: "deny",
        ...(r && {
          feedback: r
        })
      };
  }
}
function WorkflowPermissionDialog(e) {
  let t = YHc.c(75),
    {
      payload: n,
      answer: r
    } = e,
    [o, s] = rKo.useState(n.script),
    i;
  if (t[0] !== o) i = Yv(o), t[0] = o, t[1] = i;else i = t[1];
  let a = i,
    l;
  if (t[2] !== o) l = ZI(o), t[2] = o, t[3] = l;else l = t[3];
  let c = l,
    u = "error" in c ? null : c,
    d = u?.scriptBody ?? o,
    p;
  if (t[4] !== d) p = zHc(d), t[4] = d, t[5] = p;else p = t[5];
  let f = p,
    m;
  e: {
    let ee = X_m,
      ce;
    if (t[6] === Symbol.for("react.memo_cache_sentinel")) ce = Ee => ({
      title: Yv(q_m[Ee.kind] + (Ee.annotation ? ` ${Ee.annotation}` : "")),
      prompts: ee(Ee)
    }), t[6] = ce;else ce = t[6];
    let ae = ce,
      de = u?.meta.phases;
    if (de && de.length > 0) {
      let Ee;
      if (t[7] !== de || t[8] !== f?.phases) {
        let me;
        if (t[10] !== f?.phases) me = (he, ie) => ({
          title: Yv(he.title),
          detail: he.detail !== void 0 ? Yv(he.detail) : void 0,
          prompts: ee(f?.phases[ie])
        }), t[10] = f?.phases, t[11] = me;else me = t[11];
        let pe = de.map(me),
          ge = (f?.phases ?? []).slice(de.length).map(ae);
        Ee = [...pe, ...ge], t[7] = de, t[8] = f?.phases, t[9] = Ee;
      } else Ee = t[9];
      m = Ee;
      break e;
    }
    if (f && f.phases.length > 0) {
      let Ee;
      if (t[12] !== f.phases) Ee = f.phases.map(ae), t[12] = f.phases, t[13] = Ee;else Ee = t[13];
      m = Ee;
      break e;
    }
    m = null;
  }
  let g = m,
    [h, y] = rKo.useState(g === null),
    b;
  if (t[14] !== o) b = function (ce) {
    if (ce.ctrl && ce.key === "g") {
      ce.preventDefault();
      let ae = K$(o);
      if (ae.content !== null && ae.content !== o) s(ae.content), y(!1);
    }
  }, t[14] = o, t[15] = b;else b = t[15];
  let _ = b,
    S;
  if (t[16] !== r || t[17] !== n || t[18] !== o) S = (ee, ce) => {
    if (ee === "toggle") {
      y(Y_m);
      return;
    }
    r(mapWorkflowSelectionToResult(ee, n, o, ce));
  }, t[16] = r, t[17] = n, t[18] = o, t[19] = S;else S = t[19];
  let A = S,
    v;
  if (t[20] !== r) v = () => {
    r({
      behavior: "deny"
    });
  }, t[20] = r, t[21] = v;else v = t[21];
  let C = v,
    x;
  if (t[22] !== u) x = u?.meta.description !== void 0 ? Yv(u.meta.description) : void 0, t[22] = u, t[23] = x;else x = t[23];
  let I = x,
    k;
  e: {
    if (n.args === void 0) {
      k = void 0;
      break e;
    }
    let ee;
    if (t[24] !== n.args) {
      let ce;
      try {
        ce = De(n.args);
      } catch {
        ce = String(n.args);
      }
      ce = Yv(ce), ee = ce.length > 120 ? ce.slice(0, 119) + "\u2026" : ce, t[24] = n.args, t[25] = ee;
    } else ee = t[25];
    k = ee;
  }
  let D = k,
    P;
  if (t[26] !== n) P = Boolean(n.workflowName) && tKo(n), t[26] = n, t[27] = P;else P = t[27];
  let O = P,
    L;
  if (t[28] === Symbol.for("react.memo_cache_sentinel")) L = {
    label: "Yes, run it",
    value: "yes",
    feedbackConfig: {
      type: "accept"
    }
  }, t[28] = L;else L = t[28];
  let M;
  if (t[29] !== g || t[30] !== n.workflowName || t[31] !== O || t[32] !== h) {
    if (M = [L], O) {
      let ce;
      if (t[34] !== n.workflowName) ce = xA.jsx(w, {
        bold: !0,
        children: n.workflowName
      }), t[34] = n.workflowName, t[35] = ce;else ce = t[35];
      let ae;
      if (t[36] === Symbol.for("react.memo_cache_sentinel")) ae = xA.jsx(w, {
        bold: !0,
        children: yr()
      }), t[36] = ae;else ae = t[36];
      let de;
      if (t[37] !== ce) de = {
        label: xA.jsxs(w, {
          children: ["Yes, and don't ask again for", " ", ce, " in", " ", ae]
        }),
        value: "yes-always"
      }, t[37] = ce, t[38] = de;else de = t[38];
      M.push(de);
    }
    if (g) {
      let ce = h ? "View workflow summary" : "View raw script",
        ae;
      if (t[39] !== ce) ae = {
        label: ce,
        value: "toggle"
      }, t[39] = ce, t[40] = ae;else ae = t[40];
      M.push(ae);
    }
    let ee;
    if (t[41] === Symbol.for("react.memo_cache_sentinel")) ee = {
      label: "No",
      value: "no",
      feedbackConfig: {
        type: "reject"
      }
    }, t[41] = ee;else ee = t[41];
    M.push(ee), t[29] = g, t[30] = n.workflowName, t[31] = O, t[32] = h, t[33] = M;
  } else M = t[33];
  let N = M,
    B;
  if (t[42] !== n.toolName) B = Ui(n.toolName), t[42] = n.toolName, t[43] = B;else B = t[43];
  let $;
  if (t[44] !== n.isMcp || t[45] !== B) $ = {
    toolName: B,
    isMcp: n.isMcp
  }, t[44] = n.isMcp, t[45] = B, t[46] = $;else $ = t[46];
  let q = $,
    W;
  if (t[47] !== I) W = I && xA.jsx(U, {
    marginBottom: 1,
    children: xA.jsx(w, {
      bold: !0,
      children: I
    })
  }), t[47] = I, t[48] = W;else W = t[48];
  let V;
  if (t[49] !== g || t[50] !== a || t[51] !== h) V = h || !g ? xA.jsx(U, {
    borderStyle: "dashed",
    borderColor: "subtle",
    paddingX: 1,
    children: xA.jsx(LF, {
      code: a,
      filePath: "workflow.js"
    })
  }) : xA.jsxs(U, {
    flexDirection: "column",
    children: [xA.jsx(w, {
      children: "This dynamic workflow will spin up multiple subagents across the following phases:"
    }), g.map(z_m)]
  }), t[49] = g, t[50] = a, t[51] = h, t[52] = V;else V = t[52];
  let Y;
  if (t[53] !== D) Y = D && xA.jsx(U, {
    marginTop: 1,
    children: xA.jsxs(w, {
      children: [xA.jsxs(w, {
        bold: !0,
        dimColor: !0,
        children: ["args:", " "]
      }), xA.jsx(w, {
        dimColor: !0,
        children: D
      })]
    })
  }), t[53] = D, t[54] = Y;else Y = t[54];
  let z;
  if (t[55] !== W || t[56] !== V || t[57] !== Y) z = xA.jsxs(U, {
    flexDirection: "column",
    paddingX: 1,
    marginBottom: 1,
    overflow: "hidden",
    children: [W, V, Y]
  }), t[55] = W, t[56] = V, t[57] = Y, t[58] = z;else z = t[58];
  let K;
  if (t[59] === Symbol.for("react.memo_cache_sentinel")) K = xA.jsx(U, {
    marginBottom: 1,
    children: xA.jsx(w, {
      color: "warning",
      children: WORKFLOW_USAGE_WARNING
    })
  }), t[59] = K;else K = t[59];
  let Z;
  if (t[60] !== C || t[61] !== A || t[62] !== N || t[63] !== q) Z = xA.jsx(DNe, {
    options: N,
    onSelect: A,
    onCancel: C,
    question: K,
    toolAnalyticsContext: q
  }), t[60] = C, t[61] = A, t[62] = N, t[63] = q, t[64] = Z;else Z = t[64];
  let J;
  if (t[65] === Symbol.for("react.memo_cache_sentinel")) J = xA.jsx(w, {
    dimColor: !0,
    children: xA.jsx(ht, {
      chord: "ctrl+g",
      action: "edit script in $EDITOR"
    })
  }), t[65] = J;else J = t[65];
  let ne;
  if (t[66] !== Z) ne = xA.jsxs(U, {
    flexDirection: "column",
    paddingX: 1,
    children: [Z, J]
  }), t[66] = Z, t[67] = ne;else ne = t[67];
  let oe;
  if (t[68] !== _ || t[69] !== z || t[70] !== ne) oe = xA.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: _,
    children: [z, ne]
  }), t[68] = _, t[69] = z, t[70] = ne, t[71] = oe;else oe = t[71];
  let re;
  if (t[72] !== n.requestSource || t[73] !== oe) re = xA.jsx(Lf, {
    color: "permission",
    title: "Run a dynamic workflow?",
    requestSource: n.requestSource,
    children: oe
  }), t[72] = n.requestSource, t[73] = oe, t[74] = re;else re = t[74];
  return re;
}
function z_m(e, t) {
  return xA.jsxs(XHc.Fragment, {
    children: [xA.jsxs(w, {
      children: ["  ", t + 1, ". ", e.title, e.detail ? xA.jsxs(w, {
        dimColor: !0,
        children: [" \u2014 ", e.detail]
      }) : ""]
    }), e.prompts.length > 0 && xA.jsxs(w, {
      dimColor: !0,
      children: ["     ", e.prompts.slice(0, 2).map(K_m).join("  "), e.prompts.length > 2 ? `  +${e.prompts.length - 2} more` : ""]
    })]
  }, t);
}
function K_m(e) {
  return `\xB7 "${e.length > 60 ? e.slice(0, 59) + "\u2026" : e}"`;
}
function Y_m(e) {
  return !e;
}
function X_m(e) {
  let t = new Set(),
    n = [];
  for (let r of e?.agents ?? []) if (r.prompt && !t.has(r.prompt)) t.add(r.prompt), n.push(Yv(r.prompt));
  return n;
}
var YHc, XHc, rKo, xA, WORKFLOW_USAGE_WARNING, q_m;