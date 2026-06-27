// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Gi
// matched 2.1.88 source: src/ink/components/Box.tsx
// class=modified  jaccard=0.3855  score=0.4801  fileCov=0.6617
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var $Gi = Q((NXh, MGi) => {
  var oGd = LGi(),
    sGd =
      typeof process === "object" && process && typeof process.cwd === "function"
        ? process.cwd()
        : ".",
    PGi = []
      .concat(require("module").builtinModules, "bootstrap_node", "node")
      .map(
        (e) =>
          new RegExp(
            `(?:\\((?:node:)?${e}(?:\\.js)?:\\d+:\\d+\\)$|^\\s*at (?:node:)?${e}(?:\\.js)?:\\d+:\\d+$)`,
          ),
      );
  PGi.push(
    /\((?:node:)?internal\/[^:]+:\d+:\d+\)$/,
    /\s*at (?:node:)?internal\/[^:]+:\d+:\d+$/,
    /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/,
  );
  class tJr {
    constructor(e) {
      if (
        ((e = {
          ignoredPackages: [],
          ...e,
        }),
        "internals" in e === !1)
      )
        e.internals = tJr.nodeInternals();
      if ("cwd" in e === !1) e.cwd = sGd;
      ((this._cwd = e.cwd.replace(/\\/g, "/")),
        (this._internals = [].concat(e.internals, iGd(e.ignoredPackages))),
        (this._wrapCallSite = e.wrapCallSite || !1));
    }
    static nodeInternals() {
      return [...PGi];
    }
    clean(e, t = 0) {
      if (((t = " ".repeat(t)), !Array.isArray(e)))
        e = e.split(`
`);
      if (!/^\s*at /.test(e[0]) && /^\s*at /.test(e[1])) e = e.slice(1);
      let n = !1,
        r = null,
        o = [];
      return (
        e.forEach((s) => {
          if (((s = s.replace(/\\/g, "/")), this._internals.some((a) => a.test(s)))) return;
          let i = /^\s*at /.test(s);
          if (n) s = s.trimEnd().replace(/^(\s+)at /, "$1");
          else if (((s = s.trim()), i)) s = s.slice(3);
          if (((s = s.replace(`${this._cwd}/`, "")), s))
            if (i) {
              if (r) (o.push(r), (r = null));
              o.push(s);
            } else ((n = !0), (r = s));
        }),
        o
          .map(
            (s) => `${t}${s}
`,
          )
          .join("")
      );
    }
    captureString(e, t = this.captureString) {
      if (typeof e === "function") ((t = e), (e = 1 / 0));
      let { stackTraceLimit: n } = Error;
      if (e) Error.stackTraceLimit = e;
      let r = {};
      Error.captureStackTrace(r, t);
      let { stack: o } = r;
      return ((Error.stackTraceLimit = n), this.clean(o));
    }
    capture(e, t = this.capture) {
      if (typeof e === "function") ((t = e), (e = 1 / 0));
      let { prepareStackTrace: n, stackTraceLimit: r } = Error;
      if (
        ((Error.prepareStackTrace = (i, a) => {
          if (this._wrapCallSite) return a.map(this._wrapCallSite);
          return a;
        }),
        e)
      )
        Error.stackTraceLimit = e;
      let o = {};
      Error.captureStackTrace(o, t);
      let { stack: s } = o;
      return (
        Object.assign(Error, {
          prepareStackTrace: n,
          stackTraceLimit: r,
        }),
        s
      );
    }
    at(e = this.at) {
      let [t] = this.capture(1, e);
      if (!t) return {};
      let n = {
        line: t.getLineNumber(),
        column: t.getColumnNumber(),
      };
      if ((DGi(n, t.getFileName(), this._cwd), t.isConstructor()))
        Object.defineProperty(n, "constructor", {
          value: !0,
          configurable: !0,
        });
      if (t.isEval()) n.evalOrigin = t.getEvalOrigin();
      if (t.isNative()) n.native = !0;
      let r;
      try {
        r = t.getTypeName();
      } catch (i) {}
      if (r && r !== "Object" && r !== "[object Object]") n.type = r;
      let o = t.getFunctionName();
      if (o) n.function = o;
      let s = t.getMethodName();
      if (s && o !== s) n.method = s;
      return n;
    }
    parseLine(e) {
      let t = e && e.match(aGd);
      if (!t) return null;
      let n = t[1] === "new",
        r = t[2],
        o = t[3],
        s = t[4],
        i = Number(t[5]),
        a = Number(t[6]),
        l = t[7],
        c = t[8],
        u = t[9],
        d = t[10] === "native",
        p = t[11] === ")",
        f,
        m = {};
      if (c) m.line = Number(c);
      if (u) m.column = Number(u);
      if (p && l) {
        let g = 0;
        for (let h = l.length - 1; h > 0; h--)
          if (l.charAt(h) === ")") g++;
          else if (l.charAt(h) === "(" && l.charAt(h - 1) === " ") {
            if ((g--, g === -1 && l.charAt(h - 1) === " ")) {
              let y = l.slice(0, h - 1);
              ((l = l.slice(h + 1)), (r += ` (${y}`));
              break;
            }
          }
      }
      if (r) {
        let g = r.match(lGd);
        if (g) ((r = g[1]), (f = g[2]));
      }
      if ((DGi(m, l, this._cwd), n))
        Object.defineProperty(m, "constructor", {
          value: !0,
          configurable: !0,
        });
      if (o)
        ((m.evalOrigin = o),
          (m.evalLine = i),
          (m.evalColumn = a),
          (m.evalFile = s && s.replace(/\\/g, "/")));
      if (d) m.native = !0;
      if (r) m.function = r;
      if (f && r !== f) m.method = f;
      return m;
    }
  }
  function DGi(e, t, n) {
    if (t) {
      if (((t = t.replace(/\\/g, "/")), t.startsWith(`${n}/`))) t = t.slice(n.length + 1);
      e.file = t;
    }
  }
  function iGd(e) {
    if (e.length === 0) return [];
    let t = e.map((n) => oGd(n));
    return new RegExp(`[/\\\\]node_modules[/\\\\](?:${t.join("|")})[/\\\\][^:]+:\\d+:\\d+`);
  }
  var aGd = new RegExp(
      "^(?:\\s*at )?(?:(new) )?(?:(.*?) \\()?(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?(?:(.+?):(\\d+):(\\d+)|(native))(\\)?)$",
    ),
    lGd = /^(.*?) \[as (.*?)\]$/;
  MGi.exports = tJr;
});
function hLn(e, t, n, r) {
  if (e === void 0 && t === void 0 && n === void 0 && r === void 0) return;
  return {
    hidden: e,
    label: t,
    role: n,
    state: r,
  };
}
function cGd({
  children: e,
  ref: t,
  tabIndex: n,
  autoFocus: r,
  onClick: o,
  onFocus: s,
  onFocusCapture: i,
  onBlur: a,
  onBlurCapture: l,
  onMouseEnter: c,
  onMouseLeave: u,
  hoverIgnoresBlankCells: d,
  onKeyDown: p,
  onKeyDownCapture: f,
  onPaste: m,
  onPasteCapture: g,
  onWheel: h,
  onWheelCapture: y,
  keybindingScope: b,
  onAction: _,
  onActionCapture: S,
  "aria-hidden": A,
  "aria-label": v,
  "aria-role": C,
  "aria-state": x,
  ...I
}) {
  if (
    (TI(I.margin, "margin"),
    TI(I.marginX, "marginX"),
    TI(I.marginY, "marginY"),
    TI(I.marginTop, "marginTop"),
    TI(I.marginBottom, "marginBottom"),
    I.marginLeft !== "auto")
  )
    TI(I.marginLeft, "marginLeft");
  if (I.marginRight !== "auto") TI(I.marginRight, "marginRight");
  return (
    TI(I.padding, "padding"),
    TI(I.paddingX, "paddingX"),
    TI(I.paddingY, "paddingY"),
    TI(I.paddingTop, "paddingTop"),
    TI(I.paddingBottom, "paddingBottom"),
    TI(I.paddingLeft, "paddingLeft"),
    TI(I.paddingRight, "paddingRight"),
    TI(I.gap, "gap"),
    TI(I.columnGap, "columnGap"),
    TI(I.rowGap, "rowGap"),
    (I.flexWrap ??= "nowrap"),
    (I.flexDirection ??= "row"),
    (I.flexGrow ??= 0),
    (I.flexShrink ??= 1),
    (I.overflowX = I.overflowX ?? I.overflow ?? "visible"),
    (I.overflowY = I.overflowY ?? I.overflow ?? "visible"),
    OGi.jsx("ink-box", {
      ref: t,
      tabIndex: n,
      autoFocus: r,
      onClick: o,
      onFocus: s,
      onFocusCapture: i,
      onBlur: a,
      onBlurCapture: l,
      onMouseEnter: c,
      onMouseLeave: u,
      hoverIgnoresBlankCells: d,
      onKeyDown: p,
      onKeyDownCapture: f,
      onPaste: m,
      onPasteCapture: g,
      onWheel: h,
      onWheelCapture: y,
      keybindingScope: b,
      onAction: _,
      onActionCapture: S,
      accessibility: hLn(A, v, C, x),
      style: I,
      children: e,
    })
  );
}
var OGi, Iy;
