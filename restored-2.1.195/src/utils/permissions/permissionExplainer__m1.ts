// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rHc
// matched 2.1.88 source: src/utils/permissions/permissionExplainer.ts
// class=modified (alt of src/utils/permissions/permissionExplainer.ts)  jaccard=0.2136  score=0.3374  fileCov=0.368
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rHc] deps: @modelcontextprotocol/sdk/dist/esm/types.js, dn, utils/debug.ts, services/analytics/firstPartyEventLoggingExporter.ts, utils/config.ts, utils/debug.ts, utils/errors.ts, utils/agentContext.ts, utils/permissions/yoloClassifier.ts, utils/fsOperations.ts, services/teamMemorySync/secretScanner.ts
((s_m = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
}),
  (u_m = {
    name: "explain_command",
    description: "Provide an explanation of a shell command",
    input_schema: {
      type: "object",
      properties: {
        explanation: {
          type: "string",
          description: "What this command does (1-2 sentences)",
        },
        reasoning: {
          type: "string",
          description:
            'Why YOU are running this command. Start with "I" - e.g. "I need to check the file contents"',
        },
        risk: {
          type: "string",
          description: "What could go wrong, under 15 words",
        },
        riskLevel: {
          type: "string",
          enum: ["LOW", "MEDIUM", "HIGH"],
          description:
            "LOW (safe dev workflows), MEDIUM (recoverable changes), HIGH (dangerous/irreversible)",
        },
      },
      required: ["explanation", "reasoning", "risk", "riskLevel"],
    },
  }),
  (d_m = ve(() =>
    H.object({
      riskLevel: H.enum(["LOW", "MEDIUM", "HIGH"]),
      explanation: H.string(),
      reasoning: H.string(),
      risk: H.string(),
    }),
  )));
