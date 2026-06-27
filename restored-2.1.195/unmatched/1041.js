// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R3s
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var R3s = E(() => {
  k3s = R(ME(), 1);
});
class xr {
  middlewareStack = L3s.constructStack();
  schema;
  static classBuilder() {
    return new D3s();
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
        [r3s]: {
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
class D3s {
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
    return t = class extends xr {
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
          inputFilterSensitiveLog: e._inputFilterSensitiveLog ?? (s ? $yn.bind(null, i) : l => l),
          outputFilterSensitiveLog: e._outputFilterSensitiveLog ?? (s ? $yn.bind(null, a) : l => l),
          smithyContext: e._smithyContext,
          additionalContext: e._additionalContext
        });
      }
      serialize = e._serializer;
      deserialize = e._deserializer;
    };
  }
}
var L3s;