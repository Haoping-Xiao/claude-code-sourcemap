// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xdl
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xdl = Q(I_t => {
  Object.defineProperty(I_t, "__esModule", {
    value: true
  });
  I_t.hyphenate = I_t.parse = void 0;
  function Xlf(e) {
    let t = [],
      n = 0,
      r = 0,
      o = 0,
      s = 0,
      i = 0,
      a = null;
    while (n < e.length) switch (e.charCodeAt(n++)) {
      case 40:
        r++;
        break;
      case 41:
        r--;
        break;
      case 39:
        if (o === 0) o = 39;else if (o === 39 && e.charCodeAt(n - 1) !== 92) o = 0;
        break;
      case 34:
        if (o === 0) o = 34;else if (o === 34 && e.charCodeAt(n - 1) !== 92) o = 0;
        break;
      case 58:
        if (!a && r === 0 && o === 0) a = Idl(e.substring(i, n - 1).trim()), s = n;
        break;
      case 59:
        if (a && s > 0 && r === 0 && o === 0) {
          let c = e.substring(s, n - 1).trim();
          t.push(a, c), i = n, s = 0, a = null;
        }
        break;
    }
    if (a && s) {
      let l = e.slice(s).trim();
      t.push(a, l);
    }
    return t;
  }
  I_t.parse = Xlf;
  function Idl(e) {
    return e.replace(/[a-z][A-Z]/g, t => t.charAt(0) + "-" + t.charAt(1)).toLowerCase();
  }
  I_t.hyphenate = Idl;
});