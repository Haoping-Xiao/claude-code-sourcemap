// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YPl
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0057  score=0.1406  fileCov=0.006
// note: nearest: src/cli/print.ts (0.0057); dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call, applyAutoCompactWindow
// [unwrapped __esm module YPl] deps: wr
q0f = {
  type: "local",
  name: "compact",
  description: "Free up context by summarizing the conversation so far",
  isEnabled: () => !Oe.DISABLE_COMPACT,
  supportsNonInteractive: true,
  argumentHint: "<optional custom summarization instructions>",
  thinClientDispatch: "post-text",
  load: () => Promise.resolve().then(() => (KPl(), zPl))
}, Qer = q0f;
var XPl = {};
function V0f(e, t) {
  let {
      window: n,
      configured: r,
      source: o
    } = A4(e, t),
    s = r > n ? ` \xB7 capped to ${gl(n)} by model` : "",
    a = [`Auto-compact window: ${o === "auto" ? "auto" : o === "experiment" || o === "clientdata" ? `auto (${gl(r)} tokens)${s}` : o === "env" ? `${gl(r)} tokens (from CLAUDE_CODE_AUTO_COMPACT_WINDOW)${s}` : `${gl(r)} tokens (from settings)${s}`}`];
  if (!pC()) a.push("Auto-compact is currently disabled (see /config)");
  if (a.push("Auto-compact summarizes the conversation when context usage approaches this limit. The actual threshold is the minimum of this setting and your model's maximum context window."), a.push("The auto setting picks a window tuned for your model and is strongly recommended for the best cost and performance."), o === "env" || o === "settings") a.push("Overriding auto may result in high token usage, especially when resuming long sessions.");
  return a.join(`
`);
}
function applyAutoCompactWindow(e, t) {
  let n = t.options.mainLoopModel;
  if (A4(n, void 0).source === "env") return "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting.";
  let r = e.trim().toLowerCase(),
    s = r === "reset" || r === "unset" || r === "default" ? "auto" : Zso(r);
  if (s === void 0) return `Couldn't parse '${e}'. Expected 'auto' or 100k\u20131M tokens (e.g. 500k, 200000, or 200 as shorthand)`;
  let i = s === "auto" ? void 0 : s,
    {
      error: a
    } = io("userSettings", {
      autoCompactWindow: i
    });
  if (a) return `Couldn't save setting: ${a.message}`;
  let l = Dr().autoCompactWindow,
    {
      window: c,
      source: u
    } = A4(n, l),
    d = u === "env" || l !== i,
    p = d ? l : i;
  if (t.onQueryEvent?.({
    type: "apply_flag_settings",
    settings: {
      autoCompactWindow: p ?? null
    }
  }), G("tengu_autocompact_command", {
    action: We(s === "auto" ? "auto" : "set"),
    ...(i !== void 0 && {
      tokens: i
    })
  }), s === "auto") return d ? `Auto-compact window set to auto in settings, but a higher-priority override is active (${gl(c)} tokens)` : "Auto-compact window set to auto";
  let f = "";
  if (d) f = `, but a higher-priority override is active (${gl(c)} tokens)`;else if (c < s) f = ` (capped to model limit of ${gl(c)})`;
  return `Auto-compact window set to ${gl(s)} tokens${f}`;
}
var call = async (e, t) => {
  let n = e.trim();
  if (!n) return {
    type: "text",
    value: V0f(t.options.mainLoopModel, t.options.autoCompactWindow)
  };
  return {
    type: "text",
    value: applyAutoCompactWindow(n, t)
  };
};