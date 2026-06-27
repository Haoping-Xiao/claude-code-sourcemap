// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hZl
// matched 2.1.88 source: src/commands/bridge/index.ts
// class=partial  jaccard=0.2096  score=0.3551  fileCov=0.3385
// note: low-confidence suggestion: src/commands/bridge/index.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hZl = E(() => {
  ft();
  SC();
  lKf = {
    type: "local-jsx",
    name: "remote-control",
    aliases: ["rc"],
    get description() {
      return d0() ? "Disconnect Remote Control" : "Control this session from your phone or claude.ai/code";
    },
    get argumentHint() {
      return d0() ? void 0 : "[name]";
    },
    isEnabled: xC,
    get isHidden() {
      return !xC();
    },
    immediate: true,
    load: () => Promise.resolve().then(() => (mZl(), fZl))
  }, cKf = lKf;
});
function GJt() {
  return yZl.join(tr(), "daemon.status.json");
}
async function _Zl(e) {
  let t = {
    supervisorPid: process.pid,
    supervisorProcStart: fte(),
    writtenAt: Date.now(),
    workers: e
  };
  try {
    await qs().atomicWrite(GJt(), De(t, null, 2));
  } catch {}
}
async function bZl() {
  try {
    await qs().delete(GJt());
  } catch {}
}
async function SZl() {
  let e;
  try {
    e = await qs().read(GJt());
  } catch {
    return null;
  }
  let t = Ia(e, false);
  if (!t || typeof t !== "object") return null;
  let n = t;
  if (typeof n.supervisorPid !== "number" || typeof n.workers !== "object" || n.workers === null) return null;
  try {
    process.kill(n.supervisorPid, 0);
  } catch {
    return null;
  }
  let r = typeof n.supervisorProcStart === "string" ? n.supervisorProcStart : void 0;
  if (!(await bv(n.supervisorPid, r))) return null;
  return t;
}
var yZl;