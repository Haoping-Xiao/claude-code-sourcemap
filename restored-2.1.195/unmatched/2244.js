// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P3e
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var P3e = E(() => {
  ft();
  gb();
  fn();
  o8();
  PM();
});
function X1d(e) {
  if (!e.startsWith("/")) return !1;
  try {
    return new URL(e, "https://sentinel.invalid").origin === "https://sentinel.invalid";
  } catch {
    return !1;
  }
}
function J1d(e) {
  let t = e.replace(/\/+$/, ""),
    n = t.slice(t.lastIndexOf("/") + 1);
  if (n === "") throw Error(`cannot derive mount name from path: ${e}`);
  let r = n.replace(/[^A-Za-z0-9_-]/g, "-");
  if (r === "" || r === "." || r === "..") throw Error(`derived mount name is not a valid path segment: ${n}`);
  return r;
}
function GKr(e) {
  if (e.length === 0) return !1;
  return e.split("/").every(n => /^[A-Za-z0-9._-]+$/.test(n) && n !== "." && n !== "..");
}
function yce() {
  let e = process.env.CLAUDE_MEMORY_STORES;
  if (!e || e.trim() === "") return null;
  let t;
  try {
    t = Ft(e);
  } catch (i) {
    throw Error(`CLAUDE_MEMORY_STORES is not valid JSON: ${i instanceof Error ? i.message : String(i)}`);
  }
  let n = H.array(Z1d()).safeParse(t);
  if (!n.success) throw Error(`CLAUDE_MEMORY_STORES failed validation: ${n.error.message}`);
  let r = [],
    o = new Set(),
    s = !1;
  for (let i of n.data) {
    let a = typeof i === "string" ? {
        path: i,
        mode: "rw",
        scope: "team"
      } : i,
      l = a.mount ?? J1d(a.path);
    if (o.has(l)) throw Error(`CLAUDE_MEMORY_STORES has duplicate mount: ${l}`);
    if (o.add(l), a.scope === "user") {
      if (s) throw Error('CLAUDE_MEMORY_STORES has more than one scope:"user" entry');
      s = !0;
    }
    r.push({
      path: a.path,
      mode: a.mode,
      scope: a.scope,
      mount: l,
      ...(a.promptIndex !== void 0 && {
        promptIndex: a.promptIndex
      }),
      ...(a.promptIndexMaxBytes !== void 0 && {
        promptIndexMaxBytes: a.promptIndexMaxBytes
      })
    });
  }
  if (r.length === 0) return null;
  return T(`memory-stores: parsed ${r.length} store(s): ` + r.map(i => `${i.mount}(${i.mode})`).join(", "), {
    level: "debug"
  }), r;
}
var Q1d = "mount must match /^[A-Za-z0-9_-]+$/",
  SNi,
  Z1d;