// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hNe
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0055  score=0.2715  fileCov=0.0056
// note: nearest: src/screens/REPL.tsx (0.0055); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hNe = E(() => {
  tne();
  ih();
  w8o = R(rt(), 1), Lme = uL({
    open: []
  }), v8o = Mi(), w3 = {
    getState: Lme.getState,
    subscribe: Lme.subscribe,
    onClosed: v8o.subscribe,
    open(e) {
      Lme.setState(t => {
        if (e.queueBehind && t.open.length > 0) return {
          open: [e, ...t.open]
        };
        let n = t.open.length > 0 ? {
          ...e,
          swappedAt: Date.now()
        } : e;
        return {
          open: [...t.open, n]
        };
      });
    },
    update(e, t) {
      Lme.setState(n => {
        let r = n.open.findIndex(s => s.id === e);
        if (r === -1) return n;
        let o = n.open.slice();
        return o[r] = {
          ...n.open[r],
          payload: t
        }, {
          open: o
        };
      });
    },
    answer(e, t) {
      if (!$mc(e)) return;
      v8o.emit({
        id: e,
        type: "answered",
        result: t
      });
    },
    dismiss(e) {
      if (!$mc(e)) return;
      v8o.emit({
        id: e,
        type: "dismissed"
      });
    },
    _resetForTests() {
      Lme.setState(() => ({
        open: []
      }));
    }
  };
});
function Bmc(e) {
  let {
      sandboxHost: t,
      elicitationServer: n,
      workerSandboxHost: r
    } = e,
    o = Js(),
    s = Ncm[ATt()?.kind ?? ""];
  nen.useEffect(() => {
    if (!o) return;
    EQ.emit(t ? `allow network: ${t}` : null, "sandbox");
  }, [o, t]), nen.useEffect(() => {
    if (!o) return;
    EQ.emit(r ? `allow network: ${r}` : null, "worker-sandbox");
  }, [o, r]), nen.useEffect(() => {
    if (!o) return;
    EQ.emit(n ? `MCP input: ${n}` : null, "elicitation");
  }, [o, n]), nen.useEffect(() => {
    if (!o) return;
    EQ.emit(s ?? null, "dialog");
  }, [o, s]);
}
var nen, Ncm;