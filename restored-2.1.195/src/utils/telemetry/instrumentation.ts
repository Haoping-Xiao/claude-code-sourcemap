// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B6a
// matched 2.1.88 source: src/utils/telemetry/instrumentation.ts
// class=modified  jaccard=0.2604  score=0.6634  fileCov=0.3
// note: deminified; 12 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: parseOtelHeadersEnvVar, parseExporterTypes, isTelemetryEnabled, isBigQueryMetricsEnabled, initializeTelemetry, getOtlpLogExporters, getOTLPExporterConfig, flushTelemetry, bootstrapTelemetry
function ZEo(e, t) {
  return new Promise((n, r) => {
    setTimeout((o, s) => o(new eAo(s)), e, r, t).unref();
  });
}
function bootstrapTelemetry() {
  if (
    (ioe.context.setGlobalContextManager(qSe),
    !process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE)
  )
    process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE = "delta";
  if (mC() && !Cge()) Y6a();
}
function K6a() {
  let e = J_r();
  if (e) return e;
  let t = Vt(),
    n = {
      [xPe.ATTR_SERVICE_NAME]: "claude-code",
      [xPe.ATTR_SERVICE_VERSION]: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
    };
  if (t === "wsl") {
    let f = OFe();
    if (f) n["wsl.version"] = f;
  }
  let r = NJ.resourceFromAttributes(n),
    o = NJ.resourceFromAttributes(NJ.osDetector.detect().attributes || {}),
    s = NJ.hostDetector.detect(),
    i = s.attributes?.[xPe.SEMRESATTRS_HOST_ARCH]
      ? {
          [xPe.SEMRESATTRS_HOST_ARCH]: s.attributes[xPe.SEMRESATTRS_HOST_ARCH],
        }
      : {},
    a = NJ.resourceFromAttributes(i),
    l = WPn(),
    c = Object.keys(l).length > 0,
    u = NJ.envDetector.detect().attributes || {},
    d = NJ.resourceFromAttributes(
      c ? CB(u, (f, m) => m.startsWith("user.") || m.startsWith("identity.")) : u,
    ),
    p = r.merge(o).merge(a).merge(d).merge(NJ.resourceFromAttributes(l));
  return (Q_r(p), p);
}
function Y6a() {
  let e = K6a(),
    t = new Oyo(),
    n = new DVe(t, {
      scheduledDelayMillis: V6a,
    }),
    r = new n5t({
      resource: e,
      spanProcessors: [n],
    });
  (ioe.trace.setGlobalTracerProvider(r), psn(r));
  let o = new Nyo(),
    s = new h3e({
      resource: e,
      processors: [
        new h_e(o, {
          scheduledDelayMillis: q6a,
        }),
      ],
    });
  (X1t.setGlobalLoggerProvider(s), csn(s));
  let i = X1t.getLogger(
    "com.anthropic.claude_code.events",
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION,
  );
  (usn(i),
    process.on("beforeExit", async () => {
      (await s.forceFlush().catch(() => {}), await r.forceFlush().catch(() => {}));
    }),
    process.on("exit", () => {
      (s.forceFlush().catch(() => {}), r.forceFlush().catch(() => {}));
    }),
    initializeBetaTracing(t, o).catch((a) =>
      T(`Beta tracing exporter wiring failed: ${a}`, {
        level: "error",
      }),
    ));
}
async function initializeBetaTracing(resource, t) {
  let n = process.env.BETA_TRACING_ENDPOINT;
  if (!n) return;
  let [{ OTLPTraceExporter: r }, { OTLPLogExporter: o }] = await Promise.all([
    Promise.resolve().then(() => (y_o(), h_o)),
    Promise.resolve().then(() => (b_o(), __o)),
  ]);
  (resource.setDelegate(
    new r({
      url: `${n}/v1/traces`,
    }),
  ),
    t.setDelegate(
      new o({
        url: `${n}/v1/logs`,
      }),
    ));
}
function parseExporterTypes(e) {
  return (e || "")
    .trim()
    .split(",")
    .filter(Boolean)
    .map((t) => t.trim())
    .filter((t) => t !== "none");
}
async function getOtlpReaders() {
  let e = parseExporterTypes(process.env.OTEL_METRICS_EXPORTER),
    t = LK(process.env.OTEL_METRIC_EXPORT_INTERVAL, yzp);
  T(
    `[3P telemetry] getOtlpReaders: types=${De(e)}, interval=${t}, protocol=${process.env.OTEL_EXPORTER_OTLP_PROTOCOL}, endpoint=${process.env.OTEL_EXPORTER_OTLP_ENDPOINT}`,
  );
  let n = [];
  for (let r of e)
    if (r === "console") {
      let o = new kPe.ConsoleMetricExporter(),
        s = o.export.bind(o);
      ((o.export = (i, a) => {
        if (i.resource && i.resource.attributes)
          (T(`
=== Resource Attributes ===`),
            T(De(i.resource.attributes)),
            T(`===========================
`));
        return s(i, a);
      }),
        n.push(o));
    } else if (r === "otlp") {
      let o =
          process.env.OTEL_EXPORTER_OTLP_METRICS_PROTOCOL?.trim() ||
          process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim(),
        s = getOTLPExporterConfig("metrics");
      switch (o) {
        case "grpc": {
          let { OTLPMetricExporter: i } = await Promise.resolve().then(() => R(Hqa(), 1));
          n.push(new i());
          break;
        }
        case "http/json": {
          let { OTLPMetricExporter: i } = await Promise.resolve().then(() => R(EGn(), 1));
          n.push(new i(s));
          break;
        }
        case "http/protobuf": {
          let { OTLPMetricExporter: i } = await Promise.resolve().then(() => (kqa(), xqa));
          n.push(new i(s));
          break;
        }
        default:
          throw Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${o}`,
          );
      }
    } else if (r === "prometheus") {
      let { PrometheusExporter: o } = await Promise.resolve().then(() => R(y6a(), 1));
      n.push(new o());
    } else
      throw Error(
        `Unknown exporter type set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${r}`,
      );
  return n.map((r) => {
    if ("export" in r)
      return new kPe.PeriodicExportingMetricReader({
        exporter: r,
        exportIntervalMillis: t,
      });
    return r;
  });
}
async function getOtlpLogExporters() {
  let e = parseExporterTypes(process.env.OTEL_LOGS_EXPORTER),
    t =
      process.env.OTEL_EXPORTER_OTLP_LOGS_PROTOCOL?.trim() ||
      process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim(),
    n = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
  T(`[3P telemetry] getOtlpLogExporters: types=${De(e)}, protocol=${t}, endpoint=${n}`);
  let r = [];
  for (let o of e)
    if (o === "console") r.push(new ekn());
    else if (o === "otlp") {
      let s = getOTLPExporterConfig("logs");
      switch (t) {
        case "grpc": {
          let { OTLPLogExporter: i } = await Promise.resolve().then(() => R(E6a(), 1));
          r.push(new i());
          break;
        }
        case "http/json": {
          let { OTLPLogExporter: i } = await Promise.resolve().then(() => (b_o(), __o));
          r.push(new i(s));
          break;
        }
        case "http/protobuf": {
          let { OTLPLogExporter: i } = await Promise.resolve().then(() => (I6a(), C6a));
          r.push(new i(s));
          break;
        }
        default:
          throw Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_LOGS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${t}`,
          );
      }
    } else throw Error(`Unknown exporter type set in OTEL_LOGS_EXPORTER env var: ${o}`);
  return r;
}
async function getOtlpTraceExporters() {
  let e = parseExporterTypes(process.env.OTEL_TRACES_EXPORTER),
    t = [];
  for (let n of e)
    if (n === "console") t.push(new C3n());
    else if (n === "otlp") {
      let r =
          process.env.OTEL_EXPORTER_OTLP_TRACES_PROTOCOL?.trim() ||
          process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim(),
        o = getOTLPExporterConfig("traces");
      switch (r) {
        case "grpc": {
          let { OTLPTraceExporter: s } = await Promise.resolve().then(() => R(L6a(), 1));
          t.push(new s());
          break;
        }
        case "http/json": {
          let { OTLPTraceExporter: s } = await Promise.resolve().then(() => (y_o(), h_o));
          t.push(new s(o));
          break;
        }
        case "http/protobuf": {
          let { OTLPTraceExporter: s } = await Promise.resolve().then(() => (B6a(), N6a));
          t.push(new s(o));
          break;
        }
        default:
          throw Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_TRACES_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${r}`,
          );
      }
    } else throw Error(`Unknown exporter type set in OTEL_TRACES_EXPORTER env var: ${n}`);
  return t;
}
function isTelemetryEnabled() {
  return ut(process.env.CLAUDE_CODE_ENABLE_TELEMETRY);
}
function Ezp() {
  let e = new Myo();
  return new kPe.PeriodicExportingMetricReader({
    exporter: e,
    exportIntervalMillis: 300000,
  });
}
function isBigQueryMetricsEnabled() {
  if (She()) return false;
  let e = Di(),
    t = bo() && (e === "enterprise" || e === "team");
  return K4e() || t;
}
async function initializeTelemetry() {
  if (
    (pa("telemetry_init_start"),
    bootstrapTelemetry(),
    ioe.propagation.setGlobalPropagator(new F6a.W3CTraceContextPropagator()),
    QEr())
  )
    for (let s of ["OTEL_METRICS_EXPORTER", "OTEL_LOGS_EXPORTER", "OTEL_TRACES_EXPORTER"]) {
      let i = process.env[s];
      if (i?.includes("console"))
        process.env[s] = i
          .split(",")
          .map((a) => a.trim())
          .filter((a) => a !== "console")
          .join(",");
    }
  (ioe.diag.setLogger(new Byo(), ioe.DiagLogLevel.ERROR), jxa());
  let e = [],
    t = isTelemetryEnabled();
  if (
    (T(
      `[3P telemetry] isTelemetryEnabled=${t} (CLAUDE_CODE_ENABLE_TELEMETRY=${process.env.CLAUDE_CODE_ENABLE_TELEMETRY})`,
    ),
    t)
  )
    e.push(...(await getOtlpReaders()));
  if (isBigQueryMetricsEnabled()) e.push(Ezp());
  let n = K6a();
  if (mC()) {
    if (!Cge()) Y6a();
    let s = new kPe.MeterProvider({
      resource: n,
      views: [],
      readers: e,
    });
    return (
      dsn(s),
      Ci(async () => {
        let a = LK(process.env.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS, 2000);
        try {
          dde();
          let l = mCt(),
            c = Cge(),
            u = [s.shutdown()];
          if (l) u.push(l.forceFlush().then(() => l.shutdown()));
          if (c) u.push(c.forceFlush().then(() => c.shutdown()));
          await Promise.race([Promise.all(u), ZEo(a, "OpenTelemetry shutdown timeout")]);
        } catch {}
      }),
      s.getMeter(
        "com.anthropic.claude_code",
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
      )
    );
  }
  let r = new kPe.MeterProvider({
    resource: n,
    views: [],
    readers: e,
  });
  if ((dsn(r), t)) {
    let s = await getOtlpLogExporters();
    if ((T(`[3P telemetry] Created ${s.length} log exporter(s)`), s.length > 0)) {
      let i = new h3e({
        resource: n,
        processors: s.map(
          (l) =>
            new h_e(l, {
              scheduledDelayMillis: LK(process.env.OTEL_LOGS_EXPORT_INTERVAL, q6a),
            }),
        ),
      });
      (X1t.setGlobalLoggerProvider(i), csn(i));
      let a = X1t.getLogger(
        "com.anthropic.claude_code.events",
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
      );
      (usn(a),
        T("[3P telemetry] Event logger set successfully"),
        process.on("beforeExit", async () => {
          (await i?.forceFlush(), await Cge()?.forceFlush());
        }),
        process.on("exit", () => {
          (i?.forceFlush(), Cge()?.forceFlush());
        }));
    }
  }
  if (t && lpo()) {
    let s = await getOtlpTraceExporters();
    if (s.length > 0) {
      let i = s.map(
          (l) =>
            new DVe(l, {
              scheduledDelayMillis: LK(process.env.OTEL_TRACES_EXPORT_INTERVAL, V6a),
            }),
        ),
        a = new n5t({
          resource: n,
          spanProcessors: i,
        });
      (ioe.trace.setGlobalTracerProvider(a),
        psn(a),
        process.on("beforeExit", async () => {
          await a.forceFlush();
        }));
    }
  }
  return (
    Ci(async () => {
      let s = LK(process.env.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS, 2000);
      try {
        dde();
        let i = [r.shutdown()],
          a = mCt();
        if (a) i.push(a.shutdown());
        let l = Cge();
        if (l) i.push(l.shutdown());
        await Promise.race([Promise.all(i), ZEo(s, "OpenTelemetry shutdown timeout")]);
      } catch (i) {
        if (i instanceof Error && i.message.includes("timeout"))
          T(
            `
OpenTelemetry telemetry flush timed out after ${s}ms

To resolve this issue, you can:
1. Increase the timeout by setting CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS env var (e.g., 5000 for 5 seconds)
2. Check if your OpenTelemetry backend is experiencing scalability issues
3. Disable OpenTelemetry by unsetting CLAUDE_CODE_ENABLE_TELEMETRY env var

Current timeout: ${s}ms
`,
            {
              level: "error",
            },
          );
        throw i;
      }
    }),
    r.getMeter(
      "com.anthropic.claude_code",
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
    )
  );
}
async function flushTelemetry() {
  let e = X_r();
  if (!e) return;
  let t = LK(process.env.CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS, 5000);
  try {
    let n = [e.forceFlush()],
      r = mCt();
    if (r) n.push(r.forceFlush());
    let o = Cge();
    if (o) n.push(o.forceFlush());
    (await Promise.race([Promise.all(n), ZEo(t, "OpenTelemetry flush timeout")]),
      T("Telemetry flushed successfully"));
  } catch (n) {
    if (n instanceof eAo)
      T(`Telemetry flush timed out after ${t}ms. Some metrics may not be exported.`, {
        level: "warn",
      });
    else
      T(`Telemetry flush failed: ${be(n)}`, {
        level: "error",
      });
  }
}
function parseOtelHeadersEnvVar() {
  let e = {},
    t = process.env.OTEL_EXPORTER_OTLP_HEADERS;
  if (t)
    for (let n of t.split(",")) {
      let [r, ...o] = n.split("=");
      if (r && o.length > 0) e[r.trim()] = o.join("=").trim();
    }
  return e;
}
function getOTLPExporterConfig(e) {
  let t = jo(),
    n = {},
    r = km();
  if (ZBe(r)) {
    let s = r.url;
    return (
      (n.url = `${s}/v1/${e}`),
      (n.headers = async () => {
        await oxe();
        let i = km();
        if (!i || i.url !== s) return {};
        return {
          Authorization: `Bearer ${i.jwt}`,
        };
      }),
      (n.httpAgentOptions = U6a(s)),
      n
    );
  }
  let o = parseOtelHeadersEnvVar();
  if (t?.otelHeadersHelper)
    n.headers = async () => {
      let s = await u8r();
      return {
        ...o,
        ...s,
      };
    };
  else if (Object.keys(o).length > 0) n.headers = async () => o;
  return (
    (n.httpAgentOptions = U6a(
      process.env[`OTEL_EXPORTER_OTLP_${e.toUpperCase()}_ENDPOINT`] ??
        process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
    )),
    n
  );
}
function Tzp(e) {
  if (!e) return false;
  try {
    let t = new URL(e).hostname.toLowerCase();
    return t === "localhost" || t === "::1" || t === "[::1]" || /^127(\.\d{1,3}){3}$/.test(t);
  } catch {
    return false;
  }
}
function U6a(e) {
  let t = ID(),
    n = !!(t && !Tzp(e) && !(e && g9(e))),
    r = Z_r(n);
  if (r) return r;
  let o = UB(),
    s = DG(),
    i = {
      ...o,
      ...(s && {
        ca: s,
      }),
    },
    a,
    l,
    c,
    u = (d) => {
      if (n) {
        if (!c)
          c = new W6a.HttpsProxyAgent(t, {
            ...i,
            keepAlive: true,
            maxSockets: 1,
          });
        return c;
      }
      if (d === "http:") {
        if (!a)
          a = new j6a.default.Agent({
            keepAlive: true,
            maxSockets: 1,
          });
        return a;
      }
      if (!l)
        l = new G6a.default.Agent({
          ...i,
          keepAlive: true,
          maxSockets: 1,
        });
      return l;
    };
  return (ebr(n, u), u);
}
var ioe,
  F6a,
  NJ,
  kPe,
  xPe,
  j6a,
  G6a,
  W6a,
  yzp = 60000,
  q6a = 5000,
  V6a = 5000,
  eAo;
