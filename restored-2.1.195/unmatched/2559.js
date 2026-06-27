// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Pn
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/entities.js
// class=new  jaccard=0.0048  score=0.2978  fileCov=0.0049
// note: nearest: node_modules/@xmldom/xmldom/lib/entities.js (0.0048); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Pn = E(() => {
  J6d = {
    default: {
      keyCase: "title",
      modCase: "lower",
      caretCtrl: !1,
      modSep: "+",
      arrowSep: "/",
      chordSep: " ",
      shiftAsCase: !1,
      charCase: "preserve",
      platform: "other"
    },
    compact: {
      keyCase: "lower",
      modCase: "lower",
      caretCtrl: !0,
      modSep: "+",
      arrowSep: "",
      chordSep: " ",
      shiftAsCase: !0,
      charCase: "preserve",
      platform: "other"
    },
    symbol: {
      keyCase: "glyph",
      modCase: "glyph",
      caretCtrl: !1,
      modSep: "",
      arrowSep: "",
      chordSep: " ",
      shiftAsCase: !0,
      charCase: "upper",
      platform: "other"
    }
  };
  ezd = {
    enter: ["Enter", "enter", "\u23CE"],
    escape: ["Esc", "esc", "\u238B"],
    tab: ["Tab", "tab", "\u21E5"],
    " ": ["Space", "space", "\u2423"],
    backspace: ["Backspace", "backspace", "\u232B"],
    delete: ["Delete", "delete", "\u2326"],
    up: ["\u2191", "\u2191", "\u2191"],
    down: ["\u2193", "\u2193", "\u2193"],
    left: ["\u2190", "\u2190", "\u2190"],
    right: ["\u2192", "\u2192", "\u2192"],
    pageup: ["PageUp", "pgup", "\u21DE"],
    pagedown: ["PageDown", "pgdn", "\u21DF"],
    home: ["Home", "home", "\u2196"],
    end: ["End", "end", "\u2198"]
  }, tzd = {
    title: 0,
    lower: 1,
    glyph: 2
  }, nzd = {
    ctrl: {
      lower: "ctrl",
      title: "Ctrl",
      glyph: "\u2303"
    },
    shift: {
      lower: "shift",
      title: "Shift",
      glyph: "\u21E7"
    },
    alt: {
      lower: e => e === "macos" ? "opt" : "alt",
      title: e => e === "macos" ? "Opt" : "Alt",
      glyph: "\u2325"
    },
    super: {
      lower: e => e === "macos" ? "cmd" : "super",
      title: e => e === "macos" ? "Cmd" : "Super",
      glyph: "\u2318"
    }
  }, rzd = new Set(["up", "down", "left", "right"]), ozd = {
    ctrl: !1,
    alt: !1,
    shift: !1,
    meta: !1,
    super: !1
  };
});
function ht(e) {
  let t = U6i.c(12),
    {
      chord: n,
      action: r,
      format: o,
      parens: s,
      bold: i
    } = e,
    a = s === void 0 ? !1 : s,
    l = i === void 0 ? !1 : i,
    c;
  if (t[0] !== n || t[1] !== o) c = B0e((typeof n === "string" ? [n] : n).map(CW), o), t[0] = n, t[1] = o, t[2] = c;else c = t[2];
  let u = c;
  if (!u) return null;
  let d;
  if (t[3] !== l || t[4] !== u) d = l ? DUt.jsx(nS, {
    bold: !0,
    children: u
  }) : u, t[3] = l, t[4] = u, t[5] = d;else d = t[5];
  let p = d;
  if (a) {
    let m;
    if (t[6] !== r || t[7] !== p) m = DUt.jsxs(nS, {
      children: ["(", p, " to ", r, ")"]
    }), t[6] = r, t[7] = p, t[8] = m;else m = t[8];
    return m;
  }
  let f;
  if (t[9] !== r || t[10] !== p) f = DUt.jsxs(nS, {
    children: [p, " to ", r]
  }), t[9] = r, t[10] = p, t[11] = f;else f = t[11];
  return f;
}
var U6i, DUt;