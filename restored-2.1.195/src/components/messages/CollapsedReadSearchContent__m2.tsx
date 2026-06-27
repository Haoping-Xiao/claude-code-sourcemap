// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y0o
// matched 2.1.88 source: src/components/messages/CollapsedReadSearchContent.tsx
// class=modified (alt of src/components/messages/CollapsedReadSearchContent.tsx)  jaccard=0.0224  score=0.1189  fileCov=0.0269
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Y0o]
Byl = require("util");
Cmf = {
  "import-statement": "import",
  "dynamic-import": "import",
  "require-call": "require",
};
function J0o(e, t, n) {
  function r(s, i) {
    return async (a, l) => {
      if (typeof a !== "string") throw Error(`${s}: prompt must be a string`);
      let c;
      if (l !== void 0) {
        let p;
        try {
          p = Ft(e(l));
        } catch {
          throw Error(`${s}: schema must be JSON-serializable`);
        }
        if (p === null || typeof p !== "object" || Array.isArray(p))
          throw Error(`${s}: schema must be an object`);
        c = X0o(p);
      }
      let u = `repl_${Uyl.randomUUID()}`,
        d = {
          prompt: a.slice(0, 200),
        };
      n?.({
        type: "progress",
        toolUseID: u,
        data: {
          type: "repl_tool_call",
          toolName: s,
          toolInput: d,
          toolUseId: u,
          phase: "start",
        },
      });
      try {
        let p = await hbt({
            systemPrompt: Sc([]),
            userPrompt: a,
            outputFormat: c
              ? {
                  type: "json_schema",
                  schema: c,
                }
              : void 0,
            signal: t.abortController.signal,
            options: {
              model: i(),
              querySource: "repl_sampling",
              agents: [],
              isNonInteractiveSession: t.options.isNonInteractiveSession,
              hasAppendSystemPrompt: false,
              mcpTools: [],
              agentContext: t.agentContext,
            },
          }),
          f = zl(p.message.content);
        if (K1(f)) throw Error(f);
        let m = c ? Ft(vG(f)) : f;
        return (
          n?.({
            type: "progress",
            toolUseID: u,
            data: {
              type: "repl_tool_call",
              toolName: s,
              toolInput: d,
              toolUseId: u,
              phase: "complete",
              result: m,
            },
          }),
          m
        );
      } catch (p) {
        let f = p instanceof Error ? p.message : String(p);
        throw (
          n?.({
            type: "progress",
            toolUseID: u,
            data: {
              type: "repl_tool_call",
              toolName: s,
              toolInput: d,
              toolUseId: u,
              phase: "error",
              error: f,
            },
          }),
          p
        );
      }
    };
  }
  let o = r("haiku", Fw);
  return {
    haiku: o,
    opus: o,
    sonnet: o,
    fable: o,
  };
}
function X0o(e) {
  if (e === null || typeof e !== "object") return e;
  if (Array.isArray(e)) return e.map(X0o);
  let t = e,
    n = {};
  for (let r of Object.keys(t)) n[r] = X0o(t[r]);
  if (n.type === "object" && !("additionalProperties" in n)) n.additionalProperties = false;
  return n;
}
var Uyl;
