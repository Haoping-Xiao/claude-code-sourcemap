// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c7n
// matched 2.1.88 source: src/components/tasks/InProcessTeammateDetailDialog.tsx
// class=partial  jaccard=0.1814  score=0.3542  fileCov=0.271
// note: low-confidence suggestion: src/components/tasks/InProcessTeammateDetailDialog.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var c7n = E(() => {
  yC();
  es();
  sr();
  e0o();
  Uoe();
});
function cgl(e, {
  verbose: t
}) {
  if (e.name) return `dynamic workflow: ${e.name}`;
  if (!e.script) return null;
  if (t) return e.script;
  let n = ZI(e.script);
  if (!("error" in n)) return n.meta.description;
  let r = e.script.split(`
`).find(a => a.trim()) ?? e.script.slice(0, 40),
    o = r.length > lgl ? r.slice(0, lgl - 1) + "\u2026" : r,
    s = hu(e.script, `
`) + 1,
    i = f4t(s - 1);
  return i ? `${o} ${i}` : o;
}
function ugl(e, t) {
  let n = i7n(e.map(o => o.data));
  if (n.agents.length === 0 && n.logs.length === 0) return null;
  let r = Boolean(t?.verbose || t?.isTranscriptMode);
  if (r) {
    let o = t?.terminalSize?.columns ?? 80,
      s = Math.min(80, Math.max(40, o - 10));
    return A_.jsx(qn, {
      children: A_.jsx(Jml, {
        collected: n,
        verbose: r,
        width: s
      })
    });
  }
  return A_.jsx(qn, {
    children: A_.jsx(Cpf, {
      agents: n.agents
    })
  });
}
function Cpf(e) {
  let t = o0o.c(8),
    {
      agents: n
    } = e,
    r;
  if (t[0] !== n) r = l7n(n), t[0] = n, t[1] = r;else r = t[1];
  let {
      done: o,
      failedCount: s,
      running: i,
      total: a,
      complete: l
    } = r,
    c = s > 0 ? "failed" : l ? "done" : "running",
    u;
  if (t[2] !== l || t[3] !== o || t[4] !== c || t[5] !== i || t[6] !== a) u = A_.jsx(ngl, {
    done: o,
    total: a,
    running: i,
    complete: l,
    dotState: c
  }), t[2] = l, t[3] = o, t[4] = c, t[5] = i, t[6] = a, t[7] = u;else u = t[7];
  return u;
}
function dgl(e) {
  if (e.error) return A_.jsx(qn, {
    children: A_.jsxs(w, {
      color: "error",
      children: [A_.jsx(Hs, {
        status: "error",
        withSpace: !0
      }), Gd(e.error)]
    })
  });
  if (e.status === "remote_launched") return A_.jsx(qn, {
    children: A_.jsxs(U, {
      flexDirection: "column",
      children: [A_.jsxs(w, {
        children: [A_.jsx(w, {
          dimColor: !0,
          children: "Running in cloud session \xB7 "
        }), A_.jsx(w, {
          color: "suggestion",
          children: e.sessionUrl
        })]
      }), e.warning ? A_.jsxs(w, {
        color: "warning",
        children: [A_.jsx(Hs, {
          status: "warning",
          withSpace: !0
        }), e.warning]
      }) : null]
    })
  });
  return A_.jsx(Ipf, {
    taskId: e.taskId
  });
}
function Ipf(e) {
  let t = o0o.c(21),
    {
      taskId: n
    } = e,
    r;
  if (t[0] !== n) r = i => i.tasks[n], t[0] = n, t[1] = r;else r = t[1];
  let o = dT(r);
  if (o?.type === "local_workflow" && (o.status === "completed" || o.status === "failed" || o.status === "killed")) {
    let i;
    if (t[2] !== o.endTime || t[3] !== o.startTime) i = o.endTime && o.startTime ? Yi(o.endTime - o.startTime) : void 0, t[2] = o.endTime, t[3] = o.startTime, t[4] = i;else i = t[4];
    let a = i,
      l = o.status === "failed",
      c = o.status === "killed",
      u = l || c ? "error" : "success",
      d;
    if (t[5] !== u) d = A_.jsx(Hs, {
      status: u,
      withSpace: !0
    }), t[5] = u, t[6] = d;else d = t[6];
    let p = l ? "Failed" : c ? "Stopped" : "Completed",
      f = a && ` in ${a}`,
      m;
    if (t[7] !== o.agentCount) m = o.agentCount > 0 && ` \xB7 ${o.agentCount} ${bn(o.agentCount, "agent")}`, t[7] = o.agentCount, t[8] = m;else m = t[8];
    let g;
    if (t[9] !== o.totalTokens) g = o.totalTokens > 0 && ` \xB7 ${gl(o.totalTokens)} tokens`, t[9] = o.totalTokens, t[10] = g;else g = t[10];
    let h;
    if (t[11] !== p || t[12] !== f || t[13] !== m || t[14] !== g) h = A_.jsxs(w, {
      dimColor: !0,
      children: [p, f, m, g]
    }), t[11] = p, t[12] = f, t[13] = m, t[14] = g, t[15] = h;else h = t[15];
    let y;
    if (t[16] !== d || t[17] !== h) y = A_.jsx(qn, {
      children: A_.jsxs(w, {
        children: [d, h]
      })
    }), t[16] = d, t[17] = h, t[18] = y;else y = t[18];
    return y;
  }
  if (o?.type === "local_workflow") {
    let i;
    if (t[19] === Symbol.for("react.memo_cache_sentinel")) i = A_.jsx(qn, {
      children: A_.jsxs(w, {
        children: [A_.jsx(w, {
          dimColor: !0,
          children: "Running in background \xB7 "
        }), A_.jsx(w, {
          color: "suggestion",
          children: "/workflows"
        }), A_.jsx(w, {
          dimColor: !0,
          children: " to monitor and save"
        })]
      })
    }), t[19] = i;else i = t[19];
    return i;
  }
  let s;
  if (t[20] === Symbol.for("react.memo_cache_sentinel")) s = A_.jsx(qn, {
    children: A_.jsxs(w, {
      children: [A_.jsx(w, {
        color: "suggestion",
        children: "/workflows"
      }), A_.jsx(w, {
        dimColor: !0,
        children: " to view dynamic workflow runs"
      })]
    })
  }), t[20] = s;else s = t[20];
  return s;
}
function pgl() {
  return A_.jsx(qn, {
    children: A_.jsx(w, {
      dimColor: !0,
      children: "Dynamic workflow cancelled"
    })
  });
}
var o0o,
  A_,
  lgl = 80;