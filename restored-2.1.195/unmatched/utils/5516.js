// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lSc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0047  score=0.4686  fileCov=0.0047
// note: nearest: src/screens/REPL.tsx (0.0047); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lSc] deps: utils/gracefulShutdown.ts, hooks/useDirectConnect.ts
iSc = R(rt(), 1);
function cSc(e) {
  let t = Dc(),
    n = Ht(a => a.transcripts[e]?.messages ?? pzo),
    r = Ven.useRef(n),
    o = Ht(a => a.transcripts[e]?.inProgressToolUseIDs ?? fzo),
    s = Ven.useCallback((a, l) => {
      r.current = a, t.setState(c => {
        let u = c.transcripts[e] ?? {
          messages: pzo,
          inProgressToolUseIDs: fzo
        };
        if (u.messages === a && l?.tokenCount === void 0) return c;
        return {
          ...c,
          transcripts: {
            ...c.transcripts,
            [e]: {
              ...u,
              messages: a,
              ...(l?.tokenCount !== void 0 && {
                progress: {
                  toolUseCount: 0,
                  ...u.progress,
                  tokenCount: l.tokenCount
                }
              })
            }
          }
        };
      });
    }, [t, e]),
    i = Ven.useCallback(a => {
      t.setState(l => {
        let c = l.transcripts[e] ?? {
            messages: pzo,
            inProgressToolUseIDs: fzo
          },
          u = c.inProgressToolUseIDs,
          d;
        switch (a.action) {
          case "add":
            {
              d = new Set(u);
              for (let p of a.ids) d.add(p);
              break;
            }
          case "remove":
            {
              d = new Set(u);
              for (let p of a.ids) d.delete(p);
              if (d.size === u.size) return l;
              break;
            }
          case "clear":
            if (u.size === 0) return l;
            d = new Set();
            break;
          default:
            return l;
        }
        return {
          ...l,
          transcripts: {
            ...l.transcripts,
            [e]: {
              ...c,
              inProgressToolUseIDs: d
            }
          }
        };
      });
    }, [t, e]);
  return {
    messages: n,
    messagesRef: r,
    setAgentMessages: s,
    inProgressToolUseIDs: o,
    setInProgressToolUseIDs: i
  };
}
var Ven, pzo, fzo;