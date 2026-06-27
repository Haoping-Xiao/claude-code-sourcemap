// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Du
// matched 2.1.88 source: src/services/analytics/firstPartyEventLoggingExporter.ts
// class=modified  jaccard=0.2478  score=0.5883  fileCov=0.2998
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Du = E(() => {
  Qi();
  wr();
  Q9();
  TM();
  Vw();
  Ao();
  ft();
  fn();
  Ist();
  Tzr();
  S_e();
  Yle();
  kst();
  QH();
  oo();
  Ld();
  sa();
  Is();
  og();
  Jt();
  Mp();
  pke();
  fb();
  ((_Oi = require("path")),
    (gOi = {
      [rLt]: "Bash",
      [vws]: "WebFetch",
    }));
  xzr = new Set([S7]);
  ((G$d = new Set([
    "rm",
    "mv",
    "cp",
    "touch",
    "mkdir",
    "chmod",
    "chown",
    "cat",
    "head",
    "tail",
    "sort",
    "stat",
    "diff",
    "wc",
    "grep",
    "rg",
    "sed",
  ])),
    (W$d = /\s*(?:&&|\|\||[;|])\s*/),
    (q$d = /\s+/));
  V$d = /\.(csv|docx?|html|json|md|od[pst]|pdf|pptx?|rtf|txt|xlsx?)\b/g;
  z$d =
    /^\d+\.\d+\.\d+(-(?:dev|alpha|beta|rc|test|nightly)(?![a-z_-])\d{0,8}(?:\.[a-z0-9.]{0,40})?)?/;
  K$d = new Set([
    "darwin",
    "linux",
    "win32",
    "freebsd",
    "openbsd",
    "netbsd",
    "android",
    "aix",
    "sunos",
    "cygwin",
    "haiku",
    "macos",
    "windows",
    "wsl",
    "unknown",
  ]);
  ((rNt = Cn(() => {
    let e = {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION.match(/^\d+\.\d+\.\d+(?:-[a-z]+)?/);
    return e ? e[0] : void 0;
  })),
    (X$d = Cn(async () => {
      let [e, t, n, r] = await Promise.all([
        Oe.getPackageManagers(),
        Oe.getRuntimes(),
        DEs(),
        MEs(),
      ]);
      return {
        platform: W0t(),
        platformRaw: process.env.CLAUDE_CODE_HOST_PLATFORM || "linux",
        arch: Oe.arch,
        nodeVersion: Oe.nodeVersion,
        terminal: h1.terminal,
        shell: akr(),
        packageManagers: e.join(","),
        runtimes: t.join(","),
        isRunningWithBun: Oe.isRunningWithBun(),
        isCi: ut(false),
        isClaubbit: Oe.CLAUBBIT,
        isClaudeCodeRemote: ut(process.env.CLAUDE_CODE_REMOTE),
        isLocalAgentMode: process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent",
        isConductor: Oe.isConductor(),
        ...(process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE && {
          remoteEnvironmentType: process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE,
        }),
        ...{},
        ...(process.env.CLAUDE_CODE_CONTAINER_ID && {
          claudeCodeContainerId: process.env.CLAUDE_CODE_CONTAINER_ID,
        }),
        ...(process.env.CLAUDE_CODE_REMOTE_SESSION_ID && {
          claudeCodeRemoteSessionId: process.env.CLAUDE_CODE_REMOTE_SESSION_ID,
        }),
        ...(process.env.CLAUDE_CODE_TAGS && {
          tags: process.env.CLAUDE_CODE_TAGS,
        }),
        isGithubAction: ut(process.env.GITHUB_ACTIONS),
        isClaudeCodeAction: ut(process.env.CLAUDE_CODE_ACTION),
        isClaudeAiAuth: bo(),
        version: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
        versionBase: rNt(),
        buildTime: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.BUILD_TIME,
        deploymentEnvironment: Oe.detectDeploymentEnvironment(),
        ...(ut(process.env.GITHUB_ACTIONS) && {
          githubEventName: process.env.GITHUB_EVENT_NAME,
          githubActionsRunnerEnvironment: process.env.RUNNER_ENVIRONMENT,
          githubActionsRunnerOs: process.env.RUNNER_OS,
          githubActionRef: process.env.GITHUB_ACTION_PATH?.includes("claude-code-action/")
            ? process.env.GITHUB_ACTION_PATH.split("claude-code-action/")[1]
            : void 0,
        }),
        ...(OFe() && {
          wslVersion: OFe(),
        }),
        ...(n ?? {}),
        ...(r.length > 0 && {
          vcs: r.join(","),
        }),
      };
    })),
    (b3e = {
      rss: 0,
      heapUsed: 0,
      external: 0,
    }));
});
function oNt() {
  return gkn.join(tr(), "telemetry");
}
class Dzr {
  endpoint;
  timeout;
  maxBatchSize;
  skipAuth;
  batchDelayMs;
  baseBackoffDelayMs;
  maxBackoffDelayMs;
  maxAttempts;
  isKilled;
  pendingExports = [];
  isShutdown = false;
  schedule;
  cancelBackoff = null;
  attempts = 0;
  isRetrying = false;
  lastExportErrorContext;
  constructor(e = {}) {
    let t =
      e.baseUrl ||
      (process.env.ANTHROPIC_BASE_URL === "https://api-staging.anthropic.com"
        ? "https://api-staging.anthropic.com"
        : "https://api.anthropic.com");
    ((this.endpoint = `${t}${e.path || "/api/event_logging/v2/batch"}`),
      (this.timeout = e.timeout || 10000) /* 1e4 */,
      (this.maxBatchSize = e.maxBatchSize || 200),
      (this.skipAuth = e.skipAuth ?? false),
      (this.batchDelayMs = e.batchDelayMs || 100),
      (this.baseBackoffDelayMs = e.baseBackoffDelayMs || 500),
      (this.maxBackoffDelayMs = e.maxBackoffDelayMs || 30000),
      (this.maxAttempts = e.maxAttempts ?? 8),
      (this.isKilled = e.isKilled ?? (() => false)),
      (this.schedule =
        e.schedule ??
        ((n, r) => {
          let o = setTimeout(n, r);
          return () => clearTimeout(o);
        })),
      this.retryPreviousBatches());
  }
  async getQueuedEventCount() {
    return (await this.loadEventsFromCurrentBatch()).length;
  }
  getCurrentBatchFilePath() {
    return gkn.join(oNt(), `${wOi}${Rt()}.${vOi}.json`);
  }
  async loadEventsFromFile(e) {
    try {
      return await Het(e);
    } catch {
      return [];
    }
  }
  async loadEventsFromCurrentBatch() {
    return this.loadEventsFromFile(this.getCurrentBatchFilePath());
  }
  async saveEventsToFile(e, t) {
    try {
      if (t.length === 0)
        try {
          await E7.unlink(e);
        } catch {}
      else {
        await E7.mkdir(oNt(), {
          recursive: true,
        });
        let n =
          t.map((r) => De(r)).join(`
`) +
          `
`;
        await E7.writeFile(e, n, "utf8");
      }
    } catch (n) {
      T(`1P event logging: failed to persist failed-events batch to ${e}: ${be(n)}`, {
        level: "error",
      });
    }
  }
  async appendEventsToFile(e, t) {
    if (t.length === 0) return;
    try {
      await E7.mkdir(oNt(), {
        recursive: true,
      });
      let n =
        t.map((r) => De(r)).join(`
`) +
        `
`;
      await E7.appendFile(e, n, "utf8");
    } catch (n) {
      T(`1P event logging: failed to persist failed-event queue to ${e}: ${be(n)}`, {
        level: "error",
      });
    }
  }
  async deleteFile(e) {
    try {
      await E7.unlink(e);
    } catch {}
  }
  async retryPreviousBatches() {
    try {
      let e = `${wOi}${Rt()}.`,
        t;
      try {
        t = (await E7.readdir(oNt()))
          .filter((n) => n.startsWith(e) && n.endsWith(".json"))
          .filter((n) => !n.includes(vOi));
      } catch (n) {
        if (Vo(n)) return;
        throw n;
      }
      for (let n of t) {
        let r = gkn.join(oNt(), n);
        this.retryFileInBackground(r);
      }
    } catch (e) {
      ke(e);
    }
  }
  async retryFileInBackground(e) {
    if (this.attempts >= this.maxAttempts) {
      await this.deleteFile(e);
      return;
    }
    let t = await this.loadEventsFromFile(e);
    if (t.length === 0) {
      await this.deleteFile(e);
      return;
    }
    let n = await this.sendEventsInBatches(t);
    if (n.length === 0) await this.deleteFile(e);
    else await this.saveEventsToFile(e, n);
  }
  async export(e, t) {
    if (this.isShutdown) {
      t({
        code: mke.ExportResultCode.FAILED,
        error: Error("Exporter has been shutdown"),
      });
      return;
    }
    let n = this.doExport(e, t);
    (this.pendingExports.push(n),
      n.finally(() => {
        let r = this.pendingExports.indexOf(n);
        if (r > -1) this.pendingExports.splice(r, 1);
      }));
  }
  async doExport(e, t) {
    try {
      let n = e.filter((s) => s.instrumentationScope?.name === "com.anthropic.claude_code.events");
      if (n.length === 0) {
        t({
          code: mke.ExportResultCode.SUCCESS,
        });
        return;
      }
      let r = this.transformLogsToEvents(n).events;
      if (r.length === 0) {
        t({
          code: mke.ExportResultCode.SUCCESS,
        });
        return;
      }
      if (this.attempts >= this.maxAttempts) {
        t({
          code: mke.ExportResultCode.FAILED,
          error: Error(`Dropped ${r.length} events: max attempts (${this.maxAttempts}) reached`),
        });
        return;
      }
      let o = await this.sendEventsInBatches(r);
      if ((this.attempts++, o.length > 0)) {
        (await this.queueFailedEvents(o), this.scheduleBackoffRetry());
        let s = this.lastExportErrorContext ? ` (${this.lastExportErrorContext})` : "";
        t({
          code: mke.ExportResultCode.FAILED,
          error: Error(`Failed to export ${o.length} events${s}`),
        });
        return;
      }
      if ((this.resetBackoff(), (await this.getQueuedEventCount()) > 0 && !this.isRetrying))
        this.retryFailedEvents();
      t({
        code: mke.ExportResultCode.SUCCESS,
      });
    } catch (n) {
      (ke(n),
        t({
          code: mke.ExportResultCode.FAILED,
          error: Zr(n),
        }));
    }
  }
  async sendEventsInBatches(e) {
    let t = [];
    for (let o = 0; o < e.length; o += this.maxBatchSize) t.push(e.slice(o, o + this.maxBatchSize));
    let n = [],
      r;
    for (let o = 0; o < t.length; o++) {
      let s = t[o];
      try {
        await this.sendBatchWithRetry({
          events: s,
        });
      } catch (i) {
        r = Q$d(i);
        for (let a = o; a < t.length; a++) n.push(...t[a]);
        break;
      }
      if (o < t.length - 1 && this.batchDelayMs > 0) await Nn(this.batchDelayMs);
    }
    if (n.length > 0 && r) this.lastExportErrorContext = r;
    return n;
  }
  async queueFailedEvents(e) {
    let t = this.getCurrentBatchFilePath();
    await this.appendEventsToFile(t, e);
    let n = this.lastExportErrorContext ? ` (${this.lastExportErrorContext})` : "";
    T(`1P event logging: ${e.length} events failed to export${n}`, {
      level: "error",
    });
  }
  scheduleBackoffRetry() {
    if (this.cancelBackoff || this.isRetrying || this.isShutdown) return;
    let e = Math.min(
      this.baseBackoffDelayMs * this.attempts * this.attempts,
      this.maxBackoffDelayMs,
    );
    this.cancelBackoff = this.schedule(async () => {
      ((this.cancelBackoff = null), await this.retryFailedEvents());
    }, e);
  }
  async retryFailedEvents() {
    let e = this.getCurrentBatchFilePath();
    while (!this.isShutdown) {
      let t = await this.loadEventsFromFile(e);
      if (t.length === 0) break;
      if (this.attempts >= this.maxAttempts) {
        (await this.deleteFile(e), this.resetBackoff());
        return;
      }
      ((this.isRetrying = true), await this.deleteFile(e));
      let n = await this.sendEventsInBatches(t);
      if ((this.attempts++, (this.isRetrying = false), n.length > 0)) {
        (await this.saveEventsToFile(e, n), this.scheduleBackoffRetry());
        return;
      }
      this.resetBackoff();
    }
  }
  resetBackoff() {
    if (((this.attempts = 0), this.cancelBackoff))
      (this.cancelBackoff(), (this.cancelBackoff = null));
  }
  async sendBatchWithRetry(e) {
    if (this.isKilled()) throw Error("firstParty sink killswitch active");
    let t = {
        "Content-Type": "application/json",
        "User-Agent": dy(),
        "x-service-name": "claude-code",
      },
      n = ad() || Ir(),
      r = this.skipAuth || !n;
    if (!r && bo()) {
      let a = Ws();
      if (!cI()) r = true;
      else if (a && ate(a.expiresAt)) r = true;
    }
    let o = r
        ? {
            headers: {},
            error: "trust not established or Oauth token expired",
          }
        : K9(),
      s = !o.error,
      i = s
        ? {
            ...t,
            ...o.headers,
          }
        : t;
    try {
      let a = await po.post(this.endpoint, e, {
        timeout: this.timeout,
        headers: i,
      });
      this.logSuccess(e.events.length, s, a.data);
      return;
    } catch (a) {
      if (s && po.isAxiosError(a) && a.response?.status === 401) {
        let l = await po.post(this.endpoint, e, {
          timeout: this.timeout,
          headers: t,
        });
        this.logSuccess(e.events.length, false, l.data);
        return;
      }
      throw a;
    }
  }
  logSuccess(e, t, n) {}
  hrTimeToDate(e) {
    let [t, n] = e;
    return new Date(t * 1000 + n / 1000000 /* 1e6 */);
  }
  transformLogsToEvents(e) {
    let t = [];
    for (let n of e) {
      let r = n.attributes || {};
      if (r.event_type === "GrowthbookExperimentEvent") {
        let g = this.hrTimeToDate(n.hrTime),
          h = r.account_uuid,
          y = r.organization_uuid;
        t.push({
          event_type: "GrowthbookExperimentEvent",
          event_data: azr.toJSON({
            event_id: r.event_id,
            timestamp: g,
            experiment_id: r.experiment_id,
            variation_id: r.variation_id,
            environment: r.environment,
            user_attributes: r.user_attributes,
            experiment_metadata: r.experiment_metadata,
            device_id: r.device_id,
            session_id: r.session_id,
            auth:
              h || y
                ? {
                    account_uuid: h,
                    organization_uuid: y,
                  }
                : void 0,
          }),
        });
        continue;
      }
      let o = r.event_name || n.body || "unknown",
        s = r.core_metadata,
        i = r.user_metadata,
        a = r.event_metadata || {};
      if (!s) {
        t.push({
          event_type: "ClaudeCodeInternalEvent",
          event_data: okn.toJSON({
            event_id: r.event_id,
            event_name: o,
            client_timestamp: this.hrTimeToDate(n.hrTime),
            session_id: Rt(),
            additional_metadata: Buffer.from(
              De({
                transform_error: "core_metadata attribute is missing",
              }),
            ).toString("base64"),
          }),
        });
        continue;
      }
      let l = TOi(s, i, a),
        {
          _PROTO_skill_name: c,
          _PROTO_plugin_name: u,
          _PROTO_marketplace_name: d,
          _PROTO_code: p,
          ...f
        } = l.additional,
        m = bJe(f);
      t.push({
        event_type: "ClaudeCodeInternalEvent",
        event_data: okn.toJSON({
          event_id: r.event_id,
          event_name: o,
          client_timestamp: this.hrTimeToDate(n.hrTime),
          device_id: r.user_id,
          email: i?.email,
          auth: l.auth,
          ...l.core,
          env: l.env,
          process: l.process,
          skill_name: typeof c === "string" ? c : void 0,
          plugin_name: typeof u === "string" ? u : void 0,
          marketplace_name: typeof d === "string" ? d : void 0,
          repl_code: typeof p === "string" ? p : void 0,
          additional_metadata:
            Object.keys(m).length > 0 ? Buffer.from(De(m)).toString("base64") : void 0,
        }),
      });
    }
    return {
      events: t,
    };
  }
  async shutdown() {
    ((this.isShutdown = true), this.resetBackoff(), await this.forceFlush());
  }
  async forceFlush() {
    await Promise.all(this.pendingExports);
  }
}
function Q$d(e) {
  if (!po.isAxiosError(e)) return be(e);
  let t = [],
    n = e.response?.headers?.["request-id"];
  if (n) t.push(`request-id=${n}`);
  if (e.response?.status) t.push(`status=${e.response.status}`);
  if (e.code) t.push(`code=${e.code}`);
  if (e.message) t.push(e.message);
  return t.join(", ");
}
var mke,
  COi,
  E7,
  gkn,
  vOi,
  wOi = "1p_failed_events.";
