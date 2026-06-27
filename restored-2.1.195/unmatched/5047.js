// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DKl
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/sql.js
// class=new  jaccard=0.0151  score=0.1674  fileCov=0.0164
// note: nearest: node_modules/highlight.js/lib/languages/sql.js (0.0151); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var DKl = E(() => {
  _Vf = {
    type: "local-jsx",
    name: "hooks",
    description: "View hook configurations for tool events",
    immediate: !0,
    load: () => Promise.resolve().then(() => (RKl(), xKl))
  }, LKl = _Vf;
});
function MKl(e, t) {
  return e.length > t ? e.slice(0, t - 1) + "\u2026" : e;
}
function $Kl(e) {
  let t = Zjo.c(93),
    {
      loops: n,
      onDelete: r,
      onCreate: o,
      onCancel: s
    } = e,
    [i, a] = tTe.useState("list"),
    [l, c] = tTe.useState(0),
    [u, d] = tTe.useState("every"),
    [p, f] = tTe.useState("10m"),
    [m, g] = tTe.useState(3),
    [h, y] = tTe.useState(""),
    [b, _] = tTe.useState(0),
    [S, A] = tTe.useState(u === "every" ? "interval" : "text"),
    {
      columns: v
    } = br(),
    C;
  if (t[0] !== n.length) C = {
    "select:previous": () => c(vt => n.length ? Math.max(0, vt - 1) : 0),
    "select:next": () => c(vt => n.length ? Math.min(n.length - 1, vt + 1) : 0)
  }, t[0] = n.length, t[1] = C;else C = t[1];
  let x = i === "list",
    I;
  if (t[2] !== x) I = {
    context: "Select",
    isActive: x
  }, t[2] = x, t[3] = I;else I = t[3];
  No(C, I);
  let k;
  if (t[4] !== n || t[5] !== u || t[6] !== s || t[7] !== r || t[8] !== l || t[9] !== i) k = vt => {
    if (i !== "list") return;
    if (vt.key === "escape") {
      vt.preventDefault(), s();
      return;
    }
    if (vt.key === "d" && n[l]) {
      vt.preventDefault(), r(n[l]), c(jt => Math.max(0, Math.min(jt, n.length - 2)));
      return;
    }
    if (vt.key === "n") vt.preventDefault(), a("create"), A(u === "every" ? "interval" : "text");
  }, t[4] = n, t[5] = u, t[6] = s, t[7] = r, t[8] = l, t[9] = i, t[10] = k;else k = t[10];
  let D = k,
    P;
  if (t[11] !== u) P = () => {
    let vt = u === "every" ? "until" : "every";
    d(vt), A(vt === "every" ? "interval" : "text");
  }, t[11] = u, t[12] = P;else P = t[12];
  let O = P,
    L;
  if (t[13] !== S || t[14] !== p || t[15] !== m || t[16] !== u || t[17] !== h.length || t[18] !== b || t[19] !== O || t[20] !== i) L = vt => {
    if (i !== "create") return;
    if (vt.key === "escape") {
      vt.preventDefault(), a("list");
      return;
    }
    if (vt.key === "tab") {
      vt.preventDefault(), O();
      return;
    }
    let jt = S === "interval" ? m : b,
      en = S === "interval" ? p.length : h.length;
    if (vt.key === "left" && jt === 0 || vt.key === "right" && jt >= en) {
      vt.preventDefault(), O();
      return;
    }
    if (u === "every" && (vt.key === "down" || vt.key === "up")) vt.preventDefault(), A(bVf);
  }, t[13] = S, t[14] = p, t[15] = m, t[16] = u, t[17] = h.length, t[18] = b, t[19] = O, t[20] = i, t[21] = L;else L = t[21];
  let M = L,
    N;
  if (t[22] !== p || t[23] !== u || t[24] !== o || t[25] !== h) N = function () {
    let jt = h.trim();
    if (u === "every") {
      if (!p.trim() || !jt) return;
      o({
        kind: "cron",
        interval: p.trim(),
        prompt: jt
      });
    } else {
      if (!jt) return;
      o({
        kind: "stophook",
        condition: jt
      });
    }
  }, t[22] = p, t[23] = u, t[24] = o, t[25] = h, t[26] = N;else N = t[26];
  let B = N,
    $;
  if (t[27] !== n.length) $ = n.length > 0 && Zg.jsx(ht, {
    chord: ["up", "down"],
    action: "select"
  }), t[27] = n.length, t[28] = $;else $ = t[28];
  let q;
  if (t[29] !== n.length) q = n.length > 0 && Zg.jsx(ht, {
    chord: "d",
    action: "delete"
  }), t[29] = n.length, t[30] = q;else q = t[30];
  let W, V;
  if (t[31] === Symbol.for("react.memo_cache_sentinel")) W = Zg.jsx(ht, {
    chord: "n",
    action: "add"
  }), V = Zg.jsx(ht, {
    chord: "escape",
    action: "close"
  }), t[31] = W, t[32] = V;else W = t[31], V = t[32];
  let Y;
  if (t[33] !== $ || t[34] !== q) Y = Zg.jsxs(Tn, {
    children: [$, q, W, V]
  }), t[33] = $, t[34] = q, t[35] = Y;else Y = t[35];
  let z = Y,
    K;
  if (t[36] === Symbol.for("react.memo_cache_sentinel")) K = Zg.jsx(ht, {
    chord: "tab",
    action: "switch mode"
  }), t[36] = K;else K = t[36];
  let Z;
  if (t[37] !== u) Z = u === "every" && Zg.jsx(ht, {
    chord: ["up", "down"],
    action: "next field"
  }), t[37] = u, t[38] = Z;else Z = t[38];
  let J, ne;
  if (t[39] === Symbol.for("react.memo_cache_sentinel")) J = Zg.jsx(ht, {
    chord: "enter",
    action: "create"
  }), ne = Zg.jsx(ht, {
    chord: "escape",
    action: "back"
  }), t[39] = J, t[40] = ne;else J = t[39], ne = t[40];
  let oe;
  if (t[41] !== Z) oe = Zg.jsxs(Tn, {
    children: [K, Z, J, ne]
  }), t[41] = Z, t[42] = oe;else oe = t[42];
  let re = oe,
    ee = u !== "every",
    ce = u === "every" ? nt.radioOn : nt.radioOff,
    ae;
  if (t[43] !== ee || t[44] !== ce) ae = Zg.jsxs(w, {
    dimColor: ee,
    children: [ce, " every"]
  }), t[43] = ee, t[44] = ce, t[45] = ae;else ae = t[45];
  let de;
  if (t[46] === Symbol.for("react.memo_cache_sentinel")) de = Zg.jsx(w, {
    dimColor: !0,
    children: "  "
  }), t[46] = de;else de = t[46];
  let Ee = u !== "until",
    me = u === "until" ? nt.radioOn : nt.radioOff,
    pe;
  if (t[47] !== Ee || t[48] !== me) pe = Zg.jsxs(w, {
    dimColor: Ee,
    children: [me, " until"]
  }), t[47] = Ee, t[48] = me, t[49] = pe;else pe = t[49];
  let ge;
  if (t[50] !== ae || t[51] !== pe) ge = Zg.jsxs(w, {
    children: [ae, de, pe]
  }), t[50] = ae, t[51] = pe, t[52] = ge;else ge = t[52];
  let he;
  if (t[53] !== S || t[54] !== p || t[55] !== m || t[56] !== u) he = u === "every" && Zg.jsxs(U, {
    flexDirection: "row",
    gap: 1,
    marginTop: 1,
    children: [Zg.jsx(w, {
      dimColor: S !== "interval",
      children: "Interval >"
    }), Zg.jsx(Ta, {
      value: p,
      onChange: f,
      onSubmit: () => A("text"),
      focus: S === "interval",
      showCursor: S === "interval",
      multiline: !1,
      columns: 12,
      cursorOffset: m,
      onChangeCursorOffset: g,
      placeholder: "10m",
      disableEscapeDoublePress: !0
    })]
  }), t[53] = S, t[54] = p, t[55] = m, t[56] = u, t[57] = he;else he = t[57];
  let ie = u === "every" && S !== "text",
    le = u === "every" ? "Prompt   >" : "Condition>",
    He;
  if (t[58] !== ie || t[59] !== le) He = Zg.jsx(w, {
    dimColor: ie,
    children: le
  }), t[58] = ie, t[59] = le, t[60] = He;else He = t[60];
  let ye = u === "until" || S === "text",
    ue = u === "until" || S === "text",
    we = v - 16,
    Ce = u === "every" ? "e.g. /babysit-prs" : "e.g. tests pass and PR is merged",
    Ie;
  if (t[61] !== B || t[62] !== ye || t[63] !== ue || t[64] !== we || t[65] !== Ce || t[66] !== h || t[67] !== b) Ie = Zg.jsx(Ta, {
    value: h,
    onChange: y,
    onSubmit: B,
    focus: ye,
    showCursor: ue,
    multiline: !1,
    columns: we,
    cursorOffset: b,
    onChangeCursorOffset: _,
    placeholder: Ce,
    disableEscapeDoublePress: !0
  }), t[61] = B, t[62] = ye, t[63] = ue, t[64] = we, t[65] = Ce, t[66] = h, t[67] = b, t[68] = Ie;else Ie = t[68];
  let Ve;
  if (t[69] !== He || t[70] !== Ie) Ve = Zg.jsxs(U, {
    flexDirection: "row",
    gap: 1,
    marginTop: 1,
    children: [He, Ie]
  }), t[69] = He, t[70] = Ie, t[71] = Ve;else Ve = t[71];
  let Ze;
  if (t[72] !== ge || t[73] !== he || t[74] !== Ve) Ze = Zg.jsxs(U, {
    flexDirection: "column",
    children: [ge, he, Ve]
  }), t[72] = ge, t[73] = he, t[74] = Ve, t[75] = Ze;else Ze = t[75];
  let Be = Ze,
    Me;
  if (t[76] !== n || t[77] !== l) Me = n.length === 0 ? Zg.jsx(Fl, {
    children: "No active loops"
  }) : n.map((vt, jt) => Zg.jsx(SVf, {
    loop: vt,
    focused: jt === l
  }, vt.id)), t[76] = n, t[77] = l, t[78] = Me;else Me = t[78];
  let Ue;
  if (t[79] !== Me) Ue = Zg.jsx(U, {
    flexDirection: "column",
    children: Me
  }), t[79] = Me, t[80] = Ue;else Ue = t[80];
  let tt = Ue,
    bt = i === "list" ? D : M,
    Ke = i === "list" ? "Loops" : "New loop",
    Et = i === "list" ? "Recurring crons and stop-hooks active for this session" : void 0,
    ct;
  if (t[81] !== s || t[82] !== i) ct = i === "list" ? s : () => a("list"), t[81] = s, t[82] = i, t[83] = ct;else ct = t[83];
  let Je = i === "list" ? z : re,
    gt = i === "list" ? tt : Be,
    st;
  if (t[84] !== Ke || t[85] !== Et || t[86] !== ct || t[87] !== Je || t[88] !== gt) st = Zg.jsx(zn, {
    title: Ke,
    subtitle: Et,
    color: "permission",
    onCancel: ct,
    isCancelActive: !1,
    inputGuide: Je,
    children: gt
  }), t[84] = Ke, t[85] = Et, t[86] = ct, t[87] = Je, t[88] = gt, t[89] = st;else st = t[89];
  let xt;
  if (t[90] !== bt || t[91] !== st) xt = Zg.jsx(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: bt,
    children: st
  }), t[90] = bt, t[91] = st, t[92] = xt;else xt = t[92];
  return xt;
}
function bVf(e) {
  return e === "interval" ? "text" : "interval";
}
function SVf(e) {
  let t = Zjo.c(24),
    {
      loop: n,
      focused: r
    } = e;
  if (n.kind === "cron") {
    let c;
    if (t[0] !== n.human) c = Zg.jsx(w, {
      bold: !0,
      children: n.human
    }), t[0] = n.human, t[1] = c;else c = t[1];
    let u;
    if (t[2] === Symbol.for("react.memo_cache_sentinel")) u = Zg.jsx(w, {
      dimColor: !0,
      children: " \xB7 "
    }), t[2] = u;else u = t[2];
    let d;
    if (t[3] !== n.prompt) d = MKl(n.prompt, PKl), t[3] = n.prompt, t[4] = d;else d = t[4];
    let p;
    if (t[5] !== n.id) p = Zg.jsxs(w, {
      dimColor: !0,
      children: [" \xB7 ", n.id]
    }), t[5] = n.id, t[6] = p;else p = t[6];
    let f;
    if (t[7] !== c || t[8] !== d || t[9] !== p) f = Zg.jsxs(w, {
      children: [c, u, d, p]
    }), t[7] = c, t[8] = d, t[9] = p, t[10] = f;else f = t[10];
    let m;
    if (t[11] !== r || t[12] !== f) m = Zg.jsx(mH, {
      isFocused: r,
      children: f
    }), t[11] = r, t[12] = f, t[13] = m;else m = t[13];
    return m;
  }
  let o;
  if (t[14] !== n.condition) o = MKl(n.condition, PKl), t[14] = n.condition, t[15] = o;else o = t[15];
  let s;
  if (t[16] !== o) s = Zg.jsx(w, {
    bold: !0,
    children: o
  }), t[16] = o, t[17] = s;else s = t[17];
  let i;
  if (t[18] === Symbol.for("react.memo_cache_sentinel")) i = Zg.jsx(w, {
    dimColor: !0,
    children: " \xB7 stop-hook"
  }), t[18] = i;else i = t[18];
  let a;
  if (t[19] !== s) a = Zg.jsxs(w, {
    children: ["goal: ", s, i]
  }), t[19] = s, t[20] = a;else a = t[20];
  let l;
  if (t[21] !== r || t[22] !== a) l = Zg.jsx(mH, {
    isFocused: r,
    children: a
  }), t[21] = r, t[22] = a, t[23] = l;else l = t[23];
  return l;
}
var Zjo,
  tTe,
  Zg,
  PKl = 50;