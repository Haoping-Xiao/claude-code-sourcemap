// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module r4c
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var r4c = Q((mzH, n4c) => {
  n4c.exports = function (e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next) yield t.value;
    };
  };
});