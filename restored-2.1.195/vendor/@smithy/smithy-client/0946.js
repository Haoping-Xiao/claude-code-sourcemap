// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T$r
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: @smithy/smithy-client; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module T$r]
aIe = class aIe extends Error {
  $fault;
  $response;
  $retryable;
  $metadata;
  constructor(e) {
    super(e.message);
    Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = e.name, this.$fault = e.$fault, this.$metadata = e.$metadata;
  }
  static isInstance(e) {
    if (!e) return false;
    let t = e;
    return aIe.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && (t.$fault === "client" || t.$fault === "server");
  }
  static [Symbol.hasInstance](e) {
    if (!e) return false;
    let t = e;
    if (this === aIe) return aIe.isInstance(e);
    if (aIe.isInstance(e)) {
      if (t.name && this.name) return this.prototype.isPrototypeOf(e) || t.name === this.name;
      return this.prototype.isPrototypeOf(e);
    }
    return false;
  }
};
var eBs = ({
    output: e,
    parsedBody: t,
    exceptionCtor: n,
    errorCode: r
  }) => {
    let o = m9u(e),
      s = o.httpStatusCode ? o.httpStatusCode + "" : void 0,
      i = new n({
        name: t?.code || t?.Code || r || s || "UnknownError",
        $fault: "client",
        $metadata: o
      });
    throw H$r(i, t);
  },
  f9u = e => ({
    output: t,
    parsedBody: n,
    errorCode: r
  }) => {
    eBs({
      output: t,
      parsedBody: n,
      exceptionCtor: e,
      errorCode: r
    });
  },
  m9u = e => ({
    httpStatusCode: e.statusCode,
    requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
    extendedRequestId: e.headers["x-amz-id-2"],
    cfId: e.headers["x-amz-cf-id"]
  });