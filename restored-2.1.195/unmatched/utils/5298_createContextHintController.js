// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dac
// matched 2.1.88 source: src/services/compact/microCompact.ts
// class=new  jaccard=0.0259  score=0.1045  fileCov=0.0333
// note: nearest: src/services/compact/microCompact.ts (0.0259); dir inferred from dep-graph -> utils; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var Nac = {};
_t(Nac, {
  handleHintReject: () => handleHintReject,
  createContextHintController: () => createContextHintController,
  applyHintEdits: () => applyHintEdits
});
async function lnm(e, t) {
  let n = await pDe(e, t);
  if (mDe(n)) return null;
  return `${dDe}Tool result saved to: ${n.filepath}

Use ${Ds} to view${Mdo}`;
}
async function applyHintEdits(e, t) {
  let n = qv(e),
    r = await dca(e, t, {
      keepRecent: Pac,
      persist: lnm
    }),
    o = r ? r.messages : e,
    s = qv(o);
  return T(`[CONTEXT_HINT_REJECT] mc=${!!r} tokensSaved=${r?.tokensSaved ?? 0}`), {
    messages: o,
    clearedIds: r?.clearedIds ?? Mac,
    clearedContent: r?.clearedContent ?? $ac,
    applied: {
      mcApplied: !!r,
      mcTokensSaved: r?.tokensSaved ?? 0
    },
    preCompactTokenEstimate: n,
    postCompactTokenEstimate: s
  };
}
async function handleHintReject(e) {
  let t = await applyHintEdits(e.messages, e.querySource);
  return xe("compact_hint_reject"), Lac({
    requestId: e.requestId,
    preCompactTokenEstimate: t.preCompactTokenEstimate,
    postCompactTokenEstimate: t.postCompactTokenEstimate,
    tokensSaved: t.preCompactTokenEstimate - t.postCompactTokenEstimate,
    mcApplied: t.applied.mcApplied,
    mcTokensSaved: t.applied.mcTokensSaved
  }), {
    messages: t.messages,
    clearedIds: t.clearedIds,
    clearedContent: t.clearedContent
  };
}
function createContextHintController(e) {
  if (!e.includeFirstPartyBetas) return null;
  if (!e.querySource.startsWith("repl_main_thread")) return null;
  let t = vac(),
    n = false,
    r = false,
    o = false;
  return {
    active: t,
    buildRequestParams(s) {
      if (r = false, !t || n) return null;
      r = true;
      let i = hao(s, Pac).tokensSaved >= gao,
        a = wac();
      return {
        beta: m2r,
        body: i ? {
          context_hint: {
            enabled: true,
            ...(a > 0 && {
              target_tokens_saved: a
            })
          }
        } : null
      };
    },
    async onRequestError(s, i) {
      if (!r || n) return null;
      let a = Rac(s);
      if (Cac(s)) return n = true, handleHintReject({
        messages: i,
        querySource: e.querySource,
        requestId: a
      });
      if (kac(s)) return n = true, Jlr(a, 400), {
        messages: i,
        clearedIds: Mac,
        clearedContent: $ac
      };
      if (xac(s)) return n = true, Jlr(a, 409), null;
      if (e.is529Error(s)) return n = true, Jlr(a, 529), null;
      return null;
    },
    classifyStreamError(s) {
      if (o = false, !r || n) return false;
      if (!Iac(s)) return false;
      return o = true, true;
    },
    async onStreamFallback(s, i) {
      let a = o;
      if (n = true, !a) return null;
      return handleHintReject({
        messages: s,
        querySource: e.querySource,
        requestId: i
      });
    },
    strip() {
      n = true;
    }
  };
}
var Pac = 5,
  Mac,
  $ac;