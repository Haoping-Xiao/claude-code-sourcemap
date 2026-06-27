// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XPa
// matched 2.1.88 source: src/utils/ShellCommand.ts
// class=new  jaccard=0.0523  score=0.1826  fileCov=0.0683
// note: nearest: src/utils/ShellCommand.ts (0.0523); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XPa = E(() => {
  kt();
  fd();
  Lo();
  je();
  f6();
  wr();
  fn();
  oc();
  ys();
  Is();
  Xh();
  tre();
  OB();
  _1();
  sj();
  aEe();
  Xjt();
  zPa = require("child_process"), J2n = require("fs/promises"), Q2n = R(require("os")), jGt = require("path");
  V0p = [".git", ".svn", ".hg", ".bzr", ".jj", ".sl"];
  Q0p = /^([A-Za-z_][A-Za-z0-9_]*)=/;
});
function Z2n(e, t) {
  let n = e.lastIndexOf(" -");
  if (n > 0) {
    let r = e.substring(0, n),
      o = e.substring(n + 1);
    return `${ja([r])} ${o} ${ja([t])}`;
  } else return `${ja([e])} ${ja([t])}`;
}
var qmo = () => {};
function Vmo(e) {
  if (/\d\s*<<\s*\d/.test(e) || /\[\[\s*\d+\s*<<\s*\d+\s*\]\]/.test(e) || /\$\(\(.*<<.*\)\)/.test(e)) return !1;
  return /<<-?\s*(?:(['"]?)(\w+)\1|\\(\w+))/.test(e);
}
function Z0p(e) {
  let t = /'(?:[^'\\]|\\.)*\n(?:[^'\\]|\\.)*'/,
    n = /"(?:[^"\\]|\\.)*\n(?:[^"\\]|\\.)*"/;
  return t.test(e) || n.test(e);
}
function JPa(e, t = !0) {
  if (Vmo(e) || Z0p(e)) {
    let o = `'${e.replaceAll("'", `'"'"'`)}'`;
    if (Vmo(e)) return o;
    return t ? `${o} < /dev/null` : o;
  }
  let n = ja([e]);
  return t ? `${n} < /dev/null` : n;
}
function eRp(e) {
  return /(?:^|[\s;&|])<(?![<(])\s*\S+/.test(e);
}
function QPa(e) {
  if (Vmo(e)) return !1;
  if (eRp(e)) return !1;
  return !0;
}
function ZPa(e) {
  if (e.includes("<") || e.includes("$") || e.includes("`")) return e;
  return e.replace(tRp, "$1/dev/null");
}
var tRp;