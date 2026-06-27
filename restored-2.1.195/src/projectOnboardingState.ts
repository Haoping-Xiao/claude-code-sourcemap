// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WQr
// matched 2.1.88 source: src/projectOnboardingState.ts
// class=modified  jaccard=0.4087  score=0.795  fileCov=0.4568
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module WQr] deps: Ed, Ye, kne, DGe
jat = R(rt(), 1);
function EUt(e, t) {
  switch (t) {
    case "bash":
      return `!${e}`;
    default:
      return e;
  }
}
function ek(e) {
  if (e.startsWith("!")) return "bash";
  return "prompt";
}
function BU(e) {
  if (ek(e) === "prompt") return e;
  return e.slice(1);
}
function AUt(e) {
  return e === "!";
}
function getSteps() {
  let e = qt().existsSync(E8i.join($t(), "CLAUDE.md")),
    t = iAs($t());
  return [
    {
      key: "workspace",
      text: "Ask Claude to create a new app or clone a repository",
      isComplete: false,
      isCompletable: true,
      isEnabled: t,
    },
    {
      key: "claudemd",
      text: "Run /init to create a CLAUDE.md file with instructions for Claude",
      isComplete: e,
      isCompletable: true,
      isEnabled: !t,
    },
  ];
}
function A8i() {
  return getSteps()
    .filter(({ isCompletable: e, isEnabled: t }) => e && t)
    .every(({ isComplete: e }) => e);
}
function Gat() {
  if (Lg().hasCompletedProjectOnboarding) return;
  if (A8i())
    (pH((e) => ({
      ...e,
      hasCompletedProjectOnboarding: true,
    })),
      xe("onboarding_project_complete"));
}
function T8i() {
  pH((e) => ({
    ...e,
    projectOnboardingSeenCount: e.projectOnboardingSeenCount + 1,
  }));
}
var E8i, H8i;
