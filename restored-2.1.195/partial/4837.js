// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GUo
// matched 2.1.88 source: node_modules/qrcode/lib/core/qrcode.js
// class=partial  jaccard=0.1717  score=0.7476  fileCov=0.1823
// note: low-confidence suggestion: node_modules/qrcode/lib/core/qrcode.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var GUo = Q(J4l => {
  var Urr = c1e(),
    NUo = Rrr(),
    OUf = m4l(),
    NUf = h4l(),
    BUf = y4l(),
    UUf = b4l(),
    FUo = S4l(),
    jUo = CUo(),
    FUf = v4l(),
    Brr = k4l(),
    jUf = D4l(),
    GUf = d1e(),
    BUo = X4l();
  function WUf(e, t) {
    let n = e.size,
      r = UUf.getPositions(t);
    for (let o = 0; o < r.length; o++) {
      let s = r[o][0],
        i = r[o][1];
      for (let a = -1; a <= 7; a++) {
        if (s + a <= -1 || n <= s + a) continue;
        for (let l = -1; l <= 7; l++) {
          if (i + l <= -1 || n <= i + l) continue;
          if (a >= 0 && a <= 6 && (l === 0 || l === 6) || l >= 0 && l <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && l >= 2 && l <= 4) e.set(s + a, i + l, !0, !0);else e.set(s + a, i + l, !1, !0);
        }
      }
    }
  }
  function qUf(e) {
    let t = e.size;
    for (let n = 8; n < t - 8; n++) {
      let r = n % 2 === 0;
      e.set(n, 6, r, !0), e.set(6, n, r, !0);
    }
  }
  function VUf(e, t) {
    let n = BUf.getPositions(t);
    for (let r = 0; r < n.length; r++) {
      let o = n[r][0],
        s = n[r][1];
      for (let i = -2; i <= 2; i++) for (let a = -2; a <= 2; a++) if (i === -2 || i === 2 || a === -2 || a === 2 || i === 0 && a === 0) e.set(o + i, s + a, !0, !0);else e.set(o + i, s + a, !1, !0);
    }
  }
  function zUf(e, t) {
    let n = e.size,
      r = Brr.getEncodedBits(t),
      o,
      s,
      i;
    for (let a = 0; a < 18; a++) o = Math.floor(a / 3), s = a % 3 + n - 8 - 3, i = (r >> a & 1) === 1, e.set(o, s, i, !0), e.set(s, o, i, !0);
  }
  function UUo(e, t, n) {
    let r = e.size,
      o = jUf.getEncodedBits(t, n),
      s,
      i;
    for (s = 0; s < 15; s++) {
      if (i = (o >> s & 1) === 1, s < 6) e.set(s, 8, i, !0);else if (s < 8) e.set(s + 1, 8, i, !0);else e.set(r - 15 + s, 8, i, !0);
      if (s < 8) e.set(8, r - s - 1, i, !0);else if (s < 9) e.set(8, 15 - s - 1 + 1, i, !0);else e.set(8, 15 - s - 1, i, !0);
    }
    e.set(r - 8, 8, 1, !0);
  }
  function KUf(e, t) {
    let n = e.size,
      r = -1,
      o = n - 1,
      s = 7,
      i = 0;
    for (let a = n - 1; a > 0; a -= 2) {
      if (a === 6) a--;
      while (!0) {
        for (let l = 0; l < 2; l++) if (!e.isReserved(o, a - l)) {
          let c = !1;
          if (i < t.length) c = (t[i] >>> s & 1) === 1;
          if (e.set(o, a - l, c), s--, s === -1) i++, s = 7;
        }
        if (o += r, o < 0 || n <= o) {
          o -= r, r = -r;
          break;
        }
      }
    }
  }
  function YUf(e, t, n) {
    let r = new OUf();
    n.forEach(function (l) {
      r.put(l.mode.bit, 4), r.put(l.getLength(), GUf.getCharCountIndicator(l.mode, e)), l.write(r);
    });
    let o = Urr.getSymbolTotalCodewords(e),
      s = jUo.getTotalCodewordsCount(e, t),
      i = (o - s) * 8;
    if (r.getLengthInBits() + 4 <= i) r.put(0, 4);
    while (r.getLengthInBits() % 8 !== 0) r.putBit(0);
    let a = (i - r.getLengthInBits()) / 8;
    for (let l = 0; l < a; l++) r.put(l % 2 ? 17 : 236, 8);
    return XUf(r, e, t);
  }
  function XUf(e, t, n) {
    let r = Urr.getSymbolTotalCodewords(t),
      o = jUo.getTotalCodewordsCount(t, n),
      s = r - o,
      i = jUo.getBlocksCount(t, n),
      a = r % i,
      l = i - a,
      c = Math.floor(r / i),
      u = Math.floor(s / i),
      d = u + 1,
      p = c - u,
      f = new FUf(p),
      m = 0,
      g = Array(i),
      h = Array(i),
      y = 0,
      b = new Uint8Array(e.buffer);
    for (let C = 0; C < i; C++) {
      let x = C < l ? u : d;
      g[C] = b.slice(m, m + x), h[C] = f.encode(g[C]), m += x, y = Math.max(y, x);
    }
    let _ = new Uint8Array(r),
      S = 0,
      A,
      v;
    for (A = 0; A < y; A++) for (v = 0; v < i; v++) if (A < g[v].length) _[S++] = g[v][A];
    for (A = 0; A < p; A++) for (v = 0; v < i; v++) _[S++] = h[v][A];
    return _;
  }
  function JUf(e, t, n, r) {
    let o;
    if (Array.isArray(e)) o = BUo.fromArray(e);else if (typeof e === "string") {
      let c = t;
      if (!c) {
        let u = BUo.rawSplit(e);
        c = Brr.getBestVersionForData(u, n);
      }
      o = BUo.fromString(e, c || 40);
    } else throw Error("Invalid data");
    let s = Brr.getBestVersionForData(o, n);
    if (!s) throw Error("The amount of data is too big to be stored in a QR Code");
    if (!t) t = s;else if (t < s) throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + s + `.
`);
    let i = YUf(t, n, o),
      a = Urr.getSymbolSize(t),
      l = new NUf(a);
    if (WUf(l, t), qUf(l), VUf(l, t), UUo(l, n, 0), t >= 7) zUf(l, t);
    if (KUf(l, i), isNaN(r)) r = FUo.getBestMask(l, UUo.bind(null, l, n));
    return FUo.applyMask(r, l), UUo(l, n, r), {
      modules: l,
      version: t,
      errorCorrectionLevel: n,
      maskPattern: r,
      segments: o
    };
  }
  J4l.create = function (t, n) {
    if (typeof t > "u" || t === "") throw Error("No input text");
    let r = NUo.M,
      o,
      s;
    if (typeof n < "u") {
      if (r = NUo.from(n.errorCorrectionLevel, NUo.M), o = Brr.from(n.version), s = FUo.from(n.maskPattern), n.toSJISFunc) Urr.setToSJISFunction(n.toSJISFunc);
    }
    return JUf(t, o, r, s);
  };
});