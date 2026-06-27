// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eT
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: @aws-sdk/core; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module eT] (exports=fm)
var fm = {};
var pMr = kgn(),
  YCe = yd(),
  UPs = by(),
  G3u = UR(),
  FPs = CPr(),
  jPs = YPr(),
  WS = ME(),
  Xhe = nMr(),
  VO = ZH(),
  SM = $G(),
  ZLt = iMr(),
  YPs = PE(),
  CY = uMr(),
  dMr = {
    warningEmitted: !1
  },
  W3u = e => {
    if (e && !dMr.warningEmitted && parseInt(e.substring(1, e.indexOf("."))) < 18) dMr.warningEmitted = !0, process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
  };
function q3u(e, t, n) {
  if (!e.$source) e.$source = {};
  return e.$source[t] = n, e;
}
function V3u(e, t, n) {
  if (!e.__aws_sdk_context) e.__aws_sdk_context = {
    features: {}
  };else if (!e.__aws_sdk_context.features) e.__aws_sdk_context.features = {};
  e.__aws_sdk_context.features[t] = n;
}
function z3u(e, t, n) {
  if (!e.$source) e.$source = {};
  return e.$source[t] = n, e;
}
var GPs = e => pMr.HttpResponse.isInstance(e) ? e.headers?.date ?? e.headers?.Date : void 0,
  fMr = e => new Date(Date.now() + e),
  K3u = (e, t) => Math.abs(fMr(t).getTime() - e) >= 300000,
  WPs = (e, t) => {
    let n = Date.parse(e);
    if (K3u(n, t)) return n - Date.now();
    return t;
  },
  QLt = (e, t) => {
    if (!t) throw Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);
    return t;
  },
  mMr = async signingProperties => {
    let t = QLt("context", signingProperties.context),
      n = QLt("config", signingProperties.config),
      r = t.endpointV2?.properties?.authSchemes?.[0],
      s = await QLt("signer", n.signer)(r),
      i = signingProperties?.signingRegion,
      a = signingProperties?.signingRegionSet,
      l = signingProperties?.signingName;
    return {
      config: n,
      signer: s,
      signingRegion: i,
      signingRegionSet: a,
      signingName: l
    };
  };
