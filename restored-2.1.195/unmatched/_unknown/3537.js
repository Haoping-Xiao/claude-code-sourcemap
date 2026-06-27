// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vFa
// matched 2.1.88 source: node_modules/@mixmark-io/domino/lib/HTMLParser.js
// class=new  jaccard=0.0011  score=0.8326  fileCov=0.0011
// note: nearest: node_modules/@mixmark-io/domino/lib/HTMLParser.js (0.0011); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vFa = Q(TFa => {
  var Vyo = TFa,
    qyo = "\uFFFD";
  Vyo.length = function (t) {
    var n = 0,
      r = 0;
    for (var o = 0; o < t.length; ++o) if (r = t.charCodeAt(o), r < 128) n += 1;else if (r < 2048) n += 2;else if ((r & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320) ++o, n += 4;else n += 3;
    return n;
  };
  Vyo.read = function (t, n, r) {
    if (r - n < 1) return "";
    var o = "";
    for (var s = n; s < r;) {
      var i = t[s++];
      if (i <= 127) o += String.fromCharCode(i);else if (i >= 192 && i < 224) {
        var a = (i & 31) << 6 | t[s++] & 63;
        o += a >= 128 ? String.fromCharCode(a) : qyo;
      } else if (i >= 224 && i < 240) {
        var l = (i & 15) << 12 | (t[s++] & 63) << 6 | t[s++] & 63;
        o += l >= 2048 ? String.fromCharCode(l) : qyo;
      } else if (i >= 240) {
        var c = (i & 7) << 18 | (t[s++] & 63) << 12 | (t[s++] & 63) << 6 | t[s++] & 63;
        if (c < 65536 || c > 1114111) o += qyo;else c -= 65536, o += String.fromCharCode(55296 + (c >> 10)), o += String.fromCharCode(56320 + (c & 1023));
      }
    }
    return o;
  };
  Vyo.write = function (t, n, r) {
    var o = r,
      s,
      i;
    for (var a = 0; a < t.length; ++a) if (s = t.charCodeAt(a), s < 128) n[r++] = s;else if (s < 2048) n[r++] = s >> 6 | 192, n[r++] = s & 63 | 128;else if ((s & 64512) === 55296 && ((i = t.charCodeAt(a + 1)) & 64512) === 56320) s = 65536 + ((s & 1023) << 10) + (i & 1023), ++a, n[r++] = s >> 18 | 240, n[r++] = s >> 12 & 63 | 128, n[r++] = s >> 6 & 63 | 128, n[r++] = s & 63 | 128;else n[r++] = s >> 12 | 224, n[r++] = s >> 6 & 63 | 128, n[r++] = s & 63 | 128;
    return r - o;
  };
});