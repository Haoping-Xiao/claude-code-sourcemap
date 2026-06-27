// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Amo
// matched 2.1.88 source: src/utils/claudeCodeHints.ts
// class=modified  jaccard=0.2144  score=0.2516  fileCov=0.5923
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Amo = E(() => {
  ft();
  db();
  gb();
  je();
  fn();
  At();
  Iv();
  vf();
  L7();
  lj();
  YPn();
  WI();
  ZC();
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
});
function LGt(e, t) {
  if (!e.includes("<claude-code-hint"))
    return {
      hints: [],
      stripped: e,
    };
  let n = Ykp(t),
    r = [],
    o = e.replace(aPa, (i) => {
      let a = Kkp(i),
        l = Number(a.v),
        c = a.type,
        u = a.value;
      if (!qkp.has(l)) return (T(`[claudeCodeHints] dropped hint with unsupported v=${a.v}`), "");
      if (!c || !Vkp.has(c))
        return (T(`[claudeCodeHints] dropped hint with unsupported type=${c}`), "");
      if (!u) return (T("[claudeCodeHints] dropped hint with empty value"), "");
      return (
        r.push({
          v: l,
          type: c,
          value: u,
          sourceCommand: n,
        }),
        ""
      );
    }),
    s =
      r.length > 0 || o !== e
        ? o.replace(
            /\n{3,}/g,
            `

`,
          )
        : o;
  return {
    hints: r,
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
