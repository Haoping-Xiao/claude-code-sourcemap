// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D4r
// matched 2.1.88 source: node_modules/@smithy/util-stream/dist-cjs/index.js
// class=partial  jaccard=0.2168  score=1  fileCov=0.2168
// note: low-confidence suggestion: node_modules/@smithy/util-stream/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var D4r = E(() => {
  Zui();
  wye = class wye extends Uint8Array {
    static fromString(e, t = "utf-8") {
      switch (typeof e) {
        case "string":
          return Qui(e, t);
        default:
          throw Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`);
      }
    }
    static mutate(e) {
      return Object.setPrototypeOf(e, wye.prototype), e;
    }
    transformToString(e = "utf-8") {
      return Jui(this, e);
    }
  };
});
var edi = () => {};
var tdi = () => {};