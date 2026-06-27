// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $zo
// matched 2.1.88 source: src/commands/terminalSetup/terminalSetup.tsx
// class=new  jaccard=0.0357  score=0.236  fileCov=0.0404
// note: nearest: src/commands/terminalSetup/terminalSetup.tsx (0.0357); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $zo = E(() => {
  ft();
  ft();
  Zrr();
  sYe();
  mE();
  E8e();
  Ko();
  gm();
  AN();
  X0();
  WTe();
  fH();
  Ed();
  HN();
  _i();
  wOe();
  Ye();
  kt();
  jc();
  uo();
  fh();
  sA();
  BE();
  QOe();
  oc();
  aE();
  xW();
  _Tt();
  vn();
  bm();
  co();
  I1();
  Ao();
  Sdr();
  DE();
  __();
  y3();
  y_();
  _a();
  aS();
  uJt();
  IEc = R(lt(), 1), Qz = R(rt(), 1), iy = R(se(), 1), qTt = (Eoe(), ro(Ope));
});
function kEc() {
  Mhm();
}
function REc() {
  let e = at("tengu_xterm_atlas_reset", !0);
  YFi(e);
  let t = at("tengu_basalt_meadow", !1);
  if (e || t) oBt(!0);
}
function Mhm() {
  if (zFi) return;
  if (!at("tengu_basalt_meadow", !1)) {
    if (!rGe) oBt(!1);
    return;
  }
  oBt(!0);
  let t = e2i();
  if (!t) return;
  let n = sBt(),
    r = u7r();
  if (G("tengu_render_glyph_cardinality", {
    stylepool_styles: t.size,
    stylepool_overflowed: t.overflowed,
    atlas_glyph_keys: n.atlasKeys,
    atlas_keys_saturated: n.saturated,
    term_program: $e($hm()),
    is_xtermjs: yb(),
    session_age_bucket: $e(Ohm(Gie())),
    proactive_reset_count: r.count,
    proactive_reset_last_reason: $e(r.lastReason)
  }), t2i()) xe("render_stylepool");
  if (t.overflowed && n2i()) It("render_stylepool", "cap_hit");
}
function $hm() {
  if (process.env.CURSOR_TRACE_ID !== void 0) return "cursor";
  switch (process.env.TERM_PROGRAM) {
    case "vscode":
      return "vscode";
    case "iTerm.app":
      return "iterm";
    case "Apple_Terminal":
      return "apple_terminal";
    case "ghostty":
      return "ghostty";
    case "WezTerm":
      return "wezterm";
    case "tmux":
      return "tmux";
  }
  if (process.env.WT_SESSION !== void 0) return "windows_terminal";
  return "other";
}
function Ohm(e) {
  let t = e / 60000;
  if (t < 5) return "lt_5m";
  if (t < 30) return "5m_30m";
  if (t < 120) return "30m_2h";
  if (t < 480) return "2h_8h";
  return "gt_8h";
}