// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aDo
// matched 2.1.88 source: src/skills/loadSkillsDir.ts
// class=modified  jaccard=0.229  score=0.3208  fileCov=0.4447
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function $Sf(e, t) {
  if (t === "policySettings") return !1;
  return e === "skills" || e === "commands_DEPRECATED" || e === "plugin";
}
function getSkillsPath(source, dir) {
  switch (source) {
    case "policySettings":
      return rm.join(QC(), ".claude", dir);
    case "userSettings":
      return rm.join(tr(), dir);
    case "projectSettings":
      return `.claude/${dir}`;
    case "plugin":
      return "plugin";
    default:
      return "";
  }
}
function cDo(e) {
  return [e.name, e.description, e.whenToUse].filter(Boolean).join(" ");
}
function fKt(e, t) {
  return If(cDo(e), t);
}
async function OSf(e) {
  try {
    return await lDo.realpath(e);
  } catch {
    return null;
  }
}
function parseHooksFromFrontmatter(frontmatter, skillName) {
  if (!frontmatter.hooks) return;
  let n = IG().safeParse(frontmatter.hooks);
  if (!n.success) {
    T(`Invalid hooks in skill '${skillName}': ${n.error.message}`);
    return;
  }
  return n.data;
}
function BSf(e) {
  if (!e.paths) return;
  let t = HNt(e.paths)
    .map((n) => (n.endsWith("/**") ? n.slice(0, -3) : n))
    .filter((n) => n.length > 0);
  if (t.length === 0 || t.every((n) => n === "**")) return;
  return t;
}
function parseSkillFrontmatterFields(frontmatter, markdownContent, resolvedName, r = "Skill") {
  let o = AU(frontmatter.description, resolvedName),
    s = o ?? ffe(markdownContent, r),
    i = frontmatter["user-invocable"] === void 0 ? !0 : qst(frontmatter["user-invocable"]),
    a = frontmatter.model,
    l;
  if (typeof a === "string" && a.trim().length > 0) {
    let d = a.trim();
    l = d === "inherit" ? void 0 : zo(d);
  }
  let c = frontmatter.effort,
    u = c !== void 0 ? TU(c) : void 0;
  if (c !== void 0 && u === void 0)
    T(
      `Skill ${resolvedName} has invalid effort '${c}'. Valid options: ${xv.join(", ")} or an integer`,
    );
  return {
    displayName: frontmatter.name != null ? String(frontmatter.name) : void 0,
    description: s,
    hasUserSpecifiedDescription: o !== null,
    allowedTools: kQ(frontmatter["allowed-tools"]),
    disallowedTools: kQ(frontmatter["disallowed-tools"] ?? frontmatter.disallowedTools),
    argumentHint:
      frontmatter["argument-hint"] != null ? String(frontmatter["argument-hint"]) : void 0,
    argumentNames: P2n(frontmatter.arguments),
    whenToUse: frontmatter.when_to_use != null ? String(frontmatter.when_to_use) : void 0,
    version: frontmatter.version != null ? String(frontmatter.version) : void 0,
    model: l,
    disableModelInvocation: qst(frontmatter["disable-model-invocation"]),
    userInvocable: i,
    hooks: parseHooksFromFrontmatter(frontmatter, resolvedName),
    executionContext: frontmatter.context === "fork" ? "fork" : void 0,
    agent: frontmatter.agent != null ? String(frontmatter.agent) : void 0,
    effort: u,
    shell: Okn(frontmatter.shell, resolvedName),
    createdBy:
      frontmatter.created_by === "dream-proposal" || frontmatter.improved_by === "dream-proposal"
        ? "dream-proposal"
        : void 0,
    declaredFields: $kn(frontmatter),
    fallback: C3e(frontmatter.fallback),
  };
}
function USf(e) {
  let t = e.directoryRead
    ? ` Call ${aJ} on "${e.uri}" or a subdirectory URI to list its contents.`
    : "";
  return (
    `This skill is served by MCP server "${e.server}" at ${e.uri}. ` +
    `To read a supporting file this skill references by a relative path \u2014 for example "templates/invoice.md" \u2014 call ${ide} with server "${e.server}" and uri "${e.uri}/templates/invoice.md".${t}`
  );
}
function createSkillCommand({
  skillName: e,
  displayName: t,
  description: n,
  hasUserSpecifiedDescription: r,
  markdownContent: o,
  contentHash: s,
  allowedTools: i,
  disallowedTools: a,
  argumentHint: l,
  argumentNames: c,
  whenToUse: u,
  version: d,
  model: p,
  disableModelInvocation: f,
  userInvocable: m,
  source: g,
  baseDir: h,
  mcpResourceRoot: y,
  loadedFrom: b,
  hooks: _,
  executionContext: S,
  agent: A,
  paths: v,
  effort: C,
  shell: x,
  createdBy: I,
  declaredFields: k,
  fallback: D,
}) {
  if (h && i.length > 0) {
    let P = h;
    i = i.map((O) => O.replace(/\$\{CLAUDE_SKILL_DIR\}/g, () => P));
  }
  return {
    type: "prompt",
    name: e,
    description: n,
    hasUserSpecifiedDescription: r,
    allowedTools: i,
    disallowedTools: a?.length ? a : void 0,
    argumentHint: l,
    argNames: c.length > 0 ? c : void 0,
    whenToUse: u,
    version: d,
    model: p,
    disableModelInvocation: f,
    userInvocable: m,
    context: S,
    agent: A,
    effort: C,
    paths: v,
    declaredFields: k,
    contentLength: o.length,
    contentHash: s ?? Bun.hash(o).toString(36),
    isHidden: !m,
    progressMessage: "running",
    userFacingName() {
      return t || e;
    },
    source: g,
    loadedFrom: b,
    createdBy: I,
    fallback: D,
    hooks: _,
    skillRoot: h,
    async getPromptForCommand(P, O) {
      let L = h
        ? `Base directory for this skill: ${h}

${o}`
        : y
          ? `${USf(y)}

${o}`
          : o;
      if (((L = Rpt(L, P, !0, c, c6)), h)) {
        let M = h;
        L = L.replaceAll("${CLAUDE_SKILL_DIR}", M);
      }
      if (
        ((L = L.replace(/\$\{CLAUDE_SESSION_ID\}/g, Rt())),
        (L = L.replaceAll("${CLAUDE_EFFORT}", RM(p ?? O.options.mainLoopModel, C ?? gg(O)))),
        $Sf(b, g) && EJn())
      )
        L = AJn(L);
      else if (b !== "mcp")
        L = await pfe(
          L,
          {
            ...O,
            getAppState() {
              let M = O.getAppState();
              return {
                ...M,
                toolPermissionContext: {
                  ...M.toolPermissionContext,
                  alwaysAllowRules: {
                    ...M.toolPermissionContext.alwaysAllowRules,
                    command: i,
                  },
                },
              };
            },
          },
          `/${e}`,
          x,
        );
      return [
        {
          type: "text",
          text: L,
        },
      ];
    },
  };
}
async function zbt(e, t) {
  let fs = qt(),
    r;
  try {
    r = await fs.readdir(e);
  } catch (a) {
    if (!Vo(a))
      (T(`Failed to read skills directory ${e}: ${a}`, {
        level: "error",
      }),
        It("skill_load_dir", "skill_load_readdir_failed"));
    return [];
  }
  if (r.length === 0 && e.startsWith("/mnt/")) {
    await Nn(250);
    try {
      let a = await fs.readdir(e);
      if (a.length > 0)
        (T(
          `Skills directory ${e}: first readdir was empty, retry returned ${a.length} entries (transient mount race)`,
          {
            level: "warn",
          },
        ),
          It("skill_load_dir", "skill_load_mnt_transient_empty"),
          (r = a));
      else It("skill_load_dir", "skill_load_mnt_persistent_empty");
    } catch (a) {
      let l = xd(a);
      if ((It("skill_load_dir", `skill_load_mnt_retry_${(l ?? "unknown").toLowerCase()}`), !Vo(a)))
        T(`Skills directory ${e}: retry readdir failed: ${a}`, {
          level: "error",
        });
    }
  }
  let o = null,
    s = new Set();
  {
    let a = `@${JE}`;
    if (
      (t === "userSettings" && e === rm.join(tr(), "skills")) ||
      (t === "projectSettings" && e === rm.join(yr(), ".claude", "skills"))
    ) {
      let c = Dr().enabledPlugins;
      for (let u in c) if (c[u] === !1 && u.endsWith(a)) s.add(u.slice(0, -a.length));
    }
  }
  let i = await Promise.all(
    r.map(async (a) => {
      try {
        if (!a.isDirectory() && !a.isSymbolicLink()) return null;
        let l = rm.join(e, a.name),
          c = rm.join(l, "SKILL.md");
        if (s.size > 0) {
          let _ = a.name;
          try {
            let S = await fs.readFile(rm.join(l, ".claude-plugin", "plugin.json"), {
                encoding: "utf-8",
              }),
              A = JSON.parse(S);
            if (
              A !== null &&
              typeof A === "object" &&
              "name" in A &&
              typeof A.name === "string" &&
              A.name
            )
              _ = A.name;
          } catch (S) {
            if (!wn(S));
            else _ = null;
          }
          if (_ !== null && s.has(_)) return null;
        }
        let u = 0;
        try {
          u = (await fs.stat(c)).size ?? 0;
        } catch {}
        if (u > dJ)
          return (
            T(`[skills] skipping ${c}: ${u} bytes exceeds ${dJ} byte limit`, {
              level: "warn",
            }),
            (o = "skill_load_too_large"),
            null
          );
        let d;
        try {
          d = await fs.readFile(c, {
            encoding: "utf-8",
          });
        } catch (_) {
          if (!wn(_))
            (T(`[skills] failed to read ${c}: ${_}`, {
              level: "warn",
            }),
              (o = "skill_load_read_failed"));
          return null;
        }
        let {
          frontmatter: p,
          content: f,
          parseError: m,
        } = Bm(d, c, {
          normalizeKeys: !0,
        });
        if (m)
          (T(`[skills] YAML frontmatter in ${c} failed to parse and was ignored: ${m}`, {
            level: "error",
          }),
            It("skill_load_dir", "skill_load_yaml_failed"));
        let g = rHe(c, f),
          h = a.name;
        w3e("skill", p);
        let y = parseSkillFrontmatterFields(p, g, h),
          b = BSf(p);
        return {
          skill: createSkillCommand({
            ...y,
            skillName: h,
            markdownContent: g,
            contentHash: Bun.hash(d).toString(36),
            source: t,
            baseDir: l,
            loadedFrom: "skills",
            paths: b,
          }),
          filePath: c,
        };
      } catch (l) {
        return (
          T(`[skills] failed to parse ${rm.join(e, a.name, "SKILL.md")}: ${l}`, {
            level: "error",
          }),
          (o = "skill_load_parse_failed"),
          null
        );
      }
    }),
  );
  if (o) Le("skill_load_dir", o);
  else xe("skill_load_dir");
  return i.filter((a) => a !== null).sort((a, l) => a.skill.name.localeCompare(l.skill.name));
}
function dDo(e) {
  return /^skill\.md$/i.test(rm.basename(e));
}
function transformSkillFiles(files) {
  let filesByDir = new Map();
  for (let r of files) {
    let o = rm.dirname(r.filePath),
      s = filesByDir.get(o) ?? [];
    (s.push(r), filesByDir.set(o, s));
  }
  let n = [];
  for (let [r, o] of filesByDir) {
    let s = o.filter((i) => dDo(i.filePath));
    if (s.length > 0) {
      let i = s[0];
      if (s.length > 1) T(`Multiple skill files found in ${r}, using ${rm.basename(i.filePath)}`);
      n.push(i);
    } else n.push(...o);
  }
  return n;
}
function KTl(e, t) {
  let n = t.endsWith(rm.sep) ? t.slice(0, -1) : t;
  if (!e.startsWith(n + rm.sep)) return "";
  let r = e.slice(n.length + 1);
  return r ? r.split(rm.sep).join(":") : "";
}
function jSf(e, t) {
  let n = rm.dirname(e),
    r = rm.dirname(n),
    o = rm.basename(n),
    s = KTl(r, t);
  return s ? `${s}:${o}` : o;
}
function GSf(e, t) {
  let n = rm.basename(e),
    r = rm.dirname(e),
    o = n.replace(/\.md$/, ""),
    s = KTl(r, t);
  return s ? `${s}:${o}` : o;
}
function WSf(e) {
  return dDo(e.filePath) ? jSf(e.filePath, e.baseDir) : GSf(e.filePath, e.baseDir);
}
async function loadSkillsFromCommandsDir(cwd, t) {
  try {
    let [n, r] = await Promise.all([
        _q("commands", cwd),
        Promise.all(
          t.map((l) => {
            let c = rm.join(l, ".claude", "commands");
            return Kbt(c).then((u) =>
              u.map((d) => ({
                ...d,
                baseDir: c,
                source: "projectSettings",
              })),
            );
          }),
        ),
      ]),
      o = [...n, ...r.flat()],
      s = transformSkillFiles(o),
      i = [],
      a = !1;
    for (let { baseDir: l, filePath: c, frontmatter: u, content: d, source: p } of s)
      try {
        let m = dDo(c) ? rm.dirname(c) : void 0,
          g = WSf({
            baseDir: l,
            filePath: c,
            frontmatter: u,
            content: d,
            source: p,
          });
        w3e("skill", u);
        let h = parseSkillFrontmatterFields(u, d, g, "Custom command");
        i.push({
          skill: createSkillCommand({
            ...h,
            skillName: g,
            displayName: void 0,
            markdownContent: rHe(c, d),
            source: p,
            baseDir: m,
            loadedFrom: "commands_DEPRECATED",
            paths: void 0,
          }),
          filePath: c,
        });
      } catch (f) {
        (T(`[skills] failed to load command from ${c}: ${f}`, {
          level: "error",
        }),
          (a = !0));
      }
    if (a) Le("skill_load_commands_dir", "skill_load_commands_parse_failed");
    else xe("skill_load_commands_dir");
    return i.sort((l, c) => l.skill.name.localeCompare(c.skill.name));
  } catch (n) {
    if (gd(n))
      T(`[skills] commands-dir load failed: ${n.code}`, {
        level: "error",
      });
    else ke(n);
    return (It("skill_load_commands_dir", "skill_load_commands_dir_failed"), []);
  }
}
async function YTl() {
  if (VE("skills") || !Om("userSettings") || md() || lc("skills")) return null;
  let e = rm.join(tr(), "skills"),
    t;
  try {
    t = await qt().readdir(e);
  } catch {
    return null;
  }
  let n = `@${JE}`,
    r = Dr().enabledPlugins,
    o = new Set();
  for (let i in r) if (r[i] === !1 && i.endsWith(n)) o.add(i.slice(0, -n.length));
  let s = await Promise.all(
    t.map(async (i) => {
      if (!i.isDirectory() && !i.isSymbolicLink()) return null;
      if (o.has(i.name)) return null;
      try {
        return await lDo.realpath(rm.join(e, i.name, "SKILL.md"));
      } catch {
        return null;
      }
    }),
  );
  return new Set(s.filter((i) => i !== null));
}
function bze() {
  (yze.cache?.clear?.(), _q.cache?.clear?.());
  let e = yKt();
  if (e) (e.conditionalSkills.clear(), e.activatedConditionalSkillNames.clear());
}
function pDo() {
  return {
    dynamicSkillDirs: new Set(),
    dynamicSkills: new Map(),
    conditionalSkills: new Map(),
    activatedConditionalSkillNames: new Set(),
  };
}
function hKt() {
  return gKt();
}
function yq() {
  let e = gKt(),
    t = HJn.get(e);
  if (!t) ((t = pDo()), HJn.set(e, t));
  return t;
}
function yKt() {
  return HJn.get(gKt()) ?? null;
}
function XTl(e) {
  HJn.set(gKt(), e);
}
function JTl(e) {
  return fDo.subscribe(() => {
    try {
      e();
    } catch (t) {
      ke(t);
    }
  });
}
async function discoverSkillDirsForPaths(filePaths, cwd) {
  if (lc("skills")) return [];
  let n = qt(),
    r = cwd.endsWith(rm.sep) ? cwd.slice(0, -1) : cwd,
    o = [];
  for (let s of filePaths) {
    let i = rm.dirname(s);
    while (i.startsWith(r + rm.sep)) {
      let a = rm.join(i, ".claude", "skills");
      if (!yq().dynamicSkillDirs.has(a)) {
        yq().dynamicSkillDirs.add(a);
        try {
          if ((await n.stat(a), await Efn(i, r))) {
            T(`[skills] Skipped gitignored skills dir: ${a}`);
            continue;
          }
          o.push(a);
        } catch {}
      }
      let l = rm.dirname(i);
      if (l === i) break;
      i = l;
    }
  }
  return o;
}
function QTl(e) {
  return `${e.type === "prompt" ? (e.skillRoot ?? "") : ""}\x00${e.name}`;
}
async function addSkillDirectories(dirs) {
  if (lc("skills") || !Om("projectSettings") || VE("skills")) {
    T("[skills] Dynamic skill discovery skipped: projectSettings disabled or plugin-only policy");
    return;
  }
  if (dirs.length === 0) return;
  let previousSkillNamesForLogging = new Set(yq().dynamicSkills.keys()),
    n = await Promise.all(dirs.map((o) => zbt(o, "projectSettings")));
  for (let o of n)
    for (let { skill: s } of o) if (s.type === "prompt") yq().dynamicSkills.set(QTl(s), s);
  let r = n.flat().length;
  if (r > 0) {
    let o = [...yq().dynamicSkills.keys()].filter((s) => !previousSkillNamesForLogging.has(s));
    if (
      (T(`[skills] Dynamically discovered ${r} skills from ${dirs.length} directories`),
      o.length > 0)
    )
      G("tengu_dynamic_skills_changed", {
        source: We("file_operation"),
        previousCount: previousSkillNamesForLogging.size,
        newCount: yq().dynamicSkills.size,
        addedCount: o.length,
        directoryCount: dirs.length,
      });
  }
  fDo.emit();
}
function ZTl() {
  return Array.from(yKt()?.dynamicSkills.entries() ?? [])
    .sort(([e, t], [n, r]) =>
      t.name === r.name ? e.localeCompare(n) : t.name.localeCompare(r.name),
    )
    .map(([, e]) => e);
}
function activateConditionalSkillsForPaths(filePaths, cwd) {
  if ((yKt()?.conditionalSkills.size ?? 0) === 0) return [];
  let activated = [];
  for (let [r, o] of yq().conditionalSkills) {
    if (o.type !== "prompt" || !o.paths || o.paths.length === 0) continue;
    let s = zTl.default().add(o.paths);
    for (let i of filePaths) {
      let a = rm.isAbsolute(i) ? rm.relative(cwd, i) : i;
      if (!a || a.startsWith("..") || rm.isAbsolute(a)) continue;
      if (s.ignores(a)) {
        (yq().dynamicSkills.set(QTl(o), o),
          yq().conditionalSkills.delete(r),
          yq().activatedConditionalSkillNames.add(r),
          activated.push(r),
          T(`[skills] Activated conditional skill '${r}' (matched path: ${a})`));
        break;
      }
    }
  }
  if (activated.length > 0)
    (G("tengu_dynamic_skills_changed", {
      source: We("conditional_paths"),
      previousCount: yq().dynamicSkills.size - activated.length,
      newCount: yq().dynamicSkills.size,
      addedCount: activated.length,
      directoryCount: 0,
    }),
      fDo.emit());
  return activated;
}
function evl() {
  return Array.from(yKt()?.conditionalSkills.values() ?? []);
}
function tvl() {
  let e = yKt();
  if (!e) return;
  (e.dynamicSkillDirs.clear(),
    e.dynamicSkills.clear(),
    e.conditionalSkills.clear(),
    e.activatedConditionalSkillNames.clear());
}
var lDo,
  zTl,
  rm,
  yze,
  VSf = "cli",
  gKt = () => VSf,
  HJn,
  fDo;
