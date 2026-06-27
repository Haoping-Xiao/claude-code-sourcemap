// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hor
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.0083  score=0.2232  fileCov=0.0085
// note: nearest: node_modules/react/cjs/react.production.js (0.0083); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hor] deps: hooks/useTerminalSize.ts
$5l = R(lt(), 1), Aor = R(se(), 1);
function N5l() {
  let e = $yt(),
    t = O5l.useMemo(jPt, [e]),
    n = wnr();
  if (!t && !n) return null;
  let r = t && n ? `${t.slice(0, -1)}, auto-updated)` : n ? " (auto-updated)" : t;
  return B5l.jsxs(GHe, {
    command: "/model",
    children: ["Using ", KY(e), r]
  });
}
var O5l, B5l;