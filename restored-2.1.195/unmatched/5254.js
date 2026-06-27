// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CWo
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0116  score=0.0525  fileCov=0.0147
// note: nearest: src/utils/sessionStorage.ts (0.0116); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CWo = E(() => {
  YS();
  mFn();
  jqe();
  $ar = require("fs/promises");
});
function Nar(e) {
  return dt.string().transform((t, n) => {
    let r = l => (n.addIssue({
      code: dt.ZodIssueCode.custom,
      message: l
    }), dt.NEVER);
    if (cee(t)) return r(`adopt path is remote UNC: ${t}`);
    let o = GIt(BEr, t);
    if (o !== void 0) return r(`adopt path traverses symlink/junction to remote UNC: ${o}`);
    let s = oUe(t);
    if (s === null) return r(`adopt path unresolvable: ${t}`);
    let i = [...e(), ...[]].map(oUe).filter(l => l !== null);
    if (i.length === 0) return r("adopt path roots unresolvable");
    if (!i.some(l => {
      let c = Fse.relative(l, s);
      return c === "" || !c.startsWith("..") && !Fse.isAbsolute(c);
    })) return r(`adopt path outside allowed roots: ${s}`);
    return s;
  });
}
function aoc() {
  return !Oe.CLAUDE_DISABLE_ADOPT;
}
async function Bar(e) {
  let t = NYe(e),
    n = Object.values(e).filter(u => dQf(u, t)),
    r = Object.values(e).filter(u => pQf(u, t)),
    o = Object.values(e).filter(u => fQf(u, t)),
    s = Hw().filter(u => $Ht(u, t));
  if (n.length === 0 && r.length === 0 && o.length === 0 && s.length === 0) return null;
  let i = [];
  for (let u of n) {
    let d = u.shellCommand?.detach?.();
    if (d === void 0) continue;
    i.push({
      taskId: u.id,
      pid: d,
      procStart: await KR(d, {
        skipCache: !0
      }),
      startTimeTicks: (await Oar(d)) ?? void 0,
      command: u.command,
      description: u.description,
      outputPath: u.shellCommand.taskOutput.path,
      lastReportedTotalLines: u.lastReportedTotalLines,
      toolUseId: u.toolUseId,
      kind: u.kind,
      agentId: u.agentId
    });
  }
  let a = await Promise.all(r.map(async u => {
      let d = uk(Bu(u.agentId));
      return {
        agentId: u.agentId,
        agentType: u.agentType,
        description: u.description,
        toolUseId: u.toolUseId,
        spawnDepth: u.spawnDepth,
        startTime: u.startTime,
        transcriptPath: await DC.realpath(d).catch(() => d),
        parentAgentId: u.parentAgentId
      };
    })),
    l = await Promise.all(o.map(async u => {
      let d = Foe(u.workflowRunId);
      return {
        taskId: u.id,
        workflowRunId: u.workflowRunId,
        scriptPath: u.scriptPath,
        scriptSha256: u.script ? soc.createHash("sha256").update(u.script).digest("hex") : void 0,
        argsJson: u.args !== void 0 ? De(u.args) : void 0,
        description: u.description,
        startTime: u.startTime,
        transcriptDir: await DC.realpath(d).catch(() => d)
      };
    }));
  if (i.length === 0 && a.length === 0 && l.length === 0 && s.length === 0) return null;
  let c = !1;
  return {
    payload: {
      writtenAtMs: Date.now(),
      shells: i,
      cron: s.map(u => ({
        id: u.id,
        cron: u.cron,
        prompt: u.prompt,
        createdAt: u.createdAt,
        recurring: u.recurring,
        agentId: u.agentId,
        kind: u.kind
      })),
      agents: a,
      workflows: l
    },
    checkpointAgents: async u => {
      for (let d of o) d.abortController?.abort("background"), R6e(d.id, u);
      if (a.length === 0) return;
      for (let d of i) if (d.agentId !== void 0) u.remove(d.taskId);
      for (let d of r) d.abortController.abort("background");
      await ioc.setImmediate(), await IC().catch(d => {
        It("task_local_agent", "adopt_checkpoint_flush_failed"), T(`[adopt] checkpoint flush: ${d}`, {
          level: "warn"
        });
      });
    },
    disown: u => {
      for (let d of i) u.remove(d.taskId);
      for (let d of a) u.remove(d.agentId);
      for (let d of l) u.remove(d.taskId);
      if (s.length > 0) IK(s.map(d => d.id));
    },
    abandon: () => {
      if (c) return;
      c = !0;
      for (let u of n) try {
        u.shellCommand?.kill();
      } catch (d) {
        T(`[adopt] abandon ${u.id}: ${d}`, {
          level: "warn"
        });
      }
      for (let u of r) Ad({
        value: `<${Oc}>
<${Dp}>${ec(u.agentId)}</${Dp}>
<${up}>failed</${up}>
<${Zu}>Background agent "${ec(u.description)}" was checkpointed for the background fork but the fork failed to spawn; the agent was not resumed.</${Zu}>
</${Oc}>`,
        agentId: ls(),
        mode: "task-notification",
        priority: "next"
      });
      if (r.length > 0) It("task_local_agent", "adopt_spawn_failed");
      for (let u of o) Ad({
        value: `<${Oc}>
<${Dp}>${ec(u.id)}</${Dp}>
<${up}>failed</${up}>
<${Zu}>Background workflow "${ec(u.description)}" was checkpointed for the background fork but the fork failed to spawn; it was not resumed. To resume manually: Workflow({scriptPath: '${ec(u.scriptPath ?? "")}', resumeFromRunId: '${ec(u.workflowRunId ?? "")}'}).</${Zu}>
</${Oc}>`,
        agentId: ls(),
        mode: "task-notification",
        priority: "next"
      });
      if (o.length > 0) It("task_local_workflow", "adopt_spawn_failed");
    }
  };
}
async function Uar(e, t) {
  await eg(Fse.join(e, "adopt.json"), JSON.stringify(t));
}
async function loc(e) {
  if (!e) return null;
  let t = Fse.join(e, "adopt.json"),
    n = `${t}.${process.pid}`,
    r = !1;
  for (let i = 0;; i++) try {
    await DC.rename(t, n);
    break;
  } catch (a) {
    let l = on(a);
    if (l === "ENOENT") return G("tengu_adopt_claim", {
      result: We("enoent")
    }), null;
    let c = l === "EPERM" || l === "EBUSY" || l === "EACCES";
    if (c && i < 3) {
      r = !0, await Nn(50);
      continue;
    }
    return T(`[adopt] rename failed: ${a}`, {
      level: "warn"
    }), G("tengu_adopt_claim", {
      result: c ? We("ebusy_gave_up") : BJe(a)
    }), null;
  }
  let o = Date.now(),
    s = r ? We("ebusy_retry") : We("ok");
  try {
    let i = await DC.readFile(n, "utf-8"),
      a = uQf().safeParse(JSON.parse(i));
    if (!a.success) return T(`[adopt] schema rejected: ${a.error.message}`, {
      level: "warn"
    }), G("tengu_adopt_claim", {
      result: We("schema_rejected")
    }), null;
    let l = o - a.data.writtenAtMs;
    if (l > NQt) return T(`[adopt] stale (age ${l}ms)`, {
      level: "warn"
    }), G("tengu_adopt_claim", {
      result: We("stale")
    }), null;
    return G("tengu_adopt_claim", {
      result: s
    }), a.data;
  } catch (i) {
    return T(`[adopt] read/parse failed: ${i}`, {
      level: "warn"
    }), G("tengu_adopt_claim", {
      result: We("parse_failed")
    }), null;
  } finally {
    await DC.unlink(n).catch(() => {});
  }
}
async function coc(e) {
  if (!e.transcriptPath) return;
  let t = uk(Bu(e.agentId));
  if (t === e.transcriptPath) return;
  let n = r => r.replace(/\.jsonl$/, ".meta.json");
  await DC.stat(n(e.transcriptPath)), await DC.mkdir(Fse.dirname(t), {
    recursive: !0
  });
  for (let [r, o] of [[t, e.transcriptPath], [n(t), n(e.transcriptPath)]]) await DC.unlink(r).catch(() => {}), await DC.symlink(o, r);
}
function uoc(e) {
  return wWo(e.pid, e.startTimeTicks, e.procStart);
}
async function doc(e) {
  let t = Foe(e.workflowRunId);
  if (t === e.transcriptDir) return;
  await DC.stat(Fse.join(e.transcriptDir, "journal.jsonl")), await DC.mkdir(Fse.dirname(t), {
    recursive: !0
  });
  try {
    await DC.unlink(t);
  } catch (n) {
    if (on(n) !== "ENOENT") try {
      await DC.rmdir(t);
    } catch (o) {
      if (on(o) === "ENOTEMPTY") await DC.rm(t, {
        recursive: !0,
        force: !0
      });
    }
  }
  await DC.symlink(e.transcriptDir, t, void 0);
}
function Far(e, t) {
  let n = e.scriptPath !== void 0 ? ` To resume manually: Workflow({scriptPath: '${ec(e.scriptPath)}', resumeFromRunId: '${ec(e.workflowRunId)}'}).` : "";
  Ad({
    value: `<${Oc}>
<${Dp}>${ec(e.taskId)}</${Dp}>
<${up}>failed</${up}>
<${Zu}>Background workflow "${ec(e.description)}" was checkpointed for the background fork but could not be resumed (${ec(t)}).${n}</${Zu}>
</${Oc}>`,
    agentId: ls(),
    mode: "task-notification",
    priority: "next"
  });
}
function poc(e) {
  let t = Nar(() => [oF()]).safeParse(e);
  if (!t.success) throw new mi(t.error.issues[0]?.message ?? "scriptPath rejected", "adopt scriptPath rejected");
  return t.data;
}
function foc(e) {
  return e.mcp.clientsInitialized === !0 && !e.mcp.clients.some(t => t.type === "pending");
}
function jar(e, t, n) {
  let r = e.parentAgentId !== void 0 && El(n.get(e.parentAgentId)) ? Bu(e.parentAgentId) : ls();
  Ad({
    value: `<${Oc}>
<${Dp}>${ec(e.agentId)}</${Dp}>
<${up}>failed</${up}>
<${Zu}>Background agent "${ec(e.description ?? e.agentId)}" was checkpointed for the background fork but could not be resumed (${ec(t)}).</${Zu}>
</${Oc}>`,
    agentId: r,
    mode: "task-notification",
    priority: "next"
  });
}
function moc(e) {
  let t = new Set(Hw().map(n => n.id));
  for (let n of e) if (!t.has(n.id)) Rge(n), t.add(n.id);
}
function NYe(e) {
  let t = new Map();
  if (!aoc()) return t;
  let n = i => El(i) ? i.parentAgentId : "agentId" in i ? i.agentId : void 0,
    r = new Map();
  for (let i of Object.values(e)) {
    if (i.status !== "running" && i.status !== "pending") continue;
    let a = n(i);
    if (a !== void 0) {
      let l = r.get(a) ?? [];
      l.push(i), r.set(a, l);
    }
  }
  let o = i => {
      if (El(i)) return i.agentType !== "main-session" && i.status === "running" && i.isBackgrounded && i.abortController !== void 0;
      if (vT(i)) return i.kind !== "monitor" && i.status === "running" && i.isBackgrounded && i.shellCommand !== null && i.shellCommand.detach !== void 0;
      if (M6t(i)) return i.status === "running" && i.scriptPath !== void 0 && i.workflowRunId !== void 0 && i.abortController !== void 0;
      return !1;
    },
    s = (i, a) => {
      a.push(i.id);
      let l = o(i);
      for (let c of r.get(i.id) ?? []) l = s(c, a) && l;
      return l;
    };
  for (let i of Object.values(e)) {
    if (!(El(i) ? i.parentAgentId === void 0 : vT(i) ? i.agentId === void 0 : M6t(i))) continue;
    let l = [],
      c = s(i, l);
    for (let u of l) t.set(u, c);
  }
  return t;
}
function dQf(e, t) {
  return vT(e) && (t.get(e.id) ?? !1);
}
function $Ht(e, t) {
  return aoc() && (e.agentId === void 0 || (t.get(e.agentId) ?? !1));
}
function pQf(e, t) {
  return El(e) && (t.get(e.id) ?? !1);
}
function fQf(e, t) {
  return M6t(e) && (t.get(e.id) ?? !1);
}
function BQt(e, t) {
  return t.get(e.id) ?? !1;
}
function UQt(e, t = NYe(e)) {
  return On(Object.values(e), n => BQt(n, t)) + On(Hw(), n => $Ht(n, t));
}
function Gar(e, t = NYe(e)) {
  return sKe(e).count - UQt(e, t);
}
function War(e) {
  return {
    adopted_shells: e?.shells.length ?? 0,
    adopted_agents: e?.agents?.length ?? 0,
    adopted_workflows: e?.workflows?.length ?? 0,
    adopted_cron: e?.cron.length ?? 0
  };
}
var soc,
  DC,
  Fse,
  ioc,
  NQt = 120000,
  OQt,
  iQf,
  aQf,
  lQf,
  cQf,
  uQf;