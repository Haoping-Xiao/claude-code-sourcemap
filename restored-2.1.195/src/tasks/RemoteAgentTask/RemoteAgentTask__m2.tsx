// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I5c
// matched 2.1.88 source: src/tasks/RemoteAgentTask/RemoteAgentTask.tsx
// class=modified (alt of src/tasks/RemoteAgentTask/RemoteAgentTask.tsx)  jaccard=0.0612  score=0.1829  fileCov=0.0842
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module I5c] deps: kt, Yp, lH, JN
w5c = require("path");
var k5c = {};
_t(k5c, {
  ultrareviewHandler: () => ultrareviewHandler,
});
async function ultrareviewHandler(e, t) {
  let n = () => process.exit(130);
  (process.once("SIGINT", n), await tV());
  let r = dW("allow_remote_sessions", "Cloud sessions", "are");
  if (r) {
    if (sKr("allow_remote_sessions") === "cache_miss")
      await iY("cli_ultrareview", "policy_cache_miss");
    else await Qu("cli_ultrareview", "policy_disallowed");
    return yg(r);
  }
  await iL().catch(() => {});
  let o = Number(t.timeout),
    s = Number.isFinite(o) && o > 0 ? o : s1m,
    i = Sl(),
    a = await cJt(e, {
      confirm: true,
      skipTaskRegistration: true,
      invocation: "claude ultrareview",
      context: {
        abortController: i,
        taskRegistry: xAt,
      },
    });
  if (a.status !== "launched") {
    let f =
      a.status === "blocked" && a.actionUrl
        ? `
  \u2192 ${a.actionUrl}`
        : "";
    return (
      await Qu("cli_ultrareview", "cli_ultrareview_launch_failed"),
      yg(`Ultrareview could not launch: ${"message" in a ? a.message : a.body}${f}`)
    );
  }
  (drn(a.message),
    drn(`View live progress in the browser: ${a.sessionUrl}`),
    drn(`Waiting for findings (${nQ()})\u2026`),
    process.removeListener("SIGINT", n),
    process.once("SIGINT", () => {
      (drn(`
Cancelled. The remote review is still running \u2014 view it at ${a.sessionUrl}`),
        process.exit(130));
    }));
  let l;
  try {
    l = await u1m(a.sessionId, i.signal, s * 60 * 1000);
  } catch (f) {
    return (
      await Qu("cli_ultrareview", "cli_ultrareview_poll_failed", {
        reason: f instanceof prn ? $e(f.reason) : We("poll_unknown"),
      }),
      yg(`Ultrareview failed: ${be(f)}
Session: ${a.sessionUrl}`)
    );
  }
  let c = c1m(l),
    u = c === x5c ? We("session_archived") : We("orchestrator_error"),
    d = $To(l),
    p =
      d !== void 0
        ? {
            findings_count: d,
          }
        : void 0;
  if (t.json) {
    if (
      (process.stdout.write(
        l +
          `
`,
      ),
      c)
    )
      await Qu("cli_ultrareview", "cli_ultrareview_remote_error", {
        reason: u,
      });
    else await uv("cli_ultrareview", p);
    return XN(c ? 1 : 0);
  }
  if (c)
    return (
      await Qu("cli_ultrareview", "cli_ultrareview_remote_error", {
        reason: u,
      }),
      yg(`Review failed: ${c}
Session: ${a.sessionUrl}`)
    );
  return (
    process.stdout.write(
      p1m(l) +
        `
`,
    ),
    await uv("cli_ultrareview", p),
    XN(0)
  );
}
function c1m(e) {
  try {
    let t = Ft(e);
    if (t && typeof t === "object" && !Array.isArray(t)) {
      let n = t.error;
      if (typeof n === "string") return n;
    }
  } catch {}
  return null;
}
async function u1m(e, t, n) {
  let r = Date.now() + n,
    o = null,
    s = 0,
    i = [],
    a = "";
  while (Date.now() < r) {
    if (t.aborted) throw Error("aborted");
    try {
      let l = await lMe(e, o);
      if (((o = l.lastEventId), (s = 0), l.sessionStatus === "archived")) {
        if (l.newEvents.length > 0) i.push(...l.newEvents);
        return w8n(i) ?? `{"error":"${x5c}"}`;
      }
      if (l.newEvents.length > 0) {
        i.push(...l.newEvents);
        for (let u of l.newEvents)
          if (
            u.type === "system" &&
            (u.subtype === "hook_progress" || u.subtype === "hook_response")
          ) {
            let d = d1m(u.stdout);
            if (d && d !== a) ((a = d), drn(`  ${d}`));
          }
        let c = w8n(i);
        if (c) return c;
      }
    } catch (l) {
      if (t.aborted) throw l;
      if (!xst(l)) throw new prn("poll_api_error", be(l));
      if (++s >= i1m)
        throw new prn(
          "poll_connection_lost",
          "lost connection to the cloud session after repeated retries",
        );
    }
    await Nn(o1m, t);
  }
  throw new prn("poll_timeout", `cloud session exceeded ${Math.round(n / 60000)} minutes`);
}
function d1m(e) {
  let t = `<${NZe}>`,
    n = `</${NZe}>`,
    r = e.lastIndexOf(n),
    o = r === -1 ? -1 : e.lastIndexOf(t, r);
  if (o === -1 || r <= o) return null;
  try {
    let s = Ft(e.slice(o + t.length, r)),
      i = s.stage ?? "running",
      a = s.bugs_found ?? 0,
      l = s.bugs_verified ?? 0,
      c = s.bugs_refuted ?? 0;
    return `${i} \u2014 ${a} found, ${l} verified, ${c} refuted`;
  } catch {
    return null;
  }
}
function p1m(e) {
  let t;
  try {
    t = Ft(e);
  } catch {
    return e;
  }
  if (!Array.isArray(t) || t.length === 0) return "Review complete \u2014 no findings.";
  let n = t,
    r = n.length,
    o = [wt.bold(`Review complete \u2014 ${r} ${bn(r, "finding")}`), ""];
  for (let s of n) {
    let i = a1m[s.severity ?? "normal"] ?? "\uD83D\uDD34",
      a = s.file_path ?? "?",
      l = s.start_line ?? 0,
      c = s.end_line ?? l,
      u = l === c ? `${a}:${l}` : `${a}:${l}-${c}`,
      d = (s.pr_comment ?? "").trim(),
      p = d.indexOf(`

`),
      f = p === -1 ? d : d.slice(0, p),
      m = p === -1 ? "" : d.slice(p + 2);
    if ((o.push(`${i} ${wt.bold(u)}`), f)) o.push(f);
    if (m) (o.push(""), o.push(m));
    o.push("");
  }
  return o
    .join(
      `
`,
    )
    .trimEnd();
}
function drn(e) {
  process.stderr.write(
    wt.dim(e) +
      `
`,
  );
}
var o1m = 3000,
  s1m = 30,
  i1m = 5,
  x5c = "cloud session was archived before producing output",
  prn,
  a1m;
