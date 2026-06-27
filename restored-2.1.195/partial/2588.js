// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B_
// matched 2.1.88 source: src/components/PromptInput/PromptInputFooterSuggestions.tsx
// class=partial  jaccard=0.2484  score=0.5083  fileCov=0.327
// note: low-confidence suggestion: src/components/PromptInput/PromptInputFooterSuggestions.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var B_ = E(() => {
  Ye();
  Ozi = R(lt(), 1), slt = R(se(), 1);
});
function eKd(e) {
  if (e.startsWith("file-")) return "+";
  if (e.startsWith("mcp-resource-")) return mv;
  if (e.startsWith("mcp-template")) return mv;
  if (e.startsWith("agent-")) return "*";
  return "+";
}
function tKd(e, t, n = !1) {
  let r = e.toLowerCase();
  if (r.length !== e.length) return [];
  let o = r.indexOf(t);
  if (o !== -1) return [[o, o + t.length]];
  if (n) return [];
  let s = [],
    i = 0;
  for (let a of t) {
    let l = r.indexOf(a, i);
    if (l === -1) return [];
    let c = l + a.length,
      u = s.at(-1);
    if (u && u[1] === l) u[1] = c;else s.push([l, c]);
    i = c;
  }
  return s;
}
function MZr(e) {
  let t = OZr.c(13),
    {
      text: n,
      query: r,
      color: o,
      dimColor: s,
      bold: i,
      contiguousOnly: a
    } = e,
    l,
    c;
  if (t[0] !== i || t[1] !== o || t[2] !== a || t[3] !== s || t[4] !== r || t[5] !== n) {
    c = Symbol.for("react.early_return_sentinel");
    e: {
      let u = r ? tKd(n, r, a) : [];
      if (u.length === 0) {
        let m;
        if (t[8] !== i || t[9] !== o || t[10] !== s || t[11] !== n) m = pT.jsx(w, {
          color: o,
          dimColor: s,
          bold: i,
          children: n
        }), t[8] = i, t[9] = o, t[10] = s, t[11] = n, t[12] = m;else m = t[12];
        c = m;
        break e;
      }
      let d = [],
        p = (m, g, h) => {
          if (m >= g) return;
          d.push(pT.jsx(w, {
            color: h ? "suggestion" : o,
            dimColor: !h && s,
            bold: i,
            children: n.slice(m, g)
          }, m));
        },
        f = 0;
      for (let [m, g] of u) p(f, m, !1), p(m, g, !0), f = g;
      p(f, n.length, !1), l = pT.jsx(pT.Fragment, {
        children: d
      });
    }
    t[0] = i, t[1] = o, t[2] = a, t[3] = s, t[4] = r, t[5] = n, t[6] = l, t[7] = c;
  } else l = t[6], c = t[7];
  if (c !== Symbol.for("react.early_return_sentinel")) return c;
  return l;
}
function Nzi(e) {
  return e.startsWith("file-") || e.startsWith("mcp-resource-") || e.startsWith("mcp-template") || e.startsWith("agent-");
}
function jGe({
  suggestions: e,
  selectedSuggestion: t,
  maxColumnWidth: n,
  emptyMessage: r,
  overlay: o,
  noPad: s,
  onSelect: i,
  hoveredId: a,
  onHoverChange: l
}) {
  let {
      rows: c,
      columns: u
    } = br(),
    d = o ? Zzd : Math.max(1, Math.min(Math.max(6, Math.floor(c / 2)), c - 3));
  if (e.length === 0) {
    if (!r) return null;
    let I = s ? 0 : Math.max(0, d - 1);
    return pT.jsxs(U, {
      flexDirection: "column",
      justifyContent: o ? void 0 : "flex-end",
      children: [pT.jsx(Fl, {
        children: r
      }), Array.from({
        length: I
      }, (k, D) => pT.jsx(w, {
        children: " "
      }, `pad-${D}`))]
    });
  }
  let p = n ?? Math.max(...e.map(I => rn(I.displayText))) + 5,
    f = d >= 2,
    m = e.map(I => f ? rKd(I, u, p) : 1),
    g = Math.max(0, Math.min(t, e.length - 1)),
    h = g,
    y = g + 1,
    b = m[g] ?? 1,
    _ = 0,
    S = Math.floor(d / 2);
  while (h > 0 && b < d && _ + (m[h - 1] ?? 1) <= S) h--, _ += m[h] ?? 1;
  b += _;
  while (y < e.length && b + (m[y] ?? 1) <= d) b += m[y] ?? 1, y++;
  while (h > 0 && b + (m[h - 1] ?? 1) <= d) h--, b += m[h] ?? 1;
  let A = e.slice(h, y),
    v = s ? 0 : Math.max(0, d - b),
    C = e[t]?.id,
    x = a != null && e.some(I => I.id === a) ? a : void 0;
  return pT.jsxs(U, {
    flexDirection: "column",
    justifyContent: o ? void 0 : "flex-end",
    onMouseLeave: i ? () => l?.(null) : void 0,
    children: [A.map((I, k) => {
      let D = h + k,
        P = pT.jsx(nKd, {
          item: I,
          maxColumnWidth: p,
          isSelected: I.id === (x ?? C),
          allowWrap: f
        }, I.id);
      if (!i) return P;
      return pT.jsx(U, {
        onMouseEnter: () => l?.(I.id),
        onClick: () => i(D),
        children: P
      }, I.id);
    }), Array.from({
      length: v
    }, (I, k) => pT.jsx(w, {
      children: " "
    }, `pad-${k}`))]
  });
}
function Uzi(e) {
  let n = e.kind === void 0 || e.kind === "action" ? "" : e.kind === "info" ? "config" : e.kind,
    r = e.kind === void 0 ? "" : n + Ff(" ", 7 - rn(n)),
    o = e.sourceTag ? `[${e.sourceTag}] ` : "";
  return {
    kindLaneText: r,
    kindLabel: n,
    sourceText: o
  };
}
function rKd(e, t, n) {
  if (Nzi(e.id) || !e.description) return 1;
  let r = Math.min(n, Math.floor(t * 0.4)),
    o = e.tag ? rn(`[${e.tag}] `) : 0,
    {
      kindLaneText: s,
      sourceText: i
    } = Uzi(e),
    a = Math.max(0, t - r - o - rn(s) - rn(i) - 4);
  if (a <= 0) return 1;
  let l = e.description.replace($Zr, " ").trim();
  return rn(l) > a ? 2 : 1;
}
function oKd(e, t) {
  if (t <= 0 || rn(e) <= t) return [e, ""];
  let n = rae(e, t),
    r = e.slice(n.length);
  if (r.startsWith(" ")) return [n, r.trimStart()];
  let o = n.lastIndexOf(" ");
  if (o > 0) return [n.slice(0, o), e.slice(o + 1)];
  return [n, r];
}
var OZr,
  NZr,
  pT,
  $Zr,
  Zzd = 5,
  nKd,
  Bzi;