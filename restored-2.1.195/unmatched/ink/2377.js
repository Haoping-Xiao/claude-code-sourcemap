// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jit
// matched 2.1.88 source: src/ink/termio/parser.ts
// class=new  jaccard=0.0295  score=0.4027  fileCov=0.0308
// note: nearest: src/ink/termio/parser.ts (0.0295); dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jit = E(() => {
  CBt();
  pXr();
  QRn();
  dXr();
  i3i();
  u3i();
});
function p3i(e) {
  let t = Qke(),
    n = [...t.feed(e), ...t.flush()],
    r = [];
  for (let o of n) {
    if (o.type === "text") {
      for (let {
        segment: i
      } of BS().segment(o.value)) r.push({
        type: "char",
        value: i
      });
      continue;
    }
    let s = o.value;
    if (s.charCodeAt(1) === gW.CSI && s.endsWith("m")) {
      for (let i of Fit(s)) if (i.type === "ansi") r.push(i);
    } else if (s.startsWith("\x1B]8;") && (s.endsWith($M) || s.endsWith(d3i))) {
      let i = s.endsWith(d3i) ? s.slice(0, -2) + $M : s;
      r.push({
        type: "ansi",
        code: i,
        endCode: Z4d
      });
    }
  }
  return r;
}
function e3d(e) {
  return e.code === e.endCode;
}
function Git(e) {
  return e.filter(t => !e3d(t));
}
function w1(e, t, n) {
  let r = p3i(e),
    o = [],
    s = 0,
    i = "",
    a = false;
  for (let c of r) {
    let u = c.type === "ansi" ? 0 : rn(c.value);
    if (n !== void 0 && s >= n) {
      if (c.type === "ansi" || u > 0 || !a) break;
    }
    if (c.type === "ansi") {
      if (o.push(c), a) i += c.code;
    } else {
      if (!a && s >= t) {
        if (t > 0 && u === 0) continue;
        a = true, o = Git(z7(o)), i = v1(o);
      }
      if (a) i += c.value;
      s += u;
    }
  }
  let l = Git(z7(o));
  return i += v1(Y_e(l)), i;
}
function f3i(e, t) {
  let n = p3i(e),
    r = 0,
    o = [],
    s = "",
    i = false,
    a = false,
    l = [],
    c = "",
    u = false;
  for (let f of n) {
    let m = f.type === "ansi" ? 0 : rn(f.value);
    if (!a) if (r >= t && (f.type === "ansi" || m > 0 || !i)) a = true;else if (f.type === "ansi") {
      if (o.push(f), i) s += f.code;
    } else {
      if (!i) i = true, o = Git(z7(o)), s = v1(o);
      s += f.value;
    }
    if (f.type === "ansi") {
      if (l.push(f), u) c += f.code;
    } else {
      if (!u && r >= t) {
        if (!(t > 0 && m === 0)) u = true, l = Git(z7(l)), c = v1(l);
      }
      if (u) c += f.value;
    }
    if (f.type !== "ansi") r += m;
  }
  let d = Git(z7(o));
  s += v1(Y_e(d));
  let p = Git(z7(l));
  return c += v1(Y_e(p)), [s, c];
}
var d3i = "\x1B\\",
  Z4d;