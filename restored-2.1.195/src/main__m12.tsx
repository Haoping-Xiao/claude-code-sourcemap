// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xHt
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0039  score=0.0458  fileCov=0.0043
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xHt = E(() => {
  lH();
  jGo();
  Gfe();
  kYe();
  WL();
  q$();
  CHt();
  IKe();
  kLn();
  ZS();
  OM();
  dn();
  kt();
  je();
  At();
  YS();
  sa();
  zH();
  Vke();
  _ht();
  aR();
  FAe();
  ag();
  ((PYe = require("fs/promises")), (vrc = require("path")));
});
function Rrc(e) {
  return {
    name: e.agentType,
    description: e.whenToUse,
    initialPrompt: e.initialPrompt,
    color: e.color,
  };
}
function DHt(e, t) {
  if (!e?.agent) return Bse;
  let n = e.agent,
    r = n.toLowerCase(),
    o =
      t?.find((i) => i.name.toLowerCase() === r) ??
      t?.find((i) => i.name.toLowerCase().endsWith(`:${r}`));
  if (o) return o;
  let s = yHe().find((i) => i.agentType.toLowerCase() === r);
  if (s)
    return {
      ...Bse,
      name: s.agentType,
    };
  if (n.includes(":"))
    return {
      ...Bse,
      name: n,
    };
  return t
    ? Bse
    : {
        ...Bse,
        name: n,
      };
}
async function IQt(e) {
  let { activeAgents: t } = await CP(e);
  return t.filter((n) => !Sh(n)).map(Rrc);
}
async function Lrc(e) {
  let t;
  try {
    t = await a2.readdir(e, {
      withFileTypes: !0,
    });
  } catch {
    return {};
  }
  let n = t
      .filter(
        (o) =>
          (o.isDirectory() || o.isSymbolicLink()) && !o.name.startsWith(".") && !/\s/.test(o.name),
      )
      .map(async (o) => {
        let s = LHt.join(e, o.name);
        try {
          return (await a2.stat(LHt.join(s, ".git")), [o.name, s]);
        } catch {
          return null;
        }
      }),
    r = (await Promise.all(n)).filter((o) => o !== null);
  return Object.fromEntries(r);
}
async function cWo(e, t, n) {
  let r = jM(e).filter((i) => t[i.id]?.type === "image");
  if (r.length === 0) return e;
  let o = _c(n),
    s = e;
  for (let i = r.length - 1; i >= 0; i--) {
    let a = r[i],
      l = t[a.id],
      c = l.sourcePath;
    if (!c) {
      await a2.mkdir(o, {
        recursive: !0,
      });
      let u = (l.mediaType ?? "image/png").split("/")[1] ?? "png";
      ((c = LHt.join(o, `pasted-${a.id}.${u}`)),
        await a2.writeFile(c, l.content, {
          encoding: "base64",
        }));
    }
    s = s.slice(0, a.index) + c + s.slice(a.index + a.match.length);
  }
  return s;
}
function Drc(e) {
  xQt = e;
}
function Prc() {
  return xQt;
}
function kQt(e) {
  if (!e) return [];
  return [
    ...(e.model ? ["--model", e.model] : []),
    ...(e.effort ? ["--effort", e.effort] : []),
    ...(e.permissionMode ? ["--permission-mode", e.permissionMode] : []),
    ...(e.allowBypass ? ["--allow-dangerously-skip-permissions"] : []),
    ...(e.jsonSchema ? ["--json-schema", e.jsonSchema] : []),
    ...(e.appendSystemPrompt ? ["--append-system-prompt", e.appendSystemPrompt] : []),
  ];
}
async function Car(e, t, n, r, o, s, i) {
  if (o) {
    if ((await tV(), !Us(Arc)))
      return {
        ok: !1,
        error: Hrc,
      };
  }
  T("[PERF:bg-dispatch-start]");
  let a = n ?? CQt.randomUUID(),
    l = a.slice(0, 8),
    c = r ?? $t(),
    u = o ? ["--routine", o] : ["--agent", e.name],
    d = [...xQt, ...u, ...kQt(s)],
    p = _c(l);
  try {
    (await a2.mkdir(LHt.join(p, "tmp"), {
      recursive: !0,
    }),
      await Kd(
        p,
        eue({
          template: o
            ? {
                name: o,
                description: "",
              }
            : e,
          routine: o,
          respawnFlags: d,
          intent: t,
          displayIntent: i,
          ...(o &&
            !t && {
              tempo: "idle",
              detail: "(idle \u2014 waiting for trigger)",
            }),
          sessionId: a,
          cwd: c,
          originCwd: c,
        }),
      ));
  } catch (y) {
    return (
      await a2
        .rm(p, {
          recursive: !0,
          force: !0,
        })
        .catch(() => {}),
      sS(p),
      Le("fleet_view_dispatch", "state_write_failed", {
        errno: xd(y) ?? "unknown",
      }),
      {
        ok: !1,
        error: `Couldn't create the job \u2014 ${be(y)}`,
      }
    );
  }
  let f = [...d, ...(t ? ["--", t] : [])],
    m = Date.now(),
    g = await SZ(f, a, "fleet", c),
    h = !g.ok && g.reason === "gate_blocked";
  if (!g.ok && !g.alive && g.reason === "ack_timeout" && Date.now() - m < 2000)
    (T(`bg: dispatch fast-failed (${Date.now() - m}ms) \u2014 retrying once`, {
      level: "warn",
    }),
      await Nn(500),
      (g = await SZ(f, a, "fleet", c)));
  if (!g.ok) {
    if (g.alive)
      return (
        It("fleet_view_dispatch", "alive_collision"),
        {
          ok: !1,
          error: g.error,
        }
      );
    if (!h) await yTe(l).catch(() => {});
    return (
      await a2
        .rm(p, {
          recursive: !0,
          force: !0,
        })
        .catch(() => {}),
      sS(p),
      (g.reason === "gate_blocked" ? It : Le)("fleet_view_dispatch", g.reason ?? "spawn_failed"),
      {
        ok: !1,
        error: g.error,
        reason: g.reason,
      }
    );
  }
  if ((T("[PERF:bg-dispatch-end]"), g.rescued)) It("fleet_view_dispatch", "rescued");
  else xe("fleet_view_dispatch");
  return {
    ok: !0,
    jobId: g.short,
    sessionId: a,
  };
}
function RQt() {
  return !0;
}
async function Mrc(e, t, n) {
  let r = t ?? CQt.randomUUID(),
    o = r.slice(0, 8),
    s = n ?? $t(),
    i = _c(o);
  try {
    (await a2.mkdir(LHt.join(i, "tmp"), {
      recursive: !0,
    }),
      await Kd(
        i,
        eue({
          template: OJf,
          intent: e,
          sessionId: r,
          cwd: s,
          originCwd: s,
        }),
      ));
  } catch (l) {
    return (
      await a2
        .rm(i, {
          recursive: !0,
          force: !0,
        })
        .catch(() => {}),
      sS(i),
      Le("fleet_view_dispatch_exec", "state_write_failed", {
        errno: xd(l) ?? "unknown",
      }),
      {
        ok: !1,
        error: `Couldn't create the job \u2014 ${be(l)}`,
      }
    );
  }
  let a = await SZ([], r, "fleet", s, {
    intent: e,
    exec: e,
  });
  if (!a.ok) {
    if (a.alive)
      return (
        It("fleet_view_dispatch_exec", "alive_collision"),
        {
          ok: !1,
          error: a.error,
        }
      );
    return (
      await yTe(o).catch(() => {}),
      await a2
        .rm(i, {
          recursive: !0,
          force: !0,
        })
        .catch(() => {}),
      sS(i),
      Le("fleet_view_dispatch_exec", a.reason ?? "spawn_failed"),
      {
        ok: !1,
        error: a.error,
        reason: a.reason,
      }
    );
  }
  return (
    xe("fleet_view_dispatch_exec"),
    {
      ok: !0,
      jobId: a.short,
      sessionId: r,
    }
  );
}
function uWo() {
  return _Te;
}
function $rc(e) {
  if (_Te?.sessionId === e) _Te.ready = !0;
}
async function Iar(e, t = !1, n, r) {
  if (t) war = !1;
  if (_Te || RHt || war) return;
  if (_Qt()) {
    It("job_spare_ensure", "low_mem");
    return;
  }
  let o = CQt.randomUUID(),
    s = o.slice(0, 8);
  (T(`[PERF:bg-spare-start] ${s}`),
    (RHt = (async () => {
      try {
        let i = await jA(e),
          a = r;
        if (a === void 0 && n?.agent) (wq(), (a = await IQt(i).catch(() => [])));
        let l = DHt(n, a).name,
          c = await SZ([...xQt, "--agent", l, ...kQt(n)], o, "spare", i);
        if (!c.ok) {
          (await Sme(s, {
            internal: !0,
          }).catch(() => {}),
            (c.reason === "gate_blocked" ? It : Le)(
              "job_spare_ensure",
              c.reason ?? "spawn_failed",
            ));
          return;
        }
        if (war) {
          (await Sme(s, {
            internal: !0,
          }),
            It("job_spare_ensure", "discarded_after_spawn"));
          return;
        }
        ((_Te = {
          jobId: s,
          sessionId: o,
          cwd: i,
          ready: !1,
          defaults: n,
        }),
          T(`[PERF:bg-spare-spawned] ${s}`),
          xe("job_spare_ensure"));
      } catch {
        (await Sme(s, {
          internal: !0,
        }).catch(() => {}),
          Le("job_spare_ensure", "threw"));
      }
    })()));
  try {
    await RHt;
  } finally {
    RHt = null;
  }
}
async function Orc(e, t) {
  T("[PERF:bg-claim-start]");
  let n = _Te;
  _Te = null;
  let r = t ?? DHt(n?.defaults),
    o = async (i, a) => {
      if (
        (T(`[bg-spare] claim miss (${i})${a ? `: ${a}` : ""}`),
        G("tengu_bg_spare_claim_fail", {
          reason: $e(i),
        }),
        n)
      ) {
        let { removed: l, error: c } = await Sme(n.jobId, {
          internal: !0,
          knownGone: i === "enojob",
        });
        if (!l)
          return (
            Le("job_claim_spare", "job_claim_spare_delete_failed"),
            T(
              `[bg-spare] deleteJob unconfirmed (${c ?? "unknown"}) \u2014 cold-dispatching with fresh sessionId; spare ${n.jobId} dir preserved`,
              {
                level: "warn",
              },
            ),
            Car(r, e, void 0, n.cwd, void 0, n.defaults)
          );
      }
      return (It("job_claim_spare", i), Car(r, e, n?.sessionId, n?.cwd, void 0, n?.defaults));
    };
  if (!n) return o("no-spare");
  let s = IHt(
    eue({
      template: r,
      respawnFlags: [...xQt, "--agent", r.name, ...kQt(n.defaults)],
      intent: e,
      sessionId: n.sessionId,
      cwd: n.cwd,
      originCwd: n.cwd,
    }),
    e,
  );
  try {
    let i = await wQt(n.jobId, e, void 0, s);
    if (i) return o(i.err === MYe ? "enojob" : "reply", i.err);
  } catch (i) {
    return o("reply-throw", be(i));
  }
  return (
    await Kd(_c(n.jobId), s).catch(Xf),
    T("[PERF:bg-claim-end]"),
    xe("job_claim_spare"),
    xe("fleet_view_dispatch"),
    {
      ok: !0,
      jobId: n.jobId,
      sessionId: n.sessionId,
    }
  );
}
async function Nrc() {
  if (((war = !0), RHt)) await RHt.catch(() => {});
  let e = _Te;
  if (((_Te = null), e))
    await Sme(e.jobId, {
      internal: !0,
    });
}
async function PHt(e, t) {
  if (t?.knownAlive && t.knownState && !t.force)
    return {
      ok: !1,
      alive: !0,
      short: t.knownState.daemonShort ?? e,
      state: t.knownState,
      error: `Session ${e} is already running`,
    };
  let n = _c(e),
    r = t?.knownState ?? (await zi(n));
  if (!r)
    return (
      Le("job_respawn", "job_respawn_state_missing"),
      {
        ok: !1,
        error: "Can't respawn \u2014 that job's saved state is missing",
        alive: !1,
      }
    );
  let o = r.daemonShort ?? e,
    s = Date.now(),
    i = await wrc(o),
    a = Date.now() - s,
    l = i.alive;
  if (!t?.force && l)
    return {
      ok: !1,
      alive: !0,
      short: o,
      state: r,
      error: `Session ${e} is already running`,
    };
  if (!t?.force && V0e(r)) {
    if (i.daemonUp && i.present)
      return {
        ok: !1,
        alive: !0,
        short: o,
        state: r,
        error: `Session ${e} has exited; attach shows the captured output`,
      };
    return (
      It("job_respawn", "exec_output_expired"),
      {
        ok: !1,
        alive: !1,
        state: r,
        error: "Output no longer available \u2014 this shell command has exited",
      }
    );
  }
  if (t?.knownState) sS(n);
  let c = t?.knownState ? ((await zi(n)) ?? r) : r,
    u = c.daemonShort ?? e,
    d = c.resumeSessionId ?? (yD(r.sessionId) !== null ? r.sessionId : CQt.randomUUID()),
    p = Date.now(),
    f = 0,
    m = 0,
    g = null,
    h = null,
    y = i.daemonUp && !i.alive && !i.present && u === o;
  if (y) ((g = aWo(u)), (h = xae(d, c.cwd, c.linkScanPath)));
  else {
    let z = await yTe(u, r);
    if (((f = Date.now() - p), l && !z.confirmed))
      return (
        G("tengu_bg_respawn_unconfirmed_bail", {}),
        It("job_respawn", "job_respawn_kill_unconfirmed"),
        {
          ok: !1,
          alive: l,
          short: u,
          state: r,
          error:
            z.error ??
            "Couldn't stop the previous worker \u2014 supervisor may be starting, retry in a moment",
        }
      );
    let K = Date.now(),
      Z = K + 3000;
    while (Date.now() < Z) {
      if (!(await Crc(u))) break;
      await Nn(100);
    }
    m = Date.now() - K;
  }
  let b = Date.now(),
    _ = await (h ?? xae(d, c.cwd, c.linkScanPath)),
    S = Date.now() - b;
  if (g) {
    let z = Date.now(),
      K = await g;
    if (((f = Date.now() - z), K.anyMatch)) _ = await xae(d, c.cwd, c.linkScanPath);
  }
  let A = _.hasMessages;
  if (!A)
    (G("tengu_bg_respawn_no_transcript", {
      via: $e(_.via),
      had_link_scan_path: c.linkScanPath !== void 0,
    }),
      await a2
        .rm(_.path, {
          force: !0,
        })
        .catch(() => {}));
  let v = r.template === "exec" && r.respawnFlags.length === 0 ? r.intent : void 0,
    C = LYe(c.respawnFlags),
    x = v
      ? []
      : C.length > 0
        ? C
        : r.routine
          ? ["--routine", r.routine]
          : r.template !== "bg"
            ? ["--agent", r.template]
            : [],
    I = x.indexOf("--agent");
  if (!A && I !== -1 && x[I + 1]) {
    let z = x[I + 1];
    wq();
    let K = await IQt(c.cwd).catch(() => {
        return;
      }),
      Z = DHt(
        {
          agent: z,
        },
        K,
      ).name;
    if (Z !== z) x = x.with(I + 1, Z);
  }
  let k = c.resumeSessionId !== void 0 && d !== r.sessionId,
    D = v ? void 0 : (t?.initialPrompt ?? c.queuedPrompt ?? (A || k ? void 0 : r.intent)),
    P = [
      ...(A && !v ? ["--resume", d] : []),
      ...(t?.replyOnResume && A && !v && !D && !x.includes("--reply-on-resume")
        ? ["--reply-on-resume"]
        : []),
      ...x,
      ...(D ? ["--", D] : []),
    ],
    O = W0e(c.bridgeSessionId, c.bridgeSessionSeq, c.bridgeOutboundOnly),
    L = Date.now(),
    M =
      v ||
      A ||
      r.bgIsolation === "none" ||
      r.providerEnv ||
      r.sessionPermissionRules ||
      r.memoryToggledOff
        ? {
            ...(v && {
              intent: v,
              exec: v,
            }),
            ...(A &&
              !v && {
                resumeTranscriptPath: _.path,
              }),
            ...(r.bgIsolation === "none" && {
              bgIsolation: "none",
            }),
            ...(r.providerEnv && {
              providerEnv: r.providerEnv,
            }),
            ...(r.sessionPermissionRules && {
              sessionPermissionRules: r.sessionPermissionRules,
            }),
            ...(r.memoryToggledOff && {
              memoryToggledOff: !0,
            }),
          }
        : void 0,
    N = await SZ(P, d, "fleet", c.cwd, M, O, e);
  if (!N.ok && !N.alive && N.reason === "ack_timeout" && Date.now() - L < 2000)
    (T(`bg: respawn dispatch fast-failed (${Date.now() - L}ms) \u2014 retrying once`, {
      level: "warn",
    }),
      await Nn(500),
      (N = await SZ(P, d, "fleet", c.cwd, M, O, e)));
  let B = Date.now() - L,
    $ = Date.now() - s;
  if (
    (T(
      `[PERF:respawn] ${e}: total=${$}ms probe=${a}ms kill=${f}ms${y ? " (ceremony skipped)" : ""} wait=${m}ms transcript=${S}ms dispatch=${B}ms ok=${N.ok}`,
    ),
    G("tengu_bg_respawn", {
      total_ms: $,
      probe_ms: a,
      kill_ms: f,
      wait_ms: m,
      transcript_ms: S,
      dispatch_ms: B,
      skipped_kill: y,
      daemon_up: i.daemonUp,
      was_present: i.present,
      forced: t?.force === !0,
      ok: N.ok,
    }),
    !N.ok)
  ) {
    if (N.alive) It("job_respawn", "already_alive");
    else Le("job_respawn", "job_respawn_spawn_failed");
    let z = !1;
    if (!N.alive && t?.initialPrompt) {
      let K = {
        ...c,
        queuedPrompt: t.initialPrompt,
        updatedAt: new Date().toISOString(),
      };
      z = await Kd(n, K).then(
        () => !0,
        (Z) => (Xf(Z), !1),
      );
    }
    return {
      ok: !1,
      error: N.error,
      alive: N.alive ?? !1,
      short: N.short,
      state: r,
      queued: z,
    };
  }
  (G("tengu_bg_agent_action", {
    action: We("respawn"),
    agent: r.template,
    wasSettled: Vh(r),
  }),
    sS(n));
  let q = (await zi(n)) ?? c;
  if (q.state === "failed" && q.updatedAt > c.updatedAt)
    return (
      It("job_respawn", "crashed_during_spawn"),
      {
        ok: !0,
        short: N.short,
        state: q,
      }
    );
  let W = D ? IHt(q, D) : q,
    V = c.state === "failed" || c.state === "stopped" || !!v,
    Y = {
      ...W,
      state: V ? "starting" : c.state,
      ...(D
        ? {
            inFlight: void 0,
          }
        : {
            ...(!V && c.tempo === "active"
              ? B0(c.state) || c.routine
                ? {
                    tempo: "idle",
                  }
                : {
                    tempo: "blocked",
                    needs: PW,
                    ...(llt.includes(c.state) && {
                      state: "working",
                    }),
                  }
              : {
                  tempo: V ? "idle" : c.tempo,
                }),
            detail: V ? "" : c.detail,
            inFlight: {
              tasks: 0,
              queued: 0,
              kinds: [],
            },
          }),
      ...(A
        ? {}
        : {
            firstTerminalAt: null,
          }),
      daemonShort: N.short,
      queuedPrompt: void 0,
      updatedAt: new Date().toISOString(),
      backend: "daemon",
    };
  return (
    await Kd(n, Y).catch(Xf),
    xe("job_respawn"),
    {
      ok: !0,
      short: N.short,
      state: Y,
    }
  );
}
var CQt,
  a2,
  LHt,
  Bse,
  xQt,
  OJf,
  _Te = null,
  RHt = null,
  war = !1;
