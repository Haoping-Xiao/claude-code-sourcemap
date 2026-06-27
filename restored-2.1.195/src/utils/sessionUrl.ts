// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HO
// matched 2.1.88 source: src/utils/sessionUrl.ts
// class=modified  jaccard=0.5815  score=0.7746  fileCov=0.6999
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module HO] deps: google-auth-library/build/src/crypto/node/crypto.js
((qon = require("crypto")),
  (szc = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i));
function Xwt() {
  let e = process.env.CLAUDE_CODE_REMOTE_SESSION_ID?.trim();
  return e ? Ywt(e, Wns) : null;
}
function Uyr(e) {
  if (e.toLowerCase().endsWith(".jsonl"))
    return {
      sessionId: Gns.randomUUID(),
      ingressUrl: null,
      isUrl: false,
      jsonlFile: e,
      isJsonlFile: true,
    };
  if (yD(e))
    return {
      sessionId: e,
      ingressUrl: null,
      isUrl: false,
      jsonlFile: null,
      isJsonlFile: false,
    };
  try {
    let t = new URL(e);
    return {
      sessionId: Xwt() ?? Ywt(t.href, Wns),
      ingressUrl: t.href,
      isUrl: true,
      jsonlFile: null,
      isJsonlFile: false,
    };
  } catch {}
  return null;
}
var Gns,
  Wns = "3ab19d7e-9f35-45c2-926e-75e271cc60b3";
