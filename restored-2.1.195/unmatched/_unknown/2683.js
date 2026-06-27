// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wlt
// matched 2.1.88 source: node_modules/get-intrinsic/index.js
// class=new  jaccard=0.0107  score=0.2433  fileCov=0.011
// note: nearest: node_modules/get-intrinsic/index.js (0.0107); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Wlt]
mZd = new Set(["constructor", "toString", "toJSON", "valueOf"]);
function* a$n(e) {
  switch (e.kind) {
    case "file":
      for (let t of e.messages) yield t, yield* a$n(t);
      yield* e.enums, yield* e.services, yield* e.extensions;
      break;
    case "message":
      for (let t of e.nestedMessages) yield t, yield* a$n(t);
      yield* e.nestedEnums, yield* e.nestedExtensions;
      break;
  }
}
var pr;