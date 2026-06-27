// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OBo
// matched 2.1.88 source: src/commands/plugin/AddMarketplace.tsx
// class=modified  jaccard=0.3576  score=0.51  fileCov=0.5449
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var OBo = E(() => {
  At();
  ys();
  Mx();
  ((y2l = require("os")), (_2l = require("path")));
});
function S2l(e) {
  let t = b2l.c(41),
    {
      inputValue: n,
      setInputValue: r,
      cursorOffset: o,
      setCursorOffset: s,
      error: i,
      setError: a,
      result: l,
      setResult: c,
      setViewState: u,
      onAddComplete: d,
      cliMode: p,
    } = e,
    f = p === void 0 ? false : p,
    m = BKe.useRef(false),
    [g, h] = BKe.useState(false),
    [y, b] = BKe.useState(""),
    _;
  if (t[0] !== f || t[1] !== n || t[2] !== d || t[3] !== a || t[4] !== c || t[5] !== u)
    ((_ = async () => {
      let V = n.trim();
      if (!V) {
        a("Please enter a marketplace source");
        return;
      }
      let Y = await trr(V);
      if (!Y) {
        a("Invalid marketplace source format. Try: owner/repo, https://..., or ./path");
        return;
      }
      if ("error" in Y) {
        a(Y.error);
        return;
      }
      a(null);
      try {
        (h(true), b(""));
        let { name: z, resolvedSource: K } = await yOe(Y, (ne) => {
          b(ne);
        });
        (RYt(z, {
          source: K,
        }),
          Ah());
        let Z = Y.source;
        if (Y.source === "github") Z = Y.repo;
        G("tengu_marketplace_added", {
          source_type: Z,
        });
        let J = [];
        try {
          J = (await MHe((await OT()).errors)).installed;
        } catch (ne) {
          T(`marketplace add: dep auto-resolve skipped: ${be(ne)}`, {
            level: "warn",
          });
        }
        if (J.length > 0) Ah();
        if ((await d(), b(""), h(false), f)) c(`Successfully added marketplace: ${z}${rue(J)}`);
        else
          u({
            type: "browse-marketplace",
            targetMarketplace: z,
          });
      } catch (z) {
        let Z = Zr(z);
        if (
          (T(`marketplace add failed: ${be(Z)}`, {
            level: "error",
          }),
          a(Z.message),
          b(""),
          h(false),
          f)
        )
          c(`Error: ${Z.message}`);
        else c(null);
      }
    }),
      (t[0] = f),
      (t[1] = n),
      (t[2] = d),
      (t[3] = a),
      (t[4] = c),
      (t[5] = u),
      (t[6] = _));
  else _ = t[6];
  let S = _,
    A;
  if (t[7] !== i || t[8] !== S || t[9] !== n || t[10] !== l)
    ((A = () => {
      if (n && !m.current && !i && !l) ((m.current = true), S());
    }),
      (t[7] = i),
      (t[8] = S),
      (t[9] = n),
      (t[10] = l),
      (t[11] = A));
  else A = t[11];
  let v;
  if (t[12] === Symbol.for("react.memo_cache_sentinel")) ((v = []), (t[12] = v));
  else v = t[12];
  BKe.useEffect(A, v);
  let C;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((C = PH.jsx(U, {
      marginBottom: 1,
      children: PH.jsx(w, {
        bold: true,
        children: "Add Marketplace",
      }),
    })),
      (t[13] = C));
  else C = t[13];
  let x, I, k, D, P, O;
  if (t[14] === Symbol.for("react.memo_cache_sentinel"))
    ((k = PH.jsx(w, {
      children: "Enter marketplace source:",
    })),
      (D = PH.jsx(w, {
        dimColor: true,
        children: "Examples:",
      })),
      (P = PH.jsx(w, {
        dimColor: true,
        children: " \xB7 owner/repo (GitHub)",
      })),
      (O = PH.jsx(w, {
        dimColor: true,
        children: " \xB7 git@github.com:owner/repo.git (SSH)",
      })),
      (x = PH.jsx(w, {
        dimColor: true,
        children: " \xB7 https://example.com/marketplace.json",
      })),
      (I = PH.jsx(w, {
        dimColor: true,
        children: " \xB7 ./path/to/marketplace",
      })),
      (t[14] = x),
      (t[15] = I),
      (t[16] = k),
      (t[17] = D),
      (t[18] = P),
      (t[19] = O));
  else ((x = t[14]), (I = t[15]), (k = t[16]), (D = t[17]), (P = t[18]), (O = t[19]));
  let L;
  if (t[20] !== o || t[21] !== S || t[22] !== n || t[23] !== s || t[24] !== r)
    ((L = PH.jsxs(U, {
      flexDirection: "column",
      children: [
        k,
        D,
        P,
        O,
        x,
        I,
        PH.jsx(U, {
          marginTop: 1,
          children: PH.jsx(Ta, {
            value: n,
            onChange: r,
            onSubmit: S,
            columns: 80,
            cursorOffset: o,
            onChangeCursorOffset: s,
            focus: true,
            showCursor: true,
          }),
        }),
      ],
    })),
      (t[20] = o),
      (t[21] = S),
      (t[22] = n),
      (t[23] = s),
      (t[24] = r),
      (t[25] = L));
  else L = t[25];
  let M;
  if (t[26] !== g || t[27] !== y)
    ((M =
      g &&
      PH.jsxs(U, {
        marginTop: 1,
        children: [
          PH.jsx(Vu, {}),
          PH.jsx(w, {
            children: y || "Adding marketplace to configuration\u2026",
          }),
        ],
      })),
      (t[26] = g),
      (t[27] = y),
      (t[28] = M));
  else M = t[28];
  let N;
  if (t[29] !== i)
    ((N =
      i &&
      PH.jsx(U, {
        marginTop: 1,
        children: PH.jsx(Va, {
          error: i,
        }),
      })),
      (t[29] = i),
      (t[30] = N));
  else N = t[30];
  let B;
  if (t[31] !== l)
    ((B =
      l &&
      PH.jsx(U, {
        marginTop: 1,
        children: PH.jsx(w, {
          children: l,
        }),
      })),
      (t[31] = l),
      (t[32] = B));
  else B = t[32];
  let $;
  if (t[33] !== L || t[34] !== M || t[35] !== N || t[36] !== B)
    (($ = PH.jsxs(U, {
      flexDirection: "column",
      paddingX: 1,
      borderStyle: "round",
      children: [C, L, M, N, B],
    })),
      (t[33] = L),
      (t[34] = M),
      (t[35] = N),
      (t[36] = B),
      (t[37] = $));
  else $ = t[37];
  let q;
  if (t[38] === Symbol.for("react.memo_cache_sentinel"))
    ((q = PH.jsx(U, {
      marginLeft: 3,
      children: PH.jsx(w, {
        dimColor: true,
        italic: true,
        children: PH.jsxs(Tn, {
          children: [
            PH.jsx(ht, {
              chord: "enter",
              action: "add",
            }),
            PH.jsx(mr, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "cancel",
            }),
          ],
        }),
      }),
    })),
      (t[38] = q));
  else q = t[38];
  let W;
  if (t[39] !== $)
    ((W = PH.jsxs(U, {
      flexDirection: "column",
      children: [$, q],
    })),
      (t[39] = $),
      (t[40] = W));
  else W = t[40];
  return W;
}
var b2l, BKe, PH;
