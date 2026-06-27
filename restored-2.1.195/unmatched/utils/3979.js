// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UTo
// matched 2.1.88 source: src/utils/swarm/It2SetupPrompt.tsx
// class=new  jaccard=0.0507  score=0.3475  fileCov=0.056
// note: nearest: src/utils/swarm/It2SetupPrompt.tsx (0.0507); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UTo = E(() => {
  Xr();
  x8n = Dy({
    kind: "it2_setup",
    payload: ve(() => H.object({
      tmuxAvailable: H.boolean()
    })),
    result: ve(() => H.enum(["installed", "use-tmux", "cancelled"])),
    default: "cancelled"
  });
});
function tel(e) {
  return eel.test(e);
}
function Lht(e) {
  let t = eel.exec(e);
  if (t) {
    let n = t[0].codePointAt(0);
    throw new IF(`Refusing to send command containing control character U+${n.toString(16).padStart(4, "0").toUpperCase()} to terminal pane`);
  }
}
function u9t(e) {
  return e === "tmux" || e === "iterm2";
}
var IF, eel;