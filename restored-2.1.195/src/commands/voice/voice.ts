// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mQt
// matched 2.1.88 source: src/commands/voice/voice.ts
// class=modified  jaccard=0.4476  score=0.6814  fileCov=0.5661
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module mQt] deps: je, fn, Bi, Is
((sar = require("child_process")), (snc = require("fs/promises")));
function nXf(e) {
  let t = e.trim().toLowerCase();
  if (t === "") return;
  if (t === "hold" || t === "tap" || t === "off") return t;
  return "invalid";
}
var tXf = 2,
  call = async (e) => {
    if (!AHt()) {
      if (!eS())
        return {
          type: "text",
          value: "Voice mode requires a Claude.ai account. Please run /login to sign in.",
        };
      let S = dW("allow_voice_mode", "Voice mode", "is");
      if (S)
        return {
          type: "text",
          value: S,
        };
      return {
        type: "text",
        value: "Voice mode is not available.",
      };
    }
    let t = Dr(),
      n = uQt(t),
      r = nXf(e);
    if (r === "invalid")
      return {
        type: "text",
        value: `Unknown mode: "${e.trim()}". Use hold, tap, or off.`,
      };
    if (r === "off" || (r === void 0 && n)) {
      if (
        io("userSettings", {
          voiceEnabled: !1,
          voice: {
            ...t.voice,
            enabled: !1,
          },
        }).error
      )
        return {
          type: "text",
          value: "Failed to update settings. Check your settings file for syntax errors.",
        };
      return (
        G("tengu_voice_toggled", {
          enabled: !1,
        }),
        {
          type: "text",
          value: "Voice mode disabled.",
        }
      );
    }
    let { isVoiceStreamAvailable: o } = await Promise.resolve().then(() => (IGo(), enc)),
      { checkRecordingAvailability: s } = await Promise.resolve().then(() => (mQt(), fQt)),
      i = await s();
    if (!i.available)
      return {
        type: "text",
        value: i.reason ?? "Voice mode is not available in this environment.",
      };
    if (!o())
      return {
        type: "text",
        value: "Voice mode requires a Claude.ai account. Please run /login to sign in.",
      };
    let { checkVoiceDependencies: a, requestMicrophonePermission: l } =
        await Promise.resolve().then(() => (mQt(), fQt)),
      c = await a();
    if (!c.available)
      return {
        type: "text",
        value: `No audio recording tool found.${
          c.installCommand
            ? `
Install audio recording tools? Run: ${c.installCommand}`
            : `
Install SoX manually for audio recording.`
        }`,
      };
    if (!(await l())) {
      let S;
      return (
        (S = "your system's audio settings"),
        {
          type: "text",
          value: `Microphone access is denied. To enable it, go to ${S}, then run /voice again.`,
        }
      );
    }
    let u = r === "hold" || r === "tap" ? r : (t.voice?.mode ?? "hold");
    if (
      io("userSettings", {
        voiceEnabled: !0,
        voice: {
          ...t.voice,
          enabled: !0,
          mode: u,
        },
      }).error
    )
      return {
        type: "text",
        value: "Failed to update settings. Check your settings file for syntax errors.",
      };
    G("tengu_voice_toggled", {
      enabled: !0,
      tap_mode: u === "tap",
    });
    let p = eC("voice:pushToTalk", "Chat", "space"),
      f =
        u === "tap"
          ? `Tap ${p} (with input empty) to start, tap again to send.`
          : `Hold ${p} to record.`,
      m = iJe(t.language),
      g = Dt(),
      h = g.voiceLangHintLastLanguage !== m.code,
      y = h ? 0 : (g.voiceLangHintShownCount ?? 0),
      b = !m.fellBackFrom && y < tXf,
      _ = "";
    if (m.fellBackFrom)
      _ = ` Note: "${m.fellBackFrom}" is not a supported dictation language; using English. Change it via /config.`;
    else if (b) _ = ` Dictation language: ${m.code} (/config to change).`;
    if (h || b)
      gn((S) => ({
        ...S,
        voiceLangHintShownCount: y + (b ? 1 : 0),
        voiceLangHintLastLanguage: m.code,
      }));
    return {
      type: "text",
      value: `Voice mode enabled (${u}). ${f}${_}`,
    };
  };
