// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wTl
// matched 2.1.88 source: src/tools/PowerShellTool/UI.tsx
// class=modified  jaccard=0.2953  score=0.4401  fileCov=0.4729
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function ITl(e, { verbose: t, theme: n }) {
  let { command: r } = e;
  if (!r) return null;
  let o = r;
  if (!t) {
    let s = o.split(`
`),
      i = s.length > CTl,
      a = o.length > oDo;
    if (i || a) {
      let l = o;
      if (i)
        l = s.slice(0, CTl).join(`
`);
      if (l.length > oDo) l = l.slice(0, oDo);
      return $k.jsxs(w, {
        children: [l.trim(), "\u2026"],
      });
    }
  }
  return o;
}
function xTl(e, { verbose: t, tools: n, terminalSize: r, inProgressToolCallCount: o }) {
  let s = e.at(-1);
  if (!s || !s.data)
    return $k.jsx(qn, {
      height: 1,
      children: $k.jsx(w, {
        dimColor: true,
        children: "Running\u2026",
      }),
    });
  let i = s.data;
  return $k.jsx(qpt, {
    fullOutput: i.fullOutput,
    output: i.output,
    elapsedTimeSeconds: i.elapsedTimeSeconds,
    totalLines: i.totalLines,
    totalBytes: i.totalBytes,
    timeoutMs: i.timeoutMs,
    taskId: i.taskId,
    verbose: t,
  });
}
function kTl() {
  return $k.jsx(qn, {
    height: 1,
    children: $k.jsx(w, {
      dimColor: true,
      children: "Waiting\u2026",
    }),
  });
}
function RTl(e, t, { verbose: n, theme: r, tools: o, style: s }) {
  let a = t.at(-1)?.data?.timeoutMs,
    {
      stdout: l,
      stderr: c,
      interrupted: u,
      returnCodeInterpretation: d,
      isImage: p,
      backgroundTaskId: f,
    } = e;
  if (p)
    return $k.jsx(qn, {
      height: 1,
      children: $k.jsx(w, {
        dimColor: true,
        children: "[Image data detected and sent to Claude]",
      }),
    });
  return $k.jsxs(U, {
    flexDirection: "column",
    children: [
      l !== ""
        ? $k.jsx(J1, {
            content: l,
            verbose: n,
          })
        : null,
      c.trim() !== ""
        ? $k.jsx(J1, {
            content: c,
            verbose: n,
            isError: true,
          })
        : null,
      l === "" && c.trim() === ""
        ? $k.jsx(qn, {
            height: 1,
            children: $k.jsx(w, {
              dimColor: true,
              children: f
                ? $k.jsxs($k.Fragment, {
                    children: [
                      "Running in the background",
                      " ",
                      $k.jsx(ht, {
                        chord: "down",
                        action: "manage",
                        parens: true,
                      }),
                    ],
                  })
                : u
                  ? "Interrupted"
                  : d || "(No output)",
            }),
          })
        : null,
      a
        ? $k.jsx(qn, {
            children: $k.jsx(Vqe, {
              timeoutMs: a,
            }),
          })
        : null,
    ],
  });
}
function LTl(e, { verbose: t, progressMessagesForMessage: n, tools: r }) {
  return $k.jsx(AT, {
    result: e,
    verbose: t,
  });
}
var $k,
  CTl = 2,
  oDo = 160;
