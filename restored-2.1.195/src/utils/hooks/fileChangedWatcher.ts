// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E5e
// matched 2.1.88 source: src/utils/hooks/fileChangedWatcher.ts
// class=modified  jaccard=0.3572  score=0.622  fileCov=0.4562
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module E5e] deps: services/analytics/index.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/fsOperations.ts
((hLe = require("fs/promises")), (Fjt = require("path")));
((pca = {
  setup: 0,
  sessionstart: 1,
  cwdchanged: 2,
  filechanged: 3,
}),
  (uNn = /^(setup|sessionstart|cwdchanged|filechanged)-hook-(\d+)\.sh$/));
function startWatching() {
  let e = null,
    t,
    n = [],
    r = [],
    o = false,
    s = false,
    i = null,
    a = null;
  function l(y) {
    i = y;
  }
  function c(y) {
    if (o) return;
    ((o = true), (t = y));
    let b = CU();
    if (((s = (b?.CwdChanged?.length ?? 0) > 0 || (b?.FileChanged?.length ?? 0) > 0), s)) a = Ci(h);
    let _ = u(b);
    if (_.length === 0) return;
    d(_);
  }
  function u(y) {
    let b = (y ?? CU())?.FileChanged ?? [],
      _ = N_() ? [] : (eG()?.FileChanged ?? []),
      S = [...b, ..._],
      A = [];
    for (let x of S) {
      if (!x.matcher) continue;
      for (let I of x.matcher.split("|").map((k) => k.trim())) {
        if (!I) continue;
        A.push(dNn.isAbsolute(I) ? I : dNn.join(t, I));
      }
    }
    let v = Uo([...A, ...n]),
      C = v.filter((x) => !cee(x));
    if (C.length !== v.length)
      T("FileChanged: dropped remote UNC watch path(s)", {
        level: "warn",
      });
    return C;
  }
  function d(y) {
    (T(`FileChanged: watching ${y.length} paths`),
      (e = S1.watch(y, {
        persistent: true,
        ignoreInitial: true,
        awaitWriteFinish: {
          stabilityThreshold: 500,
          pollInterval: 200,
        },
        ignorePermissionErrors: true,
      })),
      e.on("change", (_) => p(_, "change")),
      e.on("add", (_) => p(_, "add")),
      e.on("unlink", (_) => p(_, "unlink")));
    let b = false;
    (e.on("error", (_) => {
      if (!b) ((b = true), Le("file_watcher_start", "fs_error"));
      T(`FileChanged: watcher error: ${be(_)}`, {
        level: "warn",
      });
    }),
      e.on("ready", () => {
        if (!b) ((b = true), xe("file_watcher_start"));
      }));
  }
  function p(y, b) {
    (T(`FileChanged: ${b} ${y}`),
      Wjt(y, b)
        .then(({ results: _, watchPaths: S, systemMessages: A }) => {
          if ((xe("file_watcher_change_detected"), S.length > 0)) f(S);
          for (let v of A) i?.(v, false);
          for (let v of _) if (!v.succeeded && v.output) i?.(v.output, true);
        })
        .catch((_) => {
          Le("file_watcher_change_detected", "hook_exec_failed");
          let S = be(_);
          (T(`FileChanged hook failed: ${S}`, {
            level: "error",
          }),
            i?.(S, true));
        }));
  }
  function f(y) {
    if (!o) return;
    let b = y.slice().sort();
    if (b.length === r.length && b.every((_, S) => _ === r[S])) return;
    ((n = y), (r = b), m());
  }
  function m() {
    if (e) (e.close(), (e = null));
    let y = u();
    if (y.length > 0) d(y);
  }
  async function g(y, b) {
    if (y === b) return;
    let _ = CU(),
      S = N_() ? void 0 : eG();
    if (
      !(
        (_?.CwdChanged?.length ?? 0) > 0 ||
        (_?.FileChanged?.length ?? 0) > 0 ||
        (S?.CwdChanged?.length ?? 0) > 0 ||
        (S?.FileChanged?.length ?? 0) > 0
      )
    )
      return;
    ((t = b), await mca());
    let v = await Gjt(y, b).catch((C) => {
      let x = be(C);
      return (
        T(`CwdChanged hook failed: ${x}`, {
          level: "error",
        }),
        i?.(x, true),
        {
          results: [],
          watchPaths: [],
          systemMessages: [],
        }
      );
    });
    ((n = v.watchPaths), (r = v.watchPaths.slice().sort()));
    for (let C of v.systemMessages) i?.(C, false);
    for (let C of v.results) if (!C.succeeded && C.output) i?.(C.output, true);
    if (o) m();
  }
  function h() {
    if (a) (a(), (a = null));
    if (e) (e.close(), (e = null));
    ((n = []), (r = []), (o = false), (s = false), (i = null));
  }
  return {
    initialize: c,
    setEnvHookNotifier: l,
    updateWatchPaths: f,
    onCwdChanged: g,
    dispose: h,
    [Symbol.dispose]: h,
  };
}
var dNn, pNn, hca, _ao, yca, _ca;