function m_m() {
  let e = ctn.c(7),
    [t, n] = BVt("responding", oHc, false),
    r;
  if (e[0] !== n)
    ((r = oHc.split("").map((i, a) =>
      WP.jsx(
        OGe,
        {
          char: i,
          index: a,
          glimmerIndex: n,
          messageColor: "inactive",
          shimmerColor: "text",
        },
        a,
      ),
    )),
      (e[0] = n),
      (e[1] = r));
  else r = e[1];
  let o;
  if (e[2] !== r)
    ((o = WP.jsx(w, {
      children: r,
    })),
      (e[2] = r),
      (e[3] = o));
  else o = e[3];
  let s;
  if (e[4] !== t || e[5] !== o)
    ((s = WP.jsx(U, {
      ref: t,
      children: o,
    })),
      (e[4] = t),
      (e[5] = o),
      (e[6] = s));
  else s = e[6];
  return s;
}
function g_m(e) {
  switch (e) {
    case "LOW":
      return "success";
    case "MEDIUM":
      return "warning";
    case "HIGH":
      return "error";
  }
}
function h_m(e) {
  switch (e) {
    case "LOW":
      return "Low risk";
    case "MEDIUM":
      return "Med risk";
    case "HIGH":
      return "High risk";
  }
}
function y_m(e, t) {
  return nHc({
    toolName: e.toolName,
    toolInput: e.toolInput,
    toolDescription: e.toolDescription,
    messages: e.messages ?? [],
    signal: t,
  }).catch(() => null);
}
function vpr(e) {
  let t = ctn.c(12),
    n;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((n = Zzo()), (t[0] = n));
  else n = t[0];
  let r = n,
    o = $0("confirm:toggleExplanation", "Confirmation", "ctrl+e"),
    [s, i] = tie.useState(false),
    [a, l] = tie.useState(null),
    c = tie.useRef(null),
    u;
  if (t[1] !== a || t[2] !== e || t[3] !== s)
    ((u = () => {
      if (!s) {
        if ((G("tengu_permission_explainer_shortcut_used", {}), !a)) {
          let g = new AbortController();
          ((c.current = g), l(y_m(e, g.signal)));
        }
      }
      i(__m);
    }),
      (t[1] = a),
      (t[2] = e),
      (t[3] = s),
      (t[4] = u));
  else u = t[4];
  let d;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((d = {
      context: "Confirmation",
      isActive: r,
    }),
      (t[5] = d));
  else d = t[5];
  $r("confirm:toggleExplanation", u, d);
  let p, f;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((p = () => () => c.current?.abort()), (f = []), (t[6] = p), (t[7] = f));
  else ((p = t[6]), (f = t[7]));
  tie.useEffect(p, f);
  let m;
  if (t[8] !== o || t[9] !== a || t[10] !== s)
    ((m = {
      visible: s,
      enabled: r,
      chord: o,
      promise: a,
    }),
      (t[8] = o),
      (t[9] = a),
      (t[10] = s),
      (t[11] = m));
  else m = t[11];
  return m;
}
function __m(e) {
  return !e;
}
function b_m(e) {
  let t = ctn.c(21),
    { promise: n } = e,
    r = tie.use(n);
  if (!r) {
    let p;
    if (t[0] === Symbol.for("react.memo_cache_sentinel"))
      ((p = WP.jsx(U, {
        marginTop: 1,
        children: WP.jsx(w, {
          dimColor: true,
          children: "Explanation unavailable",
        }),
      })),
        (t[0] = p));
    else p = t[0];
    return p;
  }
  let o;
  if (t[1] !== r.explanation)
    ((o = WP.jsx(w, {
      children: r.explanation,
    })),
      (t[1] = r.explanation),
      (t[2] = o));
  else o = t[2];
  let s;
  if (t[3] !== r.reasoning)
    ((s = WP.jsx(U, {
      marginTop: 1,
      children: WP.jsx(w, {
        children: r.reasoning,
      }),
    })),
      (t[3] = r.reasoning),
      (t[4] = s));
  else s = t[4];
  let i;
  if (t[5] !== r.riskLevel) ((i = g_m(r.riskLevel)), (t[5] = r.riskLevel), (t[6] = i));
  else i = t[6];
  let a;
  if (t[7] !== r.riskLevel) ((a = h_m(r.riskLevel)), (t[7] = r.riskLevel), (t[8] = a));
  else a = t[8];
  let l;
  if (t[9] !== i || t[10] !== a)
    ((l = WP.jsxs(w, {
      color: i,
      children: [a, ":"],
    })),
      (t[9] = i),
      (t[10] = a),
      (t[11] = l));
  else l = t[11];
  let c;
  if (t[12] !== r.risk)
    ((c = WP.jsxs(w, {
      children: [" ", r.risk],
    })),
      (t[12] = r.risk),
      (t[13] = c));
  else c = t[13];
  let u;
  if (t[14] !== l || t[15] !== c)
    ((u = WP.jsx(U, {
      marginTop: 1,
      children: WP.jsxs(w, {
        children: [l, c],
      }),
    })),
      (t[14] = l),
      (t[15] = c),
      (t[16] = u));
  else u = t[16];
  let d;
  if (t[17] !== o || t[18] !== s || t[19] !== u)
    ((d = WP.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [o, s, u],
    })),
      (t[17] = o),
      (t[18] = s),
      (t[19] = u),
      (t[20] = d));
  else d = t[20];
  return d;
}
function wpr(e) {
  let t = ctn.c(3),
    { visible: n, promise: r } = e;
  if (!n || !r) return null;
  let o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = WP.jsx(U, {
      marginTop: 1,
      children: WP.jsx(m_m, {}),
    })),
      (t[0] = o));
  else o = t[0];
  let s;
  if (t[1] !== r)
    ((s = WP.jsx(tie.Suspense, {
      fallback: o,
      children: WP.jsx(b_m, {
        promise: r,
      }),
    })),
      (t[1] = r),
      (t[2] = s));
  else s = t[2];
  return s;
}
var ctn,
  tie,
  WP,
  oHc = "Loading explanation\u2026";
