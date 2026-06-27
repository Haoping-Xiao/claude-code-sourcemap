// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zIr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zIr = Q((vtg, ggs) => {
  ggs.exports = Uyu;
  function Uyu(e, t) {
    var n = !Array.isArray(e),
      r = {
        index: 0,
        keyedList: n || t ? Object.keys(e) : null,
        jobs: {},
        results: n ? {} : [],
        size: n ? Object.keys(e).length : e.length
      };
    if (t) r.keyedList.sort(n ? t : function (o, s) {
      return t(e[o], e[s]);
    });
    return r;
  }
});