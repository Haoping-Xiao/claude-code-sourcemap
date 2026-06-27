// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IKt
// matched 2.1.88 source: src/tools/BashTool/prompt.ts
// class=modified  jaccard=0.4475  score=0.6098  fileCov=0.6271
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module IKt] deps: services/analytics/index.ts, constants/systemPromptSections.ts, env-paths/index.js, utils/markdownConfigLoader.ts, tools/GlobTool/prompt.ts, types/plugin.ts, state/AppStateStore.ts, utils/debug.ts, RE, utils/settings/constants.ts, utils/sequential.ts, utils/model/configs.ts, utils/agentContext.ts, bridge/jwtUtils.ts, JDo, utils/stats.ts, utils/path.ts, utils/settings/settings.ts, utils/attribution.ts
oCl = require("fs/promises");
sHf = new Set([Ds, ka, Wc]);
function xKt() {
  return I$e();
}
function oSt() {
  return tXn();
}
function lCl() {
  if (Oe.platform !== "win32") return null;
  let e =
    "This tool runs Git Bash (POSIX sh), not cmd.exe or PowerShell. Use Unix shell syntax: `/dev/null` not `NUL`, forward slashes, `$VAR` not `%VAR%` or `$env:VAR`.";
  if (!q1()) return e;
  return `${e} Do not use PowerShell here-strings (\`@'\u2026'@\`) or backtick continuation here \u2014 for multi-line strings use a heredoc.`;
}
function getBackgroundUsageNote() {
  if (Oe.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS) return null;
  return "You can use the `run_in_background` parameter to run the command in the background. Only use this if you don't need the result immediately and are OK being notified when the command completes later. You do not need to check the output right away - you'll be notified when it finishes. You do not need to use '&' at the end of the command when using this parameter.";
}
function uCl() {
  return "";
}
function getCommitAndPRInstructions(e) {
  if (!Ejt()) return "";
  let n = EH() ? cC : s$,
    { commit: r, pr: o } = wze(),
    s = EKt(e),
    i = s
      ? `${s}

`
      : "",
    a = uCl(),
    l = null;
  return `${
    e.commit
      ? `# Git
- Never use git commands with the -i flag (like git rebase -i or git add -i) since they require interactive input which is not supported.
- Only commit when the user explicitly asks. When staging, prefer naming specific files over "git add -A"/"git add ." \u2014 never commit files that likely contain secrets (.env, credentials).${
          r
            ? `
- End git commit messages with:
${r}`
            : ""
        }

`
      : `# Committing changes with git

Only create commits when requested by the user. If unclear, ask first. When the user asks you to create a new git commit, follow these steps carefully:

You can call multiple tools in a single response. When multiple independent pieces of information are requested and all commands are likely to succeed, run multiple tool calls in parallel for optimal performance. The numbered steps below indicate which commands should be batched in parallel.

Git Safety Protocol:
- NEVER update the git config
- NEVER run destructive git commands (push --force, reset --hard, checkout ., restore ., clean -f, branch -D) unless the user explicitly requests these actions. Taking unauthorized destructive actions is unhelpful and can result in lost work, so it's best to ONLY run these commands when given direct instructions 
- NEVER skip hooks (--no-verify, --no-gpg-sign, etc) unless the user explicitly requests it
- NEVER run force push to main/master, warn the user if they request it
- CRITICAL: Always create NEW commits rather than amending, unless the user explicitly requests a git amend. When a pre-commit hook fails, the commit did NOT happen \u2014 so --amend would modify the PREVIOUS commit, which may result in destroying work or losing previous changes. Instead, after hook failure, fix the issue, re-stage, and create a NEW commit
- When staging files, prefer adding specific files by name rather than using "git add -A" or "git add .", which can accidentally include sensitive files (.env, credentials) or large binaries
- NEVER commit changes unless the user explicitly asks you to. It is VERY IMPORTANT to only commit when explicitly asked, otherwise the user will feel that you are being too proactive

1. Run the following bash commands in parallel, each using the ${Co} tool:
  - Run a git status command to see all untracked files. IMPORTANT: Never use the -uall flag as it can cause memory issues on large repos.
  - Run a git diff command to see both staged and unstaged changes that will be committed.
  - Run a git log command to see recent commit messages, so that you can follow this repository's commit message style.
2. Analyze all staged changes (both previously staged and newly added) and draft a commit message:
  - Summarize the nature of the changes (eg. new feature, enhancement to an existing feature, bug fix, refactoring, test, docs, etc.). Ensure the message accurately reflects the changes and their purpose (i.e. "add" means a wholly new feature, "update" means an enhancement to an existing feature, "fix" means a bug fix, etc.).
  - Do not commit files that likely contain secrets (.env, credentials.json, etc). Warn the user if they specifically request to commit those files
  - Draft a concise (1-2 sentences) commit message that focuses on the "why" rather than the "what"
  - Ensure it accurately reflects the changes and their purpose
3. Run the following commands in parallel:
   - Add relevant untracked files to the staging area.
   - Create the commit with a message${
     r
       ? ` ending with:
   ${r}`
       : "."
   }
   - Run git status after the commit completes to verify success.
   Note: git status depends on the commit completing, so run it sequentially after the commit.
4. If the commit fails due to pre-commit hook: fix the issue and create a NEW commit

Important notes:
- NEVER run additional commands to read or explore code, besides git bash commands
- NEVER use the ${n} or ${ss} tools
- DO NOT push to the remote repository unless the user explicitly asks you to do so
- IMPORTANT: Never use git commands with the -i flag (like git rebase -i or git add -i) since they require interactive input which is not supported.
- IMPORTANT: Do not use --no-edit with git rebase commands, as the --no-edit flag is not a valid option for git rebase.
- If there are no changes to commit (i.e., no untracked files and no modifications), do not create an empty commit
- In order to ensure good formatting, ALWAYS pass the commit message via a HEREDOC, a la this example:
<example>
git commit -m "$(cat <<'EOF'
   Commit message here.${
     r
       ? `

   ${r}`
       : ""
   }
   EOF
   )"
