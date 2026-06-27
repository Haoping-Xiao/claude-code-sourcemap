// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pQ
// matched 2.1.88 source: src/utils/hooks/registerSkillHooks.ts
// class=modified  jaccard=0.3934  score=1  fileCov=0.3934
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Kll(e, t, n, r, o) {
  let s = 0;
  for (let i of GO) {
    let a = n[i];
    if (!a) continue;
    for (let l of a)
      for (let c of l.hooks) {
        let u = c.once
          ? () => {
              (T(`Removing one-shot hook for event ${i} in skill '${r}'`), vIo(e, t, i, c));
            }
          : void 0;
        (W8t(e, t, i, l.matcher || "", c, u, o), s++);
      }
  }
  if (s > 0) T(`Registered ${s} hooks from skill '${r}'`);
}
