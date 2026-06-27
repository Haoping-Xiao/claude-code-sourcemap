// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CHt
// matched 2.1.88 source: src/utils/plugins/installCounts.ts
// class=modified (alt of src/utils/plugins/installCounts.ts)  jaccard=0.009  score=0.0108  fileCov=0.0528
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module CHt] deps: ag, dn, Hpe, YS, vn, Is, tWo, WL, cKe, IKe
((bZ = require("fs/promises")), (rWo = require("net")), (nWo = require("path")));
async function yTe(e, t, n) {
  if (t?.backend === "peer")
    return {
      confirmed: true,
    };
  let r = n?.knownGone
    ? {
        ok: false,
        code: "ENOJOB",
        error: "job already gone (caller-verified)",
      }
    : await hE({
        proto: hp,
        op: "kill",
        short: e,
      });
  for (let o = 0; !r.ok && r.code === "ESTARTING" && o < 10; o++)
    (await Nn(200),
      (r = await hE({
        proto: hp,
        op: "kill",
        short: e,
      })));
  if (r.ok)
    return {
      confirmed: true,
    };
  if (r.code === "ENOJOB" || r.code === "ENOCONN" || r.code === "ETIMEOUT") {
    let o = await aWo(e);
    if (o.anyMatch)
      return {
        confirmed: o.confirmed,
      };
    if (r.code === "ENOCONN" || r.code === "ETIMEOUT") {
      let s = (
        await h3({
          silent: true,
        })
      ).workers[e];
      return {
        confirmed: s !== void 0 && !(await vQt(s.pid, s.procStart)),
      };
    }
    return {
      confirmed: true,
    };
  }
  return {
    confirmed: false,
    error: r.error,
  };
}
async function aWo(e) {
  let t = await DYe(dR(e)),
    n = false,
    r = true;
  for (let o of await e8e().catch(() => []))
    if (o.kind === "bg" && (o.jobId === e || o.sessionId?.startsWith(e))) {
      if (((n = true), !t))
        try {
          process.kill(o.pid, "SIGTERM");
        } catch {}
      let s = Date.now() + 3000,
        i = true;
      while ((i = await vQt(o.pid, o.procStart)) && Date.now() < s) await Nn(100);
      if (i) {
        G("tengu_bg_killjob_ctrl_fallback", {
          ctrlSent: t,
        });
        try {
          process.kill(o.pid, "SIGTERM");
        } catch {}
        let a = Date.now() + 500;
        while ((i = await vQt(o.pid, o.procStart)) && Date.now() < a) await Nn(100);
      }
      if (i) r = false;
    }
  return {
    confirmed: r,
    anyMatch: n,
  };
}
async function Tar() {
  let e = await hE({
    proto: hp,
    op: "list",
  });
  if (e.ok && e.op === "list")
    return {
      shorts: new Set(e.jobs.map((o) => o.short)),
      records: e.jobs.filter((o) => !o.outcome),
    };
  let t = await h3({
      silent: true,
    }),
    n = Object.entries(t.workers),
    r = await Promise.all(n.map(([, o]) => vQt(o.pid, o.procStart)));
  return {
    shorts: new Set(n.filter((o, s) => r[s]).map(([o]) => o)),
    records: [],
  };
}
async function wrc(e) {
  let t = await hE({
    proto: hp,
    op: "has",
    short: e,
  });
  if (t.ok && t.op === "has")
    return {
      alive: t.alive,
      present: t.present ?? t.alive,
      daemonUp: true,
    };
  let n = (
      await h3({
        silent: true,
      })
    ).workers[e],
    r = n !== void 0 && (await vQt(n.pid, n.procStart));
  return {
    alive: r,
    present: r,
    daemonUp: false,
  };
}
async function Crc(e) {
  let t = await hE({
    proto: hp,
    op: "has",
    short: e,
  });
  return t.ok && t.op === "has" ? (t.present ?? t.alive) : false;
}
async function vQt(e, t) {
  try {
    process.kill(e, 0);
  } catch (n) {
    let r = on(n);
    return r !== "ESRCH" && r !== "EPERM";
  }
  return bv(e, t);
}
function IHt(e, t) {
  return {
    ...e,
    detail: Vm(xc(t).replace(/\s+/g, " ").trim(), Xy),
    tempo: "active",
    needs: void 0,
    block: void 0,
    suggestedReply: void 0,
    output: null,
    updatedAt: new Date().toISOString(),
  };
}
function Irc() {
  return `Couldn't reach the ${mb()} \u2014 it may be restarting. Press Enter to retry`;
}
function xrc(e) {
  return e === Irc();
}
async function wQt(e, t, n, r) {
  if (n?.backend === "peer") {
    if (!n.sock)
      return (
        xe("job_reply"),
        {
          err: lWo,
        }
      );
    try {
      return (await gTo(n.sock, t), xe("job_reply"), null);
    } catch (c) {
      return (
        Le("job_reply", "job_reply_peer_send_failed"),
        {
          err: `Couldn't send to that session \u2014 ${be(c)}`,
        }
      );
    }
  }
  let o = _c(e),
    s = r ?? (await zi(o)),
    i = await jfe(),
    a = () =>
      hE({
        proto: hp,
        op: "reply",
        short: e,
        text: t,
        auth: i,
      }),
    l = await a();
  for (let c = 0; !l.ok && (l.code === "ESTARTING" || l.code === "ENOREPLY") && c < 10; c++)
    (await Nn(200), (l = await a()));
  if (!l.ok && l.code === "EAUTH") {
    let c = await jfe();
    if (c && c !== i) ((i = c), (l = await a()));
  }
  if (!l.ok && (l.code === "ENOCONN" || l.code === "ETIMEOUT")) {
    if (
      (
        await eV({
          forceTransient: true,
        })
      ).ok
    ) {
      ((i = (await jfe()) ?? i), (l = await a()));
      for (let u = 0; !l.ok && (l.code === "ESTARTING" || l.code === "ENOREPLY") && u < 10; u++)
        (await Nn(200), (l = await a()));
    }
  }
  if (l.ok) {
    if (s && !r) {
      sS(o);
      let c = (await zi(o)) ?? s;
      Kd(o, IHt(c, t)).catch(Xf);
    }
    if (!r)
      (G("tengu_bg_agent_action", {
        action: We("reply"),
        agent: s?.template ?? "unknown",
        wasTerminal: s ? B0(s.state) : false,
        daemon: true,
      }),
        xe("job_reply"));
    return null;
  }
  if (l.code === "ENOJOB") {
    if (!r) It("job_reply", "job_reply_not_running");
    return {
      err: MYe,
      code: l.code,
    };
  }
  if (l.code === "ENOCONN" || l.code === "ETIMEOUT") {
    if (!r) Le("job_reply", "job_reply_daemon_unreachable");
    return {
      err: Irc(),
      code: l.code,
    };
  }
  if (!r) Le("job_reply", "job_reply_send_failed");
  return {
    err: `Couldn't send your message \u2014 ${l.error}`,
    code: l.code,
  };
}
async function Trc(e) {
  let t = _c(e);
  sS(t);
  let n = await zi(t).catch(() => null);
  if (n === null)
    return (
      xe("job_attach"),
      {
        kind: "error",
        ended: true,
        msg: "That session was removed \u2014 back to the list",
      }
    );
  if (n.state !== "done" && n.state !== "stopped" && n.state !== "blocked" && n.state !== "failed")
    (await Nn(50), sS(t), (n = (await zi(t).catch(() => null)) ?? n));
  if (n.state === "done" || n.state === "stopped" || n.state === "blocked")
    return (
      xe("job_attach"),
      {
        kind: "error",
        ended: true,
        msg:
          n.state === "stopped"
            ? "That session was stopped \u2014 back to the list"
            : n.state === "blocked"
              ? "That session is blocked \u2014 back to the list"
              : "That session ended \u2014 back to the list",
      }
    );
  if (n.state === "failed") {
    let r = n.detail.includes("before init");
    return (
      It("job_attach", r ? "job_attach_pre_init_crash" : "job_attach_crash_loop"),
      {
        kind: "error",
        ended: true,
        msg: `Session can't start \u2014 ${n.detail.replace(/^.*?before init(?: \u2014 )?/, "").replace(/^Error:\s*/, "") || n.detail || "it crashed repeatedly"}`,
      }
    );
  }
  return;
}
async function krc(e, t = {}) {
  (PYe.writeFile(vrc.join(_c(e), iWo), "").catch(() => {}), T("[PERF:bg-attach-start]"), dat());
  let n = /ENOENT|ECONNREFUSED|control socket closed/,
    r = eEt,
    o = {
      holdScreenOnDisconnect: true,
      alreadyInAlt: t.alreadyInAlt,
      gateStdinUntilFirstFrame: t.gateStdinUntilFirstFrame,
    },
    s = {
      ...o,
      holdingFrame: true,
      gateStdinUntilFirstFrame: false,
    },
    i = !t.alreadyInAlt,
    a = await yZ(e, o),
    l;
  if (a.outcome === "error" && a.msg && n.test(a.msg)) {
    if (
      ((l = await eV({
        forceTransient: true,
      })),
      l.ok)
    )
      a = await yZ(e, o);
  }
  for (let c = 0; a.msg && r.test(a.msg) && c < 20; c++) (await Nn(500), (a = await yZ(e, o)));
  while (a.outcome === "disconnected") {
    let u = Math.max(1, (process.stdout.columns ?? 80) - 15);
    process.stdout.write(`\x1B7${hW(1, u)}\x1B[2;7m${" Reconnecting\u2026 "}\x1B[0m\x1B8`);
    let d;
    if (process.stdin.isTTY) {
      let m = "isRaw" in process.stdin ? Boolean(process.stdin.isRaw) : false;
      if (!m) L0(process.stdin, true);
      let g = src(process.stdin);
      try {
        d = await Promise.race([
          eV({
            forceTransient: true,
          }),
          g.promise.then(() => "detach"),
        ]);
      } finally {
        if ((g.cancel(), !m)) L0(process.stdin, false);
      }
    } else
      d = await eV({
        forceTransient: true,
      });
    if (d === "detach") {
      if (i) process.stdout.write(H1());
      return (
        T("[PERF:bg-attach-end]"),
        xe("job_attach"),
        {
          kind: "detached",
        }
      );
    }
    let p = d;
    if (!p.ok) {
      if (i) process.stdout.write(H1());
      return (
        Le("job_attach", "job_attach_daemon_start_failed"),
        {
          kind: "error",
          msg: `Couldn't restart the ${mb()} \u2014 ${p.reason}`,
        }
      );
    }
    let f = dat();
    if (f && far(f)) {
      if (i) process.stdout.write(H1());
      return (
        T("[PERF:bg-attach-end]"),
        xe("job_attach"),
        {
          kind: "detached",
        }
      );
    }
    a = await yZ(e, s);
    for (let m = 0; a.msg && r.test(a.msg) && m < 10; m++) (await Nn(200), (a = await yZ(e, s)));
    if (a.msg?.includes("ENOJOB")) {
      if (i) process.stdout.write(H1());
      T(
        `[bg-attach] ENOJOB on reconnect short=${e} \u2014 daemon has no handle (or it's killing/settled)`,
      );
      let m = await Trc(e);
      if (m) return m;
      return (
        It("job_attach", "job_attach_crashed"),
        {
          kind: "error",
          orphaned: true,
          msg: "Session crashed \u2014 press Enter to respawn",
        }
      );
    }
    if (a.outcome === "error" && i) process.stdout.write(H1());
  }
  if (a.outcome === "detached" && a.msg && (p7t.test(a.msg) || r.test(a.msg))) {
    if (i) process.stdout.write(H1());
    return (
      Le("job_attach", "job_attach_stalled"),
      {
        kind: "error",
        msg: a.msg.replace(/^E(STALLED|RESPAWNING|STARTING):\s*/, ""),
      }
    );
  }
  if (a.outcome === "error") {
    if (a.msg?.includes("ENOJOB")) {
      T(
        `[bg-attach] ENOJOB on first attach short=${e} \u2014 daemon has no handle (or it's killing/settled)`,
      );
      let u = await Trc(e);
      if (u) return u;
      return (
        It("job_attach", "job_attach_orphaned"),
        {
          kind: "error",
          orphaned: true,
          msg: `${w_e()} lost track of this job \u2014 press Enter to respawn it`,
        }
      );
    }
    if (l && !l.ok)
      return (
        Le("job_attach", "job_attach_daemon_start_failed"),
        {
          kind: "error",
          msg: `Couldn't start the ${mb()} \u2014 ${l.reason}`,
        }
      );
    let c =
      a.msg && r.test(a.msg)
        ? `${w_e()} is still starting \u2014 try again in a moment`
        : a.msg && n.test(a.msg)
          ? `${w_e()} didn't respond after starting \u2014 try again in a moment`
          : a.msg
            ? `Couldn't attach \u2014 ${a.msg}`
            : "Couldn't attach to that session";
    return (
      Le("job_attach", "job_attach_failed"),
      {
        kind: "error",
        msg: c,
      }
    );
  }
  if ((T("[PERF:bg-attach-end]"), xe("job_attach"), a.msg && f7t.test(a.msg)))
    return {
      kind: "detached",
      msg: a.msg.replace(f7t, ""),
    };
  return {
    kind: "detached",
  };
}
async function Sme(e, t = {}) {
  let n = await zi(_c(e)),
    r = await yTe(e, n ?? void 0, {
      knownGone: t.knownGone,
    }).catch((a) => ({
      confirmed: false,
      error: be(a),
    }));
  if (!r.confirmed) {
    if (
      (T(
        `deleteJob: kill unconfirmed for ${e} \u2014 skipping jobdir/worktree removal to avoid stranding a live worker`,
        {
          level: "warn",
        },
      ),
      !t.internal)
    )
      Le("job_delete", "kill_unconfirmed");
    return {
      removed: false,
      error: r.error,
    };
  }
  let o, s, i;
  if (n?.worktreePath) {
    let { dirty: a, gitError: l } = t.force
      ? {
          dirty: false,
          gitError: false,
        }
      : await SHt(n.worktreePath);
    if (a && !l)
      ((o = n.worktreePath),
        (s = "dirty"),
        (i = "worktree_kept_dirty"),
        T(`deleteJob: worktree has uncommitted changes, kept ${n.worktreePath}`, {
          level: "warn",
        }));
    else {
      let c = qf(n.originCwd ?? n.worktreePath) ?? void 0,
        u = !l && c && n.worktreeBranch ? await kHt(c).catch(() => null) : null,
        d = await PYe.realpath(n.worktreePath).catch(() => n.worktreePath),
        p;
      for (let f of u ?? [])
        if ((await PYe.realpath(f.worktreePath).catch(() => f.worktreePath)) === d) {
          p = f;
          break;
        }
      if (p && p.worktreeBranch !== n.worktreeBranch)
        ((o = n.worktreePath),
          (s = "branch_mismatch"),
          (i = "worktree_kept_branch_mismatch"),
          T(
            `deleteJob: ${n.worktreePath} is on branch ${p.worktreeBranch ?? "(detached)"}, expected ${n.worktreeBranch} \u2014 not ours to remove`,
            {
              level: "warn",
            },
          ));
      else if (
        !(await joe(
          n.worktreePath,
          n.worktreeBranch,
          c,
          n.worktreeHookBased,
          t.force ? "job_delete_force" : "job_delete",
        ).catch(() => false))
      )
        ((o = n.worktreePath), (s = "remove_failed"), (i = "worktree_kept_remove_failed"));
    }
  }
  if (
    (await PYe.rm(_c(e), {
      recursive: true,
      force: true,
    }).catch(() => {}),
    sS(_c(e)),
    !t.internal)
  )
    if (i) It("job_delete", i);
    else xe("job_delete");
  return {
    removed: true,
    keptWorktree: o,
    keptReason: s,
  };
}
var PYe,
  vrc,
  iWo = "recap.trigger",
  MYe = "That session isn't running \u2014 respawn it first",
  lWo = "Can't send \u2014 that session is running in another terminal";
