// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ift
// matched 2.1.88 source: src/tools/shared/gitOperationTracking.ts
// class=modified (alt of src/tools/shared/gitOperationTracking.ts)  jaccard=0.2433  score=0.3686  fileCov=0.4173
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ift] deps: zb, dn, Un, Pw, je, fn, At, Bi, sa, q$a, Mx, SG, qd, Mh, ih, Jt
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
function aft(e, t = "") {
  return new RegExp(`\\bgit(?:\\s+-[cC]\\s+\\S+|\\s+--\\S+=\\S+)*\\s+${e}\\b${t}`);
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
  let n = e.split(aft(t))[1];
  if (!n) return;
  for (let r of n.trim().split(/\s+/)) {
    if (/^(?:[\d*]*[<>]|[&|;])/.test(r)) break;
    if (r.startsWith("-")) continue;
    return r;
  }
  return;
}
function lft(e, t) {
  let n = {},
    r = bDp.test(e);
  if (dOa.test(e) || r) {
    let s = Bgo(t);
    if (s)
      n.commit = {
        sha: s,
        kind: r ? "cherry-picked" : /--amend\b/.test(e) ? "amended" : "committed",
      };
  }
  if (Pjn.test(e)) {
    let s = (e.split(Pjn)[1] ?? "").split(/[&|;\n]/)[0] ?? "";
    if (!/(?:^|\s)(?:-n|--dry-run)(?=\s|$)/.test(s)) {
      let i = HDp(t);
      if (i)
        n.push = {
          branch: i,
        };
    }
  }
  if (SDp.test(e) && /(Fast-forward|Merge made by)/.test(t)) {
    let s = lOa(e, "merge");
    if (s)
      n.branch = {
        ref: s,
        action: "merged",
      };
  }
  if (EDp.test(e) && /Successfully rebased/.test(t)) {
    let s = lOa(e, "rebase");
    if (s)
      n.branch = {
        ref: s,
        action: "rebased",
      };
  }
  let o = pOa.find((s) => s.re.test(e))?.action;
  if (o === "merged") {
    if (/--disable-auto\b/.test(e)) o = "auto-merge-disabled";
    else if (/--auto\b/.test(e)) o = "auto-merge-enabled";
  } else if (o === "ready" && /--undo\b/.test(e)) o = "draft";
  if (o) {
    let s = Ljn(t);
    if (s)
      n.pr = {
        number: s.prNumber,
        url: s.prUrl,
        action: o,
      };
    else {
      let i = TDp(t);
      if (i)
        n.pr = {
          number: i,
          action: o,
        };
    }
  }
  return n;
}
function Njn(e, t, n) {
  if (t !== 0) return;
  if (dOa.test(e)) {
    if (
      (G("tengu_git_operation", {
        operation: We("commit"),
      }),
      e.match(/--amend\b/))
    )
      G("tengu_git_operation", {
        operation: We("commit_amend"),
      });
    W_r()?.add(1);
  }
  if (Pjn.test(e))
    (G("tengu_git_operation", {
      operation: We("push"),
    }),
      tVe.emit());
  let o = pOa.find((l) => l.re.test(e));
  if (o)
    (G("tengu_git_operation", {
      operation: o.op,
    }),
      tVe.emit());
  if ((o?.action === "merged" && !/(?:--auto|--disable-auto)\b/.test(e)) || o?.action === "closed")
    Wbr(true);
  if (o?.action === "created") {
    if ((YBe()?.add(1), n)) {
      let l = Ljn(n);
      if (l) Djn(l);
    }
  }
  let s = e.match(ADp);
  if (s?.[1]) uOa(s[1]).catch(() => {});
  else if (Pjn.test(e) && !o) uOa().catch(() => {});
  if (e.match(/\bglab\s+mr\s+create\b/)) {
    if (
      (G("tengu_git_operation", {
        operation: We("pr_create"),
      }),
      YBe()?.add(1),
      tVe.emit(),
      n)
    ) {
      let l = Ljn(n);
      if (l) Djn(l);
    }
  }
  let i =
      e.match(/\bcurl\b/) &&
      (e.match(/-X\s*POST\b/i) || e.match(/--request\s*=?\s*POST\b/i) || e.match(/\s-d\s/)),
    a = e.match(/https?:\/\/[^\s'"]*\/(pulls|pull-requests|merge[-_]requests)(?!\/\d)/i);
  if (i && a) {
    if (
      (G("tengu_git_operation", {
        operation: We("pr_create"),
      }),
      YBe()?.add(1),
      tVe.emit(),
      n)
    ) {
      let l = Ljn(n);
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
