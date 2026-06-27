// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nbl
// matched 2.1.88 source: src/tools/LSPTool/UI.tsx
// class=modified (alt of src/tools/LSPTool/UI.tsx)  jaccard=0.2594  score=0.6648  fileCov=0.2984
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function $gf(e) {
  let t = rbl.c(24),
    { operation: n, resultCount: r, fileCount: o, content: s, verbose: i } = e,
    a;
  if (t[0] !== n)
    ((a = Mgf[n] || {
      singular: "result",
      plural: "results",
    }),
      (t[0] = n),
      (t[1] = a));
  else a = t[1];
  let l = a,
    c = r === 1 ? l.singular : l.plural,
    u;
  if (t[2] !== c || t[3] !== l.special || t[4] !== n || t[5] !== r)
    ((u =
      n === "hover" && r > 0 && l.special
        ? Lk.jsxs(w, {
            children: ["Hover info ", l.special],
          })
        : Lk.jsxs(w, {
            children: [
              "Found ",
              Lk.jsxs(w, {
                bold: true,
                children: [r, " "],
              }),
              c,
            ],
          })),
      (t[2] = c),
      (t[3] = l.special),
      (t[4] = n),
      (t[5] = r),
      (t[6] = u));
  else u = t[6];
  let d = u,
    p;
  if (t[7] !== o)
    ((p =
      o > 1
        ? Lk.jsxs(w, {
            children: [
              " ",
              "across ",
              Lk.jsxs(w, {
                bold: true,
                children: [o, " "],
              }),
              "files",
            ],
          })
        : null),
      (t[7] = o),
      (t[8] = p));
  else p = t[8];
  let f = p;
  if (i) {
    let h;
    if (t[9] === Symbol.for("react.memo_cache_sentinel"))
      ((h = Lk.jsx(w, {
        dimColor: true,
        children: "\xA0\xA0\u23BF \xA0",
      })),
        (t[9] = h));
    else h = t[9];
    let y;
    if (t[10] !== d || t[11] !== f)
      ((y = Lk.jsx(U, {
        flexDirection: "row",
        children: Lk.jsxs(w, {
          children: [h, d, f],
        }),
      })),
        (t[10] = d),
        (t[11] = f),
        (t[12] = y));
    else y = t[12];
    let b;
    if (t[13] !== s)
      ((b = Lk.jsx(U, {
        marginLeft: 5,
        children: Lk.jsx(w, {
          children: s,
        }),
      })),
        (t[13] = s),
        (t[14] = b));
    else b = t[14];
    let _;
    if (t[15] !== y || t[16] !== b)
      ((_ = Lk.jsxs(U, {
        flexDirection: "column",
        children: [y, b],
      })),
        (t[15] = y),
        (t[16] = b),
        (t[17] = _));
    else _ = t[17];
    return _;
  }
  let m;
  if (t[18] !== r) ((m = r > 0 && Lk.jsx(NI, {})), (t[18] = r), (t[19] = m));
  else m = t[19];
  let g;
  if (t[20] !== d || t[21] !== f || t[22] !== m)
    ((g = Lk.jsx(qn, {
      height: 1,
      children: Lk.jsxs(w, {
        children: [d, f, " ", m],
      }),
    })),
      (t[20] = d),
      (t[21] = f),
      (t[22] = m),
      (t[23] = g));
  else g = t[23];
  return g;
}
function obl() {
  return "LSP";
}
function sbl(e, { verbose: t }) {
  if (!e.operation) return null;
  let n = [];
  if (
    (e.operation === "goToDefinition" ||
      e.operation === "findReferences" ||
      e.operation === "hover" ||
      e.operation === "goToImplementation") &&
    e.filePath &&
    e.line !== void 0 &&
    e.character !== void 0
  ) {
    let r = tbl(e.filePath, e.line - 1, e.character - 1),
      o = t ? e.filePath : kd(e.filePath);
    if (r) (n.push(`operation: "${e.operation}"`), n.push(`symbol: "${r}"`), n.push(`in: "${o}"`));
    else
      (n.push(`operation: "${e.operation}"`),
        n.push(`file: "${o}"`),
        n.push(`position: ${e.line}:${e.character}`));
    return n.join(", ");
  }
  if ((n.push(`operation: "${e.operation}"`), e.filePath)) {
    let r = t ? e.filePath : kd(e.filePath);
    n.push(`file: "${r}"`);
  }
  return n.join(", ");
}
function ibl(e, { verbose: t }) {
  if (!t && typeof e === "string" && xl(e, "tool_use_error"))
    return Lk.jsx(qn, {
      children: Lk.jsx(w, {
        color: "error",
        children: "LSP operation failed",
      }),
    });
  return Lk.jsx(AT, {
    result: e,
    verbose: t,
  });
}
function abl(e, t, { verbose: n }) {
  if (e.resultCount !== void 0 && e.fileCount !== void 0)
    return Lk.jsx($gf, {
      operation: e.operation,
      resultCount: e.resultCount,
      fileCount: e.fileCount,
      content: e.result,
      verbose: n,
    });
  return Lk.jsx(qn, {
    children: Lk.jsx(w, {
      children: e.result,
    }),
  });
}
var rbl, Lk, Mgf;
