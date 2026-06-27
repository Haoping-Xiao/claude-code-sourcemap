// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bka
// matched 2.1.88 source: src/utils/ultraplan/ccrSession.ts
// class=new  jaccard=0.0262  score=0.0951  fileCov=0.0348
// note: nearest: src/utils/ultraplan/ccrSession.ts (0.0262); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bka = E(() => {
  je();
  Mh();
  _1();
  _ka = require("fs/promises");
});
function pde(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function gpo(e, t) {
  let n = e.$ref;
  if (typeof n !== "string") return e;
  let r = /^#\/(\$defs|definitions)\/([^/]+)$/.exec(n);
  if (r === null) return e;
  let o = t[r[1]];
  if (!pde(o)) return e;
  let s = o[r[2]];
  return pde(s) ? s : e;
}
function Wwp(e) {
  if (!pde(e)) return null;
  let t = e.required;
  if (Array.isArray(t) && t.length > 0 && t.every(r => typeof r === "string")) return t.join(", ");
  let n = e.properties;
  if (pde(n)) {
    let r = Object.keys(n);
    if (r.length > 0) return r.join(", ");
  }
  return null;
}
function Ska(e) {
  if (!pde(e)) return {
    outcome: "unchanged"
  };
  let t = Fwp.filter(n => n in e);
  if (t.length === 0) return {
    outcome: "unchanged"
  };
  try {
    let n = Object.create(null),
      r = u => {
        if (!pde(u)) return;
        for (let [d, p] of Object.entries(u)) if (jwp.test(d) && !(d in n) && pde(p)) n[d] = p;
      };
    r(e.properties);
    for (let u of t) {
      let d = e[u];
      if (!Array.isArray(d)) return {
        outcome: "drop",
        reason: `input schema has top-level ${u} that is not an array`
      };
      for (let p of d) if (pde(p)) r(gpo(p, e).properties);
    }
    let o = [],
      s = u => {
        if (!Array.isArray(u)) return;
        for (let d of u) if (typeof d === "string" && d in n && !o.includes(d)) o.push(d);
      };
    s(e.required);
    let i = e.allOf;
    if (Array.isArray(i)) {
      for (let u of i) if (pde(u)) s(gpo(u, e).required);
    }
    let a = t.includes("anyOf") || t.includes("oneOf"),
      l = {
        type: "object",
        properties: n,
        required: o
      };
    for (let u of Gwp) if (u in e) l[u] = e[u];
    let c = qwp(t, e, a);
    return {
      outcome: "normalized",
      schema: l,
      note: c,
      combinators: t
    };
  } catch {
    return {
      outcome: "drop",
      reason: `input schema uses top-level ${t.join("/")} and could not be normalized`
    };
  }
}
function qwp(e, t, n) {
  if (!n) return "Input constraint: all listed parameters apply together (flattened from a JSON Schema allOf).";
  let r = e.includes("oneOf") ? "oneOf" : "anyOf",
    o = t[r],
    s = Array.isArray(o) ? Uo(o.map(l => Wwp(pde(l) ? gpo(l, t) : l)).filter(l => l !== null)) : [],
    i = r === "oneOf" ? "Provide parameters for exactly one of" : "Provide parameters for at least one of";
  if (s.length === 0) return `Input constraint: ${i} the documented parameter groups (flattened from a JSON Schema ${r}).`;
  let a = s.map(l => `(${l})`).join(" or ");
  return `Input constraint: ${i}: ${a}.`;
}
var Fwp, jwp, Gwp;