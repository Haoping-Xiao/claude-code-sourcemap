// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u9n
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var u9n = Q((JYa, QYa) => {
  (function () {
    var e, t, n, r;
    ({
      isObject: r
    } = _pe()), n = k6(), e = Z0(), QYa.exports = t = class extends n {
      constructor(s, i, a, l) {
        super(s);
        if (r(i)) ({
          version: i,
          encoding: a,
          standalone: l
        } = i);
        if (!i) i = "1.0";
        if (this.type = e.Declaration, this.version = this.stringify.xmlVersion(i), a != null) this.encoding = this.stringify.xmlEncoding(a);
        if (l != null) this.standalone = this.stringify.xmlStandalone(l);
      }
      toString(s) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(s));
      }
    };
  }).call(JYa);
});