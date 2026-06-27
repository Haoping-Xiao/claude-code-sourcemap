// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Twl
// matched 2.1.88 source: src/services/PromptSuggestion/speculation.ts
// class=new  jaccard=0.0185  score=0.0936  fileCov=0.0225
// note: nearest: src/services/PromptSuggestion/speculation.ts (0.0185); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Twl = E(() => {
  ft();
  Rc();
  Uh();
  vGt();
  MM();
  oo();
  je();
  At();
  Ls();
  qd();
  zH();
  kM();
  Jt();
  dn();
  kt();
  AVe();
  Rx();
  c_();
  jc();
  hwl();
  bwl = require("crypto"), VF = require("fs/promises"), vze = require("path");
  gfe = {
    team: {
      pull: "team_memory_sync_pull",
      push: "team_memory_sync_push",
      conflict: "team_memory_sync_conflict"
    },
    user: {
      pull: "personal_memory_sync_pull",
      push: "personal_memory_sync_push",
      conflict: "personal_memory_sync_conflict"
    }
  };
});
async function* IAf(e, t, n = wwl) {
  let r = new vwl.StringDecoder("utf8"),
    o = "",
    s = e.stream[Symbol.asyncIterator]();
  try {
    while (!0) {
      let i = await vc(s.next(), n, "export stream stalled");
      if (i.done) break;
      let a = i.value;
      o += typeof a === "string" ? a : r.write(a);
      let l;
      while ((l = o.indexOf(`
`)) >= 0) {
        let c = o.slice(0, l);
        if (o = o.slice(l + 1), c.endsWith("\r")) c = c.slice(0, -1);
        if (c.length > t) throw new OJn(t);
        if (c !== "") yield c;
      }
      if (o.length > t) throw new OJn(t);
    }
    if (o += r.end(), o !== "" && o !== "\r") yield o.endsWith("\r") ? o.slice(0, -1) : o;
  } finally {
    e.destroy(), s.return?.().catch(() => {
      return;
    });
  }
}
async function Cwl({
  source: e,
  handleMemory: t,
  maxConcurrentWrites: n,
  maxLineLength: r,
  stallTimeoutMs: o = wwl
}) {
  let s = new Set(),
    i,
    a = 0,
    l = 0,
    c = null;
  async function u() {
    await Promise.all(s);
  }
  async function d(p) {
    return await u(), {
      ok: !1,
      reason: p
    };
  }
  try {
    for await (let p of IAf(e, r, o)) {
      if (c !== null) return await d("parse_failed");
      let f;
      try {
        f = qge(p);
      } catch {
        return await d("parse_failed");
      }
      let m = vAf().safeParse(f);
      if (!m.success) return await d("parse_failed");
      switch (m.data.type) {
        case "store":
          break;
        case "memory":
          {
            let g = wAf().safeParse(f);
            if (!g.success) return await d("parse_failed");
            a++;
            while (s.size >= n) await Promise.race(s);
            if (i !== void 0) return await d("write_failed");
            let h = {
                path: g.data.path,
                content: g.data.content,
                contentSha256: g.data.content_sha256,
                memoryId: g.data.id
              },
              y = t(h).catch(b => {
                i ??= b;
              }).finally(() => {
                s.delete(y);
              });
            s.add(y);
            break;
          }
        case "memory_error":
          l++;
          break;
        case "complete":
          {
            let g = CAf().safeParse(f);
            if (!g.success) return await d("parse_failed");
            c = {
              memoryCount: g.data.memory_count,
              errorCount: g.data.error_count ?? 0
            };
            break;
          }
        default:
          break;
      }
    }
  } catch (p) {
    if (await u(), p instanceof OJn) return {
      ok: !1,
      reason: "oversized_line"
    };
    return {
      ok: !1,
      reason: "stream_error"
    };
  }
  if (await u(), i !== void 0) return {
    ok: !1,
    reason: "write_failed"
  };
  if (c === null) return {
    ok: !1,
    reason: "stream_truncated"
  };
  if (c.memoryCount !== a) return {
    ok: !1,
    reason: "count_mismatch"
  };
  if (c.errorCount > 0 || l > 0) return {
    ok: !1,
    reason: "decrypt_errors"
  };
  return {
    ok: !0,
    memoryLines: a
  };
}
var vwl,
  wwl = 60000,
  vAf,
  wAf,
  CAf,
  OJn;