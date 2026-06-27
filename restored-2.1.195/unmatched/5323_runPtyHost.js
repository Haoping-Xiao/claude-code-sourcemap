// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cuc
// matched 2.1.88 source: node_modules/human-signals/build/src/core.js
// class=new  jaccard=0.0498  score=0.1575  fileCov=0.068
// note: nearest: node_modules/human-signals/build/src/core.js (0.0498); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var cuc = E(() => {
  Is();
  aEe();
  qse = require("fs/promises"), iNe = require("path");
});
var fuc = {};
_t(fuc, {
  runPtyHost: () => runPtyHost,
  createRing: () => createRing
});
async function runPtyHost(e) {
  let t = e.indexOf("--");
  if (!e.includes("--bg-spare", t + 1)) await luc();
  if (t < 3 || t === e.length - 1) return PZt(void 0, "bad argv: --bg-pty-host <sock> <cols> <rows> -- <file> [args...]");
  let n = e[0];
  process.on("uncaughtException", N => PZt(n, `uncaught: ${N?.stack ?? String(N)}`)), process.on("unhandledRejection", N => PZt(n, `unhandledRejection: ${N?.stack ?? String(N)}`));
  let r = Number(e[1]) || 200,
    o = Number(e[2]) || 50,
    s = e[t + 1],
    i = e.slice(t + 2),
    a = process.env.CLAUDE_PTY_HOST_EXEC === "1";
  delete process.env.CLAUDE_PTY_HOST_EXEC;
  let l = process.env.CLAUDE_BG_PTY_AUTH;
  delete process.env.CLAUDE_BG_PTY_AUTH;
  let c = process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (c) {
    let N = await SSt(c);
    if (N?.ptyAuth) l = N.ptyAuth;else if (!l) QVo(n, "tokens-file unreadable; DATA gate fail-open");
    if (a) delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, await Lcr.unlink(c).catch(() => {});
  }
  if (Vt() !== "windows") try {
    Dcr.setPriority(0, Math.min(Dcr.getPriority(0) + 5, 19));
  } catch {}
  let u = createRing(c7t),
    d = new Set(),
    p = new WeakMap(),
    f = new WeakSet(),
    m = new WeakSet(),
    g = !1,
    h = !1,
    y = process.ppid,
    b = 0,
    _ = null,
    S = Xsm(process.env.CLAUDE_PTY_RECORD, r, o);
  function A(N) {
    for (let B of d) {
      if (B.destroyed) {
        d.delete(B);
        continue;
      }
      if (B.writableLength > Ksm) {
        B.destroy(), d.delete(B);
        continue;
      }
      B.write(N);
    }
  }
  let v, C;
  try {
    v = new Bun.Terminal({
      cols: r,
      rows: o,
      data(N, B) {
        h = !0;
        let $ = Buffer.from(B);
        if (u.push($), S?.write($), d.size) A(u7t($));
      }
    }), C = Bun.spawn([s, ...i], {
      cwd: process.cwd(),
      env: {
        ...process.env,
        TERM: "xterm-256color"
      },
      terminal: v,
      windowsHide: !0,
      detached: !1
    });
  } catch (N) {
    PZt(n, `spawn failed: ${String(N)}`);
  }
  function x(N, B) {
    if (!N.destroyed) N.write(B);
  }
  function I(N) {
    switch (N.t) {
      case "resize":
        {
          let B = Number(N.cols),
            $ = Number(N.rows);
          if (B > 0 && B <= xfe && $ > 0 && $ <= xfe && !g) {
            if (v.resize(B, $), Vt() !== "windows") try {
              process.kill(-process.pid, "SIGWINCH");
            } catch {}
          }
          return;
        }
      case "kill":
        {
          let B = N.sig === "SIGKILL" ? "SIGKILL" : "SIGTERM";
          try {
            C.kill(B);
          } catch {}
          if (B === "SIGTERM") setTimeout(() => {
            if (!g) try {
              C.kill("SIGKILL");
            } catch {}
          }, 5000).unref();
          return;
        }
      default:
        return;
    }
  }
  await Lcr.unlink(n).catch(() => {});
  let k = uuc.createServer(N => {
    N.on("error", () => N.destroy()), N.once("close", () => d.delete(N)), x(N, UL({
      t: "hello",
      replPid: C.pid,
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
      }.VERSION
    }));
    for (let $ of u.chunks) x(N, u7t($));
    if (x(N, UL({
      t: "live"
    })), d.add(N), b = 0, p.set(N, {
      armed: !1,
      missed: 0
    }), x(N, UL({
      t: "ping"
    })), g) {
      x(N, UL({
        t: "exit",
        code: O,
        signal: M
      })), N.end();
      return;
    }
    let B = Yer($ => {
      if ($.kind === lKe) {
        if (l && !f.has(N)) {
          if (!m.has(N)) m.add(N), x(N, UL({
            t: "auth-required"
          }));
          return;
        }
        if (!g) {
          if (v.write($.payload), a && Vt() !== "windows") {
            let q = $.payload.includes(3) ? "SIGINT" : $.payload.includes(28) ? "SIGQUIT" : null;
            if (q) {
              _ = q;
              try {
                process.kill(-process.pid, q);
              } catch {}
              setImmediate(() => {
                _ = null;
              });
            }
          }
        }
      } else if ($.kind === l7t) if ($.ctrl.t === "pong") {
        let q = p.get(N);
        if (q) q.armed = !0, q.missed = 0;
      } else if ($.ctrl.t === "auth") {
        if (Joe($.ctrl.token, l)) f.add(N);
      } else I($.ctrl);
    }, () => N.destroy());
    N.on("data", B);
  });
  k.on("error", N => {
    try {
      C.kill("SIGTERM");
    } catch {}
    PZt(n, `server error: ${String(N)}`);
  }), k.listen(n), k.unref();
  let D, P;
  if (Vt() !== "windows") {
    let N = Number(process.env.CLAUDE_PTY_HEARTBEAT_MS) || 60000,
      B = 3;
    P = setInterval(() => {
      if (g) return;
      for (let W of d) {
        let V = p.get(W);
        if (!V?.armed) continue;
        if (V.missed++, V.missed >= 3) W.destroy(), d.delete(W);else x(W, UL({
          t: "ping"
        }));
      }
    }, N), P.unref();
    let $ = Number(process.env.CLAUDE_PTY_ORPHAN_CHECK_MS) || 2000,
      q = 30;
    D = setInterval(() => {
      if (g) return;
      if (process.ppid === y || d.size > 0) {
        b = 0;
        return;
      }
      if (++b < q) return;
      clearInterval(D), clearInterval(P), QVo(n, `orphan watchdog: ppid ${y}\u2192${process.ppid}, no client for ${q * $}ms`), sv("ptyhost_orphan_watchdog");
      try {
        C.kill("SIGTERM");
      } catch {}
      setTimeout(() => {
        if (!g) try {
          C.kill("SIGKILL");
        } catch {}
      }, 5000).unref();
    }, $), D.unref();
  }
  for (let N of ["SIGTERM", "SIGINT", "SIGHUP"]) process.on(N, () => {
    if (_ === N) return;
    try {
      C.kill(N === "SIGHUP" ? "SIGTERM" : N);
    } catch {}
  });
  if (a && Vt() !== "windows") process.on("SIGQUIT", () => {
    if (_ === "SIGQUIT") return;
    try {
      C.kill("SIGQUIT");
    } catch {}
  });
  let O = 0;
  O = await C.exited;
  let L = 0;
  for (let N = 0; N < 20; N++) if (h = !1, await Nn(5), h) L = 0;else if (++L >= 2) break;
  let M = C.signalCode ?? void 0;
  if (g = !0, a) try {
    let N = XQ(n),
      B = Buffer.concat(u.chunks).subarray(-4096),
      $ = 0;
    while ($ < 3 && $ < B.length && (B[$] & 192) === 128) $++;
    let q = B.subarray($).toString("utf8");
    oj(N, JSON.stringify({
      code: O,
      signal: M,
      tail: q
    }), 384);
  } catch {}
  if (D) clearInterval(D);
  if (P) clearInterval(P);
  if (v.close(), S?.close(), a && Vt() !== "windows") {
    _ = "SIGHUP";
    try {
      process.kill(-process.pid, "SIGHUP");
    } catch {}
  }
  if (A(UL({
    t: "exit",
    code: O,
    signal: M
  })), d.size === 0) {
    if (a) try {
      aNe.writeFileSync(DP(n), Buffer.concat(u.chunks));
    } catch {}
    await Promise.race([new Promise(N => k.once("connection", () => N())), Nn(5000)]);
  }
  for (let N of d) N.end();
  if (await Promise.race([new Promise(N => k.close(() => N())), Nn(2000, void 0, {
    unref: !0
  })]), Vt() !== "windows") await Lcr.unlink(n).catch(() => {});
  process.exit(O);
}
function createRing(e) {
  let t = [],
    n = 0,
    r = 0;
  function o() {
    if (n > 0) t = t.slice(n), n = 0;
  }
  return {
    get chunks() {
      return o(), t;
    },
    push(s) {
      t.push(s), r += s.length;
      while (r > e && t.length - n > 1) {
        r -= t[n++].length;
        for (let i = 0; i < 3;) {
          let a = t[n],
            l = 0;
          while (i + l < 3 && l < a.length && (a[l] & 192) === 128) l++;
          if (l > 0) t[n] = a.subarray(l), r -= l, i += l;
          if (t[n].length > 0 || t.length - n === 1) break;
          n++;
        }
      }
      if (n >= t.length - n) o();
    }
  };
}
function Xsm(e, t, n) {
  if (!e) return;
  let r = process.hrtime.bigint(),
    o;
  try {
    o = aNe.createWriteStream(e, {
      flags: "w"
    });
  } catch {
    return;
  }
  o.on("error", () => {
    o?.destroy(), o = void 0;
  });
  let s = Buffer.allocUnsafe(8);
  return s.writeUInt32BE(t, 0), s.writeUInt32BE(n, 4), o.write(s), {
    write(i) {
      if (!o) return;
      let a = Buffer.allocUnsafe(8 + i.length),
        l = Number((process.hrtime.bigint() - r) / 1000n);
      a.writeUInt32BE(l >>> 0, 0), a.writeUInt32BE(i.length, 4), i.copy(a, 8), o.write(a);
    },
    close() {
      o?.end();
    }
  };
}
function QVo(e, t) {
  try {
    let n = GL(e);
    aNe.mkdirSync(duc.dirname(n), {
      recursive: !0
    }), aNe.appendFileSync(n, `${new Date().toISOString()} ${t}
`);
  } catch {}
}
function PZt(e, t) {
  if (e) QVo(e, t);
  process.exit(1);
}
var aNe,
  Lcr,
  uuc,
  Dcr,
  duc,
  Ksm = 1048576;