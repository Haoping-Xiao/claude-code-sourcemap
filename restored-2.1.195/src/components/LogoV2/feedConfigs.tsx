// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZWl
// matched 2.1.88 source: src/components/LogoV2/feedConfigs.tsx
// class=modified  jaccard=0.2537  score=0.9537  fileCov=0.2569
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ZWl] deps: hooks/useTerminalSize.ts, ink/components/Box.tsx, components/LogoV2/FeedColumn.tsx
((XWl = R(lt(), 1)), (JWl = R(rt(), 1)), (mAt = R(se(), 1)));
function createWhatsNewFeed(releaseNotes) {
  let lines = releaseNotes.map((r) => ({
      text: r,
    })),
    n = "Check the Claude Code changelog for updates";
  return {
    title: "What's new",
    lines: lines,
    footer: lines.length > 0 ? "/release-notes for more" : void 0,
    emptyMessage: "Check the Claude Code changelog for updates",
  };
}
function createProjectOnboardingFeed(steps) {
  let lines = steps
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
    lines.push({
      text: r,
    });
  return {
    title: "Tips for getting started",
    lines: lines,
  };
}
var e5l;
