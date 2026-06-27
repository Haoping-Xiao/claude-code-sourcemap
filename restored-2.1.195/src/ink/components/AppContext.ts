// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fGe
// matched 2.1.88 source: src/ink/components/AppContext.ts
// class=unchanged (adopted 2.1.88 original)  jaccard=1  score=1  fileCov=1
// note: code ~unchanged across versions; using 2.1.88 source verbatim
// ─────────────────────────────────────────────────────────────────────────
import { createContext } from 'react'

export type Props = {
  /**
   * Exit (unmount) the whole Ink app.
   */
  readonly exit: (error?: Error) => void
}

/**
 * `AppContext` is a React context, which exposes a method to manually exit the app (unmount).
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
const AppContext = createContext<Props>({
  exit() {},
})

// eslint-disable-next-line custom-rules/no-top-level-side-effects
AppContext.displayName = 'InternalAppContext'

export default AppContext
