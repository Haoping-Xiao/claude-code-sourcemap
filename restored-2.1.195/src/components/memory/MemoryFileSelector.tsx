// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uBl
// matched 2.1.88 source: src/components/memory/MemoryFileSelector.tsx
// class=modified  jaccard=0.394  score=0.692  fileCov=0.4778
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function MemoryFileSelector(e) {
  let t = dBl.c(68),
    { onSelect: n, onCancel: r } = e,
    o = hz.use(Wv()),
    s = JNo.join(tr(), "CLAUDE.md"),
    i = JNo.join(yr(), "CLAUDE.md"),
    a = o.some((Ie) => Ie.path === s),
    l = o.some((Ie) => Ie.path === i),
    c = [
      ...o.filter(SOf).map(bOf),
      ...(a
        ? []
        : [
            {
              path: s,
              type: "User",
              content: "",
              exists: false,
            },
          ]),
      ...(l
        ? []
        : [
            {
              path: i,
              type: "Project",
              content: "",
              exists: false,
            },
          ]),
    ],
    u = new Map(),
    d = c.map((Ie) => {
      let Ve = kd(Ie.path),
        Ze = Ie.exists ? "" : " (new)",
        Be = Ie.parent ? (u.get(Ie.parent) ?? 0) + 1 : 0;
      u.set(Ie.path, Be);
      let Me = Be > 0 ? Ff("  ", Be - 1) : "",
        Ue;
      if (Ie.type === "User" && !Ie.isNested && Ie.path === s) Ue = "User memory";
      else if (Ie.type === "Project" && !Ie.isNested && Ie.path === i) Ue = "Project memory";
      else if (Be > 0) Ue = `${Me}L ${Ve}${Ze}`;
      else Ue = `${Ve}`;
      let tt,
        bt = cBl(yr());
      if (Ie.type === "User" && !Ie.isNested) tt = "Saved in ~/.claude/CLAUDE.md";
      else if (Ie.type === "Project" && !Ie.isNested && Ie.path === i)
        tt = `${bt ? "Checked in at" : "Saved in"} ./CLAUDE.md`;
      else if (Ie.parent) tt = "@-imported";
      else if (Ie.isNested) tt = "dynamically loaded";
      else tt = "";
      return {
        label: Ue,
        value: Ie.path,
        description: tt,
      };
    }),
    p = [],
    f = Ht(_Of);
  if (lu() || Tl()) {
    let Ie;
    if (t[0] === Symbol.for("react.memo_cache_sentinel"))
      ((Ie = {
        label: "Open auto-memory folder",
        value: `${OPEN_FOLDER_PREFIX}${mm()}`,
        description: "",
      }),
        (t[0] = Ie));
    else Ie = t[0];
    if ((p.push(Ie), cL())) {
      let Ve;
      if (t[1] === Symbol.for("react.memo_cache_sentinel"))
        ((Ve = {
          label: "Open team memory folder",
          value: `${OPEN_FOLDER_PREFIX}${cT()}`,
          description: "",
        }),
          (t[1] = Ve));
      else Ve = t[1];
      p.push(Ve);
    }
    for (let Ve of f.activeAgents)
      if (Ve.memory) {
        let Ze = cit(Ve.agentType, Ve.memory);
        p.push({
          label: `Open ${wt.bold(Ve.agentType)} agent memory`,
          value: `${OPEN_FOLDER_PREFIX}${Ze}`,
          description: `${Ve.memory} scope`,
        });
      }
  }
  d.push(...p);
  let m;
  if (t[2] !== d) ((m = knr && d.some(yOf) ? knr : d[0]?.value || ""), (t[2] = d), (t[3] = m));
  else m = t[3];
  let g = m,
    [h, y] = hz.useState(lu),
    [b, _] = hz.useState(GKt),
    [S, A] = hz.useState(wkn),
    v,
    C;
  if (t[4] !== S)
    ((v = () =>
      H7(() => {
        let Ie = wkn();
        if (Ie !== S) (A(Ie), y(lu()));
      })),
      (C = [S]),
      (t[4] = S),
      (t[5] = v),
      (t[6] = C));
  else ((v = t[5]), (C = t[6]));
  hz.useEffect(v, C);
  let [x, I] = hz.useState(xQn),
    k,
    D;
  if (t[7] !== x)
    ((k = () => {
      if (x) return;
      return H7(() => {
        if (xQn()) (I(true), _(GKt()));
      });
    }),
      (D = [x]),
      (t[7] = x),
      (t[8] = k),
      (t[9] = D));
  else ((k = t[8]), (D = t[9]));
  hz.useEffect(k, D);
  let P = S && !h,
    O = h && x,
    L = Ht(gOf),
    [M, N] = hz.useState(null),
    B;
  if (t[10] !== O)
    ((B = () => {
      if (!O) return;
      N7n().then(N);
    }),
      (t[10] = O),
      (t[11] = B));
  else B = t[11];
  let $;
  if (t[12] !== L || t[13] !== O) (($ = [O, L]), (t[12] = L), (t[13] = O), (t[14] = $));
  else $ = t[14];
  hz.useEffect(B, $);
  let q;
  if (t[15] !== L || t[16] !== M)
    ((q = L ? "running" : M === null ? "" : M === 0 ? "never" : `last ran ${WK(new Date(M))}`),
      (t[15] = L),
      (t[16] = M),
      (t[17] = q));
  else q = t[17];
  let W = q,
    [V, Y] = hz.useState(null),
    z = V !== null,
    K = O ? 1 : 0,
    Z;
  if (t[18] !== h || t[19] !== S)
    ((Z = function () {
      if (Tl()) return;
      if (S) return;
      let Ve = !h;
      (io("userSettings", {
        autoMemoryEnabled: Ve,
      }),
        y(Ve),
        G("tengu_auto_memory_toggled", {
          enabled: Ve,
        }));
    }),
      (t[18] = h),
      (t[19] = S),
      (t[20] = Z));
  else Z = t[20];
  let J = Z,
    ne;
  if (t[21] !== b || t[22] !== O)
    ((ne = function () {
      if (!O) return;
      let Ve = !b,
        Ze = Ve && Dr().autoDreamEnabled === void 0;
      (io("userSettings", {
        autoDreamEnabled: Ve,
      }),
        _(Ve),
        G("tengu_auto_dream_toggled", {
          enabled: Ve,
          is_first_enable: Ze,
        }));
    }),
      (t[21] = b),
      (t[22] = O),
      (t[23] = ne));
  else ne = t[23];
  let oe = ne;
  ig();
  let re;
  if (t[24] === Symbol.for("react.memo_cache_sentinel"))
    ((re = {
      context: "Confirmation",
    }),
      (t[24] = re));
  else re = t[24];
  $r("confirm:no", r, re);
  let ee;
  if (t[25] !== V || t[26] !== oe || t[27] !== J)
    ((ee = () => {
      if (V === 0) J();
      else if (V === 1) oe();
    }),
      (t[25] = V),
      (t[26] = oe),
      (t[27] = J),
      (t[28] = ee));
  else ee = t[28];
  let ce;
  if (t[29] !== z)
    ((ce = {
      context: "Confirmation",
      isActive: z,
    }),
      (t[29] = z),
      (t[30] = ce));
  else ce = t[30];
  $r("confirm:yes", ee, ce);
  let ae;
  if (t[31] !== K)
    ((ae = () => {
      Y((Ie) => (Ie !== null && Ie < K ? Ie + 1 : null));
    }),
      (t[31] = K),
      (t[32] = ae));
  else ae = t[32];
  let de;
  if (t[33] !== z)
    ((de = {
      context: "Select",
      isActive: z,
    }),
      (t[33] = z),
      (t[34] = de));
  else de = t[34];
  $r("select:next", ae, de);
  let Ee;
  if (t[35] === Symbol.for("react.memo_cache_sentinel"))
    ((Ee = () => {
      Y(mOf);
    }),
      (t[35] = Ee));
  else Ee = t[35];
  let me;
  if (t[36] !== z)
    ((me = {
      context: "Select",
      isActive: z,
    }),
      (t[36] = z),
      (t[37] = me));
  else me = t[37];
  $r("select:previous", Ee, me);
  let pe = V === 0,
    ge;
  if (t[38] !== h || t[39] !== P)
    ((ge = P
      ? JQ.jsx(w, {
          dimColor: true,
          children: "unavailable for current model",
        })
      : Tl()
        ? JQ.jsxs(w, {
            dimColor: true,
            children: ["off in safe mode \u2014 ", qH(), " to re-enable"],
          })
        : h
          ? "on"
          : "off"),
      (t[38] = h),
      (t[39] = P),
      (t[40] = ge));
  else ge = t[40];
  let he;
  if (t[41] !== ge)
    ((he = JQ.jsxs(w, {
      children: ["Auto-memory:", " ", ge],
    })),
      (t[41] = ge),
      (t[42] = he));
  else he = t[42];
  let ie;
  if (t[43] !== pe || t[44] !== he)
    ((ie = JQ.jsx(mH, {
      isFocused: pe,
      children: he,
    })),
      (t[43] = pe),
      (t[44] = he),
      (t[45] = ie));
  else ie = t[45];
  let le;
  if (t[46] !== b || t[47] !== W || t[48] !== V || t[49] !== O)
    ((le =
      O &&
      JQ.jsx(mH, {
        isFocused: V === 1,
        styled: false,
        children: JQ.jsxs(w, {
          color: V === 1 ? "suggestion" : void 0,
          children: [
            "Auto-dream: ",
            b ? "on" : "off",
            W &&
              JQ.jsxs(w, {
                dimColor: true,
                children: [" \xB7 ", W],
              }),
          ],
        }),
      })),
      (t[46] = b),
      (t[47] = W),
      (t[48] = V),
      (t[49] = O),
      (t[50] = le));
  else le = t[50];
  let He;
  if (t[51] !== ie || t[52] !== le)
    ((He = JQ.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: [ie, le],
    })),
      (t[51] = ie),
      (t[52] = le),
      (t[53] = He));
  else He = t[53];
  let ye;
  if (t[54] !== n)
    ((ye = (Ie) => {
      if (Ie.startsWith(OPEN_FOLDER_PREFIX)) {
        let Ve = Ie.slice(OPEN_FOLDER_PREFIX.length);
        pBl
          .mkdir(Ve, {
            recursive: true,
          })
          .catch(fOf)
          .then(() => uIn(Ve))
          .catch(pOf);
        return;
      }
      ((knr = Ie), n(Ie));
    }),
      (t[54] = n),
      (t[55] = ye));
  else ye = t[55];
  let ue;
  if (t[56] !== K) ((ue = () => Y(K)), (t[56] = K), (t[57] = ue));
  else ue = t[57];
  let we;
  if (t[58] !== g || t[59] !== d || t[60] !== r || t[61] !== ye || t[62] !== ue || t[63] !== z)
    ((we = JQ.jsx(Sr, {
      defaultFocusValue: g,
      options: d,
      isDisabled: z,
      onChange: ye,
      onCancel: r,
      onUpFromFirstItem: ue,
    })),
      (t[58] = g),
      (t[59] = d),
      (t[60] = r),
      (t[61] = ye),
      (t[62] = ue),
      (t[63] = z),
      (t[64] = we));
  else we = t[64];
  let Ce;
  if (t[65] !== He || t[66] !== we)
    ((Ce = JQ.jsxs(U, {
      flexDirection: "column",
      width: "100%",
      children: [He, we],
    })),
      (t[65] = He),
      (t[66] = we),
      (t[67] = Ce));
  else Ce = t[67];
  return Ce;
}
function pOf() {}
function fOf() {}
function mOf(e) {
  return e !== null && e > 0 ? e - 1 : e;
}
function gOf(e) {
  return Object.values(e.tasks).some(hOf);
}
function hOf(e) {
  return e.type === "dream" && e.status === "running";
}
function yOf(e) {
  return e.value === knr;
}
function _Of(e) {
  return e.agentDefinitions;
}
function bOf(e) {
  return {
    ...e,
    exists: true,
  };
}
function SOf(e) {
  return e.type !== "AutoMem" && !KRe(e.path);
}
var dBl,
  pBl,
  JNo,
  hz,
  JQ,
  knr,
  OPEN_FOLDER_PREFIX = "__open_folder__";
