// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gq
// matched 2.1.88 source: src/tools/BashTool/UI.tsx
// class=modified  jaccard=0.2707  score=0.5154  fileCov=0.3631
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gq] deps: xF, uo
AHl = R(rt(), 1);
function T$e(e) {
  let t = THl.c(10),
    n;
  if (t[0] !== e) ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  else n = t[1];
  let { onBackground: r } = n,
    o = $T(),
    s;
  if (t[2] !== r || t[3] !== o)
    ((s = () => {
      (j$e(o), r?.());
    }),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s));
  else s = t[4];
  let i = s,
    a;
  if (t[5] !== i)
    ((a = {
      handler: i,
      isActive: true,
    }),
      (t[5] = i),
      (t[6] = a));
  else a = t[6];
  let { cohesionFixes: l, gateOnShortcut: c } = ujn(a),
    u = Uu("task:background", "Task", "ctrl+b"),
    d = l ? c : Oe.terminal === "tmux" && u === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : u;
  if (Oe.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || (l && d === "")) return null;
  let p;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((p = {
      keyCase: "lower",
    }),
      (t[7] = p));
  else p = t[7];
  let f;
  if (t[8] !== d)
    ((f = rz.jsx(U, {
      paddingLeft: 5,
      children: rz.jsx(w, {
        dimColor: true,
        children: rz.jsx(ht, {
          chord: d,
          action: "run in background",
          parens: true,
          format: p,
        }),
      }),
    })),
      (t[8] = d),
      (t[9] = f));
  else f = t[9];
  return f;
}
function vHl(e, { verbose: t, theme: n }) {
  let { command: r } = e;
  if (!r) return null;
  let o = T8e(r);
  if (o) return t ? o.filePath : kd(o.filePath);
  if (!t) {
    let s = r.split(`
`);
    if (Ns()) {
      let l = PNn(r);
      if (l) return l.length > iKt ? l.slice(0, iKt) + "\u2026" : l;
    }
    let i = s.length > HHl,
      a = r.length > iKt;
    if (i || a) {
      let l = r;
      if (i)
        l = s.slice(0, HHl).join(`
`);
      if (l.length > iKt) l = l.slice(0, iKt);
      return rz.jsxs(w, {
        children: [l.trim(), "\u2026"],
      });
    }
  }
  return r;
}
function wHl(e, { verbose: t, tools: n, terminalSize: r, inProgressToolCallCount: o }) {
  let s = e.at(-1);
  if (!s || !s.data)
    return rz.jsx(qn, {
      height: 1,
      children: rz.jsx(w, {
        dimColor: true,
        children: "Running\u2026",
      }),
    });
  let i = s.data;
  return rz.jsx(qpt, {
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
function CHl() {
  return rz.jsx(qn, {
    height: 1,
    children: rz.jsx(w, {
      dimColor: true,
      children: "Waiting\u2026",
    }),
  });
}
function IHl(e, t, { verbose: n, theme: r, tools: o, style: s }) {
  let a = t.at(-1)?.data?.timeoutMs;
  return rz.jsx(l6e, {
    content: e,
    verbose: n,
    timeoutMs: a,
  });
}
function xHl(e, { verbose: t, progressMessagesForMessage: n, tools: r }) {
  return rz.jsx(AT, {
    result: e,
    verbose: t,
  });
}
var THl,
  rz,
  HHl = 2,
  iKt = 160;
