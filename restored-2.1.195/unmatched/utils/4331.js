// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fyl
// matched 2.1.88 source: src/utils/attachments.ts
// class=new  jaccard=0.0125  score=0.5289  fileCov=0.0126
// note: nearest: src/utils/attachments.ts (0.0125); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Fyl = E(() => {
  ZE();
  tP();
  Rd();
  co();
  Ao();
  Jt();
  Uyl = require("crypto");
});
function Z7n(e, t, n, r) {
  if (e !== ka && e !== Wc) return null;
  if (typeof n !== "object" || n === null || !("file_path" in n) || typeof n.file_path !== "string") return null;
  try {
    let o = ds(n.file_path),
      s = r.get(o);
    if (!s || s.offset !== void 0 || s.limit !== void 0) return null;
    let i = Fee(o);
    if (i <= s.timestamp) return null;
    let a = Bee(o);
    if (r.set(o, {
      content: a.content,
      timestamp: i,
      offset: void 0,
      limit: void 0
    }), Uue(s, a.content)) return null;
    return T(`PostToolUse hook modified ${o} after ${e} \u2014 re-synced readFileState`, {
      level: "info"
    }), ai({
      type: "hook_additional_context",
      content: [`PostToolUse hook modified ${o} after your edit (likely a formatter). Your next Edit will not fail with a stale-file error, but if its old_string targets a region the hook reformatted, Read the file first.`],
      hookName: `PostToolUse:${e}`,
      toolUseID: t,
      hookEvent: "PostToolUse"
    });
  } catch {
    return null;
  }
}