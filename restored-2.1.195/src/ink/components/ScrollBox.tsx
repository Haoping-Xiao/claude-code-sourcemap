// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VLl
// matched 2.1.88 source: src/ink/components/ScrollBox.tsx
// class=modified  jaccard=0.5639  score=0.8293  fileCov=0.6379
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VLl]
qLl = {
  isEnabled: () => false,
  isHidden: true,
  name: "stub",
};
function ScrollBox({ children: e, ref: t, stickyScroll: n, followGrowth: r, ...style }) {
  let s = vOe.useRef(null),
    [, i] = vOe.useState(0),
    a = vOe.useRef(new Set()),
    l = vOe.useRef(false),
    c = () => {
      for (let d of a.current) d();
    };
  function u(d) {
    if ((v_r(), NM(d), G3i(), c(), l.current)) return;
    ((l.current = true),
      queueMicrotask(() => {
        ((l.current = false), _3i(d));
      }));
  }
  return (
    vOe.useImperativeHandle(
      t,
      () => ({
        scrollTo(d) {
          let p = s.current;
          if (!p) return;
          ((p.stickyScroll = false),
            (p.scrollHeightHwm = void 0),
            (p.pendingScrollDelta = void 0),
            (p.scrollAnchor = void 0),
            (p.scrollTop = Math.max(0, Math.floor(d))),
            u(p));
        },
        scrollToElement(d, p = 0) {
          let f = s.current;
          if (!f) return;
          ((f.stickyScroll = false),
            (f.scrollHeightHwm = void 0),
            (f.pendingScrollDelta = void 0),
            (f.scrollAnchor = {
              el: d,
              offset: p,
            }),
            u(f));
        },
        scrollBy(d) {
          let p = s.current;
          if (!p) return;
          ((p.stickyScroll = false),
            (p.scrollHeightHwm = void 0),
            (p.scrollAnchor = void 0),
            (p.pendingScrollDelta = (p.pendingScrollDelta ?? 0) + Math.floor(d)),
            u(p));
        },
        scrollToBottom() {
          let d = s.current;
          if (!d) return;
          if (((d.pendingScrollDelta = void 0), n === false)) {
            ((d.scrollAnchor = void 0),
              (d.scrollTop = Math.max(0, (d.scrollHeight ?? 0) - (d.scrollViewportHeight ?? 0))),
              u(d));
            return;
          }
          ((d.stickyScroll = true), NM(d), c(), i((p) => p + 1));
        },
        getScrollTop() {
          return s.current?.scrollTop ?? 0;
        },
        getPendingDelta() {
          return s.current?.pendingScrollDelta ?? 0;
        },
        getScrollHeight() {
          return s.current?.scrollHeight ?? 0;
        },
        getFreshScrollHeight() {
          return (
            s.current?.childNodes[0]?.yogaNode?.getComputedHeight() ?? s.current?.scrollHeight ?? 0
          );
        },
        getViewportHeight() {
          return s.current?.scrollViewportHeight ?? 0;
        },
        getViewportTop() {
          return s.current?.scrollViewportTop ?? 0;
        },
        isSticky() {
          let d = s.current;
          if (!d) return false;
          return d.stickyScroll ?? Boolean(d.attributes.stickyScroll);
        },
        subscribe(d) {
          return (a.current.add(d), () => a.current.delete(d));
        },
        setClampBounds(d, p) {
          let f = s.current;
          if (!f) return;
          ((f.scrollClampMin = d), (f.scrollClampMax = p));
        },
        getDomElement() {
          return s.current;
        },
      }),
      [n],
    ),
    W$o.jsx("ink-box", {
      ref: (d) => {
        if (((s.current = d), d)) d.scrollTop ??= 0;
      },
      style: {
        flexWrap: "nowrap",
        flexDirection: style.flexDirection ?? "row",
        flexGrow: style.flexGrow ?? 0,
        flexShrink: style.flexShrink ?? 1,
        ...style,
        overflowX: "scroll",
        overflowY: "scroll",
      },
      ...(n !== void 0 && {
        stickyScroll: n,
      }),
      ...(r !== void 0 && {
        followGrowth: r,
      }),
      children: W$o.jsx(Iy, {
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 0,
        width: "100%",
        children: e,
      }),
    })
  );
}
var vOe, W$o, Rq;
