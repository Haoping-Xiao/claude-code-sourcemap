// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TAc
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0062  score=0.277  fileCov=0.0063
// note: nearest: src/cli/print.ts (0.0062); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TAc] deps: utils/shell/resolveDefaultShell.ts, utils/generators.ts, szt
qzo = R(se(), 1), stn = {
  background_hint: () => qzo.jsx(T$e, {}),
  bash_mode_progress: e => qzo.jsx(QZt, {
    input: e.input,
    progress: e.progress,
    verbose: e.verbose
  }),
  agent_progress: (e, {
    tools: t,
    verbose: n
  }) => KMe(e.progressMessages, {
    tools: t,
    verbose: n
  }),
  it2_setup_prompt: () => null,
  computer_use_approval: () => null
};
function vAc() {
  let e = Mi(),
    t = Mi(),
    n = Mi(),
    r = new Map(),
    o = 0;
  return {
    subscribe: e.subscribe,
    onCancel: t.subscribe,
    onUpdate: n.subscribe,
    reply(s) {
      let i = r.get(s.id);
      if (!i) return;
      r.delete(s.id), i(s);
    },
    request({
      kind: s,
      payload: i
    }, a) {
      o += 1;
      let l = `dialog-${o}`,
        {
          promise: c,
          resolve: u
        } = XY(),
        d = a?.signal;
      if (d?.aborted) return queueMicrotask(() => u({
        id: l,
        cancelled: true
      })), {
        id: l,
        replied: c,
        update: () => {}
      };
      let p;
      if (r.set(l, f => {
        if (d && p) d.removeEventListener("abort", p);
        u(f);
      }), d) p = () => {
        if (r.delete(l)) u({
          id: l,
          cancelled: true
        }), t.emit(l);
      }, d.addEventListener("abort", p, {
        once: true
      });
      return e.emit({
        id: l,
        kind: s,
        payload: i,
        queueBehind: a?.queueBehind
      }), {
        id: l,
        replied: c,
        update: f => {
          if (r.has(l)) n.emit({
            id: l,
            payload: f
          });
        }
      };
    }
  };
}