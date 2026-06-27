// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vzl
// matched 2.1.88 source: src/components/permissions/rules/PermissionRuleList.tsx
// class=modified  jaccard=0.312  score=0.5016  fileCov=0.4522
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vzl] deps: si, ft, Vl, Ye, Csr, kP
((Azl = R(lt(), 1)), (Hzl = R(rt(), 1)), (pYe = R(se(), 1)));
function Rqf(e) {
  let t = FAt.c(4),
    { rule: n } = e,
    r;
  if (t[0] !== n.source) ((r = COe(n.source)), (t[0] = n.source), (t[1] = r));
  else r = t[1];
  let o = `From ${r}`,
    s;
  if (t[2] !== o)
    ((s = mu.jsx(w, {
      dimColor: !0,
      children: o,
    })),
      (t[2] = o),
      (t[3] = s));
  else s = t[3];
  return s;
}
function getRuleBehaviorLabel(e) {
  switch (e) {
    case "allow":
      return "allowed";
    case "deny":
      return "denied";
    case "ask":
      return "ask";
  }
}
function RuleDetails(e) {
  let t = FAt.c(29),
    { rule: n, onDelete: r, onCancel: o } = e,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((s = {
      context: "Confirmation",
    }),
      (t[0] = s));
  else s = t[0];
  $r("confirm:no", o, s);
  let i;
  if (t[1] !== n.ruleValue) ((i = Pp(n.ruleValue)), (t[1] = n.ruleValue), (t[2] = i));
  else i = t[2];
  let a;
  if (t[3] !== i)
    ((a = mu.jsx(w, {
      bold: !0,
      children: i,
    })),
      (t[3] = i),
      (t[4] = a));
  else a = t[4];
  let l;
  if (t[5] !== n.ruleValue)
    ((l = mu.jsx(wsr, {
      ruleValue: n.ruleValue,
    })),
      (t[5] = n.ruleValue),
      (t[6] = l));
  else l = t[6];
  let c;
  if (t[7] !== n)
    ((c = mu.jsx(Rqf, {
      rule: n,
    })),
      (t[7] = n),
      (t[8] = c));
  else c = t[8];
  let u;
  if (t[9] !== a || t[10] !== l || t[11] !== c)
    ((u = mu.jsxs(U, {
      flexDirection: "column",
      marginX: 2,
      children: [a, l, c],
    })),
      (t[9] = a),
      (t[10] = l),
      (t[11] = c),
      (t[12] = u));
  else u = t[12];
  let d = u,
    p;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((p = mu.jsx(U, {
      marginLeft: 3,
      children: mu.jsx(vb, {
        children: mu.jsx(ht, {
          chord: "escape",
          action: "cancel",
        }),
      }),
    })),
      (t[13] = p));
  else p = t[13];
  let f = p;
  if (n.source === "policySettings") {
    let _;
    if (t[14] === Symbol.for("react.memo_cache_sentinel"))
      ((_ = mu.jsxs(w, {
        italic: !0,
        children: [
          "This rule is configured by managed settings and cannot be modified.",
          `
`,
          "Contact your system administrator for more information.",
        ],
      })),
        (t[14] = _));
    else _ = t[14];
    let S;
    if (t[15] !== d)
      ((S = mu.jsxs(mu.Fragment, {
        children: [
          mu.jsxs(cA, {
            color: "permission",
            title: "Rule details",
            children: [d, _],
          }),
          f,
        ],
      })),
        (t[15] = d),
        (t[16] = S));
    else S = t[16];
    return S;
  }
  let m;
  if (t[17] !== n.ruleBehavior)
    ((m = getRuleBehaviorLabel(n.ruleBehavior)), (t[17] = n.ruleBehavior), (t[18] = m));
  else m = t[18];
  let g;
  if (t[19] !== m)
    ((g = mu.jsxs(w, {
      bold: !0,
      color: "error",
      children: ["Delete ", m, " tool?"],
    })),
      (t[19] = m),
      (t[20] = g));
  else g = t[20];
  let h;
  if (t[21] === Symbol.for("react.memo_cache_sentinel"))
    ((h = mu.jsx(w, {
      children: "Are you sure you want to delete this permission rule?",
    })),
      (t[21] = h));
  else h = t[21];
  let y;
  if (t[22] !== o || t[23] !== r)
    ((y = mu.jsx(Kl, {
      onConfirm: r,
      onCancel: o,
    })),
      (t[22] = o),
      (t[23] = r),
      (t[24] = y));
  else y = t[24];
  let b;
  if (t[25] !== d || t[26] !== y || t[27] !== g)
    ((b = mu.jsxs(mu.Fragment, {
      children: [
        mu.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          borderStyle: "round",
          paddingLeft: 1,
          paddingRight: 1,
          borderColor: "error",
          children: [g, d, h, y],
        }),
        f,
      ],
    })),
      (t[25] = d),
      (t[26] = y),
      (t[27] = g),
      (t[28] = b));
  else b = t[28];
  return b;
}
function Pqf(e) {
  let t = FAt.c(31),
    {
      options: n,
      searchQuery: r,
      isSearchMode: o,
      isFocused: s,
      onSelect: i,
      onCancel: a,
      lastFocusedRuleKey: l,
      cursorOffset: c,
      onHeaderFocusChange: u,
    } = e,
    d = _Ml(),
    { headerFocused: p, focusHeader: f, blurHeader: m } = tx(),
    g,
    h;
  if (t[0] !== m || t[1] !== p || t[2] !== o)
    ((g = () => {
      if (o && p) m();
    }),
      (h = [o, p, m]),
      (t[0] = m),
      (t[1] = p),
      (t[2] = o),
      (t[3] = g),
      (t[4] = h));
  else ((g = t[3]), (h = t[4]));
  A3.useEffect(g, h);
  let y, b;
  if (t[5] !== p || t[6] !== u)
    ((y = () => {
      u(p);
    }),
      (b = [p, u]),
      (t[5] = p),
      (t[6] = u),
      (t[7] = y),
      (t[8] = b));
  else ((y = t[7]), (b = t[8]));
  A3.useEffect(y, b);
  let _ = o && !p,
    S;
  if (t[9] !== c || t[10] !== s || t[11] !== r || t[12] !== _ || t[13] !== d)
    ((S = mu.jsx(U, {
      marginBottom: 1,
      flexDirection: "column",
      children: mu.jsx(LP, {
        query: r,
        isFocused: _,
        isTerminalFocused: s,
        width: d,
        cursorOffset: c,
      }),
    })),
      (t[9] = c),
      (t[10] = s),
      (t[11] = r),
      (t[12] = _),
      (t[13] = d),
      (t[14] = S));
  else S = t[14];
  let A = Math.min(10, n.length),
    v;
  if (t[15] !== p || t[16] !== o) ((v = o || p), (t[15] = p), (t[16] = o), (t[17] = v));
  else v = t[17];
  let C;
  if (t[18] !== f) ((C = f), (t[18] = f), (t[19] = C));
  else C = t[19];
  let x;
  if (
    t[20] !== l ||
    t[21] !== a ||
    t[22] !== i ||
    t[23] !== n ||
    t[24] !== A ||
    t[25] !== v ||
    t[26] !== C
  )
    ((x = mu.jsx(Sr, {
      options: n,
      onChange: i,
      onCancel: a,
      visibleOptionCount: A,
      isDisabled: v,
      defaultFocusValue: l,
      onUpFromFirstItem: C,
    })),
      (t[20] = l),
      (t[21] = a),
      (t[22] = i),
      (t[23] = n),
      (t[24] = A),
      (t[25] = v),
      (t[26] = C),
      (t[27] = x));
  else x = t[27];
  let I;
  if (t[28] !== S || t[29] !== x)
    ((I = mu.jsxs(U, {
      flexDirection: "column",
      children: [S, x],
    })),
      (t[28] = S),
      (t[29] = x),
      (t[30] = I));
  else I = t[30];
  return I;
}
function PermissionRulesTab(e) {
  let t = FAt.c(27),
    n,
    r,
    o,
    s,
    i,
    a,
    l,
    c,
    u;
  if (t[0] !== e) {
    let { tab: m, getRulesOptions: g, handleToolSelect: h, ...y } = e;
    ((u = m), (o = h), (s = y), (r = U), (a = "column"), (l = u === "allow" ? 0 : void 0));
    let b;
    if (t[10] === Symbol.for("react.memo_cache_sentinel"))
      ((b = {
        allow: "Claude Code won't ask before using allowed tools.",
        ask: "Claude Code will always ask for confirmation before using these tools.",
        deny: "Claude Code will always reject requests to use denied tools.",
      }),
        (t[10] = b));
    else b = t[10];
    let _ = b[u];
    if (t[11] !== _)
      ((c = mu.jsx(w, {
        children: _,
      })),
        (t[11] = _),
        (t[12] = c));
    else c = t[12];
    ((n = Pqf),
      (i = g(u, s.searchQuery)),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s),
      (t[5] = i),
      (t[6] = a),
      (t[7] = l),
      (t[8] = c),
      (t[9] = u));
  } else
    ((n = t[1]),
      (r = t[2]),
      (o = t[3]),
      (s = t[4]),
      (i = t[5]),
      (a = t[6]),
      (l = t[7]),
      (c = t[8]),
      (u = t[9]));
  let d;
  if (t[13] !== o || t[14] !== u) ((d = (m) => o(m, u)), (t[13] = o), (t[14] = u), (t[15] = d));
  else d = t[15];
  let p;
  if (t[16] !== n || t[17] !== s || t[18] !== i.options || t[19] !== d)
    ((p = mu.jsx(n, {
      options: i.options,
      onSelect: d,
      ...s,
    })),
      (t[16] = n),
      (t[17] = s),
      (t[18] = i.options),
      (t[19] = d),
      (t[20] = p));
  else p = t[20];
  let f;
  if (t[21] !== r || t[22] !== a || t[23] !== l || t[24] !== c || t[25] !== p)
    ((f = mu.jsxs(r, {
      flexDirection: a,
      flexShrink: l,
      children: [c, p],
    })),
      (t[21] = r),
      (t[22] = a),
      (t[23] = l),
      (t[24] = c),
      (t[25] = p),
      (t[26] = f));
  else f = t[26];
  return f;
}
function PermissionRuleList(e) {
  let t = FAt.c(119),
    { onExit: n, initialTab: r, onRetryDenials: o } = e,
    { getDenials: s, removeDenial: i } = BAt(),
    a;
  if (t[0] !== s) ((a = s()), (t[0] = s), (t[1] = a));
  else a = t[1];
  let l = a.length > 0,
    c = r ?? (l ? "recent" : "allow"),
    u;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((u = []), (t[2] = u));
  else u = t[2];
  let [d, p] = A3.useState(u),
    f = Ht(Fqf),
    m = Ho(),
    g = Pg(),
    [h] = na(),
    y;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((y = {
      approved: new Set(),
      retry: new Set(),
      denials: [],
    }),
      (t[3] = y));
  else y = t[3];
  let b = A3.useRef(y),
    _;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = (ze) => {
      b.current = ze;
    }),
      (t[4] = _));
  else _ = t[4];
  let S = _,
    [A, v] = A3.useState(),
    [C, x] = A3.useState(),
    [I, k] = A3.useState(null),
    [D, P] = A3.useState(null),
    [O, L] = A3.useState(!1),
    [M, N] = A3.useState(null),
    [B, $] = A3.useState(!1),
    [q, W] = A3.useState(!0),
    V;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((V = (ze) => {
      W(ze);
    }),
      (t[5] = V));
  else V = t[5];
  let Y = V,
    z;
  if (t[6] !== f)
    ((z = new Map()),
      bHe(f).forEach((ze) => {
        z.set(De(ze), ze);
      }),
      (t[6] = f),
      (t[7] = z));
  else z = t[7];
  let K = z,
    Z;
  if (t[8] !== f)
    ((Z = new Map()),
      cz(f).forEach((ze) => {
        Z.set(De(ze), ze);
      }),
      (t[8] = f),
      (t[9] = Z));
  else Z = t[9];
  let J = Z,
    ne;
  if (t[10] !== f)
    ((ne = new Map()),
      kHe(f).forEach((ze) => {
        ne.set(De(ze), ze);
      }),
      (t[10] = f),
      (t[11] = ne));
  else ne = t[11];
  let oe = ne,
    re;
  if (t[12] !== K || t[13] !== oe || t[14] !== J)
    ((re = (ze, Mt) => {
      let Qt = Mt === void 0 ? "" : Mt,
        Er = (() => {
          switch (ze) {
            case "allow":
              return K;
            case "deny":
              return J;
            case "ask":
              return oe;
            case "workspace":
            case "recent":
              return new Map();
          }
        })(),
        pt = [];
      if (ze !== "workspace" && ze !== "recent" && !Qt)
        pt.push({
          label: `Add a new rule${nt.ellipsis}`,
          value: "add-new-rule",
        });
      let ln = Array.from(Er.keys()).sort((ir, Rr) => {
          let _o = Er.get(ir),
            Xo = Er.get(Rr);
          if (_o && Xo) {
            let Pn = Pp(_o.ruleValue).toLowerCase(),
              lr = Pp(Xo.ruleValue).toLowerCase();
            return Pn.localeCompare(lr);
          }
          return 0;
        }),
        pn = Qt.toLowerCase();
      for (let ir of ln) {
        let Rr = Er.get(ir);
        if (Rr) {
          let _o = Pp(Rr.ruleValue);
          if (Qt && !_o.toLowerCase().includes(pn)) continue;
          pt.push({
            label: _o,
            value: ir,
          });
        }
      }
      return {
        options: pt,
        rulesByKey: Er,
      };
    }),
      (t[12] = K),
      (t[13] = oe),
      (t[14] = J),
      (t[15] = re));
  else re = t[15];
  let ee = re,
    ce = !A && !I && !D && !O && !M,
    ae = ce && B,
    de;
  if (t[16] === Symbol.for("react.memo_cache_sentinel"))
    ((de = () => {
      $(!1);
    }),
      (t[16] = de));
  else de = t[16];
  let Ee;
  if (t[17] !== ae)
    ((Ee = {
      isActive: ae,
      onExit: de,
    }),
      (t[17] = ae),
      (t[18] = Ee));
  else Ee = t[18];
  let { query: me, setQuery: pe, cursorOffset: ge, handleKeyDown: he, handlePaste: ie } = Uk(Ee),
    le;
  if (t[19] !== B || t[20] !== ce || t[21] !== he || t[22] !== pe)
    ((le = (ze) => {
      if (!ce) return;
      if (B) {
        he(ze);
        return;
      }
      if (ze.ctrl || ze.meta) return;
      if (ze.key === "/") (ze.preventDefault(), $(!0), pe(""));
      else if (
        ze.key.length === 1 &&
        ze.key !== "j" &&
        ze.key !== "k" &&
        ze.key !== "m" &&
        ze.key !== "i" &&
        ze.key !== "r" &&
        ze.key !== " "
      )
        (ze.preventDefault(), $(!0), pe(ze.key));
    }),
      (t[19] = B),
      (t[20] = ce),
      (t[21] = he),
      (t[22] = pe),
      (t[23] = le));
  else le = t[23];
  let He = le,
    ye;
  if (t[24] !== ee)
    ((ye = (ze, Mt) => {
      let { rulesByKey: Qt } = ee(Mt);
      if (ze === "add-new-rule") {
        k(Mt);
        return;
      } else {
        v(Qt.get(ze));
        return;
      }
    }),
      (t[24] = ee),
      (t[25] = ye));
  else ye = t[25];
  let ue = ye,
    we;
  if (t[26] === Symbol.for("react.memo_cache_sentinel"))
    ((we = () => {
      k(null);
    }),
      (t[26] = we));
  else we = t[26];
  let Ce = we,
    Ie;
  if (t[27] === Symbol.for("react.memo_cache_sentinel"))
    ((Ie = (ze, Mt) => {
      (P({
        ruleValue: ze,
        ruleBehavior: Mt,
      }),
        k(null));
    }),
      (t[27] = Ie));
  else Ie = t[27];
  let Ve = Ie,
    Ze;
  if (t[28] !== h)
    ((Ze = (ze, Mt) => {
      P(null);
      for (let Qt of ze)
        p((Er) => [...Er, `Added ${Qt.ruleBehavior} rule ${wt.bold(Pp(Qt.ruleValue))}`]);
      for (let Qt of Mt) {
        let Er = Qt.shadowType === "deny" ? "blocked" : "shadowed";
        p((pt) => [
          ...pt,
          Io("warning", h)(`${nt.warning} Warning: ${Pp(Qt.rule.ruleValue)} is ${Er}`),
          wt.dim(`  ${Qt.reason}`),
          wt.dim(`  Fix: ${Qt.fix}`),
        ]);
      }
    }),
      (t[28] = h),
      (t[29] = Ze));
  else Ze = t[29];
  let Be = Ze,
    Me;
  if (t[30] === Symbol.for("react.memo_cache_sentinel"))
    ((Me = () => {
      P(null);
    }),
      (t[30] = Me));
  else Me = t[30];
  let Ue = Me,
    tt;
  if (t[31] === Symbol.for("react.memo_cache_sentinel")) ((tt = () => L(!0)), (t[31] = tt));
  else tt = t[31];
  let bt = tt,
    Ke;
  if (t[32] === Symbol.for("react.memo_cache_sentinel")) ((Ke = (ze) => N(ze)), (t[32] = Ke));
  else Ke = t[32];
  let Et = Ke,
    ct;
  if (t[33] !== d || t[34] !== n || t[35] !== o || t[36] !== i)
    ((ct = () => {
      let ze = b.current,
        Mt = (pt) =>
          Array.from(pt)
            .map((ln) => ze.denials[ln])
            .filter(Uqf),
        Qt = Mt(ze.retry);
      if (Qt.length > 0) {
        let pt = Qt.map(Bqf);
        (o(pt),
          n(void 0, {
            shouldQuery: !0,
            metaMessages: [
              `Permission granted for: ${pt.join(", ")}. You may now retry ${pt.length === 1 ? "this command" : "these commands"} if you would like.`,
            ],
          }));
        return;
      }
      let Er = Mt(ze.approved);
      if (Er.length > 0 || d.length > 0) {
        for (let pn of Er) i(pn);
        let pt = Er.map(Nqf),
          ln = pt.length > 0 ? [`Approved ${pt.map(Oqf).join(", ")}`] : [];
        n(
          [...ln, ...d].join(`
`),
          pt.length > 0
            ? {
                metaMessages: [
                  `Permission granted for: ${pt.join(", ")}. You may now retry ${pt.length === 1 ? "this command" : "these commands"} if you would like.`,
                ],
              }
            : void 0,
        );
      } else
        n("Permissions dialog dismissed", {
          display: "system",
        });
    }),
      (t[33] = d),
      (t[34] = n),
      (t[35] = o),
      (t[36] = i),
      (t[37] = ct));
  else ct = t[37];
  let Je = ct,
    gt = ce && !B,
    st;
  if (t[38] !== gt)
    ((st = {
      context: "Settings",
      isActive: gt,
    }),
      (t[38] = gt),
      (t[39] = st));
  else st = t[39];
  $r("confirm:no", Je, st);
  let xt;
  if (t[40] !== ee || t[41] !== A || t[42] !== m || t[43] !== f)
    ((xt = () => {
      if (!A) return;
      let { options: ze } = ee(A.ruleBehavior),
        Mt = De(A),
        Qt = ze.filter($qf).map(Mqf),
        Er = Qt.indexOf(Mt),
        pt;
      if (Er !== -1) {
        if (Er < Qt.length - 1) pt = Qt[Er + 1];
        else if (Er > 0) pt = Qt[Er - 1];
      }
      (x(pt),
        Bjo({
          rule: A,
          initialContext: f,
          setToolPermissionContext(ln) {
            m((pn) => ({
              ...pn,
              toolPermissionContext: ln,
            }));
          },
        }),
        p((ln) => [...ln, `Deleted ${A.ruleBehavior} rule ${wt.bold(Pp(A.ruleValue))}`]),
        v(void 0));
    }),
      (t[40] = ee),
      (t[41] = A),
      (t[42] = m),
      (t[43] = f),
      (t[44] = xt));
  else xt = t[44];
  let vt = xt;
  if (A) {
    let ze;
    if (t[45] === Symbol.for("react.memo_cache_sentinel")) ((ze = () => v(void 0)), (t[45] = ze));
    else ze = t[45];
    let Mt;
    if (t[46] !== vt || t[47] !== A)
      ((Mt = mu.jsx(RuleDetails, {
        rule: A,
        onDelete: vt,
        onCancel: ze,
      })),
        (t[46] = vt),
        (t[47] = A),
        (t[48] = Mt));
    else Mt = t[48];
    return Mt;
  }
  if (I && I !== "workspace" && I !== "recent") {
    let ze;
    if (t[49] !== I)
      ((ze = mu.jsx(mzl, {
        onCancel: Ce,
        onSubmit: Ve,
        ruleBehavior: I,
      })),
        (t[49] = I),
        (t[50] = ze));
    else ze = t[50];
    return ze;
  }
  if (D) {
    let ze;
    if (t[51] !== D.ruleValue) ((ze = [D.ruleValue]), (t[51] = D.ruleValue), (t[52] = ze));
    else ze = t[52];
    let Mt;
    if (t[53] !== m)
      ((Mt = (Er) => {
        m((pt) => ({
          ...pt,
          toolPermissionContext: Er,
        }));
      }),
        (t[53] = m),
        (t[54] = Mt));
    else Mt = t[54];
    let Qt;
    if (t[55] !== Be || t[56] !== ze || t[57] !== Mt || t[58] !== f || t[59] !== D.ruleBehavior)
      ((Qt = mu.jsx(dzl, {
        onAddRules: Be,
        onCancel: Ue,
        ruleValues: ze,
        ruleBehavior: D.ruleBehavior,
        initialContext: f,
        setToolPermissionContext: Mt,
      })),
        (t[55] = Be),
        (t[56] = ze),
        (t[57] = Mt),
        (t[58] = f),
        (t[59] = D.ruleBehavior),
        (t[60] = Qt));
    else Qt = t[60];
    return Qt;
  }
  if (O) {
    let ze;
    if (t[61] !== m || t[62] !== f)
      ((ze = (Er, pt) => {
        let pn = {
            type: "addDirectories",
            directories: [Er],
            destination: pt ? "localSettings" : "session",
          },
          ir = My(f, pn);
        if (
          (m((Rr) => ({
            ...Rr,
            toolPermissionContext: ir,
          })),
          pt)
        )
          zue(pn);
        (p((Rr) => [
          ...Rr,
          `Added directory ${wt.bold(Er)} to workspace${pt ? " and saved to local settings" : " for this session"}`,
        ]),
          L(!1));
      }),
        (t[61] = m),
        (t[62] = f),
        (t[63] = ze));
    else ze = t[63];
    let Mt;
    if (t[64] === Symbol.for("react.memo_cache_sentinel")) ((Mt = () => L(!1)), (t[64] = Mt));
    else Mt = t[64];
    let Qt;
    if (t[65] !== ze || t[66] !== f)
      ((Qt = mu.jsx(BUt, {
        onAddDirectory: ze,
        onCancel: Mt,
        permissionContext: f,
      })),
        (t[65] = ze),
        (t[66] = f),
        (t[67] = Qt));
    else Qt = t[67];
    return Qt;
  }
  if (M) {
    let ze;
    if (t[68] !== M)
      ((ze = () => {
        (p((pt) => [...pt, `Removed directory ${wt.bold(M)} from workspace`]), N(null));
      }),
        (t[68] = M),
        (t[69] = ze));
    else ze = t[69];
    let Mt;
    if (t[70] === Symbol.for("react.memo_cache_sentinel")) ((Mt = () => N(null)), (t[70] = Mt));
    else Mt = t[70];
    let Qt;
    if (t[71] !== m)
      ((Qt = (pt) => {
        m((ln) => ({
          ...ln,
          toolPermissionContext: pt,
        }));
      }),
        (t[71] = m),
        (t[72] = Qt));
    else Qt = t[72];
    let Er;
    if (t[73] !== M || t[74] !== ze || t[75] !== Qt || t[76] !== f)
      ((Er = mu.jsx(Szl, {
        directoryPath: M,
        onRemove: ze,
        onCancel: Mt,
        permissionContext: f,
        setPermissionContext: Qt,
      })),
        (t[73] = M),
        (t[74] = ze),
        (t[75] = Qt),
        (t[76] = f),
        (t[77] = Er));
    else Er = t[77];
    return Er;
  }
  let jt;
  if (
    t[78] !== ee ||
    t[79] !== Je ||
    t[80] !== ue ||
    t[81] !== B ||
    t[82] !== g ||
    t[83] !== C ||
    t[84] !== ge ||
    t[85] !== me
  )
    ((jt = {
      searchQuery: me,
      isSearchMode: B,
      isFocused: g,
      onCancel: Je,
      lastFocusedRuleKey: C,
      cursorOffset: ge,
      getRulesOptions: ee,
      handleToolSelect: ue,
      onHeaderFocusChange: Y,
    }),
      (t[78] = ee),
      (t[79] = Je),
      (t[80] = ue),
      (t[81] = B),
      (t[82] = g),
      (t[83] = C),
      (t[84] = ge),
      (t[85] = me),
      (t[86] = jt));
  else jt = t[86];
  let en = jt,
    Dn = !!A || !!I || !!D || O || !!M,
    nn = !l,
    Ln = !B,
    Hn;
  if (t[87] === Symbol.for("react.memo_cache_sentinel"))
    ((Hn = mu.jsx(sm, {
      id: "recent",
      title: "Recently denied",
      children: mu.jsx(yzl, {
        onHeaderFocusChange: Y,
        onStateChange: S,
      }),
    })),
      (t[87] = Hn));
  else Hn = t[87];
  let kr;
  if (t[88] !== en)
    ((kr = mu.jsx(sm, {
      id: "allow",
      title: "Allow",
      children: mu.jsx(PermissionRulesTab, {
        tab: "allow",
        ...en,
      }),
    })),
      (t[88] = en),
      (t[89] = kr));
  else kr = t[89];
  let Mr;
  if (t[90] !== en)
    ((Mr = mu.jsx(sm, {
      id: "ask",
      title: "Ask",
      children: mu.jsx(PermissionRulesTab, {
        tab: "ask",
        ...en,
      }),
    })),
      (t[90] = en),
      (t[91] = Mr));
  else Mr = t[91];
  let fe;
  if (t[92] !== en)
    ((fe = mu.jsx(sm, {
      id: "deny",
      title: "Deny",
      children: mu.jsx(PermissionRulesTab, {
        tab: "deny",
        ...en,
      }),
    })),
      (t[92] = en),
      (t[93] = fe));
  else fe = t[93];
  let Te;
  if (t[94] === Symbol.for("react.memo_cache_sentinel"))
    ((Te = mu.jsx(w, {
      wrap: "wrap-trim",
      children:
        "Claude Code can read files in the workspace, and make edits when auto-accept edits is on.",
    })),
      (t[94] = Te));
  else Te = t[94];
  let Re;
  if (t[95] !== n || t[96] !== f)
    ((Re = mu.jsx(sm, {
      id: "workspace",
      title: "Workspace",
      children: mu.jsxs(U, {
        flexDirection: "column",
        children: [
          Te,
          mu.jsx(Tzl, {
            onExit: n,
            toolPermissionContext: f,
            onRequestAddDirectory: bt,
            onRequestRemoveDirectory: Et,
            onHeaderFocusChange: Y,
          }),
        ],
      }),
    })),
      (t[95] = n),
      (t[96] = f),
      (t[97] = Re));
  else Re = t[97];
  let Ne;
  if (
    t[98] !== c ||
    t[99] !== Dn ||
    t[100] !== nn ||
    t[101] !== Ln ||
    t[102] !== kr ||
    t[103] !== Mr ||
    t[104] !== fe ||
    t[105] !== Re
  )
    ((Ne = mu.jsxs(cR, {
      title: "Permissions",
      color: "permission",
      defaultTab: c,
      hidden: Dn,
      initialHeaderFocused: nn,
      navFromContent: Ln,
      children: [Hn, kr, Mr, fe, Re],
    })),
      (t[98] = c),
      (t[99] = Dn),
      (t[100] = nn),
      (t[101] = Ln),
      (t[102] = kr),
      (t[103] = Mr),
      (t[104] = fe),
      (t[105] = Re),
      (t[106] = Ne));
  else Ne = t[106];
  let it;
  if (t[107] !== c || t[108] !== l || t[109] !== q || t[110] !== B)
    ((it = mu.jsx(U, {
      marginTop: 1,
      children: mu.jsx(vb, {
        children: q
          ? mu.jsx(mu.Fragment, {
              children: "\u2190/\u2192 to switch \xB7 \u2193 to select \xB7 Esc to cancel",
            })
          : B
            ? mu.jsx(mu.Fragment, {
                children:
                  "Type to filter \xB7 Enter/\u2193 to select \xB7 \u2191 to tabs \xB7 Esc to clear",
              })
            : l && c === "recent"
              ? mu.jsx(mu.Fragment, {
                  children:
                    "Enter to approve \xB7 r to retry \xB7 \u2191/\u2193 to navigate \xB7 Esc to cancel",
                })
              : mu.jsx(mu.Fragment, {
                  children:
                    "\u2191/\u2193 to navigate \xB7 Enter to select \xB7 \u2190/\u2192 to switch \xB7 Esc to cancel",
                }),
      }),
    })),
      (t[107] = c),
      (t[108] = l),
      (t[109] = q),
      (t[110] = B),
      (t[111] = it));
  else it = t[111];
  let Tt;
  if (t[112] !== Ne || t[113] !== it)
    ((Tt = mu.jsxs(Fu, {
      color: "permission",
      children: [Ne, it],
    })),
      (t[112] = Ne),
      (t[113] = it),
      (t[114] = Tt));
  else Tt = t[114];
  let un;
  if (t[115] !== He || t[116] !== ie || t[117] !== Tt)
    ((un = mu.jsx(U, {
      flexDirection: "column",
      onKeyDown: He,
      onPaste: ie,
      children: Tt,
    })),
      (t[115] = He),
      (t[116] = ie),
      (t[117] = Tt),
      (t[118] = un));
  else un = t[118];
  return un;
}
function Mqf(e) {
  return e.value;
}
function $qf(e) {
  return e.value !== "add-new-rule";
}
function Oqf(e) {
  return wt.bold(e);
}
function Nqf(e) {
  return e.display;
}
function Bqf(e) {
  return e.display;
}
function Uqf(e) {
  return e !== void 0;
}
function Fqf(e) {
  return e.toolPermissionContext;
}
var FAt, A3, mu;
