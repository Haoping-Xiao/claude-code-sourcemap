// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FTr
// class=new  (no 2.1.88 match)
// note: 8 renamed
// ─────────────────────────────────────────────────────────────────────────
var FTr = E(() => {
  aM();
});
var $Qe = {};
_t($Qe, {
  time: () => time,
  duration: () => duration,
  datetime: () => datetime,
  date: () => date,
  ZodISOTime: () => ZodISOTime,
  ZodISODuration: () => ZodISODuration,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODate: () => ZodISODate
});
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