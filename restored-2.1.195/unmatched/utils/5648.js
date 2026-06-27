// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cwc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cwc = E(() => {
  Uh();
  AA();
});
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