// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sPc
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0091  score=0.4181  fileCov=0.0092
// note: nearest: src/utils/sessionStorage.ts (0.0091); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sPc] deps: Ed, Un
rPc = R(rt(), 1);
function Kfr(e) {
  let t = new Set(),
    n = new Set();
  for (let s of e) {
    if (s.type !== "assistant" || !Array.isArray(s.message.content)) continue;
    for (let i of s.message.content) if (i.type === "tool_use") {
      if (i.name === g4) t.add(i.id);else if (i.name === Sb) n.add(i.id);
    }
  }
  let r = {},
    o = {};
  for (let s of e) {
    if (s.type !== "user" || !Array.isArray(s.message.content)) continue;
    for (let i of s.message.content) {
      if (i.type !== "tool_result" || !i.tool_use_id) continue;
      if (t.has(i.tool_use_id)) DCm(s.toolUseResult, s.timestamp, r, o);else if (n.has(i.tool_use_id)) PCm(s.toolUseResult, o);
    }
  }
  return {
    frameUrls: r,
    artifactReadVersions: o
  };
}
function DCm(e, t, n, r) {
  let o = e,
    s = typeof o?.url === "string" ? Oue(o.url) : null;
  if (typeof o?.url !== "string" || s === null || typeof o.path !== "string") return;
  for (let [a, l] of Object.entries(n)) if (a !== o.path && Oue(l.url) === s) delete n[a];
  delete n[o.path];
  let i = typeof o.title === "string" ? $ct(o.title) : null;
  if (n[o.path] = {
    url: o.url,
    updatedAt: Date.parse(t) || 0,
    ...(i !== null && {
      title: i
    })
  }, typeof o.version === "string") r[s] = o.version;
}
function PCm(e, t) {
  let n = e?.artifactRead;
  if (!n || typeof n.slug !== "string" || Oue(`https://claude.ai/code/artifact/${n.slug}`) !== n.slug || typeof n.ver !== "string") return;
  t[n.slug] = n.ver;
}