// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yyt
// matched 2.1.88 source: src/components/messages/CollapsedReadSearchContent.tsx
// class=new  jaccard=0.0417  score=0.2921  fileCov=0.0464
// note: nearest: src/components/messages/CollapsedReadSearchContent.tsx (0.0417); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Yyt = E(() => {
  Ye();
  es();
  Dzn = R(rt(), 1);
});
function BCo(e) {
  let t = Jyt.c(2);
  if (!qpe() || e.param.name !== Fm) return null;
  let n;
  if (t[0] !== e) n = PT.jsx(dof, {
    ...e
  }), t[0] = e, t[1] = n;else n = t[1];
  return n;
}
function dof({
  param: e,
  isQueued: t,
  isResolved: n,
  isError: r,
  shouldAnimate: o,
  shouldShowDot: s,
  addMargin: i,
  progressMessagesForMessage: a,
  resultMsg: l
}) {
  let c = n ? r ? "failed" : "done" : t ? "writing" : "running",
    u = a.filter(g => g.data.type === "repl_tool_call");
  Eof(c, n);
  let d = Xyt.useRef(Date.now()).current,
    p = sQ(d, c === "running", 200),
    f = typeof e.input.code === "string" ? e.input.code : "",
    m = l?.type === "user" ? l.toolUseResult : void 0;
  return PT.jsxs(U, {
    flexDirection: "column",
    marginTop: i ? 1 : 0,
    marginBottom: 1,
    width: "100%",
    children: [PT.jsxs(U, {
      flexDirection: "row",
      children: [s && (t ? PT.jsx(U, {
        minWidth: 2,
        children: PT.jsx(w, {
          dimColor: !0,
          children: gc
        })
      }) : PT.jsx(koe, {
        shouldAnimate: o,
        isUnresolved: !n,
        isError: r
      })), PT.jsx(w, {
        bold: !0,
        children: "REPL"
      }), PT.jsx(pof, {
        state: c,
        elapsed: p,
        progress: u,
        error: m?.error
      })]
    }), PT.jsx(mof, {
      code: f,
      state: c,
      fold: c === "done" || c === "failed"
    }), c === "done" && m && PT.jsx(hof, {
      output: m
    }), c === "failed" && m?.error && PT.jsx(_of, {
      error: m.error
    })]
  });
}
function pof(e) {
  let t = Jyt.c(23),
    {
      state: n,
      elapsed: r,
      progress: o,
      error: s
    } = e,
    i;
  if (t[0] !== o) i = qsl(o), t[0] = o, t[1] = i;else i = t[1];
  let a = i;
  switch (n) {
    case "writing":
      {
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) l = PT.jsx(w, {
          dimColor: !0,
          children: "(Writing\u2026)"
        }), t[2] = l;else l = t[2];
        return l;
      }
    case "running":
      {
        let l, c;
        if (t[3] !== o) l = o.findLast(fof), c = l ? Wsl(l.data.toolInput) : "", t[3] = o, t[4] = l, t[5] = c;else l = t[4], c = t[5];
        let u = c,
          d = l ? `Running ${l.data.toolName}(${u})\u2026` : "Running\u2026",
          p;
        if (t[6] !== r || t[7] !== d) p = PT.jsxs(w, {
          dimColor: !0,
          children: ["(", d, " ", r, ")"]
        }), t[6] = r, t[7] = d, t[8] = p;else p = t[8];
        return p;
      }
    case "done":
      {
        let l;
        if (t[9] !== o) l = Gsl(o), t[9] = o, t[10] = l;else l = t[10];
        let c = l,
          u = c ? `Ran ${c}` : "Done",
          d;
        if (t[11] !== a || t[12] !== u) d = [u, a].filter(Boolean), t[11] = a, t[12] = u, t[13] = d;else d = t[13];
        let f = d.join(" \xB7 "),
          m;
        if (t[14] !== f) m = PT.jsxs(w, {
          dimColor: !0,
          children: ["(", f, ")"]
        }), t[14] = f, t[15] = m;else m = t[15];
        return m;
      }
    case "failed":
      {
        let l;
        if (t[16] !== s) l = s ? Rs(bi(s, ":"), 40) : "Failed", t[16] = s, t[17] = l;else l = t[17];
        let u = l || "Failed",
          d;
        if (t[18] !== a || t[19] !== u) d = [u, a].filter(Boolean), t[18] = a, t[19] = u, t[20] = d;else d = t[20];
        let f = d.join(" \xB7 "),
          m;
        if (t[21] !== f) m = PT.jsxs(w, {
          color: "error",
          children: ["(", f, ")"]
        }), t[21] = f, t[22] = m;else m = t[22];
        return m;
      }
  }
}
function fof(e) {
  return e.data.phase === "start";
}
function mof(e) {
  let t = Jyt.c(12),
    {
      code: n,
      state: r,
      fold: o
    } = e,
    s,
    i,
    a,
    l;
  if (t[0] !== n || t[1] !== o || t[2] !== r) {
    let u = n.split(`
`),
      d = o ? Lzn(u, 3, 2) : u.map(gof),
      p = r !== "running";
    s = U, i = "column", a = 1, l = d.map((f, m) => PT.jsxs(U, {
      flexDirection: "row",
      children: [PT.jsx(w, {
        dimColor: !0,
        children: NCo
      }), PT.jsx(w, {
        dimColor: p || f.folded,
        children: f.line
      }), r === "writing" && m === d.length - 1 && PT.jsx(w, {
        children: uof
      })]
    }, m)), t[0] = n, t[1] = o, t[2] = r, t[3] = s, t[4] = i, t[5] = a, t[6] = l;
  } else s = t[3], i = t[4], a = t[5], l = t[6];
  let c;
  if (t[7] !== s || t[8] !== i || t[9] !== a || t[10] !== l) c = PT.jsx(s, {
    flexDirection: i,
    marginTop: a,
    children: l
  }), t[7] = s, t[8] = i, t[9] = a, t[10] = l, t[11] = c;else c = t[11];
  return c;
}
function gof(e) {
  return {
    line: e
  };
}
function hof(e) {
  let t = Jyt.c(10),
    {
      output: n
    } = e,
    r,
    o,
    s,
    i;
  if (t[0] !== n.result) {
    let l = Sof(n.result),
      c = Lzn(l.split(`
`), 6, 2);
    r = U, o = "column", s = 1, i = c.map(yof), t[0] = n.result, t[1] = r, t[2] = o, t[3] = s, t[4] = i;
  } else r = t[1], o = t[2], s = t[3], i = t[4];
  let a;
  if (t[5] !== r || t[6] !== o || t[7] !== s || t[8] !== i) a = PT.jsx(r, {
    flexDirection: o,
    marginTop: s,
    children: i
  }), t[5] = r, t[6] = o, t[7] = s, t[8] = i, t[9] = a;else a = t[9];
  return a;
}
function yof(e, t) {
  return PT.jsxs(w, {
    children: [NCo, e.line]
  }, t);
}
function _of(e) {
  let t = Jyt.c(10),
    {
      error: n
    } = e,
    r,
    o,
    s,
    i;
  if (t[0] !== n) {
    let l = Lzn(n.split(`
`), 8, 2);
    r = U, o = "column", s = 1, i = l.map(bof), t[0] = n, t[1] = r, t[2] = o, t[3] = s, t[4] = i;
  } else r = t[1], o = t[2], s = t[3], i = t[4];
  let a;
  if (t[5] !== r || t[6] !== o || t[7] !== s || t[8] !== i) a = PT.jsx(r, {
    flexDirection: o,
    marginTop: s,
    children: i
  }), t[5] = r, t[6] = o, t[7] = s, t[8] = i, t[9] = a;else a = t[9];
  return a;
}
function bof(e, t) {
  return PT.jsxs(w, {
    color: "error",
    children: [NCo, e.line]
  }, t);
}
function Sof(e) {
  try {
    return zsl.inspect(e, {
      colors: !1,
      depth: 3,
      customInspect: !1
    });
  } catch {
    return "[non-serializable value]";
  }
}
function Eof(e, t) {
  let n = Xyt.useRef(t).current,
    r = Xyt.useRef(new Set());
  Xyt.useEffect(() => {
    if (n || r.current.has(e)) return;
    r.current.add(e), G("tengu_repl_verbose_render", {
      state: $e(e)
    });
  }, [n, e]);
}
var Jyt,
  Xyt,
  zsl,
  PT,
  NCo = "    ",
  uof = "\u258C";