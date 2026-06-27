// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bbl
// matched 2.1.88 source: src/tools/TaskCreateTool/TaskCreateTool.ts
// class=modified  jaccard=0.6016  score=0.8399  fileCov=0.6796
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Bbl] deps: @modelcontextprotocol/sdk/dist/esm/types.js, services/mockRateLimits.ts, utils/worktree.ts, utils/tasks.ts, utils/concurrentSessions.ts, tools/TaskCreateTool/prompt.ts, Obl
((ohf = ve(() =>
  H.strictObject({
    subject: H.string().describe("A brief title for the task"),
    description: H.string().describe("What needs to be done"),
    activeForm: H.string()
      .optional()
      .describe(
        'Present continuous form shown in spinner when in_progress (e.g., "Running tests")',
      ),
    metadata: H.record(H.string(), H.unknown())
      .optional()
      .describe("Arbitrary metadata to attach to the task"),
  }),
)),
  (shf = ve(() =>
    H.object({
      task: H.object({
        id: H.string(),
        subject: H.string(),
      }),
    }),
  )),
  (Nbl = ti({
    name: cC,
    searchHint: "create a task in the task list",
    maxResultSizeChars: 100000 /* 1e5 */,
    async description() {
      return Mbl;
    },
    async prompt() {
      return $bl();
    },
    get inputSchema() {
      return ohf();
    },
    get outputSchema() {
      return shf();
    },
    userFacingName() {
      return "TaskCreate";
    },
    shouldDefer: true,
    coerceInput: Lbl,
    validationErrorSteer: Dbl,
    isEnabled() {
      return EH();
    },
    isConcurrencySafe() {
      return false;
    },
    toAutoClassifierInput(e) {
      return e.subject;
    },
    renderToolUseMessage() {
      return null;
    },
    async call({ subject: e, description: t, activeForm: n, metadata: r }, o, s, i, a) {
      let l = await HOa(yF(), {
          subject: e,
          description: t,
          activeForm: n,
          status: "pending",
          owner: void 0,
          blocks: [],
          blockedBy: [],
          metadata: r,
        }),
        c = [],
        u = Rzt(l, e, t, Oh(), rp(), void 0, o?.abortController?.signal, void 0, o);
      for await (let d of u) if (d.blockingError) c.push(vRo(d.blockingError));
      if (c.length > 0)
        throw (
          await Fjn(yF(), l),
          Error(
            c.join(`
`),
          )
        );
      return (
        a?.({
          type: "set_expanded_view",
          expandedView: "tasks",
        }),
        {
          data: {
            task: {
              id: l,
              subject: e,
            },
          },
        }
      );
    },
    mapToolResultToToolResultBlockParam(e, t) {
      let { task: n } = e;
      return {
        tool_use_id: t,
        type: "tool_result",
        content: `Task #${n.id} created successfully: ${n.subject}`,
      };
    },
  })));
var Ubl = "Get a task by ID from the task list",
  Fbl = `Use this tool to retrieve a task by its ID from the task list.

## When to Use This Tool

- When you need the full description and context before starting work on a task
- To understand task dependencies (what it blocks, what blocks it)
- After being assigned a task, to get complete requirements

## Output

Returns full task details:
- **subject**: Task title
- **description**: Detailed requirements and context
- **status**: 'pending', 'in_progress', or 'completed'
- **blocks**: Tasks waiting on this one to complete
- **blockedBy**: Tasks that must complete before this one can start

## Tips

- After fetching a task, verify its blockedBy list is empty before beginning work.
- Use TaskList to see all tasks in summary form.
`;
var ihf, ahf, jbl;
