// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IHr
// matched 2.1.88 source: node_modules/zod/v4/core/schemas.js
// class=new  jaccard=0.0357  score=1  fileCov=0.0357
// note: nearest: node_modules/zod/v4/core/schemas.js (0.0357); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var IHr = E(() => {
  CHr = {
    major: 4,
    minor: 0,
    patch: 0
  };
});
function PHr(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
function was(e) {
  if (!San.test(e)) return !1;
  let t = e.replace(/[-_]/g, r => r === "-" ? "+" : "/"),
    n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return PHr(n);
}
function Cas(e, t = null) {
  try {
    let n = e.split(".");
    if (n.length !== 3) return !1;
    let [r] = n;
    if (!r) return !1;
    let o = JSON.parse(atob(r));
    if ("typ" in o && o?.typ !== "JWT") return !1;
    if (!o.alg) return !1;
    if (t && (!("alg" in o) || o.alg !== t)) return !1;
    return !0;
  } catch {
    return !1;
  }
}
function gas(e, t, n) {
  if (e.issues.length) t.issues.push(...aG(n, e.issues));
  t.value[n] = e.value;
}
function wan(e, t, n) {
  if (e.issues.length) t.issues.push(...aG(n, e.issues));
  t.value[n] = e.value;
}
function has(e, t, n, r) {
  if (e.issues.length) {
    if (r[n] === void 0) {
      if (n in r) t.value[n] = void 0;else t.value[n] = e.value;
    } else t.issues.push(...aG(n, e.issues));
  } else if (e.value === void 0) {
    if (n in r) t.value[n] = void 0;
  } else t.value[n] = e.value;
}
function yas(e, t, n, r) {
  for (let o of e) if (o.issues.length === 0) return t.value = o.value, t;
  return t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map(o => o.issues.map(s => GV(s, r, h0())))
  }), t;
}
function xHr(e, t) {
  if (e === t) return {
    valid: !0,
    data: e
  };
  if (e instanceof Date && t instanceof Date && +e === +t) return {
    valid: !0,
    data: e
  };
  if (SQe(e) && SQe(t)) {
    let n = Object.keys(t),
      r = Object.keys(e).filter(s => n.indexOf(s) !== -1),
      o = {
        ...e,
        ...t
      };
    for (let s of r) {
      let i = xHr(e[s], t[s]);
      if (!i.valid) return {
        valid: !1,
        mergeErrorPath: [s, ...i.mergeErrorPath]
      };
      o[s] = i.data;
    }
    return {
      valid: !0,
      data: o
    };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return {
      valid: !1,
      mergeErrorPath: []
    };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let o = e[r],
        s = t[r],
        i = xHr(o, s);
      if (!i.valid) return {
        valid: !1,
        mergeErrorPath: [r, ...i.mergeErrorPath]
      };
      n.push(i.data);
    }
    return {
      valid: !0,
      data: n
    };
  }
  return {
    valid: !1,
    mergeErrorPath: []
  };
}
function _as(e, t, n) {
  if (t.issues.length) e.issues.push(...t.issues);
  if (n.issues.length) e.issues.push(...n.issues);
  if (MUe(e)) return e;
  let r = xHr(t.value, n.value);
  if (!r.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
function Can(e, t, n) {
  if (e.issues.length) t.issues.push(...aG(n, e.issues));
  t.value[n] = e.value;
}
function bas(e, t, n, r, o, s, i) {
  if (e.issues.length) if (Sxt.has(typeof r)) n.issues.push(...aG(r, e.issues));else n.issues.push({
    origin: "map",
    code: "invalid_key",
    input: o,
    inst: s,
    issues: e.issues.map(a => GV(a, i, h0()))
  });
  if (t.issues.length) if (Sxt.has(typeof r)) n.issues.push(...aG(r, t.issues));else n.issues.push({
    origin: "map",
    code: "invalid_element",
    input: o,
    inst: s,
    key: r,
    issues: t.issues.map(a => GV(a, i, h0()))
  });
  n.value.set(e.value, t.value);
}
function Sas(e, t) {
  if (e.issues.length) t.issues.push(...e.issues);
  t.value.add(e.value);
}
function Eas(e, t) {
  if (e.value === void 0) e.value = t.defaultValue;
  return e;
}
function Aas(e, t) {
  if (!e.issues.length && e.value === void 0) e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  });
  return e;
}
function Has(e, t, n) {
  if (MUe(e)) return e;
  return t.out._zod.run({
    value: e.value,
    issues: e.issues
  }, n);
}
function Tas(e) {
  return e.value = Object.freeze(e.value), e;
}
function vas(e, t, n, r) {
  if (!e) {
    let o = {
      code: "custom",
      input: n,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort
    };
    if (r._zod.def.params) o.params = r._zod.def.params;
    t.issues.push(LAr(o));
  }
}
var tp, vwe, CE, Ian, xan, kan, Ran, Lan, Dan, Pan, Man, $an, Oan, Nan, kHr, RHr, LHr, DHr, Ban, Uan, Fan, jan, Gan, Wan, qan, Van, zan, Txt, Kan, vQe, vxt, Yan, Xan, Jan, Qan, Zan, BUe, eln, tln, nln, wQe, wxt, Cxt, rln, oln, wwe, sln, iln, aln, lln, cln, uln, CQe, dln, pln, fln, mln, gln, hln, yln, _ln, IQe, bln, Sln, Eln, Aln, Hln;