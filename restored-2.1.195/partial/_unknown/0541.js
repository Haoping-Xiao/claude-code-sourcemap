// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rys
// matched 2.1.88 source: node_modules/debug/src/node.js
// class=partial  jaccard=0.2292  score=0.4451  fileCov=0.3209
// note: low-confidence suggestion: node_modules/debug/src/node.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rys = Q((uM, Wdn) => {
  var Vbu = require("tty"),
    Gdn = require("util");
  uM.init = Zbu;
  uM.log = Xbu;
  uM.formatArgs = Kbu;
  uM.save = Jbu;
  uM.load = Qbu;
  uM.useColors = zbu;
  uM.destroy = Gdn.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  uM.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = xys();
    if (e && (e.stderr || e).level >= 2) uM.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
  } catch (e) {}
  uM.inspectOpts = Object.keys(process.env).filter(e => /^debug_/i.test(e)).reduce((e, t) => {
    let n = t.substring(6).toLowerCase().replace(/_([a-z])/g, (o, s) => s.toUpperCase()),
      r = process.env[t];
    if (/^(yes|on|true|enabled)$/i.test(r)) r = true;else if (/^(no|off|false|disabled)$/i.test(r)) r = false;else if (r === "null") r = null;else r = Number(r);
    return e[n] = r, e;
  }, {});
  function zbu() {
    return "colors" in uM.inspectOpts ? Boolean(uM.inspectOpts.colors) : Vbu.isatty(process.stderr.fd);
  }
  function Kbu(e) {
    let {
      namespace: t,
      useColors: n
    } = this;
    if (n) {
      let r = this.color,
        o = "\x1B[3" + (r < 8 ? r : "8;5;" + r),
        s = `  ${o};1m${t} \x1B[0m`;
      e[0] = s + e[0].split(`
`).join(`
` + s), e.push(o + "m+" + Wdn.exports.humanize(this.diff) + "\x1B[0m");
    } else e[0] = Ybu() + t + " " + e[0];
  }
  function Ybu() {
    if (uM.inspectOpts.hideDate) return "";
    return new Date().toISOString() + " ";
  }
  function Xbu(...e) {
    return process.stderr.write(Gdn.formatWithOptions(uM.inspectOpts, ...e) + `
`);
  }
  function Jbu(e) {
    if (e) process.env.DEBUG = e;else delete process.env.DEBUG;
  }
  function Qbu() {
    return process.env.DEBUG;
  }
  function Zbu(e) {
    e.inspectOpts = {};
    let t = Object.keys(uM.inspectOpts);
    for (let n = 0; n < t.length; n++) e.inspectOpts[t[n]] = uM.inspectOpts[t[n]];
  }
  Wdn.exports = wxr()(uM);
  var {
    formatters: kys
  } = Wdn.exports;
  kys.o = function (e) {
    return this.inspectOpts.colors = this.useColors, Gdn.inspect(e, this.inspectOpts).split(`
`).map(t => t.trim()).join(" ");
  };
  kys.O = function (e) {
    return this.inspectOpts.colors = this.useColors, Gdn.inspect(e, this.inspectOpts);
  };
});