// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fj
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=partial  jaccard=0.1317  score=0.9407  fileCov=0.1328
// note: low-confidence suggestion: node_modules/@smithy/smithy-client/dist-cjs/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fj = Q(VS => {
  var T$s = FB(),
    qMr = ZH(),
    jMr = UMr(),
    i5u = ME(),
    A$s = $G();
  class v$s {
    config;
    middlewareStack = T$s.constructStack();
    initConfig;
    handlers;
    constructor(e) {
      this.config = e;
    }
    send(e, t, n) {
      let r = typeof t !== "function" ? t : void 0,
        o = typeof t === "function" ? t : n,
        s = r === void 0 && this.config.cacheMiddleware === !0,
        i;
      if (s) {
        if (!this.handlers) this.handlers = new WeakMap();
        let a = this.handlers;
        if (a.has(e.constructor)) i = a.get(e.constructor);else i = e.resolveMiddleware(this.middlewareStack, this.config, r), a.set(e.constructor, i);
      } else delete this.handlers, i = e.resolveMiddleware(this.middlewareStack, this.config, r);
      if (o) i(e).then(a => o(null, a.output), a => o(a)).catch(() => {});else return i(e).then(a => a.output);
    }
    destroy() {
      this.config?.requestHandler?.destroy?.(), delete this.handlers;
    }
  }
  var FMr = "***SensitiveInformation***";
  function GMr(e, t) {
    if (t == null) return t;
    let n = i5u.NormalizedSchema.of(e);
    if (n.getMergedTraits().sensitive) return FMr;
    if (n.isListSchema()) {
      if (!!n.getValueSchema().getMergedTraits().sensitive) return FMr;
    } else if (n.isMapSchema()) {
      if (!!n.getKeySchema().getMergedTraits().sensitive || !!n.getValueSchema().getMergedTraits().sensitive) return FMr;
    } else if (n.isStructSchema() && typeof t === "object") {
      let r = t,
        o = {};
      for (let [s, i] of n.structIterator()) if (r[s] != null) o[s] = GMr(i, r[s]);
      return o;
    }
    return t;
  }
  class VMr {
    middlewareStack = T$s.constructStack();
    schema;
    static classBuilder() {
      return new w$s();
    }
    resolveMiddlewareWithContext(e, t, n, {
      middlewareFn: r,
      clientName: o,
      commandName: s,
      inputFilterSensitiveLog: i,
      outputFilterSensitiveLog: a,
      smithyContext: l,
      additionalContext: c,
      CommandCtor: u
    }) {
      for (let g of r.bind(this)(u, e, t, n)) this.middlewareStack.use(g);
      let d = e.concat(this.middlewareStack),
        {
          logger: p
        } = t,
        f = {
          logger: p,
          clientName: o,
          commandName: s,
          inputFilterSensitiveLog: i,
          outputFilterSensitiveLog: a,
          [jMr.SMITHY_CONTEXT_KEY]: {
            commandInstance: this,
            ...l
          },
          ...c
        },
        {
          requestHandler: m
        } = t;
      return d.resolve(g => m.handle(g.request, n || {}), f);
    }
  }
  class w$s {
    _init = () => {};
    _ep = {};
    _middlewareFn = () => [];
    _commandName = "";
    _clientName = "";
    _additionalContext = {};
    _smithyContext = {};
    _inputFilterSensitiveLog = void 0;
    _outputFilterSensitiveLog = void 0;
    _serializer = null;
    _deserializer = null;
    _operationSchema;
    init(e) {
      this._init = e;
    }
    ep(e) {
      return this._ep = e, this;
    }
    m(e) {
      return this._middlewareFn = e, this;
    }
    s(e, t, n = {}) {
      return this._smithyContext = {
        service: e,
        operation: t,
        ...n
      }, this;
    }
    c(e = {}) {
      return this._additionalContext = e, this;
    }
    n(e, t) {
      return this._clientName = e, this._commandName = t, this;
    }
    f(e = n => n, t = n => n) {
      return this._inputFilterSensitiveLog = e, this._outputFilterSensitiveLog = t, this;
    }
    ser(e) {
      return this._serializer = e, this;
    }
    de(e) {
      return this._deserializer = e, this;
    }
    sc(e) {
      return this._operationSchema = e, this._smithyContext.operationSchema = e, this;
    }
    build() {
      let e = this,
        t;
      return t = class extends VMr {
        input;
        static getEndpointParameterInstructions() {
          return e._ep;
        }
        constructor(...[n]) {
          super();
          this.input = n ?? {}, e._init(this), this.schema = e._operationSchema;
        }
        resolveMiddleware(n, r, o) {
          let s = e._operationSchema,
            i = s?.[4] ?? s?.input,
            a = s?.[5] ?? s?.output;
          return this.resolveMiddlewareWithContext(n, r, o, {
            CommandCtor: t,
            middlewareFn: e._middlewareFn,
            clientName: e._clientName,
            commandName: e._commandName,
            inputFilterSensitiveLog: e._inputFilterSensitiveLog ?? (s ? GMr.bind(null, i) : l => l),
            outputFilterSensitiveLog: e._outputFilterSensitiveLog ?? (s ? GMr.bind(null, a) : l => l),
            smithyContext: e._smithyContext,
            additionalContext: e._additionalContext
          });
        }
        serialize = e._serializer;
        deserialize = e._deserializer;
      };
    }
  }
  var a5u = "***SensitiveInformation***",
    l5u = (e, t) => {
      for (let n of Object.keys(e)) {
        let r = e[n],
          o = async function (i, a, l) {
            let c = new r(i);
            if (typeof a === "function") this.send(c, a);else if (typeof l === "function") {
              if (typeof a !== "object") throw Error(`Expected http options but got ${typeof a}`);
              this.send(c, a || {}, l);
            } else return this.send(c, a);
          },
          s = (n[0].toLowerCase() + n.slice(1)).replace(/Command$/, "");
        t.prototype[s] = o;
      }
    };
  class _tt extends Error {
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
      return _tt.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && (t.$fault === "client" || t.$fault === "server");
    }
    static [Symbol.hasInstance](e) {
      if (!e) return !1;
      let t = e;
      if (this === _tt) return _tt.isInstance(e);
      if (_tt.isInstance(e)) {
        if (t.name && this.name) return this.prototype.isPrototypeOf(e) || t.name === this.name;
        return this.prototype.isPrototypeOf(e);
      }
      return !1;
    }
  }
  var C$s = (e, t = {}) => {
      Object.entries(t).filter(([, r]) => r !== void 0).forEach(([r, o]) => {
        if (e[r] == null || e[r] === "") e[r] = o;
      });
      let n = e.message || e.Message || "UnknownError";
      return e.message = n, delete e.Message, e;
    },
    I$s = ({
      output: e,
      parsedBody: t,
      exceptionCtor: n,
      errorCode: r
    }) => {
      let o = u5u(e),
        s = o.httpStatusCode ? o.httpStatusCode + "" : void 0,
        i = new n({
          name: t?.code || t?.Code || r || s || "UnknownError",
          $fault: "client",
          $metadata: o
        });
      throw C$s(i, t);
    },
    c5u = e => ({
      output: t,
      parsedBody: n,
      errorCode: r
    }) => {
      I$s({
        output: t,
        parsedBody: n,
        exceptionCtor: e,
        errorCode: r
      });
    },
    u5u = e => ({
      httpStatusCode: e.statusCode,
      requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
      extendedRequestId: e.headers["x-amz-id-2"],
      cfId: e.headers["x-amz-cf-id"]
    }),
    d5u = e => {
      switch (e) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 30000
          };
        default:
          return {};
      }
    },
    H$s = !1,
    p5u = e => {
      if (e && !H$s && parseInt(e.substring(1, e.indexOf("."))) < 16) H$s = !0;
    },
    f5u = e => {
      let t = [];
      for (let n in jMr.AlgorithmId) {
        let r = jMr.AlgorithmId[n];
        if (e[r] === void 0) continue;
        t.push({
          algorithmId: () => r,
          checksumConstructor: () => e[r]
        });
      }
      return {
        addChecksumAlgorithm(n) {
          t.push(n);
        },
        checksumAlgorithms() {
          return t;
        }
      };
    },
    m5u = e => {
      let t = {};
      return e.checksumAlgorithms().forEach(n => {
        t[n.algorithmId()] = n.checksumConstructor();
      }), t;
    },
    g5u = e => ({
      setRetryStrategy(t) {
        e.retryStrategy = t;
      },
      retryStrategy() {
        return e.retryStrategy;
      }
    }),
    h5u = e => {
      let t = {};
      return t.retryStrategy = e.retryStrategy(), t;
    },
    x$s = e => Object.assign(f5u(e), g5u(e)),
    y5u = x$s,
    _5u = e => Object.assign(m5u(e), h5u(e)),
    b5u = e => Array.isArray(e) ? e : [e],
    k$s = e => {
      for (let n in e) if (e.hasOwnProperty(n) && e[n]["#text"] !== void 0) e[n] = e[n]["#text"];else if (typeof e[n] === "object" && e[n] !== null) e[n] = k$s(e[n]);
      return e;
    },
    S5u = e => e != null;
  class R$s {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function L$s(e, t, n) {
    let r, o, s;
    if (typeof t > "u" && typeof n > "u") r = {}, s = e;else if (r = e, typeof t === "function") return o = t, s = n, H5u(r, o, s);else s = t;
    for (let i of Object.keys(s)) {
      if (!Array.isArray(s[i])) {
        r[i] = s[i];
        continue;
      }
      D$s(r, null, s, i);
    }
    return r;
  }
  var E5u = e => {
      let t = {};
      for (let [n, r] of Object.entries(e || {})) t[n] = [, r];
      return t;
    },
    A5u = (e, t) => {
      let n = {};
      for (let r in t) D$s(n, e, t, r);
      return n;
    },
    H5u = (e, t, n) => L$s(e, Object.entries(n).reduce((r, [o, s]) => {
      if (Array.isArray(s)) r[o] = s;else if (typeof s === "function") r[o] = [t, s()];else r[o] = [t, s];
      return r;
    }, {})),
    D$s = (e, t, n, r) => {
      if (t !== null) {
        let i = n[r];
        if (typeof i === "function") i = [, i];
        let [a = T5u, l = v5u, c = r] = i;
        if (typeof a === "function" && a(t[c]) || typeof a !== "function" && !!a) e[r] = l(t[c]);
        return;
      }
      let [o, s] = n[r];
      if (typeof s === "function") {
        let i,
          a = o === void 0 && (i = s()) != null,
          l = typeof o === "function" && !!o(void 0) || typeof o !== "function" && !!o;
        if (a) e[r] = i;else if (l) e[r] = s();
      } else {
        let i = o === void 0 && s != null,
          a = typeof o === "function" && !!o(s) || typeof o !== "function" && !!o;
        if (i || a) e[r] = s;
      }
    },
    T5u = e => e != null,
    v5u = e => e,
    w5u = e => {
      if (e !== e) return "NaN";
      switch (e) {
        case 1 / 0:
          return "Infinity";
        case -1 / 0:
          return "-Infinity";
        default:
          return e;
      }
    },
    C5u = e => e.toISOString().replace(".000Z", "Z"),
    WMr = e => {
      if (e == null) return {};
      if (Array.isArray(e)) return e.filter(t => t != null).map(WMr);
      if (typeof e === "object") {
        let t = {};
        for (let n of Object.keys(e)) {
          if (e[n] == null) continue;
          t[n] = WMr(e[n]);
        }
        return t;
      }
      return e;
    };
  Object.defineProperty(VS, "collectBody", {
    enumerable: !0,
    get: function () {
      return qMr.collectBody;
    }
  });
  Object.defineProperty(VS, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function () {
      return qMr.extendedEncodeURIComponent;
    }
  });
  Object.defineProperty(VS, "resolvedPath", {
    enumerable: !0,
    get: function () {
      return qMr.resolvedPath;
    }
  });
  VS.Client = v$s;
  VS.Command = VMr;
  VS.NoOpLogger = R$s;
  VS.SENSITIVE_STRING = a5u;
  VS.ServiceException = _tt;
  VS._json = WMr;
  VS.convertMap = E5u;
  VS.createAggregatedClient = l5u;
  VS.decorateServiceException = C$s;
  VS.emitWarningIfUnsupportedVersion = p5u;
  VS.getArrayIfSingleItem = b5u;
  VS.getDefaultClientConfiguration = y5u;
  VS.getDefaultExtensionConfiguration = x$s;
  VS.getValueFromTextNode = k$s;
  VS.isSerializableHeaderValue = S5u;
  VS.loadConfigsForDefaultMode = d5u;
  VS.map = L$s;
  VS.resolveDefaultRuntimeConfig = _5u;
  VS.serializeDateTime = C5u;
  VS.serializeFloat = w5u;
  VS.take = A5u;
  VS.throwDefaultError = I$s;
  VS.withBaseException = c5u;
  Object.keys(A$s).forEach(function (e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(VS, e)) Object.defineProperty(VS, e, {
      enumerable: !0,
      get: function () {
        return A$s[e];
      }
    });
  });
});