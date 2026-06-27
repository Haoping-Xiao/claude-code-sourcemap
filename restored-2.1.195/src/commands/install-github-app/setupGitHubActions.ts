// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hFl
// matched 2.1.88 source: src/commands/install-github-app/setupGitHubActions.ts
// class=modified  jaccard=0.5704  score=0.8863  fileCov=0.6155
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hFl] deps: pz, R6, gm, Ye
((mFl = R(lt(), 1)), (im = R(se(), 1)));
async function createWorkflowFile(e, t, n, r, o, s, i) {
  let a = await $n("gh", ["api", `repos/${e}/contents/${n}`, "--jq", ".sha"]),
    l = null;
  if (a.code === 0) l = a.stdout.trim();
  let c = r;
  if (o === "CLAUDE_CODE_OAUTH_TOKEN")
    c = r.replace(
      /anthropic_api_key: \$\{\{ secrets\.ANTHROPIC_API_KEY \}\}/g,
      "claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}",
    );
  else if (o !== "ANTHROPIC_API_KEY")
    c = r.replace(
      /anthropic_api_key: \$\{\{ secrets\.ANTHROPIC_API_KEY \}\}/g,
      `anthropic_api_key: \${{ secrets.${o} }}`,
    );
  let u = Buffer.from(c).toString("base64"),
    d = [
      "api",
      "--method",
      "PUT",
      `repos/${e}/contents/${n}`,
      "-f",
      `message=${l ? `"Update ${s}"` : `"${s}"`}`,
      "-f",
      `content=${u}`,
      "-f",
      `branch=${t}`,
    ];
  if (l) d.push("-f", `sha=${l}`);
  let p = await $n("gh", d);
  if (p.code !== 0) {
    if (p.stderr.includes("422") && p.stderr.includes("sha"))
      throw (
        G("tengu_setup_github_actions_failed", {
          reason: We("failed_to_create_workflow_file"),
          exit_code: p.code,
          ...i,
        }),
        Error(
          `Failed to create workflow file ${n}: A Claude workflow file already exists in this repository. Please remove it first or update it manually.`,
        )
      );
    G("tengu_setup_github_actions_failed", {
      reason: We("failed_to_create_workflow_file"),
      exit_code: p.code,
      ...i,
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
    throw Error(`Failed to create workflow file ${n}: ${p.stderr}${f}`);
  }
}
async function setupGitHubActions(e, t, n, r, o = false, s, i, a) {
  try {
    G("tengu_setup_github_actions_started", {
      skip_workflow: o,
      has_api_key: !!t,
      using_default_secret_name: n === "ANTHROPIC_API_KEY",
      selected_claude_workflow: s.includes("claude"),
      selected_claude_review_workflow: s.includes("claude-review"),
      ...a,
    });
    let l = await $n("gh", ["api", `repos/${e}`, "--jq", ".id"]);
    if (l.code !== 0)
      throw (
        G("tengu_setup_github_actions_failed", {
          reason: We("repo_not_found"),
          exit_code: l.code,
          ...a,
        }),
        Error(`Failed to access repository ${e}: ${l.stderr}`)
      );
    let c = await $n("gh", ["api", `repos/${e}`, "--jq", ".default_branch"]);
    if (c.code !== 0)
      throw (
        G("tengu_setup_github_actions_failed", {
          reason: We("failed_to_get_default_branch"),
          exit_code: c.code,
          ...a,
        }),
        Error(`Failed to get default branch: ${c.stderr}`)
      );
    let u = c.stdout.trim(),
      d = await $n("gh", ["api", `repos/${e}/git/ref/heads/${u}`, "--jq", ".object.sha"]);
    if (d.code !== 0)
      throw (
        G("tengu_setup_github_actions_failed", {
          reason: We("failed_to_get_branch_sha"),
          exit_code: d.code,
          ...a,
        }),
        Error(`Failed to get branch SHA: ${d.stderr}`)
      );
    let p = d.stdout.trim(),
      f = null;
    if (!o) {
      (r(), (f = `add-claude-github-actions-${Date.now()}`));
      let m = await $n("gh", [
        "api",
        "--method",
        "POST",
        `repos/${e}/git/refs`,
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
            ...a,
          }),
          Error(`Failed to create branch: ${m.stderr}`)
        );
      r();
      let g = [];
      if (s.includes("claude"))
        g.push({
          path: ".github/workflows/claude.yml",
          content: LUl,
          message: "Claude PR Assistant workflow",
        });
      if (s.includes("claude-review"))
        g.push({
          path: ".github/workflows/claude-code-review.yml",
          content: PUl,
          message: "Claude Code Review workflow",
        });
      for (let h of g) await createWorkflowFile(e, f, h.path, h.content, n, h.message, a);
    }
    if ((r(), t)) {
      let m = await $n("gh", ["secret", "set", n, "--body", t, "--repo", e]);
      if (m.code !== 0) {
        G("tengu_setup_github_actions_failed", {
          reason: We("failed_to_set_api_key_secret"),
          exit_code: m.code,
          ...a,
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
      r();
      let m = `https://github.com/${e}/compare/${u}...${f}?quick_pull=1&title=${encodeURIComponent(RUl)}&body=${encodeURIComponent(DUl)}`;
      await ac(m);
    }
    (G("tengu_setup_github_actions_completed", {
      skip_workflow: o,
      has_api_key: !!t,
      auth_type: $e(i),
      using_default_secret_name: n === "ANTHROPIC_API_KEY",
      selected_claude_workflow: s.includes("claude"),
      selected_claude_review_workflow: s.includes("claude-review"),
      ...a,
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
        ...a,
      }),
      l instanceof Error)
    )
      ke(l);
    throw l;
  }
}
