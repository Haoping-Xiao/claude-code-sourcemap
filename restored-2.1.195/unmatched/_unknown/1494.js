// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vii
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vii = Q(grt => {
  Object.defineProperty(grt, "__esModule", {
    value: true
  });
  grt.toUtf8 = grt.fromUtf8 = void 0;
  var kfd = e => {
    let t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      let o = e.charCodeAt(n);
      if (o < 128) t.push(o);else if (o < 2048) t.push(o >> 6 | 192, o & 63 | 128);else if (n + 1 < e.length && (o & 64512) === 55296 && (e.charCodeAt(n + 1) & 64512) === 56320) {
        let s = 65536 + ((o & 1023) << 10) + (e.charCodeAt(++n) & 1023);
        t.push(s >> 18 | 240, s >> 12 & 63 | 128, s >> 6 & 63 | 128, s & 63 | 128);
      } else t.push(o >> 12 | 224, o >> 6 & 63 | 128, o & 63 | 128);
    }
    return Uint8Array.from(t);
  };
  grt.fromUtf8 = kfd;
  var Rfd = e => {
    let t = "";
    for (let n = 0, r = e.length; n < r; n++) {
      let o = e[n];
      if (o < 128) t += String.fromCharCode(o);else if (192 <= o && o < 224) {
        let s = e[++n];
        t += String.fromCharCode((o & 31) << 6 | s & 63);
      } else if (240 <= o && o < 365) {
        let i = "%" + [o, e[++n], e[++n], e[++n]].map(a => a.toString(16)).join("%");
        t += decodeURIComponent(i);
      } else t += String.fromCharCode((o & 15) << 12 | (e[++n] & 63) << 6 | e[++n] & 63);
    }
    return t;
  };
  grt.toUtf8 = Rfd;
});