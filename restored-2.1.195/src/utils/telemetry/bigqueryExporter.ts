// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jUa
// matched 2.1.88 source: src/utils/telemetry/bigqueryExporter.ts
// class=modified  jaccard=0.5303  score=0.6744  fileCov=0.7128
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var jUa = E(() => {
  oo();
  er();
  je();
  At();
  Gx();
  vn();
  SG();
  dn();
  c_();
  ROp = Ahe(kOp, IOp);
});
class Myo {
  endpoint;
  timeout;
  pendingExports = [];
  isShutdown = false;
  constructor(e = {}) {
    let t = `${$s().BASE_API_URL}/api/claude_code/metrics`;
    ((this.endpoint = t), (this.timeout = e.timeout || 5000));
  }
  async export(e, t) {
    if (this.isShutdown) {
      t({
        code: MVe.ExportResultCode.FAILED,
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
      if (!(ad() || Ir())) {
        (T("BigQuery metrics export: trust not established, skipping"),
          t({
            code: MVe.ExportResultCode.SUCCESS,
          }));
        return;
      }
      if (!(await FUa()).enabled) {
        (T("Metrics export disabled by organization setting"),
          t({
            code: MVe.ExportResultCode.SUCCESS,
          }));
        return;
      }
      let o = this.transformMetricsForInternal(e),
        s = K9();
      if (s.error) {
        (T(`Metrics export failed: ${s.error}`),
          t({
            code: MVe.ExportResultCode.FAILED,
            error: Error(s.error),
          }));
        return;
      }
      let i = {
          "Content-Type": "application/json",
          "User-Agent": dy(),
          ...s.headers,
        },
        a = await po.post(this.endpoint, o, {
          timeout: this.timeout,
          headers: i,
        });
      (T("BigQuery metrics exported successfully"),
        T(`BigQuery API Response: ${De(a.data, null, 2)}`),
        t({
          code: MVe.ExportResultCode.SUCCESS,
        }));
    } catch (n) {
      (T(`BigQuery metrics export failed: ${be(n)}`, {
        level: "error",
      }),
        t({
          code: MVe.ExportResultCode.FAILED,
          error: Zr(n),
        }));
    }
  }
  transformMetricsForInternal(e) {
    let t = e.resource.attributes,
      n = {
        "service.name": t["service.name"] || "claude-code",
        "service.version": t["service.version"] || "unknown",
        "os.type": t["os.type"] || "unknown",
        "os.version": t["os.version"] || "unknown",
        "host.arch": t["host.arch"] || "unknown",
        "aggregation.temporality":
          this.selectAggregationTemporality() === Pyo.AggregationTemporality.DELTA
            ? "delta"
            : "cumulative",
      };
    if (t["wsl.version"]) n["wsl.version"] = t["wsl.version"];
    if (bo()) {
      n["user.customer_type"] = "claude_ai";
      let o = Di();
      if (o) n["user.subscription_type"] = o;
    } else n["user.customer_type"] = "api";
    return {
      resource_attributes: n,
      metrics: e.scopeMetrics.flatMap((o) =>
        o.metrics.map((s) => ({
          name: s.descriptor.name,
          description: s.descriptor.description,
          unit: s.descriptor.unit,
          data_points: this.extractDataPoints(s),
        })),
      ),
    };
  }
  extractDataPoints(e) {
    return (e.dataPoints || [])
      .filter((n) => typeof n.value === "number")
      .map((n) => ({
        attributes: this.convertAttributes(n.attributes),
        value: n.value,
        timestamp: this.hrTimeToISOString(n.endTime || n.startTime || [Date.now() / 1000, 0]),
      }));
  }
  async shutdown() {
    ((this.isShutdown = true),
      await this.forceFlush(),
      T("BigQuery metrics exporter shutdown complete"));
  }
  async forceFlush() {
    (await Promise.all(this.pendingExports), T("BigQuery metrics exporter flush complete"));
  }
  convertAttributes(e) {
    let t = {};
    if (e) {
      for (let [n, r] of Object.entries(e)) if (r !== void 0 && r !== null) t[n] = String(r);
    }
    return t;
  }
  hrTimeToISOString(e) {
    let [t, n] = e;
    return new Date(t * 1000 + n / 1000000 /* 1e6 */).toISOString();
  }
  selectAggregationTemporality() {
    return Pyo.AggregationTemporality.DELTA;
  }
}
var MVe, Pyo;
