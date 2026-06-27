// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ozo
// matched 2.1.88 source: src/utils/asciicast.ts
// class=modified  jaccard=0.5818  score=0.9444  fileCov=0.6024
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: renameRecordingForSession, installAsciicastRecorder, getSessionRecordingPaths, getRecordFilePath, flushAsciicastRecorder, _resetRecordingStateForTesting
function getRecordFilePath() {
  if (Zz.filePath !== null) return Zz.filePath;
  return null;
}
function Nhm() {
  ((Zz.filePath = null), (Zz.timestamp = 0));
}
function getSessionRecordingPaths() {
  let e = Rt(),
    t = C3.join(tr(), "projects"),
    n = C3.join(t, LE(yr()));
  try {
    let r = qt().readdirSync(n);
    return (typeof r[0] === "string" ? r : r.map((i) => i.name))
      .filter((i) => i.startsWith(e) && i.endsWith(".cast"))
      .sort()
      .map((i) => C3.join(n, i));
  } catch {
    return [];
  }
}
async function renameRecordingForSession() {
  let e = Zz.filePath;
  if (!e || Zz.timestamp === 0) return;
  let t = C3.join(tr(), "projects"),
    n = C3.join(t, LE(yr())),
    r = C3.join(n, `${Rt()}-${Zz.timestamp}.cast`);
  if (e === r) return;
  await Yen?.flush();
  let o = C3.basename(e),
    s = C3.basename(r);
  try {
    (await apr.rename(e, r),
      (Zz.filePath = r),
      T(`[asciicast] Renamed recording: ${o} \u2192 ${s}`));
  } catch {
    T(`[asciicast] Failed to rename recording from ${o} to ${s}`);
  }
}
function LEc() {
  let e = process.stdout.columns || 80,
    t = process.stdout.rows || 24;
  return {
    cols: e,
    rows: t,
  };
}
async function flushAsciicastRecorder() {
  await Yen?.flush();
}
function installAsciicastRecorder() {
  let e = getRecordFilePath();
  if (!e) return;
  let { cols: t, rows: n } = LEc(),
    r = performance.now(),
    o = De({
      version: 2,
      width: t,
      height: n,
      timestamp: Math.floor(Date.now() / 1000),
      env: {
        SHELL: process.env.SHELL || "",
        TERM: process.env.TERM || "",
      },
    });
  try {
    qt().mkdirSync(C3.dirname(e));
  } catch {}
  qt().appendFileSync(
    e,
    o +
      `
`,
    {
      mode: 384,
    },
  );
  let s = Promise.resolve(),
    i = SJe({
      writeFn(c) {
        let u = Zz.filePath;
        if (!u) return;
        s = s.then(() => apr.appendFile(u, c)).catch(() => {});
      },
      flushIntervalMs: 500,
      maxBufferSize: 50,
      maxBufferBytes: 10485760,
    }),
    a = process.stdout.write.bind(process.stdout);
  process.stdout.write = function (c, u, d) {
    let p = (performance.now() - r) / 1000,
      f = typeof c === "string" ? c : Buffer.from(c).toString("utf-8");
    if (
      (i.write(
        De([p, "o", f]) +
          `
`,
      ),
      typeof u === "function")
    )
      return a(c, u);
    return a(c, u, d);
  };
  function l() {
    let c = (performance.now() - r) / 1000,
      { cols: u, rows: d } = LEc();
    i.write(
      De([c, "r", `${u}x${d}`]) +
        `
`,
    );
  }
  (process.stdout.on("resize", l),
    (Yen = {
      async flush() {
        (i.flush(), await s);
      },
      async dispose() {
        (i.dispose(),
          await s,
          process.stdout.removeListener("resize", l),
          (process.stdout.write = a));
      },
    }),
    Ci(async () => {
      (await Yen?.dispose(), (Yen = null));
    }),
    T(`[asciicast] Recording to ${e}`));
}
var apr,
  C3,
  Zz,
  Yen = null;
