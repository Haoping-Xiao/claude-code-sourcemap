// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rwl
// matched 2.1.88 source: src/utils/attachments.ts
// class=new  jaccard=0.0037  score=0.2049  fileCov=0.0037
// note: nearest: src/utils/attachments.ts (0.0037); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rwl] deps: Uh, M7, sr, LDo
twl = require("fs/promises"), HKt = require("path");
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