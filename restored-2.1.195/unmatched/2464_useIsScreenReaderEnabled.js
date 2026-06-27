// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GLn
// class=new  (no 2.1.88 match)
// note: 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var GLn = E(() => {
  tX = VWd;
});
var wW = {};
_t(wW, {
  wrapText: () => C1,
  useTimeout: () => Pd,
  useThemeSetting: () => Fke,
  useTheme: () => na,
  useTerminalViewport: () => b0e,
  useTerminalTitle: () => S0e,
  useTerminalFocus: () => Pg,
  useTabStatus: () => ULn,
  useStdin: () => s8,
  useSelection: () => Z_e,
  useResolvedTheme: () => GD,
  usePreviewTheme: () => eRn,
  useIsScreenReaderEnabled: () => Sd,
  useInterval: () => Gc,
  useHasFocus: () => NLn,
  useFocus: () => yat,
  useDebouncedCallback: () => vW,
  useCustomThemes: () => jke,
  useClock: () => ks,
  useApp: () => TW,
  useAnimationTimer: () => BLn,
  useAnimationFrame: () => Kf,
  supportsTabStatus: () => eGe,
  render: () => render,
  measureElement: () => tX,
  createRoot: () => createRoot,
  color: () => Io,
  ThemeProvider: () => Z0n,
  Text: () => w,
  TerminalFocusEvent: () => Pit,
  Spacer: () => NJr,
  RawAnsi: () => gat,
  NoSelect: () => wI,
  Newline: () => HW,
  Link: () => xs,
  FocusManager: () => Vit,
  EventEmitter: () => F3e,
  Event: () => Qte,
  Decorative: () => _0e,
  ClickEvent: () => UBt,
  Button: () => mat,
  Box: () => U,
  BaseText: () => nS,
  BaseBox: () => Iy,
  Ansi: () => bd
});
function GJr(e) {
  return z5i.createElement(Z0n, null, e);
}
async function render(e, t) {
  if (t !== void 0 && "write" in t) return RJr(GJr(e), t);
  return RJr(GJr(e), {
    nativeCursor: wne(),
    ...t
  });
}
async function createRoot(e) {
  let t = await zWi({
    nativeCursor: wne(),
    ...e
  });
  return {
    ...t,
    render: n => t.render(GJr(n))
  };
}
var z5i;