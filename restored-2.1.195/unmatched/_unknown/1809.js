// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c5r
// matched 2.1.88 source: node_modules/jws/lib/sign-stream.js
// class=new  jaccard=0.052  score=1  fileCov=0.052
// note: nearest: node_modules/jws/lib/sign-stream.js (0.052); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module c5r] (exports=ikh, module=uyi)
var ikh = {};
var uyi = {
  exports: ikh
};
var Uvn = iot().Buffer,
  iyi = oyi(),
  Fvn = 128,
  ayi = 0,
  jbd = 32,
  Gbd = 16,
  Wbd = 2,
  lyi = Gbd | jbd | ayi << 6,
  jvn = Wbd | ayi << 6;
function qbd(e) {
  return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function cyi(e) {
  if (Uvn.isBuffer(e)) return e;else if (typeof e === "string") return Uvn.from(e, "base64");
  throw TypeError("ECDSA signature must be a Base64 string or a Buffer");
}
function Vbd(e, t) {
  e = cyi(e);
  var n = iyi(t),
    r = n + 1,
    o = e.length,
    s = 0;
  if (e[s++] !== lyi) throw Error('Could not find expected "seq"');
  var i = e[s++];
  if (i === (Fvn | 1)) i = e[s++];
  if (o - s < i) throw Error('"seq" specified length of "' + i + '", only "' + (o - s) + '" remaining');
  if (e[s++] !== jvn) throw Error('Could not find expected "int" for "r"');
  var a = e[s++];
  if (o - s - 2 < a) throw Error('"r" specified length of "' + a + '", only "' + (o - s - 2) + '" available');
  if (r < a) throw Error('"r" specified length of "' + a + '", max of "' + r + '" is acceptable');
  var l = s;
  if (s += a, e[s++] !== jvn) throw Error('Could not find expected "int" for "s"');
  var c = e[s++];
  if (o - s !== c) throw Error('"s" specified length of "' + c + '", expected "' + (o - s) + '"');
  if (r < c) throw Error('"s" specified length of "' + c + '", max of "' + r + '" is acceptable');
  var u = s;
  if (s += c, s !== o) throw Error('Expected to consume entire buffer, but "' + (o - s) + '" bytes remain');
  var d = n - a,
    p = n - c,
    f = Uvn.allocUnsafe(d + a + p + c);
  for (s = 0; s < d; ++s) f[s] = 0;
  e.copy(f, s, l + Math.max(-d, 0), l + a), s = n;
  for (var m = s; s < m + p; ++s) f[s] = 0;
  return e.copy(f, s, u + Math.max(-p, 0), u + c), f = f.toString("base64"), f = qbd(f), f;
}
function syi(e, t, n) {
  var r = 0;
  while (t + r < n && e[t + r] === 0) ++r;
  var o = e[t + r] >= Fvn;
  if (o) --r;
  return r;
}
function zbd(e, t) {
  e = cyi(e);
  var n = iyi(t),
    r = e.length;
  if (r !== n * 2) throw TypeError('"' + t + '" signatures must be "' + n * 2 + '" bytes, saw "' + r + '"');
  var o = syi(e, 0, n),
    s = syi(e, n, e.length),
    i = n - o,
    a = n - s,
    l = 2 + i + 1 + 1 + a,
    c = l < Fvn,
    u = Uvn.allocUnsafe((c ? 2 : 3) + l),
    d = 0;
  if (u[d++] = lyi, c) u[d++] = l;else u[d++] = Fvn | 1, u[d++] = l & 255;
  if (u[d++] = jvn, u[d++] = i, o < 0) u[d++] = 0, d += e.copy(u, d, 0, n);else d += e.copy(u, d, o, n);
  if (u[d++] = jvn, u[d++] = a, s < 0) u[d++] = 0, e.copy(u, d, n);else e.copy(u, d, n + s);
  return u;
}
uyi.exports = {
  derToJose: Vbd,
  joseToDer: zbd
};