class rhn {
  async sign(e, t, n) {
    if (!pMr.HttpRequest.isInstance(e)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
    let r = await mMr(n),
      {
        config: o,
        signer: s
      } = r,
      {
        signingRegion: i,
        signingName: a
      } = r,
      l = n.context;
    if (l?.authSchemes?.length ?? !1) {
      let [u, d] = l.authSchemes;
      if (u?.name === "sigv4a" && d?.name === "sigv4") i = d?.signingRegion ?? i, a = d?.signingName ?? a;
    }
    return await s.sign(e, {
      signingDate: fMr(o.systemClockOffset),
      signingRegion: i,
      signingService: a
    });
  }
  errorHandler(e) {
    return t => {
      let n = t.ServerTime ?? GPs(t.$response);
      if (n) {
        let r = QLt("config", e.config),
          o = r.systemClockOffset;
        if (r.systemClockOffset = WPs(n, r.systemClockOffset), r.systemClockOffset !== o && t.$metadata) t.$metadata.clockSkewCorrected = !0;
      }
      throw t;
    };
  }
  successHandler(e, t) {
    let n = GPs(e);
    if (n) {
      let r = QLt("config", t.config);
      r.systemClockOffset = WPs(n, r.systemClockOffset);
    }
  }
}
var Y3u = rhn;
class XPs extends rhn {
  async sign(e, t, n) {
    if (!pMr.HttpRequest.isInstance(e)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
    let {
        config: r,
        signer: o,
        signingRegion: s,
        signingRegionSet: i,
        signingName: a
      } = await mMr(n),
      c = ((await r.sigv4aSigningRegionSet?.()) ?? i ?? [s]).join(",");
    return await o.sign(e, {
      signingDate: fMr(r.systemClockOffset),
      signingRegion: c,
      signingService: a
    });
  }
}
var qPs = e => typeof e === "string" && e.length > 0 ? e.split(",").map(t => t.trim()) : [],
  JPs = e => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`,
  VPs = "AWS_AUTH_SCHEME_PREFERENCE",
  zPs = "auth_scheme_preference",
  X3u = {
    environmentVariableSelector: (e, t) => {
      if (t?.signingName) {
        if (JPs(t.signingName) in e) return ["httpBearerAuth"];
      }
      if (!(VPs in e)) return;
      return qPs(e[VPs]);
    },
    configFileSelector: e => {
      if (!(zPs in e)) return;
      return qPs(e[zPs]);
    },
    default: []
  },
  J3u = e => (e.sigv4aSigningRegionSet = YCe.normalizeProvider(e.sigv4aSigningRegionSet), e),
  Q3u = {
    environmentVariableSelector(e) {
      if (e.AWS_SIGV4A_SIGNING_REGION_SET) return e.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map(t => t.trim());
      throw new UPs.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
        tryNextLink: !0
      });
    },
    configFileSelector(e) {
      if (e.sigv4a_signing_region_set) return (e.sigv4a_signing_region_set ?? "").split(",").map(t => t.trim());
      throw new UPs.ProviderError("sigv4a_signing_region_set not set in profile.", {
        tryNextLink: !0
      });
    },
    default: void 0
  },
  QPs = config => {
    let t = config.credentials,
      n = !!config.credentials,
      resolvedCredentials = void 0;
    Object.defineProperty(config, "credentials", {
      set(c) {
        if (c && c !== t && c !== resolvedCredentials) n = !0;
        t = c;
        let u = eGu(config, {
            credentials: t,
            credentialDefaultProvider: config.credentialDefaultProvider
          }),
          d = tGu(config, u);
        if (n && !d.attributed) resolvedCredentials = async p => d(p).then(f => G3u.setCredentialFeature(f, "CREDENTIALS_CODE", "e")), resolvedCredentials.memoized = d.memoized, resolvedCredentials.configBound = d.configBound, resolvedCredentials.attributed = !0;else resolvedCredentials = d;
      },
      get() {
        return resolvedCredentials;
      },
      enumerable: !0,
      configurable: !0
    }), config.credentials = t;
    let {
        signingEscapePath: o = !0,
        systemClockOffset: s = config.systemClockOffset || 0,
        sha256: i
      } = config,
      a;
    if (config.signer) a = YCe.normalizeProvider(config.signer);else if (config.regionInfoProvider) a = () => YCe.normalizeProvider(config.region)().then(async c => [(await config.regionInfoProvider(c, {
      useFipsEndpoint: await config.useFipsEndpoint(),
      useDualstackEndpoint: await config.useDualstackEndpoint()
    })) || {}, c]).then(([c, u]) => {
      let {
        signingRegion: d,
        signingService: p
      } = c;
      config.signingRegion = config.signingRegion || d || u, config.signingName = config.signingName || p || config.serviceId;
      let f = {
        ...config,
        credentials: config.credentials,
        region: config.signingRegion,
        service: config.signingName,
        sha256: i,
        uriEscapePath: o
      };
      return new (config.signerConstructor || FPs.SignatureV4)(f);
    });else a = async c => {
      c = Object.assign({}, {
        name: "sigv4",
        signingName: config.signingName || config.defaultSigningName,
        signingRegion: await YCe.normalizeProvider(config.region)(),
        properties: {}
      }, c);
      let {
        signingRegion: u,
        signingName: d
      } = c;
      config.signingRegion = config.signingRegion || u, config.signingName = config.signingName || d || config.serviceId;
      let p = {
        ...config,
        credentials: config.credentials,
        region: config.signingRegion,
        service: config.signingName,
        sha256: i,
        uriEscapePath: o
      };
      return new (config.signerConstructor || FPs.SignatureV4)(p);
    };
    return Object.assign(config, {
      systemClockOffset: s,
      signingEscapePath: o,
      signer: a
    });
  },
  Z3u = QPs;
function eGu(e, {
  credentials: t,
  credentialDefaultProvider: n
}) {
  let r;
  if (t) {
    if (!t?.memoized) r = YCe.memoizeIdentityProvider(t, YCe.isIdentityExpired, YCe.doesIdentityRequireRefresh);else r = t;
  } else if (n) r = YCe.normalizeProvider(n(Object.assign({}, e, {
    parentClientConfig: e
  })));else r = async () => {
    throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
  };
  return r.memoized = !0, r;
}
function tGu(e, t) {
  if (t.configBound) return t;
  let n = async r => t({
    ...r,
    callerClientConfig: e
  });
  return n.memoized = t.memoized, n.configBound = !0, n;
}
class mtt {
  queryCompat;
  constructor(e = !1) {
    this.queryCompat = e;
  }
  resolveRestContentType(e, t) {
    let n = t.getMemberSchemas(),
      r = Object.values(n).find(o => !!o.getMergedTraits().httpPayload);
    if (r) {
      let o = r.getMergedTraits().mediaType;
      if (o) return o;else if (r.isStringSchema()) return "text/plain";else if (r.isBlobSchema()) return "application/octet-stream";else return e;
    } else if (!t.isUnitSchema()) {
      if (Object.values(n).find(s => {
        let {
          httpQuery: i,
          httpQueryParams: a,
          httpHeader: l,
          httpLabel: c,
          httpPrefixHeaders: u
        } = s.getMergedTraits();
        return !i && !a && !l && !c && u === void 0;
      })) return e;
    }
  }
  async getErrorSchemaOrThrowBaseException(e, t, n, r, o, s) {
    let i = t,
      a = e;
    if (e.includes("#")) [i, a] = e.split("#");
    let l = {
        $metadata: o,
        $fault: n.statusCode < 500 ? "client" : "server"
      },
      c = WS.TypeRegistry.for(i);
    try {
      return {
        errorSchema: s?.(c, a) ?? c.getSchema(e),
        errorMetadata: l
      };
    } catch (u) {
      r.message = r.message ?? r.Message ?? "UnknownError";
      let d = WS.TypeRegistry.for("smithy.ts.sdk.synthetic." + i),
        p = d.getBaseException();
      if (p) {
        let f = d.getErrorCtor(p) ?? Error;
        throw this.decorateServiceException(Object.assign(new f({
          name: a
        }), l), r);
      }
      throw this.decorateServiceException(Object.assign(Error(a), l), r);
    }
  }
  decorateServiceException(e, t = {}) {
    if (this.queryCompat) {
      let n = e.Message ?? t.Message,
        r = Xhe.decorateServiceException(e, t);
      if (n) r.Message = n, r.message = n;
      return r;
    }
    return Xhe.decorateServiceException(e, t);
  }
  setQueryCompatError(e, t) {
    let n = t.headers?.["x-amzn-query-error"];
    if (e !== void 0 && n != null) {
      let [r, o] = n.split(";"),
        s = Object.entries(e),
        i = {
          Code: r,
          Type: o
        };
      Object.assign(e, i);
      for (let [a, l] of s) i[a] = l;
      delete i.__type, e.Error = i;
    }
  }
  queryCompatOutput(e, t) {
    if (e.Error) t.Error = e.Error;
    if (e.Type) t.Type = e.Type;
    if (e.Code) t.Code = e.Code;
  }
}
class ZPs extends jPs.SmithyRpcV2CborProtocol {
  awsQueryCompatible;
  mixin;
  constructor({
    defaultNamespace: e,
    awsQueryCompatible: t
  }) {
    super({
      defaultNamespace: e
    });
    this.awsQueryCompatible = !!t, this.mixin = new mtt(this.awsQueryCompatible);
  }
  async serializeRequest(e, t, n) {
    let r = await super.serializeRequest(e, t, n);
    if (this.awsQueryCompatible) r.headers["x-amzn-query-mode"] = "true";
    return r;
  }
  async handleError(e, t, n, r, o) {
    if (this.awsQueryCompatible) this.mixin.setQueryCompatError(r, n);
    let s = jPs.loadSmithyRpcV2CborErrorCode(n, r) ?? "Unknown",
      {
        errorSchema: i,
        errorMetadata: a
      } = await this.mixin.getErrorSchemaOrThrowBaseException(s, this.options.defaultNamespace, n, r, o),
      l = WS.NormalizedSchema.of(i),
      c = r.message ?? r.Message ?? "Unknown",
      d = new (WS.TypeRegistry.for(i[1]).getErrorCtor(i) ?? Error)(c),
      p = {};
    for (let [f, m] of l.structIterator()) p[f] = this.deserializer.readValue(m, r[f]);
    if (this.awsQueryCompatible) this.mixin.queryCompatOutput(r, p);
    throw this.mixin.decorateServiceException(Object.assign(d, a, {
      $fault: l.getMergedTraits().error,
      message: c
    }, p), r);
  }
}
var nGu = e => {
    if (e == null) return e;
    if (typeof e === "number" || typeof e === "bigint") {
      let t = Error(`Received number ${e} where a string was expected.`);
      return t.name = "Warning", console.warn(t), String(e);
    }
    if (typeof e === "boolean") {
      let t = Error(`Received boolean ${e} where a string was expected.`);
      return t.name = "Warning", console.warn(t), String(e);
    }
    return e;
  },
  rGu = e => {
    if (e == null) return e;
    if (typeof e === "string") {
      let t = e.toLowerCase();
      if (e !== "" && t !== "false" && t !== "true") {
        let n = Error(`Received string "${e}" where a boolean was expected.`);
        n.name = "Warning", console.warn(n);
      }
      return e !== "" && t !== "false";
    }
    return e;
  },
  oGu = e => {
    if (e == null) return e;
    if (typeof e === "string") {
      let t = Number(e);
      if (t.toString() !== e) {
        let n = Error(`Received string "${e}" where a number was expected.`);
        return n.name = "Warning", console.warn(n), e;
      }
      return t;
    }
    return e;
  };
class XCe {
  serdeContext;
  setSerdeContext(e) {
    this.serdeContext = e;
  }
}
function sGu(e, t, n) {
  if (n?.source) {
    let r = n.source;
    if (typeof t === "number") {
      if (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER || r !== String(t)) if (r.includes(".")) return new SM.NumericValue(r, "bigDecimal");else return BigInt(r);
    }
  }
  return t;
}
var eMs = (e, t) => Xhe.collectBody(e, t).then(n => (t?.utf8Encoder ?? YPs.toUtf8)(n)),
  gMr = (e, t) => eMs(e, t).then(n => {
    if (n.length) try {
      return JSON.parse(n);
    } catch (r) {
      if (r?.name === "SyntaxError") Object.defineProperty(r, "$responseBodyText", {
        value: n
      });
      throw r;
    }
    return {};
  }),
  iGu = async (e, t) => {
    let n = await gMr(e, t);
    return n.message = n.message ?? n.Message, n;
  },
  hMr = (e, t) => {
    let n = (s, i) => Object.keys(s).find(a => a.toLowerCase() === i.toLowerCase()),
      r = s => {
        let i = s;
        if (typeof i === "number") i = i.toString();
        if (i.indexOf(",") >= 0) i = i.split(",")[0];
        if (i.indexOf(":") >= 0) i = i.split(":")[0];
        if (i.indexOf("#") >= 0) i = i.split("#")[1];
        return i;
      },
      o = n(e.headers, "x-amzn-errortype");
    if (o !== void 0) return r(e.headers[o]);
    if (t && typeof t === "object") {
      let s = n(t, "code");
      if (s && t[s] !== void 0) return r(t[s]);
      if (t.__type !== void 0) return r(t.__type);
    }
  };
class yMr extends XCe {
  settings;
  constructor(e) {
    super();
    this.settings = e;
  }
  async read(e, t) {
    return this._read(e, typeof t === "string" ? JSON.parse(t, sGu) : await gMr(t, this.serdeContext));
  }
  readObject(e, t) {
    return this._read(e, t);
  }
  _read(e, t) {
    let n = t !== null && typeof t === "object",
      r = WS.NormalizedSchema.of(e);
    if (r.isListSchema() && Array.isArray(t)) {
      let s = r.getValueSchema(),
        i = [],
        a = !!r.getMergedTraits().sparse;
      for (let l of t) if (a || l != null) i.push(this._read(s, l));
      return i;
    } else if (r.isMapSchema() && n) {
      let s = r.getValueSchema(),
        i = {},
        a = !!r.getMergedTraits().sparse;
      for (let [l, c] of Object.entries(t)) if (a || c != null) i[l] = this._read(s, c);
      return i;
    } else if (r.isStructSchema() && n) {
      let s = {};
      for (let [i, a] of r.structIterator()) {
        let l = this.settings.jsonName ? a.getMergedTraits().jsonName ?? i : i,
          c = this._read(a, t[l]);
        if (c != null) s[i] = c;
      }
      return s;
    }
    if (r.isBlobSchema() && typeof t === "string") return ZLt.fromBase64(t);
    let o = r.getMergedTraits().mediaType;
    if (r.isStringSchema() && typeof t === "string" && o) {
      if (o === "application/json" || o.endsWith("+json")) return SM.LazyJsonString.from(t);
    }
    if (r.isTimestampSchema() && t != null) switch (VO.determineTimestampFormat(r, this.settings)) {
      case 5:
        return SM.parseRfc3339DateTimeWithOffset(t);
      case 6:
        return SM.parseRfc7231DateTime(t);
      case 7:
        return SM.parseEpochTimestamp(t);
      default:
        return console.warn("Missing timestamp format, parsing value with Date constructor:", t), new Date(t);
    }
    if (r.isBigIntegerSchema() && (typeof t === "number" || typeof t === "string")) return BigInt(t);
    if (r.isBigDecimalSchema() && t != null) {
      if (t instanceof SM.NumericValue) return t;
      let s = t;
      if (s.type === "bigDecimal" && "string" in s) return new SM.NumericValue(s.string, s.type);
      return new SM.NumericValue(String(t), "bigDecimal");
    }
    if (r.isNumericSchema() && typeof t === "string") switch (t) {
      case "Infinity":
        return 1 / 0;
      case "-Infinity":
        return -1 / 0;
      case "NaN":
        return NaN;
    }
    if (r.isDocumentSchema()) if (n) {
      let s = Array.isArray(t) ? [] : {};
      for (let [i, a] of Object.entries(t)) if (a instanceof SM.NumericValue) s[i] = a;else s[i] = this._read(r, a);
      return s;
    } else return structuredClone(t);
    return t;
  }
}
var KPs = String.fromCharCode(925);
class tMs {
  values = new Map();
  counter = 0;
  stage = 0;
  createReplacer() {
    if (this.stage === 1) throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
    if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
    return this.stage = 1, (e, t) => {
      if (t instanceof SM.NumericValue) {
        let n = `${KPs + "nv" + this.counter++}_` + t.string;
        return this.values.set(`"${n}"`, t.string), n;
      }
      if (typeof t === "bigint") {
        let n = t.toString(),
          r = `${KPs + "b" + this.counter++}_` + n;
        return this.values.set(`"${r}"`, n), r;
      }
      return t;
    };
  }
  replaceInJson(e) {
    if (this.stage === 0) throw Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
    if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
    if (this.stage = 2, this.counter === 0) return e;
    for (let [t, n] of this.values) e = e.replace(t, n);
    return e;
  }
}
class _Mr extends XCe {
  settings;
  buffer;
  rootSchema;
  constructor(e) {
    super();
    this.settings = e;
  }
  write(e, t) {
    this.rootSchema = WS.NormalizedSchema.of(e), this.buffer = this._write(this.rootSchema, t);
  }
  writeDiscriminatedDocument(e, t) {
    if (this.write(e, t), typeof this.buffer === "object") this.buffer.__type = WS.NormalizedSchema.of(e).getName(!0);
  }
  flush() {
    let {
      rootSchema: e
    } = this;
    if (this.rootSchema = void 0, e?.isStructSchema() || e?.isDocumentSchema()) {
      let t = new tMs();
      return t.replaceInJson(JSON.stringify(this.buffer, t.createReplacer(), 0));
    }
    return this.buffer;
  }
  _write(e, t, n) {
    let r = t !== null && typeof t === "object",
      o = WS.NormalizedSchema.of(e);
    if (o.isListSchema() && Array.isArray(t)) {
      let s = o.getValueSchema(),
        i = [],
        a = !!o.getMergedTraits().sparse;
      for (let l of t) if (a || l != null) i.push(this._write(s, l));
      return i;
    } else if (o.isMapSchema() && r) {
      let s = o.getValueSchema(),
        i = {},
        a = !!o.getMergedTraits().sparse;
      for (let [l, c] of Object.entries(t)) if (a || c != null) i[l] = this._write(s, c);
      return i;
    } else if (o.isStructSchema() && r) {
      let s = {};
      for (let [i, a] of o.structIterator()) {
        let l = this.settings.jsonName ? a.getMergedTraits().jsonName ?? i : i,
          c = this._write(a, t[i], o);
        if (c !== void 0) s[l] = c;
      }
      return s;
    }
    if (t === null && n?.isStructSchema()) return;
    if (o.isBlobSchema() && (t instanceof Uint8Array || typeof t === "string") || o.isDocumentSchema() && t instanceof Uint8Array) {
      if (o === this.rootSchema) return t;
      return (this.serdeContext?.base64Encoder ?? ZLt.toBase64)(t);
    }
    if ((o.isTimestampSchema() || o.isDocumentSchema()) && t instanceof Date) switch (VO.determineTimestampFormat(o, this.settings)) {
      case 5:
        return t.toISOString().replace(".000Z", "Z");
      case 6:
        return SM.dateToUtcString(t);
      case 7:
        return t.getTime() / 1000;
      default:
        return console.warn("Missing timestamp format, using epoch seconds", t), t.getTime() / 1000;
    }
    if (o.isNumericSchema() && typeof t === "number") {
      if (Math.abs(t) === 1 / 0 || isNaN(t)) return String(t);
    }
    if (o.isStringSchema()) {
      if (typeof t > "u" && o.isIdempotencyToken()) return SM.generateIdempotencyToken();
      let s = o.getMergedTraits().mediaType;
      if (t != null && s) {
        if (s === "application/json" || s.endsWith("+json")) return SM.LazyJsonString.from(t);
      }
    }
    if (o.isDocumentSchema()) if (r) {
      let s = Array.isArray(t) ? [] : {};
      for (let [i, a] of Object.entries(t)) if (a instanceof SM.NumericValue) s[i] = a;else s[i] = this._write(o, a);
      return s;
    } else return structuredClone(t);
    return t;
  }
}
class ohn extends XCe {
  settings;
  constructor(e) {
    super();
    this.settings = e;
  }
  createSerializer() {
    let e = new _Mr(this.settings);
    return e.setSerdeContext(this.serdeContext), e;
  }
  createDeserializer() {
    let e = new yMr(this.settings);
    return e.setSerdeContext(this.serdeContext), e;
  }
}
class shn extends VO.RpcProtocol {
  serializer;
  deserializer;
  serviceTarget;
  codec;
  mixin;
  awsQueryCompatible;
  constructor({
    defaultNamespace: e,
    serviceTarget: t,
    awsQueryCompatible: n
  }) {
    super({
      defaultNamespace: e
    });
    this.serviceTarget = t, this.codec = new ohn({
      timestampFormat: {
        useTrait: !0,
        default: 7
      },
      jsonName: !1
    }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer(), this.awsQueryCompatible = !!n, this.mixin = new mtt(this.awsQueryCompatible);
  }
  async serializeRequest(e, t, n) {
    let r = await super.serializeRequest(e, t, n);
    if (!r.path.endsWith("/")) r.path += "/";
    if (Object.assign(r.headers, {
      "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
      "x-amz-target": `${this.serviceTarget}.${e.name}`
    }), this.awsQueryCompatible) r.headers["x-amzn-query-mode"] = "true";
    if (WS.deref(e.input) === "unit" || !r.body) r.body = "{}";
    return r;
  }
  getPayloadCodec() {
    return this.codec;
  }
  async handleError(e, t, n, r, o) {
    if (this.awsQueryCompatible) this.mixin.setQueryCompatError(r, n);
    let s = hMr(n, r) ?? "Unknown",
      {
        errorSchema: i,
        errorMetadata: a
      } = await this.mixin.getErrorSchemaOrThrowBaseException(s, this.options.defaultNamespace, n, r, o),
      l = WS.NormalizedSchema.of(i),
      c = r.message ?? r.Message ?? "Unknown",
      d = new (WS.TypeRegistry.for(i[1]).getErrorCtor(i) ?? Error)(c),
      p = {};
    for (let [f, m] of l.structIterator()) {
      let g = m.getMergedTraits().jsonName ?? f;
      p[f] = this.codec.createDeserializer().readObject(m, r[g]);
    }
    if (this.awsQueryCompatible) this.mixin.queryCompatOutput(r, p);
    throw this.mixin.decorateServiceException(Object.assign(d, a, {
      $fault: l.getMergedTraits().error,
      message: c
    }, p), r);
  }
}
class nMs extends shn {
  constructor({
    defaultNamespace: e,
    serviceTarget: t,
    awsQueryCompatible: n
  }) {
    super({
      defaultNamespace: e,
      serviceTarget: t,
      awsQueryCompatible: n
    });
  }
  getShapeId() {
    return "aws.protocols#awsJson1_0";
  }
  getJsonRpcVersion() {
    return "1.0";
  }
  getDefaultContentType() {
    return "application/x-amz-json-1.0";
  }
}
class rMs extends shn {
  constructor({
    defaultNamespace: e,
    serviceTarget: t,
    awsQueryCompatible: n
  }) {
    super({
      defaultNamespace: e,
      serviceTarget: t,
      awsQueryCompatible: n
    });
  }
  getShapeId() {
    return "aws.protocols#awsJson1_1";
  }
  getJsonRpcVersion() {
    return "1.1";
  }
  getDefaultContentType() {
    return "application/x-amz-json-1.1";
  }
}
class oMs extends VO.HttpBindingProtocol {
  serializer;
  deserializer;
  codec;
  mixin = new mtt();
  constructor({
    defaultNamespace: e
  }) {
    super({
      defaultNamespace: e
    });
    let t = {
      timestampFormat: {
        useTrait: !0,
        default: 7
      },
      httpBindings: !0,
      jsonName: !0
    };
    this.codec = new ohn(t), this.serializer = new VO.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t), this.deserializer = new VO.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
  }
  getShapeId() {
    return "aws.protocols#restJson1";
  }
  getPayloadCodec() {
    return this.codec;
  }
  setSerdeContext(e) {
    this.codec.setSerdeContext(e), super.setSerdeContext(e);
  }
  async serializeRequest(e, t, n) {
    let r = await super.serializeRequest(e, t, n),
      o = WS.NormalizedSchema.of(e.input);
    if (!r.headers["content-type"]) {
      let s = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
      if (s) r.headers["content-type"] = s;
    }
    if (r.body == null && r.headers["content-type"] === this.getDefaultContentType()) r.body = "{}";
    return r;
  }
  async deserializeResponse(e, t, n) {
    let r = await super.deserializeResponse(e, t, n),
      o = WS.NormalizedSchema.of(e.output);
    for (let [s, i] of o.structIterator()) if (i.getMemberTraits().httpPayload && !(s in r)) r[s] = null;
    return r;
  }
  async handleError(e, t, n, r, o) {
    let s = hMr(n, r) ?? "Unknown",
      {
        errorSchema: i,
        errorMetadata: a
      } = await this.mixin.getErrorSchemaOrThrowBaseException(s, this.options.defaultNamespace, n, r, o),
      l = WS.NormalizedSchema.of(i),
      c = r.message ?? r.Message ?? "Unknown",
      d = new (WS.TypeRegistry.for(i[1]).getErrorCtor(i) ?? Error)(c);
    await this.deserializeHttpMessage(i, t, n, r);
    let p = {};
    for (let [f, m] of l.structIterator()) {
      let g = m.getMergedTraits().jsonName ?? f;
      p[f] = this.codec.createDeserializer().readObject(m, r[g]);
    }
    throw this.mixin.decorateServiceException(Object.assign(d, a, {
      $fault: l.getMergedTraits().error,
      message: c
    }, p), r);
  }
  getDefaultContentType() {
    return "application/json";
  }
}
var aGu = e => {
  if (e == null) return;
  if (typeof e === "object" && "__type" in e) delete e.__type;
  return Xhe.expectUnion(e);
};
class ihn extends XCe {
  settings;
  stringDeserializer;
  constructor(e) {
    super();
    this.settings = e, this.stringDeserializer = new VO.FromStringShapeDeserializer(e);
  }
  setSerdeContext(e) {
    this.serdeContext = e, this.stringDeserializer.setSerdeContext(e);
  }
  read(e, t, n) {
    let r = WS.NormalizedSchema.of(e),
      o = r.getMemberSchemas();
    if (r.isStructSchema() && r.isMemberSchema() && !!Object.values(o).find(l => !!l.getMemberTraits().eventPayload)) {
      let l = {},
        c = Object.keys(o)[0];
      if (o[c].isBlobSchema()) l[c] = t;else l[c] = this.read(o[c], t);
      return l;
    }
    let i = (this.serdeContext?.utf8Encoder ?? YPs.toUtf8)(t),
      a = this.parseXml(i);
    return this.readSchema(e, n ? a[n] : a);
  }
  readSchema(e, t) {
    let n = WS.NormalizedSchema.of(e);
    if (n.isUnitSchema()) return;
    let r = n.getMergedTraits();
    if (n.isListSchema() && !Array.isArray(t)) return this.readSchema(n, [t]);
    if (t == null) return t;
    if (typeof t === "object") {
      let o = !!r.sparse,
        s = !!r.xmlFlattened;
      if (n.isListSchema()) {
        let a = n.getValueSchema(),
          l = [],
          c = a.getMergedTraits().xmlName ?? "member",
          u = s ? t : (t[0] ?? t)[c],
          d = Array.isArray(u) ? u : [u];
        for (let p of d) if (p != null || o) l.push(this.readSchema(a, p));
        return l;
      }
      let i = {};
      if (n.isMapSchema()) {
        let a = n.getKeySchema(),
          l = n.getValueSchema(),
          c;
        if (s) c = Array.isArray(t) ? t : [t];else c = Array.isArray(t.entry) ? t.entry : [t.entry];
        let u = a.getMergedTraits().xmlName ?? "key",
          d = l.getMergedTraits().xmlName ?? "value";
        for (let p of c) {
          let f = p[u],
            m = p[d];
          if (m != null || o) i[f] = this.readSchema(l, m);
        }
        return i;
      }
      if (n.isStructSchema()) {
        for (let [a, l] of n.structIterator()) {
          let c = l.getMergedTraits(),
            u = !c.httpPayload ? l.getMemberTraits().xmlName ?? a : c.xmlName ?? l.getName();
          if (t[u] != null) i[a] = this.readSchema(l, t[u]);
        }
        return i;
      }
      if (n.isDocumentSchema()) return t;
      throw Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${n.getName(!0)}`);
    }
    if (n.isListSchema()) return [];
    if (n.isMapSchema() || n.isStructSchema()) return {};
    return this.stringDeserializer.read(n, t);
  }
  parseXml(e) {
    if (e.length) {
      let t;
      try {
        t = CY.parseXML(e);
      } catch (s) {
        if (s && typeof s === "object") Object.defineProperty(s, "$responseBodyText", {
          value: e
        });
        throw s;
      }
      let n = "#text",
        r = Object.keys(t)[0],
        o = t[r];
      if (o[n]) o[r] = o[n], delete o[n];
      return Xhe.getValueFromTextNode(o);
    }
    return {};
  }
}
class sMs extends XCe {
  settings;
  buffer;
  constructor(e) {
    super();
    this.settings = e;
  }
  write(e, t, n = "") {
    if (this.buffer === void 0) this.buffer = "";
    let r = WS.NormalizedSchema.of(e);
    if (n && !n.endsWith(".")) n += ".";
    if (r.isBlobSchema()) {
      if (typeof t === "string" || t instanceof Uint8Array) this.writeKey(n), this.writeValue((this.serdeContext?.base64Encoder ?? ZLt.toBase64)(t));
    } else if (r.isBooleanSchema() || r.isNumericSchema() || r.isStringSchema()) {
      if (t != null) this.writeKey(n), this.writeValue(String(t));else if (r.isIdempotencyToken()) this.writeKey(n), this.writeValue(SM.generateIdempotencyToken());
    } else if (r.isBigIntegerSchema()) {
      if (t != null) this.writeKey(n), this.writeValue(String(t));
    } else if (r.isBigDecimalSchema()) {
      if (t != null) this.writeKey(n), this.writeValue(t instanceof SM.NumericValue ? t.string : String(t));
    } else if (r.isTimestampSchema()) {
      if (t instanceof Date) switch (this.writeKey(n), VO.determineTimestampFormat(r, this.settings)) {
        case 5:
          this.writeValue(t.toISOString().replace(".000Z", "Z"));
          break;
        case 6:
          this.writeValue(Xhe.dateToUtcString(t));
          break;
        case 7:
          this.writeValue(String(t.getTime() / 1000));
          break;
      }
    } else if (r.isDocumentSchema()) throw Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${r.getName(!0)}`);else if (r.isListSchema()) {
      if (Array.isArray(t)) if (t.length === 0) {
        if (this.settings.serializeEmptyLists) this.writeKey(n), this.writeValue("");
      } else {
        let o = r.getValueSchema(),
          s = this.settings.flattenLists || r.getMergedTraits().xmlFlattened,
          i = 1;
        for (let a of t) {
          if (a == null) continue;
          let l = this.getKey("member", o.getMergedTraits().xmlName),
            c = s ? `${n}${i}` : `${n}${l}.${i}`;
          this.write(o, a, c), ++i;
        }
      }
    } else if (r.isMapSchema()) {
      if (t && typeof t === "object") {
        let o = r.getKeySchema(),
          s = r.getValueSchema(),
          i = r.getMergedTraits().xmlFlattened,
          a = 1;
        for (let [l, c] of Object.entries(t)) {
          if (c == null) continue;
          let u = this.getKey("key", o.getMergedTraits().xmlName),
            d = i ? `${n}${a}.${u}` : `${n}entry.${a}.${u}`,
            p = this.getKey("value", s.getMergedTraits().xmlName),
            f = i ? `${n}${a}.${p}` : `${n}entry.${a}.${p}`;
          this.write(o, l, d), this.write(s, c, f), ++a;
        }
      }
    } else if (r.isStructSchema()) {
      if (t && typeof t === "object") for (let [o, s] of r.structIterator()) {
        if (t[o] == null && !s.isIdempotencyToken()) continue;
        let i = this.getKey(o, s.getMergedTraits().xmlName),
          a = `${n}${i}`;
        this.write(s, t[o], a);
      }
    } else if (r.isUnitSchema()) ;else throw Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${r.getName(!0)}`);
  }
  flush() {
    if (this.buffer === void 0) throw Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
    let e = this.buffer;
    return delete this.buffer, e;
  }
  getKey(e, t) {
    let n = t ?? e;
    if (this.settings.capitalizeKeys) return n[0].toUpperCase() + n.slice(1);
    return n;
  }
  writeKey(e) {
    if (e.endsWith(".")) e = e.slice(0, e.length - 1);
    this.buffer += `&${VO.extendedEncodeURIComponent(e)}=`;
  }
  writeValue(e) {
    this.buffer += VO.extendedEncodeURIComponent(e);
  }
}
class bMr extends VO.RpcProtocol {
  options;
  serializer;
  deserializer;
  mixin = new mtt();
  constructor(e) {
    super({
      defaultNamespace: e.defaultNamespace
    });
    this.options = e;
    let t = {
      timestampFormat: {
        useTrait: !0,
        default: 5
      },
      httpBindings: !1,
      xmlNamespace: e.xmlNamespace,
      serviceNamespace: e.defaultNamespace,
      serializeEmptyLists: !0
    };
    this.serializer = new sMs(t), this.deserializer = new ihn(t);
  }
  getShapeId() {
    return "aws.protocols#awsQuery";
  }
  setSerdeContext(e) {
    this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e);
  }
  getPayloadCodec() {
    throw Error("AWSQuery protocol has no payload codec.");
  }
  async serializeRequest(e, t, n) {
    let r = await super.serializeRequest(e, t, n);
    if (!r.path.endsWith("/")) r.path += "/";
    if (Object.assign(r.headers, {
      "content-type": "application/x-www-form-urlencoded"
    }), WS.deref(e.input) === "unit" || !r.body) r.body = "";
    let o = e.name.split("#")[1] ?? e.name;
    if (r.body = `Action=${o}&Version=${this.options.version}` + r.body, r.body.endsWith("&")) r.body = r.body.slice(-1);
    return r;
  }
  async deserializeResponse(e, t, n) {
    let r = this.deserializer,
      o = WS.NormalizedSchema.of(e.output),
      s = {};
    if (n.statusCode >= 300) {
      let u = await VO.collectBody(n.body, t);
      if (u.byteLength > 0) Object.assign(s, await r.read(15, u));
      await this.handleError(e, t, n, s, this.deserializeMetadata(n));
    }
    for (let u in n.headers) {
      let d = n.headers[u];
      delete n.headers[u], n.headers[u.toLowerCase()] = d;
    }
    let i = e.name.split("#")[1] ?? e.name,
      a = o.isStructSchema() && this.useNestedResult() ? i + "Result" : void 0,
      l = await VO.collectBody(n.body, t);
    if (l.byteLength > 0) Object.assign(s, await r.read(o, l, a));
    return {
      $metadata: this.deserializeMetadata(n),
      ...s
    };
  }
  useNestedResult() {
    return !0;
  }
  async handleError(e, t, n, r, o) {
    let s = this.loadQueryErrorCode(n, r) ?? "Unknown",
      i = this.loadQueryError(r),
      a = this.loadQueryErrorMessage(r);
    i.message = a, i.Error = {
      Type: i.Type,
      Code: i.Code,
      Message: a
    };
    let {
        errorSchema: l,
        errorMetadata: c
      } = await this.mixin.getErrorSchemaOrThrowBaseException(s, this.options.defaultNamespace, n, i, o, (m, g) => {
        try {
          return m.getSchema(g);
        } catch (h) {
          return m.find(y => WS.NormalizedSchema.of(y).getMergedTraits().awsQueryError?.[0] === g);
        }
      }),
      u = WS.NormalizedSchema.of(l),
      p = new (WS.TypeRegistry.for(l[1]).getErrorCtor(l) ?? Error)(a),
      f = {
        Error: i.Error
      };
    for (let [m, g] of u.structIterator()) {
      let h = g.getMergedTraits().xmlName ?? m,
        y = i[h] ?? r[h];
      f[m] = this.deserializer.readSchema(g, y);
    }
    throw this.mixin.decorateServiceException(Object.assign(p, c, {
      $fault: u.getMergedTraits().error,
      message: a
    }, f), r);
  }
  loadQueryErrorCode(e, t) {
    let n = (t.Errors?.[0]?.Error ?? t.Errors?.Error ?? t.Error)?.Code;
    if (n !== void 0) return n;
    if (e.statusCode == 404) return "NotFound";
  }
  loadQueryError(e) {
    return e.Errors?.[0]?.Error ?? e.Errors?.Error ?? e.Error;
  }
  loadQueryErrorMessage(e) {
    let t = this.loadQueryError(e);
    return t?.message ?? t?.Message ?? e.message ?? e.Message ?? "Unknown";
  }
  getDefaultContentType() {
    return "application/x-www-form-urlencoded";
  }
}
class iMs extends bMr {
  options;
  constructor(e) {
    super(e);
    this.options = e;
    let t = {
      capitalizeKeys: !0,
      flattenLists: !0,
      serializeEmptyLists: !1
    };
    Object.assign(this.serializer.settings, t);
  }
  useNestedResult() {
    return !1;
  }
}
var aMs = (e, t) => eMs(e, t).then(n => {
    if (n.length) {
      let r;
      try {
        r = CY.parseXML(n);
      } catch (a) {
        if (a && typeof a === "object") Object.defineProperty(a, "$responseBodyText", {
          value: n
        });
        throw a;
      }
      let o = "#text",
        s = Object.keys(r)[0],
        i = r[s];
      if (i[o]) i[s] = i[o], delete i[o];
      return Xhe.getValueFromTextNode(i);
    }
    return {};
  }),
  lGu = async (e, t) => {
    let n = await aMs(e, t);
    if (n.Error) n.Error.message = n.Error.message ?? n.Error.Message;
    return n;
  },
  lMs = (e, t) => {
    if (t?.Error?.Code !== void 0) return t.Error.Code;
    if (t?.Code !== void 0) return t.Code;
    if (e.statusCode == 404) return "NotFound";
  };
