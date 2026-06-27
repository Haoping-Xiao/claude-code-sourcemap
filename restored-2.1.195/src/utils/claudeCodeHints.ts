// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Amo
// matched 2.1.88 source: src/utils/claudeCodeHints.ts
// class=modified  jaccard=0.1987  score=0.3285  fileCov=0.3347
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Amo] deps: services/analytics/index.ts, utils/authFileDescriptor.ts, utils/plugins/schemas.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, hooks/useSettings.ts, utils/settings/changeDetector.ts, utils/hooks/hooksConfigSnapshot.ts, utils/settings/types.ts, utils/plugins/pluginInstallationHelpers.ts, commands/plugin/ManagePlugins.tsx, utils/plugins/schemas.ts
((Mpt = require("fs/promises")), (u6 = require("path")));
((Gkp = [
  "mcpServers",
  "lspServers",
  "agents",
  "outputStyles",
  "themes",
  "workflows",
  "channels",
  "monitors",
  "settings",
  "userConfig",
  "experimental",
]),
  (Wkp = {
    defaultEnabled: (e) => typeof e === "boolean",
    author: (e) => QRt().safeParse(e).success,
    homepage: (e) => {
      if (typeof e !== "string") return false;
      try {
        let { protocol: t } = new URL(e);
        return t === "http:" || t === "https:";
      } catch {
        return false;
      }
    },
    repository: (e) => typeof e === "string",
    license: (e) => typeof e === "string",
    keywords: (e) => Array.isArray(e) && e.every((t) => typeof t === "string"),
  }));
function extractClaudeCodeHints(output, command) {
  if (!output.includes("<claude-code-hint"))
    return {
      hints: [],
      stripped: output,
    };
  let n = Ykp(command),
    hints = [],
    o = output.replace(aPa, (i) => {
      let a = Kkp(i),
        l = Number(a.v),
        c = a.type,
        u = a.value;
      if (!qkp.has(l)) return (T(`[claudeCodeHints] dropped hint with unsupported v=${a.v}`), "");
      if (!c || !Vkp.has(c))
        return (T(`[claudeCodeHints] dropped hint with unsupported type=${c}`), "");
      if (!u) return (T("[claudeCodeHints] dropped hint with empty value"), "");
      return (
        hints.push({
          v: l,
          type: c,
          value: u,
          sourceCommand: n,
        }),
        ""
      );
    }),
    s =
      hints.length > 0 || o !== output
        ? o.replace(
            /\n{3,}/g,
            `

`,
          )
        : o;
  return {
    hints: hints,
    stripped: s,
  };
}
function B2n(e) {
  if (!e.includes("<claude-code-hint")) return e;
  return e.replace(aPa, "").replace(
    /\n{3,}/g,
    `

`,
  );
}
function Kkp(e) {
  let t = {};
  for (let n of e.matchAll(zkp)) t[n[1]] = n[2] ?? n[3] ?? "";
  return t;
}
function Ykp(e) {
  let t = e.trim(),
    n = t.search(/\s/);
  return n === -1 ? t : t.slice(0, n);
}
function uPa(e) {
  if (Hmo) return;
  ((N2n = e), cPa());
}
function dPa() {
  if (N2n !== null) ((N2n = null), cPa());
}
function pPa() {
  Hmo = true;
}
function Tmo() {
  return N2n;
}
function mPa() {
  return Hmo;
}
var qkp,
  Vkp,
  aPa,
  zkp,
  N2n = null,
  Hmo = false,
  lPa,
  cPa,
  fPa;
