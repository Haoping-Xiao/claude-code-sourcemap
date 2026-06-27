// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cft
// matched 2.1.88 source: src/tools/shared/gitOperationTracking.ts
// class=modified  jaccard=0.3302  score=0.6122  fileCov=0.4176
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var cft = E(() => {
  Xr();
  ft();
  kt();
  Bi();
  ift();
  Jt();
  ((dOa = aft("commit")),
    (Pjn = aft("push")),
    (bDp = aft("cherry-pick")),
    (SDp = aft("merge", "(?!-)")),
    (EDp = aft("rebase")),
    (Mjn = ve(() =>
      H.object({
        commit: H.object({
          sha: H.string(),
          kind: H.enum(["committed", "amended", "cherry-picked"]),
        }).optional(),
        push: H.object({
          branch: H.string(),
        }).optional(),
        branch: H.object({
          ref: H.string(),
          action: H.enum(["merged", "rebased"]),
        }).optional(),
        pr: H.object({
          number: H.number(),
          url: H.string().optional(),
          action: H.enum([
            "created",
            "edited",
            "merged",
            "commented",
            "closed",
            "ready",
            "draft",
            "auto-merge-enabled",
            "auto-merge-disabled",
          ]),
        }).optional(),
      }),
    )),
    (ADp = /\bgh\s+pr\s+checkout\b[^&|;]*\s(\d+)(?=\s|$|[&|;])/),
    (pOa = [
      {
        re: /\bgh\s+pr\s+create\b/,
        action: "created",
        op: "pr_create",
      },
      {
        re: /\bgh\s+pr\s+edit\b/,
        action: "edited",
        op: "pr_edit",
      },
      {
        re: /\bgh\s+pr\s+merge\b/,
        action: "merged",
        op: "pr_merge",
      },
      {
        re: /\bgh\s+pr\s+comment\b/,
        action: "commented",
        op: "pr_comment",
      },
      {
        re: /\bgh\s+pr\s+close\b/,
        action: "closed",
        op: "pr_close",
      },
      {
        re: /\bgh\s+pr\s+ready\b/,
        action: "ready",
        op: "pr_ready",
      },
    ]),
    ($jn = /https?:\/\/[^/\s"]+\/([^\s"]+?)\/(?:pull|pull-requests|-\/merge_requests)\/(\d+)/));
  ((vDp =
    /(?:^|[;&|]|\b(?:then|do)\b)\s*gh\s+(?!auth\b|help\b|version\b|alias\b|completion\b|config\b)/),
    (wDp =
      /API rate limit (?:already )?exceeded|exceeded a secondary rate limit|\bRATE_LIMITED\b/i));
});
function WDe(e, t) {
  if (t) return e ? `agent:builtin:${e}` : "agent:default";
  return e ? `agent:custom:${e}` : "agent:custom";
}
function iWt() {
  let t = jo()?.outputStyle ?? uP;
  if (t === uP) return "repl_main_thread";
  return t in yJ ? `repl_main_thread:outputStyle:${t}` : "repl_main_thread:outputStyle:custom";
}
