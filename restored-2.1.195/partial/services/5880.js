// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OXo
// matched 2.1.88 source: node_modules/undici/lib/core/tree.js
// class=partial  jaccard=0.0625  score=0.2051  fileCov=0.0825
// note: low-confidence suggestion: node_modules/undici/lib/core/tree.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OXo] deps: services/PromptSuggestion/promptSuggestion.ts
Mvt = sDm;
var iDm = (e, t) => {
    if (!(e instanceof Uint8Array)) throw TypeError("First argument must be a buffer");
    if (!(t instanceof Uint8Array)) throw TypeError("Second argument must be a buffer");
    if (e.length !== t.length) throw TypeError("Input buffers must have the same length");
    let n = e.length,
      r = 0,
      o = -1;
    while (++o < n) r |= e[o] ^ t[o];
    return r === 0;
  },
  r2c;