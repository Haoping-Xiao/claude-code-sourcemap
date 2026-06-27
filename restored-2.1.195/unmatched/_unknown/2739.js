// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kta
// matched 2.1.88 source: node_modules/fflate/esm/index.mjs
// class=new  jaccard=0.0343  score=0.3888  fileCov=0.0363
// note: nearest: node_modules/fflate/esm/index.mjs (0.0343); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Kta] deps: SX, _ue, Qne, xWe
({
  STRING: Ltp,
  INT: sct
} = Pu);
zta = [Kh(mro, F_, [], sct, function () {
  return this.message.seconds;
}), Kh(fro, F_, [], sct, function () {
  return this.message.seconds / 60n;
}), Kh(dro, F_, [], sct, function () {
  return this.message.seconds / 3600n;
}), Kh(pro, F_, [], sct, function () {
  return BigInt(this.message.nanos) / 1000000n;
}), ...Sue(jta, e => e.getFullYear()), ...Sue(Gta, e => e.getMonth()), ...Sue(Nta, e => e.getDate()), ...Sue(Bta, e => e.getDate() - 1), ...Sue(Uta, e => e.getDay()), ...Sue(Fta, e => ktp(e)), ...Sue(mro, e => e.getSeconds()), ...Sue(fro, e => e.getMinutes()), ...Sue(dro, e => e.getHours()), ...Sue(pro, e => e.getMilliseconds())];
function hro(e) {
  return new Yta(e?.namespace ? new j$n(e?.namespace) : void 0, e?.registry ? Zno(e.registry) : Zno(), pta(Rta, Lta, zta, qta, e?.funcs ?? []));
}
var Dtp, Yta;