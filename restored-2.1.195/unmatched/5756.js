// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SPc
// matched 2.1.88 source: src/commands/sandbox-toggle/sandbox-toggle.tsx
// class=new  jaccard=0.0506  score=0.272  fileCov=0.0585
// note: nearest: src/commands/sandbox-toggle/sandbox-toggle.tsx (0.0506); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SPc = E(() => {
  gvt = R(rt(), 1), YCm = R(se(), 1);
  KCm = gvt.createContext(null);
});
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
        recursive: !0
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