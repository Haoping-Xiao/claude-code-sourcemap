// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cco
// matched 2.1.88 source: src/services/mcp/config.ts
// class=new  jaccard=0.0111  score=0.3558  fileCov=0.0113
// note: nearest: src/services/mcp/config.ts (0.0111); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cco = E(() => {
  ih();
  v4t = Mi();
});
function gre(e) {
  let t = [];
  return {
    expanded: e.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*(?::-[^}]*)?)\}/g, (r, o) => {
      let s = o.indexOf(":-"),
        i = s === -1 ? o : o.slice(0, s),
        a = s === -1 ? void 0 : o.slice(s + 2),
        l = process.env[i];
      if (l !== void 0) return l;
      if (a !== void 0) return a;
      return t.push(i), r;
    }),
    missingVars: t
  };
}
function H_p(e, t) {
  let n = t?.baseURL,
    r = A_p.test(e);
  if ((r && !SFe(e) ? e : n != null && !SFe(n) ? n : !r && n == null ? e : null) !== null) throw Error(`downloads: request (url="${e}"` + (n != null ? `, baseURL="${n}"` : "") + ") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.");
}
var A_p, kSe;