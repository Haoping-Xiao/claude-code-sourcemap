// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oOo
// matched 2.1.88 source: src/utils/stats.ts
// class=new  jaccard=0.0263  score=0.0502  fileCov=0.0525
// note: nearest: src/utils/stats.ts (0.0263); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var oOo = E(() => {
  Jt();
  Skf = ["msg_bdrk_", "msg_vrtx_", "bolt-inf-", "toolu_bdrk_", "toolu_vrtx_", "srvtoolu_bdrk_", "srvtoolu_vrtx_", "req_bdrk_", "req_vrtx_"];
});
async function Akf({
  transcriptPath: e,
  scope: t = "session",
  maxRawTranscriptBytes: n,
  excludeThirdPartyTranscripts: r = !1
}) {
  let [o, s] = await Promise.all([Hkf(e, n), Tkf(e, t, r)]),
    i = o,
    a = !1;
  if (r && i !== null && VSt(i)) i = null, a = !0, T("rawTranscriptJsonl withheld from session history: contains_3p_transcript_markers");
  return {
    rawTranscriptJsonl: i,
    recentSessionTranscripts: s.transcripts,
    thirdPartyExclusions: {
      rawTranscript: a,
      recentSessions: s.droppedThirdParty
    }
  };
}
async function fDl({
  messages: e,
  backgroundTasks: t = {},
  transcripts: n = {},
  diskSubagentTranscripts: r,
  scope: o = "session",
  maxRawTranscriptBytes: s,
  excludeThirdPartyTranscripts: i = !1
}) {
  let a = em(),
    [l, c, u, d] = await Promise.all([r, Akf({
      transcriptPath: a,
      scope: o,
      maxRawTranscriptBytes: s,
      excludeThirdPartyTranscripts: i
    }), cb(), yet()]),
    p = Ica(t, n),
    f = {
      ...l,
      ...p
    },
    m = new Set(Object.keys(p)),
    g = 0;
  if (i) {
    for (let [y, b] of Object.entries(f)) if (Rer(b)) delete f[y], g++, T(`subagent transcript ${y} withheld: contains_3p_transcript_markers`);
  }
  let h = e.findLast(y => y.type === "assistant" && y.message.model !== _I);
  return {
    transcriptPath: a,
    rawTranscriptJsonl: c.rawTranscriptJsonl,
    recentSessionTranscripts: c.recentSessionTranscripts,
    subagentTranscripts: f,
    teammateIds: m,
    isGit: u,
    commitSha: d || null,
    workingDirectory: yr(),
    platform: Oe.platform,
    terminal: Oe.terminal,
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION,
    latestAssistantMessageId: h?.requestId ?? null,
    latestAssistantAPIMessageId: h?.message.id ?? null,
    thirdPartyExclusions: {
      ...c.thirdPartyExclusions,
      subagents: g
    }
  };
}
async function Hkf(e, t) {
  if (t === void 0) return null;
  try {
    let {
      content: n,
      bytesRead: r,
      bytesTotal: o
    } = await vx(e, t);
    if (r < o) {
      let s = n.indexOf(`
`);
      return s >= 0 ? n.slice(s + 1) : null;
    }
    return n;
  } catch {
    return null;
  }
}
async function Tkf(e, t, n) {
  if (t === "session") return {
    transcripts: void 0,
    droppedThirdParty: 0
  };
  let r = zSt.dirname(e),
    o = zSt.basename(e),
    s = Date.now() - Ekf[t],
    i;
  try {
    i = await Ler.readdir(r);
  } catch {
    return {
      transcripts: void 0,
      droppedThirdParty: 0
    };
  }
  let a = [];
  await Promise.all(i.filter(d => d.endsWith(".jsonl") && d !== o).map(async d => {
    let p = zSt.join(r, d);
    try {
      let f = await Ler.stat(p);
      if (f.isFile() && f.mtimeMs >= s) a.push({
        path: p,
        sessionId: d.slice(0, -6),
        mtimeMs: f.mtimeMs,
        size: f.size
      });
    } catch {}
  })), a.sort((d, p) => p.mtimeMs - d.mtimeMs);
  let l = {},
    c = 0,
    u = 0;
  for (let d of a) {
    if (d.size === 0 || c + d.size > pDl) continue;
    try {
      let {
        content: p,
        bytesRead: f,
        bytesTotal: m
      } = await vx(d.path, pDl);
      if (!p || f < m) continue;
      if (n && VSt(p)) {
        u++, T(`recent session ${d.sessionId} withheld: contains_3p_transcript_markers`);
        continue;
      }
      l[d.sessionId] = p, c += d.size;
    } catch {}
  }
  return {
    transcripts: Object.keys(l).length > 0 ? l : void 0,
    droppedThirdParty: u
  };
}
var Ler,
  zSt,
  Ekf,
  pDl = 1048576;