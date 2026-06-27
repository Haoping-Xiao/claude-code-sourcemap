// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UOo
// matched 2.1.88 source: src/commands/commit-push-pr.ts
// class=modified  jaccard=0.1196  score=0.3408  fileCov=0.1556
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module UOo] deps: utils/semver.ts
((O0f = {
  type: "local-jsx",
  name: "desktop",
  aliases: ["app"],
  description: "Continue the current session in Claude Desktop",
  availability: ["claude-ai"],
  isEnabled: tEt,
  get isHidden() {
    return !tEt();
  },
  load: () => Promise.resolve().then(() => (UPl(), NPl)),
}),
  (FPl = O0f));
function getPromptContent(defaultBranch, prAttribution, n) {
  let { commit: r, pr: o } = wze(),
    s = c6(r),
    i = c6(n ?? o),
    a = WPl(process.env.SAFEUSER || ""),
    l = WPl(process.env.USER || ""),
    c = "",
    u = "",
    d = "",
    p = "",
    f = `

5. After creating/updating the PR, check if the user's CLAUDE.md mentions posting to Slack channels. If it does, use ToolSearch to search for "slack send message" tools. If ToolSearch finds a Slack tool, ask the user if they'd like you to post the PR URL to the relevant Slack channel. Only post if the user confirms. If ToolSearch returns no results or errors, skip this step silently\u2014do not mention the failure, do not attempt workarounds, and do not try alternative approaches.`;
  return `${c}## Context

- \`SAFEUSER\`: ${a}
- \`whoami\`: ${l}
- \`git status\`: !\`git status\`
- \`git diff HEAD\`: !\`git diff HEAD\`
- \`git branch --show-current\`: !\`git branch --show-current\`
- \`git diff ${defaultBranch}...HEAD\`: !\`git diff ${defaultBranch}...HEAD\`
- \`gh pr view --json number\`: !\`${Su() ? "gh pr view --json number 2>/dev/null || true" : 'gh pr view --json number 2>$null; if (-not $?) { "" }'}\`

## Git Safety Protocol

- NEVER update the git config
- NEVER run destructive/irreversible git commands (like push --force, hard reset, etc) unless the user explicitly requests them
- NEVER skip hooks (--no-verify, --no-gpg-sign, etc) unless the user explicitly requests it
- NEVER run force push to main/master, warn the user if they request it
- Do not commit files that likely contain secrets (.env, credentials.json, etc)
- Never use git commands with the -i flag (like git rebase -i or git add -i) since they require interactive input which is not supported

## Your task

Analyze all changes that will be included in the pull request, making sure to look at all relevant commits (NOT just the latest commit, but ALL commits that will be included in the pull request from the git diff ${defaultBranch}...HEAD output above).

Based on the above changes:
1. Create a new branch if on ${defaultBranch} (use SAFEUSER from context above for the branch name prefix, falling back to whoami if SAFEUSER is empty, e.g., \`username/feature-name\`)
2. Create a single commit with an appropriate message${s ? ", ending with the attribution text shown in the example below" : ""}:
${
  Su()
    ? `\`\`\`
git commit -m "$(cat <<'EOF'
Commit message here.${
        s
          ? `

${s}`
          : ""
      }
EOF
)"
\`\`\``
    : `\`\`\`
git commit -m @'
Commit message here.${
        s
          ? `

${s}`
          : ""
      }
'@
\`\`\`
The closing \`'@\` MUST be at column 0 with no leading whitespace.`
}
3. Push the branch to origin
4. If a PR already exists for this branch (check the gh pr view output above), update the PR title and body using \`gh pr edit\` to reflect the current diff${d}. Otherwise, create a pull request using \`gh pr create\` with the multi-line body syntax shown below${u}.
   - IMPORTANT: Keep PR titles short (under 70 characters). Use the body for details.
${
  Su()
    ? `\`\`\`
gh pr create --title "Short, descriptive title" --body "$(cat <<'EOF'
## Summary
<1-3 bullet points>

## Test plan
[Bulleted markdown checklist of TODOs for testing the pull request...]${p}${
        i
          ? `

${i}`
          : ""
      }
EOF
)"
\`\`\``
    : `\`\`\`
gh pr create --title "Short, descriptive title" --body @'
## Summary
<1-3 bullet points>

## Test plan
[Bulleted markdown checklist of TODOs for testing the pull request...]${p}${
        i
          ? `

${i}`
          : ""
      }
'@
\`\`\``
}

You have the capability to call multiple tools in a single response. You MUST do all of the above in a single message.${f}

Return the PR URL when you're done, so the user can see it.`;
}
function WPl(e) {
  return e.replace(/[^a-zA-Z0-9._-]/g, "");
}
var N0f, jPl, B0f, qPl;
