// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pht
// matched 2.1.88 source: src/utils/fingerprint.ts
// class=modified  jaccard=0.2228  score=0.3208  fileCov=0.4216
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function J7p(e) {
  let firstUserMessage = e.find((r) => r.type === "user" && !r.isMeta);
  if (!firstUserMessage) return "";
  let content = firstUserMessage.message.content;
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    let r = content.find((o) => o.type === "text");
    if (r && r.type === "text") return r.text;
  }
  return "";
}
function CHo(e, t) {
  let r = [4, 7, 20].map((i) => e[i] || "0").join(""),
    o = `${FINGERPRINT_SALT}${r}${t}`;
  return jXa.createHash("sha256").update(o).digest("hex").slice(0, 3);
}
function GXa(e) {
  let t = J7p(e);
  return CHo(
    t,
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION,
  );
}
var jXa,
  FINGERPRINT_SALT = "59cf53e54c78";
