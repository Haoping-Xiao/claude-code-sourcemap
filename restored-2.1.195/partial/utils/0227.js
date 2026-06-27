// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jt
// matched 2.1.88 source: src/utils/fsOperations.ts
// class=partial  jaccard=0.1473  score=0.6834  fileCov=0.1581
// note: low-confidence suggestion: src/utils/fsOperations.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jt] deps: ft, je
Wge = require("fs"), C8m = (() => {
  let e = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if (e !== void 0) {
    let t = Number(e);
    if (!Number.isNaN(t) && t >= 0) return t;
  }
  return 1 / 0;
})(), f7c = {
  [Symbol.dispose]() {}
};
gy = m7c;
function GIt(e, t) {
  if (Fc(t) && !qp(t) || Tw(t)) return;
  let n = s_.resolve(t),
    r = s_.parse(n).root,
    o = r,
    s = n.slice(r.length).split(/[\\/]+/).filter(Boolean),
    i = 0,
    a = 64;
  while (s.length > 0 && i < a) {
    let l = s_.join(o, s[0]);
    if (Tw(l)) return s.length === 1 ? l : s_.join(l, ...s.slice(1));
    let c;
    try {
      c = e.lstatSync(l);
    } catch {
      return;
    }
    if (!c.isSymbolicLink()) {
      s.shift(), o = l;
      continue;
    }
    i++;
    let u;
    try {
      u = e.readlinkSync(l);
    } catch {
      return;
    }
    let d = s_.isAbsolute(u) ? u : s_.resolve(o, u);
    if (Fc(d) && !qp(d) || Tw(d)) return s.shift(), s.length === 0 ? d : s_.join(d, ...s);
    s.shift();
    let p = s_.parse(d).root || s_.sep;
    o = p, s = [...d.slice(p.length).split(/[\\/]+/).filter(Boolean), ...s];
  }
  return;
}
function jd(e, t) {
  if (Fc(t) && !qp(t) || Tw(t)) return {
    resolvedPath: t,
    isSymlink: !1,
    isCanonical: !1
  };
  let n = GIt(e, t);
  if (n !== void 0) return {
    resolvedPath: n,
    isSymlink: !0,
    isCanonical: !1
  };
  try {
    let r = e.realpathSync(t);
    return {
      resolvedPath: r,
      isSymlink: r !== t,
      isCanonical: !0
    };
  } catch (r) {
    return {
      resolvedPath: t,
      isSymlink: !1,
      isCanonical: !1
    };
  }
}
function fee(e, t, n) {
  let {
    resolvedPath: r
  } = jd(e, t);
  if (n.has(r)) return !0;
  return n.add(r), !1;
}
function eae(e, t) {
  if (Fc(t) && !qp(t) || Tw(t)) return t;
  let n = GIt(e, t);
  if (n !== void 0) return n;
  let r = t,
    o = [];
  while (r !== s_.dirname(r)) {
    let s, i;
    try {
      s = e.readlinkSync(r);
    } catch (a) {
      i = on(a);
    }
    if (s !== void 0) {
      let a = s_.isAbsolute(s) ? s : s_.resolve(s_.dirname(r), s);
      if (Fc(a) && !qp(a) || Tw(a)) return o.length === 0 ? a : s_.join(a, ...o);
      try {
        let l = e.realpathSync(r);
        return o.length === 0 ? l : s_.join(l, ...o);
      } catch {
        let l = r,
          c = 0,
          u = 64;
        while (c < u) {
          let d;
          try {
            d = e.readlinkSync(l);
          } catch {
            break;
          }
          let p = s_.isAbsolute(d) ? d : s_.resolve(s_.dirname(l), d);
          if (Fc(p) && !qp(p) || Tw(p)) {
            l = p;
            break;
          }
          let f;
          try {
            f = e.lstatSync(p);
          } catch {
            l = p;
            break;
          }
          if (!f.isSymbolicLink()) {
            l = p;
            break;
          }
          l = p, c++;
        }
        return o.length === 0 ? l : s_.join(l, ...o);
      }
    }
    if (i === "ENOENT") {
      o.unshift(s_.basename(r)), r = s_.dirname(r);
      continue;
    }
    try {
      let a = e.realpathSync(r);
      if (a !== r) return o.length === 0 ? a : s_.join(a, ...o);
    } catch {}
    return;
  }
  return;
}
function i_(e) {
  let t = e;
  if (t === "~") t = NEr.homedir().normalize("NFC");else if (t.startsWith("~/")) t = s_.join(NEr.homedir().normalize("NFC"), t.slice(2));
  let n = new Set(),
    r = qt();
  if (n.add(t), Fc(t) && !qp(t) || Tw(t)) return Array.from(n);
  let o = GIt(r, t);
  if (o !== void 0) return n.add(o), Array.from(n);
  try {
    let a = t,
      l = new Set(),
      c = 64;
    for (let u = 0; u < c; u++) {
      if (l.has(a)) break;
      l.add(a);
      let d, p;
      try {
        d = r.readlinkSync(a);
      } catch (m) {
        p = on(m);
      }
      if (d === void 0) {
        if (p === "ENOENT") {
          if (a === t) {
            let m = eae(r, t);
            if (m !== void 0) n.add(m);
          }
        }
        break;
      }
      let f = s_.isAbsolute(d) ? d : s_.resolve(s_.dirname(a), d);
      if (n.add(f), Fc(f) && !qp(f) || Tw(f)) return Array.from(n);
      a = f;
    }
  } catch {}
  let {
    resolvedPath: s,
    isSymlink: i
  } = jd(r, t);
  if (i && s !== t) n.add(s);
  return Array.from(n);
}
function qt() {
  return g7c;
}
async function Min(e, t, n) {
  await using r = await ov.open(e, "r");
  let o = (await r.stat()).size;
  if (o <= t) return null;
  let s = Math.min(o - t, n),
    i = Buffer.allocUnsafe(s),
    a = 0;
  while (a < s) {
    let {
      bytesRead: l
    } = await r.read(i, a, s - a, t + a);
    if (l === 0) break;
    a += l;
  }
  return {
    content: i.toString("utf8", 0, a),
    bytesRead: a,
    bytesTotal: o
  };
}
async function vx(e, t) {
  await using n = await ov.open(e, "r");
  let r = (await n.stat()).size;
  if (r === 0) return {
    content: "",
    bytesRead: 0,
    bytesTotal: 0
  };
  let o = Math.max(0, r - t),
    s = r - o,
    i = Buffer.allocUnsafe(s),
    a = 0;
  while (a < s) {
    let {
      bytesRead: l
    } = await n.read(i, a, s - a, o + a);
    if (l === 0) break;
    a += l;
  }
  return {
    content: i.toString("utf8", 0, a),
    bytesRead: a,
    bytesTotal: r
  };
}
async function* ris(e, t = 65536) {
  let n = await ov.open(e, "r"),
    r = Buffer.alloc(t),
    o = 0,
    s = [],
    i = 0;
  try {
    while (!0) {
      let {
        bytesRead: a
      } = await n.read(r, 0, t, o);
      if (a === 0) break;
      o += a;
      let l = r.subarray(0, a),
        c = 0;
      while (c < a) {
        let u = l.indexOf(10, c);
        if (u === -1) {
          s.push(Buffer.from(l.subarray(c))), i += a - c;
          break;
        }
        if (i === 0) yield l.subarray(c, u);else yield Buffer.concat([...s, l.subarray(c, u)], i + (u - c)), s = [], i = 0;
        c = u + 1;
      }
    }
  } finally {
    await n.close();
  }
  if (i > 0) yield s.length === 1 ? s[0] : Buffer.concat(s, i);
}
async function* $in(e) {
  let n = await ov.open(e, "r");
  try {
    let o = (await n.stat()).size,
      s = Buffer.alloc(0),
      i = Buffer.alloc(4096);
    while (o > 0) {
      let a = Math.min(4096, o);
      o -= a, await n.read(i, 0, a, o);
      let l = Buffer.concat([i.subarray(0, a), s]),
        c = l.indexOf(10);
      if (c === -1) {
        s = l;
        continue;
      }
      s = Buffer.from(l.subarray(0, c));
      let u = l.toString("utf8", c + 1).split(`
`);
      for (let d = u.length - 1; d >= 0; d--) {
        let p = u[d];
        if (p) yield p;
      }
    }
    if (s.length > 0) yield s.toString("utf8");
  } finally {
    await n.close();
  }
}
var Lp,
  ov,
  NEr,
  s_,
  Pin = "\u2192",
  BEr,
  g7c;