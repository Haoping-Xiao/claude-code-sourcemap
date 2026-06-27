// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Er
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/resources/beta/messages/messages.mjs
// class=partial  jaccard=0.0973  score=0.5335  fileCov=0.1063
// note: low-confidence suggestion: node_modules/@anthropic-ai/sdk/resources/beta/messages/messages.mjs; dir inferred from dep-graph -> bridge; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _Er] deps: utils/bash/ParsedCommand.ts
cwe = class cwe extends cp {
  create(e, t) {
    let {
      betas: n,
      ...r
    } = e;
    return this._client.post("/v1/complete", {
      body: r,
      timeout: this._client._options.timeout ?? 600000,
      ...t,
      headers: ms([{
        ...(n?.toString() != null ? {
          "anthropic-beta": n?.toString()
        } : void 0)
      }, t?.headers]),
      stream: e.stream ?? false
    });
  }
};
function jos(e) {
  return e?.output_config?.format;
}
function bEr(e, t, n) {
  let r = jos(t);
  if (!t || !("parse" in (r ?? {}))) return {
    ...e,
    content: e.content.map(o => {
      if (o.type === "text") return Object.defineProperty({
        ...o
      }, "parsed_output", {
        value: null,
        enumerable: false
      });
      return o;
    }),
    parsed_output: null
  };
  return SEr(e, t, n);
}
function SEr(e, t, n) {
  let r = null,
    o = e.content.map(s => {
      if (s.type === "text") {
        let i = LKc(t, s.text);
        if (r === null) r = i;
        return Object.defineProperty({
          ...s
        }, "parsed_output", {
          value: i,
          enumerable: false
        });
      }
      return s;
    });
  return {
    ...e,
    content: o,
    parsed_output: r
  };
}
function LKc(e, t) {
  let n = jos(e);
  if (n?.type !== "json_schema") return null;
  try {
    if ("parse" in n) return n.parse(t);
    return JSON.parse(t);
  } catch (r) {
    throw new ui(`Failed to parse structured output: ${r}`);
  }
}