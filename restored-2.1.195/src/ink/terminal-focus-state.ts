// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module se
// matched 2.1.88 source: src/ink/terminal-focus-state.ts
// class=unchanged (adopted 2.1.88 original)  jaccard=1  score=1  fileCov=1
// note: code ~unchanged across versions; using 2.1.88 source verbatim
// ─────────────────────────────────────────────────────────────────────────
// Terminal focus state signal — non-React access to DECSET 1004 focus events.
// 'unknown' is the default for terminals that don't support focus reporting;
// consumers treat 'unknown' identically to 'focused' (no throttling).
// Subscribers are notified synchronously when focus changes, used by
// TerminalFocusProvider to avoid polling.
export type TerminalFocusState = 'focused' | 'blurred' | 'unknown'

let focusState: TerminalFocusState = 'unknown'
const resolvers: Set<() => void> = new Set()
const subscribers: Set<() => void> = new Set()

export function setTerminalFocused(v: boolean): void {
  focusState = v ? 'focused' : 'blurred'
  // Notify useSyncExternalStore subscribers
  for (const cb of subscribers) {
    cb()
  }
  if (!v) {
    for (const resolve of resolvers) {
      resolve()
    }
    resolvers.clear()
  }
}

export function getTerminalFocused(): boolean {
  return focusState !== 'blurred'
}

export function getTerminalFocusState(): TerminalFocusState {
  return focusState
}

// For useSyncExternalStore
export function subscribeTerminalFocus(cb: () => void): () => void {
  subscribers.add(cb)
  return () => {
    subscribers.delete(cb)
  }
}

export function resetTerminalFocusState(): void {
  focusState = 'unknown'
  for (const cb of subscribers) {
    cb()
  }
}
