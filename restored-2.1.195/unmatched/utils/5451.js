// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zhc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zhc = E(() => {
  zj();
  ps();
  dn();
  uf();
  qT = R(rt(), 1);
});
function Khc({
  maxBufferSize: e,
  debounceMs: t
}) {
  let n = ks(),
    r = Ome.useRef({
      entries: [],
      index: -1
    }),
    [o, s] = Ome.useState(r.current),
    i = Ome.useRef(0),
    a = Ome.useRef(null),
    l = Ome.useCallback((p, f, m = {}, g = {}) => {
      let h = Date.now();
      if (a.current) a.current(), a.current = null;
      if (!g.immediate && h - i.current < t) {
        a.current = n.setTimeout(() => l(p, f, m), t);
        return;
      }
      i.current = h;
      let y = r.current;
      if (y.entries[y.index]?.text === p) return;
      let b = [...y.entries.slice(0, y.index + 1), {
          text: p,
          cursorOffset: f,
          pastedContents: m,
          timestamp: h
        }],
        _ = b.length > e ? b.slice(-e) : b;
      r.current = {
        entries: _,
        index: _.length - 1
      }, s(r.current);
    }, [t, e, n]),
    c = Ome.useCallback(() => {
      if (a.current) a.current(), a.current = null;
      let p = r.current,
        f = p.entries[p.index];
      if (!f) return;
      return r.current = {
        entries: p.entries,
        index: p.index - 1
      }, s(r.current), f;
    }, []),
    u = Ome.useCallback(() => {
      if (r.current = {
        entries: [],
        index: -1
      }, s(r.current), i.current = 0, a.current) a.current(), a.current = null;
    }, []),
    d = o.index >= 0 && o.entries[o.index] !== void 0;
  return {
    pushToBuffer: l,
    undo: c,
    canUndo: d,
    clearBuffer: u
  };
}
var Ome;