// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GXn
// matched 2.1.88 source: src/utils/teleport/api.ts
// class=new  jaccard=0.026  score=0.164  fileCov=0.03
// note: nearest: src/utils/teleport/api.ts (0.026); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: ShareOnboardingGuideTool
// [unwrapped __esm module GXn] deps: constants/oauth.ts, utils/http.ts, utils/log.ts, services/analytics/growthbook.ts, utils/debug.ts, services/mcp/officialRegistry.ts, utils/semver.ts
UXn = {
  auth: "teleport-org",
  timeout: Byf,
  headers: {
    "anthropic-beta": kw
  }
};
var zzt = "ShareOnboardingGuide",
  tLo = `Upload the ONBOARDING.md in the current directory and return a share link teammates can open in Claude Code. Call this after the user has confirmed the final content.

When called with the default mode='check': if a local ONBOARDING.md is present, uploads it to the most-recently-updated org guide (or creates one if none exist) and returns a fresh link. If no local file is present, returns the existing link without uploading (status: has_existing).`;
async function nLo() {
  let e = await eLo();
  if (e.length === 0) return;
  return e.reduce((t, n) => t.updated_at > n.updated_at ? t : n);
}
function rLo(e, t, n, r) {
  let o = r ? `

Close with: "Here's your onboarding guide: ${t}" followed by the send-to-teammates line.` : "";
  return {
    data: {
      status: e,
      share_url: t,
      short_code: n,
      message: `Share link ${e}: ${t} (short_code: ${n})${o}`
    }
  };
}
function ize(e) {
  return {
    data: {
      status: "unavailable",
      message: e
    }
  };
}
var kbt,
  oLo,
  Uyf,
  Fyf,
  Kzt = "ONBOARDING.md",
  WXn = 65536,
  ShareOnboardingGuideTool;