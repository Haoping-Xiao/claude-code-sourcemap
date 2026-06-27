// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sr
// matched 2.1.88 source: src/services/teamMemorySync/secretScanner.ts
// class=modified (alt of src/services/teamMemorySync/secretScanner.ts)  jaccard=0.0471  score=0.4587  fileCov=0.0499
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sr]
((_7c = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/),
  (lis = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g),
  (Oin =
    typeof String.prototype.isWellFormed === "function"
      ? Function.prototype.call.bind(String.prototype.isWellFormed)
      : void 0),
  (ais =
    typeof String.prototype.toWellFormed === "function"
      ? Function.prototype.call.bind(String.prototype.toWellFormed)
      : void 0));
function yis(e) {
  return E7c.map((t) => ({
    id: t.id,
    confidence: t.confidence,
    re: new RegExp(t.source, e ? (t.flags ?? "").replace("g", "") + "g" : (t.flags ?? "")),
  }));
}
function YJe(e) {
  fis ??= yis(false);
  let t = [];
  for (let n of fis)
    if (n.confidence === "high" && n.re.test(e))
      t.push({
        ruleId: n.id,
        label: H7c(n.id),
      });
  return t;
}
function xc(e) {
  mis ??= yis(true);
  for (let t of mis)
    e = e.replace(t.re, (n, r) => {
      if (typeof r !== "string") return "[REDACTED]";
      let o = r.length >= 2 && (r[0] === '"' || r[0] === "'") && r.at(-1) === r[0] ? r[0] : "",
        s = n.lastIndexOf(r);
      return `${n.slice(0, s)}${o}[REDACTED]${o}${n.slice(s + r.length)}`;
    });
  return e;
}
function Vge(e) {
  if (typeof e === "string") return xc(e);
  if (Array.isArray(e)) return e.map(Vge);
  if (e !== null && typeof e === "object") {
    let t = {};
    for (let [n, r] of Object.entries(e))
      if (typeof r === "string") {
        let o = `${n}: `,
          s = xc(o + r);
        t[n] = s.startsWith(o) ? s.slice(o.length) : xc(r);
      } else t[n] = Vge(r);
    return t;
  }
  return e;
}
function WEr(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = gis.test(n) ? "[REDACTED]" : r;
  return t;
}
function zge(e) {
  if (!e) return e;
  try {
    let t = new URL(e);
    if (!t.host) throw TypeError("opaque");
    return (
      (t.username = ""),
      (t.password = ""),
      (t.search = ""),
      (t.hash = ""),
      t.toString().replace(/\/$/, "")
    );
  } catch {
    let t = bi(bi(e, "?"), "#"),
      n = t.lastIndexOf("@");
    return n >= 0 ? t.slice(n + 1) : t;
  }
}
function H7c(e) {
  return e
    .split("-")
    .map((t) => A7c[t] ?? Cx(t))
    .join(" ");
}
var gis,
  dis = "[^\\s,;&}\\])]+",
  his =
    "-----BEGIN[ A-Z0-9_-]{0,100}PRIVATE KEY(?: BLOCK)?-----[\\s\\S-]{64,}?-----END[ A-Z0-9_-]{0,100}PRIVATE KEY(?: BLOCK)?-----",
  b7c,
  pis,
  S7c,
  E7c,
  fis = null,
  mis = null,
  A7c;
