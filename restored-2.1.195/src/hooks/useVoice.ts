// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Tc
// matched 2.1.88 source: src/hooks/useVoice.ts
// class=modified  jaccard=0.3569  score=0.5734  fileCov=0.4859
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: useVoice, computeLevel, FIRST_PRESS_FALLBACK_MS
// [unwrapped __esm module _Tc] deps: ft, sa
((pKo = require("path")),
  (ybm = [
    "MCP",
    "symlink",
    "grep",
    "regex",
    "localhost",
    "codebase",
    "TypeScript",
    "JSON",
    "OAuth",
    "webhook",
    "gRPC",
    "dotfiles",
    "subagent",
    "worktree",
  ]));
var HTc = {};
function Lpr() {
  PNe.push(Date.now());
}
function bbm() {
  ((PNe.length = 0), (Dpr = false));
}
function ETc(e) {
  return `voice_transcription_connection_failed_${e ?? "no_response"}`;
}
function computeLevel(e) {
  let t = e.length >> 1;
  if (t === 0) return 0;
  let n = 0;
  for (let s = 0; s < e.length - 1; s += 2) {
    let i = ((e[s] | (e[s + 1] << 8)) << 16) >> 16;
    n += i * i;
  }
  let r = Math.sqrt(n / t),
    o = Math.min(r / 2000, 1);
  return Math.sqrt(o);
}
function useVoice({ onTranscript: e, onError: t, enabled: n, focusMode: r, mode: o = "hold" }) {
  let [s, i] = th.useState("idle"),
    a = th.useRef("idle"),
    l = th.useRef(null),
    c = th.useRef(""),
    u = th.useRef(e),
    d = th.useRef(t),
    p = th.useRef(null),
    f = th.useRef(null),
    m = th.useRef(false),
    g = th.useRef(null),
    h = th.useRef(false),
    y = th.useRef(false),
    b = th.useRef(null),
    _ = th.useRef(null),
    S = th.useRef(null),
    A = th.useRef(false),
    v = th.useRef(0),
    C = th.useRef(0),
    x = th.useRef(false),
    I = th.useRef([]),
    k = th.useRef(false),
    D = th.useRef(0),
    P = th.useRef(0),
    O = th.useRef(false),
    L = th.useRef(false),
    M = th.useRef(null),
    N = th.useRef([]),
    B = Pg(),
    $ = Tat(),
    q = ks();
  ((u.current = e), (d.current = t));
  function W(re) {
    ((a.current = re),
      i(re),
      $((ee) => {
        if (ee.voiceState === re) return ee;
        return {
          ...ee,
          voiceState: re,
        };
      }));
  }
  let V = th.useCallback(() => {
    if ((C.current++, p.current)) (p.current(), (p.current = null));
    if (f.current) (f.current(), (f.current = null));
    if (g.current) (g.current(), (g.current = null));
    if (b.current) (b.current(), (b.current = null));
    if (_.current) (_.current(), (_.current = null));
    if (S.current) (S.current(), (S.current = null));
    if (((A.current = false), (y.current = false), XTe?.stopRecording(), l.current))
      (l.current.close(), (l.current = null));
    ((c.current = ""),
      (N.current = []),
      (I.current = []),
      $((re) => {
        if (re.voiceInterimTranscript === "" && !re.voiceAudioLevels.length) return re;
        return {
          ...re,
          voiceInterimTranscript: "",
          voiceAudioLevels: [],
        };
      }));
  }, [$]);
  function Y() {
    (T("[voice] finishRecording: stopping recording, transitioning to processing"), D.current++);
    let re = h.current;
    if (((h.current = false), (y.current = false), _.current)) (_.current(), (_.current = null));
    if (S.current) (S.current(), (S.current = null));
    (W("processing"), XTe?.stopRecording());
    let ee = Date.now() - v.current,
      ce = O.current,
      ae = x.current,
      de = P.current,
      Ee = L.current,
      me = M.current,
      pe = C.current,
      ge = () => C.current !== pe;
    (T("[voice] Recording stopped"),
      (l.current ? l.current.finalize() : Promise.resolve(void 0))
        .then(async (ie) => {
          if (ge()) return;
          if (
            ie === "no_data_timeout" &&
            ce &&
            Ee &&
            !re &&
            de === 0 &&
            c.current.trim() === "" &&
            !k.current &&
            I.current.length > 0
          ) {
            if (
              ((k.current = true),
              T(
                `[voice] Silent-drop detected (no_data_timeout, ${String(I.current.length)} chunks); replaying on fresh connection`,
              ),
              G("tengu_voice_silent_drop_replay", {
                recordingDurationMs: ee,
                chunkCount: I.current.length,
              }),
              l.current)
            )
              (l.current.close(), (l.current = null));
            let He = I.current;
            if ((await Nn(250), ge())) return;
            let ye = iJe(Dr().language),
              ue = await fKo();
            if (ge()) return;
            if (
              (await new Promise((we) => {
                oar(
                  {
                    onTranscript: (Ce, Ie) => {
                      if (ge()) return;
                      if (Ie && Ce.trim()) {
                        if (c.current) c.current += " ";
                        c.current += Ce.trim();
                      }
                    },
                    onError: () => we(),
                    onClose: () => {},
                    onReady: (Ce) => {
                      if (ge()) {
                        (Ce.close(), we());
                        return;
                      }
                      l.current = Ce;
                      let Ie = 32000,
                        Ve = [],
                        Ze = 0;
                      for (let Be of He) {
                        if (Ze > 0 && Ze + Be.length > Ie)
                          (Ce.send(Buffer.concat(Ve)), (Ve = []), (Ze = 0));
                        (Ve.push(Be), (Ze += Be.length));
                      }
                      if (Ve.length) Ce.send(Buffer.concat(Ve));
                      Ce.finalize().then(() => {
                        (Ce.close(), we());
                      });
                    },
                  },
                  {
                    language: ye.code,
                    keyterms: ue,
                  },
                ).then(
                  (Ce) => {
                    if (!Ce) we();
                  },
                  () => we(),
                );
              }),
              ge())
            )
              return;
          }
          I.current = [];
          let le = c.current.trim();
          if (
            (T(`[voice] Final transcript assembled (${String(le.length)} chars)`),
            G("tengu_voice_recording_completed", {
              transcriptChars: le.length + de,
              recordingDurationMs: ee,
              hadAudioSignal: ce,
              retried: ae,
              silentDropRetried: k.current,
              wsConnected: Ee,
              focusTriggered: re,
            }),
            l.current)
          )
            (l.current.close(), (l.current = null));
          if (le)
            (T(`[voice] Injecting transcript (${String(le.length)} chars)`),
              xe("voice_transcription"),
              u.current(le));
          else if (de === 0 && ee > 2000)
            if (!Ee) {
              if ((d.current("Voice connection failed. Check your network and try again."), me))
                Le("voice_transcription", ETc(me));
              else
                wGo().then((He) => {
                  Le("voice_transcription", ETc(`probe_${He}`));
                });
            } else if (!ce)
              (Le("voice_transcription", "voice_transcription_no_audio_signal"),
                d.current(
                  "No audio detected from microphone. Check that the correct input device is selected and that Claude Code has microphone access.",
                ));
            else
              (Le("voice_transcription", "voice_transcription_no_speech"),
                d.current("No speech detected."));
          ((c.current = ""),
            $((He) => {
              if (He.voiceInterimTranscript === "") return He;
              return {
                ...He,
                voiceInterimTranscript: "",
              };
            }),
            W("idle"));
        })
        .catch((ie) => {
          if ((Le("voice_transcription", "voice_transcription_finalize_failed"), ke(Zr(ie)), !ge()))
            W("idle");
        }));
  }
  th.useEffect(() => {
    if (n && !XTe)
      Promise.resolve()
        .then(() => (mQt(), fQt))
        .then((re) => {
          XTe = re;
        });
  }, [n]);
  function z() {
    if (b.current) b.current();
    b.current = q.setTimeout(() => {
      if (((b.current = null), a.current === "recording" && h.current))
        (T("[voice] Focus silence timeout \u2014 tearing down session"), (A.current = true), Y());
    }, Abm);
  }
  function K() {
    if (_.current) _.current();
    _.current = q.setTimeout(() => {
      if (((_.current = null), a.current === "recording" && y.current))
        (T("[voice] Toggle silence timeout \u2014 auto-finishing"), Y());
    }, Hbm);
  }
  function Z() {
    if (S.current) S.current();
    S.current = q.setTimeout(() => {
      if (((S.current = null), a.current === "recording" && y.current))
        (T("[voice] Toggle max-duration cap \u2014 auto-finishing"), Y());
    }, Tbm);
  }
  th.useEffect(() => {
    if (!n || !r) {
      if (h.current && a.current === "recording")
        (T("[voice] Focus mode disabled during recording, finishing"), Y());
      return;
    }
    let re = false;
    if (B && a.current === "idle" && !A.current) {
      let ee = () => {
        if (re || a.current !== "idle" || A.current) return;
        (T("[voice] Focus gained, starting recording session"), (h.current = true), J(), z());
      };
      if (XTe) ee();
      else
        Promise.resolve()
          .then(() => (mQt(), fQt))
          .then((ce) => {
            ((XTe = ce), ee());
          });
    } else if (!B) {
      if (((A.current = false), a.current === "recording"))
        (T("[voice] Focus lost, finishing recording"), Y());
    }
    return () => {
      re = true;
    };
  }, [n, r, B]);
  async function J() {
    if (!XTe) {
      (Le("voice_start", "voice_start_module_not_loaded"),
        d.current("Voice module not loaded yet. Try again in a moment."));
      return;
    }
    let re = Date.now();
    while (PNe.length > 0 && re - PNe[0] > bTc) PNe.shift();
    if (PNe.length < STc) Dpr = false;
    if (PNe.length >= STc) {
      if (!Dpr)
        ((Dpr = true),
          T(
            `[voice] circuit breaker: ${String(PNe.length)} early failures in ${String(bTc)}ms \u2014 suppressing new sessions until one succeeds`,
            {
              level: "error",
            },
          ),
          G("tengu_voice_circuit_breaker_tripped", {}),
          d.current(
            "Voice input is failing repeatedly and has been paused. Check your microphone and try again in a moment.",
          ));
      return;
    }
    (W("recording"),
      (v.current = Date.now()),
      (c.current = ""),
      (m.current = false),
      (O.current = false),
      (x.current = false),
      (k.current = false),
      (I.current = []),
      (P.current = 0),
      (L.current = false),
      (M.current = null));
    let ee = ++C.current,
      ce = await XTe.checkRecordingAvailability();
    if (!ce.available) {
      (T(`[voice] Recording not available: ${ce.reason ?? "unknown"}`),
        Le("voice_start", "voice_start_recording_unavailable"),
        d.current(ce.reason ?? "Audio recording is not available."),
        Lpr(),
        V(),
        W("idle"));
      return;
    }
    (T("[voice] Starting recording session, connecting voice stream"),
      $((ie) => {
        if (!ie.voiceError) return ie;
        return {
          ...ie,
          voiceError: null,
        };
      }));
    let ae = [];
    if (
      (T("[voice] startRecording: buffering audio while WebSocket connects"),
      (N.current = []),
      !(await XTe.startRecording(
        (ie) => {
          let le = Buffer.from(ie);
          if (!h.current) I.current.push(le);
          if (l.current) l.current.send(le);
          else ae.push(le);
          let He = computeLevel(ie);
          if (!O.current && He > 0.01) O.current = true;
          let ye = N.current;
          if (ye.length >= vbm) ye.shift();
          ye.push(He);
          let ue = [...ye];
          ((N.current = ue),
            $((we) => ({
              ...we,
              voiceAudioLevels: ue,
            })));
        },
        () => {
          if (a.current === "recording") Y();
        },
        {
          silenceDetection: false,
        },
      )))
    ) {
      (Le("voice_start", "voice_start_capture_failed"),
        T("[voice] Recording failed \u2014 no audio tool found", {
          level: "error",
        }),
        d.current("Failed to start audio capture. Check that your microphone is accessible."),
        Lpr(),
        V(),
        W("idle"),
        $((ie) => ({
          ...ie,
          voiceError: "Recording failed \u2014 no audio tool found",
        })));
      return;
    }
    let Ee = Dr().language,
      me = iJe(Ee);
    (xe("voice_start"),
      G("tengu_voice_recording_started", {
        focusTriggered: h.current,
        sttLanguage: me.code,
        sttLanguageIsDefault: !Ee?.trim(),
        sttLanguageFellBack: me.fellBackFrom !== void 0,
        systemLocaleLanguage: Cis(),
      }));
    let pe = false,
      ge = () => C.current !== ee,
      he = (ie) => {
        let le = D.current;
        oar(
          {
            onTranscript: (He, ye) => {
              if (ge()) return;
              if (
                ((pe = true),
                bbm(),
                T(`[voice] onTranscript: isFinal=${String(ye)} (${String(He.length)} chars)`),
                ye && He.trim())
              ) {
                if (h.current)
                  (T(
                    `[voice] Focus mode: flushing final transcript immediately (${String(He.trim().length)} chars)`,
                  ),
                    xe("voice_transcription"),
                    u.current(He.trim()),
                    (P.current += He.trim().length),
                    $((ue) => {
                      if (ue.voiceInterimTranscript === "") return ue;
                      return {
                        ...ue,
                        voiceInterimTranscript: "",
                      };
                    }),
                    (c.current = ""),
                    z());
                else {
                  if (y.current) K();
                  if (c.current) c.current += " ";
                  ((c.current += He.trim()),
                    T(`[voice] Accumulated final transcript (${String(c.current.length)} chars)`),
                    $((ue) => {
                      let we = c.current;
                      if (ue.voiceInterimTranscript === we) return ue;
                      return {
                        ...ue,
                        voiceInterimTranscript: we,
                      };
                    }));
                }
              } else if (!ye) {
                if (h.current) z();
                else if (y.current) K();
                let ue = He.trim(),
                  we = c.current ? c.current + (ue ? " " + ue : "") : ue;
                $((Ce) => {
                  if (Ce.voiceInterimTranscript === we) return Ce;
                  return {
                    ...Ce,
                    voiceInterimTranscript: we,
                  };
                });
              }
            },
            onError: (He, ye) => {
              if (ge()) {
                T(`[voice] ignoring onError from stale session: ${He}`);
                return;
              }
              if (D.current !== le) {
                T(`[voice] ignoring stale onError from superseded attempt: ${He}`);
                return;
              }
              if (ye?.connectFailureCode) M.current = ye.connectFailureCode;
              if (!ye?.fatal && !pe && a.current === "recording") {
                if (!x.current) {
                  ((x.current = true),
                    T(`[voice] early voice_stream error (pre-transcript), retrying once: ${He}`),
                    G("tengu_voice_stream_early_retry", {}),
                    (l.current = null),
                    D.current++,
                    q.setTimeout(() => {
                      if (a.current === "recording") he(ie);
                    }, 250));
                  return;
                }
              }
              if ((D.current++, !pe)) Lpr();
              (Le("voice_stream_connect", "voice_stream_connection_error"),
                T(`[voice] voice_stream error: ${He}`, {
                  level: "error",
                }));
              let ue = c.current.trim();
              if (ue)
                (T(`[voice] mid-stream error: salvaging ${String(ue.length)} chars before cleanup`),
                  It("voice_transcription", "voice_transcription_partial_salvaged"),
                  u.current(ue));
              (d.current(`Voice stream error: ${He}`),
                (ae.length = 0),
                (h.current = false),
                V(),
                W("idle"));
            },
            onClose: () => {},
            onReady: (He) => {
              if (ge() || a.current !== "recording") {
                He.close();
                return;
              }
              ((l.current = He), (L.current = true), xe("voice_stream_connect"));
              let ye = 32000;
              if (ae.length > 0) {
                let ue = 0;
                for (let Ie of ae) ue += Ie.length;
                let we = [[]],
                  Ce = 0;
                for (let Ie of ae) {
                  if (Ce > 0 && Ce + Ie.length > ye) (we.push([]), (Ce = 0));
                  (we.at(-1).push(Ie), (Ce += Ie.length));
                }
                T(
                  `[voice] onReady: flushing ${String(ae.length)} buffered chunks (${String(ue)} bytes) as ${String(we.length)} coalesced frame(s)`,
                );
                for (let Ie of we) He.send(Buffer.concat(Ie));
              }
              if (((ae.length = 0), f.current)) f.current();
              if (m.current)
                f.current = q.setTimeout(() => {
                  if (((f.current = null), a.current === "recording")) Y();
                }, mKo);
            },
          },
          {
            language: me.code,
            keyterms: ie,
          },
        ).then(
          (He) => {
            if (ge()) {
              He?.close();
              return;
            }
            if (!He) {
              (T("[voice] Failed to connect to voice_stream (no OAuth token?)"),
                Le("voice_stream_connect", "voice_stream_no_auth"),
                d.current("Voice mode requires a Claude.ai account. Please run /login to sign in."),
                (ae.length = 0),
                V(),
                W("idle"));
              return;
            }
            if (a.current !== "recording") {
              ((ae.length = 0), He.close());
              return;
            }
          },
          (He) => {
            if ((ke(Zr(He)), Le("voice_stream_connect", "voice_stream_connect_exception"), ge()))
              return;
            if (a.current !== "recording") return;
            (Lpr(),
              d.current("Voice connection failed. Check your network and try again."),
              (ae.length = 0),
              (h.current = false),
              V(),
              W("idle"));
          },
        );
      };
    fKo().then(he);
  }
  let ne = th.useCallback(
    (re = Sbm) => {
      if (!n || !CGo()) return;
      if (h.current) return;
      if (r && A.current) {
        (T("[voice] Re-arming focus recording after silence timeout"),
          (A.current = false),
          (h.current = true),
          J(),
          z());
        return;
      }
      let ee = a.current;
      if (ee === "processing") return;
      if (o === "tap") {
        if (ee === "idle")
          (T("[voice] toggle: starting recording"), (y.current = true), J(), K(), Z());
        else if (ee === "recording") (T("[voice] toggle: finishing recording"), Y());
        return;
      }
      if (ee === "idle") {
        if (
          (T("[voice] handleKeyEvent: idle, starting recording session immediately"),
          J(),
          g.current)
        )
          g.current();
        g.current = q.setTimeout(() => {
          if (((g.current = null), a.current === "recording" && !m.current))
            (T("[voice] No auto-repeat seen, arming release timer via fallback"),
              (m.current = true),
              (f.current = q.setTimeout(() => {
                if (((f.current = null), a.current === "recording")) Y();
              }, mKo)));
        }, re);
      } else if (ee === "recording") {
        if (((m.current = true), g.current)) (g.current(), (g.current = null));
      }
      if (f.current) f.current();
      if (a.current === "recording" && m.current)
        f.current = q.setTimeout(() => {
          if (((f.current = null), a.current === "recording")) Y();
        }, mKo);
    },
    [n, r, o, V, q],
  );
  th.useEffect(() => {
    if (!n && a.current !== "idle") (V(), W("idle"));
    return () => {
      if ((V(), a.current !== "idle")) W("idle");
    };
  }, [n, V]);
  let oe = th.useCallback(() => {
    if (a.current === "idle") return;
    (T("[voice] cancelRecording: discarding without submit"), xe("voice_cancel"), V(), W("idle"));
  }, [V]);
  return {
    state: s,
    handleKeyEvent: ne,
    cancelRecording: oe,
  };
}
var th,
  XTe = null,
  bTc = 10000 /* 1e4 */,
  STc = 3,
  PNe,
  Dpr = false,
  mKo = 200,
  Sbm = 600,
  FIRST_PRESS_FALLBACK_MS = 2000,
  Abm = 5000,
  Hbm = 15000,
  Tbm = 120000,
  vbm = 16;
