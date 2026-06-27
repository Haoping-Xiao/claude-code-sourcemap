// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IGo
// matched 2.1.88 source: src/services/voice.ts
// class=modified  jaccard=0.5305  score=0.691  fileCov=0.6955
// note: deminified; 14 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var IGo = E(() => {
  Hp();
  Rc();
  oo();
  je();
  fn();
  At();
  Gx();
  u9();
  qd();
  Mh();
  Jt();
  Un();
  ((fTe = R(require("ws"))),
    (vGo = {
      safety: 5000,
      noData: 1500,
    }));
});
var nnc = {};
_t(nnc, {
  writeNativePlaybackData: () => writeNativePlaybackData,
  stopNativeRecording: () => stopNativeRecording,
  stopNativePlayback: () => stopNativePlayback,
  startNativeRecording: () => startNativeRecording,
  startNativePlayback: () => startNativePlayback,
  microphoneAuthorizationStatus: () => microphoneAuthorizationStatus,
  isNativeRecordingActive: () => isNativeRecordingActive,
  isNativePlaying: () => isNativePlaying,
  isNativeAudioAvailable: () => isNativeAudioAvailable,
});
function mTe() {
  if (tnc) return pQt;
  tnc = !0;
  let e = "linux";
  if (e !== "darwin" && e !== "linux" && e !== "win32") return null;
  try {
    return ((pQt = fes()), pQt);
  } catch {}
  let t = `x64-${e}`,
    n = [
      `./vendor/audio-capture/${t}/audio-capture.node`,
      `../audio-capture/${t}/audio-capture.node`,
    ];
  for (let r of n)
    try {
      return ((pQt = require(r)), pQt);
    } catch {}
  return null;
}
function isNativeAudioAvailable() {
  return mTe() !== null;
}
function startNativeRecording(e, t) {
  let n = mTe();
  if (!n) return !1;
  return n.startRecording(e, t);
}
function stopNativeRecording() {
  let e = mTe();
  if (!e) return;
  e.stopRecording();
}
function isNativeRecordingActive() {
  let e = mTe();
  if (!e) return !1;
  return e.isRecording();
}
function startNativePlayback(e, t) {
  let n = mTe();
  if (!n) return !1;
  return n.startPlayback(e, t);
}
function writeNativePlaybackData(e) {
  let t = mTe();
  if (!t) return;
  t.writePlaybackData(e);
}
function stopNativePlayback() {
  let e = mTe();
  if (!e) return;
  e.stopPlayback();
}
function isNativePlaying() {
  let e = mTe();
  if (!e) return !1;
  return e.isPlaying();
}
function microphoneAuthorizationStatus() {
  let e = mTe();
  if (!e || !e.microphoneAuthorizationStatus) return 0;
  return e.microphoneAuthorizationStatus();
}
var pQt = null,
  tnc = !1;
