// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qOc
// matched 2.1.88 source: node_modules/@opentelemetry/otlp-transformer/build/src/common/internal.js
// class=new  jaccard=0.0347  score=0.2303  fileCov=0.0392
// note: nearest: node_modules/@opentelemetry/otlp-transformer/build/src/common/internal.js (0.0347); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function VOc() {
  let e = Dt();
  if (e.seenNotifications !== void 0) return;
  let t = {};
  for (let [n, r] of Object.entries(Oxm)) {
    let o = e[r];
    if (typeof o === "number" && o > 0) t[n] = o;else if (o === true) t[n] = 1;
  }
  gn(n => n.seenNotifications !== void 0 ? n : {
    ...n,
    seenNotifications: t
  }), xe("migration_notification_dismissals");
}
var Oxm;