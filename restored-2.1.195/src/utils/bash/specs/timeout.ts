// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NPa
// matched 2.1.88 source: src/utils/bash/specs/timeout.ts
// class=unchanged (adopted 2.1.88 original)  jaccard=0.8666  score=1  fileCov=0.8666
// note: code ~unchanged across versions; using 2.1.88 source verbatim
// ─────────────────────────────────────────────────────────────────────────
import type { CommandSpec } from '../registry.js'

const timeout: CommandSpec = {
  name: 'timeout',
  description: 'Run a command with a time limit',
  args: [
    {
      name: 'duration',
      description: 'Duration to wait before timing out (e.g., 10, 5s, 2m)',
      isOptional: false,
    },
    {
      name: 'command',
      description: 'Command to run',
      isCommand: true,
    },
  ],
}

export default timeout