var fQt = {};
_t(fQt, {
  stopRecording: () => stopRecording,
  startRecording: () => startRecording,
  requestMicrophonePermission: () => requestMicrophonePermission,
  checkVoiceDependencies: () => checkVoiceDependencies,
  checkRecordingAvailability: () => checkRecordingAvailability,
  _resetArecordProbeForTesting: () => K7f,
  _resetAlsaCardsForTesting: () => Y7f,
});
function iar() {
  return (
    (rnc ??= (async () => {
      let e = Date.now(),
        t = await Promise.resolve().then(() => nnc);
      return (
        t.isNativeAudioAvailable(),
        (xGo = t),
        T(`[voice] audio-capture-napi loaded in ${Date.now() - e}ms`),
        t
      );
    })()),
    rnc
  );
}
async function gTe(e) {
  return (
    (
      await $n(e, ["--version"], {
        timeout: 3000,
        useCwd: !1,
      })
    ).code === 0
  );
}
function inc() {
  return (
    (kGo ??= new Promise((e) => {
      let t = sar.spawn(
          "arecord",
          ["-f", "S16_LE", "-r", String(LGo), "-c", String(DGo), "-t", "raw", "/dev/null"],
          {
            stdio: ["ignore", "ignore", "pipe"],
            windowsHide: !0,
          },
        ),
        n = "";
      t.stderr?.on("data", (o) => {
        n += o.toString();
      });
      let r = setTimeout(
        (o, s) => {
          (o.kill("SIGTERM"),
            s({
              ok: !0,
              stderr: "",
            }));
        },
        150,
        t,
        e,
      );
      (t.once("close", (o) => {
        (clearTimeout(r),
          e({
            ok: o === 0,
            stderr: n.trim(),
          }));
      }),
        t.once("error", () => {
          (clearTimeout(r),
            e({
              ok: !1,
              stderr: "arecord: command not found",
            }));
        }));
    })),
    kGo
  );
}
function K7f() {
  kGo = null;
}
function PGo() {
  return (
    (RGo ??= snc.readFile("/proc/asound/cards", "utf8").then(
      (e) => {
        let t = e.trim();
        return t !== "" && !t.includes("no soundcards");
      },
      () => !1,
    )),
    RGo
  );
}
function Y7f() {
  RGo = null;
}
async function anc() {
  if (await gTe("apt-get"))
    return {
      cmd: "sudo",
      args: ["apt-get", "install", "-y", "sox"],
      displayCommand: "sudo apt-get install sox",
    };
  if (await gTe("dnf"))
    return {
      cmd: "sudo",
      args: ["dnf", "install", "-y", "sox"],
      displayCommand: "sudo dnf install sox",
    };
  if (await gTe("pacman"))
    return {
      cmd: "sudo",
      args: ["pacman", "-S", "--noconfirm", "sox"],
      displayCommand: "sudo pacman -S sox",
    };
  return null;
}
async function checkVoiceDependencies() {
  if ((await iar()).isNativeAudioAvailable() && (await PGo()))
    return {
      available: !0,
      missing: [],
      installCommand: null,
    };
  if (await gTe("arecord"))
    return {
      available: !0,
      missing: [],
      installCommand: null,
    };
  let t = [];
  if (!(await gTe("sox"))) t.push("sox (rec command)");
  let n = t.length > 0 ? await anc() : null;
  return {
    available: t.length === 0,
    missing: t,
    installCommand: n?.displayCommand ?? null,
  };
}
async function requestMicrophonePermission() {
  if (!(await iar()).isNativeAudioAvailable()) return !0;
  if (
    await startRecording(
      (n) => {},
      () => {},
      {
        silenceDetection: !1,
      },
    )
  )
    return (stopRecording(), !0);
  return !1;
}
async function checkRecordingAvailability() {
  if (nv() || ut(process.env.CLAUDE_CODE_REMOTE))
    return {
      available: !1,
      reason: `Voice mode requires microphone access, but no audio device is available in this environment.

To use voice mode, run Claude Code locally instead.`,
    };
  if ((await iar()).isNativeAudioAvailable() && (await PGo()))
    return {
      available: !0,
      reason: null,
    };
  let t =
    `Voice mode could not find a working audio recorder in WSL.

` +
    `WSL2 with WSLg provides audio via PulseAudio \u2014 install SoX with its PulseAudio backend (sudo apt install sox libsox-fmt-pulse) so Claude Code can record through it.

` +
    "If WSLg is not available (for example WSL1), run Claude Code in native Windows instead.";
  if (await gTe("arecord")) {
    let r = await inc();
    if (r.ok)
      return {
        available: !0,
        reason: null,
      };
    T(`[voice] arecord probe failed: ${r.stderr}`);
  }
  let n = await gTe("sox");
  if (n && (await gTe("rec")))
    return {
      available: !0,
      reason: null,
    };
  if (Vt() === "wsl")
    return {
      available: !1,
      reason: t,
    };
  if (!n) {
    let r = await anc();
    return {
      available: !1,
      reason: r
        ? `Voice mode requires SoX for audio recording. Install it with: ${r.displayCommand}`
        : `Voice mode requires SoX for audio recording. Install SoX manually:
  macOS: brew install sox
  Ubuntu/Debian: sudo apt-get install sox
  Fedora: sudo dnf install sox`,
    };
  }
  return {
    available: !1,
    reason: `Voice mode requires a microphone, but SoX could not open an audio capture device.

This usually means the host has no microphone (for example, a remote server). Run Claude Code on a machine with a microphone to use voice input.`,
  };
}
async function startRecording(e, t, n) {
  T("[voice] startRecording called, platform=linux");
  let r = await iar(),
    o = r.isNativeAudioAvailable() && (await PGo()),
    s = n?.silenceDetection !== !1;
  if (o) {
    if (HHt || r.isNativeRecordingActive()) (r.stopNativeRecording(), (HHt = !1));
    if (
      r.startNativeRecording(
        (a) => {
          e(a);
        },
        () => {
          if (s) ((HHt = !1), t());
        },
      )
    )
      return ((HHt = !0), !0);
  }
  if ((await gTe("arecord")) && (await inc()).ok) return eXf(e, t);
  return Z7f(e, t, n);
}
function Z7f(e, t, n) {
  let r = n?.silenceDetection !== !1,
    o = [
      "-q",
      "--buffer",
      "1024",
      "-t",
      "raw",
      "-r",
      String(LGo),
      "-e",
      "signed",
      "-b",
      "16",
      "-c",
      String(DGo),
      "-",
    ];
  if (r) o.push("silence", "1", "0.1", onc, "1", z7f, onc);
  let s = sar.spawn("rec", o, {
    stdio: ["pipe", "pipe", "pipe"],
    windowsHide: !0,
  });
  return (
    (hTe = s),
    s.stdout?.on("data", (i) => {
      e(i);
    }),
    s.stderr?.on("data", () => {}),
    s.on("close", () => {
      ((hTe = null), t());
    }),
    s.on("error", (i) => {
      (T(`[voice] SoX rec spawn failed: ${i instanceof Error ? i.message : String(i)}`, {
        level: "error",
      }),
        (hTe = null),
        t());
    }),
    !0
  );
}
function eXf(e, t) {
  let n = ["-f", "S16_LE", "-r", String(LGo), "-c", String(DGo), "-t", "raw", "-q", "-"],
    r = sar.spawn("arecord", n, {
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: !0,
    });
  return (
    (hTe = r),
    r.stdout?.on("data", (o) => {
      e(o);
    }),
    r.stderr?.on("data", () => {}),
    r.on("close", () => {
      ((hTe = null), t());
    }),
    r.on("error", (o) => {
      (T(`[voice] arecord recorder spawn error: ${o}`, {
        level: "error",
      }),
        (hTe = null),
        t());
    }),
    !0
  );
}
function stopRecording() {
  if (HHt && xGo) {
    (xGo.stopNativeRecording(), (HHt = !1));
    return;
  }
  if (hTe) (hTe.kill("SIGTERM"), (hTe = null));
}
var sar,
  snc,
  xGo = null,
  rnc = null,
  LGo = 16000,
  DGo = 1,
  z7f = "2.0",
  onc = "3%",
  kGo = null,
  RGo = null,
  hTe = null,
  HHt = !1;
