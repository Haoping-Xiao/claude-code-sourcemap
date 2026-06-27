// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FCo
// matched 2.1.88 source: src/components/messages/AssistantToolUseMessage.tsx
// class=modified  jaccard=0.3417  score=0.4592  fileCov=0.5719
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module FCo] deps: Xa, Ye
((eil = R(lt(), 1)), (FMe = R(se(), 1)));
function AssistantToolUseMessage(t0) {
  let t = nil.c(180),
    {
      param: n,
      addMargin: r,
      tools: o,
      commands: s,
      verbose: i,
      inProgressToolUseIDs: a,
      progressMessagesForMessage: l,
      shouldAnimate: c,
      shouldShowDot: u,
      inProgressToolCallCount: d,
      lookups: p,
      isTranscriptMode: f,
    } = t0,
    m = br(),
    [g] = na(),
    h = dT(Tof),
    y = Xsl(n.id),
    b = dT(Hof),
    _ = dT(Aof),
    S = b === "auto" || (b === "plan" && _),
    A = false,
    v;
  if (t[0] !== n.input || t[1] !== n.name || t[2] !== o) {
    e: {
      if (!o) {
        let ie;
        if (t[4] === Symbol.for("react.memo_cache_sentinel"))
          ((ie = {
            notFound: "no-tools",
          }),
            (t[4] = ie));
        else ie = t[4];
        v = ie;
        break e;
      }
      let pe = _l(o, n.name);
      if (!pe) {
        let le =
            n.name.startsWith("mcp__") ||
            n.name.startsWith("skill__") ||
            n.name.startsWith("eval_registered__") ||
            n.name === Ip ||
            n.name === "WebBrowser" ||
            O2t.has(n.name) ||
            Fpt().has(n.name) ||
            _l(tit() ?? [], n.name) !== void 0
              ? "expected-absent"
              : "unknown",
          He;
        if (t[5] !== le)
          ((He = {
            notFound: le,
          }),
            (t[5] = le),
            (t[6] = He));
        else He = t[6];
        v = He;
        break e;
      }
      let ge = pe.inputSchema.safeParse(n.input),
        he = ge.success ? ge.data : void 0;
      v = {
        tool: pe,
        input: ge,
        userFacingToolName: pe.userFacingName(he),
        userFacingToolNameBackgroundColor: pe.userFacingNameBackgroundColor?.(he),
        isTransparentWrapper: pe.isTransparentWrapper?.() ?? false,
      };
    }
    ((t[0] = n.input), (t[1] = n.name), (t[2] = o), (t[3] = v));
  } else v = t[3];
  let C = v,
    x = "notFound" in C ? C.notFound : null,
    I,
    k;
  if (t[7] !== x || t[8] !== n.name)
    ((I = () => {
      if (x === "no-tools")
        ke(
          Rh(
            Error(`Tools array is undefined for tool ${n.name}`),
            `Tools array is undefined (mcp=${n.name.startsWith("mcp__")})`,
          ),
        );
      else if (x === "expected-absent")
        T(`Tool ${n.name} not found in render-time tools`, {
          level: "error",
        });
      else if (x === "unknown") ke(Rh(Error(`Tool ${n.name} not found`), "Tool not found"));
    }),
      (k = [n.name, x]),
      (t[7] = x),
      (t[8] = n.name),
      (t[9] = I),
      (t[10] = k));
  else ((I = t[9]), (k = t[10]));
  ril.useEffect(I, k);
  let D = n.name === Ip,
    P,
    O,
    L,
    M,
    N,
    B,
    $,
    q,
    W,
    V,
    Y,
    z,
    K,
    Z,
    J,
    ne,
    oe,
    re,
    ee,
    ce;
  if (
    t[11] !== r ||
    t[12] !== s ||
    t[13] !== d ||
    t[14] !== a ||
    t[15] !== f ||
    t[16] !== p ||
    t[17] !== n ||
    t[18] !== C ||
    t[19] !== h?.toolUseId ||
    t[20] !== l ||
    t[21] !== c ||
    t[22] !== u ||
    t[23] !== D ||
    t[24] !== m ||
    t[25] !== g ||
    t[26] !== o ||
    t[27] !== i
  ) {
    Z = Symbol.for("react.early_return_sentinel");
    e: {
      if (D) {
        let ge = n.input?.text;
        if (typeof ge === "string" && ge.length > 0) {
          Z = sR.jsx($zn, {
            content: ge,
            addMargin: r,
          });
          break e;
        }
      }
      let pe = "notFound" in C;
      if (
        t[48] !== r ||
        t[49] !== s ||
        t[50] !== d ||
        t[51] !== a ||
        t[52] !== f ||
        t[53] !== p ||
        t[54] !== n ||
        t[55] !== C ||
        t[56] !== h?.toolUseId ||
        t[57] !== l ||
        t[58] !== c ||
        t[59] !== u ||
        t[60] !== pe ||
        t[61] !== m ||
        t[62] !== g ||
        t[63] !== o ||
        t[64] !== i
      ) {
        if (pe) {
          Z = null;
          break e;
        }
        let {
          tool: ge,
          input: he,
          userFacingToolName: ie,
          userFacingToolNameBackgroundColor: le,
          isTransparentWrapper: He,
        } = C;
        if (
          ((ce = ge),
          t[84] !== r ||
            t[85] !== s ||
            t[86] !== d ||
            t[87] !== a ||
            t[88] !== he ||
            t[89] !== f ||
            t[90] !== He ||
            t[91] !== p ||
            t[92] !== n ||
            t[93] !== h?.toolUseId ||
            t[94] !== l ||
            t[95] !== c ||
            t[96] !== u ||
            t[97] !== m ||
            t[98] !== g ||
            t[99] !== ce ||
            t[100] !== o ||
            t[101] !== ie ||
            t[102] !== le ||
            t[103] !== i)
        ) {
          ((N = p.resolvedToolUseIDs.has(n.id)),
            (M = !a.has(n.id) && !N),
            (B = h?.toolUseId === n.id));
          let ye = p.toolResultByToolUseID.get(n.id),
            ue = ye?.type === "user" ? ye.toolUseResult : void 0;
          if (He) {
            let Ie = BCo({
              param: n,
              isQueued: M,
              isResolved: N,
              isError: p.erroredToolUseIDs.has(n.id),
              shouldAnimate: c,
              shouldShowDot: u,
              addMargin: r,
              progressMessagesForMessage: l,
              resultMsg: ye,
            });
            if (Ie !== null) {
              Z = Ie;
              break e;
            }
            if (N) {
              Z = null;
              break e;
            }
            let Ve;
            if (
              t[122] !== d ||
              t[123] !== f ||
              t[124] !== p ||
              t[125] !== n.id ||
              t[126] !== l ||
              t[127] !== m ||
              t[128] !== ce ||
              t[129] !== o ||
              t[130] !== i
            )
              ((Ve = renderToolUseProgressMessage(
                ce,
                o,
                p,
                n.id,
                l,
                {
                  verbose: i,
                  inProgressToolCallCount: d,
                  isTranscriptMode: f,
                },
                m,
              )),
                (t[122] = d),
                (t[123] = f),
                (t[124] = p),
                (t[125] = n.id),
                (t[126] = l),
                (t[127] = m),
                (t[128] = ce),
                (t[129] = o),
                (t[130] = i),
                (t[131] = Ve));
            else Ve = t[131];
            Z = sR.jsx(U, {
              flexDirection: "column",
              width: "100%",
              children: Ve,
            });
            break e;
          }
          if (ie === "") {
            Z = null;
            break e;
          }
          let we;
          if (
            t[132] !== s ||
            t[133] !== he.data ||
            t[134] !== he.success ||
            t[135] !== g ||
            t[136] !== ce ||
            t[137] !== i
          )
            ((we = he.success
              ? renderToolUseMessage(ce, he.data, {
                  theme: g,
                  verbose: i,
                  commands: s,
                })
              : null),
              (t[132] = s),
              (t[133] = he.data),
              (t[134] = he.success),
              (t[135] = g),
              (t[136] = ce),
              (t[137] = i),
              (t[138] = we));
          else we = t[138];
          let Ce = we;
          if (Ce === null) {
            Z = null;
            break e;
          }
          if (
            ((L = U),
            (V = "row"),
            (Y = "space-between"),
            (z = r ? 1 : 0),
            (K = "100%"),
            (O = U),
            (W = "column"),
            (P = U),
            (J = "row"),
            (ne = "nowrap"),
            (oe = rn(ie) + (u ? 2 : 0)),
            (re =
              u &&
              (M
                ? sR.jsx(U, {
                    minWidth: 2,
                    children: sR.jsx(w, {
                      "aria-label": "tool:",
                      dimColor: M,
                      children: gc,
                    }),
                  })
                : sR.jsx(koe, {
                    shouldAnimate: c,
                    isUnresolved: !N,
                    isError: p.erroredToolUseIDs.has(n.id),
                  }))),
            t[139] !== ie || t[140] !== le)
          )
            ((ee = sR.jsx(U, {
              flexShrink: 0,
              children: sR.jsx(pE, {
                color: le,
                bold: true,
                wrap: "truncate-end",
                children: ie,
              }),
            })),
              (t[139] = ie),
              (t[140] = le),
              (t[141] = ee));
          else ee = t[141];
          if (t[142] !== Ce)
            (($ =
              Ce !== "" &&
              sR.jsx(U, {
                flexWrap: "nowrap",
                children: sR.jsxs(w, {
                  children: ["(", Ce, ")"],
                }),
              })),
              (t[142] = Ce),
              (t[143] = $));
          else $ = t[143];
          ((q =
            he.success &&
            ce.renderToolUseTag &&
            ce.renderToolUseTag(he.data, {
              toolUseId: n.id,
              toolUseResult: ue,
              progressMessages: p.progressMessagesByToolUseID.get(n.id),
            })),
            (t[84] = r),
            (t[85] = s),
            (t[86] = d),
            (t[87] = a),
            (t[88] = he),
            (t[89] = f),
            (t[90] = He),
            (t[91] = p),
            (t[92] = n),
            (t[93] = h?.toolUseId),
            (t[94] = l),
            (t[95] = c),
            (t[96] = u),
            (t[97] = m),
            (t[98] = g),
            (t[99] = ce),
            (t[100] = o),
            (t[101] = ie),
            (t[102] = le),
            (t[103] = i),
            (t[104] = P),
            (t[105] = O),
            (t[106] = L),
            (t[107] = M),
            (t[108] = N),
            (t[109] = B),
            (t[110] = $),
            (t[111] = q),
            (t[112] = W),
            (t[113] = V),
            (t[114] = Y),
            (t[115] = z),
            (t[116] = K),
            (t[117] = J),
            (t[118] = ne),
            (t[119] = oe),
            (t[120] = re),
            (t[121] = ee));
        } else
          ((P = t[104]),
            (O = t[105]),
            (L = t[106]),
            (M = t[107]),
            (N = t[108]),
            (B = t[109]),
            ($ = t[110]),
            (q = t[111]),
            (W = t[112]),
            (V = t[113]),
            (Y = t[114]),
            (z = t[115]),
            (K = t[116]),
            (J = t[117]),
            (ne = t[118]),
            (oe = t[119]),
            (re = t[120]),
            (ee = t[121]));
        ((t[48] = r),
          (t[49] = s),
          (t[50] = d),
          (t[51] = a),
          (t[52] = f),
          (t[53] = p),
          (t[54] = n),
          (t[55] = C),
          (t[56] = h?.toolUseId),
          (t[57] = l),
          (t[58] = c),
          (t[59] = u),
          (t[60] = pe),
          (t[61] = m),
          (t[62] = g),
          (t[63] = o),
          (t[64] = i),
          (t[65] = P),
          (t[66] = O),
          (t[67] = L),
          (t[68] = M),
          (t[69] = N),
          (t[70] = B),
          (t[71] = $),
          (t[72] = q),
          (t[73] = W),
          (t[74] = V),
          (t[75] = Y),
          (t[76] = z),
          (t[77] = K),
          (t[78] = J),
          (t[79] = ne),
          (t[80] = oe),
          (t[81] = re),
          (t[82] = ee),
          (t[83] = ce));
      } else
        ((P = t[65]),
          (O = t[66]),
          (L = t[67]),
          (M = t[68]),
          (N = t[69]),
          (B = t[70]),
          ($ = t[71]),
          (q = t[72]),
          (W = t[73]),
          (V = t[74]),
          (Y = t[75]),
          (z = t[76]),
          (K = t[77]),
          (J = t[78]),
          (ne = t[79]),
          (oe = t[80]),
          (re = t[81]),
          (ee = t[82]),
          (ce = t[83]));
    }
    ((t[11] = r),
      (t[12] = s),
      (t[13] = d),
      (t[14] = a),
      (t[15] = f),
      (t[16] = p),
      (t[17] = n),
      (t[18] = C),
      (t[19] = h?.toolUseId),
      (t[20] = l),
      (t[21] = c),
      (t[22] = u),
      (t[23] = D),
      (t[24] = m),
      (t[25] = g),
      (t[26] = o),
      (t[27] = i),
      (t[28] = P),
      (t[29] = O),
      (t[30] = L),
      (t[31] = M),
      (t[32] = N),
      (t[33] = B),
      (t[34] = $),
      (t[35] = q),
      (t[36] = W),
      (t[37] = V),
      (t[38] = Y),
      (t[39] = z),
      (t[40] = K),
      (t[41] = Z),
      (t[42] = J),
      (t[43] = ne),
      (t[44] = oe),
      (t[45] = re),
      (t[46] = ee),
      (t[47] = ce));
  } else
    ((P = t[28]),
      (O = t[29]),
      (L = t[30]),
      (M = t[31]),
      (N = t[32]),
      (B = t[33]),
      ($ = t[34]),
      (q = t[35]),
      (W = t[36]),
      (V = t[37]),
      (Y = t[38]),
      (z = t[39]),
      (K = t[40]),
      (Z = t[41]),
      (J = t[42]),
      (ne = t[43]),
      (oe = t[44]),
      (re = t[45]),
      (ee = t[46]),
      (ce = t[47]));
  if (Z !== Symbol.for("react.early_return_sentinel")) return Z;
  let ae;
  if (
    t[144] !== P ||
    t[145] !== $ ||
    t[146] !== q ||
    t[147] !== J ||
    t[148] !== ne ||
    t[149] !== oe ||
    t[150] !== re ||
    t[151] !== ee
  )
    ((ae = sR.jsxs(P, {
      flexDirection: J,
      flexWrap: ne,
      minWidth: oe,
      children: [re, ee, $, q],
    })),
      (t[144] = P),
      (t[145] = $),
      (t[146] = q),
      (t[147] = J),
      (t[148] = ne),
      (t[149] = oe),
      (t[150] = re),
      (t[151] = ee),
      (t[152] = ae));
  else ae = t[152];
  let de;
  if (
    t[153] !== d ||
    t[154] !== S ||
    t[155] !== false ||
    t[156] !== M ||
    t[157] !== N ||
    t[158] !== f ||
    t[159] !== B ||
    t[160] !== p ||
    t[161] !== n.id ||
    t[162] !== l ||
    t[163] !== m ||
    t[164] !== ce ||
    t[165] !== o ||
    t[166] !== i
  )
    ((de =
      !N &&
      (B
        ? sR.jsx(qn, {
            height: 1,
            children: sR.jsx(w, {
              dimColor: true,
              children: "Waiting for permission\u2026",
            }),
          })
        : M
          ? renderToolUseQueuedMessage(ce)
          : renderToolUseProgressMessage(
              ce,
              o,
              p,
              n.id,
              l,
              {
                verbose: i,
                inProgressToolCallCount: d,
                isTranscriptMode: f,
              },
              m,
            ))),
      (t[153] = d),
      (t[154] = S),
      (t[155] = false),
      (t[156] = M),
      (t[157] = N),
      (t[158] = f),
      (t[159] = B),
      (t[160] = p),
      (t[161] = n.id),
      (t[162] = l),
      (t[163] = m),
      (t[164] = ce),
      (t[165] = o),
      (t[166] = i),
      (t[167] = de));
  else de = t[167];
  let Ee;
  if (t[168] !== O || t[169] !== W || t[170] !== ae || t[171] !== de)
    ((Ee = sR.jsxs(O, {
      flexDirection: W,
      children: [ae, de],
    })),
      (t[168] = O),
      (t[169] = W),
      (t[170] = ae),
      (t[171] = de),
      (t[172] = Ee));
  else Ee = t[172];
  let me;
  if (t[173] !== L || t[174] !== V || t[175] !== Y || t[176] !== z || t[177] !== K || t[178] !== Ee)
    ((me = sR.jsx(L, {
      flexDirection: V,
      justifyContent: Y,
      marginTop: z,
      width: K,
      children: Ee,
    })),
      (t[173] = L),
      (t[174] = V),
      (t[175] = Y),
      (t[176] = z),
      (t[177] = K),
      (t[178] = Ee),
      (t[179] = me));
  else me = t[179];
  return me;
}
function Aof(e) {
  return !!e.toolPermissionContext.strippedDangerousRules;
}
function Hof(e) {
  return e.toolPermissionContext.mode;
}
function Tof(e) {
  return e.pendingWorkerRequest;
}
function renderToolUseMessage(tool, input, { theme: n, verbose: r, commands: o }) {
  let s = Pae(input);
  if (s !== null) return s;
  try {
    return tool.renderToolUseMessage(input, {
      theme: n,
      verbose: r,
      commands: o,
    });
  } catch (i) {
    return (
      ke(
        Rh(
          Error(`Error rendering tool use message for ${tool.name}: ${i}`),
          `Error rendering tool use message (mcp=${tool.name.startsWith("mcp__")})`,
        ),
      ),
      ""
    );
  }
}
function renderToolUseProgressMessage(
  tool,
  tools,
  lookups,
  toolUseID,
  progressMessagesForMessage,
  { verbose: s, inProgressToolCallCount: i, isTranscriptMode: a },
  terminalSize,
) {
  let c = progressMessagesForMessage.filter((u) => u.data.type !== "hook_progress");
  try {
    let u =
      tool.renderToolUseProgressMessage?.(c, {
        tools: tools,
        verbose: s,
        terminalSize: terminalSize,
        inProgressToolCallCount: i ?? 1,
        isTranscriptMode: a,
      }) ?? null;
    return sR.jsxs(sR.Fragment, {
      children: [
        sR.jsx(s6e, {
          children: sR.jsx(Mzn, {
            hookEvent: "PreToolUse",
            lookups: lookups,
            toolUseID: toolUseID,
            verbose: s,
            isTranscriptMode: a,
          }),
        }),
        u,
      ],
    });
  } catch (u) {
    return (
      ke(
        Rh(
          Error(`Error rendering tool use progress message for ${tool.name}: ${u}`),
          `Error rendering tool use progress message (mcp=${tool.name.startsWith("mcp__")})`,
        ),
      ),
      null
    );
  }
}
function renderToolUseQueuedMessage(tool) {
  try {
    return tool.renderToolUseQueuedMessage?.();
  } catch (t) {
    return (
      ke(
        Rh(
          Error(`Error rendering tool use queued message for ${tool.name}: ${t}`),
          `Error rendering tool use queued message (mcp=${tool.name.startsWith("mcp__")})`,
        ),
      ),
      null
    );
  }
}
var nil, ril, sR;
