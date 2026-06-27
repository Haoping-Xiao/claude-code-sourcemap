// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ahl
// matched 2.1.88 source: src/utils/swarm/backends/registry.ts
// class=modified  jaccard=0.5236  score=0.6655  fileCov=0.7107
// note: deminified; 15 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ahl] deps: dn, je, Bi, qJ, cAe, d9t
((zAe = []), (Shl = Promise.resolve()));
registerITermBackend(w0o);
var sel = {};
_t(sel, {
  resetBackendDetection: () => resetBackendDetection,
  registerTmuxBackend: () => registerTmuxBackend,
  registerITermBackend: () => registerITermBackend,
  markInProcessFallback: () => markInProcessFallback,
  isInProcessEnabled: () => isInProcessEnabled,
  globalBackendRegistry: () => globalBackendRegistry,
  getTeammateExecutor: () => getTeammateExecutor,
  getResolvedTeammateMode: () => getResolvedTeammateMode,
  getInProcessBackend: () => getInProcessBackend,
  getCachedDetectionResult: () => getCachedDetectionResult,
  getCachedBackend: () => getCachedBackend,
  getBackendByType: () => getBackendByType,
  ensureBackendsRegistered: () => ensureBackendsRegistered,
  detectAndGetBackend: () => detectAndGetBackend,
  createBackendRegistry: () => createBackendRegistry,
});
function createBackendRegistry() {
  return {
    cachedBackend: null,
    cachedDetectionResult: null,
    backendsRegistered: !1,
    cachedInProcessBackend: null,
    cachedPaneBackendExecutor: null,
    inProcessFallbackActive: !1,
    TmuxBackendClass: null,
    ITermBackendClass: null,
  };
}
async function ensureBackendsRegistered(e = globalBackendRegistry) {
  if (e.backendsRegistered) return;
  (await Promise.resolve().then(() => (T0o(), bhl)),
    await Promise.resolve().then(() => (Ahl(), Ehl)),
    (e.TmuxBackendClass = Thl ?? null),
    (e.ITermBackendClass = vhl ?? null),
    (e.backendsRegistered = !0));
}
function registerTmuxBackend(e, t) {
  if (t) {
    t.TmuxBackendClass = e;
    return;
  }
  Thl = e;
}
function registerITermBackend(e, t) {
  if ((T(`[registry] registerITermBackend called, class=${e?.name || "undefined"}`), t)) {
    t.ITermBackendClass = e;
    return;
  }
  vhl = e;
}
function k7n(e) {
  if (!e.TmuxBackendClass)
    throw Error("TmuxBackend not registered. Import TmuxBackend.ts before using the registry.");
  return new e.TmuxBackendClass();
}
function I0o(e) {
  if (!e.ITermBackendClass)
    throw Error("ITermBackend not registered. Import ITermBackend.ts before using the registry.");
  return new e.ITermBackendClass();
}
async function detectAndGetBackend(e = globalBackendRegistry) {
  if ((await ensureBackendsRegistered(e), e.cachedDetectionResult))
    return (
      T(`[BackendRegistry] Using cached backend: ${e.cachedDetectionResult.backend.type}`),
      e.cachedDetectionResult
    );
  if ((T("[BackendRegistry] Starting backend detection..."), ODe() === "iterm2")) {
    if (!$6())
      throw (
        Le("swarm_backend_detect", "iterm2_explicit_not_in_iterm2"),
        Error(
          'teammateMode is set to "iterm2" but this session is not running inside iTerm2. Launch Claude from iTerm2, or change teammateMode in settings.',
        )
      );
    if (!(await lht()))
      throw (
        Le("swarm_backend_detect", "iterm2_explicit_no_it2"),
        Error(
          'teammateMode is set to "iterm2" but the it2 CLI is not reachable. Install it with `pip install it2` and enable the Python API in iTerm2 (Preferences > General > Magic > Enable Python API).',
        )
      );
    T("[BackendRegistry] Selected: iterm2 (explicit teammateMode)");
    let o = I0o(e);
    return (
      (e.cachedBackend = o),
      (e.cachedDetectionResult = {
        backend: o,
        isNative: !0,
        needsIt2Setup: !1,
      }),
      xe("swarm_backend_detect"),
      e.cachedDetectionResult
    );
  }
  let t = await coe(),
    n = $6();
  if ((T(`[BackendRegistry] Environment: insideTmux=${t}, inITerm2=${n}`), t)) {
    T("[BackendRegistry] Selected: tmux (running inside tmux session)");
    let o = k7n(e);
    return (
      (e.cachedBackend = o),
      (e.cachedDetectionResult = {
        backend: o,
        isNative: !0,
        needsIt2Setup: !1,
      }),
      xe("swarm_backend_detect"),
      e.cachedDetectionResult
    );
  }
  if (n) {
    let o = uhl();
    if (o) T("[BackendRegistry] User prefers tmux over iTerm2, skipping iTerm2 detection");
    else {
      let i = await lht();
      if ((T(`[BackendRegistry] iTerm2 detected, it2 CLI available: ${i}`), i)) {
        T("[BackendRegistry] Selected: iterm2 (native iTerm2 with it2 CLI)");
        let a = I0o(e);
        return (
          (e.cachedBackend = a),
          (e.cachedDetectionResult = {
            backend: a,
            isNative: !0,
            needsIt2Setup: !1,
          }),
          xe("swarm_backend_detect"),
          e.cachedDetectionResult
        );
      }
    }
    let s = await YPe();
    if ((T(`[BackendRegistry] it2 not available, tmux available: ${s}`), s)) {
      T("[BackendRegistry] Selected: tmux (fallback in iTerm2, it2 setup recommended)");
      let i = k7n(e);
      return (
        (e.cachedBackend = i),
        (e.cachedDetectionResult = {
          backend: i,
          isNative: !1,
          needsIt2Setup: !o,
        }),
        It("swarm_backend_detect", o ? "fallback_to_tmux" : "needs_it2_setup"),
        e.cachedDetectionResult
      );
    }
    throw (
      T("[BackendRegistry] ERROR: iTerm2 detected but no it2 CLI and no tmux"),
      Le("swarm_backend_detect", "iterm2_no_it2_no_tmux"),
      Error("iTerm2 detected but it2 CLI not installed. Install it2 with: pip install it2")
    );
  }
  let r = await YPe();
  if ((T(`[BackendRegistry] Not in tmux or iTerm2, tmux available: ${r}`), r)) {
    T("[BackendRegistry] Selected: tmux (external session mode)");
    let o = k7n(e);
    return (
      (e.cachedBackend = o),
      (e.cachedDetectionResult = {
        backend: o,
        isNative: !1,
        needsIt2Setup: !1,
      }),
      xe("swarm_backend_detect"),
      e.cachedDetectionResult
    );
  }
  throw (
    T("[BackendRegistry] ERROR: No pane backend available"),
    Le("swarm_backend_detect", "no_backend_available"),
    Error(Aff())
  );
}
function Aff() {
  switch (Vt()) {
    case "macos":
      return `To use agent swarms, install tmux:
  brew install tmux
Then start a tmux session with: tmux new-session -s claude`;
    case "linux":
    case "wsl":
      return `To use agent swarms, install tmux:
  sudo apt install tmux    # Ubuntu/Debian
  sudo dnf install tmux    # Fedora/RHEL
Then start a tmux session with: tmux new-session -s claude`;
    case "windows":
      return `To use agent swarms, you need tmux which requires WSL (Windows Subsystem for Linux).
Install WSL first, then inside WSL run:
  sudo apt install tmux
Then start a tmux session with: tmux new-session -s claude`;
    default:
      return `To use agent swarms, install tmux using your system's package manager.
Then start a tmux session with: tmux new-session -s claude`;
  }
}
function getBackendByType(e, t = globalBackendRegistry) {
  switch (e) {
    case "tmux":
      return k7n(t);
    case "iterm2":
      return I0o(t);
  }
}
function getCachedBackend(e = globalBackendRegistry) {
  return e.cachedBackend;
}
function getCachedDetectionResult(e = globalBackendRegistry) {
  return e.cachedDetectionResult;
}
function markInProcessFallback(e = globalBackendRegistry) {
  (T("[BackendRegistry] Marking in-process fallback as active"), (e.inProcessFallbackActive = !0));
}
function Tff() {
  return ODe();
}
function isInProcessEnabled(e = globalBackendRegistry) {
  if (Ir()) return (T("[BackendRegistry] isInProcessEnabled: true (non-interactive session)"), !0);
  let t = Tff(),
    n;
  if (t === "in-process") n = !0;
  else if (t === "tmux" || t === "iterm2") n = !1;
  else {
    if (e.inProcessFallbackActive)
      return (
        T("[BackendRegistry] isInProcessEnabled: true (fallback after pane backend unavailable)"),
        !0
      );
    let r = x9n(),
      o = $6();
    n = !r && !o;
  }
  return (
    T(
      `[BackendRegistry] isInProcessEnabled: ${n} (mode=${t}, insideTmux=${x9n()}, inITerm2=${$6()})`,
    ),
    n
  );
}
function getResolvedTeammateMode(e = globalBackendRegistry) {
  return isInProcessEnabled(e) ? "in-process" : "tmux";
}
function getInProcessBackend(e = globalBackendRegistry) {
  if (!e.cachedInProcessBackend) e.cachedInProcessBackend = nhl();
  return e.cachedInProcessBackend;
}
async function getTeammateExecutor(e = !1, t = globalBackendRegistry) {
  if (e && isInProcessEnabled(t))
    return (T("[BackendRegistry] Using in-process executor"), getInProcessBackend(t));
  return (T("[BackendRegistry] Using pane backend executor"), Cff(t));
}
async function Cff(e) {
  if (!e.cachedPaneBackendExecutor) {
    let t = await detectAndGetBackend(e);
    ((e.cachedPaneBackendExecutor = mhl(t.backend)),
      T(`[BackendRegistry] Created PaneBackendExecutor wrapping ${t.backend.type}`));
  }
  return e.cachedPaneBackendExecutor;
}
function resetBackendDetection(e = globalBackendRegistry) {
  ((e.cachedBackend = null),
    (e.cachedDetectionResult = null),
    (e.cachedInProcessBackend = null),
    (e.cachedPaneBackendExecutor = null),
    (e.backendsRegistered = !1),
    (e.inProcessFallbackActive = !1));
}
var globalBackendRegistry, Thl, vhl;
