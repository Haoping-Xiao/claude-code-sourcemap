// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DJa
// matched 2.1.88 source: src/utils/model/modelSupportOverrides.ts
// class=partial  jaccard=0.0813  score=0.1324  fileCov=0.1738
// note: low-confidence suggestion: src/utils/model/modelSupportOverrides.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DJa] deps: hooks/useTerminalSize.ts, has-flag/index.js, utils/model/bedrock.ts, services/teamMemorySync/secretScanner.ts, keybindings/useShortcutDisplay.ts, undici/lib/mock/mock-agent.js, @anthropic-ai/bedrock-sdk/client.mjs, @ant/computer-use-mcp/src/toolCalls.ts, vH, screens/REPL.tsx
GHo = R(lt(), 1), vF = R(rt(), 1), Zh = R(se(), 1), tMe = ["sonnet", "opus", "haiku", "fable"], z9n = {
  sonnet: "Sonnet",
  opus: "Opus",
  haiku: "Haiku",
  fable: "Fable"
}, pJp = {
  sonnet: "ANTHROPIC_DEFAULT_SONNET_MODEL",
  opus: "ANTHROPIC_DEFAULT_OPUS_MODEL",
  haiku: "ANTHROPIC_DEFAULT_HAIKU_MODEL",
  fable: "ANTHROPIC_DEFAULT_FABLE_MODEL"
};
RJa = {
  auth: "auth failed",
  permission: "no InvokeModel permission",
  model: "not enabled in this account",
  network: "unreachable",
  other: "request failed"
};
function Vc(e) {
  let t = PJa.c(10),
    {
      message: n,
      bold: r,
      dimColor: o,
      subtitle: s
    } = e,
    i = r === void 0 ? false : r,
    a = o === void 0 ? false : o,
    l;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) l = W9e.jsx(Vu, {}), t[0] = l;else l = t[0];
  let c;
  if (t[1] !== i || t[2] !== a || t[3] !== n) c = W9e.jsxs(U, {
    flexDirection: "row",
    children: [l, W9e.jsxs(w, {
      bold: i,
      dimColor: a,
      children: [" ", n]
    })]
  }), t[1] = i, t[2] = a, t[3] = n, t[4] = c;else c = t[4];
  let u;
  if (t[5] !== s) u = s && W9e.jsx(w, {
    dimColor: true,
    children: s
  }), t[5] = s, t[6] = u;else u = t[6];
  let d;
  if (t[7] !== c || t[8] !== u) d = W9e.jsxs(U, {
    flexDirection: "column",
    children: [c, u]
  }), t[7] = c, t[8] = u, t[9] = d;else d = t[9];
  return d;
}
var PJa, W9e;