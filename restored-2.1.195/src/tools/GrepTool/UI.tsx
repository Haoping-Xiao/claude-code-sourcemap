// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Otl
// matched 2.1.88 source: src/tools/GrepTool/UI.tsx
// class=modified  jaccard=0.3088  score=0.4748  fileCov=0.469
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Otl] deps: @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/task/diskOutput.ts, utils/platform.ts, utils/glob.ts, utils/ripgrep.ts
QJ = require("path");
function SearchResultSummary(t0) {
  let t = Ntl.c(26),
    { count: n, countLabel: r, secondaryCount: o, secondaryLabel: s, content: i, verbose: a } = t0,
    l;
  if (t[0] !== n)
    ((l = XI.jsxs(w, {
      bold: true,
      children: [n, " "],
    })),
      (t[0] = n),
      (t[1] = l));
  else l = t[1];
  let c;
  if (t[2] !== n || t[3] !== r)
    ((c = n === 0 || n > 1 ? r : r.slice(0, -1)), (t[2] = n), (t[3] = r), (t[4] = c));
  else c = t[4];
  let u;
  if (t[5] !== l || t[6] !== c)
    ((u = XI.jsxs(w, {
      children: ["Found ", l, c],
    })),
      (t[5] = l),
      (t[6] = c),
      (t[7] = u));
  else u = t[7];
  let d = u,
    p;
  if (t[8] !== o || t[9] !== s)
    ((p =
      o !== void 0 && s
        ? XI.jsxs(w, {
            children: [
              " ",
              "across ",
              XI.jsxs(w, {
                bold: true,
                children: [o, " "],
              }),
              o === 0 || o > 1 ? s : s.slice(0, -1),
            ],
          })
        : null),
      (t[8] = o),
      (t[9] = s),
      (t[10] = p));
  else p = t[10];
  let f = p;
  if (a) {
    let h;
    if (t[11] === Symbol.for("react.memo_cache_sentinel"))
      ((h = XI.jsx(w, {
        dimColor: true,
        children: "\xA0\xA0\u23BF \xA0",
      })),
        (t[11] = h));
    else h = t[11];
    let y;
    if (t[12] !== d || t[13] !== f)
      ((y = XI.jsx(U, {
        flexDirection: "row",
        children: XI.jsxs(w, {
          children: [h, d, f],
        }),
      })),
        (t[12] = d),
        (t[13] = f),
        (t[14] = y));
    else y = t[14];
    let b;
    if (t[15] !== i)
      ((b = XI.jsx(U, {
        marginLeft: 5,
        children: XI.jsx(w, {
          children: i,
        }),
      })),
        (t[15] = i),
        (t[16] = b));
    else b = t[16];
    let _;
    if (t[17] !== y || t[18] !== b)
      ((_ = XI.jsxs(U, {
        flexDirection: "column",
        children: [y, b],
      })),
        (t[17] = y),
        (t[18] = b),
        (t[19] = _));
    else _ = t[19];
    return _;
  }
  let m;
  if (t[20] !== n) ((m = n > 0 && XI.jsx(NI, {})), (t[20] = n), (t[21] = m));
  else m = t[21];
  let g;
  if (t[22] !== d || t[23] !== f || t[24] !== m)
    ((g = XI.jsx(qn, {
      height: 1,
      children: XI.jsxs(w, {
        children: [d, f, " ", m],
      }),
    })),
      (t[22] = d),
      (t[23] = f),
      (t[24] = m),
      (t[25] = g));
  else g = t[25];
  return g;
}
function renderToolUseMessage({ pattern: e, path: t }, { verbose: n }) {
  if (!e) return null;
  let r = [`pattern: "${e}"`];
  if (t) r.push(`path: "${n ? t : kd(t)}"`);
  return r.join(", ");
}
function renderToolUseErrorMessage(result, { verbose: t }) {
  if (!t && typeof result === "string" && xl(result, "tool_use_error")) {
    if (xl(result, "tool_use_error")?.includes($B))
      return XI.jsx(qn, {
        children: XI.jsx(w, {
          color: "error",
          children: "File not found",
        }),
      });
    return XI.jsx(qn, {
      children: XI.jsx(w, {
        color: "error",
        children: "Error searching files",
      }),
    });
  }
  return XI.jsx(AT, {
    result: result,
    verbose: t,
  });
}
function renderToolResultMessage(
  {
    mode: e = "files_with_matches",
    filenames: t,
    numFiles: n,
    content: r,
    numLines: o,
    numMatches: s,
  },
  _progressMessagesForMessage,
  { verbose: a },
) {
  if (e === "content")
    return XI.jsx(SearchResultSummary, {
      count: o ?? 0,
      countLabel: "lines",
      content: r,
      verbose: a,
    });
  if (e === "count")
    return XI.jsx(SearchResultSummary, {
      count: s ?? 0,
      countLabel: "matches",
      secondaryCount: n,
      secondaryLabel: "files",
      content: r,
      verbose: a,
    });
  let l = t.map((c) => c).join(`
`);
  return XI.jsx(SearchResultSummary, {
    count: n,
    countLabel: "files",
    content: l,
    verbose: a,
  });
}
function Wvo(e) {
  if (!e?.pattern) return null;
  return $a(e.pattern, nP);
}
var Ntl, XI;
