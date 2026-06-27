// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sbe
// matched 2.1.88 source: src/utils/plugins/pluginIdentifier.ts
// class=modified  jaccard=0.2304  score=0.6873  fileCov=0.2574
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Sbe = E(() => {
  vn();
  aeo();
  BPn = new Map();
  EKi = new Set();
});
function U0(e) {
  return e === Bne || e === JE;
}
function _lt(e) {
  return e.scope === "project" && e.source.endsWith(`@${JE}`);
}
function Qo(e) {
  if (e.includes("@")) {
    let t = e.split("@");
    return {
      name: t[0] || "",
      marketplace: t[1],
    };
  }
  return {
    name: e,
  };
}
function vKi(e, t) {
  return t ? `${e}@${t}` : e;
}
function Y0e(e, t) {
  return e === t || e.toLowerCase() === t.toLowerCase();
}
function Une(e, t) {
  return e.find((n) => n === t) ?? e.find((n) => Y0e(n, t));
}
function zD(e) {
  return e !== void 0 && SCe.has(e.toLowerCase());
}
function ceo(e) {
  return zD(e) || (e !== void 0 && JRt.has(e.toLowerCase()));
}
function wKi(e, t) {
  return t === Bne && IKd.has(e);
}
function KD(e) {
  if (e === "managed") throw Error("Cannot install plugins to managed scope");
  return xKd[e];
}
function FPn(e) {
  return leo[e];
}
var Bne = "inline",
  JE = "skills-dir",
  leo,
  IKd,
  xKd;
