// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hxo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hxo = Q((kdb, Zul) => {
  Zul.exports = Axo;
  var Xul = kk(),
    Jul = IN(),
    Qul = l6t();
  function Axo(e, t) {
    Qul.call(this), this.nodeType = Jul.TEXT_NODE, this.ownerDocument = e, this._data = t, this._index = void 0;
  }
  var c6t = {
    get: function () {
      return this._data;
    },
    set: function (e) {
      if (e === null || e === void 0) e = "";else e = String(e);
      if (e === this._data) return;
      if (this._data = e, this.rooted) this.ownerDocument.mutateValue(this);
      if (this.parentNode && this.parentNode._textchangehook) this.parentNode._textchangehook(this);
    }
  };
  Axo.prototype = Object.create(Qul.prototype, {
    nodeName: {
      value: "#text"
    },
    nodeValue: c6t,
    textContent: c6t,
    innerText: c6t,
    data: {
      get: c6t.get,
      set: function (e) {
        c6t.set.call(this, e === null ? "" : String(e));
      }
    },
    splitText: {
      value: function (t) {
        if (t > this._data.length || t < 0) Xul.IndexSizeError();
        var n = this._data.substring(t),
          r = this.ownerDocument.createTextNode(n);
        this.data = this.data.substring(0, t);
        var o = this.parentNode;
        if (o !== null) o.insertBefore(r, this.nextSibling);
        return r;
      }
    },
    wholeText: {
      get: function () {
        var t = this.textContent;
        for (var n = this.nextSibling; n; n = n.nextSibling) {
          if (n.nodeType !== Jul.TEXT_NODE) break;
          t += n.textContent;
        }
        return t;
      }
    },
    replaceWholeText: {
      value: Xul.nyi
    },
    clone: {
      value: function () {
        return new Axo(this.ownerDocument, this._data);
      }
    }
  });
});