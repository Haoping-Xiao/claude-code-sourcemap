// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R8e
// matched 2.1.88 source: src/tools/ExitPlanModeTool/ExitPlanModeV2Tool.ts
// class=modified  jaccard=0.5108  score=0.7593  fileCov=0.6095
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var R8e = E(() => {
  Xr();
  ft();
  kt();
  db();
  ii();
  sA();
  Il();
  je();
  swo();
  KI();
  Jt();
  Mp();
  YI();
  aS();
  fh();
  Rnl();
  znl();
  ((ktf = ve(() =>
    H.object({
      tool: H.enum(["Bash"]).describe("The tool this prompt applies to"),
      prompt: H.string().describe(
        'Semantic description of the action, e.g. "run tests", "install dependencies"',
      ),
    }),
  )),
    (Xnl = ve(() =>
      H.strictObject({
        allowedPrompts: H.array(ktf())
          .optional()
          .describe(
            "Prompt-based permissions needed to implement the plan. These describe categories of actions rather than specific commands.",
          ),
      }).passthrough(),
    )),
    (Y9_ = ve(() =>
      Xnl().extend({
        plan: H.string()
          .optional()
          .describe("The plan content (injected by normalizeToolInput from disk)"),
        planFilePath: H.string()
          .optional()
          .describe("The plan file path (injected by normalizeToolInput)"),
      }),
    )),
    (Rtf = ve(() =>
      H.object({
        plan: H.string().nullable().describe("The plan that was presented to the user"),
        isAgent: H.boolean(),
        filePath: H.string().optional().describe("The file path where the plan was saved"),
        hasTaskTool: H.boolean()
          .optional()
          .describe("Whether the Agent tool is available in the current context"),
        planWasEdited: H.boolean()
          .optional()
          .describe(
            "True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result",
          ),
        awaitingLeaderApproval: H.boolean()
          .optional()
          .describe("When true, the teammate has sent a plan approval request to the team leader"),
        requestId: H.string()
          .optional()
          .describe("Unique identifier for the plan approval request"),
      }),
    )),
    (EP = ti({
      name: jD,
      searchHint: "present plan for approval and start coding (plan mode only)",
      maxResultSizeChars: 1e5,
      async description() {
        return "Prompts the user to exit plan mode and start coding";
      },
      async prompt() {
        return Lnl;
      },
      get inputSchema() {
        return Xnl();
      },
      get outputSchema() {
        return Rtf();
      },
      userFacingName() {
        return "";
      },
      shouldDefer: !0,
      isEnabled() {
        if (MA().length > 0 && Ir()) return !1;
        if (Ir() && !hCt()) return !1;
        return !0;
      },
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly() {
        return !1;
      },
      requiresUserInteraction() {
        if (wf()) return !1;
        return !0;
      },
      async validateInput(e, t) {
        let { options: n } = t;
        if (wf())
          return {
            result: !0,
          };
        let r = Fr(t).mode;
        if (r !== "plan")
          return (
            G("tengu_exit_plan_mode_called_outside_plan", {
              model: n.mainLoopModel,
              mode: $e(r),
              hasExitedPlanModeInSession: LCt(),
            }),
            {
              result: !1,
              message: `You are not in plan mode. To enter plan mode, call the ${xX} tool first. If your plan was already approved, continue with implementation.`,
              errorCode: 1,
            }
          );
        return {
          result: !0,
        };
      },
      async checkPermissions(e, t) {
        if (wf())
          return {
            behavior: "allow",
            updatedInput: e,
          };
        return {
          behavior: "ask",
          message: "Exit plan mode?",
          updatedInput: e,
        };
      },
      renderToolUseMessage: Wnl,
      renderToolResultMessage: qnl,
      renderToolUseRejectedMessage: Vnl,
      async call(e, t, n, r, o) {
        let s = null,
          i = null;
        [s, i] = await Promise.all([
          Promise.resolve().then(() => (Eoe(), Ope)),
          Promise.resolve().then(() => (__(), T6n)),
        ]);
        let a = !!t.agentId,
          l = _P(t.agentId),
          c = "plan" in e && typeof e.plan === "string" ? e.plan : void 0,
          u = c ?? bP(t.agentId);
        if (c !== void 0 && l)
          (await qs()
            .write(l, c)
            .catch((m) =>
              T(`Failed to persist plan to ${l}: ${m instanceof Error ? m.message : String(m)}`, {
                level: "error",
              }),
            ),
            H6n());
        if (wf() && KPt()) {
          if (!u)
            throw new iwo(
              `No plan file found at ${l}. Please write your plan to this file before calling ExitPlanMode.`,
            );
          let m = Oh() || "unknown",
            g = rp(),
            h = nrt("plan_approval", pte(m, g || "default")),
            y = {
              type: "plan_approval_request",
              from: m,
              timestamp: new Date().toISOString(),
              planFilePath: l,
              planContent: u,
              requestId: h,
            };
          await fg(
            "team-lead",
            {
              from: m,
              text: De(y),
              timestamp: new Date().toISOString(),
            },
            g,
          );
          let b = t.getAppState(),
            _ = xnl(m, b);
          if (_) rwo(_, t.taskRegistry, !0);
          return {
            data: {
              plan: u,
              isAgent: !0,
              filePath: l,
              awaitingLeaderApproval: !0,
              requestId: h,
            },
          };
        }
        let d = null;
        {
          let m = Fr(t).prePlanMode ?? "default";
          if (m === "auto" && !(i?.isAutoModeGateEnabled() ?? !1)) {
            let g = i?.getAutoModeUnavailableReason() ?? "circuit-breaker";
            ((d = i?.getAutoModeUnavailableNotification(g) ?? "auto mode unavailable"),
              T(
                `[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${m} but gate is off (reason=${g}) \u2014 falling back to default on plan exit`,
                {
                  level: "warn",
                },
              ));
          }
        }
        if (d)
          o?.({
            type: "notification",
            notification: {
              key: "auto-mode-gate-plan-exit-fallback",
              text: `plan exit \u2192 default \xB7 ${d}`,
              priority: "immediate",
              color: "warning",
              timeoutMs: 1e4,
            },
          });
        let p = Fr(t);
        if (p.mode === "plan") {
          (xK(!0), Vie(!0));
          let m = p.prePlanMode ?? "default";
          {
            if (m === "auto" && !(i?.isAutoModeGateEnabled() ?? !1)) m = "default";
            let y = m === "auto",
              b = s?.isAutoModeActive() ?? !1;
            if ((s?.setAutoModeActive(y), b && !y)) B2(!0);
          }
          Ebe({
            from: "plan",
            to: m,
            trigger: "exit_plan_mode",
          });
          let g = m === "auto",
            h = p.strippedDangerousRules;
          t.setToolPermissionContext((y) => {
            let b = y;
            if (g) b = i?.stripDangerousPermissionsForAutoMode(b) ?? b;
            else if (h) b = i?.restoreDangerousPermissions(b) ?? b;
            return {
              ...b,
              mode: m,
              prePlanMode: void 0,
            };
          });
        }
        let f = el() && t.options.tools.some((m) => Ql(m, ss));
        return {
          data: {
            plan: u,
            isAgent: a,
            filePath: l,
            hasTaskTool: f || void 0,
            planWasEdited: c !== void 0 || void 0,
          },
        };
      },
      mapToolResultToToolResultBlockParam(
        {
          isAgent: e,
          plan: t,
          filePath: n,
          hasTaskTool: r,
          planWasEdited: o,
          awaitingLeaderApproval: s,
          requestId: i,
        },
        a,
      ) {
        if (s)
          return {
            type: "tool_result",
            content: `Your plan has been submitted to the team lead for approval.

Plan file: ${n}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${i}`,
            tool_use_id: a,
          };
        if (e)
          return {
            type: "tool_result",
            content:
              'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',
            tool_use_id: a,
          };
        if (!t || t.trim() === "")
          return {
            type: "tool_result",
            content: "User has approved exiting plan mode. You can now proceed.",
            tool_use_id: a,
          };
        let l = r
          ? `

If this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${ss} tool (pass a \`name\`) to parallelize the work.`
          : "";
        return {
          type: "tool_result",
          content: `User has approved your plan. You can now start coding. Start with updating your todo list if applicable

Your plan has been saved to: ${n}
You can refer back to it if needed during implementation.${l}

## ${o ? "Approved Plan (edited by user)" : "Approved Plan"}:
${t}`,
          tool_use_id: a,
        };
      },
    })));
});
function Ltf() {
  return `## What Happens in Plan Mode

In plan mode, you'll:
1. Thoroughly explore the codebase using ${hC() && Su() ? `\`find\`/${wu}, \`grep\`/${qc}, and ${Ds}` : `${wu}, ${qc}, and ${Ds}`}
2. Understand existing patterns and architecture
3. Design an implementation approach
4. Present your plan to the user for approval
5. Use ${mf} if you need to clarify approaches
6. Exit plan mode with ${Xx} when ready to implement

