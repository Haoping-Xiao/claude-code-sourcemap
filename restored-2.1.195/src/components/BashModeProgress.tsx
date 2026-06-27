// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gfc
// matched 2.1.88 source: src/components/BashModeProgress.tsx
// class=modified  jaccard=0.407  score=0.5591  fileCov=0.5994
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Wfc({ isNonInteractive: e, isMeta: t, callerSource: n }) {
  if (e) return "sdk";
  if (t) return "system";
  return n ?? "typed";
}
function BashModeProgress(t0) {
  let t = qfc.c(8),
    { input: n, progress: r, verbose: o } = t0,
    s = `<bash-input>${n}</bash-input>`,
    i;
  if (t[0] !== s)
    ((i = JZt.jsx(Wzn, {
      addMargin: false,
      param: {
        text: s,
        type: "text",
      },
    })),
      (t[0] = s),
      (t[1] = i));
  else i = t[1];
  let a;
  if (t[2] !== r || t[3] !== o)
    ((a = r
      ? JZt.jsx(qpt, {
          fullOutput: r.fullOutput,
          output: r.output,
          elapsedTimeSeconds: r.elapsedTimeSeconds,
          totalLines: r.totalLines,
          verbose: o,
        })
      : cl.renderToolUseProgressMessage?.([], {
          verbose: o,
          tools: [],
          terminalSize: void 0,
        })),
      (t[2] = r),
      (t[3] = o),
      (t[4] = a));
  else a = t[4];
  let l;
  if (t[5] !== i || t[6] !== a)
    ((l = JZt.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [i, a],
    })),
      (t[5] = i),
      (t[6] = a),
      (t[7] = l));
  else l = t[7];
  return l;
}
var qfc, JZt;
