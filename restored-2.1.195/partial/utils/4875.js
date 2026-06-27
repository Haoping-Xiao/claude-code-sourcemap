// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hFo
// matched 2.1.88 source: src/utils/permissions/PermissionMode.ts
// class=partial  jaccard=0.0782  score=0.2321  fileCov=0.1055
// note: low-confidence suggestion: src/utils/permissions/PermissionMode.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hFo] deps: cEe, loe, Xa, w4, Tc, Ye, ps, nk, Mne
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
function dAt(e) {
  let t = OXt.c(2),
    {
      children: n
    } = e,
    r;
  if (t[0] !== n) r = Ys.jsx(w, {
    bold: true,
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
    dimColor: true,
    italic: true,
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
    dimColor: true,
    italic: true,
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