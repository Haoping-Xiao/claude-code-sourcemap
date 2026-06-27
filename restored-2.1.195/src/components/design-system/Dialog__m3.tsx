// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U8l
// matched 2.1.88 source: src/components/design-system/Dialog.tsx
// class=modified (alt of src/components/design-system/Dialog.tsx)  jaccard=0.1192  score=0.1468  fileCov=0.3882
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var U8l = E(() => {
  kt();
  fn();
  At();
  sa();
  pq();
  U6t();
  $7();
  ((dsr = require("fs/promises")), (gJt = require("path")));
});
function psr(e) {
  let t = F8l.c(49),
    { script: n, defaultName: r, onDone: o } = e,
    { columns: s } = br(),
    [i, a] = lYe.useState(r),
    [l, c] = lYe.useState(r.length),
    [u, d] = lYe.useState("project"),
    [p, f] = lYe.useState(false),
    [m, g] = lYe.useState(null),
    [h, y] = lYe.useState(null),
    b;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((b = () => {
      (g(null), y(null));
    }),
      (t[0] = b));
  else b = t[0];
  let _ = b,
    S;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((S = (de) => {
      (a(de), _());
    }),
      (t[1] = S));
  else S = t[1];
  let A = S,
    v;
  if (t[2] !== m || t[3] !== i || t[4] !== o || t[5] !== p || t[6] !== u || t[7] !== n)
    ((v = () => {
      if (p) return;
      let de = i.trim();
      if (!de) return;
      (f(true),
        y(null),
        B8l({
          name: de,
          scope: u,
          script: n,
          overwrite: m !== null,
          cwd: $t(),
        })
          .then((Ee) => {
            o(
              `Dynamic workflow saved to ${Ee.path}. Invoke as /${Ee.name} or Workflow({name: "${Ee.name}"}) in future sessions.`,
            );
          })
          .catch((Ee) => {
            let me = Ee instanceof Error ? Ee.message : String(Ee);
            if (me.includes("already exists")) {
              let pe = me.match(/at (.+?)\. /);
              g(pe?.[1] ?? "(unknown path)");
            } else y(me);
            f(false);
          }));
    }),
      (t[2] = m),
      (t[3] = i),
      (t[4] = o),
      (t[5] = p),
      (t[6] = u),
      (t[7] = n),
      (t[8] = v));
  else v = t[8];
  let C = v,
    x;
  if (t[9] !== o) ((x = () => o()), (t[9] = o), (t[10] = x));
  else x = t[10];
  let I = x,
    k;
  if (t[11] === Symbol.for("react.memo_cache_sentinel"))
    ((k = {
      context: "Settings",
      isActive: true,
    }),
      (t[11] = k));
  else k = t[11];
  $r("confirm:no", I, k);
  let D;
  if (t[12] === Symbol.for("react.memo_cache_sentinel"))
    ((D = (de) => {
      if (de.key === "tab") (de.preventDefault(), d(E5f), _());
    }),
      (t[12] = D));
  else D = t[12];
  let P = D,
    O;
  if (t[13] !== i) ((O = N_e(i.trim() || "workflow")), (t[13] = i), (t[14] = O));
  else O = t[14];
  let L = O,
    M = u === "project" ? `.claude/workflows/${L}.js` : `~/.claude/workflows/${L}.js`,
    N = u === "project" ? "Project" : "User",
    B;
  if (t[15] !== N || t[16] !== M)
    ((B = ZL.jsxs(w, {
      dimColor: true,
      children: [N, " scope \xB7 ", M],
    })),
      (t[15] = N),
      (t[16] = M),
      (t[17] = B));
  else B = t[17];
  let $ = m ? "overwrite" : "save",
    q;
  if (t[18] !== $)
    ((q = ZL.jsx(ht, {
      chord: "enter",
      action: $,
    })),
      (t[18] = $),
      (t[19] = q));
  else q = t[19];
  let W, V;
  if (t[20] === Symbol.for("react.memo_cache_sentinel"))
    ((W = ZL.jsx(ht, {
      chord: "tab",
      action: "toggle scope",
    })),
      (V = ZL.jsx(ht, {
        chord: "escape",
        action: "cancel",
      })),
      (t[20] = W),
      (t[21] = V));
  else ((W = t[20]), (V = t[21]));
  let Y;
  if (t[22] !== q)
    ((Y = ZL.jsxs(Tn, {
      children: [q, W, V],
    })),
      (t[22] = q),
      (t[23] = Y));
  else Y = t[23];
  let z;
  if (t[24] === Symbol.for("react.memo_cache_sentinel"))
    ((z = ZL.jsx(w, {
      children: "Save as:",
    })),
      (t[24] = z));
  else z = t[24];
  let K;
  if (t[25] === Symbol.for("react.memo_cache_sentinel"))
    ((K = ZL.jsx(w, {
      children: ">",
    })),
      (t[25] = K));
  else K = t[25];
  let Z = !p,
    J = !p,
    ne;
  if (t[26] !== s || t[27] !== l || t[28] !== C || t[29] !== i || t[30] !== Z || t[31] !== J)
    ((ne = ZL.jsxs(U, {
      flexDirection: "row",
      gap: 1,
      marginTop: 1,
      children: [
        K,
        ZL.jsx(Ta, {
          value: i,
          onChange: A,
          onSubmit: C,
          focus: Z,
          showCursor: J,
          columns: s,
          cursorOffset: l,
          onChangeCursorOffset: c,
        }),
      ],
    })),
      (t[26] = s),
      (t[27] = l),
      (t[28] = C),
      (t[29] = i),
      (t[30] = Z),
      (t[31] = J),
      (t[32] = ne));
  else ne = t[32];
  let oe;
  if (t[33] !== m)
    ((oe =
      m &&
      ZL.jsx(U, {
        marginTop: 1,
        children: ZL.jsxs(w, {
          color: "warning",
          children: [m, " already exists. Press Enter again to overwrite, or change the name."],
        }),
      })),
      (t[33] = m),
      (t[34] = oe));
  else oe = t[34];
  let re;
  if (t[35] !== h)
    ((re =
      h &&
      ZL.jsx(U, {
        marginTop: 1,
        children: ZL.jsx(Va, {
          error: h,
        }),
      })),
      (t[35] = h),
      (t[36] = re));
  else re = t[36];
  let ee;
  if (t[37] !== p)
    ((ee =
      p &&
      ZL.jsx(U, {
        marginTop: 1,
        children: ZL.jsx(w, {
          dimColor: true,
          children: "Saving\u2026",
        }),
      })),
      (t[37] = p),
      (t[38] = ee));
  else ee = t[38];
  let ce;
  if (t[39] !== ne || t[40] !== oe || t[41] !== re || t[42] !== ee)
    ((ce = ZL.jsxs(U, {
      flexDirection: "column",
      children: [z, ne, oe, re, ee],
    })),
      (t[39] = ne),
      (t[40] = oe),
      (t[41] = re),
      (t[42] = ee),
      (t[43] = ce));
  else ce = t[43];
  let ae;
  if (t[44] !== I || t[45] !== Y || t[46] !== ce || t[47] !== B)
    ((ae = ZL.jsx(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: P,
      children: ZL.jsx(zn, {
        title: "Save dynamic workflow",
        subtitle: B,
        onCancel: I,
        color: "permission",
        isCancelActive: false,
        inputGuide: Y,
        children: ce,
      }),
    })),
      (t[44] = I),
      (t[45] = Y),
      (t[46] = ce),
      (t[47] = B),
      (t[48] = ae));
  else ae = t[48];
  return ae;
}
function E5f(e) {
  return e === "project" ? "user" : "project";
}
var F8l, lYe, ZL;
