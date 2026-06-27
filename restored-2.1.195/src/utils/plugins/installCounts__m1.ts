// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qJ
// matched 2.1.88 source: src/utils/plugins/installCounts.ts
// class=modified (alt of src/utils/plugins/installCounts.ts)  jaccard=0.0388  score=0.1017  fileCov=0.0589
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qJ] deps: je, wr, Bi, sr, hN
((aht = process.env.TMUX), (B7p = process.env.TMUX_PANE));
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
    (await cht.mkdir(HHo.join(tr(), "cache"), {
      recursive: true,
    }),
      await cht.writeFile(vXa(), De(e), "utf-8"));
  } catch (t) {
    T(`team-discovery: cache write failed: ${be(t)}`);
  }
}
async function V7p() {
  try {
    let e = await Os.get(F7p, {
      auth: "async",
      timeout: 5000,
      validateStatus: (t) => t === 200 || t === 403,
    });
    if (!e.ok) return (T(`team-discovery: skipped (${e.reason})`), null);
    if (e.status === 403) return null;
    if (e.data.skills.length === 0 && e.data.mcp_servers.length === 0) return null;
    return e.data;
  } catch (e) {
    return (T(`team-discovery: fetch failed: ${be(e)}`), null);
  }
}
function CXa() {
  z7p()
    .then((e) => {
      wXa = e;
    })
    .catch(() => {});
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
