// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pzl
// matched 2.1.88 source: src/components/permissions/rules/PermissionRuleInput.tsx
// class=modified  jaccard=0.2143  score=0.4496  fileCov=0.2905
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var pzl = E(() => {
  Vl();
  Ye();
  $I();
  QH();
  zNo();
  lg();
  vf();
  dr();
  sr();
  vi();
  $jo();
  ((uzl = R(lt(), 1)), (ime = R(se(), 1)));
});
function mzl(e) {
  let t = fzl.c(18),
    { onCancel: n, onSubmit: r, ruleBehavior: o } = e,
    [s, i] = Ojo.useState(""),
    [a, l] = Ojo.useState(0),
    c;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((c = {
      context: "Settings",
    }),
      (t[0] = c));
  else c = t[0];
  $r("confirm:no", n, c);
  let { columns: u } = br(),
    d = u - 6,
    p;
  if (t[1] !== r || t[2] !== o)
    ((p = (v) => {
      let C = v.trim();
      if (C.length === 0) return;
      let x = Ig(C);
      r(x, o);
    }),
      (t[1] = r),
      (t[2] = o),
      (t[3] = p));
  else p = t[3];
  let f = p,
    m = `Add ${o} permission rule`,
    g;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((g = Vq.jsxs(Tn, {
      children: [
        Vq.jsx(ht, {
          chord: "enter",
          action: "submit",
        }),
        Vq.jsx(ht, {
          chord: "escape",
          action: "cancel",
        }),
      ],
    })),
      (t[4] = g));
  else g = t[4];
  let h;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) ((h = Vq.jsx(HW, {})), (t[5] = h));
  else h = t[5];
  let y, b;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((y = Vq.jsx(w, {
      bold: !0,
      children: Pp({
        toolName: FF.name,
      }),
    })),
      (b = Vq.jsx(w, {
        bold: !1,
        children: " or ",
      })),
      (t[6] = y),
      (t[7] = b));
  else ((y = t[6]), (b = t[7]));
  let _;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = Vq.jsxs(w, {
      children: [
        "Permission rules are a tool name, optionally followed by a specifier in parentheses.",
        h,
        "e.g.,",
        " ",
        y,
        b,
        Vq.jsx(w, {
          bold: !0,
          children: Pp({
            toolName: cl.name,
            ruleContent: "ls *",
          }),
        }),
      ],
    })),
      (t[8] = _));
  else _ = t[8];
  let S;
  if (t[9] !== a || t[10] !== f || t[11] !== s || t[12] !== d)
    ((S = Vq.jsxs(U, {
      flexDirection: "column",
      children: [
        _,
        Vq.jsx(U, {
          borderDimColor: !0,
          borderStyle: "round",
          marginY: 1,
          paddingLeft: 1,
          children: Vq.jsx(Ta, {
            showCursor: !0,
            value: s,
            onChange: i,
            onSubmit: f,
            placeholder: `Enter permission rule${nt.ellipsis}`,
            columns: d,
            cursorOffset: a,
            onChangeCursorOffset: l,
          }),
        }),
      ],
    })),
      (t[9] = a),
      (t[10] = f),
      (t[11] = s),
      (t[12] = d),
      (t[13] = S));
  else S = t[13];
  let A;
  if (t[14] !== n || t[15] !== m || t[16] !== S)
    ((A = Vq.jsx(zn, {
      title: m,
      onCancel: n,
      color: "permission",
      isCancelActive: !1,
      inputGuide: g,
      children: S,
    })),
      (t[14] = n),
      (t[15] = m),
      (t[16] = S),
      (t[17] = A));
  else A = t[17];
  return A;
}
var fzl, Ojo, Vq;
