// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wFe
// matched 2.1.88 source: src/constants/xml.ts
// class=modified  jaccard=0.621  score=0.7426  fileCov=0.7913
// note: deminified; 19 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module wFe] deps: Qi, wr
VSs = new Map();
IDu = Cn(async () => {
  let e = Lkr(),
    t;
  try {
    let [n, r] = await Promise.all([
        Promise.resolve().then(() => R(RB(), 1)),
        Promise.resolve().then(() => R(Dx(), 1)),
      ]),
      o = n.loadConfig ?? n.default?.loadConfig,
      s = r.NODE_REGION_CONFIG_FILE_OPTIONS ?? r.default?.NODE_REGION_CONFIG_FILE_OPTIONS;
    t =
      (
        await o(
          {
            environmentVariableSelector: () => {
              return;
            },
            configFileSelector: (a) => a.region,
            default: () => {
              return;
            },
          },
          s,
        )()
      )?.trim() || void 0;
  } catch {
    t = void 0;
  }
  return (VSs.set(e, t), t);
}, Lkr);
var COMMAND_NAME_TAG = "command-name",
  COMMAND_MESSAGE_TAG = "command-message",
  COMMAND_ARGS_TAG = "command-args",
  J0t = "bash-input",
  Q0t = "bash-stdout",
  wae = "bash-stderr",
  Pkr = "bash-exit-code",
  LOCAL_COMMAND_STDOUT_TAG = "local-command-stdout",
  LOCAL_COMMAND_STDERR_TAG = "local-command-stderr",
  LOCAL_COMMAND_CAVEAT_TAG = "local-command-caveat",
  KSs,
  Cae = "tick",
  TASK_NOTIFICATION_TAG = "task-notification",
  TASK_ID_TAG = "task-id",
  TOOL_USE_ID_TAG = "tool-use-id",
  TASK_TYPE_TAG = "task-type",
  OUTPUT_FILE_TAG = "output-file",
  up = "status",
  Zu = "summary",
  Mkr = "worktree",
  WORKTREE_PATH_TAG = "worktreePath",
  WORKTREE_BRANCH_TAG = "worktreeBranch",
  REMOTE_REVIEW_TAG = "remote-review",
  REMOTE_REVIEW_PROGRESS_TAG = "remote-review-progress",
  TEAMMATE_MESSAGE_TAG = "teammate-message",
  xFe = "channel",
  kFe = '<channel source="',
  CROSS_SESSION_MESSAGE_TAG = "cross-session-message",
  ypn = "agent-message",
  FORK_BOILERPLATE_TAG = "fork-boilerplate",
  FORK_DIRECTIVE_PREFIX = "Your directive: ",
  _G,
  Iae;
