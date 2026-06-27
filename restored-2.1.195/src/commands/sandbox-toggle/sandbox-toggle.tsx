// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bXl
// matched 2.1.88 source: src/commands/sandbox-toggle/sandbox-toggle.tsx
// class=modified  jaccard=0.3816  score=0.7863  fileCov=0.4258
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module bXl] deps: hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, utils/bash/bashParser.ts, utils/settings/settings.ts, keybindings/useShortcutDisplay.ts, components/ValidationErrorsList.tsx, components/permissions/PermissionRequestTitle.tsx, utils/plugins/pluginStartupCheck.ts, components/design-system/Dialog.tsx, components/design-system/Tabs.tsx, components/sandbox/SandboxDependenciesTab.tsx, components/sandbox/SandboxOverridesTab.tsx, components/sandbox/SandboxSettings.tsx
((T4o = R(lt(), 1)), (EA = R(se(), 1)));
async function call(onDone, _context, args) {
  let o = jo().theme || "light",
    s = Vt();
  if (!xo.isSupportedPlatform()) {
    let l =
        s === "wsl"
          ? "Error: Sandboxing requires WSL2. WSL1 is not supported."
          : "Error: Sandboxing is currently only supported on macOS, Linux, and WSL2.",
      c = Io("error", o)(l);
    return (onDone(c), null);
  }
  let i = xo.checkDependencies();
  if (!xo.isPlatformInEnabledList()) {
    let l = Io(
      "error",
      o,
    )(`Error: Sandboxing is disabled for this platform (${s}) via the enabledPlatforms setting.`);
    return (onDone(l), null);
  }
  if (xo.areSandboxSettingsLockedByPolicy()) {
    let l = Io(
      "error",
      o,
    )(
      "Error: Sandbox settings are overridden by a higher-priority configuration and cannot be changed locally.",
    );
    return (onDone(l), null);
  }
  let trimmedArgs = args?.trim() || "";
  if (!trimmedArgs)
    return AXl.jsx(_Xl, {
      onComplete: onDone,
      depCheck: i,
    });
  if (trimmedArgs) {
    let c = trimmedArgs.split(" ")[0];
    if (c === "exclude") {
      let u = trimmedArgs.slice(8).trim();
      if (!u) {
        let g = Io(
          "error",
          o,
        )(
          'Error: Please provide a command pattern to exclude (e.g., /sandbox exclude "npm run test:*")',
        );
        return (onDone(g), null);
      }
      let d = u.replace(/^["']|["']$/g, "");
      kro(d);
      let p = xg("localSettings"),
        f = p ? SXl.relative(CK(), p) : ".claude/settings.local.json",
        m = Io("success", o)(`Added "${d}" to excluded commands in ${f}`);
      return (onDone(m), null);
    } else {
      let u = Io("error", o)(`Error: Unknown subcommand "${c}". Available subcommand: exclude`);
      return (onDone(u), null);
    }
  }
  return null;
}
var SXl, AXl;
