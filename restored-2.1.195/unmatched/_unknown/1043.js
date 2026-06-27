// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WOr
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0469  score=0.9046  fileCov=0.0472
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0469); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WOr = E(() => {
  EIe = class EIe extends Error {
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
      return EIe.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && (t.$fault === "client" || t.$fault === "server");
    }
    static [Symbol.hasInstance](e) {
      if (!e) return !1;
      let t = e;
      if (this === EIe) return EIe.isInstance(e);
      if (EIe.isInstance(e)) {
        if (t.name && this.name) return this.prototype.isPrototypeOf(e) || t.name === this.name;
        return this.prototype.isPrototypeOf(e);
      }
      return !1;
    }
  };
});
var M3s = ({
    output: e,
    parsedBody: t,
    exceptionCtor: n,
    errorCode: r
  }) => {
    let o = kKu(e),
      s = o.httpStatusCode ? o.httpStatusCode + "" : void 0,
      i = new n({
        name: t?.code || t?.Code || r || s || "UnknownError",
        $fault: "client",
        $metadata: o
      });
    throw GOr(i, t);
  },
  xKu = e => ({
    output: t,
    parsedBody: n,
    errorCode: r
  }) => {
    M3s({
      output: t,
      parsedBody: n,
      exceptionCtor: e,
      errorCode: r
    });
  },
  kKu = e => ({
    httpStatusCode: e.statusCode,
    requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
    extendedRequestId: e.headers["x-amz-id-2"],
    cfId: e.headers["x-amz-cf-id"]
  });