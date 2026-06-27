// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tOc
// matched 2.1.88 source: src/services/mcp/config.ts
// class=new  jaccard=0.0098  score=0.4275  fileCov=0.0099
// note: nearest: src/services/mcp/config.ts (0.0098); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tOc] deps: Ye, oc, Vtn, mE, vi, f_, EC
Z$c = R(lt(), 1), hmr = R(rt(), 1), KP = R(se(), 1);
function Avt(e, t, n) {
  if (!t) return e;
  if (Tl()) return e;
  if (n?.strictMcpConfig && t.source !== "flagSettings" || Z1()) return e;
  let o = F$o(t);
  if (Object.keys(o).length === 0) return e;
  let {
    allowed: s,
    blocked: i
  } = l5(o);
  if (i.length > 0) n?.onBlocked?.(i);
  return {
    ...s,
    ...e
  };
}