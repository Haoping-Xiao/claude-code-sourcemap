// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fel
// matched 2.1.88 source: src/components/HighlightedCode/Fallback.tsx
// class=modified  jaccard=0.4096  score=0.7881  fileCov=0.4603
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Fel = E(() => {
  _i();
  Ye();
  bMe();
  je();
  Dpe();
  At();
  vn();
  X8n();
  sr();
  E8e();
  T4t();
  ((vvo = R(lt(), 1)), (Jht = R(rt(), 1)), (A8e = R(se(), 1)));
});
function jel(e, t, n) {
  let r = JSs(n, t),
    o = H8e.get(r);
  if (o !== void 0) return (H8e.delete(r), H8e.set(r, o), o);
  let s = e.highlight(t, {
    language: n,
  });
  if (H8e.size >= MZp) {
    let i = H8e.keys().next().value;
    if (i !== void 0) H8e.delete(i);
  }
  return (H8e.set(r, s), s);
}
function Wel(e) {
  let t = Cvo.c(15),
    { code: n, filePath: r, dim: o, skipColoring: s } = e,
    i = o === void 0 ? false : o,
    a = s === void 0 ? false : s,
    l;
  if (t[0] !== n) ((l = dY(n)), (t[0] = n), (t[1] = l));
  else l = t[1];
  let c = l;
  if (a) {
    let m;
    if (t[2] !== c)
      ((m = Qht.jsx(bd, {
        children: c,
      })),
        (t[2] = c),
        (t[3] = m));
    else m = t[3];
    let g;
    if (t[4] !== i || t[5] !== m)
      ((g = Qht.jsx(w, {
        dimColor: i,
        children: m,
      })),
        (t[4] = i),
        (t[5] = m),
        (t[6] = g));
    else g = t[6];
    return g;
  }
  let u;
  if (t[7] !== r) ((u = Gel.extname(r).slice(1)), (t[7] = r), (t[8] = u));
  else u = t[8];
  let d = u,
    p;
  if (t[9] !== c || t[10] !== d)
    ((p = Qht.jsx($Zp, {
      codeWithSpaces: c,
      language: d,
    })),
      (t[9] = c),
      (t[10] = d),
      (t[11] = p));
  else p = t[11];
  let f;
  if (t[12] !== i || t[13] !== p)
    ((f = Qht.jsx(w, {
      dimColor: i,
      children: p,
    })),
      (t[12] = i),
      (t[13] = p),
      (t[14] = f));
  else f = t[14];
  return f;
}
function $Zp(e) {
  let t = Cvo.c(8),
    { codeWithSpaces: n, language: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((o = GDe()), (t[0] = o));
  else o = t[0];
  let s = o,
    i;
  if (t[1] !== n || t[2] !== r) {
    e: {
      let c = "markdown";
      if (r)
        if (s.supportsLanguage(r)) c = r;
        else T(`Language not supported while highlighting code, falling back to markdown: ${r}`);
      try {
        i = jel(s, n, c);
      } catch (u) {
        let d = u;
        if (d instanceof Error && d.message.includes("Unknown language")) {
          T(`Language not supported while highlighting code, falling back to markdown: ${d}`);
          let p;
          if (t[4] !== n) ((p = jel(s, n, "markdown")), (t[4] = n), (t[5] = p));
          else p = t[5];
          i = p;
          break e;
        }
        i = n;
      }
    }
    ((t[1] = n), (t[2] = r), (t[3] = i));
  } else i = t[3];
  let a = i,
    l;
  if (t[6] !== a)
    ((l = Qht.jsx(bd, {
      children: a,
    })),
      (t[6] = a),
      (t[7] = l));
  else l = t[7];
  return l;
}
var Cvo,
  Gel,
  Qht,
  MZp = 500,
  H8e;