</example>

`
  }${i}${
    a
      ? `${a}

`
      : ""
  }# Creating pull requests
Use the gh command via the Bash tool for ALL GitHub-related tasks including working with issues, pull requests, checks, and releases. If given a Github URL use the gh command to get the information needed.

IMPORTANT: When the user asks you to create a pull request, follow these steps carefully:

1. Run the following bash commands in parallel using the ${Co} tool, in order to understand the current state of the branch since it diverged from the main branch:
   - Run a git status command to see all untracked files (never use -uall flag)
   - Run a git diff command to see both staged and unstaged changes that will be committed
   - Check if the current branch tracks a remote branch and is up to date with the remote, so you know if you need to push to the remote
   - Run a git log command and \`git diff [base-branch]...HEAD\` to understand the full commit history for the current branch (from the time it diverged from the base branch)
2. Analyze all changes that will be included in the pull request, making sure to look at all relevant commits (NOT just the latest commit, but ALL commits that will be included in the pull request!!!), and draft a pull request title and summary:
   - Keep the PR title short (under 70 characters)
   - Use the description/body for details, not the title
3. Run the following commands in parallel:
   - Create new branch if needed
   - Push to remote with -u flag if needed
   - Create PR using gh pr create with the format below. Use a HEREDOC to pass the body to ensure correct formatting.
<example>
gh pr create --title "the pr title" --body "$(cat <<'EOF'
## Summary
<1-3 bullet points>

## Test plan
[Bulleted markdown checklist of TODOs for testing the pull request...]${
    o
      ? `

${o}`
      : ""
  }
EOF
)"
</example>

Important:
- DO NOT use the ${n} or ${ss} tools
- Return the PR URL when you're done, so the user can see it

# Other common operations
- View comments on a Github PR: gh api repos/foo/bar/pulls/123/comments${
    l
      ? `

