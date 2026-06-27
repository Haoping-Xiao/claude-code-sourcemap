// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lRo
// matched 2.1.88 source: src/components/messages/AttachmentMessage.tsx
// class=new  jaccard=0.0208  score=0.1833  fileCov=0.023
// note: nearest: src/components/messages/AttachmentMessage.tsx (0.0208); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lRo] deps: je, WAe, jv, Y0o, sRo
l_l = R(require("vm"));
u_l = class u_l extends Error {
  constructor(e, t) {
    super(`REPL replay: ${e} invoked but only ${t} calls were cached. ` + "The replayed code is making more tool calls than the original \u2014 " + "likely nondeterminism (Date.now, Math.random) took a different branch.");
    this.name = "ReplayCacheExhausted";
  }
};
function m_l(e, t) {
  return "";
}
function g_l(e, t) {
  let n = e.at(-1)?.data;
  return x$e.jsx(qn, {
    children: x$e.jsx(w, {
      dimColor: true,
      children: n ? `Running ${n.toolName}\u2026` : "Working\u2026"
    })
  });
}
function h_l() {
  return x$e.jsx(qn, {
    children: x$e.jsx(w, {
      color: "warning",
      children: "Rejected"
    })
  });
}
function y_l(e, t) {
  if (qpe()) return x$e.jsx(f_l.Fragment, {});
  return x$e.jsx(qn, {
    children: x$e.jsx(w, {
      color: "error",
      children: typeof e === "string" ? e : "Error"
    })
  });
}
var f_l, x$e;