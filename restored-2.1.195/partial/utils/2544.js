// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I1
// matched 2.1.88 source: src/hooks/usePasteHandler.ts
// class=partial  jaccard=0.2387  score=0.431  fileCov=0.3485
// note: low-confidence suggestion: src/hooks/usePasteHandler.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module I1] deps: utils/imageResizer.ts, services/analytics/growthbook.ts, ink/styles.ts, utils/fastMode.ts, utils/agentContext.ts, utils/status.tsx
G6d = {
  maxWidth: 2000,
  maxHeight: 2000
};
function h6i() {
  return Gh(As());
}
function kUt({
  onPaste: e,
  handleKeyDown: t,
  onImagePaste: n
}) {
  let r = ks(),
    [o, s] = kW.useState(false),
    i = kW.useRef(true),
    a = kW.useRef(false),
    l = kW.useRef(false),
    c = kW.useRef(t);
  c.current = t;
  let u = kW.useMemo(() => Vt() === "macos", []),
    d = kW.useMemo(() => Vt() === "wsl", []);
  kW.useEffect(() => () => {
    i.current = false;
  }, []);
  let p = kW.useCallback(() => {
      if (!n || !i.current) return;
      k0e(h6i()).then(_ => {
        if (_ && i.current) n(_.base64, _.mediaType, void 0, _.dimensions);
      }).catch(_ => {
        if (i.current) Le("input_image_paste", "clipboard_read_failed"), ke(_);
      }).finally(() => {
        if (i.current) a.current = false, l.current = false, s(false);
      });
    }, [n]),
    f = vW(p, q6d);
  function m(_) {
    if (e) {
      e(_);
      return;
    }
    t(new sat({
      kind: "key",
      name: void 0,
      sequence: _,
      raw: _,
      ctrl: false,
      meta: false,
      shift: false,
      option: false,
      super: false,
      fn: false,
      isPasted: true
    }));
  }
  function g() {
    s(false), r.setTimeout(() => {
      if (!i.current) return;
      if (a.current = false, l.current) l.current = false, c.current(new sat({
        kind: "key",
        name: "return",
        sequence: "\r",
        raw: "\r",
        ctrl: false,
        meta: false,
        shift: false,
        option: false,
        super: false,
        fn: false,
        isPasted: false
      }));
    }, 0);
  }
  function h(_) {
    a.current = true;
    let S = _.replace(/\[I$/, "").replace(/\[O$/, "");
    if (S.length === 0 && (u || d) && n) {
      f();
      return;
    }
    let A = S.split(/ (?=\/|[A-Za-z]:\\)/).flatMap(C => C.split(`
`)).filter(C => C.trim()),
      v = A.filter(C => GQr(C));
    if (n && v.length > 0) {
      let C = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(S),
        x = h6i();
      Promise.all(v.map(I => b8i(I, x))).then(I => {
        if (!i.current) return;
        let k = I.filter(D => D !== null);
        if (k.length > 0) {
          for (let [P, O] of k.entries()) {
            let L = y6i.basename(O.path);
            n(O.base64, O.mediaType, L, O.dimensions, O.path, P > 0);
          }
          let D = A.filter(P => !GQr(P));
          if (D.length > 0) m(D.join(`
`));
          a.current = false, l.current = false, s(false);
        } else if (C && u) f();else It("input_image_drag", "read_failed"), m(S), a.current = false, l.current = false, s(false);
      }).catch(I => {
        if (!i.current) return;
        Le("input_image_drag", "read_threw"), T(`Image paste read failed: ${I instanceof Error ? I.message : String(I)}`, {
          level: "error"
        }), m(S), a.current = false, l.current = false, s(false);
      });
      return;
    }
    m(S), g();
  }
  function y(_) {
    _.preventDefault(), s(true), h(_.text);
  }
  function b(_) {
    if (a.current && _.key === "return") {
      _.preventDefault(), l.current = true;
      return;
    }
    if ((e || n) && !_.ctrl && !_.meta && _.key.length > LGe && !_.defaultPrevented) {
      _.preventDefault(), s(true), h(_.key);
      return;
    }
    t(_);
  }
  return {
    handleKeyDown: b,
    handlePaste: y,
    isPasting: o
  };
}
var y6i,
  kW,
  q6d = 50;