${l}`
      : ""
  }`;
}
function rSt(e) {
  if (!e || e.length === 0) return e;
  return Uo(e);
}
function Cze(e) {
  if (!e || e.length <= QDo) return e;
  let t = e.length - QDo;
  return [...e.slice(0, QDo), `... and ${t} more (truncated for prompt size)`];
}
function getSimpleSandboxSection() {
  if (!xo.isSandboxingEnabled()) return "";
  let e = xo.getFsReadConfig(),
    t = xo.getFsWriteConfig(),
    n = xo.getNetworkRestrictionConfig(),
    r = xo.getAllowUnixSockets(),
    o = xo.getIgnoreViolations(),
    s = xo.areUnsandboxedCommandsAllowed(),
    i = new Set([YU(), y2t()]),
    a = (f) => Uo(f.map((m) => (i.has(m) ? "$TMPDIR" : m))),
    l = {
      read: {
        denyOnly: Cze(rSt(e.denyOnly)),
        ...(e.allowWithinDeny && {
          allowWithinDeny: Cze(rSt(e.allowWithinDeny)),
        }),
      },
      write: {
        allowOnly: Cze(a(t.allowOnly)),
        denyWithinAllow: Cze(rSt(t.denyWithinAllow)),
      },
    },
    c = {
      ...(n?.allowedHosts && {
        allowedHosts: Cze(rSt(n.allowedHosts)),
      }),
      ...(n?.deniedHosts && {
        deniedHosts: Cze(rSt(n.deniedHosts)),
      }),
      ...(r && {
        allowUnixSockets: Cze(rSt(r)),
      }),
    },
    u = [];
  if (Object.keys(l).length > 0) u.push(`Filesystem: ${De(l)}`);
  if (Object.keys(c).length > 0) u.push(`Network: ${De(c)}`);
  if (o) u.push(`Ignored violations: ${De(o)}`);
  let p = [
    ...(s
      ? [
          "You should always default to running commands within the sandbox. Do NOT attempt to set `dangerouslyDisableSandbox: true` unless:",
          [
            "The user *explicitly* asks you to bypass sandbox",
            "A specific command just failed and you see evidence of sandbox restrictions causing the failure. Note that commands can fail for many reasons unrelated to the sandbox (missing files, wrong arguments, network issues, etc.).",
          ],
          "Evidence of sandbox-caused failures includes:",
          [
            '"Operation not permitted" errors for file/network operations',
            "Access denied to specific paths outside allowed directories",
            "Network connection failures to non-whitelisted hosts",
            "Unix socket connection errors",
          ],
          "When you see evidence of sandbox-caused failure:",
          [
            "Immediately retry with `dangerouslyDisableSandbox: true` (don't ask, just do it)",
            "Briefly explain what sandbox restriction likely caused the failure. Be sure to mention that the user can use the `/sandbox` command to manage restrictions.",
            "This will prompt the user for permission",
          ],
          ...[],
          "Treat each command you execute with `dangerouslyDisableSandbox: true` individually. Even if you have recently run a command with this setting, you should default to running future commands within the sandbox.",
          "Do not suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the sandbox allowlist.",
        ]
      : [
          "All commands MUST run in sandbox mode - the `dangerouslyDisableSandbox` parameter is disabled by policy.",
          "Commands cannot run outside the sandbox under any circumstances.",
          "If a command fails due to sandbox restrictions, work with the user to adjust sandbox settings instead.",
        ]),
    "For temporary files, always use the `$TMPDIR` environment variable. TMPDIR is automatically set to the correct sandbox-writable directory in sandbox mode. Do NOT use `/tmp` directly - use `$TMPDIR` instead.",
  ];
  return [
    "",
    "## Command sandbox",
    "By default, your command will be run in a sandbox. This sandbox controls which directories and network hosts commands may access or modify without an explicit override.",
    "",
    "The sandbox has the following restrictions:",
    u.join(`
`),
    "",
    ...oz(p),
  ].join(`
`);
}
function uHf(e) {
  if (!Ejt()) return "";
  let n = "",
    { commit: r, pr: o } = wze(),
    i = [
      r
        ? `- End git commit messages with:
${r}`
        : null,
      o
        ? `- End PR bodies with:
${o}`
        : null,
    ].filter(Boolean).join(`
`),
    a = uCl(),
    l = null,
    c = EKt(e);
  return `${n}# Git
- Interactive flags (\`-i\`, e.g. \`git rebase -i\`, \`git add -i\`) are not supported in this environment.
- Use the \`gh\` CLI for GitHub operations (PRs, issues, API).
- Commit or push only when the user asks${c ? " \u2014 and for a completed change heading to a PR, only after the pre-ship checks below" : ""}. If on the default branch, branch first.${
    i
      ? `
${i}`
      : ""
  }${
    c
      ? `
- ${c}`
      : ""
  }${
    a
      ? `

${a}`
      : ""
  }${
    l
      ? `

${l}`
      : ""
  }`;
}
function dHf(e) {
  let t = getBackgroundUsageNote() !== null,
    n = uHf(e),
    r = getSimpleSandboxSection(),
    o = hC()
      ? "`cat`, `head`, `tail`, `sed`, `awk`, or `echo`"
      : "`find`, `grep`, `cat`, `head`, `tail`, `sed`, `awk`, or `echo`",
    s = [];
  if (t) {
    let a =
      "- `run_in_background` runs the command detached: it keeps running across turns and re-invokes you when it exits. No `&` needed.";
    if (jW())
      a += " Foreground `sleep` is blocked; use Monitor with an until-loop to wait on a condition.";
    s.push(a);
  }
  let i = lCl();
  return [
    "Executes a bash command and returns its output.",
    ...(i ? ["", i] : []),
    "",
    "- Working directory persists between calls, but prefer absolute paths \u2014 `cd` in a compound command can trigger a permission prompt. Shell state (env vars, functions) does not persist; the shell is initialized from the user's profile.",
    `- IMPORTANT: Avoid using this tool to run ${o} commands, unless explicitly instructed or after you have verified that a dedicated tool cannot accomplish your task. Instead, use the appropriate dedicated tool as this will provide a much better experience for the user.`,
    `- \`timeout\` is in milliseconds: default ${xKt()}, max ${oSt()}.`,
    ...s,
    ...(r ? [r] : []),
    ...(n ? ["", n] : []),
  ].join(`
`);
}
function getSimplePrompt(e, t) {
  if (ph(e)) return dHf(t);
  let n = hC(),
    r = [
      ...(n
        ? []
        : [
            `File search: Use ${wu} (NOT find or ls)`,
            `Content search: Use ${qc} (NOT grep or rg)`,
          ]),
      `Read files: Use ${Ds} (NOT cat/head/tail)`,
      `Edit files: Use ${ka} (NOT sed/awk)`,
      `Write files: Use ${Wc} (NOT echo >/cat <<EOF)`,
      "Communication: Output text directly (NOT echo/printf)",
    ],
    o = n
      ? "`cat`, `head`, `tail`, `sed`, `awk`, or `echo`"
      : "`find`, `grep`, `cat`, `head`, `tail`, `sed`, `awk`, or `echo`",
    s = at("tengu_relay_chain_v1", !1)
      ? []
      : [
          "When issuing multiple commands:",
          [
            `If the commands are independent and can run in parallel, make multiple ${Co} tool calls in a single message. Example: if you need to run "git status" and "git diff", send a single message with two ${Co} tool calls in parallel.`,
            `If the commands depend on each other and must run sequentially, use a single ${Co} call with '&&' to chain them together.`,
            "Use ';' only when you need to run commands sequentially but don't care if earlier commands fail.",
            "DO NOT use newlines to separate commands (newlines are ok in quoted strings).",
          ],
        ],
    i = [
      "Prefer to create a new commit rather than amending an existing commit.",
      "Before running destructive operations (e.g., git reset --hard, git push --force, git checkout --), consider whether there is a safer alternative that achieves the same goal. Only use destructive operations when they are truly the best approach.",
      "Never skip hooks (--no-verify) or bypass signing (--no-gpg-sign, -c commit.gpgsign=false) unless the user has explicitly asked for it. If a hook fails, investigate and fix the underlying issue.",
    ],
    a = [
      "Do not sleep between commands that can run immediately \u2014 just run them.",
      ...(jW()
        ? [
            'Use the Monitor tool to stream events from a background process (each stdout line is a notification). For one-shot "wait until done," use Bash with run_in_background instead.',
          ]
        : []),
      "If your command is long running and you would like to be notified when it finishes \u2014 use `run_in_background`. No sleep needed.",
      "Do not retry failing commands in a sleep loop \u2014 diagnose the root cause.",
      "If waiting for a background task you started with `run_in_background`, you will be notified when it completes \u2014 do not poll.",
      ...(jW()
        ? [
            "Long leading `sleep` commands are blocked. To poll until a condition is met, use Monitor with an until-loop (e.g. `until <check>; do sleep 2; done`) \u2014 you get a notification when the loop exits. Do not chain shorter sleeps to work around the block.",
          ]
        : [
            "If you must poll an external process, use a check command (e.g. `gh run view`) rather than sleeping first.",
            "If you must sleep, keep the duration short to avoid blocking the user.",
          ]),
    ],
    l = getBackgroundUsageNote(),
    c = getCommitAndPRInstructions(t),
    u = [
      "If your command will create new directories or files, first use this tool to run `ls` to verify the parent directory exists and is the correct location.",
      'Always quote file paths that contain spaces with double quotes in your command (e.g., cd "path with spaces/file.txt")',
      "Try to maintain your current working directory throughout the session by using absolute paths and avoiding usage of `cd`. You may use `cd` if the User explicitly requests it. In particular, never prepend `cd <current-directory>` to a `git` command \u2014 `git` already operates on the current working tree, and the compound triggers a permission prompt.",
      `You may specify an optional timeout in milliseconds (up to ${oSt()}ms / ${oSt() / 60000} minutes). By default, your command will timeout after ${xKt()}ms (${xKt() / 60000} minutes).`,
      ...(l !== null ? [l] : []),
      ...s,
      "For git commands:",
      i,
      "Avoid unnecessary `sleep` commands:",
      a,
      ...(n
        ? [
            "When running `find`, search from `.` (or a specific path), not `/` \u2014 scanning the full filesystem can exhaust system resources on large trees.",
            "When using `find -regex` with alternation, put the longest alternative first. Example: use `'.*\\.\\(tsx\\|ts\\)'` not `'.*\\.\\(ts\\|tsx\\)'` \u2014 the second form silently skips `.tsx` files.",
          ]
        : []),
    ],
    d = lCl();
  return [
    "Executes a given bash command and returns its output.",
    ...(d ? ["", d] : []),
    "",
    "The working directory persists between commands, but shell state does not. The shell environment is initialized from the user's profile (bash or zsh).",
    "",
    `IMPORTANT: Avoid using this tool to run ${o} commands, unless explicitly instructed or after you have verified that a dedicated tool cannot accomplish your task. Instead, use the appropriate dedicated tool as this will provide a much better experience for the user:`,
    "",
    ...oz(r),
    `While the ${Co} tool can do similar things, it\u2019s better to use the built-in tools as they provide a better user experience and make it easier to review tool calls and give permission.`,
    "",
    "# Instructions",
    ...oz(u),
    getSimpleSandboxSection(),
    ...(c ? ["", c] : []),
  ].join(`
`);
}
var QDo = 50;
