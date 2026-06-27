// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y9l
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.003  score=0.2919  fileCov=0.0031
// note: nearest: src/screens/REPL.tsx (0.003); dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module Y9l] deps: @xmldom/xmldom/lib/entities.js, utils/sessionStorage.ts, react/cjs/react.production.js, commander/lib/command.js, hooks/useSearchInput.ts, components/design-system/Ratchet.tsx, m8, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, nk, skills/loadSkillsDir.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/profilerBase.ts, utils/settings/changeDetector.ts, utils/settings/settings.ts, services/teamMemorySync/secretScanner.ts, context/modalContext.tsx, components/design-system/Dialog.tsx, components/PromptInput/PromptInputFooterSuggestions.tsx, react/cjs/react.production.js, components/Settings/Config.tsx
V9l = R(lt(), 1), r2 = R(rt(), 1), ix = R(se(), 1), Z2o = ["on", "name-only", "user-invocable-only", "off"], JWf = {
  on: {
    glyph: nt.tick,
    label: "on",
    color: "success"
  },
  "name-only": {
    glyph: nt.bullet,
    label: "name-only"
  },
  "user-invocable-only": {
    glyph: nt.circle,
    label: "user-only",
    color: "warning"
  },
  off: {
    glyph: nt.cross,
    label: "off",
    color: "error"
  }
};
async function call(e, t) {
  return J9l.jsx(K9l, {
    onExit: e,
    commands: t.options.commands,
    bytesPerToken: rH(t.options.mainLoopModel)
  });
}
var J9l;