// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bdt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bdt = Q((VGy, lTa) => {
  function rEp(e, {
    EOL: t = `
`,
    finalEOL: n = !0,
    replacer: r = null,
    spaces: o
  } = {}) {
    let s = n ? t : "";
    return JSON.stringify(e, r, o).replace(/\n/g, t) + s;
  }
  function oEp(e) {
    if (Buffer.isBuffer(e)) e = e.toString("utf8");
    return e.replace(/^\uFEFF/, "");
  }
  lTa.exports = {
    stringify: rEp,
    stripBom: oEp
  };
});