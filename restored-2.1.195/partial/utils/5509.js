// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lzo
// matched 2.1.88 source: node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/interfaces.js
// class=partial  jaccard=0.2391  score=0.3768  fileCov=0.3954
// note: low-confidence suggestion: node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/interfaces.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lzo = E(() => {
  cne();
  Vbc();
  azo();
  id();
  co();
  Yz = R(rt(), 1);
});
function zbc({
  sessionKey: e,
  sendResponse: t,
  requestDialog: n
}) {
  let r = jTe.useRef(t);
  r.current = t;
  let o = jTe.useRef(n);
  o.current = n;
  let s = jTe.useRef(new Map()),
    i = jTe.useCallback(l => {
      if (l.request.subtype !== "request_user_dialog") return;
      let {
          request: c,
          request_id: u
        } = l,
        d = ggm[c.dialog_kind];
      if (!d) {
        r.current(u, {
          behavior: "cancelled"
        });
        return;
      }
      let p = s.current,
        f = new AbortController();
      p.set(u, f), d(o.current, c.payload, {
        signal: f.signal
      }).then(m => {
        if (!p.delete(u)) return;
        r.current(u, m);
      }).catch(() => {
        if (!p.delete(u)) return;
        r.current(u, {
          behavior: "cancelled"
        });
      });
    }, []),
    a = jTe.useCallback(l => {
      let c = s.current.get(l);
      if (c) s.current.delete(l), c.abort();
    }, []);
  return jTe.useEffect(() => {
    let l = s.current;
    return () => {
      for (let [c, u] of l) l.delete(c), u.abort();
    };
  }, [e]), {
    dispatch: i,
    cancel: a
  };
}
var jTe, ggm;