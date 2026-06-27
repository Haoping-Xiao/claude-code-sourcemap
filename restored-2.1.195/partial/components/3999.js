// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E8e
// matched 2.1.88 source: src/components/FileEditToolDiff.tsx
// class=partial  jaccard=0.2313  score=0.489  fileCov=0.305
// note: low-confidence suggestion: src/components/FileEditToolDiff.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var E8e = E(() => {
  Ye();
  Bel = R(lt(), 1), Uel = R(se(), 1);
});
function wvo(e) {
  let t = vvo.c(9),
    n;
  if (t[0] !== e.edits || t[1] !== e.file_path || t[2] !== e.remoteOldContent || t[3] !== e.skipLocalRead) n = () => PZp(e.file_path, e.edits, e.remoteOldContent, e.skipLocalRead ?? false), t[0] = e.edits, t[1] = e.file_path, t[2] = e.remoteOldContent, t[3] = e.skipLocalRead, t[4] = n;else n = t[4];
  let [r] = Jht.useState(n),
    o;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) o = A8e.jsx(Q4, {
    paddingX: 0,
    children: A8e.jsx(w, {
      dimColor: true,
      children: "\u2026"
    })
  }), t[5] = o;else o = t[5];
  let s;
  if (t[6] !== r || t[7] !== e.file_path) s = A8e.jsx(Jht.Suspense, {
    fallback: o,
    children: A8e.jsx(DZp, {
      promise: r,
      file_path: e.file_path
    })
  }), t[6] = r, t[7] = e.file_path, t[8] = s;else s = t[8];
  return s;
}
function DZp(e) {
  let t = vvo.c(6),
    {
      promise: n,
      file_path: r
    } = e,
    {
      patch: o,
      firstLine: s,
      fileContent: i
    } = Jht.use(n),
    {
      columns: a
    } = br(),
    l;
  if (t[0] !== a || t[1] !== i || t[2] !== r || t[3] !== s || t[4] !== o) l = A8e.jsx(Q4, {
    paddingX: 0,
    children: A8e.jsx($5e, {
      hunks: o,
      dim: false,
      width: a,
      filePath: r,
      firstLine: s,
      fileContent: i
    })
  }), t[0] = a, t[1] = i, t[2] = r, t[3] = s, t[4] = o, t[5] = l;else l = t[5];
  return l;
}
async function PZp(e, t, n, r) {
  let o = t.filter(i => i.old_string != null && i.new_string != null),
    s = o.length === 1 ? o[0] : void 0;
  if (n === void 0 && !r) {
    if (s && s.old_string.length >= SMe) return Xht(e, [s]);
  }
  try {
    if (n !== void 0) {
      let a = o.map(l => Tvo(n, l));
      return {
        patch: j6({
          filePath: e,
          fileContents: n,
          edits: a
        }),
        firstLine: Gd(n),
        fileContent: n
      };
    }
    if (r) return Xht(e, o);
    let i = await N9t(e);
    if (i === null) return Xht(e, o);
    try {
      if (!s || s.old_string === "") {
        let u = await Y8n(i);
        if (u === null) return Xht(e, o);
        let d = o.map(p => Tvo(u, p));
        return {
          patch: j6({
            filePath: e,
            fileContents: u,
            edits: d
          }),
          firstLine: Gd(u),
          fileContent: u
        };
      }
      let a = await Hvo(i, s.old_string, Kht);
      if (a.truncated || a.content === "") return Xht(e, [s]);
      let l = Tvo(a.content, s),
        c = j6({
          filePath: e,
          fileContents: a.content,
          edits: [l]
        });
      return {
        patch: q8n(c, a.lineOffset - 1),
        firstLine: a.lineOffset === 1 ? Gd(a.content) : null,
        fileContent: a.content
      };
    } finally {
      await i.close();
    }
  } catch (i) {
    if (gd(i)) T(`FileEditToolDiff: fs error computing diff for ${e}: ${i.message}`, {
      level: "error"
    });else ke(i);
    return Xht(e, o);
  }
}
function Xht(e, t) {
  return {
    patch: t.flatMap(n => j6({
      filePath: e,
      fileContents: n.old_string,
      edits: [n]
    })),
    firstLine: null,
    fileContent: void 0
  };
}
function Tvo(e, t) {
  let n = _Me(e, t.old_string) || t.old_string,
    r = Yht(t.old_string, n, t.new_string);
  return {
    ...t,
    old_string: n,
    new_string: r
  };
}
var vvo, Jht, A8e;