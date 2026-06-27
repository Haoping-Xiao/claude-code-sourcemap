// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Usi
// matched 2.1.88 source: src/utils/secureStorage/plainTextStorage.ts
// class=modified  jaccard=0.2147  score=0.3064  fileCov=0.4179
// note: deminified; 8 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: startKeychainPrefetch, setWindowsCredManagerAvailable, setLastKnown, isWindowsCredManagerAvailable, getLegacyApiKeyPrefetchResult, getLastKnown, ensureKeychainPrefetchCompleted, clearLegacyApiKeyPrefetch
// [unwrapped __esm module Usi] deps: Pw, At, ys, Jt, S9, sMt
((Nsi = require("fs/promises")), (Bsi = require("path")));
Sjr = {
  name: "plaintext",
  read() {
    let { storagePath: e } = ZAn();
    try {
      let t = qt().readFileSync(e, {
        encoding: "utf8",
      });
      return Ft(t);
    } catch {
      return null;
    }
  },
  async readAsync() {
    let { storagePath: e } = ZAn();
    try {
      let t = await qt().readFile(e, {
        encoding: "utf8",
      });
      return Ft(t);
    } catch {
      return null;
    }
  },
  mutate(e) {
    return oMt(Sjr, e);
  },
  async update(e) {
    try {
      let { storageDir: t, storagePath: n } = ZAn();
      return (
        await qt().mkdir(t),
        await eg(n, De(e), 384),
        await Nsi.chmod(n, 384),
        {
          success: true,
          warning: "Warning: Storing credentials in plaintext.",
        }
      );
    } catch {
      return {
        success: false,
      };
    }
  },
  async delete() {
    let { storagePath: e } = ZAn();
    try {
      return (await qt().unlink(e), true);
    } catch (t) {
      if (on(t) === "ENOENT") return true;
      return false;
    }
  },
};
function isWindowsCredManagerAvailable() {
  return Gsi === true;
}
function setWindowsCredManagerAvailable(e) {
  Gsi = e;
}
function getLastKnown() {
  return qsi;
}
function setLastKnown(e) {
  qsi = e;
}
function Fsi(e) {
  return new Promise((t) => {
    jsi.execFile(
      "security",
      ["find-generic-password", "-a", ile(), "-w", "-s", e],
      {
        encoding: "utf-8",
        timeout: pfd,
        windowsHide: true,
      },
      (n, r) => {
        t({
          stdout: n ? null : r?.trim() || null,
          timedOut: Boolean(n && "killed" in n && n.killed),
        });
      },
    );
  });
}
function startKeychainPrefetch() {
  if (eHn || md()) return;
  let e = sle.generation;
  return;
}
async function ensureKeychainPrefetchCompleted() {
  if (eHn) await eHn;
}
function getLegacyApiKeyPrefetchResult() {
  return Ejr;
}
function clearLegacyApiKeyPrefetch() {
  Ejr = null;
}
var jsi,
  pfd = 10000 /* 1e4 */,
  Ejr = null,
  eHn = null,
  Gsi,
  qsi = null;
