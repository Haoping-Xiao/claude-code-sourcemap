// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vv
// matched 2.1.88 source: src/services/PromptSuggestion/speculation.ts
// class=modified (alt of src/services/PromptSuggestion/speculation.ts)  jaccard=0.0261  score=0.1832  fileCov=0.0295
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vv] deps: utils/debug.ts, dn, services/analytics/firstPartyEventLoggingExporter.ts, utils/permissions/permissionSetup.ts, services/mockRateLimits.ts, tools/FileReadTool/FileReadTool.ts, utils/readFileInRange.ts, utils/file.ts, services/teamMemorySync/secretScanner.ts, utils/fsOperations.ts, utils/tasks.ts, utils/permissions/filesystem.ts, utils/ide.ts, utils/claudemd.ts, utils/fsOperations.ts, utils/mcpInstructionsDelta.ts, utils/sequential.ts, utils/telemetry/pluginTelemetry.ts, utils/debug.ts, utils/errors.ts, @opentelemetry/api/build/src/context-api.js, services/api/claude.ts, constants/outputStyles.ts, utils/settings/settings.ts, tools/FileEditTool/utils.ts, utils/imageResizer.ts, hooks/usePasteHandler.ts, utils/agentContext.ts, k0, utils/sessionStorage.ts, services/mcp/auth.ts, services/analytics/index.ts, memdir/memoryAge.ts, @growthbook/growthbook/dist/esm/mongrule.mjs, has-flag/index.js, tools/GlobTool/prompt.ts, utils/toolResultStorage.ts, utils/claudemd.ts, screens/REPL.tsx, utils/errors.ts, utils/nativeInstaller/download.ts, tools/AgentTool/loadAgentsDir.ts, commands/insights.ts, tools/AgentTool/AgentTool.tsx, utils/permissions/permissionSetup.ts, utils/http.ts, utils/task/diskOutput.ts, components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.tsx, Task.ts, tasks/LocalShellTask/LocalShellTask.tsx, services/analytics/index.ts, services/vcr.ts, tools/BriefTool/prompt.ts, utils/permissions/permissionSetup.ts, @xmldom/xmldom/lib/entities.js, i0l, utils/claudeInChrome/common.ts, cli/print.ts, services/mcp/config.ts, utils/ultraplan/keyword.ts, utils/plugins/lspPluginIntegration.ts, utils/messages.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/thinking.ts, yYt, utils/effort.ts, Il, utils/tempfile.ts, utils/model/check1mAccess.ts, utils/analyzeContext.ts, memdir/findRelevantMemories.ts, services/analytics/growthbook.ts, utils/worktree.ts, utils/fsOperations.ts, tools/FileReadTool/prompt.ts, tools/WebSearchTool/prompt.ts, tools/FileReadTool/UI.tsx, utils/imageResizer.ts, services/PromptSuggestion/promptSuggestion.ts, utils/attachments.ts, PDo, utils/settings/constants.ts, services/analytics/metadata.ts, tools/FileEditTool/constants.ts, utils/teammateMailbox.ts, utils/concurrentSessions.ts, utils/teammate.ts, utils/swarm/spawnInProcess.ts, utils/tasks.ts, Il
((RSt = require("fs/promises")),
  (Nk = require("path")),
  (r$o = require("crypto")),
  (NCf = (Eoe(), ro(Ope))),
  (FZn = (f4(), ro(URe)).BRIEF_TOOL_NAME),
  (_Yt = {
    TURNS_SINCE_WRITE: 10,
    TURNS_BETWEEN_REMINDERS: 10,
  }));
((n$o = {
  TURNS_BETWEEN_ATTACHMENTS: 5,
  FULL_REMINDER_EVERY_N_ATTACHMENTS: 5,
}),
  (E0l = {
    TURNS_BETWEEN_MAINTENANCE: 10,
  }),
  (A0l = {
    MAX_SESSION_BYTES: 61440,
  }));
BCf = new Set(["prompt", "task-notification"]);
aIf = new Set([
  "extract_memories",
  "auto_dream",
  X1n,
  Qio,
  "prompt_suggestion",
  "speculation",
  "compact",
]);
SYt = new Map();
e$o = new Set();
async function xIf() {
  (await Promise.all(
    Array.from(u$o).map((e) =>
      iz
        .rm(e, {
          force: true,
        })
        .catch(() => {}),
    ),
  ),
    u$o.clear());
}
async function W0l(e) {
  let t = LSt.join(e, DSt),
    n = LSt.join(t, String(process.pid));
  try {
    (await iz.mkdir(t, {
      recursive: true,
    }),
      await eg(
        n,
        De({
          pid: process.pid,
          procStart: await zPt(),
        }),
      ));
  } catch (r) {
    T(`Failed to write ${DSt} marker: ${e}: ${r}`);
    return;
  }
  (u$o.add(n), (IIf ??= Ci(xIf)));
}
async function q0l(e) {
  if (e.length === 0) return;
  let t = LSt.join(kI(), G0l);
  try {
    let r = await iz.stat(t);
    if (Date.now() - r.mtimeMs < kIf) return;
  } catch {}
  let n = await Promise.allSettled(e.map((r) => HYt(r)));
  for (let [r, o] of n.entries())
    if (o.status === "rejected") T(`Failed to sweep ${DSt}: ${e[r]}: ${o.reason}`);
  try {
    await iz.writeFile(t, new Date().toISOString(), "utf-8");
  } catch (r) {
    T(`Failed to stamp ${G0l}: ${r}`);
  }
}
async function HYt(e, t) {
  let n = LSt.join(e, DSt),
    r;
  try {
    r = await iz.readdir(n);
  } catch (s) {
    if (Vo(s)) return false;
    throw s;
  }
  let o = false;
  for (let s of r) {
    if (s.includes(".tmp.")) {
      o = true;
      continue;
    }
    let i = LSt.join(n, s),
      a;
    try {
      a = await iz.readFile(i, "utf-8");
    } catch {}
    if (a === "") {
      o = true;
      continue;
    }
    let l = CIf().safeParse(Ia(a, false));
    if (t?.excludeSelf && l.success && l.data.pid === process.pid) continue;
    if (
      l.success &&
      (l.data.pid === 1 || zR(l.data.pid)) &&
      (await bv(l.data.pid, l.data.procStart))
    ) {
      o = true;
      continue;
    }
    await iz.rm(i, {
      force: true,
    });
  }
  return o;
}
var iz,
  LSt,
  DSt = ".in_use",
  CIf,
  u$o,
  IIf,
  G0l = ".last_inuse_sweep",
  kIf = 86400000;
