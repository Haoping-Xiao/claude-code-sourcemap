// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F2o
// matched 2.1.88 source: src/commands/review/reviewRemote.ts
// class=modified  jaccard=0.2031  score=0.2551  fileCov=0.4991
// note: deminified; 6 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var i9l = {};
_t(i9l, {
  runUltrareviewHeadless: () => runUltrareviewHeadless,
  precheckLaunchScope: () => precheckLaunchScope,
  parseUltrareviewArgs: () => parseUltrareviewArgs,
  launchRemoteReview: () => launchRemoteReview,
  getReviewDurationNote: () => nQ,
  getReviewCostNote: () => PMe,
  confirmOverage: () => confirmOverage,
  checkOverageGate: () => checkOverageGate,
  _resetOverageConfirmedForTests: () => JGf,
});
function confirmOverage() {
  j2o = true;
}
function JGf() {
  j2o = false;
}
function parseUltrareviewArgs(e) {
  let { flags: t, rest: n } = Kor(e, ["fix", "comment"]);
  return {
    scopeArgs: n,
    applyFixes: t.has("fix"),
  };
}
async function precheckLaunchScope(e, t = "/code-review ultra") {
  if (!(await _ft()))
    return (
      G("tengu_review_remote_precondition_failed", {
        reason: We("not_git_repo"),
      }),
      {
        ok: false,
        error: `${t} needs a git repository so it can clone your code into a cloud sandbox, but ${$t()} is not inside one. Run "git init" here to create a repository, or cd into an existing one.`,
      }
    );
  let n = e.trim();
  if (/^\d+$/.test(n)) {
    let f = await $O();
    if (!f)
      return (
        G("tengu_review_remote_precondition_failed", {
          reason: We("no_github_remote"),
        }),
        {
          ok: false,
          error: `${t} <PR#> needs a GitHub remote so it knows which repository the PR is in. If this project is not on GitHub yet, run "gh repo create --source=. --push" to create one; if a GitHub repo already exists, run "git remote add origin REPO_URL". Or run ${t} with no argument to review your current branch instead.`,
        }
      );
    if (
      $m(f.host) &&
      f.owner.toLowerCase() === "anthropics" &&
      f.name.toLowerCase() === "anthropic"
    )
      return (
        G("tengu_review_remote_precondition_failed", {
          reason: We("monorepo_blocked"),
        }),
        {
          ok: false,
          error: `${t} doesn't support the Anthropic monorepo \u2014 monorepo PRs are reviewed automatically by bughunter. Re-trigger it from the PR checks page, or run /bughunter here for a local hunt.`,
        }
      );
    let { stdout: m, code: g } = await $n(
      "gh",
      [
        "pr",
        "view",
        n,
        "--repo",
        `${f.host}/${f.owner}/${f.name}`,
        "--json",
        "additions,deletions,changedFiles",
      ],
      {
        timeout: 5000,
        preserveOutputOnError: false,
      },
    );
    if (g === 0 && m.trim())
      try {
        let h = Ft(m),
          { maxFiles: y, maxLines: b } = Wwo(),
          _ = h.additions + h.deletions;
        if (h.changedFiles > y || _ > b)
          return (
            G("tengu_review_remote_precondition_failed", {
              reason: We("pr_diff_too_large"),
              files: h.changedFiles,
              lines: _,
              max_files: y,
              max_lines: b,
            }),
            {
              ok: false,
              error: `PR #${n} is too large for ultrareview (${h.changedFiles} files, ${_.toLocaleString()} lines). Split it into smaller PRs, or run \`${t}\` on a narrower local diff.`,
            }
          );
      } catch {}
    return {
      ok: true,
      scope: {
        mode: "pr",
        prNumber: n,
        repo: `${f.owner}/${f.name}`,
      },
    };
  }
  let r = await UZa();
  if (r.tooLarge)
    return (
      G("tengu_review_remote_precondition_failed", {
        reason: We("repo_too_large_to_bundle"),
        pack_bytes: r.sizeBytes ?? void 0,
        pack_objects: r.inPackCount ?? void 0,
      }),
      {
        ok: false,
        error: `Repo is too large to bundle. Push a PR and use \`${t} <PR#>\` instead.`,
      }
    );
  if (n) {
    let f = async (m) =>
      (
        await $n(go(), ["rev-parse", "--verify", "--quiet", m], {
          preserveOutputOnError: false,
        })
      ).code === 0;
    if (!(await f(`origin/${n}`)) && !(await f(n)))
      return (
        G("tengu_review_remote_precondition_failed", {
          reason: We("base_ref_not_found"),
        }),
        {
          ok: false,
          error: `"${n}" is not a branch in this repo. ${t} takes a PR number, a branch name, or no argument (reviews your current branch). Try ${t} by itself.`,
        }
      );
  }
  let o = n || (await vD()) || "main",
    s = (await ub()) || "HEAD",
    i = async (f) =>
      $n(go(), ["merge-base", f, "HEAD"], {
        preserveOutputOnError: false,
      }),
    { stdout: a, code: l } = await i(`origin/${o}`);
  if (l !== 0) ({ stdout: a, code: l } = await i(o));
  let c = a.trim();
  if (l !== 0 || !c) {
    G("tengu_review_remote_precondition_failed", {
      reason: We("no_merge_base"),
    });
    let f = n
      ? `Make sure ${o} exists locally or on origin (try \`git fetch origin ${o}\`).`
      : `Pass the base branch explicitly (e.g. \`${t} develop\`) or make sure you're in a git repo with a ${o} branch.`;
    return {
      ok: false,
      error: `Could not find merge-base with ${o}. ${f}`,
    };
  }
  let { stdout: u, code: d } = await $n(go(), ["diff", "--shortstat", c], {
    preserveOutputOnError: false,
    env: {
      ...process.env,
      LC_ALL: "C",
    },
  });
  if (d === 0 && !u.trim())
    return (
      G("tengu_review_remote_precondition_failed", {
        reason: We("empty_diff"),
      }),
      {
        ok: false,
        error: `It doesn't look like you have any new commits or changes to review against your ${o} branch. Stage or commit them first?`,
      }
    );
  let p = c6n(u);
  if (p) {
    let { maxFiles: f, maxLines: m } = Wwo(),
      g = p.linesAdded + p.linesRemoved;
    if (p.filesCount > f || g > m)
      return (
        G("tengu_review_remote_precondition_failed", {
          reason: We("local_diff_too_large"),
          files: p.filesCount,
          lines: g,
          max_files: f,
          max_lines: m,
        }),
        {
          ok: false,
          error: `Diff is too large for ultrareview: ${u.trim()}. Pass a closer base branch (\`${t} <branch>\`) to narrow the scope, or split the change.`,
        }
      );
  }
  return {
    ok: true,
    scope: {
      mode: "branch",
      headBranch: s,
      baseBranch: o,
      mergeBaseSha: c,
      diffStat: u.trim(),
    },
  };
}
async function checkOverageGate() {
  let e = await o9l();
  if (!e)
    return {
      kind: "proceed",
      billingNote: "",
    };
  let t = e.billing_note ?? "";
  switch (e.action) {
    case "proceed":
      return {
        kind: "proceed",
        billingNote: t,
      };
    case "blocked":
      return {
        kind: "blocked",
        reason: e.blocked?.reason ?? "server",
        message: e.blocked?.message ?? "Ultrareview is unavailable for your organization.",
        actionUrl: e.blocked?.action_url ?? null,
      };
    case "confirm": {
      if (j2o)
        return {
          kind: "proceed",
          billingNote: t,
        };
      return {
        kind: "needs-confirm",
        body: `This review bills as usage credits (${PMe()}).`,
        billingNote: t,
      };
    }
  }
}
async function launchRemoteReview(e, t, n, r) {
  let o = r?.invocation ?? "/code-review ultra",
    s = (I) => ({
      launched: false,
      blocks: [
        {
          type: "text",
          text: I,
        },
      ],
    }),
    i = await Ipe({
      allowBundle: true,
    });
  if (!i.eligible) {
    let I = i.errors;
    if (I.length > 0) {
      G("tengu_review_remote_precondition_failed", {
        reason: We("remote_agent_ineligible"),
        precondition_errors: I.map((D) => D.type).join(","),
      });
      let k = I.map((D) => {
        if (D.type === "not_in_git_repo")
          return `${o} needs a git repository so it can clone your code into a cloud sandbox, but ${$t()} is not inside one. Run "git init" here to create a repository, or cd into an existing one.`;
        if (D.type === "no_git_remote")
          return `${o} needs a GitHub remote so it can clone this repository into the cloud. If this project is not on GitHub yet, run "gh repo create --source=. --push" to create one; if a GitHub repo already exists, run "git remote add origin REPO_URL && git push -u origin HEAD".`;
        return poe(D);
      }).join(`
`);
      return s(`Ultrareview cannot launch:
${k}`);
    }
  }
  let a = "env_011111111111111111111113",
    l = z8e(),
    c = (I, k, D) => {
      if (typeof I !== "number" || !Number.isFinite(I)) return k;
      let P = Math.floor(I);
      if (P <= 0) return k;
      return P > D ? k : P;
    },
    u = Rol(),
    d = {
      BUGHUNTER_DRY_RUN: "1",
      BUGHUNTER_FLEET_SIZE: String(c(l?.fleet_size, 5, 20)),
      BUGHUNTER_MAX_DURATION: String(c(l?.max_duration_minutes, 10, 25)),
      BUGHUNTER_AGENT_TIMEOUT: String(c(l?.agent_timeout_seconds, 600, 1800)),
      BUGHUNTER_TOTAL_WALLCLOCK: String(c(l?.total_wallclock_minutes, 22, 27)),
      ...(u && {
        BUGHUNTER_MODEL: u,
      }),
      ...(process.env.BUGHUNTER_DEV_BUNDLE_B64 && {
        BUGHUNTER_DEV_BUNDLE_B64: process.env.BUGHUNTER_DEV_BUNDLE_B64,
      }),
    },
    p,
    f,
    m,
    g = "",
    h,
    y,
    b,
    _,
    S;
  if (e.mode === "pr") {
    let I = await $O();
    if (!I)
      return (
        G("tengu_review_remote_precondition_failed", {
          reason: We("no_github_remote_post_confirm"),
        }),
        null
      );
    ((p = await Y5({
      initialMessage: null,
      source: "ultrareview",
      description: `ultrareview: ${I.owner}/${I.name}#${e.prNumber}`,
      signal: t.abortController.signal,
      branchName: `refs/pull/${e.prNumber}/head`,
      environmentId: a,
      tags: ["ultrareview"],
      environmentVariables: {
        BUGHUNTER_PR_NUMBER: e.prNumber,
        BUGHUNTER_REPOSITORY: `${I.owner}/${I.name}`,
        ...d,
      },
      onCreateFail: (k, D, P) => {
        ((h = k), (y = $e(D)), (b = P?.status), (_ = Oo(P?.serverType)), (S = Oo(P?.serverReason)));
      },
    })),
      (f = `/ultrareview ${e.prNumber}`),
      (m = `${I.owner}/${I.name}#${e.prNumber}`));
  } else {
    let { headBranch: I, baseBranch: k, mergeBaseSha: D, diffStat: P } = e;
    g = P;
    let O, L;
    if (
      ((p = await Y5({
        initialMessage: null,
        source: "ultrareview",
        description: `ultrareview: ${I}`,
        signal: t.abortController.signal,
        useBundle: true,
        bundleBaseRef: D,
        environmentId: a,
        tags: ["ultrareview"],
        environmentVariables: {
          BUGHUNTER_BASE_BRANCH: D,
          ...d,
        },
        onBundleFail: (M, N) => {
          ((O = M), (L = $e(N)));
        },
        onCreateFail: (M, N, B) => {
          ((h = M),
            (y = $e(N)),
            (b = B?.status),
            (_ = Oo(B?.serverType)),
            (S = Oo(B?.serverReason)));
        },
      })),
      !p)
    )
      return (
        G("tengu_review_remote_teleport_failed", {
          mode: We("branch"),
          reason: y,
          bundle_fail_kind: L,
          status_code: b,
          server_type: _,
          server_reason: S,
        }),
        s(
          O ??
            (h
              ? `Ultrareview could not start the cloud session: ${h}`
              : `Repo is too large. Push a PR and use \`${o} <PR#>\` instead.`),
        )
      );
    ((f = "/ultrareview"), (m = I === k ? I : `${I} \u2192 ${k}`));
  }
  if (!p) {
    if (
      (G("tengu_review_remote_teleport_failed", {
        mode: We("pr"),
        reason: y,
        status_code: b,
        server_type: _,
        server_reason: S,
      }),
      h)
    )
      return s(`Ultrareview could not start the cloud session: ${h}`);
    return null;
  }
  let A;
  if (!r?.skipTaskRegistration)
    A = lAe({
      remoteTaskType: "ultrareview",
      session: p,
      command: f,
      context: t,
      isRemoteReview: true,
      applyFixesOnComplete: r?.applyFixesOnComplete,
    }).taskId;
  G("tengu_review_remote_launched", {});
  let v = xpe(p.id),
    C = n.trim()
      ? `${n.trim()}
`
      : "",
    x = g
      ? `
Scope: ${g}`
      : "";
  return {
    launched: true,
    sessionId: p.id,
    sessionUrl: v,
    taskId: A,
    title: p.title,
    blocks: [
      {
        type: "text",
        text: `${C}Ultrareview launched for ${m} (${nQ()}, runs in the cloud). Track: ${v}${x}`,
      },
    ],
  };
}
async function runUltrareviewHeadless(e, t) {
  if (!W6())
    return {
      status: "error",
      message: "Ultrareview is currently unavailable.",
    };
  let n = await precheckLaunchScope(e, t.invocation);
  if (!n.ok)
    return {
      status: "error",
      message: n.error,
    };
  let r = await checkOverageGate();
  if (r.kind === "blocked")
    return (
      G("tengu_review_overage_blocked", {
        reason: r.reason,
      }),
      {
        status: "blocked",
        message: r.message,
        actionUrl: r.actionUrl,
      }
    );
  if (r.kind === "needs-confirm") {
    if ((G("tengu_review_overage_dialog_shown", {}), !t.confirm))
      return {
        status: "needs-confirm",
        body: r.body,
        billingNote: r.billingNote,
      };
    confirmOverage();
  }
  if (!t.confirm)
    return {
      status: "needs-confirm",
      body: `${
        n.scope.mode === "pr"
          ? `Reviewing PR ${n.scope.repo}#${n.scope.prNumber}`
          : `Reviewing current branch against ${n.scope.baseBranch}
Scope: ${n.scope.diffStat}`
      }
${nQ()} \xB7 Est. cost ${PMe()} USD`,
      billingNote: r.billingNote,
    };
  let o = await launchRemoteReview(n.scope, t.context, r.billingNote, {
    skipTaskRegistration: t.skipTaskRegistration,
    invocation: t.invocation,
  });
  if (!o?.launched)
    return {
      status: "error",
      message:
        o?.blocks
          .map((s) => (s.type === "text" ? s.text : ""))
          .join("")
          .trim() || "Failed to launch cloud review session.",
    };
  return {
    status: "launched",
    sessionId: o.sessionId,
    sessionUrl: o.sessionUrl,
    taskId: o.taskId,
    title: o.title,
    message: o.blocks
      .map((s) => (s.type === "text" ? s.text : ""))
      .join("")
      .trim(),
    billingNote: r.billingNote,
  };
}
var j2o = false;
