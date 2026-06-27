// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CRo
// matched 2.1.88 source: src/commands/copy/copy.tsx
// class=new  jaccard=0.0275  score=0.2449  fileCov=0.03
// note: nearest: src/commands/copy/copy.tsx (0.0275); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CRo = E(() => {
  c_();
});
var eze = "RemoteTrigger",
  mSl = "Manage scheduled remote Claude Code agents (routines) via the claude.ai CCR API. Auth is handled in-process \u2014 the token never reaches the shell.",
  gSl = `Call the claude.ai remote-trigger API. Use this instead of curl \u2014 the OAuth token is added automatically in-process and never exposed.

Actions:
- list: GET /v1/code/triggers
- get: GET /v1/code/triggers/{trigger_id}
- create: POST /v1/code/triggers (requires body)
- update: POST /v1/code/triggers/{trigger_id} (requires body, partial update)
- run: POST /v1/code/triggers/{trigger_id}/run (optional body)

The response is the raw JSON from the API. For create/update, a summary line is appended with the server-parsed run time and the routine's claude.ai URL \u2014 relay both to the user so they can confirm the time is right and know where the result will appear.`;
function hSl(e) {
  return `${e.action ?? ""}${e.trigger_id ? ` ${e.trigger_id}` : ""}`;
}
function ySl(e) {
  let t = hu(e.json, `
`) + 1;
  return Dzt.jsx(qn, {
    children: Dzt.jsxs(w, {
      children: ["HTTP ", e.status, " ", Dzt.jsxs(w, {
        dimColor: true,
        children: ["(", t, " lines)"]
      })]
    })
  });
}
var Dzt;