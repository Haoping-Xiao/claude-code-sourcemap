// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xa
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/entities.js
// class=new  jaccard=0.0033  score=0.1471  fileCov=0.0033
// note: nearest: node_modules/@xmldom/xmldom/lib/entities.js (0.0033); 12 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xa = E(() => {
  Is();
  gc = Vt() === "macos" ? "\u23FA" : "\u25CF", FRt = ["\xB7|\xB7", "\xB7/\xB7", "\xB7\u2014\xB7", "\xB7\\\xB7"], hOu = ["\u280B", "\u2819", "\u2839", "\u2838", "\u283C", "\u2834", "\u2826", "\u2827", "\u2807", "\u280F"];
  UO = {
    topLeft: "\u256D",
    topRight: "\u256E",
    bottomLeft: "\u2570",
    bottomRight: "\u256F"
  }, FO = {
    branch: "\u251C",
    last: "\u2514",
    pipe: "\u2502",
    teeDown: "\u252C",
    teeUp: "\u2534"
  };
});
var jRr = {};
_t(jRr, {
  isPreAskDeny: () => isPreAskDeny,
  SANDBOX_AUTO_ALLOW_REASON: () => SANDBOX_AUTO_ALLOW_REASON,
  READ_ONLY_AUTO_ALLOW_REASON: () => READ_ONLY_AUTO_ALLOW_REASON,
  PERMISSION_MODES: () => PERMISSION_MODES,
  PERMISSION_DECISION_REASON_TYPES: () => PERMISSION_DECISION_REASON_TYPES,
  INTERNAL_PERMISSION_MODES: () => INTERNAL_PERMISSION_MODES,
  HOOK_REWRITTEN_INPUT_ASK_REASON: () => HOOK_REWRITTEN_INPUT_ASK_REASON,
  HOOK_REWRITE_HEADLESS_DENY_REASON: () => HOOK_REWRITE_HEADLESS_DENY_REASON,
  EXTERNAL_PERMISSION_MODES: () => EXTERNAL_PERMISSION_MODES,
  CLASSIFIER_UNAVAILABLE_REASON: () => CLASSIFIER_UNAVAILABLE_REASON,
  CLASSIFIER_TRANSCRIPT_TOO_LONG_REASON: () => CLASSIFIER_TRANSCRIPT_TOO_LONG_REASON,
  BASH_PROMPT_RULE_DENY_PREFIX: () => BASH_PROMPT_RULE_DENY_PREFIX
});
function isPreAskDeny(e) {
  return e.decideLocation === "pre-ask";
}
var EXTERNAL_PERMISSION_MODES,
  INTERNAL_PERMISSION_MODES,
  PERMISSION_MODES,
  PERMISSION_DECISION_REASON_TYPES,
  SANDBOX_AUTO_ALLOW_REASON = "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)",
  READ_ONLY_AUTO_ALLOW_REASON = "Read-only command is allowed",
  CLASSIFIER_UNAVAILABLE_REASON = "Classifier unavailable",
  CLASSIFIER_TRANSCRIPT_TOO_LONG_REASON = "Auto mode classifier transcript exceeded context window \u2014 falling back to manual approval (try /compact to reduce conversation size)",
  HOOK_REWRITTEN_INPUT_ASK_REASON = "ask rule on hook-rewritten input",
  BASH_PROMPT_RULE_DENY_PREFIX = "Denied by Bash prompt rule",
  HOOK_REWRITE_HEADLESS_DENY_REASON;