// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ias
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ias = E(() => {
  oan();
  san();
  Qis();
  SAr();
  ixt();
  X7c = /^c[^\s-]{8,}$/i, J7c = /^[0-9a-z]+$/, Q7c = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Z7c = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, eXc = /^[a-z0-9_-]{21}$/i, tXc = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, nXc = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, rXc = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, sXc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, iXc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, aXc = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, lXc = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cXc = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, uXc = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, dXc = new RegExp(`^${tas}$`);
  hee = class hee extends Lm {
    _parse(e) {
      if (this._def.coerce) e.data = String(e.data);
      if (this._getType(e) !== ta.string) {
        let o = this._getOrReturnCtx(e);
        return Oa(o, {
          code: yi.invalid_type,
          expected: ta.string,
          received: o.parsedType
        }), hd;
      }
      let n = new CO(),
        r = void 0;
      for (let o of this._def.checks) if (o.kind === "min") {
        if (e.data.length < o.value) r = this._getOrReturnCtx(e, r), Oa(r, {
          code: yi.too_small,
          minimum: o.value,
          type: "string",
          inclusive: true,
          exact: false,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "max") {
        if (e.data.length > o.value) r = this._getOrReturnCtx(e, r), Oa(r, {
          code: yi.too_big,
          maximum: o.value,
          type: "string",
          inclusive: true,
          exact: false,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "length") {
        let s = e.data.length > o.value,
          i = e.data.length < o.value;
        if (s || i) {
          if (r = this._getOrReturnCtx(e, r), s) Oa(r, {
            code: yi.too_big,
            maximum: o.value,
            type: "string",
            inclusive: true,
            exact: true,
            message: o.message
          });else if (i) Oa(r, {
            code: yi.too_small,
            minimum: o.value,
            type: "string",
            inclusive: true,
            exact: true,
            message: o.message
          });
          n.dirty();
        }
      } else if (o.kind === "email") {
        if (!rXc.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "email",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "emoji") {
        if (!EAr) EAr = new RegExp(oXc, "u");
        if (!EAr.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "emoji",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "uuid") {
        if (!Z7c.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "uuid",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "nanoid") {
        if (!eXc.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "nanoid",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "cuid") {
        if (!X7c.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "cuid",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "cuid2") {
        if (!J7c.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "cuid2",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "ulid") {
        if (!Q7c.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "ulid",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "url") try {
        new URL(e.data);
      } catch {
        r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "url",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "regex") {
        if (o.regex.lastIndex = 0, !o.regex.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "regex",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "trim") e.data = e.data.trim();else if (o.kind === "includes") {
        if (!e.data.includes(o.value, o.position)) r = this._getOrReturnCtx(e, r), Oa(r, {
          code: yi.invalid_string,
          validation: {
            includes: o.value,
            position: o.position
          },
          message: o.message
        }), n.dirty();
      } else if (o.kind === "toLowerCase") e.data = e.data.toLowerCase();else if (o.kind === "toUpperCase") e.data = e.data.toUpperCase();else if (o.kind === "startsWith") {
        if (!e.data.startsWith(o.value)) r = this._getOrReturnCtx(e, r), Oa(r, {
          code: yi.invalid_string,
          validation: {
            startsWith: o.value
          },
          message: o.message
        }), n.dirty();
      } else if (o.kind === "endsWith") {
        if (!e.data.endsWith(o.value)) r = this._getOrReturnCtx(e, r), Oa(r, {
          code: yi.invalid_string,
          validation: {
            endsWith: o.value
          },
          message: o.message
        }), n.dirty();
      } else if (o.kind === "datetime") {
        if (!ras(o).test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          code: yi.invalid_string,
          validation: "datetime",
          message: o.message
        }), n.dirty();
      } else if (o.kind === "date") {
        if (!dXc.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          code: yi.invalid_string,
          validation: "date",
          message: o.message
        }), n.dirty();
      } else if (o.kind === "time") {
        if (!pXc(o).test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          code: yi.invalid_string,
          validation: "time",
          message: o.message
        }), n.dirty();
      } else if (o.kind === "duration") {
        if (!nXc.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "duration",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "ip") {
        if (!fXc(e.data, o.version)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "ip",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "jwt") {
        if (!mXc(e.data, o.alg)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "jwt",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "cidr") {
        if (!gXc(e.data, o.version)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "cidr",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "base64") {
        if (!cXc.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "base64",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else if (o.kind === "base64url") {
        if (!uXc.test(e.data)) r = this._getOrReturnCtx(e, r), Oa(r, {
          validation: "base64url",
          code: yi.invalid_string,
          message: o.message
        }), n.dirty();
      } else wg.assertNever(o);
      return {
        status: n.value,
        value: e.data
      };
    }
    _regex(e, t, n) {
      return this.refinement(r => e.test(r), {
        validation: t,
        code: yi.invalid_string,
        ...$c.errToObj(n)
      });
    }
    _addCheck(e) {
      return new hee({
        ...this._def,
        checks: [...this._def.checks, e]
      });
    }
    email(e) {
      return this._addCheck({
        kind: "email",
        ...$c.errToObj(e)
      });
    }
    url(e) {
      return this._addCheck({
        kind: "url",
        ...$c.errToObj(e)
      });
    }
    emoji(e) {
      return this._addCheck({
        kind: "emoji",
        ...$c.errToObj(e)
      });
    }
    uuid(e) {
      return this._addCheck({
        kind: "uuid",
        ...$c.errToObj(e)
      });
    }
    nanoid(e) {
      return this._addCheck({
        kind: "nanoid",
        ...$c.errToObj(e)
      });
    }
    cuid(e) {
      return this._addCheck({
        kind: "cuid",
        ...$c.errToObj(e)
      });
    }
    cuid2(e) {
      return this._addCheck({
        kind: "cuid2",
        ...$c.errToObj(e)
      });
    }
    ulid(e) {
      return this._addCheck({
        kind: "ulid",
        ...$c.errToObj(e)
      });
    }
    base64(e) {
      return this._addCheck({
        kind: "base64",
        ...$c.errToObj(e)
      });
    }
    base64url(e) {
      return this._addCheck({
        kind: "base64url",
        ...$c.errToObj(e)
      });
    }
    jwt(e) {
      return this._addCheck({
        kind: "jwt",
        ...$c.errToObj(e)
      });
    }
    ip(e) {
      return this._addCheck({
        kind: "ip",
        ...$c.errToObj(e)
      });
    }
    cidr(e) {
      return this._addCheck({
        kind: "cidr",
        ...$c.errToObj(e)
      });
    }
    datetime(e) {
      if (typeof e === "string") return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: e
      });
      return this._addCheck({
        kind: "datetime",
        precision: typeof e?.precision === "undefined" ? null : e?.precision,
        offset: e?.offset ?? false,
        local: e?.local ?? false,
        ...$c.errToObj(e?.message)
      });
    }
    date(e) {
      return this._addCheck({
        kind: "date",
        message: e
      });
    }
    time(e) {
      if (typeof e === "string") return this._addCheck({
        kind: "time",
        precision: null,
        message: e
      });
      return this._addCheck({
        kind: "time",
        precision: typeof e?.precision === "undefined" ? null : e?.precision,
        ...$c.errToObj(e?.message)
      });
    }
    duration(e) {
      return this._addCheck({
        kind: "duration",
        ...$c.errToObj(e)
      });
    }
    regex(e, t) {
      return this._addCheck({
        kind: "regex",
        regex: e,
        ...$c.errToObj(t)
      });
    }
    includes(e, t) {
      return this._addCheck({
        kind: "includes",
        value: e,
        position: t?.position,
        ...$c.errToObj(t?.message)
      });
    }
    startsWith(e, t) {
      return this._addCheck({
        kind: "startsWith",
        value: e,
        ...$c.errToObj(t)
      });
    }
    endsWith(e, t) {
      return this._addCheck({
        kind: "endsWith",
        value: e,
        ...$c.errToObj(t)
      });
    }
    min(e, t) {
      return this._addCheck({
        kind: "min",
        value: e,
        ...$c.errToObj(t)
      });
    }
    max(e, t) {
      return this._addCheck({
        kind: "max",
        value: e,
        ...$c.errToObj(t)
      });
    }
    length(e, t) {
      return this._addCheck({
        kind: "length",
        value: e,
        ...$c.errToObj(t)
      });
    }
    nonempty(e) {
      return this.min(1, $c.errToObj(e));
    }
    trim() {
      return new hee({
        ...this._def,
        checks: [...this._def.checks, {
          kind: "trim"
        }]
      });
    }
    toLowerCase() {
      return new hee({
        ...this._def,
        checks: [...this._def.checks, {
          kind: "toLowerCase"
        }]
      });
    }
    toUpperCase() {
      return new hee({
        ...this._def,
        checks: [...this._def.checks, {
          kind: "toUpperCase"
        }]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find(e => e.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find(e => e.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find(e => e.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find(e => e.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find(e => e.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find(e => e.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find(e => e.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find(e => e.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find(e => e.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find(e => e.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find(e => e.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find(e => e.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find(e => e.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find(e => e.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find(e => e.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find(e => e.kind === "base64url");
    }
    get minLength() {
      let e = null;
      for (let t of this._def.checks) if (t.kind === "min") {
        if (e === null || t.value > e) e = t.value;
      }
      return e;
    }
    get maxLength() {
      let e = null;
      for (let t of this._def.checks) if (t.kind === "max") {
        if (e === null || t.value < e) e = t.value;
      }
      return e;
    }
  };
  hee.create = e => new hee({
    checks: [],
    typeName: Ii.ZodString,
    coerce: e?.coerce ?? false,
    ...Hf(e)
  });
  _we = class _we extends Lm {
    constructor() {
      super(...arguments);
      this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
    }
    _parse(e) {
      if (this._def.coerce) e.data = Number(e.data);
      if (this._getType(e) !== ta.number) {
        let o = this._getOrReturnCtx(e);
        return Oa(o, {
          code: yi.invalid_type,
          expected: ta.number,
          received: o.parsedType
        }), hd;
      }
      let n = void 0,
        r = new CO();
      for (let o of this._def.checks) if (o.kind === "int") {
        if (!wg.isInteger(e.data)) n = this._getOrReturnCtx(e, n), Oa(n, {
          code: yi.invalid_type,
          expected: "integer",
          received: "float",
          message: o.message
        }), r.dirty();
      } else if (o.kind === "min") {
        if (o.inclusive ? e.data < o.value : e.data <= o.value) n = this._getOrReturnCtx(e, n), Oa(n, {
          code: yi.too_small,
          minimum: o.value,
          type: "number",
          inclusive: o.inclusive,
          exact: false,
          message: o.message
        }), r.dirty();
      } else if (o.kind === "max") {
        if (o.inclusive ? e.data > o.value : e.data >= o.value) n = this._getOrReturnCtx(e, n), Oa(n, {
          code: yi.too_big,
          maximum: o.value,
          type: "number",
          inclusive: o.inclusive,
          exact: false,
          message: o.message
        }), r.dirty();
      } else if (o.kind === "multipleOf") {
        if (hXc(e.data, o.value) !== 0) n = this._getOrReturnCtx(e, n), Oa(n, {
          code: yi.not_multiple_of,
          multipleOf: o.value,
          message: o.message
        }), r.dirty();
      } else if (o.kind === "finite") {
        if (!Number.isFinite(e.data)) n = this._getOrReturnCtx(e, n), Oa(n, {
          code: yi.not_finite,
          message: o.message
        }), r.dirty();
      } else wg.assertNever(o);
      return {
        status: r.value,
        value: e.data
      };
    }
    gte(e, t) {
      return this.setLimit("min", e, true, $c.toString(t));
    }
    gt(e, t) {
      return this.setLimit("min", e, false, $c.toString(t));
    }
    lte(e, t) {
      return this.setLimit("max", e, true, $c.toString(t));
    }
    lt(e, t) {
      return this.setLimit("max", e, false, $c.toString(t));
    }
    setLimit(e, t, n, r) {
      return new _we({
        ...this._def,
        checks: [...this._def.checks, {
          kind: e,
          value: t,
          inclusive: n,
          message: $c.toString(r)
        }]
      });
    }
    _addCheck(e) {
      return new _we({
        ...this._def,
        checks: [...this._def.checks, e]
      });
    }
    int(e) {
      return this._addCheck({
        kind: "int",
        message: $c.toString(e)
      });
    }
    positive(e) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: $c.toString(e)
      });
    }
    negative(e) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: $c.toString(e)
      });
    }
    nonpositive(e) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: $c.toString(e)
      });
    }
    nonnegative(e) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: $c.toString(e)
      });
    }
    multipleOf(e, t) {
      return this._addCheck({
        kind: "multipleOf",
        value: e,
        message: $c.toString(t)
      });
    }
    finite(e) {
      return this._addCheck({
        kind: "finite",
        message: $c.toString(e)
      });
    }
    safe(e) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: $c.toString(e)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: $c.toString(e)
      });
    }
    get minValue() {
      let e = null;
      for (let t of this._def.checks) if (t.kind === "min") {
        if (e === null || t.value > e) e = t.value;
      }
      return e;
    }
    get maxValue() {
      let e = null;
      for (let t of this._def.checks) if (t.kind === "max") {
        if (e === null || t.value < e) e = t.value;
      }
      return e;
    }
    get isInt() {
      return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && wg.isInteger(e.value));
    }
    get isFinite() {
      let e = null,
        t = null;
      for (let n of this._def.checks) if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return true;else if (n.kind === "min") {
        if (t === null || n.value > t) t = n.value;
      } else if (n.kind === "max") {
        if (e === null || n.value < e) e = n.value;
      }
      return Number.isFinite(t) && Number.isFinite(e);
    }
  };
  _we.create = e => new _we({
    checks: [],
    typeName: Ii.ZodNumber,
    coerce: e?.coerce || false,
    ...Hf(e)
  });
  bwe = class bwe extends Lm {
    constructor() {
      super(...arguments);
      this.min = this.gte, this.max = this.lte;
    }
    _parse(e) {
      if (this._def.coerce) try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
      if (this._getType(e) !== ta.bigint) return this._getInvalidInput(e);
      let n = void 0,
        r = new CO();
      for (let o of this._def.checks) if (o.kind === "min") {
        if (o.inclusive ? e.data < o.value : e.data <= o.value) n = this._getOrReturnCtx(e, n), Oa(n, {
          code: yi.too_small,
          type: "bigint",
          minimum: o.value,
          inclusive: o.inclusive,
          message: o.message
        }), r.dirty();
      } else if (o.kind === "max") {
        if (o.inclusive ? e.data > o.value : e.data >= o.value) n = this._getOrReturnCtx(e, n), Oa(n, {
          code: yi.too_big,
          type: "bigint",
          maximum: o.value,
          inclusive: o.inclusive,
          message: o.message
        }), r.dirty();
      } else if (o.kind === "multipleOf") {
        if (e.data % o.value !== BigInt(0)) n = this._getOrReturnCtx(e, n), Oa(n, {
          code: yi.not_multiple_of,
          multipleOf: o.value,
          message: o.message
        }), r.dirty();
      } else wg.assertNever(o);
      return {
        status: r.value,
        value: e.data
      };
    }
    _getInvalidInput(e) {
      let t = this._getOrReturnCtx(e);
      return Oa(t, {
        code: yi.invalid_type,
        expected: ta.bigint,
        received: t.parsedType
      }), hd;
    }
    gte(e, t) {
      return this.setLimit("min", e, true, $c.toString(t));
    }
    gt(e, t) {
      return this.setLimit("min", e, false, $c.toString(t));
    }
    lte(e, t) {
      return this.setLimit("max", e, true, $c.toString(t));
    }
    lt(e, t) {
      return this.setLimit("max", e, false, $c.toString(t));
    }
    setLimit(e, t, n, r) {
      return new bwe({
        ...this._def,
        checks: [...this._def.checks, {
          kind: e,
          value: t,
          inclusive: n,
          message: $c.toString(r)
        }]
      });
    }
    _addCheck(e) {
      return new bwe({
        ...this._def,
        checks: [...this._def.checks, e]
      });
    }
    positive(e) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: $c.toString(e)
      });
    }
    negative(e) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: $c.toString(e)
      });
    }
    nonpositive(e) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: $c.toString(e)
      });
    }
    nonnegative(e) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: $c.toString(e)
      });
    }
    multipleOf(e, t) {
      return this._addCheck({
        kind: "multipleOf",
        value: e,
        message: $c.toString(t)
      });
    }
    get minValue() {
      let e = null;
      for (let t of this._def.checks) if (t.kind === "min") {
        if (e === null || t.value > e) e = t.value;
      }
      return e;
    }
    get maxValue() {
      let e = null;
      for (let t of this._def.checks) if (t.kind === "max") {
        if (e === null || t.value < e) e = t.value;
      }
      return e;
    }
  };
  bwe.create = e => new bwe({
    checks: [],
    typeName: Ii.ZodBigInt,
    coerce: e?.coerce ?? false,
    ...Hf(e)
  });
  iQe = class iQe extends Lm {
    _parse(e) {
      if (this._def.coerce) e.data = Boolean(e.data);
      if (this._getType(e) !== ta.boolean) {
        let n = this._getOrReturnCtx(e);
        return Oa(n, {
          code: yi.invalid_type,
          expected: ta.boolean,
          received: n.parsedType
        }), hd;
      }
      return EB(e.data);
    }
  };
  iQe.create = e => new iQe({
    typeName: Ii.ZodBoolean,
    coerce: e?.coerce || false,
    ...Hf(e)
  });
  xUe = class xUe extends Lm {
    _parse(e) {
      if (this._def.coerce) e.data = new Date(e.data);
      if (this._getType(e) !== ta.date) {
        let o = this._getOrReturnCtx(e);
        return Oa(o, {
          code: yi.invalid_type,
          expected: ta.date,
          received: o.parsedType
        }), hd;
      }
      if (Number.isNaN(e.data.getTime())) {
        let o = this._getOrReturnCtx(e);
        return Oa(o, {
          code: yi.invalid_date
        }), hd;
      }
      let n = new CO(),
        r = void 0;
      for (let o of this._def.checks) if (o.kind === "min") {
        if (e.data.getTime() < o.value) r = this._getOrReturnCtx(e, r), Oa(r, {
          code: yi.too_small,
          message: o.message,
          inclusive: true,
          exact: false,
          minimum: o.value,
          type: "date"
        }), n.dirty();
      } else if (o.kind === "max") {
        if (e.data.getTime() > o.value) r = this._getOrReturnCtx(e, r), Oa(r, {
          code: yi.too_big,
          message: o.message,
          inclusive: true,
          exact: false,
          maximum: o.value,
          type: "date"
        }), n.dirty();
      } else wg.assertNever(o);
      return {
        status: n.value,
        value: new Date(e.data.getTime())
      };
    }
    _addCheck(e) {
      return new xUe({
        ...this._def,
        checks: [...this._def.checks, e]
      });
    }
    min(e, t) {
      return this._addCheck({
        kind: "min",
        value: e.getTime(),
        message: $c.toString(t)
      });
    }
    max(e, t) {
      return this._addCheck({
        kind: "max",
        value: e.getTime(),
        message: $c.toString(t)
      });
    }
    get minDate() {
      let e = null;
      for (let t of this._def.checks) if (t.kind === "min") {
        if (e === null || t.value > e) e = t.value;
      }
      return e != null ? new Date(e) : null;
    }
    get maxDate() {
      let e = null;
      for (let t of this._def.checks) if (t.kind === "max") {
        if (e === null || t.value < e) e = t.value;
      }
      return e != null ? new Date(e) : null;
    }
  };
  xUe.create = e => new xUe({
    checks: [],
    coerce: e?.coerce || false,
    typeName: Ii.ZodDate,
    ...Hf(e)
  });
  lxt = class lxt extends Lm {
    _parse(e) {
      if (this._getType(e) !== ta.symbol) {
        let n = this._getOrReturnCtx(e);
        return Oa(n, {
          code: yi.invalid_type,
          expected: ta.symbol,
          received: n.parsedType
        }), hd;
      }
      return EB(e.data);
    }
  };
  lxt.create = e => new lxt({
    typeName: Ii.ZodSymbol,
    ...Hf(e)
  });
  aQe = class aQe extends Lm {
    _parse(e) {
      if (this._getType(e) !== ta.undefined) {
        let n = this._getOrReturnCtx(e);
        return Oa(n, {
          code: yi.invalid_type,
          expected: ta.undefined,
          received: n.parsedType
        }), hd;
      }
      return EB(e.data);
    }
  };
  aQe.create = e => new aQe({
    typeName: Ii.ZodUndefined,
    ...Hf(e)
  });
  lQe = class lQe extends Lm {
    _parse(e) {
      if (this._getType(e) !== ta.null) {
        let n = this._getOrReturnCtx(e);
        return Oa(n, {
          code: yi.invalid_type,
          expected: ta.null,
          received: n.parsedType
        }), hd;
      }
      return EB(e.data);
    }
  };
  lQe.create = e => new lQe({
    typeName: Ii.ZodNull,
    ...Hf(e)
  });
  kUe = class kUe extends Lm {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(e) {
      return EB(e.data);
    }
  };
  kUe.create = e => new kUe({
    typeName: Ii.ZodAny,
    ...Hf(e)
  });
  ywe = class ywe extends Lm {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(e) {
      return EB(e.data);
    }
  };
  ywe.create = e => new ywe({
    typeName: Ii.ZodUnknown,
    ...Hf(e)
  });
  aae = class aae extends Lm {
    _parse(e) {
      let t = this._getOrReturnCtx(e);
      return Oa(t, {
        code: yi.invalid_type,
        expected: ta.never,
        received: t.parsedType
      }), hd;
    }
  };
  aae.create = e => new aae({
    typeName: Ii.ZodNever,
    ...Hf(e)
  });
  cxt = class cxt extends Lm {
    _parse(e) {
      if (this._getType(e) !== ta.undefined) {
        let n = this._getOrReturnCtx(e);
        return Oa(n, {
          code: yi.invalid_type,
          expected: ta.void,
          received: n.parsedType
        }), hd;
      }
      return EB(e.data);
    }
  };
  cxt.create = e => new cxt({
    typeName: Ii.ZodVoid,
    ...Hf(e)
  });
  yee = class yee extends Lm {
    _parse(e) {
      let {
          ctx: t,
          status: n
        } = this._processInputParams(e),
        r = this._def;
      if (t.parsedType !== ta.array) return Oa(t, {
        code: yi.invalid_type,
        expected: ta.array,
        received: t.parsedType
      }), hd;
      if (r.exactLength !== null) {
        let s = t.data.length > r.exactLength.value,
          i = t.data.length < r.exactLength.value;
        if (s || i) Oa(t, {
          code: s ? yi.too_big : yi.too_small,
          minimum: i ? r.exactLength.value : void 0,
          maximum: s ? r.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: r.exactLength.message
        }), n.dirty();
      }
      if (r.minLength !== null) {
        if (t.data.length < r.minLength.value) Oa(t, {
          code: yi.too_small,
          minimum: r.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: r.minLength.message
        }), n.dirty();
      }
      if (r.maxLength !== null) {
        if (t.data.length > r.maxLength.value) Oa(t, {
          code: yi.too_big,
          maximum: r.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: r.maxLength.message
        }), n.dirty();
      }
      if (t.common.async) return Promise.all([...t.data].map((s, i) => r.type._parseAsync(new _ee(t, s, t.path, i)))).then(s => CO.mergeArray(n, s));
      let o = [...t.data].map((s, i) => r.type._parseSync(new _ee(t, s, t.path, i)));
      return CO.mergeArray(n, o);
    }
    get element() {
      return this._def.type;
    }
    min(e, t) {
      return new yee({
        ...this._def,
        minLength: {
          value: e,
          message: $c.toString(t)
        }
      });
    }
    max(e, t) {
      return new yee({
        ...this._def,
        maxLength: {
          value: e,
          message: $c.toString(t)
        }
      });
    }
    length(e, t) {
      return new yee({
        ...this._def,
        exactLength: {
          value: e,
          message: $c.toString(t)
        }
      });
    }
    nonempty(e) {
      return this.min(1, e);
    }
  };
  yee.create = (e, t) => new yee({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Ii.ZodArray,
    ...Hf(t)
  });
  qC = class qC extends Lm {
    constructor() {
      super(...arguments);
      this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null) return this._cached;
      let e = this._def.shape(),
        t = wg.objectKeys(e);
      return this._cached = {
        shape: e,
        keys: t
      }, this._cached;
    }
    _parse(e) {
      if (this._getType(e) !== ta.object) {
        let l = this._getOrReturnCtx(e);
        return Oa(l, {
          code: yi.invalid_type,
          expected: ta.object,
          received: l.parsedType
        }), hd;
      }
      let {
          status: n,
          ctx: r
        } = this._processInputParams(e),
        {
          shape: o,
          keys: s
        } = this._getCached(),
        i = [];
      if (!(this._def.catchall instanceof aae && this._def.unknownKeys === "strip")) {
        for (let l in r.data) if (!s.includes(l)) i.push(l);
      }
      let a = [];
      for (let l of s) {
        let c = o[l],
          u = r.data[l];
        a.push({
          key: {
            status: "valid",
            value: l
          },
          value: c._parse(new _ee(r, u, r.path, l)),
          alwaysSet: l in r.data
        });
      }
      if (this._def.catchall instanceof aae) {
        let l = this._def.unknownKeys;
        if (l === "passthrough") for (let c of i) a.push({
          key: {
            status: "valid",
            value: c
          },
          value: {
            status: "valid",
            value: r.data[c]
          }
        });else if (l === "strict") {
          if (i.length > 0) Oa(r, {
            code: yi.unrecognized_keys,
            keys: i
          }), n.dirty();
        } else if (l === "strip") ;else throw Error("Internal ZodObject error: invalid unknownKeys value.");
      } else {
        let l = this._def.catchall;
        for (let c of i) {
          let u = r.data[c];
          a.push({
            key: {
              status: "valid",
              value: c
            },
            value: l._parse(new _ee(r, u, r.path, c)),
            alwaysSet: c in r.data
          });
        }
      }
      if (r.common.async) return Promise.resolve().then(async () => {
        let l = [];
        for (let c of a) {
          let u = await c.key,
            d = await c.value;
          l.push({
            key: u,
            value: d,
            alwaysSet: c.alwaysSet
          });
        }
        return l;
      }).then(l => CO.mergeObjectSync(n, l));else return CO.mergeObjectSync(n, a);
    }
    get shape() {
      return this._def.shape();
    }
    strict(e) {
      return $c.errToObj, new qC({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0 ? {
          errorMap: (t, n) => {
            let r = this._def.errorMap?.(t, n).message ?? n.defaultError;
            if (t.code === "unrecognized_keys") return {
              message: $c.errToObj(e).message ?? r
            };
            return {
              message: r
            };
          }
        } : {})
      });
    }
    strip() {
      return new qC({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new qC({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    extend(e) {
      return new qC({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...e
        })
      });
    }
    merge(e) {
      return new qC({
        unknownKeys: e._def.unknownKeys,
        catchall: e._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...e._def.shape()
        }),
        typeName: Ii.ZodObject
      });
    }
    setKey(e, t) {
      return this.augment({
        [e]: t
      });
    }
    catchall(e) {
      return new qC({
        ...this._def,
        catchall: e
      });
    }
    pick(e) {
      let t = {};
      for (let n of wg.objectKeys(e)) if (e[n] && this.shape[n]) t[n] = this.shape[n];
      return new qC({
        ...this._def,
        shape: () => t
      });
    }
    omit(e) {
      let t = {};
      for (let n of wg.objectKeys(this.shape)) if (!e[n]) t[n] = this.shape[n];
      return new qC({
        ...this._def,
        shape: () => t
      });
    }
    deepPartial() {
      return oQe(this);
    }
    partial(e) {
      let t = {};
      for (let n of wg.objectKeys(this.shape)) {
        let r = this.shape[n];
        if (e && !e[n]) t[n] = r;else t[n] = r.optional();
      }
      return new qC({
        ...this._def,
        shape: () => t
      });
    }
    required(e) {
      let t = {};
      for (let n of wg.objectKeys(this.shape)) if (e && !e[n]) t[n] = this.shape[n];else {
        let o = this.shape[n];
        while (o instanceof FV) o = o._def.innerType;
        t[n] = o;
      }
      return new qC({
        ...this._def,
        shape: () => t
      });
    }
    keyof() {
      return oas(wg.objectKeys(this.shape));
    }
  };
  qC.create = (e, t) => new qC({
    shape: () => e,
    unknownKeys: "strip",
    catchall: aae.create(),
    typeName: Ii.ZodObject,
    ...Hf(t)
  });
  qC.strictCreate = (e, t) => new qC({
    shape: () => e,
    unknownKeys: "strict",
    catchall: aae.create(),
    typeName: Ii.ZodObject,
    ...Hf(t)
  });
  qC.lazycreate = (e, t) => new qC({
    shape: e,
    unknownKeys: "strip",
    catchall: aae.create(),
    typeName: Ii.ZodObject,
    ...Hf(t)
  });
  cQe = class cQe extends Lm {
    _parse(e) {
      let {
          ctx: t
        } = this._processInputParams(e),
        n = this._def.options;
      function r(o) {
        for (let i of o) if (i.result.status === "valid") return i.result;
        for (let i of o) if (i.result.status === "dirty") return t.common.issues.push(...i.ctx.common.issues), i.result;
        let s = o.map(i => new iG(i.ctx.common.issues));
        return Oa(t, {
          code: yi.invalid_union,
          unionErrors: s
        }), hd;
      }
      if (t.common.async) return Promise.all(n.map(async o => {
        let s = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await o._parseAsync({
            data: t.data,
            path: t.path,
            parent: s
          }),
          ctx: s
        };
      })).then(r);else {
        let o = void 0,
          s = [];
        for (let a of n) {
          let l = {
              ...t,
              common: {
                ...t.common,
                issues: []
              },
              parent: null
            },
            c = a._parseSync({
              data: t.data,
              path: t.path,
              parent: l
            });
          if (c.status === "valid") return c;else if (c.status === "dirty" && !o) o = {
            result: c,
            ctx: l
          };
          if (l.common.issues.length) s.push(l.common.issues);
        }
        if (o) return t.common.issues.push(...o.ctx.common.issues), o.result;
        let i = s.map(a => new iG(a));
        return Oa(t, {
          code: yi.invalid_union,
          unionErrors: i
        }), hd;
      }
    }
    get options() {
      return this._def.options;
    }
  };
  cQe.create = (e, t) => new cQe({
    options: e,
    typeName: Ii.ZodUnion,
    ...Hf(t)
  });
  lan = class lan extends Lm {
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      if (t.parsedType !== ta.object) return Oa(t, {
        code: yi.invalid_type,
        expected: ta.object,
        received: t.parsedType
      }), hd;
      let n = this.discriminator,
        r = t.data[n],
        o = this.optionsMap.get(r);
      if (!o) return Oa(t, {
        code: yi.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [n]
      }), hd;
      if (t.common.async) return o._parseAsync({
        data: t.data,
        path: t.path,
        parent: t
      });else return o._parseSync({
        data: t.data,
        path: t.path,
        parent: t
      });
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(e, t, n) {
      let r = new Map();
      for (let o of t) {
        let s = ehe(o.shape[e]);
        if (!s.length) throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
        for (let i of s) {
          if (r.has(i)) throw Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
          r.set(i, o);
        }
      }
      return new lan({
        typeName: Ii.ZodDiscriminatedUnion,
        discriminator: e,
        options: t,
        optionsMap: r,
        ...Hf(n)
      });
    }
  };
  uQe = class uQe extends Lm {
    _parse(e) {
      let {
          status: t,
          ctx: n
        } = this._processInputParams(e),
        r = (o, s) => {
          if (ian(o) || ian(s)) return hd;
          let i = AAr(o.value, s.value);
          if (!i.valid) return Oa(n, {
            code: yi.invalid_intersection_types
          }), hd;
          if (aan(o) || aan(s)) t.dirty();
          return {
            status: t.value,
            value: i.data
          };
        };
      if (n.common.async) return Promise.all([this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }), this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })]).then(([o, s]) => r(o, s));else return r(this._def.left._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      }), this._def.right._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      }));
    }
  };
  uQe.create = (e, t, n) => new uQe({
    left: e,
    right: t,
    typeName: Ii.ZodIntersection,
    ...Hf(n)
  });
  lae = class lae extends Lm {
    _parse(e) {
      let {
        status: t,
        ctx: n
      } = this._processInputParams(e);
      if (n.parsedType !== ta.array) return Oa(n, {
        code: yi.invalid_type,
        expected: ta.array,
        received: n.parsedType
      }), hd;
      if (n.data.length < this._def.items.length) return Oa(n, {
        code: yi.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      }), hd;
      if (!this._def.rest && n.data.length > this._def.items.length) Oa(n, {
        code: yi.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      }), t.dirty();
      let o = [...n.data].map((s, i) => {
        let a = this._def.items[i] || this._def.rest;
        if (!a) return null;
        return a._parse(new _ee(n, s, n.path, i));
      }).filter(s => !!s);
      if (n.common.async) return Promise.all(o).then(s => CO.mergeArray(t, s));else return CO.mergeArray(t, o);
    }
    get items() {
      return this._def.items;
    }
    rest(e) {
      return new lae({
        ...this._def,
        rest: e
      });
    }
  };
  lae.create = (e, t) => {
    if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new lae({
      items: e,
      typeName: Ii.ZodTuple,
      rest: null,
      ...Hf(t)
    });
  };
  uxt = class uxt extends Lm {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let {
        status: t,
        ctx: n
      } = this._processInputParams(e);
      if (n.parsedType !== ta.object) return Oa(n, {
        code: yi.invalid_type,
        expected: ta.object,
        received: n.parsedType
      }), hd;
      let r = [],
        o = this._def.keyType,
        s = this._def.valueType;
      for (let i in n.data) r.push({
        key: o._parse(new _ee(n, i, n.path, i)),
        value: s._parse(new _ee(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
      if (n.common.async) return CO.mergeObjectAsync(t, r);else return CO.mergeObjectSync(t, r);
    }
    get element() {
      return this._def.valueType;
    }
    static create(e, t, n) {
      if (t instanceof Lm) return new uxt({
        keyType: e,
        valueType: t,
        typeName: Ii.ZodRecord,
        ...Hf(n)
      });
      return new uxt({
        keyType: hee.create(),
        valueType: e,
        typeName: Ii.ZodRecord,
        ...Hf(t)
      });
    }
  };
  dxt = class dxt extends Lm {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let {
        status: t,
        ctx: n
      } = this._processInputParams(e);
      if (n.parsedType !== ta.map) return Oa(n, {
        code: yi.invalid_type,
        expected: ta.map,
        received: n.parsedType
      }), hd;
      let r = this._def.keyType,
        o = this._def.valueType,
        s = [...n.data.entries()].map(([i, a], l) => ({
          key: r._parse(new _ee(n, i, n.path, [l, "key"])),
          value: o._parse(new _ee(n, a, n.path, [l, "value"]))
        }));
      if (n.common.async) {
        let i = new Map();
        return Promise.resolve().then(async () => {
          for (let a of s) {
            let l = await a.key,
              c = await a.value;
            if (l.status === "aborted" || c.status === "aborted") return hd;
            if (l.status === "dirty" || c.status === "dirty") t.dirty();
            i.set(l.value, c.value);
          }
          return {
            status: t.value,
            value: i
          };
        });
      } else {
        let i = new Map();
        for (let a of s) {
          let {
            key: l,
            value: c
          } = a;
          if (l.status === "aborted" || c.status === "aborted") return hd;
          if (l.status === "dirty" || c.status === "dirty") t.dirty();
          i.set(l.value, c.value);
        }
        return {
          status: t.value,
          value: i
        };
      }
    }
  };
  dxt.create = (e, t, n) => new dxt({
    valueType: t,
    keyType: e,
    typeName: Ii.ZodMap,
    ...Hf(n)
  });
  RUe = class RUe extends Lm {
    _parse(e) {
      let {
        status: t,
        ctx: n
      } = this._processInputParams(e);
      if (n.parsedType !== ta.set) return Oa(n, {
        code: yi.invalid_type,
        expected: ta.set,
        received: n.parsedType
      }), hd;
      let r = this._def;
      if (r.minSize !== null) {
        if (n.data.size < r.minSize.value) Oa(n, {
          code: yi.too_small,
          minimum: r.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: r.minSize.message
        }), t.dirty();
      }
      if (r.maxSize !== null) {
        if (n.data.size > r.maxSize.value) Oa(n, {
          code: yi.too_big,
          maximum: r.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: r.maxSize.message
        }), t.dirty();
      }
      let o = this._def.valueType;
      function s(a) {
        let l = new Set();
        for (let c of a) {
          if (c.status === "aborted") return hd;
          if (c.status === "dirty") t.dirty();
          l.add(c.value);
        }
        return {
          status: t.value,
          value: l
        };
      }
      let i = [...n.data.values()].map((a, l) => o._parse(new _ee(n, a, n.path, l)));
      if (n.common.async) return Promise.all(i).then(a => s(a));else return s(i);
    }
    min(e, t) {
      return new RUe({
        ...this._def,
        minSize: {
          value: e,
          message: $c.toString(t)
        }
      });
    }
    max(e, t) {
      return new RUe({
        ...this._def,
        maxSize: {
          value: e,
          message: $c.toString(t)
        }
      });
    }
    size(e, t) {
      return this.min(e, t).max(e, t);
    }
    nonempty(e) {
      return this.min(1, e);
    }
  };
  RUe.create = (e, t) => new RUe({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: Ii.ZodSet,
    ...Hf(t)
  });
  sQe = class sQe extends Lm {
    constructor() {
      super(...arguments);
      this.validate = this.implement;
    }
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      if (t.parsedType !== ta.function) return Oa(t, {
        code: yi.invalid_type,
        expected: ta.function,
        received: t.parsedType
      }), hd;
      function n(i, a) {
        return axt({
          data: i,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, nQe(), Zge].filter(l => !!l),
          issueData: {
            code: yi.invalid_arguments,
            argumentsError: a
          }
        });
      }
      function r(i, a) {
        return axt({
          data: i,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, nQe(), Zge].filter(l => !!l),
          issueData: {
            code: yi.invalid_return_type,
            returnTypeError: a
          }
        });
      }
      let o = {
          errorMap: t.common.contextualErrorMap
        },
        s = t.data;
      if (this._def.returns instanceof LUe) {
        let i = this;
        return EB(async function (...a) {
          let l = new iG([]),
            c = await i._def.args.parseAsync(a, o).catch(p => {
              throw l.addIssue(n(a, p)), l;
            }),
            u = await Reflect.apply(s, this, c);
          return await i._def.returns._def.type.parseAsync(u, o).catch(p => {
            throw l.addIssue(r(u, p)), l;
          });
        });
      } else {
        let i = this;
        return EB(function (...a) {
          let l = i._def.args.safeParse(a, o);
          if (!l.success) throw new iG([n(a, l.error)]);
          let c = Reflect.apply(s, this, l.data),
            u = i._def.returns.safeParse(c, o);
          if (!u.success) throw new iG([r(c, u.error)]);
          return u.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...e) {
      return new sQe({
        ...this._def,
        args: lae.create(e).rest(ywe.create())
      });
    }
    returns(e) {
      return new sQe({
        ...this._def,
        returns: e
      });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(e, t, n) {
      return new sQe({
        args: e ? e : lae.create([]).rest(ywe.create()),
        returns: t || ywe.create(),
        typeName: Ii.ZodFunction,
        ...Hf(n)
      });
    }
  };
  dQe = class dQe extends Lm {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      return this._def.getter()._parse({
        data: t.data,
        path: t.path,
        parent: t
      });
    }
  };
  dQe.create = (e, t) => new dQe({
    getter: e,
    typeName: Ii.ZodLazy,
    ...Hf(t)
  });
  pQe = class pQe extends Lm {
    _parse(e) {
      if (e.data !== this._def.value) {
        let t = this._getOrReturnCtx(e);
        return Oa(t, {
          received: t.data,
          code: yi.invalid_literal,
          expected: this._def.value
        }), hd;
      }
      return {
        status: "valid",
        value: e.data
      };
    }
    get value() {
      return this._def.value;
    }
  };
  pQe.create = (e, t) => new pQe({
    value: e,
    typeName: Ii.ZodLiteral,
    ...Hf(t)
  });
  Swe = class Swe extends Lm {
    _parse(e) {
      if (typeof e.data !== "string") {
        let t = this._getOrReturnCtx(e),
          n = this._def.values;
        return Oa(t, {
          expected: wg.joinValues(n),
          received: t.parsedType,
          code: yi.invalid_type
        }), hd;
      }
      if (!this._cache) this._cache = new Set(this._def.values);
      if (!this._cache.has(e.data)) {
        let t = this._getOrReturnCtx(e),
          n = this._def.values;
        return Oa(t, {
          received: t.data,
          code: yi.invalid_enum_value,
          options: n
        }), hd;
      }
      return EB(e.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      let e = {};
      for (let t of this._def.values) e[t] = t;
      return e;
    }
    get Values() {
      let e = {};
      for (let t of this._def.values) e[t] = t;
      return e;
    }
    get Enum() {
      let e = {};
      for (let t of this._def.values) e[t] = t;
      return e;
    }
    extract(e, t = this._def) {
      return Swe.create(e, {
        ...this._def,
        ...t
      });
    }
    exclude(e, t = this._def) {
      return Swe.create(this.options.filter(n => !e.includes(n)), {
        ...this._def,
        ...t
      });
    }
  };
  Swe.create = oas;
  fQe = class fQe extends Lm {
    _parse(e) {
      let t = wg.getValidEnumValues(this._def.values),
        n = this._getOrReturnCtx(e);
      if (n.parsedType !== ta.string && n.parsedType !== ta.number) {
        let r = wg.objectValues(t);
        return Oa(n, {
          expected: wg.joinValues(r),
          received: n.parsedType,
          code: yi.invalid_type
        }), hd;
      }
      if (!this._cache) this._cache = new Set(wg.getValidEnumValues(this._def.values));
      if (!this._cache.has(e.data)) {
        let r = wg.objectValues(t);
        return Oa(n, {
          received: n.data,
          code: yi.invalid_enum_value,
          options: r
        }), hd;
      }
      return EB(e.data);
    }
    get enum() {
      return this._def.values;
    }
  };
  fQe.create = (e, t) => new fQe({
    values: e,
    typeName: Ii.ZodNativeEnum,
    ...Hf(t)
  });
  LUe = class LUe extends Lm {
    unwrap() {
      return this._def.type;
    }
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      if (t.parsedType !== ta.promise && t.common.async === false) return Oa(t, {
        code: yi.invalid_type,
        expected: ta.promise,
        received: t.parsedType
      }), hd;
      let n = t.parsedType === ta.promise ? t.data : Promise.resolve(t.data);
      return EB(n.then(r => this._def.type.parseAsync(r, {
        path: t.path,
        errorMap: t.common.contextualErrorMap
      })));
    }
  };
  LUe.create = (e, t) => new LUe({
    type: e,
    typeName: Ii.ZodPromise,
    ...Hf(t)
  });
  bee = class bee extends Lm {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === Ii.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(e) {
      let {
          status: t,
          ctx: n
        } = this._processInputParams(e),
        r = this._def.effect || null,
        o = {
          addIssue: s => {
            if (Oa(n, s), s.fatal) t.abort();else t.dirty();
          },
          get path() {
            return n.path;
          }
        };
      if (o.addIssue = o.addIssue.bind(o), r.type === "preprocess") {
        let s = r.transform(n.data, o);
        if (n.common.async) return Promise.resolve(s).then(async i => {
          if (t.value === "aborted") return hd;
          let a = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          if (a.status === "aborted") return hd;
          if (a.status === "dirty") return IUe(a.value);
          if (t.value === "dirty") return IUe(a.value);
          return a;
        });else {
          if (t.value === "aborted") return hd;
          let i = this._def.schema._parseSync({
            data: s,
            path: n.path,
            parent: n
          });
          if (i.status === "aborted") return hd;
          if (i.status === "dirty") return IUe(i.value);
          if (t.value === "dirty") return IUe(i.value);
          return i;
        }
      }
      if (r.type === "refinement") {
        let s = i => {
          let a = r.refinement(i, o);
          if (n.common.async) return Promise.resolve(a);
          if (a instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          return i;
        };
        if (n.common.async === false) {
          let i = this._def.schema._parseSync({
            data: n.data,
            path: n.path,
            parent: n
          });
          if (i.status === "aborted") return hd;
          if (i.status === "dirty") t.dirty();
          return s(i.value), {
            status: t.value,
            value: i.value
          };
        } else return this._def.schema._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        }).then(i => {
          if (i.status === "aborted") return hd;
          if (i.status === "dirty") t.dirty();
          return s(i.value).then(() => ({
            status: t.value,
            value: i.value
          }));
        });
      }
      if (r.type === "transform") if (n.common.async === false) {
        let s = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!hwe(s)) return hd;
        let i = r.transform(s.value, o);
        if (i instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return {
          status: t.value,
          value: i
        };
      } else return this._def.schema._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }).then(s => {
        if (!hwe(s)) return hd;
        return Promise.resolve(r.transform(s.value, o)).then(i => ({
          status: t.value,
          value: i
        }));
      });
      wg.assertNever(r);
    }
  };
  bee.create = (e, t, n) => new bee({
    schema: e,
    typeName: Ii.ZodEffects,
    effect: t,
    ...Hf(n)
  });
  bee.createWithPreprocess = (e, t, n) => new bee({
    schema: t,
    effect: {
      type: "preprocess",
      transform: e
    },
    typeName: Ii.ZodEffects,
    ...Hf(n)
  });
  FV = class FV extends Lm {
    _parse(e) {
      if (this._getType(e) === ta.undefined) return EB(void 0);
      return this._def.innerType._parse(e);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  FV.create = (e, t) => new FV({
    innerType: e,
    typeName: Ii.ZodOptional,
    ...Hf(t)
  });
  the = class the extends Lm {
    _parse(e) {
      if (this._getType(e) === ta.null) return EB(null);
      return this._def.innerType._parse(e);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  the.create = (e, t) => new the({
    innerType: e,
    typeName: Ii.ZodNullable,
    ...Hf(t)
  });
  mQe = class mQe extends Lm {
    _parse(e) {
      let {
          ctx: t
        } = this._processInputParams(e),
        n = t.data;
      if (t.parsedType === ta.undefined) n = this._def.defaultValue();
      return this._def.innerType._parse({
        data: n,
        path: t.path,
        parent: t
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  };
  mQe.create = (e, t) => new mQe({
    innerType: e,
    typeName: Ii.ZodDefault,
    defaultValue: typeof t.default === "function" ? t.default : () => t.default,
    ...Hf(t)
  });
  gQe = class gQe extends Lm {
    _parse(e) {
      let {
          ctx: t
        } = this._processInputParams(e),
        n = {
          ...t,
          common: {
            ...t.common,
            issues: []
          }
        },
        r = this._def.innerType._parse({
          data: n.data,
          path: n.path,
          parent: {
            ...n
          }
        });
      if (rQe(r)) return r.then(o => ({
        status: "valid",
        value: o.status === "valid" ? o.value : this._def.catchValue({
          get error() {
            return new iG(n.common.issues);
          },
          input: n.data
        })
      }));else return {
        status: "valid",
        value: r.status === "valid" ? r.value : this._def.catchValue({
          get error() {
            return new iG(n.common.issues);
          },
          input: n.data
        })
      };
    }
    removeCatch() {
      return this._def.innerType;
    }
  };
  gQe.create = (e, t) => new gQe({
    innerType: e,
    typeName: Ii.ZodCatch,
    catchValue: typeof t.catch === "function" ? t.catch : () => t.catch,
    ...Hf(t)
  });
  pxt = class pxt extends Lm {
    _parse(e) {
      if (this._getType(e) !== ta.nan) {
        let n = this._getOrReturnCtx(e);
        return Oa(n, {
          code: yi.invalid_type,
          expected: ta.nan,
          received: n.parsedType
        }), hd;
      }
      return {
        status: "valid",
        value: e.data
      };
    }
  };
  pxt.create = e => new pxt({
    typeName: Ii.ZodNaN,
    ...Hf(e)
  });
  yXc = Symbol("zod_brand");
  can = class can extends Lm {
    _parse(e) {
      let {
          ctx: t
        } = this._processInputParams(e),
        n = t.data;
      return this._def.type._parse({
        data: n,
        path: t.path,
        parent: t
      });
    }
    unwrap() {
      return this._def.type;
    }
  };
  fxt = class fxt extends Lm {
    _parse(e) {
      let {
        status: t,
        ctx: n
      } = this._processInputParams(e);
      if (n.common.async) return (async () => {
        let o = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (o.status === "aborted") return hd;
        if (o.status === "dirty") return t.dirty(), IUe(o.value);else return this._def.out._parseAsync({
          data: o.value,
          path: n.path,
          parent: n
        });
      })();else {
        let r = this._def.in._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (r.status === "aborted") return hd;
        if (r.status === "dirty") return t.dirty(), {
          status: "dirty",
          value: r.value
        };else return this._def.out._parseSync({
          data: r.value,
          path: n.path,
          parent: n
        });
      }
    }
    static create(e, t) {
      return new fxt({
        in: e,
        out: t,
        typeName: Ii.ZodPipeline
      });
    }
  };
  hQe = class hQe extends Lm {
    _parse(e) {
      let t = this._def.innerType._parse(e),
        n = r => {
          if (hwe(r)) r.value = Object.freeze(r.value);
          return r;
        };
      return rQe(t) ? t.then(r => n(r)) : n(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  hQe.create = (e, t) => new hQe({
    innerType: e,
    typeName: Ii.ZodReadonly,
    ...Hf(t)
  });
  _Xc = {
    object: qC.lazycreate
  };
  (function (e) {
    e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
  })(Ii || (Ii = {}));
  ri = hee.create, qK = _we.create, SXc = pxt.create, EXc = bwe.create, iM = iQe.create, AXc = xUe.create, HXc = lxt.create, TXc = aQe.create, vXc = lQe.create, wXc = kUe.create, CXc = ywe.create, IXc = aae.create, xXc = cxt.create, xx = yee.create, W2 = qC.create, jV = qC.strictCreate, DUe = cQe.create, kXc = lan.create, RXc = uQe.create, LXc = lae.create, See = uxt.create, DXc = dxt.create, PXc = RUe.create, MXc = sQe.create, $Xc = dQe.create, OXc = pQe.create, Eee = Swe.create, NXc = fQe.create, BXc = LUe.create, UXc = bee.create, FXc = FV.create, jXc = the.create, GXc = bee.createWithPreprocess, WXc = fxt.create, KXc = {
    string: e => hee.create({
      ...e,
      coerce: true
    }),
    number: e => _we.create({
      ...e,
      coerce: true
    }),
    boolean: e => iQe.create({
      ...e,
      coerce: true
    }),
    bigint: e => bwe.create({
      ...e,
      coerce: true
    }),
    date: e => xUe.create({
      ...e,
      coerce: true
    })
  }, YXc = hd;
});
var dt = {};
_t(dt, {
  void: () => xXc,
  util: () => wg,
  unknown: () => CXc,
  union: () => DUe,
  undefined: () => TXc,
  tuple: () => LXc,
  transformer: () => UXc,
  symbol: () => HXc,
  string: () => ri,
  strictObject: () => jV,
  setErrorMap: () => K7c,
  set: () => PXc,
  record: () => See,
  quotelessJson: () => V7c,
  promise: () => BXc,
  preprocess: () => GXc,
  pipeline: () => WXc,
  ostring: () => qXc,
  optional: () => FXc,
  onumber: () => VXc,
  oboolean: () => zXc,
  objectUtil: () => _Ar,
  object: () => W2,
  number: () => qK,
  nullable: () => jXc,
  null: () => vXc,
  never: () => IXc,
  nativeEnum: () => NXc,
  nan: () => SXc,
  map: () => DXc,
  makeIssue: () => axt,
  literal: () => OXc,
  lazy: () => $Xc,
  late: () => _Xc,
  isValid: () => hwe,
  isDirty: () => aan,
  isAsync: () => rQe,
  isAborted: () => ian,
  intersection: () => RXc,
  instanceof: () => bXc,
  getParsedType: () => iae,
  getErrorMap: () => nQe,
  function: () => MXc,
  enum: () => Eee,
  effect: () => UXc,
  discriminatedUnion: () => kXc,
  defaultErrorMap: () => Zge,
  datetimeRegex: () => ras,
  date: () => AXc,
  custom: () => sas,
  coerce: () => KXc,
  boolean: () => iM,
  bigint: () => EXc,
  array: () => xx,
  any: () => wXc,
  addIssueToContext: () => Oa,
  ZodVoid: () => cxt,
  ZodUnknown: () => ywe,
  ZodUnion: () => cQe,
  ZodUndefined: () => aQe,
  ZodType: () => Lm,
  ZodTuple: () => lae,
  ZodTransformer: () => bee,
  ZodSymbol: () => lxt,
  ZodString: () => hee,
  ZodSet: () => RUe,
  ZodSchema: () => Lm,
  ZodRecord: () => uxt,
  ZodReadonly: () => hQe,
  ZodPromise: () => LUe,
  ZodPipeline: () => fxt,
  ZodParsedType: () => ta,
  ZodOptional: () => FV,
  ZodObject: () => qC,
  ZodNumber: () => _we,
  ZodNullable: () => the,
  ZodNull: () => lQe,
  ZodNever: () => aae,
  ZodNativeEnum: () => fQe,
  ZodNaN: () => pxt,
  ZodMap: () => dxt,
  ZodLiteral: () => pQe,
  ZodLazy: () => dQe,
  ZodIssueCode: () => yi,
  ZodIntersection: () => uQe,
  ZodFunction: () => sQe,
  ZodFirstPartyTypeKind: () => Ii,
  ZodError: () => iG,
  ZodEnum: () => Swe,
  ZodEffects: () => bee,
  ZodDiscriminatedUnion: () => lan,
  ZodDefault: () => mQe,
  ZodDate: () => xUe,
  ZodCatch: () => gQe,
  ZodBranded: () => can,
  ZodBoolean: () => iQe,
  ZodBigInt: () => bwe,
  ZodArray: () => yee,
  ZodAny: () => kUe,
  Schema: () => Lm,
  ParseStatus: () => CO,
  OK: () => EB,
  NEVER: () => YXc,
  INVALID: () => hd,
  EMPTY_PATH: () => Y7c,
  DIRTY: () => IUe,
  BRAND: () => yXc
});