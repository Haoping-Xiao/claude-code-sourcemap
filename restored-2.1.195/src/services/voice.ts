// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IGo
// matched 2.1.88 source: src/services/voice.ts
// class=modified  jaccard=0.4621  score=0.6432  fileCov=0.6214
// note: deminified; 19 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: writeNativePlaybackData, stopNativeRecording, stopNativePlayback, startNativeRecording, startNativePlayback, microphoneAuthorizationStatus, isNativeRecordingActive, isNativePlaying, isNativeAudioAvailable, stopRecording, startRecording, requestMicrophonePermission, checkVoiceDependencies, checkRecordingAvailability, _resetArecordProbeForTesting, _resetAlsaCardsForTesting
// [unwrapped __esm module IGo] deps: axios/lib/axios.js, constants/oauth.ts, utils/http.ts, utils/debug.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/slashCommandParsing.ts, utils/mtls.ts, utils/log.ts, utils/proxy.ts, utils/fsOperations.ts, services/analytics/growthbook.ts
((fTe = R(require("ws"))),
  (vGo = {
    safety: 5000,
    noData: 1500,
  }));
var nnc = {};
function mTe() {
  if (tnc) return pQt;
  tnc = true;
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
  if (!n) return false;
  return n.startRecording(e, t);
}
function stopNativeRecording() {
  let e = mTe();
  if (!e) return;
  e.stopRecording();
}
function isNativeRecordingActive() {
  let e = mTe();
  if (!e) return false;
  return e.isRecording();
}
function startNativePlayback(e, t) {
  let n = mTe();
  if (!n) return false;
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
  if (!e) return false;
  return e.isPlaying();
}
function microphoneAuthorizationStatus() {
  let e = mTe();
  if (!e || !e.microphoneAuthorizationStatus) return 0;
  return e.microphoneAuthorizationStatus();
}
var pQt = null,
  tnc = false;
function loadAudioNapi() {
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
        useCwd: false,
      })
    ).code === 0
  );
}
function probeArecord() {
  return (
    (kGo ??= new Promise((e) => {
      let t = sar.spawn(
          "arecord",
          ["-f", "S16_LE", "-r", String(LGo), "-c", String(DGo), "-t", "raw", "/dev/null"],
          {
            stdio: ["ignore", "ignore", "pipe"],
            windowsHide: true,
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
              ok: true,
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
              ok: false,
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
function linuxHasAlsaCards() {
  return (
    (RGo ??= snc.readFile("/proc/asound/cards", "utf8").then(
      (e) => {
        let t = e.trim();
        return t !== "" && !t.includes("no soundcards");
      },
      () => false,
    )),
    RGo
  );
}
function Y7f() {
  RGo = null;
}
async function detectPackageManager() {
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
  if ((await loadAudioNapi()).isNativeAudioAvailable() && (await linuxHasAlsaCards()))
    return {
      available: true,
      missing: [],
      installCommand: null,
    };
  if (await gTe("arecord"))
    return {
      available: true,
      missing: [],
      installCommand: null,
    };
  let t = [];
  if (!(await gTe("sox"))) t.push("sox (rec command)");
  let n = t.length > 0 ? await detectPackageManager() : null;
  return {
    available: t.length === 0,
    missing: t,
    installCommand: n?.displayCommand ?? null,
  };
}
async function requestMicrophonePermission() {
  if (!(await loadAudioNapi()).isNativeAudioAvailable()) return true;
  if (
    await startRecording(
      (n) => {},
      () => {},
      {
        silenceDetection: false,
      },
    )
  )
    return (stopRecording(), true);
  return false;
}
async function checkRecordingAvailability() {
  if (nv() || ut(process.env.CLAUDE_CODE_REMOTE))
    return {
      available: false,
      reason: `Voice mode requires microphone access, but no audio device is available in this environment.

To use voice mode, run Claude Code locally instead.`,
    };
  if ((await loadAudioNapi()).isNativeAudioAvailable() && (await linuxHasAlsaCards()))
    return {
      available: true,
      reason: null,
    };
  let t =
    `Voice mode could not find a working audio recorder in WSL.

` +
    `WSL2 with WSLg provides audio via PulseAudio \u2014 install SoX with its PulseAudio backend (sudo apt install sox libsox-fmt-pulse) so Claude Code can record through it.

` +
    "If WSLg is not available (for example WSL1), run Claude Code in native Windows instead.";
  if (await gTe("arecord")) {
    let r = await probeArecord();
    if (r.ok)
      return {
        available: true,
        reason: null,
      };
    T(`[voice] arecord probe failed: ${r.stderr}`);
  }
  let n = await gTe("sox");
  if (n && (await gTe("rec")))
    return {
      available: true,
      reason: null,
    };
  if (Vt() === "wsl")
    return {
      available: false,
      reason: t,
    };
  if (!n) {
    let r = await detectPackageManager();
    return {
      available: false,
      reason: r
        ? `Voice mode requires SoX for audio recording. Install it with: ${r.displayCommand}`
        : `Voice mode requires SoX for audio recording. Install SoX manually:
  macOS: brew install sox
  Ubuntu/Debian: sudo apt-get install sox
  Fedora: sudo dnf install sox`,
    };
  }
  return {
    available: false,
    reason: `Voice mode requires a microphone, but SoX could not open an audio capture device.

This usually means the host has no microphone (for example, a remote server). Run Claude Code on a machine with a microphone to use voice input.`,
  };
}
async function startRecording(e, t, n) {
  T("[voice] startRecording called, platform=linux");
  let r = await loadAudioNapi(),
    o = r.isNativeAudioAvailable() && (await linuxHasAlsaCards()),
    s = n?.silenceDetection !== false;
  if (o) {
    if (HHt || r.isNativeRecordingActive()) (r.stopNativeRecording(), (HHt = false));
    if (
      r.startNativeRecording(
        (a) => {
          e(a);
        },
        () => {
          if (s) ((HHt = false), t());
        },
      )
    )
      return ((HHt = true), true);
  }
  if ((await gTe("arecord")) && (await probeArecord()).ok) return eXf(e, t);
  return startSoxRecording(e, t, n);
}
function startSoxRecording(onData, onEnd, options) {
  let r = options?.silenceDetection !== false,
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
  let child = sar.spawn("rec", o, {
    stdio: ["pipe", "pipe", "pipe"],
    windowsHide: true,
  });
  return (
    (hTe = child),
    child.stdout?.on("data", (i) => {
      onData(i);
    }),
    child.stderr?.on("data", () => {}),
    child.on("close", () => {
      ((hTe = null), onEnd());
    }),
    child.on("error", (i) => {
      (T(`[voice] SoX rec spawn failed: ${i instanceof Error ? i.message : String(i)}`, {
        level: "error",
      }),
        (hTe = null),
        onEnd());
    }),
    true
  );
}
function eXf(e, t) {
  let n = ["-f", "S16_LE", "-r", String(LGo), "-c", String(DGo), "-t", "raw", "-q", "-"],
    r = sar.spawn("arecord", n, {
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: true,
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
    true
  );
}
function stopRecording() {
  if (HHt && xGo) {
    (xGo.stopNativeRecording(), (HHt = false));
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
  HHt = false;
