// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UTc
// matched 2.1.88 source: src/skills/bundled/claudeInChrome.ts
// class=modified  jaccard=0.3083  score=0.5414  fileCov=0.4173
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var UTc = E(() => {
  fh();
  G1();
  sa();
  AA();
  Wbm = `After you finish implementing the change:
1. **Code review** \u2014 Invoke the \`${nE}\` tool with \`skill: "code-review"\` to find correctness bugs (it reports findings; it does not edit code). Fix any findings it surfaces before continuing.
2. **Run unit tests** \u2014 Run the project's test suite (check for package.json scripts, Makefile targets, or common commands like \`npm test\`, \`bun test\`, \`pytest\`, \`go test\`). If tests fail, fix them.
3. **Test end-to-end** \u2014 Follow the e2e test recipe from the coordinator's prompt (below). If the recipe says to skip e2e for this unit, skip it.
4. **Commit and push** \u2014 Commit all changes with a clear message, push the branch, and create a PR with \`gh pr create\`. Use a descriptive title. If \`gh\` is not available or the push fails, note it in your final message.
5. **Report** \u2014 End with a single line: \`PR: <url>\` so the coordinator can track it. If no PR was created, end with \`PR: none \u2014 <reason>\`.`;
});
function FTc() {
  Nd({
    name: "claude-in-chrome",
    menuDescription: "Let Claude browse and interact with pages in your Chrome",
    description:
      "Automates your Chrome browser to interact with web pages - clicking elements, filling forms, capturing screenshots, reading console logs, and navigating sites. Opens pages in new tabs within your existing Chrome session. Requires site-level permissions before executing (configured in the extension).",
    whenToUse:
      "When the user wants to interact with web pages, automate browser tasks, capture screenshots, read console logs, or perform any browser-based actions. Always invoke BEFORE attempting to use any mcp__claude-in-chrome__* tools.",
    allowedTools: [],
    userInvocable: true,
    isEnabled: () => gBo(),
    async getPromptForCommand(e) {
      let t = qMo;
      if (e)
        t += `

## Task

${e}`;
      return [
        {
          type: "text",
          text: t,
        },
      ];
    },
  });
}
