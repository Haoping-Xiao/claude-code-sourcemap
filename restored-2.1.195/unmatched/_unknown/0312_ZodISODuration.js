// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FTr
// matched 2.1.88 source: node_modules/zod/v4/classic/iso.js
// class=new  jaccard=0.053  score=0.1978  fileCov=0.0674
// note: nearest: node_modules/zod/v4/classic/iso.js (0.053); 8 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: time, duration, datetime, date, ZodISOTime, ZodISODuration, ZodISODateTime, ZodISODate
var $Qe = {};
function datetime(e) {
  return ATr(ZodISODateTime, e);
}
function date(e) {
  return HTr(ZodISODate, e);
}
function time(e) {
  return TTr(ZodISOTime, e);
}
function duration(e) {
  return vTr(ZodISODuration, e);
}
var ZodISODateTime, ZodISODate, ZodISOTime, ZodISODuration;