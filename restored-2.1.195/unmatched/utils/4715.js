// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mBl
// matched 2.1.88 source: src/utils/file.ts
// class=new  jaccard=0.0243  score=1  fileCov=0.0243
// note: nearest: src/utils/file.ts (0.0243); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mBl] deps: @mixmark-io/domino/lib/Document.js, services/analytics/index.ts, commander/lib/command.js, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, services/analytics/metadata.ts, memdir/teamMemPrompts.ts, services/analytics/growthbook.ts, utils/debug.ts, utils/readFileInRange.ts, tasks/DreamTask/DreamTask.ts, context/notifications.tsx, tools/FileEditTool/constants.ts, @mixmark-io/domino/lib/htmlelts.js, utils/claudemd.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/nativeInstaller/download.ts, utils/profilerBase.ts, components/memory/MemoryFileSelector.tsx, utils/settings/settings.ts, services/teamMemorySync/secretScanner.ts, components/ThemePicker.tsx, components/CustomSelect/select.tsx
dBl = R(lt(), 1), pBl = require("fs/promises"), JNo = require("path"), hz = R(rt(), 1), JQ = R(se(), 1);
function yBl(e) {
  let t = gBl.homedir(),
    n = $t(),
    r = e.startsWith(t) ? "~" + e.slice(t.length) : null,
    o = e.startsWith(n) ? "./" + hBl.relative(n, e) : null;
  if (r && o) return r.length <= o.length ? r : o;
  return r || o || e;
}
var EOf, gBl, hBl, _Bl;