// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module een
// matched 2.1.88 source: node_modules/zod/v3/helpers/util.js
// class=partial  jaccard=0.1706  score=0.2553  fileCov=0.3395
// note: low-confidence suggestion: node_modules/zod/v3/helpers/util.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var een = E(() => {
  ys();
  Hu();
  Jbe();
  Kfc = require("fs/promises");
});
function p8o(e, t = "$") {
  let n = [],
    r = new WeakSet(),
    o = new WeakSet();
  return s(e, t), n;
  function s(i, a) {
    if (i === null) return;
    let l = typeof i;
    if (l === "function") {
      n.push({
        path: a,
        kind: "function",
        preview: Xfc(i)
      });
      return;
    }
    if (l === "symbol") {
      n.push({
        path: a,
        kind: "symbol",
        preview: String(i)
      });
      return;
    }
    if (l === "bigint") {
      n.push({
        path: a,
        kind: "bigint",
        preview: `${i}n`
      });
      return;
    }
    if (l !== "object") return;
    let c = i;
    if (r.has(c)) {
      n.push({
        path: a,
        kind: "circular",
        preview: "<circular>"
      });
      return;
    }
    if (o.has(c)) return;
    o.add(c), r.add(c);
    try {
      if (Array.isArray(c)) {
        for (let p = 0; p < c.length; p++) s(c[p], `${a}[${p}]`);
        return;
      }
      let u = Object.getPrototypeOf(c);
      if (!(u === null || u === Object.prototype || Object.getPrototypeOf(u) === null)) {
        if (n.push({
          path: a,
          kind: "class_instance",
          preview: Xfc(c)
        }), ArrayBuffer.isView(c) || c instanceof ArrayBuffer) return;
      }
      for (let [p, f] of Object.entries(c)) s(f, `${a}.${p}`);
    } finally {
      r.delete(c);
    }
  }
}
function Xfc(e) {
  try {
    if (typeof e === "function") return `function ${e.name || "<anon>"}`;
    let t = e?.constructor?.name;
    return t ? `<${t}>` : String(e);
  } catch {
    return "<unstringifiable>";
  }
}
var bur;