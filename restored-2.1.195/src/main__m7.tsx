// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JN
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.008  score=0.0474  fileCov=0.0095
// note: deminified; 18 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var JN = E(() => {
  iu();
  FK();
});
var ooc = {};
_t(ooc, {
  withStdinPositional: () => withStdinPositional,
  stripSessionIdFlag: () => stripSessionIdFlag,
  stripResumeFlags: () => stripResumeFlags,
  stripBgFlags: () => stripBgFlags,
  stopHandler: () => stopHandler,
  spawnBgSession: () => spawnBgSession,
  rmHandler: () => rmHandler,
  respawnHandler: () => respawnHandler,
  readBgStdin: () => readBgStdin,
  preSeedReplBgJob: () => preSeedReplBgJob,
  parseResumeTarget: () => parseResumeTarget,
  logsHandler: () => logsHandler,
  handleBgFlag: () => handleBgFlag,
  formatBgHints: () => formatBgHints,
  flagsWithoutPositional: () => flagsWithoutPositional,
  detailForStderr: () => detailForStderr,
  bgVerbExtraArgsNote: () => bgVerbExtraArgsNote,
  attachHandler: () => attachHandler,
});
function KJf(e) {
  return (
    Opn(),
    process.env.SHELL
      ? {
          cmd: process.env.SHELL,
          args: ["-c", e],
        }
      : Vt() === "windows"
        ? {
            cmd: process.env.COMSPEC || "cmd.exe",
            args: ["/d", "/s", "/c", e],
          }
        : {
            cmd: "/bin/sh",
            args: ["-c", e],
          }
  );
}
async function preSeedReplBgJob(e, t) {
  let n = e.slice(0, 8),
    r = _c(n);
  await Eme.mkdir(EWo.join(r, "tmp"), {
    recursive: true,
  });
  let o = t.intent ?? "";
  return (
    await Kd(
      r,
      eue({
        template: {
          name: "bg",
          description: "",
        },
        intent: o,
        name: t.name,
        nameSource: t.nameSource,
        detail: t.detail ?? ult,
        tempo: "blocked",
        needs: PW,
        sessionId: e,
        cwd: t.cwd,
        worktreePath: t.worktree?.path,
        worktreeBranch: t.worktree?.branch,
        worktreeHookBased: t.worktree?.hookBased,
        originCwd: t.worktree?.originCwd,
        bgIsolation: "none",
        providerEnv: roc(),
        sessionPermissionRules: t.sessionPermissionRules,
        memoryToggledOff: t.memoryToggledOff,
      }),
    ),
    {
      short: n,
      jobDir: r,
    }
  );
}
async function spawnBgSession(e, t, n = "shell", r, o, s, i) {
  let a = rQf(e);
  if (a)
    return {
      ok: false,
      error: a,
      reason: "gate_blocked",
    };
  let l = t ?? Xrc.randomUUID(),
    c = i ?? l.slice(0, 8),
    u = _c(c);
  try {
    return (
      await Eme.mkdir(EWo.join(u, "tmp"), {
        recursive: true,
      }),
      await YJf(e, n, r, o, s, {
        sessionId: l,
        short: c,
        jobDir: u,
        freshDir: t === void 0,
      })
    );
  } catch (d) {
    if (n !== "fleet" && n !== "spare")
      await Eme.rm(u, {
        recursive: true,
        force: true,
      }).catch(() => {});
    return {
      ok: false,
      error: `Couldn't start the session \u2014 ${be(d)}`,
      reason: `spawn_failed_${xd(d) ?? BK(d) ?? "unknown"}`,
    };
  }
}
async function YJf(e, t, n, r, o, s) {
  let { sessionId: i, short: a, jobDir: l, freshDir: c } = s,
    u = MHt(e),
    d = u >= 0 ? e.slice(0, u) : e,
    p = Par(d, "--agent"),
    f = void 0,
    m = Par(d, "--name", "-n"),
    g = m ?? r?.name,
    h = parseResumeTarget(d),
    y = u >= 0 ? e.slice(u + 1).join(" ") : oQf(e, h),
    b = kz(d),
    _ = d.some((Y, z) => {
      if (b.has(z)) return false;
      if (Y === "--continue" || Y === "--resume" || Y.startsWith("--resume=")) return true;
      let { peeled: K, rest: Z } = z1e(Y);
      return K.includes("-c") || Z === "-c" || Z === "-r" || /^-r./.test(Z);
    }),
    S = d.some((Y, z) => !b.has(z) && Y === "--fork-session"),
    A = stripResumeFlags(d),
    v = t === "repl" ? "none" : r?.bgIsolation,
    C = r?.providerEnv ?? roc(),
    x = r?.sessionPermissionRules,
    I = r?.memoryToggledOff,
    k = j0e(u >= 0 ? A : flagsWithoutPositional(A));
  if (t === "shell") {
    let Y = n ?? $t(),
      z = T8(A),
      K = [
        ...A.filter((Z, J) => z[J] !== Z),
        ...(cee(Y) ? [Y] : []),
        ...(r?.exec && cee(r.exec) ? [r.exec] : []),
        ...(h !== void 0 && cee(h) ? [h] : []),
      ];
    if (K.length > 0)
      process.stderr
        .write(`warning: background sessions do not support Windows network (UNC) paths; the following will be neutralized: ${K.join(", ")}
`);
  }
  let D = h !== void 0 && h === i,
    P = _ && !S ? ["--fork-session"] : [],
    O = D ? [] : ["--session-id", i, ...P];
  if (
    t === "shell" &&
    d.some((Y, z) => !b.has(z) && (Y === "--session-id" || Y.startsWith("--session-id=")))
  )
    process.stderr
      .write(`warning: --bg manages the session id; ignoring --session-id (use --resume <id> to continue an existing session)
`);
  let L = p ? (await CP(n ?? $t())).activeAgents.find((Y) => Y.agentType === p) : void 0;
  if (p && !L && t === "shell")
    process.stderr.write(`warning: no agent named '${p}' \u2014 spawning with default template
`);
  let M = void 0,
    N = r?.intent ?? y ?? "",
    B =
      !L?.initialPrompt &&
      !r?.exec &&
      !y &&
      !d.some((Y, z) => !b.has(z) && Y === "--reply-on-resume"),
    $ = false,
    q;
  if (t !== "fleet" && t !== "spare") {
    let Y = c ? null : await zi(l);
    if (Y === null)
      q = Kd(
        l,
        eue({
          template: {
            name: r?.exec ? "exec" : (p ?? void 0 ?? "bg"),
            description: L?.whenToUse ?? M?.description ?? "",
            initialPrompt: L?.initialPrompt,
            color: L?.color,
          },
          routine: void 0,
          respawnFlags: k,
          intent: N,
          name: g,
          nameSource: m ? "user" : r?.nameSource,
          detail:
            r?.detail ?? (B ? (M ? `(idle \u2014 waiting for ${Wrc(M.triggers)})` : ult) : void 0),
          tempo: B ? (M ? "idle" : "blocked") : void 0,
          needs: B && !M ? PW : void 0,
          sessionId: i,
          cwd: n ?? $t(),
          worktreePath: r?.worktree?.path,
          worktreeBranch: r?.worktree?.branch,
          worktreeHookBased: r?.worktree?.hookBased,
          originCwd: r?.worktree?.originCwd,
          bgIsolation: v,
          providerEnv: C,
          sessionPermissionRules: x,
          memoryToggledOff: I,
        }),
      )
        .then(() => {
          $ = true;
        })
        .catch((z) =>
          T(`bg seed state write failed: ${be(z)}`, {
            level: "warn",
          }),
        );
    else if (k.length > 0 && Y.respawnFlags.length === 0)
      q = Kd(l, {
        ...Y,
        respawnFlags: k,
      }).catch((z) =>
        T(`bg respawnFlags patch failed: ${be(z)}`, {
          level: "warn",
        }),
      );
  }
  let W = {
      proto: hp,
      short: a,
      sessionId: i,
      createdAt: Date.now(),
      source: t === "repl" ? "slash" : t,
      cwd: n ?? $t(),
      launch: r?.exec
        ? {
            mode: "exec",
            ...KJf(r.exec),
          }
        : _ && h !== void 0
          ? {
              mode: "resume",
              sessionId: h,
              transcriptPath: r?.resumeTranscriptPath,
              fork: !D && (S || P.length > 0),
              flagArgs: [...A, ...(u >= 0 ? e.slice(u) : [])],
            }
          : {
              mode: "prompt",
              args: [...O, ...stripSessionIdFlag(e)],
            },
      respawnFlags: A,
      env: {
        ...C,
        ...(v && {
          CLAUDE_BG_ISOLATION: v,
        }),
        ...(x && {
          CLAUDE_BG_SESSION_PERMISSION_RULES: JSON.stringify(x),
        }),
        ...(I && {
          CLAUDE_BG_MEMORY_TOGGLED_OFF: "1",
        }),
      },
      reattachEnv: o,
      worktree: r?.worktree
        ? {
            path: r.worktree.path,
            ownershipToken: i,
          }
        : void 0,
      isolation: L?.isolation === "worktree" && L.source !== "built-in" ? "worktree" : "none",
      agent: p,
      routine: void 0,
      seed: {
        intent: N,
        name: g,
      },
      cols: process.stdout.columns || void 0,
      rows: process.stdout.rows || void 0,
    },
    [, V] = await Promise.all([q ?? Promise.resolve(), hWo(W)]);
  if (V.ok)
    return {
      ok: true,
      short: a,
      sessionId: i,
      idle: B,
      name: g,
    };
  if (V.reason === "ack-timeout" || V.reason === "enoconn" || V.reason === "estarting") {
    let Y = await hE({
      proto: hp,
      op: "list",
    });
    if (
      Y.ok &&
      Y.op === "list" &&
      Y.jobs.some((z) => z.short === a && z.nonce === V.nonce && !z.outcome)
    )
      return (
        T(`bg: daemon dispatch ${V.reason} but worker is live`, {
          level: "warn",
        }),
        await my("tengu_bg_dispatch_rescued", {
          reason_ack_timeout: V.reason === "ack-timeout",
          reason_enoconn: V.reason === "enoconn",
          reason_estarting: V.reason === "estarting",
        }),
        {
          ok: true,
          short: a,
          sessionId: i,
          idle: B,
          name: g,
          rescued: true,
        }
      );
    if (
      V.reason === "ack-timeout" &&
      Y.ok &&
      Y.op === "list" &&
      !Y.jobs.some((z) => z.short === a)
    ) {
      let z = await hE(
        {
          proto: hp,
          op: "dispatch",
          d: {
            ...W,
            nonce: V.nonce,
          },
          timeoutMs: 5000,
          auth: await jfe(),
        },
        {
          timeoutMs: 6000,
        },
      );
      if (z.ok && z.op === "dispatch")
        return (
          T(`bg: ack-timeout recovered via redispatch (${a})`, {
            level: "warn",
          }),
          await my("tengu_bg_dispatch_rescued", {
            reason_ack_timeout: true,
            reason_enoconn: false,
            reason_estarting: false,
            via_redispatch: true,
          }),
          {
            ok: true,
            short: a,
            sessionId: i,
            idle: B,
            name: g,
            rescued: true,
          }
        );
    }
  }
  if ($)
    await Eme.rm(l, {
      recursive: true,
      force: true,
    }).catch(() => {});
  if (V.reason === "short-alive")
    return {
      ok: false,
      alive: true,
      short: a,
      error: `Session ${a} is already running \u2014 \`claude attach ${a}\` to join it`,
      reason: "short_alive",
    };
  if (V.reason === "stale-short")
    return {
      ok: false,
      error: "Previous session is still shutting down \u2014 try again in a moment",
      reason: "stale_short",
    };
  return {
    ok: false,
    error: `Couldn't reach the ${mb()} (${JJf(V.reason)})${cce("status")}`,
    reason: V.reason === "daemon-unreachable" ? "daemon_unavailable" : V.reason.replace(/-/g, "_"),
  };
}
async function handleBgFlag(e) {
  let t = MHt(e),
    n = t >= 0 ? e.slice(0, t) : e,
    r = kz(n),
    o = n.findIndex((l, c) => !r.has(c) && (l === "--exec" || l.startsWith("--exec=")));
  if (o !== -1) {
    let l = e[o].includes("=") ? e[o].slice(e[o].indexOf("=") + 1) : void 0,
      c = l ?? e.slice(o + 1).join(" ");
    if (!c.trim()) {
      (process.stderr.write(`--exec requires a command.
`),
        (process.exitCode = 1));
      return;
    }
    let u = stripBgFlags([...e.slice(0, o), ...(l !== void 0 ? e.slice(o + 1) : [])]),
      d = Par(u, "--name", "-n"),
      p = kz(u),
      f = MHt(u),
      m = f >= 0 ? u.slice(0, f) : u,
      g = m.filter((b, _) => !p.has(_));
    if (eWo(g)) {
      (process.stderr.write(`${ZGo(u)}
`),
        (process.exitCode = 1));
      return;
    }
    let h = m.filter(
      (b, _) => !p.has(_) && Use(b) && !/^(-n|--name)(=|$)/.test(b) && !/^-n./.test(b),
    );
    if (h.length > 0)
      process.stderr.write(`warning: --exec ignores ${h.join(" ")} (only --name composes)
`);
    let y = await spawnBgSession([], void 0, "shell", void 0, {
      intent: c,
      exec: c,
      ...(d && {
        name: d,
        nameSource: "user",
      }),
    });
    if (!y.ok) {
      (await Qu("cli_bg_dispatch_exec", y.reason ?? "spawn_failed"),
        process.stderr.write(`${y.error}
`),
        (process.exitCode = 1));
      return;
    }
    (await uv("cli_bg_dispatch_exec"),
      process.stdout.write(
        formatBgHints(y.short, void 0, d || c) +
          `
`,
      ));
    return;
  }
  let s = stripBgFlags(e),
    i = await readBgStdin(),
    a = await spawnBgSession(i ? withStdinPositional(s, i) : s);
  if (!a.ok) {
    (await (a.reason === "gate_blocked" ? iY : Qu)("cli_bg_dispatch", a.reason ?? "spawn_failed"),
      process.stderr.write(`${a.error}
`),
      (process.exitCode = 1));
    return;
  }
  if (a.rescued) await iY("cli_bg_dispatch", "rescued");
  else await uv("cli_bg_dispatch");
  process.stdout.write(
    formatBgHints(a.short, a.idle ? ult : void 0, a.name) +
      `
`,
  );
}
async function readBgStdin(e = process.stdin) {
  if (e.isTTY) return "";
  e.setEncoding("utf8");
  let t = "",
    n = false,
    r = (s) => {
      if (n) return;
      if (t.length + s.length > _Wo) {
        ((t += s.slice(0, _Wo - t.length)), (n = true));
        return;
      }
      t += s;
    };
  e.on("data", r);
  let o = await WIt(e, 3000);
  if ((e.off("data", r), o)) return "";
  if (n)
    process.stderr.write(`warning: piped stdin exceeds ${_Wo} bytes, truncated
`);
  return t.replace(/\r?\n$/, "");
}
function withStdinPositional(e, t) {
  let n = MHt(e);
  if (n >= 0) {
    let s = e.slice(n + 1).join(" ");
    return [
      ...e.slice(0, n),
      "--",
      s
        ? `${s}
${t}`
        : t,
    ];
  }
  let r = kz(e),
    o = -1;
  for (let s = 0; s < e.length; s++) {
    if (r.has(s)) continue;
    let i = e[s];
    if (Use(i)) {
      if (i.includes("=")) continue;
      let a = e[s + 1];
      if (a === void 0) continue;
      let { rest: l } = z1e(i);
      if (i === "--resume" || l === "-r") {
        if (!Use(a)) s++;
        continue;
      }
      if (l.length > 2 && (/^-r./.test(l) || DW.has(l.slice(0, 2)))) continue;
      if ((WUt.has(i) && i !== "--remote-control" && i !== "--rc") || LPn.has(l)) continue;
      if (!r.has(s + 1) && !Use(a)) s++;
      continue;
    }
    o = s;
  }
  if (o >= 0) {
    let s = [...e];
    return (
      (s[o] = `${e[o]}
${t}`),
      s
    );
  }
  return [...e, "--", t];
}
function JJf(e) {
  switch (e) {
    case "daemon-unreachable":
      return "not running";
    case "ack-timeout":
      return "timed out";
    case "dispatch-write":
      return "couldn't write dispatch file";
    case "enoconn":
      return "socket missing";
    case "estarting":
      return "service still starting";
    case "stale-short":
      return "id collision with a prior job";
  }
}
function formatBgHints(e, t, n) {
  let r = (o, s) => wt.dim("  " + o.padEnd(26) + s);
  return [
    `backgrounded \xB7 ${wt.cyan(e)}${n ? ` \xB7 ${n}` : ""}${t ? wt.dim(` ${t}`) : ""}`,
    r("claude agents", "list sessions"),
    r(`claude attach ${e}`, "open in this terminal"),
    r(`claude logs ${e}`, "show recent output"),
    r(`claude stop ${e}`, "stop this session"),
  ].join(`
`);
}
function bgVerbExtraArgsNote(e) {
  let t = new Set(["logs", "attach", "stop", "kill", "respawn", "rm"]);
  if (e.length <= 2 || !e[0] || !t.has(e[0])) return null;
  let n = [];
  for (let r = 2; r < e.length; r++) {
    let o = e[r];
    if (
      o === "--debug" ||
      o === "-d" ||
      o === "--debug-to-stderr" ||
      o === "-d2e" ||
      o.startsWith("--debug=") ||
      o.startsWith("--debug-file=")
    )
      continue;
    if (o === "--debug-file" && r + 1 < e.length) {
      r++;
      continue;
    }
    n.push(o);
  }
  if (n.length === 0) return null;
  return `warning: extra arguments ignored: ${n.join(" ")}
`;
}
function HWo() {
  let e = bgVerbExtraArgsNote(process.argv.slice(2));
  if (e) process.stderr.write(e);
}
async function TWo(e, t, n) {
  if ((HWo(), e === "--help" || e === "-h"))
    (process.stdout.write(`Usage: ${t}

  ${n}
`),
      process.exit(0));
  if (e?.startsWith("-"))
    (process.stderr.write(`unknown option '${e}'
Usage: ${t}
`),
      process.exit(1));
  if (!e)
    (process.stderr.write(`Usage: ${t}
`),
      process.exit(1));
  let o = (await Eme.readdir(pL()).catch(() => []))
    .filter((s) => IOe.test(s))
    .filter((s) => s.startsWith(e));
  if (o.length === 1) return o[0];
  (process.stderr.write(
    o.length === 0
      ? `No job matching '${e}'. Run 'claude agents' to list running sessions.
`
      : `Ambiguous prefix '${e}', matches: ${o.join(", ")}
`,
  ),
    process.exit(1));
}
async function logsHandler(e) {
  let t = await TWo(
      e,
      "claude logs <id>",
      "Print the background session's recent terminal output.",
    ),
    n = await new Promise((r) => {
      let o = wNl(
        t,
        500,
        (s) => {
          if (s.type === "snapshot") (o(), r(s.streamTail));
        },
        (s) => {
          (o(), r(s));
        },
      );
    });
  if (typeof n === "string")
    return (
      await Qu("cli_bg_logs", "read_failed"),
      process.stderr.write(`Couldn't read logs for ${t} \u2014 ${Fk(n)}
`),
      XN(1)
    );
  return (await V1e(n.join("")), await uv("cli_bg_logs"), XN(0));
}
async function attachHandler(e) {
  let t = await TWo(
      e,
      "claude attach <id>",
      "Open the background session in this terminal. Detach with Ctrl+Z; the session keeps running.",
    ),
    n = await TQt();
  if (!n.ok)
    return (
      await Qu("cli_bg_attach", "daemon_unavailable"),
      process.stderr
        .write(`Couldn't attach \u2014 ${mb()} is unavailable (${n.reason})${cce("status")}
`),
      XN(1)
    );
  let r = await yZ(t);
  for (let o = 0; r.msg && eEt.test(r.msg) && o < 20; o++) {
    if (o === 0 && r.msg.includes("ERESPAWNING"))
      process.stderr.write(
        r.outcome === "detached"
          ? `Session not responding \u2014 restarting it\u2026
`
          : `Migrating job to attachable PTY\u2026
`,
      );
    (await Nn(500), (r = await yZ(t)));
  }
  if (r.outcome === "error" && r.msg?.includes("ENOJOB")) {
    let o = await zi(_c(t)).catch(() => null);
    if (o?.state === "failed")
      return (
        await Qu("cli_bg_attach", "wake_failed_state"),
        process.stderr
          .write(`Session ${t} can't start \u2014 ${detailForStderr(o.detail) || "it crashed repeatedly"}
`),
        XN(1)
      );
    process.stderr.write(`Waking session ${t}\u2026
`);
    let s = await PHt(t).catch((i) => ({
      ok: false,
      alive: false,
      short: void 0,
      error: be(i),
    }));
    if (s.ok || s.alive) {
      if (s.short && s.short !== t)
        (process.stderr.write(`Session moved to ${s.short}
`),
          (t = s.short));
      r = await yZ(t);
    } else
      return (
        await Qu("cli_bg_attach", "wake_failed"),
        process.stderr.write(`Couldn't wake ${t} \u2014 ${s.error}
`),
        XN(1)
      );
  }
  while (r.outcome === "disconnected") {
    let o = await eV({
      forceTransient: true,
    });
    if (!o.ok)
      return (
        await Qu("cli_bg_attach", "daemon_unavailable"),
        process.stderr
          .write(`Couldn't reconnect to ${t} \u2014 ${mb()} is unavailable (${o.reason})${cce("status")}
`),
        XN(1)
      );
    let s = await hE({
      proto: hp,
      op: "list",
    });
    if (s.ok && s.op === "list" && !s.jobs.some((a) => a.short === t && !a.outcome)) break;
    if (
      (process.stderr.write(`Reconnecting to ${t}\u2026
`),
      Vt() === "windows" && process.stdin.isTTY)
    )
      (L0(process.stdin, true), process.stdin.ref());
    let i = dat();
    if (i && far(i)) {
      if (Vt() === "windows" && process.stdin.isTTY) L0(process.stdin, false);
      r = {
        outcome: "detached",
      };
      break;
    }
    r = await yZ(t);
    for (let a = 0; r.msg && eEt.test(r.msg) && a < 10; a++) (await Nn(200), (r = await yZ(t)));
  }
  if (r.outcome === "detached" && r.msg && (p7t.test(r.msg) || eEt.test(r.msg)))
    return (
      await Qu("cli_bg_attach", p7t.test(r.msg) ? "stalled" : "transient_exhausted"),
      process.stderr.write(`${r.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, "")}
`),
      XN(1)
    );
  if (r.outcome === "detached" && r.msg)
    process.stderr.write(`${r.msg.replace(f7t, "")}
`);
  if (r.outcome === "disconnected") {
    let o = await zi(_c(t)).catch(() => null),
      s = o?.state === "failed" && o.detail ? ` (${detailForStderr(o.detail)})` : "";
    process.stderr.write(`Session ${t} has exited${s}.
`);
  }
  if (r.outcome === "error") {
    let o = r.msg?.includes("ERESPAWNING")
      ? "Job is respawning after an upgrade \u2014 try attach again in a moment."
      : r.msg && /ENOENT|ECONNREFUSED|ESTARTING/.test(r.msg)
        ? `${w_e()} is restarting \u2014 try again in a moment.`
        : (r.msg ?? "unknown");
    (process.stderr.write(`Couldn't attach to ${t} \u2014 ${o}
`),
      await Qu("cli_bg_attach", "transient_exhausted"));
  } else await uv("cli_bg_attach");
  return XN(r.outcome === "error" ? 1 : 0);
}
async function respawnHandler(e) {
  if ((HWo(), e === "--help" || e === "-h")) {
    process.stdout.write(`Usage: claude respawn <id>|--all

  Restart a background session (or all of them) so it picks up the current Claude binary.
`);
    return;
  }
  if (e?.startsWith("-") && e !== "--all") {
    (process.stderr.write(`unknown option '${e}'
Usage: claude respawn <id>|--all
`),
      (process.exitCode = 1));
    return;
  }
  if (!e) {
    (process.stderr.write(`usage: claude respawn <id>|--all
`),
      (process.exitCode = 1));
    return;
  }
  let t = await TQt();
  if (!t.ok) {
    (process.stderr
      .write(`Couldn't respawn \u2014 ${mb()} is unavailable (${t.reason})${cce("status")}
`),
      await Qu("cli_bg_respawn", "daemon_unavailable"),
      (process.exitCode = 1));
    return;
  }
  if (e === "--all") {
    let a = (await aX()).filter((u) => !B0(u.state.state));
    if (a.length === 0) {
      process.stdout.write(`no live jobs to respawn
`);
      return;
    }
    let l = 0,
      c = 0;
    for (let u of a) {
      let d = await PHt(u.id, {
        force: true,
        knownState: u.state,
      });
      if (d.ok)
        (l++,
          process.stdout.write(`respawned ${u.id}${d.short !== u.id ? ` \u2192 ${d.short}` : ""}
`));
      else if (d.alive)
        (c++,
          (process.exitCode = 1),
          process.stderr
            .write(`${u.id}: still running \u2014 couldn't confirm restart, retry in a moment
`));
      else
        ((process.exitCode = 1),
          process.stderr.write(`${u.id}: ${d.error}
`));
    }
    if (l === a.length) await uv("cli_bg_respawn");
    else if (l > 0 || c > 0) await iY("cli_bg_respawn", c > 0 ? "still_alive" : "partial");
    else await Qu("cli_bg_respawn", "spawn_failed");
    return;
  }
  let r = (await Eme.readdir(pL()).catch(() => []))
    .filter((i) => IOe.test(i))
    .filter((i) => i.startsWith(e));
  if (r.length !== 1) {
    (process.stderr.write(
      r.length === 0
        ? `No job matching '${e}'
`
        : `Ambiguous prefix '${e}', matches: ${r.join(", ")}
`,
    ),
      await Qu("cli_bg_respawn", r.length === 0 ? "no_match" : "ambiguous"),
      (process.exitCode = 1));
    return;
  }
  let o = r[0],
    s = await PHt(o, {
      force: true,
    });
  if (!s.ok && s.alive) {
    (process.stderr.write(`${o}: still running \u2014 couldn't confirm restart, retry in a moment
`),
      await iY("cli_bg_respawn", "still_alive"),
      (process.exitCode = 1));
    return;
  }
  if (!s.ok) {
    (process.stderr.write(`${s.error}
`),
      await Qu("cli_bg_respawn", "spawn_failed"),
      (process.exitCode = 1));
    return;
  }
  (await uv("cli_bg_respawn"),
    process.stdout.write(`respawned ${o}${s.short !== o ? ` \u2192 ${s.short}` : ""}
`));
}
async function stopHandler(e) {
  let t = await TWo(
      e,
      "claude stop <id>",
      "Stop a background session. Its conversation is kept; resume it later with `claude attach <id>`.",
    ),
    { confirmed: n, error: r } = await yTe(t);
  if (!n) {
    (await Qu("cli_bg_stop", "kill_unconfirmed"),
      process.stderr.write(
        r
          ? `couldn't confirm ${t} was stopped \u2014 ${r}
`
          : `couldn't confirm ${t} was stopped \u2014 the background service may be restarting. Try again in a moment.
`,
      ),
      (process.exitCode = 1));
    return;
  }
  (await uv("cli_bg_stop"),
    process.stdout.write(`stopped ${t}
`));
  let o = _c(t),
    s = await zi(o);
  if (s && !Vh(s)) {
    let i = new Date().toISOString();
    await Kd(o, {
      ...s,
      state: "stopped",
      detail: "stopped",
      tempo: "idle",
      needs: void 0,
      block: void 0,
      inFlight: void 0,
      updatedAt: i,
      firstTerminalAt: s.firstTerminalAt ?? i,
    }).catch((a) =>
      T(`bg stop terminal write failed: ${be(a)}`, {
        level: "warn",
      }),
    );
  }
  if (
    (await my("tengu_bg_agent_action", {
      action: We("stop"),
      source: We("cli"),
      jobSessionId: s?.sessionId ?? "",
    }),
    s?.worktreePath)
  )
    process.stdout.write(
      wt.dim(`  worktree retained at ${s.worktreePath}
  run 'claude rm ${t}' to remove worktree and job state
`),
    );
}
async function rmHandler(e) {
  if ((HWo(), e === "--help" || e === "-h"))
    (process.stdout.write(`Usage: claude rm <id>

  Delete a background session and its worktree. Unlike \`stop\`, works on already-exited sessions.
`),
      process.exit(0));
  if (e?.startsWith("-"))
    (process.stderr.write(`unknown option '${e}'
Usage: claude rm <id>
`),
      process.exit(1));
  if (!e)
    (process.stderr.write(`Usage: claude rm <id>
`),
      process.exit(1));
  let n = (await Eme.readdir(pL()).catch(() => []))
    .filter((u) => IOe.test(u))
    .filter((u) => u.startsWith(e));
  if (n.length !== 1)
    (process.stderr.write(
      n.length === 0
        ? `No job matching '${e}'
`
        : `Ambiguous prefix '${e}', matches: ${n.join(", ")}
`,
    ),
      process.exit(1));
  let r = n[0],
    o = await zi(_c(r)),
    { removed: s, error: i, keptWorktree: a, keptReason: l } = await Sme(r);
  if (!s) {
    (await Qu("cli_bg_rm", "kill_unconfirmed"),
      process.stderr
        .write(`couldn't confirm ${r} was stopped \u2014 ${i ?? "the background service may be restarting. Try again in a moment."}
`),
      (process.exitCode = 1));
    return;
  }
  if (
    (await my("tengu_bg_agent_action", {
      action: We("delete"),
      source: We("cli"),
      jobSessionId: o?.sessionId ?? "",
    }),
    a)
  )
    await iY("cli_bg_rm", "kept_worktree");
  else await uv("cli_bg_rm");
  let c = {
    dirty: "has uncommitted changes",
    branch_mismatch: "is on a different branch",
    remove_failed: "could not be removed",
  };
  process.stdout.write(
    `removed ${r}` +
      (a
        ? `
  worktree ${c[l ?? "remove_failed"]} \u2014 kept at ${a}`
        : o?.worktreePath
          ? `
  worktree: ${o.worktreePath}`
          : "") +
      `
`,
  );
}
function z1e(e) {
  let t = [],
    n = e;
  while (/^-[a-zA-Z]./.test(n) && LPn.has(n.slice(0, 2)))
    (t.push(n.slice(0, 2)), (n = `-${n.slice(2)}`));
  return {
    peeled: t,
    rest: n,
  };
}
function Use(e) {
  return e.length > 1 && e.startsWith("-");
}
function MHt(e) {
  let t = kz(e);
  for (let n = 0; n < e.length; n++) if (e[n] === "--" && !t.has(n)) return n;
  return -1;
}
function stripBgFlags(e) {
  let t = MHt(e),
    n = t >= 0 ? e.slice(0, t) : e,
    r = kz(n),
    o = n.filter((s, i) => r.has(i) || !zJf.includes(s));
  return t >= 0 ? [...o, ...e.slice(t)] : o;
}
function Par(e, t, n) {
  let r = kz(e),
    o;
  for (let s = 0; s < e.length; s++) {
    if (r.has(s)) continue;
    let i = e[s];
    if (i === "--") break;
    if (i === t || (n !== void 0 && i === n)) {
      if (e[s + 1] !== void 0) ((o = e[s + 1]), s++);
      continue;
    }
    if (i.startsWith(`${t}=`)) {
      o = i.slice(t.length + 1);
      continue;
    }
    if (n !== void 0) {
      let { peeled: a, rest: l } = z1e(i);
      if (l.length > 2 && l.slice(0, 2) === n) {
        o = l.slice(2);
        continue;
      }
      if (a.length > 0 && l === n && e[s + 1] !== void 0) ((o = e[s + 1]), s++);
    }
  }
  return o;
}
function kz(e) {
  let t = new Set();
  for (let n = 0; n < e.length; n++) {
    if (t.has(n)) continue;
    let r = e[n];
    if (r === "--") break;
    let { rest: o } = z1e(r);
    if (r === "--resume" || o === "-r") continue;
    if (
      (r === "--remote-control" || r === "--rc") &&
      e[n + 1] !== void 0 &&
      !(e[n + 1].length > 1 && e[n + 1].startsWith("-"))
    ) {
      t.add(n + 1);
      continue;
    }
    if (!o.includes("=") && DW.has(o) && e[n + 1] !== void 0) {
      if ((t.add(n + 1), qGe.has(o))) {
        let s = n + 2;
        while (e[s] !== void 0 && !(e[s].length > 1 && e[s].startsWith("-"))) (t.add(s), s++);
      }
    }
  }
  return t;
}
function parseResumeTarget(e) {
  let t = kz(e),
    n;
  for (let r = 0; r < e.length; r++) {
    if (t.has(r)) continue;
    let o = e[r];
    if (o === "--") break;
    if (o.startsWith("--resume=")) {
      n = o.slice(9) || void 0;
      continue;
    }
    let { rest: s } = z1e(o);
    if (/^-r./.test(s)) {
      n = s.slice(2);
      continue;
    }
    if (o === "--resume" || s === "-r") {
      let i = e[r + 1];
      if (i !== void 0 && !Use(i)) ((n = i), r++);
      else n = void 0;
    }
  }
  return n;
}
function stripResumeFlags(e) {
  let t = kz(e),
    n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (t.has(r)) {
      n.push(o);
      continue;
    }
    if (o === "--") {
      for (let a = r; a < e.length; a++) n.push(e[a]);
      break;
    }
    if (
      o === "--fork-session" ||
      o === "--continue" ||
      o.startsWith("--resume=") ||
      o.startsWith("--session-id=")
    )
      continue;
    let { peeled: s, rest: i } = z1e(o);
    if (s.length > 0 || i === "-c" || i.startsWith("-r")) {
      let a = s.filter((d) => d !== "-c").map((d) => d[1]),
        l = i === "-c" || /^-r./.test(i),
        c = i === "-r",
        u = l || c ? "" : i.slice(1);
      if (a.length > 0 || u) n.push(`-${a.join("")}${u}`);
      if (c && e[r + 1] !== void 0 && !Use(e[r + 1])) r++;
      continue;
    }
    if (o === "--session-id") {
      if (e[r + 1] !== void 0) r++;
      continue;
    }
    if (o === "--resume") {
      if (e[r + 1] !== void 0 && !Use(e[r + 1])) r++;
      continue;
    }
    n.push(o);
  }
  return n;
}
function stripSessionIdFlag(e) {
  let t = kz(e),
    n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (t.has(r)) {
      n.push(o);
      continue;
    }
    if (o === "--") {
      for (let s = r; s < e.length; s++) n.push(e[s]);
      break;
    }
    if (o.startsWith("--session-id=")) continue;
    if (o === "--session-id") {
      if (e[r + 1] !== void 0) r++;
      continue;
    }
    n.push(o);
  }
  return n;
}
function rQf(e) {
  let t = MHt(e),
    n = t >= 0 ? e.slice(0, t) : e,
    r = kz(n),
    o = n.filter((i, a) => !r.has(a));
  if (eWo(o)) return ZGo(n);
  let s = Par(n, "--permission-mode");
  if (
    (s === "bypassPermissions" ||
      o.includes("--dangerously-skip-permissions") ||
      o.includes("--allow-dangerously-skip-permissions")) &&
    !uj() &&
    !Dt().bypassPermissionsModeAccepted
  )
    return "--bg with bypassPermissions requires accepting the disclaimer first. Run `claude --dangerously-skip-permissions` once interactively.";
  if (s === "auto" && !RG())
    return "--bg with auto mode requires opting in first. Run `claude --permission-mode auto` once interactively.";
  return null;
}
function oQf(e, t) {
  let n = kz(e),
    r;
  for (let o = 0; o < e.length; o++) {
    if (n.has(o)) continue;
    let s = e[o];
    if (Use(s)) {
      let { rest: i } = z1e(s);
      if ((s === "--resume" || i === "-r") && e[o + 1] !== void 0 && !Use(e[o + 1])) o++;
      continue;
    }
    if (s.length > 0 && s !== t) r = s;
  }
  return r;
}
function flagsWithoutPositional(e) {
  let t = kz(e),
    n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (t.has(r)) {
      n.push(o);
      continue;
    }
    if (!Use(o)) continue;
    if (o.includes("=")) {
      n.push(o);
      continue;
    }
    let { rest: s } = z1e(o);
    if (DW.has(s)) {
      n.push(o);
      continue;
    }
    if (WUt.has(o)) {
      n.push(o);
      continue;
    }
    let i = e[r + 1];
    if (i !== void 0 && !Use(i) && !t.has(r + 1)) {
      r++;
      continue;
    }
    n.push(o);
  }
  return n;
}
function roc() {
  let e = {};
  for (let t of RPn) {
    let n = process.env[t];
    if (n === void 0) continue;
    if (n === "" && t !== "CLAUDE_SECURESTORAGE_CONFIG_DIR") continue;
    e[t] = n;
  }
  return e;
}
function detailForStderr(e) {
  return Vm(
    Ja(e)
      .replace(/[\s\x00-\x1f\x7f-\x9f]+/g, " ")
      .trim(),
    200,
  );
}
var Xrc,
  Eme,
  EWo,
  zJf,
  _Wo = 1048576;
