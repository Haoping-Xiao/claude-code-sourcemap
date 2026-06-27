// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ial
// class=new  (no 2.1.88 match)
// note: 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var ial = E(() => {
  Xa();
  np();
  Ye();
  es();
  OI();
  oal = R(lt(), 1), GMe = R(se(), 1), lsf = new RegExp(`^<${xFe}\\s+source="([^"]*)"([^>]*)>\\n?`), Jzn = `</${xFe}>`, ral = `
${Jzn}`, csf = /\buser="([^"]+)"/, usf = [`

${v3e(!1)}${ENt}`, `

${v3e(!1)}`, `

${v3e(!0)}${ENt}`, `

${v3e(!0)}`];
});
var lal = {};
_t(lal, {
  UserForkBoilerplateMessage: () => UserForkBoilerplateMessage
});
function UserForkBoilerplateMessage(e) {
  let t = aal.c(8),
    {
      addMargin: n,
      param: r
    } = e,
    {
      text: o
    } = r,
    s;
  if (t[0] !== o) {
    let d = o.replace(msf, "");
    s = d.startsWith(Z0t) ? d.slice(Z0t.length) : d, t[0] = o, t[1] = s;
  } else s = t[1];
  let i = s,
    a = n ? 1 : 0,
    l;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) l = e_t.jsx(w, {
    dimColor: !0,
    children: Cet
  }), t[2] = l;else l = t[2];
  let c;
  if (t[3] !== i) c = e_t.jsx(U, {
    paddingLeft: 1,
    children: e_t.jsx(w, {
      children: i
    })
  }), t[3] = i, t[4] = c;else c = t[4];
  let u;
  if (t[5] !== a || t[6] !== c) u = e_t.jsxs(U, {
    marginTop: a,
    backgroundColor: "userMessageBackground",
    paddingRight: 1,
    children: [l, c]
  }), t[5] = a, t[6] = c, t[7] = u;else u = t[7];
  return u;
}
var aal, e_t, msf;