// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xBo
// matched 2.1.88 source: src/components/mcp/MCPReconnect.tsx
// class=modified  jaccard=0.458  score=0.6928  fileCov=0.5747
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xBo = E(() => {
  si();
  ft();
  Xa();
  fH();
  _i();
  m8();
  Ye();
  ps();
  a5();
  g$();
  je();
  sr();
  Cc();
  vKe();
  Bs();
  vi();
  Ko();
  inr();
  ((rXt = R(lt(), 1)),
    (n2l = R(rt(), 1)),
    (_3 = R(rt(), 1)),
    (uc = R(se(), 1)),
    (e2l = ["project", "local", "user", "enterprise", "agent"]));
});
function kBo(e) {
  let t = r2l.c(25),
    { serverName: n, onComplete: r } = e,
    [o] = na(),
    s = Dc(),
    i = LEt(),
    [a, l] = oXt.useState(true),
    [c, u] = oXt.useState(null),
    d,
    p;
  if (t[0] !== r || t[1] !== i || t[2] !== n || t[3] !== s)
    ((d = () => {
      (async function () {
        try {
          if (!s.getState().mcp.clients.find((y) => y.name === n)) {
            (u(`MCP server "${n}" not found`), l(false), r(`MCP server "${n}" not found`));
            return;
          }
          let h = await i(n);
          e: switch (h.client.type) {
            case "connected": {
              (l(false), r(`Successfully reconnected to ${n}`));
              break e;
            }
            case "needs-auth": {
              (u(`${n} requires authentication`),
                l(false),
                r(`${n} requires authentication. Use /mcp to authenticate.`));
              break e;
            }
            case "pending":
            case "failed":
            case "disabled":
              (u(`Failed to reconnect to ${n}`), l(false), r(`Failed to reconnect to ${n}`));
          }
        } catch (g) {
          let h = g,
            y = h instanceof Error ? h.message : String(h);
          (u(y), l(false), r(`Error: ${y}`));
        }
      })();
    }),
      (p = [n, i, s, r]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = n),
      (t[3] = s),
      (t[4] = d),
      (t[5] = p));
  else ((d = t[4]), (p = t[5]));
  if ((oXt.useEffect(d, p), a)) {
    let f;
    if (t[6] !== n)
      ((f = Sse.jsxs(w, {
        color: "text",
        children: [
          "Reconnecting to ",
          Sse.jsx(w, {
            bold: true,
            children: n,
          }),
        ],
      })),
        (t[6] = n),
        (t[7] = f));
    else f = t[7];
    let m;
    if (t[8] === Symbol.for("react.memo_cache_sentinel"))
      ((m = Sse.jsx(Vc, {
        message: "Establishing connection to MCP server",
      })),
        (t[8] = m));
    else m = t[8];
    let g;
    if (t[9] !== f)
      ((g = Sse.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        children: [f, m],
      })),
        (t[9] = f),
        (t[10] = g));
    else g = t[10];
    return g;
  }
  if (c) {
    let f;
    if (t[11] !== o) ((f = Io("error", o)(nt.cross)), (t[11] = o), (t[12] = f));
    else f = t[12];
    let m;
    if (t[13] !== f)
      ((m = Sse.jsxs(w, {
        children: [f, " "],
      })),
        (t[13] = f),
        (t[14] = m));
    else m = t[14];
    let g;
    if (t[15] !== n)
      ((g = Sse.jsxs(w, {
        color: "error",
        children: ["Failed to reconnect to ", n],
      })),
        (t[15] = n),
        (t[16] = g));
    else g = t[16];
    let h;
    if (t[17] !== m || t[18] !== g)
      ((h = Sse.jsxs(U, {
        children: [m, g],
      })),
        (t[17] = m),
        (t[18] = g),
        (t[19] = h));
    else h = t[19];
    let y;
    if (t[20] !== c)
      ((y = Sse.jsxs(w, {
        dimColor: true,
        children: ["Error: ", c],
      })),
        (t[20] = c),
        (t[21] = y));
    else y = t[21];
    let b;
    if (t[22] !== h || t[23] !== y)
      ((b = Sse.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        children: [h, y],
      })),
        (t[22] = h),
        (t[23] = y),
        (t[24] = b));
    else b = t[24];
    return b;
  }
  return null;
}
var r2l, oXt, Sse;
