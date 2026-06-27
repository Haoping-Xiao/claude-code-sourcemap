// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J1l
// matched 2.1.88 source: src/components/diff/DiffDialog.tsx
// class=modified  jaccard=0.3886  score=0.5163  fileCov=0.611
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var J1l = E(() => {
  si();
  _i();
  Ye();
  es();
  sr();
  gDe();
  B_();
  ((onr = R(lt(), 1)), (WN = R(se(), 1)));
});
var Z1l = {};
_t(Z1l, {
  DiffDialog: () => DiffDialog,
});
function r$f(e) {
  let t = Array.from(e.files.values())
      .map((r) => ({
        path: r.filePath,
        linesAdded: r.linesAdded,
        linesRemoved: r.linesRemoved,
        isBinary: false,
        isLargeFile: false,
        isTruncated: false,
        isNewFile: r.isNewFile,
      }))
      .sort((r, o) => r.path.localeCompare(o.path)),
    n = new Map();
  for (let r of e.files.values()) n.set(r.filePath, r.hunks);
  return {
    stats: {
      filesCount: e.stats.filesChanged,
      linesAdded: e.stats.linesAdded,
      linesRemoved: e.stats.linesRemoved,
    },
    files: t,
    hunks: n,
    loading: false,
    source: {
      kind: "working-tree",
    },
  };
}
function DiffDialog(e) {
  let t = Q1l.c(98),
    { messages: n, onDone: r } = e,
    o = mNo(),
    s = C1l(n),
    [i, a] = wHe.useState("list"),
    [l, c] = wHe.useState(0),
    [u, d] = wHe.useState(0),
    p;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((p = {
      type: "current",
    }),
      (t[0] = p));
  else p = t[0];
  let f;
  if (t[1] !== s) ((f = [p, ...s.map(i$f)]), (t[1] = s), (t[2] = f));
  else f = t[2];
  let m = f,
    g = m[u],
    h = g?.type === "turn" ? g.turn : null,
    y;
  if (t[3] !== h || t[4] !== o) ((y = h ? r$f(h) : o), (t[3] = h), (t[4] = o), (t[5] = y));
  else y = t[5];
  let b = y,
    _ = b.files[l],
    S;
  if (t[6] !== b.hunks || t[7] !== _)
    ((S = _ ? b.hunks.get(_.path) || [] : []), (t[6] = b.hunks), (t[7] = _), (t[8] = S));
  else S = t[8];
  let A = S,
    v,
    C;
  if (t[9] !== u || t[10] !== m.length)
    ((v = () => {
      if (u >= m.length) d(Math.max(0, m.length - 1));
    }),
      (C = [m.length, u]),
      (t[9] = u),
      (t[10] = m.length),
      (t[11] = v),
      (t[12] = C));
  else ((v = t[11]), (C = t[12]));
  wHe.useEffect(v, C);
  let x = wHe.useRef(u),
    I,
    k;
  if (t[13] !== u)
    ((I = () => {
      if (x.current !== u) (c(0), (x.current = u));
    }),
      (k = [u]),
      (t[13] = u),
      (t[14] = I),
      (t[15] = k));
  else ((I = t[14]), (k = t[15]));
  (wHe.useEffect(I, k), Wh("diff-dialog"));
  let D = elt(),
    P;
  if (t[16] !== D || t[17] !== i)
    ((P = function (tt) {
      let bt = D?.current;
      if (i !== "detail" || !bt) return false;
      let Ke = Math.max(1, Math.floor(bt.getViewportHeight() / 2)),
        Et = Math.max(1, bt.getViewportHeight());
      e: switch (tt) {
        case "up": {
          bt.scrollBy(-1);
          break e;
        }
        case "down": {
          bt.scrollBy(1);
          break e;
        }
        case "pageUp": {
          Ofe(bt, -Ke, false);
          break e;
        }
        case "pageDown": {
          Ofe(bt, Ke, false);
          break e;
        }
        case "fullPageUp": {
          Ofe(bt, -Et, false);
          break e;
        }
        case "fullPageDown": {
          Ofe(bt, Et, false);
          break e;
        }
        case "top": {
          bt.scrollTo(0);
          break e;
        }
        case "bottom":
          bt.scrollToBottom();
      }
    }),
      (t[16] = D),
      (t[17] = i),
      (t[18] = P));
  else P = t[18];
  let O = P,
    L,
    M;
  if (t[19] !== m.length || t[20] !== i)
    ((L = () => {
      if (i === "detail") a("list");
      else if (m.length > 1) d((Ue) => (Ue - 1 + m.length) % m.length);
    }),
      (M = () => {
        if (i === "list" && m.length > 1) d((Ue) => (Ue + 1) % m.length);
      }),
      (t[19] = m.length),
      (t[20] = i),
      (t[21] = L),
      (t[22] = M));
  else ((L = t[21]), (M = t[22]));
  let N;
  if (t[23] !== i)
    ((N = () => {
      if (i === "detail") a("list");
    }),
      (t[23] = i),
      (t[24] = N));
  else N = t[24];
  let B;
  if (t[25] !== _ || t[26] !== i)
    ((B = () => {
      if (i === "list" && _) a("detail");
    }),
      (t[25] = _),
      (t[26] = i),
      (t[27] = B));
  else B = t[27];
  let $;
  if (t[28] !== O || t[29] !== i)
    (($ = () => {
      if (i === "detail") return O("up");
      c(s$f);
    }),
      (t[28] = O),
      (t[29] = i),
      (t[30] = $));
  else $ = t[30];
  let q;
  if (t[31] !== b.files.length || t[32] !== O || t[33] !== i)
    ((q = () => {
      if (i === "detail") return O("down");
      c((Ue) => Math.min(b.files.length - 1, Ue + 1));
    }),
      (t[31] = b.files.length),
      (t[32] = O),
      (t[33] = i),
      (t[34] = q));
  else q = t[34];
  let W, V, Y, z, K, Z;
  if (t[35] !== O)
    ((W = () => O("pageUp")),
      (V = () => O("pageDown")),
      (Y = () => O("fullPageUp")),
      (z = () => O("fullPageDown")),
      (K = () => O("top")),
      (Z = () => O("bottom")),
      (t[35] = O),
      (t[36] = W),
      (t[37] = V),
      (t[38] = Y),
      (t[39] = z),
      (t[40] = K),
      (t[41] = Z));
  else ((W = t[36]), (V = t[37]), (Y = t[38]), (z = t[39]), (K = t[40]), (Z = t[41]));
  let J;
  if (
    t[42] !== L ||
    t[43] !== M ||
    t[44] !== N ||
    t[45] !== B ||
    t[46] !== $ ||
    t[47] !== q ||
    t[48] !== W ||
    t[49] !== V ||
    t[50] !== Y ||
    t[51] !== z ||
    t[52] !== K ||
    t[53] !== Z
  )
    ((J = {
      "diff:previousSource": L,
      "diff:nextSource": M,
      "diff:back": N,
      "diff:viewDetails": B,
      "diff:previousFile": $,
      "diff:nextFile": q,
      "scroll:pageUp": W,
      "scroll:pageDown": V,
      "scroll:fullPageUp": Y,
      "scroll:fullPageDown": z,
      "scroll:top": K,
      "scroll:bottom": Z,
    }),
      (t[42] = L),
      (t[43] = M),
      (t[44] = N),
      (t[45] = B),
      (t[46] = $),
      (t[47] = q),
      (t[48] = W),
      (t[49] = V),
      (t[50] = Y),
      (t[51] = z),
      (t[52] = K),
      (t[53] = Z),
      (t[54] = J));
  else J = t[54];
  let ne;
  if (t[55] === Symbol.for("react.memo_cache_sentinel"))
    ((ne = {
      context: "DiffDialog",
    }),
      (t[55] = ne));
  else ne = t[55];
  No(J, ne);
  let oe;
  if (t[56] !== b.stats)
    ((oe = b.stats
      ? lw.jsxs(w, {
          dimColor: true,
          children: [
            b.stats.filesCount,
            " ",
            bn(b.stats.filesCount, "file"),
            " ",
            "changed",
            " ",
            lw.jsx(d5, {
              added: b.stats.linesAdded,
              removed: b.stats.linesRemoved,
            }),
          ],
        })
      : null),
      (t[56] = b.stats),
      (t[57] = oe));
  else oe = t[57];
  let re = oe,
    ee = !h && b.source.kind === "branch",
    ce = h ? `Turn ${h.turnIndex}` : ee ? "Branch changes" : "Uncommitted changes",
    ae = h
      ? h.userPromptPreview
        ? `"${h.userPromptPreview}"`
        : ""
      : b.source.kind === "branch"
        ? `(vs ${b.source.baseBranch})`
        : "(git diff HEAD)",
    de;
  e: {
    if (h) {
      de = "No file changes in this turn";
      break e;
    }
    if (b.stats && b.stats.filesCount > 0 && b.files.length === 0) {
      de = "Too many files to display details";
      break e;
    }
    de = "Working tree is clean";
  }
  let Ee = de,
    me;
  if (t[58] !== ae)
    ((me =
      ae &&
      lw.jsxs(w, {
        dimColor: true,
        children: [" ", ae],
      })),
      (t[58] = ae),
      (t[59] = me));
  else me = t[59];
  let pe;
  if (t[60] !== ce || t[61] !== me)
    ((pe = lw.jsxs(w, {
      children: [ce, me],
    })),
      (t[60] = ce),
      (t[61] = me),
      (t[62] = pe));
  else pe = t[62];
  let ge = pe,
    he;
  if (t[63] !== r || t[64] !== i)
    ((he = function () {
      if (i === "detail") a("list");
      else
        r("Diff dialog dismissed", {
          display: "system",
        });
    }),
      (t[63] = r),
      (t[64] = i),
      (t[65] = he));
  else he = t[65];
  let ie = he,
    le;
  if (
    t[66] !== b.files ||
    t[67] !== b.loading ||
    t[68] !== Ee ||
    t[69] !== _?.isBinary ||
    t[70] !== _?.isLargeFile ||
    t[71] !== _?.isTruncated ||
    t[72] !== _?.isUntracked ||
    t[73] !== _?.path ||
    t[74] !== A ||
    t[75] !== l ||
    t[76] !== i
  )
    ((le =
      b.files.length === 0
        ? b.loading
          ? lw.jsx(Vc, {
              message: "Loading diff\u2026",
              dimColor: true,
            })
          : lw.jsx(w, {
              dimColor: true,
              children: Ee,
            })
        : i === "list"
          ? lw.jsx(U, {
              flexDirection: "column",
              children: lw.jsx(X1l, {
                files: b.files,
                selectedIndex: l,
              }),
            })
          : lw.jsx(U, {
              flexDirection: "column",
              children: lw.jsx(bNo, {
                filePath: _?.path || "",
                hunks: A,
                isLargeFile: _?.isLargeFile,
                isBinary: _?.isBinary,
                isTruncated: _?.isTruncated,
                isUntracked: _?.isUntracked,
              }),
            })),
      (t[66] = b.files),
      (t[67] = b.loading),
      (t[68] = Ee),
      (t[69] = _?.isBinary),
      (t[70] = _?.isLargeFile),
      (t[71] = _?.isTruncated),
      (t[72] = _?.isUntracked),
      (t[73] = _?.path),
      (t[74] = A),
      (t[75] = l),
      (t[76] = i),
      (t[77] = le));
  else le = t[77];
  let He;
  if (t[78] !== re || t[79] !== le)
    ((He = lw.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [re, le],
    })),
      (t[78] = re),
      (t[79] = le),
      (t[80] = He));
  else He = t[80];
  let ye = He,
    ue;
  if (t[81] !== m.length || t[82] !== i)
    ((ue =
      i === "list"
        ? lw.jsxs(Tn, {
            children: [
              m.length > 1 &&
                lw.jsx(ht, {
                  chord: ["left", "right"],
                  action: "switch source",
                }),
              lw.jsx(ht, {
                chord: ["up", "down"],
                action: "select",
              }),
              lw.jsx(ht, {
                chord: "enter",
                action: "view",
              }),
              lw.jsx(mr, {
                action: "diff:dismiss",
                context: "DiffDialog",
                fallback: "Esc",
                description: "close",
              }),
            ],
          })
        : lw.jsxs(Tn, {
            children: [
              lw.jsx(ht, {
                chord: ["up", "down"],
                action: "scroll",
              }),
              lw.jsx(ht, {
                chord: "left",
                action: "back",
              }),
              lw.jsx(mr, {
                action: "diff:dismiss",
                context: "DiffDialog",
                fallback: "Esc",
                description: "back",
              }),
            ],
          })),
      (t[81] = m.length),
      (t[82] = i),
      (t[83] = ue));
  else ue = t[83];
  let we = m.length <= 1,
    Ce = String(u),
    Ie;
  if (t[84] === Symbol.for("react.memo_cache_sentinel"))
    ((Ie = (Ue) => d(Number(Ue))), (t[84] = Ie));
  else Ie = t[84];
  let Ve = i === "detail",
    Ze;
  if (t[85] !== ye || t[86] !== m)
    ((Ze = m.map((Ue, tt) =>
      lw.jsx(
        sm,
        {
          id: String(tt),
          title: Ue.type === "current" ? "Current" : `T${Ue.turn.turnIndex}`,
          children: ye,
        },
        tt,
      ),
    )),
      (t[85] = ye),
      (t[86] = m),
      (t[87] = Ze));
  else Ze = t[87];
  let Be;
  if (t[88] !== we || t[89] !== Ce || t[90] !== Ve || t[91] !== Ze)
    ((Be = lw.jsx(cR, {
      title: null,
      hidden: we,
      selectedTab: Ce,
      onTabChange: Ie,
      disableNavigation: Ve,
      children: Ze,
    })),
      (t[88] = we),
      (t[89] = Ce),
      (t[90] = Ve),
      (t[91] = Ze),
      (t[92] = Be));
  else Be = t[92];
  let Me;
  if (t[93] !== ie || t[94] !== ue || t[95] !== Be || t[96] !== ge)
    ((Me = lw.jsx(zn, {
      title: ge,
      onCancel: ie,
      color: "background",
      inputGuide: ue,
      children: Be,
    })),
      (t[93] = ie),
      (t[94] = ue),
      (t[95] = Be),
      (t[96] = ge),
      (t[97] = Me));
  else Me = t[97];
  return Me;
}
function s$f(e) {
  return Math.max(0, e - 1);
}
function i$f(e) {
  return {
    type: "turn",
    turn: e,
  };
}
var Q1l, wHe, lw;
