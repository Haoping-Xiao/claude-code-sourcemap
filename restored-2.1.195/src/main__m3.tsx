// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LZl
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0186  score=0.1378  fileCov=0.0211
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var LZl = E(() => {
  qee();
  fp();
  fn();
  At();
  x3o();
  Jt();
  CZl();
  ((xZl = require("child_process")),
    (kZl = require("fs")),
    (RZl = require("readline")),
    (Rir = new Set()));
  k3o = class k3o {
    options;
    process;
    processStdin;
    processStdout;
    ready = false;
    abortController;
    exitError;
    exitListeners = [];
    abortHandler;
    forwardedAbort = Sl();
    pendingWrites = [];
    pendingEndInput = false;
    spawnResolve;
    spawnReject;
    spawnPromise;
    constructor(e) {
      this.options = e;
      if (((this.abortController = e.abortController || Sl()), e.deferSpawn))
        ((this.spawnPromise = new Promise((t, n) => {
          ((this.spawnResolve = t), (this.spawnReject = n));
        })),
          this.spawnPromise.catch(() => {}));
      else this.initialize();
    }
    spawn() {
      try {
        this.initialize();
      } catch (t) {
        throw (this.spawnAbort(Zr(t)), t);
      }
      let e = this.pendingWrites;
      if (((this.pendingWrites = []), this.spawnResolve))
        (this.spawnResolve(), (this.spawnResolve = void 0), (this.spawnReject = void 0));
      for (let t of e) this.write(t);
      if (this.pendingEndInput) ((this.pendingEndInput = false), this.processStdin?.end());
    }
    spawnAbort(e) {
      if (this.spawnReject)
        (this.spawnReject(e),
          (this.spawnReject = void 0),
          (this.spawnResolve = void 0),
          (this.pendingWrites = []));
    }
    updateEnv(e) {
      if (this.options.env) Object.assign(this.options.env, e);
      else
        this.options.env = {
          ...e,
        };
    }
    updateResume(e) {
      this.options.resume = e;
    }
    getDefaultExecutable() {
      return gG() ? "bun" : "node";
    }
    spawnLocalProcess(e) {
      let { command: t, args: n, cwd: r, env: o, signal: s } = e,
        i = ut(o.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr ? "pipe" : "ignore",
        a = xZl.spawn(t, n, {
          cwd: r,
          stdio: ["pipe", "pipe", i],
          signal: s,
          env: o,
          windowsHide: true,
        });
      if (ut(o.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr)
        a.stderr.on("data", (c) => {
          let u = c.toString();
          if ((Xq(u), this.options.stderr)) this.options.stderr(u);
        });
      return {
        stdin: a.stdin,
        stdout: a.stdout,
        get killed() {
          return a.killed;
        },
        get exitCode() {
          return a.exitCode;
        },
        kill: a.kill.bind(a),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
      };
    }
    initialize() {
      try {
        let {
            additionalDirectories: e = [],
            agent: t,
            betas: n,
            cwd: r,
            executable: o = this.getDefaultExecutable(),
            executableArgs: s = [],
            extraArgs: i = {},
            pathToClaudeCodeExecutable: a,
            env: l = {
              ...process.env,
            },
            thinkingConfig: c,
            maxTurns: u,
            maxBudgetUsd: d,
            taskBudget: p,
            model: f,
            fallbackModel: m,
            jsonSchema: g,
            permissionMode: h,
            allowDangerouslySkipPermissions: y,
            permissionPromptToolName: b,
            continueConversation: _,
            resume: S,
            settingSources: A,
            skills: v,
            disallowedTools: C = [],
            tools: x,
            mcpServers: I,
            strictMcpConfig: k,
            canUseTool: D,
            includePartialMessages: P,
            plugins: O,
            sandbox: L,
          } = this.options,
          { allowedTools: M = [] } = this.options;
        if (v !== void 0) {
          let z = v === "all" ? ["Skill"] : v.map((Z) => `Skill(${Z})`),
            K = new Set(M);
          M = [...M, ...z.filter((Z) => !K.has(Z))];
        }
        let N = ["--output-format", "stream-json", "--verbose", "--input-format", "stream-json"];
        if (c) {
          switch (c.type) {
            case "enabled":
              if (c.budgetTokens === void 0) N.push("--thinking", "adaptive");
              else N.push("--max-thinking-tokens", c.budgetTokens.toString());
              break;
            case "disabled":
              N.push("--thinking", "disabled");
              break;
            case "adaptive":
              N.push("--thinking", "adaptive");
              break;
          }
          if (c.type !== "disabled" && c.display) N.push("--thinking-display", c.display);
        }
        if (this.options.effort) N.push("--effort", this.options.effort);
        if (u) N.push("--max-turns", u.toString());
        if (d !== void 0) N.push("--max-budget-usd", d.toString());
        if (p) N.push("--task-budget", p.total.toString());
        if (f) N.push("--model", f);
        if (t) N.push("--agent", t);
        if (n && n.length > 0) N.push("--betas", n.join(","));
        if (g) N.push("--json-schema", De(g));
        if (this.options.debugFile) N.push("--debug-file", this.options.debugFile);
        else if (this.options.debug) N.push("--debug");
        if (!this.options.debugFile && !this.options.spawnClaudeCodeProcess) {
          let z = vZl();
          if (z) N.push("--debug-file", z);
        }
        if (D) {
          if (b)
            throw Error(
              "canUseTool callback cannot be used with permissionPromptToolName. Please use one or the other.",
            );
          N.push("--permission-prompt-tool", "stdio");
        } else if (b) N.push("--permission-prompt-tool", b);
        if (_) N.push("--continue");
        if (S) N.push("--resume", S);
        if (M.length > 0) N.push("--allowedTools", M.join(","));
        if (C.length > 0) N.push("--disallowedTools", C.join(","));
        if (x !== void 0)
          if (Array.isArray(x)) {
            if (x.length === 0) N.push("--tools", "");
            else N.push("--tools", x.join(","));
          } else N.push("--tools", "default");
        if (I && Object.keys(I).length > 0)
          N.push(
            "--mcp-config",
            De({
              mcpServers: I,
            }),
          );
        if (A !== void 0) N.push(`--setting-sources=${A.join(",")}`);
        if (k) N.push("--strict-mcp-config");
        if (h) N.push("--permission-mode", h);
        if (y) N.push("--allow-dangerously-skip-permissions");
        if (m) {
          if (f && m === f)
            throw Error(
              "Fallback model cannot be the same as the main model. Please specify a different model for fallbackModel option.",
            );
          N.push("--fallback-model", m);
        }
        if (this.options.includeHookEvents) N.push("--include-hook-events");
        if (P) N.push("--include-partial-messages");
        if (this.options.sessionMirror) N.push("--session-mirror");
        for (let z of e) N.push("--add-dir", z);
        if (O && O.length > 0)
          for (let z of O)
            if (z.type === "local")
              N.push(z.skipMcpDiscovery ? "--plugin-dir-no-mcp" : "--plugin-dir", z.path);
            else throw Error(`Unsupported plugin type: ${z.type}`);
        if (this.options.forkSession) N.push("--fork-session");
        if (this.options.resumeSessionAt)
          N.push("--resume-session-at", this.options.resumeSessionAt);
        if (this.options.sessionId) N.push("--session-id", this.options.sessionId);
        if (this.options.persistSession === false) N.push("--no-session-persistence");
        if (this.options.managedSettings)
          N.push("--managed-settings", this.options.managedSettings);
        let B = {
          ...(i ?? {}),
        };
        if (this.options.settings) B.settings = this.options.settings;
        let $ = wZl(B, L);
        for (let [z, K] of Object.entries($))
          if (K === null) N.push(`--${z}`);
          else N.push(`--${z}`, K);
        if (!l.CLAUDE_CODE_ENTRYPOINT) l.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
        if ((delete l.NODE_OPTIONS, ut(l.DEBUG_CLAUDE_AGENT_SDK))) l.DEBUG = "1";
        else delete l.DEBUG;
        let q = AKf(a),
          W = q ? a : o,
          V = q ? [...s, ...N] : [...s, a, ...N],
          Y = {
            command: W,
            args: V,
            cwd: r,
            env: l,
            signal: this.forwardedAbort.signal,
          };
        if (this.options.spawnClaudeCodeProcess)
          (Xq(`Spawning Claude Code (custom): ${W} ${V.join(" ")}`),
            (this.process = this.options.spawnClaudeCodeProcess(Y)));
        else
          (Xq(`Spawning Claude Code: ${W} ${V.join(" ")}`),
            (this.process = this.spawnLocalProcess(Y)));
        if (
          ((this.processStdin = this.process.stdin),
          (this.processStdout = this.process.stdout),
          EKf(this.process),
          (this.abortHandler = () => this.close()),
          this.abortController.signal.addEventListener("abort", this.abortHandler),
          this.abortController.signal.aborted)
        )
          this.close();
        (this.process.on("error", (z) => {
          if (((this.ready = false), this.abortController.signal.aborted))
            this.exitError = new WO("Claude Code process aborted by user");
          else if (Vo(z)) {
            let K = HKf(a, q);
            ((this.exitError = ReferenceError(K)), Xq(this.exitError.message));
          } else
            ((this.exitError = Error(`Failed to spawn Claude Code process: ${z.message}`)),
              Xq(this.exitError.message));
        }),
          this.process.on("exit", (z, K) => {
            if (((this.ready = false), this.abortController.signal.aborted))
              this.exitError = new WO("Claude Code process aborted by user");
            else {
              let Z = this.getProcessExitError(z, K);
              if (Z) ((this.exitError = Z), Xq(Z.message));
            }
          }),
          (this.ready = !this.abortController.signal.aborted));
      } catch (e) {
        throw ((this.ready = false), e);
      }
    }
    getProcessExitError(e, t) {
      if (e !== 0 && e !== null) return Error(`Claude Code process exited with code ${e}`);
      else if (t) return Error(`Claude Code process terminated by signal ${t}`);
      return;
    }
    write(e) {
      if (this.abortController.signal.aborted) throw new WO("Operation aborted");
      if (this.spawnResolve) {
        this.pendingWrites.push(e);
        return;
      }
      if (!this.ready || !this.processStdin)
        throw Error("ProcessTransport is not ready for writing");
      if (this.processStdin.writableEnded) {
        Xq("[ProcessTransport] Dropping write to ended stdin stream");
        return;
      }
      if (this.process?.killed || this.process?.exitCode !== null)
        throw Error("Cannot write to terminated process");
      if (this.exitError)
        throw Error(`Cannot write to process that exited with error: ${this.exitError.message}`);
      Xq(`[ProcessTransport] Writing to stdin: ${e.substring(0, 100)}`);
      try {
        if (!this.processStdin.write(e)) Xq("[ProcessTransport] Write buffer full, data queued");
      } catch (t) {
        throw ((this.ready = false), Error(`Failed to write to process stdin: ${be(t)}`));
      }
    }
    [Symbol.dispose]() {
      this.close();
    }
    close() {
      if (
        (this.spawnAbort(
          this.abortController.signal.aborted
            ? new WO("Claude Code process aborted by user")
            : Error("Query closed before spawn"),
        ),
        this.processStdin)
      )
        (this.processStdin.end(), (this.processStdin = void 0));
      if (this.abortHandler)
        (this.abortController.signal.removeEventListener("abort", this.abortHandler),
          (this.abortHandler = void 0));
      for (let { handler: n } of this.exitListeners) this.process?.off("exit", n);
      this.exitListeners = [];
      let e = () => {
          if (this.abortController.signal.aborted)
            this.forwardedAbort.abort(this.abortController.signal.reason);
        },
        t = this.process;
      if (t && !t.killed && t.exitCode === null)
        (setTimeout(
          (n, r) => {
            if (n.exitCode !== null) {
              r();
              return;
            }
            (n.kill("SIGTERM"),
              setTimeout(
                (o) => {
                  if (o.exitCode === null) o.kill("SIGKILL");
                },
                5000,
                n,
              ).unref(),
              r());
          },
          bKf,
          t,
          e,
        ).unref(),
          t.once("exit", () => Rir.delete(t)));
      else if (t) (Rir.delete(t), e());
      this.ready = false;
    }
    isReady() {
      return this.ready;
    }
    async *readMessages() {
      if (this.spawnPromise) (await this.spawnPromise, (this.spawnPromise = void 0));
      if (!this.processStdout) throw Error("ProcessTransport output stream not available");
      if (this.exitError) throw this.exitError;
      let e = RZl.createInterface({
          input: this.processStdout,
        }),
        t = this.process
          ? (() => {
              let n = this.process,
                r = () => e.close();
              return (n.on("error", r), () => n.off("error", r));
            })()
          : void 0;
      if (this.exitError) e.close();
      try {
        for await (let n of e)
          if (n.trim()) {
            let r;
            try {
              r = Ft(n);
            } catch (o) {
              Xq(`Non-JSON stdout: ${n}`);
              continue;
            }
            yield r;
          }
        if (this.exitError) throw this.exitError;
        await this.waitForExit();
      } catch (n) {
        throw n;
      } finally {
        (t?.(), e.close());
      }
    }
    endInput() {
      if (this.spawnResolve) {
        this.pendingEndInput = true;
        return;
      }
      if (this.processStdin) this.processStdin.end();
    }
    getInputStream() {
      return this.processStdin;
    }
    onExit(e) {
      if (!this.process) return () => {};
      let t = (n, r) => {
        let o = this.getProcessExitError(n, r);
        e(o);
      };
      return (
        this.process.on("exit", t),
        this.exitListeners.push({
          callback: e,
          handler: t,
        }),
        () => {
          if (this.process) this.process.off("exit", t);
          let n = this.exitListeners.findIndex((r) => r.handler === t);
          if (n !== -1) this.exitListeners.splice(n, 1);
        }
      );
    }
    async waitForExit() {
      if (!this.process) {
        if (this.exitError) throw this.exitError;
        return;
      }
      if (this.process.exitCode !== null || this.process.killed || this.exitError) {
        if (this.exitError) throw this.exitError;
        return;
      }
      return new Promise((e, t) => {
        let n = (o, s) => {
          if (this.abortController.signal.aborted) {
            t(new WO("Operation aborted"));
            return;
          }
          let i = this.getProcessExitError(o, s);
          if (i) t(i);
          else e();
        };
        this.process.once("exit", n);
        let r = (o) => {
          (this.process.off("exit", n), t(o));
        };
        (this.process.once("error", r),
          this.process.once("exit", () => {
            this.process.off("error", r);
          }));
      });
    }
  };
});
function TKf() {
  let e = typeof process.report?.getReport === "function" ? process.report.getReport() : null;
  return e != null && e.header?.glibcVersionRuntime === void 0;
}
function PZl(e, t = "linux", n = "x64", r = DZl.existsSync, o = TKf()) {
  let s = process.env.SDK_NATIVE_BIN ?? "claude",
    i = t === "win32" ? ".exe" : "",
    l = (
      t === "android"
        ? [`${fHt}-linux-${n}-android`]
        : t === "linux"
          ? o
            ? [`${fHt}-linux-${n}-musl`, `${fHt}-linux-${n}`]
            : [`${fHt}-linux-${n}`, `${fHt}-linux-${n}-musl`]
          : [`${fHt}-${t}-${n}`]
    ).map((c) => `${c}/${s}${i}`);
  for (let c of l)
    try {
      let u = e(c);
      if (r(u)) return u;
    } catch {}
  return null;
}
var DZl,
  fHt = "@anthropic-ai/claude-agent-sdk";
