// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zCo
// matched 2.1.88 source: src/utils/messages.ts
// class=modified (alt of src/utils/messages.ts)  jaccard=0.0036  score=0.0858  fileCov=0.0037
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zCo] deps: Mce, AW, Ye, uo, ql
((hil = R(lt(), 1)), (yil = require("url")), (CAe = R(se(), 1)));
function jzn(e) {
  if (e.startsWith(`<${DB} `)) return true;
  return (
    e.startsWith(yoe) &&
    e.startsWith(
      `<${DB} `,
      e.indexOf(`
`) + 1,
    )
  );
}
function wrapCommandText(raw) {
  for (let o of D8n)
    if (raw.endsWith(o)) {
      raw = raw.slice(0, -o.length);
      break;
    }
  for (let o of [
    `${yoe} while you were working:
`,
    `${yoe}:
`,
  ])
    if (raw.startsWith(o) && raw.startsWith(`<${DB} `, o.length)) {
      raw = raw.slice(o.length);
      break;
    }
  let t = new RegExp(
      `<${DB}\\s+teammate_id="([^"]+)"(?:\\s+color="([^"]+)")?(?:\\s+summary="([^"]+)")?>\\n?`,
      "y",
    ),
    n = [],
    r = 0;
  while (r < raw.length) {
    t.lastIndex = r;
    let o = t.exec(raw);
    if (!o)
      return {
        messages: n,
        unparsed: raw.slice(r),
      };
    let s = r + o[0].length,
      i = -1,
      a = raw.length;
    for (let c = raw.indexOf(KCo, s); c !== -1; c = raw.indexOf(KCo, c + 1)) {
      let u = c + KCo.length;
      while (u < raw.length && /\s/.test(raw.charAt(u))) u++;
      if (((t.lastIndex = u), u === raw.length || t.test(raw))) {
        ((i = c), (a = u));
        break;
      }
    }
    if (i === -1) i = raw.length;
    let l = raw.slice(s, i).trim();
    (n.push({
      teammateId: TLe(o[1] ?? ""),
      color: o[2] ? TLe(o[2]) : void 0,
      summary: o[3] ? TLe(o[3]) : void 0,
      content: l,
    }),
      (r = a));
  }
  return {
    messages: n,
    unparsed: "",
  };
}
function Bof() {
  let e = Qyt.c(7),
    t = Ht(Uof),
    n = Dc(),
    r;
  if (e[0] !== t || e[1] !== n) {
    r = new Map();
    let i;
    if (e[3] !== n) ((i = Object.values(n.getState().tasks)), (e[3] = n), (e[4] = i));
    else i = e[4];
    for (let a of i) if (a.type === "in_process_teammate") r.set(a.id, a.identity.agentName);
    for (let [a, l] of t) r.set(l, a);
    ((e[0] = t), (e[1] = n), (e[2] = r));
  } else r = e[2];
  let o = r,
    s;
  if (e[5] !== o)
    ((s = (i) => (i === "leader" ? "leader" : (o.get(i) ?? i))), (e[5] = o), (e[6] = s));
  else s = e[6];
  return s;
}
function Uof(e) {
  return e.agentNameRegistry;
}
function YCo(e) {
  let t = [];
  for (let n of e) {
    if (n.kind === "panel") {
      t.push(n);
      continue;
    }
    let r = t.at(-1);
    if (r && r.kind === "coalesced" && r.displayName === n.displayName) r.count++;
    else
      t.push({
        kind: "coalesced",
        displayName: n.displayName,
        count: 1,
      });
  }
  return t;
}
function bil(e) {
  let t = Qyt.c(22),
    { addMargin: n, param: r, verbose: o, isTranscriptMode: s } = e,
    { text: i } = r,
    a = Bof(),
    l = o || s,
    c,
    u,
    d,
    p,
    f,
    m,
    g;
  if (t[0] !== n || t[1] !== l || t[2] !== a || t[3] !== i) {
    m = Symbol.for("react.early_return_sentinel");
    e: {
      let { messages: b, unparsed: _ } = wrapCommandText(i),
        S = b.filter(Gof);
      if (((g = _.trim()), S.length === 0 && !g)) {
        m = null;
        break e;
      }
      let A;
      if (t[11] !== a)
        ((A = (C, x) => {
          let I = V6(C.color),
            k = a(C.teammateId),
            D = C.summary
              ? Eh.jsxs(U, {
                  children: [
                    Eh.jsxs(w, {
                      color: I,
                      children: [
                        "@ ",
                        k,
                        Eh.jsx(w, {
                          "aria-hidden": true,
                          children: nt.pointer,
                        }),
                      ],
                    }),
                    Eh.jsxs(w, {
                      children: [" ", C.summary],
                    }),
                  ],
                })
              : null,
            P = Uzn(C.content, k) ?? dil(C.content) ?? Nzn(C.content);
          if (P)
            return {
              kind: "panel",
              node: Eh.jsxs(
                _il.Fragment,
                {
                  children: [D, P],
                },
                x,
              ),
            };
          let O = Qv(m8e(), C.content);
          if (O && !C.summary)
            return {
              kind: "panel",
              node: Eh.jsx(
                QCo,
                {
                  displayName: k,
                  inkColor: I,
                  idleReason: O.idleReason,
                },
                x,
              ),
            };
          let L = Qv(ZTo(), C.content);
          if (L)
            return {
              kind: "panel",
              node: Eh.jsxs(
                U,
                {
                  flexDirection: "column",
                  marginTop: 1,
                  children: [
                    Eh.jsxs(U, {
                      children: [
                        Eh.jsxs(w, {
                          color: I,
                          children: [
                            "@ ",
                            k,
                            Eh.jsx(w, {
                              "aria-hidden": true,
                              children: nt.pointer,
                            }),
                          ],
                        }),
                        C.summary &&
                          Eh.jsxs(w, {
                            children: [" ", C.summary],
                          }),
                      ],
                    }),
                    Eh.jsxs(qn, {
                      children: [
                        Eh.jsx(Hs, {
                          status: "success",
                        }),
                        Eh.jsxs(w, {
                          children: [
                            " ",
                            "Completed task #",
                            L.taskId,
                            L.taskSubject &&
                              Eh.jsxs(w, {
                                dimColor: true,
                                children: [" (", L.taskSubject, ")"],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                x,
              ),
            };
          return {
            kind: "text",
            displayName: k,
            inkColor: I,
            content: C.content,
            summary: C.summary,
          };
        }),
          (t[11] = a),
          (t[12] = A));
      else A = t[12];
      let v = S.map(A);
      ((c = U),
        (u = "column"),
        (d = n ? 1 : 0),
        (p = "100%"),
        (f = l ? v.map(jof) : YCo(v).map(Fof)));
    }
    ((t[0] = n),
      (t[1] = l),
      (t[2] = a),
      (t[3] = i),
      (t[4] = c),
      (t[5] = u),
      (t[6] = d),
      (t[7] = p),
      (t[8] = f),
      (t[9] = m),
      (t[10] = g));
  } else ((c = t[4]), (u = t[5]), (d = t[6]), (p = t[7]), (f = t[8]), (m = t[9]), (g = t[10]));
  if (m !== Symbol.for("react.early_return_sentinel")) return m;
  let h;
  if (t[13] !== g)
    ((h =
      g &&
      Eh.jsx(U, {
        children: Eh.jsx(w, {
          children: g,
        }),
      })),
      (t[13] = g),
      (t[14] = h));
  else h = t[14];
  let y;
  if (t[15] !== c || t[16] !== u || t[17] !== d || t[18] !== p || t[19] !== f || t[20] !== h)
    ((y = Eh.jsxs(c, {
      flexDirection: u,
      marginTop: d,
      width: p,
      children: [f, h],
    })),
      (t[15] = c),
      (t[16] = u),
      (t[17] = d),
      (t[18] = p),
      (t[19] = f),
      (t[20] = h),
      (t[21] = y));
  else y = t[21];
  return y;
}
function Fof(e, t) {
  return e.kind === "panel"
    ? e.node
    : Eh.jsx(
        JCo,
        {
          displayName: e.displayName,
          count: e.count,
        },
        t,
      );
}
function jof(e, t) {
  return e.kind === "panel"
    ? e.node
    : Eh.jsx(
        XCo,
        {
          displayName: e.displayName,
          inkColor: e.inkColor,
          content: e.content,
          summary: e.summary,
        },
        t,
      );
}
function Gof(e) {
  if (e.summary) return true;
  if (Qv(pAe(), e.content)) return false;
  if (Qv(h8e(), e.content)) return false;
  return true;
}
function XCo(e) {
  let t = Qyt.c(14),
    { displayName: n, inkColor: r, content: o, summary: s } = e,
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((i = Eh.jsx(w, {
      "aria-hidden": true,
      children: nt.pointer,
    })),
      (t[0] = i));
  else i = t[0];
  let a;
  if (t[1] !== n || t[2] !== r)
    ((a = Eh.jsxs(w, {
      color: r,
      children: ["@ ", n, i],
    })),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a));
  else a = t[3];
  let l;
  if (t[4] !== s)
    ((l =
      s &&
      Eh.jsxs(w, {
        children: [" ", s],
      })),
      (t[4] = s),
      (t[5] = l));
  else l = t[5];
  let c;
  if (t[6] !== a || t[7] !== l)
    ((c = Eh.jsxs(U, {
      children: [a, l],
    })),
      (t[6] = a),
      (t[7] = l),
      (t[8] = c));
  else c = t[8];
  let u;
  if (t[9] !== o)
    ((u =
      o &&
      Eh.jsx(U, {
        paddingLeft: 2,
        children: Eh.jsx(zg, {
          stripPromptTags: false,
          children: o,
        }),
      })),
      (t[9] = o),
      (t[10] = u));
  else u = t[10];
  let d;
  if (t[11] !== c || t[12] !== u)
    ((d = Eh.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [c, u],
    })),
      (t[11] = c),
      (t[12] = u),
      (t[13] = d));
  else d = t[13];
  return d;
}
function JCo(e) {
  let t = Qyt.c(4),
    { displayName: n, count: r } = e,
    o = r === 1 ? "Message" : `${r} messages`,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((s = Eh.jsx(NI, {})), (t[0] = s));
  else s = t[0];
  let i;
  if (t[1] !== n || t[2] !== o)
    ((i = Eh.jsx(U, {
      marginTop: 1,
      children: Eh.jsxs(w, {
        dimColor: true,
        children: [nt.pointerSmall, " ", o, " ", "from @", n, " ", s],
      }),
    })),
      (t[1] = n),
      (t[2] = o),
      (t[3] = i));
  else i = t[3];
  return i;
}
function QCo(e) {
  let t = Qyt.c(9),
    { displayName: n, inkColor: r, idleReason: o } = e,
    s = o === "failed" ? "error" : o === "interrupted" ? "warning" : "success",
    i = o === "failed" ? "failed" : o === "interrupted" ? "was interrupted" : "finished",
    a;
  if (t[0] !== s)
    ((a = Eh.jsx(w, {
      color: s,
      children: gc,
    })),
      (t[0] = s),
      (t[1] = a));
  else a = t[1];
  let l;
  if (t[2] !== n || t[3] !== r)
    ((l = Eh.jsxs(w, {
      color: r,
      bold: true,
      children: ["@", n],
    })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = l));
  else l = t[4];
  let c;
  if (t[5] !== i || t[6] !== a || t[7] !== l)
    ((c = Eh.jsx(U, {
      marginTop: 1,
      children: Eh.jsxs(w, {
        children: [a, " Teammate", " ", l, " ", i],
      }),
    })),
      (t[5] = i),
      (t[6] = a),
      (t[7] = l),
      (t[8] = c));
  else c = t[8];
  return c;
}
var Qyt, _il, Eh, KCo;
