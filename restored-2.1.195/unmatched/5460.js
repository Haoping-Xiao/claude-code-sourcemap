// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cyc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Cyc = E(() => {
  Ed();
  Ye();
  kt();
  Zf();
  tC();
  Ye();
  Yj();
  ps();
  nk();
  id();
  BI();
  Ire();
  Ryt();
  uo();
  sA();
  wGt();
  Zhc();
  es();
  _a();
  sr();
  ayc();
  TZr();
  g6o();
  h6o();
  hN();
  JSt();
  Syc();
  Ym = R(rt(), 1), wyc = R(se(), 1), vpm = /^@[\p{L}\p{N}\p{M}_\-./\\()[\]~:]*/u, Eyc = /^[\p{L}\p{N}\p{M}_\-./\\()[\]~:]+/u, wpm = /(@[\p{L}\p{N}\p{M}_\-./\\()[\]~:]*|[\p{L}\p{N}\p{M}_\-./\\()[\]~:]+)$/u, Cpm = /[\p{L}\p{N}\p{M}_\-./\\()[\]~:]+$/u, Ipm = /(^|[\s\u3002\u3001\uFF1F\uFF01])@([\p{L}\p{N}\p{M}_\-./\\()[\]~:]*|"[^"]*"?)$/u, b6o = /(^|\s)#([a-z0-9][a-z0-9_-]*)$/, S6o = /(^|\s):([a-z0-9_+-]{2,})$/, xpm = /(^|\s):([a-z0-9_+-]+):$/;
  gdr = /(^|[\s\u3002\u3001\uFF1F\uFF01])@([\w-]*)$/;
});
function MTt(e, t, n) {
  if (e.type === "in_process_teammate") {
    if (e.status === "running") return uMe(e.id, t, n), t.update(e.id, s => s.status === "killed" && s.evictAfter === void 0 ? {
      ...s,
      evictAfter: Date.now() + Oht
    } : s), "killed";
    return t.remove(e.id), "dismissed";
  }
  if (e.status !== "running" && !sw(e)) return a8l(e.id, n), "dismissed";
  let r = t.get(e.id);
  if (El(r) && (r.status === "running" || sw(r))) ife(e.id, t);
  HAe(e.id, t, "user");
  let o = t.all();
  for (let s of Object.values(o)) if (El(s) && s.id !== e.id && (s.status === "running" || sw(s)) && Dpm(s, e.agentId, o)) Iyt(s.id, t), ife(s.id, t), HAe(s.id, t, "user");
  return "killed";
}
function Dpm(e, t, n) {
  let r = new Set(),
    o = e.parentAgentId;
  while (o && !r.has(o)) {
    if (o === t) return !0;
    r.add(o);
    let s = n[o];
    o = El(s) ? s.parentAgentId : void 0;
  }
  return !1;
}
function Iyc(e, t, n, r) {
  if (t === "running") return qAe(e, n), "killed";
  return r(o => {
    if (o.tasks[e]?.type !== "local_workflow") return o;
    let s = {
      ...o.tasks
    };
    return delete s[e], {
      ...o,
      tasks: s
    };
  }), "dismissed";
}