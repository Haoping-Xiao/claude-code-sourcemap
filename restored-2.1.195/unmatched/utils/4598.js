// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HPl
// matched 2.1.88 source: src/components/tasks/BackgroundTasksDialog.tsx
// class=new  jaccard=0.0405  score=0.275  fileCov=0.0453
// note: nearest: src/components/tasks/BackgroundTasksDialog.tsx (0.0405); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module HPl]
I0f = {
  type: "local-jsx",
  name: "copy",
  description: "Copy Claude's last response to clipboard (or /copy N for the Nth-latest)",
  requires: {
    ink: true
  },
  load: () => Promise.resolve().then(() => (APl(), EPl))
}, LOo = I0f;
function Ker(e) {
  let t = [];
  for (let n of Hw()) {
    if (e && !e(n)) continue;
    t.push({
      label: "scheduled task",
      detail: `${x0f(n)} \xB7 ${$a(n.prompt, TPl, true)}`
    });
  }
  return t;
}
function x0f(e) {
  if (e.recurring) return r$(e.cron);
  let t = F1(e.cron),
    n = t && Act(t, new Date(e.createdAt));
  if (!n) return r$(e.cron);
  let r = Math.max(0, n.getTime() - Date.now());
  return `Runs once in ${Yi(r, {
    mostSignificantOnly: true
  })}`;
}
function vPl(e, {
  includeDream: t = false
} = {}) {
  let n = [];
  for (let r of Object.values(e)) {
    if (!wH(r) || r.type === "remote_agent") continue;
    if (!t && r.type === "dream") continue;
    n.push({
      label: DOo[r.type],
      detail: $a(r.description, TPl, true)
    });
  }
  return n.push(...Ker()), n;
}
function wPl(e) {
  return Object.values(e).filter(wH).filter(t => t.type !== "remote_agent" && t.type !== "dream");
}
function sKe(e) {
  let t = wPl(e),
    n = Hw().length,
    r = Uo(t.map(CPl));
  if (n > 0) r.push("session_cron");
  let o = On(Object.values(e), s => s.type === "local_agent" && s.status === "running" && !s.isBackgrounded);
  return {
    count: t.length + n,
    restartableCount: o,
    kinds: r
  };
}
function CPl(e) {
  return vT(e) && e.kind === "monitor" ? "monitor" : e.type;
}
function a7t(e, t) {
  let n = wPl(e),
    r = Ker(t?.cronFilter),
    o = n.length + r.length,
    s = Uo(n.map(CPl));
  if (r.length > 0) s.push("session_cron");
  let i = [l_t(n), r.length ? `${r.length} ${bn(r.length, "loop")}` : ""];
  return {
    count: o,
    kinds: s,
    summary: i.filter(Boolean).join(", ")
  };
}
function IPl() {
  let {
    tasks: e
  } = UQn();
  if (e === 0) return;
  return `Detached \u2014 ${e} ${bn(e, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
var TPl = 50,
  DOo;