// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zgo
// matched 2.1.88 source: src/utils/todo/types.ts
// class=modified  jaccard=0.5602  score=0.7575  fileCov=0.6826
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zgo] deps: Xr
((qDp = ve(() => H.enum(["pending", "in_progress", "completed"]))),
  (VDp = ve(() =>
    H.object({
      content: H.string().min(1, "Content cannot be empty"),
      status: qDp(),
      activeForm: H.string().min(1, "Active form cannot be empty"),
    }),
  )),
  (hft = ve(() => H.array(VDp()))));
function wOa(e) {
  return ph(e) ? zDp : KDp;
}
var zDp =
    'Create and update a task list for the current session. The list is rendered to the user as your working plan.\n\n- Each todo has `content`, `status` ("pending" | "in_progress" | "completed"), and `activeForm` (present-tense label shown while in progress).\n- Send the full list each call; it replaces the previous one.\n- Keep one item `in_progress` at a time and mark it `completed` when done.',
  KDp,
  COa =
    "Update the todo list for the current session. To be used proactively and often to track progress and pending tasks. Make sure that at least one task is in_progress at all times. Always provide both content (imperative) and activeForm (present continuous) for each task.";
