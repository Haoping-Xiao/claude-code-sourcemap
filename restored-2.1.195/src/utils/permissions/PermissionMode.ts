// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DE
// matched 2.1.88 source: src/utils/permissions/PermissionMode.ts
// class=modified  jaccard=0.6563  score=0.8609  fileCov=0.7342
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var DE = E(() => {
  Xr();
  Xa();
  NB();
  ((ews = ve(() => ol.enum(yM))),
    (qRt = ve(() => ol.enum(yY))),
    (Qvs = {
      plan: 0,
      bubble: 1,
      default: 1,
      dontAsk: 1,
      acceptEdits: 2,
      auto: 3,
      bypassPermissions: 4,
    }));
  Zvs = {
    default: {
      title: "Default",
      shortTitle: "Default",
      symbol: "",
      color: "text",
      external: "default",
    },
    plan: {
      title: "Plan Mode",
      shortTitle: "Plan",
      symbol: Bfn,
      color: "planMode",
      external: "plan",
    },
    acceptEdits: {
      title: "Accept edits",
      shortTitle: "Accept",
      symbol: "\u23F5\u23F5",
      color: "autoAccept",
      external: "acceptEdits",
    },
    bypassPermissions: {
      title: "Bypass Permissions",
      shortTitle: "Bypass",
      symbol: "\u23F5\u23F5",
      color: "error",
      external: "bypassPermissions",
    },
    dontAsk: {
      title: "Don't Ask",
      shortTitle: "DontAsk",
      symbol: "\u23F5\u23F5",
      color: "error",
      external: "dontAsk",
    },
    auto: {
      title: "Auto mode",
      shortTitle: "Auto",
      symbol: "\u23F5\u23F5",
      color: "warning",
      external: "auto",
    },
  };
});
var GO,
  nws,
  Oae = "__SYSTEM_PROMPT_DYNAMIC_BOUNDARY__";
