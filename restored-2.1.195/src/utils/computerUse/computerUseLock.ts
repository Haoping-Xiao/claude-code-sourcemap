// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qpo
// matched 2.1.88 source: src/utils/computerUse/computerUseLock.ts
// class=modified  jaccard=0.2726  score=0.5631  fileCov=0.3457
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Qpo] deps: spt, @modelcontextprotocol/sdk/dist/esm/types.js
GFn = Dy({
  kind: "computer_use_approval",
  payload: ve(() => H.custom((e) => typeof e === "object" && e !== null)),
  result: ve(() => H.custom((e) => typeof e === "object" && e !== null)),
  default: {
    granted: [],
    denied: [],
    flags: pJ,
  },
});
function isComputerUseLock(value) {
  if (typeof value !== "object" || value === null) return false;
  return (
    "sessionId" in value &&
    typeof value.sessionId === "string" &&
    "pid" in value &&
    typeof value.pid === "number"
  );
}
function ipt() {
  return Z0a.join(tr(), LOCK_FILENAME);
}
async function aGt() {
  try {
    let e = await JSe.readFile(ipt(), "utf8"),
      t = Ft(e);
    return isComputerUseLock(t) ? t : void 0;
  } catch {
    return;
  }
}
function eRa(e) {
  try {
    return (process.kill(e, 0), true);
  } catch {
    return false;
  }
}
async function efo(e) {
  try {
    return (
      await JSe.writeFile(ipt(), De(e), {
        flag: "wx",
      }),
      true
    );
  } catch (t) {
    if (on(t) === "EEXIST") return false;
    throw t;
  }
}
function tfo() {
  (lGt?.(),
    (lGt = Ci(async () => {
      await releaseComputerUseLock();
    })));
}
async function checkComputerUseLock() {
  let e = await aGt();
  if (!e)
    return {
      kind: "free",
    };
  if (nfo())
    return {
      kind: "held_by_self",
    };
  if (e.sessionId === Rt())
    return {
      kind: "held_by_self",
    };
  if (eRa(e.pid))
    return {
      kind: "blocked",
      by: e.sessionId,
    };
  return (
    T(`Recovering stale computer-use lock from session ${e.sessionId} (PID ${e.pid})`),
    await JSe.unlink(ipt()).catch(() => {}),
    {
      kind: "free",
    }
  );
}
function nfo() {
  return lGt !== void 0;
}
async function tryAcquireComputerUseLock() {
  let e = Rt(),
    t = {
      sessionId: e,
      pid: process.pid,
      acquiredAt: Date.now(),
    };
  if ((await qs().mkdir(tr()), await efo(t))) return (tfo(), xe("computeruse_lock_acquire"), Zpo);
  let n = await aGt();
  if (!n) {
    if ((await JSe.unlink(ipt()).catch(() => {}), await efo(t)))
      return (tfo(), It("computeruse_lock_acquire", "stale_recovered"), Zpo);
    return (
      Le("computeruse_lock_acquire", "lock_held"),
      {
        kind: "blocked",
        by: (await aGt())?.sessionId ?? "unknown",
      }
    );
  }
  if (nfo()) return (xe("computeruse_lock_acquire"), Q0a);
  if (n.sessionId === e) return (xe("computeruse_lock_acquire"), Q0a);
  if (eRa(n.pid))
    return (
      Le("computeruse_lock_acquire", "lock_held"),
      {
        kind: "blocked",
        by: n.sessionId,
      }
    );
  if (
    (T(`Recovering stale computer-use lock from session ${n.sessionId} (PID ${n.pid})`),
    await JSe.unlink(ipt()).catch(() => {}),
    await efo(t))
  )
    return (tfo(), It("computeruse_lock_acquire", "stale_recovered"), Zpo);
  return (
    Le("computeruse_lock_acquire", "lock_held"),
    {
      kind: "blocked",
      by: (await aGt())?.sessionId ?? "unknown",
    }
  );
}
async function releaseComputerUseLock() {
  let e = nfo();
  (lGt?.(), (lGt = void 0));
  let t = await aGt();
  if (!t || (!e && t.sessionId !== Rt())) return false;
  try {
    return (await JSe.unlink(ipt()), T("Released computer-use lock"), true);
  } catch {
    return false;
  }
}
function qFn() {
  return WFn;
}
function rRa() {
  if (WFn) return false;
  return ((WFn = true), true);
}
function VFn() {
  WFn = false;
}
var JSe,
  Z0a,
  LOCK_FILENAME = "computer-use.lock",
  lGt,
  Zpo,
  Q0a,
  WFn = false;
