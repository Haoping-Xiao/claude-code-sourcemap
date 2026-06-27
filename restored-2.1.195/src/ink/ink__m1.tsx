// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kLn
// matched 2.1.88 source: src/ink/ink.tsx
// class=modified (alt of src/ink/ink.tsx)  jaccard=0.0493  score=0.6888  fileCov=0.0504
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kLn] deps: KYr, uFi, signal-exit/dist/mjs/index.js, services/analytics/index.ts, native-ts/yoga-layout/index.ts, utils/debug.ts, utils/debug.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/sequential.ts, utils/platform.ts, tools/SkillTool/prompt.ts, services/teamMemorySync/secretScanner.ts, ink/colorize.ts, ink/terminal.ts, utils/earlyInput.ts, ink/components/App.tsx, Wit, ink/events/keyboard-event.ts, ink/events/focus-event.ts, ink/ink.tsx, ink/styles.ts, XGi, ink/dom.ts, HI, ink/log-update.ts, bidi-js/dist/bidi.js, ink/squash-text-nodes.ts, indent-string/index.js, ink/reconciler.ts, ink/dom.ts, ink/render-to-screen.ts, ink/renderer.ts, ink/ink.tsx, ink/searchHighlight.ts, ink/selection.ts, jWi, NBt, marked/lib/marked.esm.js, ink/useTerminalNotification.ts, ink/terminal.ts, semver/internal/lrucache.js, ink/termio/csi.ts, ink/clearTerminal.ts, ink/terminal.ts, utils/env.ts, ink/ink.tsx, utils/truncate.ts
((h8 = require("fs")),
  (qWi = R(nRn(), 1)),
  (JBt = require("util")),
  (xLn = R(se(), 1)),
  (lWd = UUi()),
  (cWd = Object.freeze({
    x: 0,
    y: 0,
    visible: false,
  })),
  (uWd = Object.freeze({
    type: "stdout",
    content: dH,
  })),
  (dWd = Object.freeze({
    type: "stdout",
    content: Jx + dH,
  })));
((mWd = [
  "log",
  "info",
  "debug",
  "dir",
  "dirxml",
  "count",
  "countReset",
  "group",
  "groupCollapsed",
  "groupEnd",
  "table",
  "time",
  "timeEnd",
  "timeLog",
]),
  (gWd = ["warn", "error", "trace"]));
async function zWi({
  stdout: e = process.stdout,
  stdin: t = process.stdin,
  stderr: n = process.stderr,
  exitOnCtrlC: r = true,
  patchConsole: o = true,
  onFrame: s,
  nativeCursor: i,
  isScreenReaderEnabled: a,
} = {}) {
  await Promise.resolve();
  let l = new uat({
    stdout: e,
    stdin: t,
    stderr: n,
    exitOnCtrlC: r,
    patchConsole: o,
    onFrame: s,
    nativeCursor: i,
    isScreenReaderEnabled: a,
  });
  return (
    Cu.set(e, l),
    {
      render: (c) => l.render(c),
      unmount: () => l.unmount(),
      waitUntilExit: () => l.waitUntilExit(),
    }
  );
}
var VWi,
  yWd = (e, t) => {
    let n = bWd(t),
      r = {
        stdout: process.stdout,
        stdin: process.stdin,
        stderr: process.stderr,
        exitOnCtrlC: true,
        patchConsole: true,
        ...n,
      },
      o = SWd(r.stdout, () => new uat(r));
    return (
      o.render(e),
      {
        rerender: o.render,
        unmount() {
          o.unmount();
        },
        waitUntilExit: o.waitUntilExit,
        cleanup: () => Cu.delete(r.stdout),
      }
    );
  },
  _Wd = async (e, t) => {
    await Promise.resolve();
    let n = yWd(e, t);
    return (
      T(`[render] first ink render: ${Math.round(process.uptime() * 1000)}ms since process start`),
      n
    );
  },
  RJr,
  bWd = (e = {}) => {
    if (e instanceof VWi.Stream)
      return {
        stdout: e,
        stdin: process.stdin,
      };
    return e;
  },
  SWd = (e, t) => {
    let n = Cu.get(e);
    if (!n) ((n = t()), Cu.set(e, n));
    return n;
  };
