// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D2o
// matched 2.1.88 source: src/tools/SendMessageTool/SendMessageTool.ts
// class=new  jaccard=0.0161  score=0.2077  fileCov=0.0172
// note: nearest: src/tools/SendMessageTool/SendMessageTool.ts (0.0161); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module D2o] deps: @mixmark-io/domino/lib/Document.js, fuse.js/dist/fuse.mjs, services/analytics/index.ts, react/cjs/react.production.js, commander/lib/command.js, hooks/useSearchInput.ts, components/design-system/Ratchet.tsx, ink/terminal.ts, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, utils/debug.ts, tools/shared/gitOperationTracking.ts, utils/profilerBase.ts, utils/sessionStoragePortable.ts, utils/git.ts, utils/sequential.ts, utils/plans.ts, context/modalContext.tsx, keybindings/useShortcutDisplay.ts, components/CustomSelect/select.tsx, components/PromptInput/PromptInputFooterSuggestions.tsx, components/ConfigurableShortcutHint.tsx, components/design-system/Dialog.tsx, components/Settings/Config.tsx, components/ui/TreeSelect.tsx, @anthropic-ai/bedrock-sdk/client.mjs, components/ScrollKeybindingHandler.tsx, components/LogSelector.tsx
wAt = require("path"), Ou = R(rt(), 1), Wl = R(se(), 1);
function rYe(e, t) {
  return {
    markTypeInvoked(n) {
      t(r => r.agentTypesInvokedThisSession.has(n) ? r : {
        ...r,
        agentTypesInvokedThisSession: new Set(r.agentTypesInvokedThisSession).add(n)
      });
    },
    registerName(n, r) {
      if (n === Q5) {
        T(`[registerName] refused reserved name "${n}" for ${r} \u2014 SendMessage routes it to the main conversation`);
        return;
      }
      t(o => {
        if (o.agentNameRegistry.get(n) === r) return o;
        let s = new Map(o.agentNameRegistry);
        return s.set(n, r), {
          ...o,
          agentNameRegistry: s
        };
      });
    },
    allocateName(n) {
      let r = e(),
        o = r.agentNameRegistry,
        s = new Set(Object.values(r.teamContext?.teammates ?? {}).map(i => i.name));
      for (let i = 1;; i++) {
        let a = i === 1 ? n : `${n}-${i}`;
        if (a !== Q5 && !o.has(a) && !s.has(a)) return a;
      }
    },
    clearTodos(n) {
      t(r => {
        if (!(n in r.todos)) return r;
        let {
          [n]: o,
          ...s
        } = r.todos;
        return {
          ...r,
          todos: s
        };
      });
    },
    setTeammate(n, r) {
      t(o => {
        let s = o.teamContext;
        if (!s) return o;
        let i = s.teammates?.[n];
        if (r === void 0) {
          if (!i) return o;
          let {
            [n]: a,
            ...l
          } = s.teammates;
          return {
            ...o,
            teamContext: {
              ...s,
              teammates: l
            }
          };
        }
        if (i === r) return o;
        return {
          ...o,
          teamContext: {
            ...s,
            teammates: {
              ...s.teammates,
              [n]: r
            }
          }
        };
      });
    }
  };
}
var Uor;