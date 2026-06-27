// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R$i
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var R$i = E(() => {
  X6r();
  H$i();
  w$i();
  x$i();
  J1t = R(qi(), 1), k$i = R(Hst(), 1), Qxn = R(Nh(), 1);
});
class ekn {
  export(e, t) {
    this._sendLogRecords(e, t);
  }
  shutdown() {
    return Promise.resolve();
  }
  _exportInfo(e) {
    return {
      resource: {
        attributes: e.resource.attributes
      },
      instrumentationScope: e.instrumentationScope,
      timestamp: Zxn.hrTimeToMicroseconds(e.hrTime),
      traceId: e.spanContext?.traceId,
      spanId: e.spanContext?.spanId,
      traceFlags: e.spanContext?.traceFlags,
      severityText: e.severityText,
      severityNumber: e.severityNumber,
      body: e.body,
      attributes: e.attributes
    };
  }
  _sendLogRecords(e, t) {
    for (let n of e) console.dir(this._exportInfo(n), {
      depth: 3
    });
    t?.({
      code: Zxn.ExportResultCode.SUCCESS
    });
  }
}
var Zxn;