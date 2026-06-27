// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tec
// matched 2.1.88 source: src/server/directConnectManager.ts
// class=modified (alt of src/server/directConnectManager.ts)  jaccard=0.0857  score=0.1276  fileCov=0.2067
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Tec] deps: Xr, qee, dn, At, x3o, Jt, eLe
zKf = ve(() =>
  H.object({
    session_id: H.string(),
    ws_url: H.string(),
    work_dir: H.string().optional(),
    session_key: H.string().optional(),
  }),
);
dZ = class dZ extends Error {
  code;
  constructor(e, t) {
    super(e);
    ((this.name = "DirectConnectError"), (this.code = t));
  }
};
q3o = class q3o {
  options;
  ws;
  sessionId;
  workDir;
  abortController;
  readyState = false;
  closed = false;
  exitError;
  messages = new E4();
  readyPromise;
  readyResolve;
  readyReject;
  abortHandler;
  partialChunks = [];
  telemetryEmitted = false;
  constructor(e) {
    this.options = e;
    ((this.abortController = e.abortController ?? new AbortController()),
      (this.readyPromise = new Promise((t, n) => {
        ((this.readyResolve = t), (this.readyReject = n));
      })),
      this.readyPromise.catch(() => {}),
      this.initialize());
  }
  get ready() {
    return this.readyPromise;
  }
  getSessionId() {
    return this.sessionId;
  }
  getWorkDir() {
    return this.workDir;
  }
  async initialize() {
    if (this.abortController.signal.aborted) {
      this.failInit(new WO("Connection aborted"));
      return;
    }
    ((this.abortHandler = () => {
      (this.close(), (this.exitError = new WO("Connection aborted by user")));
    }),
      this.abortController.signal.addEventListener("abort", this.abortHandler));
    let e;
    try {
      let o = await KKf(this.options);
      ((this.sessionId = o.sessionId), (this.workDir = o.workDir), (e = o.wsUrl));
    } catch (o) {
      let s = Zr(o);
      if (!(s instanceof WO)) {
        let i = s instanceof dZ && s.code ? s.code : "session_create_failed";
        this.emitTelemetry("bad", i);
      }
      this.failInit(s);
      return;
    }
    if (this.closed) {
      if (this.options.deleteSessionOnClose && this.sessionId)
        Aec(this.options.serverUrl, this.sessionId, this.options.authToken);
      return;
    }
    let t = {};
    if (this.options.authToken) t.authorization = `Bearer ${this.options.authToken}`;
    let n = new WebSocket(e, {
      headers: t,
    });
    this.ws = n;
    let r = setTimeout(
      (o, s) => {
        if (!o.readyState) {
          s.close();
          let i = new dZ(`WebSocket connection timeout after ${Eec}ms`);
          ((o.exitError = i), o.readyReject?.(i), o.emitTelemetry("bad", "connect_timeout"));
        }
      },
      Eec,
      this,
      n,
    );
    (n.addEventListener("open", () => {
      (clearTimeout(r),
        (this.readyState = true),
        Xq(
          `[DirectConnectTransport] Connected to ${this.options.serverUrl}, session=${this.sessionId}`,
        ),
        this.readyResolve?.(),
        this.emitTelemetry("ok"));
    }),
      n.addEventListener("message", (o) => {
        let s = typeof o.data === "string" ? o.data : "";
        if (
          s.indexOf(`
`) === -1
        ) {
          if (s) this.partialChunks.push(s);
          return;
        }
        let i = this.partialChunks.join("") + s;
        this.partialChunks.length = 0;
        let a = i.split(`
`),
          l = a.pop() ?? "";
        if (l) this.partialChunks.push(l);
        for (let c of a) {
          if (!c) continue;
          let u;
          try {
            u = Ft(c);
          } catch (d) {
            Xq(`DirectConnect: dropped malformed JSON line (${c.length} bytes): ${d}`);
            continue;
          }
          this.messages.enqueue(u);
        }
      }),
      n.addEventListener("error", () => {
        clearTimeout(r);
        let o = new dZ("WebSocket connection error");
        if (((this.exitError = o), this.readyReject?.(o), this.messages.done(), !this.readyState))
          this.emitTelemetry("bad", "ws_error");
      }),
      n.addEventListener("close", (o) => {
        let s = this.readyState;
        ((this.readyState = false), (this.closed = true));
        let i = o.code !== 1000 && o.code !== 1001;
        if (i && !this.exitError)
          this.exitError = new dZ(`WebSocket closed abnormally: ${o.code} ${o.reason}`);
        if ((this.messages.done(), s && i && !this.abortController.signal.aborted))
          this.emitTelemetry("sad", "ws_closed_abnormally");
      }));
  }
  emitTelemetry(e, t) {
    if (this.telemetryEmitted) return;
    if (((this.telemetryEmitted = true), e === "ok")) xe("transport_direct_connect");
    else if (e === "bad") Le("transport_direct_connect", t ?? "unknown");
    else It("transport_direct_connect", t ?? "unknown");
  }
  failInit(e) {
    ((this.exitError = e), (this.closed = true), this.readyReject?.(e), this.messages.done());
  }
  async write(e) {
    if (this.abortController.signal.aborted) throw new WO("Operation aborted");
    if (!this.readyState) await this.readyPromise;
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN)
      throw new dZ("Transport is not ready for writing");
    this.ws.send(e);
  }
  isReady() {
    return this.readyState && this.ws?.readyState === WebSocket.OPEN;
  }
  endInput() {}
  [Symbol.dispose]() {
    this.close();
  }
  close() {
    if (this.closed) return;
    if (((this.closed = true), (this.readyState = false), this.abortHandler))
      (this.abortController.signal.removeEventListener("abort", this.abortHandler),
        (this.abortHandler = void 0));
    if (!this.abortController.signal.aborted) this.abortController.abort();
    if (this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.close(1000, "Normal closure");
    if ((this.messages.done(), this.options.deleteSessionOnClose && this.sessionId))
      Aec(this.options.serverUrl, this.sessionId, this.options.authToken);
  }
  async *readMessages() {
    if ((yield* this.messages, this.exitError)) throw this.exitError;
  }
};
function Cec(e) {
  let t = e.effective.permissions?.defaultMode;
  if (!t || !JKf.has(t)) return e.effective;
  for (let n = e.sources.length - 1; n >= 0; n--) {
    let r = e.sources[n];
    if (r.settings.permissions?.defaultMode !== void 0) {
      if (QKf.has(r.source)) {
        let { defaultMode: o, ...s } = e.effective.permissions ?? {};
        return {
          ...e.effective,
          permissions: s,
        };
      }
      return e.effective;
    }
  }
  return e.effective;
}
async function Iec(e = {}) {
  await Uet();
  let t = {
    cwd: wec.resolve(e.cwd ?? qt().cwd()),
    allowedSources: (e.settingSources ?? XKf).map((n) => YKf[n]),
    parentManaged: e.managedSettings ?? null,
    flagInline: null,
    flagPath: void 0,
    mdm: Uae,
    hkcu: kCe,
    wslInherits: Vee,
    ...(e.serverManagedSettings !== void 0 && {
      remote: () => e.serverManagedSettings,
    }),
  };
  try {
    let { effective: n, sources: r } = Kws(t),
      o = hmn(t) ?? void 0,
      s = r.map(({ source: a, settings: l }) => ({
        source: vec[a],
        settings: l,
        path: a === "policySettings" ? void 0 : CCe(a, t),
        ...(a === "policySettings" && {
          policyOrigin: o,
        }),
      })),
      i = {};
    for (let a of Object.keys(n)) {
      let l = Yws(a, t);
      if (l)
        i[a] = {
          source: vec[l],
          path: l === "policySettings" ? void 0 : CCe(l, t),
          ...(l === "policySettings" && {
            policyOrigin: o,
          }),
        };
    }
    return {
      effective: n,
      provenance: i,
      sources: s,
    };
  } finally {
    n_();
  }
}
var wec, YKf, vec, XKf, JKf, QKf;
