// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module a4o
// matched 2.1.88 source: src/components/agents/ToolSelector.tsx
// class=modified  jaccard=0.4399  score=0.8045  fileCov=0.4926
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module a4o] deps: Ye, kpe, Vl
((yYl = R(lt(), 1)), (KAt = R(se(), 1)));
function _Yl() {
  return {
    READ_ONLY: {
      name: "Read-only tools",
      toolNames: new Set([
        Z4.name,
        L$.name,
        EP.name,
        Vg.name,
        FF.name,
        qDe.name,
        cC,
        kX,
        yL,
        ZD,
        dXn.name,
        gbt.name,
        uXn.name,
        QW.name,
        u5.name,
        xre.name,
      ]),
    },
    EDIT: {
      name: "Edit tools",
      toolNames: new Set([xH.name, dA.name, oq.name]),
    },
    EXECUTION: {
      name: "Execution tools",
      toolNames: new Set([cl.name, void 0].filter((e) => e !== void 0)),
    },
    MCP: {
      name: "MCP tools",
      toolNames: new Set(),
      isMcp: true,
    },
    OTHER: {
      name: "Other tools",
      toolNames: new Set(),
    },
  };
}
function $Vf(e) {
  let t = new Map();
  return (
    e.forEach((n) => {
      let r = iDe(n);
      if (r) {
        let o = t.get(r) || [];
        (o.push(n), t.set(r, o));
      }
    }),
    Array.from(t.entries())
      .map(([n, r]) => ({
        serverName: n,
        tools: r,
      }))
      .sort((n, r) => n.serverName.localeCompare(r.serverName))
  );
}
function Fsr(e) {
  let t = bYl.c(69),
    { tools: n, initialTools: r, onComplete: o, onCancel: s } = e,
    i;
  if (t[0] !== n)
    ((i = Nwo({
      tools: n,
      isBuiltIn: false,
      isAsync: false,
    })),
      (t[0] = n),
      (t[1] = i));
  else i = t[1];
  let a = i,
    l;
  if (t[2] !== a || t[3] !== r)
    ((l = !r || r.includes("*") ? a.map(WVf) : r), (t[2] = a), (t[3] = r), (t[4] = l));
  else l = t[4];
  let c = l,
    [u, d] = Usr.useState(c),
    [p, f] = Usr.useState(0),
    [m, g] = Usr.useState(false),
    h;
  if (t[5] !== a) ((h = new Set(a.map(GVf))), (t[5] = a), (t[6] = h));
  else h = t[6];
  let y = h,
    b;
  if (t[7] !== u || t[8] !== y) {
    let de;
    if (t[10] !== y) ((de = (Ee) => y.has(Ee)), (t[10] = y), (t[11] = de));
    else de = t[11];
    ((b = u.filter(de)), (t[7] = u), (t[8] = y), (t[9] = b));
  } else b = t[9];
  let _ = b,
    S;
  if (t[12] !== _) ((S = new Set(_)), (t[12] = _), (t[13] = S));
  else S = t[13];
  let A = S,
    v = _.length === a.length && a.length > 0,
    C;
  if (t[14] === Symbol.for("react.memo_cache_sentinel"))
    ((C = (de) => {
      if (!de) return;
      d((Ee) => (Ee.includes(de) ? Ee.filter((me) => me !== de) : [...Ee, de]));
    }),
      (t[14] = C));
  else C = t[14];
  let x = C,
    I;
  if (t[15] === Symbol.for("react.memo_cache_sentinel"))
    ((I = (de, Ee) => {
      d((me) => {
        if (Ee) {
          let pe = de.filter((ge) => !me.includes(ge));
          return [...me, ...pe];
        } else return me.filter((pe) => !de.includes(pe));
      });
    }),
      (t[15] = I));
  else I = t[15];
  let k = I,
    D;
  if (t[16] !== a || t[17] !== o || t[18] !== _)
    ((D = () => {
      let de = a.map(jVf),
        me = _.length === de.length && de.every((pe) => _.includes(pe)) ? void 0 : _;
      o(me);
    }),
      (t[16] = a),
      (t[17] = o),
      (t[18] = _),
      (t[19] = D));
  else D = t[19];
  let P = D,
    O;
  if (t[20] !== a) {
    let de = _Yl();
    ((O = {
      readOnly: [],
      edit: [],
      execution: [],
      mcp: [],
      other: [],
    }),
      a.forEach((Ee) => {
        if (gk(Ee)) O.mcp.push(Ee);
        else if (de.READ_ONLY.toolNames.has(Ee.name)) O.readOnly.push(Ee);
        else if (de.EDIT.toolNames.has(Ee.name)) O.edit.push(Ee);
        else if (de.EXECUTION.toolNames.has(Ee.name)) O.execution.push(Ee);
        else if (Ee.name !== ss) O.other.push(Ee);
      }),
      (t[20] = a),
      (t[21] = O));
  } else O = t[21];
  let L = O,
    M;
  if (t[22] !== A)
    ((M = (de) => {
      let me = On(de, (pe) => A.has(pe.name)) < de.length;
      return () => {
        let pe = de.map(FVf);
        k(pe, me);
      };
    }),
      (t[22] = A),
      (t[23] = M));
  else M = t[23];
  let N = M,
    B;
  if (
    t[24] !== N ||
    t[25] !== a ||
    t[26] !== p ||
    t[27] !== P ||
    t[28] !== v ||
    t[29] !== A ||
    t[30] !== m ||
    t[31] !== L.edit ||
    t[32] !== L.execution ||
    t[33] !== L.mcp ||
    t[34] !== L.other ||
    t[35] !== L.readOnly
  ) {
    ((B = []),
      B.push({
        id: "continue",
        label: "Continue",
        action: P,
        isContinue: true,
      }));
    let de;
    if (t[37] !== a || t[38] !== v)
      ((de = () => {
        let ie = a.map(UVf);
        k(ie, !v);
      }),
        (t[37] = a),
        (t[38] = v),
        (t[39] = de));
    else de = t[39];
    B.push({
      id: "bucket-all",
      label: `${v ? nt.checkboxOn : nt.checkboxOff} All tools`,
      action: de,
    });
    let Ee = _Yl();
    [
      {
        id: "bucket-readonly",
        name: Ee.READ_ONLY.name,
        tools: L.readOnly,
      },
      {
        id: "bucket-edit",
        name: Ee.EDIT.name,
        tools: L.edit,
      },
      {
        id: "bucket-execution",
        name: Ee.EXECUTION.name,
        tools: L.execution,
      },
      {
        id: "bucket-mcp",
        name: Ee.MCP.name,
        tools: L.mcp,
      },
      {
        id: "bucket-other",
        name: Ee.OTHER.name,
        tools: L.other,
      },
    ].forEach((ie) => {
      let { id: le, name: He, tools: ye } = ie;
      if (ye.length === 0) return;
      let we = On(ye, (Ce) => A.has(Ce.name)) === ye.length;
      B.push({
        id: le,
        label: `${we ? nt.checkboxOn : nt.checkboxOff} ${He}`,
        action: N(ye),
      });
    });
    let pe = B.length,
      ge;
    if (t[40] !== p || t[41] !== m || t[42] !== pe)
      ((ge = () => {
        if ((g(!m), m && p > pe)) f(pe);
      }),
        (t[40] = p),
        (t[41] = m),
        (t[42] = pe),
        (t[43] = ge));
    else ge = t[43];
    B.push({
      id: "toggle-individual",
      label: m ? "Hide advanced options" : "Show advanced options",
      action: ge,
      isToggle: true,
    });
    let he = $Vf(a);
    if (m) {
      if (he.length > 0)
        (B.push({
          id: "mcp-servers-header",
          label: "MCP servers:",
          action: BVf,
          isHeader: true,
        }),
          he.forEach((ie) => {
            let { serverName: le, tools: He } = ie,
              ue = On(He, (we) => A.has(we.name)) === He.length;
            B.push({
              id: `mcp-server-${le}`,
              label: `${ue ? nt.checkboxOn : nt.checkboxOff} ${le} (${He.length} ${bn(He.length, "tool")})`,
              action: () => {
                let we = He.map(NVf);
                k(we, !ue);
              },
            });
          }),
          B.push({
            id: "tools-header",
            label: "Individual tools:",
            action: OVf,
            isHeader: true,
          }));
      a.forEach((ie) => {
        let le = ie.name;
        if (gk(ie)) {
          let He = ie.mcpInfo ?? eI(ie.name);
          le = He ? `${He.toolName} (${He.serverName})` : ie.name;
        }
        B.push({
          id: `tool-${ie.name}`,
          label: `${A.has(ie.name) ? nt.checkboxOn : nt.checkboxOff} ${le}`,
          action: () => x(ie.name),
        });
      });
    }
    ((t[24] = N),
      (t[25] = a),
      (t[26] = p),
      (t[27] = P),
      (t[28] = v),
      (t[29] = A),
      (t[30] = m),
      (t[31] = L.edit),
      (t[32] = L.execution),
      (t[33] = L.mcp),
      (t[34] = L.other),
      (t[35] = L.readOnly),
      (t[36] = B));
  } else B = t[36];
  let $;
  if (t[44] !== r || t[45] !== s || t[46] !== o)
    (($ = () => {
      if (s) s();
      else o(r);
    }),
      (t[44] = r),
      (t[45] = s),
      (t[46] = o),
      (t[47] = $));
  else $ = t[47];
  let q = $,
    W;
  if (t[48] === Symbol.for("react.memo_cache_sentinel"))
    ((W = {
      context: "Confirmation",
    }),
      (t[48] = W));
  else W = t[48];
  $r("confirm:no", q, W);
  let V;
  if (t[49] !== p || t[50] !== B)
    ((V = (de) => {
      if (de.key === "return") {
        de.preventDefault();
        let Ee = B[p];
        if (Ee && !Ee.isHeader) Ee.action();
      } else if (de.key === "up") {
        de.preventDefault();
        let Ee = p - 1;
        while (Ee > 0 && B[Ee]?.isHeader) Ee--;
        f(Math.max(0, Ee));
      } else if (de.key === "down") {
        de.preventDefault();
        let Ee = p + 1;
        while (Ee < B.length - 1 && B[Ee]?.isHeader) Ee++;
        f(Math.min(B.length - 1, Ee));
      }
    }),
      (t[49] = p),
      (t[50] = B),
      (t[51] = V));
  else V = t[51];
  let Y = V,
    z = p === 0 ? "suggestion" : void 0,
    K = p === 0,
    Z = p === 0 ? `${nt.pointer} ` : "  ",
    J;
  if (t[52] !== z || t[53] !== K || t[54] !== Z)
    ((J = Dse.jsxs(w, {
      color: z,
      bold: K,
      children: [Z, "[ Continue ]"],
    })),
      (t[52] = z),
      (t[53] = K),
      (t[54] = Z),
      (t[55] = J));
  else J = t[55];
  let ne;
  if (t[56] === Symbol.for("react.memo_cache_sentinel"))
    ((ne = Dse.jsx(qh, {
      width: 40,
    })),
      (t[56] = ne));
  else ne = t[56];
  let oe;
  if (t[57] !== B) ((oe = B.slice(1)), (t[57] = B), (t[58] = oe));
  else oe = t[58];
  let re;
  if (t[59] !== p || t[60] !== oe)
    ((re = oe.map((de, Ee) => {
      let me = Ee + 1 === p,
        pe = de.isToggle,
        ge = de.isHeader;
      return Dse.jsxs(
        SYl.Fragment,
        {
          children: [
            pe &&
              Dse.jsx(qh, {
                width: 40,
              }),
            ge &&
              Ee > 0 &&
              Dse.jsx(U, {
                marginTop: 1,
              }),
            Dse.jsxs(w, {
              color: ge ? void 0 : me ? "suggestion" : void 0,
              dimColor: ge,
              bold: pe && me,
              children: [ge ? "" : me ? `${nt.pointer} ` : "  ", pe ? `[ ${de.label} ]` : de.label],
            }),
          ],
        },
        de.id,
      );
    })),
      (t[59] = p),
      (t[60] = oe),
      (t[61] = re));
  else re = t[61];
  let ee = v ? "All tools selected" : `${A.size} of ${a.length} tools selected`,
    ce;
  if (t[62] !== ee)
    ((ce = Dse.jsx(U, {
      marginTop: 1,
      flexDirection: "column",
      children: Dse.jsx(w, {
        dimColor: true,
        children: ee,
      }),
    })),
      (t[62] = ee),
      (t[63] = ce));
  else ce = t[63];
  let ae;
  if (t[64] !== Y || t[65] !== J || t[66] !== re || t[67] !== ce)
    ((ae = Dse.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: Y,
      children: [J, ne, re, ce],
    })),
      (t[64] = Y),
      (t[65] = J),
      (t[66] = re),
      (t[67] = ce),
      (t[68] = ae));
  else ae = t[68];
  return ae;
}
function OVf() {}
function NVf(e) {
  return e.name;
}
function BVf() {}
function UVf(e) {
  return e.name;
}
function FVf(e) {
  return e.name;
}
function jVf(e) {
  return e.name;
}
function GVf(e) {
  return e.name;
}
function WVf(e) {
  return e.name;
}
var bYl, SYl, Usr, Dse;
