// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ttl
// matched 2.1.88 source: src/tools/FileWriteTool/UI.tsx
// class=partial  jaccard=0.2412  score=0.4395  fileCov=0.3483
// note: low-confidence suggestion: src/tools/FileWriteTool/UI.tsx; 5 renamed
// ─────────────────────────────────────────────────────────────────────────
function vtl(e) {
  let t = e.split(oyt);
  return e.endsWith(oyt) ? t.length - 1 : t.length;
}
function Aef(e, t) {
  let n = lGe(e, t).height;
  return e.endsWith(oyt) ? n - 1 : n;
}
function FileWriteToolCreatedMessage(t0) {
  let t = f6n.c(31),
    {
      filePath: n,
      content: r,
      verbose: o
    } = t0,
    {
      columns: s
    } = br(),
    i = Math.max(1, s - 12),
    a = r || "(No content)",
    l;
  if (t[0] !== r) l = vtl(r), t[0] = r, t[1] = l;else l = t[1];
  let c = l,
    u;
  if (t[2] !== a || t[3] !== i || t[4] !== o) u = o ? a : a.split(oyt).slice(0, ryt).join(oyt).slice(0, ryt * (i + 1)), t[2] = a, t[3] = i, t[4] = o, t[5] = u;else u = t[5];
  let d = u,
    p = o ? 0 : Aef(a, i) - ryt,
    f;
  if (t[6] !== c) f = uA.jsx(w, {
    bold: true,
    children: c
  }), t[6] = c, t[7] = f;else f = t[7];
  let m;
  if (t[8] !== n || t[9] !== o) m = o ? n : v8e.relative($t(), n), t[8] = n, t[9] = o, t[10] = m;else m = t[10];
  let g;
  if (t[11] !== m) g = uA.jsx(w, {
    bold: true,
    children: m
  }), t[11] = m, t[12] = g;else g = t[12];
  let h;
  if (t[13] !== f || t[14] !== g) h = uA.jsxs(w, {
    children: ["Wrote ", f, " lines to", " ", g]
  }), t[13] = f, t[14] = g, t[15] = h;else h = t[15];
  let y = o ? void 0 : "hidden",
    b = o ? void 0 : ryt,
    _;
  if (t[16] !== d || t[17] !== n || t[18] !== i) _ = uA.jsx(LF, {
    code: d,
    filePath: n,
    width: i
  }), t[16] = d, t[17] = n, t[18] = i, t[19] = _;else _ = t[19];
  let S;
  if (t[20] !== y || t[21] !== b || t[22] !== _) S = uA.jsx(U, {
    flexDirection: "column",
    overflowY: y,
    maxHeight: b,
    children: _
  }), t[20] = y, t[21] = b, t[22] = _, t[23] = S;else S = t[23];
  let A;
  if (t[24] !== p || t[25] !== o) A = !o && uA.jsx(d$, {
    count: p,
    expandable: true
  }), t[24] = p, t[25] = o, t[26] = A;else A = t[26];
  let v;
  if (t[27] !== S || t[28] !== A || t[29] !== h) v = uA.jsx(qn, {
    children: uA.jsxs(U, {
      flexDirection: "column",
      children: [h, S, A]
    })
  }), t[27] = S, t[28] = A, t[29] = h, t[30] = v;else v = t[30];
  return v;
}
function userFacingName(input) {
  if (input?.file_path?.startsWith(gS())) return "Updated plan";
  return "Write";
}
function Ctl({
  type: e,
  content: t
}, {
  columns: n
}) {
  if (e !== "create") return false;
  if (typeof t !== "string") return false;
  let r = t.endsWith(oyt) ? ryt + 1 : ryt;
  return Htl(t, Math.max(1, n - 12), r);
}
function jvo(e) {
  if (!e?.file_path) return null;
  return kd(e.file_path);
}
function Itl(e, {
  verbose: t
}) {
  if (!e.file_path) return null;
  if (e.file_path.startsWith(gS())) return "";
  return uA.jsx(SN, {
    filePath: e.file_path,
    children: t ? e.file_path : kd(e.file_path)
  });
}
function xtl({
  file_path: e,
  content: t
}, {
  style: n,
  verbose: r
}) {
  return uA.jsx(Tef, {
    filePath: e,
    content: t,
    style: n,
    verbose: r
  });
}
function Tef(e) {
  let t = f6n.c(20),
    {
      filePath: n,
      content: r,
      style: o,
      verbose: s
    } = e,
    i;
  if (t[0] !== r || t[1] !== n) i = () => wef(n, r), t[0] = r, t[1] = n, t[2] = i;else i = t[2];
  let [a] = syt.useState(i),
    l;
  if (t[3] !== r) l = Gd(r), t[3] = r, t[4] = l;else l = t[4];
  let c = l,
    u;
  if (t[5] !== r || t[6] !== n || t[7] !== c || t[8] !== s) u = uA.jsx(TMe, {
    file_path: n,
    operation: "write",
    content: r,
    firstLine: c,
    verbose: s
  }), t[5] = r, t[6] = n, t[7] = c, t[8] = s, t[9] = u;else u = t[9];
  let d = u,
    p;
  if (t[10] !== d || t[11] !== a || t[12] !== n || t[13] !== c || t[14] !== o || t[15] !== s) p = uA.jsx(WriteRejectionBody, {
    promise: a,
    filePath: n,
    firstLine: c,
    createFallback: d,
    style: o,
    verbose: s
  }), t[10] = d, t[11] = a, t[12] = n, t[13] = c, t[14] = o, t[15] = s, t[16] = p;else p = t[16];
  let f;
  if (t[17] !== d || t[18] !== p) f = uA.jsx(syt.Suspense, {
    fallback: d,
    children: p
  }), t[17] = d, t[18] = p, t[19] = f;else f = t[19];
  return f;
}
function WriteRejectionBody(t0) {
  let t = f6n.c(8),
    {
      promise: n,
      filePath: r,
      firstLine: o,
      createFallback: s,
      style: i,
      verbose: a
    } = t0,
    data = syt.use(n);
  if (data.type === "create") return s;
  if (data.type === "error") {
    let u;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) u = uA.jsx(qn, {
      children: uA.jsx(w, {
        children: "(No changes)"
      })
    }), t[0] = u;else u = t[0];
    return u;
  }
  let c;
  if (t[1] !== data.oldContent || t[2] !== data.patch || t[3] !== r || t[4] !== o || t[5] !== i || t[6] !== a) c = uA.jsx(TMe, {
    file_path: r,
    operation: "update",
    patch: data.patch,
    firstLine: o,
    fileContent: data.oldContent,
    style: i,
    verbose: a
  }), t[1] = data.oldContent, t[2] = data.patch, t[3] = r, t[4] = o, t[5] = i, t[6] = a, t[7] = c;else c = t[7];
  return c;
}
async function wef(e, t) {
  try {
    let n = v8e.isAbsolute(e) ? e : v8e.resolve($t(), e),
      r = await N9t(n);
    if (r === null) return {
      type: "create"
    };
    let o;
    try {
      o = await Y8n(r);
    } finally {
      await r.close();
    }
    if (o === null) return {
      type: "create"
    };
    return {
      type: "update",
      patch: j6({
        filePath: e,
        fileContents: o,
        edits: [{
          old_string: o,
          new_string: t,
          replace_all: false
        }]
      }),
      oldContent: o
    };
  } catch (n) {
    if (gd(n)) T(`Failed to load rejection diff for ${e}: ${n.message}`, {
      level: "error"
    });else ke(n);
    return {
      type: "error"
    };
  }
}
function renderToolUseErrorMessage(result, {
  verbose: t
}) {
  if (!t && typeof result === "string" && xl(result, "tool_use_error")) return uA.jsx(qn, {
    children: uA.jsx(w, {
      color: "error",
      children: "Error writing file"
    })
  });
  return uA.jsx(AT, {
    result: result,
    verbose: t
  });
}
function renderToolResultMessage({
  filePath: e = "",
  content: t,
  structuredPatch: n,
  type: r,
  originalFile: o
}, _progressMessagesForMessage, {
  style: i,
  verbose: a
}) {
  if (!e) return null;
  switch (r) {
    case "create":
      {
        if (e.startsWith(gS()) && !a) {
          if (i !== "condensed") return uA.jsx(qn, {
            children: uA.jsx(w, {
              dimColor: true,
              children: "/plan to preview"
            })
          });
        } else if (i === "condensed" && !a) {
          let c = vtl(t);
          return uA.jsxs(w, {
            children: ["Wrote ", uA.jsx(w, {
              bold: true,
              children: c
            }), " lines to", " ", uA.jsx(w, {
              bold: true,
              children: v8e.relative($t(), e)
            })]
          });
        }
        return uA.jsx(FileWriteToolCreatedMessage, {
          filePath: e,
          content: t,
          verbose: a
        });
      }
    case "update":
      {
        let l = e.startsWith(gS());
        return uA.jsx(p6n, {
          filePath: e,
          structuredPatch: n,
          firstLine: Gd(t),
          fileContent: o ?? void 0,
          style: i,
          verbose: a,
          previewHint: l ? "/plan to preview" : void 0
        });
      }
  }
}
var f6n,
  v8e,
  syt,
  uA,
  ryt = 10,
  oyt = `
`;