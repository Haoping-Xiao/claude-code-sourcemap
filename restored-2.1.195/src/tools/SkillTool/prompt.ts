// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ect
// matched 2.1.88 source: src/tools/SkillTool/prompt.ts
// class=modified  jaccard=0.2906  score=0.6956  fileCov=0.333
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: getSkillToolInfo, getSkillInfo, getPrompt, getLimitedSkillToolCommands, formatCommandsWithinBudget, clearPromptCache
function Hoo(e) {
  let t = $2t(e),
    n = WWe();
  return t.length > n ? t.slice(0, n - 1) + "\u2026" : t;
}
function top(e) {
  let t = xu(e);
  if (e.name !== t && e.type === "prompt" && e.source === "plugin")
    T(`Skill prompt: showing "${e.name}" (userFacingName="${t}")`);
  return `- ${e.name}: ${Hoo(e)}`;
}
function formatCommandsWithinBudget(e, t, n, r) {
  if (e.length === 0) return "";
  let o = qWe(t, r),
    s = new Set(),
    i = e.map((h, y) => {
      if (Zbe(h) === "name-only")
        return (
          s.add(y),
          {
            cmd: h,
            full: `- ${h.name}`,
          }
        );
      return {
        cmd: h,
        full: top(h),
      };
    }),
    a = i.reduce((h, y) => h + rn(y.full), 0) + (i.length - 1);
  if (a <= o)
    return i.map((h) => h.full).join(`
`);
  T(
    `Skill listing over budget: ${e.length} skills, ${a} chars > ${o} budget \u2014 descriptions will be truncated. Run /doctor for details.`,
    {
      level: "warn",
    },
  );
  let l = new Set(s),
    c = [];
  for (let h = 0; h < e.length; h++) {
    let y = e[h];
    if (y.type === "prompt" && y.source === "bundled") l.add(h);
    else if (!s.has(h)) c.push(y);
  }
  let u = i.reduce((h, y, b) => (l.has(b) ? h + rn(y.full) + 1 : h), 0),
    d = o - u;
  if (c.length === 0)
    return i.map((h) => h.full).join(`
`);
  if (n) {
    let h = e.map((C, x) => x).filter((C) => !l.has(C)),
      y = (C) => rn(e[C].name) + 2,
      b = (C) => rn(i[C].full),
      _ = e.reduce((C, x, I) => C + (l.has(I) ? b(I) : y(I)), 0) + (e.length - 1),
      S = o - _,
      A = new Set(),
      v = h.slice().sort((C, x) => n(e[x]) - n(e[C]));
    for (let C of v) {
      let x = b(C) - y(C);
      if (x <= S) (A.add(C), (S -= x));
    }
    return e.map((C, x) => (l.has(x) || A.has(x) ? i[x].full : `- ${C.name}`)).join(`
`);
  }
  let p = c.reduce((h, y) => h + rn(y.name) + 4, 0) + (c.length - 1),
    f = d - p,
    m = Math.floor(f / c.length);
  if (m < Aoo)
    return e.map((h, y) => (l.has(y) ? i[y].full : `- ${h.name}`)).join(`
`);
  let g = On(c, (h) => rn(Hoo(h)) > m);
  return e.map((h, y) => {
    if (l.has(y)) return i[y].full;
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
