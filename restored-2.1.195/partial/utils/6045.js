// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tqc
// matched 2.1.88 source: node_modules/chokidar/esm/index.js
// class=partial  jaccard=0.0643  score=0.1924  fileCov=0.0881
// note: low-confidence suggestion: node_modules/chokidar/esm/index.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tqc] deps: At, ZVo
uXe = require("fs"), J5c = require("path"), Z5c = ["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_CODE_WORKER_EPOCH", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN", "CLAUDE_CODE_RESUME_PROMPT", "CLAUDE_CODE_SESSION_ID", "CLAUDE_CODE_REMOTE_SESSION_ID", "CLAUDE_CODE_BASE_REF", "CLAUDE_CODE_BASE_REFS", "CLAUDE_CODE_REPO_CHECKOUTS", "CLAUDE_CODE_DIAGNOSTICS_FILE", "CLAUDE_SESSION_INGRESS_TOKEN_FILE", "CLAUDECODE", "CLAUDE_CODE_CHILD_SESSION"];
async function dXe(e, t) {
  await T2.mkdir(PNo(), {
    recursive: true,
    mode: 448
  }).catch(() => {}), await T2.rename(e, mve.join(PNo(), mve.basename(e))).catch(() => T2.unlink(e).catch(() => {})), T(`[bg-dispatch] rejected ${mve.basename(e)}: ${t}`, {
    level: "warn"
  }), G("tengu_bg_dispatch_rejected", {
    reason: t.slice(0, 100)
  });
}
async function rqc(e, t) {
  let n;
  try {
    n = await T2.lstat(e);
  } catch (a) {
    if (wn(a)) return;
    return Le("daemon_bg_dispatch_ingest", "read_failed"), dXe(e, xd(a) ?? "unknown");
  }
  if (n.isSymbolicLink()) return Le("daemon_bg_dispatch_ingest", "symlink"), dXe(e, "symlink");
  if (!n.isFile()) {
    Le("daemon_bg_dispatch_ingest", "not_a_file"), T(`[bg-dispatch] removed non-regular ${mve.basename(e)}`, {
      level: "warn"
    }), await T2.rm(e, {
      recursive: true,
      force: true
    }).catch(() => {});
    return;
  }
  if (n.size > X1m) return Le("daemon_bg_dispatch_ingest", "oversized"), dXe(e, `oversized (${n.size} bytes)`);
  let r;
  try {
    r = await T2.readFile(e, "utf8");
  } catch (a) {
    if (wn(a)) return;
    return Le("daemon_bg_dispatch_ingest", "read_failed"), dXe(e, xd(a) ?? "unknown");
  }
  let o,
    s = true;
  try {
    o = Ft(r);
  } catch {
    o = void 0, s = false;
  }
  let i;
  try {
    i = Xer().safeParse(o);
  } catch {
    return Le("daemon_bg_dispatch_ingest", "transform_throw"), dXe(e, "transform_throw");
  }
  if (!i.success) return Le("daemon_bg_dispatch_ingest", s ? "schema" : "bad_json"), dXe(e, "schema");
  if (Date.now() - i.data.createdAt > Y1m) return Le("daemon_bg_dispatch_ingest", "stale"), dXe(e, "stale");
  t(i.data), xe("daemon_bg_dispatch_ingest"), await T2.unlink(e).catch(() => {});
}
async function J1m(e) {
  let t;
  try {
    t = await T2.readdir(CKe());
  } catch (n) {
    if (wn(n)) return;
    throw n;
  }
  for (let n of t) {
    if (n.startsWith(".") || oqc(n) || n === "rejected") continue;
    await rqc(mve.join(CKe(), n), e);
  }
}
function oqc(e) {
  return e.endsWith(".tmp") || e.includes(".tmp.");
}
async function sqc(e) {
  return yl("daemon_bg_watcher_start", () => Q1m(e));
}
async function Q1m(e) {
  await T2.mkdir(CKe(), {
    recursive: true,
    mode: 448
  }).catch(() => {});
  let t = Vt(),
    n = t === "macos",
    r = S1.watch(CKe(), {
      ignoreInitial: true,
      depth: 0,
      usePolling: n,
      interval: 100,
      ignored: o => oqc(mve.basename(o)) || mve.basename(o) === "rejected",
      ...(t === "windows" && {
        awaitWriteFinish: {
          stabilityThreshold: 50,
          pollInterval: 20
        }
      })
    });
  return r.on("add", o => {
    rqc(o, e).catch(s => T(`[bg-dispatch] ${s}`, {
      level: "error"
    }));
  }), r.on("error", o => {
    T(`[bg-dispatch] watcher error: ${o}`, {
      level: "error"
    }), G("tengu_bg_dispatch_watcher_failed", {
      errno: xd(o) ?? "unknown"
    });
  }), await vc(nqc.once(r, "ready"), 5000, "chokidar ready").catch(o => T(`[bg-dispatch] watcher ready wait: ${o}`)), await J1m(e).catch(o => {
    T(`[bg-dispatch] cold-start drain: ${o}`, {
      level: "error"
    }), G("tengu_bg_dispatch_watcher_failed", {
      errno: xd(o) ?? "unknown"
    });
  }), {
    close: () => r.close()
  };
}
var nqc,
  T2,
  mve,
  Y1m = 86400000,
  X1m = 262144;