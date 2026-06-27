// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PAs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var PAs = Q((mug, DAs) => {
  var RAs = require("path"),
    jPu = IAs(),
    GPu = kAs();
  function LAs(e, t) {
    let n = e.options.env || process.env,
      r = process.cwd(),
      o = e.options.cwd != null,
      s = o && process.chdir !== void 0 && !process.chdir.disabled;
    if (s) try {
      process.chdir(e.options.cwd);
    } catch (a) {}
    let i;
    try {
      i = jPu.sync(e.command, {
        path: n[GPu({
          env: n
        })],
        pathExt: t ? RAs.delimiter : void 0
      });
    } catch (a) {} finally {
      if (s) process.chdir(r);
    }
    if (i) i = RAs.resolve(o ? e.options.cwd : "", i);
    return i;
  }
  function WPu(e) {
    return LAs(e) || LAs(e, true);
  }
  DAs.exports = WPu;
});