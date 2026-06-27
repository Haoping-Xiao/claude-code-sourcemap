// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ivl
// matched 2.1.88 source: src/tools/FileEditTool/UI.tsx
// class=modified  jaccard=0.282  score=0.5756  fileCov=0.3561
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function userFacingName(e) {
  if (!e) return "Update";
  if (e.file_path?.startsWith(gS())) return "Updated plan";
  if (e.edits != null) return "Update";
  if (e.old_string === "") return "Create";
  return "Update";
}
function gDo(e) {
  if (!e?.file_path) return null;
  return kd(e.file_path);
}
function avl({ file_path: e }, { verbose: t }) {
  if (!e) return null;
  if (e.startsWith(gS())) return "";
  return ON.jsx(SN, {
    filePath: e,
    children: t ? e : kd(e),
  });
}
function renderToolResultMessage(
  { filePath: e = "", structuredPatch: t, originalFile: n },
  r,
  { style: o, verbose: s },
) {
  if (!e) return null;
  let i = e.startsWith(gS());
  return ON.jsx(p6n, {
    filePath: e,
    structuredPatch: t,
    firstLine: n ? Gd(n) : null,
    fileContent: n || void 0,
    style: o,
    verbose: s,
    previewHint: i ? "/plan to preview" : void 0,
  });
}
function cvl(e, t) {
  let { style: n, verbose: r } = t,
    o = e.file_path,
    s = e.old_string ?? "",
    i = e.new_string ?? "",
    a = e.replace_all ?? false;
  if ("edits" in e && e.edits != null)
    return ON.jsx(TMe, {
      file_path: o,
      operation: "update",
      firstLine: null,
      verbose: r,
    });
  if (s === "")
    return ON.jsx(TMe, {
      file_path: o,
      operation: "write",
      content: i,
      firstLine: Gd(i),
      verbose: r,
    });
  return ON.jsx(XSf, {
    filePath: o,
    oldString: s,
    newString: i,
    replaceAll: a,
    style: n,
    verbose: r,
  });
}
function renderToolUseErrorMessage(e, t) {
  let { verbose: n } = t;
  if (!n && typeof e === "string" && xl(e, "tool_use_error")) {
    let r = xl(e, "tool_use_error");
    if (r?.includes("File has not been read yet"))
      return ON.jsx(qn, {
        children: ON.jsx(w, {
          dimColor: true,
          children: "File must be read first",
        }),
      });
    if (r?.includes($B))
      return ON.jsx(qn, {
        children: ON.jsx(w, {
          color: "error",
          children: "File not found",
        }),
      });
    return ON.jsx(qn, {
      children: ON.jsx(w, {
        color: "error",
        children: "Error editing file",
      }),
    });
  }
  return ON.jsx(AT, {
    result: e,
    verbose: n,
  });
}
function XSf(e) {
  let t = mDo.c(16),
    { filePath: n, oldString: r, newString: o, replaceAll: s, style: i, verbose: a } = e,
    l;
  if (t[0] !== n || t[1] !== o || t[2] !== r || t[3] !== s)
    ((l = () => QSf(n, r, o, s)), (t[0] = n), (t[1] = o), (t[2] = r), (t[3] = s), (t[4] = l));
  else l = t[4];
  let [c] = Ybt.useState(l),
    u;
  if (t[5] !== n || t[6] !== a)
    ((u = ON.jsx(TMe, {
      file_path: n,
      operation: "update",
      firstLine: null,
      verbose: a,
    })),
      (t[5] = n),
      (t[6] = a),
      (t[7] = u));
  else u = t[7];
  let d;
  if (t[8] !== c || t[9] !== n || t[10] !== i || t[11] !== a)
    ((d = ON.jsx(JSf, {
      promise: c,
      filePath: n,
      style: i,
      verbose: a,
    })),
      (t[8] = c),
      (t[9] = n),
      (t[10] = i),
      (t[11] = a),
      (t[12] = d));
  else d = t[12];
  let p;
  if (t[13] !== u || t[14] !== d)
    ((p = ON.jsx(Ybt.Suspense, {
      fallback: u,
      children: d,
    })),
      (t[13] = u),
      (t[14] = d),
      (t[15] = p));
  else p = t[15];
  return p;
}
function JSf(e) {
  let t = mDo.c(7),
    { promise: n, filePath: r, style: o, verbose: s } = e,
    { patch: i, firstLine: a, fileContent: l } = Ybt.use(n),
    c;
  if (t[0] !== l || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== o || t[5] !== s)
    ((c = ON.jsx(TMe, {
      file_path: r,
      operation: "update",
      patch: i,
      firstLine: a,
      fileContent: l,
      style: o,
      verbose: s,
    })),
      (t[0] = l),
      (t[1] = r),
      (t[2] = a),
      (t[3] = i),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c));
  else c = t[6];
  return c;
}
async function QSf(e, t, n, r) {
  try {
    let o = await Oel(e, t, Kht);
    if (o === null || o.truncated || o.content === "") {
      let { patch: l } = O9t({
        filePath: e,
        fileContents: t,
        oldString: t,
        newString: n,
      });
      return {
        patch: l,
        firstLine: null,
        fileContent: void 0,
      };
    }
    let s = _Me(o.content, t) || t,
      i = Yht(t, s, n),
      { patch: a } = O9t({
        filePath: e,
        fileContents: o.content,
        oldString: s,
        newString: i,
        replaceAll: r,
      });
    return {
      patch: q8n(a, o.lineOffset - 1),
      firstLine: o.lineOffset === 1 ? Gd(o.content) : null,
      fileContent: o.content,
    };
  } catch (o) {
    if (Vo(o))
      T(`Failed to load rejection diff for ${e}: ${o.message}`, {
        level: "error",
      });
    else ke(o);
    return {
      patch: [],
      firstLine: null,
      fileContent: void 0,
    };
  }
}
var mDo, Ybt, ON;
