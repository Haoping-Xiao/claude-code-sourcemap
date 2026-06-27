// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LJl
// matched 2.1.88 source: src/components/AutoModeOptInDialog.tsx
// class=modified (alt of src/components/AutoModeOptInDialog.tsx)  jaccard=0.037  score=0.0742  fileCov=0.0686
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module LJl] deps: np, dn, kt, lT, DD, EHe
kJl = `Usage: /model <name>. Available: ${hye.join(", ")}, default, or a full model ID.`;
function AutoModeOptInDialog(e) {
  let t = DJl.c(23),
    { kind: n, model: r, effort: o, onConfirm: s, onCancel: i } = e,
    a = Ho(),
    l = n === "model",
    c = l ? "Switch model?" : "Change effort level?",
    u = l ? "model" : "effort level",
    d;
  if (t[0] !== o || t[1] !== l || t[2] !== r)
    ((d = l ? xP(r) : o !== void 0 ? dce(o) : "auto"),
      (t[0] = o),
      (t[1] = l),
      (t[2] = r),
      (t[3] = d));
  else d = t[3];
  let p = d,
    f;
  if (t[4] !== s || t[5] !== a)
    ((f = function () {
      (a(S6f), s());
    }),
      (t[4] = s),
      (t[5] = a),
      (t[6] = f));
  else f = t[6];
  let m = f,
    g;
  if (t[7] !== p)
    ((g = _Ye.jsx(w, {
      bold: true,
      children: p,
    })),
      (t[7] = p),
      (t[8] = g));
  else g = t[8];
  let h;
  if (t[9] !== u || t[10] !== g)
    ((h = _Ye.jsxs(w, {
      children: [
        "This conversation is cached for the current ",
        u,
        ". Switching to",
        " ",
        g,
        " means the full history gets re-read on your next message.",
      ],
    })),
      (t[9] = u),
      (t[10] = g),
      (t[11] = h));
  else h = t[11];
  let y = `Yes, switch to ${p}`,
    b;
  if (t[12] !== m || t[13] !== i || t[14] !== y)
    ((b = _Ye.jsx(Kl, {
      confirmLabel: y,
      cancelLabel: "No, go back",
      onConfirm: m,
      onCancel: i,
    })),
      (t[12] = m),
      (t[13] = i),
      (t[14] = y),
      (t[15] = b));
  else b = t[15];
  let _;
  if (t[16] !== h || t[17] !== b)
    ((_ = _Ye.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      marginBottom: 1,
      children: [h, b],
    })),
      (t[16] = h),
      (t[17] = b),
      (t[18] = _));
  else _ = t[18];
  let S;
  if (t[19] !== i || t[20] !== _ || t[21] !== c)
    ((S = _Ye.jsx(zn, {
      title: c,
      subtitle: "Your next response will be slower and use more tokens",
      color: "warning",
      onCancel: i,
      hideInputGuide: true,
      children: _,
    })),
      (t[19] = i),
      (t[20] = _),
      (t[21] = c),
      (t[22] = S));
  else S = t[22];
  return S;
}
function S6f(e) {
  return {
    ...e,
    cacheMissAckedAtOutputTokens: Gb(),
  };
}
var DJl, _Ye;
