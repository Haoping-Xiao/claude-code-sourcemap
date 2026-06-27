// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fn
// matched 2.1.88 source: src/utils/envUtils.ts
// class=partial  jaccard=0.2339  score=0.4016  fileCov=0.3591
// note: low-confidence suggestion: src/utils/envUtils.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fn] deps: ree, Qi, ree
Mrs = require("os"), hSr = require("path"), tr = Cn(() => (process.env.CLAUDE_CONFIG_DIR ?? hSr.join(Mrs.homedir(), ".claude")).normalize("NFC"), () => process.env.CLAUDE_CONFIG_DIR);
ySr = Cn(() => ut(process.env.CLAUDE_CODE_SUPERVISED));
Lzc = [["claude-fable-5", "VERTEX_REGION_CLAUDE_FABLE_5"], ["claude-haiku-4-5", "VERTEX_REGION_CLAUDE_HAIKU_4_5"], ["claude-3-5-haiku", "VERTEX_REGION_CLAUDE_3_5_HAIKU"], ["claude-3-5-sonnet", "VERTEX_REGION_CLAUDE_3_5_SONNET"], ["claude-3-7-sonnet", "VERTEX_REGION_CLAUDE_3_7_SONNET"], ["claude-opus-4-8", "VERTEX_REGION_CLAUDE_4_8_OPUS"], ["claude-opus-4-7", "VERTEX_REGION_CLAUDE_4_7_OPUS"], ["claude-opus-4-6", "VERTEX_REGION_CLAUDE_4_6_OPUS"], ["claude-opus-4-5", "VERTEX_REGION_CLAUDE_4_5_OPUS"], ["claude-opus-4-1", "VERTEX_REGION_CLAUDE_4_1_OPUS"], ["claude-opus-4", "VERTEX_REGION_CLAUDE_4_0_OPUS"], ["claude-sonnet-4-6", "VERTEX_REGION_CLAUDE_4_6_SONNET"], ["claude-sonnet-4-5", "VERTEX_REGION_CLAUDE_4_5_SONNET"], ["claude-sonnet-4", "VERTEX_REGION_CLAUDE_4_0_SONNET"]];
function Aa(e, t, n, r, o) {
  if (r === "m") throw TypeError("Private method is not writable");
  if (r === "a" && !o) throw TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !o : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? o.call(e, n) : o ? o.value = n : t.set(e, n), n;
}
function no(e, t, n, r) {
  if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
var $ge = () => {};
var _Sr = function () {
  let {
    crypto: e
  } = globalThis;
  if (e?.randomUUID) return _Sr = e.randomUUID.bind(e), e.randomUUID();
  let t = new Uint8Array(1),
    n = e ? () => e.getRandomValues(t)[0] : () => Math.random() * 255 & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, r => (+r ^ n() & 15 >> +r / 4).toString(16));
};
function Oge(e) {
  return typeof e === "object" && e !== null && ("name" in e && e.name === "AbortError" || "message" in e && String(e.message).includes("FetchRequestCanceledException"));
}
var GCt = e => {
  if (e instanceof Error) return e;
  if (typeof e === "object" && e !== null) {
    try {
      if (Object.prototype.toString.call(e) === "[object Error]") {
        let t = Error(e.message, e.cause ? {
          cause: e.cause
        } : {});
        if (e.stack) t.stack = e.stack;
        if (e.cause && !t.cause) t.cause = e.cause;
        if (e.name) t.name = e.name;
        return t;
      }
    } catch {}
    try {
      return Error(JSON.stringify(e));
    } catch {}
  }
  return Error(e);
};
var ui, Fo, tf, Hx, DK, WCt, sUe, qCt, iUe, VCt, zCt, KCt, YCt;