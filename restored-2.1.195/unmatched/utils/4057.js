// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hyt
// matched 2.1.88 source: src/tasks/LocalShellTask/LocalShellTask.tsx
// class=new  jaccard=0.0438  score=0.1565  fileCov=0.0573
// note: nearest: src/tasks/LocalShellTask/LocalShellTask.tsx (0.0438); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function $6n(e) {
  let {
      description: t,
      agentId: n,
      taskRef: r
    } = e,
    o = 0,
    s,
    i,
    a = !1,
    l = bwo(ywo, M6n),
    c = _wo(u => {
      if (a) return;
      if (l.tryConsume()) {
        if (o > 0) {
          if (sq(t, `[${o} events suppressed \u2014 output rate too high. Consider using TaskStop to restart this monitor with a more selective filter.]`, r.id, {
            isHousekeeping: !0,
            agentId: n
          }), o = 0, i !== void 0 && Date.now() - i > M6n * 3) s = void 0;
        }
        sq(t, u, r.id, {
          agentId: n
        });
        return;
      }
      if (o++, i = Date.now(), s === void 0) s = Date.now();
      if (Date.now() - s > Vtf) a = !0, sq(t, `[Monitor stopped \u2014 too much output (${o} events suppressed over ${Math.round((Date.now() - s) / 1000)}s). Restart with a more selective source.]`, r.id, {
        isHousekeeping: !0,
        agentId: n
      }), e.killTask();
    });
  return {
    onData: c.onData,
    isKilled: () => a,
    finish: () => {
      c.flush(!0), a = !0;
    }
  };
}
function sq(e, t, n, r) {
  let o = n ? `
<${Dp}>${ec(n)}</${Dp}>` : "",
    s = !r?.isHousekeeping && $Re() ? `
If this event is something the user would act on now, send a ${B8}. Routine or benign output doesn't need one.` : "",
    i = `<${Oc}>${o}
<${Zu}>Monitor event: "${ec(e)}"</${Zu}>
<event>${ec(t)}</event>${s}
</${Oc}>`;
  Ad({
    value: i,
    mode: "task-notification",
    priority: "next",
    agentId: r?.agentId ?? ls()
  });
}
function krl(e) {
  let {
      taskId: t,
      toolUseId: n,
      description: r,
      ownerAgentId: o,
      stopperAgentId: s
    } = e,
    i = `Task "${r}" was stopped by ${D6n(s)}`,
    a = n ? `
<${YC}>${ec(n)}</${YC}>` : "",
    l = `<${Oc}>
<${Dp}>${ec(t)}</${Dp}>${a}
<${up}>stopped</${up}>
<${Zu}>${ec(i)}</${Zu}>
</${Oc}>`;
  Ad({
    value: l,
    mode: "task-notification",
    priority: "next",
    agentId: Bu(o)
  });
}
function _wo(e, t = n => {
  let r = setTimeout(n, ztf);
  return () => clearTimeout(r);
}) {
  let n = "",
    r = [],
    o = null;
  function s(a) {
    if (o) o(), o = null;
    if (a && n.trim()) {
      let c = n.trim();
      if (c.length > P6n) c = c.slice(0, P6n) + "...(truncated)";
      r.push(c), n = "";
    }
    if (r.length === 0) return;
    let l = r.join(`
`);
    if (l.length > Irl) l = l.slice(0, Irl) + `
...(truncated)`;
    r = [], e(l);
  }
  function i(a) {
    if (n += a, n.length > xrl) n = n.slice(-xrl);
    let l;
    while ((l = n.indexOf(`
`)) !== -1) {
      let c = n.slice(0, l).trim();
      if (n = n.slice(l + 1), c) {
        if (c.length > P6n) c = c.slice(0, P6n) + "...(truncated)";
        r.push(c);
      }
    }
    if (r.length > 0 && !o) o = t(s);
  }
  return {
    onData: i,
    flush: s
  };
}
function bwo(e, t, n = Date.now) {
  let r = e,
    o = n();
  function s() {
    let i = n(),
      a = Math.floor((i - o) / t);
    if (a > 0) r = Math.min(e, r + a), o += a * t;
  }
  return {
    tryConsume() {
      if (s(), r > 0) return r--, !0;
      return !1;
    }
  };
}
var ywo = 10,
  M6n = 2000,
  Vtf = 30000,
  P6n = 500,
  Irl = 3000,
  ztf = 200,
  xrl = 1048576;