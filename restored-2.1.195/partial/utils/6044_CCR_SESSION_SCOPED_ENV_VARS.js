// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BZo
// matched 2.1.88 source: src/utils/gracefulShutdown.ts
// class=partial  jaccard=0.0806  score=0.4226  fileCov=0.0905
// note: low-confidence suggestion: src/utils/gracefulShutdown.ts; dir inferred from dep-graph -> utils; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var BZo = E(() => {
  dn();
  kt();
  je();
  wr();
  At();
  Hpe();
  WGe();
  Is();
  Jt();
  ZVo();
  c9o();
  WL();
  cKe();
  ESt();
  FK();
  fhr = require("crypto"), Y5c = require("fs"), XP = require("fs/promises"), ghr = require("net"), mhr = require("path");
  K5c = [50, 100, 150, 200, 250, 300, 400, 500, 500, 500];
});
var eqc = {};
_t(eqc, {
  runPreload: () => runPreload,
  PRELOAD_CLAIM_SOCK: () => PRELOAD_CLAIM_SOCK,
  CCR_SESSION_SCOPED_ENV_VARS: () => CCR_SESSION_SCOPED_ENV_VARS
});
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