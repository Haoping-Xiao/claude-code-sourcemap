// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FOc
// matched 2.1.88 source: src/migrations/migrateEnableAllProjectMcpServersToSettings.ts
// class=modified  jaccard=0.313  score=0.5477  fileCov=0.422
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function migrateEnableAllProjectMcpServersToSettings() {
  let projectConfig = GVo();
  if (!projectConfig) return;
  let t = (s) => s !== void 0 && (!Array.isArray(s) || s.length > 0),
    n = projectConfig.enableAllProjectMcpServers !== void 0,
    r = t(projectConfig.enabledMcpjsonServers),
    o = t(projectConfig.disabledMcpjsonServers);
  if (!n && !r && !o) return;
  try {
    let s = yn("localSettings");
    if (LCe().length > 0) {
      T(
        "migrateEnableAllProjectMcpServersToSettings: deferring \u2014 settings.local.json carries validation errors a write could compound; will retry next startup",
        {
          level: "error",
        },
      );
      return;
    }
    let i = s ?? {},
      a = {},
      l = [];
    if (n) {
      if (
        projectConfig.enableAllProjectMcpServers === true &&
        i.enableAllProjectMcpServers === void 0
      )
        a.enableAllProjectMcpServers = true;
      l.push("enableAllProjectMcpServers");
    }
    if (r) {
      if (Array.isArray(projectConfig.enabledMcpjsonServers)) {
        let c = i.enabledMcpjsonServers || [],
          u = new Set(c);
        if (projectConfig.enabledMcpjsonServers.some((d) => !u.has(d)))
          a.enabledMcpjsonServers = Uo([...c, ...projectConfig.enabledMcpjsonServers]);
      }
      l.push("enabledMcpjsonServers");
    }
    if (o) {
      if (Array.isArray(projectConfig.disabledMcpjsonServers)) {
        let c = i.disabledMcpjsonServers || [],
          u = new Set(c);
        if (projectConfig.disabledMcpjsonServers.some((d) => !u.has(d)))
          a.disabledMcpjsonServers = Uo([...c, ...projectConfig.disabledMcpjsonServers]);
      }
      l.push("disabledMcpjsonServers");
    }
    if (Object.keys(a).length > 0) {
      let { error: c } = io("localSettings", a);
      if (c) {
        T(
          `migrateEnableAllProjectMcpServersToSettings: settings write failed (${c.message}); will retry next startup`,
          {
            level: "error",
          },
        );
        return;
      }
    }
    if (l.length > 0) {
      if (!RZt(l)) {
        T(
          "migrateEnableAllProjectMcpServersToSettings: settings copy landed but legacy projectConfig fields could not be removed (unwritable config?); will retry next startup",
          {
            level: "error",
          },
        );
        return;
      }
    }
    (G("tengu_migrate_mcp_approval_fields_success", {
      migratedCount: l.length,
    }),
      xe("migration_mcp_servers_to_settings"));
  } catch (s) {
    (ke(s),
      G("tengu_migrate_mcp_approval_fields_error", {}),
      Le("migration_mcp_servers_to_settings", "migration_mcp_servers_unexpected_error"));
  }
}
