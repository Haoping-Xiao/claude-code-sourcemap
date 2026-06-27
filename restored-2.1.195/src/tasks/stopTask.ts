// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pyl
// matched 2.1.88 source: src/tasks/stopTask.ts
// class=modified  jaccard=0.2969  score=0.3781  fileCov=0.5803
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var pyl = E(() => {
  j7n();
  S_();
  Z6();
  d8t();
  JJ();
  lyl = (tfe(), ro(Bko)).LocalWorkflowTask;
});
function azt(e) {
  return (
    e.type === "local_agent" &&
    e.status === "completed" &&
    "keepaliveReasons" in e &&
    e.keepaliveReasons instanceof Set &&
    e.keepaliveReasons.size > 0 &&
    !Ir()
  );
}
function emf(e, t, n) {
  let r = new Set(),
    o = "parentAgentId" in e && typeof e.parentAgentId === "string" ? e.parentAgentId : void 0;
  while (o && !r.has(o)) {
    if (o === t) return true;
    r.add(o);
    let s = n[o];
    o =
      s && s.type === "local_agent" && "parentAgentId" in s && typeof s.parentAgentId === "string"
        ? s.parentAgentId
        : void 0;
  }
  return false;
}
async function mbt(e, t) {
  let { taskRegistry: n, setAppState: r, callerAgentId: o, killedBy: s = "user" } = t,
    i = n.get(e);
  if (!i) throw new W6e(`No task found with ID: ${e}`, "not_found");
  if (i.status !== "running" && !azt(i))
    throw new W6e(`Task ${e} is not running (status: ${i.status})`, "not_running");
  if (!Crl(o, i.agentId))
    throw new W6e(
      `Task ${e} is owned by ${D6n(i.agentId)}; agent ${o} cannot stop it.`,
      "not_owner",
    );
  let a = W0o(i.type);
  if (!a) throw new W6e(`Unsupported task type: ${i.type}`, "unsupported_type");
  if (t.source === "user") ife(e, n);
  let l = azt(i);
  if ((await a.kill(e, n, r, s), l)) {
    let u = n.all();
    for (let d of Object.values(u))
      if (
        d.type === "local_agent" &&
        d.id !== e &&
        (d.status === "running" || azt(d)) &&
        emf(d, i.agentId ?? e, u)
      ) {
        if (
          (n.update(d.id, (p) =>
            p.notified
              ? p
              : {
                  ...p,
                  notified: true,
                },
          ),
          xf(d.id, "stopped", {
            toolUseId: d.toolUseId,
            summary: d.description,
          }),
          t.source === "user")
        )
          ife(d.id, n);
        await a.kill(d.id, n, r, s);
      }
  }
  if (vT(i)) {
    let u = false;
    if (
      (n.update(e, (d) => {
        if (d.notified) return d;
        return (
          (u = true),
          {
            ...d,
            notified: true,
          }
        );
      }),
      u)
    )
      xf(e, "stopped", {
        toolUseId: i.toolUseId,
        summary: i.description,
      });
  }
  if (vT(i) && i.agentId !== void 0 && o !== i.agentId)
    krl({
      taskId: e,
      toolUseId: i.toolUseId,
      description: i.description,
      ownerAgentId: i.agentId,
    });
  let c = vT(i) ? i.command : i.description;
  return {
    taskId: e,
    taskType: i.type,
    command: c,
  };
}
function lzt(e) {
  let { taskRegistry: t, setAppState: n } = e;
  for (let r of Object.values(t.all())) {
    if (r.status !== "running" || !wH(r) || !zJ(r)) continue;
    if ((ife(r.id, t), W0o(r.type)?.kill(r.id, t, n, "system"), r.type === "local_agent"))
      (t.update(r.id, (o) =>
        o.notified
          ? o
          : {
              ...o,
              notified: true,
            },
      ),
        xf(r.id, "stopped", {
          toolUseId: r.toolUseId,
          summary: r.description,
        }));
  }
}
function ife(e, t) {
  t.update(e, (r) =>
    r.stoppedByUser
      ? r
      : {
          ...r,
          stoppedByUser: true,
        },
  );
  let n = t.get(e);
  if (n?.type === "local_agent") {
    let r = "agentType" in n && typeof n.agentType === "string" ? n.agentType : "general-purpose";
    tmf(e, r);
  }
}
async function tmf(e, t) {
  try {
    let n = await Moe(Bu(e));
    if (n?.stoppedByUser) return;
    await Ype(Bu(e), {
      ...(n ?? {
        agentType: t,
      }),
      stoppedByUser: true,
    });
  } catch (n) {
    if (Vo(n)) {
      T(`failed to persist stop marker for ${e}: ${be(n)}`, {
        level: "warn",
      });
      return;
    }
    ke(n);
  }
}
var W6e;
