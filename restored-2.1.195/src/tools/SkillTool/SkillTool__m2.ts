// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KXl
// matched 2.1.88 source: src/tools/SkillTool/SkillTool.ts
// class=modified (alt of src/tools/SkillTool/SkillTool.ts)  jaccard=0.0385  score=0.2095  fileCov=0.0451
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var KXl = E(() => {
  ft();
  Un();
  kt();
  oo();
  x4o();
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
});
function Nd(e) {
  let { files: t } = e,
    n,
    r = e.getPromptForCommand,
    o = typeof t === "function";
  if (t && (o || Object.keys(t).length > 0)) {
    n = XXl(e.name);
    let i,
      a = e.getPromptForCommand;
    r = async (l, c) => {
      i ??= (async () => {
        let p = o ? await t() : t;
        return F8f(e.name, p);
      })();
      let u = await i,
        d = await a(l, c);
      if (u === null) return d;
      return z8f(d, u);
    };
  }
  let s = {
    type: "prompt",
    name: e.name,
    description: typeof e.description === "function" ? "" : e.description,
    menuDescription: e.menuDescription,
    aliases: e.aliases,
    subcommands: e.subcommands,
    hasUserSpecifiedDescription: !0,
    allowedTools: e.allowedTools ?? [],
    disallowedTools: e.disallowedTools ?? [],
    argumentHint: typeof e.argumentHint === "function" ? void 0 : e.argumentHint,
    whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse,
    model: e.model,
    disableModelInvocation: e.disableModelInvocation ?? !1,
    userInvocable: e.userInvocable ?? !0,
    contentLength: 0,
    source: "bundled",
    loadedFrom: "bundled",
    hooks: e.hooks,
    skillRoot: n,
    context: e.context,
    agent: e.agent,
    isEnabled: e.isEnabled,
    isHidden: !(e.userInvocable ?? !0),
    progressMessage: e.progressMessage ?? "running",
    getPromptForCommand: r,
    getEffort: e.getEffort,
    getArgumentCompletions: e.getArgumentCompletions,
  };
  (K0e(s, "description", e.description),
    K0e(s, "argumentHint", e.argumentHint),
    K0e(s, "whenToUse", e.whenToUse),
    YXl.push(s));
}
function k4o() {
  if (G6()) return [];
  return [...YXl];
}
function XXl(e) {
  return $se.join(eir(), e);
}
async function F8f(e, t) {
  let n = XXl(e);
  try {
    return (await j8f(n, t), xe("skill_bundled_extract"), n);
  } catch (r) {
    return (
      T(
        `Failed to extract bundled skill '${e}' to ${n}: ${r instanceof Error ? r.message : String(r)}`,
      ),
      Le("skill_bundled_extract", "skill_bundled_extract_write_failed"),
      null
    );
  }
}
async function j8f(e, t) {
  let n = new Map();
  for (let [r, o] of Object.entries(t)) {
    let s = V8f(e, r),
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
function V8f(e, t) {
  let n = $se.normalize(t);
  if ($se.isAbsolute(n) || n.split($se.sep).includes("..") || n.split("/").includes(".."))
    throw Error(`bundled skill file path escapes skill dir: ${t}`);
  return $se.join(e, n);
}
function z8f(e, t) {
  let n = `Base directory for this skill: ${t}

`;
  if (e.length > 0 && e[0].type === "text")
    return [
      {
        type: "text",
        text: n + e[0].text,
      },
      ...e.slice(1),
    ];
  return [
    {
      type: "text",
      text: n,
    },
    ...e,
  ];
}
var IJt, Zsr, $se, YXl, G8f, W8f;
