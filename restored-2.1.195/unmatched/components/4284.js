// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n0o
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0063  score=0.1827  fileCov=0.0065
// note: nearest: src/cli/print.ts (0.0063); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module n0o] deps: si, Xa, fH, RUt, _i, Tc, Ye, es, uf, g0
S$e = R(lt(), 1), t0o = R(rt(), 1), rw = R(se(), 1);
function r0o(e) {
  let t = On(e.agents, c => c.state === "done"),
    n = On(e.agents, c => c.state === "error"),
    r = e.agents.length,
    o = t + n === r && r > 0,
    s = 0,
    i = 1 / 0,
    a = 0;
  for (let c of e.agents) {
    if (c.tokens) s += c.tokens;
    if (c.startedAt != null) {
      if (c.startedAt < i) i = c.startedAt;
      let u = c.lastProgressAt ?? c.startedAt;
      if (u > a) a = u;
    }
  }
  let l = i < 1 / 0 ? a - i : 0;
  return {
    title: e.title,
    status: o ? n > 0 ? "failed" : "done" : "running",
    agents: e.agents,
    doneCount: t,
    totalCount: r,
    tokens: s,
    durationMs: l
  };
}
function vpf(e) {
  return {
    title: e,
    status: "not-started",
    agents: [],
    doneCount: 0,
    totalCount: 0,
    tokens: 0,
    durationMs: 0
  };
}
function rgl(e) {
  return e.toLowerCase().trim();
}
function wpf(e, t) {
  let n = new Set(),
    r = [];
  function o(s) {
    let i = rgl(s);
    for (let a of t) {
      if (n.has(a)) continue;
      let l = rgl(a.title);
      if (i === l || l.startsWith(i) || i.startsWith(l)) return n.add(a), a;
    }
    return;
  }
  for (let s of e ?? []) {
    let i = o(s.title);
    r.push(i ? r0o(i) : vpf(s.title));
  }
  for (let s of t) if (!n.has(s)) r.push(r0o(s));
  return r;
}
function ogl(e) {
  let t = i7n(e.workflowProgress),
    n = Zko(t.agents, t.phaseTitles) ?? [],
    r = wpf(e.phases, n);
  if (r.length === 0 && t.agents.length > 0) return [r0o({
    phaseIndex: 0,
    title: "Agents",
    agents: t.agents
  })];
  return r;
}
function sgl(e, t) {
  let n = 0,
    r = 0;
  for (let o of e) n += o.doneCount, r += o.totalCount;
  return {
    doneAgents: n,
    totalAgents: Math.max(t, r, n)
  };
}
function igl(e) {
  if (e.script.length > 0) {
    let t = ZI(e.script);
    if (!("error" in t) && t.meta.description) return t.meta.description;
  }
  return e.description || e.summary || "";
}
function agl(e, t, n, r) {
  let o = e.status === "completed" ? " \xB7 done" : e.status === "killed" ? " \xB7 stopped" : e.status === "paused" ? " \xB7 paused" : AC(e.status) ? " \xB7 failed" : "",
    s = t,
    i = `${n.doneAgents}/${n.totalAgents} ${bn(n.totalAgents, "agent")} \xB7 ${YIt(r)}${o}`;
  return {
    name: e.workflowName ?? e.summary ?? e.description,
    subtext: s,
    stats: i
  };
}
function l7n(e, t = 0) {
  let n = 0,
    r = 0,
    o = 0,
    s = false;
  for (let l of e) {
    if (l.type !== "workflow_agent") continue;
    if (n++, l.state === "done") r++;else if (l.state === "error") o++;else if (l.state === "start" || l.state === "progress") s = true;
  }
  let i = Math.max(t, n),
    a = !s && n > 0 && r + o >= i;
  return {
    done: r,
    failedCount: o,
    running: s,
    total: i,
    complete: a
  };
}