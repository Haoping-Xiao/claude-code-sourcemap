// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uMr
// matched 2.1.88 source: node_modules/parse5/lib/serializer/index.js
// class=partial  jaccard=0.0759  score=0.1948  fileCov=0.1105
// note: low-confidence suggestion: node_modules/parse5/lib/serializer/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uMr = Q(nhn => {
  var U3u = BPs();
  function F3u(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function j3u(e) {
    return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;");
  }
  class cMr {
    value;
    constructor(e) {
      this.value = e;
    }
    toString() {
      return j3u("" + this.value);
    }
  }
  class JLt {
    name;
    children;
    attributes = {};
    static of(e, t, n) {
      let r = new JLt(e);
      if (t !== void 0) r.addChildNode(new cMr(t));
      if (n !== void 0) r.withName(n);
      return r;
    }
    constructor(e, t = []) {
      this.name = e, this.children = t;
    }
    withName(e) {
      return this.name = e, this;
    }
    addAttribute(e, t) {
      return this.attributes[e] = t, this;
    }
    addChildNode(e) {
      return this.children.push(e), this;
    }
    removeAttribute(e) {
      return delete this.attributes[e], this;
    }
    n(e) {
      return this.name = e, this;
    }
    c(e) {
      return this.children.push(e), this;
    }
    a(e, t) {
      if (t != null) this.attributes[e] = t;
      return this;
    }
    cc(e, t, n = t) {
      if (e[t] != null) {
        let r = JLt.of(t, e[t]).withName(n);
        this.c(r);
      }
    }
    l(e, t, n, r) {
      if (e[t] != null) r().map(s => {
        s.withName(n), this.c(s);
      });
    }
    lc(e, t, n, r) {
      if (e[t] != null) {
        let o = r(),
          s = new JLt(n);
        o.map(i => {
          s.c(i);
        }), this.c(s);
      }
    }
    toString() {
      let e = Boolean(this.children.length),
        t = `<${this.name}`,
        n = this.attributes;
      for (let r of Object.keys(n)) {
        let o = n[r];
        if (o != null) t += ` ${r}="${F3u("" + o)}"`;
      }
      return t += !e ? "/>" : `>${this.children.map(r => r.toString()).join("")}</${this.name}>`;
    }
  }
  Object.defineProperty(nhn, "parseXML", {
    enumerable: !0,
    get: function () {
      return U3u.parseXML;
    }
  });
  nhn.XmlNode = JLt;
  nhn.XmlText = cMr;
});