// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nyl
// matched 2.1.88 source: node_modules/undici/lib/web/fetch/webidl.js
// class=new  jaccard=0.0212  score=0.2031  fileCov=0.0232
// note: nearest: node_modules/undici/lib/web/fetch/webidl.js (0.0212); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Nyl] deps: @modelcontextprotocol/sdk/dist/esm/types.js, commands/add-dir/validation.ts, hooks/useTerminalSize.ts, services/mockRateLimits.ts, utils/fsOperations.ts
K6e = R(se(), 1);
function wmf() {
  if (X7n) return X7n;
  return X7n = new Bun.Transpiler({
    loader: "js",
    replMode: true
  }), X7n;
}
function J7n(e) {
  let t = wmf(),
    n = t.transformSync(e);
  return Imf(t, e), n;
}
function Imf(e, t) {
  let n;
  try {
    n = e.scanImports(t.replace(/^#!.*\n?/, ""));
  } catch {
    return;
  }
  for (let {
    kind: r
  } of n) {
    let o = Cmf[r];
    if (!o) continue;
    throw Error(`Module loading (${o}) is not available in REPL \u2014 the vm context is sealed. ` + "Use the tool globals instead: await Read({file_path: '...'}), await Glob({pattern: '...'}), the registered shell tool, etc.");
  }
}
function Q7n(e) {
  if (e === null || typeof e !== "object") return e;
  if (Byl.types.isProxy(e)) return e;
  let t = Object.getOwnPropertyDescriptor(e, "value");
  return t && "value" in t ? t.value : e;
}
var Byl, X7n, Cmf;