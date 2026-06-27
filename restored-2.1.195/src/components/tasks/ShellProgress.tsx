// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ljo
// matched 2.1.88 source: src/components/tasks/ShellProgress.tsx
// class=modified  jaccard=0.359  score=0.5879  fileCov=0.4798
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ljo] deps: Xa, w4, Ye, Mne, m1, Ko
((lsr = R(lt(), 1)), (ijo = R(rt(), 1)), ($H = R(se(), 1)));
function TaskStatusText(e) {
  let t = cjo.c(4),
    { status: n, label: r, suffix: o } = e,
    s = r ?? n,
    i =
      n === "completed"
        ? "success"
        : n === "failed"
          ? "error"
          : n === "killed"
            ? "warning"
            : void 0,
    a;
  if (t[0] !== i || t[1] !== s || t[2] !== o)
    ((a = iYe.jsxs(w, {
      color: i,
      dimColor: true,
      children: ["(", s, o, ")"],
    })),
      (t[0] = i),
      (t[1] = s),
      (t[2] = o),
      (t[3] = a));
  else a = t[3];
  return a;
}
function ShellProgress(e) {
  let t = cjo.c(4),
    { shell: n } = e;
  switch (n.status) {
    case "completed": {
      let r;
      if (t[0] === Symbol.for("react.memo_cache_sentinel"))
        ((r = iYe.jsx(TaskStatusText, {
          status: "completed",
          label: "done",
        })),
          (t[0] = r));
      else r = t[0];
      return r;
    }
    case "failed": {
      let r;
      if (t[1] === Symbol.for("react.memo_cache_sentinel"))
        ((r = iYe.jsx(TaskStatusText, {
          status: "failed",
          label: "error",
        })),
          (t[1] = r));
      else r = t[1];
      return r;
    }
    case "killed": {
      let r;
      if (t[2] === Symbol.for("react.memo_cache_sentinel"))
        ((r = iYe.jsx(TaskStatusText, {
          status: "killed",
          label: "stopped",
        })),
          (t[2] = r));
      else r = t[2];
      return r;
    }
    case "running":
    case "pending": {
      let r;
      if (t[3] === Symbol.for("react.memo_cache_sentinel"))
        ((r = iYe.jsx(TaskStatusText, {
          status: "running",
        })),
          (t[3] = r));
      else r = t[3];
      return r;
    }
  }
}
var cjo, iYe;
