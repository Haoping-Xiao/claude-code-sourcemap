// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qOc
// matched 2.1.88 source: node_modules/lodash-es/isLength.js
// class=partial  jaccard=0.2121  score=0.2121  fileCov=1
// note: low-confidence suggestion: node_modules/lodash-es/isLength.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qOc = E(() => {
  dn();
  kt();
  er();
  Ao();
  Ls();
  dr();
});
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