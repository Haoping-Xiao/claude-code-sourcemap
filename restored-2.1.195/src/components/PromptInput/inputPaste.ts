// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sbc
// matched 2.1.88 source: src/components/PromptInput/inputPaste.ts
// class=modified  jaccard=0.5386  score=1  fileCov=0.5386
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var sbc = E(() => {
  ft();
  I0n();
  HI();
  wr();
  uf();
  FTt = R(rt(), 1);
});
function Omm(e, t, n = false) {
  if ((!n && e.length <= ibc) || e.length <= jTt)
    return {
      truncatedText: e,
      placeholderContent: "",
    };
  let r = Math.floor(jTt / 2),
    o = Math.floor(jTt / 2),
    s = e.slice(0, r),
    i = e.slice(-o),
    a = e.slice(r, -o),
    l = L0e(a),
    u = Nmm(t, l);
  return {
    truncatedText: s + u + i,
    placeholderContent: a,
  };
}
function Nmm(e, t) {
  return `[...Truncated text #${e} +${t} lines...]`;
}
function abc(e, t) {
  if (e.length <= ibc)
    return {
      newInput: e,
      newPastedContents: t,
    };
  let n = Object.keys(t).map(Number),
    r = n.length > 0 ? Math.max(...n) + 1 : 1,
    o = Math.floor(jTt / 2),
    s = e.length - Math.floor(jTt / 2),
    i = new Set(),
    a = new Set(),
    l = [],
    c = e,
    u = jM(e);
  for (let g = u.length - 1; g >= 0; g--) {
    let h = u[g],
      y = t[h.id];
    if (!y) continue;
    let b = h.index + h.match.length,
      _ = b > o && h.index < s;
    if (y.type !== "text") {
      if (_) (l.unshift(h.match), (c = c.slice(0, h.index) + c.slice(b)));
      continue;
    }
    if (!_) {
      a.add(h.id);
      continue;
    }
    ((c = c.slice(0, h.index) + y.content + c.slice(b)), i.add(h.id));
  }
  let { truncatedText: d, placeholderContent: p } = Omm(c, r, true);
  if (!p)
    return {
      newInput: e,
      newPastedContents: t,
    };
  let f = d;
  if (l.length > 0) {
    let g = Math.floor(jTt / 2);
    f = d.slice(0, g) + l.join("") + d.slice(g);
  }
  let m = {};
  for (let [g, h] of Object.entries(t)) {
    let y = Number(g);
    if (i.has(y) && !a.has(y)) continue;
    m[y] = h;
  }
  return (
    (m[r] = {
      id: r,
      type: "text",
      content: p,
    }),
    {
      newInput: f,
      newPastedContents: m,
    }
  );
}
var ibc = 10000 /* 1e4 */,
  jTt = 1000;
