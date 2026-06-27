// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZH
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZH = Q(pj => {
  var Egn = IDr(),
    wY = ME(),
    vY = $G(),
    FLt = RLt(),
    Agn = YDr(),
    XDr = PE(),
    f2e = async (e = new Uint8Array(), t) => {
      if (e instanceof Uint8Array) return Egn.Uint8ArrayBlobAdapter.mutate(e);
      if (!e) return Egn.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      let n = t.streamCollector(e);
      return Egn.Uint8ArrayBlobAdapter.mutate(await n);
    };
  function jLt(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  class stt {
    serdeContext;
    setSerdeContext(e) {
      this.serdeContext = e;
    }
  }
  class Hgn extends stt {
    options;
    constructor(e) {
      super();
      this.options = e;
    }
    getRequestType() {
      return FLt.HttpRequest;
    }
    getResponseType() {
      return FLt.HttpResponse;
    }
    setSerdeContext(e) {
      if (this.serdeContext = e, this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e), this.getPayloadCodec()) this.getPayloadCodec().setSerdeContext(e);
    }
    updateServiceEndpoint(e, t) {
      if ("url" in t) {
        if (e.protocol = t.url.protocol, e.hostname = t.url.hostname, e.port = t.url.port ? Number(t.url.port) : void 0, e.path = t.url.pathname, e.fragment = t.url.hash || void 0, e.username = t.url.username || void 0, e.password = t.url.password || void 0, !e.query) e.query = {};
        for (let [n, r] of t.url.searchParams.entries()) e.query[n] = r;
        return e;
      } else return e.protocol = t.protocol, e.hostname = t.hostname, e.port = t.port ? Number(t.port) : void 0, e.path = t.path, e.query = {
        ...t.query
      }, e;
    }
    setHostPrefix(e, t, n) {
      let r = wY.NormalizedSchema.of(t.input),
        o = wY.translateTraits(t.traits ?? {});
      if (o.endpoint) {
        let s = o.endpoint?.[0];
        if (typeof s === "string") {
          let i = [...r.structIterator()].filter(([, a]) => a.getMergedTraits().hostLabel);
          for (let [a] of i) {
            let l = n[a];
            if (typeof l !== "string") throw Error(`@smithy/core/schema - ${a} in input must be a string as hostLabel.`);
            s = s.replace(`{${a}}`, l);
          }
          e.hostname = s + e.hostname;
        }
      }
    }
    deserializeMetadata(e) {
      return {
        httpStatusCode: e.statusCode,
        requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
        extendedRequestId: e.headers["x-amz-id-2"],
        cfId: e.headers["x-amz-cf-id"]
      };
    }
    async serializeEventStream({
      eventStream: e,
      requestSchema: t,
      initialRequest: n
    }) {
      return (await this.loadEventStreamCapability()).serializeEventStream({
        eventStream: e,
        requestSchema: t,
        initialRequest: n
      });
    }
    async deserializeEventStream({
      response: e,
      responseSchema: t,
      initialResponseContainer: n
    }) {
      return (await this.loadEventStreamCapability()).deserializeEventStream({
        response: e,
        responseSchema: t,
        initialResponseContainer: n
      });
    }
    async loadEventStreamCapability() {
      let {
        EventStreamSerde: e
      } = await Promise.resolve().then(() => R(_Rs()));
      return new e({
        marshaller: this.getEventStreamMarshaller(),
        serializer: this.serializer,
        deserializer: this.deserializer,
        serdeContext: this.serdeContext,
        defaultContentType: this.getDefaultContentType()
      });
    }
    getDefaultContentType() {
      throw Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
    }
    async deserializeHttpMessage(e, t, n, r, o) {
      return [];
    }
    getEventStreamMarshaller() {
      let e = this.serdeContext;
      if (!e.eventStreamMarshaller) throw Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
      return e.eventStreamMarshaller;
    }
  }
  class bRs extends Hgn {
    async serializeRequest(e, t, n) {
      let r = {
          ...(t ?? {})
        },
        o = this.serializer,
        s = {},
        i = {},
        a = await n.endpoint(),
        l = wY.NormalizedSchema.of(e?.input),
        c = l.getSchema(),
        u = !1,
        d,
        p = new FLt.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "",
          fragment: void 0,
          query: s,
          headers: i,
          body: void 0
        });
      if (a) {
        this.updateServiceEndpoint(p, a), this.setHostPrefix(p, e, r);
        let f = wY.translateTraits(e.traits);
        if (f.http) {
          p.method = f.http[0];
          let [m, g] = f.http[1].split("?");
          if (p.path == "/") p.path = m;else p.path += m;
          let h = new URLSearchParams(g ?? "");
          Object.assign(s, Object.fromEntries(h));
        }
      }
      for (let [f, m] of l.structIterator()) {
        let g = m.getMergedTraits() ?? {},
          h = r[f];
        if (h == null && !m.isIdempotencyToken()) continue;
        if (g.httpPayload) {
          if (m.isStreaming()) {
            if (m.isStructSchema()) {
              if (r[f]) d = await this.serializeEventStream({
                eventStream: r[f],
                requestSchema: l
              });
            } else d = h;
          } else o.write(m, h), d = o.flush();
          delete r[f];
        } else if (g.httpLabel) {
          o.write(m, h);
          let y = o.flush();
          if (p.path.includes(`{${f}+}`)) p.path = p.path.replace(`{${f}+}`, y.split("/").map(jLt).join("/"));else if (p.path.includes(`{${f}}`)) p.path = p.path.replace(`{${f}}`, jLt(y));
          delete r[f];
        } else if (g.httpHeader) o.write(m, h), i[g.httpHeader.toLowerCase()] = String(o.flush()), delete r[f];else if (typeof g.httpPrefixHeaders === "string") {
          for (let [y, b] of Object.entries(h)) {
            let _ = g.httpPrefixHeaders + y;
            o.write([m.getValueSchema(), {
              httpHeader: _
            }], b), i[_.toLowerCase()] = o.flush();
          }
          delete r[f];
        } else if (g.httpQuery || g.httpQueryParams) this.serializeQuery(m, h, s), delete r[f];else u = !0;
      }
      if (u && r) o.write(c, r), d = o.flush();
      return p.headers = i, p.query = s, p.body = d, p;
    }
    serializeQuery(e, t, n) {
      let r = this.serializer,
        o = e.getMergedTraits();
      if (o.httpQueryParams) {
        for (let [s, i] of Object.entries(t)) if (!(s in n)) {
          let a = e.getValueSchema();
          Object.assign(a.getMergedTraits(), {
            ...o,
            httpQuery: s,
            httpQueryParams: void 0
          }), this.serializeQuery(a, i, n);
        }
        return;
      }
      if (e.isListSchema()) {
        let s = !!e.getMergedTraits().sparse,
          i = [];
        for (let a of t) {
          r.write([e.getValueSchema(), o], a);
          let l = r.flush();
          if (s || l !== void 0) i.push(l);
        }
        n[o.httpQuery] = i;
      } else r.write([e, o], t), n[o.httpQuery] = r.flush();
    }
    async deserializeResponse(e, t, n) {
      let r = this.deserializer,
        o = wY.NormalizedSchema.of(e.output),
        s = {};
      if (n.statusCode >= 300) {
        let a = await f2e(n.body, t);
        if (a.byteLength > 0) Object.assign(s, await r.read(15, a));
        throw await this.handleError(e, t, n, s, this.deserializeMetadata(n)), Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
      }
      for (let a in n.headers) {
        let l = n.headers[a];
        delete n.headers[a], n.headers[a.toLowerCase()] = l;
      }
      let i = await this.deserializeHttpMessage(o, t, n, s);
      if (i.length) {
        let a = await f2e(n.body, t);
        if (a.byteLength > 0) {
          let l = await r.read(o, a);
          for (let c of i) s[c] = l[c];
        }
      } else if (i.discardResponseBody) await f2e(n.body, t);
      return s.$metadata = this.deserializeMetadata(n), s;
    }
    async deserializeHttpMessage(e, t, n, r, o) {
      let s;
      if (r instanceof Set) s = o;else s = r;
      let i = !0,
        a = this.deserializer,
        l = wY.NormalizedSchema.of(e),
        c = [];
      for (let [u, d] of l.structIterator()) {
        let p = d.getMemberTraits();
        if (p.httpPayload) {
          if (i = !1, d.isStreaming()) {
            if (d.isStructSchema()) s[u] = await this.deserializeEventStream({
              response: n,
              responseSchema: l
            });else s[u] = Egn.sdkStreamMixin(n.body);
          } else if (n.body) {
            let m = await f2e(n.body, t);
            if (m.byteLength > 0) s[u] = await a.read(d, m);
          }
        } else if (p.httpHeader) {
          let f = String(p.httpHeader).toLowerCase(),
            m = n.headers[f];
          if (m != null) if (d.isListSchema()) {
            let g = d.getValueSchema();
            g.getMergedTraits().httpHeader = f;
            let h;
            if (g.isTimestampSchema() && g.getSchema() === 4) h = vY.splitEvery(m, ",", 2);else h = vY.splitHeader(m);
            let y = [];
            for (let b of h) y.push(await a.read(g, b.trim()));
            s[u] = y;
          } else s[u] = await a.read(d, m);
        } else if (p.httpPrefixHeaders !== void 0) {
          s[u] = {};
          for (let [f, m] of Object.entries(n.headers)) if (f.startsWith(p.httpPrefixHeaders)) {
            let g = d.getValueSchema();
            g.getMergedTraits().httpHeader = f, s[u][f.slice(p.httpPrefixHeaders.length)] = await a.read(g, m);
          }
        } else if (p.httpResponseCode) s[u] = n.statusCode;else c.push(u);
      }
      return c.discardResponseBody = i, c;
    }
  }
  class SRs extends Hgn {
    async serializeRequest(e, t, n) {
      let r = this.serializer,
        o = {},
        s = {},
        i = await n.endpoint(),
        a = wY.NormalizedSchema.of(e?.input),
        l = a.getSchema(),
        c,
        u = new FLt.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "/",
          fragment: void 0,
          query: o,
          headers: s,
          body: void 0
        });
      if (i) this.updateServiceEndpoint(u, i), this.setHostPrefix(u, e, t);
      let d = {
        ...t
      };
      if (t) {
        let p = a.getEventStreamMember();
        if (p) {
          if (d[p]) {
            let f = {};
            for (let [m, g] of a.structIterator()) if (m !== p && d[m]) r.write(g, d[m]), f[m] = r.flush();
            c = await this.serializeEventStream({
              eventStream: d[p],
              requestSchema: a,
              initialRequest: f
            });
          }
        } else r.write(l, d), c = r.flush();
      }
      return u.headers = s, u.query = o, u.body = c, u.method = "POST", u;
    }
    async deserializeResponse(e, t, n) {
      let r = this.deserializer,
        o = wY.NormalizedSchema.of(e.output),
        s = {};
      if (n.statusCode >= 300) {
        let a = await f2e(n.body, t);
        if (a.byteLength > 0) Object.assign(s, await r.read(15, a));
        throw await this.handleError(e, t, n, s, this.deserializeMetadata(n)), Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
      }
      for (let a in n.headers) {
        let l = n.headers[a];
        delete n.headers[a], n.headers[a.toLowerCase()] = l;
      }
      let i = o.getEventStreamMember();
      if (i) s[i] = await this.deserializeEventStream({
        response: n,
        responseSchema: o,
        initialResponseContainer: s
      });else {
        let a = await f2e(n.body, t);
        if (a.byteLength > 0) Object.assign(s, await r.read(o, a));
      }
      return s.$metadata = this.deserializeMetadata(n), s;
    }
  }
  var ERs = (e, t, n, r, o, s) => {
    if (t != null && t[n] !== void 0) {
      let i = r();
      if (i.length <= 0) throw Error("Empty value provided for input HTTP label: " + n + ".");
      e = e.replace(o, s ? i.split("/").map(a => jLt(a)).join("/") : jLt(i));
    } else throw Error("No value provided for input HTTP label: " + n + ".");
    return e;
  };
  function c2u(e, t) {
    return new JDr(e, t);
  }
  class JDr {
    input;
    context;
    query = {};
    method = "";
    headers = {};
    path = "";
    body = null;
    hostname = "";
    resolvePathStack = [];
    constructor(e, t) {
      this.input = e, this.context = t;
    }
    async build() {
      let {
        hostname: e,
        protocol: t = "https",
        port: n,
        path: r
      } = await this.context.endpoint();
      this.path = r;
      for (let o of this.resolvePathStack) o(this.path);
      return new FLt.HttpRequest({
        protocol: t,
        hostname: this.hostname || e,
        port: n,
        method: this.method,
        path: this.path,
        query: this.query,
        body: this.body,
        headers: this.headers
      });
    }
    hn(e) {
      return this.hostname = e, this;
    }
    bp(e) {
      return this.resolvePathStack.push(t => {
        this.path = `${t?.endsWith("/") ? t.slice(0, -1) : t || ""}` + e;
      }), this;
    }
    p(e, t, n, r) {
      return this.resolvePathStack.push(o => {
        this.path = ERs(o, this.input, e, t, n, r);
      }), this;
    }
    h(e) {
      return this.headers = e, this;
    }
    q(e) {
      return this.query = e, this;
    }
    b(e) {
      return this.body = e, this;
    }
    m(e) {
      return this.method = e, this;
    }
  }
  function QDr(e, t) {
    if (t.timestampFormat.useTrait) {
      if (e.isTimestampSchema() && (e.getSchema() === 5 || e.getSchema() === 6 || e.getSchema() === 7)) return e.getSchema();
    }
    let {
      httpLabel: n,
      httpPrefixHeaders: r,
      httpHeader: o,
      httpQuery: s
    } = e.getMergedTraits();
    return (t.httpBindings ? typeof r === "string" || Boolean(o) ? 6 : Boolean(s) || Boolean(n) ? 5 : void 0 : void 0) ?? t.timestampFormat.default;
  }
  class ZDr extends stt {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    read(e, t) {
      let n = wY.NormalizedSchema.of(e);
      if (n.isListSchema()) return vY.splitHeader(t).map(r => this.read(n.getValueSchema(), r));
      if (n.isBlobSchema()) return (this.serdeContext?.base64Decoder ?? Agn.fromBase64)(t);
      if (n.isTimestampSchema()) switch (QDr(n, this.settings)) {
        case 5:
          return vY._parseRfc3339DateTimeWithOffset(t);
        case 6:
          return vY._parseRfc7231DateTime(t);
        case 7:
          return vY._parseEpochTimestamp(t);
        default:
          return console.warn("Missing timestamp format, parsing value with Date constructor:", t), new Date(t);
      }
      if (n.isStringSchema()) {
        let r = n.getMergedTraits().mediaType,
          o = t;
        if (r) {
          if (n.getMergedTraits().httpHeader) o = this.base64ToUtf8(o);
          if (r === "application/json" || r.endsWith("+json")) o = vY.LazyJsonString.from(o);
          return o;
        }
      }
      if (n.isNumericSchema()) return Number(t);
      if (n.isBigIntegerSchema()) return BigInt(t);
      if (n.isBigDecimalSchema()) return new vY.NumericValue(t, "bigDecimal");
      if (n.isBooleanSchema()) return String(t).toLowerCase() === "true";
      return t;
    }
    base64ToUtf8(e) {
      return (this.serdeContext?.utf8Encoder ?? XDr.toUtf8)((this.serdeContext?.base64Decoder ?? Agn.fromBase64)(e));
    }
  }
  class ARs extends stt {
    codecDeserializer;
    stringDeserializer;
    constructor(e, t) {
      super();
      this.codecDeserializer = e, this.stringDeserializer = new ZDr(t);
    }
    setSerdeContext(e) {
      this.stringDeserializer.setSerdeContext(e), this.codecDeserializer.setSerdeContext(e), this.serdeContext = e;
    }
    read(e, t) {
      let n = wY.NormalizedSchema.of(e),
        r = n.getMergedTraits(),
        o = this.serdeContext?.utf8Encoder ?? XDr.toUtf8;
      if (r.httpHeader || r.httpResponseCode) return this.stringDeserializer.read(n, o(t));
      if (r.httpPayload) {
        if (n.isBlobSchema()) {
          let s = this.serdeContext?.utf8Decoder ?? XDr.fromUtf8;
          if (typeof t === "string") return s(t);
          return t;
        } else if (n.isStringSchema()) {
          if ("byteLength" in t) return o(t);
          return t;
        }
      }
      return this.codecDeserializer.read(n, t);
    }
  }
  class ePr extends stt {
    settings;
    stringBuffer = "";
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t) {
      let n = wY.NormalizedSchema.of(e);
      switch (typeof t) {
        case "object":
          if (t === null) {
            this.stringBuffer = "null";
            return;
          }
          if (n.isTimestampSchema()) {
            if (!(t instanceof Date)) throw Error(`@smithy/core/protocols - received non-Date value ${t} when schema expected Date in ${n.getName(!0)}`);
            switch (QDr(n, this.settings)) {
              case 5:
                this.stringBuffer = t.toISOString().replace(".000Z", "Z");
                break;
              case 6:
                this.stringBuffer = vY.dateToUtcString(t);
                break;
              case 7:
                this.stringBuffer = String(t.getTime() / 1000);
                break;
              default:
                console.warn("Missing timestamp format, using epoch seconds", t), this.stringBuffer = String(t.getTime() / 1000);
            }
            return;
          }
          if (n.isBlobSchema() && "byteLength" in t) {
            this.stringBuffer = (this.serdeContext?.base64Encoder ?? Agn.toBase64)(t);
            return;
          }
          if (n.isListSchema() && Array.isArray(t)) {
            let s = "";
            for (let i of t) {
              this.write([n.getValueSchema(), n.getMergedTraits()], i);
              let a = this.flush(),
                l = n.getValueSchema().isTimestampSchema() ? a : vY.quoteHeader(a);
              if (s !== "") s += ", ";
              s += l;
            }
            this.stringBuffer = s;
            return;
          }
          this.stringBuffer = JSON.stringify(t, null, 2);
          break;
        case "string":
          let r = n.getMergedTraits().mediaType,
            o = t;
          if (r) {
            if (r === "application/json" || r.endsWith("+json")) o = vY.LazyJsonString.from(o);
            if (n.getMergedTraits().httpHeader) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? Agn.toBase64)(o.toString());
              return;
            }
          }
          this.stringBuffer = t;
          break;
        default:
          if (n.isIdempotencyToken()) this.stringBuffer = vY.generateIdempotencyToken();else this.stringBuffer = String(t);
      }
    }
    flush() {
      let e = this.stringBuffer;
      return this.stringBuffer = "", e;
    }
  }
  class HRs {
    codecSerializer;
    stringSerializer;
    buffer;
    constructor(e, t, n = new ePr(t)) {
      this.codecSerializer = e, this.stringSerializer = n;
    }
    setSerdeContext(e) {
      this.codecSerializer.setSerdeContext(e), this.stringSerializer.setSerdeContext(e);
    }
    write(e, t) {
      let n = wY.NormalizedSchema.of(e),
        r = n.getMergedTraits();
      if (r.httpHeader || r.httpLabel || r.httpQuery) {
        this.stringSerializer.write(n, t), this.buffer = this.stringSerializer.flush();
        return;
      }
      return this.codecSerializer.write(n, t);
    }
    flush() {
      if (this.buffer !== void 0) {
        let e = this.buffer;
        return this.buffer = void 0, e;
      }
      return this.codecSerializer.flush();
    }
  }
  pj.FromStringShapeDeserializer = ZDr;
  pj.HttpBindingProtocol = bRs;
  pj.HttpInterceptingShapeDeserializer = ARs;
  pj.HttpInterceptingShapeSerializer = HRs;
  pj.HttpProtocol = Hgn;
  pj.RequestBuilder = JDr;
  pj.RpcProtocol = SRs;
  pj.SerdeContext = stt;
  pj.ToStringShapeSerializer = ePr;
  pj.collectBody = f2e;
  pj.determineTimestampFormat = QDr;
  pj.extendedEncodeURIComponent = jLt;
  pj.requestBuilder = c2u;
  pj.resolvedPath = ERs;
});
var TRs;