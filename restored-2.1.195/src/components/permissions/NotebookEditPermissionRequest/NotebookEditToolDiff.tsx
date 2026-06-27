// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s6n
// matched 2.1.88 source: src/components/permissions/NotebookEditPermissionRequest/NotebookEditToolDiff.tsx
// class=modified  jaccard=0.4052  score=0.7832  fileCov=0.4564
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var s6n = E(() => {
  o6n();
  ys();
  Hu();
  _m();
  Jt();
  kvo = class kvo extends Error {
    constructor(e) {
      super(e);
      this.name = "NotebookReadError";
    }
  };
});
function ttl(e) {
  let t = Rvo.c(7),
    n;
  if (t[0] !== e.notebook_path || t[1] !== e.remoteOldContent || t[2] !== e.skipLocalRead)
    ((n =
      e.remoteOldContent !== void 0
        ? Promise.resolve(Ia(e.remoteOldContent))
        : e.skipLocalRead || (Fc(e.notebook_path) && !qp(e.notebook_path))
          ? Promise.resolve(null)
          : qt()
              .readFile(e.notebook_path, {
                encoding: "utf-8",
              })
              .then(XZp)
              .catch(YZp)),
      (t[0] = e.notebook_path),
      (t[1] = e.remoteOldContent),
      (t[2] = e.skipLocalRead),
      (t[3] = n));
  else n = t[3];
  let r = n,
    o;
  if (t[4] !== r || t[5] !== e)
    ((o = bN.jsx(i6n.Suspense, {
      fallback: null,
      children: bN.jsx(JZp, {
        ...e,
        promise: r,
      }),
    })),
      (t[4] = r),
      (t[5] = e),
      (t[6] = o));
  else o = t[6];
  return o;
}
function YZp() {
  return null;
}
function XZp(e) {
  return Ia(e);
}
function JZp(e) {
  let t = Rvo.c(34),
    {
      notebook_path: n,
      cell_id: r,
      new_source: o,
      cell_type: s,
      edit_mode: i,
      verbose: a,
      width: l,
      promise: c,
    } = e,
    u = i === void 0 ? "replace" : i,
    d = i6n.use(c),
    p;
  if (t[0] !== r || t[1] !== d) {
    e: {
      if (!d || !r) {
        p = "";
        break e;
      }
      let x = U9t(r);
      if (x !== void 0) {
        if (d.cells[x]) {
          let D = d.cells[x].source,
            P;
          if (t[3] !== D) ((P = Array.isArray(D) ? D.join("") : D), (t[3] = D), (t[4] = P));
          else P = t[4];
          p = P;
          break e;
        }
        p = "";
        break e;
      }
      let I;
      if (t[5] !== r) ((I = (D) => D.id === r), (t[5] = r), (t[6] = I));
      else I = t[6];
      let k = d.cells.find(I);
      if (!k) {
        p = "";
        break e;
      }
      p = Array.isArray(k.source) ? k.source.join("") : k.source;
    }
    ((t[0] = r), (t[1] = d), (t[2] = p));
  } else p = t[2];
  let f = p,
    m;
  e: {
    if (!d || u === "insert" || u === "delete") {
      m = null;
      break e;
    }
    let x;
    if (t[7] !== o || t[8] !== n || t[9] !== f)
      ((x = j6({
        filePath: n,
        fileContents: f,
        edits: [
          {
            old_string: f,
            new_string: o,
            replace_all: false,
          },
        ],
        ignoreWhitespace: false,
      })),
        (t[7] = o),
        (t[8] = n),
        (t[9] = f),
        (t[10] = x));
    else x = t[10];
    m = x;
  }
  let g = m,
    h;
  e: switch (u) {
    case "insert": {
      h = "Insert new cell";
      break e;
    }
    case "delete": {
      h = "Delete cell";
      break e;
    }
    default:
      h = "Replace cell contents";
  }
  let y;
  if (t[11] !== n || t[12] !== a)
    ((y = a ? n : etl.relative($t(), n)), (t[11] = n), (t[12] = a), (t[13] = y));
  else y = t[13];
  let b;
  if (t[14] !== y)
    ((b = bN.jsx(w, {
      bold: true,
      children: y,
    })),
      (t[14] = y),
      (t[15] = b));
  else b = t[15];
  let _ = s ? ` (${s})` : "",
    S;
  if (t[16] !== r || t[17] !== h || t[18] !== _)
    ((S = bN.jsxs(w, {
      dimColor: true,
      children: [h, " for cell ", r, _],
    })),
      (t[16] = r),
      (t[17] = h),
      (t[18] = _),
      (t[19] = S));
  else S = t[19];
  let A;
  if (t[20] !== b || t[21] !== S)
    ((A = bN.jsxs(U, {
      paddingBottom: 1,
      flexDirection: "column",
      children: [b, S],
    })),
      (t[20] = b),
      (t[21] = S),
      (t[22] = A));
  else A = t[22];
  let v;
  if (
    t[23] !== s ||
    t[24] !== u ||
    t[25] !== g ||
    t[26] !== o ||
    t[27] !== n ||
    t[28] !== f ||
    t[29] !== l
  )
    ((v =
      u === "delete"
        ? bN.jsx(U, {
            flexDirection: "column",
            paddingLeft: 2,
            children: bN.jsx(LF, {
              code: f,
              filePath: n,
            }),
          })
        : u === "insert"
          ? bN.jsx(U, {
              flexDirection: "column",
              paddingLeft: 2,
              children: bN.jsx(LF, {
                code: o,
                filePath: s === "markdown" ? "file.md" : n,
              }),
            })
          : g
            ? Wwe(
                g.map((x) =>
                  bN.jsx(
                    Xue,
                    {
                      patch: x,
                      dim: false,
                      width: l,
                      filePath: n,
                      firstLine: Gd(o),
                      fileContent: f,
                    },
                    x.newStart,
                  ),
                ),
                QZp,
              )
            : bN.jsx(LF, {
                code: o,
                filePath: s === "markdown" ? "file.md" : n,
              })),
      (t[23] = s),
      (t[24] = u),
      (t[25] = g),
      (t[26] = o),
      (t[27] = n),
      (t[28] = f),
      (t[29] = l),
      (t[30] = v));
  else v = t[30];
  let C;
  if (t[31] !== A || t[32] !== v)
    ((C = bN.jsx(U, {
      flexDirection: "column",
      children: bN.jsxs(cA, {
        children: [A, v],
      }),
    })),
      (t[31] = A),
      (t[32] = v),
      (t[33] = C));
  else C = t[33];
  return C;
}
function QZp(e) {
  return bN.jsx(
    wI,
    {
      fromLeftEdge: true,
      children: bN.jsx(w, {
        dimColor: true,
        children: "...",
      }),
    },
    `ellipsis-${e}`,
  );
}
var Rvo, etl, i6n, bN;
