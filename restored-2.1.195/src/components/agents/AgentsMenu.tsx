// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module h7l
// matched 2.1.88 source: src/components/agents/AgentsMenu.tsx
// class=modified  jaccard=0.3061  score=0.4019  fileCov=0.5623
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var h7l = E(() => {
  si();
  Xa();
  Ye();
  uo();
  rme();
  es();
  sr();
  g0();
  B_();
  gm();
  kP();
  ((Vsr = R(lt(), 1)), (CJt = R(rt(), 1)), (NH = R(se(), 1)));
});
function y7l(e) {
  let t = p4o.c(215),
    { tools: n, onExit: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = tc.jsx(vb, {
      children: tc.jsxs(Tn, {
        children: [
          tc.jsx(ht, {
            chord: ["up", "down"],
            action: "navigate",
          }),
          tc.jsx(ht, {
            chord: "enter",
            action: "select",
          }),
          tc.jsx(ht, {
            chord: "escape",
            action: "go back",
          }),
        ],
      }),
    })),
      (t[0] = o));
  else o = t[0];
  let s = o,
    i;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((i = {
      mode: "list-agents",
      source: "all",
    }),
      (t[1] = i));
  else i = t[1];
  let [a, l] = QAt.useState(i),
    [c, u] = QAt.useState("running"),
    d = Ht(v9f),
    p = Ht(T9f),
    f = Ht(H9f),
    m = Ht(A9f),
    g = Ht(E9f),
    h = Ho(),
    { columns: y } = br(),
    { allAgents: b, activeAgents: _ } = d,
    S;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((S = []), (t[2] = S));
  else S = t[2];
  let [A, v] = QAt.useState(S),
    [C, x] = QAt.useState(""),
    [I, k] = QAt.useState(0),
    D,
    P;
  if (t[3] !== m) {
    ((D = new Map()), (P = 0));
    for (let me of Object.values(m)) {
      if (
        me.type !== "local_agent" ||
        me.agentType === "main-session" ||
        me.status === "completed" ||
        me.status === "failed" ||
        me.status === "killed"
      )
        continue;
      (D.set(me.agentType, (D.get(me.agentType) ?? 0) + 1), P++);
    }
    ((t[3] = m), (t[4] = D), (t[5] = P));
  } else ((D = t[4]), (P = t[5]));
  let O;
  if (t[6] !== D || t[7] !== P)
    ((O = {
      runningByType: D,
      runningCount: P,
    }),
      (t[6] = D),
      (t[7] = P),
      (t[8] = O));
  else O = t[8];
  let { runningByType: L, runningCount: M } = O,
    N = Msr(n, p, f),
    B;
  if (t[9] === Symbol.for("react.memo_cache_sentinel")) ((B = lc("agents")), (t[9] = B));
  else B = t[9];
  let $ = B,
    q;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((q = Tl()
      ? `Creating and editing agents is unavailable in safe mode \u2014 ${qH()} to make changes`
      : `Creating and editing agents is unavailable in bare mode \u2014 ${Ors()} to make changes`),
      (t[10] = q));
  else q = t[10];
  let W = q,
    V = ig(void 0, void 0, a.mode === "list-agents"),
    Y;
  if (t[11] !== b) ((Y = b.filter(S9f)), (t[11] = b), (t[12] = Y));
  else Y = t[12];
  let z;
  if (t[13] !== b) ((z = b.filter(b9f)), (t[13] = b), (t[14] = z));
  else z = t[14];
  let K;
  if (t[15] !== b) ((K = b.filter(_9f)), (t[15] = b), (t[16] = K));
  else K = t[16];
  let Z;
  if (t[17] !== b) ((Z = b.filter(y9f)), (t[17] = b), (t[18] = Z));
  else Z = t[18];
  let J;
  if (t[19] !== b) ((J = b.filter(h9f)), (t[19] = b), (t[20] = J));
  else J = t[20];
  let ne;
  if (t[21] !== b) ((ne = b.filter(g9f)), (t[21] = b), (t[22] = ne));
  else ne = t[22];
  let oe;
  if (t[23] !== b) ((oe = b.filter(m9f)), (t[23] = b), (t[24] = oe));
  else oe = t[24];
  let re;
  if (
    t[25] !== b ||
    t[26] !== Z ||
    t[27] !== J ||
    t[28] !== ne ||
    t[29] !== oe ||
    t[30] !== Y ||
    t[31] !== z ||
    t[32] !== K
  )
    ((re = {
      "built-in": Y,
      userSettings: z,
      projectSettings: K,
      policySettings: Z,
      localSettings: J,
      flagSettings: ne,
      plugin: oe,
      all: b,
    }),
      (t[25] = b),
      (t[26] = Z),
      (t[27] = J),
      (t[28] = ne),
      (t[29] = oe),
      (t[30] = Y),
      (t[31] = z),
      (t[32] = K),
      (t[33] = re));
  else re = t[33];
  let ee = re,
    ce;
  if (t[34] === Symbol.for("react.memo_cache_sentinel"))
    ((ce = (me) => {
      (v((pe) => [...pe, me]),
        l({
          mode: "list-agents",
          source: "all",
        }));
    }),
      (t[34] = ce));
  else ce = t[34];
  let ae = ce,
    de;
  if (t[35] !== h)
    ((de = async (me) => {
      try {
        (await dYl(me),
          h((pe) => {
            let ge = pe.agentDefinitions.allAgents.filter(
              (he) => !(he.agentType === me.agentType && he.source === me.source),
            );
            return {
              ...pe,
              agentDefinitions: {
                ...pe.agentDefinitions,
                allAgents: ge,
                activeAgents: YF(ge),
              },
            };
          }),
          v((pe) => [...pe, `Deleted agent: ${wt.bold(me.agentType)}`]),
          l({
            mode: "list-agents",
            source: "all",
          }));
      } catch (pe) {
        let ge = pe;
        T(`Failed to delete agent file for ${me.agentType}: ${Zr(ge).message}`, {
          level: "error",
        });
      }
    }),
      (t[35] = h),
      (t[36] = de));
  else de = t[36];
  let Ee = de;
  switch (a.mode) {
    case "list-agents": {
      let me;
      if (t[37] !== ee || t[38] !== a.source)
        ((me =
          a.source === "all"
            ? [
                ...ee["built-in"],
                ...ee.userSettings,
                ...ee.projectSettings,
                ...ee.localSettings,
                ...ee.policySettings,
                ...ee.flagSettings,
                ...ee.plugin,
              ]
            : ee[a.source]),
          (t[37] = ee),
          (t[38] = a.source),
          (t[39] = me));
      else me = t[39];
      let pe = me,
        ge;
      if (t[40] !== _ || t[41] !== pe) ((ge = tYl(pe, _)), (t[40] = _), (t[41] = pe), (t[42] = ge));
      else ge = t[42];
      let ie = ge,
        le;
      if (t[43] !== A || t[44] !== r)
        ((le = () => {
          let ct =
            A.length > 0
              ? `Agent changes:
${A.join(`
`)}`
              : void 0;
          r(ct ?? "Agents dialog dismissed", {
            display: A.length === 0 ? "system" : void 0,
          });
        }),
          (t[43] = A),
          (t[44] = r),
          (t[45] = le));
      else le = t[45];
      let He = le,
        ye = M > 0 ? `Running (${M})` : "Running",
        ue;
      if (t[46] !== r)
        ((ue = tc.jsx(g7l, {
          onExit: () =>
            r(void 0, {
              display: "skip",
            }),
        })),
          (t[46] = r),
          (t[47] = ue));
      else ue = t[47];
      let we;
      if (t[48] !== ye || t[49] !== ue)
        ((we = tc.jsx(sm, {
          title: ye,
          id: "running",
          children: ue,
        })),
          (t[48] = ye),
          (t[49] = ue),
          (t[50] = we));
      else we = t[50];
      let Ce;
      if (t[51] !== a)
        ((Ce = (ct) =>
          l({
            mode: "agent-menu",
            agent: ct,
            previousMode: a,
          })),
          (t[51] = a),
          (t[52] = Ce));
      else Ce = t[52];
      let Ie;
      if (t[53] === Symbol.for("react.memo_cache_sentinel"))
        ((Ie = $
          ? void 0
          : () =>
              l({
                mode: "create-agent",
              })),
          (t[53] = Ie));
      else Ie = t[53];
      let Ve;
      if (
        t[54] !== A ||
        t[55] !== a.source ||
        t[56] !== ie ||
        t[57] !== L ||
        t[58] !== Ce ||
        t[59] !== g
      )
        ((Ve = tc.jsx(vYl, {
          source: a.source,
          agents: ie,
          runningByType: L,
          usedThisSession: g,
          onSelect: Ce,
          onCreateNew: Ie,
          changes: A,
        })),
          (t[54] = A),
          (t[55] = a.source),
          (t[56] = ie),
          (t[57] = L),
          (t[58] = Ce),
          (t[59] = g),
          (t[60] = Ve));
      else Ve = t[60];
      let Ze;
      if (t[61] === Symbol.for("react.memo_cache_sentinel"))
        ((Ze =
          $ &&
          tc.jsx(U, {
            marginTop: 1,
            children: tc.jsx(w, {
              dimColor: true,
              children: W,
            }),
          })),
          (t[61] = Ze));
      else Ze = t[61];
      let Be;
      if (t[62] !== Ve)
        ((Be = tc.jsx(sm, {
          title: "Library",
          id: "definitions",
          children: tc.jsxs(U, {
            flexDirection: "column",
            children: [Ve, Ze],
          }),
        })),
          (t[62] = Ve),
          (t[63] = Be));
      else Be = t[63];
      let Me;
      if (t[64] !== c || t[65] !== we || t[66] !== Be)
        ((Me = tc.jsxs(cR, {
          title: "Agents",
          color: "permission",
          navFromContent: true,
          selectedTab: c,
          onTabChange: u,
          children: [we, Be],
        })),
          (t[64] = c),
          (t[65] = we),
          (t[66] = Be),
          (t[67] = Me));
      else Me = t[67];
      let Ue = V.pending
          ? `Press ${V.keyName} again to exit`
          : `${CG}/${Mfn} to switch \xB7 ${Wee}/${r9} to navigate \xB7 Enter to select \xB7 Esc to close`,
        tt;
      if (t[68] !== Ue)
        ((tt = tc.jsx(U, {
          marginTop: 1,
          children: tc.jsx(w, {
            dimColor: true,
            children: Ue,
          }),
        })),
          (t[68] = Ue),
          (t[69] = tt));
      else tt = t[69];
      let bt;
      if (t[70] !== Me || t[71] !== tt)
        ((bt = tc.jsxs(Fu, {
          color: "permission",
          children: [Me, tt],
        })),
          (t[70] = Me),
          (t[71] = tt),
          (t[72] = bt));
      else bt = t[72];
      let Ke;
      if (t[73] !== He)
        ((Ke = tc.jsx(w9f, {
          onCancel: He,
        })),
          (t[73] = He),
          (t[74] = Ke));
      else Ke = t[74];
      let Et;
      if (t[75] !== bt || t[76] !== Ke)
        ((Et = tc.jsxs(tc.Fragment, {
          children: [bt, Ke],
        })),
          (t[75] = bt),
          (t[76] = Ke),
          (t[77] = Et));
      else Et = t[77];
      return Et;
    }
    case "create-agent": {
      let me;
      if (t[78] === Symbol.for("react.memo_cache_sentinel"))
        ((me = () =>
          l({
            mode: "list-agents",
            source: "all",
          })),
          (t[78] = me));
      else me = t[78];
      let pe;
      if (t[79] !== _ || t[80] !== N)
        ((pe = tc.jsx(f7l, {
          tools: N,
          existingAgents: _,
          onComplete: ae,
          onCancel: me,
        })),
          (t[79] = _),
          (t[80] = N),
          (t[81] = pe));
      else pe = t[81];
      return pe;
    }
    case "agent-menu": {
      let me;
      if (t[82] !== b || t[83] !== a.agent.agentType || t[84] !== a.agent.source) {
        let st;
        if (t[86] !== a.agent.agentType || t[87] !== a.agent.source)
          ((st = (xt) => xt.agentType === a.agent.agentType && xt.source === a.agent.source),
            (t[86] = a.agent.agentType),
            (t[87] = a.agent.source),
            (t[88] = st));
        else st = t[88];
        ((me = b.find(st)),
          (t[82] = b),
          (t[83] = a.agent.agentType),
          (t[84] = a.agent.source),
          (t[85] = me));
      } else me = t[85];
      let ge = me || a.agent,
        he = ge.source !== "built-in" && ge.source !== "plugin" && ge.source !== "flagSettings",
        ie;
      if (t[89] !== ge.agentType || t[90] !== L)
        ((ie = L.get(ge.agentType) ?? 0), (t[89] = ge.agentType), (t[90] = L), (t[91] = ie));
      else ie = t[91];
      let le = ie,
        He;
      if (t[92] === Symbol.for("react.memo_cache_sentinel"))
        ((He = {
          label: "Run agent",
          value: "run",
        }),
          (t[92] = He));
      else He = t[92];
      let ye;
      if (t[93] !== le)
        ((ye =
          le > 0
            ? [
                {
                  label: "View running instance",
                  value: "view-running",
                },
              ]
            : []),
          (t[93] = le),
          (t[94] = ye));
      else ye = t[94];
      let ue;
      if (t[95] === Symbol.for("react.memo_cache_sentinel"))
        ((ue = {
          label: "View agent",
          value: "view",
        }),
          (t[95] = ue));
      else ue = t[95];
      let we, Ce;
      if (t[96] !== he)
        ((we =
          he && !$
            ? [
                {
                  label: "Edit agent",
                  value: "edit",
                },
              ]
            : []),
          (Ce = he
            ? [
                {
                  label: "Delete agent",
                  value: "delete",
                },
              ]
            : []),
          (t[96] = he),
          (t[97] = we),
          (t[98] = Ce));
      else ((we = t[97]), (Ce = t[98]));
      let Ie;
      if (t[99] === Symbol.for("react.memo_cache_sentinel"))
        ((Ie = {
          label: "Back",
          value: "back",
        }),
          (t[99] = Ie));
      else Ie = t[99];
      let Ve;
      if (t[100] !== ye || t[101] !== we || t[102] !== Ce)
        ((Ve = [He, ...ye, ue, ...we, ...Ce, Ie]),
          (t[100] = ye),
          (t[101] = we),
          (t[102] = Ce),
          (t[103] = Ve));
      else Ve = t[103];
      let Ze = Ve,
        Be;
      if (t[104] !== ge || t[105] !== a || t[106] !== r || t[107] !== h || t[108] !== m)
        ((Be = (st) => {
          e: switch (st) {
            case "run": {
              (x(""),
                k(0),
                l({
                  mode: "run-agent",
                  agent: ge,
                  previousMode: a,
                }));
              break e;
            }
            case "view-running": {
              let xt = Object.values(m).find(
                (vt) =>
                  vt.type === "local_agent" &&
                  vt.agentType === ge.agentType &&
                  vt.status !== "completed" &&
                  vt.status !== "failed" &&
                  vt.status !== "killed",
              );
              if (xt)
                (Hz(xt.id, h),
                  r(void 0, {
                    display: "skip",
                  }));
              break e;
            }
            case "view": {
              l({
                mode: "view-agent",
                agent: ge,
                previousMode: a.previousMode,
              });
              break e;
            }
            case "edit": {
              l({
                mode: "edit-agent",
                agent: ge,
                previousMode: a,
              });
              break e;
            }
            case "delete": {
              l({
                mode: "delete-confirm",
                agent: ge,
                previousMode: a,
              });
              break e;
            }
            case "back":
              l(a.previousMode);
          }
        }),
          (t[104] = ge),
          (t[105] = a),
          (t[106] = r),
          (t[107] = h),
          (t[108] = m),
          (t[109] = Be));
      else Be = t[109];
      let Me = Be,
        Ue;
      if (t[110] !== a.previousMode)
        ((Ue = () => l(a.previousMode)), (t[110] = a.previousMode), (t[111] = Ue));
      else Ue = t[111];
      let tt;
      if (t[112] !== a.previousMode)
        ((tt = () => l(a.previousMode)), (t[112] = a.previousMode), (t[113] = tt));
      else tt = t[113];
      let bt;
      if (t[114] !== Me || t[115] !== Ze || t[116] !== tt)
        ((bt = tc.jsx(Sr, {
          options: Ze,
          onChange: Me,
          onCancel: tt,
        })),
          (t[114] = Me),
          (t[115] = Ze),
          (t[116] = tt),
          (t[117] = bt));
      else bt = t[117];
      let Ke;
      if (t[118] !== A)
        ((Ke =
          A.length > 0 &&
          tc.jsx(U, {
            marginTop: 1,
            children: tc.jsx(w, {
              dimColor: true,
              children: A.at(-1),
            }),
          })),
          (t[118] = A),
          (t[119] = Ke));
      else Ke = t[119];
      let Et;
      if (t[120] !== bt || t[121] !== Ke)
        ((Et = tc.jsxs(U, {
          flexDirection: "column",
          children: [bt, Ke],
        })),
          (t[120] = bt),
          (t[121] = Ke),
          (t[122] = Et));
      else Et = t[122];
      let ct;
      if (t[123] !== a.agent.agentType || t[124] !== Ue || t[125] !== Et)
        ((ct = tc.jsx(zn, {
          title: a.agent.agentType,
          onCancel: Ue,
          hideInputGuide: true,
          children: Et,
        })),
          (t[123] = a.agent.agentType),
          (t[124] = Ue),
          (t[125] = Et),
          (t[126] = ct));
      else ct = t[126];
      let Je;
      if (t[127] === Symbol.for("react.memo_cache_sentinel"))
        ((Je = tc.jsx(U, {
          marginLeft: 2,
          marginTop: 1,
          children: s,
        })),
          (t[127] = Je));
      else Je = t[127];
      let gt;
      if (t[128] !== ct)
        ((gt = tc.jsxs(tc.Fragment, {
          children: [ct, Je],
        })),
          (t[128] = ct),
          (t[129] = gt));
      else gt = t[129];
      return gt;
    }
    case "view-agent": {
      let me;
      if (t[130] !== b || t[131] !== a.agent) {
        let we;
        if (t[133] !== a.agent)
          ((we = (Ce) => Ce.agentType === a.agent.agentType && Ce.source === a.agent.source),
            (t[133] = a.agent),
            (t[134] = we));
        else we = t[134];
        ((me = b.find(we)), (t[130] = b), (t[131] = a.agent), (t[132] = me));
      } else me = t[132];
      let ge = me || a.agent,
        he;
      if (t[135] !== ge || t[136] !== a.previousMode)
        ((he = () =>
          l({
            mode: "agent-menu",
            agent: ge,
            previousMode: a.previousMode,
          })),
          (t[135] = ge),
          (t[136] = a.previousMode),
          (t[137] = he));
      else he = t[137];
      let ie;
      if (t[138] !== ge || t[139] !== a.previousMode)
        ((ie = () =>
          l({
            mode: "agent-menu",
            agent: ge,
            previousMode: a.previousMode,
          })),
          (t[138] = ge),
          (t[139] = a.previousMode),
          (t[140] = ie));
      else ie = t[140];
      let le;
      if (t[141] !== ge || t[142] !== b || t[143] !== N || t[144] !== ie)
        ((le = tc.jsx(fYl, {
          agent: ge,
          tools: N,
          allAgents: b,
          onBack: ie,
        })),
          (t[141] = ge),
          (t[142] = b),
          (t[143] = N),
          (t[144] = ie),
          (t[145] = le));
      else le = t[145];
      let He;
      if (t[146] !== ge.agentType || t[147] !== he || t[148] !== le)
        ((He = tc.jsx(zn, {
          title: ge.agentType,
          onCancel: he,
          hideInputGuide: true,
          children: le,
        })),
          (t[146] = ge.agentType),
          (t[147] = he),
          (t[148] = le),
          (t[149] = He));
      else He = t[149];
      let ye;
      if (t[150] === Symbol.for("react.memo_cache_sentinel"))
        ((ye = tc.jsx(U, {
          marginLeft: 2,
          marginTop: 1,
          children: tc.jsx(vb, {
            children: tc.jsx(Tn, {
              children: tc.jsx(ht, {
                chord: ["enter", "escape"],
                action: "go back",
              }),
            }),
          }),
        })),
          (t[150] = ye));
      else ye = t[150];
      let ue;
      if (t[151] !== He)
        ((ue = tc.jsxs(tc.Fragment, {
          children: [He, ye],
        })),
          (t[151] = He),
          (t[152] = ue));
      else ue = t[152];
      return ue;
    }
    case "delete-confirm": {
      let me;
      if (t[153] !== a)
        ((me = () => {
          if ("previousMode" in a) l(a.previousMode);
        }),
          (t[153] = a),
          (t[154] = me));
      else me = t[154];
      let pe = me,
        ge;
      if (t[155] !== a.agent.agentType)
        ((ge = tc.jsxs(w, {
          children: [
            "Are you sure you want to delete the agent",
            " ",
            tc.jsx(w, {
              bold: true,
              children: a.agent.agentType,
            }),
            "?",
          ],
        })),
          (t[155] = a.agent.agentType),
          (t[156] = ge));
      else ge = t[156];
      let he;
      if (t[157] !== a.agent.source)
        ((he = tc.jsx(U, {
          marginTop: 1,
          children: tc.jsxs(w, {
            dimColor: true,
            children: ["Source: ", a.agent.source],
          }),
        })),
          (t[157] = a.agent.source),
          (t[158] = he));
      else he = t[158];
      let ie;
      if (t[159] !== Ee || t[160] !== a.agent)
        ((ie = () => void Ee(a.agent)), (t[159] = Ee), (t[160] = a.agent), (t[161] = ie));
      else ie = t[161];
      let le;
      if (t[162] !== pe || t[163] !== ie)
        ((le = tc.jsx(U, {
          marginTop: 1,
          children: tc.jsx(Kl, {
            confirmLabel: "Yes, delete",
            cancelLabel: "No, cancel",
            onConfirm: ie,
            onCancel: pe,
          }),
        })),
          (t[162] = pe),
          (t[163] = ie),
          (t[164] = le));
      else le = t[164];
      let He;
      if (t[165] !== pe || t[166] !== ge || t[167] !== he || t[168] !== le)
        ((He = tc.jsxs(zn, {
          title: "Delete agent",
          onCancel: pe,
          color: "error",
          children: [ge, he, le],
        })),
          (t[165] = pe),
          (t[166] = ge),
          (t[167] = he),
          (t[168] = le),
          (t[169] = He));
      else He = t[169];
      let ye;
      if (t[170] === Symbol.for("react.memo_cache_sentinel"))
        ((ye = tc.jsx(U, {
          marginLeft: 2,
          marginTop: 1,
          children: tc.jsx(vb, {
            children: tc.jsxs(Tn, {
              children: [
                tc.jsx(ht, {
                  chord: ["up", "down"],
                  action: "navigate",
                }),
                tc.jsx(ht, {
                  chord: "enter",
                  action: "select",
                }),
                tc.jsx(ht, {
                  chord: "escape",
                  action: "cancel",
                }),
              ],
            }),
          }),
        })),
          (t[170] = ye));
      else ye = t[170];
      let ue;
      if (t[171] !== He)
        ((ue = tc.jsxs(tc.Fragment, {
          children: [He, ye],
        })),
          (t[171] = He),
          (t[172] = ue));
      else ue = t[172];
      return ue;
    }
    case "run-agent": {
      let me = a.agent,
        pe = `Run ${me.agentType}`,
        ge;
      if (t[173] !== a.previousMode)
        ((ge = () => l(a.previousMode)), (t[173] = a.previousMode), (t[174] = ge));
      else ge = t[174];
      let he;
      if (t[175] !== me.agentType || t[176] !== r)
        ((he = (we) => {
          let Ce = we.trim();
          if (!Ce) return;
          r(void 0, {
            display: "skip",
            nextInput: `@agent-${me.agentType} ${Ce}`,
            submitNextInput: true,
          });
        }),
          (t[175] = me.agentType),
          (t[176] = r),
          (t[177] = he));
      else he = t[177];
      let ie;
      if (t[178] !== a.previousMode)
        ((ie = () => l(a.previousMode)), (t[178] = a.previousMode), (t[179] = ie));
      else ie = t[179];
      let le;
      if (t[180] !== y || t[181] !== I || t[182] !== C || t[183] !== he || t[184] !== ie)
        ((le = tc.jsx(U, {
          marginTop: 1,
          children: tc.jsx(Ta, {
            value: C,
            onChange: x,
            onSubmit: he,
            onExit: ie,
            focus: true,
            showCursor: true,
            columns: y,
            cursorOffset: I,
            onChangeCursorOffset: k,
            placeholder: "Describe the task\u2026",
          }),
        })),
          (t[180] = y),
          (t[181] = I),
          (t[182] = C),
          (t[183] = he),
          (t[184] = ie),
          (t[185] = le));
      else le = t[185];
      let He;
      if (t[186] !== pe || t[187] !== ge || t[188] !== le)
        ((He = tc.jsx(zn, {
          title: pe,
          subtitle: "Enter a prompt for this subagent",
          onCancel: ge,
          isCancelActive: false,
          hideInputGuide: true,
          children: le,
        })),
          (t[186] = pe),
          (t[187] = ge),
          (t[188] = le),
          (t[189] = He));
      else He = t[189];
      let ye;
      if (t[190] === Symbol.for("react.memo_cache_sentinel"))
        ((ye = tc.jsx(U, {
          marginLeft: 2,
          marginTop: 1,
          children: tc.jsx(vb, {
            children: "Enter to run \xB7 Esc to go back",
          }),
        })),
          (t[190] = ye));
      else ye = t[190];
      let ue;
      if (t[191] !== He)
        ((ue = tc.jsxs(tc.Fragment, {
          children: [He, ye],
        })),
          (t[191] = He),
          (t[192] = ue));
      else ue = t[192];
      return ue;
    }
    case "edit-agent": {
      let me;
      if (t[193] !== b || t[194] !== a.agent) {
        let Ie;
        if (t[196] !== a.agent)
          ((Ie = (Ve) => Ve.agentType === a.agent.agentType && Ve.source === a.agent.source),
            (t[196] = a.agent),
            (t[197] = Ie));
        else Ie = t[197];
        ((me = b.find(Ie)), (t[193] = b), (t[194] = a.agent), (t[195] = me));
      } else me = t[195];
      let ge = me || a.agent,
        he = `Edit agent: ${ge.agentType}`,
        ie;
      if (t[198] !== a.previousMode)
        ((ie = () => l(a.previousMode)), (t[198] = a.previousMode), (t[199] = ie));
      else ie = t[199];
      let le, He;
      if (t[200] !== a.previousMode)
        ((le = (Ie) => {
          (ae(Ie), l(a.previousMode));
        }),
          (He = () => l(a.previousMode)),
          (t[200] = a.previousMode),
          (t[201] = le),
          (t[202] = He));
      else ((le = t[201]), (He = t[202]));
      let ye;
      if (t[203] !== ge || t[204] !== N || t[205] !== le || t[206] !== He)
        ((ye = tc.jsx(EYl, {
          agent: ge,
          tools: N,
          onSaved: le,
          onBack: He,
        })),
          (t[203] = ge),
          (t[204] = N),
          (t[205] = le),
          (t[206] = He),
          (t[207] = ye));
      else ye = t[207];
      let ue;
      if (t[208] !== he || t[209] !== ie || t[210] !== ye)
        ((ue = tc.jsx(zn, {
          title: he,
          onCancel: ie,
          hideInputGuide: true,
          children: ye,
        })),
          (t[208] = he),
          (t[209] = ie),
          (t[210] = ye),
          (t[211] = ue));
      else ue = t[211];
      let we;
      if (t[212] === Symbol.for("react.memo_cache_sentinel"))
        ((we = tc.jsx(U, {
          marginLeft: 2,
          marginTop: 1,
          children: s,
        })),
          (t[212] = we));
      else we = t[212];
      let Ce;
      if (t[213] !== ue)
        ((Ce = tc.jsxs(tc.Fragment, {
          children: [ue, we],
        })),
          (t[213] = ue),
          (t[214] = Ce));
      else Ce = t[214];
      return Ce;
    }
    default:
      return null;
  }
}
function m9f(e) {
  return e.source === "plugin";
}
function g9f(e) {
  return e.source === "flagSettings";
}
function h9f(e) {
  return e.source === "localSettings";
}
function y9f(e) {
  return e.source === "policySettings";
}
function _9f(e) {
  return e.source === "projectSettings";
}
function b9f(e) {
  return e.source === "userSettings";
}
function S9f(e) {
  return e.source === "built-in";
}
function E9f(e) {
  return e.agentTypesInvokedThisSession;
}
function A9f(e) {
  return e.tasks;
}
function H9f(e) {
  return e.toolPermissionContext;
}
function T9f(e) {
  return e.mcp.tools;
}
function v9f(e) {
  return e.agentDefinitions;
}
function w9f(e) {
  let t = p4o.c(1),
    { onCancel: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((r = {
      context: "Confirmation",
    }),
      (t[0] = r));
  else r = t[0];
  return ($r("confirm:no", n, r), null);
}
var p4o, QAt, tc;
