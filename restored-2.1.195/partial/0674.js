// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dRt
// matched 2.1.88 source: node_modules/get-stream/source/contents.js
// class=partial  jaccard=0.1852  score=0.6667  fileCov=0.2041
// note: low-confidence suggestion: node_modules/get-stream/source/contents.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dRt = E(() => {
  ({
    toString: LHs
  } = Object.prototype);
  H0r = class H0r extends Error {
    name = "MaxBufferError";
    constructor() {
      super("maxBuffer exceeded");
    }
  };
});
var T0r = e => e,
  v0r = () => {
    return;
  },
  w0r = ({
    contents: e
  }) => e,
  rfn = e => {
    throw Error(`Streams in object mode are not supported: ${String(e)}`);
  },
  ofn = e => e.length;