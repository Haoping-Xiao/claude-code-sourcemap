// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gta
// matched 2.1.88 source: node_modules/@grpc/grpc-js/build/src/load-balancer-outlier-detection.js
// class=new  jaccard=0.0137  score=0.187  fileCov=0.0146
// note: nearest: node_modules/@grpc/grpc-js/build/src/load-balancer-outlier-detection.js (0.0137); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gta = E(() => {
  t2t();
  dta = Symbol.for("@bufbuild/cel/resolver");
  fta = class fta {
    _groups;
    [dta] = {};
    constructor(e) {
      this._groups = e;
    }
    *[Symbol.iterator]() {
      for (let e of this._groups.values()) yield* e;
    }
    find(e) {
      return this._groups.get(e);
    }
  };
  mta = class mta {
    _name;
    _funcs;
    constructor(e, t) {
      this._name = e, this._funcs = t;
    }
    *[Symbol.iterator]() {
      yield* this._funcs;
    }
    get name() {
      return this._name;
    }
    call(e, t, n) {
      n = n.map(r => Xea(r));
      for (let r of this._funcs) {
        let o = r.call(e, t, n);
        if (o !== void 0) return o;
      }
      return;
    }
  };
});
function i2t(e = 0n, t = 0n) {
  let n = e * ero + BigInt(t);
  if (n > itp || n < atp) throw Error("duration out of range");
  return F0(bX, {
    seconds: n / ero,
    nanos: Number(n % ero)
  });
}
function Sta(e) {
  if (e.length > hta) throw _ta(`duration string exceeds ${hta} characters`);
  if (/^[-+]?0$/.test(e)) return i2t();
  let [t, n] = /^[+-]/.test(e) ? [e[0] === "+" ? 1n : -1n, e.slice(1)] : [1n, e],
    r = 0n,
    o = n;
  while (o.length > 0) {
    let s = yta.exec(o)?.[0];
    if (o = o.slice(s?.length ?? 0), o[0] === ".") o = o.slice(1);
    let i = yta.exec(o)?.[0];
    o = o.slice(i?.length ?? 0);
    let a = ltp.exec(o)?.[0];
    if (o = o.slice(a?.length ?? 0), (s ?? i) === void 0 || a === void 0) throw _ta("invalid syntax");
    let l = bta[a];
    r += BigInt(s ?? 0) * l, r += BigInt(i ?? 0) * l / 10n ** BigInt(i?.length ?? 0);
  }
  return i2t(0n, t * r);
}
function _ta(e) {
  return Error(`Failed to parse duration: ${e}`);
}
var ero = 1000000000n,
  itp = 9223372036854775807n,
  atp,
  hta = 128,
  bta,
  yta,
  ltp;