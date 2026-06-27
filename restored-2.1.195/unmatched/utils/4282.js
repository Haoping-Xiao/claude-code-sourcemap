// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qko
// matched 2.1.88 source: src/ink/styles.ts
// class=new  jaccard=0.0401  score=0.1963  fileCov=0.0479
// note: nearest: src/ink/styles.ts (0.0401); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Qko = E(() => {
  Xa();
  Ao();
});
function i7n(e) {
  let t = new Map(),
    n = [],
    r = new Map();
  for (let o of e) if (o.type === "workflow_agent") t.set(o.index, o);else if (o.type === "workflow_log") n.push(o.message);else if (o.type === "workflow_phase") r.set(o.index, {
    title: o.title,
    kind: o.kind
  });
  return {
    agents: [...t.values()].sort((o, s) => o.index - s.index),
    logs: n,
    phaseTitles: r
  };
}
function Zko(e, t) {
  if (!e.some(r => r.phaseIndex != null)) return null;
  let n = new Map();
  for (let r of e) {
    let o = r.phaseIndex ?? 0,
      s = n.get(o);
    if (!s) {
      let i = t.get(o);
      s = {
        phaseIndex: o,
        title: i?.title ?? `Phase ${o}`,
        kind: i?.kind,
        agents: []
      }, n.set(o, s);
    }
    s.agents.push(r);
  }
  return [...n.values()].sort((r, o) => r.phaseIndex - o.phaseIndex);
}
function Xml(e) {
  let t = G6t.c(32),
    {
      row: n,
      isLast: r
    } = e,
    o = r ? "\u2514\u2500" : "\u251C\u2500",
    s = n.state === "start" || n.state === "progress",
    i,
    a;
  e: switch (n.state) {
    case "done":
      {
        i = nt.tick, a = "success";
        break e;
      }
    case "error":
      {
        i = nt.cross, a = "error";
        break e;
      }
    case "start":
    case "progress":
      i = "\u27F3", a = void 0;
  }
  let l;
  if (t[0] !== s || t[1] !== n.agentType || t[2] !== n.durationMs || t[3] !== n.fallbackModel || t[4] !== n.model || t[5] !== n.tokens || t[6] !== n.toolCalls) {
    if (l = [], n.agentType != null) l.push(n.agentType);
    if (n.model != null || n.fallbackModel != null) {
      let f;
      if (t[8] !== n.fallbackModel || t[9] !== n.model) f = j6t(n.model, n.fallbackModel), t[8] = n.fallbackModel, t[9] = n.model, t[10] = f;else f = t[10];
      l.push(f);
    }
    if (n.tokens != null) {
      let f;
      if (t[11] !== n.tokens) f = gl(n.tokens), t[11] = n.tokens, t[12] = f;else f = t[12];
      l.push(`${f} tok`);
    }
    if (n.toolCalls != null && n.toolCalls > 0) {
      let f = n.toolCalls,
        m;
      if (t[13] !== n.toolCalls) m = bn(n.toolCalls, "tool"), t[13] = n.toolCalls, t[14] = m;else m = t[14];
      l.push(`${f} ${m}`);
    }
    if (n.durationMs != null) {
      let f;
      if (t[15] !== n.durationMs) f = Yi(n.durationMs), t[15] = n.durationMs, t[16] = f;else f = t[16];
      l.push(f);
    }
    if (s && l.length === 0) l.push("\u2026running");
    t[0] = s, t[1] = n.agentType, t[2] = n.durationMs, t[3] = n.fallbackModel, t[4] = n.model, t[5] = n.tokens, t[6] = n.toolCalls, t[7] = l;
  } else l = t[7];
  let c;
  if (t[17] !== i || t[18] !== a) c = ny.jsx(w, {
    color: a,
    children: i
  }), t[17] = i, t[18] = a, t[19] = c;else c = t[19];
  let u;
  if (t[20] !== l) u = l.length > 0 && ny.jsxs(w, {
    dimColor: true,
    children: ["  ", l.join(" \xB7 ")]
  }), t[20] = l, t[21] = u;else u = t[21];
  let d;
  if (t[22] !== n.error || t[23] !== n.state) d = n.state === "error" && n.error && ny.jsxs(w, {
    color: "error",
    children: [" ", "\u2014", " ", n.error]
  }), t[22] = n.error, t[23] = n.state, t[24] = d;else d = t[24];
  let p;
  if (t[25] !== s || t[26] !== n.label || t[27] !== c || t[28] !== u || t[29] !== d || t[30] !== o) p = ny.jsx(U, {
    paddingLeft: 1,
    children: ny.jsxs(w, {
      dimColor: s,
      children: [o, " ", c, " ", n.label, u, d]
    })
  }), t[25] = s, t[26] = n.label, t[27] = c, t[28] = u, t[29] = d, t[30] = o, t[31] = p;else p = t[31];
  return p;
}
function ppf(e) {
  let t = G6t.c(42),
    {
      group: n,
      verbose: r,
      width: o
    } = e,
    s;
  if (t[0] !== n.agents) s = n.agents.filter(gpf), t[0] = n.agents, t[1] = s;else s = t[1];
  let i = s,
    a,
    l,
    c,
    u,
    d;
  if (t[2] !== i.length || t[3] !== n.agents || t[4] !== r) {
    let P = n.agents.filter(mpf),
      O = n.agents.filter(fpf);
    d = n.agents.length, l = i.length, c = P.length, a = l + c === d && d > 0, u = r ? n.agents : [...P, ...O], t[2] = i.length, t[3] = n.agents, t[4] = r, t[5] = a, t[6] = l, t[7] = c, t[8] = u, t[9] = d;
  } else a = t[5], l = t[6], c = t[7], u = t[8], d = t[9];
  let p = u,
    f = n.agents[0]?.model,
    m;
  if (t[10] !== f || t[11] !== n.agents) m = f && n.agents.every(P => P.model === f) ? $h(f) ?? f : void 0, t[10] = f, t[11] = n.agents, t[12] = m;else m = t[12];
  let g = m,
    h = a ? c > 0 ? nt.cross : nt.tick : "\u27F3",
    y = a ? c > 0 ? "error" : "success" : void 0,
    b = n.kind === "child" ? "permission" : "subtle",
    _;
  if (t[13] !== n.title) _ = ny.jsx(w, {
    bold: true,
    children: n.title
  }), t[13] = n.title, t[14] = _;else _ = t[14];
  let S;
  if (t[15] !== y || t[16] !== h) S = ny.jsx(w, {
    color: y,
    children: h
  }), t[15] = y, t[16] = h, t[17] = S;else S = t[17];
  let A = g && ` \xB7 ${g}`,
    v;
  if (t[18] !== c) v = c > 0 && ny.jsxs(w, {
    color: "error",
    children: [" ", "\xB7", " ", c, " failed"]
  }), t[18] = c, t[19] = v;else v = t[19];
  let C;
  if (t[20] !== l || t[21] !== A || t[22] !== v || t[23] !== d) C = ny.jsxs(w, {
    dimColor: true,
    children: [l, "/", d, A, v]
  }), t[20] = l, t[21] = A, t[22] = v, t[23] = d, t[24] = C;else C = t[24];
  let x;
  if (t[25] !== _ || t[26] !== S || t[27] !== C) x = ny.jsx(U, {
    paddingX: 1,
    children: ny.jsxs(w, {
      children: [_, "  ", S, " ", C]
    })
  }), t[25] = _, t[26] = S, t[27] = C, t[28] = x;else x = t[28];
  let I;
  if (t[29] !== l || t[30] !== r) I = !r && l > 0 && ny.jsx(U, {
    paddingLeft: 1,
    children: ny.jsxs(w, {
      dimColor: true,
      children: [ny.jsx(Hs, {
        status: "success"
      }), " ", l, " done"]
    })
  }), t[29] = l, t[30] = r, t[31] = I;else I = t[31];
  let k;
  if (t[32] !== p) {
    let P;
    if (t[34] !== p.length) P = (O, L) => ny.jsx(Xml, {
      row: O,
      isLast: L === p.length - 1
    }, O.index), t[34] = p.length, t[35] = P;else P = t[35];
    k = p.map(P), t[32] = p, t[33] = k;
  } else k = t[33];
  let D;
  if (t[36] !== x || t[37] !== I || t[38] !== k || t[39] !== b || t[40] !== o) D = ny.jsxs(U, {
    flexDirection: "column",
    borderStyle: "single",
    borderColor: b,
    alignSelf: "flex-start",
    width: o,
    children: [x, I, k]
  }), t[36] = x, t[37] = I, t[38] = k, t[39] = b, t[40] = o, t[41] = D;else D = t[41];
  return D;
}
function fpf(e) {
  return e.state === "start" || e.state === "progress";
}
function mpf(e) {
  return e.state === "error";
}
function gpf(e) {
  return e.state === "done";
}
function ypf(e) {
  let t = G6t.c(26),
    {
      agents: n,
      verbose: r
    } = e,
    o;
  if (t[0] !== n || t[1] !== r) o = r ? n : n.slice(-hpf), t[0] = n, t[1] = r, t[2] = o;else o = t[2];
  let s = o,
    i = n.length - s.length,
    a;
  if (t[3] !== n) a = On(n, bpf), t[3] = n, t[4] = a;else a = t[4];
  let l = a,
    c = On(n, _pf),
    u = n.length,
    d;
  if (t[5] !== n.length) d = bn(n.length, "agent"), t[5] = n.length, t[6] = d;else d = t[6];
  let p;
  if (t[7] !== c) p = c > 0 && ny.jsxs(w, {
    color: "error",
    children: [" ", "\xB7", " ", c, " failed"]
  }), t[7] = c, t[8] = p;else p = t[8];
  let f;
  if (t[9] !== n.length || t[10] !== l || t[11] !== d || t[12] !== p) f = ny.jsxs(w, {
    children: [u, " ", d, " ", "\xB7", " ", l, " done", p]
  }), t[9] = n.length, t[10] = l, t[11] = d, t[12] = p, t[13] = f;else f = t[13];
  let m;
  if (t[14] !== i || t[15] !== s) {
    let y;
    if (t[17] !== i || t[18] !== s.length) y = (b, _) => ny.jsx(Xml, {
      row: b,
      isLast: _ === s.length - 1 && i === 0
    }, b.index), t[17] = i, t[18] = s.length, t[19] = y;else y = t[19];
    m = s.map(y), t[14] = i, t[15] = s, t[16] = m;
  } else m = t[16];
  let g;
  if (t[20] !== i) g = i > 0 && ny.jsx(U, {
    paddingLeft: 1,
    children: ny.jsxs(w, {
      dimColor: true,
      children: ["\u2514\u2500 \xB7 \xB7 \xB7 +", i, " more"]
    })
  }), t[20] = i, t[21] = g;else g = t[21];
  let h;
  if (t[22] !== f || t[23] !== m || t[24] !== g) h = ny.jsxs(U, {
    flexDirection: "column",
    children: [f, m, g]
  }), t[22] = f, t[23] = m, t[24] = g, t[25] = h;else h = t[25];
  return h;
}
function _pf(e) {
  return e.state === "error";
}
function bpf(e) {
  return e.state === "done";
}
function Jml(e) {
  let t = G6t.c(18),
    {
      collected: n,
      verbose: r,
      width: o
    } = e,
    {
      agents: s,
      logs: i,
      phaseTitles: a
    } = n;
  if (s.length === 0 && i.length === 0) return null;
  let l, c, u, d, p;
  if (t[0] !== s || t[1] !== i || t[2] !== a || t[3] !== r || t[4] !== o) {
    let m = Zko(s, a),
      g;
    if (t[10] !== i) g = i.at(-1), t[10] = i, t[11] = g;else g = t[11];
    let h = g,
      y = i.slice(-3, -1);
    l = U, c = "column", u = h && ny.jsx(U, {
      marginBottom: m || s.length > 0 ? 1 : 0,
      children: ny.jsxs(w, {
        children: [nt.pointer, " ", h]
      })
    }), d = m ? ny.jsx(U, {
      flexDirection: "column",
      children: m.map((b, _) => ny.jsxs(Yml.Fragment, {
        children: [ny.jsx(ppf, {
          group: b,
          verbose: r,
          width: o
        }), _ < m.length - 1 && ny.jsx(U, {
          paddingLeft: 3,
          children: ny.jsx(w, {
            dimColor: true,
            children: "\u2193"
          })
        })]
      }, b.phaseIndex))
    }) : s.length > 0 ? ny.jsx(ypf, {
      agents: s,
      verbose: r
    }) : null, p = y.length > 0 && ny.jsx(U, {
      flexDirection: "column",
      paddingLeft: 3,
      marginTop: 1,
      children: y.map(Spf)
    }), t[0] = s, t[1] = i, t[2] = a, t[3] = r, t[4] = o, t[5] = l, t[6] = c, t[7] = u, t[8] = d, t[9] = p;
  } else l = t[5], c = t[6], u = t[7], d = t[8], p = t[9];
  let f;
  if (t[12] !== l || t[13] !== c || t[14] !== u || t[15] !== d || t[16] !== p) f = ny.jsxs(l, {
    flexDirection: c,
    children: [u, d, p]
  }), t[12] = l, t[13] = c, t[14] = u, t[15] = d, t[16] = p, t[17] = f;else f = t[17];
  return f;
}
function Spf(e, t) {
  return ny.jsx(w, {
    dimColor: true,
    children: e
  }, t);
}
var G6t,
  Yml,
  ny,
  hpf = 8;