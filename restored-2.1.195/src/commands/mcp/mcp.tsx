// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xrr
// matched 2.1.88 source: src/commands/mcp/mcp.tsx
// class=modified  jaccard=0.3404  score=0.5726  fileCov=0.4564
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xrr = E(() => {
  si();
  Cc();
  Bs();
  B_();
  MEt();
  eE();
  kP();
  O0();
  Ye();
  ps();
  uo();
  w8();
  At();
  vq();
  _k();
  gHe();
  lE();
  NKe();
  dr();
  sr();
  E2l();
  N2l();
  F2l();
  K2l();
  ojl();
  Bjl();
  cUo();
  Qjl();
  n4l();
  ((AXt = R(lt(), 1)), (UT = R(rt(), 1)), (oa = R(se(), 1)));
  VBf = new Set(["git-auth-failed", "git-timeout", "network-error"]);
});
var i4l = {};
_t(i4l, {
  call: () => call,
});
function aUf(e) {
  let t = s4l.c(7),
    { action: n, target: r, onComplete: o } = e,
    s = Ht(uUf),
    i = ZOe(),
    a = krr.useRef(false),
    l,
    c;
  if (t[0] !== n || t[1] !== s || t[2] !== o || t[3] !== r || t[4] !== i)
    ((l = () => {
      if (a.current) return;
      a.current = true;
      let u = n === "enable",
        d = s.filter(cUf),
        p = r === "all" ? d : d.filter((m) => m.name === r),
        f = p.filter(
          (m) => DKe(m) !== "needs-approval" && (u ? m.type === "disabled" : m.type !== "disabled"),
        );
      if (f.length === 0) {
        o(
          r === "all"
            ? `All MCP servers are already ${u ? "enabled" : "disabled"}`
            : p.length === 0
              ? `MCP server "${r}" not found`
              : p.some(lUf)
                ? `MCP server "${r}" is pending approval \u2014 approve it via /mcp first`
                : `MCP server "${r}" is already ${u ? "enabled" : "disabled"}`,
        );
        return;
      }
      for (let m of f) i(m.name).catch(ke);
      o(
        r === "all"
          ? `${u ? "Enabled" : "Disabled"} ${f.length} MCP server(s)`
          : `MCP server "${r}" ${u ? "enabled" : "disabled"}`,
      );
    }),
      (c = [n, r, s, i, o]),
      (t[0] = n),
      (t[1] = s),
      (t[2] = o),
      (t[3] = r),
      (t[4] = i),
      (t[5] = l),
      (t[6] = c));
  else ((l = t[5]), (c = t[6]));
  return (krr.useEffect(l, c), null);
}
function lUf(e) {
  return DKe(e) === "needs-approval";
}
function cUf(e) {
  return e.name !== "ide";
}
function uUf(e) {
  return e.mcp.clients;
}
async function call(e, t, n) {
  if (n) {
    let r = /^(\S+)\s*(.*)$/.exec(n.trim()),
      o = r?.[1] ?? "",
      s = r?.[2] ?? "";
    if (o === "no-redirect")
      return HXt.jsx(Jnr, {
        onComplete: e,
      });
    if (o === "reconnect" && s)
      return HXt.jsx(kBo, {
        serverName: s,
        onComplete: e,
      });
    if (o === "enable" || o === "disable")
      return HXt.jsx(aUf, {
        action: o,
        target: s || "all",
        onComplete: e,
      });
  }
  return HXt.jsx(Jnr, {
    onComplete: e,
  });
}
var s4l, krr, HXt;
