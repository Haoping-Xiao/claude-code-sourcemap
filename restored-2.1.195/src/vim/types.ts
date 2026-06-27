// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R1o
// matched 2.1.88 source: src/vim/types.ts
// class=modified  jaccard=0.272  score=0.6604  fileCov=0.3162
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module R1o]
wtr = {
  d: "delete",
  c: "change",
  y: "yank",
};
((Ctr = new Set(["h", "l", " ", "j", "k", "w", "b", "e", "W", "B", "E", "0", "^", "$"])),
  (Itr = new Set(["f", "F", "t", "T"])),
  (xtr = {
    i: "inner",
    a: "around",
  }));
k1o = new Set(["w", "W", '"', "'", "`", "(", ")", "b", "[", "]", "{", "}", "B", "<", ">"]);
function L1o(e, t, n) {
  switch (e.type) {
    case "idle":
      return dLf(t, n);
    case "count":
      return pLf(e, t, n);
    case "operator":
      return fLf(e, t, n);
    case "operatorCount":
      return mLf(e, t, n);
    case "operatorFind":
      return gLf(e, t, n);
    case "operatorTextObj":
      return hLf(e, t, n);
    case "find":
      return yLf(e, t, n);
    case "g":
      return _Lf(e, t, n);
    case "operatorG":
      return bLf(e, t, n);
    case "replace":
      return SLf(e, t, n);
    case "indent":
      return ELf(e, t, n);
  }
}
function k$l(e, t, n) {
  if (I1o(e))
    return {
      next: {
        type: "operator",
        op: wtr[e],
        count: t,
      },
    };
  if (Ctr.has(e))
    return {
      execute: () => {
        let r = yKe(e, n.cursor, t);
        n.setOffset(r.offset);
      },
    };
  if (Itr.has(e))
    return {
      next: {
        type: "find",
        find: e,
        count: t,
      },
    };
  if (e === "g")
    return {
      next: {
        type: "g",
        count: t,
      },
    };
  if (e === "r")
    return {
      next: {
        type: "replace",
        count: t,
      },
    };
  if (e === ">" || e === "<")
    return {
      next: {
        type: "indent",
        dir: e,
        count: t,
      },
    };
  if (e === "~")
    return {
      execute: () => Etr(t, n),
    };
  if (e === "x")
    return {
      execute: () => btr(t, n),
    };
  if (e === "J")
    return {
      execute: () => Atr(t, n),
    };
  if (e === "p" || e === "P")
    return {
      execute: () => l$l(e === "p", t, n),
    };
  if (e === "D")
    return {
      execute: () => _Ke("delete", "$", 1, n),
    };
  if (e === "C")
    return {
      execute: () => _Ke("change", "$", 1, n),
    };
  if (e === "Y")
    return {
      execute: () => H1o("yank", t, n),
    };
  if (e === "G")
    return {
      execute: () => {
        if (t === 1) n.setOffset(n.cursor.startOfLastLine().offset);
        else n.setOffset(n.cursor.goToLine(t).offset);
      },
    };
  if (e === ".")
    return {
      execute: () => n.onDotRepeat?.(),
    };
  if (e === ";" || e === ",")
    return {
      execute: () => L$l(e === ",", t, n),
    };
  if (e === "u")
    return {
      execute: () => n.onUndo?.(),
    };
  if (e === "i")
    return {
      execute: () => n.enterInsert(n.cursor.offset),
    };
  if (e === "I")
    return {
      execute: () => n.enterInsert(n.cursor.firstNonBlankInLogicalLine().offset),
    };
  if (e === "a")
    return {
      execute: () => {
        let r = n.cursor.isAtEnd() ? n.cursor.offset : n.cursor.right().offset;
        n.enterInsert(r);
      },
    };
  if (e === "A")
    return {
      execute: () => n.enterInsert(n.cursor.endOfLogicalLine().offset),
    };
  if (e === "o")
    return {
      execute: () => x7t("below", n),
    };
  if (e === "O")
    return {
      execute: () => x7t("above", n),
    };
  return null;
}
function R$l(e, t, n, r) {
  if (x1o(n))
    return {
      next: {
        type: "operatorTextObj",
        op: e,
        count: t,
        scope: xtr[n],
      },
    };
  if (Itr.has(n))
    return {
      next: {
        type: "operatorFind",
        op: e,
        count: t,
        find: n,
      },
    };
  if (Ctr.has(n))
    return {
      execute: () => _Ke(e, n, t, r),
    };
  if (n === "G")
    return {
      execute: () => w$l(e, t, r),
    };
  if (n === "g")
    return {
      next: {
        type: "operatorG",
        op: e,
        count: t,
      },
    };
  return null;
}
function dLf(e, t) {
  if (/[1-9]/.test(e))
    return {
      next: {
        type: "count",
        digits: e,
      },
    };
  if (e === "0")
    return {
      execute: () => t.setOffset(t.cursor.startOfLogicalLine().offset),
    };
  let n = k$l(e, 1, t);
  if (n) return n;
  return {};
}
function pLf(e, t, n) {
  if (/[0-9]/.test(t)) {
    let s = e.digits + t,
      i = Math.min(parseInt(s, 10), ktr);
    return {
      next: {
        type: "count",
        digits: String(i),
      },
    };
  }
  let r = parseInt(e.digits, 10),
    o = k$l(t, r, n);
  if (o) return o;
  return {
    next: {
      type: "idle",
    },
  };
}
function fLf(e, t, n) {
  if (t === e.op[0])
    return {
      execute: () => H1o(e.op, e.count, n),
    };
  if (/[0-9]/.test(t))
    return {
      next: {
        type: "operatorCount",
        op: e.op,
        count: e.count,
        digits: t,
      },
    };
  let r = R$l(e.op, e.count, t, n);
  if (r) return r;
  return {
    next: {
      type: "idle",
    },
  };
}
function mLf(e, t, n) {
  if (/[0-9]/.test(t)) {
    let i = e.digits + t,
      a = Math.min(parseInt(i, 10), ktr);
    return {
      next: {
        ...e,
        digits: String(a),
      },
    };
  }
  let r = parseInt(e.digits, 10),
    o = e.count * r,
    s = R$l(e.op, o, t, n);
  if (s) return s;
  return {
    next: {
      type: "idle",
    },
  };
}
function gLf(e, t, n) {
  return {
    execute: () => ytr(e.op, e.find, t, e.count, n),
  };
}
function hLf(e, t, n) {
  if (k1o.has(t))
    return {
      execute: () => _tr(e.op, e.scope, t, e.count, n),
    };
  return {
    next: {
      type: "idle",
    },
  };
}
function yLf(e, t, n) {
  return {
    execute: () => {
      let r = n.cursor.findCharacter(t, e.find, e.count);
      if (r !== null) (n.setOffset(r), n.setLastFind(e.find, t));
    },
  };
}
function _Lf(e, t, n) {
  if (t === "j" || t === "k")
    return {
      execute: () => {
        let r = yKe(`g${t}`, n.cursor, e.count);
        n.setOffset(r.offset);
      },
    };
  if (t === "g") {
    if (e.count > 1)
      return {
        execute: () => {
          let r = n.text.split(`
`),
            o = Math.min(e.count - 1, r.length - 1),
            s = 0;
          for (let i = 0; i < o; i++) s += (r[i]?.length ?? 0) + 1;
          n.setOffset(s);
        },
      };
    return {
      execute: () => n.setOffset(n.cursor.startOfFirstLine().offset),
    };
  }
  return {
    next: {
      type: "idle",
    },
  };
}
function bLf(e, t, n) {
  if (t === "j" || t === "k")
    return {
      execute: () => _Ke(e.op, `g${t}`, e.count, n),
    };
  if (t === "g")
    return {
      execute: () => C$l(e.op, e.count, n),
    };
  return {
    next: {
      type: "idle",
    },
  };
}
function SLf(e, t, n) {
  if (t === "")
    return {
      next: {
        type: "idle",
      },
    };
  return {
    execute: () => Str(t, e.count, n),
  };
}
function ELf(e, t, n) {
  if (t === e.dir)
    return {
      execute: () => Htr(e.dir, e.count, n),
    };
  return {
    next: {
      type: "idle",
    },
  };
}
function L$l(e, t, n) {
  let r = n.getLastFind();
  if (!r) return;
  let o = r.type;
  if (e)
    o = {
      f: "F",
      F: "f",
      t: "T",
      T: "t",
    }[o];
  let s = n.cursor.findCharacter(r.char, o, t);
  if (s !== null) n.setOffset(s);
}
function D$l(e, t, n) {
  switch (e.type) {
    case "idle":
      return ALf(t, n);
    case "count":
      return HLf(e, t, n);
    case "find":
      return TLf(e, t, n);
    case "g":
      return vLf(e, t, n);
    case "replace":
      if (t === "")
        return {
          next: {
            type: "idle",
          },
        };
      return {
        exit: "replace",
        char: t,
      };
    case "textObject":
      return wLf(e, t, n);
  }
}
function P$l(e, t, n) {
  if (I1o(e))
    return {
      exit: "operator",
      op: wtr[e],
    };
  if (e === "x")
    return {
      exit: "operator",
      op: "delete",
    };
  if (e === "s")
    return {
      exit: "operator",
      op: "change",
    };
  if (e === "X" || e === "D")
    return {
      exit: "operator",
      op: "delete",
      forceLinewise: true,
    };
  if (e === "C" || e === "S" || e === "R")
    return {
      exit: "operator",
      op: "change",
      forceLinewise: true,
    };
  if (e === "Y")
    return {
      exit: "operator",
      op: "yank",
      forceLinewise: true,
    };
  if (e === "r")
    return {
      next: {
        type: "replace",
      },
    };
  if (e === "~")
    return {
      exit: "case",
      op: "toggle",
    };
  if (e === "u")
    return {
      exit: "case",
      op: "lower",
    };
  if (e === "U")
    return {
      exit: "case",
      op: "upper",
    };
  if (e === "p" || e === "P")
    return {
      exit: "paste",
    };
  if (e === ">" || e === "<")
    return {
      exit: "indent",
      dir: e,
      count: t,
    };
  if (e === "v" || e === "V")
    return {
      exit: "toggleKind",
      key: e,
    };
  if (e === "o")
    return {
      exit: "swap",
    };
  if (e === "J")
    return {
      exit: "join",
    };
  if (x1o(e))
    return {
      next: {
        type: "textObject",
        scope: xtr[e],
        count: t,
      },
    };
  if (e === "$")
    return {
      next: {
        type: "idle",
      },
      move: () => n.setOffset(n.cursor.endOfLogicalLine().offset),
    };
  if (Ctr.has(e))
    return {
      next: {
        type: "idle",
      },
      move: () => n.setOffset(yKe(e, n.cursor, t).offset),
    };
  if (Itr.has(e))
    return {
      next: {
        type: "find",
        find: e,
        count: t,
      },
    };
  if (e === "g")
    return {
      next: {
        type: "g",
        count: t,
      },
    };
  if (e === "G")
    return {
      next: {
        type: "idle",
      },
      move: () => {
        let r = t === 1 ? n.cursor.startOfLastLine() : n.cursor.goToLine(t);
        n.setOffset(r.offset);
      },
    };
  if (e === ";" || e === ",")
    return {
      next: {
        type: "idle",
      },
      move: () => L$l(e === ",", t, n),
    };
  return null;
}
function ALf(e, t) {
  if (/[1-9]/.test(e))
    return {
      next: {
        type: "count",
        digits: e,
      },
    };
  if (e === "0")
    return {
      next: {
        type: "idle",
      },
      move: () => t.setOffset(t.cursor.startOfLogicalLine().offset),
    };
  return (
    P$l(e, 1, t) ?? {
      next: {
        type: "idle",
      },
    }
  );
}
function HLf(e, t, n) {
  if (/[0-9]/.test(t)) {
    let o = e.digits + t,
      s = Math.min(parseInt(o, 10), ktr);
    return {
      next: {
        type: "count",
        digits: String(s),
      },
    };
  }
  let r = parseInt(e.digits, 10);
  return (
    P$l(t, r, n) ?? {
      next: {
        type: "idle",
      },
    }
  );
}
function TLf(e, t, n) {
  return {
    next: {
      type: "idle",
    },
    move: () => {
      let r = n.cursor.findCharacter(t, e.find, e.count);
      if (r !== null) (n.setOffset(r), n.setLastFind(e.find, t));
    },
  };
}
function vLf(e, t, n) {
  if (t === "j" || t === "k")
    return {
      next: {
        type: "idle",
      },
      move: () => n.setOffset(yKe(`g${t}`, n.cursor, e.count).offset),
    };
  if (t === "g")
    return {
      next: {
        type: "idle",
      },
      move: () => {
        let r = e.count > 1 ? n.cursor.goToLine(e.count) : n.cursor.startOfFirstLine();
        n.setOffset(r.offset);
      },
    };
  return {
    next: {
      type: "idle",
    },
  };
}
function wLf(e, t, n) {
  if (k1o.has(t)) {
    let r = htr(n.text, n.cursor.offset, t, e.scope === "inner");
    if (r)
      return {
        exit: "selectRange",
        start: r.start,
        end: r.end,
      };
  }
  return {
    next: {
      type: "idle",
    },
  };
}
