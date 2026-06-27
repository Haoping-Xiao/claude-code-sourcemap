// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mm
// matched 2.1.88 source: src/utils/git/gitConfigParser.ts
// class=partial  jaccard=0.2012  score=1  fileCov=0.2012
// note: low-confidence suggestion: src/utils/git/gitConfigParser.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Mm] deps: ys, Jt
ATs = require("path");
async function gRt(e, t, n, r) {
  try {
    let o = await HTs.readFile(TTs.join(e, "config"), "utf-8");
    return G0r(o, t, n, r);
  } catch {
    return null;
  }
}
function G0r(e, t, n, r) {
  let o = e.split(`
`),
    s = t.toLowerCase(),
    i = r.toLowerCase(),
    a = false;
  for (let l of o) {
    let c = l.trim();
    if (c.length === 0 || c[0] === "#" || c[0] === ";") continue;
    if (c[0] === "[") {
      a = E$u(c, s, n);
      continue;
    }
    if (!a) continue;
    let u = _$u(c);
    if (u && u.key.toLowerCase() === i) return u.value;
  }
  return null;
}
function _$u(e) {
  let t = 0;
  while (t < e.length && A$u(e[t])) t++;
  if (t === 0) return null;
  let n = e.slice(0, t);
  while (t < e.length && (e[t] === " " || e[t] === "\t")) t++;
  if (t >= e.length || e[t] !== "=") return null;
  t++;
  while (t < e.length && (e[t] === " " || e[t] === "\t")) t++;
  let r = b$u(e, t);
  return {
    key: n,
    value: r
  };
}
function b$u(e, t) {
  let n = "",
    r = false,
    o = t;
  while (o < e.length) {
    let s = e[o];
    if (!r && (s === "#" || s === ";")) break;
    if (s === '"') {
      r = !r, o++;
      continue;
    }
    if (s === "\\" && o + 1 < e.length) {
      let i = e[o + 1];
      if (r) {
        switch (i) {
          case "n":
            n += `
`;
            break;
          case "t":
            n += "\t";
            break;
          case "b":
            n += "\b";
            break;
          case '"':
            n += '"';
            break;
          case "\\":
            n += "\\";
            break;
          default:
            n += i;
            break;
        }
        o += 2;
        continue;
      }
      if (i === "\\") {
        n += "\\", o += 2;
        continue;
      }
    }
    n += s, o++;
  }
  if (!r) n = S$u(n);
  return n;
}
function S$u(e) {
  let t = e.length;
  while (t > 0 && (e[t - 1] === " " || e[t - 1] === "\t")) t--;
  return e.slice(0, t);
}
function E$u(e, t, n) {
  let r = 1;
  while (r < e.length && e[r] !== "]" && e[r] !== " " && e[r] !== "\t" && e[r] !== '"') r++;
  if (e.slice(1, r).toLowerCase() !== t) return false;
  if (n === null) return r < e.length && e[r] === "]";
  while (r < e.length && (e[r] === " " || e[r] === "\t")) r++;
  if (r >= e.length || e[r] !== '"') return false;
  r++;
  let s = "";
  while (r < e.length && e[r] !== '"') {
    if (e[r] === "\\" && r + 1 < e.length) {
      let i = e[r + 1];
      if (i === "\\" || i === '"') {
        s += i, r += 2;
        continue;
      }
      s += i, r += 2;
      continue;
    }
    s += e[r], r++;
  }
  if (r >= e.length || e[r] !== '"') return false;
  if (r++, r >= e.length || e[r] !== "]") return false;
  return s === n;
}
function A$u(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "-";
}
var HTs, TTs;