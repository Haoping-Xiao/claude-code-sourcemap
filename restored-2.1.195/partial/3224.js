// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nDe
// matched 2.1.88 source: src/utils/plugins/lspPluginIntegration.ts
// class=partial  jaccard=0.061  score=0.6288  fileCov=0.0633
// note: low-confidence suggestion: src/utils/plugins/lspPluginIntegration.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nDe = E(() => {
  bCe();
  je();
  wr();
  At();
  ys();
  Hu();
  Jt();
  vdt();
  B1();
  $g();
  i5();
  gCa = require("path");
  ldo = ["CLAUDE_PLUGIN_ROOT", "CLAUDE_PLUGIN_DATA"], dTp = new Set(ldo);
});
function d3t(e, t) {
  if (t === "*") return !0;
  let n;
  try {
    n = new URL(e);
  } catch {
    return !1;
  }
  let r = t.replaceAll("*", Idt),
    o = !1,
    s;
  try {
    s = new URL(r);
  } catch {
    let u = r.replace(new RegExp(`:${Idt}(?=[/?#]|$)`), ":0");
    if (u !== r) try {
      s = new URL(u), o = !0;
    } catch {}
  }
  if (!s) {
    let u = `${n.protocol}//${n.host}${n.pathname}${n.search}`,
      d = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`^${d.replaceAll("*", "[^/]*")}$`).test(u);
  }
  if (s.protocol !== `${Idt}:` && s.protocol !== n.protocol) return !1;
  let i = n.hostname.replace(/\.$/, "").toLowerCase(),
    l = s.hostname.replace(/\.$/, "").toLowerCase().replaceAll(Idt, "*").replace(/[.+?^${}()|[\]\\]/g, "\\$&").replaceAll("*", "[^/]*");
  if (!new RegExp(`^${l}$`).test(i)) return !1;
  if (s.port === "" && s.hostname.includes(Idt)) o = !0;
  if (!o && s.port !== n.port) return !1;
  if ((s.pathname === "/" || s.pathname === "") && s.search === "" && !r.endsWith("/")) return !0;
  let c = (s.pathname + s.search).replaceAll(Idt, "*").replace(/[.+?^${}()|[\]\\]/g, "\\$&").replaceAll("*", ".*");
  return new RegExp(`^${c}$`).test(n.pathname + n.search);
}
var hCa, Idt;