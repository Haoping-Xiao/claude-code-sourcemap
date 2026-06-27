// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module i0n
// matched 2.1.88 source: node_modules/zod/v4/classic/schemas.js
// class=new  jaccard=0.0187  score=0.2421  fileCov=0.0199
// note: nearest: node_modules/zod/v4/classic/schemas.js (0.0187); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var i0n = E(() => {
  Xr();
  je();
  kM();
  c_();
  WKr();
  vNi = ve(() => H.string().regex(/^mem_[A-Za-z0-9]+$/)), qKr = ve(() => H.looseObject({
    id: vNi(),
    path: H.string(),
    content_sha256: H.string(),
    content_size_bytes: H.number().int().nonnegative().optional()
  })), oNd = ve(() => H.looseObject({
    data: H.array(H.looseObject({
      type: H.string()
    })),
    next_page: H.string().nullish()
  })), sNd = ve(() => qKr().extend({
    content: H.string()
  })), ANi = qKr, iNd = ve(() => H.looseObject({
    error: H.looseObject({
      type: H.string().optional(),
      conflicting_path: H.string().optional(),
      conflicting_memory_id: vNi().optional()
    }).optional()
  }));
});
async function wNi(e = lNd) {
  let t;
  try {
    t = yce();
  } catch (o) {
    return T(`memory-prompt-index: parseMemoryStoresEnv failed: ${be(o)}`, {
      level: "debug"
    }), [];
  }
  if (t === null) return [];
  let n = t.filter(o => o.promptIndex !== void 0);
  if (n.length === 0) return [];
  return (await Promise.allSettled(n.map(o => cNd(o, e)))).flatMap(o => o.status === "fulfilled" && o.value !== null ? [o.value] : []);
}
async function cNd(e, t) {
  let n = e.promptIndex;
  if (!GKr(n)) return It("memory_prompt_index", "unsafe_path"), null;
  let r = new o0n(e);
  try {
    let o = await vc(r.readByPath(n), t, `promptIndex fetch for ${e.mount}`);
    if (o === null) return T(`memory-prompt-index[${e.mount}]: ${n} not found`, {
      level: "debug"
    }), xe("memory_prompt_index"), {
      mount: e.mount,
      promptIndex: n,
      content: ""
    };
    return xe("memory_prompt_index"), {
      mount: e.mount,
      promptIndex: n,
      content: o.content
    };
  } catch (o) {
    let s = be(o),
      i = s.includes(`promptIndex fetch for ${e.mount}`) ? "timeout" : "error";
    return It("memory_prompt_index", i), T(`memory-prompt-index[${e.mount}]: fetch failed (${i}): ${s}`, {
      level: "debug"
    }), null;
  }
}
var lNd = 5000;