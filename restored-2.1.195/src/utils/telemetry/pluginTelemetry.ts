// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aS
// matched 2.1.88 source: src/utils/telemetry/pluginTelemetry.ts
// class=modified  jaccard=0.2973  score=0.3764  fileCov=0.5861
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Abe(e, t) {
  let n = t ? `${e}@${t.toLowerCase()}` : e;
  return eFt(n);
}
function getTelemetryPluginScope(name, marketplace, managedNames) {
  if (marketplace === FKd) return "default-bundle";
  if (zD(marketplace)) return "official";
  if (marketplace !== void 0 && JRt.has(marketplace.toLowerCase())) return "community";
  if (managedNames?.has(name)) return "org";
  return "user-local";
}
function Q0e(e) {
  return e === "official" || e === "default-bundle";
}
function jKd(e) {
  return Q0e(e) || e === "community";
}
function aFt(e, t, n) {
  let r = t?.type === "prompt" ? t.source : void 0,
    o = t?.type === "prompt" ? t.pluginInfo : void 0,
    s = o ? Qo(o.repository).marketplace : void 0,
    a = r === "builtin" || r === "bundled" || (r === "plugin" && zD(s)) || sg();
  Jc("skill_activated", {
    "skill.name": a ? e : "custom_skill",
    invocation_trigger: n,
    ...(r && {
      "skill.source": r,
    }),
    ...(t?.kind && {
      "skill.kind": t.kind,
    }),
    ...(a &&
      o && {
        "plugin.name": o.pluginManifest.name,
      }),
    ...(a &&
      s && {
        "marketplace.name": s,
      }),
  });
}
function Hbe(e, t, n, r) {
  return {
    ...(e && {
      skill_source: $e(e),
    }),
    ...(t && {
      skill_loaded_from: $e(t),
    }),
    ...(n && {
      skill_kind: $e(n),
    }),
    ...(r && {
      skill_created_by: $e(r),
    }),
  };
}
function GKd(e, t) {
  if (t !== "custom") return {};
  return {
    skill_name_hash: kh(eFt(e)),
  };
}
function Elt({
  rawName: e,
  canonicalName: t,
  isMcp: n,
  isBuiltIn: r,
  isBundled: o,
  isOfficial: s,
}) {
  let i = n ? "mcp" : r || o || s ? e : "custom";
  return {
    sanitizedName: kh(i),
    skillNameHash: GKd(t, i),
  };
}
function getEnabledVia(plugin, managedNames, seedDirs) {
  if (plugin.isBuiltin) return "default-enable";
  if (managedNames?.has(plugin.name)) return "org-policy";
  if (seedDirs.some((r) => plugin.path.startsWith(r.endsWith(meo.sep) ? r : r + meo.sep)))
    return "seed-mount";
  return "user-install";
}
function WKd(e, t, n = null) {
  let r = getTelemetryPluginScope(e, t, n),
    o = jKd(r) || wKi(e, t);
  return {
    plugin_id_hash: Abe(e, t),
    plugin_scope: $e(r),
    plugin_name_redacted: o ? e : Qj,
    marketplace_name_redacted: o && t ? t : Qj,
    is_official_plugin: Q0e(r),
  };
}
function x8(e, t, n = null) {
  return {
    _PROTO_plugin_name: e,
    ...(t && {
      _PROTO_marketplace_name: t,
    }),
    ...WKd(e, t, n),
  };
}
function VPn(e, t, n) {
  G("tengu_plugin_folder_shadowed", {
    component: $e(n),
    ...x8(e, t),
  });
}
function zPn(e, t, n) {
  G("tengu_plugin_renamed", {
    outcome: $e(n.kind),
    chain_depth: n.kind === "unresolved" ? void 0 : n.chainDepth,
    reason: n.kind === "unresolved" ? $e(n.reason) : void 0,
    ...x8(e, t),
  });
}
function Z0e(e, t, n) {
  let r = new Map();
  for (let { name: o, source: s } of t) {
    let i = r.get(o);
    if (i === void 0) r.set(o, [s]);
    else i.push(s);
  }
  for (let [o, s] of r) {
    let i = Uo(s);
    if (i.length < 2) continue;
    G("tengu_plugin_name_collision", {
      item_type: $e(e),
      _PROTO_skill_name: o,
      item_name_hash: Abe(o),
      source_count: i.length,
      sources: i.sort().join(","),
      ...(n.resolves && {
        winner_source: s.at(-1),
      }),
    });
  }
}
function e4(e, t = null) {
  let { name: n, marketplace: r } = Qo(e);
  return x8(n, r, t);
}
function Tbe(e, t = null) {
  let { marketplace: n } = Qo(e.repository);
  return x8(e.pluginManifest.name, n, t);
}
function OKi(e, t) {
  for (let n of e)
    try {
      let { marketplace: r } = Qo(n.repository);
      if (Q0e(getTelemetryPluginScope(n.name, r, t))) SKi(n.name, r);
    } catch (r) {
      ke(r);
    }
}
function logPluginsEnabledForSession(plugins, managedNames, seedDirs) {
  let r = sg(),
    o = Dt().numStartups,
    s = Date.now(),
    i = [];
  for (let a of plugins) {
    let { marketplace: l } = Qo(a.repository),
      c = rFt(a.repository);
    if (!c) i.push(a.repository);
    let { sessionsSinceLastUse: u, daysSinceLastUse: d } = c
        ? oFt(c, o, s)
        : {
            sessionsSinceLastUse: 0,
            daysSinceLastUse: 0,
          },
      p = getTelemetryPluginScope(a.name, l, managedNames),
      f = getEnabledVia(a, managedNames, seedDirs),
      m = (a.skillsPath ? 1 : 0) + (a.skillsPaths?.length ?? 0),
      g = (a.commandsPath ? 1 : 0) + (a.commandsPaths?.length ?? 0),
      h = (a.agentsPath ? 1 : 0) + (a.agentsPaths?.length ?? 0),
      y = Q0e(p) || r;
    (Jc("plugin_loaded", {
      "plugin.name": y ? a.name : Qj,
      ...(l && {
        "marketplace.name": y ? l : Qj,
      }),
      ...(y &&
        a.manifest.version && {
          "plugin.version": a.manifest.version,
        }),
      "plugin.scope": p,
      enabled_via: f,
      plugin_id_hash: Abe(a.name, l),
      has_hooks: a.hooksConfig !== void 0,
      has_mcp: !a.skipMcpDiscovery && a.mcpServers !== void 0,
      host_owned_mcp: a.skipMcpDiscovery === true,
      skill_path_count: m,
      command_path_count: g,
      agent_path_count: h,
      safe_mode: String(Tl()),
    }),
      G("tengu_plugin_enabled_for_session", {
        ...x8(a.name, l, managedNames),
        enabled_via: $e(f),
        skill_path_count: m,
        command_path_count: g,
        agent_path_count: h,
        has_mcp: !a.skipMcpDiscovery && a.mcpServers !== void 0,
        host_owned_mcp: a.skipMcpDiscovery === true,
        has_lsp: a.lspServers !== void 0,
        has_hooks: a.hooksConfig !== void 0,
        has_settings: a.settings !== void 0,
        sessions_since_last_use: u,
        days_since_last_use: d,
        safe_mode: Tl(),
        ...(a.settings && {
          settings_keys: Object.keys(a.settings).sort().join(","),
        }),
        ...(a.manifest.version && {
          version: tS(a.manifest.version),
        }),
      }));
  }
  if (i.length > 0) jPn(i);
}
function classifyPluginCommandError(error) {
  let t = String(error?.message ?? error);
  if (
    /ENOTFOUND|ECONNREFUSED|EAI_AGAIN|ETIMEDOUT|ECONNRESET|network|Could not resolve|Connection refused|timed out/i.test(
      t,
    )
  )
    return "network";
  if (/\b404\b|not found|does not exist|no such plugin/i.test(t)) return "not-found";
  if (/\b40[13]\b|EACCES|EPERM|permission denied|unauthorized/i.test(t)) return "permission";
  if (/invalid|malformed|schema|validation|parse error/i.test(t)) return "validation";
  return "unknown";
}
function logPluginLoadErrors(errors, managedNames, n) {
  for (let r of errors) {
    let { name: o, marketplace: s } = Qo(r.source),
      i = "plugin" in r && r.plugin ? r.plugin : o;
    G("tengu_plugin_load_failed", {
      error_category: $e(r.type),
      cache_only: n?.cacheOnly ?? false,
      ...("component" in r && {
        component: $e(r.component),
      }),
      ...("errno" in r &&
        r.errno && {
          errno: r.errno,
        }),
      ...x8(i, s, managedNames),
    });
  }
}
var meo,
  FKd = "builtin";
