// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c3i
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var c3i = E(() => {
  l3i();
});
function q4d(e, t) {
  e = e.slice(t);
  for (let r = 1; r < cXr.length; r++) if (e.charCodeAt(r) !== cXr[r]) return;
  let n = e.indexOf("\x07", XRn.length);
  if (n === -1) return;
  return e.slice(0, n + 1);
}
function X4d(e) {
  for (let t = 2; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n === Y4d) return t;
    if (n === K4d) continue;
    if (n >= V4d && n <= z4d) continue;
    break;
  }
  return -1;
}
function J4d(e, t) {
  e = e.slice(t);
  let n = X4d(e);
  if (n === -1) return;
  return e.slice(0, n + 1);
}
function Q4d(e) {
  if (!e.includes(";")) return [e];
  let t = e.slice(2, -1).split(";"),
    n = [];
  for (let r = 0; r < t.length; r++) {
    let o = t[r];
    if (o === "38" || o === "48") {
      if (r + 2 < t.length && t[r + 1] === "5") {
        n.push(t.slice(r, r + 3).join(";")), r += 2;
        continue;
      } else if (r + 4 < t.length && t[r + 1] === "2") {
        n.push(t.slice(r, r + 5).join(";")), r += 4;
        continue;
      }
    }
    n.push(o);
  }
  return n.map(r => `\x1B[${r}m`);
}
function Fit(e, t = Number.POSITIVE_INFINITY) {
  let n = [],
    r = 0,
    o = 0;
  while (r < e.length) {
    let s = e.codePointAt(r);
    if (t3i.has(s)) {
      let l,
        c = e.codePointAt(r + 1);
      if (c === r3i) {
        if (l = q4d(e, r), l) n.push({
          type: "ansi",
          code: l,
          endCode: uXr(l)
        });
      } else if (c === n3i) {
        if (l = J4d(e, r), l) {
          let u = Q4d(l);
          for (let d of u) n.push({
            type: "ansi",
            code: d,
            endCode: uXr(d)
          });
        }
      }
      if (l) {
        r += l.length;
        continue;
      }
    }
    let i = gXr(s),
      a = String.fromCodePoint(s);
    if (n.push({
      type: "char",
      value: a,
      fullWidth: i
    }), r += a.length, o += i ? 2 : a.length, o >= t) break;
  }
  return n;
}
var V4d = 48,
  z4d = 57,
  K4d = 59,
  Y4d = 109;