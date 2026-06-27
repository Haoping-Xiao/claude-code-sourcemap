// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ICe
// matched 2.1.88 source: src/utils/settings/mdm/rawRead.ts
// class=modified  jaccard=0.5221  score=0.9141  fileCov=0.549
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: startMdmRawRead, getMdmRawReadPromise, fireRawRead
// [unwrapped __esm module ICe] deps: utils/cwd.ts, services/remoteManagedSettings/syncCacheState.ts, ORt, utils/debug.ts, utils/git/gitConfigParser.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/platform.ts, utils/fsOperations.ts, utils/settings/constants.ts, utils/platform.ts, utils/fsOperations.ts, utils/settings/changeDetector.ts, utils/settings/managedPath.ts, mCe, Sx, utils/settings/types.ts, utils/settings/settings.ts
qO = require("path");
function Xws(e, t) {
  return new Promise((n) => {
    try {
      Jws.execFile(
        e,
        t,
        {
          encoding: "utf-8",
          timeout: bvs,
          windowsHide: true,
        },
        (r, o) => {
          n({
            stdout: o ?? "",
            code: r ? 1 : 0,
          });
        },
      );
    } catch {
      n({
        stdout: "",
        code: 1,
      });
    }
  });
}
function fireRawRead() {
  return (async () => {
    if (MRt()) {
      let [e, t] = await Promise.all([
        Xws(CRr, ["query", Ifn, "/v", vet]),
        Xws(CRr, ["query", xfn, "/v", vet]),
      ]);
      return {
        plistStdouts: null,
        hklmStdout: e.code === 0 ? e.stdout : null,
        hkcuStdout: t.code === 0 ? t.stdout : null,
      };
    }
    return {
      plistStdouts: null,
      hklmStdout: null,
      hkcuStdout: null,
    };
  })();
}
function startMdmRawRead() {
  if (ELr) return;
  ELr = fireRawRead();
}
function getMdmRawReadPromise() {
  return ELr;
}
var Jws,
  ELr = null;
