// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PLo
// matched 2.1.88 source: src/tools/BashTool/BashTool.tsx
// class=new  jaccard=0.0474  score=0.4178  fileCov=0.0507
// note: nearest: src/tools/BashTool/BashTool.tsx (0.0474); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var PLo = E(() => {
  nJn = ["npm", "yarn", "pnpm", "node", "python", "python3", "go", "cargo", "make", "docker", "terraform", "webpack", "vite", "jest", "pytest", "curl", "git", "dotnet", "msbuild", "nuget", "build", "test", "serve", "watch", "dev"];
});
function kHl(e) {
  let r = (e.trim().replace(/^[&.]\s+/, "").split(/\s+/)[0] || "").replace(/^["']|["']$/g, "");
  return (r.split(/[\\/]/).pop() || r).toLowerCase().replace(/\.exe$/, "");
}
function U_f(e) {
  let n = e.split(/[;|]/).filter(r => r.trim()).at(-1) || e;
  return kHl(n);
}
function Fbt(e) {
  for (let t of e.split(/[\r\n;|&]/)) {
    let n = j_f.get(kHl(t));
    if (n) return n;
  }
  return "other";
}
function RHl(e) {
  if (!e.trim()) return "empty";
  for (let [t, n] of G_f) if (n.test(e)) return t;
  return "other";
}
function LHl(e) {
  let t = /'([^']+)' is not recognized/i.exec(e) ?? /CommandNotFoundException.*?\[([^\],]+)/.exec(e);
  if (!t) return null;
  let n = t[1].toLowerCase().replace(/\.exe$/, "");
  if (W_f.has(n)) return "bash_builtin";
  if (q_f.has(n)) return "dev_tool";
  return "other";
}
function DHl(e, t, n, r) {
  let o = U_f(e);
  return (B_f.get(o) ?? N_f)(t, n, r);
}
var N_f = (e, t, n) => ({
    isError: e !== 0,
    message: e !== 0 ? `Command failed with exit code ${e}` : void 0
  }),
  MLo = (e, t, n) => ({
    isError: e >= 2,
    message: e === 1 ? "No matches found" : void 0
  }),
  B_f,
  F_f,
  j_f,
  G_f,
  W_f,
  q_f;