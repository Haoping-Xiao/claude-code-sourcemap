// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p3o
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0056  score=0.2722  fileCov=0.0057
// note: nearest: src/screens/REPL.tsx (0.0056); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module p3o] deps: highlight.js/lib/languages/stan.js, components/CustomSelect/select.tsx, utils/plugins/loadPluginCommands.ts, components/permissions/PermissionRequestTitle.tsx, components/ConfigurableShortcutHint.tsx, components/design-system/Dialog.tsx, @xmldom/xmldom/lib/entities.js, env-paths/index.js, react/cjs/react.production.js, utils/plugins/pluginPolicy.ts, utils/textHighlighting.ts, components/design-system/Ratchet.tsx, marked/lib/marked.esm.js, hooks/useTerminalSize.ts, dom-mutator/dist/dom-mutator.cjs.production.min.js, utils/debug.ts, context/notifications.tsx, utils/tempfile.ts, utils/sequential.ts, utils/agentContext.ts, services/teamMemorySync/secretScanner.ts, utils/thinking.ts
cHt = R(lt(), 1), kQl = R(rt(), 1), uZ = R(rt(), 1), Ga = R(se(), 1), Q6f = {
  low: "Quick, straightforward implementation",
  medium: "Balanced approach with standard testing",
  high: "Comprehensive implementation with extensive testing",
  xhigh: `Extended reasoning with thorough analysis (${jkn})`,
  max: `Maximum capability with deepest reasoning (${A1i})`
};
dzf = [1, 10, 20, 30, 40], pzf = [5, 5, 5, 6], i3o = [{
  value: "low",
  label: "low",
  color: "warning"
}, {
  value: "medium",
  label: "medium",
  color: "success"
}, {
  value: "high",
  label: "high",
  color: "permission"
}, {
  value: "xhigh",
  label: "xhigh",
  color: "autoAccept-shimmer"
}, {
  value: "max",
  label: "max",
  color: "rainbow-animated"
}];
IQl = LQl, xQl = [62, 22, 118], wzf = [140, 80, 240], jJt = Array.from({
  length: 8
}, (e, t) => {
  let n = t / 7,
    r = o => Math.round(xQl[o] + (wzf[o] - xQl[o]) * n);
  return `rgb(${r(0)},${r(1)},${r(2)})`;
}), d3o = jJt.at(-1), _ir = d3o;
async function call(e, t) {
  let n = e.trim(),
    r = t.getAppState(),
    o = zo(r.mainLoopModelForSession ?? r.mainLoopModel ?? Uw());
  if (_G.includes(n)) return {
    type: "text",
    value: bir()
  };
  if (n === "current" || n === "status") {
    let {
      message: i
    } = Sir(gg(t), o, r.ultracode);
    return {
      type: "text",
      value: i
    };
  }
  if (!n) return {
    type: "text",
    value: `Usage: /effort <${x3e(o).join("|")}${t8(o) ? "|ultracode" : ""}|auto>`
  };
  let s = Eir(n);
  if (s.effortUpdate) {
    let i = s.effortUpdate.value,
      a = s.effortUpdate.ultracode ?? false;
    t.setAppState(l => l.effortValue === i && (l.ultracode ?? false) === a ? l : {
      ...l,
      effortValue: i,
      ultracode: a
    });
  }
  return {
    type: "text",
    value: s.message
  };
}