// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ift
// matched 2.1.88 source: src/tools/shared/gitOperationTracking.ts
// class=modified (alt of src/tools/shared/gitOperationTracking.ts)  jaccard=0.2433  score=0.3686  fileCov=0.4173
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ift] deps: zod/v4/classic/schemas.js, dn, services/analytics/growthbook.ts, utils/fileRead.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, constants/files.ts, utils/git.ts, utils/ghPrStatus.ts, utils/detectRepository.ts, screens/REPL.tsx, utils/log.ts, utils/proxy.ts, bootstrap/state.ts, utils/fsOperations.ts
((X$a = require("fs/promises")),
  (J$a = require("path")),
  (tVe = Mi()),
  (Nre = {
    disabled: false,
    badStreak: 0,
  }));
((JLp = new Set([301, 302, 307, 308])),
  (QLp = ve(() =>
    dt.array(
      dt.object({
        number: dt.number(),
        html_url: dt.string(),
        draft: dt.boolean(),
      }),
    ),
  )),
  (ZLp = ve(() =>
    dt.object({
      data: dt.object({
        repository: dt
          .object({
            pullRequest: dt
              .object({
                reviewDecision: dt.string().nullable(),
              })
              .nullable(),
          })
          .nullable(),
      }),
    }),
  )));
