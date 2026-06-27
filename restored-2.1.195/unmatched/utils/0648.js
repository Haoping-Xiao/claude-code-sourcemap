// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oc
// matched 2.1.88 source: src/utils/nativeInstaller/download.ts
// class=new  jaccard=0.0115  score=0.5593  fileCov=0.0116
// note: nearest: src/utils/nativeInstaller/download.ts (0.0115); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oc] deps: utils/fsOperations.ts, utils/fileRead.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/platform.ts, utils/fsOperations.ts, utils/sequential.ts, utils/file.ts, utils/platform.ts, utils/fsOperations.ts
Zkr = require("crypto"), Tf = require("fs"), AG = require("fs/promises"), e0r = require("os"), Wf = require("path");
Uee = class Uee extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkWriteRefusedError";
  }
};
vhe = new Map();
zpn = new Map();