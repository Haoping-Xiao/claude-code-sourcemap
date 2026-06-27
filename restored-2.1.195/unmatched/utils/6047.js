// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lqc
// matched 2.1.88 source: src/utils/fsOperations.ts
// class=new  jaccard=0.0343  score=0.4714  fileCov=0.0357
// note: nearest: src/utils/fsOperations.ts (0.0343); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lqc] deps: main.tsx, utils/claudeInChrome/common.ts, dn, services/analytics/growthbook.ts, utils/debug.ts, utils/debug.ts, utils/errors.ts, utils/peerAddress.ts, utils/teammateContext.ts, utils/sequential.ts, utils/platform.ts, @smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js, @inquirer/figures/dist/esm/index.js, undici/lib/web/fileapi/util.js, components/Feedback.tsx, cli/print.ts, upstreamproxy/upstreamproxy.ts, utils/git.ts, utils/plugins/installCounts.ts, @aws-sdk/client-bedrock/dist-cjs/index.js, commander/lib/command.js
kp = require("fs/promises"), GZo = require("os"), WZo = require("path"), eNm = new Set();
async function dqc(e) {
  let t = process.stdout.isTTY,
    n = await dBe.stat(e).then(s => s.size).catch(() => 0);
  if (n > cqc) await zZo(e), n = 0;
  let r = qZo(e),
    o = false;
  return {
    write(s, i) {
      let a = `[${new Date().toISOString()}] [${s}] ${xc(i)}
`;
      if (n += Buffer.byteLength(a), r.write(a), t) process.stdout.write(a);
      if (n > cqc && !o) {
        o = true;
        let l = r;
        (async () => {
          if (Vt() === "windows") await VZo(l), await zZo(e), r = qZo(e);else await zZo(e), r = qZo(e), await VZo(l);
          n = 0, o = false;
        })().catch(() => {
          o = false;
        });
      }
    },
    close() {
      return VZo(r);
    }
  };
}
function qZo(e) {
  let t = uqc.createWriteStream(e, {
    flags: "a"
  });
  return t.on("error", () => {}), t;
}
function VZo(e) {
  return new Promise(t => e.end(() => t()));
}
async function zZo(e) {
  let t = `${e}.1`;
  try {
    await dBe.rename(e, t);
  } catch (n) {
    if (wn(n)) return;
    await dBe.unlink(t).catch(() => {}), await dBe.rename(e, t).catch(() => dBe.unlink(e).catch(() => {}));
  }
}
var uqc,
  dBe,
  cqc = 10485760;