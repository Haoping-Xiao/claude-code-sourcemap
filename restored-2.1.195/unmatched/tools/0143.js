// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tIt
// matched 2.1.88 source: node_modules/@aws-sdk/credential-provider-login/dist-cjs/index.js
// class=new  jaccard=0.0211  score=0.2546  fileCov=0.0225
// note: nearest: node_modules/@aws-sdk/credential-provider-login/dist-cjs/index.js (0.0211); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tIt] deps: Fsn, cos
Gzc = /^[A-Za-z0-9_.-]+$/;
function xSr(e) {
  if (!e) throw new ui("Identity token file path is empty");
  return async () => {
    let t = await import("fs"),
      n;
    try {
      n = await t.promises.readFile(e, "utf-8");
    } catch (o) {
      throw new ui(`Failed to read identity token file at ${e}: ${o}`);
    }
    let r = n.trim();
    if (!r) throw new ui(`Identity token file at ${e} is empty`);
    return r;
  };
}
function fos(e) {
  if (!e) throw new ui("Identity token value is empty");
  return () => e;
}