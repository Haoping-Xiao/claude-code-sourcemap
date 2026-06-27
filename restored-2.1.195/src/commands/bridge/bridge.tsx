// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uHt
// matched 2.1.88 source: src/commands/bridge/bridge.tsx
// class=modified  jaccard=0.2486  score=0.459  fileCov=0.3517
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var uHt = E(() => {
  SC();
  sre();
  er();
  Fh();
  dn();
});
var fZl = {};
_t(fZl, {
  call: () => call,
});
function Vzf(e) {
  let t = E3o.c(18),
    { onDone: n, name: r, context: o } = e,
    s = Ho(),
    i = Ht(Xzf),
    a = Ht(Yzf),
    l = Ht(Kzf),
    [c, u] = gme.useState(false),
    [d, p] = gme.useState(false),
    [f] = gme.useState(zzf),
    m;
  if (t[0] !== r || t[1] !== n || t[2] !== s)
    ((m = function () {
      if ((vir(), iZl())) {
        (s((_) => {
          if (_.showRemoteCallout) return _;
          return {
            ..._,
            showRemoteCallout: true,
            replBridgeInitialName: r,
          };
        }),
          n("", {
            display: "system",
          }));
        return;
      }
      (G("tengu_bridge_command", {
        action: We("connect"),
      }),
        s((_) => {
          if (_.replBridgeEnabled && !_.replBridgeOutboundOnly) return _;
          return {
            ..._,
            replBridgeEnabled: true,
            replBridgeExplicit: true,
            replBridgeOutboundOnly: false,
            replBridgeInitialName: r,
          };
        }),
        n("", {
          display: "system",
        }));
    }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = s),
      (t[3] = m));
  else m = t[3];
  let g = m,
    h;
  if (t[4] !== g || t[5] !== n || t[6] !== i || t[7] !== a || t[8] !== l)
    ((h = () => {
      if ((i || a) && !l) {
        u(true);
        return;
      }
      let b = false;
      return (
        (async () => {
          let _ = await dZl();
          if (b) return;
          if (_?.kind === "error") {
            (G("tengu_bridge_command", {
              action: We("preflight_failed"),
            }),
              n(_.message, {
                display: "system",
              }));
            return;
          }
          if (_?.kind === "unenrolled-trusted-device") {
            (G("tengu_bridge_command", {
              action: We("preflight_login_for_enrollment"),
            }),
              p(true));
            return;
          }
          g();
        })(),
        () => {
          b = true;
        }
      );
    }),
      (t[4] = g),
      (t[5] = n),
      (t[6] = i),
      (t[7] = a),
      (t[8] = l),
      (t[9] = h));
  else h = t[9];
  let y;
  if (t[10] === Symbol.for("react.memo_cache_sentinel")) ((y = []), (t[10] = y));
  else y = t[10];
  if ((gme.useEffect(h, y), c)) {
    let b;
    if (t[11] !== n)
      ((b = zk.jsx(Jzf, {
        onDone: n,
      })),
        (t[11] = n),
        (t[12] = b));
    else b = t[12];
    return b;
  }
  if (d) {
    if (!o)
      return (
        n(
          "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.",
          {
            display: "system",
          },
        ),
        null
      );
    let b;
    if (t[13] !== o || t[14] !== g || t[15] !== n || t[16] !== f)
      ((b = zk.jsx(BMe, {
        startingMessage: "Sign in to enroll this device for Remote Control.",
        onDone: async (_) => {
          if (
            (await NMe(o, _, {
              awaitEnrollment: true,
              previousAccount: f,
            }),
            !_)
          ) {
            (G("tengu_bridge_command", {
              action: We("preflight_login_canceled"),
            }),
              n("Sign-in canceled. Run /remote-control after enrolling this device.", {
                display: "system",
              }));
            return;
          }
          let S = await dZl();
          if (S?.kind === "error") {
            n(S.message, {
              display: "system",
            });
            return;
          }
          if (S?.kind === "unenrolled-trusted-device") {
            (G("tengu_bridge_command", {
              action: We("preflight_enrollment_did_not_complete"),
            }),
              n(
                "Signed in, but device enrollment didn't complete. Run /remote-control again, or check the debug log for [trusted-device] messages.",
                {
                  display: "system",
                },
              ));
            return;
          }
          g();
        },
      })),
        (t[13] = o),
        (t[14] = g),
        (t[15] = n),
        (t[16] = f),
        (t[17] = b));
    else b = t[17];
    return b;
  }
  return null;
}
function zzf() {
  let e = Lc();
  return (
    e && {
      accountUuid: e.accountUuid,
      organizationUuid: e.organizationUuid,
    }
  );
}
function Kzf(e) {
  return e.replBridgeOutboundOnly;
}
function Yzf(e) {
  return e.replBridgeEnabled;
}
function Xzf(e) {
  return e.replBridgeConnected;
}
function Jzf(e) {
  let t = E3o.c(64),
    { onDone: n } = e;
  Wh("bridge-disconnect-dialog");
  let r = Ho(),
    o = Ht(iKf),
    s = Ht(sKf),
    i = Ht(oKf),
    [a, l] = gme.useState(2),
    [c, u] = gme.useState(false),
    [d, p] = gme.useState(""),
    f = i ? o : s,
    m,
    g;
  if (t[0] !== f || t[1] !== c)
    ((m = () => {
      if (!c || !f) {
        p("");
        return;
      }
      pZl
        .toString(f, {
          type: "utf8",
          errorCorrectionLevel: "L",
          small: true,
        })
        .then(p)
        .catch(() => p(""));
    }),
      (g = [c, f]),
      (t[0] = f),
      (t[1] = c),
      (t[2] = m),
      (t[3] = g));
  else ((m = t[2]), (g = t[3]));
  gme.useEffect(m, g);
  let h;
  if (t[4] !== n || t[5] !== r)
    ((h = function () {
      (r(rKf),
        G("tengu_bridge_command", {
          action: We("disconnect"),
        }),
        n(Roe, {
          display: "system",
        }));
    }),
      (t[4] = n),
      (t[5] = r),
      (t[6] = h));
  else h = t[6];
  let y = h,
    b;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((b = function () {
      u(nKf);
    }),
      (t[7] = b));
  else b = t[7];
  let _ = b,
    S;
  if (t[8] !== n)
    ((S = function () {
      n(void 0, {
        display: "skip",
      });
    }),
      (t[8] = n),
      (t[9] = S));
  else S = t[9];
  let A = S,
    v,
    C;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((v = () => l(tKf)), (C = () => l(eKf)), (t[10] = v), (t[11] = C));
  else ((v = t[10]), (C = t[11]));
  let x;
  if (t[12] !== a || t[13] !== A || t[14] !== y)
    ((x = {
      "select:next": v,
      "select:previous": C,
      "select:accept": () => {
        if (a === 0) y();
        else if (a === 1) _();
        else A();
      },
    }),
      (t[12] = a),
      (t[13] = A),
      (t[14] = y),
      (t[15] = x));
  else x = t[15];
  let I;
  if (t[16] === Symbol.for("react.memo_cache_sentinel"))
    ((I = {
      context: "Select",
    }),
      (t[16] = I));
  else I = t[16];
  No(x, I);
  let k, D, P, O, L, M, N, B, $;
  if (t[17] !== f || t[18] !== A || t[19] !== d || t[20] !== c) {
    let Ee = d
      ? d
          .split(
            `
`,
          )
          .filter(Zzf)
      : [];
    ((D = zn), (N = "Remote Control"), (B = A), ($ = true), (k = U), (P = "column"), (O = 1));
    let me = f ? ` and at ${f}` : " and claude.ai/code";
    if (t[30] !== me)
      ((L = zk.jsxs(w, {
        children: ["This session is available in the Claude mobile app", me, "."],
      })),
        (t[30] = me),
        (t[31] = L));
    else L = t[31];
    ((M =
      c &&
      Ee.length > 0 &&
      zk.jsx(U, {
        flexDirection: "column",
        children: Ee.map(Qzf),
      })),
      (t[17] = f),
      (t[18] = A),
      (t[19] = d),
      (t[20] = c),
      (t[21] = k),
      (t[22] = D),
      (t[23] = P),
      (t[24] = O),
      (t[25] = L),
      (t[26] = M),
      (t[27] = N),
      (t[28] = B),
      (t[29] = $));
  } else
    ((k = t[21]),
      (D = t[22]),
      (P = t[23]),
      (O = t[24]),
      (L = t[25]),
      (M = t[26]),
      (N = t[27]),
      (B = t[28]),
      ($ = t[29]));
  let q = a === 0,
    W;
  if (t[32] === Symbol.for("react.memo_cache_sentinel"))
    ((W = zk.jsx(w, {
      children: "Disconnect this session",
    })),
      (t[32] = W));
  else W = t[32];
  let V;
  if (t[33] !== q)
    ((V = zk.jsx(mH, {
      isFocused: q,
      children: W,
    })),
      (t[33] = q),
      (t[34] = V));
  else V = t[34];
  let Y = a === 1,
    z = c ? "Hide QR code" : "Show QR code",
    K;
  if (t[35] !== c)
    ((K =
      !c &&
      zk.jsx(w, {
        dimColor: true,
        children: "  Scan with your phone to open this session",
      })),
      (t[35] = c),
      (t[36] = K));
  else K = t[36];
  let Z;
  if (t[37] !== z || t[38] !== K)
    ((Z = zk.jsxs(w, {
      children: [z, K],
    })),
      (t[37] = z),
      (t[38] = K),
      (t[39] = Z));
  else Z = t[39];
  let J;
  if (t[40] !== Y || t[41] !== Z)
    ((J = zk.jsx(mH, {
      isFocused: Y,
      children: Z,
    })),
      (t[40] = Y),
      (t[41] = Z),
      (t[42] = J));
  else J = t[42];
  let ne = a === 2,
    oe;
  if (t[43] === Symbol.for("react.memo_cache_sentinel"))
    ((oe = zk.jsx(w, {
      children: "Continue",
    })),
      (t[43] = oe));
  else oe = t[43];
  let re;
  if (t[44] !== ne)
    ((re = zk.jsx(mH, {
      isFocused: ne,
      children: oe,
    })),
      (t[44] = ne),
      (t[45] = re));
  else re = t[45];
  let ee;
  if (t[46] !== V || t[47] !== J || t[48] !== re)
    ((ee = zk.jsxs(U, {
      flexDirection: "column",
      children: [V, J, re],
    })),
      (t[46] = V),
      (t[47] = J),
      (t[48] = re),
      (t[49] = ee));
  else ee = t[49];
  let ce;
  if (t[50] === Symbol.for("react.memo_cache_sentinel"))
    ((ce = zk.jsx(w, {
      dimColor: true,
      children: zk.jsxs(Tn, {
        children: [
          zk.jsx(ht, {
            chord: "enter",
            action: "select",
          }),
          zk.jsx(ht, {
            chord: "escape",
            action: "continue",
          }),
        ],
      }),
    })),
      (t[50] = ce));
  else ce = t[50];
  let ae;
  if (t[51] !== k || t[52] !== P || t[53] !== O || t[54] !== L || t[55] !== M || t[56] !== ee)
    ((ae = zk.jsxs(k, {
      flexDirection: P,
      gap: O,
      children: [L, M, ee, ce],
    })),
      (t[51] = k),
      (t[52] = P),
      (t[53] = O),
      (t[54] = L),
      (t[55] = M),
      (t[56] = ee),
      (t[57] = ae));
  else ae = t[57];
  let de;
  if (t[58] !== D || t[59] !== N || t[60] !== B || t[61] !== $ || t[62] !== ae)
    ((de = zk.jsx(D, {
      title: N,
      onCancel: B,
      hideInputGuide: $,
      children: ae,
    })),
      (t[58] = D),
      (t[59] = N),
      (t[60] = B),
      (t[61] = $),
      (t[62] = ae),
      (t[63] = de));
  else de = t[63];
  return de;
}
function Qzf(e, t) {
  return zk.jsx(
    w,
    {
      children: e,
    },
    t,
  );
}
function Zzf(e) {
  return e.length > 0;
}
function eKf(e) {
  return (e - 1 + 3) % 3;
}
function tKf(e) {
  return (e + 1) % 3;
}
function nKf(e) {
  return !e;
}
function rKf(e) {
  if (!e.replBridgeEnabled && e.replBridgeError === void 0) return e;
  return {
    ...e,
    replBridgeEnabled: false,
    replBridgeExplicit: false,
    replBridgeOutboundOnly: false,
    replBridgeError: void 0,
    notifications: iUt(e.notifications, z5),
  };
}
function oKf(e) {
  return e.replBridgeSessionActive;
}
function sKf(e) {
  return e.replBridgeConnectUrl;
}
function iKf(e) {
  return e.replBridgeSessionUrl;
}
async function dZl() {
  let e = await wir();
  if (e)
    return {
      kind: "error",
      message: e,
    };
  let t = await Air();
  if (t)
    return {
      kind: "error",
      message: t,
    };
  if (!LN())
    return {
      kind: "error",
      message: Z8e,
    };
  if ((await nho(), await yWt())) {
    if (zDe())
      return {
        kind: "error",
        message: gWt,
      };
    return {
      kind: "unenrolled-trusted-device",
    };
  }
  return (T("[bridge] Prerequisites passed, enabling bridge"), null);
}
async function call(e, t, n) {
  let r = n.trim() || void 0;
  return zk.jsx(Vzf, {
    onDone: e,
    name: r,
    context: t,
  });
}
var E3o, pZl, gme, zk;
