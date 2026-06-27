// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kLe
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var kLe = E(() => {
  _i();
  bW();
  Ye();
  xLe();
  Jt();
  ILe();
  cne();
  ql();
  d4t();
  Hlo();
  oda = R(lt(), 1), sda = R(rt(), 1), zNn = R(se(), 1);
  Uup = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g;
});
function ada(e) {
  return e.server ? `List MCP resources from server "${e.server}"` : "List all MCP resources";
}
function lda(e, t, {
  verbose: n
}) {
  if (!e || e.length === 0) return YNn.jsx(qn, {
    height: 1,
    children: YNn.jsx(Fl, {
      children: "(No resources found)"
    })
  });
  let r = De(e, null, 2);
  return YNn.jsx(J1, {
    content: r,
    verbose: n
  });
}
var YNn;