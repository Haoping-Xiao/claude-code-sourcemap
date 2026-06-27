// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cwc
// matched 2.1.88 source: src/skills/bundled/loop.ts
// class=partial  jaccard=0.0821  score=0.3167  fileCov=0.0998
// note: low-confidence suggestion: src/skills/bundled/loop.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function uwc() {
  Nd({
    name: y8t,
    menuDescription: "Clean up the changed code without changing behavior",
    description: "Review the changed code for reuse, simplification, efficiency, and altitude cleanups, then apply the fixes. Quality only \u2014 it does not hunt for bugs; use /code-review for that.",
    argumentHint: "[<target>]",
    userInvocable: true,
    async getPromptForCommand(e) {
      let t = e.trim();
      return [{
        type: "text",
        text: `${t ? `Review target: \`${t}\`

` : ""}${DEm}`
      }];
    }
  });
}
var DEm;