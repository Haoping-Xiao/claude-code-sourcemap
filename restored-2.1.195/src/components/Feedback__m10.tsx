// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iqc
// matched 2.1.88 source: src/components/Feedback.tsx
// class=modified (alt of src/components/Feedback.tsx)  jaccard=0.0079  score=0.0225  fileCov=0.0121
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iqc] deps: Ece, dn, kt, je, At, Is, Jt, WL, q$
((nqc = require("events")), (T2 = require("fs/promises")), (mve = require("path")));
async function aqc(e, t = {}) {
  let n,
    r,
    o = new Map(),
    s = async () => {
      let i = new Set(),
        a = t.spawnPty ?? r9o(),
        l = t.onKeepAliveChange ?? (() => {}),
        c = false,
        u = false,
        d = null,
        p = false,
        f = false,
        m = t.spawnPty === void 0,
        g = () => {
          if (!at("tengu_bg_spare_enable", true)) {
            if (d) (d.dispose(), (d = null));
            return;
          }
          let N = mar();
          if (N > 0 && GZo.freemem() < N) {
            if (d) (d.dispose(), (d = null));
            return;
          }
          if (!f || d || p || c || !u || !a || !m || Vt() === "windows") return;
          p = true;
          let B = null,
            $ = false;
          $Zo({
            log: e,
            onExit: () => {
              if (B === null) {
                $ = true;
                return;
              }
              if (d === B) {
                if (((d = null), Date.now() - B.startedAt >= 2000)) g();
              }
            },
          })
            .then((q) => {
              if (((B = q), !q || c || $)) {
                q?.dispose();
                return;
              }
              ((d = q), G("tengu_bg_spare_spawn", {}));
            })
            .catch((q) => {
              if (gd(q)) {
                T(`bg-spare spawn failed: ${on(q)} ${q.message}`, {
                  level: "warn",
                });
                return;
              }
              ke(q);
            })
            .finally(() => {
              p = false;
            });
        },
        h = async (N, B = 0, $) => {
          if (c) return "closed";
          f = true;
          let q = o.get(N.short);
          if (q) {
            if ((q.isKilling || q.isRetiring || q.record.outcome) && B < 30) {
              if (B === 15 && (q.isKilling || q.isRetiring))
                (G("tengu_bg_dispatch_sigkill_escalate", {}), q.kill("SIGKILL"));
              return (await Nn(100), h(N, B + 1, $));
            }
            let z = q.isKilling || q.isRetiring || q.record.outcome;
            if (
              (e(
                z
                  ? `bg: dispatch ${N.short} dropped \u2014 retry budget exhausted (handle still settling)`
                  : `bg: dup dispatch ${N.short} dropped (existing handle still live)`,
              ),
              z)
            )
              return (Le("daemon_bg_session_create", "dup_retry_exhausted"), "dropped");
            return (xe("daemon_bg_session_create"), "dup-live");
          }
          let W = GZo.freemem(),
            V = mar();
          if (V > 0 && W < V && o.size > 0) {
            let z = Math.round(W / 1024 / 1024);
            (e(
              `bg: low memory (${z}MB free) \u2014 retiring settled workers before spawning ${N.short}`,
            ),
              G("tengu_bg_dispatch_low_mem", {
                free_mb: z,
                handles: o.size,
              }),
              zGe()
                .catch((K) => (ke(K), new Set()))
                .then((K) => {
                  for (let Z of o.values()) Z.retireIfSettled(UZo, K).catch((J) => ke(J));
                }));
          }
          if (N.source === "spare" && V > 0 && W < V)
            return (e(`bg: low memory \u2014 skipping spare dispatch ${N.short}`), "dropped");
          if (
            d &&
            !$ &&
            N.launch.mode !== "exec" &&
            d.cliVersion ===
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.195",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-06-26T01:00:56Z",
                GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
              }.VERSION &&
            at("tengu_bg_spare_enable", true)
          ) {
            let z = d;
            d = null;
            try {
              let K = OZo(N, z, a, t.getAuthSnapshot);
              return (
                o.set(N.short, K),
                jZo(o, K, l, i, e),
                l(),
                G("tengu_bg_spare_claim", {
                  age_ms: Date.now() - z.startedAt,
                }),
                e(`bg claimed-spare ${N.short} (${N.source})`),
                xe("daemon_bg_session_create"),
                g(),
                "claimed"
              );
            } catch (K) {
              let Z = on(K),
                J =
                  Z === "ENOENT"
                    ? "enoent"
                    : Z === "ECONNREFUSED"
                      ? "econnrefused"
                      : K instanceof Error
                        ? "error"
                        : "unknown";
              (G("tengu_bg_spare_claim_fail", {
                reason: $e(J),
              }),
                z.dispose());
            }
          }
          let Y = Oz.spawn(
            N,
            a,
            t.getAuthSnapshot,
            $
              ? {
                  afterUpgrade: $,
                }
              : void 0,
          );
          return (
            o.set(N.short, Y),
            jZo(o, Y, l, i, e),
            l(),
            g(),
            e(`bg spawned ${N.short} (${N.source})`),
            xe("daemon_bg_session_create"),
            "spawned"
          );
        },
        y = (N = "SIGTERM") => {
          let B = 0;
          for (let $ of o.values()) if (!$.record.outcome) ($.kill(N), B++);
          return B;
        };
      (await pnr(), await SNl());
      let b = await mrc(
        o,
        h,
        t.onNudge ?? (async () => false),
        (N) => {
          let B = N ? y("SIGTERM") : 0;
          return (t.onShutdown?.(), B);
        },
        () => u,
        t.onYield ?? (() => false),
      );
      ((n = b),
        e(`bg: control socket bound at ${Fk(Pq())}`),
        b.onLeaseChange.subscribe(l),
        b.onLeaseChange.subscribe(() => {
          if (b.leaseCount() > 0 && !f) ((f = true), g());
        }),
        await Promise.all(
          Vt() === "windows"
            ? [
                kp
                  .mkdir(XOe(), {
                    recursive: true,
                  })
                  .catch(() => {}),
              ]
            : [
                kp
                  .mkdir(MNo(), {
                    recursive: true,
                    mode: 448,
                  })
                  .catch(() => {}),
                kp
                  .mkdir(wEt(), {
                    recursive: true,
                    mode: 448,
                  })
                  .catch(() => {}),
              ],
        ),
        ENl());
      let _ = await h3(),
        S = 0,
        A = 0,
        v = 0;
      if (
        (await Promise.all(
          Object.entries(_.workers).map(async ([N, B]) => {
            let $;
            try {
              $ = await Oz.adopt(N, B, a, t.getAuthSnapshot);
            } catch (q) {
              (ke(TEt(q)), A++);
              return;
            }
            if (!$ && B.procStart === void 0 && B.ptySock && (await Har(B.ptySock))) {
              B.procStart = await KR(B.pid);
              try {
                $ = await Oz.adopt(N, B, a, t.getAuthSnapshot);
              } catch (q) {
                (ke(TEt(q)), ($ = null));
              }
              $ ??= Oz.unverified(N, B);
            }
            if ($) (o.set(N, $), jZo(o, $, l, i, e), S++);
            else if (B.pendingRespawn === "upgrade")
              (v++,
                G("tengu_bg_adopt_upgrade_respawn", {}),
                h(B.dispatch, 0, true).catch((q) => ke(q)));
            else {
              A++;
              let q = (await Aar(B.ptySock, B.dispatch)) ?? {
                state: "failed",
                detail: "process gone while supervisor was down",
              };
              if (
                (YGe(N, q.state, q.detail), kp.unlink(V7t(N)).catch(() => {}), Vt() === "windows")
              )
                (kp.unlink(IHe(N)).catch(() => {}),
                  kp.unlink(GL(dR(N))).catch(() => {}),
                  kp.unlink(DP(dR(N))).catch(() => {}),
                  kp.unlink(XQ(B.ptySock ?? dR(N))).catch(() => {}));
              else if (
                (kp.unlink(q7t(N)).catch(() => {}),
                kp.unlink(B.rendezvousSock).catch(() => {}),
                B.ptySock)
              ) {
                (kp.unlink(B.ptySock).catch(() => {}),
                  kp.unlink(GL(B.ptySock)).catch(() => {}),
                  kp.unlink(DP(B.ptySock)).catch(() => {}),
                  kp.unlink(XQ(B.ptySock)).catch(() => {}));
                try {
                  process.kill(B.pid, 0);
                } catch {
                  sje([-B.pid]);
                }
              }
            }
          }),
        ),
        S + A + v > 0)
      )
        if (
          (e(`bg adopt: adopted=${S} respawned=${v} dead=${A}`),
          G("tengu_bg_adopt", {
            adopted: S,
            respawned: v,
            dead: A,
          }),
          A === 0)
        )
          xe("daemon_bg_adopt");
        else if (S > 0 || v > 0) It("daemon_bg_adopt", "partial");
        else Le("daemon_bg_adopt", "all_workers_dead");
      let C = await mse().catch(() => null),
        x = C?.pid === process.pid,
        k = !(C !== null && C.pid !== process.pid) && !(t.isShuttingDown?.() ?? false);
      if (!x)
        e(
          `bg: skipped post-adopt sweeps + roster rewrite \u2014 daemon.lock is ${C ? `held by pid ${C.pid}` : "absent"} (yield/handover in flight)`,
        );
      if (x && !_.parseFailed) tNm(o, e);
      if (x && !_.parseFailed) await NZo(o, e);
      if (x)
        await CEt((N) => {
          N.workers = {};
          for (let [B, $] of o) N.workers[B] = $.rosterEntry();
        }).catch((N) => ke(N));
      let D = k ? await sqc((N) => void h(N).catch((B) => ke(B))) : null;
      if (((r = D ?? void 0), (u = k), l(), k && o.size > 0)) f = true;
      g();
      let P = Date.now(),
        O = false,
        L = setInterval(
          async (N, B) => {
            if (O) return;
            O = true;
            try {
              await M(N, B);
            } finally {
              O = false;
            }
          },
          FZo,
          o,
          g,
        );
      async function M(N, B) {
        {
          let $ = Date.now(),
            q = $ - P - FZo;
          if (((P = $), q > FZo)) {
            for (let J of N.values()) J.shiftGraceClocksForward(q);
            B();
            return;
          }
          let W = _Qt(),
            V = W ? UZo : Z1m,
            Y = W ? UZo : arc(),
            z = await zGe().catch((J) => (ke(J), new Set()));
          for (let J of N.values())
            if (z.has(J.dispatch.short)) J.respawnIfIdleStale(z).catch((ne) => ke(ne));
          let K = await Promise.all(
              [...N.values()].map((J) =>
                J.retireIfSettled(V, z, Y)
                  .then((ne) => ne.retired)
                  .catch((ne) => (ke(ne), false)),
              ),
            ),
            Z = On(K, (J) => J);
          if (W && Z === 0 && _Qt()) {
            let J = [...N.values()].filter((ne) => z.has(ne.dispatch.short));
            if (J.length > 0) {
              (e(
                "bg: low memory persists after shedding non-pinned \u2014 retiring pinned settled workers as a last resort",
              ),
                G("tengu_bg_retire_pinned_low_mem", {}));
              for (let ne of J) ne.retireIfSettled(V, eNm, Y).catch((oe) => ke(oe));
            }
          }
          if (!W && gar()) {
            let J = at("tengu_bg_prewarm_per_sweep", 3),
              ne = 12;
            for (let oe of N.values()) {
              if (J <= 0 || ne <= 0) break;
              if (z.has(oe.dispatch.short)) continue;
              if (oe.isBooting) {
                J--;
                continue;
              }
              if (
                !oe.record.cliVersion ||
                oe.record.cliVersion ===
                  {
                    ISSUES_EXPLAINER:
                      "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.195",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-06-26T01:00:56Z",
                    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
                  }.VERSION
              )
                continue;
              if (
                (
                  await oe.respawnIfIdleStale(void 0, "prewarm").catch(
                    (ee) => (
                      ke(ee),
                      {
                        respawned: false,
                      }
                    ),
                  )
                ).respawned
              )
                J--;
              else ne--;
            }
          }
          B();
        }
      }
      return (
        L.unref(),
        {
          handles: o,
          dispatch: (N) => void h(N).catch((B) => ke(B)),
          leaseCount: b.leaseCount,
          liveHandleCount: () => {
            let N = 0;
            for (let B of o.values()) if (!B.record.outcome) N++;
            return N;
          },
          pendingSettleWrites: () => i.size,
          killAll: y,
          close: async (N) => {
            let B = N?.displaced ?? false;
            if (((c = true), clearInterval(L), d)) (d.dispose(), (d = null));
            await Promise.all([
              D?.close().catch(() => {}),
              b
                .close({
                  skipUnlink: B || N?.skipPathCleanup,
                })
                .catch(() => {}),
            ]);
            for (let $ of o.values()) $.stop();
            if (
              (await Promise.allSettled([...i]),
              !B && o.size === 0 && !_.parseFailed && !N?.skipPathCleanup && Vt() !== "windows")
            )
              await kp
                .rm(Ffe(), {
                  recursive: true,
                  force: true,
                })
                .catch(() => {});
          },
        }
      );
    };
  try {
    return await yl("daemon_bg_manager_start", s, (i) => xd(i)?.toLowerCase() ?? "error");
  } catch (i) {
    for (let l of o.values()) l.stop();
    await r?.close().catch(() => {});
    let a = await mse().catch(() => null);
    throw (
      await n
        ?.close(
          a?.pid === process.pid
            ? void 0
            : {
                skipUnlink: true,
              },
        )
        .catch(() => {}),
      i
    );
  }
}
function jZo(e, t, n, r, o) {
  let s = (i) => {
    (r.add(i), i.finally(() => r.delete(i)));
  };
  (t.onSettle.subscribe((i) => {
    o(`bg settled ${t.record.short} (${i})`);
    let a = _c(t.record.short),
      l = i === "done" ? "done" : i === "killed" ? "stopped" : "failed",
      c = t.record.detail;
    if (t.shouldDeleteJobDir)
      s(
        kp
          .rm(a, {
            recursive: true,
            force: true,
          })
          .catch((d) => ke(d)),
      );
    else
      s(
        zi(a)
          .then((d) => {
            if (
              d
                ? (Vh(d) && !(i === "crashed" && d.state === "failed")) ||
                  (i === "done" && d.state === "blocked" && t.dispatch.launch.mode !== "exec")
                : i !== "crashed" || t.dispatch.source === "spare"
            ) {
              if (!d && t.dispatch.source === "spare")
                return kp.access(WZo.join(a, "state.json")).then(
                  () => {
                    return;
                  },
                  (m) =>
                    on(m) === "ENOENT"
                      ? kp
                          .rm(a, {
                            recursive: true,
                            force: true,
                          })
                          .catch((g) => ke(g))
                      : void 0,
                );
              return;
            }
            let p = new Date().toISOString(),
              f = d ?? {
                state: "working",
                detail: "",
                tempo: "active",
                output: null,
                children: null,
                linkScanOffset: 0,
                template:
                  t.dispatch.launch.mode === "exec"
                    ? "exec"
                    : (t.dispatch.agent ?? t.dispatch.routine ?? "bg"),
                routine: t.dispatch.routine,
                respawnFlags: j0e([...t.dispatch.respawnFlags]),
                intent: t.record.intent,
                name: t.record.name,
                sessionId: t.record.sessionId,
                cwd: t.record.cwd,
                worktreePath: t.dispatch.worktree?.path ?? t.record.worktreePath,
                createdAt: new Date(t.dispatch.createdAt).toISOString(),
                updatedAt: p,
                firstTerminalAt: null,
                backend: "daemon",
              };
            return Kd(a, {
              ...f,
              state: l,
              detail: l === "stopped" ? "stopped" : (c || f.detail).replace(/; respawning$/, ""),
              tempo: "idle",
              inFlight: void 0,
              needs: void 0,
              block: void 0,
              updatedAt: p,
              firstTerminalAt: f.firstTerminalAt ?? p,
            });
          })
          .catch((d) => ke(d)),
      );
    (s(
      CEt((d) => {
        delete d.workers[t.record.short];
      }).catch((d) => ke(d)),
    ),
      s(kp.unlink(V7t(t.record.short)).catch(() => {})));
    let u = t.rosterEntry();
    if (Vt() === "windows")
      (s(kp.unlink(IHe(t.record.short)).catch(() => {})),
        s(kp.unlink(GL(dR(t.record.short))).catch(() => {})),
        s(kp.unlink(DP(dR(t.record.short))).catch(() => {})),
        s(kp.unlink(XQ(u.ptySock ?? dR(t.record.short))).catch(() => {})));
    else if (
      (s(kp.unlink(q7t(t.record.short)).catch(() => {})),
      s(kp.unlink(u.rendezvousSock).catch(() => {})),
      u.ptySock)
    )
      (s(kp.unlink(u.ptySock).catch(() => {})),
        s(kp.unlink(GL(u.ptySock)).catch(() => {})),
        s(kp.unlink(DP(u.ptySock)).catch(() => {})),
        s(kp.unlink(XQ(u.ptySock)).catch(() => {})));
    if (t.dispatch.launch.mode === "exec" && i !== "killed") {
      (n(),
        setTimeout(
          (p, f, m) => {
            if (p.get(f) === m) p.delete(f);
          },
          300000,
          e,
          t.record.short,
          t,
        ).unref());
      return;
    }
    (e.delete(t.record.short), n());
  }),
    t.onState.subscribe((i) => {
      if (i.pid)
        CEt((a) => {
          a.workers[t.record.short] = t.rosterEntry();
        }).catch((a) => ke(a));
      if (i.state === "crashed" || i.state === "resuming") {
        let a = i.state,
          l = t.record.detail,
          c = a === "crashed" ? "idle" : "active",
          u = _c(t.record.short);
        zi(u)
          .then((d) => {
            if (t.record.outcome || !d || Vh(d) || d.state === "blocked" || d.tempo === "blocked")
              return;
            if (a === "resuming" && d.state !== "crashed") return;
            return Kd(u, {
              ...d,
              state: a,
              detail: l,
              tempo: c,
              inFlight: void 0,
              updatedAt: new Date().toISOString(),
            });
          })
          .catch((d) => ke(d));
      }
    }));
}
async function tNm(e, t) {
  let n = Vt() === "windows",
    [r, o] = n ? [XOe(), ".pid"] : [wEt(), ".sock"],
    s = await kp.readdir(r).catch(() => []),
    i = new Set(s.filter((l) => l.endsWith(o))),
    a = 0;
  for (let l of s) {
    if (!l.endsWith(o)) {
      let p = (n ? [".err", ".late"] : [".err", ".late", ".exec-exit"]).find((f) =>
        l.endsWith(n ? f : `.sock${f}`),
      );
      if (p) {
        let f = l.slice(0, -p.length),
          m = n ? f.lastIndexOf("-pty-") : -1,
          g = n ? (m >= 0 ? `${f.slice(m + 5)}.pid` : "") : f;
        if (g && !i.has(g)) kp.unlink(WZo.join(r, l)).catch(() => {});
      }
      continue;
    }
    let c = l.slice(0, -o.length);
    if (e.has(c)) continue;
    a++;
    let u = IHe(c);
    DYe(dR(c)).then((d) => {
      let p = GL(dR(c)),
        f = DP(dR(c)),
        m = XQ(dR(c));
      if (!n) {
        (YGe(c, "failed", "reaped (roster gap)"),
          kp.unlink(f).catch(() => {}),
          kp.unlink(m).catch(() => {}));
        return;
      }
      if (d) {
        (YGe(c, "failed", "reaped (roster gap)"),
          kp.unlink(u).catch(() => {}),
          kp.unlink(p).catch(() => {}),
          kp.unlink(f).catch(() => {}),
          kp.unlink(m).catch(() => {}));
        return;
      }
      nR(u, 4096)
        .then((g) => {
          if (g === null) return;
          if (!zR(Number(g)))
            (YGe(c, "failed", "reaped (roster gap)"),
              kp.unlink(u).catch(() => {}),
              kp.unlink(p).catch(() => {}),
              kp.unlink(f).catch(() => {}),
              kp.unlink(m).catch(() => {}));
        })
        .catch(() => {});
    });
  }
  if (a)
    (t(`bg orphan-reap: ${a} roster-less pty host(s)`),
      G("tengu_bg_orphan_reap", {
        reaped: a,
      }));
}
var kp,
  GZo,
  WZo,
  Z1m = 3600000,
  UZo = 60000,
  FZo = 60000,
  eNm;
