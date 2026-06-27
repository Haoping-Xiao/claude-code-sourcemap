// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bBt
// matched 2.1.88 source: src/ink/parse-keypress.ts
// class=modified  jaccard=0.3411  score=0.4946  fileCov=0.5237
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var bBt = E(() => {
  one();
  OM();
  m4d = /^\[M[\x60-\x7f][\x20-\uffff]?$/;
});
function E4i(e) {
  return {
    kind: "key",
    name: "",
    fn: !1,
    ctrl: !1,
    meta: !1,
    shift: !1,
    option: !1,
    super: !1,
    sequence: e,
    raw: e,
    isPasted: !0,
  };
}
function A4i(e) {
  if (e.startsWith("\x1B[")) {
    let t;
    if ((t = y4d.exec(e)))
      return {
        type: "decrpm",
        mode: parseInt(t[1], 10),
        status: parseInt(t[2], 10),
      };
    if ((t = _4d.exec(e)))
      return {
        type: "da1",
        params: H4i(t[1]),
      };
    if ((t = b4d.exec(e)))
      return {
        type: "da2",
        params: H4i(t[1]),
      };
    if ((t = S4d.exec(e)))
      return {
        type: "kittyKeyboard",
        flags: parseInt(t[1], 10),
      };
    if ((t = E4d.exec(e)))
      return {
        type: "cursorPosition",
        row: parseInt(t[1], 10),
        col: parseInt(t[2], 10),
      };
    if ((t = A4d.exec(e)))
      return {
        type: "themeNotify",
        dark: t[1] === "1",
      };
    return null;
  }
  if (e.startsWith("\x1B]")) {
    let t = H4d.exec(e);
    if (t)
      return {
        type: "osc",
        code: parseInt(t[1], 10),
        data: t[2],
      };
  }
  if (e.startsWith("\x1BP")) {
    let t = T4d.exec(e);
    if (t)
      return {
        type: "xtversion",
        name: t[1],
      };
  }
  return null;
}
function H4i(e) {
  if (!e) return [];
  return e.split(";").map((t) => parseInt(t, 10));
}
function v4d(e, t) {
  let n = t.CLAUDE_CODE_BS_AS_CTRL_BACKSPACE;
  if (ut(n)) return !0;
  if (ml(n)) return !1;
  return e === "win32" && t.TERM_PROGRAM !== "mintty" && t.TERM !== "cygwin";
}
function V7r() {
  return v4d("linux", process.env);
}
function w4d(e, t) {
  let n = e.CLAUDE_CODE_ALTGR_AS_TEXT;
  if (ut(n)) return "force";
  if (ml(n)) return "off";
  return (t ?? !!e.WT_SESSION) ? "auto" : "off";
}
function C4d() {
  return w4d(process.env, fy()?.wtSession);
}
function I4d(e) {
  return (e > 32 && e < 127) || (e >= 160 && e < 55296);
}
function x4d(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
function T4i(e, t, n) {
  return {
    kind: "key",
    name: String.fromCodePoint(t),
    fn: !1,
    ctrl: !1,
    meta: !1,
    shift: n,
    option: !1,
    super: !1,
    sequence: e,
    raw: e,
    isPasted: !1,
  };
}
function v4i(e, t) {
  if (!(e.ctrl && e.meta) || e.super) return !1;
  if (!I4d(t)) return !1;
  let n = C4d();
  if (n === "off") return !1;
  return n === "force" || !x4d(t);
}
function k4d(e) {
  if (EBt.Buffer.isBuffer(e)) {
    if (e[0] > 127 && e[1] === void 0) return ((e[0] -= 128), "\x1B" + String(e));
    else return String(e);
  } else if (e !== void 0 && typeof e !== "string") return String(e);
  else if (!e) return "";
  else return e;
}
function P4i(e, t = "") {
  let n = t === null,
    r = n ? "" : k4d(t),
    o =
      e._tokenizer ??
      Qke({
        x10Mouse: !0,
      }),
    s = n ? o.flush() : o.feed(r),
    i = [],
    a = e.mode === "IN_PASTE",
    l = e.pasteBuffer,
    c = e.pendingByteEvents;
  function u(m) {
    if (a) l += String.fromCharCode(m.byte);
    else i.push(SBt(m.seq));
  }
  function d() {
    for (let m of c) u(m);
    c = [];
  }
  function p(m, g) {
    if (c.length === 0) {
      if (g >= 194 && g <= 244) {
        c = [
          {
            seq: m,
            byte: g,
          },
        ];
        return;
      }
      u({
        seq: m,
        byte: g,
      });
      return;
    }
    if (g >= 128 && g <= 191) {
      c = [
        ...c,
        {
          seq: m,
          byte: g,
        },
      ];
      let h = c[0].byte,
        y = h <= 223 ? 2 : h <= 239 ? 3 : 4;
      if (c.length < y) return;
      let b = c;
      c = [];
      let _ = EBt.Buffer.from(b.map((A) => A.byte)).toString("utf8");
      if ([..._].length !== 1 || EBt.Buffer.byteLength(_, "utf8") !== b.length)
        for (let A of b) u(A);
      else if (a) l += _;
      else i.push(SBt(_));
      return;
    }
    (d(), p(m, g));
  }
  for (let m of s)
    if (m.type === "sequence") {
      if (m.value === wUi) (d(), (a = !0), (l = ""));
      else if (m.value === CUi) (d(), i.push(E4i(l)), (a = !1), (l = ""));
      else if (a) {
        if (k4i(m.value)) continue;
        let g = I4i(m.value);
        if (g !== void 0) {
          p(m.value, g);
          continue;
        }
        if (!A4i(m.value) && !x4i.test(m.value)) d();
        l += P4d(m.value);
      } else {
        let g = I4i(m.value);
        if (g !== void 0) {
          p(m.value, g);
          continue;
        }
        let h = A4i(m.value);
        if (h) {
          i.push({
            kind: "response",
            sequence: m.value,
            response: h,
          });
          continue;
        }
        let y = R4i(m.value);
        if (y) {
          i.push(y);
          continue;
        }
        if (m.value === Nke || (!k4i(m.value) && !x4i.test(m.value))) d();
        i.push(SBt(m.value));
      }
    } else if (m.type === "text")
      if ((d(), a)) l += m.value;
      else if (
        /^\[<\d+;\d+;\d+[Mm]$/.test(m.value) ||
        /^\[M[\x60-\x7f][\x20-\uffff]{2}$/.test(m.value)
      ) {
        let g = "\x1B" + m.value,
          h = R4i(g);
        i.push(h ?? SBt(g));
      } else i.push(SBt(m.value));
  if (n) d();
  if (n && a) {
    if (l) i.push(E4i(l));
    ((a = !1), (l = ""));
  }
  let f = {
    mode: a ? "IN_PASTE" : "NORMAL",
    incomplete: o.buffer(),
    pasteBuffer: l,
    pendingByteEvents: c,
    _tokenizer: o,
  };
  return [i, f];
}
function w4i(e) {
  let t = e - 1;
  return {
    shift: !!(t & 1),
    meta: !!(t & 2),
    ctrl: !!(t & 4),
    super: !!(t & 8),
  };
}
function C4i(e) {
  switch (e) {
    case 9:
      return "tab";
    case 13:
      return "return";
    case 27:
      return "escape";
    case 32:
      return "space";
    case 127:
      return "backspace";
    case 57399:
      return "0";
    case 57400:
      return "1";
    case 57401:
      return "2";
    case 57402:
      return "3";
    case 57403:
      return "4";
    case 57404:
      return "5";
    case 57405:
      return "6";
    case 57406:
      return "7";
    case 57407:
      return "8";
    case 57408:
      return "9";
    case 57409:
      return ".";
    case 57410:
      return "/";
    case 57411:
      return "*";
    case 57412:
      return "-";
    case 57413:
      return "+";
    case 57414:
      return "return";
    case 57415:
      return "=";
    case 57416:
      return ",";
    case 57417:
      return "left";
    case 57418:
      return "right";
    case 57419:
      return "up";
    case 57420:
      return "down";
    case 57421:
      return "pageup";
    case 57422:
      return "pagedown";
    case 57423:
      return "home";
    case 57424:
      return "end";
    case 57425:
      return "insert";
    case 57426:
      return "delete";
    default:
      if (e >= 32 && e <= 126) return String.fromCharCode(e).toLowerCase();
      if (e >= 160 && e < 55296) return String.fromCodePoint(e);
      return;
  }
}
function I4i(e) {
  let t,
    n,
    r = G7r.exec(e);
  if (r) ((t = parseInt(r[1], 10)), (n = r[2] === void 0 ? void 0 : parseInt(r[2], 10)));
  else if ((r = W7r.exec(e))) ((n = parseInt(r[1], 10)), (t = parseInt(r[2], 10)));
  if (t === void 0 || t < 128 || t > 255) return;
  if (n !== void 0 && n !== 1) return;
  return t;
}
function P4d(e) {
  let t = G7r.exec(e),
    n = t ? parseInt(t[1], 10) : void 0;
  if (n === void 0 && (t = W7r.exec(e))) n = parseInt(t[2], 10);
  if (n !== void 0 && n <= 1114111) return String.fromCodePoint(n);
  return e;
}
function k4i(e) {
  return e === X3e || e === Nke || q7r.test(e) || M4d.test(e);
}
function R4i(e) {
  let t = q7r.exec(e);
  if (!t) return null;
  let n = parseInt(t[1], 10);
  if ((n & 64) !== 0) return null;
  return {
    kind: "mouse",
    button: n,
    action: t[4] === "M" ? "press" : "release",
    col: parseInt(t[2], 10),
    row: parseInt(t[3], 10),
    sequence: e,
  };
}
function SBt(e = "") {
  let t,
    n = {
      kind: "key",
      name: "",
      fn: !1,
      ctrl: !1,
      meta: !1,
      shift: !1,
      option: !1,
      super: !1,
      sequence: e,
      raw: e,
      isPasted: !1,
    };
  n.sequence = n.sequence || e || n.name;
  let r;
  if ((r = G7r.exec(e))) {
    let o = parseInt(r[1], 10),
      s = r[2] ? parseInt(r[2], 10) : 1,
      i = w4i(s);
    if (v4i(i, o)) return T4i(e, o, i.shift);
    return {
      kind: "key",
      name: C4i(o),
      fn: !1,
      ctrl: i.ctrl,
      meta: i.meta,
      shift: i.shift,
      option: !1,
      super: i.super,
      sequence: e,
      raw: e,
      isPasted: !1,
    };
  }
  if ((r = W7r.exec(e))) {
    let o = w4i(parseInt(r[1], 10)),
      s = parseInt(r[2], 10);
    if (v4i(o, s)) return T4i(e, s, o.shift);
    return {
      kind: "key",
      name: C4i(s),
      fn: !1,
      ctrl: o.ctrl,
      meta: o.meta,
      shift: o.shift,
      option: !1,
      super: o.super,
      sequence: e,
      raw: e,
      isPasted: !1,
    };
  }
  if ((r = q7r.exec(e))) {
    let o = parseInt(r[1], 10),
      s = parseInt(r[2], 10),
      i = parseInt(r[3], 10);
    return L4i(e, o, s, i) ?? Zke(e, "mouse", !1);
  }
  if (e.length === 6 && e.startsWith("\x1B[M")) {
    let o = e.charCodeAt(3) - 32,
      s = e.charCodeAt(4) - 32,
      i = e.charCodeAt(5) - 32;
    return L4i(e, o, s, i) ?? Zke(e, "mouse", !1);
  }
  if (e === "\r" || e === "\x1B\r")
    ((n.raw = void 0), (n.name = "return"), (n.meta = e.length === 2));
  else if (
    e ===
      `
` ||
    e ===
      `\x1B
`
  )
    ((n.name = "enter"), (n.meta = e.length === 2));
  else if (e === "\t" || e === "\x1B\t") ((n.name = "tab"), (n.meta = e.length === 2));
  else if (e === "\b" || e === "\x1B\b") {
    if (((n.name = "backspace"), (n.meta = e.charAt(0) === "\x1B"), V7r())) n.ctrl = !0;
  } else if (e === "\x7F" || e === "\x1B\x7F")
    ((n.name = "backspace"), (n.meta = e.charAt(0) === "\x1B"));
  else if (e === "\x1B" || e === "\x1B\x1B") ((n.name = "escape"), (n.meta = e.length === 2));
  else if (e === " " || e === "\x1B ") ((n.name = "space"), (n.meta = e.length === 2));
  else if (e === "\x1C") ((n.name = "\\"), (n.ctrl = !0));
  else if (e === "\x1D") ((n.name = "]"), (n.ctrl = !0));
  else if (e === "\x1E") ((n.name = "^"), (n.ctrl = !0));
  else if (e === "\x1F") ((n.name = "_"), (n.ctrl = !0));
  else if (e <= "\x1A" && e.length === 1)
    ((n.name = String.fromCharCode(e.charCodeAt(0) + 97 - 1)), (n.ctrl = !0));
  else if (e.length === 1 && e >= "0" && e <= "9") n.name = "number";
  else if (e.length === 1 && e >= "a" && e <= "z") n.name = e;
  else if (e.length === 1 && e >= "A" && e <= "Z") ((n.name = e.toLowerCase()), (n.shift = !0));
  else if ((t = g4d.exec(e)))
    ((n.meta = !0), (n.shift = /^[A-Z]$/.test(t[1])), (n.name = t[1].toLowerCase()));
  else if ((t = h4d.exec(e))) {
    let o = [...e];
    if (o[0] === "\x1B" && o[1] === "\x1B") n.option = !0;
    let s = [t[1], t[2], t[4], t[6]].filter(Boolean).join(""),
      i = (t[3] || t[5] || 1) - 1;
    ((n.ctrl = !!(i & 4)),
      (n.meta = !!(i & 2)),
      (n.super = !!(i & 8)),
      (n.shift = !!(i & 1)),
      (n.code = s),
      (n.name = R4d[s]),
      (n.shift = L4d(s) || n.shift),
      (n.ctrl = D4d(s) || n.ctrl));
  }
  if (n.raw === "\x1Bb") ((n.meta = !0), (n.name = "left"));
  else if (n.raw === "\x1Bf") ((n.meta = !0), (n.name = "right"));
  switch (e) {
    case "\x1B[1~":
      return Zke(e, "home", !1);
    case "\x1B[4~":
      return Zke(e, "end", !1);
    case "\x1B[5~":
      return Zke(e, "pageup", !1);
    case "\x1B[6~":
      return Zke(e, "pagedown", !1);
    case "\x1B[1;5D":
      return Zke(e, "left", !0);
    case "\x1B[1;5C":
      return Zke(e, "right", !0);
  }
  return n;
}
function L4i(e, t, n, r) {
  let o = t & 67;
  if (o !== 64 && o !== 65) return null;
  return {
    kind: "key",
    name: o === 64 ? "wheelup" : "wheeldown",
    ctrl: (t & 16) !== 0,
    meta: (t & 8) !== 0,
    shift: (t & 4) !== 0,
    option: !1,
    super: !1,
    fn: !1,
    sequence: e,
    raw: e,
    isPasted: !1,
    col: n,
    row: r,
  };
}
function Zke(e, t, n) {
  return {
    kind: "key",
    name: t,
    ctrl: n,
    meta: !1,
    shift: !1,
    option: !1,
    super: !1,
    fn: !1,
    sequence: e,
    raw: e,
    isPasted: !1,
  };
}
var EBt,
  g4d,
  h4d,
  G7r,
  W7r,
  y4d,
  _4d,
  b4d,
  S4d,
  E4d,
  A4d,
  H4d,
  T4d,
  q7r,
  D4i,
  R4d,
  L4d = (e) =>
    ["[a", "[b", "[c", "[d", "[e", "[2$", "[3$", "[5$", "[6$", "[7$", "[8$", "[Z"].includes(e),
  D4d = (e) => ["Oa", "Ob", "Oc", "Od", "Oe", "[2^", "[3^", "[5^", "[6^", "[7^", "[8^"].includes(e),
  M4d,
  x4i;
