// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B1
// matched 2.1.88 source: src/tools/SkillTool/prompt.ts
// class=partial  jaccard=0.0817  score=0.2219  fileCov=0.1144
// note: low-confidence suggestion: src/tools/SkillTool/prompt.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module B1] deps: ft, je, fn, At, es, ys, Jbe
_ct = require("fs/promises"), bct = require("path");
function WWe() {
  return Dr().skillListingMaxDescChars ?? Zrp;
}
function Eoo() {
  return Dr().skillListingBudgetFraction ?? Jrp;
}
function qWe(e, t = Ora) {
  if (Number(process.env.SLASH_COMMAND_TOOL_CHAR_BUDGET)) return Number(process.env.SLASH_COMMAND_TOOL_CHAR_BUDGET);
  let n = Eoo(),
    r = (e ?? Qrp) * t * n;
  return Math.max(1, Math.floor(r));
}
function $2t(e) {
  return e.whenToUse ? `${e.description} - ${e.whenToUse}` : e.description;
}
function formatCommandsWithinBudget(e) {
  return e.type === "prompt" && e.source === "bundled";
}
function Nra(e, t, n, r, o = Ora) {
  let s = qWe(t, o),
    i = Number(process.env.SLASH_COMMAND_TOOL_CHAR_BUDGET) > 0,
    a = WWe(),
    l = [],
    c = Math.max(0, e.length - 1),
    u = e.map(S => {
      if (n?.has(S.name)) return c += S.name.length + 2, {
        cmd: S,
        descLen: 0,
        entryLen: S.name.length + 2
      };
      let A = $2t(S),
        v = Math.min(A.length, a);
      if (A.length > a) l.push({
        name: S.name,
        rawLen: A.length
      });
      return c += S.name.length + 4 + A.length, {
        cmd: S,
        descLen: v,
        entryLen: S.name.length + 4 + v
      };
    });
  l.sort((S, A) => A.rawLen - S.rawLen);
  let d = l.map(S => S.name),
    p = u.reduce((S, A) => S + A.entryLen, 0) + Math.max(0, u.length - 1);
  if (p <= s) return {
    cappedSkills: d,
    budgetMode: "fits",
    maxDescLen: a,
    budgetTruncatedSkills: [],
    totalChars: p,
    rawTotalChars: c,
    budget: s,
    budgetFromEnv: i,
    bytesPerToken: o
  };
  let f = S => formatCommandsWithinBudget(S.cmd) || n?.has(S.cmd.name),
    m = u.reduce((S, A) => f(A) ? S + A.entryLen + 1 : S, 0),
    g = u.filter(S => !f(S));
  if (r) {
    let S = u.reduce((x, I) => x + (f(I) ? I.entryLen : I.cmd.name.length + 2), 0) + Math.max(0, u.length - 1),
      A = s - S,
      v = g.slice().sort((x, I) => r(I.cmd) - r(x.cmd)),
      C = [];
    for (let x of v) {
      let I = x.entryLen - (x.cmd.name.length + 2);
      if (I <= A) A -= I;else C.push(x);
    }
    return C.sort((x, I) => I.descLen - x.descLen), {
      cappedSkills: d,
      budgetMode: "priority",
      maxDescLen: 0,
      budgetTruncatedSkills: C.map(x => x.cmd.name),
      totalChars: p,
      rawTotalChars: c,
      budget: s,
      budgetFromEnv: i,
      bytesPerToken: o
    };
  }
  let h = g.reduce((S, A) => S + A.cmd.name.length + 4, 0) + Math.max(0, g.length - 1),
    y = g.length > 0 ? Math.floor((s - m - h) / g.length) : a,
    b = y < Aoo ? "names-only" : "truncate",
    _ = b === "names-only" ? g.filter(S => S.descLen > 0) : g.filter(S => S.descLen > y);
  return _.sort((S, A) => A.descLen - S.descLen), {
    cappedSkills: d,
    budgetMode: b,
    maxDescLen: Math.max(0, y),
    budgetTruncatedSkills: _.map(S => S.cmd.name),
    totalChars: p,
    rawTotalChars: c,
    budget: s,
    budgetFromEnv: i,
    bytesPerToken: o
  };
}
var Jrp = 0.01,
  Ora = 4,
  Qrp = 200000,
  Zrp = 1536,
  Aoo = 20;