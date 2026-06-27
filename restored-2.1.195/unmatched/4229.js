// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Uxo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Uxo = Q((qdb, Ndl) => {
  var $dl = ixo(),
    Qlf = $Kn().isApiWritable;
  Ndl.exports = function (e, t, n, r) {
    var o = e.ctor;
    if (o) {
      var s = e.props || {};
      if (e.attributes) for (var i in e.attributes) {
        var a = e.attributes[i];
        if (typeof a !== "object" || Array.isArray(a)) a = {
          type: a
        };
        if (!a.name) a.name = i.toLowerCase();
        s[i] = $dl.property(a);
      }
      if (s.constructor = {
        value: o,
        writable: Qlf
      }, o.prototype = Object.create((e.superclass || t).prototype, s), e.events) ecf(o, e.events);
      n[e.name] = o;
    } else o = t;
    return (e.tags || e.tag && [e.tag] || []).forEach(function (l) {
      r[l] = o;
    }), o;
  };
  function Odl(e, t, n, r) {
    this.body = e, this.document = t, this.form = n, this.element = r;
  }
  Odl.prototype.build = function () {
    return () => {};
  };
  function Zlf(e, t, n, r) {
    var o = e.ownerDocument || Object.create(null),
      s = e.form || Object.create(null);
    e[t] = new Odl(r, o, s, e).build();
  }
  function ecf(e, t) {
    var n = e.prototype;
    t.forEach(function (r) {
      Object.defineProperty(n, "on" + r, {
        get: function () {
          return this._getEventHandler(r);
        },
        set: function (o) {
          this._setEventHandler(r, o);
        }
      }), $dl.registerChangeHandler(e, "on" + r, Zlf);
    });
  }
});