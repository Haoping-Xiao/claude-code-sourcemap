// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I1
// matched 2.1.88 source: node_modules/@inquirer/core/dist/esm/lib/key.mjs
// class=partial  jaccard=0.0623  score=0.0778  fileCov=0.2382
// note: low-confidence suggestion: node_modules/@inquirer/core/dist/esm/lib/key.mjs; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var I1 = E(() => {
  Lne();
  Un();
  xUt();
  mye();
  Ao();
  Ls();
  G6d = {
    maxWidth: 2000,
    maxHeight: 2000
  };
});
function h6i() {
  return Gh(As());
}
function kUt({
  onPaste: e,
  handleKeyDown: t,
  onImagePaste: n
}) {
  let r = ks(),
    [o, s] = kW.useState(!1),
    i = kW.useRef(!0),
    a = kW.useRef(!1),
    l = kW.useRef(!1),
    c = kW.useRef(t);
  c.current = t;
  let u = kW.useMemo(() => Vt() === "macos", []),
    d = kW.useMemo(() => Vt() === "wsl", []);
  kW.useEffect(() => () => {
    i.current = !1;
  }, []);
  let p = kW.useCallback(() => {
      if (!n || !i.current) return;
      k0e(h6i()).then(_ => {
        if (_ && i.current) n(_.base64, _.mediaType, void 0, _.dimensions);
      }).catch(_ => {
        if (i.current) Le("input_image_paste", "clipboard_read_failed"), ke(_);
      }).finally(() => {
        if (i.current) a.current = !1, l.current = !1, s(!1);
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
      ctrl: !1,
      meta: !1,
      shift: !1,
      option: !1,
      super: !1,
      fn: !1,
      isPasted: !0
    }));
  }
  function g() {
    s(!1), r.setTimeout(() => {
      if (!i.current) return;
      if (a.current = !1, l.current) l.current = !1, c.current(new sat({
        kind: "key",
        name: "return",
        sequence: "\r",
        raw: "\r",
        ctrl: !1,
        meta: !1,
        shift: !1,
        option: !1,
        super: !1,
        fn: !1,
        isPasted: !1
      }));
    }, 0);
  }
  function h(_) {
    a.current = !0;
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
          a.current = !1, l.current = !1, s(!1);
        } else if (C && u) f();else It("input_image_drag", "read_failed"), m(S), a.current = !1, l.current = !1, s(!1);
      }).catch(I => {
        if (!i.current) return;
        Le("input_image_drag", "read_threw"), T(`Image paste read failed: ${I instanceof Error ? I.message : String(I)}`, {
          level: "error"
        }), m(S), a.current = !1, l.current = !1, s(!1);
      });
      return;
    }
    m(S), g();
  }
  function y(_) {
    _.preventDefault(), s(!0), h(_.text);
  }
  function b(_) {
    if (a.current && _.key === "return") {
      _.preventDefault(), l.current = !0;
      return;
    }
    if ((e || n) && !_.ctrl && !_.meta && _.key.length > LGe && !_.defaultPrevented) {
      _.preventDefault(), s(!0), h(_.key);
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