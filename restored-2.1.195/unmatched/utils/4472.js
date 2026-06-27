// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OKt
// matched 2.1.88 source: src/services/api/errors.ts
// class=new  jaccard=0.0145  score=0.2969  fileCov=0.015
// note: nearest: src/services/api/errors.ts (0.0145); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var OKt = E(() => {
  ft();
  kt();
  je();
  fn();
  Jin();
  Jt();
  SQn = ut(process.env.CLAUDE_CODE_PROFILE_STARTUP), rIl = Math.random() < ETf, SPo = SQn || rIl;
});
function HQn(e) {
  return e === "refusal" || e === "sticky";
}
function HTf(e) {
  return e === "refusal" || e === "sticky" ? e : "other";
}
function oIl(e, t, n, r) {
  let o = e !== void 0 && t === e.forModel && NY() && !jBe(r, r1);
  if (o) Wve(r, r1);
  if (FBe(r, r1) && !n.includes(r1)) n.push(r1);
  return o ? {
    fallbacks: [{
      model: e.model
    }]
  } : {};
}
function sIl(e) {
  return e.message.content.some(t => t.type !== "text");
}
function iIl(e, t, n, r) {
  if (e && !jBe(n, o1)) Wve(n, o1);
  if (FBe(n, o1) && !t.includes(o1)) t.push(o1);
  if (r && t.includes(o1)) {
    let o = r.anthropic_beta;
    if (Array.isArray(o) && o.length > 0 && !o.includes(o1.header)) r.anthropic_beta = [...o, o1.header];
  }
}
function HPo(e) {
  if (typeof e !== "object" || e === null) return;
  let t = e.fallback_credit_token;
  return typeof t === "string" && t.length > 0 && t.length <= 2048 ? t : void 0;
}
function TPo(e) {
  return {
    type: "fallback",
    from: {
      model: e.fromModel
    },
    to: {
      model: e.model
    }
  };
}
function AQn(e) {
  if (typeof e !== "object" || e === null) return;
  let t = e.model;
  return typeof t === "string" && t.length > 0 ? t : void 0;
}
function aIl(e) {
  if (typeof e !== "object" || e === null) return null;
  let t = e;
  if (t.type !== "refusal") return null;
  let n = t.category;
  return typeof n === "string" && n.length > 0 && n.length <= 64 ? n : null;
}
function vPo(e) {
  if (typeof e !== "object" || e === null) return;
  let t = e;
  if (t.type !== "content_block_start" || typeof t.index !== "number") return;
  let n = t.content_block;
  if (typeof n !== "object" || n === null) return;
  let r = n;
  if (r.type !== "fallback") return;
  let o = AQn(r.from),
    s = AQn(r.to);
  return o !== void 0 && s !== void 0 ? {
    index: t.index,
    fromModel: o,
    model: s,
    reason: "refusal",
    category: aIl(r.trigger)
  } : void 0;
}
function lIl(e) {
  if (!TQn(e)) return;
  let t = e,
    n = AQn(t.from),
    r = AQn(t.to);
  return n !== void 0 && r !== void 0 ? {
    fromModel: n,
    model: r,
    reason: "refusal",
    category: aIl(t.trigger)
  } : void 0;
}
function TQn(e) {
  return typeof e === "object" && e !== null && e.type === "fallback";
}
function cIl(e) {
  if (typeof e !== "object" || e === null) return !1;
  let t = e;
  if (t.type !== "content_block_start" || typeof t.index !== "number") return !1;
  let n = t.content_block;
  if (typeof n !== "object" || n === null) return !1;
  return n.type === "fallback" && vPo(e) === void 0;
}
function wPo(e, t, n) {
  let r = e.reduce((c, u, d) => u.type === "fallback_message" ? d : c, -1),
    o = n === "refusal" ? r : -1,
    s = e.reduce((c, u, d) => u.type === "fallback_message" && u.model !== void 0 && d !== o ? c + eje(u.model, u, {
      speed: t.speed
    }) : c, 0),
    i = e.find(c => c.type === "fallback_message" && c.model !== void 0)?.model,
    a = i !== void 0 ? eje(i, {
      inputTokens: 0,
      outputTokens: 0,
      cacheReadInputTokens: 0,
      cacheCreationInputTokens: 0
    }, {
      speed: t.speed,
      serverToolUse: t.serverToolUse
    }) : 0,
    l = s + a;
  return Number.isFinite(l) ? l : 0;
}
function NKt(e) {
  let t = {
    servedFallbackModel: void 0,
    entries: []
  };
  if (typeof e !== "object" || e === null) return t;
  let n = e.iterations;
  if (!Array.isArray(n)) return t;
  let r = [],
    o;
  for (let s of n) {
    if (typeof s !== "object" || s === null) continue;
    let i = s;
    if (typeof i.type !== "string") continue;
    let a = {
      type: i.type,
      model: typeof i.model === "string" ? i.model : void 0,
      inputTokens: EQn(i.input_tokens),
      outputTokens: EQn(i.output_tokens),
      cacheReadInputTokens: EQn(i.cache_read_input_tokens),
      cacheCreationInputTokens: EQn(i.cache_creation_input_tokens)
    };
    if (r.push(a), i.type === "fallback_message" && a.model !== void 0) o = a.model;
  }
  return {
    servedFallbackModel: o,
    entries: r
  };
}
function uIl(e) {
  let t = BX(),
    n = yaa({
      requestDialog: e.requestDialog,
      isMainThread: e.isMainThread,
      consumerLacksDialogCapability: e.consumerLacksDialogCapability
    }),
    r = saa(e.currentModel),
    o = !e.alreadyUsed && !e.declined && t && !n ? r : void 0,
    s = o !== void 0 && oaa() && !jBe(e.sticky, r1) ? {
      forModel: e.currentModel,
      model: o
    } : void 0;
  return {
    visibleModel: o,
    serverLane: s,
    shouldLogSuppression: !e.suppressionAlreadyLogged && t && n && r !== void 0
  };
}
function dIl(e, t) {
  let n = e.discardedMessages.some(s => s.message.content.some(i => i.type === "tool_use")),
    r = HQn(e.reason),
    o = r && t.isMainThread;
  return {
    telemetry: {
      reason: HTf(e.reason),
      midStream: e.midStream,
      discardedBlockCount: e.discardedMessages.length,
      tombstonedHadToolUse: n,
      requestId: e.requestId,
      originalModelScope: fSe(e.fromModel),
      finalStopReason: e.finalStopReason,
      apiRefusalCategory: e.apiRefusalCategory != null ? Zct(e.apiRefusalCategory) : void 0
    },
    userVisible: r,
    tombstonedToolUse: n,
    swapSession: o,
    showBanner: o
  };
}
function pIl(e, t) {
  return {
    type: "system",
    subtype: "model_refusal_fallback",
    direction: "retry",
    content: e.reason === "refusal" ? C1n(e.fromModel, e.toModel, e.apiRefusalCategory) : paa(e.fromModel, e.toModel, e.apiRefusalCategory),
    level: "warning",
    trigger: "refusal",
    originalModel: e.fromModel,
    fallbackModel: e.toModel,
    requestId: e.requestId,
    apiRefusalCategory: e.apiRefusalCategory,
    apiRefusalExplanation: null,
    isMeta: !1,
    timestamp: t.timestamp,
    uuid: t.uuid
  };
}
var EQn = e => typeof e === "number" && Number.isFinite(e) && e >= 0 ? e : 0,
  $Kb;