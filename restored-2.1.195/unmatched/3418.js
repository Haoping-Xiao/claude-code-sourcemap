// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cho
// matched 2.1.88 source: src/utils/doctorDiagnostic.ts
// class=new  jaccard=0.0178  score=0.2235  fileCov=0.019
// note: nearest: src/utils/doctorDiagnostic.ts (0.0178); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cho = E(() => {
  Rc();
  oo();
  Ls();
  qd();
  Un();
  jc();
  r4n = R(Uj(), 1);
});
function SPp() {
  try {
    return VOa.homedir();
  } catch {
    return "";
  }
}
function EPp(e) {
  let t = e;
  if (t.startsWith("file://")) t = t.slice(7);
  if (t.includes("$bunfs") || t.includes("~BUN")) return XOa(t);
  if (t.startsWith("/snapshot/")) t = t.slice(10);
  let n = SPp();
  if (n && t.startsWith(n + zOa.sep)) t = "~" + t.slice(n.length);
  return t;
}
function APp(e) {
  let t = e;
  if (!t.startsWith("../") && !t.startsWith("..\\")) return null;
  while (t.startsWith("../") || t.startsWith("..\\")) t = t.slice(3);
  let n = t.replaceAll("\\", "/");
  for (let r of YOa) if (n.startsWith(r)) return n;
  return null;
}
function XOa(e) {
  let t = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
  return t === -1 ? e : e.slice(t + 1);
}
function JOa(e) {
  return e.file[0] === "/" && KOa.has(e.file.slice(1)) || YOa.some(t => e.file.startsWith(t));
}
function HPp(e) {
  let t = e.split(/[/\\]/),
    n = -1;
  for (let i = t.length - 1; i >= 0; i--) if (t[i] === "node_modules") {
    n = i;
    break;
  }
  if (n === -1 || n >= t.length - 1) return null;
  let r = t[n + 1],
    o;
  if (r.startsWith("@")) {
    if (n + 2 >= t.length) return null;
    o = `${r}/${t[n + 2]}`;
  } else o = r;
  let s = t.at(-1);
  if (!s) return null;
  return `node_modules/${o}/${s}`;
}
function TPp(e) {
  let t = EPp(e),
    n = XOa(t);
  if (KOa.has(n)) return "/" + n;
  let r = APp(t);
  if (r) return r;
  if (t.startsWith("node:")) return t;
  if (t === "native") return t;
  let o = HPp(t);
  if (o) return o;
  return uho;
}
function vPp(e) {
  let t = e.trim();
  if (!t.startsWith("at ")) return null;
  let n = t.slice(3),
    r = n.indexOf(" ("),
    o,
    s;
  if (r !== -1 && n.endsWith(")")) o = n.slice(0, r).trim(), s = n.slice(r + 2, -1);else s = n.trim();
  if (o) {
    if (o = o.replace(/^async\s+/, "").replace(/^new\s+/, ""), o = o.replace(/\s*\[as\s+[^\]]+\]$/, ""), !o) o = void 0;
  }
  let i = s.match(/^(.*):(\d+):(\d+)$/);
  if (!i) return null;
  let [, a, l, c] = i,
    u = TPp(a);
  return {
    file: u,
    line: Number(l),
    column: Number(c),
    function: u === uho && o ? uho : o
  };
}
function dho(e, t = {}) {
  let n = t.maxFrames ?? 50,
    o = (e.stack ?? "").split(`
`),
    s = [];
  for (let c of o) {
    let u = vPp(c);
    if (u) {
      if (s.push(u), s.length >= n) break;
    }
  }
  let i = t.redactedMessage ?? "";
  return {
    formatted: [`${e.name || "Error"}: ${i}`, ...s.map(c => {
      let u = `${c.file}${c.line ? `:${c.line}` : ""}${c.column ? `:${c.column}` : ""}`;
      return c.function ? `    at ${c.function} (${u})` : `    at ${u}`;
    })].join(`
`),
    frames: s
  };
}
var VOa,
  zOa,
  uho = "<user-code>",
  KOa,
  YOa;