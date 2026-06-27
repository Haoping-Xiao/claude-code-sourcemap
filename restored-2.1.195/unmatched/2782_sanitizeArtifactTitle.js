// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WW
// matched 2.1.88 source: src/constants/product.ts
// class=new  jaccard=0.0305  score=0.0432  fileCov=0.0939
// note: nearest: src/constants/product.ts (0.0305); 8 renamed
// ─────────────────────────────────────────────────────────────────────────
var WW = E(() => {
  Un();
  N8();
  fn();
  wX();
  ire = O8.recurringMaxAgeMs / 86400000;
});
function rso() {
  return ["Wait for MCP servers that are still connecting and whose tools are not", "yet in your tool list. Pass `servers` to wait for specific ones, or omit", "it to wait for all pending servers.", "", "If the user's request needs tools from a still-connecting server, call this", "tool to wait for it. Once it connects, its tools will be added to your tool", "list and you can use them directly. Returns ready=true when servers are", "ready, ready=false if they failed to connect, need authentication, or are", "disabled.", "", "You do not need to ask the user for confirmation to use this tool."].join(`
`);
}
var FRe = "WaitForMcpServers";
var Q2t = {};
_t(Q2t, {
  uuidSlugFromUrl: () => uuidSlugFromUrl,
  sanitizeArtifactTitle: () => sanitizeArtifactTitle,
  parseArtifactUrl: () => parseArtifactUrl,
  extractHtmlTitle: () => extractHtmlTitle,
  deriveDescription: () => deriveDescription,
  TITLE_SCAN_BYTES: () => TITLE_SCAN_BYTES,
  ArtifactInputError: () => ArtifactInputError,
  ARTIFACT_TOOL_NAME: () => ARTIFACT_TOOL_NAME
});
function parseArtifactUrl(e) {
  let t = e.match(new RegExp(`^https://(?:[a-z0-9-]+\\.)?claude\\.ai/code/(?:artifact|frame)/(${oso})(?:[/?#]|$)`));
  if (t?.[1]) return {
    slug: t[1],
    env: "prod"
  };
  let n = e.match(new RegExp(`^https://(?:preview\\.)?claude-ai\\.staging\\.ant\\.dev/code/(?:artifact|frame)/(${oso})(?:[/?#]|$)`));
  if (n?.[1]) return {
    slug: n[1],
    env: "staging"
  };
  let r = e.match(new RegExp(`^https://(${oso})\\.frame\\.(staging\\.)?claudeusercontent\\.com(?:[/?#]|$)`));
  if (r?.[1]) return {
    slug: r[1],
    env: r[2] ? "staging" : "prod"
  };
  return null;
}
function uuidSlugFromUrl(e) {
  return parseArtifactUrl(e)?.slug ?? null;
}
function Roa(e) {
  let t = e.slice(0, koa).replace(/<!--[\s\S]*?(?:-->|$)/g, ""),
    n = t.search(/<svg/i);
  return n === -1 ? t : t.slice(0, n);
}
function Loa(e) {
  return e.replace(Vop, (t, n) => {
    if (n.startsWith("#")) {
      let o = n[1] === "x" || n[1] === "X" ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10);
      return o <= 1114111 && (o < 55296 || o > 57343) ? String.fromCodePoint(o) : t;
    }
    if (Object.hasOwn(VOn, n)) return VOn[n] ?? t;
    let r = n.toLowerCase();
    if (Object.hasOwn(VOn, r)) return VOn[r] ?? t;
    return t;
  });
}
function extractHtmlTitle(e) {
  let n = Roa(e).match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (n === void 0) return null;
  return sanitizeArtifactTitle(Loa(n));
}
function sanitizeArtifactTitle(e) {
  let n = Array.from(e, o => {
    let s = o.codePointAt(0) ?? 0;
    return s <= 31 || s >= 127 && s <= 159 ? " " : o;
  }).join("").replace(/\s+/g, " ").trim();
  if (n === "") return null;
  let r = Array.from(n);
  return r.length > xoa ? r.slice(0, xoa).join("") : n;
}
function deriveDescription(e, t) {
  let n = Roa(e),
    r = c => sanitizeArtifactTitle(Loa(c ?? "")) ?? "",
    o = r(n.match(zop)?.[2]);
  if (o.length >= 10) return o;
  let s = c => r(n.match(c)?.[1]?.replace(/<[^>]+>/g, "")),
    i = s(Kop),
    a = s(Yop),
    l = i.toLowerCase();
  if (Xop.has(l) || l === t) i = "";
  if (a === "" || a.toLowerCase() === i.toLowerCase()) return i;
  return sanitizeArtifactTitle(i === "" ? a : `${i} \u2014 ${a}`) ?? "";
}
var ARTIFACT_TOOL_NAME = "Artifact",
  ArtifactInputError,
  oso = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
  koa = 8192,
  TITLE_SCAN_BYTES,
  xoa = 280,
  Vop,
  VOn,
  zop,
  Kop,
  Yop,
  Xop;