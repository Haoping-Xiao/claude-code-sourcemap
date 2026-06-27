// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W_c
// matched 2.1.88 source: src/hooks/useIdeConnectionStatus.ts
// class=unchanged (adopted 2.1.88 original)  jaccard=0.8412  score=1  fileCov=0.8412
// note: code ~unchanged across versions; using 2.1.88 source verbatim
// ─────────────────────────────────────────────────────────────────────────
import { useMemo } from 'react'
import type { MCPServerConnection } from '../services/mcp/types.js'

export type IdeStatus = 'connected' | 'disconnected' | 'pending' | null

type IdeConnectionResult = {
  status: IdeStatus
  ideName: string | null
}

export function useIdeConnectionStatus(
  mcpClients?: MCPServerConnection[],
): IdeConnectionResult {
  return useMemo(() => {
    const ideClient = mcpClients?.find(client => client.name === 'ide')
    if (!ideClient) {
      return { status: null, ideName: null }
    }
    // Extract IDE name from config if available
    const config = ideClient.config
    const ideName =
      config.type === 'sse-ide' || config.type === 'ws-ide'
        ? config.ideName
        : null
    if (ideClient.type === 'connected') {
      return { status: 'connected', ideName }
    }
    if (ideClient.type === 'pending') {
      return { status: 'pending', ideName }
    }
    return { status: 'disconnected', ideName }
  }, [mcpClients])
}
