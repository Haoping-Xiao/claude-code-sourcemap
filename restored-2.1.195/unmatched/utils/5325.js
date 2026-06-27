// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZVo
// matched 2.1.88 source: src/services/PromptSuggestion/speculation.ts
// class=new  jaccard=0.0168  score=0.2804  fileCov=0.0176
// note: nearest: src/services/PromptSuggestion/speculation.ts (0.0168); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ZVo] deps: services/analytics/index.ts, commands/bridge-kick.ts, BWt, utils/sessionStorage.ts, google-auth-library/build/src/crypto/node/crypto.js, utils/http.ts, utils/config.ts, utils/debug.ts, utils/path.ts, Sx, utils/fsOperations.ts, utils/attachments.ts
guc = require("net");
function e9o(e) {
  let t = "",
    n = "",
    r = true,
    o = 0,
    s = "",
    i = false;
  function a(c, u) {
    let d = Vm(xc(n), $cr),
      p = `${c}|${u}|${d}`;
    if (p === s) return;
    s = p, zi(e).then(f => f && !i ? Kd(e, {
      ...f,
      state: c,
      tempo: u,
      detail: d,
      updatedAt: new Date().toISOString()
    }) : void 0).catch(ke);
  }
  let l = setInterval(() => {
    if (o > 0 && Date.now() - o < huc) a("working", "active");else if (!r && n) a("blocked", "blocked");else a("working", "idle");
  }, huc);
  return l.unref(), {
    feed(c) {
      let u = Ja(c.replace(Jsm, "\x00")).replace(/\r\n?/g, `
`).replace(/\0+$/, "").replace(/\0/g, `
`);
      if (!u) return;
      o = Date.now(), t += u;
      let d = t.split(`
`);
      if (t = d.pop() ?? "", r = t === "", n = t.trim() || d.findLast(f => f.trim())?.trim() || n, t.length > $cr * 2) t = t.slice(-$cr);
      if (s.startsWith("blocked|")) a("working", "active");
    },
    dispose() {
      i = true, clearInterval(l);
    },
    get lastLine() {
      return Vm(xc(n), $cr);
    }
  };
}
var huc = 2000,
  $cr,
  Jsm;