`;
}
function Dtf() {
  return `Use this tool proactively when you're about to start a non-trivial implementation task. Getting user sign-off on your approach before writing code prevents wasted effort and ensures alignment. This tool transitions you into plan mode where you can explore the codebase and design an implementation approach for user approval.

## When to Use This Tool

**Prefer using EnterPlanMode** for implementation tasks unless they're simple. Use it when ANY of these conditions apply:

1. **New Feature Implementation**: Adding meaningful new functionality
   - Example: "Add a logout button" - where should it go? What should happen on click?
   - Example: "Add form validation" - what rules? What error messages?

2. **Multiple Valid Approaches**: The task can be solved in several different ways
   - Example: "Add caching to the API" - could use Redis, in-memory, file-based, etc.
   - Example: "Improve performance" - many optimization strategies possible

3. **Code Modifications**: Changes that affect existing behavior or structure
   - Example: "Update the login flow" - what exactly should change?
   - Example: "Refactor this component" - what's the target architecture?

4. **Architectural Decisions**: The task requires choosing between patterns or technologies
   - Example: "Add real-time updates" - WebSockets vs SSE vs polling
   - Example: "Implement state management" - Redux vs Context vs custom solution

5. **Multi-File Changes**: The task will likely touch more than 2-3 files
   - Example: "Refactor the authentication system"
   - Example: "Add a new API endpoint with tests"

