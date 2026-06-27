// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _$
// matched 2.1.88 source: src/utils/Shell.ts
// class=new  jaccard=0.0314  score=0.7364  fileCov=0.0318
// note: nearest: src/utils/Shell.ts (0.0314); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _$] deps: Qi, kt, ft, yC, Rm, Lo, je, At, Bi, ys, ojn, bH, jqe, kv, _0, rre, Bmo, z2n, wr, jjt, Is, lg, Hro, E5e, oMa, kDe, ejn, _1, WSe, m5, sj
dMa = require("child_process"), m6 = require("fs"), qqe = require("fs/promises"), pMa = require("os"), njn = require("path"), fMa = require("fs");
Kmo = Cn(iRp);
aRp = Cn(async () => {
  let e = await d6();
  if (!e) throw Error("PowerShell is not available");
  return cMa(e);
}), lRp = {
  bash: async () => (await Kmo()).provider,
  powershell: aRp
};
function Y0(e = H.boolean()) {
  return H.preprocess(t => t === "true" ? true : t === "false" ? false : t, e);
}