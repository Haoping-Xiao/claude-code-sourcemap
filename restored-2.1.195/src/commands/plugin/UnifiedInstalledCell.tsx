// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cjl
// matched 2.1.88 source: src/commands/plugin/UnifiedInstalledCell.tsx
// class=modified  jaccard=0.404  score=0.4629  fileCov=0.7606
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Cjl] deps: Ye, uo, Ao, sr, G1o
((vjl = R(lt(), 1)), (MP = R(se(), 1)));
function xjl(e) {
  let t = Ijl.c(181),
    { item: n, isSelected: r, health: o } = e,
    [s] = na();
  if (n.type === "plugin") {
    let _, S;
    if (n.pendingToggle) {
      let W;
      if (t[0] !== s) ((W = Io("suggestion", s)(nt.arrowRight)), (t[0] = s), (t[1] = W));
      else W = t[1];
      ((_ = W), (S = n.pendingToggle === "will-enable" ? "will enable" : "will disable"));
    } else if (n.errorCount > 0) {
      let W;
      if (t[2] !== s) ((W = Io("error", s)(nt.cross)), (t[2] = s), (t[3] = W));
      else W = t[3];
      _ = W;
      let V = n.errorCount,
        Y;
      if (t[4] !== n.errorCount)
        ((Y = bn(n.errorCount, "error")), (t[4] = n.errorCount), (t[5] = Y));
      else Y = t[5];
      S = `${V} ${Y}`;
    } else if (!n.isEnabled) {
      let W;
      if (t[6] !== s) ((W = Io("inactive", s)(nt.radioOff)), (t[6] = s), (t[7] = W));
      else W = t[7];
      ((_ = W), (S = "disabled"));
    } else {
      let W;
      if (t[8] !== s) ((W = Io("success", s)(nt.tick)), (t[8] = s), (t[9] = W));
      else W = t[9];
      ((_ = W), (S = "enabled"));
    }
    let A = r ? "suggestion" : void 0,
      v;
    if (t[10] !== n) ((v = fS(n)), (t[10] = n), (t[11] = v));
    else v = t[11];
    let C;
    if (t[12] !== A || t[13] !== v)
      ((C = Mu.jsx(w, {
        color: A,
        children: v,
      })),
        (t[12] = A),
        (t[13] = v),
        (t[14] = C));
    else C = t[14];
    let x;
    if (t[15] !== o || t[16] !== s)
      ((x =
        o &&
        Mu.jsxs(w, {
          children: [" ", Io(uBf[o], s)(nt.bullet)],
        })),
        (t[15] = o),
        (t[16] = s),
        (t[17] = x));
    else x = t[17];
    let I = !r,
      k;
    if (t[18] === Symbol.for("react.memo_cache_sentinel"))
      ((k = Mu.jsx(pE, {
        color: "userMessageBackground",
        textColor: "text",
        children: "Plugin",
      })),
        (t[18] = k));
    else k = t[18];
    let D;
    if (t[19] !== I)
      ((D = Mu.jsxs(w, {
        dimColor: I,
        children: [" ", k],
      })),
        (t[19] = I),
        (t[20] = D));
    else D = t[20];
    let P;
    if (t[21] !== n.marketplace)
      ((P = Mu.jsxs(w, {
        dimColor: true,
        children: [" \xB7 ", n.marketplace],
      })),
        (t[21] = n.marketplace),
        (t[22] = P));
    else P = t[22];
    let O = !r,
      L;
    if (t[23] !== _ || t[24] !== O)
      ((L = Mu.jsxs(w, {
        dimColor: O,
        children: [" \xB7 ", _, " "],
      })),
        (t[23] = _),
        (t[24] = O),
        (t[25] = L));
    else L = t[25];
    let M = !r,
      N;
    if (t[26] !== S || t[27] !== M)
      ((N = Mu.jsx(w, {
        dimColor: M,
        children: S,
      })),
        (t[26] = S),
        (t[27] = M),
        (t[28] = N));
    else N = t[28];
    let B;
    if (t[29] !== n.unusedDays)
      ((B =
        n.unusedDays !== void 0 &&
        Mu.jsxs(w, {
          dimColor: true,
          children: [" ", "\xB7 not used in ", n.unusedDays, " ", bn(n.unusedDays, "day")],
        })),
        (t[29] = n.unusedDays),
        (t[30] = B));
    else B = t[30];
    let $;
    if (
      t[31] !== L ||
      t[32] !== N ||
      t[33] !== B ||
      t[34] !== C ||
      t[35] !== x ||
      t[36] !== D ||
      t[37] !== P
    )
      (($ = Mu.jsxs(w, {
        children: [C, x, D, P, L, N, B],
      })),
        (t[31] = L),
        (t[32] = N),
        (t[33] = B),
        (t[34] = C),
        (t[35] = x),
        (t[36] = D),
        (t[37] = P),
        (t[38] = $));
    else $ = t[38];
    let q;
    if (t[39] !== r || t[40] !== $)
      ((q = Mu.jsx(mH, {
        isFocused: r,
        styled: false,
        children: $,
      })),
        (t[39] = r),
        (t[40] = $),
        (t[41] = q));
    else q = t[41];
    return q;
  }
  if (n.type === "flagged-plugin") {
    let _;
    if (t[42] !== s) ((_ = Io("warning", s)(nt.warning)), (t[42] = s), (t[43] = _));
    else _ = t[43];
    let S = _,
      A = r ? "suggestion" : void 0,
      v;
    if (t[44] !== n.name || t[45] !== A)
      ((v = Mu.jsx(w, {
        color: A,
        children: n.name,
      })),
        (t[44] = n.name),
        (t[45] = A),
        (t[46] = v));
    else v = t[46];
    let C = !r,
      x;
    if (t[47] === Symbol.for("react.memo_cache_sentinel"))
      ((x = Mu.jsx(pE, {
        color: "userMessageBackground",
        textColor: "text",
        children: "Plugin",
      })),
        (t[47] = x));
    else x = t[47];
    let I;
    if (t[48] !== C)
      ((I = Mu.jsxs(w, {
        dimColor: C,
        children: [" ", x],
      })),
        (t[48] = C),
        (t[49] = I));
    else I = t[49];
    let k;
    if (t[50] !== n.marketplace)
      ((k = Mu.jsxs(w, {
        dimColor: true,
        children: [" \xB7 ", n.marketplace],
      })),
        (t[50] = n.marketplace),
        (t[51] = k));
    else k = t[51];
    let D = !r,
      P;
    if (t[52] !== S || t[53] !== D)
      ((P = Mu.jsxs(w, {
        dimColor: D,
        children: [" \xB7 ", S, " "],
      })),
        (t[52] = S),
        (t[53] = D),
        (t[54] = P));
    else P = t[54];
    let O = !r,
      L;
    if (t[55] !== O)
      ((L = Mu.jsx(w, {
        dimColor: O,
        children: "removed",
      })),
        (t[55] = O),
        (t[56] = L));
    else L = t[56];
    let M;
    if (t[57] !== L || t[58] !== v || t[59] !== I || t[60] !== k || t[61] !== P)
      ((M = Mu.jsxs(w, {
        children: [v, I, k, P, L],
      })),
        (t[57] = L),
        (t[58] = v),
        (t[59] = I),
        (t[60] = k),
        (t[61] = P),
        (t[62] = M));
    else M = t[62];
    let N;
    if (t[63] !== r || t[64] !== M)
      ((N = Mu.jsx(mH, {
        isFocused: r,
        styled: false,
        children: M,
      })),
        (t[63] = r),
        (t[64] = M),
        (t[65] = N));
    else N = t[65];
    return N;
  }
  if (n.type === "failed-plugin") {
    let _;
    if (t[66] !== s) ((_ = Io("error", s)(nt.cross)), (t[66] = s), (t[67] = _));
    else _ = t[67];
    let S = _,
      A = n.errorCount,
      v;
    if (t[68] !== n.errorCount)
      ((v = bn(n.errorCount, "error")), (t[68] = n.errorCount), (t[69] = v));
    else v = t[69];
    let C = `failed to load \xB7 ${A} ${v}`,
      x = r ? "suggestion" : void 0,
      I;
    if (t[70] !== n.name || t[71] !== x)
      ((I = Mu.jsx(w, {
        color: x,
        children: n.name,
      })),
        (t[70] = n.name),
        (t[71] = x),
        (t[72] = I));
    else I = t[72];
    let k = !r,
      D;
    if (t[73] === Symbol.for("react.memo_cache_sentinel"))
      ((D = Mu.jsx(pE, {
        color: "userMessageBackground",
        textColor: "text",
        children: "Plugin",
      })),
        (t[73] = D));
    else D = t[73];
    let P;
    if (t[74] !== k)
      ((P = Mu.jsxs(w, {
        dimColor: k,
        children: [" ", D],
      })),
        (t[74] = k),
        (t[75] = P));
    else P = t[75];
    let O;
    if (t[76] !== n.marketplace)
      ((O = Mu.jsxs(w, {
        dimColor: true,
        children: [" \xB7 ", n.marketplace],
      })),
        (t[76] = n.marketplace),
        (t[77] = O));
    else O = t[77];
    let L = !r,
      M;
    if (t[78] !== S || t[79] !== L)
      ((M = Mu.jsxs(w, {
        dimColor: L,
        children: [" \xB7 ", S, " "],
      })),
        (t[78] = S),
        (t[79] = L),
        (t[80] = M));
    else M = t[80];
    let N = !r,
      B;
    if (t[81] !== C || t[82] !== N)
      ((B = Mu.jsx(w, {
        dimColor: N,
        children: C,
      })),
        (t[81] = C),
        (t[82] = N),
        (t[83] = B));
    else B = t[83];
    let $;
    if (t[84] !== M || t[85] !== B || t[86] !== I || t[87] !== P || t[88] !== O)
      (($ = Mu.jsxs(w, {
        children: [I, P, O, M, B],
      })),
        (t[84] = M),
        (t[85] = B),
        (t[86] = I),
        (t[87] = P),
        (t[88] = O),
        (t[89] = $));
    else $ = t[89];
    let q;
    if (t[90] !== r || t[91] !== $)
      ((q = Mu.jsx(mH, {
        isFocused: r,
        styled: false,
        children: $,
      })),
        (t[90] = r),
        (t[91] = $),
        (t[92] = q));
    else q = t[92];
    return q;
  }
  if (n.type === "skill") {
    let _ = dBf[n.override],
      S;
    if (t[93] !== _.color || t[94] !== _.glyph || t[95] !== s)
      ((S = _.color ? Io(_.color, s)(_.glyph) : _.glyph),
        (t[93] = _.color),
        (t[94] = _.glyph),
        (t[95] = s),
        (t[96] = S));
    else S = t[96];
    let A = S,
      v = r ? "suggestion" : void 0,
      C;
    if (t[97] !== n.name || t[98] !== v)
      ((C = Mu.jsx(w, {
        color: v,
        children: n.name,
      })),
        (t[97] = n.name),
        (t[98] = v),
        (t[99] = C));
    else C = t[99];
    let x = !r,
      I;
    if (t[100] === Symbol.for("react.memo_cache_sentinel"))
      ((I = Mu.jsx(pE, {
        color: "userMessageBackground",
        textColor: "text",
        children: "Skill",
      })),
        (t[100] = I));
    else I = t[100];
    let k;
    if (t[101] !== x)
      ((k = Mu.jsxs(w, {
        dimColor: x,
        children: [" ", I],
      })),
        (t[101] = x),
        (t[102] = k));
    else k = t[102];
    let D;
    if (t[103] !== n.source)
      ((D = Mu.jsxs(w, {
        dimColor: true,
        children: [" \xB7 ", n.source],
      })),
        (t[103] = n.source),
        (t[104] = D));
    else D = t[104];
    let P = !r,
      O = n.lockSource ? "\uD83D\uDD12 " : "",
      L;
    if (t[105] !== A || t[106] !== P || t[107] !== O)
      ((L = Mu.jsxs(w, {
        dimColor: P,
        children: [" ", "\xB7 ", O, A, " "],
      })),
        (t[105] = A),
        (t[106] = P),
        (t[107] = O),
        (t[108] = L));
    else L = t[108];
    let M = !r,
      N;
    if (t[109] !== _.label || t[110] !== M)
      ((N = Mu.jsx(w, {
        dimColor: M,
        children: _.label,
      })),
        (t[109] = _.label),
        (t[110] = M),
        (t[111] = N));
    else N = t[111];
    let B;
    if (t[112] !== n.tokenEstimate)
      ((B = Mu.jsxs(w, {
        dimColor: true,
        children: [" \xB7 ~", n.tokenEstimate, " tok"],
      })),
        (t[112] = n.tokenEstimate),
        (t[113] = B));
    else B = t[113];
    let $;
    if (t[114] !== n.usage)
      (($ = n.usage
        ? Mu.jsxs(w, {
            dimColor: true,
            children: [
              " ",
              "\xB7 ",
              n.usage.count,
              "\xD7",
              " ",
              n.usage.daysSinceUse === 0 ? "today" : `${n.usage.daysSinceUse}d`,
            ],
          })
        : Mu.jsx(w, {
            color: "warning",
            children: " \xB7 never used",
          })),
        (t[114] = n.usage),
        (t[115] = $));
    else $ = t[115];
    let q;
    if (
      t[116] !== L ||
      t[117] !== N ||
      t[118] !== B ||
      t[119] !== $ ||
      t[120] !== C ||
      t[121] !== k ||
      t[122] !== D
    )
      ((q = Mu.jsxs(w, {
        children: [C, k, D, L, N, B, $],
      })),
        (t[116] = L),
        (t[117] = N),
        (t[118] = B),
        (t[119] = $),
        (t[120] = C),
        (t[121] = k),
        (t[122] = D),
        (t[123] = q));
    else q = t[123];
    let W;
    if (t[124] !== r || t[125] !== q)
      ((W = Mu.jsx(mH, {
        isFocused: r,
        styled: false,
        children: q,
      })),
        (t[124] = r),
        (t[125] = q),
        (t[126] = W));
    else W = t[126];
    return W;
  }
  let i, a;
  if (n.status === "connected") {
    let _;
    if (t[127] !== s) ((_ = Io("success", s)(nt.tick)), (t[127] = s), (t[128] = _));
    else _ = t[128];
    ((i = _), (a = "connected"));
  } else if (n.status === "disabled") {
    let _;
    if (t[129] !== s) ((_ = Io("inactive", s)(nt.radioOff)), (t[129] = s), (t[130] = _));
    else _ = t[130];
    ((i = _), (a = "disabled"));
  } else if (n.status === "pending") {
    let _;
    if (t[131] !== s) ((_ = Io("inactive", s)(nt.radioOff)), (t[131] = s), (t[132] = _));
    else _ = t[132];
    ((i = _), (a = "connecting\u2026"));
  } else if (n.status === "needs-auth") {
    let _;
    if (t[133] !== s) ((_ = Io("warning", s)(nt.triangleUpOutline)), (t[133] = s), (t[134] = _));
    else _ = t[134];
    i = _;
    let S;
    if (t[135] === Symbol.for("react.memo_cache_sentinel"))
      ((S = Mu.jsx(mr, {
        action: "select:accept",
        context: "Select",
        fallback: "Enter",
        description: "auth",
      })),
        (t[135] = S));
    else S = t[135];
    a = S;
  } else {
    let _;
    if (t[136] !== s) ((_ = Io("error", s)(nt.cross)), (t[136] = s), (t[137] = _));
    else _ = t[137];
    ((i = _), (a = "failed"));
  }
  if (n.indented) {
    let _ = !r,
      S;
    if (t[138] !== _)
      ((S = Mu.jsx(w, {
        dimColor: _,
        children: "\u2514 ",
      })),
        (t[138] = _),
        (t[139] = S));
    else S = t[139];
    let A = r ? "suggestion" : void 0,
      v;
    if (t[140] !== n.name || t[141] !== A)
      ((v = Mu.jsx(w, {
        color: A,
        children: n.name,
      })),
        (t[140] = n.name),
        (t[141] = A),
        (t[142] = v));
    else v = t[142];
    let C = !r,
      x;
    if (t[143] === Symbol.for("react.memo_cache_sentinel"))
      ((x = Mu.jsx(pE, {
        color: "userMessageBackground",
        textColor: "text",
        children: "MCP",
      })),
        (t[143] = x));
    else x = t[143];
    let I;
    if (t[144] !== C)
      ((I = Mu.jsxs(w, {
        dimColor: C,
        children: [" ", x],
      })),
        (t[144] = C),
        (t[145] = I));
    else I = t[145];
    let k = !r,
      D;
    if (t[146] !== i || t[147] !== k)
      ((D = Mu.jsxs(w, {
        dimColor: k,
        children: [" \xB7 ", i, " "],
      })),
        (t[146] = i),
        (t[147] = k),
        (t[148] = D));
    else D = t[148];
    let P = !r,
      O;
    if (t[149] !== a || t[150] !== P)
      ((O = Mu.jsx(w, {
        dimColor: P,
        children: a,
      })),
        (t[149] = a),
        (t[150] = P),
        (t[151] = O));
    else O = t[151];
    let L;
    if (t[152] !== O || t[153] !== S || t[154] !== v || t[155] !== I || t[156] !== D)
      ((L = Mu.jsxs(w, {
        children: [S, v, I, D, O],
      })),
        (t[152] = O),
        (t[153] = S),
        (t[154] = v),
        (t[155] = I),
        (t[156] = D),
        (t[157] = L));
    else L = t[157];
    let M;
    if (t[158] !== r || t[159] !== L)
      ((M = Mu.jsx(mH, {
        isFocused: r,
        styled: false,
        children: L,
      })),
        (t[158] = r),
        (t[159] = L),
        (t[160] = M));
    else M = t[160];
    return M;
  }
  let l = r ? "suggestion" : void 0,
    c;
  if (t[161] !== n.name || t[162] !== l)
    ((c = Mu.jsx(w, {
      color: l,
      children: n.name,
    })),
      (t[161] = n.name),
      (t[162] = l),
      (t[163] = c));
  else c = t[163];
  let u = !r,
    d;
  if (t[164] === Symbol.for("react.memo_cache_sentinel"))
    ((d = Mu.jsx(pE, {
      color: "userMessageBackground",
      textColor: "text",
      children: "MCP",
    })),
      (t[164] = d));
  else d = t[164];
  let p;
  if (t[165] !== u)
    ((p = Mu.jsxs(w, {
      dimColor: u,
      children: [" ", d],
    })),
      (t[165] = u),
      (t[166] = p));
  else p = t[166];
  let f = !r,
    m;
  if (t[167] !== i || t[168] !== f)
    ((m = Mu.jsxs(w, {
      dimColor: f,
      children: [" \xB7 ", i, " "],
    })),
      (t[167] = i),
      (t[168] = f),
      (t[169] = m));
  else m = t[169];
  let g = !r,
    h;
  if (t[170] !== a || t[171] !== g)
    ((h = Mu.jsx(w, {
      dimColor: g,
      children: a,
    })),
      (t[170] = a),
      (t[171] = g),
      (t[172] = h));
  else h = t[172];
  let y;
  if (t[173] !== c || t[174] !== p || t[175] !== m || t[176] !== h)
    ((y = Mu.jsxs(w, {
      children: [c, p, m, h],
    })),
      (t[173] = c),
      (t[174] = p),
      (t[175] = m),
      (t[176] = h),
      (t[177] = y));
  else y = t[177];
  let b;
  if (t[178] !== r || t[179] !== y)
    ((b = Mu.jsx(mH, {
      isFocused: r,
      styled: false,
      children: y,
    })),
      (t[178] = r),
      (t[179] = y),
      (t[180] = b));
  else b = t[180];
  return b;
}
var Ijl, Mu, uBf, dBf;
