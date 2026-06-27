// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YI
// matched 2.1.88 source: src/utils/teammateMailbox.ts
// class=modified (alt of src/utils/teammateMailbox.ts)  jaccard=0.1043  score=0.3546  fileCov=0.1287
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var YI = E(() => {
  Xr();
  Nht();
  np();
  db();
  je();
  fn();
  At();
  vn();
  DE();
  Jt();
  hN();
  bk();
  Mp();
  OI();
  ((P8n = require("path")),
    (_9t = {
      retries: {
        retries: 10,
        minTimeout: 5,
        maxTimeout: 100,
      },
      onCompromised: (e) => ke(e),
    }));
  m8e = ve(() =>
    H.object({
      type: H.literal("idle_notification"),
      from: H.string(),
      timestamp: H.string(),
      idleReason: H.enum(["available", "interrupted", "failed"]).optional(),
      summary: H.string().optional(),
      completedTaskId: H.string().optional(),
      completedStatus: H.enum(["resolved", "blocked", "failed"]).optional(),
      failureReason: H.string().optional(),
    }),
  );
  ((T9t = ve(() =>
    H.object({
      type: H.literal("plan_approval_request"),
      from: H.string(),
      timestamp: H.string(),
      planFilePath: H.string(),
      planContent: H.string(),
      requestId: H.string(),
    }),
  )),
    (v9t = ve(() =>
      H.object({
        type: H.literal("plan_approval_response"),
        requestId: H.string(),
        approved: H.boolean(),
        feedback: H.string().optional(),
        timestamp: H.string(),
        permissionMode: qRt().optional(),
      }),
    )),
    (w9t = ve(() =>
      H.object({
        type: H.literal("shutdown_request"),
        requestId: H.string(),
        from: H.string(),
        reason: H.string().optional(),
        timestamp: H.string(),
      }),
    )),
    (pAe = ve(() =>
      H.object({
        type: H.literal("shutdown_approved"),
        requestId: H.string(),
        from: H.string(),
        timestamp: H.string(),
        paneId: H.string().optional(),
        backendType: H.string().optional(),
      }),
    )),
    ($8n = ve(() =>
      H.object({
        type: H.literal("shutdown_rejected"),
        requestId: H.string(),
        from: H.string(),
        reason: H.string(),
        timestamp: H.string(),
      }),
    )));
  lel = ve(() =>
    H.object({
      type: H.literal("task_assignment"),
      taskId: H.string(),
      subject: H.string(),
      description: H.string(),
      assignedBy: H.string(),
      timestamp: H.string(),
    }),
  );
  ((ZTo = ve(() =>
    H.object({
      type: H.literal("task_completed"),
      from: H.string().optional(),
      taskId: H.string(),
      taskSubject: H.string().optional(),
      timestamp: H.string().optional(),
    }),
  )),
    (h8e = ve(() =>
      H.object({
        type: H.literal("teammate_terminated"),
        message: H.string(),
      }),
    )));
  cel = ve(() =>
    H.object({
      type: H.literal("mode_set_request"),
      mode: qRt(),
      from: H.string(),
    }),
  );
});
async function N8n(e) {
  let { ctx: t, updatedInput: n, suggestions: r, permissionMode: o } = e,
    s = false;
  try {
    let i = await t.runHooks(o, r, n);
    if (i && !("reprompted" in i)) return i;
    let a = null;
    if (a) return a;
  } catch (i) {
    if (((s = true), i instanceof Error)) ke(i);
    else ke(Error(`Automated permission check failed: ${String(i)}`));
  } finally {
    if (s) Le("permission_coordinator_check", "permission_coordinator_check_failed");
    else xe("permission_coordinator_check");
  }
  return null;
}
