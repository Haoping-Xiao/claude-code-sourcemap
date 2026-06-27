// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j_e
// matched 2.1.88 source: src/utils/systemTheme.ts
// class=partial  jaccard=0.1226  score=0.5185  fileCov=0.1384
// note: low-confidence suggestion: src/utils/systemTheme.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module j_e] deps: services/analytics/firstPartyEventLoggingExporter.ts, components/Settings/Config.tsx, utils/plugins/schemas.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/fsOperations.ts, utils/theme.ts
_it = require("fs"), Ace = require("fs/promises"), a8 = require("path");
q3e = uL([]);
function z3e() {
  return U0n ?? fUi() ?? "dark";
}
function uUi() {
  return U0n ?? fUi();
}
function F0n(e) {
  if (U0n === e) return;
  U0n = e, cUi.emit();
}
function mW(e) {
  if (e === "auto") return z3e();
  if (O0n(e)) return e;
  let t = fW(e);
  return t && sUi(t) || "dark";
}
function pUi(e) {
  let t = CBd(e);
  if (!t) return;
  return 0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b > 0.5 ? "light" : "dark";
}
function CBd(e) {
  let t = /^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);
  if (t) return {
    r: bit(t[1]),
    g: bit(t[2]),
    b: bit(t[3])
  };
  let n = /^#([0-9a-f]+)$/i.exec(e);
  if (n && n[1].length % 3 === 0) {
    let r = n[1],
      o = r.length / 3;
    return {
      r: bit(r.slice(0, o)),
      g: bit(r.slice(o, 2 * o)),
      b: bit(r.slice(2 * o))
    };
  }
  return;
}
function bit(e) {
  let t = 16 ** e.length - 1;
  return parseInt(e, 16) / t;
}
function fUi() {
  let e = process.env.COLORFGBG;
  if (!e) return;
  let n = e.split(";").at(-1);
  if (n === void 0 || n === "") return;
  let r = Number(n);
  if (!Number.isInteger(r) || r < 0 || r > 15) return;
  return r <= 6 || r === 8 ? "dark" : "light";
}
var U0n, cUi, dUi;