6. **Unclear Requirements**: You need to explore before understanding the full scope
   - Example: "Make the app faster" - need to profile and identify bottlenecks
   - Example: "Fix the bug in checkout" - need to investigate root cause

7. **User Preferences Matter**: The implementation could reasonably go multiple ways
   - If you would use ${mf} to clarify the approach, use EnterPlanMode instead
   - Plan mode lets you explore first, then present options with context

## When NOT to Use This Tool

Only skip EnterPlanMode for simple tasks:
- Single-line or few-line fixes (typos, obvious bugs, small tweaks)
- Adding a single function with clear requirements
- Tasks where the user has given very specific, detailed instructions
- Pure research/exploration tasks (use the Agent tool with explore agent instead)

${Ltf()}## Examples

### GOOD - Use EnterPlanMode:
User: "Add user authentication to the app"
- Requires architectural decisions (session vs JWT, where to store tokens, middleware structure)

User: "Optimize the database queries"
- Multiple approaches possible, need to profile first, significant impact

User: "Implement dark mode"
- Architectural decision on theme system, affects many components

User: "Add a delete button to the user profile"
- Seems simple but involves: where to place it, confirmation dialog, API call, error handling, state updates

User: "Update the error handling in the API"
- Affects multiple files, user should approve the approach

### BAD - Don't use EnterPlanMode:
User: "Fix the typo in the README"
- Straightforward, no planning needed

User: "Add a console.log to debug this function"
- Simple, obvious implementation

User: "What files handle routing?"
- Research task, not implementation planning

## Important Notes

- This tool REQUIRES user approval - they must consent to entering plan mode
- If unsure whether to use it, err on the side of planning - it's better to get alignment upfront than to redo work
- Users appreciate being consulted before significant changes are made to their codebase
`;
}
function Jnl() {
  return Dtf();
}
