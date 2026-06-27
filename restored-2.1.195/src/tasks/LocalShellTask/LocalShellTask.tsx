// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S_
// matched 2.1.88 source: src/tasks/LocalShellTask/LocalShellTask.tsx
// class=modified  jaccard=0.3457  score=0.5841  fileCov=0.4585
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var S_ = E(() => {
  ft();
  np();
  dn();
  yC();
  ii();
  jv();
  i$();
  $S();
  fp();
  ZPe();
  je();
  bm();
  y_();
  bH();
  xF();
  K6n();
  OI();
  vDo();
  CDo = new Map();
  G7n = {
    name: "LocalAgentTask",
    type: "local_agent",
    async kill(e, t, n, r) {
      HAe(e, t, r);
    },
  };
  Jbt = new Map();
});
function Nvl(e) {
  if (e === void 0) return;
  return parseInt(process.env.CLAUDE_SUBAGENT_BG_SHELL_MAX_MS || "", 10) || wEf;
}
function xEf(e) {
  let t =
    e
      .trimEnd()
      .split(
        `
`,
      )
      .pop() ?? "";
  return IEf.some((n) => n.test(t));
}
function xDo(e, t, n, r, o) {
  if (n === "monitor") return () => {};
  let s = jm(e),
    i = 0,
    a = Date.now(),
    l = false,
    c = setInterval(() => {
      Ovl.stat(s).then(
        (u) => {
          if (u.size > i) {
            ((i = u.size), (a = Date.now()));
            return;
          }
          if (Date.now() - a < TEf) return;
          vx(s, vEf).then(
            ({ content: d }) => {
              if (l) return;
              if (!xEf(d)) {
                a = Date.now();
                return;
              }
              ((l = true), clearInterval(c));
              let p = r
                  ? `
<${YC}>${r}</${YC}>`
                  : "",
                f = `${Qbt}"${t}" appears to be waiting for interactive input`,
                m = `<${Oc}>
<${Dp}>${e}</${Dp}>${p}
<${pM}>${s}</${pM}>
<${Zu}>${ec(f)}</${Zu}>
</${Oc}>
Last output:
${d.trimEnd()}

The command is likely blocked on an interactive prompt. Stop this task and re-run with piped input (e.g., \`echo y | command\`) or a non-interactive flag if one exists.`;
              (Ad({
                value: m,
                mode: "task-notification",
                priority: "next",
                agentId: o ?? ls(),
              }),
                xe("task_local_shell_stall_detected"));
            },
            () => {},
          );
        },
        () => {},
      );
    }, HEf);
  return (
    c.unref(),
    () => {
      ((l = true), clearInterval(c));
    }
  );
}
function SKt(e, t, n, r, o, s, i = "bash", a) {
  let l = false;
  if (
    (o.update(e, (f) => {
      if (f.notified) return f;
      return (
        (l = true),
        {
          ...f,
          notified: true,
        }
      );
    }),
    !l)
  )
    return;
  if (n === "completed") xe("task_local_shell");
  else if (n === "failed") Le("task_local_shell", "task_local_shell_failed");
  o.abortSpeculation();
  let c;
  if (i === "monitor")
    switch (n) {
      case "completed":
        c = `Monitor "${t}" stream ended`;
        break;
      case "failed":
        c = `Monitor "${t}" script failed${r !== void 0 ? ` (exit ${r})` : ""}`;
        break;
      case "killed":
        c = `Monitor "${t}" stopped`;
        break;
    }
  else
    switch (n) {
      case "completed":
        c = `${Qbt}"${t}" completed${r !== void 0 ? ` (exit code ${r})` : ""}`;
        break;
      case "failed":
        c = `${Qbt}"${t}" failed${r !== void 0 ? ` with exit code ${r}` : ""}`;
        break;
      case "killed":
        c = `${Qbt}"${t}" was stopped`;
        break;
    }
  let u = jm(e),
    d = s
      ? `
<${YC}>${s}</${YC}>`
      : "",
    p = `<${Oc}>
<${Dp}>${e}</${Dp}>${d}
<${pM}>${u}</${pM}>
<${up}>${n}</${up}>
<${Zu}>${ec(c)}</${Zu}>
</${Oc}>`;
  if (
    (Ad({
      value: p,
      mode: "task-notification",
      priority: "next",
      agentId: a ?? ls(),
    }),
    a !== void 0)
  )
    xf(e, n === "killed" ? "stopped" : n, {
      toolUseId: s,
      summary: c,
      outputFile: u,
    });
}
function Bvl(e, t, n, r, o, s) {
  VAe(s, `bash:${e}`, n);
  let i;
  if (s === void 0 && !Ir() && !Oe.CLAUDE_CODE_DISABLE_BG_SHELL_PRESSURE_REAP) {
    let a = () => {
      let l = n.get(e);
      if (l?.status !== "running" || l.notified || Date.now() - Ex() < CEf || dSr() || Hze(n.all()))
        return;
      (xe("task_local_shell_pressure_reap"), SKt(e, t, "killed", void 0, n, r, o, s), yAe(e, n));
    };
    (process.on("memoryPressure", a), (i = () => process.off("memoryPressure", a)));
  }
  return () => {
    (i?.(), bAe(s, `bash:${e}`, n));
  };
}
async function E$e(e, t) {
  let { command: n, description: r, shellCommand: o, toolUseId: s, agentId: i, kind: a } = e,
    { taskRegistry: l } = t,
    { taskOutput: c } = o,
    u = c.taskId,
    d = {
      ...LT(u, "local_bash", r, s),
      type: "local_bash",
      status: "running",
      command: n,
      cwd: $t(),
      completionStatusSentInAttachment: false,
      shellCommand: o,
      lastReportedTotalLines: 0,
      isBackgrounded: true,
      agentId: i,
      kind: a,
    };
  l.register(d);
  let p = a !== "monitor" ? Bvl(u, r, l, s, a, i) : void 0;
  o.background(u, {
    capMs: a !== "monitor" ? Nvl(i) : void 0,
  });
  let f = xDo(u, r, a, s, i);
  return (
    o.result.then(async (m) => {
      (f(), await kJn(o));
      let g = false;
      (l.update(u, (h) => {
        if (h.status === "killed") return ((g = true), h);
        if (h.notified) return h;
        return {
          ...h,
          status: V$e(m),
          result: {
            code: m.code,
            interrupted: m.interrupted,
          },
          shellCommand: null,
          endTime: Date.now(),
        };
      }),
        SKt(u, r, g ? "killed" : V$e(m), m.code, l, s, a, i),
        p?.(),
        jy(u));
    }),
    {
      taskId: u,
    }
  );
}
function Uvl(e, t) {
  let { taskId: n, command: r, description: o, toolUseId: s, kind: i, agentId: a } = e,
    l = {
      ...LT(n, "local_bash", o, s),
      type: "local_bash",
      status: "running",
      command: r,
      cwd: $t(),
      completionStatusSentInAttachment: false,
      shellCommand: e.shellCommand,
      lastReportedTotalLines: e.lastReportedTotalLines,
      isBackgrounded: true,
      agentId: a !== void 0 ? Bu(a) : void 0,
      kind: i,
    };
  (t.register(l),
    e.shellCommand.result.then(async (c) => {
      await kJn(e.shellCommand);
      let u = c.interrupted ? "killed" : "completed";
      t.update(n, (f) =>
        f.notified
          ? f
          : {
              ...f,
              status: u,
              result: {
                code: c.code,
                interrupted: c.interrupted,
              },
              shellCommand: null,
              endTime: Date.now(),
            },
      );
      let d = a !== void 0 ? t.get(a) : void 0,
        p = El(d) && (d.status === "running" || sw(d));
      (SKt(n, o, u, c.code, t, s, i, p ? Bu(a) : void 0), jy(n));
    }));
}
function yJn(e, t, n) {
  let { command: r, description: o, shellCommand: s, agentId: i } = e,
    a = s.taskOutput.taskId,
    l = {
      ...LT(a, "local_bash", o, n),
      type: "local_bash",
      status: "running",
      command: r,
      cwd: $t(),
      completionStatusSentInAttachment: false,
      shellCommand: s,
      lastReportedTotalLines: 0,
      isBackgrounded: false,
      agentId: i,
    };
  return (t.register(l), a);
}
function Fvl(e, t) {
  let n = t.get(e);
  if (!vT(n) || n.isBackgrounded || !n.shellCommand) return false;
  let { shellCommand: r, description: o } = n,
    { toolUseId: s, kind: i, agentId: a } = n;
  if (!r.background(e)) return false;
  t.update(e, (c) => {
    if (c.isBackgrounded) return c;
    return {
      ...c,
      isBackgrounded: true,
    };
  });
  let l = xDo(e, o, i, s, a);
  return (
    r.result.then(async (c) => {
      (l(), await kJn(r));
      let u = false;
      (t.update(e, (d) => {
        if (d.status === "killed") return ((u = true), d);
        if (d.notified) return d;
        return {
          ...d,
          status: V$e(c),
          result: {
            code: c.code,
            interrupted: c.interrupted,
          },
          shellCommand: null,
          endTime: Date.now(),
        };
      }),
        SKt(e, o, u ? "killed" : V$e(c), c.code, t, s, i, a),
        jy(e));
    }),
    true
  );
}
function kDo(e) {
  return Object.values(e.tasks).some((t) => {
    if (vT(t) && !t.isBackgrounded && t.shellCommand) return true;
    if (El(t) && !t.isBackgrounded && !Fzt(t)) return true;
    return false;
  });
}
function j$e(e) {
  let t = e.all(),
    n = Object.keys(t).filter((o) => {
      let s = t[o];
      return vT(s) && !s.isBackgrounded && s.shellCommand;
    });
  for (let o of n) Fvl(o, e);
  let r = Object.keys(t).filter((o) => {
    let s = t[o];
    return El(s) && !s.isBackgrounded;
  });
  for (let o of r) izt(o, e);
  xe("task_local_shell_background_all");
}
function xJn(e, t) {
  for (let [n, r] of Object.entries(t.all())) {
    if (r.toolUseId !== e) continue;
    if (vT(r) && !r.isBackgrounded && r.shellCommand) return Fvl(n, t);
    if (El(r) && !r.isBackgrounded && !Fzt(r)) return (izt(n, t), true);
    return false;
  }
  return false;
}
function _Jn(e, t, n, r, o) {
  let s = r.get(e),
    i = s && vT(s) ? s.agentId : void 0;
  if (
    !t.background(e, {
      capMs: Nvl(i),
    })
  )
    return false;
  r.update(e, (c) => {
    if (c.isBackgrounded) return c;
    return {
      ...c,
      isBackgrounded: true,
    };
  });
  let a = xDo(e, n, void 0, o, i),
    l = Bvl(e, n, r, o, void 0, i);
  return (
    t.result.then(async (c) => {
      (a(), await kJn(t));
      let u = false;
      (r.update(e, (d) => {
        if (d.status === "killed") return ((u = true), d);
        if (d.notified) return d;
        return {
          ...d,
          status: V$e(c),
          result: {
            code: c.code,
            interrupted: c.interrupted,
          },
          shellCommand: null,
          endTime: Date.now(),
        };
      }),
        SKt(e, n, u ? "killed" : V$e(c), c.code, r, o, void 0, i),
        l(),
        jy(e));
    }),
    true
  );
}
function bJn(e, t, n) {
  let r = false;
  if (
    (n.update(e, (o) => {
      if (o.notified) return o;
      return (
        (r = true),
        {
          ...o,
          notified: true,
          status: V$e(t),
          result: {
            code: t.code,
            interrupted: t.interrupted,
          },
          shellCommand: null,
          endTime: Date.now(),
        }
      );
    }),
    r)
  ) {
    let o = V$e(t);
    if (o === "completed") xe("task_local_shell");
    else if (o === "failed") Le("task_local_shell", "task_local_shell_failed");
  }
  return r;
}
function SJn(e, t, n) {
  let r = n.get(e);
  if (!vT(r) || r.isBackgrounded || r.notified) return;
  (n.remove(e),
    xf(e, t, {
      toolUseId: r.toolUseId,
      summary: r.description,
    }));
}
function Vbt(e) {
  if (e.interrupted) return "stopped";
  return e.code === 0 ? "completed" : "failed";
}
function V$e(e) {
  if (e.interrupted) return "killed";
  return e.code === 0 ? "completed" : "failed";
}
async function kJn(e) {
  try {
    (await e.taskOutput.flush(), e.cleanup());
  } catch (t) {
    ke(t);
  }
}
var Ovl,
  Qbt = "Background command ",
  HEf = 5000,
  TEf = 45000,
  vEf = 1024,
  wEf = 3600000,
  CEf = 1800000,
  IEf,
  W7n;
