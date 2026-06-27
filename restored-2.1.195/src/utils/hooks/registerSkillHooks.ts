// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pQ
// matched 2.1.88 source: src/utils/hooks/registerSkillHooks.ts
// class=modified  jaccard=0.3934  score=1  fileCov=0.3934
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function registerSkillHooks(setAppState, sessionId, hooks, skillName, skillRoot) {
  let s = 0;
  for (let i of GO) {
    let a = hooks[i];
    if (!a) continue;
    for (let l of a)
      for (let c of l.hooks) {
        let u = c.once
          ? () => {
              (T(`Removing one-shot hook for event ${i} in skill '${skillName}'`),
                vIo(setAppState, sessionId, i, c));
            }
          : void 0;
        (W8t(setAppState, sessionId, i, l.matcher || "", c, u, skillRoot), s++);
      }
  }
  if (s > 0) T(`Registered ${s} hooks from skill '${skillName}'`);
}
