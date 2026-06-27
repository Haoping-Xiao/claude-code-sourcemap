// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hFo
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0124  score=0.2626  fileCov=0.0129
// note: nearest: src/components/Settings/Config.tsx (0.0124); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hFo = E(() => {
  cEe();
  loe();
  Xa();
  w4();
  Tc();
  Ye();
  ps();
  nk();
  Mne();
  $Xt = R(lt(), 1), uAt = R(rt(), 1), gR = R(se(), 1);
  k2f = /\[(\w+):([^\]]*)\]/g;
  wGl = [{
    label: "default",
    symbol: "",
    color: "text"
  }, {
    label: "accept edits on",
    symbol: "\u23F5\u23F5",
    color: "autoAccept"
  }, {
    label: "plan mode on",
    symbol: Bfn,
    color: "planMode"
  }, {
    label: "auto mode on",
    symbol: "\u23F5\u23F5",
    color: "warning"
  }], O2f = [BO, mv, gc, "\xB7"], N2f = ["claude", "success", "warning", "suggestion", "autoAccept"];
});
function dAt(e) {
  let t = OXt.c(2),
    {
      children: n
    } = e,
    r;
  if (t[0] !== n) r = Ys.jsx(w, {
    bold: !0,
    color: "claude",
    children: n
  }), t[0] = n, t[1] = r;else r = t[1];
  return r;
}
function cw(e) {
  let t = OXt.c(2),
    {
      children: n
    } = e,
    r;
  if (t[0] !== n) r = Ys.jsx(w, {
    color: "suggestion",
    children: n
  }), t[0] = n, t[1] = r;else r = t[1];
  return r;
}
function RGl() {
  let e = OXt.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = Ys.jsx(w, {
    dimColor: !0,
    italic: !0,
    children: Ys.jsxs(Tn, {
      children: [Ys.jsx(ht, {
        chord: ["up", "down"],
        action: "select"
      }), Ys.jsx(ht, {
        chord: "enter",
        action: "open"
      }), Ys.jsx(ht, {
        chord: "escape",
        action: "close"
      })]
    })
  }), e[0] = t;else t = e[0];
  return t;
}
function LGl() {
  let e = OXt.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = Ys.jsx(w, {
    dimColor: !0,
    italic: !0,
    children: Ys.jsxs(Tn, {
      children: [Ys.jsx(ht, {
        chord: "enter",
        action: "mark done"
      }), Ys.jsx(ht, {
        chord: "escape",
        action: "back"
      })]
    })
  }), e[0] = t;else t = e[0];
  return t;
}
var OXt, Ys, Sz;