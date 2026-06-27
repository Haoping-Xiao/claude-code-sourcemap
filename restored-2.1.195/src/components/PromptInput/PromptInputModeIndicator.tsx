// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J_c
// matched 2.1.88 source: src/components/PromptInput/PromptInputModeIndicator.tsx
// class=modified  jaccard=0.2644  score=0.7069  fileCov=0.2969
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var J_c = E(() => {
  ft();
  rJt();
  w4();
  _i();
  y0e();
  Ye();
  z1();
  xjt();
  uo();
  uf();
  ZYt();
  K$e();
  OTt();
  E8o();
  adr();
  F_c();
  OUt();
  rBo();
  z6o();
  ((K6o = R(lt(), 1)), (Y_c = R(rt(), 1)), (eB = R(se(), 1)));
  X_c = Y_c.memo(Smm);
});
function vmm() {
  if (!el()) return;
  let e = Sv();
  if (!e) return;
  if (Ky.includes(e)) return C$[e];
  return;
}
function Q_c(e) {
  let t = Y6o.c(3),
    { isLoading: n, themeColor: r } = e,
    s = r ?? void 0,
    i;
  if (t[0] !== s || t[1] !== n)
    ((i = E7e.jsxs(w, {
      color: s,
      dimColor: n,
      children: [nt.pointer, "\xA0"],
    })),
      (t[0] = s),
      (t[1] = n),
      (t[2] = i));
  else i = t[2];
  return i;
}
function X6o(e) {
  let t = Y6o.c(6),
    { mode: n, isLoading: r, viewingAgentName: o, viewingAgentColor: s } = e,
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((i = vmm()), (t[0] = i));
  else i = t[0];
  let a = i,
    l = s ? C$[s] : void 0,
    c;
  if (t[1] !== r || t[2] !== n || t[3] !== l || t[4] !== o)
    ((c = E7e.jsx(U, {
      "aria-hidden": true,
      alignItems: "flex-start",
      alignSelf: "flex-start",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      children: o
        ? E7e.jsx(Q_c, {
            isLoading: r,
            themeColor: l,
          })
        : n === "bash"
          ? E7e.jsx(w, {
              color: "bashBorder",
              dimColor: r,
              children: "!\xA0",
            })
          : E7e.jsx(Q_c, {
              isLoading: r,
              themeColor: el() ? a : void 0,
            }),
    })),
      (t[1] = r),
      (t[2] = n),
      (t[3] = l),
      (t[4] = o),
      (t[5] = c));
  else c = t[5];
  return c;
}
var Y6o, E7e;
