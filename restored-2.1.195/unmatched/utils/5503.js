// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module szo
// matched 2.1.88 source: src/tools/AgentTool/UI.tsx
// class=new  jaccard=0.0277  score=0.1029  fileCov=0.0365
// note: nearest: src/tools/AgentTool/UI.tsx (0.0277); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var szo = E(() => {
  ngm = ["provision", "clone", "setup_script", "start_cc"];
});
function Bdr() {
  return {
    retracted: new Set(),
    inProgressToolUses: new Map(),
    evictedToolUses: new Set()
  };
}
function ENe(e) {
  if (typeof e !== "object" || e === null) return null;
  let t = e,
    n = typeof t.uuid === "string" ? t.uuid : null;
  if (t.type === "system" && t.subtype === "model_refusal_fallback") {
    let r = Ubc(t.retracted_message_uuids, n);
    return r ? {
      uuids: r,
      source: "retraction_banner"
    } : null;
  }
  if (t.type === "assistant") {
    let r = Ubc(t.supersedes, n);
    return r ? {
      uuids: r,
      source: "supersedes"
    } : null;
  }
  return null;
}
function Ubc(e, t) {
  if (!Array.isArray(e)) return null;
  let n = e.filter(r => typeof r === "string" && r !== t);
  return n.length > 0 ? n : null;
}
function ogm(e, t) {
  if (t.size === 0) return e;
  let n = e.filter(r => !t.has(r.uuid));
  return n.length === e.length ? e : n;
}
function Udr(e, t, n) {
  for (let r of n) e.inProgressToolUses.set(r, t);
}
function Fen(e, t) {
  for (let n of t) e.inProgressToolUses.delete(n);
}
function jen(e) {
  let {
      index: t,
      signal: n,
      surface: r,
      setMessages: o,
      setInProgressToolUseIDs: s
    } = e,
    i = On(n.uuids, l => !t.retracted.has(l));
  for (let l of n.uuids) t.retracted.add(l);
  let a = [...t.inProgressToolUses].filter(([, l]) => t.retracted.has(l)).map(([l]) => l);
  Fen(t, a);
  for (let l of a) t.evictedToolUses.add(l);
  if (a.length > 0 && s) s({
    action: "remove",
    ids: a
  });
  o(l => ogm(l, t.retracted)), G("tengu_refusal_retraction_evicted", {
    surface: $e(r),
    source: $e(n.source),
    uuid_count: n.uuids.length,
    newly_retracted_count: i,
    tool_use_cleared_count: a.length
  });
}
function Fdr(e, t, n, r) {
  if (r !== null && e.retracted.has(r)) return 0;
  let o = On(t, s => e.evictedToolUses.has(s));
  if (o > 0) G("tengu_refusal_retraction_orphan_tool_result", {
    surface: $e(n),
    count: o
  });
  return o;
}
function Fbc(e) {
  let {
      index: t,
      events: n,
      surface: r,
      setMessages: o,
      setInProgressToolUseIDs: s
    } = e,
    i = 0,
    a = 0,
    l = 0;
  for (let c of n) {
    if (c.source !== "worker") {
      if (ENe(c.payload)) if (c.source === void 0) l++;else a++;
      continue;
    }
    let u = ENe(c.payload);
    if (u) i++, jen({
      index: t,
      signal: u,
      surface: r,
      setMessages: o,
      setInProgressToolUseIDs: s
    });
  }
  if (a > 0) G("tengu_refusal_retraction_unauthenticated_signal", {
    surface: $e(r),
    reason: We("source_mismatch"),
    count: a
  });
  if (l > 0) G("tengu_refusal_retraction_unauthenticated_signal", {
    surface: $e(r),
    reason: We("source_missing"),
    count: l
  });
  return i;
}
function jdr(e, t, n) {
  if (!e.retracted.has(t)) return !1;
  return G("tengu_refusal_retraction_late_drop", {
    surface: $e(n)
  }), !0;
}