// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cWt
// matched 2.1.88 source: src/tools/TaskUpdateTool/TaskUpdateTool.ts
// class=new  jaccard=0.0248  score=0.2748  fileCov=0.0266
// note: nearest: src/tools/TaskUpdateTool/TaskUpdateTool.ts (0.0248); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cWt = E(() => {
  Hp();
  dn();
  je();
  At();
  Cde();
});
function NDp(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function BDp(e) {
  return typeof e === "string" && e.trim() !== "";
}
function uWt(e) {
  if (!NDp(e)) return null;
  let t = [],
    n = {
      ...e
    },
    r = [[$Dp, "taskId"], [ODp, "activeForm"]];
  for (let [o, s] of r) for (let i of o) if (i in n && !(s in n) && BDp(n[i])) n[s] = n[i], delete n[i], t.push(`alias_${i}`);
  if (t.length === 0) return null;
  return {
    input: n,
    shapeClass: t.join("+")
  };
}
var $Dp, ODp;