// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GHl
// matched 2.1.88 source: src/commands/sandbox-toggle/sandbox-toggle.tsx
// class=modified (alt of src/commands/sandbox-toggle/sandbox-toggle.tsx)  jaccard=0.0212  score=0.0419  fileCov=0.0412
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module GHl] deps: services/analytics/index.ts, @grpc/grpc-js/build/src/server.js, utils/fsOperations.ts, utils/fsOperations.ts, utils/powershell/parser.ts, utils/file.ts
((BHl = require("os")), (TP = require("path")));
K_f = ["head", "objects", "refs", "hooks"];
((Y_f = ["path", "literalpath"]),
  (X_f = new Set(["pspath", "lp"])),
  (J_f = new Set(["cf", "wi", "vb", "db", "usetx"])),
  (Q_f = new Set(["ea", "ev", "wa", "wv", "infa", "iv", "proga", "ov", "ob", "pv"])),
  (Z_f = [
    "container",
    "force",
    "passthru",
    "recurse",
    "whatif",
    "confirm",
    "usetransaction",
    "verbose",
    "debug",
  ]),
  (ebf = [
    "filter",
    "include",
    "exclude",
    "credential",
    "fromsession",
    "tosession",
    "erroraction",
    "errorvariable",
    "warningaction",
    "warningvariable",
    "informationaction",
    "informationvariable",
    "progressaction",
    "outvariable",
    "outbuffer",
    "pipelinevariable",
  ]));
function zHl(e) {
  if (e.length < 2) return false;
  return VHl.includes(e) || qHl.some((t) => t.startsWith(e));
}
var NLo, BLo, WHl, qHl, VHl, V2b, KHl;
