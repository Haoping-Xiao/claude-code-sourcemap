// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zbl
// matched 2.1.88 source: src/tools/TaskUpdateTool/TaskUpdateTool.ts
// class=modified  jaccard=0.576  score=0.7651  fileCov=0.6997
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var zbl = E(() => {
  Xr();
  ii();
  sA();
  sp();
  Jt();
  bk();
  Mp();
  YI();
  Fgo();
  ((lhf = ve(() => {
    let e = rVe().or(H.literal("deleted"));
    return H.strictObject({
      taskId: H.string().describe("The ID of the task to update"),
      subject: H.string().optional().describe("New subject for the task"),
      description: H.string().optional().describe("New description for the task"),
      activeForm: H.string()
        .optional()
        .describe(
          'Present continuous form shown in spinner when in_progress (e.g., "Running tests")',
        ),
      status: e.optional().describe("New status for the task"),
      addBlocks: H.array(H.string()).optional().describe("Task IDs that this task blocks"),
      addBlockedBy: H.array(H.string()).optional().describe("Task IDs that block this task"),
      owner: H.string().optional().describe("New owner for the task"),
      metadata: H.record(H.string(), H.unknown())
        .optional()
        .describe("Metadata keys to merge into the task. Set a key to null to delete it."),
    });
  })),
    (chf = ve(() =>
      H.object({
        success: H.boolean(),
        taskId: H.string(),
        updatedFields: H.array(H.string()),
        error: H.string().optional(),
        statusChange: H.object({
          from: H.string(),
          to: H.string(),
        }).optional(),
      }),
    )),
    (Vbl = ti({
      name: ZD,
      searchHint: "update a task",
      maxResultSizeChars: 1e5,
      async description() {
        return Wbl;
      },
      async prompt() {
        return qbl;
      },
      get inputSchema() {
        return lhf();
      },
      get outputSchema() {
        return chf();
      },
      userFacingName() {
        return "TaskUpdate";
      },
      coerceInput: uWt,
      shouldDefer: !0,
      isEnabled() {
        return EH();
      },
      isConcurrencySafe() {
        return !0;
      },
      toAutoClassifierInput(e) {
        let t = uWt(e)?.input ?? e,
          n = [t.taskId];
        if (t.status) n.push(t.status);
        if (t.subject) n.push(t.subject);
        return n.join(" ");
      },
      renderToolUseMessage() {
        return null;
      },
      async call(
        {
          taskId: e,
          subject: t,
          description: n,
          activeForm: r,
          status: o,
          owner: s,
          addBlocks: i,
          addBlockedBy: a,
          metadata: l,
        },
        c,
        u,
        d,
        p,
      ) {
        let f = yF();
        p?.({
          type: "set_expanded_view",
          expandedView: "tasks",
        });
        let m = await Bre(f, e);
        if (!m)
          return {
            data: {
              success: !1,
              taskId: e,
              updatedFields: [],
              error: "Task not found",
            },
          };
        let g = [],
          h = {};
        if (t !== void 0 && t !== m.subject) ((h.subject = t), g.push("subject"));
        if (n !== void 0 && n !== m.description) ((h.description = n), g.push("description"));
        if (r !== void 0 && r !== m.activeForm) ((h.activeForm = r), g.push("activeForm"));
        if (s !== void 0 && s !== m.owner) ((h.owner = s), g.push("owner"));
        if (el() && o === "in_progress" && s === void 0 && !m.owner) {
          let y = Oh();
          if (y) ((h.owner = y), g.push("owner"));
        }
        if (l !== void 0) {
          let y = {
            ...(m.metadata ?? {}),
          };
          for (let [b, _] of Object.entries(l))
            if (_ === null) delete y[b];
            else y[b] = _;
          ((h.metadata = y), g.push("metadata"));
        }
        if (o !== void 0) {
          if (o === "deleted") {
            let y = await Fjn(f, e);
            return {
              data: {
                success: y,
                taskId: e,
                updatedFields: y ? ["deleted"] : [],
                error: y ? void 0 : "Failed to delete task",
                statusChange: y
                  ? {
                      from: m.status,
                      to: "deleted",
                    }
                  : void 0,
              },
            };
          }
          if (o !== m.status) {
            if (o === "completed") {
              let y = [],
                b = Z6e(
                  e,
                  m.subject,
                  m.description,
                  Oh(),
                  rp(),
                  void 0,
                  c?.abortController?.signal,
                  void 0,
                  c,
                );
              for await (let _ of b) if (_.blockingError) y.push(Lzt(_.blockingError));
              if (y.length > 0)
                return {
                  data: {
                    success: !1,
                    taskId: e,
                    updatedFields: [],
                    error: y.join(`
`),
                  },
                };
            }
            ((h.status = o), g.push("status"));
          }
        }
        if (Object.keys(h).length > 0) await hEe(f, e, h);
        if (h.owner && el()) {
          let y = Oh() || "team-lead",
            b = Sv(),
            _ = De({
              type: "task_assignment",
              taskId: e,
              subject: m.subject,
              description: m.description,
              assignedBy: y,
              timestamp: new Date().toISOString(),
            });
          await fg(
            h.owner,
            {
              from: y,
              text: _,
              timestamp: new Date().toISOString(),
              color: b,
            },
            f,
          );
        }
        if (i && i.length > 0) {
          let y = i.filter((b) => !m.blocks.includes(b));
          for (let b of y) await qgo(f, e, b);
          if (y.length > 0) g.push("blocks");
        }
        if (a && a.length > 0) {
          let y = a.filter((b) => !m.blockedBy.includes(b));
          for (let b of y) await qgo(f, b, e);
          if (y.length > 0) g.push("blockedBy");
        }
        return {
          data: {
            success: !0,
            taskId: e,
            updatedFields: g,
            statusChange:
              h.status !== void 0
                ? {
                    from: m.status,
                    to: h.status,
                  }
                : void 0,
          },
        };
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let { success: n, taskId: r, updatedFields: o, error: s, statusChange: i } = e;
        if (!n)
          return {
            tool_use_id: t,
            type: "tool_result",
            content: s || `Task #${r} not found`,
          };
        let a = `Updated task #${r} ${o.join(", ")}`;
        if (i?.to === "completed" && PD() && el())
          a += `

Task completed. Call TaskList now to find your next available task or see if your work unblocked others.`;
        return {
          tool_use_id: t,
          type: "tool_result",
          content: a,
        };
      },
    })));
});
function Ybl() {
  let e = el()
      ? `- Before assigning tasks to teammates, to see what's available
`
      : "",
    t = el()
      ? "- **id**: Task identifier (use with TaskGet, TaskUpdate)"
      : "- **id**: Task identifier (use with TaskGet, TaskUpdate)",
    n = el()
      ? `
## Teammate Workflow

When working as a teammate:
1. After completing your current task, call TaskList to find available work
2. Look for tasks with status 'pending', no owner, and empty blockedBy
3. **Prefer tasks in ID order** (lowest ID first) when multiple tasks are available, as earlier tasks often set up context for later ones
4. Claim an available task using TaskUpdate (set \`owner\` to your name), or wait for leader assignment
5. If blocked, focus on unblocking tasks or notify the team lead
`
      : "";
  return `Use this tool to list all tasks in the task list.

## When to Use This Tool

- To see what tasks are available to work on (status: 'pending', no owner, not blocked)
- To check overall progress on the project
- To find tasks that are blocked and need dependencies resolved
${e}- After completing a task, to check for newly unblocked work or claim the next available task
- **Prefer working on tasks in ID order** (lowest ID first) when multiple tasks are available, as earlier tasks often set up context for later ones

## Output

Returns a summary of each task:
${t}
- **subject**: Brief description of the task
- **status**: 'pending', 'in_progress', or 'completed'
- **owner**: Agent ID if assigned, empty if available
- **blockedBy**: List of open task IDs that must be resolved first (tasks with blockedBy cannot be claimed until dependencies resolve)

Use TaskGet with a specific task ID to view full details including description and comments.
${n}`;
}
var Kbl = "List all tasks in the task list";
