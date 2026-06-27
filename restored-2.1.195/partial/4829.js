// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module k4l
// matched 2.1.88 source: node_modules/qrcode/lib/core/version.js
// class=partial  jaccard=0.1854  score=1  fileCov=0.1854
// note: low-confidence suggestion: node_modules/qrcode/lib/core/version.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var k4l = Q(WKe => {
  var Orr = c1e(),
    TUf = CUo(),
    C4l = Rrr(),
    p1e = d1e(),
    DUo = kUo(),
    I4l = Orr.getBCHDigit(7973);
  function vUf(e, t, n) {
    for (let r = 1; r <= 40; r++) if (t <= WKe.getCapacity(r, n, e)) return r;
    return;
  }
  function x4l(e, t) {
    return p1e.getCharCountIndicator(e, t) + 4;
  }
  function wUf(e, t) {
    let n = 0;
    return e.forEach(function (r) {
      let o = x4l(r.mode, t);
      n += o + r.getBitsLength();
    }), n;
  }
  function CUf(e, t) {
    for (let n = 1; n <= 40; n++) if (wUf(e, n) <= WKe.getCapacity(n, t, p1e.MIXED)) return n;
    return;
  }
  WKe.from = function (t, n) {
    if (DUo.isValid(t)) return parseInt(t, 10);
    return n;
  };
  WKe.getCapacity = function (t, n, r) {
    if (!DUo.isValid(t)) throw Error("Invalid QR Code version");
    if (typeof r > "u") r = p1e.BYTE;
    let o = Orr.getSymbolTotalCodewords(t),
      s = TUf.getTotalCodewordsCount(t, n),
      i = (o - s) * 8;
    if (r === p1e.MIXED) return i;
    let a = i - x4l(r, t);
    switch (r) {
      case p1e.NUMERIC:
        return Math.floor(a / 10 * 3);
      case p1e.ALPHANUMERIC:
        return Math.floor(a / 11 * 2);
      case p1e.KANJI:
        return Math.floor(a / 13);
      case p1e.BYTE:
      default:
        return Math.floor(a / 8);
    }
  };
  WKe.getBestVersionForData = function (t, n) {
    let r,
      o = C4l.from(n, C4l.M);
    if (Array.isArray(t)) {
      if (t.length > 1) return CUf(t, o);
      if (t.length === 0) return 1;
      r = t[0];
    } else r = t;
    return vUf(r.mode, r.getLength(), o);
  };
  WKe.getEncodedBits = function (t) {
    if (!DUo.isValid(t) || t < 7) throw Error("Invalid QR Code version");
    let n = t << 12;
    while (Orr.getBCHDigit(n) - I4l >= 0) n ^= 7973 << Orr.getBCHDigit(n) - I4l;
    return t << 12 | n;
  };
});