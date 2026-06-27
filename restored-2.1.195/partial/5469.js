// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qyc
// matched 2.1.88 source: src/components/PromptInput/SandboxPromptFooterHint.tsx
// class=partial  jaccard=0.094  score=0.2584  fileCov=0.1287
// note: low-confidence suggestion: src/components/PromptInput/SandboxPromptFooterHint.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Qyc = E(() => {
  WQr();
  P1o();
  p8();
  Ye();
  _Ge();
  _Zr();
  Tdr = R(rt(), 1), x6o = R(se(), 1);
});
function dfm() {
  let e = $en.c(8),
    t = Dc(),
    n = Ho(),
    r = zz.useRef(null),
    o = ks(),
    s;
  if (e[0] !== o || e[1] !== n || e[2] !== t) s = () => {
    let c = t.getState().frameUrls,
      u = Object.values(c).at(-1)?.url;
    if (!u) return !1;
    ac(u), xe("frame_link_open");
    let d = Object.keys(c).at(-1) ?? null;
    if (n(p => p.frameExpanded && p.frameNavPath === d ? p : {
      ...p,
      frameExpanded: !0,
      frameNavPath: d
    }), r.current) r.current();
    r.current = o.setTimeout(() => {
      n(ffm);
    }, sfm);
  }, e[0] = o, e[1] = n, e[2] = t, e[3] = s;else s = e[3];
  let i;
  if (e[4] === Symbol.for("react.memo_cache_sentinel")) i = {
    context: "Global"
  }, e[4] = i;else i = e[4];
  $r("app:openArtifact", s, i);
  let a, l;
  if (e[5] !== n) a = () => () => {
    r.current?.(), n(pfm);
  }, l = [n], e[5] = n, e[6] = a, e[7] = l;else a = e[6], l = e[7];
  zz.useEffect(a, l);
}
function pfm(e) {
  if (e.footerSelection === "frame" || !e.frameExpanded) return e;
  return {
    ...e,
    frameExpanded: !1
  };
}
function ffm(e) {
  if (e.footerSelection === "frame" || !e.frameExpanded) return e;
  return {
    ...e,
    frameExpanded: !1
  };
}
function t_c() {
  let e = $en.c(1);
  if (dfm(), !Ht(mfm)) return null;
  let n;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) n = CA.jsx(gfm, {}), e[0] = n;else n = e[0];
  return n;
}
function mfm(e) {
  return Object.keys(e.frameUrls).length > 0;
}
function vdr(e, t) {
  if (e.length === 0) return 0;
  if (t != null) {
    let n = e.findIndex(([r]) => r === t);
    if (n !== -1) return n;
  }
  return e.length - 1;
}
function hfm(e, t, n) {
  let r = e.length;
  if (r === 0) return {
    visible: [],
    before: 0,
    after: 0
  };
  let o = e.map(([u, d], p) => ({
      idx: p,
      name: L6o.parse(u).name,
      url: d.url,
      updatedAt: d.updatedAt
    })),
    s = Math.min(Math.max(n ?? r - 1, 0), r - 1);
  function i(u, d) {
    let p = 0;
    for (let f = u; f <= d; f++) p += (f > u ? b7e : 0) + rn(o[f].name);
    if (u > 0) p += rn(`+${u}`) + b7e;
    if (d < r - 1) p += b7e + rn(`+${r - 1 - d}`);
    return p;
  }
  let a = s,
    l = s;
  for (;;) {
    if (l < r - 1 && i(a, l + 1) <= t) {
      l++;
      continue;
    }
    if (a > 0 && i(a - 1, l) <= t) {
      a--;
      continue;
    }
    break;
  }
  let c = o.slice(a, l + 1);
  if (c.length === 1 && i(a, l) > t) {
    let u = i(a, l) - rn(c[0].name),
      d = Math.max(1, t - u);
    c = [{
      ...c[0],
      name: Rs(c[0].name, d)
    }];
  }
  return {
    visible: c,
    before: a,
    after: r - 1 - l
  };
}
function yfm(e) {
  let t = $en.c(13),
    {
      name: n,
      url: r,
      highlighted: o,
      navSelected: s,
      stale: i
    } = e,
    [a, l] = zz.useState(!1),
    c;
  if (t[0] !== r) c = () => void ac(r), t[0] = r, t[1] = c;else c = t[1];
  let u, d;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) u = () => l(!0), d = () => l(!1), t[2] = u, t[3] = d;else u = t[2], d = t[3];
  let p = o || a ? "claude" : void 0,
    f = i && !o && !a && !s,
    m;
  if (t[4] !== a || t[5] !== n || t[6] !== s || t[7] !== p || t[8] !== f) m = CA.jsx(w, {
    underline: a,
    inverse: s,
    color: p,
    dimColor: f,
    children: n
  }), t[4] = a, t[5] = n, t[6] = s, t[7] = p, t[8] = f, t[9] = m;else m = t[9];
  let g;
  if (t[10] !== c || t[11] !== m) g = CA.jsx(U, {
    flexShrink: 0,
    onClick: c,
    onMouseEnter: u,
    onMouseLeave: d,
    children: m
  }), t[10] = c, t[11] = m, t[12] = g;else g = t[12];
  return g;
}
function _fm(e) {
  return e.frameUrls;
}
function bfm(e) {
  return e.footerSelection === "frame";
}
function Sfm(e) {
  return e.frameNavPath;
}
function Efm(e) {
  return e.frameExpanded;
}
function Afm(e) {
  let [, t] = e;
  return Date.now() - t.updatedAt <= e_c;
}
function Hfm(e) {
  return e + 1;
}
var $en,
  L6o,
  Zyc,
  zz,
  CA,
  sfm = 15000,
  ifm = 30000,
  e_c = 1800000,
  afm = 60000,
  _7e = " \xB7 ",
  b7e,
  lfm = 2,
  R6o,
  cfm,
  ufm,
  gfm;