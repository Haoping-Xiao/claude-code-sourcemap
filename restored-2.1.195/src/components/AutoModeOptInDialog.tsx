// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sdr
// matched 2.1.88 source: src/components/AutoModeOptInDialog.tsx
// class=modified  jaccard=0.5627  score=0.6746  fileCov=0.7724
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Sdr = E(() => {
  er();
  je();
  __();
});
var C6o = {};
_t(C6o, {
  AutoModeOptInDialog: () => AutoModeOptInDialog,
  AUTO_MODE_DESCRIPTION: () => AUTO_MODE_DESCRIPTION,
});
function AutoModeOptInDialog(e) {
  let t = Lyc.c(25),
    { onAccept: n, onDecline: r, declineExits: o } = e,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((s = []), (t[0] = s));
  else s = t[0];
  Dyc.useEffect(Opm, s);
  let i;
  if (t[1] !== n || t[2] !== r)
    ((i = function (A) {
      if ((A === "accept" || A === "accept-default") && Dt().autoModeOptInDismissed) gn($pm);
      e: switch (A) {
        case "accept": {
          (G("tengu_auto_mode_opt_in_dialog_accept", {}),
            io("userSettings", {
              skipAutoPermissionPrompt: !0,
            }),
            n());
          break e;
        }
        case "accept-default": {
          (G("tengu_auto_mode_opt_in_dialog_accept_default", {}),
            io("userSettings", {
              skipAutoPermissionPrompt: !0,
              permissions: {
                defaultMode: "auto",
              },
            }),
            n());
          break e;
        }
        case "decline": {
          (G("tengu_auto_mode_opt_in_dialog_decline", {}), r("go-back"));
          break e;
        }
        case "decline-dont-ask": {
          if (
            (G("tengu_auto_mode_opt_in_dialog_decline_dont_ask", {}), !Dt().autoModeOptInDismissed)
          )
            gn(Mpm);
          r("dont-ask");
        }
      }
    }),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  else i = t[3];
  let a = i,
    l;
  if (t[4] !== r) ((l = () => r("go-back")), (t[4] = r), (t[5] = l));
  else l = t[5];
  let c = l,
    u;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((u = h7e.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        h7e.jsx(w, {
          children: AUTO_MODE_DESCRIPTION,
        }),
        h7e.jsx(xs, {
          url: "https://code.claude.com/docs/en/security",
        }),
      ],
    })),
      (t[6] = u));
  else u = t[6];
  let d;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((d = [
      {
        label: "Yes, and make it my default mode",
        value: "accept-default",
      },
    ]),
      (t[7] = d));
  else d = t[7];
  let p;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((p = {
      label: "Yes, enable auto mode",
      value: "accept",
    }),
      (t[8] = p));
  else p = t[8];
  let f = o ? "No, exit" : "No, go back",
    m;
  if (t[9] !== f)
    ((m = {
      label: f,
      value: "decline",
    }),
      (t[9] = f),
      (t[10] = m));
  else m = t[10];
  let g;
  if (t[11] !== o)
    ((g = o
      ? []
      : [
          {
            label: "No, don't ask again",
            value: "decline-dont-ask",
          },
        ]),
      (t[11] = o),
      (t[12] = g));
  else g = t[12];
  let h;
  if (t[13] !== m || t[14] !== g) ((h = [...d, p, m, ...g]), (t[13] = m), (t[14] = g), (t[15] = h));
  else h = t[15];
  let y;
  if (t[16] !== a) ((y = (S) => a(S)), (t[16] = a), (t[17] = y));
  else y = t[17];
  let b;
  if (t[18] !== c || t[19] !== h || t[20] !== y)
    ((b = h7e.jsx(Sr, {
      options: h,
      onChange: y,
      onCancel: c,
    })),
      (t[18] = c),
      (t[19] = h),
      (t[20] = y),
      (t[21] = b));
  else b = t[21];
  let _;
  if (t[22] !== c || t[23] !== b)
    ((_ = h7e.jsxs(zn, {
      title: "Enable auto mode?",
      color: "warning",
      onCancel: c,
      children: [u, b],
    })),
      (t[22] = c),
      (t[23] = b),
      (t[24] = _));
  else _ = t[24];
  return _;
}
function Mpm(e) {
  return {
    ...e,
    autoModeOptInDismissed: !0,
  };
}
function $pm(e) {
  return {
    ...e,
    autoModeOptInDismissed: void 0,
  };
}
function Opm() {
  G("tengu_auto_mode_opt_in_dialog_shown", {});
}
var Lyc,
  Dyc,
  h7e,
  AUTO_MODE_DESCRIPTION =
    "Auto mode lets Claude handle permission prompts automatically \u2014 Claude checks each tool call for risky actions and prompt injection before executing. Actions Claude identifies as safe are executed, while actions Claude identifies as risky are blocked and Claude may try a different approach. Ideal for long-running tasks. Sessions are slightly more expensive. Claude can make mistakes that allow harmful commands to run, it's recommended to only use in isolated environments. Shift+Tab to change mode.";
