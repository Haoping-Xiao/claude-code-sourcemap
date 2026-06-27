// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gdi
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/serde/index.js
// class=vendor  jaccard=0.0749  score=1  fileCov=0.0749
// note: identified by fingerprint: @smithy/core; 4 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zmh,
  expectLong = value => {
    if (value === null || value === void 0) return;
    if (Number.isInteger(value) && !Number.isNaN(value)) return value;
    throw TypeError(`Expected integer, got ${typeof value}: ${value}`);
  },
  hdi = e => expectSizedInt(e, 32),
  expectSizedInt = (value, size) => {
    let n = expectLong(value);
    if (n !== void 0 && Omd(n, size) !== n) throw TypeError(`Expected ${size}-bit integer, got ${value}`);
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
  expectString = value => {
    if (value === null || value === void 0) return;
    if (typeof value === "string") return value;
    if (["boolean", "number", "bigint"].includes(typeof value)) return Bmd.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`)), String(value);
    throw TypeError(`Expected string, got ${typeof value}: ${value}`);
  },
  stackTraceWarning = message => String(TypeError(message).stack || message).split(`
`).slice(0, 5).filter(t => !t.includes("stackTraceWarning")).join(`
`),
  Bmd;