// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module t1l
// matched 2.1.88 source: src/commands/effort/effort.tsx
// class=new  jaccard=0.021  score=0.2398  fileCov=0.0225
// note: nearest: src/commands/effort/effort.tsx (0.021); dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module t1l] deps: $7t, np, Ye, str
ZOl = R(lt(), 1), Ktr = R(rt(), 1), oNo = R(se(), 1);
async function call(e, t) {
  let n = e.trim(),
    r = n.toLowerCase();
  if (!r || _G.includes(r) || Iae.includes(r)) return {
    type: "text",
    value: `Usage: /config key=value [key=value ...]
${T7t(t)}`
  };
  let o = A7t(n);
  if (!o) return {
    type: "text",
    value: `Expected key=value, got "${n}". Run /config to see what's available.`
  };
  return {
    type: "text",
    value: H7t(o, t).map(i => i.message).join(`
`)
  };
}