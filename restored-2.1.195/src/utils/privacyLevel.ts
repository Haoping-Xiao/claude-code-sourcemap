// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jZe
// matched 2.1.88 source: src/utils/privacyLevel.ts
// class=modified  jaccard=0.4346  score=0.624  fileCov=0.5887
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module jZe]
eEs = /<([a-z][\w-]*)(?:\s[^>]*)?>[\s\S]*?<\/\1>\n?/g;
LDu = /<(ide_opened_file|ide_selection)(?:\s[^>]*)?>[\s\S]*?<\/\1>\n?/g;
function nEs() {
  if (process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC) return "essential-traffic";
  if (process.env.DISABLE_TELEMETRY) return "no-telemetry";
  if (ut(process.env.DO_NOT_TRACK)) return "no-telemetry";
  return "default";
}
function Vi() {
  return nEs() === "essential-traffic";
}
function She() {
  return nEs() !== "default";
}
function GZe() {
  if (process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC)
    return "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC";
  return null;
}
function Hpn() {
  if (process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC)
    return "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC";
  if (process.env.DISABLE_TELEMETRY) return "DISABLE_TELEMETRY";
  if (ut(process.env.DO_NOT_TRACK)) return "DO_NOT_TRACK";
  return null;
}
