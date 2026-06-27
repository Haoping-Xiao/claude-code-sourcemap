// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KUa
// matched 2.1.88 source: src/utils/telemetry/logger.ts
// class=modified  jaccard=0.2662  score=0.4456  fileCov=0.3979
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module KUa]
(($yo = R(Nh(), 1)),
  (qUa = {
    code: $yo.ExportResultCode.SUCCESS,
  }));
class Byo {
  error(e, ...t) {
    if (Oe.CLAUDE_CODE_OTEL_DIAG_STDERR)
      process.stderr.write(`${YUa} ${e}
`);
    T(`${YUa} ${e}`, {
      level: "error",
    });
  }
  warn(e, ...t) {
    T(`[3P telemetry] OTEL diag warn: ${e}`, {
      level: "warn",
    });
  }
  info(e, ...t) {
    return;
  }
  debug(e, ...t) {
    return;
  }
  verbose(e, ...t) {
    return;
  }
}
var YUa = "[3P telemetry] OTEL diag error:";
