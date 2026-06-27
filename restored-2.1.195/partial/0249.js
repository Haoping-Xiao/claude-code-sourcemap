// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qis
// matched 2.1.88 source: node_modules/zod/v3/types.js
// class=partial  jaccard=0.2173  score=1  fileCov=0.2173
// note: low-confidence suggestion: node_modules/zod/v3/types.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Qis = E(() => {
  (function (e) {
    e.errToObj = t => typeof t === "string" ? {
      message: t
    } : t || {}, e.toString = t => typeof t === "string" ? t : t?.message;
  })($c || ($c = {}));
});
class _ee {
  constructor(e, t, n, r) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = r;
  }
  get path() {
    if (!this._cachedPath.length) if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);else this._cachedPath.push(...this._path, this._key);
    return this._cachedPath;
  }
}
function Hf(e) {
  if (!e) return {};
  let {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: o
  } = e;
  if (t && (n || r)) throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  if (t) return {
    errorMap: t,
    description: o
  };
  return {
    errorMap: (i, a) => {
      let {
        message: l
      } = e;
      if (i.code === "invalid_enum_value") return {
        message: l ?? a.defaultError
      };
      if (typeof a.data > "u") return {
        message: l ?? r ?? a.defaultError
      };
      if (i.code !== "invalid_type") return {
        message: a.defaultError
      };
      return {
        message: l ?? n ?? a.defaultError
      };
    },
    description: o
  };
}
class Lm {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return iae(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: iae(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new CO(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: iae(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    let t = this._parse(e);
    if (rQe(t)) throw Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    let t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    let n = this.safeParse(e, t);
    if (n.success) return n.data;
    throw n.error;
  }
  safeParse(e, t) {
    let n = {
        common: {
          issues: [],
          async: t?.async ?? !1,
          contextualErrorMap: t?.errorMap
        },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: iae(e)
      },
      r = this._parseSync({
        data: e,
        path: n.path,
        parent: n
      });
    return Zis(n, r);
  }
  "~validate"(e) {
    let t = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: iae(e)
    };
    if (!this["~standard"].async) try {
      let n = this._parseSync({
        data: e,
        path: [],
        parent: t
      });
      return hwe(n) ? {
        value: n.value
      } : {
        issues: t.common.issues
      };
    } catch (n) {
      if (n?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = !0;
      t.common = {
        issues: [],
        async: !0
      };
    }
    return this._parseAsync({
      data: e,
      path: [],
      parent: t
    }).then(n => hwe(n) ? {
      value: n.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, t) {
    let n = await this.safeParseAsync(e, t);
    if (n.success) return n.data;
    throw n.error;
  }
  async safeParseAsync(e, t) {
    let n = {
        common: {
          issues: [],
          contextualErrorMap: t?.errorMap,
          async: !0
        },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: iae(e)
      },
      r = this._parse({
        data: e,
        path: n.path,
        parent: n
      }),
      o = await (rQe(r) ? r : Promise.resolve(r));
    return Zis(n, o);
  }
  refine(e, t) {
    let n = r => {
      if (typeof t === "string" || typeof t > "u") return {
        message: t
      };else if (typeof t === "function") return t(r);else return t;
    };
    return this._refinement((r, o) => {
      let s = e(r),
        i = () => o.addIssue({
          code: yi.custom,
          ...n(r)
        });
      if (typeof Promise < "u" && s instanceof Promise) return s.then(a => {
        if (!a) return i(), !1;else return !0;
      });
      if (!s) return i(), !1;else return !0;
    });
  }
  refinement(e, t) {
    return this._refinement((n, r) => {
      if (!e(n)) return r.addIssue(typeof t === "function" ? t(n, r) : t), !1;else return !0;
    });
  }
  _refinement(e) {
    return new bee({
      schema: this,
      typeName: Ii.ZodEffects,
      effect: {
        type: "refinement",
        refinement: e
      }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: t => this["~validate"](t)
    };
  }
  optional() {
    return FV.create(this, this._def);
  }
  nullable() {
    return the.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return yee.create(this);
  }
  promise() {
    return LUe.create(this, this._def);
  }
  or(e) {
    return cQe.create([this, e], this._def);
  }
  and(e) {
    return uQe.create(this, e, this._def);
  }
  transform(e) {
    return new bee({
      ...Hf(this._def),
      schema: this,
      typeName: Ii.ZodEffects,
      effect: {
        type: "transform",
        transform: e
      }
    });
  }
  default(e) {
    let t = typeof e === "function" ? e : () => e;
    return new mQe({
      ...Hf(this._def),
      innerType: this,
      defaultValue: t,
      typeName: Ii.ZodDefault
    });
  }
  brand() {
    return new can({
      typeName: Ii.ZodBranded,
      type: this,
      ...Hf(this._def)
    });
  }
  catch(e) {
    let t = typeof e === "function" ? e : () => e;
    return new gQe({
      ...Hf(this._def),
      innerType: this,
      catchValue: t,
      typeName: Ii.ZodCatch
    });
  }
  describe(e) {
    return new this.constructor({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return fxt.create(this, e);
  }
  readonly() {
    return hQe.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
function nas(e) {
  let t = "[0-5]\\d";
  if (e.precision) t = `${t}\\.\\d{${e.precision}}`;else if (e.precision == null) t = `${t}(\\.\\d+)?`;
  let n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function pXc(e) {
  return new RegExp(`^${nas(e)}$`);
}
function ras(e) {
  let t = `${tas}T${nas(e)}`,
    n = [];
  if (n.push(e.local ? "Z?" : "Z"), e.offset) n.push("([+-]\\d{2}:?\\d{2})");
  return t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function fXc(e, t) {
  if ((t === "v4" || !t) && sXc.test(e)) return !0;
  if ((t === "v6" || !t) && aXc.test(e)) return !0;
  return !1;
}
function mXc(e, t) {
  if (!tXc.test(e)) return !1;
  try {
    let [n] = e.split(".");
    if (!n) return !1;
    let r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="),
      o = JSON.parse(atob(r));
    if (typeof o !== "object" || o === null) return !1;
    if ("typ" in o && o?.typ !== "JWT") return !1;
    if (!o.alg) return !1;
    if (t && o.alg !== t) return !1;
    return !0;
  } catch {
    return !1;
  }
}
function gXc(e, t) {
  if ((t === "v4" || !t) && iXc.test(e)) return !0;
  if ((t === "v6" || !t) && lXc.test(e)) return !0;
  return !1;
}
function hXc(e, t) {
  let n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    o = n > r ? n : r,
    s = Number.parseInt(e.toFixed(o).replace(".", "")),
    i = Number.parseInt(t.toFixed(o).replace(".", ""));
  return s % i / 10 ** o;
}
function oQe(e) {
  if (e instanceof qC) {
    let t = {};
    for (let n in e.shape) {
      let r = e.shape[n];
      t[n] = FV.create(oQe(r));
    }
    return new qC({
      ...e._def,
      shape: () => t
    });
  } else if (e instanceof yee) return new yee({
    ...e._def,
    type: oQe(e.element)
  });else if (e instanceof FV) return FV.create(oQe(e.unwrap()));else if (e instanceof the) return the.create(oQe(e.unwrap()));else if (e instanceof lae) return lae.create(e.items.map(t => oQe(t)));else return e;
}
function AAr(e, t) {
  let n = iae(e),
    r = iae(t);
  if (e === t) return {
    valid: !0,
    data: e
  };else if (n === ta.object && r === ta.object) {
    let o = wg.objectKeys(t),
      s = wg.objectKeys(e).filter(a => o.indexOf(a) !== -1),
      i = {
        ...e,
        ...t
      };
    for (let a of s) {
      let l = AAr(e[a], t[a]);
      if (!l.valid) return {
        valid: !1
      };
      i[a] = l.data;
    }
    return {
      valid: !0,
      data: i
    };
  } else if (n === ta.array && r === ta.array) {
    if (e.length !== t.length) return {
      valid: !1
    };
    let o = [];
    for (let s = 0; s < e.length; s++) {
      let i = e[s],
        a = t[s],
        l = AAr(i, a);
      if (!l.valid) return {
        valid: !1
      };
      o.push(l.data);
    }
    return {
      valid: !0,
      data: o
    };
  } else if (n === ta.date && r === ta.date && +e === +t) return {
    valid: !0,
    data: e
  };else return {
    valid: !1
  };
}
function oas(e, t) {
  return new Swe({
    values: e,
    typeName: Ii.ZodEnum,
    ...Hf(t)
  });
}
function eas(e, t) {
  let n = typeof e === "function" ? e(t) : typeof e === "string" ? {
    message: e
  } : e;
  return typeof n === "string" ? {
    message: n
  } : n;
}
function sas(e, t = {}, n) {
  if (e) return kUe.create().superRefine((r, o) => {
    let s = e(r);
    if (s instanceof Promise) return s.then(i => {
      if (!i) {
        let a = eas(t, r),
          l = a.fatal ?? n ?? !0;
        o.addIssue({
          code: "custom",
          ...a,
          fatal: l
        });
      }
    });
    if (!s) {
      let i = eas(t, r),
        a = i.fatal ?? n ?? !0;
      o.addIssue({
        code: "custom",
        ...i,
        fatal: a
      });
    }
    return;
  });
  return kUe.create();
}
var Zis = (e, t) => {
    if (hwe(t)) return {
      success: !0,
      data: t.value
    };else {
      if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          let n = new iG(e.common.issues);
          return this._error = n, this._error;
        }
      };
    }
  },
  X7c,
  J7c,
  Q7c,
  Z7c,
  eXc,
  tXc,
  nXc,
  rXc,
  oXc = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  EAr,
  sXc,
  iXc,
  aXc,
  lXc,
  cXc,
  uXc,
  tas = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  dXc,
  hee,
  _we,
  bwe,
  iQe,
  xUe,
  lxt,
  aQe,
  lQe,
  kUe,
  ywe,
  aae,
  cxt,
  yee,
  qC,
  cQe,
  ehe = e => {
    if (e instanceof dQe) return ehe(e.schema);else if (e instanceof bee) return ehe(e.innerType());else if (e instanceof pQe) return [e.value];else if (e instanceof Swe) return e.options;else if (e instanceof fQe) return wg.objectValues(e.enum);else if (e instanceof mQe) return ehe(e._def.innerType);else if (e instanceof aQe) return [void 0];else if (e instanceof lQe) return [null];else if (e instanceof FV) return [void 0, ...ehe(e.unwrap())];else if (e instanceof the) return [null, ...ehe(e.unwrap())];else if (e instanceof can) return ehe(e.unwrap());else if (e instanceof hQe) return ehe(e.unwrap());else if (e instanceof gQe) return ehe(e._def.innerType);else return [];
  },
  lan,
  uQe,
  lae,
  uxt,
  dxt,
  RUe,
  sQe,
  dQe,
  pQe,
  Swe,
  fQe,
  LUe,
  bee,
  FV,
  the,
  mQe,
  gQe,
  pxt,
  yXc,
  can,
  fxt,
  hQe,
  _Xc,
  Ii,
  bXc = (e, t = {
    message: `Input not instance of ${e.name}`
  }) => sas(n => n instanceof e, t),
  ri,
  qK,
  SXc,
  EXc,
  iM,
  AXc,
  HXc,
  TXc,
  vXc,
  wXc,
  CXc,
  IXc,
  xXc,
  xx,
  W2,
  jV,
  DUe,
  kXc,
  RXc,
  LXc,
  See,
  DXc,
  PXc,
  MXc,
  $Xc,
  OXc,
  Eee,
  NXc,
  BXc,
  UXc,
  FXc,
  jXc,
  GXc,
  WXc,
  qXc = () => ri().optional(),
  VXc = () => qK().optional(),
  zXc = () => iM().optional(),
  KXc,
  YXc;