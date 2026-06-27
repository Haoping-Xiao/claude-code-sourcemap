// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _m
// matched 2.1.88 source: src/tools/SyntheticOutputTool/SyntheticOutputTool.ts
// class=modified (alt of src/tools/SyntheticOutputTool/SyntheticOutputTool.ts)  jaccard=0.2059  score=0.6028  fileCov=0.2382
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _m] deps: Un, fn, Is, sj
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
  let n = qop(e);
  return (Aoa.set(e, n), n);
}
function qop(e) {
  try {
    let t = new Hoa.Ajv({
      allErrors: true,
    });
    if (!t.validateSchema(e))
      return {
        error: t.errorsText(t.errors),
      };
    let r = t.compile(e);
    return {
      tool: {
        ...Xoo,
        inputJSONSchema: e,
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
  Ip = "StructuredOutput",
  Xoo,
  Aoa;
