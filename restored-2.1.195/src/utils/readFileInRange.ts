// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LQn
// matched 2.1.88 source: src/utils/readFileInRange.ts
// class=modified  jaccard=0.4343  score=0.528  fileCov=0.7099
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var LQn = E(() => {
  es();
  ((kQn = require("fs")), (RQn = require("fs/promises")));
  WKt = class WKt extends Error {
    sizeInBytes;
    maxSizeBytes;
    constructor(e, t) {
      super(
        `File content (${Ra(e)}) exceeds maximum allowed size (${Ra(t)}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.`,
      );
      this.sizeInBytes = e;
      this.maxSizeBytes = t;
      this.name = "FileTooLargeError";
    }
  };
});
function UTf() {
  let e;
  try {
    e = yce();
  } catch {
    return null;
  }
  if (e === null) return null;
  let t = new Set(["MEMORY.md"]);
  for (let n of e) {
    if (n.promptIndex === void 0) continue;
    let r = n.promptIndex.split("/");
    t.add(n.scope === "user" ? gSt.join(...r) : gSt.join("team", n.mount, ...r));
  }
  return t;
}
function jTf(e) {
  for (let t of e.split(`
`)) {
    let n = t.replace(/^#{1,6}\s+/, "").trim();
    if (n) return n.slice(0, FTf);
  }
  return null;
}
async function DQn(e, t) {
  let n = UTf();
  try {
    let o = (
        await wIl.readdir(e, {
          recursive: !0,
        })
      ).filter((a) => a.endsWith(".md") && (n ? !n.has(a) : gSt.basename(a) !== "MEMORY.md")),
      i = (
        await Promise.allSettled(
          o.map(async (a) => {
            let l = gSt.join(e, a),
              { content: c, mtimeMs: u } = await mSt(l, 0, BTf, void 0, t),
              { frontmatter: d, body: p } = l0n(c, l);
            return {
              filename: a,
              filePath: l,
              mtimeMs: u,
              description: d.description ?? (n ? jTf(p) : null),
              type: DNi(c0n(d, "type")),
            };
          }),
        )
      )
        .filter((a) => a.status === "fulfilled")
        .map((a) => a.value)
        .sort((a, l) => l.mtimeMs - a.mtimeMs)
        .slice(0, NTf);
    return (xe("memory_scan"), i);
  } catch {
    return (It("memory_scan", "memory_scan_readdir_failed"), []);
  }
}
function PQn(e) {
  return e.map((t) => {
    let n = t.type ? `[${t.type}] ` : "",
      r = new Date(t.mtimeMs).toISOString(),
      o = `- ${n}${t.filename} (${r})`;
    return t.description ? `${o}: ${t.description}` : o;
  }).join(`
`);
}
var wIl,
  gSt,
  NTf = 200,
  BTf = 30,
  FTf = 120;
