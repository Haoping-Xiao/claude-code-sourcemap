// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Czl
// matched 2.1.88 source: src/hooks/useSearchInput.ts
// class=new  jaccard=0.0311  score=0.3508  fileCov=0.033
// note: nearest: src/hooks/useSearchInput.ts (0.0311); dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module Czl] deps: @mixmark-io/domino/lib/Document.js, @xmldom/xmldom/lib/entities.js, context/notifications.tsx, utils/permissions/shellRuleMatching.ts, keybindings/useShortcutDisplay.ts, components/permissions/rules/PermissionRuleDescription.tsx, hooks/useSearchInput.ts, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, tools/TaskStopTool/prompt.ts, utils/permissions/permissionSetup.ts, utils/fsOperations.ts, components/design-system/Dialog.tsx, components/permissions/PermissionRequestTitle.tsx, components/ConfigurableShortcutHint.tsx, components/design-system/Dialog.tsx, components/AwsAuthStatusBox.tsx, components/design-system/Tabs.tsx, components/Settings/Config.tsx, components/permissions/rules/PermissionRuleInput.tsx, components/permissions/rules/AddWorkspaceDirectory.tsx, components/permissions/rules/AddPermissionRules.tsx, components/CustomSelect/select.tsx, components/permissions/rules/RemoveWorkspaceDirectory.tsx, @mixmark-io/domino/lib/HTMLParser.js, components/permissions/rules/PermissionRuleList.tsx
FAt = R(lt(), 1), A3 = R(rt(), 1), mu = R(se(), 1);
var xzl,
  call = async (e, t) => xzl.jsx(wzl, {
    onExit: e,
    onRetryDenials: n => {
      t.applyMessageOp({
        type: "append",
        messages: [Rzl(n)]
      });
    }
  });