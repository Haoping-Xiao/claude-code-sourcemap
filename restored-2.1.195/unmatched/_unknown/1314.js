// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LUr
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0479  score=0.7577  fileCov=0.0486
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0479); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module LUr]
BIe = class BIe extends Error {
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
    return BIe.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && (t.$fault === "client" || t.$fault === "server");
  }
  static [Symbol.hasInstance](e) {
    if (!e) return false;
    let t = e;
    if (this === BIe) return BIe.isInstance(e);
    if (BIe.isInstance(e)) {
      if (t.name && this.name) return this.prototype.isPrototypeOf(e) || t.name === this.name;
      return this.prototype.isPrototypeOf(e);
    }
    return false;
  }
};
var gJs = ({
    output: e,
    parsedBody: t,
    exceptionCtor: n,
    errorCode: r
  }) => {
    let o = Old(e),
      s = o.httpStatusCode ? o.httpStatusCode + "" : void 0,
      i = new n({
        name: t?.code || t?.Code || r || s || "UnknownError",
        $fault: "client",
        $metadata: o
      });
    throw RUr(i, t);
  },
  $ld = e => ({
    output: t,
    parsedBody: n,
    errorCode: r
  }) => {
    gJs({
      output: t,
      parsedBody: n,
      exceptionCtor: e,
      errorCode: r
    });
  },
  Old = e => ({
    httpStatusCode: e.statusCode,
    requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
    extendedRequestId: e.headers["x-amz-id-2"],
    cfId: e.headers["x-amz-cf-id"]
  });