// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PBl
// matched 2.1.88 source: src/components/PromptInput/PromptInputHelpMenu.tsx
// class=modified  jaccard=0.3624  score=0.4826  fileCov=0.5927
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var PBl = E(() => {
  Zf();
  Ye();
  es();
  Vl();
  B_();
  kP();
  ((DBl = R(lt(), 1)), (qfe = R(se(), 1)));
});
function MBl(e) {
  return e.replaceAll("+", " + ");
}
function Dnr(e) {
  let t = $Bl.c(94),
    { dimColor: n, fixedWidth: r, gap: o, paddingX: s } = e,
    i = Uu("app:toggleTranscript", "Global", "ctrl+o"),
    a;
  if (t[0] !== i) ((a = MBl(i)), (t[0] = i), (t[1] = a));
  else a = t[1];
  let l = a,
    c = $0("app:toggleTodos", "Global", "ctrl+t"),
    u = $0("chat:undo", "Chat", "ctrl+_"),
    d = $0("chat:stash", "Chat", "ctrl+s"),
    p = $0("chat:cycleMode", "Chat", "shift+tab"),
    f = $0("chat:modelPicker", "Chat", "alt+p"),
    m = $0("chat:fastMode", "Chat", "alt+o"),
    g = $0("chat:externalEditor", "Chat", "ctrl+g"),
    h = Uu("app:toggleTerminal", "Global", "meta+j"),
    y;
  if (t[2] !== h) ((y = MBl(h)), (t[2] = h), (t[3] = y));
  else y = t[3];
  let b = y,
    _ = $0("chat:imagePaste", "Chat", "ctrl+v"),
    S;
  if (t[4] !== n || t[5] !== b) ((S = null), (t[4] = n), (t[5] = b), (t[6] = S));
  else S = t[6];
  let A = S,
    v = r ? 24 : void 0,
    C;
  if (t[7] !== n)
    ((C = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: "! for shell mode",
      }),
    })),
      (t[7] = n),
      (t[8] = C));
  else C = t[8];
  let x;
  if (t[9] !== n)
    ((x = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: "/ for commands",
      }),
    })),
      (t[9] = n),
      (t[10] = x));
  else x = t[10];
  let I;
  if (t[11] !== n)
    ((I = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: "@ for file paths",
      }),
    })),
      (t[11] = n),
      (t[12] = I));
  else I = t[12];
  let k;
  if (t[13] !== n)
    ((k = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: "/btw for side question",
      }),
    })),
      (t[13] = n),
      (t[14] = k));
  else k = t[14];
  let D;
  if (t[15] !== v || t[16] !== C || t[17] !== x || t[18] !== I || t[19] !== k)
    ((D = Jd.jsxs(U, {
      flexDirection: "column",
      width: v,
      children: [C, x, I, k],
    })),
      (t[15] = v),
      (t[16] = C),
      (t[17] = x),
      (t[18] = I),
      (t[19] = k),
      (t[20] = D));
  else D = t[20];
  let P = r ? 35 : void 0,
    O;
  if (t[21] !== n)
    ((O = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: "double tap esc to clear input",
      }),
    })),
      (t[21] = n),
      (t[22] = O));
  else O = t[22];
  let L;
  if (t[23] !== p)
    ((L = Jd.jsx(ht, {
      chord: p,
      action: "auto-accept edits",
      format: RHe,
    })),
      (t[23] = p),
      (t[24] = L));
  else L = t[24];
  let M;
  if (t[25] !== n || t[26] !== L)
    ((M = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: L,
      }),
    })),
      (t[25] = n),
      (t[26] = L),
      (t[27] = M));
  else M = t[27];
  let N;
  if (t[28] !== n || t[29] !== l)
    ((N = Jd.jsx(U, {
      children: Jd.jsxs(w, {
        dimColor: n,
        children: [l, " for verbose output"],
      }),
    })),
      (t[28] = n),
      (t[29] = l),
      (t[30] = N));
  else N = t[30];
  let B;
  if (t[31] !== c)
    ((B = Jd.jsx(ht, {
      chord: c,
      action: "toggle tasks",
      format: RHe,
    })),
      (t[31] = c),
      (t[32] = B));
  else B = t[32];
  let $;
  if (t[33] !== n || t[34] !== B)
    (($ = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: B,
      }),
    })),
      (t[33] = n),
      (t[34] = B),
      (t[35] = $));
  else $ = t[35];
  let q;
  if (t[36] === Symbol.for("react.memo_cache_sentinel")) ((q = r$l()), (t[36] = q));
  else q = t[36];
  let W;
  if (t[37] !== n)
    ((W = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: q,
      }),
    })),
      (t[37] = n),
      (t[38] = W));
  else W = t[38];
  let V;
  if (
    t[39] !== P ||
    t[40] !== O ||
    t[41] !== M ||
    t[42] !== N ||
    t[43] !== $ ||
    t[44] !== W ||
    t[45] !== A
  )
    ((V = Jd.jsxs(U, {
      flexDirection: "column",
      width: P,
      children: [O, M, N, $, A, W],
    })),
      (t[39] = P),
      (t[40] = O),
      (t[41] = M),
      (t[42] = N),
      (t[43] = $),
      (t[44] = W),
      (t[45] = A),
      (t[46] = V));
  else V = t[46];
  let Y;
  if (t[47] !== u)
    ((Y = Jd.jsx(ht, {
      chord: u,
      action: "undo",
      format: RHe,
    })),
      (t[47] = u),
      (t[48] = Y));
  else Y = t[48];
  let z;
  if (t[49] !== n || t[50] !== Y)
    ((z = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: Y,
      }),
    })),
      (t[49] = n),
      (t[50] = Y),
      (t[51] = z));
  else z = t[51];
  let K;
  if (t[52] !== n)
    ((K =
      oJr() &&
      Jd.jsx(U, {
        children: Jd.jsx(w, {
          dimColor: n,
          children: Jd.jsx(ht, {
            chord: "ctrl+z",
            action: "suspend",
            format: RHe,
          }),
        }),
      })),
      (t[52] = n),
      (t[53] = K));
  else K = t[53];
  let Z;
  if (t[54] !== _)
    ((Z = Jd.jsx(ht, {
      chord: _,
      action: "paste images",
      format: RHe,
    })),
      (t[54] = _),
      (t[55] = Z));
  else Z = t[55];
  let J;
  if (t[56] !== n || t[57] !== Z)
    ((J = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: Z,
      }),
    })),
      (t[56] = n),
      (t[57] = Z),
      (t[58] = J));
  else J = t[58];
  let ne;
  if (t[59] !== f)
    ((ne = Jd.jsx(ht, {
      chord: f,
      action: "switch model",
      format: RHe,
    })),
      (t[59] = f),
      (t[60] = ne));
  else ne = t[60];
  let oe;
  if (t[61] !== n || t[62] !== ne)
    ((oe = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: ne,
      }),
    })),
      (t[61] = n),
      (t[62] = ne),
      (t[63] = oe));
  else oe = t[63];
  let re;
  if (t[64] !== n || t[65] !== m)
    ((re =
      sc() &&
      Fx() &&
      Jd.jsx(U, {
        children: Jd.jsx(w, {
          dimColor: n,
          children: Jd.jsx(ht, {
            chord: m,
            action: "toggle fast mode",
            format: RHe,
          }),
        }),
      })),
      (t[64] = n),
      (t[65] = m),
      (t[66] = re));
  else re = t[66];
  let ee;
  if (t[67] !== d)
    ((ee = Jd.jsx(ht, {
      chord: d,
      action: "stash prompt",
      format: RHe,
    })),
      (t[67] = d),
      (t[68] = ee));
  else ee = t[68];
  let ce;
  if (t[69] !== n || t[70] !== ee)
    ((ce = Jd.jsx(U, {
      children: Jd.jsx(w, {
        dimColor: n,
        children: ee,
      }),
    })),
      (t[69] = n),
      (t[70] = ee),
      (t[71] = ce));
  else ce = t[71];
  let ae;
  if (t[72] !== g)
    ((ae = Jd.jsx(ht, {
      chord: g,
      action: "edit in $EDITOR",
      format: RHe,
    })),
      (t[72] = g),
      (t[73] = ae));
  else ae = t[73];
  let de;
  if (t[74] !== n || t[75] !== ae)
    ((de = Jd.jsx(U, {
      flexShrink: 0,
      children: Jd.jsx(w, {
        dimColor: n,
        children: ae,
      }),
    })),
      (t[74] = n),
      (t[75] = ae),
      (t[76] = de));
  else de = t[76];
  let Ee;
  if (t[77] !== n)
    ((Ee =
      E8() &&
      Jd.jsx(U, {
        children: Jd.jsx(w, {
          dimColor: n,
          children: "/keybindings to customize",
        }),
      })),
      (t[77] = n),
      (t[78] = Ee));
  else Ee = t[78];
  let me;
  if (
    t[79] !== z ||
    t[80] !== K ||
    t[81] !== J ||
    t[82] !== oe ||
    t[83] !== re ||
    t[84] !== ce ||
    t[85] !== de ||
    t[86] !== Ee
  )
    ((me = Jd.jsxs(U, {
      flexDirection: "column",
      children: [z, K, J, oe, re, ce, de, Ee],
    })),
      (t[79] = z),
      (t[80] = K),
      (t[81] = J),
      (t[82] = oe),
      (t[83] = re),
      (t[84] = ce),
      (t[85] = de),
      (t[86] = Ee),
      (t[87] = me));
  else me = t[87];
  let pe;
  if (t[88] !== o || t[89] !== s || t[90] !== D || t[91] !== V || t[92] !== me)
    ((pe = Jd.jsxs(U, {
      paddingX: s,
      flexDirection: "row",
      gap: o,
      children: [D, V, me],
    })),
      (t[88] = o),
      (t[89] = s),
      (t[90] = D),
      (t[91] = V),
      (t[92] = me),
      (t[93] = pe));
  else pe = t[93];
  return pe;
}
var $Bl, Jd, RHe;
