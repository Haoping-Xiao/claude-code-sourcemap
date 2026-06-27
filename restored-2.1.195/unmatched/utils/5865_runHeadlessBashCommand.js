// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AXo
// matched 2.1.88 source: src/utils/Shell.ts
// class=new  jaccard=0.0394  score=0.2756  fileCov=0.044
// note: nearest: src/utils/Shell.ts (0.0394); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var AXo = E(() => {
  Mm();
  wr();
  At();
  kt();
  c_();
  P3 = require("fs/promises"), XUc = require("path"), {
    dirname: zUc,
    isAbsolute: Lmr,
    join: ILm,
    normalize: JUc,
    relative: QUc,
    sep: ZUc
  } = XUc.posix;
  SXo = tFc(Oe.CLAUDE_STAGE_FILE_ROOT);
});
var oFc = {};
_t(oFc, {
  runHeadlessBashCommand: () => runHeadlessBashCommand
});
async function runHeadlessBashCommand(e) {
  let {
      command: t
    } = e,
    n = e.cwd ?? $t(),
    {
      file: r,
      args: o
    } = mur() === "powershell" ? {
      file: "pwsh",
      args: ["-NoProfile", "-Command", t]
    } : {
      file: "/bin/sh",
      args: ["-c", t]
    },
    {
      stdout: s,
      stderr: i,
      code: a,
      error: l
    } = await Gr(r, o, {
      abortSignal: e.abortSignal,
      cwd: n,
      preserveOutputOnError: true
    }),
    c = l && !l.startsWith(`Command failed with exit code ${a}`) ? l : "";
  if (c) Le("input_remote_bash", "spawn_failed");else xe("input_remote_bash");
  return {
    outputUuid: rFc.randomUUID(),
    outputText: `<${Q0t}>${ec(s)}</${Q0t}><${wae}>${ec(i || c)}</${wae}><${Pkr}>${a}</${Pkr}>`,
    exitCode: a
  };
}
var rFc;