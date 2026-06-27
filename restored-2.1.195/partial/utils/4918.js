// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gql
// matched 2.1.88 source: src/commands/install-github-app/ErrorStep.tsx
// class=partial  jaccard=0.1814  score=0.2872  fileCov=0.3299
// note: low-confidence suggestion: src/commands/install-github-app/ErrorStep.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var gql = E(() => {
  Ye();
  kt();
  er();
  je();
  uf();
  dr();
  dql();
  SEe();
  s2o = R(lt(), 1), wse = R(se(), 1);
});
function bql() {
  let e = zx("tengu_startup_announcements", hql),
    t = O4f().safeParse(e);
  return t.success ? t.data : hql;
}
function Sql(e) {
  return e.requiresModel === void 0 || xa(e.requiresModel);
}
function kor(e) {
  if (xor !== void 0) return xor;
  let t = Dt().announcementImpressions ?? {},
    n = bql().filter(r => (t[r.id] ?? 0) < r.maxImpressions && Sql(r)).sort((r, o) => o.priority - r.priority)[0];
  if (e && n !== void 0) xor = n;
  return n;
}
function Eql() {
  let e = bql().filter(Sql).sort((t, n) => n.priority - t.priority)[0];
  if (e === void 0) return false;
  return JSON.stringify({
    id: e.id,
    title: e.title,
    text: e.text
  });
}
function N4f() {
  xor = void 0;
}
function Aql() {
  let e = yql.c(14),
    t = gVe(),
    [n] = _ql.useState(B4f),
    r;
  if (e[0] !== t || e[1] !== n) r = t ? kor(true) : n, e[0] = t, e[1] = n, e[2] = r;else r = e[2];
  let o = r,
    s;
  if (e[3] !== o) s = () => {
    if (!o) return;
    gn(d => ({
      ...d,
      announcementImpressions: {
        ...d.announcementImpressions,
        [o.id]: (d.announcementImpressions?.[o.id] ?? 0) + 1
      }
    }));
  }, e[3] = o, e[4] = s;else s = e[4];
  let i = o !== void 0,
    a;
  if (e[5] !== i) a = {
    enabled: i
  }, e[5] = i, e[6] = a;else a = e[6];
  if (b6("startup-announcement", s, a), !o) return null;
  let l;
  if (e[7] !== o.title) l = o.title ? QXt.jsx(w, {
    color: "claude",
    children: o.title
  }) : null, e[7] = o.title, e[8] = l;else l = e[8];
  let c;
  if (e[9] !== o.text) c = QXt.jsx(zg, {
    children: o.text
  }), e[9] = o.text, e[10] = c;else c = e[10];
  let u;
  if (e[11] !== l || e[12] !== c) u = QXt.jsxs(U, {
    flexDirection: "column",
    children: [l, c]
  }), e[11] = l, e[12] = c, e[13] = u;else u = e[13];
  return u;
}
function B4f() {
  return kor(false);
}
var yql, _ql, QXt, O4f, hql, xor;