// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module C5
// matched 2.1.88 source: src/utils/renderOptions.ts
// class=partial  jaccard=0.1514  score=0.2044  fileCov=0.3685
// note: low-confidence suggestion: src/utils/renderOptions.ts; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var C5 = E(() => {
  ft();
  Gho();
  S4n();
  Who();
  fd();
  H4n();
  C4n();
  uo();
  tne();
  jDe();
  oNa = R(lt(), 1), sNa = R(rt(), 1), jre = R(rt(), 1), NWt = R(se(), 1), tMp = (nbe(), ro(eqi)).VoiceProvider, rNa = sNa.createContext(!1);
});
var I4n = {};
_t(I4n, {
  getBaseRenderOptions: () => getBaseRenderOptions
});
function rMp() {
  if (tPe !== null) return tPe;
  if (process.stdin.isTTY) {
    tPe = void 0;
    return;
  }
  if (ut(!1)) {
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
    return qJe(t), t.on("error", n => {
      G("tengu_tty_stream_error", LM(n)), T(`/dev/tty stream error: ${n}`, {
        level: "debug"
      });
    }), t.isTTY = !0, tPe = t, tPe;
  } catch (e) {
    T(`Could not open /dev/tty for stdin override: ${e}`, {
      level: "error"
    }), tPe = void 0;
    return;
  }
}
function getBaseRenderOptions(e = !1) {
  let t = rMp(),
    n = {
      exitOnCtrlC: e
    };
  if (t) n.stdin = t;
  return n.isScreenReaderEnabled = UD(), n;
}
var aNa,
  lNa,
  tPe = null;