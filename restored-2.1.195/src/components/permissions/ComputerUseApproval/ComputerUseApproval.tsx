// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kzo
// matched 2.1.88 source: src/components/permissions/ComputerUseApproval/ComputerUseApproval.tsx
// class=modified  jaccard=0.4691  score=0.6929  fileCov=0.5922
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Kzo] deps: jwa/index.js, components/Settings/Config.tsx, screens/REPL.tsx
((CAc = R(rt(), 1)),
  (Vzo = uL({
    focus: null,
  })));
function LAc(e) {
  let t = ypr.c(3),
    { request: n, onDone: r } = e,
    o;
  if (t[0] !== r || t[1] !== n)
    ((o = n.tccState
      ? SE.jsx(ComputerUseTccPanel, {
          tccState: n.tccState,
          onDone: () => r(RAc),
        })
      : SE.jsx(ComputerUseAppListPanel, {
          request: n,
          onDone: r,
        })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = o));
  else o = t[2];
  return o;
}
function ComputerUseTccPanel(t0) {
  let t = ypr.c(26),
    { tccState: tccState, onDone: r } = t0,
    o;
  if (t[0] !== tccState.accessibility || t[1] !== tccState.screenRecording) {
    if (((o = []), !tccState.accessibility)) {
      let b;
      if (t[3] === Symbol.for("react.memo_cache_sentinel"))
        ((b = {
          label: "Open System Settings \u2192 Accessibility",
          value: "open_accessibility",
        }),
          (t[3] = b));
      else b = t[3];
      o.push(b);
    }
    if (!tccState.screenRecording) {
      let b;
      if (t[4] === Symbol.for("react.memo_cache_sentinel"))
        ((b = {
          label: "Open System Settings \u2192 Screen Recording",
          value: "open_screen_recording",
        }),
          (t[4] = b));
      else b = t[4];
      o.push(b);
    }
    let y;
    if (t[5] === Symbol.for("react.memo_cache_sentinel"))
      ((y = {
        label: "Try again",
        value: "retry",
      }),
        (t[5] = y));
    else y = t[5];
    (o.push(y), (t[0] = tccState.accessibility), (t[1] = tccState.screenRecording), (t[2] = o));
  } else o = t[2];
  let s = o,
    i;
  if (t[6] !== r)
    ((i = function (b) {
      let _ = U4();
      switch (b) {
        case "open_accessibility": {
          (_.tcc.requestAccessibility(),
            $n(
              "open",
              ["x-apple.systempreferences:com.apple.preference.security?Privacy_Accessibility"],
              {
                useCwd: false,
              },
            ));
          return;
        }
        case "open_screen_recording": {
          (_.tcc.requestScreenRecording(),
            $n(
              "open",
              ["x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture"],
              {
                useCwd: false,
              },
            ));
          return;
        }
        case "retry": {
          r();
          return;
        }
      }
    }),
      (t[6] = r),
      (t[7] = i));
  else i = t[7];
  let a = i,
    l = tccState.accessibility ? `${nt.tick} granted` : `${nt.cross} not granted`,
    c;
  if (t[8] !== l)
    ((c = SE.jsxs(w, {
      children: ["Accessibility:", " ", l],
    })),
      (t[8] = l),
      (t[9] = c));
  else c = t[9];
  let u = tccState.screenRecording ? `${nt.tick} granted` : `${nt.cross} not granted`,
    d;
  if (t[10] !== u)
    ((d = SE.jsxs(w, {
      children: ["Screen Recording:", " ", u],
    })),
      (t[10] = u),
      (t[11] = d));
  else d = t[11];
  let p;
  if (t[12] !== c || t[13] !== d)
    ((p = SE.jsxs(U, {
      flexDirection: "column",
      children: [c, d],
    })),
      (t[12] = c),
      (t[13] = d),
      (t[14] = p));
  else p = t[14];
  let f;
  if (t[15] === Symbol.for("react.memo_cache_sentinel"))
    ((f = SE.jsx(w, {
      dimColor: true,
      children:
        'Grant the missing permissions in System Settings, then select "Try again". macOS may require you to restart Claude Code after granting Screen Recording.',
    })),
      (t[15] = f));
  else f = t[15];
  let m;
  if (t[16] !== a || t[17] !== r || t[18] !== s)
    ((m = SE.jsx(Sr, {
      options: s,
      onChange: a,
      onCancel: r,
    })),
      (t[16] = a),
      (t[17] = r),
      (t[18] = s),
      (t[19] = m));
  else m = t[19];
  let g;
  if (t[20] !== p || t[21] !== m)
    ((g = SE.jsxs(U, {
      flexDirection: "column",
      paddingX: 1,
      paddingY: 1,
      gap: 1,
      children: [p, f, m],
    })),
      (t[20] = p),
      (t[21] = m),
      (t[22] = g));
  else g = t[22];
  let h;
  if (t[23] !== r || t[24] !== g)
    ((h = SE.jsx(zn, {
      title: "Computer Use needs macOS permissions",
      onCancel: r,
      children: g,
    })),
      (t[23] = r),
      (t[24] = g),
      (t[25] = h));
  else h = t[25];
  return h;
}
function ComputerUseAppListPanel(t0) {
  let t = ypr.c(48),
    { request: request, onDone: r } = t0,
    o;
  if (t[0] !== request.apps)
    ((o = () => new Set(request.apps.flatMap(wym))), (t[0] = request.apps), (t[1] = o));
  else o = t[1];
  let [checked] = kAc.useState(o),
    i;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((i = ["clipboardRead", "clipboardWrite", "systemKeyCombos"]), (t[2] = i));
  else i = t[2];
  let a = i,
    l;
  if (t[3] !== request.requestedFlags)
    ((l = a.filter((L) => request.requestedFlags[L])), (t[3] = request.requestedFlags), (t[4] = l));
  else l = t[4];
  let requestedFlagKeys = l,
    u = checked.size,
    d;
  if (t[5] !== checked.size) ((d = bn(checked.size, "app")), (t[5] = checked.size), (t[6] = d));
  else d = t[6];
  let p = `Allow for this session (${u} ${d})`,
    f;
  if (t[7] !== p)
    ((f = {
      label: p,
      value: "allow_all",
    }),
      (t[7] = p),
      (t[8] = f));
  else f = t[8];
  let m;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((m = {
      label: SE.jsxs(w, {
        children: [
          "Deny, and tell Claude what to do differently ",
          SE.jsx(w, {
            bold: true,
            children: "(esc)",
          }),
        ],
      }),
      value: "deny",
    }),
      (t[9] = m));
  else m = t[9];
  let g;
  if (t[10] !== f) ((g = [f, m]), (t[10] = f), (t[11] = g));
  else g = t[11];
  let h = g,
    y;
  if (t[12] !== checked || t[13] !== r || t[14] !== request.apps || t[15] !== requestedFlagKeys)
    ((y = function (M) {
      if (!M) {
        r(RAc);
        return;
      }
      let N = Date.now(),
        B = request.apps.flatMap((W) =>
          W.resolved && checked.has(W.resolved.bundleId)
            ? [
                {
                  bundleId: W.resolved.bundleId,
                  displayName: W.resolved.displayName,
                  grantedAt: N,
                },
              ]
            : [],
        ),
        $ = request.apps
          .filter((W) => !W.resolved || !checked.has(W.resolved.bundleId))
          .map(_temp2),
        q = {
          ...pJ,
          ...Object.fromEntries(requestedFlagKeys.map(Tym)),
        };
      r({
        granted: B,
        denied: $,
        flags: q,
      });
    }),
      (t[12] = checked),
      (t[13] = r),
      (t[14] = request.apps),
      (t[15] = requestedFlagKeys),
      (t[16] = y));
  else y = t[16];
  let b = y,
    _;
  if (t[17] !== b) ((_ = () => b(false)), (t[17] = b), (t[18] = _));
  else _ = t[18];
  let S;
  if (t[19] !== request.reason)
    ((S = request.reason
      ? SE.jsx(w, {
          dimColor: true,
          children: request.reason,
        })
      : null),
      (t[19] = request.reason),
      (t[20] = S));
  else S = t[20];
  let A;
  if (t[21] !== checked || t[22] !== request.apps) {
    let L;
    if (t[24] !== checked)
      ((L = (M) => {
        let N = M.resolved;
        if (!N)
          return SE.jsxs(
            w,
            {
              dimColor: true,
              children: [
                "  ",
                nt.circle,
                " ",
                M.requestedName,
                " ",
                SE.jsx(w, {
                  dimColor: true,
                  children: "(not installed)",
                }),
              ],
            },
            M.requestedName,
          );
        if (M.alreadyGranted)
          return SE.jsxs(
            w,
            {
              dimColor: true,
              children: [
                "  ",
                nt.tick,
                " ",
                N.displayName,
                " ",
                SE.jsx(w, {
                  dimColor: true,
                  children: "(already granted)",
                }),
              ],
            },
            N.bundleId,
          );
        let B = v0a(N.bundleId),
          $ = checked.has(N.bundleId);
        return SE.jsxs(
          U,
          {
            flexDirection: "column",
            children: [
              SE.jsxs(w, {
                children: ["  ", $ ? nt.circleFilled : nt.circle, " ", N.displayName],
              }),
              B
                ? SE.jsxs(w, {
                    bold: true,
                    children: ["    ", nt.warning, " ", Eym[B]],
                  })
                : null,
            ],
          },
          N.bundleId,
        );
      }),
        (t[24] = checked),
        (t[25] = L));
    else L = t[25];
    ((A = request.apps.map(L)), (t[21] = checked), (t[22] = request.apps), (t[23] = A));
  } else A = t[23];
  let v;
  if (t[26] !== A)
    ((v = SE.jsx(U, {
      flexDirection: "column",
      children: A,
    })),
      (t[26] = A),
      (t[27] = v));
  else v = t[27];
  let C;
  if (t[28] !== requestedFlagKeys)
    ((C =
      requestedFlagKeys.length > 0
        ? SE.jsxs(U, {
            flexDirection: "column",
            children: [
              SE.jsx(w, {
                dimColor: true,
                children: "Also requested:",
              }),
              requestedFlagKeys.map(Hym),
            ],
          })
        : null),
      (t[28] = requestedFlagKeys),
      (t[29] = C));
  else C = t[29];
  let x;
  if (t[30] !== request.willHide)
    ((x =
      request.willHide && request.willHide.length > 0
        ? SE.jsxs(w, {
            dimColor: true,
            children: [
              request.willHide.length,
              " other",
              " ",
              bn(request.willHide.length, "app"),
              " will be hidden while Claude works.",
            ],
          })
        : null),
      (t[30] = request.willHide),
      (t[31] = x));
  else x = t[31];
  let I, k;
  if (t[32] !== b)
    ((I = (L) => b(L === "allow_all")),
      (k = () => b(false)),
      (t[32] = b),
      (t[33] = I),
      (t[34] = k));
  else ((I = t[33]), (k = t[34]));
  let D;
  if (t[35] !== h || t[36] !== I || t[37] !== k)
    ((D = SE.jsx(Sr, {
      options: h,
      onChange: I,
      onCancel: k,
    })),
      (t[35] = h),
      (t[36] = I),
      (t[37] = k),
      (t[38] = D));
  else D = t[38];
  let P;
  if (t[39] !== S || t[40] !== v || t[41] !== C || t[42] !== x || t[43] !== D)
    ((P = SE.jsxs(U, {
      flexDirection: "column",
      paddingX: 1,
      paddingY: 1,
      gap: 1,
      children: [S, v, C, x, D],
    })),
      (t[39] = S),
      (t[40] = v),
      (t[41] = C),
      (t[42] = x),
      (t[43] = D),
      (t[44] = P));
  else P = t[44];
  let O;
  if (t[45] !== _ || t[46] !== P)
    ((O = SE.jsx(zn, {
      title: "Computer Use wants to control these apps",
      onCancel: _,
      children: P,
    })),
      (t[45] = _),
      (t[46] = P),
      (t[47] = O));
  else O = t[47];
  return O;
}
function Hym(e) {
  return SE.jsxs(
    w,
    {
      dimColor: true,
      children: ["  ", "\xB7 ", e],
    },
    e,
  );
}
function Tym(e) {
  return [e, true];
}
function _temp2(a_2) {
  return {
    bundleId: a_2.resolved?.bundleId ?? a_2.requestedName,
    reason: a_2.resolved ? "user_denied" : "not_installed",
  };
}
function wym(e) {
  return e.resolved && !e.alreadyGranted ? [e.resolved.bundleId] : [];
}
var ypr, kAc, SE, RAc, Eym;
