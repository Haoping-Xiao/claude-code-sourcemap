// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qbl
// matched 2.1.88 source: src/tools/TaskListTool/TaskListTool.ts
// class=modified  jaccard=0.3303  score=0.424  fileCov=0.5993
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Qbl = E(() => {
  Xr();
  ii();
  bk();
  Xbl();
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
      maxResultSizeChars: 1e5,
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
      shouldDefer: !0,
      isEnabled() {
        return EH();
      },
      isConcurrencySafe() {
        return !0;
      },
      isReadOnly() {
        return !0;
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
});
var Zbl = {};
_t(Zbl, {
  isWorktreeModeEnabled: () => isWorktreeModeEnabled,
});
function isWorktreeModeEnabled() {
  return !0;
}
function eSl(e) {
  return `${e.cron ?? ""}${e.prompt ? `: ${$a(e.prompt, 60, !0)}` : ""}`;
}
function tSl(e) {
  return WF.jsx(qn, {
    children: WF.jsxs(w, {
      children: [
        "Scheduled ",
        WF.jsx(w, {
          bold: !0,
          children: e.id,
        }),
        " ",
        WF.jsxs(w, {
          dimColor: !0,
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
          bold: !0,
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
                bold: !0,
                children: t.id,
              }),
              " ",
              WF.jsxs(w, {
                dimColor: !0,
                children: [
                  t.humanSchedule,
                  t.recurring ? " (recurring)" : " (one-shot)",
                  t.durable === !1 ? " [session-only]" : "",
                  t.prompt ? `: ${$a(t.prompt, 60, !0)}` : "",
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
