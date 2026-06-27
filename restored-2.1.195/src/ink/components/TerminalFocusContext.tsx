// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QXr
// matched 2.1.88 source: src/ink/components/TerminalFocusContext.tsx
// class=modified  jaccard=0.4554  score=0.7561  fileCov=0.5338
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module QXr] deps: Y3e
((SGi = R(lt(), 1)),
  (BBt = R(rt(), 1)),
  (AGi = R(se(), 1)),
  (XXr = BBt.createContext({
    isTerminalFocused: true,
    terminalFocusState: "unknown",
  })));
XXr.displayName = "TerminalFocusContext";
JXr = XXr;
function Pg() {
  let { isTerminalFocused: e } = ZXr.useContext(JXr);
  return e;
}
function fLn() {
  let { terminalFocusState: e } = ZXr.useContext(JXr);
  return e;
}
var ZXr;
