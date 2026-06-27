// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VBl
// matched 2.1.88 source: src/components/IdeAutoConnectDialog.tsx
// class=modified  jaccard=0.2293  score=0.3349  fileCov=0.421
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VBl]
((WOf = {
  type: "local-jsx",
  name: "help",
  description: "Show help and available commands",
  requires: {
    ink: true,
  },
  load: () => Promise.resolve().then(() => (qBl(), GBl)),
}),
  (oBo = WOf));
function IdeAutoConnectDialog(t0) {
  let t = sBo.c(9),
    { onComplete: n } = t0,
    r;
  if (t[0] !== n)
    ((r = async (u) => {
      let d = u === "yes";
      (gn((p) => ({
        ...p,
        autoConnectIde: d,
        hasIdeAutoConnectDialogBeenShown: true,
      })),
        n());
    }),
      (t[0] = n),
      (t[1] = r));
  else r = t[1];
  let o = r,
    s;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((s = [
      {
        label: "Yes",
        value: "yes",
      },
      {
        label: "No",
        value: "no",
      },
    ]),
      (t[2] = s));
  else s = t[2];
  let i = s,
    a;
  if (t[3] !== o)
    ((a = kKe.jsx(Sr, {
      options: i,
      onChange: o,
      defaultValue: "yes",
    })),
      (t[3] = o),
      (t[4] = a));
  else a = t[4];
  let l;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((l = kKe.jsx(w, {
      dimColor: true,
      children: "You can also configure this in /config or with the --ide flag",
    })),
      (t[5] = l));
  else l = t[5];
  let c;
  if (t[6] !== n || t[7] !== a)
    ((c = kKe.jsxs(zn, {
      title: "Do you wish to enable auto-connect to IDE?",
      color: "ide",
      onCancel: n,
      children: [a, l],
    })),
      (t[6] = n),
      (t[7] = a),
      (t[8] = c));
  else c = t[8];
  return c;
}
function KBl() {
  let e = Dt();
  return !uF() && e.autoConnectIde !== true && e.hasIdeAutoConnectDialogBeenShown !== true;
}
function IdeDisableAutoConnectDialog(t0) {
  let t = sBo.c(10),
    { onComplete: n } = t0,
    r;
  if (t[0] !== n)
    ((r = () => {
      (gn(qOf), n(true));
    }),
      (t[0] = n),
      (t[1] = r));
  else r = t[1];
  let o = r,
    s;
  if (t[2] !== n)
    ((s = () => {
      n(false);
    }),
      (t[2] = n),
      (t[3] = s));
  else s = t[3];
  let i = s,
    a;
  if (t[4] !== i || t[5] !== o)
    ((a = kKe.jsx(Kl, {
      cancelFirst: true,
      focus: "cancel",
      onConfirm: o,
      onCancel: i,
    })),
      (t[4] = i),
      (t[5] = o),
      (t[6] = a));
  else a = t[6];
  let l;
  if (t[7] !== i || t[8] !== a)
    ((l = kKe.jsx(zn, {
      title: "Do you wish to disable auto-connect to IDE?",
      subtitle: "You can also configure this in /config",
      onCancel: i,
      color: "ide",
      children: a,
    })),
      (t[7] = i),
      (t[8] = a),
      (t[9] = l));
  else l = t[9];
  return l;
}
function qOf(e) {
  return {
    ...e,
    autoConnectIde: false,
  };
}
function XBl() {
  let e = Dt();
  return !uF() && e.autoConnectIde === true;
}
var sBo, kKe;
