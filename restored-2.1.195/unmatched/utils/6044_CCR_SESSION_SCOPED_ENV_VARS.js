// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BZo
// matched 2.1.88 source: node_modules/commander/lib/command.js
// class=new  jaccard=0.0126  score=0.2556  fileCov=0.0131
// note: nearest: node_modules/commander/lib/command.js (0.0126); dir inferred from dep-graph -> utils; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: runPreload, PRELOAD_CLAIM_SOCK, CCR_SESSION_SCOPED_ENV_VARS
// [unwrapped __esm module BZo] deps: dn, utils/debug.ts, utils/debug.ts, main.tsx, utils/errors.ts, utils/peerAddress.ts, utils/managedEnvConstants.ts, utils/platform.ts, utils/fsOperations.ts, services/PromptSuggestion/speculation.ts, @inquirer/figures/dist/esm/index.js, utils/git.ts, @smithy/core/dist-cjs/submodules/cbor/index.js, commands/bridge-kick.ts, utils/process.ts
fhr = require("crypto"), Y5c = require("fs"), XP = require("fs/promises"), ghr = require("net"), mhr = require("path");
K5c = [50, 100, 150, 200, 250, 300, 400, 500, 500, 500];
async function runPreload(e) {
  let t = e[0] || PRELOAD_CLAIM_SOCK,
    n = `${t}.pid`,
    r = Promise.resolve().then(() => (Qtn(), phr));
  for (let l of CCR_SESSION_SCOPED_ENV_VARS) delete process.env[l];
  try {
    uXe.mkdirSync(J5c.dirname(t), {
      recursive: true,
      mode: 448
    }), uXe.unlinkSync(t);
  } catch {}
  let o = () => {
      for (let l of [t, n]) try {
        uXe.unlinkSync(l);
      } catch {}
    },
    s = () => {
      o(), process.exit(0);
    },
    i = l => {
      o(), process.stderr.write(`[preload] uncaughtException: ${be(l)}
`), process.exit(1);
    };
  for (let l of ["SIGTERM", "SIGHUP", "SIGINT"]) process.on(l, s);
  process.on("uncaughtException", i);
  let a;
  try {
    a = await Pcr(t, () => {
      uXe.writeFileSync(n, String(process.pid), {
        mode: 384
      });
    });
  } catch (l) {
    o(), process.stderr.write(`[preload] claim recv failed: ${be(l)}
`), process.exit(1);
  }
  for (let l of ["SIGTERM", "SIGHUP", "SIGINT"]) process.off(l, s);
  process.off("uncaughtException", i), o(), await r, await Mcr(a, r);
}
var uXe,
  J5c,
  PRELOAD_CLAIM_SOCK = "/home/claude/.claude/remote/spare.sock",
  CCR_SESSION_SCOPED_ENV_VARS;