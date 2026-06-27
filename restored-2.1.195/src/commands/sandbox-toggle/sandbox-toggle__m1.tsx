// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SPc
// matched 2.1.88 source: src/commands/sandbox-toggle/sandbox-toggle.tsx
// class=modified (alt of src/commands/sandbox-toggle/sandbox-toggle.tsx)  jaccard=0.0297  score=0.1375  fileCov=0.0365
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SPc]
((gvt = R(rt(), 1)), (YCm = R(se(), 1)));
KCm = gvt.createContext(null);
async function call(onDone) {
  if (APc.has(onDone)) return;
  APc.add(onDone);
  try {
    let t = await E0(onDone);
    if (!t) return;
    let n = (await HG(t)) ?? t,
      r = FYo.join(n, "info", "exclude"),
      o = "";
    try {
      if (((o = await hvt.readFile(r, "utf-8")), o.includes(EPc))) return;
    } catch (a) {
      if (on(a) !== "ENOENT") throw a;
      await hvt.mkdir(FYo.join(n, "info"), {
        recursive: true,
      });
    }
    let s =
        o &&
        !o.endsWith(`
`)
          ? `
`
          : "",
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
