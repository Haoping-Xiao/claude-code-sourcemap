// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c8o
// matched 2.1.88 source: src/utils/shell/shellProvider.ts
// class=unchanged (adopted 2.1.88 original)  jaccard=1  score=1  fileCov=1
// note: code ~unchanged across versions; using 2.1.88 source verbatim
// ─────────────────────────────────────────────────────────────────────────
export const SHELL_TYPES = ['bash', 'powershell'] as const
export type ShellType = (typeof SHELL_TYPES)[number]
export const DEFAULT_HOOK_SHELL: ShellType = 'bash'

export type ShellProvider = {
  type: ShellType
  shellPath: string
  detached: boolean

  /**
   * Build the full command string including all shell-specific setup.
   * For bash: source snapshot, session env, disable extglob, eval-wrap, pwd tracking.
   */
  buildExecCommand(
    command: string,
    opts: {
      id: number | string
      sandboxTmpDir?: string
      useSandbox: boolean
    },
  ): Promise<{ commandString: string; cwdFilePath: string }>

  /**
   * Shell args for spawn (e.g., ['-c', '-l', cmd] for bash).
   */
  getSpawnArgs(commandString: string): string[]

  /**
   * Extra env vars for this shell type.
   * May perform async initialization (e.g., tmux socket setup for bash).
   */
  getEnvironmentOverrides(command: string): Promise<Record<string, string>>
}
