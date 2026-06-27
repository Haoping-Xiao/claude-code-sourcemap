// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jgc
// matched 2.1.88 source: src/components/mcp/ElicitationDialog.tsx
// class=modified  jaccard=0.3406  score=0.5908  fileCov=0.4457
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Jgc = E(() => {
  Xr();
  Jt();
  sr();
  Ygc();
});
function Qum(e) {
  ((e.buffer = ""), (e.timer = void 0));
}
function Zum() {
  let e = Nur.c(5),
    [t, n] = Kf(80),
    r = Math.floor(n / 80) % Qgc.length,
    o = Qgc[r],
    s;
  if (e[0] !== o)
    ((s = Ps.jsx(w, {
      color: "warning",
      children: o,
    })),
      (e[0] = o),
      (e[1] = s));
  else s = e[1];
  let i;
  if (e[2] !== t || e[3] !== s)
    ((i = Ps.jsx(U, {
      ref: t,
      children: s,
    })),
      (e[2] = t),
      (e[3] = s),
      (e[4] = i));
  else i = e[4];
  return i;
}
function edm(e, t) {
  try {
    let n = new Date(e);
    if (Number.isNaN(n.getTime())) return e;
    if (("format" in t ? t.format : void 0) === "date-time")
      return n.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      });
    let o = e.split("-");
    if (o.length === 3)
      return new Date(Number(o[0]), Number(o[1]) - 1, Number(o[2])).toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    return e;
  } catch {
    return e;
  }
}
function Bur(e) {
  let t = Nur.c(7),
    { event: n, onResponse: r, onWaitingDismiss: o } = e;
  if (n.params.mode === "url") {
    let i;
    if (t[0] !== n || t[1] !== r || t[2] !== o)
      ((i = Ps.jsx(ndm, {
        event: n,
        onResponse: r,
        onWaitingDismiss: o,
      })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = o),
        (t[3] = i));
    else i = t[3];
    return i;
  }
  let s;
  if (t[4] !== n || t[5] !== r)
    ((s = Ps.jsx(tdm, {
      event: n,
      onResponse: r,
    })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = s));
  else s = t[6];
  return s;
}
function tdm({ event: e, onResponse: t }) {
  let { serverName: n, signal: r } = e,
    o = e.params,
    { message: s, requestedSchema: i } = o,
    a = Rvr.safeParse(e.params._meta?.[dae]),
    l = a.success ? ` (task ${a.data.taskId.slice(0, 8)})` : "",
    c = Object.keys(i.properties).length > 0,
    [u, d] = Q_.useState(c ? null : "accept"),
    [p, f] = Q_.useState(() => {
      let le = {};
      if (i.properties) {
        for (let [He, ye] of Object.entries(i.properties))
          if (typeof ye === "object" && ye !== null) {
            if (ye.default !== void 0) le[He] = ye.default;
          }
      }
      return le;
    }),
    [m, g] = Q_.useState(() => {
      let le = {};
      for (let [He, ye] of Object.entries(i.properties))
        if (ven(ye) && ye?.default !== void 0) {
          let ue = Sen(String(ye.default), ye);
          if (!ue.isValid) le[He] = ue.error;
        }
      return le;
    });
  Q_.useEffect(() => {
    if (!r) return;
    let le = () => {
      t("cancel");
    };
    if (r.aborted) {
      le();
      return;
    }
    return (
      r.addEventListener("abort", le),
      () => {
        r.removeEventListener("abort", le);
      }
    );
  }, [r, t]);
  let { setRawMode: h } = s8();
  Q_.useLayoutEffect(() => (h(true), () => h(false)), [h]);
  let y = Q_.useMemo(() => {
      let le = i.required ?? [];
      return Object.entries(i.properties).map(([He, ye]) => ({
        name: He,
        schema: ye,
        isRequired: le.includes(He),
      }));
    }, [i]),
    [b, _] = Q_.useState(c ? 0 : void 0),
    [S, A] = Q_.useState(() => {
      let le = y[0];
      if (le && ven(le.schema)) {
        let He = p[le.name];
        if (He === void 0) return "";
        return String(He);
      }
      return "";
    }),
    [v, C] = Q_.useState(S.length),
    [x, I] = Q_.useState(() => new Set()),
    [k, D] = Q_.useState(),
    [P, O] = Q_.useState(0),
    L = ks(),
    M = Q_.useRef(void 0),
    N = Q_.useRef(new Map()),
    B = Q_.useRef({
      buffer: "",
      timer: void 0,
    });
  Q_.useEffect(
    () => () => {
      if (M.current !== void 0) M.current();
      let le = B.current;
      if (le.timer !== void 0) le.timer();
      for (let He of N.current.values()) He.abort();
      N.current.clear();
    },
    [],
  );
  let { columns: $, rows: q } = br(),
    W = b !== void 0 ? y[b] : void 0,
    Y = W !== void 0 && ven(W.schema) && !Pme(W.schema) && !u;
  (Wh("elicitation"), ben("Claude Code needs your input", "elicitation_dialog"));
  let z = Q_.useCallback(
    (le) => {
      if (le === void 0) {
        (A(""), C(0));
        return;
      }
      let He = y[le];
      if (He && ven(He.schema) && !Pme(He.schema)) {
        let ye = p[He.name],
          ue = ye !== void 0 ? String(ye) : "";
        (A(ue), C(ue.length));
      }
    },
    [y, p],
  );
  function K(le, He) {
    if (!c7e(He)) return;
    let ye = p[le] ?? [],
      ue = y.find((Ie) => Ie.name === le)?.isRequired ?? false,
      we = He.minItems,
      Ce = He.maxItems;
    if (we !== void 0 && ye.length < we && (ye.length > 0 || ue))
      ne(le, `Select at least ${we} ${bn(we, "item")}`);
    else if (Ce !== void 0 && ye.length > Ce) ne(le, `Select at most ${Ce} ${bn(Ce, "item")}`);
    else ne(le);
  }
  function Z(le) {
    if (W && c7e(W.schema)) (K(W.name, W.schema), D(void 0));
    else if (W && Pme(W.schema)) D(void 0);
    if (Y && W) {
      if ((re(W.name, W.schema, S), M.current !== void 0)) (M.current(), (M.current = void 0));
      if (Ten(W.schema) && S.trim() !== "" && m[W.name]) ee(W.name, W.schema, S);
    }
    let He = y.length + 2,
      ye = b ?? (u === "accept" ? y.length : u === "decline" ? y.length + 1 : void 0),
      ue = ye !== void 0 ? (ye + (le === "up" ? He - 1 : 1)) % He : 0;
    if (ue < y.length) (_(ue), d(null), z(ue));
    else (_(void 0), d(ue === y.length ? "accept" : "decline"), A(""));
  }
  function J(le, He) {
    if (
      (f((ye) => {
        let ue = {
          ...ye,
        };
        if (He === void 0) delete ue[le];
        else ue[le] = He;
        return ue;
      }),
      He !== void 0 && m[le] === "This field is required")
    )
      ne(le);
  }
  function ne(le, He) {
    g((ye) => {
      let ue = {
        ...ye,
      };
      if (He) ue[le] = He;
      else delete ue[le];
      return ue;
    });
  }
  function oe(le) {
    if (!le) return;
    (J(le, void 0), ne(le), A(""), C(0));
  }
  function re(le, He, ye) {
    let ue = ye.trim();
    if (ue === "" && (He.type !== "string" || ("format" in He && He.format !== void 0))) {
      oe(le);
      return;
    }
    if (ue === "") {
      if (p[le] !== void 0) J(le, "");
      return;
    }
    let we = Sen(ye, He);
    (J(le, we.isValid ? we.value : ye), ne(le, we.isValid ? void 0 : we.error));
  }
  function ee(le, He, ye) {
    if (!r) return;
    let ue = N.current.get(le);
    if (ue) ue.abort();
    let we = new AbortController();
    (N.current.set(le, we),
      I((Ce) => new Set(Ce).add(le)),
      Xgc(ye, He, we.signal).then(
        (Ce) => {
          if (
            (N.current.delete(le),
            I((Ie) => {
              let Ve = new Set(Ie);
              return (Ve.delete(le), Ve);
            }),
            we.signal.aborted)
          )
            return;
          if (Ce.isValid) {
            (J(le, Ce.value), ne(le));
            let Ie = String(Ce.value);
            A((Ve) => {
              if (Ve === ye) return (C(Ie.length), Ie);
              return Ve;
            });
          } else ne(le, Ce.error);
        },
        () => {
          (N.current.delete(le),
            I((Ce) => {
              let Ie = new Set(Ce);
              return (Ie.delete(le), Ie);
            }));
        },
      ));
  }
  function ce(le) {
    if ((A(le), W)) {
      if ((re(W.name, W.schema, le), M.current !== void 0)) (M.current(), (M.current = void 0));
      if (Ten(W.schema) && le.trim() !== "" && m[W.name]) {
        let { name: He, schema: ye } = W;
        M.current = L.setTimeout(() => {
          ((M.current = void 0), ee(He, ye, le));
        }, 2000);
      }
    }
  }
  function ae() {
    Z("down");
  }
  function de(le, He, ye) {
    let ue = B.current;
    if (ue.timer !== void 0) ue.timer();
    ((ue.buffer += le.toLowerCase()), (ue.timer = L.setTimeout(() => Qum(ue), 2000)));
    let we = He.findIndex((Ce) => Ce.startsWith(ue.buffer));
    if (we !== -1) ye(we);
  }
  $r(
    "confirm:no",
    () => {
      if (Y && W) {
        let le = p[W.name];
        (A(le !== void 0 ? String(le) : ""), C(0));
      }
      t("cancel");
    },
    {
      context: "Settings",
      isActive: !!W && !u && !k,
    },
  );
  function Ee(le) {
    let He = le.key.length === 1 && le.key !== " " && !le.ctrl && !le.meta ? le.key : "";
    if (Y && le.key !== "up" && le.key !== "down" && le.key !== "return" && le.key !== "backspace")
      return;
    if (k && W && c7e(W.schema)) {
      let Ce = W.schema,
        Ie = Een(Ce),
        Ve = p[W.name] ?? [];
      if (le.key === "left" || le.key === "escape") {
        (le.preventDefault(), D(void 0), K(W.name, Ce));
        return;
      }
      if (le.key === "up") {
        if ((le.preventDefault(), P === 0)) (D(void 0), K(W.name, Ce));
        else O(P - 1);
        return;
      }
      if (le.key === "down") {
        if ((le.preventDefault(), P >= Ie.length - 1)) (D(void 0), Z("down"));
        else O(P + 1);
        return;
      }
      if (le.key === " ") {
        le.preventDefault();
        let Ze = Ie[P];
        if (Ze !== void 0) {
          let Be = Ve.includes(Ze) ? Ve.filter((bt) => bt !== Ze) : [...Ve, Ze],
            Me = Be.length > 0 ? Be : void 0;
          J(W.name, Me);
          let { minItems: Ue, maxItems: tt } = Ce;
          if (Ue !== void 0 && Be.length < Ue && (Be.length > 0 || W.isRequired))
            ne(W.name, `Select at least ${Ue} ${bn(Ue, "item")}`);
          else if (tt !== void 0 && Be.length > tt)
            ne(W.name, `Select at most ${tt} ${bn(tt, "item")}`);
          else ne(W.name);
        }
        return;
      }
      if (le.key === "return") {
        le.preventDefault();
        let Ze = Ie[P];
        if (Ze !== void 0 && !Ve.includes(Ze)) J(W.name, [...Ve, Ze]);
        (D(void 0), Z("down"));
        return;
      }
      if (He) {
        le.preventDefault();
        let Ze = Ie.map((Be) => Aen(Ce, Be).toLowerCase());
        de(He, Ze, O);
        return;
      }
      return;
    }
    if (k && W && Pme(W.schema)) {
      let Ce = W.schema,
        Ie = wTt(Ce);
      if (le.key === "left" || le.key === "escape") {
        (le.preventDefault(), D(void 0));
        return;
      }
      if (le.key === "up") {
        if ((le.preventDefault(), P === 0)) D(void 0);
        else O(P - 1);
        return;
      }
      if (le.key === "down") {
        if ((le.preventDefault(), P >= Ie.length - 1)) (D(void 0), Z("down"));
        else O(P + 1);
        return;
      }
      if (le.key === " ") {
        le.preventDefault();
        let Ve = Ie[P];
        if (Ve !== void 0) J(W.name, Ve);
        D(void 0);
        return;
      }
      if (le.key === "return") {
        le.preventDefault();
        let Ve = Ie[P];
        if (Ve !== void 0) J(W.name, Ve);
        (D(void 0), Z("down"));
        return;
      }
      if (He) {
        le.preventDefault();
        let Ve = Ie.map((Ze) => Hen(Ce, Ze).toLowerCase());
        de(He, Ve, O);
        return;
      }
      return;
    }
    if (le.key === "return" && u === "accept") {
      if ((le.preventDefault(), me() && Object.keys(m).length === 0)) t("accept", p);
      else {
        let Ce = i.required || [];
        for (let Ve of Ce) if (p[Ve] === void 0) ne(Ve, "This field is required");
        let Ie = y.findIndex(
          (Ve) => (Ce.includes(Ve.name) && p[Ve.name] === void 0) || m[Ve.name] !== void 0,
        );
        if (Ie !== -1) (_(Ie), d(null), z(Ie));
      }
      return;
    }
    if (le.key === "return" && u === "decline") {
      (le.preventDefault(), t("decline"));
      return;
    }
    if (le.key === "up" || le.key === "down") {
      le.preventDefault();
      let Ce = B.current;
      if (((Ce.buffer = ""), Ce.timer !== void 0)) (Ce.timer(), (Ce.timer = void 0));
      Z(le.key === "up" ? "up" : "down");
      return;
    }
    if (u && (le.key === "left" || le.key === "right")) {
      (le.preventDefault(), d(u === "accept" ? "decline" : "accept"));
      return;
    }
    if (!W) return;
    let { schema: ye, name: ue } = W,
      we = p[ue];
    if (ye.type === "boolean") {
      if (le.key === " ") {
        (le.preventDefault(), J(ue, we === void 0 ? true : !we));
        return;
      }
      if (le.key === "return") {
        (le.preventDefault(), Z("down"));
        return;
      }
      if (le.key === "backspace" && we !== void 0) {
        (le.preventDefault(), oe(ue));
        return;
      }
      if (He && le.key !== "return") {
        (le.preventDefault(), de(He, ["yes", "no"], (Ce) => J(ue, Ce === 0)));
        return;
      }
      return;
    }
    if (Pme(ye) || c7e(ye)) {
      if (le.key === "return") {
        (le.preventDefault(), Z("down"));
        return;
      }
      if (le.key === "backspace" && we !== void 0) {
        (le.preventDefault(), oe(ue));
        return;
      }
      let Ce,
        Ie = 0;
      if (Pme(ye)) {
        let Ve = wTt(ye);
        if (((Ce = Ve.map((Ze) => Hen(ye, Ze).toLowerCase())), we !== void 0))
          Ie = Math.max(0, Ve.indexOf(we));
      } else Ce = Een(ye).map((Ze) => Aen(ye, Ze).toLowerCase());
      if (le.key === "right") {
        (le.preventDefault(), D(ue), O(Ie));
        return;
      }
      if (He && le.key !== "left") {
        (le.preventDefault(),
          de(He, Ce, (Ve) => {
            (D(ue), O(Ve));
          }));
        return;
      }
      return;
    }
    if (le.key === "backspace") {
      if (Y && S === "") {
        (le.preventDefault(), oe(ue));
        return;
      }
    }
  }
  function me() {
    let le = i.required || [];
    for (let He of le) {
      let ye = p[He];
      if (ye === void 0 || ye === null || ye === "") return false;
      if (Array.isArray(ye) && ye.length === 0) return false;
    }
    return true;
  }
  let pe = 3,
    he = Math.max(2, Math.floor((q - 14) / pe)),
    ie = Q_.useMemo(() => {
      let le = y.length;
      if (le <= he)
        return {
          start: 0,
          end: le,
        };
      let He = b ?? le - 1,
        ye = Math.max(0, He - Math.floor(he / 2)),
        ue = Math.min(ye + he, le);
      return (
        (ye = Math.max(0, ue - he)),
        {
          start: ye,
          end: ue,
        }
      );
    }, [y.length, he, b]);
  return Ps.jsx(zn, {
    title: `MCP server \u201C${n}\u201D requests your input${l}`,
    subtitle: `
${s}`,
    color: "permission",
    onCancel: () => t("cancel"),
    isCancelActive: (!W || !!u) && !k,
    inputGuide: Ps.jsxs(Tn, {
      children: [
        Ps.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel",
        }),
        Ps.jsx(ht, {
          chord: ["up", "down"],
          action: "navigate",
        }),
        W &&
          Ps.jsx(ht, {
            chord: "backspace",
            action: "unset",
          }),
        W &&
          W.schema.type === "boolean" &&
          Ps.jsx(ht, {
            chord: "space",
            action: "toggle",
          }),
        W &&
          Pme(W.schema) &&
          (k
            ? Ps.jsx(ht, {
                chord: "space",
                action: "select",
              })
            : Ps.jsx(ht, {
                chord: "right",
                action: "expand",
              })),
        W &&
          c7e(W.schema) &&
          (k
            ? Ps.jsx(ht, {
                chord: "space",
                action: "toggle",
              })
            : Ps.jsx(ht, {
                chord: "right",
                action: "expand",
              })),
      ],
    }),
    children: Ps.jsxs(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: Ee,
      children: [
        Ps.jsx(rdm, {
          schemaFields: y,
          scrollWindow: ie,
          currentFieldIndex: b,
          focusedButton: u,
          formValues: p,
          validationErrors: m,
          resolvingFields: x,
          expandedAccordion: k,
          accordionOptionIndex: P,
          textInputValue: S,
          textInputCursorOffset: v,
          setTextInputCursorOffset: C,
          handleTextInputChange: ce,
          handleTextInputSubmit: ae,
          columns: $,
        }),
        Ps.jsxs(U, {
          children: [
            Ps.jsx(w, {
              color: "success",
              children: u === "accept" ? nt.pointer : " ",
            }),
            Ps.jsx(w, {
              bold: u === "accept",
              color: u === "accept" ? "success" : void 0,
              dimColor: u !== "accept",
              children: " Accept  ",
            }),
            Ps.jsx(w, {
              color: "error",
              children: u === "decline" ? nt.pointer : " ",
            }),
            Ps.jsx(w, {
              bold: u === "decline",
              color: u === "decline" ? "error" : void 0,
              dimColor: u !== "decline",
              children: " Decline",
            }),
          ],
        }),
      ],
    }),
  });
}
function ndm({ event: e, onResponse: t, onWaitingDismiss: n }) {
  let { serverName: r, signal: o, waitingState: s } = e,
    i = e.params,
    { message: a, url: l } = i,
    [c, u] = Q_.useState("prompt"),
    d = Q_.useRef("prompt"),
    [p, f] = Q_.useState("accept"),
    m = s?.showCancel ?? false,
    { setRawMode: g } = s8();
  (Q_.useLayoutEffect(() => (g(true), () => g(false)), [g]),
    ben("Claude Code needs your input", "elicitation_url_dialog"),
    Wh("elicitation-url"),
    (d.current = c));
  let h = Q_.useRef(n);
  ((h.current = n),
    Q_.useEffect(() => {
      let v = () => {
        if (d.current === "waiting") h.current?.("cancel");
        else t("cancel");
      };
      if (o.aborted) {
        v();
        return;
      }
      return (o.addEventListener("abort", v), () => o.removeEventListener("abort", v));
    }, [o, t]));
  let y = "",
    b = "",
    _ = "";
  try {
    y = new URL(l).hostname;
    let C = l.indexOf(y);
    ((b = l.slice(0, C)), (_ = l.slice(C + y.length)));
  } catch {
    y = l;
  }
  Q_.useEffect(() => {
    if (c === "waiting" && e.completed) n?.(m ? "retry" : "dismiss");
  }, [c, e.completed, n, m]);
  let S = Q_.useCallback(() => {
    (ac(l), t("accept"), u("waiting"), (d.current = "waiting"), f("open"));
  }, [t, l]);
  function A(v) {
    if (c === "prompt") {
      if (v.key === "left" || v.key === "right") {
        (v.preventDefault(), f((C) => (C === "accept" ? "decline" : "accept")));
        return;
      }
      if (v.key === "return")
        if ((v.preventDefault(), p === "accept")) S();
        else t("decline");
    } else {
      let C = m ? ["open", "action", "cancel"] : ["open", "action"];
      if (v.key === "left" || v.key === "right") {
        v.preventDefault();
        let x = v.key === "right";
        f((I) => {
          let k = C.indexOf(I);
          return C[(k + (x ? 1 : -1) + C.length) % C.length];
        });
        return;
      }
      if (v.key === "return")
        if ((v.preventDefault(), p === "open")) ac(l);
        else if (p === "cancel") n?.("cancel");
        else n?.(m ? "retry" : "dismiss");
    }
  }
  if (c === "waiting") {
    let v = s?.actionLabel ?? "Continue without waiting";
    return Ps.jsx(zn, {
      title: `MCP server \u201C${r}\u201D \u2014 waiting for completion`,
      subtitle: `
${a}`,
      color: "permission",
      onCancel: () => n?.("cancel"),
      isCancelActive: true,
      inputGuide: Ps.jsxs(Tn, {
        children: [
          Ps.jsx(mr, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel",
          }),
          Ps.jsx(ht, {
            chord: ["left", "right"],
            action: "switch",
          }),
        ],
      }),
      children: Ps.jsxs(U, {
        flexDirection: "column",
        tabIndex: 0,
        autoFocus: true,
        onKeyDown: A,
        children: [
          Ps.jsx(U, {
            marginBottom: 1,
            flexDirection: "column",
            children: Ps.jsxs(w, {
              children: [
                b,
                Ps.jsx(w, {
                  bold: true,
                  children: y,
                }),
                _,
              ],
            }),
          }),
          Ps.jsx(U, {
            marginBottom: 1,
            children: Ps.jsx(w, {
              dimColor: true,
              italic: true,
              children: "Waiting for the server to confirm completion\u2026",
            }),
          }),
          Ps.jsxs(U, {
            children: [
              Ps.jsx(w, {
                color: "success",
                children: p === "open" ? nt.pointer : " ",
              }),
              Ps.jsx(w, {
                bold: p === "open",
                color: p === "open" ? "success" : void 0,
                dimColor: p !== "open",
                children: " Reopen URL  ",
              }),
              Ps.jsx(w, {
                color: "success",
                children: p === "action" ? nt.pointer : " ",
              }),
              Ps.jsx(w, {
                bold: p === "action",
                color: p === "action" ? "success" : void 0,
                dimColor: p !== "action",
                children: ` ${v}`,
              }),
              m &&
                Ps.jsxs(Ps.Fragment, {
                  children: [
                    Ps.jsx(w, {
                      children: " ",
                    }),
                    Ps.jsx(w, {
                      color: "error",
                      children: p === "cancel" ? nt.pointer : " ",
                    }),
                    Ps.jsx(w, {
                      bold: p === "cancel",
                      color: p === "cancel" ? "error" : void 0,
                      dimColor: p !== "cancel",
                      children: " Cancel",
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    });
  }
  return Ps.jsx(zn, {
    title: `MCP server \u201C${r}\u201D wants to open a URL`,
    subtitle: `
${a}`,
    color: "permission",
    onCancel: () => t("cancel"),
    isCancelActive: true,
    inputGuide: Ps.jsxs(Tn, {
      children: [
        Ps.jsx(mr, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel",
        }),
        Ps.jsx(ht, {
          chord: ["left", "right"],
          action: "switch",
        }),
      ],
    }),
    children: Ps.jsxs(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: A,
      children: [
        Ps.jsx(U, {
          marginBottom: 1,
          flexDirection: "column",
          children: Ps.jsxs(w, {
            children: [
              b,
              Ps.jsx(w, {
                bold: true,
                children: y,
              }),
              _,
            ],
          }),
        }),
        Ps.jsxs(U, {
          children: [
            Ps.jsx(w, {
              color: "success",
              children: p === "accept" ? nt.pointer : " ",
            }),
            Ps.jsx(w, {
              bold: p === "accept",
              color: p === "accept" ? "success" : void 0,
              dimColor: p !== "accept",
              children: " Accept  ",
            }),
            Ps.jsx(w, {
              color: "error",
              children: p === "decline" ? nt.pointer : " ",
            }),
            Ps.jsx(w, {
              bold: p === "decline",
              color: p === "decline" ? "error" : void 0,
              dimColor: p !== "decline",
              children: " Decline",
            }),
          ],
        }),
      ],
    }),
  });
}
function rdm(e) {
  let t = Nur.c(43),
    {
      schemaFields: n,
      scrollWindow: r,
      currentFieldIndex: o,
      focusedButton: s,
      formValues: i,
      validationErrors: a,
      resolvingFields: l,
      expandedAccordion: c,
      accordionOptionIndex: u,
      textInputValue: d,
      textInputCursorOffset: p,
      setTextInputCursorOffset: f,
      handleTextInputChange: m,
      handleTextInputSubmit: g,
      columns: h,
    } = e;
  if (!n.length) return null;
  let y = r.start > 0,
    b = r.end < n.length,
    _;
  if (t[0] !== y || t[1] !== r.start)
    ((_ =
      y &&
      Ps.jsx(U, {
        marginLeft: 2,
        children: Ps.jsxs(w, {
          dimColor: true,
          children: [nt.arrowUp, " ", r.start, " more above"],
        }),
      })),
      (t[0] = y),
      (t[1] = r.start),
      (t[2] = _));
  else _ = t[2];
  let S;
  if (
    t[3] !== u ||
    t[4] !== h ||
    t[5] !== o ||
    t[6] !== c ||
    t[7] !== s ||
    t[8] !== i ||
    t[9] !== m ||
    t[10] !== g ||
    t[11] !== l ||
    t[12] !== n ||
    t[13] !== r.end ||
    t[14] !== r.start ||
    t[15] !== f ||
    t[16] !== p ||
    t[17] !== d ||
    t[18] !== a
  ) {
    let C;
    if (
      t[20] !== u ||
      t[21] !== h ||
      t[22] !== o ||
      t[23] !== c ||
      t[24] !== s ||
      t[25] !== i ||
      t[26] !== m ||
      t[27] !== g ||
      t[28] !== l ||
      t[29] !== r.start ||
      t[30] !== f ||
      t[31] !== p ||
      t[32] !== d ||
      t[33] !== a
    )
      ((C = (x, I) => {
        let k = r.start + I,
          { name: D, schema: P, isRequired: O } = x,
          L = k === o && !s,
          M = i[D],
          N = M !== void 0 && (!Array.isArray(M) || M.length > 0),
          B = a[D],
          q = l.has(D)
            ? Ps.jsx(Zum, {})
            : B
              ? Ps.jsx(w, {
                  color: "error",
                  children: nt.warning,
                })
              : N
                ? Ps.jsx(w, {
                    color: "success",
                    dimColor: !L,
                    children: nt.tick,
                  })
                : O
                  ? Ps.jsx(w, {
                      color: "error",
                      children: "*",
                    })
                  : Ps.jsx(w, {
                      children: " ",
                    }),
          W = B ? "error" : N ? "success" : O ? "error" : "suggestion",
          V = L ? W : void 0,
          Y = Ps.jsx(w, {
            color: V,
            bold: L,
            children: P.title || D,
          }),
          z,
          K = null;
        if (c7e(P)) {
          let Z = Een(P),
            J = M ?? [];
          if (c === D && L)
            ((z = Ps.jsx(w, {
              dimColor: true,
              children: nt.triangleDownSmall,
            })),
              (K = Ps.jsx(U, {
                flexDirection: "column",
                marginLeft: 6,
                children: Z.map((oe, re) => {
                  let ee = Aen(P, oe),
                    ce = J.includes(oe),
                    ae = re === u;
                  return Ps.jsxs(
                    U,
                    {
                      gap: 1,
                      children: [
                        Ps.jsx(w, {
                          color: "suggestion",
                          children: ae ? nt.pointer : " ",
                        }),
                        Ps.jsx(w, {
                          color: ce ? "success" : void 0,
                          children: ce ? nt.checkboxOn : nt.checkboxOff,
                        }),
                        Ps.jsx(w, {
                          color: ae ? "suggestion" : void 0,
                          bold: ae,
                          children: ee,
                        }),
                      ],
                    },
                    oe,
                  );
                }),
              })));
          else {
            let oe = L
              ? Ps.jsxs(w, {
                  dimColor: true,
                  children: [nt.triangleRightSmall, " "],
                })
              : null;
            if (J.length > 0) {
              let re = J.map((ee) => Aen(P, ee));
              z = Ps.jsxs(w, {
                children: [
                  oe,
                  Ps.jsx(w, {
                    color: V,
                    bold: L,
                    children: re.join(", "),
                  }),
                ],
              });
            } else
              z = Ps.jsxs(w, {
                children: [
                  oe,
                  Ps.jsx(w, {
                    dimColor: true,
                    italic: true,
                    children: "not set",
                  }),
                ],
              });
          }
        } else if (Pme(P)) {
          let Z = wTt(P);
          if (c === D && L)
            ((z = Ps.jsx(w, {
              dimColor: true,
              children: nt.triangleDownSmall,
            })),
              (K = Ps.jsx(U, {
                flexDirection: "column",
                marginLeft: 6,
                children: Z.map((ne, oe) => {
                  let re = Hen(P, ne),
                    ee = M === ne,
                    ce = oe === u;
                  return Ps.jsxs(
                    U,
                    {
                      gap: 1,
                      children: [
                        Ps.jsx(w, {
                          color: "suggestion",
                          children: ce ? nt.pointer : " ",
                        }),
                        Ps.jsx(w, {
                          color: ee ? "success" : void 0,
                          children: ee ? nt.radioOn : nt.radioOff,
                        }),
                        Ps.jsx(w, {
                          color: ce ? "suggestion" : void 0,
                          bold: ce,
                          children: re,
                        }),
                      ],
                    },
                    ne,
                  );
                }),
              })));
          else {
            let ne = L
              ? Ps.jsxs(w, {
                  dimColor: true,
                  children: [nt.triangleRightSmall, " "],
                })
              : null;
            if (N)
              z = Ps.jsxs(w, {
                children: [
                  ne,
                  Ps.jsx(w, {
                    color: V,
                    bold: L,
                    children: Hen(P, M),
                  }),
                ],
              });
            else
              z = Ps.jsxs(w, {
                children: [
                  ne,
                  Ps.jsx(w, {
                    dimColor: true,
                    italic: true,
                    children: "not set",
                  }),
                ],
              });
          }
        } else if (P.type === "boolean") {
          if (L)
            z = N
              ? Ps.jsx(w, {
                  color: V,
                  bold: true,
                  children: M ? nt.checkboxOn : nt.checkboxOff,
                })
              : Ps.jsx(w, {
                  dimColor: true,
                  children: nt.checkboxOff,
                });
          else
            z = N
              ? Ps.jsx(w, {
                  children: M ? nt.checkboxOn : nt.checkboxOff,
                })
              : Ps.jsx(w, {
                  dimColor: true,
                  italic: true,
                  children: "not set",
                });
        } else if (ven(P)) {
          if (L)
            z = Ps.jsx(Ta, {
              value: d,
              onChange: m,
              onSubmit: g,
              placeholder: "Type something\u2026",
              columns: Math.min(h - 20, 60),
              cursorOffset: p,
              onChangeCursorOffset: f,
              focus: true,
              showCursor: true,
            });
          else {
            let Z = N && Ten(P) ? edm(String(M), P) : String(M);
            z = N
              ? Ps.jsx(w, {
                  children: Z,
                })
              : Ps.jsx(w, {
                  dimColor: true,
                  italic: true,
                  children: "not set",
                });
          }
        } else
          z = N
            ? Ps.jsx(w, {
                children: String(M),
              })
            : Ps.jsx(w, {
                dimColor: true,
                italic: true,
                children: "not set",
              });
        return Ps.jsxs(
          U,
          {
            flexDirection: "column",
            children: [
              Ps.jsxs(U, {
                gap: 1,
                children: [
                  Ps.jsx(w, {
                    color: W,
                    children: L ? nt.pointer : " ",
                  }),
                  q,
                  Ps.jsxs(U, {
                    children: [
                      Y,
                      Ps.jsx(w, {
                        color: V,
                        children: ": ",
                      }),
                      z,
                    ],
                  }),
                ],
              }),
              K,
              P.description &&
                Ps.jsx(U, {
                  marginLeft: 6,
                  children: Ps.jsx(w, {
                    dimColor: true,
                    children: P.description,
                  }),
                }),
              Ps.jsx(U, {
                marginLeft: 6,
                height: 1,
                children: B
                  ? Ps.jsx(w, {
                      color: "error",
                      italic: true,
                      children: B,
                    })
                  : Ps.jsx(w, {
                      children: " ",
                    }),
              }),
            ],
          },
          D,
        );
      }),
        (t[20] = u),
        (t[21] = h),
        (t[22] = o),
        (t[23] = c),
        (t[24] = s),
        (t[25] = i),
        (t[26] = m),
        (t[27] = g),
        (t[28] = l),
        (t[29] = r.start),
        (t[30] = f),
        (t[31] = p),
        (t[32] = d),
        (t[33] = a),
        (t[34] = C));
    else C = t[34];
    ((S = n.slice(r.start, r.end).map(C)),
      (t[3] = u),
      (t[4] = h),
      (t[5] = o),
      (t[6] = c),
      (t[7] = s),
      (t[8] = i),
      (t[9] = m),
      (t[10] = g),
      (t[11] = l),
      (t[12] = n),
      (t[13] = r.end),
      (t[14] = r.start),
      (t[15] = f),
      (t[16] = p),
      (t[17] = d),
      (t[18] = a),
      (t[19] = S));
  } else S = t[19];
  let A;
  if (t[35] !== b || t[36] !== n.length || t[37] !== r.end)
    ((A =
      b &&
      Ps.jsx(U, {
        marginLeft: 2,
        children: Ps.jsxs(w, {
          dimColor: true,
          children: [nt.arrowDown, " ", n.length - r.end, " more below"],
        }),
      })),
      (t[35] = b),
      (t[36] = n.length),
      (t[37] = r.end),
      (t[38] = A));
  else A = t[38];
  let v;
  if (t[39] !== _ || t[40] !== S || t[41] !== A)
    ((v = Ps.jsxs(U, {
      flexDirection: "column",
      children: [_, S, A],
    })),
      (t[39] = _),
      (t[40] = S),
      (t[41] = A),
      (t[42] = v));
  else v = t[42];
  return v;
}
var Nur,
  Q_,
  Ps,
  ven = (e) => ["string", "number", "integer"].includes(e.type),
  Qgc = "\u280B\u2819\u2839\u2838\u283C\u2834\u2826\u2827\u2807\u280F";
