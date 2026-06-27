// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T9l
// matched 2.1.88 source: src/commands/review.ts
// class=new  jaccard=0.0502  score=0.1237  fileCov=0.0778
// note: nearest: src/commands/review.ts (0.0502); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var T9l = E(() => {
  kt();
  jc();
  e1();
  qyt();
  kAt();
  E9l();
  H9l = R(se(), 1);
});
var LWf = "https://code.claude.com/docs/en/claude-code-on-the-web",
  DWf = "Run `gh pr list` to show the open pull requests, then ask the user which one to review (`/review <number>`).",
  PWf = (e, t) => `Review target: GitHub pull request \`${e}\`.

Gather this target's diff with (instead of any local \`git diff\`):
1. \`gh pr view ${e} --json title,body,author,baseRefName,headRefName,state,additions,deletions,changedFiles,labels\` for context
2. \`gh pr diff ${e}\` for the unified diff

The PR's diff is the only review scope \u2014 local working-tree changes are out of scope. When an angle needs surrounding code, Read the files in this checkout if it matches the PR's branch, otherwise fetch file contents via \`gh\`.
${t ? `
Additional instructions from the user: ${t}
` : ""}
${qXn}
## Present the review

After the final phase, do not reply with the raw JSON findings array. Present a readable review: a 2-3 sentence overview of what the PR does, then the surviving findings most-severe first as \`file:line \u2014 summary (failure scenario)\`, or a note that nothing survived verification.`,
  MWf,
  v9l,
  rsr;