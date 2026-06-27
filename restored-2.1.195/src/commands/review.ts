// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X2o
// matched 2.1.88 source: src/commands/review.ts
// class=modified  jaccard=0.1581  score=0.2136  fileCov=0.3783
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var X2o = E(() => {
  VXn();
  MMe();
  ((MWf = {
    type: "prompt",
    name: "review",
    description: "Review a GitHub pull request; for your working diff use /code-review",
    argumentHint: "[pr number]",
    effort: "medium",
    progressMessage: "reviewing pull request",
    contentLength: 0,
    source: "builtin",
    async getPromptForCommand(e) {
      let [t = "", ...n] = e.trim().split(/\s+/),
        r = t.replaceAll("`", "").replace(/^#/, "");
      return [
        {
          type: "text",
          text: r ? PWf(r, n.join(" ")) : DWf,
        },
      ];
    },
  }),
    (v9l = {
      type: "local-jsx",
      name: "ultrareview",
      get description() {
        return `Start a cloud agent that finds and verifies bugs in your branch (${nQ()}, ${PMe()} USD) \xB7 Runs in Claude Code on the web. See ${LWf}`;
      },
      isEnabled: () => W6(),
      load: () => Promise.resolve().then(() => (T9l(), A9l)),
    }),
    (rsr = MWf));
});
var I9l = {};
_t(I9l, {
  call: () => call,
});
function $Wf(e) {
  let t = w9l.c(15),
    { onDone: n } = e,
    r = Ht(UWf),
    [o, s] = osr.useState(""),
    i,
    a;
  if (t[0] !== r)
    ((i = () => {
      if (!r) return;
      let u = r;
      (async function () {
        let f = await C9l.toString(u, {
          type: "utf8",
          errorCorrectionLevel: "L",
          margin: 0,
        });
        s(f);
      })().catch(BWf);
    }),
      (a = [r]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a));
  else ((i = t[1]), (a = t[2]));
  osr.useEffect(i, a);
  let l;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((l = {
      context: "Confirmation",
    }),
      (t[3] = l));
  else l = t[3];
  if (($r("confirm:no", n, l), !r)) {
    let u, d;
    if (t[4] === Symbol.for("react.memo_cache_sentinel"))
      ((u = Vk.jsx(U, {
        marginBottom: 1,
        children: Vk.jsx(w, {
          bold: true,
          children: "Cloud session",
        }),
      })),
        (d = vl()
          ? Vk.jsx(w, {
              children: LO("fanout")
                ? "This session's browser link isn't available from this view."
                : "This session is connected directly and has no browser link \u2014 only sessions started with `claude --cloud` can be opened in the browser.",
            })
          : Vk.jsx(w, {
              color: "warning",
              children: "Not in remote mode. Start with `claude --cloud` to use this command.",
            })),
        (t[4] = u),
        (t[5] = d));
    else ((u = t[4]), (d = t[5]));
    let p;
    if (t[6] === Symbol.for("react.memo_cache_sentinel"))
      ((p = Vk.jsxs(Fu, {
        children: [
          u,
          d,
          Vk.jsx(U, {
            marginTop: 1,
            children: Vk.jsx(vb, {
              children: Vk.jsx(ht, {
                chord: "escape",
                action: "close",
              }),
            }),
          }),
        ],
      })),
        (t[6] = p));
    else p = t[6];
    return p;
  }
  let c;
  if (t[7] !== o || t[8] !== r) {
    let u = o
        .split(
          `
`,
        )
        .filter(NWf),
      d = u.length === 0,
      p;
    if (t[10] === Symbol.for("react.memo_cache_sentinel"))
      ((p = Vk.jsx(U, {
        marginBottom: 1,
        children: Vk.jsx(w, {
          bold: true,
          children: "Cloud session",
        }),
      })),
        (t[10] = p));
    else p = t[10];
    let f;
    if (t[11] === Symbol.for("react.memo_cache_sentinel"))
      ((f = Vk.jsx(w, {
        dimColor: true,
        children: "Open in browser: ",
      })),
        (t[11] = f));
    else f = t[11];
    let m;
    if (t[12] !== r)
      ((m = Vk.jsxs(U, {
        children: [
          f,
          Vk.jsx(w, {
            color: "ide",
            children: r,
          }),
        ],
      })),
        (t[12] = r),
        (t[13] = m));
    else m = t[13];
    let g;
    if (t[14] === Symbol.for("react.memo_cache_sentinel"))
      ((g = Vk.jsx(U, {
        marginBottom: 1,
        children: Vk.jsx(vb, {
          children: Vk.jsx(ht, {
            chord: "escape",
            action: "cancel",
            parens: true,
          }),
        }),
      })),
        (t[14] = g));
    else g = t[14];
    ((c = Vk.jsxs(Fu, {
      children: [
        p,
        m,
        g,
        d
          ? Vk.jsx(w, {
              dimColor: true,
              children: "Generating QR code\u2026",
            })
          : u.map(OWf),
      ],
    })),
      (t[7] = o),
      (t[8] = r),
      (t[9] = c));
  } else c = t[9];
  return c;
}
function OWf(e, t) {
  return Vk.jsx(
    w,
    {
      children: e,
    },
    t,
  );
}
function NWf(e) {
  return e.length > 0;
}
function BWf(e) {
  T("QR code generation failed", e);
}
function UWf(e) {
  return e.remoteSessionUrl;
}
var w9l,
  C9l,
  osr,
  Vk,
  call = async (e) =>
    Vk.jsx($Wf, {
      onDone: e,
    });
