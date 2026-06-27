// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ruc
// matched 2.1.88 source: src/components/Feedback.tsx
// class=modified (alt of src/components/Feedback.tsx)  jaccard=0.0115  score=0.0824  fileCov=0.0132
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ruc] deps: zb, dn, Jt, VM
((f2 = require("fs/promises")),
  (Qcc = require("net")),
  (xcr = require("os")),
  (Zcc = require("path")));
Gsm = ve(() =>
  dt
    .object({
      type: dt.string(),
    })
    .passthrough(),
);
function ouc({
  currentVersion: e,
  requiredMinimumVersion: t,
  requiredMaximumVersion: n,
  topLevelCommand: r,
}) {
  if (!t && !n) return null;
  if (r !== void 0 && Wsm.has(r)) return null;
  if (!kcr.parse(e)) return null;
  if (t) {
    let o = kcr.parse(t)?.version;
    if (!o)
      T(`requiredMinimumVersion '${t}' is not a valid semver version \u2014 ignoring`, {
        level: "error",
      });
    else if (!aL(e, o))
      return `Claude Code ${e} is older than the minimum version required by your organization (${t}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`;
  }
  if (n) {
    let o = kcr.parse(n)?.version;
    if (!o)
      T(`requiredMaximumVersion '${n}' is not a valid semver version \u2014 ignoring`, {
        level: "error",
      });
    else if (!jst(e, o))
      return `Claude Code ${e} is newer than the maximum version allowed by your organization (${n}).
Your organization requires version ${n} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`;
  }
  return null;
}
function suc(e) {
  try {
    let t = e.parent ? e : null;
    while (t?.parent?.parent) t = t.parent;
    let n = yn("policySettings");
    return ouc({
      currentVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      requiredMinimumVersion: n?.requiredMinimumVersion,
      requiredMaximumVersion: n?.requiredMaximumVersion,
      topLevelCommand: t?.name(),
    });
  } catch (t) {
    return (ke(t), null);
  }
}
function iuc() {
  try {
    let e = yn("policySettings");
    return ouc({
      currentVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      requiredMinimumVersion: e?.requiredMinimumVersion,
      requiredMaximumVersion: e?.requiredMaximumVersion,
      topLevelCommand: void 0,
    });
  } catch (e) {
    return (ke(e), null);
  }
}
var kcr, Wsm;
