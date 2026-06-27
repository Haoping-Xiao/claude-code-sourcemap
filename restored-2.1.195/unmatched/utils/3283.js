// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mpo
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0052  score=0.2562  fileCov=0.0053
// note: nearest: src/cli/print.ts (0.0052); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Mpo = E(() => {
  Vb();
  Xr();
  dn();
  E3t();
  Ire();
  jdt();
  je();
  At();
  lT();
  Iv();
  vn();
  SG();
  cDe();
  Jt();
  Xka();
  RFn();
  Zka = require("crypto"), SDe = require("fs/promises"), Dpo = require("path"), pCp = ve(() => H.object({
    skills: H.array(H.looseObject({
      frontmatter: H.record(H.string(), H.unknown()).nullish(),
      url: H.string().nullish(),
      digest: H.string().nullish(),
      archives: H.array(H.looseObject({
        url: H.string().nullish(),
        mimeType: H.string().nullish(),
        digest: H.string().nullish()
      }).catch({})).nullish()
    }).catch({}))
  })), fCp = JC(async e => {
    if (!tIa(e.capabilities)) return [];
    let {
      direct: t,
      archives: n
    } = await mCp(e);
    if (t.length === 0 && n.length === 0) return [];
    sn(e.name, `Found ${t.length} direct skill(s) and ${n.length} archive skill(s) in ${tpt}`);
    let r = Bua(),
      o = null,
      s = c => {
        o = c;
      },
      [i, a] = await Promise.all([Promise.all(t.map(c => gCp(e, c, r, s))), Promise.all(n.map(c => _Cp(e, c, r, s)))]),
      l = [...i.filter(c => c !== null), ...a.filter(c => c !== null)];
    if (o) Le("skill_mcp_load", o, {
      mcp_server_sha12: Dd(e.name)
    });else if (l.length > 0) xe("skill_mcp_load");
    if (l.length > 0) T(`[mcp-skills] Loaded ${l.length} skills from MCP server '${e.name}'`);
    return l;
  }, e => e.name, dCp);
});
function Hqe(e, t) {
  let n = e?.mcpInfo?.serverName,
    r = n !== void 0 ? t.mcpPermissionModeOverrides?.[n] : void 0,
    o = t.mode === "bypassPermissions" || t.mode === "auto" || t.mode === "plan" && t.isBypassPermissionsModeAvailable === !0;
  if (r !== void 0 && o) return r;
  if (o && n !== void 0 && bCp.has(n) && t.chromeClassifierFloorEnabled === !0) return t.canAutoClassifierRun === !0 ? "auto" : "default";
  return t.mode;
}
function e0a(e) {
  if (e === null) return {
    ok: !0,
    override: void 0
  };
  if (e === "default" || e === "auto") return {
    ok: !0,
    override: e
  };
  return {
    ok: !1,
    rejected: e
  };
}
var bCp;