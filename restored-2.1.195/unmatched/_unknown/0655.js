// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MAs
// matched 2.1.88 source: node_modules/commander/lib/command.js
// class=new  jaccard=0.0049  score=0.2961  fileCov=0.005
// note: nearest: node_modules/commander/lib/command.js (0.0049); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module MAs] (exports=gug, module=a0r)
var gug = {};
var a0r = {
  exports: gug
};
var i0r = /([()\][%!^"`<>&|;, *?])/g;
function qPu(e) {
  return e = e.replace(i0r, "^$1"), e;
}
function VPu(e, t) {
  if (e = `${e}`, e = e.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\""), e = e.replace(/(?=(\\+?)?)\1$/, "$1$1"), e = `"${e}"`, e = e.replace(i0r, "^$1"), t) e = e.replace(i0r, "^$1");
  return e;
}
a0r.exports.command = qPu;
a0r.exports.argument = VPu;