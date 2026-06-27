// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YFn
// matched 2.1.88 source: src/utils/computerUse/gates.ts
// class=modified (alt of src/utils/computerUse/gates.ts)  jaccard=0.1025  score=1  fileCov=0.1025
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function readConfig() {
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
  return VIp() && readConfig().enabled;
}
function JFn() {
  let { enabled: e, coordinateMode: t, ...n } = readConfig();
  return n;
}
function apt() {
  return ((mRa ??= readConfig().coordinateMode), mRa);
}
var fRa, mRa;
