// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q$a
// matched 2.1.88 source: src/utils/ghPrStatus.ts
// class=modified  jaccard=0.1225  score=0.1267  fileCov=0.7907
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var q$a = E(() => {
  Bi();
  _0();
  Mx();
  Pgo = new Map();
});
function Q$a(e, t) {
  if (e) return "draft";
  switch (t) {
    case "APPROVED":
      return "approved";
    case "CHANGES_REQUESTED":
      return "changes_requested";
    default:
      return "pending";
  }
}
async function Z$a() {
  if (!(await cb())) return null;
  let [t, n] = await Promise.all([ub(), vD()]);
  if (t === n) return null;
  return (() => (oWt() ? eDp(t) : YLp(n)))();
}
function oWt() {
  return at("tengu_harbor_prism", !1);
}
async function YLp(e) {
  let { stdout: t, code: n } = await $n(
    "gh",
    ["pr", "view", "--json", "number,url,reviewDecision,isDraft,headRefName,state"],
    {
      timeout: rWt,
      preserveOutputOnError: !1,
    },
  );
  if (n !== 0 || !t.trim()) return null;
  try {
    let r = Ft(t);
    if (r.headRefName === e || r.headRefName === "main" || r.headRefName === "master") return null;
    if (r.state === "MERGED" || r.state === "CLOSED") return null;
    return {
      number: r.number,
      url: r.url,
      reviewState: Q$a(r.isDraft, r.reviewDecision),
    };
  } catch {
    return null;
  }
}
async function eDp(e) {
  if (Vi() || rOa()) return null;
  if (e === "main" || e === "master") return null;
  let t = await nDp();
  if (!t) return null;
  let n = await W$a(t.host);
  if (!n) {
    if (!$m(t.host) && !gfn(process.env.GH_HOST, t.host)) return null;
    return (Mgo(t.host), "needs-auth");
  }
  let r = await oDp(t, n);
  if ($go?.branch !== e)
    $go = {
      branch: e,
      etag: null,
      pr: null,
      reviewDecision: "",
      lastReviewFetchAt: 0,
      redirectedListUrl: null,
    };
  let o = $go,
    s = nRr(t.host),
    i = new URL(s).origin,
    a = `${s}/repos/${r.owner}/${r.repo}/pulls?head=${encodeURIComponent(t.owner)}:${encodeURIComponent(e)}&state=open&per_page=1`,
    l = !1;
  try {
    let f = AbortSignal.timeout(rWt),
      m = {
        Authorization: `Bearer ${n}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": eOa,
        "User-Agent": dy(),
        ...(o.etag && {
          "If-None-Match": o.etag,
        }),
      },
      g = (_) =>
        fetch(_, {
          ...kg({
            url: _,
          }),
          keepalive: !1,
          method: "GET",
          headers: m,
          redirect: "manual",
          signal: f,
        }),
      h = await g(o.redirectedListUrl ?? a),
      y = JLp.has(h.status) ? h.headers.get("location") : null,
      b = y ? new URL(y, a) : null;
    if (b?.origin === i) ((o.redirectedListUrl = b.href), (h = await g(b.href)));
    if (h.status === 304);
    else if (h.ok) {
      ((o.etag = h.headers.get("etag")), (l = !0));
      let _ = QLp().safeParse(await h.json()),
        S = _.success ? _.data[0] : void 0;
      if (S && o.pr?.number !== S.number) o.reviewDecision = "";
      o.pr = S
        ? {
            number: S.number,
            url: S.html_url,
            isDraft: S.draft,
          }
        : null;
    } else {
      if (h.status === 401) Mgo(t.host);
      else if (h.status === 403 || h.status === 429) _Dp(h);
      return (
        Le(
          "github_pr_status_direct",
          h.status === 401
            ? "unauthorized"
            : h.status === 403 || h.status === 429
              ? "rate_limited"
              : "http_error",
          {
            http_status: String(h.status),
          },
        ),
        T(`[ghPrStatus] REST list ${h.status} on ${t.host}`, {
          level: "debug",
        }),
        "fetch-failed"
      );
    }
  } catch (f) {
    return (
      Le("github_pr_status_direct", "fetch_threw", {
        error_name: BK(f) ?? "unknown",
        errno_code: xd(f) ?? xd(f?.cause) ?? "",
      }),
      "fetch-failed"
    );
  }
  let c = o.pr;
  if (!c) return (xe("github_pr_status_direct"), null);
  let u = o.reviewDecision,
    d = !1;
  if (l || Date.now() - o.lastReviewFetchAt >= XLp) {
    let f = await tDp(
      {
        host: t.host,
        owner: r.owner,
        repo: r.repo,
      },
      n,
      c.number,
    );
    if (f !== null) {
      if (((u = f), o.pr?.number === c.number))
        ((o.reviewDecision = f), (o.lastReviewFetchAt = Date.now()));
    } else d = !0;
  }
  if (d) It("github_pr_status_direct", "review_decision_unavailable");
  else xe("github_pr_status_direct");
  return {
    number: c.number,
    url: c.url,
    reviewState: Q$a(c.isDraft, u),
  };
}
async function tDp(e, t, n) {
  let r = BTs(e.host),
    o = De({
      query:
        "query($o:String!,$r:String!,$n:Int!){repository(owner:$o,name:$r){pullRequest(number:$n){reviewDecision}}}",
      variables: {
        o: e.owner,
        r: e.repo,
        n,
      },
    });
  try {
    let s = await fetch(r, {
      ...kg({
        url: r,
      }),
      keepalive: !1,
      method: "POST",
      headers: {
        Authorization: `Bearer ${t}`,
        "Content-Type": "application/json",
        "User-Agent": dy(),
      },
      body: o,
      redirect: "error",
      signal: AbortSignal.timeout(rWt),
    });
    if (!s.ok) return null;
    let i = ZLp().safeParse(await s.json());
    return i.success ? (i.data.data.repository?.pullRequest?.reviewDecision ?? "") : null;
  } catch {
    return null;
  }
}
async function nDp() {
  let e = await gY();
  return e ? tOa(e) : null;
}
function tOa(e) {
  let t = KFe(e);
  if (!t) return null;
  let n = t.split("/");
  if (n.length < 3) return null;
  let r = n[0];
  if (/^[\d.]+$/.test(r) || /^\[?[0-9a-f:]+\]?$/i.test(r)) return null;
  return {
    host: r,
    owner: n[1],
    repo: n[2],
  };
}
async function oDp(e, t) {
  let n = `${e.host}/${e.owner}/${e.repo}`;
  if (oft?.forOrigin === n) return oft;
  let r = await sDp(),
    o = r ? tOa(r) : null;
  if (o && o.host === e.host)
    return (
      (oft = {
        forOrigin: n,
        owner: o.owner,
        repo: o.repo,
      }),
      oft
    );
  let s = await iDp(e, t);
  return (
    (oft = {
      forOrigin: n,
      ...(s ?? {
        owner: e.owner,
        repo: e.repo,
      }),
    }),
    oft
  );
}
async function sDp() {
  let { stdout: e, code: t } = await $n("git", ["config", "--get", "remote.upstream.url"], {
    timeout: 2000,
    preserveOutputOnError: !1,
  });
  return t === 0 && e.trim() ? e.trim() : null;
}
async function iDp(e, t) {
  let r = `${nRr(e.host)}/repos/${e.owner}/${e.repo}`;
  try {
    let o = await fetch(r, {
      ...kg({
        url: r,
      }),
      method: "GET",
      headers: {
        Authorization: `Bearer ${t}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": eOa,
        "User-Agent": dy(),
      },
      redirect: "error",
      signal: AbortSignal.timeout(rWt),
    });
    if (!o.ok) return null;
    let s = rDp().safeParse(await o.json()),
      i = s.success ? s.data.parent : null;
    return i
      ? {
          owner: i.owner.login,
          repo: i.name,
        }
      : null;
  } catch {
    return null;
  }
}
function Rjn(e) {
  switch (e.state) {
    case "MERGED":
      return "merged";
    case "CLOSED":
    case "DRAFT":
      return "inactive";
    case "OPEN": {
      if (e.checks.failed > 0 || e.review === "CHANGES_REQUESTED") return "error";
      if (e.checks.pending === 0 && e.review !== "REVIEW_REQUIRED") return "success";
      return "warning";
    }
  }
}
function aDp(e) {
  let t = 0,
    n = 0,
    r = 0;
  for (let o of e ?? []) {
    let s = (o.conclusion ?? o.state)?.toUpperCase();
    if (s === "SUCCESS" || s === "NEUTRAL" || s === "SKIPPED") t++;
    else if (s === "FAILURE" || s === "ERROR") n++;
    else if (
      s == null ||
      s === "ACTION_REQUIRED" ||
      s === "PENDING" ||
      s === "EXPECTED" ||
      o.status?.toUpperCase() !== "COMPLETED"
    )
      r++;
    else n++;
  }
  return {
    passed: t,
    failed: n,
    pending: r,
  };
}
function Ngo(e) {
  if (Vi() || rOa()) return Promise.resolve(null);
  return lDp(e).catch(() => null);
}
function nOa(e) {
  let t = e.match(cDp);
  if (!t) return null;
  return {
    url: e,
    host: t[1],
    owner: t[2],
    repo: t[3],
    num: Number(t[4]),
  };
}
function sWt(e, t) {
  if (!t) return e;
  let n = nOa(e);
  if (!n) return e;
  return t
    .replaceAll("{host}", n.host)
    .replaceAll("{owner}", n.owner)
    .replaceAll("{repo}", n.repo)
    .replaceAll("{number}", String(n.num))
    .replaceAll("{url}", e);
}
function uDp(e, t) {
  let n = 0,
    r = 0,
    o = 0;
  for (let { state: s, count: i } of e ?? [])
    switch (s) {
      case "SUCCESS":
      case "NEUTRAL":
      case "SKIPPED":
        n += i;
        break;
      case "FAILURE":
      case "CANCELLED":
      case "TIMED_OUT":
      case "STALE":
      case "STARTUP_FAILURE":
        r += i;
        break;
      case "ACTION_REQUIRED":
      case "IN_PROGRESS":
      case "QUEUED":
      case "PENDING":
      case "WAITING":
      case "REQUESTED":
      case "COMPLETED":
        o += i;
        break;
      default:
        r += i;
    }
  for (let { state: s, count: i } of t ?? [])
    switch (s) {
      case "SUCCESS":
        n += i;
        break;
      case "FAILURE":
      case "ERROR":
        r += i;
        break;
      default:
        o += i;
    }
  return {
    passed: n,
    failed: r,
    pending: o,
  };
}
function dDp(e) {
  let t = e.commits.nodes[0]?.commit.statusCheckRollup ?? null;
  return {
    number: e.number,
    title: e.title,
    state:
      e.state === "MERGED"
        ? "MERGED"
        : e.state === "CLOSED"
          ? "CLOSED"
          : e.isDraft
            ? "DRAFT"
            : "OPEN",
    checks: uDp(t?.contexts?.checkRunCountsByState, t?.contexts?.statusContextCountsByState),
    review:
      e.reviewDecision === "APPROVED" ||
      e.reviewDecision === "CHANGES_REQUESTED" ||
      e.reviewDecision === "REVIEW_REQUIRED"
        ? e.reviewDecision
        : null,
    additions: e.additions,
    deletions: e.deletions,
  };
}
function pDp(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "number" in e &&
    typeof e.number === "number" &&
    "state" in e &&
    typeof e.state === "string"
  );
}
function fDp(e) {
  return e !== null && typeof e === "object" && !("cost" in e);
}
function V$a(e, t) {
  let n = new Map();
  for (let r of e) {
    let o = t(r),
      s = n.get(o);
    if (s) s.push(r);
    else n.set(o, [r]);
  }
  return n;
}
function rOa() {
  return Date.now() < sft;
}
function _Dp(e) {
  let t = Number(e.headers.get("retry-after")),
    n = Number(e.headers.get("x-ratelimit-reset"));
  sft =
    Number.isFinite(t) && t > 0
      ? Date.now() + t * 1000
      : Number.isFinite(n) && n > 0
        ? n * 1000
        : Date.now() + Ogo;
}
async function oOa(e) {
  let t = new Map(),
    n = [],
    r = null;
  if (e.length === 0 || Vi() || Date.now() < sft) {
    for (let a of e) t.set(a, null);
    return {
      statuses: t,
      rateLimit: r,
      unbatched: [],
    };
  }
  let o = [];
  for (let a of e) {
    let l = nOa(a);
    if (l) o.push(l);
    else if (/\/pull\/\d+/.test(a)) n.push(a);
  }
  o.sort((a, l) => a.url.localeCompare(l.url));
  let s = [];
  for (let [a, l] of V$a(o, (c) => c.host))
    for (let c = 0; c < l.length; c += z$a)
      s.push({
        host: a,
        chunk: l.slice(c, c + z$a),
      });
  let i = rft(gDp, async ({ host: a, chunk: l }) => {
    if (Date.now() < sft) {
      for (let b of l) t.set(b.url, null);
      return;
    }
    let c = new Map(),
      d = [...V$a(l, (b) => `${b.owner}/${b.repo}`)].map(([b, _], S) => {
        let [A, v] = b.split("/"),
          C = _.map((x, I) => {
            let k = `p${S}_${I}`;
            return (c.set(k, x.url), `${k}: pullRequest(number: ${x.num}) { ...pr }`);
          }).join(" ");
        return `r${S}: repository(owner:"${A}", name:"${v}") { ${C} }`;
      }),
      p = `${mDp}
query { rateLimit{cost remaining resetAt} ${d.join(" ")} }`,
      {
        stdout: f,
        stderr: m,
        code: g,
      } = await $n("gh", ["api", "graphql", "--hostname", a, "--cache", yDp, "-F", "query=@-"], {
        timeout: hDp,
        input: p,
        preserveOutputOnError: !0,
      }),
      h = null;
    if (f.trim())
      try {
        h = Ft(f);
      } catch {
        h = null;
      }
    if (!h?.data) {
      if (K$a.test(m) || K$a.test(f))
        ((sft = Date.now() + Ogo),
          T(`[ghPrStatus] GitHub rate-limited on ${a}; backing off 60s`, {
            level: "warn",
          }));
      else T(`[ghPrStatus] batch query failed on ${a} (exit ${g}); keeping last-known`);
      for (let b of l) t.set(b.url, null);
      return;
    }
    let y = h.data.rateLimit;
    if (y) {
      if (!r || y.remaining < r.remaining) r = y;
      if (y.remaining < 50) sft = Date.parse(y.resetAt) || Date.now() + Ogo;
    }
    for (let [b, _] of Object.entries(h.data)) {
      if (!b.startsWith("r") || !fDp(_)) continue;
      for (let [S, A] of Object.entries(_)) {
        let v = c.get(S);
        if (!v) continue;
        t.set(v, pDp(A) ? dDp(A) : null);
      }
    }
    for (let b of c.values()) if (!t.has(b)) t.set(b, null);
  });
  return (
    await Promise.all(s.map(i)),
    {
      statuses: t,
      rateLimit: r,
      unbatched: n,
    }
  );
}
function iOa(e) {
  let t = {};
  for (let [r, o] of e) if (o) t[r] = o;
  let n = De(t);
  if (n === "{}" || n === Y$a) return Promise.resolve();
  return ((Y$a = n), eg(sOa(), n).catch(() => {}));
}
async function aOa() {
  try {
    let e = await X$a.readFile(sOa(), "utf8");
    return new Map(Object.entries(Ft(e)));
  } catch {
    return new Map();
  }
}
var X$a,
  J$a,
  tVe,
  Nre,
  rWt = 5000,
  XLp = 300000,
  eOa = "2022-11-28",
  JLp,
  $go = null,
  QLp,
  ZLp,
  rDp,
  oft,
  lDp,
  cDp,
  mDp = `fragment pr on PullRequest {
  number title state isDraft additions deletions
  reviewDecision
  commits(last:1){nodes{commit{statusCheckRollup{
    state
    contexts(first:0){
      checkRunCountsByState{state count}
      statusContextCountsByState{state count}
    }
  }}}}
}`,
  z$a = 20,
  gDp = 6,
  hDp = 15000,
  yDp = "30s",
  Ogo = 60000,
  K$a,
  sft = 0,
  Y$a = "",
  sOa = () => J$a.join(tr(), "gh-pr-status-cache.json");
