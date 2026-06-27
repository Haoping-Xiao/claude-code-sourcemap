// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qnl
// matched 2.1.88 source: src/ink/components/Box.tsx
// class=new  jaccard=0.0506  score=0.3753  fileCov=0.0553
// note: nearest: src/ink/components/Box.tsx (0.0506); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Znl() {
  return null;
}
function erl(e, t, n) {
  return Aoe.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [Aoe.jsxs(U, {
      flexDirection: "row",
      children: [Aoe.jsx(w, {
        color: BB("plan"),
        children: gc
      }), Aoe.jsx(w, {
        children: " Entered plan mode"
      })]
    }), Aoe.jsx(U, {
      paddingLeft: 2,
      children: Aoe.jsx(w, {
        dimColor: true,
        children: "Claude is now exploring and designing an implementation approach."
      })
    })]
  });
}
function trl() {
  return Aoe.jsxs(U, {
    flexDirection: "row",
    marginTop: 1,
    children: [Aoe.jsx(w, {
      color: BB("default"),
      children: gc
    }), Aoe.jsx(w, {
      children: " User declined to enter plan mode"
    })]
  });
}
var Aoe;