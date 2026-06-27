// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zMc
// matched 2.1.88 source: src/components/TrustDialog/utils.ts
// class=modified  jaccard=0.3094  score=0.6033  fileCov=0.3883
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zMc] deps: kt, R0e, O0, Ye, ps, dn, oo, Rnt, er, wr, fn, LMc, p7o, WVt, Bs, Fy, hse, Ko, FZt, OMc, utr, GMc
((WMc = R(lt(), 1)), (MZ = R(rt(), 1)), (vm = R(se(), 1)));
function KMc(e) {
  if (e === null) return false;
  if (e.statusLine) return true;
  if (e.fileSuggestion) return true;
  if (e.subagentStatusLine) return true;
  if (!e.hooks) return false;
  for (let t of Object.values(e.hooks)) if (t.length > 0) return true;
  return false;
}
function a$c() {
  let e = [],
    t = yn("projectSettings");
  if (KMc(t)) e.push(".claude/settings.json");
  let n = yn("localSettings");
  if (KMc(n)) e.push(".claude/settings.local.json");
  return e;
}
function YMc(e) {
  return e.some(
    (t) =>
      t.ruleBehavior === "allow" &&
      (t.ruleValue.toolName === Co || t.ruleValue.toolName.startsWith(Co + "(")),
  );
}
function l$c(e) {
  let t = Ja(e).replace(YIm, "").trim();
  return t.length > XMc ? `${t.slice(0, XMc)}\u2026` : t;
}
function JMc(e) {
  let { toolName: t, ruleContent: n } = e.ruleValue,
    r = XIm.has(t) || t.startsWith("mcp__"),
    o = n === void 0;
  if (r) return o ? 0 : 1;
  return o ? 2 : 3;
}
function c$c() {
  let e = [],
    t = [];
  for (let [s, i] of i$c()) {
    let a = vut(s).filter((l) => l.ruleBehavior === "allow");
    if (a.length > 0) (e.push(i), t.push(...a));
  }
  let n = t.length;
  t.sort((s, i) => JMc(s) - JMc(i));
  let r = new Set(),
    o = [];
  for (let s of t) {
    let i = l$c(Pp(s.ruleValue));
    if (i.length > 0 && !r.has(i)) (r.add(i), o.push(i));
  }
  return {
    rules: o,
    sources: e,
    rawCount: n,
  };
}
function QMc(e) {
  if (s$c.isAbsolute(e) || e.startsWith("~")) return 0;
  if (e.includes("..")) return 1;
  return 2;
}
function u$c() {
  let e = [],
    t = [];
  for (let [s, i] of i$c()) {
    let a = yn(s)?.permissions?.additionalDirectories ?? [];
    if (a.length > 0) (e.push(i), t.push(...a));
  }
  let n = t.length,
    r = new Set(),
    o = [];
  for (let s of t) {
    let i = l$c(s);
    if (i.length > 0 && !r.has(i)) (r.add(i), o.push(i));
  }
  return (
    o.sort((s, i) => QMc(s) - QMc(i)),
    {
      dirs: o,
      sources: e,
      rawCount: n,
    }
  );
}
function d$c() {
  let e = [],
    t = vut("projectSettings");
  if (YMc(t)) e.push(".claude/settings.json");
  let n = vut("localSettings");
  if (YMc(n)) e.push(".claude/settings.local.json");
  return e;
}
function Jtn(e, t) {
  if (e.length === 0) return "";
  let n = t === 0 ? void 0 : t;
  if (!n || e.length <= n) {
    if (e.length === 1) return e[0];
    if (e.length === 2) return `${e[0]} and ${e[1]}`;
    let s = e.at(-1);
    return `${e.slice(0, -1).join(", ")}, and ${s}`;
  }
  let r = e.slice(0, n),
    o = e.length - n;
  if (r.length === 1) return `${r[0]} and ${o} more`;
  return `${r.join(", ")}, and ${o} more`;
}
function ZMc(e) {
  return !!e?.otelHeadersHelper;
}
function p$c() {
  let e = [],
    t = yn("projectSettings");
  if (ZMc(t)) e.push(".claude/settings.json");
  let n = yn("localSettings");
  if (ZMc(n)) e.push(".claude/settings.local.json");
  return e;
}
function f$c() {
  let e = [];
  if (yn("projectSettings")?.autoMemoryDirectory !== void 0) e.push(".claude/settings.json");
  if (yn("localSettings")?.autoMemoryDirectory !== void 0) e.push(".claude/settings.local.json");
  return e;
}
function e$c(e) {
  return !!e?.apiKeyHelper;
}
function m$c() {
  let e = [],
    t = yn("projectSettings");
  if (e$c(t)) e.push(".claude/settings.json");
  let n = yn("localSettings");
  if (e$c(n)) e.push(".claude/settings.local.json");
  return e;
}
function t$c(e) {
  return !!(e?.awsAuthRefresh || e?.awsCredentialExport);
}
function g$c() {
  let e = [],
    t = yn("projectSettings");
  if (t$c(t)) e.push(".claude/settings.json");
  let n = yn("localSettings");
  if (t$c(n)) e.push(".claude/settings.local.json");
  return e;
}
function n$c(e) {
  return !!e?.gcpAuthRefresh;
}
function h$c() {
  let e = [],
    t = yn("projectSettings");
  if (n$c(t)) e.push(".claude/settings.json");
  let n = yn("localSettings");
  if (n$c(n)) e.push(".claude/settings.local.json");
  return e;
}
function r$c(e) {
  return !!e?.proxyAuthHelper;
}
function y$c() {
  let e = [],
    t = yn("projectSettings");
  if (r$c(t)) e.push(".claude/settings.json");
  let n = yn("localSettings");
  if (r$c(n)) e.push(".claude/settings.local.json");
  return e;
}
function o$c(e) {
  if (!e?.env) return false;
  return Object.keys(e.env).some((t) => !ilt.has(t.toUpperCase()));
}
function _$c() {
  let e = [],
    t = yn("projectSettings");
  if (o$c(t)) e.push(".claude/settings.json");
  let n = yn("localSettings");
  if (o$c(n)) e.push(".claude/settings.local.json");
  return e;
}
var s$c,
  i$c = () => [
    ["projectSettings", ".claude/settings.json"],
    ...(SSe() ? [["localSettings", ".claude/settings.local.json"]] : []),
  ],
  YIm,
  XMc = 60,
  XIm;
