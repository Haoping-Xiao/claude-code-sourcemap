// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sAc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0048  score=0.3529  fileCov=0.0048
// note: nearest: src/screens/REPL.tsx (0.0048); dir inferred from dep-graph -> context; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sAc] deps: react/cjs/react.production.js
INe = R(rt(), 1);
function mpr(e, t) {
  switch (t.type) {
    case "append":
      return t.messages.length === 0 ? e : [...e, ...t.messages];
    case "replace-all":
      return t.messages;
    case "remove-by-uuid":
      {
        let n = e.findIndex(o => o.uuid === t.uuid);
        if (n === -1) return e;
        let r = e.slice();
        return r.splice(n, 1), r;
      }
    case "trim-to-last-boundary-and-append":
      return [...Py(e, {
        includeSnipped: t.includeSnipped
      }), t.message];
    case "replace-last-ephemeral-progress":
      {
        let n = e.at(-1);
        if (n?.type === "progress" && n.parentToolUseID === t.message.parentToolUseID && n.data.type === t.message.data.type) return e.with(e.length - 1, t.message);
        return [...e, t.message];
      }
    case "append-or-move-by-uuid":
      return tzn(e, t.message);
    case "trim-to-last-boundary-excluding-and-append":
      return [...Py(e, {
        includeSnipped: t.includeSnipped
      }).filter(n => !t.excludeUuids.has(n.uuid)), t.message];
    case "update":
      return t.updater(e);
  }
}