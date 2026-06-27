// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p_i
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var p_i = Q((wkh, d_i) => {
  var u_i = cU(),
    VSd = (e, t, n, r, o) => {
      if (typeof n === "string") o = r, r = n, n = void 0;
      try {
        return new u_i(e instanceof u_i ? e.version : e, n).inc(t, r, o).version;
      } catch (s) {
        return null;
      }
    };
  d_i.exports = VSd;
});