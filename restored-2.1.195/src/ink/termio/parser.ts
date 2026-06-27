// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g5i
// matched 2.1.88 source: src/ink/termio/parser.ts
// class=modified  jaccard=0.44  score=0.6329  fileCov=0.5908
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module g5i]
((PLn = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite",
]),
  (vWd = ["none", "single", "double", "curly", "dotted", "dashed"]));
function* h5i(e) {
  let t = true;
  for (let n = 0; n < e.length; n++)
    if (e.charCodeAt(n) >= 128) {
      t = false;
      break;
    }
  if (t) {
    for (let n = 0; n < e.length; n++)
      yield {
        value: e[n],
        width: 1,
      };
    return;
  }
  for (let { segment: n } of BS().segment(e)) {
    if (n.length === 1) {
      let r = n.charCodeAt(0);
      if (r >= 32 && r < 127) {
        yield {
          value: n,
          width: 1,
        };
        continue;
      }
    }
    yield {
      value: n,
      width: Math.max(1, rn(n)),
    };
  }
}
function IWd(e) {
  if (e === "") return [];
  return e.split(/[;:]/).map((t) => (t === "" ? 0 : parseInt(t, 10)));
}
function xWd(e, t) {
  switch (e) {
    case p_.CURSOR_VISIBLE:
      return {
        type: "cursor",
        action: t
          ? {
              type: "show",
            }
          : {
              type: "hide",
            },
      };
    case p_.ALT_SCREEN_CLEAR:
    case p_.ALT_SCREEN:
      return {
        type: "mode",
        action: {
          type: "alternateScreen",
          enabled: t,
        },
      };
    case p_.BRACKETED_PASTE:
      return {
        type: "mode",
        action: {
          type: "bracketedPaste",
          enabled: t,
        },
      };
    case p_.MOUSE_NORMAL:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: t ? "normal" : "off",
        },
      };
    case p_.MOUSE_BUTTON:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: t ? "button" : "off",
        },
      };
    case p_.MOUSE_ANY:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: t ? "any" : "off",
        },
      };
    case p_.FOCUS_EVENTS:
      return {
        type: "mode",
        action: {
          type: "focusEvents",
          enabled: t,
        },
      };
    default:
      return null;
  }
}
function parseCSI(rawSequence) {
  let inner = rawSequence.slice(2);
  if (inner.length === 0) return null;
  let n = inner.charCodeAt(inner.length - 1),
    r = inner.slice(0, -1),
    o = "",
    s = r,
    i = "";
  if (r.length > 0 && "?>=<".includes(r[0])) ((o = r[0]), (s = r.slice(1)));
  let a = s.charCodeAt(s.length - 1);
  if (s.length > 0 && !(a >= 48 && a <= 59)) {
    let d = s.match(/([^0-9;:]+)$/);
    if (d) ((i = d[1]), (s = s.slice(0, -i.length)));
  }
  if (n === hb.SGR && o === "")
    return {
      type: "sgr",
      params: s,
    };
  let l = IWd(s),
    c = l[0] ?? 1,
    u = l[1] ?? 1;
  if (n === hb.CUU)
    return {
      type: "cursor",
      action: {
        type: "move",
        direction: "up",
        count: c,
      },
    };
  if (n === hb.CUD || n === hb.VPR)
    return {
      type: "cursor",
      action: {
        type: "move",
        direction: "down",
        count: c,
      },
    };
  if (n === hb.CUF || n === hb.HPR)
    return {
      type: "cursor",
      action: {
        type: "move",
        direction: "forward",
        count: c,
      },
    };
  if (n === hb.CUB)
    return {
      type: "cursor",
      action: {
        type: "move",
        direction: "back",
        count: c,
      },
    };
  if (n === hb.CNL)
    return {
      type: "cursor",
      action: {
        type: "nextLine",
        count: c,
      },
    };
  if (n === hb.CPL)
    return {
      type: "cursor",
      action: {
        type: "prevLine",
        count: c,
      },
    };
  if (n === hb.CHA || n === hb.HPA)
    return {
      type: "cursor",
      action: {
        type: "column",
        col: c,
      },
    };
  if (n === hb.CUP || n === hb.HVP)
    return {
      type: "cursor",
      action: {
        type: "position",
        row: c,
        col: u,
      },
    };
  if (n === hb.VPA)
    return {
      type: "cursor",
      action: {
        type: "row",
        row: c,
      },
    };
  if (n === hb.ED)
    return {
      type: "erase",
      action: {
        type: "display",
        region: SUi[l[0] ?? 0] ?? "toEnd",
      },
    };
  if (n === hb.EL)
    return {
      type: "erase",
      action: {
        type: "line",
        region: EUi[l[0] ?? 0] ?? "toEnd",
      },
    };
  if (n === hb.ECH)
    return {
      type: "erase",
      action: {
        type: "chars",
        count: c,
      },
    };
  if (n === hb.IL)
    return {
      type: "edit",
      action: {
        type: "insertLines",
        count: c,
      },
    };
  if (n === hb.DL)
    return {
      type: "edit",
      action: {
        type: "deleteLines",
        count: c,
      },
    };
  if (n === hb.ICH)
    return {
      type: "edit",
      action: {
        type: "insertChars",
        count: c,
      },
    };
  if (n === hb.DCH)
    return {
      type: "edit",
      action: {
        type: "deleteChars",
        count: c,
      },
    };
  if (n === hb.SU)
    return {
      type: "scroll",
      action: {
        type: "up",
        count: c,
      },
    };
  if (n === hb.SD)
    return {
      type: "scroll",
      action: {
        type: "down",
        count: c,
      },
    };
  if (n === hb.DECSTBM)
    return {
      type: "scroll",
      action: {
        type: "setRegion",
        top: c,
        bottom: l[1] ?? 0,
      },
    };
  if (n === hb.SCOSC)
    return {
      type: "cursor",
      action: {
        type: "save",
      },
    };
  if (n === hb.SCORC)
    return {
      type: "cursor",
      action: {
        type: "restore",
      },
    };
  if (n === hb.DECSCUSR && i === " ")
    return {
      type: "cursor",
      action: {
        type: "style",
        ...(MYr[c] ?? MYr[0]),
      },
    };
  if (o === "?" && (n === hb.SM || n === hb.RM)) {
    let d = n === hb.SM,
      p = [];
    for (let f of l) {
      let m = xWd(f, d);
      if (m) p.push(m);
    }
    return p.length
      ? p
      : {
          type: "unknown",
          sequence: rawSequence,
        };
  }
  return {
    type: "unknown",
    sequence: rawSequence,
  };
}
function RWd(e) {
  if (e.length < 2) return "unknown";
  if (e.charCodeAt(0) !== rne.ESC) return "unknown";
  let t = e.charCodeAt(1);
  if (t === 91) return "csi";
  if (t === 93) return "osc";
  if (t === 79) return "ss3";
  return "esc";
}
class MLn {
  tokenizer;
  forOutput;
  tail = "";
  constructor(e) {
    ((this.forOutput = e?.forOutput ?? false),
      (this.tokenizer = Qke({
        forOutput: this.forOutput,
      })));
  }
  style = bGe();
  inLink = false;
  linkUrl;
  flush() {
    if (!this.tail) return [];
    let e = this.processText(this.tail, false);
    return ((this.tail = ""), e);
  }
  reset() {
    ((this.tail = ""),
      this.tokenizer.reset(),
      (this.style = bGe()),
      (this.inLink = false),
      (this.linkUrl = void 0));
  }
  feed(e) {
    let t = this.tokenizer.feed(e),
      n = [];
    for (let r = 0; r < t.length; r++) {
      let o = t[r];
      if (o.type === "text") {
        let s = this.tail + o.value;
        this.tail = "";
        let i = this.forOutput && r === t.length - 1;
        n.push(...this.processText(s, i));
      } else {
        if (this.tail) (n.push(...this.processText(this.tail, false)), (this.tail = ""));
        n.push(...this.processSequence(o.value));
      }
    }
    return n;
  }
  processText(e, t) {
    let n = this.style;
    if (e.indexOf("\x07") === -1) {
      let s = [...h5i(e)];
      return (
        this.holdTail(s, t),
        s.length > 0
          ? [
              {
                type: "text",
                graphemes: s,
                style: n,
              },
            ]
          : []
      );
    }
    let r = [];
    for (let s of e.split("\x07")) {
      if (s) {
        let i = [...h5i(s)];
        if (i.length > 0)
          r.push({
            type: "text",
            graphemes: i,
            style: n,
          });
      }
      r.push({
        type: "bell",
      });
    }
    r.pop();
    let o = r.at(-1);
    if (o?.type === "text") {
      if ((this.holdTail(o.graphemes, t), o.graphemes.length === 0)) r.pop();
    }
    return r;
  }
  holdTail(e, t) {
    if (!t || e.length === 0) return;
    let n = e.at(-1),
      r = n.value.charCodeAt(n.value.length - 1);
    if (r < 32) return;
    if (((this.tail = n.value), e.pop(), r >= 55296 && r <= 56319 && e.length > 0))
      this.tail = e.pop().value + this.tail;
    while (e.length > 0 && this.tail.length <= 64) {
      let o = e.at(-1).value,
        s = o.charCodeAt(o.length - 1),
        i = s >= 56320 && s <= 57343 ? o.codePointAt(o.length - 2) : s;
      if (i === 8205 || (i !== void 0 && i >= 127462 && i <= 127487))
        ((this.tail = o + this.tail), e.pop());
      else break;
    }
  }
  processSequence(e) {
    switch (RWd(e)) {
      case "csi": {
        let n = parseCSI(e);
        if (!n) return [];
        if (Array.isArray(n)) return n;
        if (n.type === "sgr") return ((this.style = m5i(n.params, this.style)), []);
        return [n];
      }
      case "osc": {
        let n = e.slice(2);
        if (n.endsWith("\x07")) n = n.slice(0, -1);
        else if (n.endsWith("\x1B\\")) n = n.slice(0, -2);
        let r = MUi(n);
        if (r) {
          if (r.type === "link")
            if (r.action.type === "start") ((this.inLink = true), (this.linkUrl = r.action.url));
            else ((this.inLink = false), (this.linkUrl = void 0));
          return [r];
        }
        return [];
      }
      case "esc": {
        let n = e.slice(1),
          r = f5i(n);
        if (r?.type === "reset")
          ((this.style = bGe()), (this.inLink = false), (this.linkUrl = void 0));
        return r ? [r] : [];
      }
      case "ss3":
        return [
          {
            type: "unknown",
            sequence: e,
          },
        ];
      default:
        return [
          {
            type: "unknown",
            sequence: e,
          },
        ];
    }
  }
}
