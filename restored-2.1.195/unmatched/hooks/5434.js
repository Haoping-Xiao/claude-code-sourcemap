// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X8o
// matched 2.1.88 source: src/components/HelpV2/HelpV2.tsx
// class=new  jaccard=0.0337  score=0.1389  fileCov=0.0426
// note: nearest: src/components/HelpV2/HelpV2.tsx (0.0337); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var X8o = E(() => {
  hut();
  nhc = R(rt(), 1);
});
function rhc(e) {
  return `${ITt.major(e, {
    loose: true
  })}.${ITt.minor(e, {
    loose: true
  })}.${ITt.patch(e, {
    loose: true
  })}`;
}
function qur(e, t = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.195",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-06-26T01:00:56Z",
  GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
}.VERSION) {
  let [n, r] = ohc.useState(() => rhc(t));
  if (!e) return null;
  let o = rhc(e);
  if (o !== n) return r(o), o;
  return null;
}
var ohc, ITt;