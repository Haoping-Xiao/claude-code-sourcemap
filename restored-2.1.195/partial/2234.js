// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fh
// matched 2.1.88 source: src/tools/AgentTool/constants.ts
// class=partial  jaccard=0.1324  score=0.1539  fileCov=0.4864
// note: low-confidence suggestion: src/tools/AgentTool/constants.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fh = E(() => {
  Y1i = new Set(["Explore", "Plan"]);
});
function Q1i(e) {
  if (e.length > 1e4) return null;
  for (let t of d1d) if (t.pattern.test(e)) return t;
  return null;
}
function Z1i(e) {
  return Q1i(e)?.warning ?? null;
}
function Zst(e) {
  return Q1i(e)?.category ?? null;
}
function mce(e, t, n) {
  if (n === null || !g1d.has(n)) return "none";
  if (e.length > 2000) return "unknown";
  try {
    let r = h1d(e),
      o = y1d(e);
    if (r === null && o === null) return "unknown";
    if (r === "unknown" || o === "unknown") return "unknown";
    let s = [...(r ?? []), ...(o ?? [])];
    if (s.length === 0) return "unknown";
    let i = new Set();
    for (let a of s) {
      let l = _1d(a, t);
      if (l === "unknown") return "unknown";
      i.add(l);
    }
    if (i.size > 1) return "mixed";
    return i.values().next().value ?? "unknown";
  } catch (r) {
    return ke(new mi(`destructive-target-scope parse failed: ${be(r)}`, "destructive-target-scope parse failed")), "unknown";
  }
}
function h1d(e) {
  let t = !1,
    n = [];
  for (let r of e.matchAll(p1d)) {
    let o = r[1] ?? "";
    if (!/(?:^|\s)-[a-zA-Z]/.test(o)) continue;
    if (/(?:^|\s)-(Recurse|Force|Path|LiteralPath)\b/i.test(o)) continue;
    t = !0;
    let s = o.replace(/\d{0,4}>{1,2}\s*\S*/g, " ").replace(/\d{0,4}<{1,2}\s*\S*/g, " "),
      i = eNi(s, !0);
    if (i === "unknown") return "unknown";
    let a = !1;
    for (let l of i) {
      if (!a && l === "--") {
        a = !0;
        continue;
      }
      if (!a && l.startsWith("-")) continue;
      n.push(l);
    }
  }
  return t ? n : null;
}
function y1d(e) {
  let t = !1,
    n = [];
  for (let r of e.matchAll(f1d)) {
    let o = r[1] ?? "";
    if (!/-(Recurse|Force)\b/i.test(o)) continue;
    if (t = !0, /[()]/.test(o)) return "unknown";
    let s = eNi(o, !1);
    if (s === "unknown") return "unknown";
    for (let i = 0; i < s.length; i++) {
      let a = s[i];
      if (a.startsWith("-")) {
        let l = a.indexOf(":"),
          c = (l >= 0 ? a.slice(1, l) : a.slice(1)).toLowerCase(),
          u = l >= 0 ? a.slice(l + 1) : void 0;
        if (c === "path" || c === "literalpath") {
          if (u !== void 0 && u !== "") n.push(u);else {
            let d = s[i + 1];
            if (d !== void 0 && !d.startsWith("-")) n.push(d), i++;
          }
        } else if (u !== void 0 && u !== "") ;else if (u === "") {
          if (s[i + 1] !== void 0 && !s[i + 1].startsWith("-")) i++;
        } else if (!m1d.has(c)) {
          if (s[i + 1] !== void 0 && !s[i + 1].startsWith("-")) i++;
        }
        continue;
      }
      n.push(a);
    }
  }
  return t ? n : null;
}
function eNi(e, t) {
  let n = [],
    r = "",
    o = 0;
  while (o < e.length) {
    let s = e[o];
    if (s === " " || s === "\t") {
      if (r !== "") n.push(r), r = "";
      o++;
      continue;
    }
    if (s === "`") return "unknown";
    if (s === '"' || s === "'") {
      let i = s;
      o++;
      while (o < e.length && e[o] !== i) {
        if (t && e[o] === "\\" && o + 1 < e.length) {
          r += e[o + 1], o += 2;
          continue;
        }
        r += e[o], o++;
      }
      if (o >= e.length) return "unknown";
      o++;
      continue;
    }
    if (t && s === "\\" && o + 1 < e.length) {
      r += e[o + 1], o += 2;
      continue;
    }
    r += s, o++;
  }
  if (r !== "") n.push(r);
  return n;
}
function _1d(e, t) {
  if (e === "") return "unknown";
  if (e.includes("$(")) return "unknown";
  if (e.includes("`")) return "unknown";
  if (/^\$TMPDIR(?:[\\/]|$)/.test(e)) return "tmp";
  if (/^\$\{TMPDIR\}(?:[\\/]|$)/.test(e)) return "tmp";
  if (/^%TE?MP%(?:[\\/]|$)/i.test(e)) return "tmp";
  if (/^\$env:TE?MP(?:[\\/]|$)/i.test(e)) return "tmp";
  if (e.includes("$")) return "unknown";
  if (/%[^%]+%/.test(e)) return "unknown";
  if (e.startsWith("*") || e.startsWith("?")) return "unknown";
  if (e.startsWith("~")) return e.startsWith("~/") ? "outside_cwd" : "unknown";
  if (J1i(e)) return "tmp";
  let n = X1i.test(e) || e.startsWith("\\\\");
  if (!xke.isAbsolute(e) && !n) {
    let r = xke.resolve(t, e);
    if (J1i(r)) return "tmp";
    return xke.relative(t, r).startsWith("..") ? "outside_cwd" : "cwd";
  }
  if (!n || X1i.test(t) || t.startsWith("\\\\")) {
    let r = xke.relative(t, e);
    if (r === "" || !r.startsWith("..") && !xke.isAbsolute(r)) return "cwd";
  }
  return "outside_cwd";
}
function J1i(e) {
  if (/^\/tmp(?:\/|$)/.test(e) || /^\/var\/tmp(?:\/|$)/.test(e) || /^\/private\/tmp(?:\/|$)/.test(e) || /^\/private\/var\/folders\//.test(e)) return !0;
  if (/[\\/]claude[^\\/]*[\\/](?:[^\\/]+[\\/])+scratchpad(?:[\\/]|$)/i.test(e)) return !0;
  let t = e.replace(/\//g, "\\");
  if (/^[A-Za-z]:\\Temp(?:\\|$)/i.test(t) || /^[A-Za-z]:\\Windows\\Temp(?:\\|$)/i.test(t) || /\\AppData\\Local\\Temp(?:\\|$)/i.test(t)) return !0;
  return !1;
}
var xke, d1d, p1d, f1d, m1d, X1i, g1d;