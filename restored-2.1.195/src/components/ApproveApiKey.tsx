// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LMc
// matched 2.1.88 source: src/components/ApproveApiKey.tsx
// class=modified  jaccard=0.2003  score=0.2794  fileCov=0.4143
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var LMc = E(() => {
  Hp();
  kt();
  EC();
  Rc();
  FK();
  nUt();
  Ye();
  gSe();
  Gx();
  vn();
  ((kMc = R(lt(), 1)), (Svt = R(rt(), 1)), (E2 = R(se(), 1)));
});
var PMc = {};
_t(PMc, {
  ApproveApiKey: () => ApproveApiKey,
});
function ApproveApiKey(e) {
  let t = DMc.c(16),
    { customApiKeyTruncated: n, onDone: r } = e,
    o;
  if (t[0] !== n || t[1] !== r)
    ((o = function (m) {
      e: switch (m) {
        case "yes": {
          (gn((g) => ({
            ...g,
            customApiKeyResponses: {
              ...g.customApiKeyResponses,
              approved: [...(g.customApiKeyResponses?.approved ?? []), n],
            },
          })),
            r(!0));
          break e;
        }
        case "no":
          (gn((g) => ({
            ...g,
            customApiKeyResponses: {
              ...g.customApiKeyResponses,
              rejected: [...(g.customApiKeyResponses?.rejected ?? []), n],
            },
          })),
            r(!1));
      }
    }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o));
  else o = t[2];
  let s = o,
    i;
  if (t[3] !== s) ((i = () => s("no")), (t[3] = s), (t[4] = i));
  else i = t[4];
  let a;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((a = zme.jsx(w, {
      bold: !0,
      children: "ANTHROPIC_API_KEY",
    })),
      (t[5] = a));
  else a = t[5];
  let l;
  if (t[6] !== n)
    ((l = zme.jsxs(w, {
      children: [
        a,
        zme.jsxs(w, {
          children: [": sk-ant-...", n],
        }),
      ],
    })),
      (t[6] = n),
      (t[7] = l));
  else l = t[7];
  let c;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((c = zme.jsx(w, {
      children: "Do you want to use this API key?",
    })),
      (t[8] = c));
  else c = t[8];
  let u;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((u = zme.jsxs(w, {
      children: [
        "No (",
        zme.jsx(w, {
          bold: !0,
          children: "recommended",
        }),
        ")",
      ],
    })),
      (t[9] = u));
  else u = t[9];
  let d;
  if (t[10] !== s)
    ((d = zme.jsx(Kl, {
      focus: "cancel",
      cancelLabel: u,
      onConfirm: () => s("yes"),
      onCancel: () => s("no"),
    })),
      (t[10] = s),
      (t[11] = d));
  else d = t[11];
  let p;
  if (t[12] !== i || t[13] !== l || t[14] !== d)
    ((p = zme.jsxs(zn, {
      title: "Detected a custom API key in your environment",
      color: "warning",
      onCancel: i,
      children: [l, c, d],
    })),
      (t[12] = i),
      (t[13] = l),
      (t[14] = d),
      (t[15] = p));
  else p = t[15];
  return p;
}
var DMc, zme;
