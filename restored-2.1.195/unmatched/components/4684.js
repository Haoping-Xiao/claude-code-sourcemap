// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eNl
// matched 2.1.88 source: src/components/diff/DiffDialog.tsx
// class=new  jaccard=0.0298  score=0.8483  fileCov=0.0299
// note: nearest: src/components/diff/DiffDialog.tsx (0.0298); dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module eNl] deps: react/cjs/react.production.js, components/CustomSelect/use-multi-select-state.ts, hooks/useTurnDiffs.ts, components/ScrollKeybindingHandler.tsx, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, services/teamMemorySync/secretScanner.ts, context/modalContext.tsx, components/CustomSelect/select.tsx, components/design-system/Dialog.tsx, components/IdeOnboardingDialog.tsx, components/ConfigurableShortcutHint.tsx, @smithy/types/dist-cjs/index.js, components/design-system/Tabs.tsx, components/design-system/LoadingState.tsx, components/diff/DiffFileList.tsx, components/diff/DiffDialog.tsx
Q1l = R(lt(), 1), wHe = R(rt(), 1), lw = R(se(), 1);
var nNl,
  call = async (e, t) => {
    let {
      DiffDialog: n
    } = await Promise.resolve().then(() => (eNl(), Z1l));
    return nNl.jsx(n, {
      messages: t.messages,
      onDone: e
    });
  };