class SMr extends XCe {
  settings;
  stringBuffer;
  byteBuffer;
  buffer;
  constructor(e) {
    super();
    this.settings = e;
  }
  write(e, t) {
    let n = WS.NormalizedSchema.of(e);
    if (n.isStringSchema() && typeof t === "string") this.stringBuffer = t;else if (n.isBlobSchema()) this.byteBuffer = "byteLength" in t ? t : (this.serdeContext?.base64Decoder ?? ZLt.fromBase64)(t);else {
      this.buffer = this.writeStruct(n, t, void 0);
      let r = n.getMergedTraits();
      if (r.httpPayload && !r.xmlName) this.buffer.withName(n.getName());
    }
  }
  flush() {
    if (this.byteBuffer !== void 0) {
      let t = this.byteBuffer;
      return delete this.byteBuffer, t;
    }
    if (this.stringBuffer !== void 0) {
      let t = this.stringBuffer;
      return delete this.stringBuffer, t;
    }
    let e = this.buffer;
    if (this.settings.xmlNamespace) {
      if (!e?.attributes?.xmlns) e.addAttribute("xmlns", this.settings.xmlNamespace);
    }
    return delete this.buffer, e.toString();
  }
  writeStruct(e, t, n) {
    let r = e.getMergedTraits(),
      o = e.isMemberSchema() && !r.httpPayload ? e.getMemberTraits().xmlName ?? e.getMemberName() : r.xmlName ?? e.getName();
    if (!o || !e.isStructSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e.getName(!0)}.`);
    let s = CY.XmlNode.of(o),
      [i, a] = this.getXmlnsAttribute(e, n);
    for (let [l, c] of e.structIterator()) {
      let u = t[l];
      if (u != null || c.isIdempotencyToken()) {
        if (c.getMergedTraits().xmlAttribute) {
          s.addAttribute(c.getMergedTraits().xmlName ?? l, this.writeSimple(c, u));
          continue;
        }
        if (c.isListSchema()) this.writeList(c, u, s, a);else if (c.isMapSchema()) this.writeMap(c, u, s, a);else if (c.isStructSchema()) s.addChildNode(this.writeStruct(c, u, a));else {
          let d = CY.XmlNode.of(c.getMergedTraits().xmlName ?? c.getMemberName());
          this.writeSimpleInto(c, u, d, a), s.addChildNode(d);
        }
      }
    }
    if (a) s.addAttribute(i, a);
    return s;
  }
  writeList(e, t, n, r) {
    if (!e.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e.getName(!0)}`);
    let o = e.getMergedTraits(),
      s = e.getValueSchema(),
      i = s.getMergedTraits(),
      a = !!i.sparse,
      l = !!o.xmlFlattened,
      [c, u] = this.getXmlnsAttribute(e, r),
      d = (p, f) => {
        if (s.isListSchema()) this.writeList(s, Array.isArray(f) ? f : [f], p, u);else if (s.isMapSchema()) this.writeMap(s, f, p, u);else if (s.isStructSchema()) {
          let m = this.writeStruct(s, f, u);
          p.addChildNode(m.withName(l ? o.xmlName ?? e.getMemberName() : i.xmlName ?? "member"));
        } else {
          let m = CY.XmlNode.of(l ? o.xmlName ?? e.getMemberName() : i.xmlName ?? "member");
          this.writeSimpleInto(s, f, m, u), p.addChildNode(m);
        }
      };
    if (l) {
      for (let p of t) if (a || p != null) d(n, p);
    } else {
      let p = CY.XmlNode.of(o.xmlName ?? e.getMemberName());
      if (u) p.addAttribute(c, u);
      for (let f of t) if (a || f != null) d(p, f);
      n.addChildNode(p);
    }
  }
  writeMap(e, t, n, r, o = !1) {
    if (!e.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e.getName(!0)}`);
    let s = e.getMergedTraits(),
      i = e.getKeySchema(),
      l = i.getMergedTraits().xmlName ?? "key",
      c = e.getValueSchema(),
      u = c.getMergedTraits(),
      d = u.xmlName ?? "value",
      p = !!u.sparse,
      f = !!s.xmlFlattened,
      [m, g] = this.getXmlnsAttribute(e, r),
      h = (y, b, _) => {
        let S = CY.XmlNode.of(l, b),
          [A, v] = this.getXmlnsAttribute(i, g);
        if (v) S.addAttribute(A, v);
        y.addChildNode(S);
        let C = CY.XmlNode.of(d);
        if (c.isListSchema()) this.writeList(c, _, C, g);else if (c.isMapSchema()) this.writeMap(c, _, C, g, !0);else if (c.isStructSchema()) C = this.writeStruct(c, _, g);else this.writeSimpleInto(c, _, C, g);
        y.addChildNode(C);
      };
    if (f) {
      for (let [y, b] of Object.entries(t)) if (p || b != null) {
        let _ = CY.XmlNode.of(s.xmlName ?? e.getMemberName());
        h(_, y, b), n.addChildNode(_);
      }
    } else {
      let y;
      if (!o) {
        if (y = CY.XmlNode.of(s.xmlName ?? e.getMemberName()), g) y.addAttribute(m, g);
        n.addChildNode(y);
      }
      for (let [b, _] of Object.entries(t)) if (p || _ != null) {
        let S = CY.XmlNode.of("entry");
        h(S, b, _), (o ? n : y).addChildNode(S);
      }
    }
  }
  writeSimple(e, t) {
    if (t === null) throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
    let n = WS.NormalizedSchema.of(e),
      r = null;
    if (t && typeof t === "object") if (n.isBlobSchema()) r = (this.serdeContext?.base64Encoder ?? ZLt.toBase64)(t);else if (n.isTimestampSchema() && t instanceof Date) switch (VO.determineTimestampFormat(n, this.settings)) {
      case 5:
        r = t.toISOString().replace(".000Z", "Z");
        break;
      case 6:
        r = Xhe.dateToUtcString(t);
        break;
      case 7:
        r = String(t.getTime() / 1000);
        break;
      default:
        console.warn("Missing timestamp format, using http date", t), r = Xhe.dateToUtcString(t);
        break;
    } else if (n.isBigDecimalSchema() && t) {
      if (t instanceof SM.NumericValue) return t.string;
      return String(t);
    } else if (n.isMapSchema() || n.isListSchema()) throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");else throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${n.getName(!0)}`);
    if (n.isBooleanSchema() || n.isNumericSchema() || n.isBigIntegerSchema() || n.isBigDecimalSchema()) r = String(t);
    if (n.isStringSchema()) if (t === void 0 && n.isIdempotencyToken()) r = SM.generateIdempotencyToken();else r = String(t);
    if (r === null) throw Error(`Unhandled schema-value pair ${n.getName(!0)}=${t}`);
    return r;
  }
  writeSimpleInto(e, t, n, r) {
    let o = this.writeSimple(e, t),
      s = WS.NormalizedSchema.of(e),
      i = new CY.XmlText(o),
      [a, l] = this.getXmlnsAttribute(s, r);
    if (l) n.addAttribute(a, l);
    n.addChildNode(i);
  }
  getXmlnsAttribute(e, t) {
    let n = e.getMergedTraits(),
      [r, o] = n.xmlNamespace ?? [];
    if (o && o !== t) return [r ? `xmlns:${r}` : "xmlns", o];
    return [void 0, void 0];
  }
}
class EMr extends XCe {
  settings;
  constructor(e) {
    super();
    this.settings = e;
  }
  createSerializer() {
    let e = new SMr(this.settings);
    return e.setSerdeContext(this.serdeContext), e;
  }
  createDeserializer() {
    let e = new ihn(this.settings);
    return e.setSerdeContext(this.serdeContext), e;
  }
}
class cMs extends VO.HttpBindingProtocol {
  codec;
  serializer;
  deserializer;
  mixin = new mtt();
  constructor(e) {
    super(e);
    let t = {
      timestampFormat: {
        useTrait: !0,
        default: 5
      },
      httpBindings: !0,
      xmlNamespace: e.xmlNamespace,
      serviceNamespace: e.defaultNamespace
    };
    this.codec = new EMr(t), this.serializer = new VO.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t), this.deserializer = new VO.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
  }
  getPayloadCodec() {
    return this.codec;
  }
  getShapeId() {
    return "aws.protocols#restXml";
  }
  async serializeRequest(e, t, n) {
    let r = await super.serializeRequest(e, t, n),
      o = WS.NormalizedSchema.of(e.input);
    if (!r.headers["content-type"]) {
      let s = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
      if (s) r.headers["content-type"] = s;
    }
    if (r.headers["content-type"] === this.getDefaultContentType()) {
      if (typeof r.body === "string") r.body = '<?xml version="1.0" encoding="UTF-8"?>' + r.body;
    }
    return r;
  }
  async deserializeResponse(e, t, n) {
    return super.deserializeResponse(e, t, n);
  }
  async handleError(e, t, n, r, o) {
    let s = lMs(n, r) ?? "Unknown",
      {
        errorSchema: i,
        errorMetadata: a
      } = await this.mixin.getErrorSchemaOrThrowBaseException(s, this.options.defaultNamespace, n, r, o),
      l = WS.NormalizedSchema.of(i),
      c = r.Error?.message ?? r.Error?.Message ?? r.message ?? r.Message ?? "Unknown",
      d = new (WS.TypeRegistry.for(i[1]).getErrorCtor(i) ?? Error)(c);
    await this.deserializeHttpMessage(i, t, n, r);
    let p = {};
    for (let [f, m] of l.structIterator()) {
      let g = m.getMergedTraits().xmlName ?? f,
        h = r.Error?.[g] ?? r[g];
      p[f] = this.codec.createDeserializer().readSchema(m, h);
    }
    throw this.mixin.decorateServiceException(Object.assign(d, a, {
      $fault: l.getMergedTraits().error,
      message: c
    }, p), r);
  }
  getDefaultContentType() {
    return "application/xml";
  }
}
fm.AWSSDKSigV4Signer = Y3u;
fm.AwsEc2QueryProtocol = iMs;
fm.AwsJson1_0Protocol = nMs;
fm.AwsJson1_1Protocol = rMs;
fm.AwsJsonRpcProtocol = shn;
fm.AwsQueryProtocol = bMr;
fm.AwsRestJsonProtocol = oMs;
fm.AwsRestXmlProtocol = cMs;
fm.AwsSdkSigV4ASigner = XPs;
fm.AwsSdkSigV4Signer = rhn;
fm.AwsSmithyRpcV2CborProtocol = ZPs;
fm.JsonCodec = ohn;
fm.JsonShapeDeserializer = yMr;
fm.JsonShapeSerializer = _Mr;
fm.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = X3u;
fm.NODE_SIGV4A_CONFIG_OPTIONS = Q3u;
fm.XmlCodec = EMr;
fm.XmlShapeDeserializer = ihn;
fm.XmlShapeSerializer = SMr;
fm._toBool = rGu;
fm._toNum = oGu;
fm._toStr = nGu;
fm.awsExpectUnion = aGu;
fm.emitWarningIfUnsupportedVersion = W3u;
fm.getBearerTokenEnvKey = JPs;
fm.loadRestJsonErrorCode = hMr;
fm.loadRestXmlErrorCode = lMs;
fm.parseJsonBody = gMr;
fm.parseJsonErrorBody = iGu;
fm.parseXmlBody = aMs;
fm.parseXmlErrorBody = lGu;
fm.resolveAWSSDKSigV4Config = Z3u;
fm.resolveAwsSdkSigV4AConfig = J3u;
fm.resolveAwsSdkSigV4Config = QPs;
fm.setCredentialFeature = q3u;
fm.setFeature = V3u;
fm.setTokenFeature = z3u;
fm.state = dMr;
fm.validateSigningProperties = mMr;