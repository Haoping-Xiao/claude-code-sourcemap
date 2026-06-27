// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lxo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lxo = Q((Hdb, vul) => {
  var axo = kk();
  vul.exports = Tul;
  function Tul(e, t) {
    this._getString = e, this._setString = t, this._length = 0, this._lastStringValue = "", this._update();
  }
  Object.defineProperties(Tul.prototype, {
    length: {
      get: function () {
        return this._length;
      }
    },
    item: {
      value: function (e) {
        var t = E_t(this);
        if (e < 0 || e >= t.length) return null;
        return t[e];
      }
    },
    contains: {
      value: function (e) {
        e = String(e);
        var t = E_t(this);
        return t.indexOf(e) > -1;
      }
    },
    add: {
      value: function () {
        var e = E_t(this);
        for (var t = 0, n = arguments.length; t < n; t++) {
          var r = o6t(arguments[t]);
          if (e.indexOf(r) < 0) e.push(r);
        }
        this._update(e);
      }
    },
    remove: {
      value: function () {
        var e = E_t(this);
        for (var t = 0, n = arguments.length; t < n; t++) {
          var r = o6t(arguments[t]),
            o = e.indexOf(r);
          if (o > -1) e.splice(o, 1);
        }
        this._update(e);
      }
    },
    toggle: {
      value: function (t, n) {
        if (t = o6t(t), this.contains(t)) {
          if (n === void 0 || n === false) return this.remove(t), false;
          return true;
        } else {
          if (n === void 0 || n === true) return this.add(t), true;
          return false;
        }
      }
    },
    replace: {
      value: function (t, n) {
        if (String(n) === "") axo.SyntaxError();
        t = o6t(t), n = o6t(n);
        var r = E_t(this),
          o = r.indexOf(t);
        if (o < 0) return false;
        var s = r.indexOf(n);
        if (s < 0) r[o] = n;else if (o < s) r[o] = n, r.splice(s, 1);else r.splice(o, 1);
        return this._update(r), true;
      }
    },
    toString: {
      value: function () {
        return this._getString();
      }
    },
    value: {
      get: function () {
        return this._getString();
      },
      set: function (e) {
        this._setString(e), this._update();
      }
    },
    _update: {
      value: function (e) {
        if (e) Hul(this, e), this._setString(e.join(" ").trim());else Hul(this, E_t(this));
        this._lastStringValue = this._getString();
      }
    }
  });
  function Hul(e, t) {
    var n = e._length,
      r;
    e._length = t.length;
    for (r = 0; r < t.length; r++) e[r] = t[r];
    for (; r < n; r++) e[r] = void 0;
  }
  function o6t(e) {
    if (e = String(e), e === "") axo.SyntaxError();
    if (/[ \t\r\n\f]/.test(e)) axo.InvalidCharacterError();
    return e;
  }
  function mlf(e) {
    var t = e._length,
      n = Array(t);
    for (var r = 0; r < t; r++) n[r] = e[r];
    return n;
  }
  function E_t(e) {
    var t = e._getString();
    if (t === e._lastStringValue) return mlf(e);
    var n = t.replace(/(^[ \t\r\n\f]+)|([ \t\r\n\f]+$)/g, "");
    if (n === "") return [];else {
      var r = Object.create(null);
      return n.split(/[ \t\r\n\f]+/g).filter(function (o) {
        var s = "$" + o;
        if (r[s]) return false;
        return r[s] = true, true;
      });
    }
  }
});