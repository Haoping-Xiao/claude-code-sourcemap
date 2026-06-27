// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module e_s
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var e_s = E(() => {
  XH();
  Zys = SSu;
});
function qxr(e) {
  let t;
  try {
    t = new URL(e);
  } catch (s) {
    return false;
  }
  let n = (process.env.no_proxy || process.env.NO_PROXY || "").toLowerCase();
  if (!n) return false;
  if (n === "*") return true;
  let r = Number.parseInt(t.port, 10) || HSu[t.protocol.split(":", 1)[0]] || 0,
    o = n_s(t.hostname.toLowerCase());
  return n.split(/[\s,]+/).some(s => {
    if (!s) return false;
    let [i, a] = TSu(s);
    if (i = n_s(i), !i) return false;
    if (a && a !== r) return false;
    if (i.charAt(0) === "*") i = i.slice(1);
    if (i.charAt(0) === ".") return o.endsWith(i);
    return o === i || t_s(o) && t_s(i);
  });
}
var ESu,
  r_s = e => {
    let t = e.split(".");
    if (t.length !== 4) return false;
    if (t[0] !== "127") return false;
    return t.every(n => /^\d+$/.test(n) && Number(n) >= 0 && Number(n) <= 255);
  },
  ASu = e => {
    if (e === "::1") return true;
    let t = e.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
    if (t) return r_s(t[1]);
    let n = e.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
    if (n) {
      let o = parseInt(n[1], 16);
      return o >= 32512 && o <= 32767;
    }
    let r = e.split(":");
    if (r.length === 8) {
      for (let o = 0; o < 7; o++) if (!/^0+$/.test(r[o])) return false;
      return /^0*1$/.test(r[7]);
    }
    return false;
  },
  t_s = e => {
    if (!e) return false;
    if (ESu.has(e)) return true;
    if (r_s(e)) return true;
    return ASu(e);
  },
  HSu,
  TSu = e => {
    let t = e,
      n = 0;
    if (t.charAt(0) === "[") {
      let s = t.indexOf("]");
      if (s !== -1) {
        let i = t.slice(1, s),
          a = t.slice(s + 1);
        if (a.charAt(0) === ":" && /^\d+$/.test(a.slice(1))) n = Number.parseInt(a.slice(1), 10);
        return [i, n];
      }
    }
    let r = t.indexOf(":"),
      o = t.lastIndexOf(":");
    if (r !== -1 && r === o && /^\d+$/.test(t.slice(o + 1))) n = Number.parseInt(t.slice(o + 1), 10), t = t.slice(0, o);
    return [t, n];
  },
  n_s = e => {
    if (!e) return e;
    if (e.charAt(0) === "[" && e.charAt(e.length - 1) === "]") e = e.slice(1, -1);
    return e.replace(/\.+$/, "");
  };