// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S$
// matched 2.1.88 source: src/tools/BashTool/bashPermissions.ts
// class=partial  jaccard=0.1197  score=0.1861  fileCov=0.2512
// note: low-confidence suggestion: src/tools/BashTool/bashPermissions.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var S$ = E(() => {
  PR();
  kt();
  NB();
  rre();
  sN();
  xRe();
  Xjt();
  Il();
  Lo();
  At();
  ys();
  Yf();
  $I();
  Jbe();
  QH();
  Gy();
  w5e();
  Is();
  lg();
  xue();
  Jt();
  sr();
  sj();
  RN();
  xCl();
  RCl();
  Ago();
  eWt();
  Tjn();
  N6e();
  ZJn = require("fs/promises"), vP = require("path"), eQn = /^[A-Za-z_]\w*=/;
  nQn = new Set(["sh", "bash", "zsh", "fish", "csh", "tcsh", "ksh", "dash", "cmd", "powershell", "pwsh", "env", "xargs", "command", "builtin", "noglob", "nice", "stdbuf", "nohup", "timeout", "time", "watch", "ionice", "chrt", "setsid", "taskset", "strace", "ltrace", "script", "flock", "unshare", "nsenter", "sudo", "doas", "pkexec", "su", "runuser"]);
  ACl = Qjt;
  oPo = kNn, LKt = new Set(["GOEXPERIMENT", "GOOS", "GOARCH", "CGO_ENABLED", "GO111MODULE", "RUST_BACKTRACE", "RUST_LOG", "NODE_ENV", "PYTHONUNBUFFERED", "PYTHONDONTWRITEBYTECODE", "PYTEST_DISABLE_PLUGIN_AUTOLOAD", "PYTEST_DEBUG", "ANTHROPIC_API_KEY", "LANG", "LANGUAGE", "LC_ALL", "LC_CTYPE", "LC_TIME", "CHARSET", "TERM", "COLORTERM", "NO_COLOR", "FORCE_COLOR", "TZ", "LS_COLORS", "LSCOLORS", "GREP_COLOR", "GREP_COLORS", "GCC_COLORS", "TIME_STYLE", "BLOCK_SIZE", "BLOCKSIZE", "COLUMNS", "LINES", "CLICOLOR", "CLICOLOR_FORCE", "CI", "DEBIAN_FRONTEND", "GIT_TERMINAL_PROMPT"]);
  DCl = /^[A-Za-z0-9_.+-]+$/;
  JHf = {
    env: new Set(["-u", "-C", "--unset", "--chdir"]),
    sudo: new Set(["-u", "-g", "-U", "-C", "-D", "-h", "-p", "-r", "-R", "-t", "-T", "--user", "--group", "--other-user", "--close-from", "--chdir", "--host", "--prompt", "--role", "--chroot", "--type", "--command-timeout", "-a", "--auth-type"]),
    doas: new Set(["-a", "-u", "-C"]),
    pkexec: new Set(["--user"]),
    watch: new Set(["-n", "--interval", "--equexit"]),
    ionice: new Set(["-c", "-n", "-p", "-P", "-u", "--class", "--classdata", "--pid", "--pgid", "--uid"]),
    setsid: new Set([]),
    taskset: new Set(["-c", "--cpu-list"]),
    chrt: new Set(["-p", "--pid", "-T", "-P", "-D", "--sched-runtime", "--sched-period", "--sched-deadline"]),
    strace: new Set(["-e", "-o", "-p", "-s", "-E", "-P", "-S", "-a", "-b", "-I", "-u", "-X", "-O", "-U", "--output", "--trace", "--expr", "--attach", "--string-limit", "--env", "--trace-path", "--columns", "--user", "--interruptible", "--detach-on", "--const-print-style", "--summary-sort-by", "--summary-syscall-overhead", "--summary-columns"]),
    ltrace: new Set(["-a", "-A", "-e", "-l", "-n", "-o", "-p", "-s", "-u", "-x", "-D", "-F", "--align", "--config", "--debug", "--indent", "--library", "--output", "--string-max", "-w", "--where"]),
    flock: new Set(["-w", "-E", "--timeout", "--wait", "--conflict-exit-code"]),
    script: new Set(["-E", "-T", "-m", "-o", "-O", "-B", "-I", "--echo", "--log-timing", "--logging-format", "--output-limit", "--log-out", "--log-io", "--log-in"]),
    unshare: new Set(["-R", "-w", "-S", "-G", "--setuid", "--setgid", "--root", "--wd", "--propagation", "--setgroups", "--monotonic", "--boottime"]),
    nsenter: new Set(["-t", "-S", "-G", "--target", "--setuid", "--setgid"]),
    exec: new Set(["-a"]),
    command: new Set([]),
    builtin: new Set([]),
    noglob: new Set([]),
    nocorrect: new Set([])
  }, QHf = {
    env: new Set(["-S", "--split-string"]),
    flock: new Set(["-c", "--command"]),
    script: new Set(["-c", "--command"])
  }, ZHf = {
    chrt: e => /^\d+$/.test(e),
    taskset: e => /^(0x[\da-f]+|\d+)$/i.test(e),
    flock: () => !0,
    script: () => !0
  }, PCl = /^[A-Za-z_][A-Za-z0-9_]*\+?=/;
  nTf = new Set(["printf", "test", "read", "wait", "unset", ...I2t]), OCl = new Set(["time", "nohup", "timeout", "nice", "stdbuf", "env", "command", "builtin", "noglob"]);
  KCl = new Map();
});
function fTf(e, t) {
  let n = e.reason === "error" ? e.isTimeout ? "timeout" : "api_error" : e.reason;
  return {
    reason: e.reason,
    cause: n,
    attempts: e.attempts,
    status: e.status,
    detail: e.detail,
    durationMs: t
  };
}
function aPo(e, t, n) {
  let r = PKt(e),
    o = `${r}:${t}`;
  if (xze.has(o)) return;
  xze.add(o), G("tengu_precomputed_compact_arm_gated", {
    reason: $e(t),
    querySource: n
  }), T(`precomputed compact: arm gated (${r}, ${t})`);
}
function PKt(e) {
  return e ?? "main";
}
function aQn() {
  if (!pC()) return !1;
  if (!$X()) return !1;
  if (!at("tengu_sepia_moth", !1)) return !1;
  return wc("precomputeCompactionEnabled", !0).value;
}
function lQn(e) {
  return Gct(e);
}
function mTf(e, t) {
  return {
    ...e,
    abortController: t,
    onCompactEvent: void 0
  };
}
function lPo(e) {
  if (e.autocompactRan) return !1;
  if (e.isPreFirstCompactFork) return !1;
  if (e.hasAttemptedReactiveCompact) return !1;
  if (e.lastTransitionReason === "precomputed_compact_swap") return !1;
  if (!aQn()) return !1;
  return _ia(e.contextTokens, e.model, e.autoCompactWindow, e.querySource);
}
function cPo(e) {
  let {
      querySource: t,
      messages: n,
      cacheSafeParams: r,
      armTrigger: o = "estimate",
      estimateGapTokens: s
    } = e,
    {
      toolUseContext: i
    } = r,
    a = PKt(i.agentId);
  if (!aQn()) return !1;
  if (lQn(t)) return !1;
  if ((DKt.get(a) ?? 0) >= JCl) return !1;
  let l = Eq.get(a);
  if (l !== void 0 && l.status !== "failed") return !1;
  let c = n.at(-1)?.uuid;
  if (c === void 0) return !1;
  let u = t === "sdk" ? e.promptScan : void 0;
  if (u !== void 0) {
    let {
        userPromptCount: A,
        historyRewritten: v
      } = u,
      C = A <= 1 && !v ? "sdk_single_prompt_gate" : void 0;
    if (C !== void 0) {
      let x = `${a}:${C}`;
      if (!xze.has(x)) xze.add(x), G("tengu_precomputed_compact_arm_gated", {
        reason: $e(C),
        querySource: We("sdk"),
        userPromptCount: A,
        preCompactTokens: eA(n)
      }), T(`precomputed compact: arm gated (${a}, ${C}, userPrompts ${A})`);
      return !1;
    }
  }
  let d = new AbortController(),
    p = performance.now(),
    f = eA(n),
    m = mTf(i, d),
    g = {
      ...r,
      toolUseContext: m
    },
    h = Bh(t),
    y = (iPo.get(a) ?? 0) + 1;
  iPo.set(a, y);
  let b = tio(i.options.mainLoopModel, i.options.autoCompactWindow, t);
  G("tengu_precomputed_compact_started", {
    armFraction: b.fraction,
    armFractionSource: $e(b.source),
    ...(b.matchedWindowKey !== void 0 && {
      armWindowKey: b.matchedWindowKey
    }),
    preCompactTokens: f,
    messageCount: n.length,
    querySource: h,
    precomputeAttemptNumber: y,
    ...(u !== void 0 && {
      userPromptCount: u.userPromptCount,
      historyRewritten: u.historyRewritten
    }),
    armTrigger: $e(o),
    ...(s !== void 0 && {
      estimateGapTokens: s
    }),
    windowSource: Oo(d1n(i.options.mainLoopModel, i.options.autoCompactWindow))
  }), T(`precomputed compact: started (${a}, ${n.length} msgs, ~${f} tok, attempt ${y}, trigger ${o})`);
  let _ = (async () => {
      let A = await RQ({
        trigger: "auto",
        customInstructions: null
      }, d.signal).catch(x => (ke(x), {}));
      if (A.blockedBy) {
        T(`Precomputed compact blocked by PreCompact hook: ${A.blockedBy}`), iQn(a, d, null);
        return;
      }
      if (d.signal.aborted) {
        iQn(a, d, null);
        return;
      }
      let v = await SNn(n, g, {
          customInstructions: A.newCustomInstructions
        }).catch(x => ({
          ok: !1,
          reason: "error",
          attempts: 0,
          totalGroups: 0,
          detail: be(x),
          status: void 0,
          isTimeout: !1
        })),
        C = Math.round(performance.now() - p);
      if (T(`precomputed compact: ${v.ok ? "ready" : `failed (${v.reason})`} (${a}, ${C}ms)`), !v.ok) {
        let x = h_(d.signal.reason),
          I = v.reason === "aborted" && typeof x === "string" ? x : void 0,
          k = fTf(v, C);
        if (G("tengu_precomputed_compact_failed", {
          reason: $e(v.reason),
          cause: $e(k.cause),
          status: k.status,
          durationMs: C,
          querySource: h,
          preCompactTokens: f,
          precomputeAttemptNumber: y,
          ...(I !== void 0 && {
            clearReason: I
          })
        }), v.reason === "aborted") It("compact_precomputed", "compact_precomputed_aborted");else Le("compact_precomputed", `compact_precomputed_${v.reason}`);
        if (v.reason !== "aborted" && k.cause !== "too_few_groups" && !d.signal.aborted) {
          let D = (DKt.get(a) ?? 0) + 1;
          if (DKt.set(a, D), D === JCl) G("tengu_precomputed_compact_rearm_capped", {
            cause: $e(k.cause),
            status: k.status,
            querySource: h,
            preCompactTokens: f,
            precomputeAttemptNumber: y
          }), T(`precomputed compact: re-arm capped (${a}, ${D} consecutive ${k.cause} failures)`);
        }
        iQn(a, d, D => ({
          ...D,
          status: "failed",
          failure: k
        }));
        return;
      }
      if (G("tengu_precomputed_compact_ready", {
        durationMs: C,
        attempts: v.result.attempt,
        groupsPreserved: v.result.groupsPreserved,
        totalGroups: v.result.totalGroups,
        querySource: h,
        preCompactTokens: f,
        precomputeAttemptNumber: y
      }), xe("compact_precomputed"), !d.signal.aborted) DKt.delete(a);
      iQn(a, d, x => ({
        ...x,
        status: "ready",
        result: v.result,
        readyDurationMs: C,
        preCompactHookDisplay: A.userDisplayMessage
      }));
    })(),
    S = {
      status: "pending",
      precomputedAtUuid: c,
      preCompactTokens: f,
      startedAt: p,
      abortController: d,
      preCompactHookDisplay: void 0,
      settled: _
    };
  return Eq.set(a, S), !0;
}
function iQn(e, t, n) {
  let r = Eq.get(e);
  if (r?.status !== "pending" || r.abortController !== t) return;
  if (n === null) {
    Eq.delete(e);
    return;
  }
  Eq.set(e, n(r));
}
function QCl(e) {
  return Eq.get(PKt(e));
}
async function gTf(e, t) {
  let n = Eq.get(e);
  if (n === void 0 || t.aborted) return null;
  let r = n.status;
  if (n.status === "pending") {
    if (T(`precomputed compact: awaiting borrowed in-flight (${e})`), await Promise.race([n.settled.then(() => !1), new Promise(i => {
      t.addEventListener("abort", () => i(!0), {
        once: !0
      });
    })])) return T(`precomputed compact: turn aborted while borrowing (${e}) \u2014 leaving entry`), {
      kind: "turn_aborted",
      statusAtPTL: r
    };
  }
  let o = Eq.get(e);
  return T(`precomputed compact: borrowed (${e}, ${o?.status ?? "gone"})`), o?.status === "ready" ? {
    kind: "ready",
    ready: o,
    statusAtPTL: r
  } : null;
}
async function uPo(e, t) {
  let n = PKt(e),
    r = Eq.get(n);
  if (r === void 0 || t.aborted) return null;
  let o = r.status;
  if (r.status === "pending") {
    if (T(`precomputed compact: awaiting in-flight (${n})`), await Promise.race([r.settled.then(() => !1), new Promise(a => {
      t.addEventListener("abort", () => a(!0), {
        once: !0
      });
    })])) return T(`precomputed compact: turn aborted while awaiting (${n}) \u2014 leaving entry`), {
      kind: "turn_aborted",
      statusAtPTL: o
    };
  }
  let s = Eq.get(n);
  switch (Eq.delete(n), T(`precomputed compact: consumed (${n}, ${s?.status ?? "gone"})`), s?.status) {
    case "ready":
      return {
        kind: "ready",
        ready: s,
        statusAtPTL: o
      };
    case "failed":
      return {
        kind: "failed",
        failure: s.failure,
        statusAtPTL: o
      };
    case "pending":
    case void 0:
      return null;
  }
}
async function dPo(e) {
  let {
      toolUseContext: t,
      messages: n,
      detectedAt: r,
      borrowFrom: o,
      querySource: s
    } = e,
    i = Bh(s),
    a = (g, h) => {
      let y = Math.round(performance.now() - r);
      return hTf(g, i, y, e.trigger), {
        outcome: g,
        swap: g.kind === "applied" ? g.swap : void 0,
        emittedEarlyCompactStart: h
      };
    };
  if (!(!lQn(s) && aQn() && (e.trigger === "threshold" || e.isWithheld413 === !0 && !e.hasAttemptedReactiveCompact)) || e.trigger === "threshold" && QCl(t.agentId) === void 0) return {
    outcome: {
      kind: "none"
    },
    swap: void 0,
    emittedEarlyCompactStart: !1
  };
  let c = t.abortController.signal,
    u = (o !== void 0 ? Eq.get(o) : QCl(t.agentId))?.status === "pending";
  if (u) t.onCompactEvent?.({
    type: "compact_progress",
    event: {
      type: "compact_start"
    }
  }), t.onCompactEvent?.({
    type: "sdk_status",
    status: "compacting"
  });
  let d = null,
    p = !1;
  if (o !== void 0) d = await gTf(o, c), p = d !== null;
  if (d ??= await uPo(t.agentId, c), d === null) return a({
    kind: "none"
  }, u);
  if (d.kind === "turn_aborted") return a({
    kind: "aborted"
  }, u);
  if (d.kind === "failed") return a({
    kind: "failed",
    failure: d.failure,
    statusAtPTL: d.statusAtPTL
  }, u);
  let f = pPo(n, d.ready.precomputedAtUuid);
  if (f === null) {
    if (p) G("tengu_precompute_borrow_boundary_miss", {
      querySource: i
    });else cQn(d.ready, "boundary_uuid_missing", s);
    return a({
      kind: "none"
    }, u);
  }
  let m = d.statusAtPTL === "pending" ? "pending" : "ready";
  return a({
    kind: "applied",
    swap: {
      compactResult: d.ready.result,
      preCompactHookDisplay: d.ready.preCompactHookDisplay,
      messagesSince: f,
      statusAtPTL: m,
      leadMs: r - d.ready.startedAt,
      totalMs: d.ready.readyDurationMs,
      borrowed: p
    }
  }, u);
}
function hTf(e, t, n, r) {
  let o = e.kind === "applied" ? e.swap.statusAtPTL : e.kind === "failed" ? e.statusAtPTL : void 0;
  G("tengu_precomputed_compact_consumed", {
    kind: $e(e.kind),
    querySource: t,
    waitedMs: n,
    statusAtPTL: Oo(o),
    trigger: $e(r),
    ...(e.kind === "applied" && {
      borrowed: e.swap.borrowed,
      precomputeTotalMs: Math.round(e.swap.totalMs)
    }),
    ...(e.kind === "failed" && {
      failureReason: $e(e.failure.reason),
      failureCause: $e(e.failure.cause),
      failureStatus: e.failure.status,
      failureAttempts: e.failure.attempts,
      failureDurationMs: e.failure.durationMs
    })
  });
}
function iSt(e, t, n) {
  if (!aQn()) return;
  G("tengu_precomputed_compact_consumed", {
    kind: $e(e),
    trigger: We("manual"),
    querySource: Bh(void 0),
    waitedMs: Math.round(n),
    statusAtPTL: Oo(e === "applied" || e === "failed" ? t?.statusAtPTL : void 0),
    ...(e === "applied" && t?.kind === "ready" && {
      borrowed: !1,
      precomputeTotalMs: t.ready.readyDurationMs
    }),
    ...(e === "failed" && t?.kind === "failed" && {
      failureReason: $e(t.failure.reason),
      failureCause: $e(t.failure.cause),
      failureStatus: t.failure.status,
      failureAttempts: t.failure.attempts,
      failureDurationMs: t.failure.durationMs
    })
  });
}
function pPo(e, t) {
  let n = e.findIndex(r => r.uuid === t);
  if (n === -1) return null;
  return e.slice(n + 1).filter(r => r.type !== "progress");
}
function cQn(e, t, n) {
  G("tengu_precomputed_compact_discarded", {
    reason: $e(t),
    ageMs: Math.round(performance.now() - e.startedAt),
    readyDurationMs: e.readyDurationMs,
    preCompactTokens: e.preCompactTokens,
    querySource: Bh(n)
  }), T(`precomputed compact: discarded (${t}, age ${Math.round(performance.now() - e.startedAt)}ms)`);
}
function uQn(e, t, n) {
  let r = PKt(e),
    o = Eq.get(r);
  if (o?.status === "ready") cQn(o, t, n);
  if (o?.abortController.abort(new DOMException(t, "AbortError")), Eq.delete(r), t === "subagent_exit") iPo.delete(r), DKt.delete(r), xze.delete(`${r}:sdk_single_prompt_gate`), xze.delete(`${r}:subagent_estimate`), xze.delete(`${r}:subagent_final_turn`);
}
var Eq,
  iPo,
  DKt,
  JCl = 3,
  xze;