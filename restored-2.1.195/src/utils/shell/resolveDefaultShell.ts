// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c8o
// matched 2.1.88 source: src/utils/shell/resolveDefaultShell.ts
// class=modified  jaccard=0.442  score=1  fileCov=0.442
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module c8o] deps: Ye, RN, ZCo, cjn
((qfc = R(lt(), 1)), (JZt = R(se(), 1)));
function mur() {
  let e = Dr().defaultShell;
  if (e === "bash" && !Su()) return "powershell";
  if (e === "powershell" && !q1()) return "bash";
  return e ?? (Su() ? "bash" : "powershell");
}
