// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BKn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var BKn = Q((bdb, gul) => {
  gul.exports = mul;
  var ful = IN(),
    rlf = E6e();
  function mul() {
    ful.call(this), this._firstChild = this._childNodes = null;
  }
  mul.prototype = Object.create(ful.prototype, {
    hasChildNodes: {
      value: function () {
        if (this._childNodes) return this._childNodes.length > 0;
        return this._firstChild !== null;
      }
    },
    childNodes: {
      get: function () {
        return this._ensureChildNodes(), this._childNodes;
      }
    },
    firstChild: {
      get: function () {
        if (this._childNodes) return this._childNodes.length === 0 ? null : this._childNodes[0];
        return this._firstChild;
      }
    },
    lastChild: {
      get: function () {
        var e = this._childNodes,
          t;
        if (e) return e.length === 0 ? null : e[e.length - 1];
        if (t = this._firstChild, t === null) return null;
        return t._previousSibling;
      }
    },
    _ensureChildNodes: {
      value: function () {
        if (this._childNodes) return;
        var e = this._firstChild,
          t = e,
          n = this._childNodes = new rlf();
        if (e) do n.push(t), t = t._nextSibling; while (t !== e);
        this._firstChild = null;
      }
    },
    removeChildren: {
      value: function () {
        var t = this.rooted ? this.ownerDocument : null,
          n = this.firstChild,
          r;
        while (n !== null) {
          if (r = n, n = r.nextSibling, t) t.mutateRemove(r);
          r.parentNode = null;
        }
        if (this._childNodes) this._childNodes.length = 0;else this._firstChild = null;
        this.modify();
      }
    }
  });
});