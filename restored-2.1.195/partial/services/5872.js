// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rB
// matched 2.1.88 source: node_modules/pkce-challenge/dist/index.node.js
// class=partial  jaccard=0.1029  score=1  fileCov=0.1029
// note: low-confidence suggestion: node_modules/pkce-challenge/dist/index.node.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rB]
Ru = crypto;
var rDm = async (e, t) => {
    let n = `SHA-${e.slice(-3)}`;
    return new Uint8Array(await Ru.subtle.digest(n, t));
  },
  $mr;