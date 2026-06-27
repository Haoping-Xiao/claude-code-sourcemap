// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u3c
// matched 2.1.88 source: src/tools/SkillTool/SkillTool.ts
// class=new  jaccard=0.0052  score=0.5059  fileCov=0.0052
// note: nearest: src/tools/SkillTool/SkillTool.ts (0.0052); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module u3c] (exports=xzH, module=c3c)
var xzH = {};
var c3c = {
  exports: xzH
};
var aMm = /^\d+$/;
function lMm(e) {
  if (e.includes("://")) return true;
  let t = e.replace(/(\/|\?)/g, "#").split("#")[0];
  if (t.includes(":")) {
    let n = t.indexOf(":"),
      r = t.slice(n + 1);
    if (!aMm.test(r)) return true;
  }
  return false;
}
function cMm(e) {
  if (!e.includes("@")) return false;
  let t = e.split("@"),
    n = t[t.length - 1];
  return !(n.includes(":") || n.includes("/") || n.includes("?"));
}
function uMm(e) {
  if (typeof e !== "string") throw TypeError("input must be a string");
  let t;
  if (lMm(e)) t = e;else if (cMm(e)) t = `acct:${e}`;else t = `https://${e}`;
  return t.split("#")[0];
}
c3c.exports = uMm;