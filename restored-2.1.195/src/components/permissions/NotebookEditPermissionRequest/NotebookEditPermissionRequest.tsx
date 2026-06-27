// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g6n
// matched 2.1.88 source: src/components/permissions/NotebookEditPermissionRequest/NotebookEditPermissionRequest.tsx
// class=modified  jaccard=0.1985  score=0.2434  fileCov=0.5183
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function z9t(e) {
  switch (e) {
    case xH:
    case dA:
    case oq:
    case Z4:
    case L$:
    case Vg:
      return true;
    default:
      return false;
  }
}
function Tnl(e) {
  switch (e) {
    case xH:
    case dA:
    case oq:
      return true;
    default:
      return false;
  }
}
function K9t(e, t) {
  try {
    let n = e;
    if (typeof n.getPath !== "function") return null;
    let r = n.getPath(t);
    return typeof r === "string" && r !== "" ? r : null;
  } catch {
    return null;
  }
}
function vnl(e, t, n) {
  if (t === "read" || n) return null;
  try {
    let r = ds(e),
      o = qt(),
      { resolvedPath: s, isSymlink: i } = jd(o, r);
    return i ? s : null;
  } catch {
    return null;
  }
}
function Hnl(e, t) {
  return t ? e : IMe.relative($t(), e);
}
function Jvo(e, t) {
  return t ? IMe.posix.basename(e) : IMe.basename(e);
}
function etf(e, t, n, r, o) {
  if (e === xH) {
    let c = xH.inputSchema.parse(t);
    return {
      title: "Edit file",
      subtitle: Hnl(c.file_path, r),
      question: EN.jsxs(w, {
        children: [
          "Do you want to make this edit to",
          " ",
          EN.jsx(w, {
            bold: true,
            children: Jvo(c.file_path, r),
          }),
          "?",
        ],
      }),
      content: EN.jsx(wvo, {
        file_path: c.file_path,
        edits: [
          {
            old_string: c.old_string,
            new_string: c.new_string,
            replace_all: c.replace_all || false,
          },
        ],
        remoteOldContent: o ?? void 0,
        skipLocalRead: r,
      }),
    };
  }
  if (e === dA) {
    let c = dA.inputSchema.parse(t),
      u = "",
      d = false,
      p,
      f;
    if (r) {
      if (typeof o === "string") ((u = o), (d = true), (p = "Overwrite file"), (f = "overwrite"));
      else if (o === null) ((p = "Create file"), (f = "create"));
      else ((p = "Write file"), (f = "write to"));
    } else {
      if (!Fc(c.file_path) || qp(c.file_path))
        try {
          ((u = XC(c.file_path)), (d = true));
        } catch (m) {
          if (!wn(m)) throw m;
        }
      ((p = d ? "Overwrite file" : "Create file"), (f = d ? "overwrite" : "create"));
    }
    return {
      title: p,
      subtitle: Hnl(c.file_path, r),
      question: EN.jsxs(w, {
        children: [
          "Do you want to ",
          f,
          " ",
          EN.jsx(w, {
            bold: true,
            children: Jvo(c.file_path, r),
          }),
          "?",
        ],
      }),
      content: EN.jsx(zel, {
        file_path: c.file_path,
        content: c.content,
        fileExists: d,
        oldContent: u,
      }),
    };
  }
  if (e === oq) {
    let c = oq.inputSchema.parse(t),
      u =
        c.edit_mode === "insert"
          ? "insert this cell into"
          : c.edit_mode === "delete"
            ? "delete this cell from"
            : "make this edit to";
    return {
      title: "Edit notebook",
      subtitle: void 0,
      question: EN.jsxs(w, {
        children: [
          "Do you want to ",
          u,
          " ",
          EN.jsx(w, {
            bold: true,
            children: Jvo(c.notebook_path, r),
          }),
          "?",
        ],
      }),
      content: EN.jsx(ttl, {
        notebook_path: c.notebook_path,
        cell_id: c.cell_id,
        new_source: c.new_source,
        cell_type: c.cell_type,
        edit_mode: c.edit_mode,
        verbose: true,
        width: 120,
        remoteOldContent: o ?? void 0,
        skipLocalRead: r,
      }),
    };
  }
  let i = `${e.isReadOnly(t) ? "Read" : "Edit"} file`,
    a = e.userFacingName(t),
    l = e.renderToolUseMessage(t, {
      theme: n,
      verbose: true,
    });
  return {
    title: i,
    subtitle: void 0,
    question: "Do you want to proceed?",
    content: EN.jsx(U, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: EN.jsxs(w, {
        children: [a, "(", l, ")"],
      }),
    }),
  };
}
function h6n(e) {
  let t = yP(e),
    n = e.tool;
  if (!z9t(n))
    throw Error(`buildFilePermissionDescriptor called with non-file tool: ${e.tool.name}`);
  let r = e.remoteWorkspace === true,
    o = n.isReadOnly(e.input) ? "read" : "write",
    {
      title: s,
      subtitle: i,
      question: a,
      content: l,
    } = etf(n, e.input, e.theme, r, e.remoteOldContent),
    c = vnl(e.filePath, o, r);
  return {
    ...t,
    title: s,
    subtitle: i,
    question: a,
    content: l,
    filePath: e.filePath,
    operationType: o,
    symlinkTarget: c,
  };
}
function wnl(e, t, n) {
  if (e === xH)
    return {
      completion_type: "str_replace_single",
      language_name: Zqe(n),
    };
  if (e === dA)
    return {
      completion_type: "write_file_single",
      language_name: Zqe(n),
    };
  if (e === oq)
    return {
      completion_type: "tool_use_single",
      language_name: t.cell_type === "markdown" ? "markdown" : "python",
    };
  return {
    completion_type: "tool_use_single",
    language_name: Zqe(n),
  };
}
function Cnl(e) {
  let t = yP(e),
    n = e.sedInfo.filePath,
    r = ds(n),
    o = (Fc(n) || Fc(r)) && !(qp(n) || qp(r)),
    s = "",
    i = false;
  if (!o)
    try {
      ((s = XC(r)), (i = true));
    } catch (p) {
      if (!wn(p)) throw p;
    }
  let a = utl(s, e.sedInfo),
    l =
      o || s === a
        ? []
        : [
            {
              old_string: s,
              new_string: a,
              replace_all: false,
            },
          ],
    c = o
      ? `Network path \u2014 diff not previewed. The sed command will run against ${r} on approval.`
      : i
        ? "Pattern did not match any content"
        : "File does not exist",
    u = vnl(r, "write", false),
    d = o
      ? {
          ...e.input,
        }
      : {
          ...e.input,
          _simulatedSedEdit: {
            filePath: r,
            newContent: a,
          },
        };
  return {
    ...t,
    input: d,
    title: "Edit file",
    subtitle: IMe.relative($t(), r),
    question: EN.jsxs(w, {
      children: [
        "Do you want to make this edit to ",
        EN.jsx(w, {
          bold: true,
          children: IMe.basename(r),
        }),
        "?",
      ],
    }),
    content:
      l.length > 0
        ? EN.jsx(wvo, {
            file_path: r,
            edits: l,
          })
        : EN.jsx(w, {
            dimColor: true,
            children: c,
          }),
    filePath: r,
    operationType: "write",
    symlinkTarget: u,
  };
}
function Inl(e) {
  return {
    completion_type: "str_replace_single",
    language_name: Zqe(e),
  };
}
var IMe, EN;
