// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ebl
// matched 2.1.88 source: src/tools/EnterWorktreeTool/EnterWorktreeTool.ts
// class=modified  jaccard=0.2828  score=0.402  fileCov=0.4883
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ebl] deps: Xr, ft, GF, Izt, kt, ii, dC, Lo, je, At, gM, sa, KI, _$, _a, aR, _bl
((bbl = require("path")),
  (Kgf = ve(() =>
    H.strictObject({
      name: H.string()
        .superRefine((e, t) => {
          try {
            bbt(e);
          } catch (n) {
            t.addIssue({
              code: "custom",
              message: be(n),
            });
          }
        })
        .optional()
        .describe(
          'Optional name for a new worktree. Each "/"-separated segment may contain only letters, digits, dots, underscores, and dashes; max 64 chars total. A random name is generated if not provided. Mutually exclusive with `path`.',
        ),
      path: H.string()
        .optional()
        .describe(
          "Path to an existing worktree of the current repository to switch into instead of creating a new one. Must appear in `git worktree list` for the current repo. Mutually exclusive with `name`.",
        ),
    }).refine((e) => !(e.name && e.path), {
      message: "Provide at most one of `name` or `path`, not both.",
    }),
  )),
  (Ygf = ve(() =>
    H.object({
      worktreePath: H.string(),
      worktreeBranch: H.string().optional(),
      message: H.string(),
    }),
  )),
  (Sbl = ti({
    name: oSe,
    searchHint: "create an isolated git worktree and switch into it",
    maxResultSizeChars: 100000 /* 1e5 */,
    async description() {
      return "Creates an isolated worktree (via git or configured hooks) and switches the session into it";
    },
    async prompt() {
      return gbl();
    },
    get inputSchema() {
      return Kgf();
    },
    get outputSchema() {
      return Ygf();
    },
    userFacingName(e) {
      return e?.path ? "Entering worktree" : "Creating worktree";
    },
    shouldDefer: true,
    toAutoClassifierInput(e) {
      return e.path ?? e.name ?? "";
    },
    async validateInput(e) {
      if (MFe()) {
        if (e.path)
          return {
            result: true,
          };
        let t = $t(),
          n = qf(t);
        return {
          result: false,
          message:
            `EnterWorktree cannot create a worktree from a subagent with a cwd override (isolation: "worktree" or explicit cwd) \u2014 it would mutate the parent session's process-wide working directory. ` +
            (n != null && t !== n && t.startsWith(n + bbl.sep)
              ? "To switch this agent into an existing worktree managed by Claude Code (under .claude/worktrees/ of this repository), call EnterWorktree with `path`. To work in any other directory, spawn an Agent with `cwd` set to it."
              : "To work in a different directory (including a worktree), spawn an Agent with `cwd` set to it."),
          errorCode: 1,
        };
      }
      if (Gm() && !e.path)
        return {
          result: false,
          message:
            "Already in a worktree session. Pass `path` to switch into another existing worktree, or use ExitWorktree to leave this one before creating a new worktree.",
          errorCode: 2,
        };
      return {
        result: true,
      };
    },
    renderToolUseMessage: hbl,
    renderToolResultMessage: ybl,
    async call(e, t) {
      if (MFe()) {
        if (!e.path)
          throw new ow(
            "EnterWorktree from a session with a pinned working directory requires `path`.",
          );
        let s = await gXn(e.path, {
          requireManagedLocation: true,
          requireCwdInsideRepo: true,
        });
        if ((Uy(s.worktreePath), Xmo(s.worktreePath, t.agentId ?? Rt()), t.agentId))
          try {
            let a = await Moe(t.agentId);
            if (a)
              await Ype(t.agentId, {
                ...a,
                cwd: s.worktreePath,
              });
          } catch (a) {
            T(`Failed to update agent metadata cwd after worktree switch: ${be(a)}`);
          }
        G("tengu_worktree_entered_existing", {
          mid_session: true,
          cwd_override: true,
        });
        let i = s.worktreeBranch ? ` on branch ${s.worktreeBranch}` : "";
        return {
          data: {
            worktreePath: s.worktreePath,
            worktreeBranch: s.worktreeBranch,
            message: `Entered worktree at ${s.worktreePath}${i}. This agent's working directory and write access now point at the worktree; the previous directory was left untouched.`,
          },
          contextLayers: [
            {
              kind: "working_directory",
              directory: s.worktreePath,
            },
          ],
        };
      }
      if (Gm() && !e.path) throw Error("Already in a worktree session");
      let n;
      if (e.path) n = await HRo(Rt(), e.path);
      else {
        let s = $t(),
          i = qf(s),
          a = false;
        if (i && i !== s) (process.chdir(i), Uy(i), (a = true));
        try {
          n = await xzt(Rt(), e.name ?? L$e(), void 0, {
            fromCwd: s,
          });
        } catch (l) {
          if (a)
            try {
              (process.chdir(s), Uy(s));
            } catch {
              (mY(), bS()?.refreshGitBranch?.());
            }
          throw l;
        }
      }
      (process.chdir(n.worktreePath),
        Uy(n.worktreePath),
        _D($t()),
        Xmo(n.worktreePath, Rt()),
        fq(n),
        k$e(),
        ak(),
        gS.cache.clear?.(),
        mY(),
        bS()?.refreshGitBranch?.(),
        G(e.path ? "tengu_worktree_entered_existing" : "tengu_worktree_created", {
          mid_session: true,
        }));
      let r = n.worktreeBranch ? ` on branch ${n.worktreeBranch}` : "",
        o = e.path ? "Entered" : "Created";
      return {
        data: {
          worktreePath: n.worktreePath,
          worktreeBranch: n.worktreeBranch,
          message: `${o} worktree at ${n.worktreePath}${r}. The session is now working in the worktree. Use ExitWorktree to leave mid-session, or exit the session to be prompted.`,
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
  })));
function Abl() {
  return `Exit a worktree session created by EnterWorktree and return the session to the original working directory.

## Scope

This tool ONLY operates on worktrees created by EnterWorktree in this session. It will NOT touch:
- Worktrees you created manually with \`git worktree add\`
- Worktrees from a previous session (even if created by EnterWorktree then)
- The directory you're in if EnterWorktree was never called

If called outside an EnterWorktree session, the tool is a **no-op**: it reports that no worktree session is active and takes no action. Filesystem state is unchanged.

## When to Use

- The user explicitly asks to "exit the worktree", "leave the worktree", "go back", or otherwise end the worktree session
- Do NOT call this proactively \u2014 only when the user asks

## Parameters

- \`action\` (required): \`"keep"\` or \`"remove"\`
  - \`"keep"\` \u2014 leave the worktree directory and branch intact on disk. Use this if the user wants to come back to the work later, or if there are changes to preserve.
  - \`"remove"\` \u2014 delete the worktree directory and its branch. Use this for a clean exit when the work is done or abandoned.
- \`discard_changes\` (optional, default false): only meaningful with \`action: "remove"\`. If the worktree has uncommitted files or commits not on the original branch, the tool will REFUSE to remove it unless this is set to \`true\`. If the tool returns an error listing changes, confirm with the user before re-invoking with \`discard_changes: true\`.

## Behavior

- Restores the session's working directory to where it was before EnterWorktree
- Clears CWD-dependent caches (system prompt sections, memory files, plans directory) so the session state reflects the original directory
- If a tmux session was attached to the worktree: killed on \`remove\`, left running on \`keep\` (its name is returned so the user can reattach)
- Once exited, EnterWorktree can be called again to create a fresh worktree
`;
}
function Hbl(e) {
  return "";
}
function Tbl(e, t, n) {
  let r = e.action === "keep" ? "Kept worktree" : "Removed worktree";
  return cfe.jsx(qn, {
    children: cfe.jsxs(U, {
      flexDirection: "column",
      children: [
        cfe.jsxs(w, {
          children: [
            r,
            e.worktreeBranch
              ? cfe.jsxs(cfe.Fragment, {
                  children: [
                    " ",
                    "(branch ",
                    cfe.jsx(w, {
                      bold: true,
                      children: e.worktreeBranch,
                    }),
                    ")",
                  ],
                })
              : null,
          ],
        }),
        cfe.jsxs(w, {
          dimColor: true,
          children: ["Returned to ", e.originalCwd],
        }),
      ],
    }),
  });
}
var cfe;
