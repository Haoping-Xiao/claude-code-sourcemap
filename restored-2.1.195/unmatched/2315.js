// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k2i
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var k2i = Q((SKh, x2i) => {
  var I2i = kU(),
    RFd = (e, t, n, r, o) => {
      if (typeof n === "string") o = r, r = n, n = void 0;
      try {
        return new I2i(e instanceof I2i ? e.version : e, n).inc(t, r, o).version;
      } catch (s) {
        return null;
      }
    };
  x2i.exports = RFd;
});