// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w9o
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var w9o = E(() => {
  ydc();
  Sdc();
  ag();
  S6();
  C5();
  Ld();
  nDe();
  $g();
  Xh();
  sr();
  Kv();
  Ox();
  g$();
  QYe = R(se(), 1);
});
function C9o(e, t) {
  let n = [...t].sort(),
    r = Npe(e, n.map(a => ({
      name: a
    })), {
      maxEditDistance: 2
    });
  if (r) return `No MCP server named "${e}". Did you mean "${r}"? Run \`claude mcp list\` to see all.`;
  if (n.length === 0) return `No MCP server named "${e}". Run \`claude mcp add\` to add one.`;
  let o = 8,
    s = n.slice(0, o).join(", "),
    i = n.length > o ? ` (and ${n.length - o} more \u2014 run \`claude mcp list\` to see all)` : "";
  return `No MCP server named "${e}". Configured servers: ${s}${i}`;
}
function Vcr(e, t, n) {
  if (n && t.length === 0) return `No MCP server named "${e}". ${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."}`;
  return C9o(e, t) + (n ? ` (${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."})` : "");
}
var I9o = () => {};
function Hdc(e) {
  Adc.push(e);
}
function x9o(e, t) {
  let n = t;
  for (let r of Adc) try {
    let o = r(e, n);
    if (o) n = {
      ...n,
      ...o
    };
  } catch (o) {
    let s = Zr(o);
    T(`session rehydrator threw: ${s.stack ?? s.message}`, {
      level: "error"
    });
  }
  return n;
}
var Adc;