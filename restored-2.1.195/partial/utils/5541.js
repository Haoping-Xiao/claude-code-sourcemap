// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $zo
// matched 2.1.88 source: src/ink/terminal.ts
// class=partial  jaccard=0.0672  score=0.1616  fileCov=0.1032
// note: low-confidence suggestion: src/ink/terminal.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $zo] deps: services/analytics/index.ts, services/analytics/index.ts, commands/rename/rename.ts, commands/ultraplan.tsx, components/ThemePicker.tsx, components/FileEditToolDiff.tsx, components/ConfigurableShortcutHint.tsx, undici/lib/mock/mock-agent.js, ink/styles.ts, components/ManagedSettingsSecurityDialog/utils.ts, components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx, react/cjs/react.production.js, context/notifications.tsx, utils/plugins/pluginPolicy.ts, components/design-system/Ratchet.tsx, utils/sideQuestion.ts, hooks/useTerminalSize.ts, utils/debug.ts, utils/semver.ts, context/notifications.tsx, commands/insights.ts, services/PromptSuggestion/promptSuggestion.ts, has-flag/index.js, utils/editor.ts, utils/nativeInstaller/download.ts, utils/ide.ts, utils/imageResizer.ts, utils/processUserInput/processTextPrompt.ts, utils/sequential.ts, utils/messageQueueManager.ts, utils/messages.ts, hooks/usePasteHandler.ts, utils/agentContext.ts, components/AutoModeOptInDialog.tsx, utils/permissions/PermissionMode.ts, utils/markdownConfigLoader.ts, commands/memory/memory.tsx, utils/stats.ts, utils/plans.ts, utils/telemetry/pluginTelemetry.ts, uJt
IEc = R(lt(), 1), Qz = R(rt(), 1), iy = R(se(), 1), qTt = (Eoe(), ro(Ope));
function kEc() {
  Mhm();
}
function REc() {
  let e = at("tengu_xterm_atlas_reset", true);
  YFi(e);
  let t = at("tengu_basalt_meadow", false);
  if (e || t) oBt(true);
}
function Mhm() {
  if (zFi) return;
  if (!at("tengu_basalt_meadow", false)) {
    if (!rGe) oBt(false);
    return;
  }
  oBt(true);
  let t = e2i();
  if (!t) return;
  let n = sBt(),
    r = u7r();
  if (G("tengu_render_glyph_cardinality", {
    stylepool_styles: t.size,
    stylepool_overflowed: t.overflowed,
    atlas_glyph_keys: n.atlasKeys,
    atlas_keys_saturated: n.saturated,
    term_program: $e(isSynchronizedOutputSupported()),
    is_xtermjs: yb(),
    session_age_bucket: $e(Ohm(Gie())),
    proactive_reset_count: r.count,
    proactive_reset_last_reason: $e(r.lastReason)
  }), t2i()) xe("render_stylepool");
  if (t.overflowed && n2i()) It("render_stylepool", "cap_hit");
}
function isSynchronizedOutputSupported() {
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