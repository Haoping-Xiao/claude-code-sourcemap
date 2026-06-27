// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xWe
// matched 2.1.88 source: node_modules/zod/v3/helpers/util.js
// class=partial  jaccard=0.0884  score=0.126  fileCov=0.2288
// note: low-confidence suggestion: node_modules/zod/v3/helpers/util.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xWe = E(() => {
  oro();
  nno();
  _ue();
  t2t();
  mtp = Symbol.for("@bufbuild/cel/func");
  sro = class sro {
    _name;
    _target;
    _args;
    _result;
    _impl;
    _id;
    [mtp] = {};
    constructor(e, t, n, r, o, s = "") {
      this._name = e, this._target = t, this._args = n, this._result = r, this._impl = o, this._id = s;
    }
    get id() {
      if (this._id === "") {
        let e = this.target ? `${this.target.name}.` : "";
        this._id = `${e}${this.name}(${this.arguments.map(t => t.name).join(",")})`;
      }
      return this._id;
    }
    get name() {
      return this._name;
    }
    get target() {
      return this._target;
    }
    get arguments() {
      return this._args;
    }
    get result() {
      return this._result;
    }
    call(e, t, n) {
      if (n.length != this.arguments.length) return;
      for (let r = 0; r < n.length; r++) if (!Tta(n[r], this.arguments[r])) return;
      try {
        return Zne(this._impl.apply(t, n));
      } catch (r) {
        return EWe(r, e);
      }
    }
  };
  Ata = class Ata extends sro {
    call(e, t, n) {
      if (t !== void 0) return;
      return super.call(e, void 0, n);
    }
  };
  Hta = class Hta extends sro {
    call(e, t, n) {
      if (t === void 0 || !Tta(t, this.target)) return;
      return super.call(e, t, n);
    }
  };
});
function ere(e, t = "type conversion") {
  let n = typeof e === "string" ? BigInt(e) : e;
  if (typeof n === "bigint") {
    if (n >= wta && n <= vta) return n;
  } else if (Number.isFinite(n)) {
    if (n > Number(wta) && n < Number(vta)) return BigInt(Math.trunc(n));
  }
  throw EWe(`int overflow during ${t}`);
}
function kWe(e, t = "type conversion") {
  let n = typeof e === "string" ? BigInt(e) : e;
  if (typeof n === "bigint" || Number.isFinite(n)) {
    let r = typeof n === "number" ? BigInt(Math.trunc(n)) : n;
    if (n >= 0 && r <= gtp) return Ube(r);
  }
  throw EWe(`uint overflow during ${t}`);
}
function htp(e, t) {
  let n = new Uint8Array(e.length + t.length);
  return n.set(e), n.set(t, e.length), n;
}
function Cta(e, t) {
  return nro(e.message.seconds + t.message.seconds, e.message.nanos + t.message.nanos);
}
function ytp(e, t) {
  return i2t(e.message.seconds + t.message.seconds, e.message.nanos + t.message.nanos);
}
function Ita(e, t) {
  return i2t(e.message.seconds - t.message.seconds, e.message.nanos - t.message.nanos);
}
function _tp(e, t) {
  return nro(e.message.seconds - t.message.seconds, e.message.nanos - t.message.nanos);
}
function xta(e, t, n) {
  if (n === 0n) throw EWe(`${e.name} divide by zero`);
  return ere(t / n, `divide by ${n}`);
}
function kta(e, t, n) {
  if (n === 0n) throw EWe(`${e.name} modulus by zero`);
  return t % n;
}
var vta = 9223372036854775807n,
  wta,
  gtp = 18446744073709551615n,
  iro,
  aro,
  UW,
  XD,
  lro,
  O1,
  Rta;