// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UYo
// matched 2.1.88 source: src/utils/fullscreen.ts
// class=partial  jaccard=0.0678  score=0.1549  fileCov=0.1077
// note: low-confidence suggestion: src/utils/fullscreen.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UYo = E(() => {
  ft();
  kt();
  je();
  sp();
  N5o();
  Btn = require("crypto"), dPc = 1000 / qCm;
});
function VCm() {
  if (process.env.TMUX) return ane() ? "tmux_cc" : "tmux";
  if (process.env.ZELLIJ != null) return "zellij";
  if (process.env.STY) return "screen";
  return "none";
}
function yPc() {
  if (hPc) return;
  hPc = !0;
  let e = Uke();
  lbr(zUi(e)), G("tengu_terminal_probe", {
    xtversion: _Bt() ?? "no_reply",
    term_program_version: process.env.TERM_PROGRAM_VERSION ?? "unset",
    is_ssh: Oe.isSSH(),
    multiplexer: $e(VCm()),
    term_rows: process.stdout.rows ?? 0,
    term_cols: process.stdout.columns ?? 0,
    dec2026_allowlist: LU(),
    renderer_entry_path: $e(e)
  });
}
var hPc = !1;