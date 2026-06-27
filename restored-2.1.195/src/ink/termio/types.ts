// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mce
// matched 2.1.88 source: src/ink/termio/types.ts
// class=modified  jaccard=0.2755  score=0.8012  fileCov=0.2957
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Mce] deps: ink/supports-hyperlinks.ts, stack-utils/index.js
((p5i = R(lt(), 1)), (DLn = R(se(), 1)));
function f5i(e) {
  if (e.length === 0) return null;
  let t = e[0];
  if (t === "c")
    return {
      type: "reset",
    };
  if (t === "7")
    return {
      type: "cursor",
      action: {
        type: "save",
      },
    };
  if (t === "8")
    return {
      type: "cursor",
      action: {
        type: "restore",
      },
    };
  if (t === "D")
    return {
      type: "scroll",
      action: {
        type: "index",
      },
    };
  if (t === "M")
    return {
      type: "scroll",
      action: {
        type: "reverseIndex",
      },
    };
  if (t === "E")
    return {
      type: "cursor",
      action: {
        type: "nextLine",
        count: 1,
      },
    };
  if (t === "H") return null;
  if ("()".includes(t) && e.length >= 2) return null;
  return {
    type: "unknown",
    sequence: `\x1B${e}`,
  };
}
function bGe() {
  return {
    bold: false,
    dim: false,
    italic: false,
    underline: "none",
    blink: false,
    inverse: false,
    hidden: false,
    strikethrough: false,
    overline: false,
    fg: {
      type: "default",
    },
    bg: {
      type: "default",
    },
    underlineColor: {
      type: "default",
    },
  };
}
function wWd(e) {
  if (e === "")
    return [
      {
        value: 0,
        subparams: [],
        colon: false,
      },
    ];
  let t = [],
    n = {
      value: null,
      subparams: [],
      colon: false,
    },
    r = "",
    o = false;
  for (let s = 0; s <= e.length; s++) {
    let i = e[s];
    if (i === ";" || i === void 0) {
      let a = r === "" ? null : parseInt(r, 10);
      if (o) {
        if (a !== null) n.subparams.push(a);
      } else n.value = a;
      (t.push(n),
        (n = {
          value: null,
          subparams: [],
          colon: false,
        }),
        (r = ""),
        (o = false));
    } else if (i === ":") {
      let a = r === "" ? null : parseInt(r, 10);
      if (!o) ((n.value = a), (n.colon = true), (o = true));
      else if (a !== null) n.subparams.push(a);
      r = "";
    } else if (i >= "0" && i <= "9") r += i;
  }
  return t;
}
function CWd(e, t) {
  let n = e[t];
  if (!n) return null;
  if (n.colon && n.subparams.length >= 1) {
    if (n.subparams[0] === 5 && n.subparams.length >= 2)
      return {
        index: n.subparams[1],
      };
    if (n.subparams[0] === 2 && n.subparams.length >= 4) {
      let o = n.subparams.length >= 5 ? 1 : 0;
      return {
        r: n.subparams[1 + o],
        g: n.subparams[2 + o],
        b: n.subparams[3 + o],
      };
    }
  }
  let r = e[t + 1];
  if (!r) return null;
  if (r.value === 5 && e[t + 2]?.value !== null && e[t + 2]?.value !== void 0)
    return {
      index: e[t + 2].value,
    };
  if (r.value === 2) {
    let o = e[t + 2]?.value,
      s = e[t + 3]?.value,
      i = e[t + 4]?.value;
    if (o !== null && o !== void 0 && s !== null && s !== void 0 && i !== null && i !== void 0)
      return {
        r: o,
        g: s,
        b: i,
      };
  }
  return null;
}
function colorsEqual(e, t) {
  let n = wWd(e),
    r = {
      ...t,
    },
    o = 0;
  while (o < n.length) {
    let s = n[o],
      i = s.value ?? 0;
    if (i === 0) {
      ((r = bGe()), o++);
      continue;
    }
    if (i === 1) {
      ((r.bold = true), o++);
      continue;
    }
    if (i === 2) {
      ((r.dim = true), o++);
      continue;
    }
    if (i === 3) {
      ((r.italic = true), o++);
      continue;
    }
    if (i === 4) {
      ((r.underline = s.colon ? (vWd[s.subparams[0]] ?? "single") : "single"), o++);
      continue;
    }
    if (i === 5 || i === 6) {
      ((r.blink = true), o++);
      continue;
    }
    if (i === 7) {
      ((r.inverse = true), o++);
      continue;
    }
    if (i === 8) {
      ((r.hidden = true), o++);
      continue;
    }
    if (i === 9) {
      ((r.strikethrough = true), o++);
      continue;
    }
    if (i === 21) {
      ((r.underline = "double"), o++);
      continue;
    }
    if (i === 22) {
      ((r.bold = false), (r.dim = false), o++);
      continue;
    }
    if (i === 23) {
      ((r.italic = false), o++);
      continue;
    }
    if (i === 24) {
      ((r.underline = "none"), o++);
      continue;
    }
    if (i === 25) {
      ((r.blink = false), o++);
      continue;
    }
    if (i === 27) {
      ((r.inverse = false), o++);
      continue;
    }
    if (i === 28) {
      ((r.hidden = false), o++);
      continue;
    }
    if (i === 29) {
      ((r.strikethrough = false), o++);
      continue;
    }
    if (i === 53) {
      ((r.overline = true), o++);
      continue;
    }
    if (i === 55) {
      ((r.overline = false), o++);
      continue;
    }
    if (i >= 30 && i <= 37) {
      ((r.fg = {
        type: "named",
        name: PLn[i - 30],
      }),
        o++);
      continue;
    }
    if (i === 39) {
      ((r.fg = {
        type: "default",
      }),
        o++);
      continue;
    }
    if (i >= 40 && i <= 47) {
      ((r.bg = {
        type: "named",
        name: PLn[i - 40],
      }),
        o++);
      continue;
    }
    if (i === 49) {
      ((r.bg = {
        type: "default",
      }),
        o++);
      continue;
    }
    if (i >= 90 && i <= 97) {
      ((r.fg = {
        type: "named",
        name: PLn[i - 90 + 8],
      }),
        o++);
      continue;
    }
    if (i >= 100 && i <= 107) {
      ((r.bg = {
        type: "named",
        name: PLn[i - 100 + 8],
      }),
        o++);
      continue;
    }
    if (i === 38 || i === 48 || i === 58) {
      let a = CWd(n, o);
      if (a) {
        let c =
          "index" in a
            ? {
                type: "indexed",
                index: a.index,
              }
            : {
                type: "rgb",
                ...a,
              };
        if (i === 38) r.fg = c;
        else if (i === 48) r.bg = c;
        else r.underlineColor = c;
      }
      let l = n[o + 1]?.value;
      o += s.colon ? 1 : l === 5 ? 3 : l === 2 ? 5 : 1;
      continue;
    }
    if (i === 59) {
      ((r.underlineColor = {
        type: "default",
      }),
        o++);
      continue;
    }
    o++;
  }
  return r;
}
var PLn, vWd;
