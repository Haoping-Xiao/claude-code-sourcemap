// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z_l
// matched 2.1.88 source: src/tools/LSPTool/schemas.ts
// class=modified  jaccard=0.6158  score=0.6985  fileCov=0.8387
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Z_l] deps: @modelcontextprotocol/sdk/dist/esm/types.js
Q_l = ve(() => {
  let e = H.strictObject({
      operation: H.literal("goToDefinition"),
      filePath: H.string().describe("The absolute or relative path to the file"),
      line: H.number().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: H.number()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: H.string().optional(),
    }),
    t = H.strictObject({
      operation: H.literal("findReferences"),
      filePath: H.string().describe("The absolute or relative path to the file"),
      line: H.number().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: H.number()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: H.string().optional(),
    }),
    n = H.strictObject({
      operation: H.literal("hover"),
      filePath: H.string().describe("The absolute or relative path to the file"),
      line: H.number().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: H.number()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: H.string().optional(),
    }),
    r = H.strictObject({
      operation: H.literal("documentSymbol"),
      filePath: H.string().describe("The absolute or relative path to the file"),
      line: H.number().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: H.number()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: H.string().optional(),
    }),
    o = H.strictObject({
      operation: H.literal("workspaceSymbol"),
      filePath: H.string().describe("The absolute or relative path to the file"),
      line: H.number().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: H.number()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: H.string()
        .optional()
        .describe(
          "The symbol name or partial name to search for. Most language servers return no results for an empty query.",
        ),
    }),
    s = H.strictObject({
      operation: H.literal("goToImplementation"),
      filePath: H.string().describe("The absolute or relative path to the file"),
      line: H.number().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: H.number()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: H.string().optional(),
    }),
    i = H.strictObject({
      operation: H.literal("prepareCallHierarchy"),
      filePath: H.string().describe("The absolute or relative path to the file"),
      line: H.number().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: H.number()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: H.string().optional(),
    }),
    a = H.strictObject({
      operation: H.literal("incomingCalls"),
      filePath: H.string().describe("The absolute or relative path to the file"),
      line: H.number().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: H.number()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: H.string().optional(),
    }),
    l = H.strictObject({
      operation: H.literal("outgoingCalls"),
      filePath: H.string().describe("The absolute or relative path to the file"),
      line: H.number().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: H.number()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: H.string().optional(),
    });
  return H.discriminatedUnion("operation", [e, t, n, r, o, s, i, a, l]);
});
function tbl(e, t, n) {
  try {
    let r = qt(),
      o = ds(e),
      { buffer: s, bytesRead: i } = r.readSync(o, {
        length: ebl,
      }),
      l = s.toString("utf-8", 0, i).split(`
`);
    if (t < 0 || t >= l.length) return null;
    if (i === ebl && t === l.length - 1) return null;
    let c = l[t];
    if (!c || n < 0 || n >= c.length) return null;
    let u = /[\w$'!]+|[+\-*/%&|^~<>=]+/g,
      d;
    while ((d = u.exec(c)) !== null) {
      let p = d.index,
        f = p + d[0].length;
      if (n >= p && n < f) {
        let m = d[0];
        return $a(m, 30);
      }
    }
    return null;
  } catch (r) {
    if (r instanceof Error)
      T(`Symbol extraction failed for ${e}:${t}:${n}: ${r.message}`, {
        level: "warn",
      });
    return null;
  }
}
var ebl = 65536;
