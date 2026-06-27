// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sUl
// matched 2.1.88 source: src/commands/init.ts
// class=modified  jaccard=0.4764  score=1  fileCov=0.4764
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var sUl = E(() => {
  HUt();
  Un();
  fn();
  ((a1f = {
    type: "prompt",
    name: "init",
    get description() {
      return ut(process.env.CLAUDE_CODE_NEW_INIT)
        ? "Initialize new CLAUDE.md file(s) and optional skills/hooks with codebase documentation"
        : "Initialize a new CLAUDE.md file with codebase documentation";
    },
    contentLength: 0,
    progressMessage: "analyzing your codebase",
    source: "builtin",
    async getPromptForCommand() {
      return (
        Gat(),
        [
          {
            type: "text",
            text: o1f() ? i1f : s1f,
          },
        ]
      );
    },
  }),
    (oUl = a1f));
});
var l1f, iUl;
