// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hFl
// matched 2.1.88 source: src/commands/install-github-app/setupGitHubActions.ts
// class=modified  jaccard=0.5704  score=0.8863  fileCov=0.6155
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hFl] deps: utils/plugins/loadPluginCommands.ts, components/AwsAuthStatusBox.tsx, undici/lib/mock/mock-agent.js, hooks/useTerminalSize.ts
((mFl = R(lt(), 1)), (im = R(se(), 1)));
async function createWorkflowFile(
  repoName,
  branchName,
  workflowPath,
  workflowContent,
  secretName,
  message,
  context,
) {
  let checkFileResult = await $n("gh", [
      "api",
      `repos/${repoName}/contents/${workflowPath}`,
      "--jq",
      ".sha",
    ]),
    l = null;
  if (checkFileResult.code === 0) l = checkFileResult.stdout.trim();
  let c = workflowContent;
  if (secretName === "CLAUDE_CODE_OAUTH_TOKEN")
    c = workflowContent.replace(
      /anthropic_api_key: \$\{\{ secrets\.ANTHROPIC_API_KEY \}\}/g,
      "claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}",
    );
  else if (secretName !== "ANTHROPIC_API_KEY")
    c = workflowContent.replace(
      /anthropic_api_key: \$\{\{ secrets\.ANTHROPIC_API_KEY \}\}/g,
      `anthropic_api_key: \${{ secrets.${secretName} }}`,
    );
  let u = Buffer.from(c).toString("base64"),
    d = [
      "api",
      "--method",
      "PUT",
      `repos/${repoName}/contents/${workflowPath}`,
      "-f",
      `message=${l ? `"Update ${message}"` : `"${message}"`}`,
      "-f",
      `content=${u}`,
      "-f",
      `branch=${branchName}`,
    ];
  if (l) d.push("-f", `sha=${l}`);
  let createFileResult = await $n("gh", d);
  if (createFileResult.code !== 0) {
    if (createFileResult.stderr.includes("422") && createFileResult.stderr.includes("sha"))
      throw (
        G("tengu_setup_github_actions_failed", {
          reason: We("failed_to_create_workflow_file"),
          exit_code: createFileResult.code,
          ...context,
        }),
        Error(
          `Failed to create workflow file ${workflowPath}: A Claude workflow file already exists in this repository. Please remove it first or update it manually.`,
        )
      );
    G("tengu_setup_github_actions_failed", {
      reason: We("failed_to_create_workflow_file"),
      exit_code: createFileResult.code,
      ...context,
    });
    let f =
      `

Need help? Common issues:
` +
      `\xB7 Permission denied \u2192 Run: gh auth refresh -h github.com -s repo,workflow
` +
      `\xB7 Not authorized \u2192 Ensure you have admin access to the repository
` +
      "\xB7 For manual setup \u2192 Visit: https://github.com/anthropics/claude-code-action";
    throw Error(`Failed to create workflow file ${workflowPath}: ${createFileResult.stderr}${f}`);
  }
}
async function setupGitHubActions(
  repoName,
  apiKeyOrOAuthToken,
  secretName,
  updateProgress,
  o = false,
  selectedWorkflows,
  authType,
  context,
) {
  try {
    G("tengu_setup_github_actions_started", {
      skip_workflow: o,
      has_api_key: !!apiKeyOrOAuthToken,
      using_default_secret_name: secretName === "ANTHROPIC_API_KEY",
      selected_claude_workflow: selectedWorkflows.includes("claude"),
      selected_claude_review_workflow: selectedWorkflows.includes("claude-review"),
      ...context,
    });
    let l = await $n("gh", ["api", `repos/${repoName}`, "--jq", ".id"]);
    if (l.code !== 0)
      throw (
        G("tengu_setup_github_actions_failed", {
          reason: We("repo_not_found"),
          exit_code: l.code,
          ...context,
        }),
        Error(`Failed to access repository ${repoName}: ${l.stderr}`)
      );
    let c = await $n("gh", ["api", `repos/${repoName}`, "--jq", ".default_branch"]);
    if (c.code !== 0)
      throw (
        G("tengu_setup_github_actions_failed", {
          reason: We("failed_to_get_default_branch"),
          exit_code: c.code,
          ...context,
        }),
        Error(`Failed to get default branch: ${c.stderr}`)
      );
    let u = c.stdout.trim(),
      d = await $n("gh", ["api", `repos/${repoName}/git/ref/heads/${u}`, "--jq", ".object.sha"]);
    if (d.code !== 0)
      throw (
        G("tengu_setup_github_actions_failed", {
          reason: We("failed_to_get_branch_sha"),
          exit_code: d.code,
          ...context,
        }),
        Error(`Failed to get branch SHA: ${d.stderr}`)
      );
    let p = d.stdout.trim(),
      f = null;
    if (!o) {
      (updateProgress(), (f = `add-claude-github-actions-${Date.now()}`));
      let m = await $n("gh", [
        "api",
        "--method",
        "POST",
        `repos/${repoName}/git/refs`,
        "-f",
        `ref=refs/heads/${f}`,
        "-f",
        `sha=${p}`,
      ]);
      if (m.code !== 0)
        throw (
          G("tengu_setup_github_actions_failed", {
            reason: We("failed_to_create_branch"),
            exit_code: m.code,
            ...context,
          }),
          Error(`Failed to create branch: ${m.stderr}`)
        );
      updateProgress();
      let g = [];
      if (selectedWorkflows.includes("claude"))
        g.push({
          path: ".github/workflows/claude.yml",
          content: LUl,
          message: "Claude PR Assistant workflow",
        });
      if (selectedWorkflows.includes("claude-review"))
        g.push({
          path: ".github/workflows/claude-code-review.yml",
          content: PUl,
          message: "Claude Code Review workflow",
        });
      for (let h of g)
        await createWorkflowFile(repoName, f, h.path, h.content, secretName, h.message, context);
    }
    if ((updateProgress(), apiKeyOrOAuthToken)) {
      let m = await $n("gh", [
        "secret",
        "set",
        secretName,
        "--body",
        apiKeyOrOAuthToken,
        "--repo",
        repoName,
      ]);
      if (m.code !== 0) {
        G("tengu_setup_github_actions_failed", {
          reason: We("failed_to_set_api_key_secret"),
          exit_code: m.code,
          ...context,
        });
        let g =
          `

Need help? Common issues:
` +
          `\xB7 Permission denied \u2192 Run: gh auth refresh -h github.com -s repo
` +
          `\xB7 Not authorized \u2192 Ensure you have admin access to the repository
` +
          "\xB7 For manual setup \u2192 Visit: https://github.com/anthropics/claude-code-action";
        throw Error(`Failed to set API key secret: ${m.stderr || "Unknown error"}${g}`);
      }
    }
    if (!o && f) {
      updateProgress();
      let m = `https://github.com/${repoName}/compare/${u}...${f}?quick_pull=1&title=${encodeURIComponent(RUl)}&body=${encodeURIComponent(DUl)}`;
      await ac(m);
    }
    (G("tengu_setup_github_actions_completed", {
      skip_workflow: o,
      has_api_key: !!apiKeyOrOAuthToken,
      auth_type: $e(authType),
      using_default_secret_name: secretName === "ANTHROPIC_API_KEY",
      selected_claude_workflow: selectedWorkflows.includes("claude"),
      selected_claude_review_workflow: selectedWorkflows.includes("claude-review"),
      ...context,
    }),
      gn((m) => ({
        ...m,
        githubActionSetupCount: (m.githubActionSetupCount ?? 0) + 1,
      })));
  } catch (l) {
    if (l instanceof Error && l.message.includes("Failed to"))
      T(`GitHub Actions setup failed: ${l.message}`, {
        level: "error",
      });
    else if (
      (G("tengu_setup_github_actions_failed", {
        reason: We("unexpected_error"),
        ...context,
      }),
      l instanceof Error)
    )
      ke(l);
    throw l;
  }
}
