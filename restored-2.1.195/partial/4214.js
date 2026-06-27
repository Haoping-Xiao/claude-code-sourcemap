// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l6t
// matched 2.1.88 source: node_modules/@mixmark-io/domino/lib/CharacterData.js
// class=partial  jaccard=0.2278  score=1  fileCov=0.2278
// note: low-confidence suggestion: node_modules/@mixmark-io/domino/lib/CharacterData.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var l6t = Q((xdb, Yul) => {
  Yul.exports = KKn;
  var Kul = Exo(),
    zul = kk(),
    Nlf = qKn(),
    Blf = fxo();
  function KKn() {
    Kul.call(this);
  }
  KKn.prototype = Object.create(Kul.prototype, {
    substringData: {
      value: function (t, n) {
        if (arguments.length < 2) throw TypeError("Not enough arguments");
        if (t = t >>> 0, n = n >>> 0, t > this.data.length || t < 0 || n < 0) zul.IndexSizeError();
        return this.data.substring(t, t + n);
      }
    },
    appendData: {
      value: function (t) {
        if (arguments.length < 1) throw TypeError("Not enough arguments");
        this.data += String(t);
      }
    },
    insertData: {
      value: function (t, n) {
        return this.replaceData(t, 0, n);
      }
    },
    deleteData: {
      value: function (t, n) {
        return this.replaceData(t, n, "");
      }
    },
    replaceData: {
      value: function (t, n, r) {
        var o = this.data,
          s = o.length;
        if (t = t >>> 0, n = n >>> 0, r = String(r), t > s || t < 0) zul.IndexSizeError();
        if (t + n > s) n = s - t;
        var i = o.substring(0, t),
          a = o.substring(t + n);
        this.data = i + r + a;
      }
    },
    isEqual: {
      value: function (t) {
        return this._data === t._data;
      }
    },
    length: {
      get: function () {
        return this.data.length;
      }
    }
  });
  Object.defineProperties(KKn.prototype, Nlf);
  Object.defineProperties(KKn.prototype, Blf);
});