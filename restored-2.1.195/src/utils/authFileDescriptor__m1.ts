// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QSn
// matched 2.1.88 source: src/utils/authFileDescriptor.ts
// class=modified (alt of src/utils/authFileDescriptor.ts)  jaccard=0.058  score=0.2039  fileCov=0.0749
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module QSn] deps: services/analytics/index.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/nativeInstaller/download.ts, utils/fsOperations.ts
((YSn = require("fs")),
  (N7s = require("fs/promises")),
  (Rld = `${XSn}/.oauth_token`),
  (Lld = `${XSn}/.api_key`),
  (JSn = `${XSn}/.session_ingress_token`));
function BY() {
  let e = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (e !== void 0) return (e || F7s.join(ZSn.homedir(), ".claude")).normalize("NFC");
  return tr();
}
function uye(e = "") {
  let t = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR,
    n = t !== void 0 ? !t : !process.env.CLAUDE_CONFIG_DIR,
    r = t !== void 0 ? t.normalize("NFC") : tr(),
    o = n ? "" : `-${U7s.createHash("sha256").update(r).digest("hex").substring(0, 8)}`;
  return `Claude Code${$s().OAUTH_FILE_SUFFIX}${e}${o}`;
}
function ile() {
  let e;
  try {
    e = process.env.USER || ZSn.userInfo().username;
  } catch {
    e = "claude-code-user";
  }
  if (!Pld.test(e)) return "claude-code-user";
  return e;
}
function dye() {
  ((sle.cache = {
    data: null,
    cachedAt: 0,
  }),
    sle.generation++,
    (sle.readInFlight = null));
}
function j7s(e, t) {
  if (sle.cache.cachedAt !== 0 || sle.generation !== t) return;
  let n = null;
  if (e)
    try {
      n = JSON.parse(e);
    } catch {
      return;
    }
  sle.cache = {
    data: n,
    cachedAt: Date.now(),
  };
}
var U7s,
  ZSn,
  F7s,
  knt = "-credentials",
  Pld,
  sle;
