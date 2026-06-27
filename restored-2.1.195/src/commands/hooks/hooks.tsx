// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IKl
// matched 2.1.88 source: src/commands/hooks/hooks.tsx
// class=modified  jaccard=0.1318  score=0.4078  fileCov=0.163
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module IKl] deps: context/notifications.tsx, commands/clear/conversation.ts, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/hooks/hooksConfigManager.ts, QFo, utils/settings/settings.ts, services/teamMemorySync/secretScanner.ts, components/design-system/Dialog.tsx, components/ConfigurableShortcutHint.tsx, components/hooks/SelectHookMode.tsx, components/hooks/SelectMatcherMode.tsx, components/hooks/ViewHookMode.tsx, components/hooks/HooksConfigMenu.tsx
((wKl = R(lt(), 1)), (Psr = R(rt(), 1)), (NP = R(se(), 1)));
var kKl,
  call = async (onDone, context) => {
    G("tengu_hooks_command", {});
    let n = Fr(context),
      r = F$(n).map((o) => o.name);
    return kKl.jsx(CKl, {
      toolNames: r,
      onExit: onDone,
    });
  };
