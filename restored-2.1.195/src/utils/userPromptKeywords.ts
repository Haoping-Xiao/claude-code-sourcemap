// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nxl
// matched 2.1.88 source: src/utils/userPromptKeywords.ts
// class=unchanged (adopted 2.1.88 original)  jaccard=1  score=1  fileCov=1
// note: code ~unchanged across versions; using 2.1.88 source verbatim
// ─────────────────────────────────────────────────────────────────────────
/**
 * Checks if input matches negative keyword patterns
 */
export function matchesNegativeKeyword(input: string): boolean {
  const lowerInput = input.toLowerCase()

  const negativePattern =
    /\b(wtf|wth|ffs|omfg|shit(ty|tiest)?|dumbass|horrible|awful|piss(ed|ing)? off|piece of (shit|crap|junk)|what the (fuck|hell)|fucking? (broken|useless|terrible|awful|horrible)|fuck you|screw (this|you)|so frustrating|this sucks|damn it)\b/

  return negativePattern.test(lowerInput)
}

/**
 * Checks if input matches keep going/continuation patterns
 */
export function matchesKeepGoingKeyword(input: string): boolean {
  const lowerInput = input.toLowerCase().trim()

  // Match "continue" only if it's the entire prompt
  if (lowerInput === 'continue') {
    return true
  }

  // Match "keep going" or "go on" anywhere in the input
  const keepGoingPattern = /\b(keep going|go on)\b/
  return keepGoingPattern.test(lowerInput)
}
