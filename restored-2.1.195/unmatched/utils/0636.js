// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Lo
// matched 2.1.88 source: src/utils/fsOperations.ts
// class=new  jaccard=0.0472  score=0.4611  fileCov=0.0499
// note: nearest: src/utils/fsOperations.ts (0.0472); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Lo] deps: services/analytics/index.ts, @grpc/grpc-js/build/src/server.js
kEs = require("async_hooks"), kpn = new kEs.AsyncLocalStorage();
async function eg(e, t, n) {
  let r = `${e}.tmp.${Vkr.randomBytes(4).toString("hex")}`;
  try {
    await cY.writeFile(r, t, {
      encoding: "utf8",
      mode: n
    });
    try {
      await cY.rename(r, e);
    } catch (o) {
      let s = on(o);
      if (s !== void 0 && $Fe.has(s)) {
        try {
          if (await cY.copyFile(r, e), n !== void 0) await cY.chmod(e, n).catch(() => {});
        } catch (i) {
          if (REs.has(on(i) ?? "")) await cY.unlink(e).catch(() => {});
          throw i;
        }
        await cY.unlink(r).catch(() => {});
      } else throw o;
    }
  } catch (o) {
    throw await cY.unlink(r).catch(() => {}), o;
  }
}
function oj(e, t, n) {
  let r = `${e}.tmp.${Vkr.randomBytes(4).toString("hex")}`;
  try {
    lY.writeFileSync(r, t, {
      encoding: "utf8",
      mode: n
    });
    try {
      lY.renameSync(r, e);
    } catch (o) {
      let s = on(o);
      if (s !== void 0 && $Fe.has(s)) {
        try {
          if (lY.copyFileSync(r, e), n !== void 0) try {
            lY.chmodSync(e, n);
          } catch {}
        } catch (i) {
          if (REs.has(on(i) ?? "")) try {
            lY.unlinkSync(e);
          } catch {}
          throw i;
        }
        try {
          lY.unlinkSync(r);
        } catch {}
      } else throw o;
    }
  } catch (o) {
    try {
      lY.unlinkSync(r);
    } catch {}
    throw o;
  }
}
var Vkr, lY, cY, $Fe, REs;