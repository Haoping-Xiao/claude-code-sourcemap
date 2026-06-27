// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SPc
// matched 2.1.88 source: src/utils/git/gitignore.ts
// class=partial  jaccard=0.1434  score=0.465  fileCov=0.1717
// note: low-confidence suggestion: src/utils/git/gitignore.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SPc]
gvt = R(rt(), 1), YCm = R(se(), 1);
KCm = gvt.createContext(null);
async function HPc(e) {
  if (APc.has(e)) return;
  APc.add(e);
  try {
    let t = await E0(e);
    if (!t) return;
    let n = (await HG(t)) ?? t,
      r = FYo.join(n, "info", "exclude"),
      o = "";
    try {
      if (o = await hvt.readFile(r, "utf-8"), o.includes(EPc)) return;
    } catch (a) {
      if (on(a) !== "ENOENT") throw a;
      await hvt.mkdir(FYo.join(n, "info"), {
        recursive: true
      });
    }
    let s = o && !o.endsWith(`
`) ? `
` : "",
      i = [EPc, ...XCm, ""].join(`
`);
    await hvt.appendFile(r, s + i);
  } catch (t) {
    T(`ensureClaudeRuntimeFilesExcluded: ${t}`);
  }
}
var hvt,
  FYo,
  XCm,
  EPc = "# claude-code-runtime",
  APc;