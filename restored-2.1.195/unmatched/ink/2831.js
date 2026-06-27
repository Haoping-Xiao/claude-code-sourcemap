// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lla
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lla = E(() => {
  Myr();
  KYr();
  bon();
  Blp = !(Bve && 1 / VXe(new Bve([, -0]))[1] == Nlp) ? W_e : function (e) {
    return new Bve(e);
  }, ala = Blp;
});
function Flp(e, t, n) {
  var r = -1,
    o = rla,
    s = e.length,
    i = true,
    a = [],
    l = a;
  if (n) i = false, o = sla;else if (s >= Ulp) {
    var c = t ? null : ala(e);
    if (c) return VXe(c);
    i = false, o = yon, l = new hon();
  } else l = t ? [] : a;
  e: while (++r < s) {
    var u = e[r],
      d = t ? t(u) : u;
    if (u = n || u !== 0 ? u : 0, i && d === d) {
      var p = l.length;
      while (p--) if (l[p] === d) continue e;
      if (t) l.push(d);
      a.push(u);
    } else if (!o(l, d, n)) {
      if (l !== a) l.push(d);
      a.push(u);
    }
  }
  return a;
}
var Ulp = 200,
  cla;