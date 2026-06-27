// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WHc
// matched 2.1.88 source: src/utils/words.ts
// class=modified (alt of src/utils/words.ts)  jaccard=0.0041  score=0.2447  fileCov=0.0042
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module WHc] deps: Vl, X0, WTe, Ye
((jHc = R(lt(), 1)), (cV = R(se(), 1)));
function G_m(e, t) {
  let n = t;
  while (n < e.length && /\s/.test(e[n])) n++;
  let r = e[n];
  if (r !== '"' && r !== "'" && r !== "`") {
    let i = Math.min(e.length, n + QTt),
      a = 0,
      l = n;
    while (l < i) {
      let c = e[l];
      if (c === "(" || c === "[" || c === "{") a++;
      else if (c === ")" || c === "]" || c === "}") {
        if (a === 0) break;
        a--;
      } else if (c === "," && a === 0) break;
      else if (c === '"' || c === "'" || c === "`") {
        l++;
        while (l < i && e[l] !== c) {
          if (e[l] === "\\") l++;
          l++;
        }
      }
      l++;
    }
    return $a(e.slice(n, l).trim(), qHc);
  }
  n++;
  let o = [];
  while (n < e.length) {
    let i = e[n];
    if (i === "\\") {
      (o.push(e[n + 1] ?? ""), (n += 2));
      continue;
    }
    if (i === r) break;
    if (r === "`" && i === "$" && e[n + 1] === "{") {
      o.push("${\u2026}");
      let a = 1;
      n += 2;
      while (n < e.length && a > 0) {
        if (e[n] === "{") a++;
        if (e[n] === "}") a--;
        n++;
      }
      continue;
    }
    (o.push(i), n++);
  }
  let s = o.join("").replace(/\s+/g, " ").trim();
  return $a(s, qHc);
}
function VHc(e, t, n) {
  if (e[t] !== "(") return;
  let r = Math.min(e.length, t + QTt),
    o = 0,
    s = t;
  while (s < r) {
    let i = e[s];
    if (i === "(") o++;
    else if (i === ")") {
      if ((o--, o === 0)) return e.slice(t + 1, s);
    } else if (n && i === ";" && o === 1) return e.slice(t + 1, s);
    s++;
  }
  return;
}
function W_m(e, t, n) {
  let r = 0,
    o = t;
  while (o < n) {
    let s = e[o];
    if (s === "(" || s === "[" || s === "{") r++;
    else if (s === ")" || s === "]" || s === "}") {
      if (r === 0) return o;
      r--;
    } else if (r === 0 && s === ";") return o + 1;
    else if (
      r === 0 &&
      s ===
        `
`
    ) {
      let i = o + 1;
      while (i < n && /\s/.test(e[i] ?? "")) i++;
      if (e[i] !== "{") return o + 1;
    }
    o++;
  }
  return -1;
}
function JTt(e) {
  return e != null && /[A-Za-z0-9_]/.test(e);
}
function zHc(e) {
  try {
    let t = [],
      n = 0,
      r = 0,
      o = false,
      s,
      i = -1,
      a = [],
      l = [],
      c = e.length,
      u = 0;
    while (u < c) {
      if (i >= 0 && u >= i) ((o = false), (s = void 0), (i = -1));
      let f = e[u];
      if (f === "/" && e[u + 1] === "/")
        while (
          u < c &&
          e[u] !==
            `
`
        )
          u++;
      else if (f === "/" && e[u + 1] === "*") {
        u += 2;
        while (u < c && !(e[u] === "*" && e[u + 1] === "/")) u++;
        u++;
      } else if (f === '"' || f === "'" || f === "`") {
        u++;
        while (u < c && e[u] !== f) {
          if (e[u] === "\\") u++;
          u++;
        }
      } else if (f === "{") {
        if ((n++, o && r === 0))
          (a.push({
            braceDepth: n,
            cond: s,
          }),
            (o = false),
            (s = void 0),
            (i = -1));
      } else if (f === "}") {
        let m = a.at(-1);
        if (m && m.braceDepth === n) a.pop();
        n--;
      } else if (f === "(") r++;
      else if (f === ")") {
        let m = l.at(-1);
        if (m !== void 0 && m === r) l.pop();
        if ((r--, o && r === 0 && i < 0)) {
          let g = u + 1,
            h = Math.min(c, g + QTt);
          while (g < h && /\s/.test(e[g] ?? "")) g++;
          if (e[g] !== "{") {
            let y = W_m(e, g, Math.min(c, g + QTt));
            if (y >= 0) i = y;
          }
        }
      } else if (
        f === "w" &&
        e.startsWith("while", u) &&
        r === 0 &&
        !JTt(e[u - 1]) &&
        !JTt(e[u + 5])
      ) {
        let m = e.indexOf("(", u);
        if (m === -1 || m - u > QTt) {
          u++;
          continue;
        }
        ((o = true), (i = -1), (s = VHc(e, m, false)));
      } else if (
        f === "f" &&
        e.startsWith("for", u) &&
        r === 0 &&
        !JTt(e[u - 1]) &&
        !JTt(e[u + 3])
      ) {
        let m = e.indexOf("(", u);
        if (m === -1 || m - u > QTt) {
          u++;
          continue;
        }
        ((o = true), (i = -1), (s = VHc(e, m, true)));
      } else if (f === "p" && e.startsWith("parallel(", u) && !JTt(e[u - 1]))
        (l.push(r + 1), (u += 7));
      else if (f === "a" && e.startsWith("agent", u) && !JTt(e[u - 1])) {
        let m = u + 5;
        while (m < c && /\s/.test(e[m] ?? "")) m++;
        if (e[m] === "(") {
          let g = l.length > 0 ? "parallel" : o || a.length > 0 ? "loop" : "sequential",
            h = o ? s : a.at(-1)?.cond,
            y = g === "loop" ? h?.trim().slice(0, 40) : g === "parallel" ? "\xD7 N" : void 0;
          t.push({
            prompt: G_m(e, m + 1),
            kind: g,
            annotation: y,
          });
        }
      }
      u++;
    }
    if (t.length === 0) return null;
    let d = [];
    for (let f of t) {
      let m = d.at(-1);
      if (m && m.kind === f.kind && m.annotation === f.annotation)
        m.agents.push({
          prompt: f.prompt,
        });
      else
        d.push({
          kind: f.kind,
          agents: [
            {
              prompt: f.prompt,
            },
          ],
          annotation: f.annotation,
        });
    }
    let p = 0;
    for (let f of d) {
      let m = f.agents.length;
      p += f.kind === "sequential" ? m : m * 3;
    }
    return {
      phases: d,
      estimatedAgents: p,
      hasReturn: /\breturn\b/.test(e),
    };
  } catch {
    return null;
  }
}
var qHc = 100,
  QTt = 5000;
