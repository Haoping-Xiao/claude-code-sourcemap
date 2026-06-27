// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cul
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cul = Q((hdb, lul) => {
  lul.exports = class extends Array {
    constructor(t) {
      super(t && t.length || 0);
      if (t) for (var n in t) this[n] = t[n];
    }
    item(t) {
      return this[t] || null;
    }
  };
});