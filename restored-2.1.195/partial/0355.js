// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hy
// matched 2.1.88 source: node_modules/ajv/dist/compile/util.js
// class=partial  jaccard=0.1533  score=1  fileCov=0.1533
// note: low-confidence suggestion: node_modules/ajv/dist/compile/util.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hy = Q(Zm => {
  Object.defineProperty(Zm, "__esModule", {
    value: !0
  });
  Zm.checkStrictMode = Zm.getErrorPath = Zm.Type = Zm.useFunc = Zm.setEvaluated = Zm.evaluatedPropsToName = Zm.mergeEvaluated = Zm.eachItem = Zm.unescapeJsonPointer = Zm.escapeJsonPointer = Zm.escapeFragment = Zm.unescapeFragment = Zm.schemaRefOrVal = Zm.schemaHasRulesButRef = Zm.schemaHasRules = Zm.checkUnknownRules = Zm.alwaysValidSchema = Zm.toHash = void 0;
  var OA = um(),
    Htu = Okt();
  function Ttu(e) {
    let t = {};
    for (let n of e) t[n] = !0;
    return t;
  }
  Zm.toHash = Ttu;
  function vtu(e, t) {
    if (typeof t == "boolean") return t;
    if (Object.keys(t).length === 0) return !0;
    return Dus(e, t), !Pus(t, e.self.RULES.all);
  }
  Zm.alwaysValidSchema = vtu;
  function Dus(e, t = e.schema) {
    let {
      opts: n,
      self: r
    } = e;
    if (!n.strictSchema) return;
    if (typeof t === "boolean") return;
    let o = r.RULES.keywords;
    for (let s in t) if (!o[s]) Ous(e, `unknown keyword: "${s}"`);
  }
  Zm.checkUnknownRules = Dus;
  function Pus(e, t) {
    if (typeof e == "boolean") return !e;
    for (let n in e) if (t[n]) return !0;
    return !1;
  }
  Zm.schemaHasRules = Pus;
  function wtu(e, t) {
    if (typeof e == "boolean") return !e;
    for (let n in e) if (n !== "$ref" && t.all[n]) return !0;
    return !1;
  }
  Zm.schemaHasRulesButRef = wtu;
  function Ctu({
    topSchemaRef: e,
    schemaPath: t
  }, n, r, o) {
    if (!o) {
      if (typeof n == "number" || typeof n == "boolean") return n;
      if (typeof n == "string") return OA._`${n}`;
    }
    return OA._`${e}${t}${(0, OA.getProperty)(r)}`;
  }
  Zm.schemaRefOrVal = Ctu;
  function Itu(e) {
    return Mus(decodeURIComponent(e));
  }
  Zm.unescapeFragment = Itu;
  function xtu(e) {
    return encodeURIComponent(Owr(e));
  }
  Zm.escapeFragment = xtu;
  function Owr(e) {
    if (typeof e == "number") return `${e}`;
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  Zm.escapeJsonPointer = Owr;
  function Mus(e) {
    return e.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  Zm.unescapeJsonPointer = Mus;
  function ktu(e, t) {
    if (Array.isArray(e)) for (let n of e) t(n);else t(e);
  }
  Zm.eachItem = ktu;
  function Rus({
    mergeNames: e,
    mergeToName: t,
    mergeValues: n,
    resultToName: r
  }) {
    return (o, s, i, a) => {
      let l = i === void 0 ? s : i instanceof OA.Name ? (s instanceof OA.Name ? e(o, s, i) : t(o, s, i), i) : s instanceof OA.Name ? (t(o, i, s), s) : n(s, i);
      return a === OA.Name && !(l instanceof OA.Name) ? r(o, l) : l;
    };
  }
  Zm.mergeEvaluated = {
    props: Rus({
      mergeNames: (e, t, n) => e.if(OA._`${n} !== true && ${t} !== undefined`, () => {
        e.if(OA._`${t} === true`, () => e.assign(n, !0), () => e.assign(n, OA._`${n} || {}`).code(OA._`Object.assign(${n}, ${t})`));
      }),
      mergeToName: (e, t, n) => e.if(OA._`${n} !== true`, () => {
        if (t === !0) e.assign(n, !0);else e.assign(n, OA._`${n} || {}`), Nwr(e, n, t);
      }),
      mergeValues: (e, t) => e === !0 ? !0 : {
        ...e,
        ...t
      },
      resultToName: $us
    }),
    items: Rus({
      mergeNames: (e, t, n) => e.if(OA._`${n} !== true && ${t} !== undefined`, () => e.assign(n, OA._`${t} === true ? true : ${n} > ${t} ? ${n} : ${t}`)),
      mergeToName: (e, t, n) => e.if(OA._`${n} !== true`, () => e.assign(n, t === !0 ? !0 : OA._`${n} > ${t} ? ${n} : ${t}`)),
      mergeValues: (e, t) => e === !0 ? !0 : Math.max(e, t),
      resultToName: (e, t) => e.var("items", t)
    })
  };
  function $us(e, t) {
    if (t === !0) return e.var("props", !0);
    let n = e.var("props", OA._`{}`);
    if (t !== void 0) Nwr(e, n, t);
    return n;
  }
  Zm.evaluatedPropsToName = $us;
  function Nwr(e, t, n) {
    Object.keys(n).forEach(r => e.assign(OA._`${t}${(0, OA.getProperty)(r)}`, !0));
  }
  Zm.setEvaluated = Nwr;
  var Lus = {};
  function Rtu(e, t) {
    return e.scopeValue("func", {
      ref: t,
      code: Lus[t.code] || (Lus[t.code] = new Htu._Code(t.code))
    });
  }
  Zm.useFunc = Rtu;
  var $wr;
  (function (e) {
    e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
  })($wr || (Zm.Type = $wr = {}));
  function Ltu(e, t, n) {
    if (e instanceof OA.Name) {
      let r = t === $wr.Num;
      return n ? r ? OA._`"[" + ${e} + "]"` : OA._`"['" + ${e} + "']"` : r ? OA._`"/" + ${e}` : OA._`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return n ? (0, OA.getProperty)(e).toString() : "/" + Owr(e);
  }
  Zm.getErrorPath = Ltu;
  function Ous(e, t, n = e.opts.strictSchema) {
    if (!n) return;
    if (t = `strict mode: ${t}`, n === !0) throw Error(t);
    e.self.logger.warn(t);
  }
  Zm.checkStrictMode = Ous;
});