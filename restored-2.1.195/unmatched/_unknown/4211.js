// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mxo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mxo = Q((wdb, $ul) => {
  $ul.exports = Mul;
  var v_t = kk();
  function Mul(e) {
    this.element = e;
  }
  Object.defineProperties(Mul.prototype, {
    length: {
      get: v_t.shouldOverride
    },
    item: {
      value: v_t.shouldOverride
    },
    getNamedItem: {
      value: function (t) {
        return this.element.getAttributeNode(t);
      }
    },
    getNamedItemNS: {
      value: function (t, n) {
        return this.element.getAttributeNodeNS(t, n);
      }
    },
    setNamedItem: {
      value: v_t.nyi
    },
    setNamedItemNS: {
      value: v_t.nyi
    },
    removeNamedItem: {
      value: function (t) {
        var n = this.element.getAttributeNode(t);
        if (n) return this.element.removeAttribute(t), n;
        v_t.NotFoundError();
      }
    },
    removeNamedItemNS: {
      value: function (t, n) {
        var r = this.element.getAttributeNodeNS(t, n);
        if (r) return this.element.removeAttributeNS(t, n), r;
        v_t.NotFoundError();
      }
    }
  });
});