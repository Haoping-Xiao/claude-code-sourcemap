// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _7o
// matched 2.1.88 source: src/components/InvalidSettingsDialog.tsx
// class=modified  jaccard=0.3341  score=0.4192  fileCov=0.6221
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: InvalidSettingsDialog
// [unwrapped __esm module _7o] deps: utils/debug.ts, utils/gracefulShutdown.ts, services/analytics/index.ts, interactiveHelpers.tsx, context.ts, entrypoints/init.ts, ink/terminal.ts, utils/mailbox.ts, main.tsx, dn, services/analytics/growthbook.ts, services/api/grove.ts, utils/plugins/pluginBlocklist.ts, utils/renderOptions.ts, commands/install.tsx, utils/apiPreconnect.ts, @smithy/smithy-client/dist-cjs/index.js, utils/claudemd.ts, utils/concurrentSessions.ts, utils/config.ts, utils/debug.ts, utils/githubRepoPathMapping.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, @anthropic-ai/bedrock-sdk/client.mjs, utils/sequential.ts, utils/permissions/bypassPermissionsKillswitch.ts, utils/preflightChecks.tsx, utils/status.tsx, utils/plugins/loadPluginAgents.ts, services/remoteManagedSettings/securityCheck.tsx, utils/status.tsx, utils/settings/settings.ts, utils/user.ts
((fmr = require("fs")), (hw = R(se(), 1)));
function InvalidSettingsDialog(t0) {
  let t = X$c.c(21),
    { settingsErrors: n, onContinue: r, onFix: o, onExit: s } = t0,
    i;
  if (t[0] !== r || t[1] !== s || t[2] !== o)
    ((i = function (S) {
      if (S === "exit") s();
      else if (S === "fix") o();
      else r();
    }),
      (t[0] = r),
      (t[1] = s),
      (t[2] = o),
      (t[3] = i));
  else i = t[3];
  let a = i,
    l;
  if (t[4] !== n) ((l = n.some(Txm)), (t[4] = n), (t[5] = l));
  else l = t[5];
  let c = l,
    u;
  if (t[6] !== c)
    ((u = c
      ? [
          {
            label: "Fix with Claude",
            value: "fix",
          },
          {
            label: "Exit and fix manually",
            value: "exit",
          },
          {
            label: "Continue without these settings",
            value: "continue",
          },
        ]
      : [
          {
            label: "Continue",
            value: "continue",
          },
          {
            label: "Fix with Claude",
            value: "fix",
          },
          {
            label: "Exit and fix manually",
            value: "exit",
          },
        ]),
      (t[6] = c),
      (t[7] = u));
  else u = t[7];
  let d = u,
    p = c ? "Settings Error" : "Settings Warning",
    f = c ? s : r,
    m;
  if (t[8] !== n)
    ((m = Evt.jsx(Enr, {
      errors: n,
    })),
      (t[8] = n),
      (t[9] = m));
  else m = t[9];
  let g = c
      ? "Files with errors are skipped entirely, not just the invalid settings."
      : "The values listed above were skipped; the rest of the file is in effect.",
    h;
  if (t[10] !== g)
    ((h = Evt.jsx(w, {
      dimColor: true,
      children: g,
    })),
      (t[10] = g),
      (t[11] = h));
  else h = t[11];
  let y;
  if (t[12] !== a || t[13] !== d)
    ((y = Evt.jsx(Sr, {
      options: d,
      onChange: a,
    })),
      (t[12] = a),
      (t[13] = d),
      (t[14] = y));
  else y = t[14];
  let b;
  if (t[15] !== p || t[16] !== f || t[17] !== m || t[18] !== h || t[19] !== y)
    ((b = Evt.jsxs(zn, {
      title: p,
      onCancel: f,
      color: "warning",
      children: [m, h, y],
    })),
      (t[15] = p),
      (t[16] = f),
      (t[17] = m),
      (t[18] = h),
      (t[19] = y),
      (t[20] = b));
  else b = t[20];
  return b;
}
function Txm(e) {
  return e.severity !== "warning";
}
var X$c, Evt;
