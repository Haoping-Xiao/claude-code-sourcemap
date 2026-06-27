// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module urc
// matched 2.1.88 source: src/bridge/bridgeMain.ts
// class=new  jaccard=0.0107  score=0.0406  fileCov=0.0143
// note: nearest: src/bridge/bridgeMain.ts (0.0107); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var urc = E(() => {
  je();
  Is();
});
function _Jf() {
  let e = at("tengu_bg_attach_stall_ms", yJf);
  return e === 0 ? 0 : Math.max(2000, e);
}
async function bJf(e, t, n, r) {
  let o = e.dispatch,
    s = await zi(_c(o.short)).catch(() => null),
    i = s?.resumeSessionId ?? o.sessionId,
    a = s?.cwd ?? o.cwd,
    l = await xae(i, a, s?.linkScanPath),
    c = l.hasMessages;
  if (!c) await wHt.rm(l.path, {
    force: !0
  }).catch(() => {});
  if (e.getPhase().kind !== "running" || t.destroyed || r()) return;
  e.kill("SIGKILL"), n({
    ...o,
    cwd: a,
    source: "respawn",
    reattachEnv: void 0,
    attachStallRespawns: (o.attachStallRespawns ?? 0) + 1,
    launch: c ? {
      mode: "resume",
      sessionId: i,
      transcriptPath: l.path,
      fork: !1,
      flagArgs: s?.respawnFlags ?? o.respawnFlags
    } : i !== o.sessionId ? {
      mode: "prompt",
      args: ["--session-id", i, ...(s?.respawnFlags ?? o.respawnFlags)]
    } : o.launch
  }).catch(u => ke(u));
}
async function mrc(e, t, n, r = () => 0, o = () => !0, s = () => !1) {
  let i = Pq();
  await pnr();
  let a = await bNl();
  await wHt.unlink(i).catch(() => {});
  let l = new Set(),
    c = new Map(),
    u = Mi(),
    d = (h, y) => {
      if (c.has(h)) return;
      c.set(h, y), G("tengu_daemon_lease", {
        op: We("open"),
        label: y?.label ?? null
      }), h.once("close", () => {
        c.delete(h), G("tengu_daemon_lease", {
          op: We("close"),
          label: y?.label ?? null
        }), u.emit();
      }), u.emit();
    },
    p = () => {
      let h = [];
      for (let y of c.values()) if (y) h.push(y);
      return h;
    },
    f = !1,
    m = prc.createServer(h => {
      if (f) {
        h.destroy();
        return;
      }
      h.on("error", () => h.destroy()), h.setTimeout(30000, () => h.destroy()), l.add(h), h.once("close", () => l.delete(h));
      let y = lrc(h);
      if (y) {
        G("tengu_daemon_peer_uid_reject", {}), h.once("data", () => xp(h, {
          ok: !1,
          code: "EPEERUID",
          error: y
        }));
        return;
      }
      let b = Buffer.alloc(0),
        _ = S => {
          b = Buffer.concat([b, S]);
          let A = b.indexOf(10);
          if (A < 0) {
            if (b.length > SQt) h.off("data", _), xp(h, {
              ok: !1,
              code: "ETOOLARGE",
              error: `request exceeds ${SQt >> 20}MB \u2014 shorten the prompt or send in parts`
            });
            return;
          }
          h.off("data", _), h.setTimeout(0);
          let v = b.subarray(0, A).toString("utf8"),
            C = b.subarray(A + 1);
          SJf(e, t, n, r, o, s, d, p, a, h, v, C).catch(x => {
            xp(h, {
              ok: !1,
              error: be(x),
              code: "EUNKNOWN"
            });
          });
        };
      h.on("data", _);
    });
  m.on("error", h => {
    if (gd(h) && h.syscall === "listen") {
      T(`bg control server bind: ${Fk(be(h))}`, {
        level: "warn"
      });
      return;
    }
    ke(h);
  });
  let g = Date.now() + WGo;
  for (;;) try {
    await new Promise((h, y) => {
      m.once("error", y), m.listen(i, () => {
        m.removeListener("error", y), h();
      });
    });
    break;
  } catch (h) {
    if (on(h) !== "EADDRINUSE" || Date.now() >= g) throw h;
    m.removeAllListeners("listening"), await Nn(100);
  }
  return {
    close: h => new Promise(y => {
      for (let b of l) b.destroy();
      if (h?.skipUnlink) return f = !0, m.unref(), void y();
      m.close(() => {
        if (!h?.skipUnlink) wHt.unlink(i).catch(() => {});
        y();
      });
    }),
    leaseCount: () => c.size,
    onLeaseChange: u
  };
}
function xp(e, t) {
  if (e.destroyed) return;
  e.end(De(t) + `
`);
}
function bQt(e, t) {
  if (e.destroyed) return;
  if (e.writableLength > SQt) {
    e.destroy();
    return;
  }
  e.write(De(t) + `
`);
}
function GGo(e) {
  return !e.record.outcome && !e.isRetiring && !e.isKilling;
}
async function drc(e, t, n, r, o, s, i) {
  let a = Date.now() + Math.min(s, 30000),
    l = !1,
    c = !1,
    u,
    d;
  i?.then(p => {
    d = p;
  }, p => {
    ke(p), d = "dropped";
  });
  while (Date.now() < a) {
    if (t.destroyed) return;
    let p = d === "dup-live" || d === "dropped" || d === "closed",
      f = e.get(r);
    if (f) {
      if (o && f.record.nonce !== o) {
        if (c = !0, u = GGo(f) ? f : void 0, p) break;
        if (!u && !l) l = !0, a += Math.min(s, 30000);
        await Nn(25);
        continue;
      }
      return xp(t, {
        ok: !0,
        op: n,
        short: r,
        pid: f.record.pid,
        messagingSock: f.record.messagingSock ?? "",
        via: f.via
      });
    }
    if (u = void 0, p) break;
    await Nn(25);
  }
  if (c) {
    if (u && e.get(r) === u && GGo(u)) return xp(t, {
      ok: !0,
      op: n,
      short: r,
      pid: u.record.pid,
      messagingSock: u.record.messagingSock ?? "",
      via: u.via
    });
    return xp(t, {
      ok: !1,
      error: "a previous dispatch with this id is still being cleaned up \u2014 retry in a moment",
      code: "ESTALE"
    });
  }
  return xp(t, {
    ok: !1,
    error: `${mb()} didn't acknowledge in time \u2014 retry`,
    code: "ETIMEOUT"
  });
}
async function SJf(e, t, n, r, o, s, i, a, l, c, u, d) {
  let p;
  try {
    p = Ft(u);
  } catch {
    return xp(c, {
      ok: !1,
      error: "bad json",
      code: "EUNKNOWN"
    });
  }
  if (p === null || typeof p !== "object") return xp(c, {
    ok: !1,
    error: "bad json",
    code: "EUNKNOWN"
  });
  let f = p.op;
  if (f === "ping") return xp(c, {
    ok: !0,
    op: "ping",
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION,
    proto: hp
  });
  if (f === "nudge") return xp(c, {
    ok: !0,
    op: "nudge",
    restarting: await n(),
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION
  });
  if (f === "yield") return xp(c, {
    ok: !0,
    op: "yield",
    yielding: s()
  });
  if (f === "lease") {
    i(c, EJf(p.client)), c.write(De({
      ok: !0,
      op: "lease"
    }) + `
`);
    return;
  }
  if (f === "leases") return xp(c, {
    ok: !0,
    op: "leases",
    clients: a()
  });
  if (f === "shutdown") {
    let y = p.reapWorkers !== !1,
      b = r(y);
    return xp(c, {
      ok: !0,
      op: "shutdown",
      reaped: b
    });
  }
  if (!o()) return xp(c, {
    ok: !1,
    error: `${mb()} starting (adoption in progress)`,
    code: "ESTARTING"
  });
  let m = p.proto;
  if (typeof m !== "number" || !Number.isInteger(m) || m < d7t || m > hp) return G("tengu_bg_proto_mismatch", {
    client_proto: typeof m === "number" ? m : -1,
    server_proto: hp
  }), xp(c, {
    ok: !1,
    error: `proto mismatch (server=${hp}, client=${m}) \u2014 ${mb()} and CLI versions differ; restart claude`,
    code: "EPROTO",
    serverProto: hp,
    serverVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION
  });
  let g = LPl().safeParse(p);
  if (!g.success) return xp(c, {
    ok: !1,
    error: `malformed request: ${g.error.issues[0]?.message ?? "invalid"}`,
    code: "EUNKNOWN"
  });
  let h = g.data;
  switch (h.op) {
    case "ping":
    case "nudge":
    case "yield":
    case "lease":
    case "leases":
    case "shutdown":
      return;
    case "list":
      return xp(c, {
        ok: !0,
        op: "list",
        jobs: Array.from(e.values()).map(y => y.isKilling || y.isRetiring ? {
          ...y.record,
          dying: !0
        } : y.record)
      });
    case "has":
      {
        let y = e.get(h.short);
        return xp(c, {
          ok: !0,
          op: "has",
          alive: y !== void 0 && GGo(y),
          present: y !== void 0,
          ready: y !== void 0 && !y.isBooting
        });
      }
    case "await-ack":
      return drc(e, c, "await-ack", h.short, h.nonce, h.timeoutMs);
    case "dispatch":
      if (!Joe(h.auth, l)) return xp(c, {
        ok: !1,
        error: "dispatch rejected: this client didn't present the daemon control key",
        code: "EAUTH"
      });
      if (await Nn(0), c.readableEnded || c.destroyed) {
        G("tengu_bg_dispatch_stale_drop", {});
        return;
      }
      return drc(e, c, "dispatch", h.d.short, h.d.nonce, h.timeoutMs, t(h.d));
    case "reply":
      {
        if (!Joe(h.auth, l)) return xp(c, {
          ok: !1,
          error: h.auth === void 0 ? "reply rejected: this window didn't present the daemon control key \u2014 it is likely running a Claude Code older than the daemon (left open across an update?); restart this window and retry, or stop driving the control socket directly" : "reply rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
          code: "EAUTH"
        });
        let y = e.get(h.short);
        if (!y || y.isRetiring || y.isKilling || y.record.outcome) return xp(c, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        if (!(await y.reply(h.text))) return xp(c, {
          ok: !1,
          error: "job isn't accepting replies \u2014 it may be in a non-interactive state",
          code: "ENOREPLY"
        });
        return xp(c, {
          ok: !0,
          op: "reply"
        });
      }
    case "kill":
      {
        let y = e.get(h.short);
        if (!y) return xp(c, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        if (y.dispatch.launch.mode === "exec" && y.record.outcome) return e.delete(h.short), xp(c, {
          ok: !0,
          op: "kill"
        });
        return y.kill(h.signal ?? "SIGTERM"), xp(c, {
          ok: !0,
          op: "kill"
        });
      }
    case "respawn-stale":
      {
        let y = e.get(h.short);
        if (!y) return xp(c, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        let b = await y.respawnIfIdleStale();
        return xp(c, {
          ok: !0,
          op: "respawn-stale",
          ...b
        });
      }
    case "resize":
      {
        let y = e.get(h.short);
        if (!y) return xp(c, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        if (h.attachId) {
          let b = y.attachers.get(h.attachId);
          if (!b) return xp(c, {
            ok: !0,
            op: "resize"
          });
          if (b.cols = h.cols, b.rows = h.rows, b.repaint) return b.repaint(), xp(c, {
            ok: !0,
            op: "resize"
          });
        }
        return y.resize(h.cols, h.rows), xp(c, {
          ok: !0,
          op: "resize"
        });
      }
    case "attach":
      {
        if (h.auth === void 0) T("[bg-attach] legacy client (no control key) \u2014 allowed via peerUid", {
          level: "warn"
        });else if (!Joe(h.auth, l)) return xp(c, {
          ok: !1,
          error: "attach rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
          code: "EAUTH"
        });
        let y = e.get(h.short);
        if (!y || y.isKilling || y.record.outcome && y.dispatch.launch.mode !== "exec") return xp(c, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        if (y.isUnverified) return xp(c, {
          ok: !1,
          error: "worker is live but supervisor could not verify its identity \u2014 try restarting the supervisor to re-adopt",
          code: "EUNVERIFIED"
        });
        if (y.isRetiring) return xp(c, {
          ok: !1,
          error: "job is retiring; retry attach",
          code: "ERESPAWNING"
        });
        if (y.record.legacy) {
          let K = y.dispatch,
            Z = await zi(_c(K.short)).catch(() => null),
            J = Z?.resumeSessionId ?? K.sessionId,
            ne = Z?.cwd ?? K.cwd,
            oe = await xae(J, ne, Z?.linkScanPath),
            re = oe.hasMessages;
          if (!re) await wHt.rm(oe.path, {
            force: !0
          }).catch(() => {});
          if (e.get(h.short) !== y || c.destroyed) return xp(c, {
            ok: !1,
            error: "supervisor restarting",
            code: "ERESPAWNING"
          });
          if (!y.isKilling) G("tengu_bg_attach_legacy_autorespawn", {}), y.kill("SIGTERM"), t({
            ...K,
            cwd: ne,
            source: "respawn",
            launch: re ? {
              mode: "resume",
              sessionId: J,
              transcriptPath: oe.path,
              fork: !1,
              flagArgs: Z?.respawnFlags ?? K.respawnFlags
            } : J !== K.sessionId ? {
              mode: "prompt",
              args: ["--session-id", J, ...(Z?.respawnFlags ?? K.respawnFlags)]
            } : K.launch
          }).catch(ee => ke(ee));
          return xp(c, {
            ok: !1,
            error: "legacy job respawning with worker-owned PTY; retry attach",
            code: "ERESPAWNING"
          });
        }
        if (y.record.cliVersion && y.record.cliVersion !== {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
        }.VERSION && gar()) {
          let K = await y.respawnIfIdleStale(void 0, "attach");
          if (K.respawned || K.reason === "in-progress") return xp(c, {
            ok: !1,
            error: "job is restarting on the updated Claude Code; retry attach",
            code: "ERESPAWNING"
          });
          if (e.get(h.short) !== y || c.destroyed) return xp(c, {
            ok: !1,
            error: "supervisor restarting",
            code: "ERESPAWNING"
          });
        }
        i(c, null), c.write(De({
          ok: !0,
          op: "attach",
          decModes: y.decModeSnapshot(),
          via: y.via,
          tempo: y.record.tempo,
          state: y.record.state
        }) + `
`), G("tengu_bg_attach", {
          tempo: $e(y.record.tempo),
          state: y.record.state,
          via: $e(y.via),
          attachers: y.attachers.size
        });
        let b = dH + Oke,
          _ = 6,
          S = [],
          A = 0,
          v = "",
          C = () => {},
          x,
          I = 0,
          k = !1,
          D = _Jf(),
          P = D === 0 ? 0 : Math.max(1, Math.ceil((D - 500) / 1000)),
          O = K => Jx + dH + `
  \x1B[2m${K}\x1B[0m
`,
          L = K => {
            if (S === null) return;
            let Z = S;
            if (S = null, clearTimeout(M), K && !c.destroyed) for (let J of Z) c.write(J);
          },
          M = setTimeout(() => {
            let K = S !== null && A === 0,
              Z = K && h.holdingFrame === !0;
            if (!Z) L(!0);
            if (K && !c.destroyed) {
              if (!Z) {
                let J = y.record.state,
                  ne = J === "starting" || J === "resuming" || J === "adopted" || J === "crashed" ? "Session is starting \u2014 it will appear once ready. Ctrl+Z to detach" : "Waiting for session to redraw\u2026 Ctrl+Z to detach";
                c.write(O(ne));
              }
              x = setInterval(() => {
                if (I++, P > 0 && I >= P && !y.isKilling && !y.isRetiring && y.dispatch.launch.mode !== "exec") {
                  clearInterval(x), x = void 0, C();
                  let ne = y.dispatch.attachStallRespawns ?? 0,
                    oe = {
                      state: y.record.state,
                      via: $e(y.via),
                      attempt: ne
                    };
                  if (ne >= 2) {
                    if (G("tengu_bg_attach_stall_gave_up", oe), c.write(O("Session keeps stalling at startup.") + kfe(`ESTALLED: Session ${h.short} keeps stalling at startup \u2014 check ${_c(h.short)} for logs.`)), !y.isKilling) y.kill("SIGKILL", "failed", "session keeps stalling at startup");
                    return;
                  }
                  G("tengu_bg_attach_stall_respawn", oe), c.write(O("Session not responding \u2014 restarting it\u2026")), bJf(y, c, t, () => k).catch(ke).finally(() => {
                    if (!c.destroyed) c.write(kfe("ERESPAWNING: worker stalled, restarting"));
                  });
                  return;
                }
                let J = y.attachers.get(q);
                C(), C = y.resizeForRepaint(J?.cols ?? h.cols, J?.rows ?? h.rows);
              }, 1000), x.unref();
            }
          }, 500),
          N = () => {
            if (x) clearInterval(x), x = void 0;
          },
          B = y.onStream.subscribe(K => {
            if (c.destroyed) return;
            if (k = !0, S !== null) {
              let Z = v + K;
              if (Z.includes(Jx) || Z.includes(b)) {
                N();
                let J = K.includes(Jx) || K.includes(b) ? K : Z;
                if (C(), L(!1), c.writableLength <= SQt) c.write(y.decModeSnapshot().map(RU).join("") + J);else c.destroy();
                return;
              }
              if (S.push(K), A += K.length, v = Z.slice(-_), A > 65536) L(!0);
              return;
            }
            if (N(), c.writableLength > SQt) {
              c.destroy();
              return;
            }
            c.write(K);
          }),
          $ = y.onRepaintDone.subscribe(() => {
            C(), L(!0);
          });
        if (Vt() === "windows") for (let K of y.attachers.values()) K.kick();
        let q = h.attachId ?? c;
        y.attachers.set(q, {
          cols: h.cols,
          rows: h.rows,
          caps: h.caps,
          deliver: K => {
            if (!c.destroyed) c.write(K);
          },
          kick: () => {
            if (G("tengu_bg_attach_kick", {}), x) clearInterval(x), x = void 0;
            if (clearTimeout(M), C(), B(), $(), c.removeAllListeners("data"), !c.destroyed) c.write(kfe("EKICKED: Session opened in another window")), c.end();
            y.attachers.delete(q);
          }
        }), y.noteActivity(), y.seedFocus(!0), y.sendAttacherCaps(h.caps ?? null);
        let W;
        if (y.dispatch.launch.mode === "exec") {
          c.write(Jx + dH);
          for (let K of y.ringSnapshot()) c.write(K);
          if (L(!1), W = () => {
            let K = y.attachers.get(q);
            if (c.destroyed || !K) return;
            let J = `\r
\x1B[2m\u2014 ${y.record.outcome === "done" ? "done" : y.record.outcome === "killed" ? "stopped" : "failed"} \xB7 Ctrl+Z to return \u2014\x1B[0m\r
`;
            c.write(J), K.repaint = () => {
              if (c.destroyed) return;
              c.write(Jx + dH);
              for (let ne of y.ringSnapshot()) c.write(ne);
              c.write(J);
            };
          }, y.record.outcome) {
            W(), c.once("close", () => {
              clearTimeout(M), B(), $(), y.attachers.delete(q);
            });
            return;
          }
        }
        C = y.resizeForRepaint(h.cols, h.rows);
        let V = y.onSettle.subscribe(() => {
            if (W && y.record.outcome !== "killed") return W();
            c.end();
          }),
          Y = new frc.StringDecoder("utf8"),
          z = K => {
            let Z = Y.write(K);
            if (Z.length > 0 && !HJf(Z)) y.lastInputAttacher = q;
            y.write(Z);
          };
        if (d.length) z(d);
        c.on("data", z), c.once("close", () => {
          if (x) clearInterval(x);
          if (C(), L(!1), B(), V(), $(), !y.attachers.delete(q)) return;
          let K = Y.end();
          if (K) y.write(K);
          if (y.attachers.size > 0) {
            let Z = [...y.attachers.values()].at(-1);
            y.resizeForRepaint(Z.cols, Z.rows), y.sendAttacherCaps(Z.caps ? {
              ...Z.caps,
              systemTheme: void 0
            } : null);
          } else y.seedFocus(!1), y.sendAttacherCaps(null);
        });
        return;
      }
    case "ensure-spare":
      return xp(c, {
        ok: !0,
        op: "ensure-spare"
      });
    case "permission-response":
      if (!Joe(h.auth, l)) return xp(c, {
        ok: !1,
        error: "permission-response rejected: this client didn't present the daemon control key",
        code: "EAUTH"
      });
      return xp(c, {
        ok: !0,
        op: "permission-response"
      });
    case "subscribe":
      {
        let y = e.get(h.short);
        if (!y) return xp(c, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
        if (i(c, null), bQt(c, {
          type: "snapshot",
          record: y.record,
          streamTail: y.tail(h.tail ?? 200)
        }), y.record.outcome) {
          bQt(c, {
            type: "settled",
            outcome: y.record.outcome
          }), c.end();
          return;
        }
        let b = [y.onStream.subscribe(_ => bQt(c, {
          type: "stream",
          line: _
        })), y.onState.subscribe(_ => bQt(c, {
          type: "state",
          patch: _
        })), y.onSettle.subscribe(_ => {
          bQt(c, {
            type: "settled",
            outcome: _
          }), c.end();
        })];
        c.on("close", () => {
          for (let _ of b) _();
        });
        return;
      }
    default:
      return xp(c, {
        ok: !1,
        error: `unknown op: ${h.op}`,
        code: "EUNKNOWN"
      });
  }
}
function EJf(e) {
  if (e === null || typeof e !== "object") return null;
  let t = e;
  if (typeof t.label === "string" && typeof t.cwd === "string" && typeof t.pid === "number") return {
    label: t.label,
    cwd: t.cwd,
    pid: t.pid
  };
  return null;
}
function HJf(e) {
  if (!e.includes("\x1B")) return !1;
  return e.replace(AJf, "").length === 0;
}
var wHt,
  prc,
  frc,
  SQt = 1048576,
  yJf = 5000,
  WGo = 1e4,
  AJf;