rDp = ve(() =>
  dt.object({
    parent: dt
      .object({
        name: dt.string(),
        owner: dt.object({
          login: dt.string(),
        }),
      })
      .nullish(),
  }),
);
lDp = Ahe(async (e) => {
  let { stdout: t, code: n } = await $n(
    "gh",
    [
      "pr",
      "view",
      e,
      "--json",
      "number,title,state,isDraft,statusCheckRollup,reviewDecision,additions,deletions",
    ],
    {
      timeout: rWt,
      preserveOutputOnError: false,
    },
  );
  if (n !== 0 || !t.trim()) return null;
  try {
    let r = Ft(t);
    return {
      number: r.number,
      title: r.title,
      state:
        r.state === "MERGED"
          ? "MERGED"
          : r.state === "CLOSED"
            ? "CLOSED"
            : r.isDraft
              ? "DRAFT"
              : "OPEN",
      checks: aDp(r.statusCheckRollup),
      review:
        r.reviewDecision === "APPROVED" ||
        r.reviewDecision === "CHANGES_REQUESTED" ||
        r.reviewDecision === "REVIEW_REQUIRED"
          ? r.reviewDecision
          : null,
      additions: r.additions,
      deletions: r.deletions,
    };
  } catch {
    return null;
  }
}, 30000);
cDp = /^https:\/\/([\w.-]+)\/([\w.-]+)\/([\w.-]+)\/pull\/(\d+)\b/;
K$a = /rate limit/i;
function gitCmdRe(subcmd, t = "") {
  return new RegExp(`\\bgit(?:\\s+-[cC]\\s+\\S+|\\s+--\\S+=\\S+)*\\s+${subcmd}\\b${t}`);
}
function Ojn(e) {
  let t = e.match($jn);
  if (t?.[1] && t?.[2])
    return {
      prNumber: parseInt(t[2], 10),
      prUrl: t[0],
      prRepository: t[1],
    };
  return null;
}
function Ljn(e) {
  let t = e.match(new RegExp($jn.source, "g"));
  return t ? Ojn(t.at(-1)) : null;
}
function Bgo(e) {
  return e.match(/\[[\w./-]+(?: \(root-commit\))? ([0-9a-f]+)\]/)?.[1];
}
function HDp(e) {
  return e.match(/^\s*[+\-*!= ]?\s*(?:\[new branch\]|\S+\.\.+\S+)\s+\S+\s*->\s*(\S+)/m)?.[1];
}
function TDp(e) {
  let t = e.match(/[Pp]ull request (?:\S+#)?#?(\d+)/);
  return t?.[1] ? parseInt(t[1], 10) : void 0;
}
function lOa(e, t) {
  let n = e.split(gitCmdRe(t))[1];
  if (!n) return;
  for (let r of n.trim().split(/\s+/)) {
    if (/^(?:[\d*]*[<>]|[&|;])/.test(r)) break;
    if (r.startsWith("-")) continue;
    return r;
  }
  return;
}
function detectGitOperation(command, output) {
  let result = {},
    r = bDp.test(command);
  if (dOa.test(command) || r) {
    let s = Bgo(output);
    if (s)
      result.commit = {
        sha: s,
        kind: r ? "cherry-picked" : /--amend\b/.test(command) ? "amended" : "committed",
      };
  }
  if (Pjn.test(command)) {
    let s = (command.split(Pjn)[1] ?? "").split(/[&|;\n]/)[0] ?? "";
    if (!/(?:^|\s)(?:-n|--dry-run)(?=\s|$)/.test(s)) {
      let i = HDp(output);
      if (i)
        result.push = {
          branch: i,
        };
    }
  }
  if (SDp.test(command) && /(Fast-forward|Merge made by)/.test(output)) {
    let s = lOa(command, "merge");
    if (s)
      result.branch = {
        ref: s,
        action: "merged",
      };
  }
  if (EDp.test(command) && /Successfully rebased/.test(output)) {
    let s = lOa(command, "rebase");
    if (s)
      result.branch = {
        ref: s,
        action: "rebased",
      };
  }
  let o = pOa.find((s) => s.re.test(command))?.action;
  if (o === "merged") {
    if (/--disable-auto\b/.test(command)) o = "auto-merge-disabled";
    else if (/--auto\b/.test(command)) o = "auto-merge-enabled";
  } else if (o === "ready" && /--undo\b/.test(command)) o = "draft";
  if (o) {
    let s = Ljn(output);
    if (s)
      result.pr = {
        number: s.prNumber,
        url: s.prUrl,
        action: o,
      };
    else {
      let i = TDp(output);
      if (i)
        result.pr = {
          number: i,
          action: o,
        };
    }
  }
  return result;
}
function trackGitOperations(command, exitCode, stdout) {
  if (exitCode !== 0) return;
  if (dOa.test(command)) {
    if (
      (G("tengu_git_operation", {
        operation: We("commit"),
      }),
      command.match(/--amend\b/))
    )
      G("tengu_git_operation", {
        operation: We("commit_amend"),
      });
    W_r()?.add(1);
  }
  if (Pjn.test(command))
    (G("tengu_git_operation", {
      operation: We("push"),
    }),
      tVe.emit());
  let o = pOa.find((l) => l.re.test(command));
  if (o)
    (G("tengu_git_operation", {
      operation: o.op,
    }),
      tVe.emit());
  if (
    (o?.action === "merged" && !/(?:--auto|--disable-auto)\b/.test(command)) ||
    o?.action === "closed"
  )
    Wbr(true);
  if (o?.action === "created") {
    if ((YBe()?.add(1), stdout)) {
      let l = Ljn(stdout);
      if (l) Djn(l);
    }
  }
  let s = command.match(ADp);
  if (s?.[1]) uOa(s[1]).catch(() => {});
  else if (Pjn.test(command) && !o) uOa().catch(() => {});
  if (command.match(/\bglab\s+mr\s+create\b/)) {
    if (
      (G("tengu_git_operation", {
        operation: We("pr_create"),
      }),
      YBe()?.add(1),
      tVe.emit(),
      stdout)
    ) {
      let l = Ljn(stdout);
      if (l) Djn(l);
    }
  }
  let i =
      command.match(/\bcurl\b/) &&
      (command.match(/-X\s*POST\b/i) ||
        command.match(/--request\s*=?\s*POST\b/i) ||
        command.match(/\s-d\s/)),
    a = command.match(/https?:\/\/[^\s'"]*\/(pulls|pull-requests|merge[-_]requests)(?!\/\d)/i);
  if (i && a) {
    if (
      (G("tengu_git_operation", {
        operation: We("pr_create"),
      }),
      YBe()?.add(1),
      tVe.emit(),
      stdout)
    ) {
      let l = Ljn(stdout);
      if (l) Djn(l);
    }
  }
}
async function Djn(e) {
  let [{ linkSessionToPR: t }, { getSessionId: n }] = await Promise.all([
      Promise.resolve().then(() => (_a(), nVe)),
      Promise.resolve().then(() => (ft(), twe)),
    ]),
    r = n();
  if (!r) return;
  await t(r, e.prNumber, e.prUrl, e.prRepository);
}
function fOa(e, t) {
  if (!vDp.test(e) || !wDp.test(t) || Date.now() < cOa) return;
  return (
    (cOa = Date.now() + CDp),
    "<system-reminder>GitHub API rate limit exceeded (5,000/hr shared across all tools and agents). Run `gh api rate_limit --jq .resources` and sleep until reset before further gh calls. If polling in a loop, use ScheduleWakeup instead of retrying.</system-reminder>"
  );
}
async function uOa(e) {
  let t = ["pr", "view", ...(e ? [e] : []), "--json", "url"],
    { code: n, stdout: r } = await $n("gh", t, {
      timeout: 5000,
      preserveOutputOnError: false,
      useCwd: true,
    });
  if (n !== 0) return;
  let o = Ft(r)?.url;
  if (!o) return;
  let s = Ojn(o);
  if (s) await Djn(s);
}
var dOa,
  Pjn,
  bDp,
  SDp,
  EDp,
  Mjn,
  ADp,
  pOa,
  $jn,
  vDp,
  wDp,
  CDp = 60000,
  cOa = 0;
