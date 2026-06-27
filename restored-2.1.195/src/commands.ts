// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MWo
// matched 2.1.88 source: src/commands.ts
// class=modified  jaccard=0.0979  score=0.467  fileCov=0.1102
// note: deminified; 37 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var MWo = E(() => {
  Jt();
  U6t();
  HU();
});
var fjo = {};
_t(fjo, {
  toSlashCommands: () => toSlashCommands,
  shippedCommandNames: () => shippedCommandNames,
  scopedSkillName: () => scopedSkillName,
  routeThinClientCommand: () => routeThinClientCommand,
  meetsAvailabilityRequirement: () => meetsAvailabilityRequirement,
  isThinClientSafe: () => isThinClientSafe,
  isSkillToolCommand: () => isSkillToolCommand,
  isSkillOff: () => isSkillOff,
  isSkillExcludedFromModel: () => isSkillExcludedFromModel,
  isCommandEnabled: () => Ik,
  isBridgeSafeCommand: () => isBridgeSafeCommand,
  isBridgeDispatchable: () => isBridgeDispatchable,
  hasCommand: () => hasCommand,
  getSlashCommandToolSkills: () => getSlashCommandToolSkills,
  getSkillToolCommands: () => getSkillToolCommands,
  getSkillOverride: () => getSkillOverride,
  getMcpSkillCommands: () => getMcpSkillCommands,
  getDynamicSkillStateKey: () => hKt,
  getCommands: () => getCommands,
  getCommandName: () => xu,
  getCommand: () => getCommand,
  getBuiltinCommands: () => getBuiltinCommands,
  formatDescriptionWithSource: () => formatDescriptionWithSource,
  fleetHostCommands: () => fleetHostCommands,
  findCommand: () => findCommand,
  findBridgeFallback: () => findBridgeFallback,
  filterSkillCommandsByAllowlist: () => filterSkillCommandsByAllowlist,
  filterCommandsForRemoteMode: () => filterCommandsForRemoteMode,
  filterCommandsForHeadless: () => filterCommandsForHeadless,
  dropShadowedFallbackSkills: () => dropShadowedFallbackSkills,
  dropShadowedBundledSkills: () => dropShadowedBundledSkills,
  deriveRequires: () => deriveRequires,
  clearCommandsCache: () => clearCommandsCache,
  clearCommandMemoizationCaches: () => clearCommandMemoizationCaches,
  builtInCommandNames: () => builtInCommandNames,
  attributionSkillName: () => attributionSkillName,
  _resetFallbackTelemetryForTesting: () => bZf,
  REMOTE_SAFE_COMMANDS: () => REMOTE_SAFE_COMMANDS,
  INTERNAL_ONLY_COMMANDS: () => INTERNAL_ONLY_COMMANDS,
  BRIDGE_SAFE_COMMANDS: () => BRIDGE_SAFE_COMMANDS,
  ANT_GATED_COMMANDS: () => ANT_GATED_COMMANDS,
});
function getBuiltinCommands() {
  return qQt();
}
async function mZf(e) {
  let t = null;
  try {
    let [n, r] = await Promise.all([
        yze(e).catch((i) => {
          if (gd(i))
            T(`Skill directory commands failed to load (${i.code}), continuing without them`, {
              level: "error",
            });
          else (ke(Zr(i)), T("Skill directory commands failed to load, continuing without them"));
          return ((t = "cmd_load_skill_dir_failed"), []);
        }),
        m$o().catch(
          (i) => (
            ke(Zr(i)),
            (t = "cmd_load_plugin_skills_failed"),
            T("Plugin skills failed to load, continuing without them"),
            []
          ),
        ),
      ]),
      o = k4o(),
      s = _Ki();
    if (
      (T(
        `getSkills returning: ${n.length} skill dir commands, ${r.length} plugin skills, ${o.length} bundled skills, ${s.length} builtin plugin skills`,
      ),
      t)
    )
      Le("cmd_load", t);
    else xe("cmd_load");
    return {
      skillDirCommands: n,
      pluginSkills: r,
      bundledSkills: o,
      builtinPluginSkills: s,
    };
  } catch (n) {
    return (
      ke(Zr(n)),
      It("cmd_load", "cmd_load_skills_failed"),
      T("Unexpected error in getSkills, returning empty"),
      {
        skillDirCommands: [],
        pluginSkills: [],
        bundledSkills: [],
        builtinPluginSkills: [],
      }
    );
  }
}
function meetsAvailabilityRequirement(e) {
  if (!e.availability) return !0;
  for (let t of e.availability)
    switch (t) {
      case "claude-ai":
        if (bo()) return !0;
        break;
      case "console":
        if (!bo() && !g7() && _u()) return !0;
        break;
      default: {
        let n = t;
        break;
      }
    }
  return !1;
}
function GWo(e) {
  return `${hKt()}:${G6()}:${e}`;
}
async function getCommands(e) {
  let t = await olr(e),
    n = ZTl(),
    r = DMe() ? yrl() : [],
    o = t.filter((g) => meetsAvailabilityRequirement(g) && Ik(g));
  if (n.length === 0 && r.length === 0) return o;
  let s = n.filter((g) => meetsAvailabilityRequirement(g) && Ik(g)),
    i = new Set(),
    a = new Set();
  for (let g of o) if ((i.add(g.name), g.type === "prompt" && g.skillRoot)) a.add(g.skillRoot);
  let l = new Map();
  for (let g of s) {
    if (g.type === "prompt" && g.fallback) continue;
    l.set(g.name, (l.get(g.name) ?? 0) + 1);
  }
  let c = [],
    u = new Set();
  for (let g of s) {
    if (g.type === "prompt" && g.skillRoot && a.has(g.skillRoot)) continue;
    let h = hZf(g, e),
      y = i.has(g.name);
    if (g.type === "prompt" && g.fallback) {
      if (y || (l.get(g.name) ?? 0) > 0 || u.has(g.name)) continue;
      (c.push(h ? zoc(g, h) : g), u.add(g.name));
      continue;
    }
    if (!(y || (l.get(g.name) ?? 0) > 1)) {
      (c.push(h ? zoc(g, h) : g), u.add(g.name));
      continue;
    }
    if (!h) {
      if (y || u.has(g.name)) continue;
      (c.push(g), u.add(g.name));
      continue;
    }
    let _ = scopedSkillName(h, g.name);
    if (i.has(_) || u.has(_)) continue;
    (c.push(yZf(g, h, y || u.has(g.name))), u.add(_));
  }
  let d = r.filter(
      (g) => !i.has(g.name) && !u.has(g.name) && meetsAvailabilityRequirement(g) && Ik(g),
    ),
    p = [...c, ...d];
  if (p.length === 0) return o;
  let f = new Set(qQt().map((g) => g.name)),
    m = o.findIndex((g) => f.has(g.name));
  if (m === -1) return dropShadowedFallbackSkills([...o, ...p]);
  return dropShadowedFallbackSkills([...o.slice(0, m), ...p, ...o.slice(m)]);
}
function hZf(e, t) {
  if (e.type !== "prompt" || !e.skillRoot) return null;
  let n = `${K1e.sep}.claude${K1e.sep}`,
    r = e.skillRoot.lastIndexOf(n);
  if (r === -1) return null;
  let o = e.skillRoot.slice(0, r),
    s = K1e.relative(t, o);
  if (!s || s.startsWith("..") || K1e.isAbsolute(s)) return null;
  return s.split(K1e.sep).join("/");
}
function scopedSkillName(e, t) {
  return `${e}:${t}`;
}
function attributionSkillName(e) {
  return e.type === "prompt" && e.unqualifiedName != null ? e.unqualifiedName : e.name;
}
function zoc(e, t) {
  if (e.type !== "prompt") return e;
  return {
    ...e,
    description: `${e.description} (from ${t}/.claude/skills \u2014 applies when working on files under ${t}/)`,
  };
}
function yZf(e, t, n) {
  if (e.type !== "prompt") return e;
  let r = scopedSkillName(t, e.name),
    o = n
      ? `scoped to ${t}/ \u2014 use this instead of the unscoped "${e.name}" skill when the files being changed are under ${t}/`
      : `from ${t}/.claude/skills \u2014 applies when working on files under ${t}/`;
  return {
    ...e,
    name: r,
    unqualifiedName: e.name,
    aliases: void 0,
    userFacingName: () => r,
    description: `${e.description} (${o})`,
  };
}
function clearCommandMemoizationCaches() {
  (olr.cache?.clear?.(),
    getSkillToolCommands.cache?.clear?.(),
    getSlashCommandToolSkills.cache?.clear?.(),
    gZf?.(),
    Promise.resolve()
      .then(() => (bBo(), _Bo))
      .then(
        (e) => e.clearSkillIndexCache(),
        () => {},
      ));
}
function clearCommandsCache() {
  (clearCommandMemoizationCaches(), KZn(), J0l(), bze());
}
function bZf() {
  _Zf.clear();
}
function dropShadowedFallbackSkills(e) {
  let t = new Set(),
    n = !1;
  for (let r of e) {
    if (
      r.type !== "prompt" ||
      (r.loadedFrom !== "plugin" && r.loadedFrom !== "bundled" && r.loadedFrom !== "mcp")
    )
      continue;
    if (r.disableModelInvocation || isSkillExcludedFromModel(r)) continue;
    if (r.loadedFrom === "mcp") n = !0;
    let o = r.name.lastIndexOf(":");
    if (o > 0) t.add(r.name.slice(o + 1));
  }
  if (t.size === 0) return e;
  return e.filter((r) => {
    if (r.type !== "prompt" || !r.fallback) return !0;
    if (!t.has(r.name)) return !0;
    return (
      T(
        `Dropping fallback skill '${r.name}' \u2014 a plugin/MCP skill with the same suffix is loaded`,
      ),
      !1
    );
  });
}
function dropShadowedBundledSkills(e) {
  if ($Wo?.input === e) return $Wo.output;
  let t = new Set(),
    n = !1,
    r = e.filter((s) => {
      if (s.type === "prompt" && s.source === "bundled" && t.has(s.name)) return ((n = !0), !1);
      return (t.add(s.name), !0);
    }),
    o = n ? r : e;
  return (
    ($Wo = {
      input: e,
      output: o,
    }),
    o
  );
}
function getMcpSkillCommands(e) {
  if (N2()) return [];
  if (hk())
    return e.filter(
      (t) =>
        t.type === "prompt" &&
        t.loadedFrom === "mcp" &&
        !t.disableModelInvocation &&
        !isSkillExcludedFromModel(t),
    );
  return [];
}
function getSkillOverride(e) {
  if (e.type !== "prompt" || e.source === "plugin") return "on";
  let t = Dr(),
    n = t.skillOverrides,
    r = n?.[e.name] ?? (e.unqualifiedName != null ? n?.[e.unqualifiedName] : void 0) ?? "on";
  if (w6n(e, t)) return r === "off" ? "off" : "user-invocable-only";
  return r;
}
function isSkillExcludedFromModel(e) {
  let t = getSkillOverride(e);
  return t === "user-invocable-only" || t === "off";
}
function isSkillOff(e) {
  return getSkillOverride(e) === "off";
}
function isSkillToolCommand(e) {
  return (
    e.type === "prompt" &&
    !e.disableModelInvocation &&
    !isSkillExcludedFromModel(e) &&
    (e.source === "builtin" ||
      e.loadedFrom === "bundled" ||
      e.loadedFrom === "skills" ||
      e.loadedFrom === "commands_DEPRECATED" ||
      e.hasUserSpecifiedDescription ||
      !!e.whenToUse)
  );
}
function isBridgeSafeCommand(e) {
  if (e.type === "local-jsx") return !1;
  if (e.type === "prompt") return !0;
  return BRIDGE_SAFE_COMMANDS.has(e);
}
function findBridgeFallback(e) {
  if (e.type !== "local-jsx") return;
  for (let t of BRIDGE_SAFE_COMMANDS) if (t.name === e.name && t.type === "local") return t;
  return;
}
function isBridgeDispatchable(e) {
  return isBridgeSafeCommand(e) || findBridgeFallback(e) !== void 0;
}
function deriveRequires(e) {
  if (e.requires)
    return {
      workspace: e.requires.workspace ?? !1,
      ink: e.requires.ink ?? !1,
    };
  switch (e.type) {
    case "prompt":
      return {
        workspace: !1,
        ink: !1,
      };
    case "local":
      return {
        workspace: !0,
        ink: !1,
      };
    case "local-jsx":
      return {
        workspace: !0,
        ink: !0,
      };
  }
}
function isThinClientSafe(e) {
  return !deriveRequires(e).workspace || e.thinClientDispatch !== void 0;
}
function routeThinClientCommand(e, t) {
  if (e.type === "prompt") return "post-text";
  switch (e.thinClientDispatch) {
    case "post-text":
      return "post-text";
    case "control-request":
    case "local-then-rpc":
      return e.type === "local" && !t ? "unavailable" : "local";
    case "twin":
      return "post-text";
    case void 0:
      return e.type === "local-jsx" ? "local" : "post-text";
  }
}
function filterCommandsForRemoteMode(e) {
  return e.filter(
    (t) =>
      (t.type === "prompt" &&
        (t.source === "builtin" || t.source === "bundled") &&
        isThinClientSafe(t)) ||
      REMOTE_SAFE_COMMANDS.has(t),
  );
}
function filterCommandsForHeadless(e) {
  if (N2()) return [];
  return e.filter(
    (t) =>
      (t.type === "prompt" && !t.disableNonInteractive) ||
      (t.type === "local" && t.supportsNonInteractive),
  );
}
function Zoc(e, t) {
  return e.name === t || xu(e) === t || (e.aliases?.includes(t) ?? !1);
}
function findCommand(e, t) {
  return t.find((n) => Zoc(n, e));
}
function hasCommand(e, t) {
  return findCommand(e, t) !== void 0;
}
function filterSkillCommandsByAllowlist(e, t) {
  if (t === void 0) return e;
  return e.filter((n) => t.some((r) => Zoc(n, r) || n.name.endsWith(`:${r}`)));
}
function getCommand(e, t) {
  let n = findCommand(e, t);
  if (!n)
    throw ReferenceError(
      `Command ${e} not found. Available commands: ${t
        .map((r) => {
          let o = xu(r);
          return r.aliases ? `${o} (aliases: ${r.aliases.join(", ")})` : o;
        })
        .sort((r, o) => r.localeCompare(o))
        .join(", ")}`,
    );
  return n;
}
function formatDescriptionWithSource(e) {
  if (e.type !== "prompt") return e.description;
  if (e.kind === "workflow") return `${e.description} (dynamic workflow)`;
  if (e.source === "plugin") {
    let t = e.pluginInfo?.pluginManifest;
    if (t) return `(${fS(t)}) ${e.description}`;
    return `${e.description} (plugin)`;
  }
  if (e.source === "builtin" || e.source === "mcp" || e.source === "bundled") return e.description;
  return `${e.description} (${wG(e.source)})`;
}
function toSlashCommands(e) {
  return e
    .filter((t) => t.userInvocable !== !1)
    .map((t) => ({
      name: xu(t),
      description: formatDescriptionWithSource(t),
      argumentHint: t.argumentHint || "",
      aliases: t.aliases?.length ? t.aliases : void 0,
    }));
}
var K1e,
  OWo = null,
  aZf,
  Noc,
  Zar,
  Boc,
  jHt,
  GHt = null,
  WQt = null,
  NWo = null,
  BWo = null,
  UWo = null,
  Koc,
  lZf,
  FWo,
  Uoc,
  cZf,
  uZf,
  Foc,
  elr = null,
  Yoc = null,
  tlr,
  joc,
  Goc,
  Xoc,
  Woc,
  qoc,
  nlr = null,
  rlr = null,
  dZf,
  INTERNAL_ONLY_COMMANDS,
  ANT_GATED_COMMANDS,
  qQt,
  builtInCommandNames,
  shippedCommandNames,
  Voc,
  gZf,
  olr,
  _Zf,
  $Wo = null,
  getSkillToolCommands,
  getSlashCommandToolSkills,
  REMOTE_SAFE_COMMANDS,
  BRIDGE_SAFE_COMMANDS,
  fleetHostCommands;
