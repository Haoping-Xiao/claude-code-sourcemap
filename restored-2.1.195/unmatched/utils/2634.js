// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jeo
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jeo = Q((zmy, MYi) => {
  var MW = hm();
  m_();
  var Feo = [217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68, 139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123, 11, 240, 149, 33, 34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241, 220, 18, 117, 202, 31, 59, 190, 228, 209, 66, 61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3, 248, 17, 199, 246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238, 247, 132, 170, 114, 172, 53, 77, 106, 42, 150, 26, 210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81, 203, 204, 36, 145, 175, 80, 161, 244, 112, 57, 153, 124, 58, 133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227, 138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207, 225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27, 171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219, 71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173],
    DYi = [1, 2, 3, 5],
    AYd = function (e, t) {
      return e << t & 65535 | (e & 65535) >> 16 - t;
    },
    HYd = function (e, t) {
      return (e & 65535) >> t | e << 16 - t & 65535;
    };
  MYi.exports = MW.rc2 = MW.rc2 || {};
  MW.rc2.expandKey = function (e, t) {
    if (typeof e === "string") e = MW.util.createBuffer(e);
    t = t || 128;
    var n = e,
      r = e.length(),
      o = t,
      s = Math.ceil(o / 8),
      i = 255 >> (o & 7),
      a;
    for (a = r; a < 128; a++) n.putByte(Feo[n.at(a - 1) + n.at(a - r) & 255]);
    n.setAt(128 - s, Feo[n.at(128 - s) & i]);
    for (a = 127 - s; a >= 0; a--) n.setAt(a, Feo[n.at(a + 1) ^ n.at(a + s)]);
    return n;
  };
  var PYi = function (e, t, n) {
    var r = false,
      o = null,
      s = null,
      i = null,
      a,
      l,
      c,
      u,
      d = [];
    e = MW.rc2.expandKey(e, t);
    for (c = 0; c < 64; c++) d.push(e.getInt16Le());
    if (n) a = function (m) {
      for (c = 0; c < 4; c++) m[c] += d[u] + (m[(c + 3) % 4] & m[(c + 2) % 4]) + (~m[(c + 3) % 4] & m[(c + 1) % 4]), m[c] = AYd(m[c], DYi[c]), u++;
    }, l = function (m) {
      for (c = 0; c < 4; c++) m[c] += d[m[(c + 3) % 4] & 63];
    };else a = function (m) {
      for (c = 3; c >= 0; c--) m[c] = HYd(m[c], DYi[c]), m[c] -= d[u] + (m[(c + 3) % 4] & m[(c + 2) % 4]) + (~m[(c + 3) % 4] & m[(c + 1) % 4]), u--;
    }, l = function (m) {
      for (c = 3; c >= 0; c--) m[c] -= d[m[(c + 3) % 4] & 63];
    };
    var p = function (m) {
        var g = [];
        for (c = 0; c < 4; c++) {
          var h = o.getInt16Le();
          if (i !== null) if (n) h ^= i.getInt16Le();else i.putInt16Le(h);
          g.push(h & 65535);
        }
        u = n ? 0 : 63;
        for (var y = 0; y < m.length; y++) for (var b = 0; b < m[y][0]; b++) m[y][1](g);
        for (c = 0; c < 4; c++) {
          if (i !== null) if (n) i.putInt16Le(g[c]);else g[c] ^= i.getInt16Le();
          s.putInt16Le(g[c]);
        }
      },
      f = null;
    return f = {
      start: function (m, g) {
        if (m) {
          if (typeof m === "string") m = MW.util.createBuffer(m);
        }
        r = false, o = MW.util.createBuffer(), s = g || new MW.util.createBuffer(), i = m, f.output = s;
      },
      update: function (m) {
        if (!r) o.putBuffer(m);
        while (o.length() >= 8) p([[5, a], [1, l], [6, a], [1, l], [5, a]]);
      },
      finish: function (m) {
        var g = true;
        if (n) if (m) g = m(8, o, !n);else {
          var h = o.length() === 8 ? 8 : 8 - o.length();
          o.fillWithByte(h, h);
        }
        if (g) r = true, f.update();
        if (!n) {
          if (g = o.length() === 0, g) if (m) g = m(8, s, !n);else {
            var y = s.length(),
              b = s.at(y - 1);
            if (b > y) g = false;else s.truncate(b);
          }
        }
        return g;
      }
    }, f;
  };
  MW.rc2.startEncrypting = function (e, t, n) {
    var r = MW.rc2.createEncryptionCipher(e, 128);
    return r.start(t, n), r;
  };
  MW.rc2.createEncryptionCipher = function (e, t) {
    return PYi(e, t, true);
  };
  MW.rc2.startDecrypting = function (e, t, n) {
    var r = MW.rc2.createDecryptionCipher(e, 128);
    return r.start(t, n), r;
  };
  MW.rc2.createDecryptionCipher = function (e, t) {
    return PYi(e, t, false);
  };
});