// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rhc
// matched 2.1.88 source: src/components/PromptInput/VoiceIndicator.tsx
// class=partial  jaccard=0.2246  score=0.3426  fileCov=0.3946
// note: low-confidence suggestion: src/components/PromptInput/VoiceIndicator.tsx; dir inferred from dep-graph -> hooks; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rhc = E(() => {
  Ye();
  nk();
  lg();
  xhc = R(lt(), 1), xTt = R(rt(), 1), Qur = R(se(), 1);
});
var Lhc = {};
_t(Lhc, {
  VoiceWarmupHint: () => VoiceWarmupHint,
  VoiceIndicator: () => VoiceIndicator,
  VoiceCursorChar: () => VoiceCursorChar
});
function VoiceIndicator(e) {
  let t = kTt.c(2),
    n;
  if (t[0] !== e) n = qz.jsx(wdm, {
    ...e
  }), t[0] = e, t[1] = n;else n = t[1];
  return n;
}
function wdm(e) {
  let t = kTt.c(3),
    {
      voiceState: n
    } = e,
    r = Ht(Cdm);
  switch (n) {
    case "recording":
      {
        if (r === "tap") {
          let s;
          if (t[0] === Symbol.for("react.memo_cache_sentinel")) s = qz.jsxs(w, {
            children: [qz.jsxs(w, {
              color: "error",
              children: [gc, " REC"]
            }), qz.jsx(w, {
              dimColor: !0,
              children: " \xB7 tap to send"
            })]
          }), t[0] = s;else s = t[0];
          return s;
        }
        let o;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) o = qz.jsx(w, {
          dimColor: !0,
          children: "listening\u2026"
        }), t[1] = o;else o = t[1];
        return o;
      }
    case "processing":
      {
        let o;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) o = qz.jsx(Idm, {}), t[2] = o;else o = t[2];
        return o;
      }
    case "idle":
      return null;
  }
}
function Cdm(e) {
  return e.settings.voice?.mode ?? "hold";
}
function VoiceCursorChar() {
  let e = kTt.c(2),
    [, t] = aPn(),
    n;
  if (e[0] !== t) n = t ? qz.jsx(w, {
    color: t.hex,
    children: t.char
  }) : null, e[0] = t, e[1] = n;else n = e[1];
  return n;
}
function VoiceWarmupHint() {
  let e = kTt.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = qz.jsx(w, {
    dimColor: !0,
    children: "keep holding\u2026"
  }), e[0] = t;else t = e[0];
  return t;
}
function Idm() {
  let e = kTt.c(8),
    t = G_(),
    n = Mv(t.prefersReducedMotion),
    [r, o] = Kf(n ? null : 50);
  if (n) {
    let d;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) d = qz.jsx(w, {
      color: "warning",
      children: "Voice: processing\u2026"
    }), e[0] = d;else d = e[0];
    return d;
  }
  let s = o / 1000,
    i = (Math.sin(s * Math.PI * 2 / vdm) + 1) / 2,
    a;
  if (e[1] !== i) {
    let d = yb() ? GM(i) : i;
    a = qM(WM(Hdm, Tdm, d)), e[1] = i, e[2] = a;
  } else a = e[2];
  let l = a,
    c;
  if (e[3] !== l) c = qz.jsx(w, {
    color: l,
    children: "Voice: processing\u2026"
  }), e[3] = l, e[4] = c;else c = e[4];
  let u;
  if (e[5] !== r || e[6] !== c) u = qz.jsx(U, {
    ref: r,
    children: c
  }), e[5] = r, e[6] = c, e[7] = u;else u = e[7];
  return u;
}
var kTt,
  qz,
  Hdm,
  Tdm,
  vdm = 2;