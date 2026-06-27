// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jal
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0084  score=0.5226  fileCov=0.0085
// note: nearest: src/screens/REPL.tsx (0.0084); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Jal = E(() => {
  Ye();
  cEe();
  Xa();
  si();
  ql();
  FCo();
  vMe();
  gIo();
  vy();
  Val();
  _i();
  es();
  UX();
  Fh();
  Q8();
  uo();
  iKn();
  bm();
  aKn();
  WMe = R(lt(), 1), lKn = R(rt(), 1), Yal = require("path"), Xi = R(se(), 1);
});
function nif(e) {
  let n = [...e].filter(o => {
    let s = o.codePointAt(0) ?? 0;
    if (s < 32 || s === 127) return !1;
    if (s >= 128 && s <= 159) return !1;
    if (s >= 8203 && s <= 8207 || s >= 8234 && s <= 8238 || s >= 8294 && s <= 8297 || s === 65279) return !1;
    return !0;
  }).join("").trim();
  return (n.length > 64 ? `${n.slice(0, 64)}\u2026` : n) || "agent";
}
function rif(e) {
  let t = e,
    n = tif.find(o => t.startsWith(o));
  if (n) t = t.slice(n.length);
  let r = t.lastIndexOf(hIo) + hIo.length;
  if (r > hIo.length - 1) {
    let o = t.slice(r);
    if (D8n.includes(o)) t = t.slice(0, r);
  }
  return t.replace(/^<agent-message[^>]*>\n/, "").replace(/\n<\/agent-message>$/, "");
}
function Zal(e) {
  let t = Qal.c(20),
    {
      addMargin: n,
      param: r,
      fromName: o,
      isTranscriptMode: s
    } = e,
    i;
  if (t[0] !== o) i = nif(o), t[0] = o, t[1] = i;else i = t[1];
  let a = i,
    l = typeof r.text === "string" ? r.text : "",
    c = $0("app:toggleTranscript", "Global", "ctrl+o");
  if (!s) {
    let h = n ? 1 : 0,
      y;
    if (t[2] !== c) y = kAe.jsx(ht, {
      chord: c,
      action: "expand",
      parens: !0
    }), t[2] = c, t[3] = y;else y = t[3];
    let b;
    if (t[4] !== a || t[5] !== y) b = kAe.jsxs(w, {
      dimColor: !0,
      children: [nt.pointerSmall, " Message from ", a, " ", y]
    }), t[4] = a, t[5] = y, t[6] = b;else b = t[6];
    let _;
    if (t[7] !== h || t[8] !== b) _ = kAe.jsx(U, {
      marginTop: h,
      width: "100%",
      children: b
    }), t[7] = h, t[8] = b, t[9] = _;else _ = t[9];
    return _;
  }
  let u = n ? 1 : 0,
    d = `${nt.pointerSmall} Message from ${a}`,
    p;
  if (t[10] !== d) p = kAe.jsx(w, {
    dimColor: !0,
    children: d
  }), t[10] = d, t[11] = p;else p = t[11];
  let f;
  if (t[12] !== l) f = rif(l), t[12] = l, t[13] = f;else f = t[13];
  let m;
  if (t[14] !== f) m = kAe.jsx(U, {
    paddingLeft: 2,
    children: kAe.jsx(w, {
      wrap: "wrap",
      children: f
    })
  }), t[14] = f, t[15] = m;else m = t[15];
  let g;
  if (t[16] !== u || t[17] !== p || t[18] !== m) g = kAe.jsxs(U, {
    flexDirection: "column",
    marginTop: u,
    width: "100%",
    children: [p, m]
  }), t[16] = u, t[17] = p, t[18] = m, t[19] = g;else g = t[19];
  return g;
}
var Qal,
  kAe,
  tif,
  hIo = "</agent-message>";