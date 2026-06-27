// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bsl
// matched 2.1.88 source: src/ink/styles.ts
// class=new  jaccard=0.0248  score=0.4166  fileCov=0.0257
// note: nearest: src/ink/styles.ts (0.0248); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Bsl] deps: services/compact/autoCompact.ts, services/rateLimitMessages.ts, @xmldom/xmldom/lib/entities.js, components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, services/api/errors.ts, main.tsx, utils/messages.ts, ink/selection.ts, utils/agentContext.ts, utils/secureStorage/plainTextStorage.ts, react/cjs/react.production.js, native-ts/yoga-layout/index.ts, hooks/useMainLoopModel.ts, ink/styles.ts, commands/add-dir/validation.ts, components/messages/AssistantTextMessage.tsx
D8t = R(lt(), 1), xzn = R(rt(), 1), ld = R(se(), 1);
function Rzn(e) {
  let t = Usl.c(7),
    {
      param: n,
      addMargin: r,
      isTranscriptMode: o,
      verbose: s
    } = e,
    {
      thinking: i
    } = n,
    a = r === void 0 ? false : r;
  if (!i) return null;
  let l = o || s,
    c = a ? 1 : 0,
    u;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) u = UMe.jsx(U, {
    minWidth: 2,
    children: UMe.jsx(w, {
      dimColor: true,
      italic: true,
      children: Nvs
    })
  }), t[0] = u;else u = t[0];
  let d;
  if (t[1] !== l || t[2] !== i) d = UMe.jsx(U, {
    flexDirection: "column",
    flexGrow: 1,
    children: l ? UMe.jsx(zg, {
      dimColor: true,
      children: i.trim()
    }) : UMe.jsx(w, {
      dimColor: true,
      italic: true,
      children: i.trim().replace(/\s+/g, " ")
    })
  }), t[1] = l, t[2] = i, t[3] = d;else d = t[3];
  let p;
  if (t[4] !== c || t[5] !== d) p = UMe.jsxs(U, {
    flexDirection: "row",
    marginTop: c,
    width: "100%",
    children: [u, d]
  }), t[4] = c, t[5] = d, t[6] = p;else p = t[6];
  return p;
}
var Usl, UMe;