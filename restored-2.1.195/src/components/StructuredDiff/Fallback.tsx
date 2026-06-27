// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gBn
// matched 2.1.88 source: src/components/StructuredDiff/Fallback.tsx
// class=modified  jaccard=0.4465  score=0.8086  fileCov=0.4993
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Yba(e) {
  let t = Kba.c(10),
    { patch: n, dim: r, width: o } = e,
    [s] = na(),
    i;
  if (t[0] !== r || t[1] !== n.lines || t[2] !== n.oldStart || t[3] !== s || t[4] !== o)
    ((i = formatDiff(n.lines, n.oldStart, o, r, s)),
      (t[0] = r),
      (t[1] = n.lines),
      (t[2] = n.oldStart),
      (t[3] = s),
      (t[4] = o),
      (t[5] = i));
  else i = t[5];
  let a = i,
    l;
  if (t[6] !== a) ((l = a.map(r_p)), (t[6] = a), (t[7] = l));
  else l = t[7];
  let c;
  if (t[8] !== l)
    ((c = Z8.jsx(U, {
      flexDirection: "column",
      flexGrow: 1,
      children: l,
    })),
      (t[8] = l),
      (t[9] = c));
  else c = t[9];
  return c;
}
function r_p(e, t) {
  return Z8.jsx(
    U,
    {
      children: e,
    },
    t,
  );
}
function transformLinesToObjects(lines) {
  return lines.map((t) => {
    if (t.startsWith("+"))
      return {
        code: t.slice(1),
        i: 0,
        type: "add",
        originalCode: t.slice(1),
      };
    if (t.startsWith("-"))
      return {
        code: t.slice(1),
        i: 0,
        type: "remove",
        originalCode: t.slice(1),
      };
    return {
      code: t.slice(1),
      i: 0,
      type: "nochange",
      originalCode: t.slice(1),
    };
  });
}
function s_p(e) {
  let t = [],
    n = 0;
  while (n < e.length) {
    let r = e[n];
    if (!r) {
      n++;
      continue;
    }
    if (r.type === "remove") {
      let o = [r],
        s = n + 1;
      while (s < e.length && e[s]?.type === "remove") {
        let a = e[s];
        if (a) o.push(a);
        s++;
      }
      let i = [];
      while (s < e.length && e[s]?.type === "add") {
        let a = e[s];
        if (a) i.push(a);
        s++;
      }
      if (o.length > 0 && i.length > 0) {
        let a = Math.min(o.length, i.length);
        for (let l = 0; l < a; l++) {
          let c = o[l],
            u = i[l];
          if (c && u)
            ((c.wordDiff = true), (u.wordDiff = true), (c.matchedLine = u), (u.matchedLine = c));
        }
        (t.push(...o.filter(Boolean)), t.push(...i.filter(Boolean)), (n = s));
      } else (t.push(r), n++);
    } else (t.push(r), n++);
  }
  return t;
}
function i_p(e, t) {
  return iao(e, t, {
    ignoreCase: false,
  });
}
function generateWordDiffElements(item, width, maxWidth, dim, overrideTheme) {
  let { type: s, i, wordDiff: a, matchedLine: l, originalCode: c } = item;
  if (!a || !l) return null;
  let u = s === "remove" ? c : l.originalCode,
    d = s === "remove" ? l.originalCode : c,
    p = i_p(u, d),
    f = u.length + d.length;
  if (
    p.filter((v) => v.added || v.removed).reduce((v, C) => v + C.value.length, 0) / f > n_p ||
    dim
  )
    return null;
  let h = s === "add" ? "+" : "-",
    y = h.length,
    b = Math.max(1, width - maxWidth - 1 - y),
    _ = [],
    S = [],
    A = 0;
  if (
    (p.forEach((v, C) => {
      let x = false,
        I;
      if (s === "add") {
        if (v.added) ((x = true), (I = "diffAddedWord"));
        else if (!v.removed) x = true;
      } else if (s === "remove") {
        if (v.removed) ((x = true), (I = "diffRemovedWord"));
        else if (!v.added) x = true;
      }
      if (!x) return;
      C1(v.value, b, "wrap")
        .split(
          `
`,
        )
        .forEach((P, O) => {
          if (!P) return;
          if (O > 0 || A + rn(P) > b) {
            if (S.length > 0)
              (_.push({
                content: [...S],
                contentWidth: A,
              }),
                (S = []),
                (A = 0));
          }
          (S.push(
            Z8.jsx(
              w,
              {
                backgroundColor: I,
                children: P,
              },
              `part-${C}-${O}`,
            ),
          ),
            (A += rn(P)));
        });
    }),
    S.length > 0)
  )
    _.push({
      content: S,
      contentWidth: A,
    });
  return _.map(({ content: v, contentWidth: C }, x) => {
    let I = `${s}-${i}-${x}`,
      k =
        s === "add"
          ? dim
            ? "diffAddedDimmed"
            : "diffAdded"
          : dim
            ? "diffRemovedDimmed"
            : "diffRemoved",
      D = x === 0 ? i : void 0,
      P = (D !== void 0 ? D.toString().padStart(maxWidth) : " ".repeat(maxWidth)) + " ",
      O = P.length + y + C,
      L = Math.max(0, width - O);
    return Z8.jsxs(
      U,
      {
        flexDirection: "row",
        children: [
          Z8.jsx(wI, {
            fromLeftEdge: true,
            children: Z8.jsxs(w, {
              color: overrideTheme ? "text" : void 0,
              backgroundColor: k,
              dimColor: dim,
              children: [P, h],
            }),
          }),
          Z8.jsxs(w, {
            color: overrideTheme ? "text" : void 0,
            backgroundColor: k,
            dimColor: dim,
            children: [v, " ".repeat(L)],
          }),
        ],
      },
      I,
    );
  });
}
function formatDiff(lines, startingLineNumber, width, dim, overrideTheme) {
  let s = Math.max(1, Math.floor(width)),
    i = transformLinesToObjects(lines),
    a = s_p(i),
    l = c_p(a, startingLineNumber),
    c = Math.max(...l.map(({ i: d }) => d), 0),
    u = Math.max(c.toString().length + 1, 0);
  return l.flatMap((d) => {
    let { type: p, code: f, i: m, wordDiff: g, matchedLine: h } = d;
    if (g && h) {
      let A = generateWordDiffElements(d, s, u, dim, overrideTheme);
      if (A !== null) return A;
    }
    let y = 2,
      b = Math.max(1, s - u - 1 - y);
    return C1(f, b, "wrap")
      .split(
        `
`,
      )
      .map((A, v) => {
        let C = `${p}-${m}-${v}`,
          x = v === 0 ? m : void 0,
          I = (x !== void 0 ? x.toString().padStart(u) : " ".repeat(u)) + " ",
          k = p === "add" ? "+" : p === "remove" ? "-" : " ",
          D = I.length + 1 + rn(A),
          P = Math.max(0, s - D),
          O =
            p === "add"
              ? dim
                ? "diffAddedDimmed"
                : "diffAdded"
              : p === "remove"
                ? dim
                  ? "diffRemovedDimmed"
                  : "diffRemoved"
                : void 0;
        return Z8.jsxs(
          U,
          {
            flexDirection: "row",
            children: [
              Z8.jsx(wI, {
                fromLeftEdge: true,
                children: Z8.jsxs(w, {
                  color: overrideTheme ? "text" : void 0,
                  backgroundColor: O,
                  dimColor: dim || p === "nochange",
                  children: [I, k],
                }),
              }),
              Z8.jsxs(w, {
                color: overrideTheme ? "text" : void 0,
                backgroundColor: O,
                dimColor: dim,
                children: [A, " ".repeat(P)],
              }),
            ],
          },
          C,
        );
      });
  });
}
function c_p(e, t) {
  let n = t,
    r = [],
    o = [...e];
  while (o.length > 0) {
    let s = o.shift(),
      { code: i, type: a, originalCode: l, wordDiff: c, matchedLine: u } = s,
      d = {
        code: i,
        type: a,
        i: n,
        originalCode: l,
        wordDiff: c,
        matchedLine: u,
      };
    switch (a) {
      case "nochange":
        (n++, r.push(d));
        break;
      case "add":
        (n++, r.push(d));
        break;
      case "remove": {
        r.push(d);
        let p = 0;
        while (o[0]?.type === "remove") {
          n++;
          let f = o.shift(),
            { code: m, type: g, originalCode: h, wordDiff: y, matchedLine: b } = f,
            _ = {
              code: m,
              type: g,
              i: n,
              originalCode: h,
              wordDiff: y,
              matchedLine: b,
            };
          (r.push(_), p++);
        }
        n -= p;
        break;
      }
    }
  }
  return r;
}
var Kba,
  Z8,
  n_p = 0.4;
