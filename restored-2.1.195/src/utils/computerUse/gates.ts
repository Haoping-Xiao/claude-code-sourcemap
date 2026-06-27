// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YFn
// matched 2.1.88 source: src/utils/computerUse/gates.ts
// class=modified  jaccard=0.2161  score=1  fileCov=0.2161
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var YFn = E(() => {
  dn();
  je();
  KFn();
});
function sfo() {
  return {
    ...fRa,
    ...zx("tengu_malort_pedway", fRa),
  };
}
function VIp() {
  let e = Di();
  return e === "max" || e === "pro";
}
function XFn() {
  if (T9("hipaa")) return false;
  return VIp() && sfo().enabled;
}
function JFn() {
  let { enabled: e, coordinateMode: t, ...n } = sfo();
  return n;
}
function apt() {
  return ((mRa ??= sfo().coordinateMode), mRa);
}
var fRa, mRa;
