// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nec
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=modified (alt of src/utils/sessionStorage.ts)  jaccard=0.0304  score=0.93  fileCov=0.0305
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nec] deps: db, BFe, jS, Jt
((zJt = require("crypto")), (Pir = require("path")));
PKf = new Set(["user", "assistant", "attachment", "system", "progress"]);
async function rec(e, t) {
  let n = await rCe(e, t);
  if (!n) return null;
  let r = n.filePath.replace(/\.jsonl$/, "");
  return Mir.join(r, "subagents");
}
async function getAgentTranscriptPath(e) {
  let t = [];
  async function n(r) {
    let o;
    try {
      o = await KJt.readdir(r, {
        withFileTypes: true,
      });
    } catch {
      return;
    }
    for (let s of o)
      if (s.isFile() && s.name.startsWith("agent-") && s.name.endsWith(".jsonl")) {
        let i = s.name.slice(6, -6);
        t.push({
          agentId: i,
          filePath: Mir.join(r, s.name),
        });
      } else if (s.isDirectory()) await n(Mir.join(r, s.name));
  }
  return (await n(e), t);
}
function hasVisibleAssistantContent(e) {
  let t = [],
    n = 10,
    r = e.length,
    o = 0;
  while (o < r) {
    let s = e.indexOf(10, o);
    if (s === -1) s = r;
    let i = o;
    while (i < s && e[i] <= 32) i++;
    if (((o = s + 1), i >= s)) continue;
    let a = e.toString("utf-8", i, s);
    try {
      let l = Ft(a),
        c = l.type;
      if ((c === "user" || c === "assistant") && typeof l.uuid === "string") t.push(l);
    } catch {}
  }
  return t;
}
function UKf(e) {
  if (e.length === 0) return [];
  let t = new Map();
  for (let i of e) t.set(i.uuid, i);
  let n = e.findLast((i) => i.type === "user" || i.type === "assistant");
  if (!n) return [];
  let r = [],
    o = new Set(),
    s = n;
  while (s) {
    if (o.has(s.uuid)) break;
    (o.add(s.uuid), r.push(s), (s = s.parentUuid ? t.get(s.parentUuid) : void 0));
  }
  return (r.reverse(), r);
}
async function sec(e, t) {
  if (!FS(e)) return [];
  let n = await rec(e, t?.dir);
  if (!n) return [];
  return (await getAgentTranscriptPath(n)).map((o) => o.agentId);
}
async function getAgentMetadataPath(e, t, n) {
  if (!FS(e)) return [];
  if (!t) return [];
  let r = await rec(e, n?.dir);
  if (!r) return [];
  let s = (await getAgentTranscriptPath(r)).find((l) => l.agentId === t);
  if (!s) return [];
  let i;
  try {
    i = await KJt.readFile(s.filePath);
  } catch {
    return [];
  }
  let a;
  try {
    let l = s.filePath.replace(/\.jsonl$/, ".meta.json");
    a = Ft(await KJt.readFile(l, "utf-8")).toolUseId;
  } catch {}
  return B3o(i, n, a);
}
function B3o(e, t, n) {
  if (e.length === 0) return [];
  let r = hasVisibleAssistantContent(e),
    s = UKf(r)
      .filter((i) => i.type === "user" || i.type === "assistant")
      .map((i) => P3o(i, n));
  return M3o(s, t);
}
var KJt, Mir;
