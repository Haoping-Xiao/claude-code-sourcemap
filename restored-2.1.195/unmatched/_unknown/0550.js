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
    return !1;
  }
  let n = (process.env.no_proxy || process.env.NO_PROXY || "").toLowerCase();
  if (!n) return !1;
  if (n === "*") return !0;
  let r = Number.parseInt(t.port, 10) || HSu[t.protocol.split(":", 1)[0]] || 0,
    o = n_s(t.hostname.toLowerCase());
  return n.split(/[\s,]+/).some(s => {
    if (!s) return !1;
    let [i, a] = TSu(s);
    if (i = n_s(i), !i) return !1;
    if (a && a !== r) return !1;
    if (i.charAt(0) === "*") i = i.slice(1);
    if (i.charAt(0) === ".") return o.endsWith(i);
    return o === i || t_s(o) && t_s(i);
  });
}
var ESu,
  r_s = e => {
    let t = e.split(".");
    if (t.length !== 4) return !1;
    if (t[0] !== "127") return !1;
    return t.every(n => /^\d+$/.test(n) && Number(n) >= 0 && Number(n) <= 255);
  },
  ASu = e => {
    if (e === "::1") return !0;
    let t = e.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
    if (t) return r_s(t[1]);
    let n = e.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
    if (n) {
      let o = parseInt(n[1], 16);
      return o >= 32512 && o <= 32767;
    }
    let r = e.split(":");
    if (r.length === 8) {
      for (let o = 0; o < 7; o++) if (!/^0+$/.test(r[o])) return !1;
      return /^0*1$/.test(r[7]);
    }
    return !1;
  },
  t_s = e => {
    if (!e) return !1;
    if (ESu.has(e)) return !0;
    if (r_s(e)) return !0;
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