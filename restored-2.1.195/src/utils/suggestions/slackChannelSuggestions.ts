// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g6o
// matched 2.1.88 source: src/utils/suggestions/slackChannelSuggestions.ts
// class=modified  jaccard=0.3916  score=1  fileCov=0.3916
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function myc(e) {
  return e.find((t) => t.type === "connected" && t.name.includes("slack"));
}
async function fetchChannels(clients, query) {
  let slackClient = myc(clients);
  if (!slackClient || slackClient.type !== "connected") return [];
  try {
    let o = (
      await slackClient.client.callTool(
        {
          name: SLACK_SEARCH_TOOL,
          arguments: {
            query: query,
            limit: 20,
            channel_types: "public_channel,private_channel",
          },
        },
        void 0,
        {
          timeout: 5000,
        },
      )
    ).content;
    if (!Array.isArray(o)) return [];
    let s = o.filter((i) => i.type === "text").map((i) => i.text).join(`
`);
    return bpm(_pm(s));
  } catch (r) {
    return (T(`Failed to fetch Slack channels: ${r}`), []);
  }
}
function _pm(e) {
  let t = e.trim();
  if (!t.startsWith("{")) return e;
  try {
    let n = ypm().safeParse(Ft(t));
    if (n.success) return n.data.results;
  } catch {}
  return e;
}
function bpm(e) {
  let t = [],
    n = new Set();
  for (let r of e.split(`
`)) {
    let o = r.match(/^Name:\s*#?([a-z0-9][a-z0-9_-]{0,79})\s*$/);
    if (o && !n.has(o[1])) (n.add(o[1]), t.push(o[1]));
  }
  return t;
}
function fdr(e) {
  return myc(e) !== void 0;
}
function gyc() {
  return dyc;
}
function hyc(e) {
  let t = [],
    n = /(^|\s)#([a-z0-9][a-z0-9_-]{0,79})(?=\s|$)/g,
    r;
  while ((r = n.exec(e)) !== null) {
    if (!pdr.has(r[2])) continue;
    let o = r.index + r[1].length;
    t.push({
      start: o,
      end: o + 1 + r[2].length,
    });
  }
  return t;
}
function Spm(e) {
  let t = Math.max(e.lastIndexOf("-"), e.lastIndexOf("_"));
  return t > 0 ? e.slice(0, t) : e;
}
function Epm(e, t) {
  let n,
    r = 0;
  for (let [o, s] of DTt)
    if (e.startsWith(o) && o.length > r && s.some((i) => i.startsWith(t)))
      ((n = s), (r = o.length));
  return n;
}
async function getSlackChannelSuggestions(clients, searchToken) {
  if (!searchToken) return [];
  let n = Spm(searchToken),
    r = searchToken.toLowerCase(),
    o = DTt.get(n) ?? Epm(n, r);
  if (!o)
    if (ddr === n && ken) o = await ken;
    else {
      ((ddr = n), (ken = fetchChannels(clients, n)), (o = await ken), DTt.set(n, o));
      let s = pdr.size;
      for (let i of o) pdr.add(i);
      if (pdr.size !== s) (dyc++, pyc.emit());
      if (DTt.size > 50) DTt.delete(DTt.keys().next().value);
      if (ddr === n) ((ddr = null), (ken = null));
    }
  return o
    .filter((s) => s.startsWith(r))
    .sort()
    .slice(0, 10)
    .map((s) => ({
      id: `slack-channel-${s}`,
      displayText: `#${s}`,
    }));
}
var SLACK_SEARCH_TOOL = "slack_search_channels",
  DTt,
  pdr,
  dyc = 0,
  pyc,
  fyc,
  ddr = null,
  ken = null,
  ypm;
