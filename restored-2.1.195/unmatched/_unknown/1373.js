// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sFr
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0469  score=0.9046  fileCov=0.0472
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0469); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sFr = E(() => {
  jIe = class jIe extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(e) {
      super(e.message);
      Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = e.name, this.$fault = e.$fault, this.$metadata = e.$metadata;
    }
    static isInstance(e) {
      if (!e) return !1;
      let t = e;
      return jIe.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && (t.$fault === "client" || t.$fault === "server");
    }
    static [Symbol.hasInstance](e) {
      if (!e) return !1;
      let t = e;
      if (this === jIe) return jIe.isInstance(e);
      if (jIe.isInstance(e)) {
        if (t.name && this.name) return this.prototype.isPrototypeOf(e) || t.name === this.name;
        return this.prototype.isPrototypeOf(e);
      }
      return !1;
    }
  };
});
var oti = ({
    output: e,
    parsedBody: t,
    exceptionCtor: n,
    errorCode: r
  }) => {
    let o = Ycd(e),
      s = o.httpStatusCode ? o.httpStatusCode + "" : void 0,
      i = new n({
        name: t?.code || t?.Code || r || s || "UnknownError",
        $fault: "client",
        $metadata: o
      });
    throw oFr(i, t);
  },
  Kcd = e => ({
    output: t,
    parsedBody: n,
    errorCode: r
  }) => {
    oti({
      output: t,
      parsedBody: n,
      exceptionCtor: e,
      errorCode: r
    });
  },
  Ycd = e => ({
    httpStatusCode: e.statusCode,
    requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
    extendedRequestId: e.headers["x-amz-id-2"],
    cfId: e.headers["x-amz-cf-id"]
  });