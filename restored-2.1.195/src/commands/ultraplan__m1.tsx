// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sYe
// matched 2.1.88 source: src/commands/ultraplan.tsx
// class=modified (alt of src/commands/ultraplan.tsx)  jaccard=0.0351  score=0.1049  fileCov=0.0502
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var sYe = E(() => {
  ft();
  Xa();
  Un();
  kt();
  jc();
  JJ();
  Zor();
  fd();
  er();
  je();
  At();
  vn();
  bm();
  _a();
  xF();
  gP();
  d9l();
  uJt();
  yYt();
  ((W2o = {
    simple_plan: p9l(),
    visual_plan: f9l(),
    three_subagents_with_critique: m9l(),
  }),
    (FoE = Object.keys(W2o)));
  ((h9l = {
    timeEstimate: "a few minutes",
    dialogBody:
      "Interactive planning on the web where you can edit and leave targeted comments on Claude's plan.",
    dialogPipeline: "Plan \u2192 Edit \u2192 Execute",
    usageBlurb: [
      "Remote plan mode with rich web editing experience.",
      "Runs in Claude Code on the web. When the plan is ready,",
      "you can execute it in the web session or send it back here.",
      "You can continue to work while the plan is generated remotely.",
    ],
  }),
    (lWf = {
      simple_plan: h9l,
      visual_plan: h9l,
      three_subagents_with_critique: {
        timeEstimate: "~10\u201330 min",
        dialogBody:
          "Interactive planning on the web where you can edit and leave targeted comments on Claude's plan.",
        dialogPipeline: "Scope \u2192 Critique \u2192 Edit \u2192 Execute",
        usageBlurb: [
          "Advanced multi-agent plan mode.",
          "Runs in Claude Code on the web. When the plan is ready,",
          "you can execute it in the web session or send it back here.",
          "You can continue to work while the plan is generated remotely.",
        ],
      },
    }));
  _9l = {
    type: "local-jsx",
    name: "ultraplan",
    get description() {
      return `Draft an editable plan in Claude Code on the web (${tsr().timeEstimate}) \xB7 See ${E1e}`;
    },
    argumentHint: "<prompt>",
    isEnabled: () => tme(),
    load: () =>
      Promise.resolve({
        call: hWf,
      }),
  };
});
function K2o(e) {
  if (!e.bundleSeedEnabled) return null;
  return e.cloneViable
    ? "This will try to clone your git remote and fall back to uploading this repository."
    : "This will upload your repository to Claude Code on the web.";
}
function b9l(e) {
  let t = z2o.c(24),
    { sourcePromise: n, onChoice: r } = e;
  Wh("ultraplan-launch");
  let [o] = A1e.useState(AWf),
    [s] = A1e.useState(EWf),
    i;
  if (t[0] !== s) ((i = tsr(s)), (t[0] = s), (t[1] = i));
  else i = t[1];
  let a = i,
    l = Ht(SWf),
    c = Ho(),
    u;
  if (t[2] !== n || t[3] !== o)
    ((u = () => (o ? (n ?? RAt().catch(bWf)) : null)), (t[2] = n), (t[3] = o), (t[4] = u));
  else u = t[4];
  let [d] = A1e.useState(u),
    p;
  if (t[5] !== r || t[6] !== s || t[7] !== l || t[8] !== c || t[9] !== o)
    ((p = function (_) {
      let S = _ === "run" && l;
      if (
        (G("tengu_ultraplan_dialog_choice", {
          choice: $e(_),
          first_run: o,
          bridge_disconnected: S,
          prompt_identifier: $e(s),
        }),
        S)
      )
        c(_Wf);
      if (_ !== "cancel" && o)
        (G("tengu_ultraplan_first_launch", {
          prompt_identifier: $e(s),
        }),
          gn(yWf));
      r(_, {
        disconnectedBridge: S,
        promptIdentifier: s,
      });
    }),
      (t[5] = r),
      (t[6] = s),
      (t[7] = l),
      (t[8] = c),
      (t[9] = o),
      (t[10] = p));
  else p = t[10];
  let f = p,
    m;
  if (t[11] !== f) ((m = () => f("cancel")), (t[11] = f), (t[12] = m));
  else m = t[12];
  let g;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((g = sx.jsx(w, {
      dimColor: true,
      children: "Loading\u2026",
    })),
      (t[13] = g));
  else g = t[13];
  let h;
  if (t[14] !== a || t[15] !== f || t[16] !== l || t[17] !== o || t[18] !== d)
    ((h = sx.jsx(A1e.Suspense, {
      fallback: g,
      children: sx.jsx(HWf, {
        showTerms: o,
        sourcePromise: d,
        copy: a,
        replBridgeEnabled: l,
        onChoice: f,
      }),
    })),
      (t[14] = a),
      (t[15] = f),
      (t[16] = l),
      (t[17] = o),
      (t[18] = d),
      (t[19] = h));
  else h = t[19];
  let y;
  if (t[20] !== a.timeEstimate || t[21] !== m || t[22] !== h)
    ((y = sx.jsx(zn, {
      title: "Run ultraplan in the cloud?",
      subtitle: a.timeEstimate,
      onCancel: m,
      children: h,
    })),
      (t[20] = a.timeEstimate),
      (t[21] = m),
      (t[22] = h),
      (t[23] = y));
  else y = t[23];
  return y;
}
function yWf(e) {
  return e.hasSeenUltraplanTerms
    ? e
    : {
        ...e,
        hasSeenUltraplanTerms: true,
      };
}
function _Wf(e) {
  if (!e.replBridgeEnabled) return e;
  return {
    ...e,
    replBridgeEnabled: false,
    replBridgeExplicit: false,
    replBridgeOutboundOnly: false,
  };
}
function bWf() {
  return null;
}
function SWf(e) {
  return e.replBridgeEnabled;
}
function EWf() {
  return esr();
}
function AWf() {
  return !Dt().hasSeenUltraplanTerms;
}
function HWf(e) {
  let t = z2o.c(22),
    { showTerms: n, sourcePromise: r, copy: o, replBridgeEnabled: s, onChoice: i } = e,
    a = r ? A1e.use(r) : null,
    l;
  if (t[0] !== a) ((l = a && K2o(a)), (t[0] = a), (t[1] = l));
  else l = t[1];
  let c = l,
    u;
  if (t[2] !== o.dialogBody || t[3] !== o.dialogPipeline || t[4] !== s || t[5] !== n || t[6] !== c)
    ((u = n
      ? sx.jsxs(sx.Fragment, {
          children: [
            sx.jsx(w, {
              dimColor: true,
              children: o.dialogBody,
            }),
            sx.jsxs(U, {
              flexDirection: "column",
              children: [
                c &&
                  sx.jsx(w, {
                    dimColor: true,
                    children: c,
                  }),
                sx.jsxs(w, {
                  dimColor: true,
                  children: [
                    "More information: ",
                    sx.jsx(xs, {
                      url: E1e,
                      children: E1e,
                    }),
                  ],
                }),
              ],
            }),
            sx.jsx(w, {
              children: "Proceed?",
            }),
          ],
        })
      : sx.jsxs(sx.Fragment, {
          children: [
            sx.jsxs(U, {
              flexDirection: "column",
              children: [
                sx.jsx(w, {
                  dimColor: true,
                  children: o.dialogBody,
                }),
                s &&
                  sx.jsx(w, {
                    dimColor: true,
                    children: "This will disable Remote Control for this session.",
                  }),
              ],
            }),
            !s &&
              sx.jsx(w, {
                dimColor: true,
                children: o.dialogPipeline,
              }),
          ],
        })),
      (t[2] = o.dialogBody),
      (t[3] = o.dialogPipeline),
      (t[4] = s),
      (t[5] = n),
      (t[6] = c),
      (t[7] = u));
  else u = t[7];
  let d = n ? "Yes" : "Run ultraplan",
    p = s
      ? "Disable remote control and launch in Claude Code on the web"
      : "launch in Claude Code on the web",
    f;
  if (t[8] !== d || t[9] !== p)
    ((f = {
      label: d,
      value: "run",
      description: p,
    }),
      (t[8] = d),
      (t[9] = p),
      (t[10] = f));
  else f = t[10];
  let m = n ? "No" : "Not now",
    g;
  if (t[11] !== m)
    ((g = {
      label: m,
      value: "cancel",
    }),
      (t[11] = m),
      (t[12] = g));
  else g = t[12];
  let h;
  if (t[13] !== f || t[14] !== g) ((h = [f, g]), (t[13] = f), (t[14] = g), (t[15] = h));
  else h = t[15];
  let y;
  if (t[16] !== i || t[17] !== h)
    ((y = sx.jsx(Sr, {
      options: h,
      onChange: i,
    })),
      (t[16] = i),
      (t[17] = h),
      (t[18] = y));
  else y = t[18];
  let b;
  if (t[19] !== u || t[20] !== y)
    ((b = sx.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [u, y],
    })),
      (t[19] = u),
      (t[20] = y),
      (t[21] = b));
  else b = t[21];
  return b;
}
var z2o, A1e, sx;
