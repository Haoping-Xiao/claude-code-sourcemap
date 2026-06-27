// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zjr
// matched 2.1.88 source: node_modules/@smithy/util-buffer-from/dist-cjs/index.js
// class=partial  jaccard=0.2045  score=0.6609  fileCov=0.2284
// note: low-confidence suggestion: node_modules/@smithy/util-buffer-from/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zjr = E(() => {
  sci();
});
var Kjr = e => typeof ArrayBuffer === "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
var Yjr,
  ici = (e, t) => {
    if (typeof e !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof e} (${e})`);
    return t ? Yjr.Buffer.from(e, t) : Yjr.Buffer.from(e);
  };