// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cUc
// matched 2.1.88 source: src/cli/remoteIO.ts
// class=modified  jaccard=0.2478  score=0.4234  fileCov=0.374
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var cUc = E(() => {
  ft();
  sVe();
  nGo();
  SJ();
  tSe();
  fd();
  je();
  Mm();
  fn();
  At();
  Yp();
  vn();
  ED();
  aze();
  kM();
  _a();
  Von();
  X4();
  sXo();
  nXo();
  v0n();
  oXo();
  P8o();
  iUc();
  ((aUc = require("stream")), (lUc = require("url")));
  kvt = class kvt extends dnn {
    url;
    transport;
    inputStream;
    isBridge = false;
    isDebug = false;
    teeStdout = false;
    ccrClient;
    keepAliveTimer = null;
    permanentCloseCode;
    constructor(e, t, n, r) {
      let o = new aUc.PassThrough({
        encoding: "utf8",
      });
      super(o, n, r);
      if (((this.inputStream = o), (this.url = new lUc.URL(e)), this.url.protocol === "wss:"))
        this.url.protocol = "https:";
      else if (this.url.protocol === "ws:") this.url.protocol = "http:";
      let s = {
          "anthropic-client-platform": _x(),
        },
        i = XS();
      if (i) s.Authorization = `Bearer ${i}`;
      else
        T("[remote-io] No session ingress token available", {
          level: "error",
        });
      let a = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
      if (a) s["x-environment-runner-version"] = a;
      let l = () => {
        let m = {},
          g = XS();
        if (g) m.Authorization = `Bearer ${g}`;
        let h = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
        if (h) m["x-environment-runner-version"] = h;
        return m;
      };
      ((this.transport = sUc(this.url, s, Rt(), l)),
        (this.isBridge = process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge"),
        (this.isDebug = vO()),
        (this.teeStdout = ut(process.env.CLAUDE_CODE_TEE_SDK_STDOUT)),
        this.transport.setOnData((m) => {
          if ((this.inputStream.write(m), this.isBridge && this.isDebug))
            $i(
              m.endsWith(`
`)
                ? m
                : m +
                    `
`,
            );
        }),
        this.transport.setOnClose((m) => {
          if (m !== void 0)
            ((this.permanentCloseCode = m),
              process.stderr.write(`RemoteIO: transport closed permanently (code ${m})
`));
          this.inputStream.end();
        }));
      let c = this.isBridge
        ? void 0
        : (m) => {
            process.stderr.write(`SDKStartup: ${m}
`);
          };
      if (c) this.transport.setOnDiagnostic?.(c);
      this.ccrClient = new den(this.transport, this.url, {
        onDiagnostic: c,
      });
      let u = this.ccrClient.initialize();
      if (
        ((this.restoredWorkerState = u.catch(() => null)),
        u.then(
          () => c?.("worker registered"),
          (m) => {
            let g = m instanceof _Ne ? m.reason : be(m);
            In("error", "cli_worker_lifecycle_init_failed", {
              reason: m instanceof _Ne ? m.reason : "unknown",
            });
            let h = `CCRClient initialization failed: ${be(m)}`;
            if (Hgc(m))
              T(h, {
                level: "error",
              });
            else ke(Error(h));
            (c?.(`worker registration failed (${g}), exiting`), ki(1, "other"));
          },
        ),
        Ci(async () => this.ccrClient.close()),
        YQt((m, g, h) => this.ccrClient.writeInternalEvent(m, g, h)),
        XQt(
          (m) => this.ccrClient.readInternalEvents(m),
          () => this.ccrClient.readSubagentInternalEvents(),
        ),
        (this.ccrClient.onInternalBatchAcked = i5o),
        mLm(process.argv))
      ) {
        let m = performance.now(),
          g = this.ccrClient;
        ((this.hydratePrefetch = (async () => {
          let h = g.readSubagentInternalEvents(),
            y,
            b = Xwt();
          if (b) y = await dlr(b, kmr());
          let [_, S] = await Promise.all([g.readInternalEvents(y?.eventId), h]);
          return [_, S, y];
        })().catch((h) => (ke(h), null))),
          this.hydratePrefetch.then(() => {
            (Zc("resume_hydrate_fetch_ms", performance.now() - m, m), iZa());
          }));
      }
      let d = {
        started: "processing",
        completed: "processed",
      };
      if (
        ((this.onCommandLifecycle = (m, g) => {
          this.ccrClient.reportDelivery(m, d[g]);
        }),
        this.isBridge)
      )
        (bft(iVe),
          this.transport.setEventFilter((m) => {
            let g = Yjn(m);
            if (g)
              (this.ccrClient.reportDelivery(m.event_id, "received"),
                this.ccrClient.reportDelivery(m.event_id, "processed"));
            return g;
          }));
      let p = (m) => {
        if (this.teeStdout && !this.isBridge)
          try {
            $i(
              G7e({
                type: "system",
                subtype: "session_state_changed",
                state: m,
                waiting_on_user: this.sessionState.waitingOnUser,
              }) +
                `
`,
            );
          } catch {}
      };
      ((this.sessionState.onStateChanged = (m, g) => {
        (this.ccrClient.reportState(m, g), p(m));
      }),
        (this.sessionState.onWaitingOnUserChanged = () => {
          p(this.sessionState.getState());
        }),
        (this.sessionState.onTurnStarting = () => {
          if (this.teeStdout && !this.isBridge)
            try {
              $i(
                G7e({
                  type: "system",
                  subtype: "turn_starting",
                }) +
                  `
`,
              );
            } catch {}
        }),
        bLo((m) => this.sessionState.setMainLoopRefcount(m)),
        this.sessionState.setMainLoopRefcount(sHl()),
        (this.sessionState.onMetadataChanged = (m) => {
          this.ccrClient.reportMetadata(m);
        }),
        (this.sessionState.onInternalMetadataChanged = (m) => {
          this.ccrClient.reportInternalMetadata(m);
        }),
        lBi((m) => this.sessionState.notifyMetadataChanged(m)),
        this.transport.connect());
      let f = U1e().session_keepalive_interval_v2_ms;
      if (this.isBridge && f > 0)
        ((this.keepAliveTimer = setInterval(() => {
          (T("[remote-io] keep_alive sent"),
            this.write({
              type: "keep_alive",
            }).catch((m) => {
              T(`[remote-io] keep_alive write failed: ${be(m)}`);
            }));
        }, f)),
          this.keepAliveTimer.unref?.());
      if ((Ci(async () => this.close()), t)) {
        let m = this.inputStream;
        (async () => {
          for await (let g of t)
            m.write(
              String(g).replace(/\n$/, "") +
                `
`,
            );
        })();
      }
    }
    flushInternalEvents() {
      return this.ccrClient.flushInternalEvents();
    }
    flushDeliveryAcks() {
      return this.ccrClient.flushDeliveryAcks();
    }
    async flushClientEvents() {
      let e = this.ccrClient.droppedDurableBatches;
      return (await this.ccrClient.flush(), this.ccrClient.droppedDurableBatches === e);
    }
    flushSessionState() {
      return this.ccrClient.flushWorkerState();
    }
    get internalEventsPending() {
      return this.ccrClient.internalEventsPending;
    }
    async write(e) {
      if (e.type === "transcript_mirror") return;
      if ((this.trackWrite(e), this.teeStdout && !this.isBridge)) {
        let t = fLm(e);
        if (t !== void 0)
          try {
            $i(
              G7e(t) +
                `
`,
            );
          } catch {}
      }
      if ((await this.ccrClient.writeEvent(e), this.isBridge)) {
        if (e.type === "control_request" || this.isDebug)
          $i(
            G7e(e) +
              `
`,
          );
      }
    }
    close() {
      if ((bLo(null), this.keepAliveTimer))
        (clearInterval(this.keepAliveTimer), (this.keepAliveTimer = null));
      (this.transport.close(), this.inputStream.end());
    }
  };
});
function dUc(e) {
  if (e.length === 0) return true;
  try {
    return (Ft(e), true);
  } catch {
    return false;
  }
}
function pUc() {
  if (iXo) return;
  iXo = true;
  let e = new TextDecoder("utf-8");
  ((W7e = process.stdout.write.bind(process.stdout)),
    (process.stdout.write = function (t, n, r) {
      let o =
        typeof t === "string"
          ? t
          : e.decode(t, {
              stream: true,
            });
      sie += o;
      let s,
        i = true;
      while (
        (s = sie.indexOf(`
`)) !== -1
      ) {
        let l = sie.slice(0, s);
        if (((sie = sie.slice(s + 1)), dUc(l)))
          i = W7e(
            l +
              `
`,
          );
        else
          (process.stderr.write(`${uUc} ${l}
`),
            T(`streamJsonStdoutGuard diverted non-JSON stdout line: ${l.slice(0, 200)}`));
      }
      let a = typeof n === "function" ? n : r;
      if (a) queueMicrotask(() => a());
      return i;
    }),
    Ci(async () => {
      if (((sie += e.decode()), sie.length > 0)) {
        if (W7e && dUc(sie))
          W7e(
            sie +
              `
`,
          );
        else
          process.stderr.write(`${uUc} ${sie}
`);
        sie = "";
      }
      if (W7e) ((process.stdout.write = W7e), (W7e = null));
      iXo = false;
    }));
}
var uUc = "[stdout-guard]",
  iXo = false,
  sie = "",
  W7e = null;
