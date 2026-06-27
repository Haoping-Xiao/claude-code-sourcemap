// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dzi
// matched 2.1.88 source: src/components/CustomSelect/use-select-navigation.ts
// class=modified  jaccard=0.6669  score=0.8694  fileCov=0.7412
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dzi]
vPn = class vPn extends Map {
  first;
  last;
  constructor(e) {
    let t = [],
      n,
      r,
      o,
      s = 0;
    for (let i of e) {
      let a = {
        label: i.label,
        value: i.value,
        description: i.description,
        previous: o,
        next: void 0,
        index: s,
      };
      if (o) o.next = a;
      ((n ||= a), (r = a), t.push([i.value, a]), s++, (o = a));
    }
    super(t);
    ((this.first = n), (this.last = r));
  }
};
function reducer({
  visibleOptionCount: e = 5,
  options: options,
  initialFocusValue: n,
  onFocus: r,
  focusValue: o,
}) {
  let [state, i] = tk.useReducer(
      xzd,
      {
        visibleOptionCount: e,
        options: options,
        initialFocusValue: o || n,
      },
      pzi,
    ),
    a = tk.useRef(r);
  tk.useEffect(() => {
    a.current = r;
  });
  let [l, c] = tk.useState(options),
    [u, d] = tk.useState(e),
    p = options !== l && !fzi.isDeepStrictEqual(options, l),
    f = e !== u;
  if (p || f) {
    if (
      (i({
        type: "reset",
        state: pzi({
          visibleOptionCount: e,
          options: options,
          initialFocusValue: p ? (o ?? state.focusedValue ?? n) : (state.focusedValue ?? o ?? n),
          currentViewport: {
            visibleFromIndex: state.visibleFromIndex,
            visibleToIndex: state.visibleToIndex,
          },
        }),
      }),
      p)
    )
      c(options);
    if (f) d(e);
  }
  let m = tk.useCallback(() => {
      i({
        type: "focus-next-option",
      });
    }, []),
    g = tk.useCallback(() => {
      i({
        type: "focus-previous-option",
      });
    }, []),
    h = tk.useCallback(() => {
      i({
        type: "focus-next-page",
      });
    }, []),
    y = tk.useCallback(() => {
      i({
        type: "focus-previous-page",
      });
    }, []),
    b = tk.useCallback((C) => {
      if (C !== void 0)
        i({
          type: "set-focus",
          value: C,
        });
    }, []),
    _ = tk.useMemo(
      () =>
        options
          .map((C, x) => ({
            ...C,
            index: x,
          }))
          .slice(state.visibleFromIndex, state.visibleToIndex),
      [options, state.visibleFromIndex, state.visibleToIndex],
    ),
    S = tk.useMemo(() => {
      if (state.focusedValue === void 0) return;
      if (options.some((x) => x.value === state.focusedValue)) return state.focusedValue;
      return options[0]?.value;
    }, [state.focusedValue, options]),
    A = tk.useMemo(() => options.find((x) => x.value === S)?.type === "input", [S, options]);
  (tk.useEffect(() => {
    if (S !== void 0) a.current?.(S);
  }, [S]),
    tk.useEffect(() => {
      if (o !== void 0)
        i({
          type: "set-focus",
          value: o,
        });
    }, [o]));
  let v = tk.useMemo(() => {
    if (S === void 0) return 0;
    let C = options.findIndex((x) => x.value === S);
    return C >= 0 ? C + 1 : 0;
  }, [S, options]);
  return {
    focusedValue: S,
    focusedIndex: v,
    visibleFromIndex: state.visibleFromIndex,
    visibleToIndex: state.visibleToIndex,
    visibleOptions: _,
    isInInput: A ?? false,
    focusNextOption: m,
    focusPreviousOption: g,
    focusNextPage: h,
    focusPreviousPage: y,
    focusOption: b,
    options: options,
  };
}
var tk,
  fzi,
  xzd = (e, t) => {
    switch (t.type) {
      case "focus-next-option": {
        if (e.focusedValue === void 0) return e;
        let n = e.optionMap.get(e.focusedValue);
        if (!n) return e;
        let r = n.next || e.optionMap.first;
        if (!r) return e;
        if (!n.next && r === e.optionMap.first)
          return {
            ...e,
            focusedValue: r.value,
            visibleFromIndex: 0,
            visibleToIndex: e.visibleOptionCount,
          };
        if (!(r.index >= e.visibleToIndex))
          return {
            ...e,
            focusedValue: r.value,
          };
        let s = Math.min(e.optionMap.size, e.visibleToIndex + 1),
          i = s - e.visibleOptionCount;
        return {
          ...e,
          focusedValue: r.value,
          visibleFromIndex: i,
          visibleToIndex: s,
        };
      }
      case "focus-previous-option": {
        if (e.focusedValue === void 0) return e;
        let n = e.optionMap.get(e.focusedValue);
        if (!n) return e;
        let r = n.previous || e.optionMap.last;
        if (!r) return e;
        if (!n.previous && r === e.optionMap.last) {
          let a = e.optionMap.size,
            l = Math.max(0, a - e.visibleOptionCount);
          return {
            ...e,
            focusedValue: r.value,
            visibleFromIndex: l,
            visibleToIndex: a,
          };
        }
        if (!(r.index <= e.visibleFromIndex))
          return {
            ...e,
            focusedValue: r.value,
          };
        let s = Math.max(0, e.visibleFromIndex - 1),
          i = s + e.visibleOptionCount;
        return {
          ...e,
          focusedValue: r.value,
          visibleFromIndex: s,
          visibleToIndex: i,
        };
      }
      case "focus-next-page": {
        if (e.focusedValue === void 0) return e;
        let n = e.optionMap.get(e.focusedValue);
        if (!n) return e;
        let r = Math.min(e.optionMap.size - 1, n.index + e.visibleOptionCount),
          o = e.optionMap.first;
        while (o && o.index < r)
          if (o.next) o = o.next;
          else break;
        if (!o) return e;
        let s = Math.min(e.optionMap.size, o.index + 1),
          i = Math.max(0, s - e.visibleOptionCount);
        return {
          ...e,
          focusedValue: o.value,
          visibleFromIndex: i,
          visibleToIndex: s,
        };
      }
      case "focus-previous-page": {
        if (e.focusedValue === void 0) return e;
        let n = e.optionMap.get(e.focusedValue);
        if (!n) return e;
        let r = Math.max(0, n.index - e.visibleOptionCount),
          o = e.optionMap.first;
        while (o && o.index < r)
          if (o.next) o = o.next;
          else break;
        if (!o) return e;
        let s = Math.max(0, o.index),
          i = Math.min(e.optionMap.size, s + e.visibleOptionCount);
        return {
          ...e,
          focusedValue: o.value,
          visibleFromIndex: s,
          visibleToIndex: i,
        };
      }
      case "reset":
        return t.state;
      case "set-focus": {
        if (e.focusedValue === t.value) return e;
        let n = e.optionMap.get(t.value);
        if (!n) return e;
        if (n.index >= e.visibleFromIndex && n.index < e.visibleToIndex)
          return {
            ...e,
            focusedValue: t.value,
          };
        let r, o;
        if (n.index < e.visibleFromIndex)
          ((r = n.index), (o = Math.min(e.optionMap.size, r + e.visibleOptionCount)));
        else
          ((o = Math.min(e.optionMap.size, n.index + 1)),
            (r = Math.max(0, o - e.visibleOptionCount)));
        return {
          ...e,
          focusedValue: t.value,
          visibleFromIndex: r,
          visibleToIndex: o,
        };
      }
    }
  },
  pzi = ({ visibleOptionCount: e, options: t, initialFocusValue: n, currentViewport: r }) => {
    let o = typeof e === "number" ? Math.min(e, t.length) : t.length,
      s = new vPn(t),
      i = n !== void 0 && s.get(n),
      a = i ? n : s.first?.value,
      l = 0,
      c = o;
    if (i) {
      let u = i.index;
      if (r) {
        if (u >= r.visibleFromIndex && u < r.visibleToIndex) {
          if (((l = r.visibleFromIndex), (c = Math.min(s.size, l + o)), u >= c))
            ((c = Math.min(s.size, u + 1)), (l = Math.max(0, c - o)));
          if (c - l < o) l = Math.max(0, c - o);
        } else if (u < r.visibleFromIndex) ((l = u), (c = Math.min(s.size, l + o)));
        else ((c = Math.min(s.size, u + 1)), (l = Math.max(0, c - o)));
      } else if (u >= o) ((c = Math.min(s.size, u + 1)), (l = Math.max(0, c - o)));
      ((l = Math.max(0, Math.min(l, s.size - 1))), (c = Math.min(s.size, Math.max(o, c))));
    }
    return {
      optionMap: s,
      visibleOptionCount: o,
      focusedValue: a,
      visibleFromIndex: l,
      visibleToIndex: c,
    };
  };
