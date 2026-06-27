// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ect
// matched 2.1.88 source: src/tools/SkillTool/prompt.ts
// class=modified  jaccard=0.2906  score=0.6956  fileCov=0.333
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: getSkillToolInfo, getSkillInfo, getPrompt, getLimitedSkillToolCommands, formatCommandsWithinBudget, clearPromptCache
function Hoo(e) {
  let t = $2t(e),
    n = WWe();
  return t.length > n ? t.slice(0, n - 1) + "\u2026" : t;
}
function formatCommandDescription(cmd) {
  let t = xu(cmd);
  if (cmd.name !== t && cmd.type === "prompt" && cmd.source === "plugin")
    T(`Skill prompt: showing "${cmd.name}" (userFacingName="${t}")`);
  return `- ${cmd.name}: ${Hoo(cmd)}`;
}
function formatCommandsWithinBudget(commands, contextWindowTokens, n, r) {
  if (commands.length === 0) return "";
  let o = qWe(contextWindowTokens, r),
    bundledIndices = new Set(),
    fullEntries = commands.map((h, y) => {
      if (Zbe(h) === "name-only")
        return (
          bundledIndices.add(y),
          {
            cmd: h,
            full: `- ${h.name}`,
          }
        );
      return {
        cmd: h,
        full: formatCommandDescription(h),
      };
    }),
    a = fullEntries.reduce((h, y) => h + rn(y.full), 0) + (fullEntries.length - 1);
  if (a <= o)
    return fullEntries.map((h) => h.full).join(`
`);
  T(
    `Skill listing over budget: ${commands.length} skills, ${a} chars > ${o} budget \u2014 descriptions will be truncated. Run /doctor for details.`,
    {
      level: "warn",
    },
  );
  let l = new Set(bundledIndices),
    restCommands = [];
  for (let h = 0; h < commands.length; h++) {
    let y = commands[h];
    if (y.type === "prompt" && y.source === "bundled") l.add(h);
    else if (!bundledIndices.has(h)) restCommands.push(y);
  }
  let u = fullEntries.reduce((h, y, b) => (l.has(b) ? h + rn(y.full) + 1 : h), 0),
    d = o - u;
  if (restCommands.length === 0)
    return fullEntries.map((h) => h.full).join(`
`);
  if (n) {
    let h = commands.map((C, x) => x).filter((C) => !l.has(C)),
      y = (C) => rn(commands[C].name) + 2,
      b = (C) => rn(fullEntries[C].full),
      _ = commands.reduce((C, x, I) => C + (l.has(I) ? b(I) : y(I)), 0) + (commands.length - 1),
      S = o - _,
      A = new Set(),
      v = h.slice().sort((C, x) => n(commands[x]) - n(commands[C]));
    for (let C of v) {
      let x = b(C) - y(C);
      if (x <= S) (A.add(C), (S -= x));
    }
    return commands.map((C, x) => (l.has(x) || A.has(x) ? fullEntries[x].full : `- ${C.name}`))
      .join(`
`);
  }
  let p = restCommands.reduce((h, y) => h + rn(y.name) + 4, 0) + (restCommands.length - 1),
    f = d - p,
    m = Math.floor(f / restCommands.length);
  if (m < Aoo)
    return commands.map((h, y) => (l.has(y) ? fullEntries[y].full : `- ${h.name}`)).join(`
`);
  let g = On(restCommands, (h) => rn(Hoo(h)) > m);
  return commands.map((h, y) => {
    if (l.has(y)) return fullEntries[y].full;
    let b = Hoo(h);
    return `- ${h.name}: ${$a(b, m)}`;
  }).join(`
`);
}
async function getSkillToolInfo(e) {
  let t = await aC(e),
    n = Due(t, RK());
  return {
    totalCommands: t.length,
    includedCommands: n.length,
  };
}
async function getLimitedSkillToolCommands(e) {
  return Due(await aC(e), RK());
}
function clearPromptCache() {
  getPrompt.cache?.clear?.();
}
async function getSkillInfo(e) {
  try {
    let t = await Lue(e);
    return {
      totalSkills: t.length,
      includedSkills: t.length,
    };
  } catch (t) {
    return (
      ke(Zr(t)),
      {
        totalSkills: 0,
        includedSkills: 0,
      }
    );
  }
}
var getPrompt;
