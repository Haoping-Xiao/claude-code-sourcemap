// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bot
// matched 2.1.88 source: src/utils/thinking.ts
// class=modified (alt of src/utils/thinking.ts)  jaccard=0.1229  score=0.3827  fileCov=0.1533
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function xCn() {
  return Dr().showThinkingSummaries ?? false;
}
function isUltrathinkEnabled() {
  return at("tengu_turtle_carbon", true);
}
function kvi(e) {
  return /\bultrathink\b/i.test(e);
}
function kCn(e) {
  let t = [],
    n = e.matchAll(/\bultrathink\b/gi);
  for (let r of n)
    if (r.index !== void 0)
      t.push({
        word: r[0],
        start: r.index,
        end: r.index + r[0].length,
      });
  return t;
}
function q9(e, t = false) {
  let n = t ? Qkd : Jkd;
  return n[e % n.length];
}
function modelSupportsThinking(e) {
  let t = W9(e, "thinking");
  if (t !== void 0) return t;
  return !mo(e).includes("claude-3-");
}
function U4e(e) {
  let t = mo(e);
  if (
    t.includes("claude-3-") ||
    t === "claude-opus-4-0" ||
    t === "claude-opus-4-1" ||
    t === "claude-opus-4-5" ||
    t === "claude-opus-4-6" ||
    t === "claude-opus-4-7" ||
    t === "claude-opus-4-8" ||
    t === "claude-sonnet-4-0" ||
    t === "claude-sonnet-4-5" ||
    t === "claude-sonnet-4-6" ||
    t === "claude-haiku-4-5"
  )
    return false;
  if (JB(t, "rejects_disabled_thinking")) return true;
  return ZO(l_(e));
}
function modelSupportsAdaptiveThinking(e) {
  let t = W9(e, "adaptive_thinking");
  if (t !== void 0) return t;
  let n = mo(e);
  if (
    n.includes("claude-3-") ||
    n === "claude-opus-4-0" ||
    n === "claude-opus-4-1" ||
    n === "claude-opus-4-5" ||
    n === "claude-sonnet-4-0" ||
    n === "claude-sonnet-4-5" ||
    n === "claude-haiku-4-5"
  )
    return false;
  if (JB(n, "adaptive_thinking") || n === "claude-mythos-5") return true;
  return ZO(l_(e));
}
function Ule() {
  if (process.env.MAX_THINKING_TOKENS) return parseInt(process.env.MAX_THINKING_TOKENS, 10) > 0;
  let { settings: e } = l9();
  if (e.alwaysThinkingEnabled === false) return false;
  return true;
}
var Jkd, Qkd;
