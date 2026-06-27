// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D$c
// matched 2.1.88 source: src/components/DevChannelsDialog.tsx
// class=modified  jaccard=0.3295  score=0.4435  fileCov=0.5617
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: DevChannelsDialog
// [unwrapped __esm module D$c] deps: utils/debug.ts, hooks/useTerminalSize.ts, utils/gracefulShutdown.ts, utils/settings/settings.ts, components/design-system/Dialog.tsx, components/design-system/Dialog.tsx
((R$c = R(lt(), 1)), (umr = R(rt(), 1)), (ove = R(se(), 1)));
function DevChannelsDialog(t0) {
  let t = P$c.c(13),
    { channels: n, onAccept: r } = t0,
    o;
  if (t[0] !== r)
    ((o = function (m) {
      e: switch (m) {
        case "accept": {
          r();
          break e;
        }
        case "exit":
          Bc(1);
      }
    }),
      (t[0] = r),
      (t[1] = o));
  else o = t[1];
  let s = o,
    i = cxm,
    a,
    l;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((a = GNe.jsx(w, {
      children:
        "--dangerously-load-development-channels is for local channel development only. Do not use this option to run channels you have downloaded off the internet.",
    })),
      (l = GNe.jsx(w, {
        children: "Please use --channels to run a list of approved channels.",
      })),
      (t[2] = a),
      (t[3] = l));
  else ((a = t[2]), (l = t[3]));
  let c;
  if (t[4] !== n) ((c = n.map(_temp2).join(", ")), (t[4] = n), (t[5] = c));
  else c = t[5];
  let u;
  if (t[6] !== c)
    ((u = GNe.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        a,
        l,
        GNe.jsxs(w, {
          dimColor: !0,
          children: ["Channels:", " ", c],
        }),
      ],
    })),
      (t[6] = c),
      (t[7] = u));
  else u = t[7];
  let d;
  if (t[8] !== s)
    ((d = GNe.jsx(Kl, {
      confirmLabel: "I am using this for local development",
      cancelLabel: "Exit",
      onConfirm: () => s("accept"),
      onCancel: () => s("exit"),
    })),
      (t[8] = s),
      (t[9] = d));
  else d = t[9];
  let p;
  if (t[10] !== u || t[11] !== d)
    ((p = GNe.jsxs(zn, {
      title: "WARNING: Loading development channels",
      color: "error",
      onCancel: i,
      children: [u, d],
    })),
      (t[10] = u),
      (t[11] = d),
      (t[12] = p));
  else p = t[12];
  return p;
}
function _temp2(e) {
  return e.kind === "plugin" ? `plugin:${e.name}@${e.marketplace}` : `server:${e.name}`;
}
function cxm() {
  Bc(0);
}
var P$c, GNe;
