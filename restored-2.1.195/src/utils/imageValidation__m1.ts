// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UX
// matched 2.1.88 source: src/utils/imageValidation.ts
// class=modified (alt of src/utils/imageValidation.ts)  jaccard=0.2325  score=0.5653  fileCov=0.2831
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module UX] deps: ft, wr, Rd, k0, Oot, Ao, c5e, Ls, Fh
Jct = `Send feedback with /feedback or learn more: ${u5e}`;
daa = `They may flag safe, normal content as well. ${Vap}`;
function Eaa(e) {
  if (typeof e !== "object" || e === null) return false;
  if (!("type" in e) || e.type !== "image") return false;
  if (!("source" in e) || typeof e.source !== "object" || e.source === null) return false;
  let t = e.source;
  return "type" in t && t.type === "base64" && "data" in t && typeof t.data === "string";
}
function Yap(e) {
  if (typeof e !== "object" || e === null) return false;
  if (!("type" in e) || e.type !== "tool_result") return false;
  return "content" in e && Array.isArray(e.content);
}
function Aaa(e, t, n, r) {
  let o = e.source.data.length;
  if (o > n)
    (G("tengu_image_api_validation_failed", {
      base64_size_bytes: o,
      max_bytes: n,
    }),
      r.push({
        index: t,
        size: o,
      }));
}
function Cjt(e, t) {
  let n = [],
    r = 0;
  for (let o of e) {
    if (typeof o !== "object" || o === null) continue;
    if (!("type" in o) || o.type !== "user") continue;
    if (!("message" in o) || typeof o.message !== "object" || o.message === null) continue;
    let s = o.message;
    if (!("content" in s) || !Array.isArray(s.content)) continue;
    for (let i of s.content) {
      if (Eaa(i)) {
        Aaa(i, ++r, t, n);
        continue;
      }
      if (Yap(i)) {
        for (let a of i.content) if (Eaa(a)) Aaa(a, ++r, t, n);
      }
    }
  }
  if (n.length > 0) throw new eut(n, t);
}
var eut;
