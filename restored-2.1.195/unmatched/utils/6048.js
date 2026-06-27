// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pqc
// matched 2.1.88 source: src/bridge/bridgeMain.ts
// class=new  jaccard=0.0153  score=0.162  fileCov=0.0166
// note: nearest: src/bridge/bridgeMain.ts (0.0153); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module pqc] deps: At, Is, zH
uqc = require("fs"), dBe = require("fs/promises");
function mqc(e) {
  return Math.round(e * (0.5 + Math.random()));
}
function iNm(e) {
  return mqc(Math.min(1000 * 2 ** e, oNm));
}
class hhr {
  id;
  kind;
  config;
  invocation;
  logger;
  authManager;
  onStateChange;
  child = null;
  spawnedAt = 0;
  stopping = false;
  consecutiveCrashes = 0;
  backoffTimer = null;
  exitPromise = null;
  constructor(e, t, n, r, o, s, i) {
    this.id = e;
    this.kind = t;
    this.config = n;
    this.invocation = r;
    this.logger = o;
    this.authManager = s;
    this.onStateChange = i;
  }
  get status() {
    let e = this.child?.pid;
    return e !== void 0 ? {
      pid: e,
      startedAt: this.spawnedAt
    } : null;
  }
  start(e = 0) {
    if (this.stopping = false, e > 0) this.scheduleRespawn(e);else this.spawn();
  }
  updateConfig(e) {
    this.config = e;
  }
  async stop() {
    if (this.stopping = true, this.backoffTimer) clearTimeout(this.backoffTimer), this.backoffTimer = null;
    let e = this.child;
    if (!e) return;
    let t = this.exitPromise,
      n = false;
    if (typeof e.send === "function") try {
      n = e.send({
        type: "shutdown"
      });
    } catch {}
    if (Vt() !== "windows" || !n) e.kill("SIGTERM");
    let r = setTimeout(o => o.kill("SIGKILL"), rNm, e);
    if (r.unref(), t) await t;
    clearTimeout(r);
  }
  spawn() {
    let e = Date.now();
    this.spawnedAt = e;
    let t = fqc.spawn(this.invocation.cmd, [...this.invocation.prefixArgs, "--daemon-worker", this.kind], {
      stdio: this.authManager ? ["pipe", "pipe", "pipe", "ipc"] : ["pipe", "pipe", "pipe"],
      windowsHide: true
    });
    if (this.child = t, this.onStateChange?.(), t.stdin.on("error", s => {
      this.logger.write(this.id, `stdin write error: ${s.message}`);
    }), t.stdin.write(De({
      config: this.config,
      initialAccessToken: this.authManager?.getAccessToken()
    }) + `
`), t.stdin.end(), this.authManager) this.authManager.attachWorker(t);
    let n = KZo.createInterface({
      input: t.stdout
    });
    n.on("line", s => this.logger.write(this.id, s));
    let r = KZo.createInterface({
      input: t.stderr
    });
    r.on("line", s => this.logger.write(this.id, s)), t.on("spawn", () => xe("daemon_worker_spawn"));
    let o = false;
    this.exitPromise = new Promise(s => {
      let i = (a, l) => {
        if (o) return;
        if (o = true, n.close(), r.close(), this.child = null, this.onStateChange?.(), this.authManager) this.authManager.detachWorker(t);
        this.exitPromise = null, this.onExit(a, l, e), s();
      };
      t.on("exit", i), t.on("error", a => {
        if (this.logger.write(this.id, `spawn error: ${a.message}`), Le("daemon_worker_spawn", wn(a) ? "daemon_worker_spawn_enoent" : "daemon_worker_spawn_error"), !wn(a)) {
          i(null, null);
          return;
        }
        l8n().then(l => {
          if (l && l !== this.invocation.cmd) this.logger.write(this.id, `execPath gone (version GC?) \u2014 re-resolved to ${l}`), this.invocation = {
            cmd: l,
            prefixArgs: []
          }, this.consecutiveCrashes = 0;
          i(null, null);
        });
      });
    });
  }
  onExit(e, t, n) {
    if (this.stopping) return;
    let r = Date.now() - n;
    if (e === e4n) {
      let s = mqc(sNm);
      this.logger.write(this.id, `exited tempfail code=${e} uptime=${r}ms \u2014 retry in ${s}ms`), this.scheduleRespawn(s);
      return;
    }
    if (e === Zjn) {
      this.logger.write(this.id, `exited permanently code=${e} uptime=${r}ms \u2014 will not respawn`), G("tengu_daemon_worker_permanent_exit", {
        exit_code: e ?? void 0,
        uptime_ms: r,
        worker_kind: $e(this.kind)
      });
      return;
    }
    if (e !== 0 || r < nNm) {
      this.consecutiveCrashes++;
      let s = iNm(this.consecutiveCrashes);
      this.logger.write(this.id, `exited code=${e} sig=${t} uptime=${r}ms consecutive=${this.consecutiveCrashes} backoff=${s}ms`), G("tengu_daemon_worker_crash", {
        consecutive: this.consecutiveCrashes,
        exit_code: e ?? void 0,
        uptime_ms: r,
        worker_kind: $e(this.kind)
      }), this.scheduleRespawn(s);
    } else this.consecutiveCrashes = 0, this.logger.write(this.id, `exited code=${e} sig=${t} uptime=${r}ms (clean) \u2014 respawning`), this.spawn();
  }
  scheduleRespawn(e) {
    if (this.backoffTimer) clearTimeout(this.backoffTimer);
    this.backoffTimer = setTimeout(() => {
      if (this.backoffTimer = null, !this.stopping) this.spawn();
    }, e), this.backoffTimer.unref();
  }
}
var fqc,
  KZo,
  nNm = 60000,
  rNm = 5000,
  oNm = 300000,
  sNm = 30000,
  YZo = 2000;