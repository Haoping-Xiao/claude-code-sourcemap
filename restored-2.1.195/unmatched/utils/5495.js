// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ezo
// matched 2.1.88 source: src/utils/exampleCommands.ts
// class=new  jaccard=0.0477  score=1  fileCov=0.0477
// note: nearest: src/utils/exampleCommands.ts (0.0477); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ezo] deps: Qi, cEe, Lo, er, je, wr, Bi, sa, Ote
Bmm = [/(?:^|\/)(?:package-lock\.json|yarn\.lock|bun\.lock|bun\.lockb|pnpm-lock\.yaml|Pipfile\.lock|poetry\.lock|Cargo\.lock|Gemfile\.lock|go\.sum|composer\.lock|uv\.lock)$/, /\.generated\./, /(?:^|\/)(?:dist|build|out|target|node_modules|\.next|__pycache__)\//, /\.(?:min\.js|min\.css|map|pyc|pyo)$/, /\.(?:json|ya?ml|toml|xml|ini|cfg|conf|env|lock|txt|md|mdx|rst|csv|log|svg)$/i, /(?:^|\/)\.?(?:eslintrc|prettierrc|babelrc|editorconfig|gitignore|gitattributes|dockerignore|npmrc)/, /(?:^|\/)(?:tsconfig|jsconfig|biome|vitest\.config|jest\.config|webpack\.config|vite\.config|rollup\.config)\.[a-z]+$/, /(?:^|\/)\.(?:github|vscode|idea|claude)\//, /(?:^|\/)(?:CHANGELOG|LICENSE|CONTRIBUTING|CODEOWNERS|README)(?:\.[a-z]+)?$/i];
dbc = Cn(() => {
  let e = Lg(),
    t = e.exampleFiles?.length ? HL(e.exampleFiles) : "<filepath>",
    n = ["fix lint errors", "fix typecheck errors", `how does ${t} work?`, `refactor ${t}`, "how do I log an error?", `edit ${t} to...`, `write a test for ${t}`, "create a util logging.py that..."];
  return `Try "${HL(n)}"`;
}), pbc = Cn(async () => {
  let e = Lg(),
    t = Date.now(),
    n = e.exampleFilesGeneratedAt ?? 0;
  if (t - n > Gmm) e.exampleFiles = [];
  if (!e.exampleFiles?.length) jmm().then(r => {
    if (r.length) pH(o => ({
      ...o,
      exampleFiles: r,
      exampleFilesGeneratedAt: Date.now()
    }));
  });
});
function gbc({
  input: e,
  submitCount: t,
  hasMessages: n,
  viewingAgentName: r
}) {
  let o = Mme(),
    s = Ht(a => a.promptSuggestionEnabled);
  return mbc.useMemo(() => {
    if (e !== "") return;
    if (r) return `Message @${r.length > fbc ? r.slice(0, fbc - 1) + "\u2026" : r}\u2026`;
    if (o.some(XW) && (Dt().queuedCommandUpHintCount || 0) < Wmm) return "Press up to edit queued messages";
    if (t < 1 && !n && s) return dbc();
  }, [e, o, t, n, s, r]);
}
var mbc,
  Wmm = 3,
  fbc = 20;