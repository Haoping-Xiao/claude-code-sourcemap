// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zor
// matched 2.1.88 source: src/utils/ultraplan/ccrSession.ts
// class=modified  jaccard=0.5478  score=0.7681  fileCov=0.6563
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Zor = E(() => {
  Un();
  Lo();
  BR();
  fn();
  sa();
  Mx();
  VDe();
});
class l9l {
  exitPlanCalls = [];
  results = new Map();
  rejectedIds = new Set();
  terminated = null;
  rescanAfterRejection = !1;
  everSeenPending = !1;
  get rejectCount() {
    return this.rejectedIds.size;
  }
  get hasPendingPlan() {
    let e = this.exitPlanCalls.findLast((t) => !this.rejectedIds.has(t));
    return e !== void 0 && !this.results.has(e);
  }
  ingest(e) {
    for (let r of e)
      if (r.type === "assistant")
        for (let o of r.message.content) {
          if (o.type !== "tool_use") continue;
          let s = o;
          if (s.name === jD) this.exitPlanCalls.push(s.id);
        }
      else if (r.type === "user") {
        let o = r.message.content;
        if (!Array.isArray(o)) continue;
        for (let s of o) if (s.type === "tool_result") this.results.set(s.tool_use_id, s);
      } else if (r.type === "result" && r.subtype !== "success")
        this.terminated = {
          subtype: r.subtype,
        };
    let t = e.length > 0 || this.rescanAfterRejection;
    this.rescanAfterRejection = !1;
    let n = null;
    if (t) {
      for (let r = this.exitPlanCalls.length - 1; r >= 0; r--) {
        let o = this.exitPlanCalls[r];
        if (this.rejectedIds.has(o)) continue;
        let s = this.results.get(o);
        if (!s)
          n = {
            kind: "pending",
          };
        else if (s.is_error === !0) {
          let i = eWf(s.content);
          n =
            i !== null
              ? {
                  kind: "teleport",
                  plan: i,
                }
              : {
                  kind: "rejected",
                  id: o,
                };
        } else
          n = {
            kind: "approved",
            plan: tWf(s.content),
          };
        break;
      }
      if (n?.kind === "approved" || n?.kind === "teleport") return n;
    }
    if (n?.kind === "rejected") (this.rejectedIds.add(n.id), (this.rescanAfterRejection = !0));
    if (this.terminated)
      return {
        kind: "terminated",
        subtype: this.terminated.subtype,
      };
    if (n?.kind === "rejected") return n;
    if (n?.kind === "pending") return ((this.everSeenPending = !0), n);
    return {
      kind: "unchanged",
    };
  }
}
async function c9l(e, t, n, r) {
  let o = Date.now() + t,
    s = new l9l(),
    i = {
      eventsReceived: 0,
      firstEventAt: void 0,
      lastEventAt: void 0,
    },
    a = null,
    l = 0,
    c = "running";
  while (Date.now() < o) {
    if (r()) throw Error("poll stopped by caller");
    let p, f;
    try {
      let y = await lMe(e, a);
      if (((p = y.newEvents), (a = y.lastEventId), (f = y.sessionStatus), (l = 0), p.length > 0)) {
        let b = Date.now();
        ((i.eventsReceived += p.length), (i.firstEventAt ??= b), (i.lastEventAt = b));
      }
    } catch (y) {
      if (!xst(y))
        throw new eme(
          y instanceof Error ? y.message : String(y),
          "network_or_unknown",
          s.rejectCount,
          i,
          {
            cause: y,
          },
        );
      if (++l >= QGf)
        throw new eme(
          "Lost connection to the cloud session after repeated retries \u2014 the session may still be running",
          "network_or_unknown",
          s.rejectCount,
          i,
          {
            cause: y,
          },
        );
      await Nn(a9l);
      continue;
    }
    let m;
    try {
      m = s.ingest(p);
    } catch (y) {
      throw new eme(
        y instanceof Error ? y.message : String(y),
        "extract_marker_missing",
        s.rejectCount,
        i,
      );
    }
    if (m.kind === "approved")
      return {
        plan: m.plan,
        rejectCount: s.rejectCount,
        executionTarget: "remote",
      };
    if (m.kind === "teleport")
      return {
        plan: m.plan,
        rejectCount: s.rejectCount,
        executionTarget: "local",
      };
    if (m.kind === "terminated")
      throw new eme(
        `cloud session ended (${m.subtype}) before plan approval`,
        "terminated",
        s.rejectCount,
        i,
      );
    let g = (f === "idle" || f === "requires_action") && p.length === 0,
      h = s.hasPendingPlan ? "plan_ready" : g ? "needs_input" : "running";
    if (h !== c) (T(`[ultraplan] phase ${c} \u2192 ${h}`), (c = h), n(h));
    await Nn(a9l);
  }
  let u = Math.round(t / 60000),
    d = u === 1 ? "minute" : "minutes";
  throw new eme(
    s.everSeenPending
      ? `no approval after ${u} ${d}`
      : `ExitPlanMode never reached after ${u} ${d} (the remote container failed to start, or session ID mismatch?)`,
    s.everSeenPending ? "timeout_pending" : "timeout_no_plan",
    s.rejectCount,
    i,
  );
}
function u9l(e) {
  return typeof e === "string"
    ? e
    : Array.isArray(e)
      ? e.map((t) => ("text" in t ? t.text : "")).join("")
      : "";
}
function eWf(e) {
  let t = u9l(e),
    n = `${ZGf}
`,
    r = t.indexOf(n);
  if (r === -1) return null;
  return t.slice(r + n.length).trimEnd();
}
function tWf(e) {
  let t = u9l(e),
    n = [
      `## Approved Plan (edited by user):
`,
      `## Approved Plan:
`,
    ];
  for (let r of n) {
    let o = t.indexOf(r);
    if (o !== -1) return t.slice(o + r.length).trimEnd();
  }
  throw Error(
    `ExitPlanMode approved but tool_result has no "## Approved Plan:" marker \u2014 remote may have hit the empty-plan or isAgent branch. Content preview: ${t.slice(0, 200)}`,
  );
}
var a9l = 3000,
  QGf = 5,
  eme,
  ZGf = "__ULTRAPLAN_TELEPORT_LOCAL__";
