// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eis
// matched 2.1.88 source: src/utils/slowOperations.ts
// class=modified  jaccard=0.3229  score=0.8241  fileCov=0.3468
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var eis = E(() => {
  Owt();
  lss();
  UIt();
  uss();
  hss();
  DEr();
  PEr();
  Ass();
  Tss();
  Pyr();
  xin();
  qwt();
  wss();
  $ss();
  OEr();
  P2();
  Uwt();
  Wss();
  D2();
  Yss();
  OBe();
  FJe();
  VH = {};
  VH[Xss] =
    VH[WYc] =
    VH[n7c] =
    VH[r7c] =
    VH[qYc] =
    VH[VYc] =
    VH[o7c] =
    VH[s7c] =
    VH[i7c] =
    VH[a7c] =
    VH[l7c] =
    VH[YYc] =
    VH[XYc] =
    VH[Qss] =
    VH[JYc] =
    VH[QYc] =
    VH[ZYc] =
    VH[e7c] =
    VH[c7c] =
    VH[u7c] =
    VH[d7c] =
    VH[p7c] =
      !0;
  VH[zYc] = VH[Jss] = VH[t7c] = !1;
  Zss = Din;
});
function m7c() {
  return f7c;
}
function De(e, t, n) {
  using r = gy`JSON.stringify(${e})`;
  return JSON.stringify(e, t, n);
}
function tis(e) {
  return (
    JSON.stringify(e) +
    `
`
  );
}
function nis(e) {
  using t = gy`jsonlJoin(${e.length})`;
  let n = "";
  for (let r = 0; r < e.length; r++)
    n +=
      JSON.stringify(e[r]) +
      `
`;
  return n;
}
function qge(e) {
  return JSON.parse(e);
}
function sM(e, t) {
  using n = gy`structuredClone(${e})`;
  return structuredClone(e, t);
}
function fwe(e, t, n) {
  using r = gy`fs.writeFileSync(${e}, ${t})`;
  if (n !== null && typeof n === "object" && "flush" in n && n.flush === !0) {
    let s = typeof n === "object" && "encoding" in n ? n.encoding : void 0,
      i = typeof n === "object" && "mode" in n ? n.mode : void 0,
      a;
    try {
      ((a = Wge.openSync(e, "w", i)),
        Wge.writeFileSync(a, t, {
          encoding: s ?? void 0,
        }),
        Wge.fsyncSync(a));
    } finally {
      if (a !== void 0) Wge.closeSync(a);
    }
  } else Wge.writeFileSync(e, t, n);
}
var Wge,
  C8m,
  f7c,
  gy,
  Ft = (e, t) => {
    using n = gy`JSON.parse(${e})`;
    return typeof t > "u" ? JSON.parse(e) : JSON.parse(e, t);
  };
