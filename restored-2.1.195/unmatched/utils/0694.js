// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gM
// matched 2.1.88 source: src/utils/teleport.tsx
// class=new  jaccard=0.0067  score=0.2719  fileCov=0.0068
// note: nearest: src/utils/teleport.tsx (0.0067); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gM] deps: ree, ft, id, fd, Lo, sa, W0r, dfn, RTs
fet = require("fs"), fY = require("fs/promises"), mM = require("path"), met = new Map();
Lae = new MTs();
function SRt(e) {
  let t = NTs(e.replace(/[\t\n\r]/g, "").toLowerCase());
  if (t === "" || L$u.test(t)) return t;
  try {
    let n = new URL(`https://${t}`);
    if (n.username !== "" || n.password !== "" || n.port !== "" || n.pathname !== "/" || n.search !== "" || n.hash !== "") return t;
    return NTs(n.hostname);
  } catch {
    return t;
  }
}
function $m(e) {
  let t = SRt(e);
  while (t.startsWith("www.")) t = t.slice(4);
  return t === "github.com";
}
function gfn(e, t) {
  if (!e || !t) return false;
  let n = SRt(e);
  return n !== "" && n === SRt(t);
}
function nRr(e) {
  return $m(e) ? "https://api.github.com" : `https://${e}/api/v3`;
}
function BTs(e) {
  return $m(e) ? "https://api.github.com/graphql" : `https://${e}/api/graphql`;
}
function OTs(e) {
  return /[%\x00-\x1f\x7f-\u{10FFFF}]/u.test(e);
}
function ERt(e) {
  if (e.includes("://")) try {
    let o = new URL(e);
    if (o.protocol === "http:" || o.protocol === "https:") return false;
    return OTs(o.hostname);
  } catch {
    return true;
  }
  let t = e.indexOf(":"),
    n = e.indexOf("@");
  if (t >= 0 && n > t) return true;
  let r = e.match(/^(?:[^@]+@)?([^:]+):/)?.[1];
  return r ? OTs(r) : false;
}
function NTs(e) {
  let t = e.length;
  while (t > 0 && e[t - 1] === ".") t--;
  return e.slice(0, t);
}
var JH = "github.com",
  L$u;