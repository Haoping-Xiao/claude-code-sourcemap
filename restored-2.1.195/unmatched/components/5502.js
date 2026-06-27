// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dbc
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0079  score=0.1094  fileCov=0.0084
// note: nearest: src/cli/print.ts (0.0079); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dbc = E(() => {
  nUt();
  m_t();
  uo();
  wAe();
  nzo = R(rt(), 1);
});
function Pbc(e) {
  return typeof e === "string" ? Ja(e).replace(/[\r\n]/g, " ").slice(0, 512) : void 0;
}
function Ndr(e) {
  return {
    steps: ngm.map(t => ({
      id: t,
      status: "pending"
    })),
    sessionMode: null,
    startedAt: e,
    hasStructuredSteps: !1,
    terminal: !1,
    dismissed: !1,
    queuedCount: 0
  };
}
function $bc(e, t, n, r) {
  let o = t.data?.extra,
    s = typeof o?.step_id === "string" ? o.step_id : null,
    i = typeof o?.step_status === "string" ? o.step_status : null,
    a = e.terminal && s !== null && i !== null ? Ndr(r) : e;
  if (typeof o?.session_mode === "string") {
    let l = o.session_mode;
    if ((l === "new" || l === "resume" || l === "resume-cached" || l === "setup-only") && a.sessionMode !== l) a = {
      ...a,
      sessionMode: l
    };
  }
  if (typeof o?.expected_steps === "string") {
    let l = Array.from(new Set(Ja(o.expected_steps).split(",").map(c => c.trim().slice(0, 64)).filter(c => c !== ""))).slice(0, Mbc);
    if (l.length > 0) {
      let c = new Map(a.steps.map(p => [p.id, p])),
        u = l.map(p => c.get(p) ?? {
          id: p,
          status: "pending"
        }),
        d = a.steps.filter(p => !l.includes(p.id) && p.status !== "pending");
      a = {
        ...a,
        steps: [...d, ...u]
      };
    }
  }
  if (s !== null && i !== null) a = rgm(a, {
    stepId: s,
    stepStatus: i,
    extra: o,
    line: n,
    now: r
  });else if (n !== "") {
    let l = a.steps.findIndex(c => c.status === "running");
    if (l !== -1 && a.steps[l].detail !== n) {
      let c = a.steps.slice();
      c[l] = {
        ...c[l],
        detail: n
      }, a = {
        ...a,
        steps: c
      };
    }
  }
  return a;
}
function rgm(e, {
  stepId: t,
  stepStatus: n,
  extra: r,
  line: o,
  now: s
}) {
  let i = Ja(t).slice(0, 64),
    a = e.steps,
    l = a.findIndex(f => f.id === i);
  if (l === -1) {
    if (a.length >= Mbc) return e;
    let f = Pbc(r?.step_label) ?? o;
    a = [...a, {
      id: i,
      label: f,
      status: "pending"
    }], l = a.length - 1;
  }
  let c = a[l],
    u = Pbc(r?.step_detail),
    d = null;
  switch (n) {
    case "started":
      if (c.status === "pending") d = {
        ...c,
        status: "running",
        startedAt: s,
        detail: u
      };else if (u !== void 0 && c.detail !== u) d = {
        ...c,
        detail: u
      };
      break;
    case "completed":
      if (c.status !== "completed") d = {
        ...c,
        status: "completed",
        completedAt: s,
        detail: void 0
      };
      break;
    case "failed":
      if (c.status !== "failed" || c.error !== o) d = {
        ...c,
        status: "failed",
        completedAt: s,
        error: o || void 0
      };
      break;
    case "skipped":
      if (c.status === "pending" || c.status === "running") d = {
        ...c,
        status: "skipped",
        detail: void 0
      };
      break;
    default:
      break;
  }
  if (d !== null) a = a === e.steps ? e.steps.slice() : a, a[l] = d;
  if (a === e.steps) return e;
  let p = {
    ...e,
    steps: a,
    hasStructuredSteps: !0
  };
  if (t === "start_cc" && n === "completed") p = rzo(p, s);
  return p;
}
function rzo(e, t) {
  if (e.terminal) return e;
  let n = e.steps.map(r => r.status === "pending" ? {
    ...r,
    status: "skipped"
  } : r.status === "running" ? {
    ...r,
    status: "completed",
    completedAt: t
  } : r);
  return {
    ...e,
    steps: n,
    terminal: !0,
    completedAt: t
  };
}
function Obc(e, t) {
  let n = t === "resume" || t === "resume-cached",
    r = e.status === "completed";
  switch (e.id) {
    case "provision":
      if (n) return r ? "Resumed your cloud container" : "Resuming your cloud container";
      return r ? "Set up a cloud container" : "Setting up a cloud container";
    case "clone":
      if (n) return r ? "Refreshed repository" : "Refreshing repository";
      return r ? "Cloned repository" : "Cloning repository";
    case "setup_script":
      return r ? "Ran setup script" : "Running setup script";
    case "start_cc":
      return r ? "Started Claude Code" : "Starting Claude Code";
    default:
      return e.label ?? e.id;
  }
}
function Nbc(e) {
  return e === "resume" || e === "resume-cached" ? "Resuming remote session" : "Setting up remote session";
}
function Bbc(e) {
  let n = e.sessionMode === "resume" || e.sessionMode === "resume-cached" ? "resumed" : "ready",
    r = (e.completedAt ?? e.startedAt) - e.startedAt;
  return `Remote session ${n} in ${ozo(r)}`;
}
function ozo(e) {
  if (e < 1e4) return `${(Math.max(e, 100) / 1000).toFixed(1)}s`;
  let t = Math.round(e / 1000);
  if (t < 60) return `${t}s`;
  return `${Math.floor(t / 60)}m ${t % 60}s`;
}
var Mbc = 32,
  ngm;