// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sMc
// matched 2.1.88 source: src/utils/config.ts
// class=modified (alt of src/utils/config.ts)  jaccard=0.0314  score=0.1905  fileCov=0.0362
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sMc] deps: er, Fh, dr
EIm = new Set(["CLAUDE_CODE_ENTRYPOINT"]);
AIm = new Set([
  "tipsHistory",
  "installMethod",
  "shiftEnterKeyBindingInstalled",
  "hasUsedBackslashReturn",
  "hasCompletedClaudeInChromeOnboarding",
  "remoteDialogSeen",
  "lspRecommendationIgnoredCount",
  "autoUpdates",
  "autoUpdatesProtectedForNative",
]);
HIm = [
  "model",
  "outputStyle",
  "language",
  "effortLevel",
  "fastMode",
  "alwaysThinkingEnabled",
  "spinnerTipsEnabled",
  "prefersReducedMotion",
  "promptSuggestionEnabled",
  "awaySummaryEnabled",
  "precomputeCompactionEnabled",
  "switchModelsOnFlag",
  "autoUpdatesChannel",
  "viewMode",
  "syntaxHighlightingDisabled",
  "useAutoModeDuringPlan",
  "enableWorkflows",
  "disableWorkflows",
  "disableArtifact",
  "workflowKeywordTriggerEnabled",
  "respondToBashCommands",
  "autoCompactWindow",
  "cleanupPeriodDays",
  "forceLoginMethod",
];
function wIm() {
  let e = process.argv[1] || "",
    t = process.execPath || process.argv[0] || "";
  if (Vt() === "windows")
    ((e = e.split(bvt.win32.sep).join(bvt.posix.sep)),
      (t = t.split(bvt.win32.sep).join(bvt.posix.sep)));
  let n = [e, t],
    r = ["/build-ant/", "/build-external/", "/build-external-native/", "/build-ant-native/"];
  return n.some((o) => r.some((s) => o.includes(s)));
}
function IIm(e, t) {
  let n = `${e}: ${t}`;
  return CIm.some((r) => r.test(n));
}
function iMc() {
  let e = new Map();
  if (!wIm()) process.removeAllListeners("warning");
  let n = (r) => {
    try {
      if (QYo.types.isProxy(r) || !QYo.types.isNativeError(r)) return;
      let o = Object.getOwnPropertyDescriptor(r, "message"),
        s = o && typeof o.value === "string" ? o.value : "",
        i = Object.getOwnPropertyDescriptor(r, "name"),
        a = i && typeof i.value === "string" ? i.value : "Error",
        l = `${a}: ${s.slice(0, 50)}`,
        c = e.get(l) || 0;
      if (e.has(l) || e.size < vIm) e.set(l, c + 1);
      let u = IIm(a, s);
      if (
        (G("tengu_node_warning", {
          is_internal: u ? 1 : 0,
          occurrence_count: c + 1,
          classname: a,
          ...false,
        }),
        Oe.CLAUDE_DEBUG)
      )
        T(`${u ? "[Internal Warning]" : "[Warning]"} ${a}: ${s}`, {
          level: "warn",
        });
    } catch {}
  };
  return (
    process.on("warning", n),
    {
      uninstall() {
        process.removeListener("warning", n);
      },
    }
  );
}
var bvt,
  QYo,
  vIm = 1000,
  CIm;
