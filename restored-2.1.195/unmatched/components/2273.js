// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tne
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0125  score=0.6578  fileCov=0.0125
// note: nearest: src/components/Settings/Config.tsx (0.0125); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function eUi(e) {
  return e.startsWith("light");
}
function O0n(e) {
  return typeof e === "string" && MRr.includes(e);
}
function O7(e) {
  switch (e) {
    case "light":
      return _Bd;
    case "light-ansi":
      return bBd;
    case "dark-ansi":
      return SBd;
    case "light-daltonized":
      return EBd;
    case "dark-daltonized":
      return HBd;
    default:
      return ABd;
  }
}
function W3e(e) {
  if (typeof e !== "string") return false;
  if (/^rgb\(\s?\d{1,3},\s?\d{1,3},\s?\d{1,3}\s?\)$/.test(e)) return true;
  if (/^#[0-9a-fA-F]{6}$/.test(e) || /^#[0-9a-fA-F]{3}$/.test(e)) return true;
  if (/^ansi256\(\d{1,3}\)$/.test(e)) return true;
  if (e.startsWith("ansi:")) return TBd.has(e.slice(5));
  return false;
}
function tUi(e, t) {
  if (!t) return e;
  let n = {
    ...e
  };
  for (let [r, o] of Object.entries(t)) if (Object.hasOwn(e, r) && W3e(o)) n[r] = o;
  return n;
}
function N0n(e) {
  let t = e.match(/rgb\(\s?(\d+),\s?(\d+),\s?(\d+)\s?\)/);
  if (t) {
    let n = parseInt(t[1], 10),
      r = parseInt(t[2], 10),
      o = parseInt(t[3], 10),
      s = vBd.rgb(n, r, o)("X");
    return s.slice(0, s.indexOf("X"));
  }
  return "\x1B[35m";
}
var _Bd, bBd, SBd, EBd, ABd, HBd, TBd, vBd;