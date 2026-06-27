// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZWl
// matched 2.1.88 source: src/components/LogoV2/feedConfigs.tsx
// class=modified  jaccard=0.2537  score=0.9537  fileCov=0.2569
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ZWl] deps: Ye, LW, YWl
((XWl = R(lt(), 1)), (JWl = R(rt(), 1)), (mAt = R(se(), 1)));
function createWhatsNewFeed(releaseNotes) {
  let t = releaseNotes.map((r) => ({
      text: r,
    })),
    n = "Check the Claude Code changelog for updates";
  return {
    title: "What's new",
    lines: t,
    footer: t.length > 0 ? "/release-notes for more" : void 0,
    emptyMessage: "Check the Claude Code changelog for updates",
  };
}
function createProjectOnboardingFeed(steps) {
  let n = steps
      .filter(({ isEnabled: o }) => o)
      .sort((o, s) => Number(o.isComplete) - Number(s.isComplete))
      .map(({ text: o, isComplete: s }) => ({
        text: `${s ? `${nt.tick} ` : ""}${o}`,
      })),
    r =
      $t() === e5l.homedir()
        ? "Note: You have launched claude in your home directory. For the best experience, launch it in a project directory instead."
        : void 0;
  if (r)
    n.push({
      text: r,
    });
  return {
    title: "Tips for getting started",
    lines: n,
  };
}
var e5l;
