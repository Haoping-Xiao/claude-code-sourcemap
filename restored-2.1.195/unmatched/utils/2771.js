// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KWe
// matched 2.1.88 source: src/utils/cronTasks.ts
// class=new  jaccard=0.0371  score=0.0669  fileCov=0.0771
// note: nearest: src/utils/cronTasks.ts (0.0371); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module KWe] deps: services/analytics/index.ts, services/analytics/growthbook.ts, utils/debug.ts, Yra, Xra, wX, highlight.js/lib/languages/mathematica.js, tools/TaskStopTool/prompt.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts
soa = require("fs"), Poo = require("path"), bop = koo;
Ooo = `

If a ${yT} is armed (check ${yL}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${yT} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before rescheduling. To stop the loop, also ${QD} the monitor (use ${yL} to find its task ID if no longer in context).`;
function xct(e, t) {
  G("tengu_loop_ended", {
    reason: $e(e),
    ...t
  });
}
function nSe() {
  return at("tengu_kairos_loop_dynamic", false);
}
function doa() {
  if (ut(process.env.CLAUDE_CODE_LOOP_KEEPALIVE)) return true;
  return at("tengu_kairos_loop_keepalive", false);
}
function poa(e, t, n) {
  return moa(e, t, {
    viaKeepalive: false,
    reason: n
  });
}
function foa(e) {
  if (!nSe()) return xct("gate_off"), null;
  if (Esn() >= Rop) return T("[loop] keepalive budget exhausted (model declined to reschedule twice) \u2014 ending loop"), xct("model_stopped", {
    via_keepalive: true
  }), null;
  return moa(kop, e, {
    viaKeepalive: true
  });
}
function moa(e, t, n) {
  let {
    viaKeepalive: r,
    reason: o
  } = n;
  if (!r) RCt(0);
  let s = Mop(),
    i = Date.now(),
    a = qbr(t),
    l = a !== void 0 && i > a.lastScheduledFor + jOn * 1000,
    c = a === void 0 || l ? i : a.startedAt,
    u = MRe().recurringMaxAgeMs;
  if (u > 0 && i - c >= u) {
    if (!a?.agedOut) bsn(t, {
      startedAt: c,
      lastScheduledFor: i - (jOn - q2t) * 1000,
      agedOut: true
    }), G("tengu_loop_dynamic_wakeup_aged_out", {
      loop_age_ms: i - c,
      max_age_ms: u
    }), xct("aged_out", {
      via_keepalive: r
    }), It("loop_schedule_wakeup", "loop_wakeup_aged_out");
    return null;
  }
  let {
      clamped: d,
      wasClamped: p,
      targetMs: f,
      createdAt: m,
      target: g
    } = Lop(e),
    h = `${g.getMinutes()} ${g.getHours()} * * *`;
  if (Rge({
    id: Pop(),
    cron: h,
    prompt: t,
    createdAt: m,
    kind: "loop"
  }), bsn(t, {
    startedAt: c,
    lastScheduledFor: f
  }), lee(true), r) return RCt(Esn() + 1), T(`[loop] keepalive armed (model did not reschedule): ${d}s fallback`), G("tengu_loop_keepalive_fired", {
    clamped_delay_seconds: d,
    prompt_is_sentinel: xop.isLoopDefaultSentinel(t)
  }), It("loop_schedule_wakeup", "model_no_reschedule"), {
    scheduledFor: f,
    clampedDelaySeconds: d,
    wasClamped: p
  };
  return T(`[loop] dynamic wakeup scheduled: ${d}s${p ? ` (clamped from ${e}s)` : ""}${o !== void 0 ? ` \u2014 ${o}` : ""}`), G("tengu_loop_dynamic_wakeup_scheduled", {
    chosen_delay_seconds: Number.isFinite(e) ? e : 0,
    clamped_delay_seconds: d,
    was_clamped: p,
    reason_length: o?.length ?? 0,
    superseded_count: s
  }), xe("loop_schedule_wakeup"), {
    scheduledFor: f,
    clampedDelaySeconds: d,
    wasClamped: p
  };
}
function Lop(e) {
  let t;
  if (Number.isNaN(e)) t = q2t;else if (e === 1 / 0) t = jOn;else if (e === -1 / 0) t = q2t;else t = Math.round(e);
  let n = Math.max(q2t, Math.min(jOn, t)),
    r = !Number.isFinite(e) || t !== n,
    o = Date.now(),
    s = o + n * 1000,
    i = Dop(s),
    a = MRe().cacheLeadMs;
  if (a > 0 && n * 1000 <= N2t) {
    let u = N2t - a;
    while (i - o > u && i - 60000 >= o + q2t * 1000) i -= 60000;
  }
  let l = new Date(i),
    c = s < i ? s : i - 1;
  return {
    clamped: n,
    wasClamped: r,
    targetMs: i,
    createdAt: c,
    target: l
  };
}
function Dop(e) {
  let t = new Date(e);
  if (t.getSeconds() > 0 || t.getMilliseconds() > 0) t.setMinutes(t.getMinutes() + 1);
  return t.setSeconds(0, 0), t.getTime();
}
function Pop() {
  return Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0");
}
function Mop() {
  let e = Hw().filter(t => t.kind === "loop").map(t => t.id);
  if (e.length === 0) return 0;
  return IK(e);
}
function NRe() {
  return Hw().some(e => e.kind === "loop");
}
function GOn() {
  let e = Hw().filter(n => n.kind === "loop"),
    t = kCt();
  if (gJe(null), RCt(0), e.length === 0 && t === null) return 0;
  IK(e.map(n => n.id));
  for (let n of e) Ssn(n.prompt);
  if (t !== null) Ssn(t);
  return T(`[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${t !== null ? " (tick in flight)" : ""}`), xct("user_abort", {
    loops_cancelled: e.length
  }), xe("loop_cancel_all"), e.length;
}
var xop,
  q2t = 60,
  jOn = 3600,
  kop = 1200,
  Rop = 1;