// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bEt
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0037  score=0.3476  fileCov=0.0038
// note: nearest: src/screens/REPL.tsx (0.0037); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bEt] deps: hooks/useTerminalSize.ts, undici/lib/mock/mock-agent.js
iNl = R(lt(), 1), _Et = R(se(), 1);
function lNl() {
  let e = aNl.c(1);
  if (!E8()) return null;
  let t = Gj.warnings;
  if (t.length === 0) return null;
  let n;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
    let r = [...t].sort(c$f),
      o = r[0]?.severity === "error";
    n = qOe.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [qOe.jsx(nx, {
        title: "Keybinding configuration issues",
        status: o ? "error" : "warning",
        detail: rbe()
      }), qOe.jsx(hs, {
        variant: "tree",
        children: r.map(l$f)
      })]
    }), e[0] = n;
  } else n = e[0];
  return n;
}
function l$f(e, t) {
  return qOe.jsxs(hs.Group, {
    children: [qOe.jsx(hs.Node, {
      color: e.severity === "error" ? "error" : "warning",
      children: e.message
    }), e.suggestion && qOe.jsx(hs.Node, {
      dimColor: true,
      children: e.suggestion
    })]
  }, t);
}
function c$f(e, t) {
  return e.severity === t.severity ? 0 : e.severity === "error" ? -1 : 1;
}
var aNl, qOe;