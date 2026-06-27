// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P3l
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var P3l = Q(D3l => {
  var UFf = rFo(),
    FFf = KUo();
  D3l.process = function (e, t) {
    let n = [],
      r = new UFf(e);
    return new FFf(t, {
      read: r.read.bind(r),
      write: function (s) {
        n.push(s);
      },
      complete: function () {}
    }).start(), r.process(), Buffer.concat(n);
  };
});