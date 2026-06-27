// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m1o
// matched 2.1.88 source: src/components/ModelPicker.tsx
// class=modified  jaccard=0.172  score=0.3117  fileCov=0.2772
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function hKe(e) {
  let t = h1o.c(102),
    {
      initial: n,
      sessionModel: r,
      onSelect: o,
      onSetDefault: s,
      onCancel: i,
      isStandaloneCommand: a,
      showFastModeNotice: l,
      headerText: c,
      skipSettingsWrite: u,
    } = e,
    d = Ho(),
    p = n === null ? C7t : n,
    [f, m] = $Oe.useState(p),
    g = Ht(XRf),
    [h] = na(),
    [y, b] = $Oe.useState(false),
    _ = Ht(YRf),
    S = Ht(KRf),
    A;
  if (t[0] !== _ || t[1] !== S)
    ((A = S ? "ultracode" : _ !== void 0 ? x_e(_) : void 0), (t[0] = _), (t[1] = S), (t[2] = A));
  else A = t[2];
  let [v, C] = $Oe.useState(A),
    x = g ?? false,
    I;
  if (t[3] !== x) ((I = Xct(x)), (t[3] = x), (t[4] = I));
  else I = t[4];
  let k = I,
    D;
  if (t[5] !== n || t[6] !== k) {
    e: {
      if (n !== null && !k.some((Ln) => Ln.value === n) && xa(n)) {
        let Ln = {
            value: n,
            label: bj(n),
            description: "Current model",
          },
          Hn = k.findIndex(zRf);
        if (Hn === -1) {
          D = [...k, Ln];
          break e;
        }
        D = [...k.slice(0, Hn), Ln, ...k.slice(Hn)];
        break e;
      }
      D = k;
    }
    ((t[5] = n), (t[6] = k), (t[7] = D));
  } else D = t[7];
  let P = D,
    O;
  if (t[8] !== P || t[9] !== h) {
    let Ln;
    if (t[11] !== h)
      ((Ln = (Hn) => {
        let kr = Hn.value === null ? C7t : Hn.value,
          Mr = dtr(kr),
          fe = Mr ? RMl(Mr) : void 0,
          Re = (
            (fe ? (Hn.description ? `${Hn.description} \xB7 ${fe}` : fe) : Hn.description) ?? ""
          )
            .replaceAll("Fable 5", Io("claude", h)("Fable 5"))
            .replaceAll("Mythos 5", Io("claude", h)("Mythos 5"));
        return {
          ...Hn,
          value: kr,
          description: Re,
        };
      }),
        (t[11] = h),
        (t[12] = Ln));
    else Ln = t[12];
    ((O = P.map(Ln)), (t[8] = P), (t[9] = h), (t[10] = O));
  } else O = t[10];
  let L = O,
    M;
  if (t[13] !== p || t[14] !== L)
    ((M = L.some((Ln) => Ln.value === p) ? p : (L[0]?.value ?? void 0)),
      (t[13] = p),
      (t[14] = L),
      (t[15] = M));
  else M = t[15];
  let N = M,
    B = Math.min(10, L.length),
    $ = Math.max(0, L.length - B),
    q;
  if (t[16] !== f || t[17] !== L) {
    let Ln;
    if (t[19] !== f) ((Ln = (Hn) => Hn.value === f), (t[19] = f), (t[20] = Ln));
    else Ln = t[20];
    ((q = L.find(Ln)), (t[16] = f), (t[17] = L), (t[18] = q));
  } else q = t[18];
  let W = q,
    V = W?.label,
    Y = W?.disabled === true,
    z;
  if (t[21] !== f) ((z = dtr(f)), (t[21] = f), (t[22] = z));
  else z = t[22];
  let K = z,
    [, Z] = $Oe.useReducer(VRf, 0),
    J;
  if (t[23] !== Z || t[24] !== K)
    ((J = () => {
      if (!K?.includes("application-inference-profile")) return;
      let Ln = false;
      return (
        DIe(K).then(() => {
          if (!Ln) Z();
        }),
        () => {
          Ln = true;
        }
      );
    }),
      (t[23] = Z),
      (t[24] = K),
      (t[25] = J));
  else J = t[25];
  let ne;
  if (t[26] !== K) ((ne = [K]), (t[26] = K), (t[27] = ne));
  else ne = t[27];
  $Oe.useEffect(J, ne);
  let oe;
  if (t[28] !== K) ((oe = K ? Kw(K) : false), (t[28] = K), (t[29] = oe));
  else oe = t[29];
  let re = oe,
    ee;
  if (t[30] !== K) ((ee = K ? Hke(K) && I3e("max", K) : false), (t[30] = K), (t[31] = ee));
  else ee = t[31];
  let ce = ee,
    ae;
  if (t[32] !== K) ((ae = K ? Yte(K) && I3e("xhigh", K) : false), (t[32] = K), (t[33] = ae));
  else ae = t[33];
  let de = ae,
    Ee;
  if (t[34] !== K) ((Ee = K ? t8(K) : false), (t[34] = K), (t[35] = Ee));
  else Ee = t[35];
  let me = Ee,
    pe;
  if (t[36] !== K || t[37] !== f) {
    let Ln = g1o(f);
    ((pe = K ? yKr(Ln, K) : Ln), (t[36] = K), (t[37] = f), (t[38] = pe));
  } else pe = t[38];
  let ge = pe,
    he;
  if (t[39] !== K || t[40] !== y)
    ((he = !y && !!K && R3e(K)), (t[39] = K), (t[40] = y), (t[41] = he));
  else he = t[41];
  let ie = he,
    le = ie
      ? ge
      : v === "ultracode" && !me
        ? ce
          ? "max"
          : "high"
        : (v === "max" && !ce) || (v === "xhigh" && !de)
          ? "high"
          : v,
    He;
  if (t[42] !== _ || t[43] !== y)
    ((He = (Ln) => {
      if ((m(Ln), !y && _ === void 0)) C(g1o(Ln));
    }),
      (t[42] = _),
      (t[43] = y),
      (t[44] = He));
  else He = t[44];
  let ye = He,
    ue;
  if (
    t[45] !== ge ||
    t[46] !== ie ||
    t[47] !== Y ||
    t[48] !== re ||
    t[49] !== ce ||
    t[50] !== me ||
    t[51] !== de
  )
    ((ue = (Ln) => {
      if (!re || Y) return;
      (C((Hn) => JRf(ie ? ge : (Hn ?? ge), Ln, ce, de, me)), b(true));
    }),
      (t[45] = ge),
      (t[46] = ie),
      (t[47] = Y),
      (t[48] = re),
      (t[49] = ce),
      (t[50] = me),
      (t[51] = de),
      (t[52] = ue));
  else ue = t[52];
  let we = ue,
    Ce,
    Ie;
  if (t[53] !== we)
    ((Ce = () => we("left")), (Ie = () => we("right")), (t[53] = we), (t[54] = Ce), (t[55] = Ie));
  else ((Ce = t[54]), (Ie = t[55]));
  let Ve;
  if (t[56] === Symbol.for("react.memo_cache_sentinel"))
    ((Ve = {
      context: "ModelPicker",
    }),
      (t[56] = Ve));
  else Ve = t[56];
  No(
    {
      "modelPicker:decreaseEffort": Ce,
      "modelPicker:increaseEffort": Ie,
      "modelPicker:thisSessionOnly": () => {
        if (!s || f === void 0) return;
        if (Y) return;
        Ze(f);
      },
    },
    Ve,
  );
  function Ze(Ln) {
    if (
      (G("tengu_model_command_menu_effort", {
        effort: Oo(v),
      }),
      v === "ultracode" && y && !u)
    )
      (Dj(), d(qRf));
    else if (!u && y) {
      let Mr = w1i(v === "ultracode" ? "xhigh" : v, g1o(Ln), yn("userSettings")?.effortLevel, y),
        fe = Tke(Mr);
      if (fe !== void 0)
        io("userSettings", {
          effortLevel: fe,
        });
      (Dj(),
        d((Te) => ({
          ...Te,
          effortValue: Mr,
          ultracode: false,
        })));
    }
    let Hn = dtr(Ln),
      kr = y && Hn && Kw(Hn) && v !== "ultracode" ? v : void 0;
    if (Ln === C7t) {
      o(null, kr);
      return;
    }
    o(Ln, kr);
  }
  let Be;
  if (t[57] === Symbol.for("react.memo_cache_sentinel"))
    ((Be = Xg.jsx(w, {
      color: "remember",
      bold: true,
      children: "Select model",
    })),
      (t[57] = Be));
  else Be = t[57];
  let Me =
      c ??
      "Switch between Claude models. Your pick becomes the default for new sessions. For other/previous model names, specify with --model.",
    Ue;
  if (t[58] !== Me)
    ((Ue = Xg.jsx(w, {
      dimColor: true,
      children: Me,
    })),
      (t[58] = Me),
      (t[59] = Ue));
  else Ue = t[59];
  let tt;
  if (t[60] !== r)
    ((tt =
      r &&
      Xg.jsxs(w, {
        dimColor: true,
        children: [
          "Currently using ",
          bj(r),
          " for this session only. Selecting a model will undo this.",
        ],
      })),
      (t[60] = r),
      (t[61] = tt));
  else tt = t[61];
  let bt;
  if (t[62] !== Ue || t[63] !== tt)
    ((bt = Xg.jsxs(U, {
      marginBottom: 1,
      flexDirection: "column",
      children: [Be, Ue, tt],
    })),
      (t[62] = Ue),
      (t[63] = tt),
      (t[64] = bt));
  else bt = t[64];
  let Ke;
  if (t[65] !== Ze || t[66] !== s)
    ((Ke = (Ln) => {
      if (s) s(Ln === C7t ? null : Ln);
      Ze(Ln);
    }),
      (t[65] = Ze),
      (t[66] = s),
      (t[67] = Ke));
  else Ke = t[67];
  let Et = i ?? WRf,
    ct;
  if (
    t[68] !== ye ||
    t[69] !== N ||
    t[70] !== p ||
    t[71] !== L ||
    t[72] !== Ke ||
    t[73] !== Et ||
    t[74] !== B
  )
    ((ct = Xg.jsx(U, {
      flexDirection: "column",
      children: Xg.jsx(Sr, {
        defaultValue: p,
        defaultFocusValue: N,
        options: L,
        onChange: Ke,
        onFocus: ye,
        onCancel: Et,
        visibleOptionCount: B,
      }),
    })),
      (t[68] = ye),
      (t[69] = N),
      (t[70] = p),
      (t[71] = L),
      (t[72] = Ke),
      (t[73] = Et),
      (t[74] = B),
      (t[75] = ct));
  else ct = t[75];
  let Je;
  if (t[76] !== $)
    ((Je =
      $ > 0 &&
      Xg.jsx(U, {
        paddingLeft: 3,
        children: Xg.jsx(d$, {
          count: $,
          unit: "model",
        }),
      })),
      (t[76] = $),
      (t[77] = Je));
  else Je = t[77];
  let gt;
  if (t[78] !== ct || t[79] !== Je)
    ((gt = Xg.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: [ct, Je],
    })),
      (t[78] = ct),
      (t[79] = Je),
      (t[80] = gt));
  else gt = t[80];
  let st;
  if (t[81] !== le || t[82] !== ge || t[83] !== V || t[84] !== Y || t[85] !== re)
    ((st =
      !Y &&
      Xg.jsx(U, {
        marginBottom: 1,
        flexDirection: "column",
        children: re
          ? Xg.jsxs(Xg.Fragment, {
              children: [
                Xg.jsxs(w, {
                  dimColor: true,
                  children: [
                    Xg.jsx(OMl, {
                      effort: le,
                    }),
                    " ",
                    le === "xhigh" ? "xHigh" : le ? mqe(le) : "",
                    " ",
                    "effort",
                    le === ge ? " (default)" : "",
                    " ",
                    Xg.jsx(w, {
                      color: "subtle",
                      children: Xg.jsx(ht, {
                        chord: ["left", "right"],
                        action: "adjust",
                      }),
                    }),
                  ],
                }),
                le === "max"
                  ? Xg.jsx(w, {
                      color: "subtle",
                      children: TNt,
                    })
                  : null,
              ],
            })
          : Xg.jsxs(w, {
              color: "subtle",
              children: [
                Xg.jsx(OMl, {
                  effort: void 0,
                }),
                " Effort not supported",
                V ? ` for ${V}` : "",
              ],
            }),
      })),
      (t[81] = le),
      (t[82] = ge),
      (t[83] = V),
      (t[84] = Y),
      (t[85] = re),
      (t[86] = st));
  else st = t[86];
  let xt;
  if (t[87] !== l)
    ((xt = sc()
      ? l
        ? Xg.jsx(U, {
            marginBottom: 1,
            children: Xg.jsxs(w, {
              dimColor: true,
              children: [
                "Fast mode is ",
                Xg.jsx(w, {
                  bold: true,
                  children: "ON",
                }),
                " and available with",
                " ",
                FG(),
                " (/fast). Switching to other models turns off fast mode.",
              ],
            }),
          })
        : Fx() && !cle()
          ? Xg.jsx(U, {
              marginBottom: 1,
              children: Xg.jsxs(w, {
                dimColor: true,
                children: [
                  "Use ",
                  Xg.jsx(w, {
                    bold: true,
                    children: "/fast",
                  }),
                  " to turn on Fast mode (",
                  FG(),
                  ").",
                ],
              }),
            })
          : null
      : null),
      (t[87] = l),
      (t[88] = xt));
  else xt = t[88];
  let vt;
  if (t[89] !== bt || t[90] !== gt || t[91] !== st || t[92] !== xt)
    ((vt = Xg.jsxs(U, {
      flexDirection: "column",
      children: [bt, gt, st, xt],
    })),
      (t[89] = bt),
      (t[90] = gt),
      (t[91] = st),
      (t[92] = xt),
      (t[93] = vt));
  else vt = t[93];
  let jt;
  if (t[94] !== a || t[95] !== s)
    ((jt =
      a &&
      Xg.jsx(vb, {
        children: Xg.jsxs(Tn, {
          children: [
            Xg.jsx(ht, {
              chord: "enter",
              action: s ? "set as default" : "confirm",
            }),
            s &&
              Xg.jsx(ht, {
                chord: "s",
                action: "use this session only",
              }),
            Xg.jsx(mr, {
              action: "select:cancel",
              context: "Select",
              fallback: "Esc",
              description: "cancel",
            }),
          ],
        }),
      })),
      (t[94] = a),
      (t[95] = s),
      (t[96] = jt));
  else jt = t[96];
  let en;
  if (t[97] !== vt || t[98] !== jt)
    ((en = Xg.jsxs(U, {
      flexDirection: "column",
      children: [vt, jt],
    })),
      (t[97] = vt),
      (t[98] = jt),
      (t[99] = en));
  else en = t[99];
  let Dn = en;
  if (!a) return Dn;
  let nn;
  if (t[100] !== Dn)
    ((nn = Xg.jsx(Fu, {
      color: "permission",
      children: Dn,
    })),
      (t[100] = Dn),
      (t[101] = nn));
  else nn = t[101];
  return nn;
}
function WRf() {}
function qRf(e) {
  return {
    ...e,
    effortValue: "xhigh",
    ultracode: true,
  };
}
function VRf(e) {
  return e + 1;
}
function zRf(e) {
  return e.disabled === true;
}
function KRf(e) {
  return e.ultracode;
}
function YRf(e) {
  return e.effortValue;
}
function XRf(e) {
  return sc() ? e.fastMode : false;
}
function dtr(e) {
  if (!e) return;
  return e === C7t ? Ey() : zo(e);
}
function OMl(e) {
  let t = h1o.c(5),
    { effort: n } = e,
    r = n ? "claude" : "subtle",
    o;
  if (t[0] !== n) ((o = n === "ultracode" ? Ofn : f1o(n ?? "low")), (t[0] = n), (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== r || t[3] !== o)
    ((s = Xg.jsx(w, {
      color: r,
      children: o,
    })),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s));
  else s = t[4];
  return s;
}
function JRf(e, t, n, r, o) {
  let s = ["low", "medium", "high"];
  if (r) s.push("xhigh");
  if (n) s.push("max");
  if (o) s.push("ultracode");
  let i = s.indexOf(e),
    a = i !== -1 ? i : s.indexOf("high");
  if (t === "right") return s[(a + 1) % s.length];
  else return s[(a - 1 + s.length) % s.length];
}
function g1o(e) {
  let t = dtr(e) ?? Ey();
  return x_e(CNt(t));
}
var h1o,
  $Oe,
  Xg,
  C7t = "__NO_PREFERENCE__";
