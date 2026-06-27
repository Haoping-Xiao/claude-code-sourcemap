// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qKn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qKn = Q((Tdb, Lul) => {
  var Hlf = IN(),
    Tlf = qIo(),
    pxo = function (e, t) {
      var n = e.createDocumentFragment();
      for (var r = 0; r < t.length; r++) {
        var o = t[r],
          s = o instanceof Hlf;
        n.appendChild(s ? o : e.createTextNode(String(o)));
      }
      return n;
    },
    vlf = {
      after: {
        value: function () {
          var t = Array.prototype.slice.call(arguments),
            n = this.parentNode,
            r = this.nextSibling;
          if (n === null) return;
          while (r && t.some(function (s) {
            return s === r;
          })) r = r.nextSibling;
          var o = pxo(this.doc, t);
          n.insertBefore(o, r);
        }
      },
      before: {
        value: function () {
          var t = Array.prototype.slice.call(arguments),
            n = this.parentNode,
            r = this.previousSibling;
          if (n === null) return;
          while (r && t.some(function (i) {
            return i === r;
          })) r = r.previousSibling;
          var o = pxo(this.doc, t),
            s = r ? r.nextSibling : n.firstChild;
          n.insertBefore(o, s);
        }
      },
      remove: {
        value: function () {
          if (this.parentNode === null) return;
          if (this.doc) {
            if (this.doc._preremoveNodeIterators(this), this.rooted) this.doc.mutateRemove(this);
          }
          this._remove(), this.parentNode = null;
        }
      },
      _remove: {
        value: function () {
          var t = this.parentNode;
          if (t === null) return;
          if (t._childNodes) t._childNodes.splice(this.index, 1);else if (t._firstChild === this) if (this._nextSibling === this) t._firstChild = null;else t._firstChild = this._nextSibling;
          Tlf.remove(this), t.modify();
        }
      },
      replaceWith: {
        value: function () {
          var t = Array.prototype.slice.call(arguments),
            n = this.parentNode,
            r = this.nextSibling;
          if (n === null) return;
          while (r && t.some(function (s) {
            return s === r;
          })) r = r.nextSibling;
          var o = pxo(this.doc, t);
          if (this.parentNode === n) n.replaceChild(o, this);else n.insertBefore(o, r);
        }
      }
    };
  Lul.exports = vlf;
});