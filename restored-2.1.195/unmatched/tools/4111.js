// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kyt
// matched 2.1.88 source: src/bridge/bridgeMain.ts
// class=new  jaccard=0.0039  score=0.3468  fileCov=0.0039
// note: nearest: src/bridge/bridgeMain.ts (0.0039); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Kyt = E(() => {
  wr();
  jv();
});
function jsl(e) {
  if (!e.startsWith(Fsl)) return "";
  let t = e.slice(Fsl.length),
    n = [];
  for (let r = 0; r < t.length; r++) {
    let o = t[r];
    if (o === '"') break;
    if (o !== "\\") {
      n.push(o);
      continue;
    }
    let s = t[r + 1];
    if (s === void 0) break;
    if (r++, s === "n") n.push(`
`);else if (s === "t") n.push("\t");else if (s === "r") n.push("\r");else if (s === "u") {
      let i = t.slice(r + 1, r + 5);
      if (i.length < 4) break;
      n.push(String.fromCharCode(parseInt(i, 16))), r += 4;
    } else n.push(s);
  }
  return n.join("");
}
function Lzn(e, t, n) {
  if (e.length <= t + n + 1) return e.map(r => ({
    line: r
  }));
  return [...e.slice(0, t).map(r => ({
    line: r
  })), {
    line: `\u2026 ${e.length - t - n} lines \u2026`,
    folded: !0
  }, ...e.slice(-n).map(r => ({
    line: r
  }))];
}
function Gsl(e) {
  let t = new Set(),
    n = new Map();
  for (let r of e) {
    if (t.has(r.data.toolUseId)) continue;
    t.add(r.data.toolUseId), n.set(r.data.toolName, (n.get(r.data.toolName) ?? 0) + 1);
  }
  return [...n].map(([r, o]) => `${o} ${bn(o, r, aof(r))}`).join(", ");
}
function aof(e) {
  return /(?:s|sh|ch|x|z)$/i.test(e) ? `${e}es` : `${e}s`;
}
function Wsl(e) {
  if (!e || typeof e !== "object") return "";
  let t = Object.values(e).find(n => typeof n === "string");
  if (typeof t !== "string") return "";
  return Rs(t.replace(/\s+/g, " "), 40);
}
function qsl(e) {
  let t = e[0]?.timestamp,
    n = e.at(-1)?.timestamp;
  if (!t || !n) return "";
  let r = Date.parse(n) - Date.parse(t);
  return Number.isFinite(r) && r >= 0 ? vUe(r) : "";
}
var Fsl = '{"code":"';