// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rq
// matched 2.1.88 source: src/skills/loadSkillsDir.ts
// class=modified (alt of src/skills/loadSkillsDir.ts)  jaccard=0.2172  score=0.6248  fileCov=0.2498
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rq] deps: lodash-es/memoize.js, services/analytics/index.ts, outputStyles/loadOutputStylesDir.ts, dn, utils/debug.ts, U1, tools/ReadMcpResourceTool/UI.tsx, utils/plugins/marketplaceHelpers.ts, Il, utils/plugins/schemas.ts, utils/fsOperations.ts, utils/debug.ts, utils/tempfile.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, hooks/useSettings.ts, utils/fsOperations.ts, jsonc-parser/lib/esm/impl/parser.js, utils/sequential.ts, utils/markdownConfigLoader.ts, utils/agentContext.ts, utils/plugins/pluginIdentifier.ts, utils/claudeCodeHints.ts, utils/promptShellExecution.ts, utils/settings/changeDetector.ts, utils/settings/managedPath.ts, utils/hooks/hooksConfigSnapshot.ts, utils/settings/settings.ts, utils/settings/types.ts, bootstrap/state.ts, sDo, utils/plugins/addDirPluginSettings.ts, iDo, skills/loadSkillsDir.ts
((lDo = require("fs/promises")), (zTl = R(D3e(), 1)), (rm = require("path")));
yze = Cn(
  async (e) => {
    let t = rm.join(tr(), "skills"),
      n = rm.join(QC(), ".claude", "skills"),
      r = O6e("skills", e);
    T(`Loading skills from: managed=${n}, user=${t}, project=[${r.join(", ")}]`);
    let o = c0(),
      s = VE("skills"),
      i = Om("projectSettings") && !s;
    if (
      lc("skills", {
        explicitlyRequested: o.length > 0 && i,
      })
    )
      return (T("[reduced mode] Skipping skill dir discovery"), []);
    if (md())
      return (
        await Promise.all(o.map((S) => zbt(rm.join(S, ".claude", "skills"), "projectSettings")))
      )
        .flat()
        .map((S) => S.skill);
    let [a, l, c, u, d] = await Promise.all([
        ut(process.env.CLAUDE_CODE_DISABLE_POLICY_SKILLS)
          ? Promise.resolve([])
          : zbt(n, "policySettings"),
        Om("userSettings") && !s ? zbt(t, "userSettings") : Promise.resolve([]),
        i ? Promise.all(r.map((_) => zbt(_, "projectSettings"))) : Promise.resolve([]),
        i
          ? Promise.all(o.map((_) => zbt(rm.join(_, ".claude", "skills"), "projectSettings")))
          : Promise.resolve([]),
        s ? Promise.resolve([]) : qSf(e, i ? o : []),
      ]),
      p = [...a, ...l, ...c.flat(), ...u.flat(), ...d],
      f = await Promise.all(
        p.map(({ skill: _, filePath: S }) =>
          _.type === "prompt" ? OSf(S) : Promise.resolve(null),
        ),
      ),
      m = new Map(),
      g = [];
    for (let _ = 0; _ < p.length; _++) {
      let S = p[_];
      if (S === void 0 || S.skill.type !== "prompt") continue;
      let { skill: A } = S,
        v = f[_];
      if (v === null || v === void 0) {
        g.push(A);
        continue;
      }
      let C = m.get(v);
      if (C !== void 0) {
        T(
          `Skipping duplicate skill '${A.name}' from ${A.source} (same file already loaded from ${C})`,
        );
        continue;
      }
      (m.set(v, A.source), g.push(A));
    }
    Z0e(
      "skill",
      g.map((_) => ({
        name: _.name,
        source: _.source,
      })),
      {
        resolves: false,
      },
    );
    let h = p.length - g.length;
    if (h > 0) T(`Deduplicated ${h} skills (same file)`);
    let y = [],
      b = [];
    for (let _ of g)
      if (
        _.type === "prompt" &&
        _.paths &&
        _.paths.length > 0 &&
        !yq().activatedConditionalSkillNames.has(_.name)
      )
        b.push(_);
      else y.push(_);
    for (let _ of b) yq().conditionalSkills.set(_.name, _);
    if (b.length > 0)
      T(
        `[skills] ${b.length} conditional skills stored (activated when matching files are touched)`,
      );
    return (
      T(
        `Loaded ${g.length} unique skills (${y.length} unconditional, ${b.length} conditional, managed: ${a.length}, user: ${l.length}, project: ${c.flat().length}, additional: ${u.flat().length}, legacy commands: ${d.length})`,
      ),
      y
    );
  },
  (e) => `${gKt()}:${e}`,
);
if (!(yze.cache instanceof Map)) yze.cache = new Map();
HJn = new Map();
fDo = Mi();
Oua({
  createSkillCommand: mKt,
  parseSkillFrontmatterFields: uDo,
});
function nvl(e, t, n) {
  if (!_Kt(e)) return null;
  if (!fLr(t).isValid) return null;
  let o = n(),
    s = fLr(o);
  if (!s.isValid)
    return {
      result: false,
      message: `Claude Code settings.json validation failed after edit:
${s.error}

Full schema:
${s.fullSchema}
IMPORTANT: Do not update the env unless explicitly instructed to do so.`,
      errorCode: 10,
    };
  return null;
}
