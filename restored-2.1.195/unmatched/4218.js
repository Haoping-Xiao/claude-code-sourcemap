// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xxo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xxo = Q((Ddb, idl) => {
  idl.exports = Ixo;
  var Wlf = IN(),
    sdl = l6t();
  function Ixo(e, t, n) {
    sdl.call(this), this.nodeType = Wlf.PROCESSING_INSTRUCTION_NODE, this.ownerDocument = e, this.target = t, this._data = n;
  }
  var d6t = {
    get: function () {
      return this._data;
    },
    set: function (e) {
      if (e === null || e === void 0) e = "";else e = String(e);
      if (this._data = e, this.rooted) this.ownerDocument.mutateValue(this);
    }
  };
  Ixo.prototype = Object.create(sdl.prototype, {
    nodeName: {
      get: function () {
        return this.target;
      }
    },
    nodeValue: d6t,
    textContent: d6t,
    innerText: d6t,
    data: {
      get: d6t.get,
      set: function (e) {
        d6t.set.call(this, e === null ? "" : String(e));
      }
    },
    clone: {
      value: function () {
        return new Ixo(this.ownerDocument, this.target, this._data);
      }
    },
    isEqual: {
      value: function (t) {
        return this.target === t.target && this._data === t._data;
      }
    }
  });
});