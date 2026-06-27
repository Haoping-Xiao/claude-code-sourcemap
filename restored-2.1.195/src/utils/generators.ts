// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F8t
// matched 2.1.88 source: src/utils/generators.ts
// class=modified  jaccard=0.331  score=0.6421  fileCov=0.4059
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module F8t] deps: context/modalContext.tsx, react/cjs/react.production.js, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, utils/terminal.ts, tools/PowerShellTool/UI.tsx, components/VirtualMessageList.tsx, components/CompactSummary.tsx, ink/styles.ts, tools/AgentTool/built-in/generalPurposeAgent.ts, commands/add-dir/validation.ts, components/messages/AdvisorMessage.tsx, hooks/useTerminalSize.ts, services/mockRateLimits.ts, ZPe, utils/profilerBase.ts, utils/messages.ts, utils/agentContext.ts, tools/AgentTool/AgentTool.tsx, tools/AgentTool/agentColorManager.ts, tools/AgentTool/UI.tsx
((dKn = R(lt(), 1)), (ia = R(se(), 1)));
function xu(e) {
  return e.userFacingName?.() ?? e.name;
}
function Ik(e) {
  return e.isEnabled?.() ?? true;
}
function YMe(e, t) {
  let n = e?.immediate;
  return typeof n === "function" ? n(t) : n === true;
}
async function Pll(e) {
  let t;
  do t = await e.next();
  while (!t.done);
  return t.value;
}
async function* fKn(e, t = 1 / 0) {
  let n = (s) => {
      let i = s.next().then(({ done: a, value: l }) => ({
        done: a,
        value: l,
        generator: s,
        promise: i,
      }));
      return i;
    },
    r = [...e],
    o = new Set();
  while (o.size < t && r.length > 0) {
    let s = r.shift();
    o.add(n(s));
  }
  while (o.size > 0) {
    let { done: s, value: i, generator: a, promise: l } = await Promise.race(o);
    if ((o.delete(l), !s)) {
      if ((o.add(n(a)), i !== void 0)) yield i;
    } else if (r.length > 0) {
      let c = r.shift();
      o.add(n(c));
    }
  }
}
async function mKn(e) {
  let t = [];
  for await (let n of e) t.push(n);
  return t;
}
async function* HIo(e) {
  for (let t of e) yield t;
}
var jib;
