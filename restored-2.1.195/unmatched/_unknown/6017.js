// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sWc
// matched 2.1.88 source: node_modules/@mixmark-io/domino/lib/htmlelts.js
// class=new  jaccard=0.012  score=0.1163  fileCov=0.0132
// note: nearest: node_modules/@mixmark-io/domino/lib/htmlelts.js (0.012); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sWc = E(() => {
  kgr();
  awt();
});
function iXe(e) {
  return e.replace(/[&<>"']/g, t => b$m[t] ?? t);
}
function Qgr(e, t) {
  let n = t?.script ? iWc.randomBytes(16).toString("base64url") : void 0,
    r = t?.formAction ? `'self' ${t.formAction}` : "'self'";
  return new Response(`<!doctype html><html lang="en"><meta charset=utf-8><meta name="viewport" content="width=device-width,initial-scale=1"><title>Claude Code</title><style>${S$m}</style><main>${e}</main>${t?.script ? `<script nonce="${n}">${t.script}</script>` : ""}`, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": `default-src 'none'; style-src 'unsafe-inline'; ${n ? `script-src 'nonce-${n}'; ` : ""}frame-ancestors 'none'; form-action ${r}; base-uri 'none'`,
      "Cache-Control": "no-store",
      Pragma: "no-cache"
    }
  });
}
function aWc(e, t, n) {
  let r = iXe(e),
    o = iXe(new URL(t).hostname);
  return new Response(`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Claude gateway for Amazon Bedrock, Google Cloud, and Microsoft Foundry</title>
</head>
<body style="font-family: monospace; margin: 1em;">
<pre style="line-height: 1; margin: 0 0 1em 0;">${E$m}</pre>
<pre style="margin: 0;">
<b>Claude gateway for Amazon Bedrock, Google Cloud, and Microsoft Foundry</b>

Running at ${r}

To connect from Claude Code:
  Your admin provisions this gateway URL via managed settings
  (forceLoginGatewayUrl) \u2014 then /login connects here directly.

Identity provider   ${o}
Discovery           <a href="/.well-known/oauth-authorization-server">/.well-known/oauth-authorization-server</a>
Version             ${iXe(n)}
</pre>
</body>
</html>`, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'; form-action 'none'; base-uri 'none'",
      "Cache-Control": "no-store"
    }
  });
}
function orn(e) {
  let {
      prefill: t,
      error: n,
      idpOrigin: r
    } = e,
    o = n ? `<div class="error-card" style="margin-top:20px"><span class="bang" aria-hidden="true">!</span><span class="msg">${iXe(n)}</span></div>` : "";
  if (t) return Qgr(`<span class="status warn">Confirm device</span>
<h1>Approve sign-in?</h1>
<p class="sub">A device is requesting access to Claude Code. <strong>Only continue if this code matches the one shown on your device.</strong> If you didn't start this, close this tab.</p>
<form method="post" action="/device">
  <div class="code-display">${iXe(t)}</div>
  <input type="hidden" name="user_code" value="${iXe(t)}">
  <button class="go" type="submit">This matches my device \u2014 continue</button>
</form>
${o}`, {
    formAction: r
  });
  return Qgr(`<span class="status warn">Connect device</span>
<h1>Enter the code from your device.</h1>
<p class="sub">Claude Code shows a short code when you sign in. Enter it here to connect \u2014 then you'll sign in with your company identity provider.</p>
<form method="post" action="/device">
  <input class="code-input" name="user_code" inputmode="latin" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false" placeholder="XXXX-XXXX" maxlength="9" autofocus required>
  <button class="go" type="submit">Continue</button>
</form>
${o}`, {
    formAction: r
  });
}
function aXe(e) {
  if (e) return Qgr(`<span class="status err">Sign-in failed</span>
<h1>We couldn&rsquo;t finish signing you in.</h1>
<p class="sub">Close this tab and try signing in again. If the error persists, share the message below with your IT administrator.</p>
<div class="error-card"><span class="bang" aria-hidden="true">!</span><span class="msg">${iXe(e)}</span></div>`);
  return Qgr(`<span class="status">Connected</span>
<h1>You&rsquo;re signed in.</h1>
<p class="sub">Return to your device \u2014 it should connect within a few seconds. You can close this tab.</p>`, {
    script: "setTimeout(function(){try{window.close()}catch(e){}}, 1500)"
  });
}
var iWc,
  b$m,
  S$m = `
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0;padding:0}
body{min-height:100vh;background:#FAF9F5;color:#141413;font:15px/1.5 ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px}
main{width:100%;max-width:560px}
.status{display:inline-flex;align-items:center;gap:8px;padding:4px 10px 4px 8px;border-radius:999px;background:rgba(85,138,66,.10);color:#345C28;font-size:12.5px;font-weight:500;letter-spacing:-.005em;margin-bottom:20px}
.status::before{content:"";width:6px;height:6px;border-radius:50%;background:#558A42;box-shadow:0 0 0 3px rgba(85,138,66,.18)}
.status.err{background:rgba(166,50,68,.08);color:#671D28}
.status.err::before{background:#A63244;box-shadow:0 0 0 3px rgba(166,50,68,.15)}
.status.warn{background:rgba(31,30,29,.06);color:#4D4C48}
.status.warn::before{background:#73726C;box-shadow:0 0 0 3px rgba(31,30,29,.12)}
h1{font-family:ui-serif,Charter,"Iowan Old Style",Georgia,serif;font-weight:400;font-size:32px;line-height:1.15;letter-spacing:-.02em;margin:0 0 10px;text-wrap:balance}
.sub{margin:0 0 28px;color:#4D4C48;font-size:15px;line-height:1.55;max-width:52ch}
.sub strong{color:#141413;font-weight:600}
.code-input{width:100%;font:24px/1 ui-monospace,"SF Mono",SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.25em;text-align:center;text-transform:uppercase;padding:18px 16px;border:.5px solid rgba(31,30,29,.25);border-radius:12px;background:#FFF;color:#141413;outline:none;margin-bottom:16px}
.code-input:focus{border-color:#2A78D6;box-shadow:0 0 0 3px rgba(42,120,214,.18)}
.code-display{font:28px/1 ui-monospace,"SF Mono",SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.3em;text-align:center;padding:22px 16px;border:.5px solid rgba(31,30,29,.15);border-radius:12px;background:#FFF;margin-bottom:8px}
button.go{appearance:none;border:none;width:100%;background:#141413;color:#FAF9F5;font:inherit;font-size:15px;font-weight:500;padding:14px 20px;border-radius:10px;cursor:pointer}
button.go:hover{background:#2A2926}
button.go:focus-visible{outline:2px solid #2A78D6;outline-offset:2px}
.error-card{background:#FFF;border:.5px solid rgba(31,30,29,.15);border-left:3px solid #A63244;border-radius:10px;padding:14px 16px;font-size:14px;line-height:1.5;display:flex;align-items:flex-start;gap:10px}
.error-card .bang{flex:none;width:18px;height:18px;border-radius:50%;background:#A63244;color:#FFF;font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;line-height:1;margin-top:1px}
.error-card .msg{color:#3D3D3A}
@media (max-width:520px){h1{font-size:26px}body{padding:32px 18px}.code-display,.code-input{font-size:22px}}
`,
  E$m = ` \u2590\u259B\u2588\u2588\u2588\u259C\u258C
\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u259B\u2598
  \u2598\u2598 \u259D\u259D`;