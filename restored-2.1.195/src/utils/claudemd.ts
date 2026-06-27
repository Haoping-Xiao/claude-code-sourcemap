// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dC
// matched 2.1.88 source: src/utils/claudemd.ts
// class=modified  jaccard=0.2298  score=0.4415  fileCov=0.324
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var dC = E(() => {
  Qi();
  Oct();
  kt();
  ft();
  GNt();
  Uh();
  id();
  Un();
  Rm();
  er();
  BE();
  je();
  Mm();
  wr();
  fn();
  At();
  oc();
  ik();
  Iv();
  ys();
  sa();
  sp();
  Ao();
  Hu();
  Yf();
  vf();
  i2e();
  dr();
  ((Rsa = R(D3e(), 1)), (bh = require("path")), (Lsa = R(kso(), 1)));
  Pip = new Set([
    ".md",
    ".txt",
    ".text",
    ".json",
    ".yaml",
    ".yml",
    ".toml",
    ".xml",
    ".csv",
    ".html",
    ".htm",
    ".css",
    ".scss",
    ".sass",
    ".less",
    ".js",
    ".ts",
    ".tsx",
    ".jsx",
    ".mjs",
    ".cjs",
    ".mts",
    ".cts",
    ".py",
    ".pyi",
    ".pyw",
    ".rb",
    ".erb",
    ".rake",
    ".go",
    ".rs",
    ".java",
    ".kt",
    ".kts",
    ".scala",
    ".c",
    ".cpp",
    ".cc",
    ".cxx",
    ".h",
    ".hpp",
    ".hxx",
    ".cs",
    ".swift",
    ".sh",
    ".bash",
    ".zsh",
    ".fish",
    ".ps1",
    ".bat",
    ".cmd",
    ".env",
    ".ini",
    ".cfg",
    ".conf",
    ".config",
    ".properties",
    ".sql",
    ".graphql",
    ".gql",
    ".proto",
    ".vue",
    ".svelte",
    ".astro",
    ".ejs",
    ".hbs",
    ".pug",
    ".jade",
    ".php",
    ".pl",
    ".pm",
    ".lua",
    ".r",
    ".R",
    ".dart",
    ".ex",
    ".exs",
    ".erl",
    ".hrl",
    ".clj",
    ".cljs",
    ".cljc",
    ".edn",
    ".hs",
    ".lhs",
    ".elm",
    ".ml",
    ".mli",
    ".f",
    ".f90",
    ".f95",
    ".for",
    ".cmake",
    ".make",
    ".makefile",
    ".gradle",
    ".sbt",
    ".rst",
    ".adoc",
    ".asciidoc",
    ".org",
    ".tex",
    ".latex",
    ".lock",
    ".log",
    ".diff",
    ".patch",
  ]);
  Wv = Cn(async (e = false) => {
    if (vl()) return [];
    let t = Date.now();
    In("info", "memory_files_started");
    let n = [],
      r = new Set(),
      o = Lg(),
      s = e || o.hasClaudeMdExternalIncludesApproved || false,
      i = r5e("Managed");
    n.push(...(await zW(i, "Managed", r, s)));
    let a = aCs();
    if (a)
      n.push({
        path: RLr,
        type: "Managed",
        content: a,
        globs: [],
        contentDiffersFromDisk: true,
        rawContent: a,
      });
    let l = yn("policySettings")?.claudeMd;
    if (l)
      n.push({
        path: Dso,
        type: "Managed",
        content: l,
        globs: [],
        contentDiffersFromDisk: true,
        rawContent: l,
      });
    let c = s1n();
    if (
      (n.push(
        ...(await zRe({
          rulesDir: c,
          type: "Managed",
          processedPaths: r,
          includeExternal: s,
          conditionalRule: false,
        })),
      ),
      Om("userSettings"))
    ) {
      let b = r5e("User");
      n.push(...(await zW(b, "User", r, true)));
      let _ = i1n();
      n.push(
        ...(await zRe({
          rulesDir: _,
          type: "User",
          processedPaths: r,
          includeExternal: true,
          conditionalRule: false,
        })),
      );
    }
    let u = [],
      d = yr(),
      p = d;
    while (p !== bh.parse(p).root) (u.push(p), (p = bh.dirname(p)));
    let f = Tu(d),
      m = qf(d),
      g = f !== null && m !== null && dv(f) !== dv(m) && dL(f, m);
    for (let b of u.reverse()) {
      let _ = g && dL(b, m) && !dL(b, f);
      if (Om("projectSettings") && !_) {
        let S = bh.join(b, "CLAUDE.md");
        n.push(...(await zW(S, "Project", r, s)));
        let A = bh.join(b, ".claude", "CLAUDE.md");
        n.push(...(await zW(A, "Project", r, s)));
        let v = bh.join(b, ".claude", "rules");
        n.push(
          ...(await zRe({
            rulesDir: v,
            type: "Project",
            processedPaths: r,
            includeExternal: s,
            conditionalRule: false,
          })),
        );
      }
      if (Om("localSettings")) {
        let S = bh.join(b, "CLAUDE.local.md");
        n.push(...(await zW(S, "Local", r, s)));
      }
    }
    if (ut(process.env.CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD)) {
      let b = c0();
      for (let _ of b) {
        let S = bh.join(_, "CLAUDE.md");
        n.push(...(await zW(S, "Project", r, s)));
        let A = bh.join(_, ".claude", "CLAUDE.md");
        n.push(...(await zW(A, "Project", r, s)));
        let v = bh.join(_, ".claude", "rules");
        if (
          (n.push(
            ...(await zRe({
              rulesDir: v,
              type: "Project",
              processedPaths: r,
              includeExternal: s,
              conditionalRule: false,
            })),
          ),
          Om("localSettings"))
        ) {
          let C = bh.join(_, "CLAUDE.local.md");
          n.push(...(await zW(C, "Local", r, s)));
        }
      }
    }
    if (lu()) {
      let b = process.env.CLAUDE_COWORK_MEMORY_INDEX_CONTENT;
      if (b !== "") {
        let _ = b !== void 0 ? Nip(b) : (await Osa(T_e(), "AutoMem")).info;
        if (_) {
          let S = dv(_.path);
          if (!r.has(S)) (r.add(S), n.push(_));
        }
      }
    }
    let h = n.reduce((b, _) => b + _.content.length, 0);
    In("info", "memory_files_completed", {
      duration_ms: Date.now() - t,
      file_count: n.length,
      total_content_length: h,
    });
    let y = {};
    for (let b of n) y[b.type] = (y[b.type] ?? 0) + 1;
    if (!ksa)
      ((ksa = true),
        G("tengu_claudemd__initial_load", {
          file_count: n.length,
          total_content_length: h,
          user_count: y.User ?? 0,
          project_count: y.Project ?? 0,
          local_count: y.Local ?? 0,
          managed_count: y.Managed ?? 0,
          automem_count: y.AutoMem ?? 0,
          duration_ms: Date.now() - t,
        }));
    if (!e) {
      let b = Wip();
      if (b !== void 0 && Sjt())
        for (let _ of n) {
          if (!Nsa(_.type)) continue;
          if (KRe(_.path)) continue;
          let S = _.parent ? "include" : b;
          o5e(_.path, _.type, S, {
            globs: _.globs,
            parentFilePath: _.parent,
          });
        }
    }
    return n;
  });
});
function Ejt() {
  let e = process.env.CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS;
  if (ut(e)) return false;
  if (ml(e)) return true;
  return Dr().includeGitInstructions ?? true;
}
