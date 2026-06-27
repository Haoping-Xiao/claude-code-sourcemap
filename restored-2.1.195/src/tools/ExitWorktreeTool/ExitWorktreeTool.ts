// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rbl
// matched 2.1.88 source: src/tools/ExitWorktreeTool/ExitWorktreeTool.ts
// class=modified  jaccard=0.3453  score=0.5346  fileCov=0.4938
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Rbl] deps: Xr, ft, GF, Izt, kt, ii, dC, Lo, je, At, Bi, gM, sa, PM, KI, _$, _a, kv, aR, vbl
((Ibl = require("fs/promises")),
  (xbl = require("os")),
  (Xgf = ve(() =>
    H.strictObject({
      action: H.enum(["keep", "remove"]).describe(
        '"keep" leaves the worktree and branch on disk; "remove" deletes both.',
      ),
      discard_changes: H.boolean()
        .optional()
        .describe(
          'Required true when action is "remove" and the worktree has uncommitted files or unmerged commits. The tool will refuse and list them otherwise.',
        ),
    }),
  )),
  (Jgf = ve(() =>
    H.object({
      action: H.enum(["keep", "remove"]),
      originalCwd: H.string(),
      worktreePath: H.string(),
      worktreeBranch: H.string().optional(),
      tmuxSessionName: H.string().optional(),
      discardedFiles: H.number().optional(),
      discardedCommits: H.number().optional(),
      message: H.string(),
    }),
  )));
