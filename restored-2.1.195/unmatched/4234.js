// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sYn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sYn = Q((Xdb, npl) => {
  npl.exports = oYn;
  var Tcf = IN(),
    tpl = Exo(),
    vcf = qKn();
  function oYn(e, t, n, r) {
    tpl.call(this), this.nodeType = Tcf.DOCUMENT_TYPE_NODE, this.ownerDocument = e || null, this.name = t, this.publicId = n || "", this.systemId = r || "";
  }
  oYn.prototype = Object.create(tpl.prototype, {
    nodeName: {
      get: function () {
        return this.name;
      }
    },
    nodeValue: {
      get: function () {
        return null;
      },
      set: function () {}
    },
    clone: {
      value: function () {
        return new oYn(this.ownerDocument, this.name, this.publicId, this.systemId);
      }
    },
    isEqual: {
      value: function (t) {
        return this.name === t.name && this.publicId === t.publicId && this.systemId === t.systemId;
      }
    }
  });
  Object.defineProperties(oYn.prototype, vcf);
});