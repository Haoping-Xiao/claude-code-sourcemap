// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vWt
// matched 2.1.88 source: src/utils/gracefulShutdown.ts
// class=modified  jaccard=0.177  score=0.3012  fileCov=0.3005
// note: deminified; 19 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: flushAnalyticsSinks, setupGracefulShutdown, resetShutdownState, releaseShutdownClaim, recordUncaughtAndCheckBreaker, protoDataString, ownDataString, markStartupActionStarted, isShuttingDown, hasProxyInChain, gracefulShutdownSync, gracefulShutdown, getPendingShutdownForTesting, exitIfStartupNeverMounted, emitScrollTelemetrySummary, disarmOrphanCheck, cleanupTerminalModes, claimShutdown, STARTUP_MOUNT_GRACE_MS
// [unwrapped __esm module vWt]
aVe = t1a();
function Gm() {
  return wWt;
}
function Eft(e) {
  if (((wWt = e), e && !e.enteredExisting)) gho = e.worktreeName;
}
function s1a() {
  if (wWt) return wWt.enteredExisting ? null : wWt.worktreeName;
  return gho;
}
function _Ee() {
  gho = null;
}
function hho() {
  return FPp;
}
var wWt = null,
  gho = null,
  FPp = null;
var i1a = {};
async function flushAnalyticsSinks() {
  try {
    let [{ shutdown1PEventLogging: e }, { shutdownDatadog: t }, { shutdownErrorTracking: n }] =
        await Promise.all([
          Promise.resolve().then(() => (y1(), E3e)),
          Promise.resolve().then(() => (k7(), CWt)),
          Promise.resolve().then(() => (aho(), WOa)),
        ]),
      r = [e(), t(), n()];
    await Promise.race([Promise.all(r), Nn(500)]);
  } catch {}
}
var a4n = () => {};
function cleanupTerminalModes() {
  if (!process.stdout.isTTY) return;
  try {
    bEe.writeSync(1, kce);
    let e = Cu.get(process.stdout);
    if (e?.isAltScreenActive)
      try {
        e.unmount();
      } catch {
        bEe.writeSync(1, H1());
      }
    if ((e?.drainStdin(), e?.detachForShutdown(), wLn(), !Oe.CLAUDE_CODE_DISABLE_TERMINAL_TITLE))
      bEe.writeSync(1, $Ui);
  } catch {}
}
function yho() {
  if (c4n) return;
  if (process.stdout.isTTY && Ax() && !Z3())
    try {
      let e = Rt();
      if (!RWt(e)) return;
      let t = Gg(e),
        n;
      if (t) n = `"${t.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;
      else n = e;
      let r = s1a(),
        o = r ? `--worktree ${r} ` : "";
      (bEe.writeSync(
        1,
        wt.dim(`
Resume this session with:
claude ${o}--resume ${n}
`),
      ),
        (c4n = true));
    } catch {}
}
function _ho(e) {
  if (XDe !== void 0) (clearTimeout(XDe), (XDe = void 0));
  try {
    Cu.get(process.stdout)?.drainStdin();
  } catch {}
  try {
    process.exit(e);
  } catch (t) {
    process.kill(process.pid, "SIGKILL");
  }
  throw Error("unreachable");
}
function gracefulShutdownSync(e = 0, t = "other", n) {
  ((process.exitCode = e),
    (vho = gracefulShutdown(e, t, n)
      .catch((r) => {
        (T(`Graceful shutdown failed: ${r}`, {
          level: "error",
        }),
          cleanupTerminalModes(),
          yho(),
          _ho(e));
      })
      .catch(() => {})));
}
function recordUncaughtAndCheckBreaker(e) {
  if (cVe) return false;
  if (e - Sho > bho) ((Aft = 0), (Sho = e), (IWt = []));
  if ((Aft++, Aft >= jPp)) return ((cVe = true), true);
  return false;
}
function markStartupActionStarted(e) {
  ((Aho = true), (Hho = e));
}
function d1a() {
  return Aho && !Hho;
}
function exitIfStartupNeverMounted(e) {
  if (Cu.everMounted || d1a() || isShuttingDown()) return;
  try {
    bEe.writeSync(
      2,
      `Claude Code could not start: ${be(e)}
`,
    );
  } catch {}
  gracefulShutdown(1);
}
function a1a(e) {
  if (!Ax() || Cu.everMounted || d1a() || isShuttingDown()) return;
  setTimeout(exitIfStartupNeverMounted, STARTUP_MOUNT_GRACE_MS, e).unref();
}
function hasProxyInChain(e) {
  if (e === null || (typeof e !== "object" && typeof e !== "function")) return false;
  let t = e;
  for (let n = 0; n < 128; n++) {
    if (t === null) return false;
    if (u4n.types.isProxy(t)) return true;
    t = Object.getPrototypeOf(t);
  }
  return true;
}
function ownDataString(e, t) {
  if (e === null || typeof e !== "object") return;
  if (u4n.types.isProxy(e)) return;
  let n = Object.getOwnPropertyDescriptor(e, t);
  return n && "value" in n && typeof n.value === "string" ? n.value : void 0;
}
function protoDataString(e, t) {
  if (e === null || typeof e !== "object") return;
  let n = e;
  for (let r = 0; r < 128; r++) {
    if (n === null) return;
    if (u4n.types.isProxy(n)) return;
    let o = Object.getOwnPropertyDescriptor(n, t);
    if (o) return "value" in o && typeof o.value === "string" ? o.value : void 0;
    n = Object.getPrototypeOf(n);
  }
  return;
}
function WPp(e) {
  try {
    return e instanceof Error && e.name === "McpError" && e.code === -32000;
  } catch {
    return false;
  }
}
function isShuttingDown() {
  return pVe;
}
function g1a() {
  if (uVe !== void 0 || !process.stdin.isTTY) return;
  ((uVe = setInterval(() => {
    if (WBe()) return;
    if (!process.stdout.writable || !process.stdin.readable)
      (clearInterval(uVe),
        In("info", "shutdown_signal", {
          signal: "orphan_detected",
        }),
        gracefulShutdown(129));
  }, 30000)),
    uVe.unref());
}
function disarmOrphanCheck() {
  if (uVe !== void 0) (clearInterval(uVe), (uVe = void 0));
}
function claimShutdown() {
  ((pVe = true), disarmOrphanCheck());
}
function releaseShutdownClaim() {
  ((pVe = false), g1a());
}
function emitScrollTelemetrySummary() {
  try {
    if (Ax() && o1a())
      G("tengu_scroll_summary", {
        ...r1a(),
        fullscreen: Ns(),
      });
  } catch {}
}
async function fVe() {
  try {
    let { flushAnalyticsSinks: e } = await Promise.resolve().then(() => (a4n(), i1a));
    await e();
  } catch {}
}
function resetShutdownState() {
  if (
    ((pVe = false),
    (c4n = false),
    (Aft = 0),
    (Sho = 0),
    (cVe = false),
    (IWt = []),
    (Aho = false),
    (Hho = false),
    XDe !== void 0)
  )
    (clearTimeout(XDe), (XDe = void 0));
  (disarmOrphanCheck(), (vho = void 0));
}
function getPendingShutdownForTesting() {
  return vho;
}
async function gracefulShutdown(e = 0, t = "other", n) {
  if (pVe) return;
  if (((pVe = true), n?.suppressResumeHint)) c4n = true;
  let { executeSessionEndHooks: r, getSessionEndHookTimeoutMs: o } = await Promise.resolve().then(
      () => (sp(), _1a),
    ),
    s = o();
  ((XDe = setTimeout(
    (l) => {
      (cleanupTerminalModes(), yho(), _ho(l));
    },
    Math.max(5000, s + 3500),
    e,
  )),
    XDe.unref(),
    (process.exitCode = e),
    cleanupTerminalModes(),
    yho());
  let i;
  try {
    let l = (async () => {
      try {
        await EJe();
      } catch {}
    })();
    (await Promise.race([
      l,
      new Promise((c, u) => {
        i = setTimeout((d) => d(new h1a()), 2000, u);
      }),
    ]),
      clearTimeout(i));
  } catch {
    clearTimeout(i);
  }
  try {
    await y1a();
  } catch {}
  try {
    await r(t, {
      ...n,
      signal: AbortSignal.timeout(s),
    });
  } catch {}
  try {
    ext();
  } catch {}
  emitScrollTelemetrySummary();
  let a = sCt();
  if (a)
    G("tengu_cache_eviction_hint", {
      scope: We("session_end"),
      last_request_id: Hr(a),
    });
  if ((await fVe(), n?.finalMessage))
    try {
      bEe.writeSync(
        2,
        n.finalMessage +
          `
`,
      );
    } catch {}
  _ho(e);
}
function l1a(e) {
  if (!e.error_message) return {};
  return {
    error_message_hash: Dd(e.error_message),
  };
}
var u4n,
  bEe,
  c4n = false,
  setupGracefulShutdown,
  jPp = 10,
  bho = 5000,
  Aft = 0,
  Sho = 0,
  cVe = false,
  GPp = 3,
  IWt,
  STARTUP_MOUNT_GRACE_MS = 10000 /* 1e4 */,
  Aho = false,
  Hho = false,
  pVe = false,
  XDe,
  uVe,
  vho,
  h1a;
