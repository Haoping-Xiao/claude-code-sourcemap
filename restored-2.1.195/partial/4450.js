// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rwl
// matched 2.1.88 source: src/utils/readEditContext.ts
// class=partial  jaccard=0.1996  score=0.2692  fileCov=0.4356
// note: low-confidence suggestion: src/utils/readEditContext.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rwl = E(() => {
  Uh();
  M7();
  sr();
  LDo();
  twl = require("fs/promises"), HKt = require("path");
});
async function swl(e, t) {
  let n;
  try {
    n = yce();
  } catch {
    return null;
  }
  if (n === null) return null;
  let r = TKt.resolve(e),
    o = n.find(a => a.scope === "team" && a.promptIndex !== void 0 && TKt.resolve(TKt.join(t, a.mount, ...a.promptIndex.split("/"))) === r);
  if (o === void 0 || o.promptIndex === void 0) return null;
  let s;
  try {
    s = (await owl.stat(e)).size;
  } catch {
    return null;
  }
  let i = o.promptIndexMaxBytes ?? bce;
  return LJn({
    label: "memory index",
    displayPath: `team/${o.mount}/${o.promptIndex}`,
    sizeBytes: s,
    byteCap: i
  });
}
var owl, TKt;