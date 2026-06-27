// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gdi
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/serde/index.js
// class=partial  jaccard=0.1126  score=1  fileCov=0.1126
// note: low-confidence suggestion: node_modules/@smithy/core/dist-cjs/submodules/serde/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gdi = E(() => {
  k4r();
  _Hn();
});
var Zmh,
  Mmd = e => {
    if (e === null || e === void 0) return;
    if (Number.isInteger(e) && !Number.isNaN(e)) return e;
    throw TypeError(`Expected integer, got ${typeof e}: ${e}`);
  },
  hdi = e => $md(e, 32),
  $md = (e, t) => {
    let n = Mmd(e);
    if (n !== void 0 && Omd(n, t) !== n) throw TypeError(`Expected ${t}-bit integer, got ${e}`);
    return n;
  },
  Omd = (e, t) => {
    switch (t) {
      case 32:
        return Int32Array.of(e)[0];
      case 16:
        return Int16Array.of(e)[0];
      case 8:
        return Int8Array.of(e)[0];
    }
  },
  Ert = e => {
    if (e === null || e === void 0) return;
    if (typeof e === "string") return e;
    if (["boolean", "number", "bigint"].includes(typeof e)) return Bmd.warn(Nmd(`Expected string, got ${typeof e}: ${e}`)), String(e);
    throw TypeError(`Expected string, got ${typeof e}: ${e}`);
  },
  Nmd = e => String(TypeError(e).stack || e).split(`
`).slice(0, 5).filter(t => !t.includes("stackTraceWarning")).join(`
`),
  Bmd;