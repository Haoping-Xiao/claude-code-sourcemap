// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BMo
// matched 2.1.88 source: src/tools/FileReadTool/UI.tsx
// class=modified  jaccard=0.2057  score=0.3017  fileCov=0.3926
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BMo] deps: Lne, At, Bi, es, ys, sr, K0
((Fkl = require("crypto")),
  ($Mo = require("fs")),
  (lOe = require("fs/promises")),
  (OMo = require("path")));
function gCf(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function UMo(e) {
  if (typeof e === "number") return Number.isFinite(e) ? e : void 0;
  if (typeof e === "string" && /^[-+]?\d+$/.test(e.trim())) return Number(e);
  return;
}
function Gkl(e) {
  if (!gCf(e)) return null;
  let t = {
      ...e,
    },
    n = [];
  if (Array.isArray(t.offset) && t.offset.length === 1)
    ((t.offset = t.offset[0]), n.push("offset_array"));
  if (Array.isArray(t.limit) && t.limit.length === 1)
    ((t.limit = t.limit[0]), n.push("limit_array"));
  let r = UMo(t.offset);
  if (r !== void 0 && r < 0) (delete t.offset, n.push("offset_neg"));
  let o = UMo(t.limit);
  if (o !== void 0 && o <= 0) (delete t.limit, n.push("limit_dropped"));
  if ("length" in t) {
    let s = UMo(t.length);
    if (!("limit" in t) && s !== void 0 && s > 0) t.limit = s;
    (delete t.length, n.push("length"));
  }
  return n.length
    ? {
        input: t,
        shapeClass: n.join(","),
      }
    : null;
}
function vZn(e) {
  let t = `${jpt()}/`,
    n = ".output";
  if (e.startsWith(t) && e.endsWith(".output")) {
    let r = e.slice(t.length, -7);
    if (r.length > 0 && r.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(r)) return r;
  }
  return null;
}
function Wkl({ file_path: e, offset: t, limit: n, pages: r }, { verbose: o }) {
  if (!e) return null;
  if (vZn(e)) return "";
  let s = o ? e : kd(e);
  if (r)
    return X_.jsxs(X_.Fragment, {
      children: [
        X_.jsx(SN, {
          filePath: e,
          children: s,
        }),
        ` \xB7 pages ${r}`,
      ],
    });
  if (o && (t || n)) {
    let i = t ?? 1,
      a = n ? `lines ${i}-${i + n - 1}` : `from line ${i}`;
    return X_.jsxs(X_.Fragment, {
      children: [
        X_.jsx(SN, {
          filePath: e,
          children: s,
        }),
        ` \xB7 ${a}`,
      ],
    });
  }
  return X_.jsx(SN, {
    filePath: e,
    children: s,
  });
}
function qkl({ file_path: e }) {
  let t = e ? vZn(e) : null;
  if (!t) return null;
  return X_.jsxs(w, {
    dimColor: true,
    children: [" ", t],
  });
}
function Vkl(e) {
  switch (e.type) {
    case "image": {
      let { originalSize: t } = e.file,
        n = Ra(t);
      return X_.jsx(qn, {
        height: 1,
        children: X_.jsxs(w, {
          children: ["Read image (", n, ")"],
        }),
      });
    }
    case "notebook": {
      let { cells: t } = e.file;
      if (!t || t.length < 1)
        return X_.jsx(w, {
          color: "error",
          children: "No cells found in notebook",
        });
      return X_.jsx(qn, {
        height: 1,
        children: X_.jsxs(w, {
          children: [
            "Read ",
            X_.jsx(w, {
              bold: true,
              children: t.length,
            }),
            " cells",
          ],
        }),
      });
    }
    case "pdf": {
      let { originalSize: t } = e.file,
        n = Ra(t);
      return X_.jsx(qn, {
        height: 1,
        children: X_.jsxs(w, {
          children: ["Read PDF (", n, ")"],
        }),
      });
    }
    case "parts":
      return X_.jsx(qn, {
        height: 1,
        children: X_.jsxs(w, {
          children: [
            "Read ",
            X_.jsx(w, {
              bold: true,
              children: e.file.count,
            }),
            " ",
            e.file.count === 1 ? "page" : "pages",
            " (",
            Ra(e.file.originalSize),
            ")",
          ],
        }),
      });
    case "text": {
      let { numLines: t } = e.file;
      return X_.jsx(qn, {
        height: 1,
        children: X_.jsxs(w, {
          children: [
            "Read ",
            X_.jsx(w, {
              bold: true,
              children: t,
            }),
            " ",
            t === 1 ? "line" : "lines",
          ],
        }),
      });
    }
    case "file_unchanged":
      return X_.jsx(qn, {
        height: 1,
        children: X_.jsx(w, {
          dimColor: true,
          children: "Unchanged since last read",
        }),
      });
  }
}
function zkl(e, { verbose: t }) {
  if (!t && typeof e === "string") {
    if (e.includes($B))
      return X_.jsx(qn, {
        children: X_.jsx(w, {
          color: "error",
          children: "File not found",
        }),
      });
    if (xl(e, "tool_use_error"))
      return X_.jsx(qn, {
        children: X_.jsx(w, {
          color: "error",
          children: "Error reading file",
        }),
      });
  }
  return X_.jsx(AT, {
    result: e,
    verbose: t,
  });
}
function Kkl(e) {
  if (e?.file_path?.startsWith(gS())) return "Reading Plan";
  if (e?.file_path && vZn(e.file_path)) return "Read agent output";
  return "Read";
}
function FMo(e) {
  if (!e?.file_path) return null;
  let t = vZn(e.file_path);
  if (t) return t;
  return kd(e.file_path);
}
var X_;