kbl = ti({
  name: qOn,
  searchHint: "exit a worktree session and return to the original directory",
  maxResultSizeChars: 100000 /* 1e5 */,
  async description() {
    return "Exits a worktree session created by EnterWorktree and restores the original working directory";
  },
  async prompt() {
    return Abl();
  },
  get inputSchema() {
    return Xgf();
  },
  get outputSchema() {
    return Jgf();
  },
  userFacingName(e) {
    return e?.action === "remove" ? "Cleaning up worktree" : "Exiting worktree";
  },
  shouldDefer: true,
  isDestructive(e) {
    return e.action === "remove";
  },
  toAutoClassifierInput(e) {
    return e.action;
  },
  async validateInput(e) {
    if (MFe())
      return {
        result: false,
        message:
          'ExitWorktree cannot be called from a subagent with a cwd override (isolation: "worktree" or explicit cwd) \u2014 it would mutate the parent session\'s process-wide working directory. This agent is already isolated; use Bash with `cd` for directory changes within it.',
        errorCode: 5,
      };
    let t = Gm();
    if (!t)
      return {
        result: false,
        message:
          "No-op: there is no active EnterWorktree session to exit. This tool only operates on worktrees created by EnterWorktree in the current session \u2014 it will not touch worktrees created manually or in a previous session. No filesystem changes were made.",
        errorCode: 1,
      };
    if (e.action === "remove" && t.enteredExisting)
      return {
        result: false,
        message: `This session entered an existing worktree (${t.worktreePath}); it was not created by EnterWorktree, so this tool will not remove it. Use action: "keep" to return to ${t.originalCwd}, then remove the worktree manually with \`git worktree remove\` if desired.`,
        errorCode: 4,
      };
    if (e.action === "remove" && !e.discard_changes) {
      let n = await wbl(t.worktreePath, t.originalHeadCommit);
      if (n === null)
        return {
          result: false,
          message: `Could not verify worktree state at ${t.worktreePath}. Refusing to remove without explicit confirmation. Re-invoke with discard_changes: true to proceed \u2014 or use action: "keep" to preserve the worktree.`,
          errorCode: 3,
        };
      let { changedFiles: r, commits: o } = n;
      if (r > 0 || o > 0) {
        let s = [];
        if (r > 0) s.push(`${r} uncommitted ${r === 1 ? "file" : "files"}`);
        if (o > 0)
          s.push(
            `${o} ${o === 1 ? "commit" : "commits"} on ${t.worktreeBranch ?? "the worktree branch"}`,
          );
        return {
          result: false,
          message: `Worktree has ${s.join(" and ")}. Removing will discard this work permanently. Confirm with the user, then re-invoke with discard_changes: true \u2014 or use action: "keep" to preserve the worktree.`,
          errorCode: 2,
        };
      }
    }
    return {
      result: true,
    };
  },
  renderToolUseMessage: Hbl,
  renderToolResultMessage: Tbl,
  async call(e) {
    let t = Gm();
    if (!t) throw Error("Not in a worktree session");
    let {
        originalCwd: n,
        worktreePath: r,
        worktreeBranch: o,
        tmuxSessionName: s,
        originalHeadCommit: i,
      } = t,
      a = rc() === yr(),
      { changedFiles: l, commits: c } = (await wbl(r, i)) ?? {
        changedFiles: 0,
        commits: 0,
      };
    if (e.action === "keep") {
      await Q6e();
      let m = await Cbl(n, a, r);
      G("tengu_worktree_kept", {
        mid_session: true,
        commits: c,
        changed_files: l,
      });
      let g = s ? ` Tmux session ${s} is still running; reattach with: tmux attach -t ${s}` : "";
      return {
        data: {
          action: "keep",
          originalCwd: n,
          worktreePath: r,
          worktreeBranch: o,
          tmuxSessionName: s,
          message: `Exited worktree. Your work is preserved at ${r}${o ? ` on branch ${o}` : ""}. ${TRo(n, m)}${g}`,
        },
      };
    }
    if (s) await Sbt(s);
    let u = await Ebt(),
      d = await Cbl(n, a, r);
    if (!u)
      return {
        data: {
          action: "remove",
          originalCwd: n,
          worktreePath: r,
          worktreeBranch: o,
          discardedFiles: 0,
          discardedCommits: 0,
          message: `Exited worktree but could not remove it \u2014 kept at ${r}. ${TRo(n, d)}`,
        },
      };
    G("tengu_worktree_removed", {
      source: We("exit_tool"),
      mid_session: true,
      commits: c,
      changed_files: l,
    });
    let p = [];
    if (c > 0) p.push(`${c} ${c === 1 ? "commit" : "commits"}`);
    if (l > 0) p.push(`${l} uncommitted ${l === 1 ? "file" : "files"}`);
    let f = p.length > 0 ? ` Discarded ${p.join(" and ")}.` : "";
    return {
      data: {
        action: "remove",
        originalCwd: n,
        worktreePath: r,
        worktreeBranch: o,
        discardedFiles: l,
        discardedCommits: c,
        message: `Exited and removed worktree at ${r}.${f} ${TRo(n, d)}`,
      },
    };
  },
  mapToolResultToToolResultBlockParam({ message: e }, t) {
    return {
      type: "tool_result",
      content: e,
      tool_use_id: t,
    };
  },
});
function kzt(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function IQ(e) {
  return typeof e === "string" && e.trim() !== "";
}
function hXn(e) {
  return "tasks" in e || "todos" in e;
}
function yXn(e) {
  return "prompt" in e || "subagent_type" in e;
}
function rhf(e) {
  let t = Gd(e).trim(),
    n = Array.from(t);
  if (n.length <= 80) return t;
  let r = n.slice(0, 80).join(""),
    o = r.lastIndexOf(" ");
  return (o > 40 ? r.slice(0, o) : r).trim();
}
function Lbl(e) {
  if (!kzt(e)) return null;
  if (hXn(e)) return null;
  let t = [],
    n = {
      ...e,
    };
  if (yXn(n) && !(IQ(n.subject) && IQ(n.description))) return null;
  if (!("subject" in n) && !("description" in n) && "task" in n) {
    let o = n.task;
    if (IQ(o)) (delete n.task, (n.description = o), t.push("task_wrapper_string"));
    else if (kzt(o)) {
      if (hXn(o)) return null;
      if (yXn(o) && !(IQ(o.subject) && IQ(o.description))) return null;
      (delete n.task, Object.assign(n, o), t.push("task_wrapper_object"));
    } else return null;
  }
  let r = [
    [Zgf, "subject"],
    [ehf, "description"],
    [thf, "activeForm"],
  ];
  for (let [o, s] of r)
    for (let i of o)
      if (i in n && !(s in n) && IQ(n[i])) ((n[s] = n[i]), delete n[i], t.push(`alias_${i}`));
  if (IQ(n.subject) && !("description" in n))
    ((n.description = n.subject), t.push("backfill_description"));
  else if (IQ(n.description) && !("subject" in n))
    ((n.subject = rhf(n.description)), t.push("backfill_subject"));
  if (IQ(n.subject) && IQ(n.description)) {
    for (let o of Object.keys(n))
      if (!Qgf.has(o)) (delete n[o], t.push(`strip_${nhf.has(o) ? o : "other"}`));
    if ("activeForm" in n && typeof n.activeForm !== "string")
      (delete n.activeForm, t.push("drop_invalid_activeForm"));
    if ("metadata" in n && !kzt(n.metadata)) (delete n.metadata, t.push("drop_invalid_metadata"));
  }
  if (t.length === 0) return null;
  return {
    input: n,
    shapeClass: t.join("+"),
  };
}
function Dbl(e) {
  if (!kzt(e)) return null;
  let t = kzt(e.task) ? e.task : null;
  if (hXn(e) || (t !== null && hXn(t)))
    return "TaskCreate creates ONE task per call and has no `tasks` or `todos` parameter. Call TaskCreate once per task, passing `subject` (a brief title) and `description` (what needs to be done) as top-level string parameters.";
  if ((yXn(e) || (t !== null && yXn(t))) && !(IQ(e.subject) && IQ(e.description)))
    return "This call used Agent-tool parameters (`prompt`/`subagent_type`). TaskCreate adds an item to the task list and takes `subject` and `description` string parameters. To delegate work to a subagent, use the Agent tool instead.";
  return null;
}
var Qgf, Zgf, ehf, thf, nhf;
