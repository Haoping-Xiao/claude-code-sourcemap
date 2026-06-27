// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _m
// matched 2.1.88 source: src/tools/SyntheticOutputTool/SyntheticOutputTool.ts
// class=modified (alt of src/tools/SyntheticOutputTool/SyntheticOutputTool.ts)  jaccard=0.2059  score=0.6028  fileCov=0.2382
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _m] deps: services/analytics/growthbook.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/platform.ts, utils/windowsPaths.ts
W1 = [Co, Ss];
var RI = "NotebookEdit";
var nE = "Skill";
var Ly = "SendMessage";
var cC = "TaskCreate";
var kX = "TaskGet";
var ZD = "TaskUpdate";
function Toa(e) {
  return e.isNonInteractiveSession || e.isBgSession === true;
}
function Lct(e) {
  let t = Aoa.get(e);
  if (t) return t;
  let n = buildSyntheticOutputTool(e);
  return (Aoa.set(e, n), n);
}
function buildSyntheticOutputTool(jsonSchema) {
  try {
    let t = new Hoa.Ajv({
      allErrors: true,
    });
    if (!t.validateSchema(jsonSchema))
      return {
        error: t.errorsText(t.errors),
      };
    let r = t.compile(jsonSchema);
    return {
      tool: {
        ...Xoo,
        inputJSONSchema: jsonSchema,
        async call(o) {
          if (!r(o)) {
            let i = r.errors?.map((l) => `${l.instancePath || "root"}: ${l.message}`).join(", "),
              a = r.errors?.map((l) => l.keyword).join(",");
            throw new mi(
              `Output does not match required schema: ${i}`,
              `StructuredOutput schema mismatch: ${a ?? ""}`,
            );
          }
          return {
            data: "Structured output provided successfully",
            structured_output: o,
            endsTurn: true,
          };
        },
      },
    };
  } catch (t) {
    return {
      error: t instanceof Error ? t.message : String(t),
    };
  }
}
var Hoa,
  Gop,
  Wop,
  SYNTHETIC_OUTPUT_TOOL_NAME = "StructuredOutput",
  Xoo,
  Aoa;
