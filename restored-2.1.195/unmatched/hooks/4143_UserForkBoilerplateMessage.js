// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ial
// matched 2.1.88 source: src/ink/components/Box.tsx
// class=new  jaccard=0.0491  score=0.2679  fileCov=0.0567
// note: nearest: src/ink/components/Box.tsx (0.0491); dir inferred from dep-graph -> hooks; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: UserForkBoilerplateMessage
// [unwrapped __esm module ial] deps: @xmldom/xmldom/lib/entities.js, env-paths/index.js, hooks/useTerminalSize.ts, utils/profilerBase.ts, fast-xml-parser/lib/fxp.cjs
oal = R(lt(), 1), GMe = R(se(), 1), lsf = new RegExp(`^<${xFe}\\s+source="([^"]*)"([^>]*)>\\n?`), Jzn = `</${xFe}>`, ral = `
${Jzn}`, csf = /\buser="([^"]+)"/, usf = [`

${v3e(false)}${ENt}`, `

${v3e(false)}`, `

${v3e(true)}${ENt}`, `

${v3e(true)}`];
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
    dimColor: true,
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