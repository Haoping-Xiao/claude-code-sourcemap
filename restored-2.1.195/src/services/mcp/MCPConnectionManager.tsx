// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VFl
// matched 2.1.88 source: src/services/mcp/MCPConnectionManager.tsx
// class=modified  jaccard=0.4508  score=0.8372  fileCov=0.4941
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VFl] deps: ft, ft, oo, cco, Yle, BI, Ire, Z4e, Vb, gKn, Gwe, yBn, kt, Kv, je, Yp, dr, ft, Ed, SGe, uo, DHe, At, vn, bm, gz, sr, I6e, Rko, a5, AFn, Ox, g$
((kC = R(rt(), 1)), (SBo = (Mpo(), ro(Ppo)).fetchMcpSkillsForClient));
function Unr() {
  return ABo;
}
function KFl() {
  return HBo;
}
function LEt() {
  let e = LKe.useContext(EBo);
  if (!e) throw Error("useMcpReconnect must be used within MCPConnectionManager");
  return e.reconnectMcpServer;
}
function ZOe() {
  let e = LKe.useContext(EBo);
  if (!e) throw Error("useMcpToggleEnabled must be used within MCPConnectionManager");
  return e.toggleMcpServer;
}
function nXt(e) {
  let t = zFl.c(12),
    { children: n, dynamicMcpConfig: r, isStrictMcpConfig: o } = e,
    { reconnectMcpServer: s, toggleMcpServer: i } = qFl(r, o),
    a;
  if (t[0] !== i)
    ((a = async (f) => {
      await i(f);
    }),
      (t[0] = i),
      (t[1] = a));
  else a = t[1];
  let l;
  if (t[2] !== s || t[3] !== a)
    ((l = {
      reconnectMcpServer: s,
      toggleMcpServer: a,
    }),
      (t[2] = s),
      (t[3] = a),
      (t[4] = l));
  else l = t[4];
  let c = l,
    u,
    d;
  if (t[5] !== s || t[6] !== i)
    ((u = () => ((ABo = s), (HBo = i), B1f)),
      (d = [s, i]),
      (t[5] = s),
      (t[6] = i),
      (t[7] = u),
      (t[8] = d));
  else ((u = t[7]), (d = t[8]));
  LKe.useEffect(u, d);
  let p;
  if (t[9] !== n || t[10] !== c)
    ((p = YFl.jsx(EBo.Provider, {
      value: c,
      children: n,
    })),
      (t[9] = n),
      (t[10] = c),
      (t[11] = p));
  else p = t[11];
  return p;
}
function B1f() {
  ((ABo = null), (HBo = null));
}
var zFl,
  LKe,
  YFl,
  EBo,
  ABo = null,
  HBo = null;
