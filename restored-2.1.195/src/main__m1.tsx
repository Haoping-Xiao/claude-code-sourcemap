// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g2
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0436  score=0.4412  fileCov=0.0461
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module g2] deps: @xmldom/xmldom/lib/entities.js, services/analytics/index.ts, hooks/useTerminalSize.ts, utils/plugins/pluginStartupCheck.ts, dn, utils/debug.ts, utils/plugins/lspPluginIntegration.ts, utils/plugins/pluginAutoupdate.ts, p-map/index.js, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/permissions/permissionSetup.ts, utils/gracefulShutdown.ts, utils/sequential.ts, utils/agentContext.ts, utils/file.ts, utils/plugins/marketplaceHelpers.ts, utils/plugins/officialMarketplace.ts, utils/generatedFiles.ts, utils/settings/pluginOnlyPolicy.ts, utils/plugins/officialMarketplaceGcs.ts, utils/plugins/installedPluginsManager.ts, utils/plugins/lspPluginIntegration.ts, utils/plugins/parseMarketplaceInput.ts, commands/plugin/AddMarketplace.tsx, utils/plugins/schemas.ts, utils/plugins/pluginIdentifier.ts, utils/plugins/loadPluginAgents.ts, commands/plugin/ManagePlugins.tsx, commands/plugin/ManagePlugins.tsx, cli/handlers/plugins.ts, utils/plugins/validatePlugin.ts, utils/settings/settings.ts, utils/fsOperations.ts, utils/localInstaller.ts, services/teamMemorySync/secretScanner.ts, utils/plugins/addDirPluginSettings.ts, utils/user.ts, main.tsx
((iur = R(lt(), 1)), (Uz = require("path")), (fNe = R(rt(), 1)), (Jp = R(se(), 1)));
function run(e) {
  let t = () => new Ec("--cowork", "Use cowork_plugins directory").hideHelp(),
    n = e
      .command("plugin")
      .alias("plugins")
      .description("Manage Claude Code plugins")
      .configureHelp(LTe());
  (n
    .command("init <name>")
    .alias("new")
    .description(
      "Scaffold a new plugin at ~/.claude/skills/<name>/ (auto-loads next session as <name>@skills-dir)",
    )
    .option("--description <text>", "Manifest description")
    .option("--author <name>", "Author name (default: git config user.name)")
    .option("--author-email <email>", "Author email (default: git config user.email)")
    .option("--with <components...>", `Also scaffold: ${WZt.join(", ")}`)
    .option("-f, --force", "Overwrite an existing .claude-plugin/ at the target")
    .action(async (s, i) => {
      let [{ pluginInitHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
        Promise.resolve().then(() => (g2(), m2)),
        Promise.resolve().then(() => (vA(), TA)),
      ]);
      await a(await l(), s, i);
    }),
    n
      .command("validate <path>")
      .description("Validate a plugin or marketplace manifest")
      .option(
        "--strict",
        "Treat warnings as errors (exit 1). Use in CI to fail on unrecognized fields, missing metadata, and other issues that the runtime tolerates.",
      )
      .addOption(t())
      .action(async (s, i) => {
        let [{ pluginValidateHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        await a(await l(), s, i);
      }),
    n
      .command("tag [path]")
      .description(
        "Create a {name}--v{version} git tag for a plugin release, validating that plugin.json and any enclosing marketplace entry agree",
      )
      .option("--push", "Push the tag to --remote after creating it")
      .option("--dry-run", "Print what would be tagged without creating it")
      .option("-f, --force", "Skip the dirty-working-tree and tag-already-exists checks")
      .option("-m, --message <msg>", "Tag annotation message (use %s for the version)")
      .option("--remote <name>", "Remote to push to with --push", "origin")
      .action(async (s, i) => {
        let [{ pluginTagHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        await a(await l(), s, i);
      }),
    n
      .command("list")
      .description("List installed plugins")
      .option("--json", "Output as JSON")
      .option("--available", "Include available plugins from marketplaces (requires --json)")
      .addOption(t())
      .action(async (s) => {
        let [{ pluginListHandler: i }, { createSubcommandRoot: a }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        (await i(a, s), _R());
      }),
    n
      .command("details <name>")
      .description("Show a plugin's component inventory and projected token cost")
      .addOption(t())
      .action(async (s, i) => {
        let [{ pluginDetailsHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        (await a(l, s, i), _R());
      }));
  let o = n
    .command("marketplace")
    .description("Manage Claude Code marketplaces")
    .configureHelp(LTe());
  (o
    .command("add <source>")
    .description("Add a marketplace from a URL, path, or GitHub repo")
    .addOption(t())
    .option(
      "--sparse <paths...>",
      "Limit checkout to specific directories via git sparse-checkout (for monorepos). Example: --sparse .claude-plugin plugins",
    )
    .option(
      "--scope <scope>",
      "Where to declare the marketplace: user (default), project, or local",
    )
    .action(async (s, i) => {
      let [{ marketplaceAddHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
        Promise.resolve().then(() => (g2(), m2)),
        Promise.resolve().then(() => (vA(), TA)),
      ]);
      await a(await l(), s, i);
    }),
    o
      .command("list")
      .description("List all configured marketplaces")
      .option("--json", "Output as JSON")
      .addOption(t())
      .action(async (s) => {
        let [{ marketplaceListHandler: i }, { createSubcommandRoot: a }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        (await i(a, s), _R());
      }),
    o
      .command("remove <name>")
      .alias("rm")
      .description("Remove a configured marketplace")
      .option(
        "--scope <scope>",
        "Remove the marketplace declaration from a specific settings scope: user, project, or local. Omit to remove it from every scope.",
      )
      .addOption(t())
      .action(async (s, i) => {
        let [{ marketplaceRemoveHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        (await a(await l(), s, i), _R());
      }),
    o
      .command("update [name]")
      .description("Update marketplace(s) from their source - updates all if no name specified")
      .addOption(t())
      .action(async (s, i) => {
        let [{ marketplaceUpdateHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        await a(await l(), s, i);
      }),
    n
      .command("install <plugin>")
      .alias("i")
      .description(
        "Install a plugin from available marketplaces (use plugin@marketplace for specific marketplace)",
      )
      .option("-s, --scope <scope>", "Installation scope: user, project, or local", "user")
      .option(
        "--config <key=value>",
        "Set a userConfig option declared in the plugin's manifest (repeatable). Values are validated against the schema and stored via the same path as the interactive /plugin configure flow.",
        (s, i = []) => [...i, s],
      )
      .addOption(t())
      .action(async (s, i) => {
        let [{ pluginInstallHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        await a(await l(), s, i);
      }),
    n
      .command("uninstall <plugin>")
      .alias("remove")
      .alias("rm")
      .description("Uninstall an installed plugin")
      .option("-s, --scope <scope>", "Uninstall from scope: user, project, or local", "user")
      .option(
        "--keep-data",
        "Preserve the plugin's persistent data directory (~/.claude/plugins/data/{id}/)",
      )
      .option(
        "--prune",
        "Also remove auto-installed dependencies that are no longer needed (requires -y in non-interactive contexts)",
      )
      .option(
        "-y, --yes",
        "Skip the --prune confirmation prompt (required when stdin or stdout is not a TTY)",
      )
      .addOption(t())
      .action(async (s, i) => {
        let [{ pluginUninstallHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        await a(await l(), s, i);
      }),
    n
      .command("prune")
      .alias("autoremove")
      .description("Remove auto-installed dependencies that are no longer needed")
      .option("-s, --scope <scope>", "Prune at scope: user, project, or local", "user")
      .option("--dry-run", "List what would be removed without removing")
      .option(
        "-y, --yes",
        "Skip the confirmation prompt (required when stdin or stdout is not a TTY)",
      )
      .addOption(t())
      .action(async (s) => {
        let [{ pluginPruneHandler: i }, { createSubcommandRoot: a }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        await i(await a(), s);
      }),
    n
      .command("enable <plugin>")
      .description("Enable a disabled plugin")
      .option("-s, --scope <scope>", `Installation scope: ${JL.join(", ")} (default: auto-detect)`)
      .addOption(t())
      .action(async (s, i) => {
        let [{ pluginEnableHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        (await a(await l(), s, i), _R());
      }),
    n
      .command("disable [plugin]")
      .description("Disable an enabled plugin")
      .option("-a, --all", "Disable all enabled plugins")
      .option("-s, --scope <scope>", `Installation scope: ${JL.join(", ")} (default: auto-detect)`)
      .addOption(t())
      .action(async (s, i) => {
        let [{ pluginDisableHandler: a }, { createSubcommandRoot: l }] = await Promise.all([
          Promise.resolve().then(() => (g2(), m2)),
          Promise.resolve().then(() => (vA(), TA)),
        ]);
        await a(await l(), s, i);
      }),
    n
      .command("update <plugin>")
      .description("Update a plugin to the latest version (restart required to apply)")
      .option("-s, --scope <scope>", `Installation scope: ${UKe.join(", ")} (default: user)`)
      .addOption(t())
      .action(async (s, i) => {
        let { pluginUpdateHandler: a } = await Promise.resolve().then(() => (g2(), m2));
        await a(s, i);
      }));
}
