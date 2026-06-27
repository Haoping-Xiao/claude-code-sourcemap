// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vua
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/client/stdio.js
// class=partial  jaccard=0.2477  score=0.8289  fileCov=0.2611
// note: low-confidence suggestion: node_modules/@modelcontextprotocol/sdk/dist/esm/client/stdio.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vua = E(() => {
  Hua();
  Vb();
  oke();
  Tua = class Tua extends Error {
    constructor(e, t, n) {
      super(`SSE error: ${t}`);
      this.code = e, this.event = n;
    }
  };
});
function ulo() {
  let e = {};
  for (let t of kup) {
    let n = FNn.default.env[t];
    if (n === void 0) continue;
    if (n.startsWith("()")) continue;
    e[t] = n;
  }
  return e;
}
class dlo {
  constructor(e) {
    if (this._readBuffer = new u0t(), this._stderrStream = null, this._serverParams = e, e.stderr === "pipe" || e.stderr === "overlapped") this._stderrStream = new Cua.PassThrough();
  }
  async start() {
    if (this._process) throw Error("StdioClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    return new Promise((e, t) => {
      if (this._process = wua.default(this._serverParams.command, this._serverParams.args ?? [], {
        env: {
          ...ulo(),
          ...this._serverParams.env
        },
        stdio: ["pipe", "pipe", this._serverParams.stderr ?? "inherit"],
        shell: !1,
        windowsHide: FNn.default.platform === "win32",
        cwd: this._serverParams.cwd
      }), this._process.on("error", n => {
        t(n), this.onerror?.(n);
      }), this._process.on("spawn", () => {
        e();
      }), this._process.on("close", n => {
        this._process = void 0, this.onclose?.();
      }), this._process.stdin?.on("error", n => {
        this.onerror?.(n);
      }), this._process.stdout?.on("data", n => {
        this._readBuffer.append(n), this.processReadBuffer();
      }), this._process.stdout?.on("error", n => {
        this.onerror?.(n);
      }), this._stderrStream && this._process.stderr) this._process.stderr.pipe(this._stderrStream);
    });
  }
  get stderr() {
    if (this._stderrStream) return this._stderrStream;
    return this._process?.stderr ?? null;
  }
  get pid() {
    return this._process?.pid ?? null;
  }
  processReadBuffer() {
    while (!0) try {
      let e = this._readBuffer.readMessage();
      if (e === null) break;
      this.onmessage?.(e);
    } catch (e) {
      this.onerror?.(e);
    }
  }
  async close() {
    if (this._process) {
      let e = this._process;
      this._process = void 0;
      let t = new Promise(n => {
        e.once("close", () => {
          n();
        });
      });
      try {
        e.stdin?.end();
      } catch {}
      if (await Promise.race([t, new Promise(n => setTimeout(n, 2000).unref())]), e.exitCode === null) {
        try {
          e.kill("SIGTERM");
        } catch {}
        await Promise.race([t, new Promise(n => setTimeout(n, 2000).unref())]);
      }
      if (e.exitCode === null) try {
        e.kill("SIGKILL");
      } catch {}
    }
    this._readBuffer.clear();
  }
  send(e) {
    return new Promise(t => {
      if (!this._process?.stdin) throw Error("Not connected");
      let n = Uun(e);
      if (this._process.stdin.write(n)) t();else this._process.stdin.once("drain", t);
    });
  }
}
var wua, FNn, Cua, kup;