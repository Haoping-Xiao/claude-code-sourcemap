// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dta
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/sql.js
// class=new  jaccard=0.0141  score=0.1793  fileCov=0.0151
// note: nearest: node_modules/highlight.js/lib/languages/sql.js (0.0141); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dta = E(() => {
  Qne();
  SX();
  cro();
  _ue();
  tro();
  xWe();
  B$n();
  btp = new TextEncoder(), Stp = new TextDecoder(void 0, {
    fatal: !0
  });
  ({
    BOOL: G$n,
    BYTES: W$n,
    DOUBLE: HRe,
    DYN: uro,
    INT: AX,
    STRING: KU,
    TYPE: vtp,
    UINT: TRe
  } = Pu), Lta = [Do("int", [AX], AX, qbe), Do("int", [TRe], AX, e => ere(e.value)), Do("int", [HRe], AX, ere), Do("int", [KU], AX, ere), Do("int", [QE], AX, e => ere(e.message.seconds)), Do("int", [F_], AX, e => ere(e.message.seconds)), Do("uint", [TRe], TRe, qbe), Do("uint", [AX], TRe, kWe), Do("uint", [HRe], TRe, kWe), Do("uint", [KU], TRe, kWe), Do("double", [HRe], HRe, qbe), Do("double", [AX], HRe, e => Number(e)), Do("double", [TRe], HRe, e => Number(e.value)), Do("double", [KU], HRe, e => Number(e)), Do("bool", [G$n], G$n, qbe), Do("bool", [KU], G$n, Etp), Do("bytes", [W$n], W$n, qbe), Do("bytes", [KU], W$n, e => btp.encode(e)), Do("string", [KU], KU, qbe), Do("string", [G$n], KU, e => e.toString()), Do("string", [AX], KU, e => e.toString()), Do("string", [TRe], KU, e => e.value.toString()), Do("string", [HRe], KU, e => e.toString()), Do("string", [W$n], KU, Atp), Do("string", [QE], KU, e => Bbe(M1, e.message)), Do("string", [F_], KU, e => Bbe(bX, e.message)), Do("timestamp", [QE], QE, qbe), Do("timestamp", [KU], QE, Htp), Do("timestamp", [AX], QE, e => MZi(Number(e))), Do("duration", [F_], F_, qbe), Do("duration", [KU], F_, Sta), Do("duration", [AX], F_, e => F0(bX, {
    seconds: e
  })), Do("type", [uro], vtp, Ttp), Do("dyn", [uro], uro, qbe)];
});
var Pta = "contains",
  Mta = "endsWith",
  $ta = "matches",
  Vbe = "size",
  Ota = "startsWith",
  Nta = "getDate",
  Bta = "getDayOfMonth",
  Uta = "getDayOfWeek",
  Fta = "getDayOfYear",
  jta = "getFullYear",
  dro = "getHours",
  pro = "getMilliseconds",
  fro = "getMinutes",
  Gta = "getMonth",
  mro = "getSeconds";
function Itp(e) {
  for (let o of wtp) if (o.test(e)) throw Error(`Error evaluating pattern ${e}, invalid RE2 syntax`);
  let t = "",
    n = e.match(Ctp);
  if (n) {
    for (let o of n?.groups?.flags ?? "") {
      if (o == "-") break;
      t += o;
    }
    e = e.substring(n[0].length);
  }
  return new RegExp(e, t).test(this);
}
function q$n(e, t) {
  let n = e.message.seconds - t.message.seconds;
  if (n == 0n) return e.message.nanos - t.message.nanos;
  return n < 0n ? -1 : 1;
}
function V$n(e, t) {
  let n = e.message.seconds - t.message.seconds;
  if (n == 0n) return e.message.nanos - t.message.nanos;
  return n < 0n ? -1 : 1;
}
function z$n(e, t) {
  let n = Math.min(e.length, t.length);
  for (let r = 0; r < n; r++) {
    if (e[r] < t[r]) return -1;
    if (e[r] > t[r]) return 1;
  }
  return e.length - t.length;
}
function xtp(e, t) {
  for (let n of t) if (oct(n, e)) return !0;
  return !1;
}
function l2t(e, t) {
  return t.has(e);
}
var wtp, Ctp, va, bue, Bv, c2t, g_, JD, Uv, gro, RWe, qta;