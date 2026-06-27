// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b_c
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0057  score=0.4332  fileCov=0.0058
// note: nearest: src/screens/REPL.tsx (0.0057); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var b_c = E(() => {
  Xr();
  ft();
  YHe();
  z2n();
  Lo();
  je();
  Bi();
  PM();
  sp();
  Is();
  dr();
  kDe();
  ejn();
  Jt();
  _1();
  sj();
  Pfm = ve(() => H.object({
    id: H.string(),
    content: H.string()
  }));
});
function Ofm(e, t) {
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (let o of n) if (e[o]?.content !== t[o]?.content) return false;
  return true;
}
function B6o(e) {
  return Object.values(e).filter(t => MF(t) && t.evictAfter !== 0);
}
function E_c() {
  let e = Dc(),
    t = Ho(),
    r = Ht(c => c.settings?.subagentStatusLine?.command !== void 0) && (!N_() || N6o() !== void 0),
    o = Ht(c => r ? B6o(c.tasks).length : 0),
    {
      columns: s
    } = br(),
    i = ks(),
    a = Nen.useRef(false),
    l = Nen.useRef(new Map());
  Nen.useEffect(() => {
    if (!r) {
      t(f => Object.keys(f.taskDecorations).length === 0 ? f : {
        ...f,
        taskDecorations: {}
      });
      return;
    }
    let c = false,
      u = () => {
        if (a.current) return;
        let f = e.getState(),
          m = B6o(f.tasks);
        if (y_c(l.current, m.map(h => ({
          id: h.id,
          tokenCount: h.progress?.tokenCount ?? 0
        }))), m.length === 0) {
          t(h => Object.keys(h.taskDecorations).length === 0 ? h : {
            ...h,
            taskDecorations: {}
          });
          return;
        }
        a.current = true;
        let g = new Map();
        for (let [h, y] of f.agentNameRegistry) g.set(y, h);
        __c(m, Math.max(0, s - Men()), g, l.current).then(h => {
          if (c) return;
          t(y => {
            let b = new Set(m.map(S => S.id)),
              _ = {};
            for (let [S, A] of Object.entries(h)) if (b.has(S)) _[S] = A;
            return Ofm(y.taskDecorations, _) ? y : {
              ...y,
              taskDecorations: _
            };
          });
        }).catch(h => {
          T(`subagentStatusLine tick failed: ${h}`, {
            level: "error"
          });
        }).finally(() => {
          if (a.current = false, B6o(e.getState().tasks).length === 0) u();
        });
      };
    if (o === 0) {
      u();
      return;
    }
    let d = i.setTimeout(u, $fm),
      p = i.setTimeout(function f() {
        try {
          u();
        } finally {
          p = i.setTimeout(f, S_c);
        }
      }, S_c);
    return () => {
      c = true, d(), p();
    };
  }, [r, o, s, e, t, i]);
}
var Nen,
  $fm = 300,
  S_c = 5000;