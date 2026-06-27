// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kt = E(() => {
  Msn = wrs();
});
function SJe({
  writeFn: e,
  flushIntervalMs: t = 1000,
  maxBufferSize: n = 100,
  maxBufferBytes: r = 1 / 0,
  immediateMode: o = !1
}) {
  let s = [],
    i = 0,
    a = null,
    l = null;
  function c() {
    if (a) clearTimeout(a), a = null;
  }
  function u(m) {
    try {
      e(m);
    } catch {}
  }
  function d() {
    if (l) u(l.join("")), l = null;
    if (s.length === 0) return;
    u(s.join("")), s = [], i = 0, c();
  }
  function p() {
    if (!a) a = setTimeout(d, t);
  }
  function f() {
    if (l) {
      l.push(...s), s = [], i = 0, c();
      return;
    }
    let m = s;
    s = [], i = 0, c(), l = m, setImmediate(() => {
      let g = l;
      if (l = null, g) u(g.join(""));
    });
  }
  return {
    write(m) {
      if (o) {
        u(m);
        return;
      }
      if (s.push(m), i += m.length, p(), s.length >= n || i >= r) f();
    },
    flush: d,
    dispose() {
      d();
    }
  };
}
function o_(e) {
  return e;
}
function Fc(e) {
  return /^[\\/]{2}/.test(e);
}
function Tw(e) {
  if (!e.startsWith("/")) return !1;
  let t = [];
  for (let n of e.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      t.pop();
      continue;
    }
    if (t.push(n), t.length === 2 && t[0].toLowerCase() === "net") return !0;
  }
  return !1;
}
function qp(e) {
  return /^[\\/]{2}wsl(\$|\.localhost)[\\/]/i.test(e);
}
function mSr(e) {
  return Fc(e) && !qp(e);
}
function LR(e) {
  if (e === "~" || e.startsWith("~/")) return xrs.homedir() + e.slice(1);
  return e;
}
function Kie(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n === "*" || n === "?") return t;
    if (n === "[" && e.indexOf("]", t + 1) !== -1) return t;
  }
  return -1;
}
function gSr(e) {
  if (e.startsWith("\\\\?\\UNC\\")) return "\\\\" + e.slice(8);
  if (e.startsWith("\\\\?\\") && e.length >= 7 && e[5] === ":") return e.slice(4);
  return e;
}
function tv(e) {
  if (cee(e)) return gSr(e).replace(/^([\\/])[\\/]+/, "$1");
  return e;
}
function cee(e) {
  if (/^\\\\\?\\volume\{/i.test(e)) return Crs(e);
  let t = gSr(e);
  if (t !== e && Crs(t)) return !0;
  return Fc(t) && !qp(t);
}
function Crs(e) {
  return /(^|[\\/])\.{1,2}([\\/]|$)/.test(e) || e.includes("/");
}
function oUe(e) {
  try {
    return gSr(Irs.realpathSync.native(e));
  } catch {
    return null;
  }
}
function $sn(e, t) {
  let n = zie.resolve(t).toLowerCase(),
    r = zie.resolve(e).toLowerCase();
  if (zie.dirname(r) === n || r.startsWith(n + zie.sep)) return !0;
  let o = oUe(t)?.toLowerCase();
  if (o == null) return !1;
  let s = oUe(zie.dirname(zie.resolve(e)))?.toLowerCase();
  if (s == null) return !0;
  return s === o || s.startsWith(o + zie.sep);
}
var Irs, xrs, zie;