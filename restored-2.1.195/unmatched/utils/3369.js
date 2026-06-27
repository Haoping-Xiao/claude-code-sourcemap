// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _$
// matched 2.1.88 source: src/utils/Shell.ts
// class=new  jaccard=0.0314  score=0.7364  fileCov=0.0318
// note: nearest: src/utils/Shell.ts (0.0314); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module _$] deps: lodash-es/memoize.js, utils/debug.ts, services/analytics/index.ts, utils/ShellCommand.ts, @grpc/grpc-js/build/src/server.js, utils/fsOperations.ts, utils/debug.ts, utils/errors.ts, constants/files.ts, utils/fsOperations.ts, @smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js, Task.ts, utils/task/TaskOutput.ts, proxy-from-env/index.js, axios/lib/utils.js, utils/bash/ast.ts, cli/print.ts, utils/embeddedTools.ts, main.tsx, utils/plugins/loadPluginHooks.ts, utils/platform.ts, utils/bash/bashParser.ts, Hro, utils/hooks/fileChangedWatcher.ts, utils/shell/powershellProvider.ts, utils/powershell/parser.ts, utils/Shell.ts, utils/subprocessEnv.ts, follow-redirects/index.js, @smithy/core/dist-cjs/submodules/cbor/index.js, utils/windowsPaths.ts
dMa = require("child_process"), m6 = require("fs"), qqe = require("fs/promises"), pMa = require("os"), njn = require("path"), fMa = require("fs");
Kmo = Cn(iRp);
aRp = Cn(async () => {
  let e = await d6();
  if (!e) throw Error("PowerShell is not available");
  return cMa(e);
}), lRp = {
  bash: async () => (await Kmo()).provider,
  powershell: aRp
};
function Y0(e = H.boolean()) {
  return H.preprocess(t => t === "true" ? true : t === "false" ? false : t, e);
}