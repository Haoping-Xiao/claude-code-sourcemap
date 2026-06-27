// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qbl
// matched 2.1.88 source: src/tools/TaskListTool/TaskListTool.ts
// class=modified  jaccard=0.4856  score=0.6162  fileCov=0.6962
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: isWorktreeModeEnabled
// [unwrapped __esm module Qbl] deps: @modelcontextprotocol/sdk/dist/esm/types.js, services/mockRateLimits.ts, utils/tasks.ts, Xbl
((uhf = ve(() => H.strictObject({}))),
  (dhf = ve(() =>
    H.object({
      tasks: H.array(
        H.object({
          id: H.string(),
          subject: H.string(),
          status: rVe(),
          owner: H.string().optional(),
          blockedBy: H.array(H.string()),
        }),
      ),
    }),
  )),
  (Jbl = ti({
    name: yL,
    searchHint: "list all tasks",
    maxResultSizeChars: 100000 /* 1e5 */,
    async description() {
      return Kbl;
    },
    async prompt() {
      return Ybl();
    },
    get inputSchema() {
      return uhf();
    },
    get outputSchema() {
      return dhf();
    },
    userFacingName() {
      return "TaskList";
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
    renderToolUseMessage() {
      return null;
    },
    async call() {
      let e = yF(),
        t = (await W4(e)).filter((o) => !o.metadata?._internal),
        n = new Set(t.filter((o) => o.status === "completed").map((o) => o.id));
      return {
        data: {
          tasks: t.map((o) => ({
            id: o.id,
            subject: o.subject,
            status: o.status,
            owner: o.owner,
            blockedBy: o.blockedBy.filter((s) => !n.has(s)),
          })),
        },
      };
    },
    mapToolResultToToolResultBlockParam(e, t) {
      let { tasks: n } = e;
      if (n.length === 0)
        return {
          tool_use_id: t,
          type: "tool_result",
          content: "No tasks found",
        };
      let r = n.map((o) => {
        let s = o.owner ? ` (${o.owner})` : "",
          i =
            o.blockedBy.length > 0
              ? ` [blocked by ${o.blockedBy.map((a) => `#${a}`).join(", ")}]`
              : "";
        return `#${o.id} [${o.status}] ${o.subject}${s}${i}`;
      });
      return {
        tool_use_id: t,
        type: "tool_result",
        content: r.join(`
`),
      };
    },
  })));
function isWorktreeModeEnabled() {
  return true;
}
function eSl(e) {
  return `${e.cron ?? ""}${e.prompt ? `: ${$a(e.prompt, 60, true)}` : ""}`;
}
function tSl(e) {
  return WF.jsx(qn, {
    children: WF.jsxs(w, {
      children: [
        "Scheduled ",
        WF.jsx(w, {
          bold: true,
          children: e.id,
        }),
        " ",
        WF.jsxs(w, {
          dimColor: true,
          children: ["(", e.humanSchedule, ")"],
        }),
      ],
    }),
  });
}
function nSl(e) {
  return e.id ?? "";
}
function rSl(e) {
  return WF.jsx(qn, {
    children: WF.jsxs(w, {
      children: [
        "Cancelled ",
        WF.jsx(w, {
          bold: true,
          children: e.id,
        }),
      ],
    }),
  });
}
function oSl() {
  return "";
}
function sSl(e) {
  if (e.jobs.length === 0)
    return WF.jsx(qn, {
      children: WF.jsx(Fl, {
        children: "No scheduled jobs",
      }),
    });
  return WF.jsx(qn, {
    children: WF.jsx(U, {
      flexDirection: "column",
      children: e.jobs.map((t) =>
        WF.jsxs(
          w,
          {
            children: [
              WF.jsx(w, {
                bold: true,
                children: t.id,
              }),
              " ",
              WF.jsxs(w, {
                dimColor: true,
                children: [
                  t.humanSchedule,
                  t.recurring ? " (recurring)" : " (one-shot)",
                  t.durable === false ? " [session-only]" : "",
                  t.prompt ? `: ${$a(t.prompt, 60, true)}` : "",
                ],
              }),
            ],
          },
          t.id,
        ),
      ),
    }),
  });
}
var WF;
