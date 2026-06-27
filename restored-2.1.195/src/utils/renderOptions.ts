// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C5
// matched 2.1.88 source: src/utils/renderOptions.ts
// class=modified  jaccard=0.3326  score=0.4647  fileCov=0.5391
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: getBaseRenderOptions
// [unwrapped __esm module C5] deps: ft, Gho, S4n, Who, fd, H4n, C4n, uo, tne, jDe
((oNa = R(lt(), 1)),
  (sNa = R(rt(), 1)),
  (jre = R(rt(), 1)),
  (NWt = R(se(), 1)),
  (tMp = (nbe(), ro(eqi)).VoiceProvider),
  (rNa = sNa.createContext(false)));
var I4n = {};
function rMp() {
  if (tPe !== null) return tPe;
  if (process.stdin.isTTY) {
    tPe = void 0;
    return;
  }
  if (ut(false)) {
    tPe = void 0;
    return;
  }
  if (process.argv.includes("mcp")) {
    tPe = void 0;
    return;
  }
  try {
    let e = aNa.openSync("/dev/tty", "r"),
      t = new lNa.ReadStream(e);
    return (
      qJe(t),
      t.on("error", (n) => {
        (G("tengu_tty_stream_error", LM(n)),
          T(`/dev/tty stream error: ${n}`, {
            level: "debug",
          }));
      }),
      (t.isTTY = true),
      (tPe = t),
      tPe
    );
  } catch (e) {
    (T(`Could not open /dev/tty for stdin override: ${e}`, {
      level: "error",
    }),
      (tPe = void 0));
    return;
  }
}
function getBaseRenderOptions(e = false) {
  let t = rMp(),
    n = {
      exitOnCtrlC: e,
    };
  if (t) n.stdin = t;
  return ((n.isScreenReaderEnabled = UD()), n);
}
var aNa,
  lNa,
  tPe = null;
