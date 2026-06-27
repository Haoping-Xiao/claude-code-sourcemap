// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gbl
// matched 2.1.88 source: src/tools/TaskGetTool/TaskGetTool.ts
// class=modified  jaccard=0.7  score=0.9206  fileCov=0.745
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Gbl] deps: Xr, ii, bk
((ihf = ve(() =>
  H.strictObject({
    taskId: H.string().describe("The ID of the task to retrieve"),
  }),
)),
  (ahf = ve(() =>
    H.object({
      task: H.object({
        id: H.string(),
        subject: H.string(),
        description: H.string(),
        status: rVe(),
        blocks: H.array(H.string()),
        blockedBy: H.array(H.string()),
      }).nullable(),
    }),
  )),
  (jbl = ti({
    name: kX,
    searchHint: "retrieve a task by ID",
    maxResultSizeChars: 100000 /* 1e5 */,
    async description() {
      return Ubl;
    },
    async prompt() {
      return Fbl;
    },
    get inputSchema() {
      return ihf();
    },
    get outputSchema() {
      return ahf();
    },
    userFacingName() {
      return "TaskGet";
    },
    shouldDefer: true,
    isEnabled() {
      return EH();
    },
    isConcurrencySafe() {
      return true;
    },
    isReadOnly() {
      return true;
    },
    toAutoClassifierInput(e) {
      return e.taskId;
    },
    renderToolUseMessage() {
      return null;
    },
    async call({ taskId: e }) {
      let t = yF(),
        n = await Bre(t, e);
      if (!n)
        return {
          data: {
            task: null,
          },
        };
      return {
        data: {
          task: {
            id: n.id,
            subject: n.subject,
            description: n.description,
            status: n.status,
            blocks: n.blocks,
            blockedBy: n.blockedBy,
          },
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      let { task: n } = e;
      if (!n)
        return {
          tool_use_id: t,
          type: "tool_result",
          content: "Task not found",
        };
      let r = [
        `Task #${n.id}: ${n.subject}`,
        `Status: ${n.status}`,
        `Description: ${n.description}`,
      ];
      if (n.blockedBy.length > 0)
        r.push(`Blocked by: ${n.blockedBy.map((o) => `#${o}`).join(", ")}`);
      if (n.blocks.length > 0) r.push(`Blocks: ${n.blocks.map((o) => `#${o}`).join(", ")}`);
      return {
        tool_use_id: t,
        type: "tool_result",
        content: r.join(`
`),
      };
    },
  })));
var Wbl = "Update a task in the task list",
  qbl = `Use this tool to update a task in the task list.

## When to Use This Tool

**Mark tasks as resolved:**
- When you have completed the work described in a task
- When a task is no longer needed or has been superseded
- IMPORTANT: Always mark your assigned tasks as resolved when you finish them
- After resolving, call TaskList to find your next task

- ONLY mark a task as completed when you have FULLY accomplished it
- If you encounter errors, blockers, or cannot finish, keep the task as in_progress
- When blocked, create a new task describing what needs to be resolved
- Never mark a task as completed if:
  - Tests are failing
  - Implementation is partial
  - You encountered unresolved errors
  - You couldn't find necessary files or dependencies

**Delete tasks:**
- When a task is no longer relevant or was created in error
- Setting status to \`deleted\` permanently removes the task

**Update task details:**
- When requirements change or become clearer
- When establishing dependencies between tasks

## Fields You Can Update

- **status**: The task status (see Status Workflow below)
- **subject**: Change the task title (imperative form, e.g., "Run tests")
- **description**: Change the task description
- **activeForm**: Present continuous form shown in spinner when in_progress (e.g., "Running tests")
- **owner**: Change the task owner (agent name)
- **metadata**: Merge metadata keys into the task (set a key to null to delete it)
- **addBlocks**: Mark tasks that cannot start until this one completes
- **addBlockedBy**: Mark tasks that must complete before this one can start

## Status Workflow

Status progresses: \`pending\` \u2192 \`in_progress\` \u2192 \`completed\`

Use \`deleted\` to permanently remove a task.

## Staleness

Make sure to read a task's latest state using \`TaskGet\` before updating it.

## Examples

Mark task as in progress when starting work:
\`\`\`json
{"taskId": "1", "status": "in_progress"}
\`\`\`

Mark task as completed after finishing work:
\`\`\`json
{"taskId": "1", "status": "completed"}
\`\`\`

Delete a task:
\`\`\`json
{"taskId": "1", "status": "deleted"}
\`\`\`

Claim a task by setting owner:
\`\`\`json
{"taskId": "1", "owner": "my-name"}
\`\`\`

Set up task dependencies:
\`\`\`json
{"taskId": "2", "addBlockedBy": ["1"]}
\`\`\`
`;
var lhf, chf, Vbl;
