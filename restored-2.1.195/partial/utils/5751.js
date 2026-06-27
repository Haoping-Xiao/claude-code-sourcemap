// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aPc
// matched 2.1.88 source: src/utils/deepLink/terminalPreference.ts
// class=partial  jaccard=0.0856  score=0.2663  fileCov=0.112
// note: low-confidence suggestion: src/utils/deepLink/terminalPreference.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aPc = E(() => {
  co();
  _m();
  O7e = R(rt(), 1), MCm = [/\bcurl\b/, /\bwget\b/, /\bssh\b/, /\bkubectl\b/, /\bsrun\b/, /\bdocker\b/, /\bbq\b/, /\bgsutil\b/, /\bgcloud\b/, /\baws\b/, /\bgit\s+push\b/, /\bgit\s+pull\b/, /\bgit\s+fetch\b/, /\bgh\s+(pr|issue)\b/, /\bnc\b/, /\bncat\b/, /\btelnet\b/, /\bftp\b/], $Cm = [/^no[,!]\s/i, /\bthat'?s (wrong|incorrect|not (what|right|correct))\b/i, /\bnot what I (asked|wanted|meant|said)\b/i, /\bI (said|asked|wanted|told you|already said)\b/i, /\bwhy did you\b/i, /\byou should(n'?t| not)? have\b/i, /\byou were supposed to\b/i, /\btry again\b/i, /\b(undo|revert) (that|this|it|what you)\b/i];
});
function lPc() {
  let e = Ntn.useContext(g8),
    t = e !== null && UD() && !Ns() && !p0e() && Oe.terminal !== "WezTerm",
    n = Ntn.useCallback(() => {
      if (!t || !e) return;
      e(QS(wy.SEMANTIC_PROMPT, "A", "redraw=0"));
    }, [t, e]),
    r = Ntn.useCallback(() => {
      if (!t || !e) return;
      e(QS(wy.SEMANTIC_PROMPT, "C") + QS(wy.SEMANTIC_PROMPT, "D"));
    }, [t, e]);
  return {
    markTurnStart: n,
    markTurnDone: r
  };
}
var Ntn;