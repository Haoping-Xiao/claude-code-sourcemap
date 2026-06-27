// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hel
// matched 2.1.88 source: src/tools/FileEditTool/utils.ts
// class=modified (alt of src/tools/FileEditTool/utils.ts)  jaccard=0.0834  score=0.4721  fileCov=0.092
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hel] deps: oc, ys
wZp = new Ael();
function Tel(e) {
  return e.replaceAll(gvo, "'").replaceAll(V8n, "'").replaceAll(hvo, '"').replaceAll(yvo, '"');
}
function _vo(e) {
  let t = e.split(/(\r\n|\n|\r)/),
    n = "";
  for (let r = 0; r < t.length; r++) {
    let o = t[r];
    if (o !== void 0)
      if (r % 2 === 0) n += o.replace(/\s+$/, "");
      else n += o;
  }
  return n;
}
function fvo(e) {
  return e.replace(/(\\\\)|\\u([0-9a-fA-F]{4})/g, (t, n, r) =>
    n !== void 0 ? t : String.fromCharCode(parseInt(r, 16)),
  );
}
function vel(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r >= 128) {
      t += "\\\\u";
      for (let o of r.toString(16).padStart(4, "0")) t += o >= "a" ? `[${o}${o.toUpperCase()}]` : o;
    } else t += wx(e[n]);
  }
  return t;
}
function wel(e) {
  return bvo.test(e) || Svo.test(e);
}
function Cel(e, t, n) {
  if (e === t) return n;
  if (Svo.test(e) && new RegExp(`^${vel(e)}$`).test(t)) {
    let r = new Map(),
      o = 0,
      s = 0;
    for (let i = 0, a = 0; i < e.length; i++) {
      let l = e.charCodeAt(i);
      if (l >= 128) {
        let c = t.slice(a + 2, a + 6);
        r.set(l, c);
        for (let u of c)
          if (u >= "a" && u <= "f") s++;
          else if (u >= "A" && u <= "F") o++;
        a += 6;
      } else a += 1;
    }
    return n.replace(/[\u0080-\uffff]/g, (i) => {
      let a = i.charCodeAt(0),
        l = r.get(a);
      if (l !== void 0) return "\\u" + l;
      let c = a.toString(16).padStart(4, "0");
      return "\\u" + (o > s ? c.toUpperCase() : c);
    });
  }
  if (bvo.test(e) && fvo(e) === t) return fvo(n);
  return n;
}
function _Me(e, t) {
  if (e.includes(t)) return t;
  let n = Tel(t),
    o = Tel(e).indexOf(n);
  if (o !== -1) return e.substring(o, o + t.length);
  if (bvo.test(t)) {
    let s = fvo(t);
    if (s !== t && e.includes(s)) return s;
  }
  if (Svo.test(t)) {
    let s = e.match(new RegExp(vel(t)));
    if (s) return s[0];
  }
  return null;
}
function Yht(e, t, n) {
  if (e === t) return n;
  let r = t.includes(hvo) || t.includes(yvo),
    o = t.includes(gvo) || t.includes(V8n);
  if (!r && !o) return n;
  let s = n;
  if (r) s = CZp(s);
  if (o) s = IZp(s);
  return s;
}
function Iel(e, t) {
  if (t === 0) return true;
  let n = e[t - 1];
  return (
    n === " " ||
    n === "\t" ||
    n ===
      `
` ||
    n === "\r" ||
    n === "(" ||
    n === "[" ||
    n === "{" ||
    n === "\u2014" ||
    n === "\u2013"
  );
}
function CZp(e) {
  let t = [...e],
    n = [];
  for (let r = 0; r < t.length; r++)
    if (t[r] === '"') n.push(Iel(t, r) ? hvo : yvo);
    else n.push(t[r]);
  return n.join("");
}
function IZp(e) {
  let t = [...e],
    n = [];
  for (let r = 0; r < t.length; r++)
    if (t[r] === "'") {
      let o = r > 0 ? t[r - 1] : void 0,
        s = r < t.length - 1 ? t[r + 1] : void 0,
        i = o !== void 0 && /\p{L}/u.test(o),
        a = s !== void 0 && /\p{L}/u.test(s);
      if (i && a) n.push(V8n);
      else n.push(Iel(t, r) ? gvo : V8n);
    } else n.push(t[r]);
  return n.join("");
}
function xel(e, t, n, r = false) {
  let o = r ? (i, a, l) => i.replaceAll(a, () => l) : (i, a, l) => i.replace(a, () => l);
  if (n !== "") return o(e, t, n);
  return !t.endsWith(`
`) &&
    e.includes(
      t +
        `
`,
    )
    ? o(
        e,
        t +
          `
`,
        n,
      )
    : o(e, t, n);
}
function O9t({ filePath: e, fileContents: t, oldString: n, newString: r, replaceAll: o = false }) {
  return Evo({
    filePath: e,
    fileContents: t,
    edits: [
      {
        old_string: n,
        new_string: r,
        replace_all: o,
      },
    ],
  });
}
function Evo({ filePath: e, fileContents: t, edits: n }) {
  if (kel(t, n))
    return {
      patch: j6({
        filePath: e,
        fileContents: t,
        edits: [
          {
            old_string: t,
            new_string: t,
            replace_all: false,
          },
        ],
      }),
      updatedFile: "",
    };
  let r = getPatchForEdits(t, n);
  return {
    patch: yMe({
      filePath: e,
      oldContent: dY(t),
      newContent: dY(r),
    }),
    updatedFile: r,
  };
}
function kel(e, t) {
  return (
    !e && t.length === 1 && t[0] !== void 0 && t[0].old_string === "" && t[0].new_string === ""
  );
}
function getPatchForEdits(e, t) {
  if (kel(e, t)) return "";
  let n = e,
    r = [];
  for (let o of t) {
    let s = o.old_string.replace(/\n+$/, "");
    for (let a of r)
      if (s !== "" && a.includes(s))
        throw Error(
          "Cannot edit file: old_string is a substring of a new_string from a previous edit.",
        );
    let i = n;
    if (
      ((n = o.old_string === "" ? o.new_string : xel(n, o.old_string, o.new_string, o.replace_all)),
      n === i)
    )
      throw new O_e("String not found in file. Failed to apply edit.");
    r.push(o.new_string);
  }
  if (n === e) throw Error("Original and edited file match exactly. Failed to apply edit.");
  return n;
}
function getSnippetForTwoFileDiff(e, t) {
  let n = but("file.txt", "file.txt", e, t, void 0, void 0, {
    context: 8,
    timeout: W8n,
  });
  if (!n) return "";
  let r = pqe(),
    o = n.hunks
      .map((d) => ({
        startLine: d.oldStart,
        content: d.lines
          .filter((p) => !p.startsWith("-") && !p.startsWith("\\"))
          .map((p) => p.slice(1)).join(`
`),
        tabAwareSeparator: r,
      }))
      .map(Ypn).join(`
...
`);
  if (o.length <= pvo) return o;
  let s = o.lastIndexOf(
      `
`,
      pvo,
    ),
    i = s > 0 ? o.slice(0, s) : o.slice(0, pvo),
    a = 1,
    l = 1,
    u =
      hu(
        o,
        `
`,
        i.length + a,
      ) + l;
  return `${i}

... [${u} lines truncated] ...`;
}
function Lel(e) {
  return e.map((t) => {
    let n = [],
      r = [],
      o = [];
    for (let s of t.lines)
      if (s.startsWith(" ")) (n.push(s.slice(1)), r.push(s.slice(1)), o.push(s.slice(1)));
      else if (s.startsWith("-")) r.push(s.slice(1));
      else if (s.startsWith("+")) o.push(s.slice(1));
    return {
      old_string: r.join(`
`),
      new_string: o.join(`
`),
      replace_all: false,
    };
  });
}
function kZp(e) {
  let t = e,
    n = [];
  for (let [r, o] of Object.entries(xZp)) {
    let s = t;
    if (((t = t.replaceAll(r, o)), s !== t))
      n.push({
        from: r,
        to: o,
      });
  }
  return {
    result: t,
    appliedReplacements: n,
  };
}
function Del({ file_path: e, edits: t }) {
  if (t.length === 0)
    return {
      file_path: e,
      edits: t,
    };
  let n = /\.(md|mdx)$/i.test(e);
  try {
    let r = ds(e);
    if ((Fc(e) || Fc(r)) && !(qp(e) || qp(r)))
      return {
        file_path: e,
        edits: t,
      };
    let o = dvo(r);
    return {
      file_path: e,
      edits: t.map(({ old_string: s, new_string: i, replace_all: a }) => {
        let l = n ? i : _vo(i);
        if (o.includes(s))
          return {
            old_string: s,
            new_string: l,
            replace_all: a,
          };
        let { result: c, appliedReplacements: u } = kZp(s);
        if (o.includes(c)) {
          let d = l;
          for (let { from: p, to: f } of u) d = d.replaceAll(p, f);
          return {
            old_string: c,
            new_string: d,
            replace_all: a,
          };
        }
        return {
          old_string: s,
          new_string: l,
          replace_all: a,
        };
      }),
    };
  } catch (r) {
    if (!wn(r))
      T(
        `Failed to read ${e} for edit normalization: ${r instanceof Error ? r.message : String(r)}`,
        {
          level: "error",
        },
      );
  }
  return {
    file_path: e,
    edits: t,
  };
}
function RZp(e, t, n) {
  if (
    e.length === t.length &&
    e.every((a, l) => {
      let c = t[l];
      return (
        c !== void 0 &&
        a.old_string === c.old_string &&
        a.new_string === c.new_string &&
        a.replace_all === c.replace_all
      );
    })
  )
    return true;
  let r = null,
    o = null,
    s = null,
    i = null;
  try {
    r = getPatchForEdits(n, e);
  } catch (a) {
    o = be(a);
  }
  try {
    s = getPatchForEdits(n, t);
  } catch (a) {
    i = be(a);
  }
  if (o !== null && i !== null) return o === i;
  if (o !== null || i !== null) return false;
  return r === s;
}
function Pel(e, t) {
  if (e.file_path !== t.file_path) return false;
  if (
    e.edits.length === t.edits.length &&
    e.edits.every((r, o) => {
      let s = t.edits[o];
      return (
        s !== void 0 &&
        r.old_string === s.old_string &&
        r.new_string === s.new_string &&
        r.replace_all === s.replace_all
      );
    })
  )
    return true;
  let n = "";
  if (!Fc(e.file_path) || qp(e.file_path))
    try {
      n = dvo(e.file_path);
    } catch (r) {
      if (!wn(r)) throw r;
    }
  return RZp(e.edits, t.edits, n);
}
var gvo = "\u2018",
  V8n = "\u2019",
  hvo = "\u201C",
  yvo = "\u201D",
  bvo,
  Svo,
  pvo = 8192,
  xZp;
