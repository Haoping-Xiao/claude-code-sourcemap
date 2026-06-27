// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vji
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Vji = Q((ZKh, qji) => {
  var pjd = mBt(),
    fjd = j7();
  qji.exports = (e, t, n) => {
    let r = [],
      o = null,
      s = null,
      i = e.sort((u, d) => fjd(u, d, n));
    for (let u of i) if (pjd(u, t, n)) {
      if (s = u, !o) o = u;
    } else {
      if (s) r.push([o, s]);
      s = null, o = null;
    }
    if (o) r.push([o, null]);
    let a = [];
    for (let [u, d] of r) if (u === d) a.push(u);else if (!d && u === i[0]) a.push("*");else if (!d) a.push(`>=${u}`);else if (u === i[0]) a.push(`<=${d}`);else a.push(`${u} - ${d}`);
    let l = a.join(" || "),
      c = typeof t.raw === "string" ? t.raw : String(t);
    return l.length < c.length ? l : t;
  };
});