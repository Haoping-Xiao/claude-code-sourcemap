// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qJ
// matched 2.1.88 source: src/services/teamMemorySync/index.ts
// class=new  jaccard=0.0211  score=0.256  fileCov=0.0225
// note: nearest: src/services/teamMemorySync/index.ts (0.0211); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qJ] deps: je, wr, Bi, sr, hN
aht = process.env.TMUX, B7p = process.env.TMUX_PANE;
SHo = iht;
function vXa() {
  return HHo.join(tr(), "cache", j7p);
}
async function W7p() {
  try {
    let e = await cht.readFile(vXa(), "utf-8"),
      t = Ft(e);
    if (t && typeof t === "object" && "fetchedAt" in t && typeof t.fetchedAt === "number") return t;
  } catch (e) {
    if (!wn(e)) T(`team-discovery: cache read failed: ${be(e)}`);
  }
  return null;
}
async function q7p(e) {
  try {
    await cht.mkdir(HHo.join(tr(), "cache"), {
      recursive: true
    }), await cht.writeFile(vXa(), De(e), "utf-8");
  } catch (t) {
    T(`team-discovery: cache write failed: ${be(t)}`);
  }
}
async function V7p() {
  try {
    let e = await Os.get(F7p, {
      auth: "async",
      timeout: 5000,
      validateStatus: t => t === 200 || t === 403
    });
    if (!e.ok) return T(`team-discovery: skipped (${e.reason})`), null;
    if (e.status === 403) return null;
    if (e.data.skills.length === 0 && e.data.mcp_servers.length === 0) return null;
    return e.data;
  } catch (e) {
    return T(`team-discovery: fetch failed: ${be(e)}`), null;
  }
}
function CXa() {
  z7p().then(e => {
    wXa = e;
  }).catch(() => {});
}
function IXa() {
  return wXa;
}
var cht,
  HHo,
  F7p = "/api/claude_code/discovery/team_usage",
  j7p = "team-discovery.json",
  G7p = 86400000,
  wXa,
  z7p;