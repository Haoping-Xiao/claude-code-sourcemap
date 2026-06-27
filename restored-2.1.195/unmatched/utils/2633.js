// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uX
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uX = Q((Vmy, Ueo) => {
  var JM = hm();
  rRe();
  Neo();
  Beo();
  m_();
  (function () {
    if (JM.random && JM.random.getBytes) {
      Ueo.exports = JM.random;
      return;
    }
    (function (e) {
      var t = {},
        n = [,,,,],
        r = JM.util.createBuffer();
      t.formatKey = function (d) {
        var p = JM.util.createBuffer(d);
        return d = [,,,,], d[0] = p.getInt32(), d[1] = p.getInt32(), d[2] = p.getInt32(), d[3] = p.getInt32(), JM.aes._expandKey(d, !1);
      }, t.formatSeed = function (d) {
        var p = JM.util.createBuffer(d);
        return d = [,,,,], d[0] = p.getInt32(), d[1] = p.getInt32(), d[2] = p.getInt32(), d[3] = p.getInt32(), d;
      }, t.cipher = function (d, p) {
        return JM.aes._updateBlock(d, p, n, !1), r.putInt32(n[0]), r.putInt32(n[1]), r.putInt32(n[2]), r.putInt32(n[3]), r.getBytes();
      }, t.increment = function (d) {
        return ++d[3], d;
      }, t.md = JM.md.sha256;
      function o() {
        var d = JM.prng.create(t);
        return d.getBytes = function (p, f) {
          return d.generate(p, f);
        }, d.getBytesSync = function (p) {
          return d.generate(p);
        }, d;
      }
      var s = o(),
        i = null,
        a = JM.util.globalScope,
        l = a.crypto || a.msCrypto;
      if (l && l.getRandomValues) i = function (d) {
        return l.getRandomValues(d);
      };
      if (JM.options.usePureJavaScript || !JM.util.isNodejs && !i) {
        if (typeof window > "u" || window.document === void 0) ;
        if (s.collectInt(+new Date(), 32), typeof navigator < "u") {
          var c = "";
          for (var u in navigator) try {
            if (typeof navigator[u] == "string") c += navigator[u];
          } catch (d) {}
          s.collect(c), c = null;
        }
        if (e) e().mousemove(function (d) {
          s.collectInt(d.clientX, 16), s.collectInt(d.clientY, 16);
        }), e().keypress(function (d) {
          s.collectInt(d.charCode, 8);
        });
      }
      if (!JM.random) JM.random = s;else for (var u in s) JM.random[u] = s[u];
      JM.random.createInstance = o, Ueo.exports = JM.random;
    })(typeof jQuery < "u" ? jQuery : null);
  })();
});