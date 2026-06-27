// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TTc
// matched 2.1.88 source: src/hooks/useVoiceIntegration.tsx
// class=modified  jaccard=0.4044  score=0.7073  fileCov=0.4856
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: useVoiceKeybindingHandler, useVoiceIntegration
// [unwrapped __esm module TTc] deps: ree, nbe, a0e, Ye, dn, kt, _Tc, IGo, je, At, m0, vn, dr
((th = R(rt(), 1)), (PNe = []));
var hKo = {};
function Rbm(e, t) {
  if ((e.key === "return" ? "enter" : e.key.toLowerCase()) !== t.key) return false;
  if (e.ctrl !== t.ctrl) return false;
  if (e.shift !== t.shift) return false;
  if (e.meta !== (t.alt || t.meta)) return false;
  if (e.superKey !== t.super) return false;
  return true;
}
function Lbm(e) {
  return Gj.changed.subscribe(e);
}
function Dbm() {
  return nDn(Gj);
}
function useVoiceIntegration({
  setInputValueRaw: e,
  inputValueRef: t,
  insertTextRef: n,
  enableDoubleTapSubmit: r = true,
  isActive: o = true,
}) {
  let { addNotification: s } = Li(),
    i = Tat(),
    a = VLn(),
    l = gw.useRef(null),
    c = gw.useRef(""),
    u = gw.useRef(null),
    d = gw.useCallback(
      (A, { char: v = " ", anchor: C = false, floor: x = 0 } = {}) => {
        let I = t.current,
          k = n.current?.cursorOffset ?? I.length,
          D = I.slice(0, k),
          P = I.slice(k),
          O = v === " " ? nae(D) : D,
          L = 0;
        while (L < O.length && O[O.length - 1 - L] === v) L++;
        let M = Math.max(0, Math.min(L - x, A)),
          N = L - M,
          B = D.slice(0, D.length - M),
          $ = "";
        if (C) {
          if (((l.current = B), (c.current = P), P.length > 0 && !/^\s/.test(P))) $ = " ";
        }
        let q = B + $ + P;
        if (C) u.current = q;
        if (q === I && M === 0) return N;
        if (n.current) n.current.setInputWithCursor(q, B.length);
        else e(q);
        return N;
      },
      [e, t, n],
    ),
    p = gw.useCallback(() => {
      let A = l.current;
      if (A === null) return;
      let v = c.current;
      ((l.current = null), (c.current = ""));
      let C = A + v;
      if (n.current) n.current.setInputWithCursor(C, A.length);
      else e(C);
    }, [e, n]),
    f = $me(),
    m = Ht((A) => A.settings.voice?.autoSubmit === true),
    g = Ht((A) => A.settings.voice?.mode ?? "hold"),
    h = P0((A) => A.voiceState),
    y = P0((A) => A.voiceInterimTranscript);
  (gw.useEffect(() => {
    if (o && a().voiceState === "recording" && l.current === null) {
      let A = t.current,
        v = n.current?.cursorOffset ?? A.length;
      ((l.current = A.slice(0, v)), (c.current = A.slice(v)), (u.current = A));
    }
    if (h === "idle") ((l.current = null), (c.current = ""), (u.current = null));
  }, [h, a, t, n, o]),
    gw.useEffect(() => {
      if (l.current === null) return;
      let A = l.current,
        v = c.current;
      if (t.current !== u.current) return;
      let C = A.length > 0 && !/\s$/.test(A) && y.length > 0,
        x = v.length > 0 && !/^\s/.test(v),
        I = C ? " " : "",
        k = x ? " " : "",
        D = A + I + y + k + v,
        P = A.length + I.length + y.length;
      if (n.current) n.current.setInputWithCursor(D, P);
      else e(D);
      u.current = D;
    }, [y, e, t, n]));
  let b = gw.useCallback(
      (A) => {
        let v = l.current;
        if (v === null) return;
        let C = c.current;
        if (t.current !== u.current) return;
        let x = v.length > 0 && !/\s$/.test(v) && A.length > 0,
          I = C.length > 0 && !/^\s/.test(C) && A.length > 0,
          k = x ? " " : "",
          D = I ? " " : "",
          P = v + k + A + D + C,
          O = v.length + k.length + A.length;
        if (n.current) n.current.setInputWithCursor(P, O);
        else e(P);
        ((u.current = P), (l.current = v + k + A));
        let M = (g === "tap" || m) && wis(A) >= 3;
        if (M) n.current?.submit(P, true);
        i((N) => {
          let B = r && g !== "tap" && !M;
          if (N.awaitingVoiceSubmitDoubleTap === B) return N;
          return {
            ...N,
            awaitingVoiceSubmitDoubleTap: B,
          };
        });
      },
      [e, t, n, i, r, m, g],
    ),
    _ = Cbm.useVoice({
      onTranscript: b,
      onError: (A) => {
        s({
          key: "voice-error",
          kind: "warning",
          text: A,
          color: "error",
          priority: "immediate",
          timeoutMs: 10000 /* 1e4 */,
        });
      },
      enabled: f,
      focusMode: false,
      mode: g,
    }),
    S = gw.useMemo(() => {
      if (l.current === null) return null;
      if (y.length === 0) return null;
      let A = l.current,
        v = A.length > 0 && !/\s$/.test(A) && y.length > 0,
        C = A.length + (v ? 1 : 0),
        x = C + y.length;
      return {
        start: C,
        end: x,
      };
    }, [y]);
  return {
    stripTrailing: d,
    resetAnchor: p,
    handleKeyEvent: _.handleKeyEvent,
    cancelRecording: _.cancelRecording,
    interimRange: S,
  };
}
function useVoiceKeybindingHandler({
  voiceHandleKeyEvent: e,
  voiceCancelRecording: t,
  stripTrailing: n,
  resetAnchor: r,
  isActive: o,
  inputValueRef: s,
  insertTextRef: i,
}) {
  let a = VLn(),
    l = Tat(),
    c = KE(),
    u = pbe(),
    d = $me(),
    p = P0((P) => P.voiceState),
    f = Ht((P) => P.settings.voice?.mode ?? "hold"),
    m = ks(),
    g = gw.useSyncExternalStore(Lbm, Dbm),
    h = c ? c.bindings : g,
    y = gw.useMemo(() => {
      if (!d) return null;
      let P = null;
      for (let O of h) {
        if (O.context !== "Chat") continue;
        if (O.chord.length !== 1) continue;
        let L = O.chord[0];
        if (!L) continue;
        if (O.action === "voice:pushToTalk") P = L;
        else if (P !== null && Iat(L, P)) P = null;
      }
      return P;
    }, [h, d]),
    b = y ? ZJr(y, Vt()) : null,
    _ =
      y !== null && y.key.length === 1 && !y.ctrl && !y.alt && !y.shift && !y.meta && !y.super
        ? y.key
        : null,
    S = gw.useRef(0),
    A = gw.useRef(0),
    v = gw.useRef(0),
    C = gw.useRef(false),
    x = gw.useRef(null),
    I = gw.useRef(0),
    k = gw.useRef(null);
  return (
    gw.useEffect(() => {
      if (p !== "recording")
        ((C.current = false),
          (v.current = 0),
          l((P) => {
            if (!P.voiceWarmingUp) return P;
            return {
              ...P,
              voiceWarmingUp: false,
            };
          }));
      else {
        if (((I.current = 0), k.current)) (k.current(), (k.current = null));
        l((P) => {
          if (!P.awaitingVoiceSubmitDoubleTap) return P;
          return {
            ...P,
            awaitingVoiceSubmitDoubleTap: false,
          };
        });
      }
    }, [p, l]),
    gw.useEffect(
      () => () => {
        if (k.current) (k.current(), (k.current = null));
      },
      [],
    ),
    {
      handleKeyDown: (P) => {
        if (!d) return;
        if (!o || u) return;
        if (P.key === "escape" && a().voiceState === "recording") {
          (P.stopImmediatePropagation(), t(), r());
          return;
        }
        if (f !== "tap" && i?.current != null && a().awaitingVoiceSubmitDoubleTap) {
          let N = i.current,
            B = () => {
              if (((I.current = 0), k.current)) (k.current(), (k.current = null));
            },
            $ = () => {
              (B(),
                l((Y) => {
                  if (!Y.awaitingVoiceSubmitDoubleTap) return Y;
                  return {
                    ...Y,
                    awaitingVoiceSubmitDoubleTap: false,
                  };
                }));
            },
            q =
              _ !== null &&
              !P.ctrl &&
              !P.meta &&
              !P.shift &&
              (_ === " " ? nae(P.key) : P.key)[0] === _,
            W = s.current,
            V = (N.cursorOffset ?? W.length) === W.length;
          if (!q || !V) $();
          else if (k.current !== null) $();
          else if (a().voiceState === "idle") {
            let Y = Date.now(),
              z = I.current;
            if (z !== 0 && Y - z <= kbm) {
              (P.stopImmediatePropagation(),
                (I.current = 0),
                (k.current = m.setTimeout(() => {
                  k.current = null;
                  let K = a();
                  if (K.voiceState !== "idle" || !K.awaitingVoiceSubmitDoubleTap) return;
                  let Z = i.current;
                  if (!Z) return;
                  l((oe) => {
                    if (!oe.awaitingVoiceSubmitDoubleTap) return oe;
                    return {
                      ...oe,
                      awaitingVoiceSubmitDoubleTap: false,
                    };
                  });
                  let J = s.current,
                    ne = J.endsWith(_) || (_ === " " && J.endsWith("\u3000")) ? J.slice(0, -1) : J;
                  Z.submit(ne, true);
                }, gKo)));
              return;
            }
            if (z !== 0) $();
            else I.current = Y;
          }
        }
        if (y === null) return;
        let O;
        if (_ !== null) {
          if (P.ctrl || P.meta || P.shift) return;
          let N = _ === " " ? nae(P.key) : P.key;
          if (N[0] !== _) return;
          if (N.length > 1 && N !== _.repeat(N.length)) return;
          O = N.length;
        } else {
          if (!Rbm(P, y)) return;
          O = 1;
        }
        if (f === "tap") {
          let N = a().voiceState;
          if (N === "processing") {
            if (_ === null) P.stopImmediatePropagation();
            return;
          }
          let B = N === "idle";
          if (B && s.current.length > 0) return;
          P.stopImmediatePropagation();
          let $ = S.current === 0;
          if (((S.current += O), x.current)) x.current();
          if (
            ((x.current = m.setTimeout(() => {
              ((x.current = null), (S.current = 0));
            }, gKo)),
            !$)
          ) {
            if (_ !== null)
              n(O, {
                char: _,
                floor: 0,
              });
            return;
          }
          if (B) {
            if (_ !== null)
              n(O, {
                char: _,
                anchor: true,
              });
            else
              n(0, {
                anchor: true,
              });
          } else if (_ !== null)
            n(O, {
              char: _,
              floor: 0,
            });
          if ((e(), B && a().voiceState === "idle")) r();
          return;
        }
        let L = a().voiceState;
        if (C.current && L !== "idle") {
          if ((P.stopImmediatePropagation(), _ !== null))
            n(O, {
              char: _,
              floor: v.current,
            });
          e();
          return;
        }
        if (L === "recording") {
          if (_ === null) P.stopImmediatePropagation();
          return;
        }
        if (L === "processing" && _ === null) {
          P.stopImmediatePropagation();
          return;
        }
        let M = S.current;
        if (((S.current += O), _ === null || (L === "idle" && S.current >= xbm))) {
          if ((P.stopImmediatePropagation(), x.current)) (x.current(), (x.current = null));
          if (
            ((S.current = 0),
            (C.current = true),
            l((N) => {
              if (!N.voiceWarmingUp) return N;
              return {
                ...N,
                voiceWarmingUp: false,
              };
            }),
            _ !== null)
          )
            ((v.current = n(A.current + O, {
              char: _,
              anchor: true,
            })),
              (A.current = 0),
              e());
          else
            (n(0, {
              anchor: true,
            }),
              e(Ibm));
          if (a().voiceState === "idle") ((C.current = false), r());
          return;
        }
        if (M >= vTc)
          (P.stopImmediatePropagation(),
            n(O, {
              char: _,
              floor: A.current,
            }));
        else A.current += O;
        if (L === "idle" && S.current >= vTc)
          l((N) => {
            if (N.voiceWarmingUp) return N;
            return {
              ...N,
              voiceWarmingUp: true,
            };
          });
        if (x.current) x.current();
        x.current = m.setTimeout(() => {
          ((x.current = null),
            (S.current = 0),
            (A.current = 0),
            l((N) => {
              if (!N.voiceWarmingUp) return N;
              return {
                ...N,
                voiceWarmingUp: false,
              };
            }));
        }, gKo);
      },
      voiceKeyDisplay: b,
    }
  );
}
var gw,
  Cbm,
  gKo = 120,
  Ibm = 2000,
  xbm = 5,
  vTc = 2,
  kbm = 300;
