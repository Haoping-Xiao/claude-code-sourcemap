// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lqc
// matched 2.1.88 source: src/utils/platform.ts
// class=partial  jaccard=0.0845  score=1  fileCov=0.0845
// note: low-confidence suggestion: src/utils/platform.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lqc = E(() => {
  VGe();
  ag();
  dn();
  Un();
  kt();
  je();
  At();
  Hpe();
  YS();
  vn();
  Is();
  VQ();
  c9o();
  qGo();
  iqc();
  tWo();
  har();
  WL();
  CHt();
  IKe();
  BZo();
  kp = require("fs/promises"), GZo = require("os"), WZo = require("path"), eNm = new Set();
});
async function dqc(e) {
  let t = process.stdout.isTTY,
    n = await dBe.stat(e).then(s => s.size).catch(() => 0);
  if (n > cqc) await zZo(e), n = 0;
  let r = qZo(e),
    o = !1;
  return {
    write(s, i) {
      let a = `[${new Date().toISOString()}] [${s}] ${xc(i)}
`;
      if (n += Buffer.byteLength(a), r.write(a), t) process.stdout.write(a);
      if (n > cqc && !o) {
        o = !0;
        let l = r;
        (async () => {
          if (Vt() === "windows") await VZo(l), await zZo(e), r = qZo(e);else await zZo(e), r = qZo(e), await VZo(l);
          n = 0, o = !1;
        })().catch(() => {
          o = !1;
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