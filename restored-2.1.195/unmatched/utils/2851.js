// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Le
// matched 2.1.88 source: src/utils/file.ts
// class=new  jaccard=0.0195  score=0.069  fileCov=0.0264
// note: nearest: src/utils/file.ts (0.0195); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Lcp(e) {
  let t = e,
    n = "";
  try {
    n = Hca.homedir();
  } catch {}
  if (n) t = t.replaceAll(n + "/", "~/").replaceAll(n + "\\", "~\\");
  let r = (o, s) => /https?:\/\/[^\s'",;|()]*$/i.test(o.slice(0, s));
  return t = t.replace(/([/\\](?:Users|home)[/\\])[^/\\\n]+/gi, (o, s, i, a) => r(a, i) ? o : `${s}<user>`).replace(/(\/(?:Volumes|mnt|media)\/)[^/\n]+/g, (o, s, i, a) => r(a, i) ? o : `${s}<vol>`).replace(/\b([A-Za-z]):[\\/]/g, "<drv>:\\").replace(/\\\\[^\\]+\\[^\\\s'",:()]+/g, "<unc>"), t;
}
function Pcp(e) {
  return e.replace(Dcp, "<email>");
}
function Ncp(e) {
  return e.replace(Mcp, "<ip>").replace($cp, t => Ocp.test(t) ? t : "<ip>");
}
function jcp(e) {
  return e.replace(Bcp, (t, n, r) => r.replace(/\D/g, "").length >= 7 && !Ucp.test(r) ? `${n}<phone>` : `${n}${r}`).replace(Fcp, "<phone>");
}
function Wcp(e) {
  let t = e;
  for (let [n, r] of Gcp) t = t.replace(n, r);
  return t;
}
function qcp(e) {
  return e.replace(/https?:\/\/\S+/gi, "<url>").replace(/\b(?:ssh|git|gs|s3|file|s?ftp|wss?|postgres(?:ql)?|mysql|mongodb(?:\+srv)?|rediss?|amqps?):\/\/\S+/gi, "<url>").replace(/\b[\w.-]+\.(?:ant\.dev|anthropic\.com)\b[^\s"')\]]*/gi, "<url>");
}
function Vcp(e) {
  return e.replace(/\b(E[A-Z0-9]+: [^,'\n]{1,80}, [a-z]\w{0,31} ')[^]*/g, "$1<path>'").replace(/~[\\/][^"'\n]*/g, "~/<path>").replace(/<drv>:\\[^"'\n]*/g, "<path>").replace(/[A-Za-z]:\\[^"'\n]*/g, "<path>").replace(/<unc>[\\/]?[^"'\n]*/g, "<path>").replace(/\\\\[^"'\n]+/g, "<path>").replace(/(?:[^\s"'\\]+\\){2,}[^"'\n]*/g, "<path>").replace(/(?:\/[^\s"':]+){2,}[^"'\n]*/g, "<path>");
}
function Kcp(e) {
  return e.replace(zcp, "<api-error-body>");
}
function Ycp(e) {
  return e.replace(/\bmcp__[A-Za-z0-9_-]+__([A-Za-z0-9_-]+)/g, "mcp__<server>__$1").replace(/\bmcp__[A-Za-z0-9_-]+/g, "mcp__<server>").replace(/\bplugin:[^\s:"')\],]+:[^\s"')\],]*/g, "plugin:<server>");
}
function Tca(e, t) {
  let n = e;
  return [n?.path, n?.dest].filter(r => typeof r === "string" && r.length > 0).sort((r, o) => o.length - r.length).reduce((r, o) => r.split(o).join("<path>"), t);
}
function H4(e) {
  let n = (e.length > Aca ? e.slice(0, Aca) + "\u2026<truncated>" : e).replace(/:\/\/[^\s/]*@(?=[^@\s]*(?:[/:\s]|$))/g, "://<userinfo>@").replace(/\b[\w][\w.+-]*@[\w.-]+:[^\s"')\]]*(?:\/[^\s"')\]]*|\.git\b)/gi, "<url>"),
    r = Ycp(jcp(Wcp(Ncp(Pcp(Lcp(n))))));
  return Vcp(qcp(Kcp(r)));
}
var Hca,
  Dcp,
  Mcp,
  $cp,
  Ocp,
  Bcp,
  Ucp,
  Fcp,
  Gcp,
  zcp,
  Aca = 4000;