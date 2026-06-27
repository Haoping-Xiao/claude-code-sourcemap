// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Iuc
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.005  score=0.0433  fileCov=0.0056
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Iuc = E(() => {
  kt();
  je();
  Jt();
  RNo();
  q$();
  ((wuc = require("net")), (Tuc = [100, 250, 500, 1000, 2000]));
});
function r9o() {
  return (e, t, n) => {
    let { cmd: r, prefixArgs: o } = CF({
        pinToCurrentBinary: !0,
      }),
      s;
    try {
      s = lTt.openSync(GL(n.ptySock), "w");
    } catch {}
    try {
      let i = Bun.spawn(
        [r, ...o, "--bg-pty-host", n.ptySock, String(n.cols), String(n.rows), "--", e, ...t],
        {
          cwd: n.cwd,
          env: n.env,
          stdio: ["ignore", "ignore", s ?? "ignore"],
          detached: !0,
          windowsHide: !0,
        },
      );
      return (i.unref(), Ocr(n.ptySock, i.pid, void 0, n.short, i, n.ptyAuth));
    } finally {
      if (s !== void 0) lTt.closeSync(s);
    }
  };
}
function Muc(e, t, n, r, o, s) {
  if (e.launch.mode === "exec") return e.launch.args.map(tv);
  if (t > 1 && n) return T8(["--resume", o ?? r, ...LYe(s)]);
  if (t > 1 && r !== e.sessionId) return T8(["--session-id", r, ...LYe(s)]);
  if (e.launch.mode === "resume")
    return T8([
      ...(e.launch.fork ? ["--session-id", e.sessionId, "--fork-session"] : []),
      "--resume",
      e.launch.transcriptPath ?? e.launch.sessionId,
      ...LYe(e.launch.flagArgs),
    ]);
  return T8(LYe(e.launch.args));
}
function $uc(e, t, n, r, o) {
  let s = {
      ...process.env,
    },
    i = {
      ...s,
      ...(n && {
        CLAUDE_BG_AUTH_SNAPSHOT_PATH: n,
      }),
      ...(Vt() === "windows" && {
        CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT: "1",
      }),
      ...e.env,
      CLAUDE_CODE_SESSION_KIND: "bg",
      CLAUDE_BG_BACKEND: "daemon",
      CLAUDE_ENABLE_STREAM_WATCHDOG: "1",
      CLAUDE_BG_SOURCE: e.source,
      CLAUDE_JOB_DIR: t,
      CLAUDE_CODE_SESSION_NAME: e.seed?.name || e.seed?.intent || e.short,
      CLAUDE_BG_RENDEZVOUS_SOCK: r,
      FORCE_COLOR: "3",
      COLORTERM: "truecolor",
      BROWSER: "true",
    };
  if (process.env.CLAUDE_CONFIG_DIR) i.CLAUDE_CONFIG_DIR = process.env.CLAUDE_CONFIG_DIR;
  if (e.isolation === "worktree") i.CLAUDE_BG_ISOLATION = "worktree";
  for (let a of i9o) if (!e.env?.[a]) delete i[a];
  for (let a of a9o) if (!e.env?.[a]) delete i[a];
  for (let a of Object.keys(i)) if (jUt.some((l) => a.startsWith(l)) && !e.env?.[a]) delete i[a];
  if (l9o(s)) {
    for (let l of FUt) delete i[l];
    let a = s.CLAUDE_CODE_HOST_AUTH_ENV_VAR;
    if (a) delete i[a];
  } else if (s.ANTHROPIC_BASE_URL) delete i.ANTHROPIC_AUTH_TOKEN;
  if (o) ((i.CLAUDE_BG_RV_AUTH = o.rvAuth), (i.CLAUDE_BG_PTY_AUTH = o.ptyAuth));
  if (n) delete i.CLAUDE_CODE_OAUTH_TOKEN;
  if (e.launch.mode === "exec") {
    for (let a of Object.keys(i))
      if (
        (a.startsWith("CLAUDE_") &&
          a !== "CLAUDE_JOB_DIR" &&
          a !== "CLAUDE_CONFIG_DIR" &&
          a !== "CLAUDE_BG_PTY_AUTH") ||
        a.startsWith("OTEL_")
      )
        delete i[a];
    (delete i.BROWSER, (i.CLAUDE_PTY_HOST_EXEC = "1"));
  }
  return i;
}
async function o9o(e, t) {
  if (!t || Vt() !== "macos") return;
  let n = q7t(e);
  try {
    return (
      await Nz.mkdir(W7t(), {
        recursive: !0,
        mode: 448,
      }),
      await Nz.writeFile(n, JSON.stringify(t), {
        mode: 384,
      }),
      n
    );
  } catch (r) {
    T(`writeAuthSnapshot failed: ${be(r)}`, {
      level: "warn",
    });
    return;
  }
}
async function s9o(e, t) {
  if (Vt() === "windows") return;
  let n = V7t(e);
  try {
    return (
      await Nz.mkdir(W7t(), {
        recursive: !0,
        mode: 448,
      }),
      await Nz.writeFile(n, JSON.stringify(t), {
        mode: 384,
      }),
      n
    );
  } catch (r) {
    T(`writeSocketTokensFile failed: ${be(r)}`, {
      level: "warn",
    });
    return;
  }
}
function l9o(e) {
  return (
    !!e.ANTHROPIC_UNIX_SOCKET ||
    ut(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) ||
    !!e.CLAUDE_CODE_HOST_AUTH_ENV_VAR
  );
}
function Ouc(e) {
  return e.kind === "retiring"
    ? `retiring:${e.reason}`
    : e.kind === "retired"
      ? `retired:${e.outcome}`
      : e.kind;
}
function aim(e, t) {
  if (e.kind === "retired") return !1;
  switch (t.kind) {
    case "spawning":
      return e.kind === "upgrading" || e.kind === "running";
    case "running":
      return e.kind === "spawning";
    case "upgrading":
      return e.kind === "running";
    case "retiring":
      return !0;
    case "retired":
      return !0;
  }
}
class Oz {
  dispatch;
  spawnPty;
  getAuthSnapshot;
  via;
  record;
  onStream = Mi();
  onState = Mi();
  onSettle = Mi();
  onRepaintDone = Mi();
  attachers = new Map();
  lastInputAttacher;
  pty;
  procStart;
  ptyCols = 200;
  ptyRows = 50;
  decModes = gQt();
  execTracker;
  execLastLine;
  offData;
  offExit;
  ring = [];
  ringBytes = 0;
  ringSpawnMark = 0;
  attempt = 0;
  lastSpawnAt = 0;
  fastCrashStreak = 0;
  lastExitCause;
  backoffTimer = null;
  pidPoll = null;
  rv;
  rvSockPath;
  ptySockPath;
  rvAuth = n9o.randomBytes(16).toString("hex");
  ptyAuth = n9o.randomBytes(16).toString("hex");
  unverifiedSock;
  phase = {
    kind: "spawning",
  };
  workerReady = !1;
  resizeDeferred = !1;
  lastInputAt;
  deleteJobDirOnSettle = !1;
  get shouldDeleteJobDir() {
    return this.deleteJobDirOnSettle;
  }
  adoptedAt;
  lastRvHeartbeat;
  stalledLogged = !1;
  lastCheckPidAt = Date.now();
  replyChain = Promise.resolve();
  killOutcome = "killed";
  get isKilling() {
    return this.phase.kind === "retiring" && this.phase.reason === "reap";
  }
  get isRetiring() {
    return this.phase.kind === "retiring" && this.phase.reason === "grace";
  }
  get isBooting() {
    return !this.record.outcome && (this.phase.kind === "upgrading" || !this.workerReady);
  }
  get isUnverified() {
    return this.unverifiedSock !== void 0;
  }
  getPhase() {
    return this.phase;
  }
  get isTransitioning() {
    return this.phase.kind !== "running" || !this.pty || this.record.pid === 0;
  }
  get isDetached() {
    return this.phase.kind === "retiring" && this.phase.reason === "stop";
  }
  transitionTo(e) {
    if (!aim(this.phase, e))
      return (
        T(
          `[bg] illegal worker-phase transition ${Ouc(this.phase)} \u2192 ${Ouc(e)} for ${this.record.short}`,
          {
            level: "warn",
          },
        ),
        G("tengu_bg_phase_illegal", {}),
        !1
      );
    return ((this.phase = e), !0);
  }
  shutdownWorker() {
    let e =
      this.rv?.send({
        type: "shutdown",
      }) ?? !1;
    if (!e) this.sigtermWorker();
    else
      setTimeout(
        (t) => {
          let n = t.phase;
          if (
            (n.kind === "upgrading" || (n.kind === "retiring" && n.reason === "grace")) &&
            !t.record.outcome
          )
            t.sigtermWorker();
        },
        5000,
        this,
      ).unref();
    return e;
  }
  async respawnIfIdleStale(e, t = "sweep") {
    if (this.dispatch.launch.mode === "exec")
      return {
        respawned: !1,
        reason: "not-stale",
      };
    if (this.isTransitioning)
      return {
        respawned: !1,
        reason: "in-progress",
      };
    if (this.record.outcome)
      return {
        respawned: !1,
        reason: "no-state",
      };
    if (this.attachers.size > 0)
      return {
        respawned: !1,
        reason: "attached",
      };
    if (
      !this.record.cliVersion ||
      this.record.cliVersion ===
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION
    )
      return {
        respawned: !1,
        reason: "not-stale",
      };
    if (t !== "attach" && this.lastInputAt && Date.now() - this.lastInputAt < iim)
      return {
        respawned: !1,
        reason: "busy",
      };
    let n = Date.now(),
      r = await zi(_c(this.dispatch.short));
    if (this.isTransitioning)
      return {
        respawned: !1,
        reason: "in-progress",
      };
    if (this.record.outcome)
      return {
        respawned: !1,
        reason: "no-state",
      };
    if (this.attachers.size > 0)
      return {
        respawned: !1,
        reason: "attached",
      };
    if (this.lastInputAt && this.lastInputAt >= n)
      return {
        respawned: !1,
        reason: "busy",
      };
    if (!r)
      return {
        respawned: !1,
        reason: "no-state",
      };
    if (Vh(r) && t === "sweep" && !e?.has(this.dispatch.short))
      return {
        respawned: !1,
        reason: "settled",
      };
    if (!Vh(r) && r.tempo !== "idle")
      return {
        respawned: !1,
        reason: "busy",
      };
    let o = r.inFlight?.kinds ?? [],
      s = Vh(r) && o.length > 0 && o.every((i) => Duc.includes(i));
    if (
      (r.inFlight?.queued ?? 0) > 0 ||
      ((r.inFlight?.tasks ?? 0) > 0 && !s) ||
      o.includes("session_cron")
    )
      return {
        respawned: !1,
        reason: "inflight",
      };
    if (
      !this.transitionTo({
        kind: "upgrading",
      })
    )
      return {
        respawned: !1,
        reason: "in-progress",
      };
    return (
      this.onState.emit({
        pid: this.record.pid,
      }),
      G("tengu_bg_respawn_stale", {
        short: this.dispatch.short,
        rvSent: this.shutdownWorker(),
        trigger: $e(t),
      }),
      {
        respawned: !0,
      }
    );
  }
  async retireIfSettled(e, t, n = e) {
    if (this.isTransitioning)
      return {
        retired: !1,
        reason: "in-progress",
      };
    if (this.record.outcome)
      return {
        retired: !1,
        reason: "no-state",
      };
    if (this.attachers.size > 0)
      return {
        retired: !1,
        reason: "attached",
      };
    if (t?.has(this.dispatch.short))
      return {
        retired: !1,
        reason: "pinned",
      };
    if (this.adoptedAt && Date.now() - this.adoptedAt < oim)
      return {
        retired: !1,
        reason: "recent-adopt",
      };
    if (this.lastInputAt && Date.now() - this.lastInputAt < e)
      return {
        retired: !1,
        reason: "recent-input",
      };
    let r = await zi(_c(this.dispatch.short));
    if (this.isTransitioning || this.attachers.size > 0)
      return {
        retired: !1,
        reason: "in-progress",
      };
    if (this.lastInputAt && Date.now() - this.lastInputAt < e)
      return {
        retired: !1,
        reason: "recent-input",
      };
    if (!r) {
      if (this.dispatch.source === "spare" && Date.now() - this.dispatch.createdAt > e) {
        if (
          !this.transitionTo({
            kind: "retiring",
            reason: "grace",
          })
        )
          return {
            retired: !1,
            reason: "in-progress",
          };
        return (
          G("tengu_bg_retired", {
            short: this.dispatch.short,
            rvSent: this.shutdownWorker(),
            settledForMs: Date.now() - this.dispatch.createdAt,
            state: We("stale-spare"),
          }),
          {
            retired: !0,
          }
        );
      }
      return {
        retired: !1,
        reason: "no-state",
      };
    }
    if (
      this.dispatch.source !== "shell" &&
      !r.name &&
      !r.intent &&
      !r.worktreePath &&
      r.template === "bg" &&
      r.state === "working" &&
      r.tempo === "blocked"
    ) {
      let c = Date.now() - Date.parse(r.createdAt);
      if (c < sim)
        return {
          retired: !1,
          reason: "empty-idle-grace",
        };
      if (
        !this.transitionTo({
          kind: "retiring",
          reason: "grace",
        })
      )
        return {
          retired: !1,
          reason: "in-progress",
        };
      return (
        (this.deleteJobDirOnSettle = !0),
        G("tengu_bg_retired", {
          short: this.dispatch.short,
          rvSent: this.shutdownWorker(),
          settledForMs: c,
          state: We("empty-idle"),
        }),
        {
          retired: !0,
        }
      );
    }
    if (
      !(
        Vh(r) ||
        (this.dispatch.launch.mode !== "exec" &&
          (r.tempo === "idle" || (r.state === "blocked" && r.tempo === "blocked")))
      )
    )
      return {
        retired: !1,
        reason: "not-settled",
      };
    let s = r.inFlight?.kinds ?? [],
      i = Vh(r) && s.length > 0 && s.every((c) => Duc.includes(c));
    if ((r.inFlight?.queued ?? 1) > 0 || ((r.inFlight?.tasks ?? 1) > 0 && !i))
      return {
        retired: !1,
        reason: "inflight",
      };
    if (s.includes("session_cron"))
      return {
        retired: !1,
        reason: "session-cron",
      };
    if (r.routine)
      return {
        retired: !1,
        reason: "routine",
      };
    let a = r.bridgeSessionId ? Math.max(e, n) : e,
      l = r.updatedAt && Date.now() - Date.parse(r.updatedAt);
    if (!l || l < a)
      return {
        retired: !1,
        reason: "grace",
      };
    if (
      !this.transitionTo({
        kind: "retiring",
        reason: "grace",
      })
    )
      return {
        retired: !1,
        reason: "in-progress",
      };
    return (
      G("tengu_bg_retired", {
        short: this.dispatch.short,
        rvSent: this.shutdownWorker(),
        settledForMs: l,
        bridged: !!r.bridgeSessionId,
        detritusOnly: i,
        state: r.state,
      }),
      {
        retired: !0,
      }
    );
  }
  sigtermWorker() {
    try {
      this.pty?.kill("SIGTERM");
    } catch {}
  }
  constructor(e, t, n, r, o) {
    this.dispatch = e;
    this.spawnPty = t;
    this.getAuthSnapshot = n;
    this.via = r;
    if (
      ((this.record = {
        short: e.short,
        nonce: e.nonce,
        sessionId: e.sessionId,
        pid: 0,
        attempt: 0,
        startedAt: Date.now(),
        createdAt: e.createdAt,
        cwd: e.cwd,
        backend: "daemon",
        tempo: "active",
        state: "starting",
        detail: "",
        intent: e.seed?.intent ?? "",
        name: e.seed?.name,
        agent: e.agent,
        routine: e.routine,
        worktreePath: e.worktree?.path,
        cliVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
        source: e.source,
        ...o,
      }),
      e.cols)
    )
      this.ptyCols = e.cols;
    if (e.rows) this.ptyRows = e.rows;
  }
  static spawn(e, t, n, r) {
    let o = new Oz(e, t ?? r9o(), n, "cold");
    if (r?.afterUpgrade)
      return (
        (o.attempt = 1),
        o
          .buildBridgeReattachEnvFromState()
          .then((s) => o.doSpawn(s, !0))
          .catch(ke),
        o
      );
    return (o.doSpawn(e.reattachEnv).catch(ke), o);
  }
  static claim(e, t) {
    let n = new Oz(e, t.spawnPty, t.getAuthSnapshot, "spare", {
      pid: t.pid,
      attempt: 1,
      state: "running",
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
    });
    if (
      ((n.attempt = 1), (n.ptySockPath = t.ptySockPath), (n.rvSockPath = vEt(e.short)), t.ptyAuth)
    )
      n.ptyAuth = t.ptyAuth;
    return (
      n.wirePty(Ocr(t.ptySockPath, t.pid, void 0, e.short, void 0, n.ptyAuth)),
      n.resize(e.cols ?? 200, e.rows ?? 50),
      n.connectRv(),
      KR(t.pid, {
        skipCache: !0,
      }).then((r) => {
        if (n.record.pid !== t.pid || n.isDetached || n.record.outcome) return;
        if (r) n.procStart = r;
        n.patch({
          pid: t.pid,
        });
      }),
      n
    );
  }
  socketAuth() {
    return {
      rvAuth: this.rvAuth,
      ptyAuth: this.ptyAuth,
    };
  }
  static buildClaimFrame(e, t, n) {
    let r = _c(e.short),
      o = $uc(e, r, t, vEt(e.short), n);
    if ((delete o.CLAUDE_BG_PTY_AUTH, e.reattachEnv)) Object.assign(o, e.reattachEnv);
    let s = Muc(e, 1, !1, e.sessionId, void 0, e.respawnFlags);
    return {
      env: o,
      argv: s,
    };
  }
  static async adopt(e, t, n, r) {
    try {
      process.kill(t.pid, 0);
    } catch (i) {
      let a = on(i);
      if (a === "ESRCH" || a === "EPERM") return null;
    }
    let o = await KR(t.pid);
    if (o && t.procStart !== o) return null;
    let s = new Oz(t.dispatch, n, r, "adopted", {
      pid: t.pid,
      attempt: t.attempt,
      startedAt: t.startedAt,
      messagingSock: t.messagingSock,
      state: "adopted",
      detail: "adopted from previous supervisor",
      cliVersion: t.cliVersion,
      ...(t.ptySock
        ? {}
        : {
            legacy: !0,
          }),
    });
    if (
      ((s.attempt = t.attempt),
      (s.procStart = t.procStart),
      (s.workerReady = !0),
      (s.adoptedAt = Date.now()),
      (s.rvSockPath = t.rendezvousSock),
      (s.ptySockPath = t.ptySock),
      t.rvAuth)
    )
      s.rvAuth = t.rvAuth;
    if (t.ptyAuth) s.ptyAuth = t.ptyAuth;
    if (s.dispatch.launch.mode === "exec")
      ((s.execTracker = e9o(_c(s.dispatch.short))), (s.workerReady = !0));
    if (t.ptySock)
      (s.wirePty(Ocr(t.ptySock, t.pid, s.procStart, s.dispatch.short, void 0, s.ptyAuth)),
        (s.ptyCols = 0),
        s.seedFocus(!1));
    if (t.decModes) s.decModes.seed(t.decModes);
    if ((s.connectRv(), t.pendingRespawn === "upgrade"))
      (s.transitionTo({
        kind: "upgrading",
      }),
        setTimeout(
          (i) => {
            if (i.phase.kind === "upgrading" && !i.record.outcome) i.sigtermWorker();
          },
          5000,
          s,
        ).unref());
    return s;
  }
  static unverified(e, t) {
    let n = new Oz(t.dispatch, void 0, void 0, "adopted", {
      pid: t.pid,
      attempt: t.attempt,
      startedAt: t.startedAt,
      messagingSock: t.messagingSock,
      state: "adopted",
      detail: "adopted (pid unverifiable; tracking via pty.sock)",
      cliVersion: t.cliVersion,
    });
    if (
      ((n.attempt = t.attempt),
      (n.procStart = t.procStart),
      (n.rvSockPath = t.rendezvousSock),
      (n.ptySockPath = t.ptySock),
      t.rvAuth)
    )
      n.rvAuth = t.rvAuth;
    if (t.ptyAuth) n.ptyAuth = t.ptyAuth;
    return (
      (n.unverifiedSock = t.ptySock),
      (n.lastInputAt = Date.now()),
      (n.pidPoll = setInterval(
        (r) => {
          if (r.record.outcome || !r.unverifiedSock) return;
          Har(r.unverifiedSock).then((o) => {
            if (o || r.record.outcome || r.phase.kind !== "spawning") return;
            r.settle("crashed");
          });
        },
        t9o,
        n,
      )),
      n.pidPoll.unref(),
      G("tengu_bg_adopt_unverified", {
        short: e,
      }),
      n
    );
  }
  tail(e) {
    return e > 0 ? this.ring.slice(-e) : [];
  }
  ringSnapshot() {
    return this.ring;
  }
  preInitErrorTail() {
    let e = Ja(this.ring.slice(this.ringSpawnMark).join("")).replace(/\s+/g, " ").trim();
    if (!e) return;
    return e.length > Luc ? `\u2026${e.slice(-Luc)}` : e;
  }
  decModeSnapshot() {
    return this.decModes.snapshot();
  }
  write(e) {
    ((this.lastInputAt = Date.now()), this.pty?.write(e));
  }
  noteActivity() {
    this.lastInputAt = Date.now();
  }
  shiftGraceClocksForward(e) {
    if (e <= 0) return;
    if (this.adoptedAt !== void 0) this.adoptedAt += e;
    if (this.lastInputAt !== void 0) this.lastInputAt += e;
  }
  seedFocus(e) {
    if (this.dispatch.launch.mode === "exec") return;
    this.pty?.write(e ? X3e : Nke);
  }
  resize(e, t) {
    if (((this.ptyCols = e), (this.ptyRows = t), Vt() === "windows" && !this.workerReady)) {
      this.resizeDeferred = !0;
      return;
    }
    try {
      this.pty?.resize(e, t);
    } catch {}
  }
  signalPtyPgrp() {
    if (Vt() === "windows" || !this.record.pid) return;
    setTimeout(
      (e) => {
        try {
          process.kill(-e, "SIGWINCH");
        } catch {}
      },
      15,
      this.record.pid,
    );
  }
  resizeForRepaint(e, t) {
    if (e !== this.ptyCols || t !== this.ptyRows)
      return (
        this.resize(e, t),
        this.signalPtyPgrp(),
        this.rv?.send({
          type: "repaint",
        }),
        () => {}
      );
    let n =
        this.rv?.send({
          type: "repaint",
        }) === !0,
      r = () => {},
      o = setTimeout(
        (s, i) => {
          if ((r(), this.ptyCols !== s || this.ptyRows !== i)) return;
          let a = Math.max(2, s - 1);
          (this.resize(a, i),
            this.signalPtyPgrp(),
            setTimeout(
              (l, c, u) => {
                if (this.ptyCols === u && this.ptyRows === c)
                  (this.resize(l, c), this.signalPtyPgrp());
              },
              30,
              s,
              i,
              a,
            ));
        },
        n ? 50 : 0,
        e,
        t,
      );
    if (n)
      r = this.onRepaintDone.subscribe(() => {
        (r(), clearTimeout(o));
      });
    return () => {
      (r(), clearTimeout(o));
    };
  }
  rosterEntry() {
    return {
      pid: this.record.pid,
      procStart: this.procStart,
      sessionId: this.record.sessionId,
      rendezvousSock: this.rvSockPath ?? vEt(this.dispatch.short),
      ptySock: this.record.legacy ? void 0 : (this.ptySockPath ?? dR(this.dispatch.short)),
      messagingSock: this.record.messagingSock,
      cliVersion: this.record.cliVersion,
      startedAt: this.record.startedAt,
      attempt: this.attempt,
      cwd: this.dispatch.cwd,
      worktreePath: this.dispatch.worktree?.path,
      dispatch: this.cappedDispatch(),
      pendingRespawn: this.phase.kind === "upgrading" ? "upgrade" : void 0,
      decModes: this.decModes.snapshot(),
      rvAuth: this.rvAuth,
      ptyAuth: this.ptyAuth,
    };
  }
  cappedDispatch() {
    return JSON.parse(
      JSON.stringify(this.dispatch, (e, t) =>
        e === "reattachEnv" || e === "attachStallRespawns"
          ? void 0
          : typeof t === "string" && t.length > Puc
            ? t.slice(0, Puc)
            : t,
      ),
    );
  }
  async reply(e) {
    ((this.lastInputAt = Date.now()), (this.lastInputAttacher = void 0));
    let t = await zi(_c(this.dispatch.short));
    if (
      (!t || (t.tempo ?? this.record.tempo) === "blocked") &&
      this.rv?.send({
        type: "reply",
        text: e,
      })
    )
      return !0;
    if (this.pty) {
      let n = this.dispatch.launch.mode !== "exec";
      return (
        (this.replyChain = this.replyChain.then(
          () =>
            new Promise((r) => {
              (this.pty?.write(n ? `\x1B[200~${e}\x1B[201~` : e),
                setTimeout(
                  (o) => {
                    (this.pty?.write("\r"), o());
                  },
                  10,
                  r,
                ));
            }),
        )),
        !0
      );
    }
    return (
      this.rv?.send({
        type: "reply",
        text: e,
      }) ?? !1
    );
  }
  sendAttacherCaps(e) {
    return (
      this.rv?.send({
        type: "attacher-caps",
        caps: e,
      }) ?? !1
    );
  }
  kill(e = "SIGTERM", t = "killed", n) {
    if (this.phase.kind === "retired") return;
    if (((this.killOutcome = t), n))
      this.patch({
        detail: n,
      });
    if (
      (this.transitionTo({
        kind: "retiring",
        reason: "reap",
      }),
      this.backoffTimer)
    )
      (clearTimeout(this.backoffTimer), (this.backoffTimer = null));
    if (this.unverifiedSock) {
      DYe(this.unverifiedSock).finally(() => this.settle(this.killOutcome));
      return;
    }
    if (this.pty)
      try {
        this.pty.kill(e);
      } catch {}
    else if (this.record.pid && !this.pidRecycled())
      try {
        process.kill(-this.record.pid, e);
      } catch {
        try {
          process.kill(this.record.pid, e);
        } catch {}
      }
    if (!this.pty) this.settle(this.killOutcome);
  }
  stop() {
    if (this.phase.kind === "retiring" && this.phase.reason === "reap")
      this.settle(this.killOutcome);
    else if (this.phase.kind === "retiring" && this.phase.reason === "grace") this.settle("done");
    else if (this.phase.kind !== "retired")
      this.transitionTo({
        kind: "retiring",
        reason: "stop",
      });
    if (this.backoffTimer) (clearTimeout(this.backoffTimer), (this.backoffTimer = null));
    (this.clearLiveness(),
      this.offData?.dispose(),
      this.offExit?.dispose(),
      this.execTracker?.dispose(),
      (this.execTracker = void 0),
      this.pty?.dispose(),
      (this.pty = void 0));
  }
  async doSpawn(e, t = !1) {
    (this.attempt++,
      (this.workerReady = !1),
      (this.resizeDeferred = !1),
      (this.ringSpawnMark = this.ring.length),
      (this.lastSpawnAt = Date.now()));
    let n = this.dispatch,
      r = _c(n.short);
    await Nz.mkdir(Nuc.join(r, "tmp"), {
      recursive: !0,
    }).catch(() => {});
    let o = n.launch.mode === "exec" ? void 0 : await o9o(n.short, this.getAuthSnapshot?.()),
      s = await s9o(
        n.short,
        n.launch.mode === "exec"
          ? {
              ptyAuth: this.socketAuth().ptyAuth,
            }
          : this.socketAuth(),
      ),
      i = n.launch.mode === "resume" ? n.launch.sessionId : void 0,
      a = !1,
      l = !1,
      c = n.sessionId,
      u,
      d = n.respawnFlags,
      p = n.cwd;
    if (this.attempt > 1) {
      let b = await zi(r);
      ((c = b?.resumeSessionId ?? n.sessionId),
        (d = b?.respawnFlags ?? n.respawnFlags),
        (p = b?.cwd ?? n.cwd));
      let _ = await xae(c, p, b?.linkScanPath);
      if (((a = _.hasMessages), a)) u = _.path;
      if (((l = !a && i !== void 0 && !(await xae(i, p, void 0)).hasMessages), !a))
        await Nz.unlink(_.path).catch(() => {});
    }
    if (this.phase.kind === "retiring" || this.phase.kind === "retired" || this.record.outcome) {
      if (s) Nz.unlink(s).catch(() => {});
      return;
    }
    if (l)
      return (
        this.patch({
          state: "crashed",
          detail: `source session ${i} not found`,
        }),
        this.settle("crashed")
      );
    if (!this.spawnPty)
      return (
        this.patch({
          state: "crashed",
          detail: "Bun.Terminal unavailable (running under Node?)",
        }),
        G("tengu_bg_pty_unavailable", {
          short: this.dispatch.short,
        }),
        this.settle("crashed")
      );
    let f = Muc(n, this.attempt, a, c, u, d),
      m = $uc(n, r, o, this.rvSockPath ?? vEt(n.short), this.socketAuth());
    if (this.attempt > 1 && a && !t) m.CLAUDE_CODE_RESUME_INTERRUPTED_TURN = "1";
    if (this.attempt > 1 && !a && c !== n.sessionId) m.CLAUDE_BG_POST_CLEAR_RESPAWN = "1";
    if (e) Object.assign(m, e);
    if (s)
      (delete m.CLAUDE_BG_RV_AUTH,
        delete m.CLAUDE_BG_PTY_AUTH,
        (m.CLAUDE_BG_SOCKET_TOKENS_PATH = s));
    let g = this.ptyCols || (n.cols ?? 200),
      h = this.ptyRows || (n.rows ?? 50),
      y;
    try {
      let { cmd: b, prefixArgs: _ } =
        n.launch.mode === "exec"
          ? {
              cmd: tv(n.launch.cmd),
              prefixArgs: [],
            }
          : CF({
              pinToCurrentBinary: !0,
            });
      y = this.spawnPty(b, [..._, ...f], {
        cols: g,
        rows: h,
        cwd: p,
        env: m,
        ptySock: this.ptySockPath ?? dR(n.short),
        short: n.short,
        ptyAuth: this.ptyAuth,
      });
    } catch (b) {
      if (wn(b)) {
        let _ = await Nz.access(p).then(
          () => !0,
          () => !1,
        );
        if (this.record.outcome) return;
        if (!_) return this.settleCwdGone("cold", p);
        let S =
          n.launch.mode === "exec"
            ? `${n.launch.cmd}: command not found`
            : "daemon binary was deleted (upgrade in progress) \u2014 run your command again to use the new version";
        (G("tengu_bg_spawn_binary_gone", {
          short: this.dispatch.short,
          attempt: this.attempt,
        }),
          this.patch({
            state: "crashed",
            detail: S,
          }));
        let A = `\r
\x1B[2m[${S}]\x1B[0m\r
`;
        return (this.pushRing(A), this.onStream.emit(A), this.settle("crashed"));
      }
      return this.scheduleRespawn(be(b));
    }
    if (n.launch.mode === "exec")
      (this.execTracker?.dispose(), (this.execTracker = e9o(r)), (this.workerReady = !0));
    if (Vt() === "windows") Nz.writeFile(IHe(n.short), String(y.pid)).catch(() => {});
    (this.wirePty(y),
      this.rv?.close(),
      (this.rv = void 0),
      (this.lastRvHeartbeat = void 0),
      (this.stalledLogged = !1),
      this.connectRv(),
      this.patch({
        pid: y.pid,
        attempt: this.attempt,
        state: this.attempt > 1 ? "resuming" : "running",
        detail: "",
        cliVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
      }),
      G("tengu_bg_worker_spawn", {
        short: this.dispatch.short,
        attempt: this.attempt,
        source: $e(this.dispatch.source),
        launch_mode: $e(this.dispatch.launch.mode),
      }),
      KR(y.pid, {
        skipCache: !0,
      }).then((b) => {
        if (!b || this.record.pid !== y.pid || this.isDetached || this.record.outcome) return;
        ((this.procStart = b),
          this.patch({
            pid: y.pid,
          }));
      }));
  }
  wirePty(e) {
    ((this.pty = e),
      this.transitionTo({
        kind: "running",
      }),
      (this.decModes = gQt()),
      e.onResume?.(() => {
        this.rv?.send({
          type: "repaint",
        });
      }),
      (this.offData = e.onData((n) => {
        if (this.decModes.feed(n) && this.record.pid)
          this.onState.emit({
            pid: this.record.pid,
          });
        (this.execTracker?.feed(n),
          this.pushRing(n.includes(uz) ? n.replaceAll(uz, "") : n),
          this.onStream.emit(n));
      })));
    let t = !1;
    this.offExit = e.onExit(({ exitCode: n, signal: r }) => {
      if (t) return;
      ((t = !0),
        this.offData?.dispose(),
        (this.execLastLine = this.execTracker?.lastLine),
        this.execTracker?.dispose(),
        (this.execTracker = void 0),
        (this.pty = void 0),
        this.onExit(n, r));
    });
  }
  pushRing(e) {
    if (
      (this.ring.push(e),
      (this.ringBytes += e.length),
      this.ringBytes > c7t * 1.25 && this.ring.length > 1)
    ) {
      let t = 0,
        n = 0;
      while (this.ringBytes - n > c7t && t < this.ring.length - 1)
        ((n += this.ring[t].length), t++);
      (this.ring.splice(0, t),
        (this.ringBytes -= n),
        (this.ringSpawnMark = Math.max(0, this.ringSpawnMark - t)));
    }
  }
  patch(e) {
    (Object.assign(this.record, e), this.onState.emit(e));
  }
  onExit(e, t) {
    if (this.isDetached) return;
    if (this.phase.kind === "retired") return;
    let n = this.lastSpawnAt ? Date.now() - this.lastSpawnAt : void 0,
      r = n !== void 0 && n < Ruc && e !== 0;
    if (r) this.fastCrashStreak++;
    else this.fastCrashStreak = 0;
    let o = this.fastCrashStreak >= 3,
      s = this.workerReady ? void 0 : this.preInitErrorTail(),
      i = e !== 0 ? FEr(_c(this.dispatch.short)) : void 0,
      a = r && !!i && i === this.lastExitCause;
    this.lastExitCause = r ? i : void 0;
    let l = s ? ` \u2014 ${s}` : i ? ` \u2014 ${i}` : "",
      c = this.dispatch.launch.mode === "exec" && (t === "SIGINT" || t === "SIGQUIT"),
      u;
    if (this.phase.kind === "retiring" && this.phase.reason === "reap") u = this.killOutcome;
    else if (this.phase.kind === "retiring" && this.phase.reason === "grace") u = "done";
    else if (this.phase.kind === "upgrading") u = void 0;
    else if (e === 0) u = "done";
    else if (this.dispatch.launch.mode === "exec") u = c ? "killed" : "crashed";
    else if ((!this.workerReady && (this.attempt >= 2 || s)) || o || a || this.attempt >= kuc)
      u = "crashed";
    if (
      (G("tengu_bg_worker_exit", {
        short: this.dispatch.short,
        code: e ?? void 0,
        signal: t,
        attempt: this.attempt,
        procUptimeMs: n,
        source: $e(this.dispatch.source),
        launch_mode: $e(this.dispatch.launch.mode),
        outcome: Oo(u),
        exitCause: i,
      }),
      this.phase.kind === "retiring")
    )
      return this.settle(this.phase.reason === "reap" ? this.killOutcome : "done");
    if (this.phase.kind === "upgrading") {
      (this.transitionTo({
        kind: "spawning",
      }),
        (this.attempt = 1),
        (this.fastCrashStreak = 0),
        (this.lastExitCause = void 0),
        this.patch({
          pid: 0,
          state: "starting",
          detail: "upgrading",
        }),
        (this.procStart = void 0),
        this.buildBridgeReattachEnvFromState()
          .then((p) => this.doSpawn(p, !0))
          .catch(ke));
      return;
    }
    if (e === 0) {
      if (this.dispatch.launch.mode === "exec") {
        if (!this.execLastLine && this.ringBytes > 0)
          G("tengu_bg_exec_no_lastline", {
            ring_bytes: this.ringBytes,
          });
        this.patch({
          detail: this.execLastLine || "(no output)",
        });
      }
      return this.settle("done");
    }
    let d = t ? `${t} (${e})` : `exit ${e}`;
    if (this.dispatch.launch.mode === "exec") {
      let p = this.execLastLine;
      return (
        this.patch({
          state: c ? "stopped" : "crashed",
          detail: p ? `${d} \u2014 ${p}` : `${d}${l}`,
        }),
        this.settle(c ? "killed" : "crashed")
      );
    }
    if (!this.workerReady && i === "spare_postclaim:ENOENT")
      try {
        lTt.accessSync(this.dispatch.cwd);
      } catch {
        return this.settleCwdGone("spare");
      }
    if (!this.workerReady && (this.attempt >= 2 || s))
      return (
        this.patch({
          state: "crashed",
          detail: `${d} before init${l}`,
        }),
        this.settle("crashed")
      );
    if (o || a)
      return (
        this.patch({
          state: "crashed",
          detail: a
            ? `${d} \xD7${this.attempt}${l}`
            : `${d} within ${Ruc / 1000}s of spawn \xD7${this.fastCrashStreak}${l}`,
        }),
        this.settle("crashed")
      );
    this.scheduleRespawn(`${d}${l}`);
  }
  settleCwdGone(e, t = this.dispatch.cwd) {
    let n = `working directory no longer exists: ${t}`;
    (G("tengu_bg_spawn_cwd_gone", {
      short: this.dispatch.short,
      attempt: this.attempt,
      via: $e(e),
    }),
      this.patch({
        state: "crashed",
        detail: n,
      }));
    let r = `\r
\x1B[2m[${n} \u2014 this job cannot be respawned]\x1B[0m\r
`;
    (this.pushRing(r), this.onStream.emit(r), this.settle("crashed"));
  }
  async buildBridgeReattachEnvFromState() {
    let e = await zi(_c(this.dispatch.short)).catch(() => null);
    if (!e) return;
    return W0e(e.bridgeSessionId, e.bridgeSessionSeq, e.bridgeOutboundOnly);
  }
  scheduleRespawn(e) {
    if (this.attempt >= kuc)
      return (
        G("tengu_bg_respawn_exhausted", {
          short: this.dispatch.short,
          attempts: this.attempt,
        }),
        this.patch({
          state: "crashed",
          detail: e,
        }),
        this.settle("crashed")
      );
    if (this.phase.kind === "running")
      this.transitionTo({
        kind: "spawning",
      });
    (this.patch({
      pid: 0,
      state: "crashed",
      detail: `${e}; respawning`,
    }),
      (this.procStart = void 0));
    let t = `\r
\x1B[2m[worker crashed (${e}) \u2014 respawning\u2026]\x1B[0m\r
`;
    (this.pushRing(t),
      this.onStream.emit(t),
      (this.backoffTimer = setTimeout(() => {
        if (
          ((this.backoffTimer = null),
          this.phase.kind !== "retiring" && this.phase.kind !== "retired")
        )
          this.doSpawn().catch(ke);
      }, nim)),
      this.backoffTimer.unref());
  }
  settle(e) {
    if (this.record.outcome) return;
    (G("tengu_bg_settle", {
      short: this.dispatch.short,
      outcome: $e(e),
      uptimeMs: Date.now() - this.record.startedAt,
      attempt: this.attempt,
    }),
      this.transitionTo({
        kind: "retired",
        outcome: e,
      }),
      this.clearLiveness(),
      this.patch({
        outcome: e,
        settledAt: Date.now(),
        tempo: "idle",
      }),
      this.onSettle.emit(e));
  }
  connectRv() {
    if (this.rv || this.isDetached || this.record.outcome) return;
    if (this.dispatch.launch.mode === "exec") {
      this.startPidPoll();
      return;
    }
    ((this.rv = Cuc(
      this.rvSockPath ?? vEt(this.dispatch.short),
      (e) => {
        if (e.type === "heartbeat") this.lastRvHeartbeat = Date.now();
        else if (e.type === "reply-rejected")
          (T(
            `[bg] worker ${this.dispatch.short} rejected reply: rv auth token mismatch \u2014 respawn the worker to re-key`,
            {
              level: "warn",
            },
          ),
            G("tengu_bg_rv_reply_rejected", {}));
        else if (e.type === "done") this.settle(e.outcome);
        else if (e.type === "state") this.patch(e.patch);
        else if (e.type === "detach-request") {
          let t = kfe(e.msg),
            n = this.attachers.get(this.lastInputAttacher);
          if (!e.broadcast && n) n.deliver(t);
          else if (this.attachers.size > 0) for (let r of this.attachers.values()) r.deliver(t);
          else this.onStream.emit(t);
        } else if (e.type === "repaint-done") this.onRepaintDone.emit();
      },
      () => void this.checkPid(),
      () => {
        if (((this.workerReady = !0), this.resizeDeferred))
          ((this.resizeDeferred = !1), this.resize(this.ptyCols, this.ptyRows));
        if (this.attachers.size > 0) {
          let e = [...this.attachers.values()].at(-1);
          this.sendAttacherCaps(e.caps ?? null);
        } else this.sendAttacherCaps(null);
      },
      this.rvAuth,
    )),
      this.startPidPoll());
  }
  startPidPoll() {
    if (this.pidPoll) return;
    ((this.lastCheckPidAt = Date.now()),
      (this.pidPoll = setInterval(() => void this.checkPid(!0), t9o)),
      this.pidPoll.unref());
  }
  pidRecycled() {
    if (!this.procStart || !this.record.pid) return !1;
    let e = Hye(this.record.pid);
    return e !== void 0 && e !== this.procStart;
  }
  async pidRecycledAsync() {
    if (!this.procStart || !this.record.pid) return !1;
    let e = await KR(this.record.pid);
    return e !== void 0 && e !== this.procStart;
  }
  pidPollTick = 0;
  async checkPid(e = !1) {
    if (this.record.outcome || !this.record.pid) return;
    let t = Date.now() - this.lastCheckPidAt;
    this.lastCheckPidAt = Date.now();
    let n = t > t9o * 3;
    if (n && this.lastRvHeartbeat !== void 0) this.lastRvHeartbeat = Date.now();
    if (!this.pty)
      try {
        process.kill(this.record.pid, 0);
      } catch (o) {
        let s = on(o);
        if (s === "ESRCH" || s === "EPERM")
          (this.logVanished(!1, e), this.settle(this.isKilling ? "killed" : "crashed"));
        return;
      }
    let r = this.lastRvHeartbeat;
    if (!n && !this.stalledLogged && r !== void 0 && Date.now() - r > rim) {
      let o = await zi(_c(this.dispatch.short));
      if (!this.stalledLogged && (o?.tempo ?? this.record.tempo) === "active")
        ((this.stalledLogged = !0),
          G("tengu_bg_worker_stalled", {
            short: this.dispatch.short,
            sinceMs: Date.now() - r,
          }));
    }
    if (this.pty) return;
    if (e && this.pidPollTick++ % 12 !== 0) return;
    if (await this.pidRecycledAsync()) {
      if (this.record.outcome || this.pty) return;
      (this.logVanished(!0, e), this.settle(this.isKilling ? "killed" : "crashed"));
    }
  }
  logVanished(e, t) {
    if (this.isKilling) return;
    G("tengu_bg_worker_vanished", {
      short: this.dispatch.short,
      recycled: e,
      fromPoll: t,
      uptimeMs: Date.now() - this.record.startedAt,
    });
  }
  clearLiveness() {
    if (this.pidPoll) (clearInterval(this.pidPoll), (this.pidPoll = null));
    (this.rv?.close(),
      (this.rv = void 0),
      (this.lastRvHeartbeat = void 0),
      (this.stalledLogged = !1));
  }
}
var n9o,
  lTt,
  Nz,
  Nuc,
  nim = 1e4,
  kuc = 20,
  Ruc = 5000,
  Luc = 200,
  t9o = 5000,
  rim = 120000,
  oim = 120000,
  sim = 300000,
  Duc,
  iim = 3600000,
  Puc = 4096,
  i9o,
  a9o;
