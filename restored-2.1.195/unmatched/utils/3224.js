// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nDe
// matched 2.1.88 source: src/utils/plugins/lspPluginIntegration.ts
// class=new  jaccard=0.0259  score=0.3789  fileCov=0.027
// note: nearest: src/utils/plugins/lspPluginIntegration.ts (0.0259); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nDe] deps: bCe, je, wr, At, ys, Hu, Jt, vdt, B1, $g, i5
gCa = require("path");
ldo = ["CLAUDE_PLUGIN_ROOT", "CLAUDE_PLUGIN_DATA"], dTp = new Set(ldo);
function d3t(e, t) {
  if (t === "*") return true;
  let n;
  try {
    n = new URL(e);
  } catch {
    return false;
  }
  let r = t.replaceAll("*", Idt),
    o = false,
    s;
  try {
    s = new URL(r);
  } catch {
    let u = r.replace(new RegExp(`:${Idt}(?=[/?#]|$)`), ":0");
    if (u !== r) try {
      s = new URL(u), o = true;
    } catch {}
  }
  if (!s) {
    let u = `${n.protocol}//${n.host}${n.pathname}${n.search}`,
      d = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`^${d.replaceAll("*", "[^/]*")}$`).test(u);
  }
  if (s.protocol !== `${Idt}:` && s.protocol !== n.protocol) return false;
  let i = n.hostname.replace(/\.$/, "").toLowerCase(),
    l = s.hostname.replace(/\.$/, "").toLowerCase().replaceAll(Idt, "*").replace(/[.+?^${}()|[\]\\]/g, "\\$&").replaceAll("*", "[^/]*");
  if (!new RegExp(`^${l}$`).test(i)) return false;
  if (s.port === "" && s.hostname.includes(Idt)) o = true;
  if (!o && s.port !== n.port) return false;
  if ((s.pathname === "/" || s.pathname === "") && s.search === "" && !r.endsWith("/")) return true;
  let c = (s.pathname + s.search).replaceAll(Idt, "*").replace(/[.+?^${}()|[\]\\]/g, "\\$&").replaceAll("*", ".*");
  return new RegExp(`^${c}$`).test(n.pathname + n.search);
}
var hCa, Idt;