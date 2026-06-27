// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module O7n
// matched 2.1.88 source: src/services/autoDream/consolidationLock.ts
// class=modified  jaccard=0.4245  score=0.8329  fileCov=0.464
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var O7n = E(() => {
  BFe();
  jS();
  ((dbt = require("fs/promises")), (pbt = require("path")));
});
function j0o() {
  return tyl.join(mm(), Xff);
}
async function N7n() {
  try {
    return (await a3.stat(j0o())).mtimeMs;
  } catch {
    return 0;
  }
}
async function nyl() {
  let e = j0o(),
    t,
    n;
  try {
    let [o, s] = await Promise.all([a3.stat(e), a3.readFile(e, "utf8")]);
    t = o.mtimeMs;
    let i = parseInt(s.trim(), 10);
    n = Number.isFinite(i) ? i : void 0;
  } catch {}
  if (t !== void 0 && Date.now() - t < Jff) {
    if (n !== void 0 && zR(n))
      return (
        T(
          `[autoDream] lock held by live PID ${n} (mtime ${Math.round((Date.now() - t) / 1000)}s ago)`,
        ),
        null
      );
  }
  (await a3.mkdir(mm(), {
    recursive: true,
  }),
    await a3.writeFile(e, String(process.pid)));
  let r;
  try {
    r = await a3.readFile(e, "utf8");
  } catch {
    return null;
  }
  if (parseInt(r.trim(), 10) !== process.pid) return null;
  return t ?? 0;
}
async function B7n(e) {
  let t = j0o();
  try {
    if (e === 0) {
      await a3.unlink(t);
      return;
    }
    await a3.writeFile(t, "");
    let n = e / 1000;
    await a3.utimes(t, n, n);
  } catch (n) {
    T(`[autoDream] rollback failed: ${be(n)} \u2014 next trigger delayed to minHours`);
  }
}
async function ryl(e) {
  let t = Jh(yr());
  return (await G6e(t, true)).filter((r) => r.mtime > e).map((r) => r.sessionId);
}
var a3,
  tyl,
  Xff = ".consolidate-lock",
  Jff = 3600000;
