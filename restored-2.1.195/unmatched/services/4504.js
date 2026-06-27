// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vxl
// matched 2.1.88 source: src/services/api/claude.ts
// class=new  jaccard=0.0094  score=0.2231  fileCov=0.0098
// note: nearest: src/services/api/claude.ts (0.0094); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vxl] deps: Un
Vvf = new RegExp("<antml:invoke\\b");
function Xvf(e) {
  if (e === "<") return "<";
  if (e === " ") return " ";
  return "other";
}
function Jvf(e) {
  for (let t of zvf) if (e.includes(t)) return t;
  return null;
}
function Qvf(e) {
  let t = null;
  for (let s of zxl) {
    let i = e.indexOf(`

${s}`);
    if (i !== -1 && (t === null || i < t.index)) t = {
      index: i,
      fragment: s
    };
  }
  if (t === null) {
    let s = Kvf.exec(e);
    if (s !== null) t = {
      index: s.index,
      fragment: s[1]
    };
  }
  if (t === null) return null;
  let n = t.index + 2 + t.fragment.length,
    r = e.slice(t.index, t.index + Yvf),
    o = Jvf(r);
  return {
    fragment: t.fragment,
    suffix: Xvf(e[n]),
    looksFabricated: o !== null,
    tailMarker: o,
    matchIndex: t.index,
    tail: r
  };
}
function Kxl(e) {
  for (let t of zxl) if (t === e) return t;
  return "catch_all";
}
function* Zvf(e) {
  for (let t of e) for (let n of t.message.content) {
    let r, o;
    if (n.type === "text") r = "text", o = n.text;else if (n.type === "thinking") r = "thinking", o = n.thinking;else continue;
    let s = Qvf(o);
    if (s === null) continue;
    if (Kxl(s.fragment) === "catch_all" && s.suffix !== "<" && !s.looksFabricated) continue;
    yield {
      hit: s,
      blockType: r,
      message: t
    };
  }
}
function Yxl(e, t) {
  for (let {
    hit: n,
    blockType: r,
    message: o
  } of Zvf(e)) G("tengu_fabricated_turn_candidate", {
    model: Cf(t),
    matched_fragment: $e(Kxl(n.fragment)),
    suffix: $e(n.suffix),
    looks_fabricated: n.looksFabricated,
    tail_marker: n.tailMarker !== null ? $e(n.tailMarker) : void 0,
    block_type: $e(r),
    tail_sha256: Dd(n.tail),
    request_id: Hr(o.requestId),
    message_id: Hr(o.message.id)
  });
}
var zxl,
  zvf,
  Kvf,
  Yvf = 200;