// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XMl
// matched 2.1.88 source: src/utils/Cursor.ts
// class=modified (alt of src/utils/Cursor.ts)  jaccard=0.0475  score=0.8441  fileCov=0.0479
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module XMl] deps: @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, components/ScrollKeybindingHandler.tsx
((KMl = R(lt(), 1)), (b1o = R(rt(), 1)), (OOe = R(se(), 1)));
function QMl(e, t) {
  let n = Math.max(1, Math.floor(t) || 1),
    r =
      t > 0
        ? SB(e, n, {
            hard: true,
            trim: false,
          })
        : e,
    o = [],
    s = 0,
    i = -1,
    a = r.split(`
`);
  for (let l = 0; l < a.length; l++) {
    let c = a[l] ?? "";
    if (c.length === 0) {
      if (
        ((i = e.indexOf(
          `
`,
          i + 1,
        )),
        i !== -1)
      ) {
        let f = i;
        o.push(
          gtr({
            text: c,
            startOffset: f,
            isPrecededByNewline: mtr(e, f, l === 0),
            endsWithNewline: true,
          }),
        );
      } else {
        let f = e.length;
        o.push(
          gtr({
            text: c,
            startOffset: f,
            isPrecededByNewline: mtr(e, f, l === 0),
            endsWithNewline: false,
          }),
        );
      }
      continue;
    }
    let u = e.indexOf(c, s);
    if (u === -1) {
      let f = s;
      (o.push(
        gtr({
          text: c,
          startOffset: f,
          isPrecededByNewline: mtr(e, f, l === 0),
          endsWithNewline: false,
        }),
      ),
        (s = f + c.length));
      continue;
    }
    s = u + c.length;
    let d = u + c.length,
      p =
        d < e.length &&
        e[d] ===
          `
`;
    if (p) i = d;
    o.push(
      gtr({
        text: c,
        startOffset: u,
        isPrecededByNewline: mtr(e, u, l === 0),
        endsWithNewline: p,
      }),
    );
  }
  return Object.freeze({
    text: e,
    columns: n,
    lines: Object.freeze(o),
  });
}
function nLf(e, t) {
  let n = t$l(t, 0, Math.max(0, e.lines.length - 1));
  return (
    e.lines[n] ?? {
      text: "",
      startOffset: 0,
      isPrecededByNewline: true,
      endsWithNewline: false,
    }
  );
}
function ZMl(e, t) {
  if (e.lines.length === 0)
    return {
      line: 0,
      column: 0,
    };
  let n = t$l(t, 0, e.text.length);
  for (let s = 0; s < e.lines.length; s++) {
    let i = e.lines[s],
      a = e.lines[s + 1];
    if (n >= i.startOffset && (!a || n < a.startOffset)) {
      let l = n - i.startOffset,
        c;
      if (i.isPrecededByNewline) c = JMl(i.text, l);
      else {
        let u = i.text.length - i.text.trimStart().length;
        if (l < u) c = 0;
        else c = JMl(i.text.slice(u), l - u);
      }
      return {
        line: s,
        column: c,
      };
    }
  }
  let r = e.lines.length - 1,
    o = e.lines[r];
  return {
    line: r,
    column: rn(o.text),
  };
}
function e$l(e, t, n) {
  if (e.lines.length === 0) return 0;
  let r = nLf(e, t);
  if (r.text.length === 0 && r.endsWithNewline) return r.startOffset;
  let o = r.isPrecededByNewline ? 0 : r.text.length - r.text.trimStart().length,
    s = rLf(r.text.slice(o), Math.max(0, n)) + o;
  return r.startOffset + s;
}
function JMl(e, t) {
  if (t <= 0) return 0;
  if (t >= e.length) return rn(e);
  return rn(e.slice(0, t));
}
function rLf(e, t) {
  if (t <= 0 || e.length === 0) return 0;
  let n = 0,
    r = 0;
  for (let o of e) {
    let s = rn(o);
    if (n + s > t) break;
    ((n += s), (r += o.length));
  }
  return r;
}
function mtr(e, t, n) {
  if (n) return true;
  return (
    t > 0 &&
    e[t - 1] ===
      `
`
  );
}
function gtr(e) {
  return Object.freeze(e);
}
function t$l(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
