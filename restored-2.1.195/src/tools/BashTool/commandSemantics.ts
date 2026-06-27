// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AKt
// matched 2.1.88 source: src/tools/BashTool/commandSemantics.ts
// class=modified  jaccard=0.1892  score=0.4166  fileCov=0.2574
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function OEf(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function Kvl(e) {
  if (!OEf(e)) return null;
  let t = {
      ...e,
    },
    n = [];
  if ("timeout_ms" in t && !("timeout" in t)) {
    let r = t.timeout_ms;
    if (typeof r === "number" || (typeof r === "string" && /^\d+$/.test(r)))
      ((t.timeout = r), n.push("timeout_ms"));
    delete t.timeout_ms;
  }
  return n.length
    ? {
        input: t,
        shapeClass: n.join(","),
      }
    : null;
}
function COMMAND_SEMANTICS(e) {
  let t = GEf(e);
  if (t === "git") {
    let r = FEf(e);
    if (r === "diff" || r === "grep")
      return (o, s, i) => ({
        isError: o >= 2,
        message: o === 1 ? (r === "grep" ? "No matches found" : "Files differ") : void 0,
      });
  }
  let n = BEf.get(t);
  return n !== void 0 ? n : DEFAULT_SEMANTIC;
}
function FEf(e) {
  let r = (By(e).at(-1) || e).trim().split(/\s+/);
  if (r[0] !== "git") return;
  for (let o = 1; o < r.length; o++) {
    let s = r[o];
    if (s.startsWith("-")) {
      if (s === "-C" || s === "-c") o++;
      continue;
    }
    return s;
  }
  return;
}
function jEf(e) {
  return e.trim().split(/\s+/)[0] || "";
}
function GEf(e) {
  let n = By(e).at(-1) || e;
  return jEf(n);
}
function Yvl(e, t, n, r) {
  let s = COMMAND_SEMANTICS(e)(t, n, r);
  return {
    isError: s.isError,
    message: s.message,
  };
}
var DEFAULT_SEMANTIC = (e, t, n) => ({
    isError: e !== 0,
    message: e !== 0 ? `Command failed with exit code ${e}` : void 0,
  }),
  BEf;
