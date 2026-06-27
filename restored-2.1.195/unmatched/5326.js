// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yuc
// matched 2.1.88 source: src/utils/ripgrep.ts
// class=new  jaccard=0.031  score=0.1292  fileCov=0.0393
// note: nearest: src/utils/ripgrep.ts (0.031); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yuc = E(() => {
  FAe();
  ag();
  vn();
  zH();
  $cr = Xy, Jsm = /\x1b\[\d*D/g;
});
function Ocr(e, t, n, r, o, s) {
  let i = Mi(),
    a = Mi(),
    l,
    c = new Auc.StringDecoder("utf8"),
    u,
    d = !1,
    p = !1,
    f = 0,
    m = 0,
    g,
    h,
    y,
    b,
    _ = 0,
    S,
    A = !1,
    v = !1,
    C = !1,
    x = "",
    I = !1,
    k = n;
  if (k === void 0) KR(t, {
    skipCache: !0
  }).then(W => {
    k = W;
  });
  let D = [],
    P = 0;
  function O(W) {
    if (u) {
      if (u.destroyed) return !1;
      if (!u.write(W)) {
        if (!y) y = setTimeout(() => {
          y = void 0, u?.destroy();
        }, Zsm), y.unref();
        if (!b && u.writableLength > Suc) b = setTimeout(() => {
          if (b = void 0, u && !u.destroyed && u.writableLength > Suc) L(), u.destroy();
        }, eim), b.unref();
      }
      return !0;
    }
    if (P < 2 * ZSt) D.push(W), P += W.length;
    return !1;
  }
  function L() {
    if (y) clearTimeout(y), y = void 0;
    if (b) clearTimeout(b), b = void 0;
  }
  function M(W, V) {
    if (p) return;
    if (p = !0, d = !0, h) clearTimeout(h), h = void 0;
    L(), u?.destroy(), u = void 0;
    let Y = c.end();
    if (Y) i.emit(Y);
    a.emit({
      exitCode: W,
      signal: V
    });
  }
  function N(W) {
    if (nR(GL(e), 1048576).then(V => V ?? "").then(V => {
      let Y = V.slice(0, 2000).trim();
      if (Y.length > 0) T(`[bg-pty] host crash: ${Y}`, {
        level: "warn"
      });
      let z = [...Y.matchAll(/\bE[A-Z]{2,14}\b/g)].find(K => !"/\\".includes(Y[K.index - 1] ?? "."))?.[0];
      G("tengu_bg_ptyhost_crash", {
        hadBreadcrumb: Y.length > 0,
        hadHello: A,
        via: $e(W),
        short: r,
        ...(z && {
          stderr_errno: z
        })
      });
    }), sje(_ ? [-t, _] : [-t], W !== "hung" ? void 0 : k), o) {
      o.exited.then(V => M(V, o.signalCode ?? void 0), () => M(-1)), setTimeout(M, 1000, -1).unref();
      return;
    }
    M(-1);
  }
  function B(W) {
    if (W.kind === lKe) {
      if (!v) {
        let V = c.write(W.payload);
        if (C) i.emit(V);else if (V.length > 0) {
          let Y = (x + V).replaceAll(uz, ""),
            z = tim(Y);
          x = z > 0 ? Y.slice(Y.length - z) : "";
          let K = z > 0 ? Y.slice(0, Y.length - z) : Y;
          if (K.length > 0) i.emit(K);
        }
      }
    } else if (W.ctrl.t === "hello") {
      if (A) v = !0, c.end(), x = "";else MZt.unlink(DP(e)).catch(() => {});
      A = !0, _ = W.ctrl.replPid, S = W.ctrl.version;
    } else if (W.ctrl.t === "live") {
      if (!C) {
        if (C = !0, x.length > 0) i.emit(x), x = "";
      }
      if (v) v = !1, l?.();
    } else if (W.ctrl.t === "exit") M(W.ctrl.code, W.ctrl.signal);else if (W.ctrl.t === "ping") O(UL({
      t: "pong"
    }));else if (W.ctrl.t === "auth-required") T(`[bg-pty] ${r ?? e}: host dropped input \u2014 DATA auth token missing or stale (version skew; respawn the worker to re-key)`, {
      level: "warn"
    });
  }
  function $() {
    if (d) return;
    let W = new Euc.Socket(),
      V = !1;
    W.on("error", Y => {
      I = on(Y) === "ENOENT", q();
    }), W.once("close", () => {
      if (u === W) u = void 0, L();
      if (d) return;
      if (V && !p) {
        try {
          process.kill(t, 0), T("[bg-pty] dropped by host; reconnecting", {
            level: "debug"
          }), m = Qsm, f = 0, q();
          return;
        } catch {}
        N("close");
        return;
      }
      q();
    }), W.once("connect", () => {
      if (V = !0, f = 0, m = 0, u = W, W.on("drain", L), MZt.unlink(GL(e)).catch(() => {}), O(UL({
        t: "pong"
      })), s) O(UL({
        t: "auth",
        token: s
      }));
      for (let z of D.splice(0)) O(z);
      P = 0;
      let Y = Yer(B, z => {
        T(`[bg-pty] frame error: ${z}`, {
          level: "warn"
        }), W.destroy();
      });
      W.on("data", Y);
    }), W.connect(e);
  }
  function q() {
    if (d || g) return;
    try {
      process.kill(t, 0);
    } catch {
      d = !0, nR(DP(e), 8388608).then(V => V ?? "").then(V => {
        if (!A && V.length > 0) i.emit(V.replaceAll(uz, ""));
        MZt.unlink(DP(e)).catch(() => {}), N("connect");
      });
      return;
    }
    if (m > 0 && --m === 0) {
      N("hung");
      return;
    }
    if (n !== void 0 && I && f >= 3) T(`[bg-pty] ${e}: ENOENT on adopt \u2014 sock file externally deleted; respawning`, {
      level: "warn"
    }), G("tengu_bg_adopt_sock_unlinked", {}), f = buc;
    if (f >= buc) {
      T(`[bg-pty] ${e}: ${f} connect attempts failed; treating host as dead`, {
        level: "warn"
      });
      let V = k && Hye(t);
      if (!k || !V || k === V) try {
        process.kill(-t, "SIGKILL");
      } catch {
        try {
          process.kill(t, "SIGKILL");
        } catch {}
      }
      d = !0, nR(DP(e), 8388608).then(Y => Y ?? "").then(Y => {
        if (!A && Y.length > 0) i.emit(Y.replaceAll(uz, ""));
        if (MZt.unlink(DP(e)).catch(() => {}), o) o.exited.then(z => M(z, o.signalCode ?? void 0), () => M(-1)), setTimeout(M, 1000, -1).unref();else M(-1);
      });
      return;
    }
    let W = _uc[Math.min(f, _uc.length - 1)];
    f++, g = setTimeout(() => {
      g = void 0, $();
    }, W), g.unref();
  }
  return $(), {
    pid: t,
    replPid: () => _,
    replVersion: () => S,
    onResume: W => {
      l = W;
    },
    write: W => {
      if (p) return;
      let V = Buffer.from(W, "utf8"),
        Y = ZSt - 1;
      for (let z = 0; z < V.length; z += Y) O(u7t(V.subarray(z, z + Y)));
    },
    resize: (W, V) => O(UL({
      t: "resize",
      cols: W,
      rows: V
    })),
    kill: W => {
      let V = W === "SIGKILL" ? "SIGKILL" : "SIGTERM",
        Y = O(UL({
          t: "kill",
          sig: V
        }));
      if (Vt() === "windows" && V === "SIGTERM" && Y) {
        if (h) clearTimeout(h);
        h = setTimeout((z, K) => {
          if (!VPt(z, k)) {
            K(-1);
            return;
          }
          try {
            process.kill(z, "SIGKILL");
          } catch {
            K(-1);
          }
        }, 5000, t, M), h.unref();
        return;
      }
      try {
        process.kill(-t, V);
      } catch {
        try {
          process.kill(t, V);
        } catch {
          M(-1);
        }
      }
      if (V === "SIGTERM" && !p) {
        if (h) clearTimeout(h);
        h = setTimeout((z, K) => {
          if (!VPt(z, k)) {
            K(-1);
            return;
          }
          try {
            process.kill(-z, "SIGKILL");
          } catch {
            try {
              process.kill(z, "SIGKILL");
            } catch {
              K(-1);
            }
          }
        }, 5000, t, M), h.unref();
      }
    },
    dispose: () => {
      if (d = !0, g) clearTimeout(g), g = void 0;
      if (h) clearTimeout(h), h = void 0;
      L(), u?.destroy(), u = void 0;
    },
    onData: W => ({
      dispose: i.subscribe(W)
    }),
    onExit: W => ({
      dispose: a.subscribe(W)
    })
  };
}
function tim(e) {
  let t = Math.min(uz.length - 1, e.length);
  for (let n = t; n > 0; n--) if (e.endsWith(uz.slice(0, n))) return n;
  return 0;
}
var MZt,
  Euc,
  Auc,
  _uc,
  buc = 30,
  Qsm = 4,
  Zsm = 1e4,
  Suc,
  eim = 50;