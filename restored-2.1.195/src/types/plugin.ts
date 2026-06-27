// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nC
// matched 2.1.88 source: src/types/plugin.ts
// class=modified  jaccard=0.3373  score=0.4134  fileCov=0.6469
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function teo(e) {
  return /^\w[\w.@-]*$/.test(e);
}
function xy(e, t, n) {
  if (!teo(t)) return null;
  return `claude ${e} ${t}${n ? ` ${n}` : ""}`;
}
function neo(e) {
  return e.type === "dependency-unsatisfied" || e.type === "dependency-version-unsatisfied";
}
function fKi(e) {
  return (
    neo(e) ||
    e.source.endsWith("@inline") ||
    e.source.startsWith("inline[") ||
    e.source.endsWith("@synced") ||
    e.source.endsWith("@skills-dir")
  );
}
function getPluginErrorMessage(error) {
  switch (error.type) {
    case "generic-error":
      return error.error;
    case "path-not-found":
      return `Path not found: ${error.path} (${error.component}${error.errno ? `, ${error.errno}` : ""})`;
    case "path-traversal":
      return `Path escapes plugin directory: ${error.path} (${error.component})`;
    case "git-auth-failed":
      return `Git authentication failed (${error.authType}): ${error.gitUrl}`;
    case "git-timeout":
      return `Git ${error.operation} timeout: ${error.gitUrl}`;
    case "network-error":
      return `Network error: ${error.url}${error.details ? ` - ${error.details}` : ""}`;
    case "manifest-parse-error":
      return `Manifest parse error: ${error.parseError}`;
    case "manifest-validation-error":
      return `Manifest validation failed: ${error.validationErrors.join(", ")}`;
    case "plugin-not-found":
      return `Plugin ${error.pluginId} not found in marketplace ${error.marketplace}`;
    case "marketplace-not-found":
      return `Marketplace ${error.marketplace} not found`;
    case "marketplace-load-failed":
      return `Marketplace ${error.marketplace} failed to load: ${error.reason}`;
    case "mcp-config-invalid":
      return `MCP server ${error.serverName} invalid: ${error.validationError}`;
    case "hook-load-failed":
      return `Hook load failed: ${error.reason}`;
    case "component-load-failed":
      return `${error.component} load failed from ${error.path}: ${error.reason}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${error.url}: ${error.reason}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${error.mcpbPath}: ${error.reason}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${error.mcpbPath}: ${error.validationError}`;
    case "lsp-config-invalid":
      return `Plugin "${error.plugin}" has invalid LSP server config for "${error.serverName}": ${error.validationError}`;
    case "lsp-server-start-failed":
      return `Plugin "${error.plugin}" failed to start LSP server "${error.serverName}": ${error.reason}`;
    case "lsp-server-crashed":
      if (error.signal)
        return `Plugin "${error.plugin}" LSP server "${error.serverName}" crashed with signal ${error.signal}`;
      return `Plugin "${error.plugin}" LSP server "${error.serverName}" crashed with exit code ${error.exitCode ?? "unknown"}`;
    case "lsp-request-timeout":
      return `Plugin "${error.plugin}" LSP server "${error.serverName}" timed out on ${error.method} request after ${error.timeoutMs}ms`;
    case "lsp-request-failed":
      return `Plugin "${error.plugin}" LSP server "${error.serverName}" ${error.method} request failed: ${error.error}`;
    case "marketplace-blocked-by-policy":
      if (error.blockedByBlocklist)
        return `Marketplace '${error.marketplace}' is blocked by enterprise policy`;
      return `Marketplace '${error.marketplace}' is not in the allowed marketplace list`;
    case "dependency-unsatisfied": {
      let t = xy("plugin install", error.dependency),
        n =
          error.reason === "not-enabled"
            ? "disabled \u2014 enable it or remove the dependency"
            : `not installed \u2014 ${t ? `run \`${t}\`, or ` : ""}check that its marketplace is added`;
      return `Dependency "${error.dependency}" is ${n}`;
    }
    case "dependency-version-unsatisfied":
      return `Requires "${error.dependency}" ${error.required}, installed ${error.installed ?? "version unknown"}`;
    case "plugin-cache-miss":
      return `Plugin "${error.plugin}" not cached at ${error.installPath} \u2014 run /plugins to refresh`;
    case "plugin-not-installed": {
      let t = xy("plugin install", error.source, "--scope project");
      return `Plugin "${error.plugin}" is enabled in project settings but isn't installed${t ? ` \u2014 run \`${t}\`` : " \u2014 install it at project scope (from /plugin or claude plugin install)"}`;
    }
    case "autoupdate-blocked-by-pinner": {
      let t = error.heldAt ? ` at ${error.heldAt}` : "",
        n = error.blockedBy.join(", "),
        r =
          error.disabledPinners.length > 0
            ? ` (note: ${error.disabledPinners.join(", ")} ${error.disabledPinners.length === 1 ? "is" : "are"} currently disabled)`
            : "";
      return `Autoupdate held "${error.plugin}"${t} \u2014 version constraint from ${n}${r}`;
    }
  }
}
function zM(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest": {
      let t = mKi(e.manifestFields);
      return `Default ${e.component}/ folder is ignored because the manifest sets ${t}`;
    }
    case "mcp-server-suppressed-duplicate": {
      let t = e.duplicateOf.startsWith("plugin:")
        ? `server provided by plugin "${e.duplicateOf.split(":")[1] ?? "?"}"`
        : `already-configured "${e.duplicateOf}"`;
      return `MCP server "${e.serverName}" skipped \u2014 same command/URL as ${t}`;
    }
    case "plugin-renamed":
      return e.renamedTo === null
        ? `Removed from the "${e.marketplace}" marketplace`
        : `Renamed to "${e.renamedTo}" in the "${e.marketplace}" marketplace`;
    case "lsp-extension-conflict": {
      let t = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] : void 0,
        n = t ? `plugin "${t}"` : `"${e.activeServer}"`;
      return `LSP server "${e.serverName}" is not used for ${e.extension} files \u2014 ${n} already registered a server for that extension`;
    }
    case "project-scope-suppressed-untrusted":
    case "project-scope-server-stripped":
      return e.warning;
    case "broken-wikilink":
      return `${e.raw} in ${e.filePath}:${e.line} doesn't resolve to a skill`;
    case "ineffective-disable":
      return `Disabled in ~/.claude/settings.json but still loads \u2014 ${wG(e.overriddenBy)} settings enable it, which overrides your user setting`;
  }
}
function $Pn(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest": {
      let t = mKi(e.manifestFields);
      if (e.manifestFields.length === 1)
        return `Remove ${t} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder, or add the folder's files to the ${t} list if you want both`;
      return `Remove ${t} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder`;
    }
    case "project-scope-suppressed-untrusted":
      return "Accept the trust dialog for this workspace, then run /reload-plugins.";
    case "project-scope-server-stripped":
      return "Monitors from project @skills-dir plugins are not supported \u2014 install the plugin at user scope instead.";
    case "broken-wikilink":
      return e.reason === "invalid"
        ? "Wikilink names may use letters, digits, dash, underscore \u2014 rename the link"
        : `Create one of: ${e.tried.join(" or ")}, or fix the link spelling`;
    case "mcp-server-suppressed-duplicate": {
      if (e.duplicateOf.startsWith("plugin:"))
        return `Disable plugin "${e.duplicateOf.split(":")[1] ?? "the other plugin"}" if you want this plugin's version instead`;
      return `Remove "${e.duplicateOf}" from your MCP config if you want the plugin's version instead`;
    }
    case "lsp-extension-conflict": {
      let t = e.activeServer.startsWith("plugin:")
        ? (e.activeServer.split(":")[1] ?? "the other plugin")
        : e.activeServer;
      if (t === e.plugin)
        return `Plugin "${e.plugin}" declares two LSP servers for ${e.extension} \u2014 remove or reorder "${e.serverName}" in its lspServers config`;
      return `Disable plugin "${t}" to use this plugin's LSP server for ${e.extension} files, or disable "${e.plugin}" to silence this warning`;
    }
    case "plugin-renamed":
      return e.renamedTo === null
        ? `Remove "${e.source}" from enabledPlugins if you still see this on the next start`
        : `If you still see this on the next start, update enabledPlugins to use "${e.renamedTo}@${e.marketplace}" (managed settings are not rewritten automatically)`;
    case "ineffective-disable":
      switch (e.overriddenBy) {
        case "projectSettings":
          return `Set "enabledPlugins": {"${e.source}": false} in .claude/settings.local.json instead \u2014 project settings override ~/.claude/settings.json`;
        case "localSettings":
          return "Change it to false in .claude/settings.local.json \u2014 that file currently enables it";
        case "flagSettings":
          return `Remove "${e.source}" from the --settings value \u2014 that flag overrides all settings files`;
        case "policySettings":
          return "Managed policy can't be overridden locally \u2014 contact your administrator";
        case "userSettings":
          return "";
      }
  }
}
function mKi(e) {
  return e.map((t) => `"${t}"`).join(" and ");
}
