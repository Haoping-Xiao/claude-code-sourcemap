// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fxo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fxo = Q((vdb, Pul) => {
  var Dul = IN(),
    wlf = {
      nextElementSibling: {
        get: function () {
          if (this.parentNode) {
            for (var e = this.nextSibling; e !== null; e = e.nextSibling) if (e.nodeType === Dul.ELEMENT_NODE) return e;
          }
          return null;
        }
      },
      previousElementSibling: {
        get: function () {
          if (this.parentNode) {
            for (var e = this.previousSibling; e !== null; e = e.previousSibling) if (e.nodeType === Dul.ELEMENT_NODE) return e;
          }
          return null;
        }
      }
    };
  Pul.exports = wlf;
});