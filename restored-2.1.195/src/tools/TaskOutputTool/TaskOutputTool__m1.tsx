// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pRo
// matched 2.1.88 source: src/tools/TaskOutputTool/TaskOutputTool.tsx
// class=modified (alt of src/tools/TaskOutputTool/TaskOutputTool.tsx)  jaccard=0.2157  score=0.6427  fileCov=0.2451
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
async function cXn(e) {
  let t;
  if (e.type === "local_bash") {
    let o = e.shellCommand?.taskOutput;
    if (o) {
      let s = await o.getStdout(),
        i = o.getStderr();
      t = [s, i].filter(Boolean).join(`
`);
    } else t = await fRo(e.id);
  } else t = await fRo(e.id);
  let n = {
    task_id: e.id,
    task_type: e.type,
    status: e.status,
    description: e.description,
    output: t,
  };
  if (e.type === "local_bash")
    return {
      ...n,
      exitCode: e.result?.code ?? null,
    };
  if (e.type === "local_agent") {
    let r = e,
      o = r.result
        ? zl(
            r.result.content,
            `
`,
          )
        : void 0;
    return {
      ...n,
      prompt: r.prompt,
      result: o || t,
      output: o || t,
      error: r.error,
    };
  }
  if (e.type === "remote_agent")
    return {
      ...n,
      prompt: e.command,
    };
  return n;
}
async function Hgf(e, t, n, r) {
  let o = Date.now();
  while (Date.now() - o < n) {
    if (r?.signal.aborted) throw new ru();
    let a = t().tasks?.[e];
    if (!a) return null;
    if (a.status !== "running" && a.status !== "pending") return a;
    await Nn(100);
  }
  return t().tasks?.[e] ?? null;
}
function Tgf(e) {
  let t = x_l.c(54),
    { content: n, verbose: r, theme: o } = e,
    s = r === void 0 ? false : r,
    i = Uu("app:toggleTranscript", "Global", "ctrl+o"),
    a;
  if (t[0] !== n) ((a = typeof n === "string" ? Ft(n) : n), (t[0] = n), (t[1] = a));
  else a = t[1];
  let l = a;
  if (!l.task) {
    let f;
    if (t[2] === Symbol.for("react.memo_cache_sentinel"))
      ((f = nm.jsx(qn, {
        children: nm.jsx(Fl, {
          children: "No task output available",
        }),
      })),
        (t[2] = f));
    else f = t[2];
    return f;
  }
  let { task: c } = l;
  if (c.task_type === "local_bash") {
    let f;
    if (t[3] !== c.error || t[4] !== c.output)
      ((f = {
        stdout: c.output,
        stderr: "",
        isImage: false,
        dangerouslyDisableSandbox: true,
        returnCodeInterpretation: c.error,
      }),
        (t[3] = c.error),
        (t[4] = c.output),
        (t[5] = f));
    else f = t[5];
    let m = f,
      g;
    if (t[6] !== m || t[7] !== s)
      ((g = nm.jsx(l6e, {
        content: m,
        verbose: s,
      })),
        (t[6] = m),
        (t[7] = s),
        (t[8] = g));
    else g = t[8];
    return g;
  }
  if (c.task_type === "local_agent") {
    let f = c.result
      ? hu(
          c.result,
          `
`,
        ) + 1
      : 0;
    if (l.retrieval_status === "success") {
      if (s) {
        let h;
        if (t[9] !== f || t[10] !== c.description)
          ((h = nm.jsxs(w, {
            children: [c.description, " (", f, " lines)"],
          })),
            (t[9] = f),
            (t[10] = c.description),
            (t[11] = h));
        else h = t[11];
        let y;
        if (t[12] !== c.prompt || t[13] !== o)
          ((y =
            c.prompt &&
            nm.jsx(B8t, {
              prompt: c.prompt,
              theme: o,
              dim: true,
            })),
            (t[12] = c.prompt),
            (t[13] = o),
            (t[14] = y));
        else y = t[14];
        let b;
        if (t[15] !== c.result || t[16] !== o)
          ((b =
            c.result &&
            nm.jsx(U, {
              marginTop: 1,
              children: nm.jsx(_Io, {
                content: [
                  {
                    type: "text",
                    text: c.result,
                  },
                ],
                theme: o,
              }),
            })),
            (t[15] = c.result),
            (t[16] = o),
            (t[17] = b));
        else b = t[17];
        let _;
        if (t[18] !== c.error)
          ((_ =
            c.error &&
            nm.jsxs(U, {
              flexDirection: "column",
              marginTop: 1,
              children: [
                nm.jsx(w, {
                  color: "error",
                  bold: true,
                  children: "Error:",
                }),
                nm.jsx(U, {
                  paddingLeft: 2,
                  children: nm.jsx(w, {
                    color: "error",
                    children: c.error,
                  }),
                }),
              ],
            })),
            (t[18] = c.error),
            (t[19] = _));
        else _ = t[19];
        let S;
        if (t[20] !== y || t[21] !== b || t[22] !== _)
          ((S = nm.jsxs(U, {
            flexDirection: "column",
            paddingLeft: 2,
            marginTop: 1,
            children: [y, b, _],
          })),
            (t[20] = y),
            (t[21] = b),
            (t[22] = _),
            (t[23] = S));
        else S = t[23];
        let A;
        if (t[24] !== h || t[25] !== S)
          ((A = nm.jsxs(U, {
            flexDirection: "column",
            children: [h, S],
          })),
            (t[24] = h),
            (t[25] = S),
            (t[26] = A));
        else A = t[26];
        return A;
      }
      let g;
      if (t[27] !== i)
        ((g = nm.jsx(qn, {
          children: nm.jsxs(w, {
            dimColor: true,
            children: ["Read output (", i, " to expand)"],
          }),
        })),
          (t[27] = i),
          (t[28] = g));
      else g = t[28];
      return g;
    }
    if (l.retrieval_status === "timeout" || c.status === "running") {
      let g;
      if (t[29] === Symbol.for("react.memo_cache_sentinel"))
        ((g = nm.jsx(qn, {
          children: nm.jsx(w, {
            dimColor: true,
            children: "Task is still running\u2026",
          }),
        })),
          (t[29] = g));
      else g = t[29];
      return g;
    }
    if (l.retrieval_status === "not_ready") {
      let g;
      if (t[30] === Symbol.for("react.memo_cache_sentinel"))
        ((g = nm.jsx(qn, {
          children: nm.jsx(w, {
            dimColor: true,
            children: "Task is still running\u2026",
          }),
        })),
          (t[30] = g));
      else g = t[30];
      return g;
    }
    let m;
    if (t[31] === Symbol.for("react.memo_cache_sentinel"))
      ((m = nm.jsx(qn, {
        children: nm.jsx(w, {
          dimColor: true,
          children: "Task not ready",
        }),
      })),
        (t[31] = m));
    else m = t[31];
    return m;
  }
  if (c.task_type === "remote_agent") {
    let f;
    if (t[32] !== c.description || t[33] !== c.status)
      ((f = nm.jsxs(w, {
        children: ["\xA0\xA0", c.description, " [", c.status, "]"],
      })),
        (t[32] = c.description),
        (t[33] = c.status),
        (t[34] = f));
    else f = t[34];
    let m;
    if (t[35] !== c.output || t[36] !== s)
      ((m =
        c.output &&
        s &&
        nm.jsx(U, {
          paddingLeft: 4,
          marginTop: 1,
          children: nm.jsx(w, {
            children: c.output,
          }),
        })),
        (t[35] = c.output),
        (t[36] = s),
        (t[37] = m));
    else m = t[37];
    let g;
    if (t[38] !== i || t[39] !== c.output || t[40] !== s)
      ((g =
        !s &&
        c.output &&
        nm.jsxs(w, {
          dimColor: true,
          children: ["     ", "(", i, " to expand)"],
        })),
        (t[38] = i),
        (t[39] = c.output),
        (t[40] = s),
        (t[41] = g));
    else g = t[41];
    let h;
    if (t[42] !== f || t[43] !== m || t[44] !== g)
      ((h = nm.jsxs(U, {
        flexDirection: "column",
        children: [f, m, g],
      })),
        (t[42] = f),
        (t[43] = m),
        (t[44] = g),
        (t[45] = h));
    else h = t[45];
    return h;
  }
  let u;
  if (t[46] !== c.description || t[47] !== c.status)
    ((u = nm.jsxs(w, {
      children: ["\xA0\xA0", c.description, " [", c.status, "]"],
    })),
      (t[46] = c.description),
      (t[47] = c.status),
      (t[48] = u));
  else u = t[48];
  let d;
  if (t[49] !== c.output)
    ((d =
      c.output &&
      nm.jsx(U, {
        paddingLeft: 4,
        children: nm.jsx(w, {
          children: c.output.slice(0, 500),
        }),
      })),
      (t[49] = c.output),
      (t[50] = d));
  else d = t[50];
  let p;
  if (t[51] !== u || t[52] !== d)
    ((p = nm.jsxs(U, {
      flexDirection: "column",
      children: [u, d],
    })),
      (t[51] = u),
      (t[52] = d),
      (t[53] = p));
  else p = t[53];
  return p;
}
var x_l, nm, Agf, uXn;
