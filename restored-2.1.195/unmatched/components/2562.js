// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fH
// matched 2.1.88 source: node_modules/react/cjs/react.production.js
// class=new  jaccard=0.0328  score=1  fileCov=0.0328
// note: nearest: node_modules/react/cjs/react.production.js (0.0328); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fH = E(() => {
  G6i = R(lt(), 1), NGe = R(rt(), 1), Xj = NGe.createContext(null);
});
function GU(e) {
  if (typeof e === "string") return e;
  if (typeof e === "number") return String(e);
  if (!e) return "";
  if (Array.isArray(e)) return e.map(GU).join("");
  if (W6i.isValidElement(e)) return GU(e.props.children);
  return "";
}
var W6i;