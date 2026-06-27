// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tXl
// matched 2.1.88 source: src/commands/version.ts
// class=modified  jaccard=0.3016  score=0.4714  fileCov=0.4558
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tXl] deps: services/analytics/index.ts, utils/plugins/loadPluginCommands.ts, components/permissions/PermissionRequestTitle.tsx, components/ConfigurableShortcutHint.tsx, components/design-system/Dialog.tsx, hooks/useTerminalSize.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, utils/errors.ts
((eXl = R(lt(), 1)), (Jsr = R(rt(), 1)), (yR = R(se(), 1)));
((e8f = {
  type: "local-jsx",
  name: "version",
  description: "Show this session's version (autoupdate may have a newer one)",
  isEnabled: () => false,
  immediate: true,
  requires: {
    ink: true,
  },
  load: () =>
    Promise.resolve({
      call: Z9f,
    }),
}),
  (_4o = {
    type: "local",
    name: "version",
    description: "Print the version this session is running (not what autoupdate downloaded)",
    isEnabled: () => false,
    get isHidden() {
      return !Ir();
    },
    supportsNonInteractive: true,
    load: () =>
      Promise.resolve({
        call: t8f,
      }),
  }),
  (b4o = e8f));
var nXl, S4o, Qsr;
