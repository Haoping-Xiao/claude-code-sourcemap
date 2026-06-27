// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cDc
// matched 2.1.88 source: src/components/CustomSelect/select.tsx
// class=new  jaccard=0.035  score=0.1335  fileCov=0.0453
// note: nearest: src/components/CustomSelect/select.tsx (0.035); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module cDc] deps: hooks/useTerminalSize.ts, keybindings/useShortcutDisplay.ts, components/ManagedSettingsSecurityDialog/utils.ts
aDc = R(lt(), 1), Ofr = R(rt(), 1), bR = R(se(), 1);
function dDc() {
  if (Js()) return false;
  if (Oe.CLAUDE_CODE_FORCE_FULLSCREEN_UPSELL) return true;
  if (Ns()) return false;
  if (UD()) return false;
  if (Dr().tui !== void 0) return false;
  if (!mor()) return false;
  if ((Dt().fullscreenUpsellSeenCount ?? 0) >= PYo) return false;
  return true;
}
function pDc(e) {
  let t = uDc.c(13),
    {
      onDone: n
    } = e,
    r = Nfr.useRef(false),
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) o = [], t[0] = o;else o = t[0];
  Nfr.useEffect(hCm, o);
  let s;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) s = function () {
    gn(gCm);
  }, t[1] = s;else s = t[1];
  let i = s,
    a;
  if (t[2] !== n) a = function () {
    if (r.current) return;
    r.current = true;
    let {
      error: h
    } = io("userSettings", {
      tui: "fullscreen"
    });
    if (h) {
      ke(h), n();
      return;
    }
    i(), G("tengu_fullscreen_upsell_dialog_accepted", {}), SJt("fullscreen", zBe()).catch(y => {
      ke(y), n();
    });
  }, t[2] = n, t[3] = a;else a = t[3];
  let l = a,
    c;
  if (t[4] !== n) c = function () {
    if (r.current) return;
    r.current = true, i(), G("tengu_fullscreen_upsell_dialog_dismissed", {}), n();
  }, t[4] = n, t[5] = c;else c = t[5];
  let u = c,
    d = !LU(),
    p;
  if (t[6] === Symbol.for("react.memo_cache_sentinel")) p = eve.jsxs(U, {
    flexDirection: "column",
    children: [eve.jsxs(w, {
      dimColor: true,
      children: ["\xB7 Flicker-free output", d ? " \u2014 fixes the flashing you see during long responses" : ""]
    }), eve.jsx(w, {
      dimColor: true,
      children: "\xB7 Mouse support \u2014 click to move your cursor or expand results"
    }), eve.jsx(w, {
      dimColor: true,
      children: "\xB7 Selected text auto-copies to your clipboard"
    })]
  }), t[6] = p;else p = t[6];
  let f;
  if (t[7] !== l || t[8] !== u) f = eve.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [p, eve.jsx(Kl, {
      confirmLabel: "Yes, try it",
      cancelLabel: "Not now",
      onConfirm: l,
      onCancel: u
    })]
  }), t[7] = l, t[8] = u, t[9] = f;else f = t[9];
  let m;
  if (t[10] !== u || t[11] !== f) m = eve.jsx(zn, {
    title: "Try the new fullscreen renderer?",
    onCancel: u,
    children: f
  }), t[10] = u, t[11] = f, t[12] = m;else m = t[12];
  return m;
}
function gCm(e) {
  return (e.fullscreenUpsellSeenCount ?? 0) >= PYo ? e : {
    ...e,
    fullscreenUpsellSeenCount: PYo
  };
}
function hCm() {
  G("tengu_fullscreen_upsell_dialog_shown", {});
}
var uDc,
  Nfr,
  eve,
  PYo = 3;