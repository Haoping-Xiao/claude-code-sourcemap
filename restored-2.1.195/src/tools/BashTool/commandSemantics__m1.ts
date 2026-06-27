// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xvl
// matched 2.1.88 source: src/tools/BashTool/commandSemantics.ts
// class=modified (alt of src/tools/BashTool/commandSemantics.ts)  jaccard=0.1467  score=0.2109  fileCov=0.3252
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Xvl] deps: sN
BEf = new Map([
  [
    "grep",
    (e, t, n) => ({
      isError: e >= 2,
      message: e === 1 ? "No matches found" : void 0,
    }),
  ],
  [
    "rg",
    (e, t, n) => ({
      isError: e >= 2,
      message: e === 1 ? "No matches found" : void 0,
    }),
  ],
  [
    "egrep",
    (e, t, n) => ({
      isError: e >= 2,
      message: e === 1 ? "No matches found" : void 0,
    }),
  ],
  [
    "fgrep",
    (e, t, n) => ({
      isError: e >= 2,
      message: e === 1 ? "No matches found" : void 0,
    }),
  ],
  [
    "find",
    (e, t, n) => ({
      isError: e >= 2,
      message: e === 1 ? "Some directories were inaccessible" : void 0,
    }),
  ],
  [
    "diff",
    (e, t, n) => ({
      isError: e >= 2,
      message: e === 1 ? "Files differ" : void 0,
    }),
  ],
  [
    "test",
    (e, t, n) => ({
      isError: e >= 2,
      message: e === 1 ? "Condition is false" : void 0,
    }),
  ],
  [
    "[",
    (e, t, n) => ({
      isError: e >= 2,
      message: e === 1 ? "Condition is false" : void 0,
    }),
  ],
]);
function YEf(e) {
  if (/[|<>]/.test(e)) return [];
  let t;
  try {
    t = By(e);
  } catch {
    return [];
  }
  if (t.length === 0) return [];
  let n = [];
  for (let r of t) {
    let o = XEf(r) ?? QEf(r) ?? ZEf(r) ?? eAf(r) ?? (t.length === 1 ? (sAf(r) ?? uAf(r)) : null);
    if (o) n.push(o);
    else if (t.length > 1 && !KEf.test(r)) return [];
  }
  return n;
}
function XEf(e) {
  let t;
  try {
    t = oA(e);
  } catch {
    return null;
  }
  if (t[0] !== "sed") return null;
  let n = false,
    r = null,
    o = null;
  for (let a = 1; a < t.length; a++) {
    let l = t[a];
    if (l.startsWith("-")) {
      if (l.startsWith("--")) {
        if (l === "--in-place" || l.startsWith("--in-place=")) return null;
        if (l === "--expression") return null;
        if (l === "--quiet" || l === "--silent") n = true;
      } else {
        if (l.includes("i")) return null;
        if (l === "-e") return null;
        if (l.includes("n")) n = true;
      }
      continue;
    }
    if (r === null) r = l;
    else if (o === null) o = l;
    else return null;
  }
  if (!n || r === null || o === null) return null;
  let s = VEf.exec(r);
  if (s)
    return {
      filePath: o,
      startLine: Number(s[1]),
      endLine: Number(s[2]),
    };
  let i = zEf.exec(r);
  if (i) {
    let a = Number(i[1]);
    return {
      filePath: o,
      startLine: a,
      endLine: a,
    };
  }
  return null;
}
function QEf(e) {
  let t;
  try {
    t = oA(e);
  } catch {
    return null;
  }
  let n = JEf.get(t[0] ?? "");
  if (n === void 0) return null;
  let r = null;
  for (let o = 1; o < t.length; o++) {
    let s = t[o];
    if (s.startsWith("-") && s !== "-") {
      if (!n.has(s)) return null;
      continue;
    }
    if (r !== null) return null;
    r = s;
  }
  if (r === null || r === "-") return null;
  return {
    filePath: r,
    startLine: void 0,
    endLine: void 0,
  };
}
function Jvl(e, t) {
  let n = null,
    r = null;
  for (let o = 1; o < e.length; o++) {
    let s = e[o];
    if (s === "-n" || s === "--lines") {
      let i = e[++o];
      if (i === void 0) return null;
      if (!/^\d+$/.test(i)) return null;
      n = Number(i);
      continue;
    }
    if (s.startsWith("--lines=")) {
      let i = s.slice(8);
      if (!/^\d+$/.test(i)) return null;
      n = Number(i);
      continue;
    }
    if (/^-n\d+$/.test(s)) {
      n = Number(s.slice(2));
      continue;
    }
    if (/^-\d+$/.test(s)) {
      n = Number(s.slice(1));
      continue;
    }
    if (s.startsWith("-")) return null;
    if (r !== null) return null;
    r = s;
  }
  if (r === null || r === "-") return null;
  if (n === 0) return null;
  return {
    count: n ?? t,
    filePath: r,
  };
}
function ZEf(e) {
  let t;
  try {
    t = oA(e);
  } catch {
    return null;
  }
  if (t[0] !== "head") return null;
  let n = Jvl(t, WEf);
  if (n === null) return null;
  return {
    filePath: n.filePath,
    startLine: 1,
    endLine: n.count,
  };
}
function eAf(e) {
  let t;
  try {
    t = oA(e);
  } catch {
    return null;
  }
  if (t[0] !== "tail") return null;
  let n = Jvl(t, qEf);
  if (n === null) return null;
  return {
    filePath: n.filePath,
    startLine: void 0,
    endLine: void 0,
    tailLines: n.count,
  };
}
function sAf(e) {
  let t;
  try {
    t = oA(e);
  } catch {
    return null;
  }
  if (t[0] !== "grep" && t[0] !== "egrep" && t[0] !== "fgrep") return null;
  let n = null,
    r = null;
  for (let o = 1; o < t.length; o++) {
    let s = t[o];
    if (s.startsWith("-") && s !== "-") {
      if (s === "-A" || s === "-B" || s === "-C") {
        let i = t[++o];
        if (i === void 0 || !/^\d+$/.test(i)) return null;
        continue;
      }
      if (nAf.test(s) || rAf.test(s) || tAf.test(s) || oAf.has(s)) continue;
      return null;
    }
    if (n === null) n = s;
    else if (r === null) r = s;
    else return null;
  }
  if (n === null || r === null || r === "-") return null;
  if (/[*?[{]/.test(r)) return null;
  return {
    filePath: r,
    startLine: void 0,
    endLine: void 0,
    requiresExitZero: true,
  };
}
function uAf(e) {
  let t;
  try {
    t = oA(e);
  } catch {
    return null;
  }
  if (t[0] !== "rg") return null;
  let n = null,
    r = null;
  for (let o = 1; o < t.length; o++) {
    let s = t[o];
    if (s.startsWith("-") && s !== "-") {
      if (s === "-A" || s === "-B" || s === "-C") {
        let i = t[++o];
        if (i === void 0 || !/^\d+$/.test(i)) return null;
        continue;
      }
      if (s === "--after-context" || s === "--before-context" || s === "--context") {
        let i = t[++o];
        if (i === void 0 || !/^\d+$/.test(i)) return null;
        continue;
      }
      if (aAf.test(s) || lAf.test(s) || iAf.test(s) || cAf.has(s)) continue;
      return null;
    }
    if (n === null) n = s;
    else if (r === null) r = s;
    else return null;
  }
  if (n === null || r === null || r === "-") return null;
  if (/[*?[{]/.test(r)) return null;
  return {
    filePath: r,
    startLine: void 0,
    endLine: void 0,
    requiresExitZero: true,
  };
}
async function Qvl(e, t, n, r) {
  let o = YEf(e).filter((i) => !i.requiresExitZero || r === 0);
  if (o.length === 0) return;
  let s = qt();
  await Promise.all(
    o.map(async (i) => {
      let a = ds(i.filePath);
      if (t.get(a)) return;
      try {
        let l = await s.stat(a);
        if (l.size > 10485760) return;
        if (n.aborted) return;
        let c = await s.readFile(a, {
            encoding: "utf8",
          }),
          u,
          d,
          p;
        if (i.tailLines !== void 0) {
          let f = c.split(`
`);
          if (f.length > 0 && f.at(-1) === "") f.pop();
          if (f.length === 0) return;
          let m = Math.min(i.tailLines, f.length),
            g = f.length - m + 1;
          ((u = f.slice(g - 1).join(`
`)),
            (d = g),
            (p = m));
        } else if (i.startLine === void 0) u = c;
        else {
          let f = c.split(`
`),
            m = Math.max(1, i.startLine),
            g = Math.max(m, i.endLine ?? m);
          if (m > f.length) return;
          ((u = f.slice(m - 1, g).join(`
`)),
            (d = m),
            (p = g - m + 1));
        }
        t.set(a, {
          content: u,
          timestamp: Math.floor(l.mtimeMs),
          offset: d,
          limit: p,
        });
      } catch {}
    }),
  );
}
var WEf = 10,
  qEf = 10,
  VEf,
  zEf,
  KEf,
  JEf,
  tAf,
  nAf,
  rAf,
  oAf,
  iAf,
  aAf,
  lAf,
  cAf;
