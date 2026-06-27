// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cne
// matched 2.1.88 source: src/components/design-system/ThemeProvider.tsx
// class=modified (alt of src/components/design-system/ThemeProvider.tsx)  jaccard=0.1442  score=0.3292  fileCov=0.2041
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module cne] deps: I0n, j_e, Fh, nne, Mke
((Q0n = R(lt(), 1)),
  (Jw = R(rt(), 1)),
  (ZUi = R(se(), 1)),
  (vit = Jw.createContext({
    themeSetting: VYr,
    setThemeSetting: () => {},
    setPreviewTheme: () => {},
    savePreview: () => {},
    cancelPreview: () => {},
    currentTheme: VYr,
    resolvedTheme: O7(VYr),
    customThemes: [],
    activeCustomTheme: void 0,
    reloadCustomThemes: () => {},
    setPreviewOverrides: () => {},
  })));
function zYr(e, { include: t, exclude: n } = {}) {
  let r = (o) => {
    let s = (i) => (typeof i === "string" ? o === i : i.test(o));
    if (t) return t.some(s);
    if (n) return !n.some(s);
    return true;
  };
  for (let [o, s] of eUd(e.constructor.prototype)) {
    if (s === "constructor" || !r(s)) continue;
    let i = Reflect.getOwnPropertyDescriptor(o, s);
    if (i && typeof i.value === "function") e[s] = e[s].bind(e);
  }
  return e;
}
var eUd = (e) => {
  let t = new Set();
  do for (let n of Reflect.ownKeys(e)) t.add([e, n]);
  while ((e = Reflect.getPrototypeOf(e)) && e !== Object.prototype);
  return t;
};
function tUd() {}
var W_e;
