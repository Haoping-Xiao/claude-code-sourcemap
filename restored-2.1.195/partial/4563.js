// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PLl
// matched 2.1.88 source: src/commands/add-dir/index.ts
// class=partial  jaccard=0.0603  score=0.0618  fileCov=0.7067
// note: low-confidence suggestion: src/commands/add-dir/index.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var PLl = E(() => {
  zxf = {
    type: "local-jsx",
    name: "add-dir",
    description: "Add a new working directory",
    argumentHint: "<path>",
    load: () => Promise.resolve().then(() => (LLl(), RLl))
  }, DLl = zxf;
});
async function NLl(e, t, n) {
  let r, o;
  return o = e === "stop" || e === "off", r = {
    freeformPrompt: e
  }, Yxf(r, t, n);
}
async function Yxf(e, t, {
  signal: n,
  onProgress: r
}) {
  G("tengu_autofix_pr_started", {
    action: "start",
    has_pr_number: String(e.prNumber !== void 0),
    has_repo_path: String(e.repoPath !== void 0),
    has_repo_ref: String(e.repoRef !== void 0)
  });
  let {
      prNumber: o,
      target: s,
      freeformPrompt: i,
      repoPath: a,
      repoRef: l
    } = e,
    c = e.skills ?? [];
  try {
    let u = a ?? $t(),
      [d, p, f, m] = l ? [void 0, void 0, await Ipe({
        cwd: u
      }), !1] : await Promise.all([ub(u), vD(u), Ipe({
        cwd: u
      }), _fn(u)]);
    if (o === void 0 && !l && d === p) return wfe(`cannot run on the default branch (${p}). This checks the branch of ${u} \u2014 check out a feature branch there first (or run Claude Code from your worktree).`, "on_default_branch");
    if (!f.eligible) {
      let W = f.errors.map(poe).join(`
`);
      return wfe(`can't start autofix \u2014
${W}`, "not_eligible");
    }
    let g;
    if (l) g = "remote_session";else {
      let W = !a || Tu(a) === Tu($t());
      g = "remote_session";
    }
    let h = ["pr", "view"];
    if (o !== void 0) h.push(String(o));
    if (l) h.push("-R", $Ll(l));
    h.push("--json", "number,state,url,headRefName");
    let {
      stdout: y,
      code: b,
      error: _
    } = await Gr("gh", h, {
      timeout: 1e4,
      preserveOutputOnError: !0,
      abortSignal: n,
      cwd: u
    });
    if (n.aborted) return Cer();
    if (b !== 0 || !y.trim()) {
      if (_?.includes("ENOENT")) return wfe("gh CLI is required but not found.", "gh_not_found");
      if (_) return wfe(`gh pr view failed: ${_}`, "gh_failed");
      return wfe(o !== void 0 ? `couldn't find PR #${o}${l ? ` in ${$Ll(l)}` : " in this repo"}.` : `no open PR found for branch "${d}"${a ? ` in ${a}` : ""}. Create a PR first, then retry.`, "no_open_pr");
    }
    let S, A, v, C, x;
    try {
      let W = Ft(y);
      if (W.state === "MERGED" || W.state === "CLOSED") return wfe(`PR #${W.number} is ${W.state.toLowerCase()}. Autofix requires an open PR.`, "pr_not_open");
      let V = W.url.match(/\/([^/]+)\/([^/]+)\/pull\//);
      if (!V || !V[1] || !V[2]) return wfe(`unexpected PR URL format: ${W.url}`, "bad_pr_url");
      S = W.number, A = V[1], v = V[2], C = W.url, x = o === void 0 && d ? d : W.headRefName;
    } catch {
      return wfe(`no open PR found for branch "${d}"${a ? ` in ${a}` : ""}. Create a PR first, then retry.`, "no_open_pr");
    }
    let I = `${A}/${v}`,
      k = `${I}#${S}`;
    r?.({
      step: "checking",
      prInfo: {
        ref: k,
        url: C
      }
    });
    let D = c.length > 0 ? ` Run ${c.join(" and ")} for custom instructions on how to autofix.` : "";
    if (g === "current_session") {
      let W = await Xxf(k, I, S, D),
        V = [];
      if (m) V.push("WARNING: You have unpushed local commits, run git push so the PR reflects them");
      if (Ir()) V.push("Note: this is a non-interactive session \u2014 the poll cron only fires while this process stays alive. For one-shot `-p` runs, use `remote` instead.");
      return G("tengu_autofix_pr_result", {
        result: "success_current_session"
      }), V.length > 0 && W.kind === "ok" ? {
        ...W,
        message: `${W.message}

${V.join(`
`)}`
      } : W;
    }
    let P = i || `You're monitoring PR #${S} in ${I}. When CI failures or review comments arrive as notifications, investigate and push fixes directly to the PR branch.${D} Start by checking the current PR status.`,
      O = Object.values(t.taskRegistry.all()).find(W => W.type === "remote_agent" && W.remoteTaskType === "autofix-pr" && W.status === "running" && W.remoteTaskMetadata?.owner === A && W.remoteTaskMetadata?.repo === v && W.remoteTaskMetadata?.prNumber === S);
    if (O?.type === "remote_agent") return G("tengu_autofix_pr_result", {
      result: "success"
    }), {
      kind: "ok",
      message: `Already monitoring ${k} in a cloud session
  ${nt.arrowRight} ${dS(O.sessionId, void 0, {
        from: "cli"
      })}`
    };
    r?.({
      step: "spawning"
    });
    let L,
      M = await Y5({
        initialMessage: P,
        source: "autofix_pr",
        branchName: x,
        reuseOutcomeBranch: x,
        title: `Autofix PR: ${A}/${v}#${S} (${x})`,
        useDefaultEnvironment: !0,
        signal: n,
        githubPr: {
          owner: A,
          repo: v,
          number: S
        },
        cwd: u,
        sourceUrl: l ? `https://${l.host}/${l.owner}/${l.repo}` : void 0,
        onBundleFail: W => {
          L = W;
        }
      });
    if (n.aborted) {
      if (M) X5(M.id);
      return Cer();
    }
    if (!M) return wfe(L ?? "cloud session creation failed.", "session_create_failed");
    r?.({
      step: "subscribing"
    });
    let N = await DTo(M.id, `${A}/${v}`, S);
    if (n.aborted) return X5(M.id), Cer();
    lAe({
      remoteTaskType: "autofix-pr",
      session: {
        id: M.id,
        title: M.title
      },
      command: P,
      isLongRunning: !0,
      remoteTaskMetadata: {
        owner: A,
        repo: v,
        prNumber: S
      },
      context: {
        abortController: new AbortController(),
        taskRegistry: t.taskRegistry
      }
    });
    let B = dS(M.id, void 0, {
        from: "cli"
      }),
      $ = [];
    if (!N.ok) $.push(N.reason === "github_app_not_installed" ? `Autofix is on, but webhook events won't arrive until the Claude GitHub app is installed on ${A}/${v}: ${aWt}` : "WARNING: Failed to turn on autofix for this PR");
    if (!l) {
      if (m) $.push("WARNING: You have unpushed local commits, run git push so the cloud session sees them");
    }
    let q = $.length > 0 ? `

` + $.join(`
`) : "";
    return G("tengu_autofix_pr_result", {
      result: "success"
    }), {
      kind: "ok",
      message: `Spawned cloud autofix PR session on ${x} (PR #${S})
  ${nt.arrowRight} ${B}${q}`
    };
  } catch (u) {
    if (n.aborted) return Cer();
    return wfe(be(u), "exception");
  }
}
function wfe(e, t) {
  return G("tengu_autofix_pr_result", {
    result: "failed",
    error_code: t
  }), {
    kind: "error",
    message: `Autofix PR failed: ${e}`,
    code: t
  };
}
function Cer() {
  return G("tengu_autofix_pr_result", {
    result: "cancelled"
  }), {
    kind: "cancelled"
  };
}
async function Xxf(e, t, n, r) {
  let o = bS(),
    s = d0() && !!o,
    i = s && o ? await o.subscribePR(t, n) : {
      ok: !1
    },
    a = `${MLl}${e} (created in this session). Check state with \`gh pr view ${n} -R ${t} --json state,mergeable,mergeStateStatus,statusCheckRollup\` and new review comments with \`gh api --paginate repos/${t}/pulls/${n}/comments\`. If MERGED or CLOSED, delete this cron with ${m4} and report the outcome. If CI is failing, comments are unaddressed, or there are merge conflicts, fix and push.${r} Otherwise nothing to do \u2014 complete the turn without commentary.`,
    c = (await Mue()).some(d => d.durable === !1 && d.prompt.startsWith(`${MLl}${e} `));
  if (!c) await wct("*/30 * * * *", a, !0, !1), lee(!0);
  let u = [`Monitoring ${e} in this session.`];
  if (i.ok) u.push("Webhook events (CI failures, reviews, close/reopen) will arrive as user messages.");else if (s) u.push(i.reason === "github_app_not_installed" ? `Webhook events won't arrive until the Claude GitHub app is installed on this repo. Install it at ${aWt}, then retry \u2014 falling back to a 30-minute poll for now.` : "Couldn't subscribe this session to PR webhooks \u2014 falling back to a 30-minute poll. Check the debug log for [bridge] subscribe-pr.");else u.push("Remote Control isn't connected, so webhooks can't be routed here \u2014 falling back to a 30-minute poll. Connect from the mobile or web app for real-time notifications.");
  return u.push(c ? "A poll cron for this PR is already registered." : "Registered a 30-minute poll cron as a backstop for merge conflicts (and CI/reviews when webhooks are unavailable)."), {
    kind: "ok",
    display: "system",
    message: u.join(" ")
  };
}
function $Ll({
  owner: e,
  repo: t,
  host: n
}) {
  return $m(n) ? `${e}/${t}` : `${n}/${e}/${t}`;
}
var OLl,
  MLl = "Babysit PR ";