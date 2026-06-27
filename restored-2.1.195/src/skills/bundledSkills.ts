// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KXl
// matched 2.1.88 source: src/skills/bundledSkills.ts
// class=modified  jaccard=0.3087  score=0.4903  fileCov=0.4545
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module KXl] deps: ft, Un, kt, oo, x4o
zXl = [
  oHt({
    name: "ultraplan",
    description: "Claude Code on the web drafts a plan you can edit and approve",
  }),
  oHt({
    name: "ultrareview",
    description: "Find and verify bugs in your branch using Claude Code on the web",
  }),
  oHt({
    name: "teleport",
    aliases: ["tp"],
    description: "Resume a Claude Code session from claude.ai",
  }),
  oHt({
    name: "remote-control",
    aliases: ["rc"],
    description: "Control this session from your phone or claude.ai/code",
  }),
  oHt({
    name: "schedule",
    aliases: ["routines"],
    description: "Create and manage scheduled remote Claude Code agents",
  }),
  oHt({
    name: "autofix-pr",
    description: "Monitor and autofix any issues with the current PR",
  }),
];
function registerBundledSkill(definition) {
  let { files: t } = definition,
    n,
    r = definition.getPromptForCommand,
    o = typeof t === "function";
  if (t && (o || Object.keys(t).length > 0)) {
    n = XXl(definition.name);
    let i,
      a = definition.getPromptForCommand;
    r = async (l, c) => {
      i ??= (async () => {
        let p = o ? await t() : t;
        return extractBundledSkillFiles(definition.name, p);
      })();
      let u = await i,
        d = await a(l, c);
      if (u === null) return d;
      return prependBaseDir(d, u);
    };
  }
  let s = {
    type: "prompt",
    name: definition.name,
    description: typeof definition.description === "function" ? "" : definition.description,
    menuDescription: definition.menuDescription,
    aliases: definition.aliases,
    subcommands: definition.subcommands,
    hasUserSpecifiedDescription: !0,
    allowedTools: definition.allowedTools ?? [],
    disallowedTools: definition.disallowedTools ?? [],
    argumentHint: typeof definition.argumentHint === "function" ? void 0 : definition.argumentHint,
    whenToUse: typeof definition.whenToUse === "function" ? void 0 : definition.whenToUse,
    model: definition.model,
    disableModelInvocation: definition.disableModelInvocation ?? !1,
    userInvocable: definition.userInvocable ?? !0,
    contentLength: 0,
    source: "bundled",
    loadedFrom: "bundled",
    hooks: definition.hooks,
    skillRoot: n,
    context: definition.context,
    agent: definition.agent,
    isEnabled: definition.isEnabled,
    isHidden: !(definition.userInvocable ?? !0),
    progressMessage: definition.progressMessage ?? "running",
    getPromptForCommand: r,
    getEffort: definition.getEffort,
    getArgumentCompletions: definition.getArgumentCompletions,
  };
  (K0e(s, "description", definition.description),
    K0e(s, "argumentHint", definition.argumentHint),
    K0e(s, "whenToUse", definition.whenToUse),
    YXl.push(s));
}
function k4o() {
  if (G6()) return [];
  return [...YXl];
}
function XXl(e) {
  return $se.join(eir(), e);
}
async function extractBundledSkillFiles(skillName, files) {
  let n = XXl(skillName);
  try {
    return (await j8f(n, files), xe("skill_bundled_extract"), n);
  } catch (r) {
    return (
      T(
        `Failed to extract bundled skill '${skillName}' to ${n}: ${r instanceof Error ? r.message : String(r)}`,
      ),
      Le("skill_bundled_extract", "skill_bundled_extract_write_failed"),
      null
    );
  }
}
async function j8f(e, t) {
  let n = new Map();
  for (let [r, o] of Object.entries(t)) {
    let s = resolveSkillFilePath(e, r),
      i = $se.dirname(s),
      a = [s, o],
      l = n.get(i);
    if (l) l.push(a);
    else n.set(i, [a]);
  }
  await Promise.all(
    [...n].map(async ([r, o]) => {
      (await Zsr.mkdir(r, {
        recursive: !0,
        mode: 448,
      }),
        await Promise.all(o.map(([s, i]) => q8f(s, i))));
    }),
  );
}
async function q8f(e, t) {
  let n = await Zsr.open(e, W8f, 384);
  try {
    await n.writeFile(t, "utf8");
  } finally {
    await n.close();
  }
}
function resolveSkillFilePath(baseDir, relPath) {
  let n = $se.normalize(relPath);
  if ($se.isAbsolute(n) || n.split($se.sep).includes("..") || n.split("/").includes(".."))
    throw Error(`bundled skill file path escapes skill dir: ${relPath}`);
  return $se.join(baseDir, n);
}
function prependBaseDir(blocks, baseDir) {
  let n = `Base directory for this skill: ${baseDir}

`;
  if (blocks.length > 0 && blocks[0].type === "text")
    return [
      {
        type: "text",
        text: n + blocks[0].text,
      },
      ...blocks.slice(1),
    ];
  return [
    {
      type: "text",
      text: n,
    },
    ...blocks,
  ];
}
var IJt, Zsr, $se, YXl, G8f, W8f;
