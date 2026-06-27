// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module At
// matched 2.1.88 source: src/utils/errors.ts
// class=modified (alt of src/utils/errors.ts)  jaccard=0.2925  score=0.6803  fileCov=0.339
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module At] deps: PR
NIt = class NIt extends Error {
  constructor(e) {
    super(e);
    this.name = this.constructor.name;
  }
};
NK = class NK extends Error {};
ru = class ru extends Error {
  constructor(e) {
    super(e);
    this.name = "AbortError";
  }
};
_B = class _B extends Error {
  filePath;
  defaultConfig;
  constructor(e, t, n) {
    super(e);
    ((this.name = "ConfigParseError"), (this.filePath = t), (this.defaultConfig = n));
  }
};
oM = class oM extends Error {
  stdout;
  stderr;
  code;
  interrupted;
  hadSandboxViolation;
  constructor(e, t, n, r, o = false) {
    super("Shell command failed");
    this.stdout = e;
    this.stderr = t;
    this.code = n;
    this.interrupted = r;
    this.hadSandboxViolation = o;
    this.name = "ShellError";
  }
};
qb = class qb extends Error {
  formattedMessage;
  constructor(e, t) {
    super(e);
    this.formattedMessage = t;
    this.name = "TeleportOperationError";
  }
};
mi = class mi extends Error {
  telemetryMessage;
  constructor(e, t) {
    super(e);
    ((this.name = "TelemetrySafeError"), (this.telemetryMessage = t ?? e));
  }
};
Jie = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EMFILE"]);
function MKc(e, t) {
  var n = -1,
    r = e == null ? 0 : e.length;
  while (++n < r) if (t(e[n], n, e) === false) break;
  return e;
}
var ass;
