// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xka
// matched 2.1.88 source: src/skills/loadSkillsDir.ts
// class=new  jaccard=0.0219  score=0.0533  fileCov=0.0358
// note: nearest: src/skills/loadSkillsDir.ts (0.0219); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xka = E(() => {
  Vb();
  jdt();
  je();
  Fka();
  eqe();
  At();
  vn();
  RFn();
  Kka = require("crypto"), g5 = require("fs/promises"), Lre = require("path");
});
var Ppo = {};
_t(Ppo, {
  fetchMcpSkillsForClient: () => fetchMcpSkillsForClient
});
async function mCp(e) {
  let t = {
      direct: [],
      archives: []
    },
    n;
  try {
    let u = (await e.client.request({
      method: "resources/read",
      params: {
        uri: tpt
      }
    }, fae, {
      timeout: o6()
    })).contents?.find(d => "text" in d && typeof d.text === "string");
    if (!u || !("text" in u)) return t;
    if (n = String(u.text), n.length > dJ) return sn(e.name, `${tpt} exceeds ${dJ / 1000000 /* 1e6 */}MB, skipping skill discovery`), It("skill_mcp_load", "skill_mcp_index_too_large"), t;
  } catch {
    return t;
  }
  let r;
  try {
    r = Ft(n);
  } catch (c) {
    return sn(e.name, `${tpt} is not valid JSON (${be(c)}) \u2014 skipping skill discovery`), It("skill_mcp_load", "skill_mcp_index_invalid_json"), t;
  }
  let o = pCp().safeParse(r);
  if (!o.success) return sn(e.name, `${tpt} does not match the discovery schema \u2014 skipping skill discovery`), It("skill_mcp_load", "skill_mcp_index_schema_invalid"), t;
  let s = [],
    i = [];
  for (let c of o.data.skills) {
    let u = Qka(c.frontmatter?.name);
    if (!u) continue;
    if (c.url) {
      s.push({
        name: u,
        url: c.url,
        digest: c.digest
      });
      continue;
    }
    let d = c.archives?.find(p => !!p.url && Lpo(p.mimeType ?? void 0, p.url) !== null);
    if (d?.url) i.push({
      name: u,
      url: d.url,
      description: Qka(c.frontmatter?.description) ?? "",
      mimeType: d.mimeType ?? void 0,
      digest: d.digest
    });
  }
  let a = o.data.skills.length - s.length - i.length;
  if (a > 0) sn(e.name, `${a} ${tpt} entr${a === 1 ? "y" : "ies"} skipped (malformed or missing required fields)`), It("skill_mcp_load", "skill_mcp_index_entries_dropped");
  let l = s.slice(0, Jka);
  return {
    direct: l,
    archives: i.slice(0, Jka - l.length)
  };
}
function Qka(e) {
  return typeof e === "string" && e.length > 0 ? e : void 0;
}
async function gCp(e, t, n, r) {
  let o = await J3t(e.name, t);
  if (o.hit) return sn(e.name, `Skill '${t.name}' cache hit \u2014 no resources/read`), LFn(e, t.url, t.name, o.skillMd, n);
  return hCp(e, t.url, t.name, n, r, {
    cacheEntry: t
  });
}
async function hCp(e, t, n, r, o, s) {
  try {
    let a = (await e.client.request({
      method: "resources/read",
      params: {
        uri: t
      }
    }, fae, {
      timeout: o6()
    })).contents?.find(d => "text" in d && typeof d.text === "string");
    if (!a || !("text" in a)) return sn(e.name, `Skill resource ${t} has no text content`), o("skill_mcp_no_text_content"), null;
    if (a.text.length > dJ) return sn(e.name, `Skill resource ${t} exceeds ${dJ / 1000000 /* 1e6 */}MB, skipping`), o("skill_mcp_content_too_large"), null;
    let l = String(a.text),
      c = Aqe(s?.cacheEntry?.digest ?? void 0),
      u = X3t(l);
    if (c && c !== u) return au(e.name, `SKILL.md digest mismatch for ${t}: index declares ${c.slice(0, 12)}\u2026, served content hashes to ${u.slice(0, 12)}\u2026`), o("skill_mcp_skill_md_digest_mismatch"), null;
    if (s?.cacheEntry) await yCp(e.name, s.cacheEntry, l, u);
    return LFn(e, t, n, l, r);
  } catch (i) {
    return au(e.name, `Failed to load MCP skill from ${t}: ${be(i)}`), o("skill_mcp_fetch_failed"), null;
  }
}
async function yCp(e, t, n, r) {
  try {
    let o = Aqe(t.digest ?? void 0) ?? r,
      {
        slugDir: s,
        keyDir: i,
        alreadyExtracted: a
      } = await xFn(e, t, o);
    if (!a) {
      let l = Dpo.join(s, `.tmp-${process.pid}-${Zka.randomBytes(4).toString("hex")}`);
      await SDe.mkdir(l, {
        recursive: true
      });
      try {
        await SDe.writeFile(Dpo.join(l, "SKILL.md"), n), await SDe.rename(l, i);
      } catch (c) {
        if (await SDe.rm(l, {
          recursive: true,
          force: true
        }).catch(() => {}), on(c) !== "EEXIST" && on(c) !== "ENOTEMPTY") throw c;
      }
    }
    await kFn(s, t, o);
  } catch (o) {
    sn(e, `Failed to cache SKILL.md for '${t.name}': ${be(o)}`);
  }
}
function LFn(e, t, n, r, {
  createSkillCommand: o,
  parseSkillFrontmatterFields: s
}, i) {
  let a = B4(r),
    {
      frontmatter: l,
      content: c
    } = Bm(a, t, {
      normalizeKeys: true
    }),
    u = s(l, c, n),
    d = hc(n);
  if (u.hooks) sn(e.name, `Skill '${d}' declared hooks in frontmatter \u2014 ignored (MCP-sourced skills cannot register hooks)`);
  if (u.allowedTools.length > 0) sn(e.name, `Skill '${d}' declared allowed-tools in frontmatter \u2014 ignored (MCP-sourced skills cannot bypass permissions)`);
  let p = `${hc(e.name)}:${d}`,
    f = Nka(t),
    m = !i && f ? {
      server: lDe(e.name),
      uri: lDe(f),
      directoryRead: uqe(e.capabilities)
    } : void 0;
  return sn(e.name, `Loaded MCP skill '${d}' from ${t}`), o({
    ...u,
    hooks: void 0,
    allowedTools: [],
    executionContext: void 0,
    agent: void 0,
    model: void 0,
    effort: void 0,
    shell: void 0,
    skillName: p,
    markdownContent: c,
    source: "mcp",
    baseDir: i,
    mcpResourceRoot: m,
    loadedFrom: "mcp",
    paths: void 0
  });
}
async function _Cp(e, t, n, r) {
  let o = hc(e.name),
    s = hc(t.name),
    i = `${o}:${s}`,
    a = await J3t(e.name, t);
  if (a.hit) return sn(e.name, `Archive skill '${t.name}' cache hit at connect \u2014 no download`), LFn(e, t.url, t.name, a.skillMd, n, a.dir);
  let l = null;
  return {
    type: "prompt",
    name: i,
    description: t.description,
    isMcp: true,
    isHidden: false,
    userInvocable: true,
    loadedFrom: "mcp",
    source: "mcp",
    contentLength: 0,
    progressMessage: `Downloading skill archive from ${o}`,
    allowedTools: [],
    userFacingName: () => s,
    async getPromptForCommand(c, u) {
      let d = await n.ensureConnectedClient(e);
      l ??= Yka(d, t);
      let p;
      try {
        p = await l;
      } catch (m) {
        l = null, p = {
          errorCode: "skill_mcp_archive_unpack_failed",
          message: be(m)
        };
      }
      if ("errorCode" in p) return l = null, au(e.name, p.message), Le("skill_mcp_load", p.errorCode, {
        mcp_server_sha12: Dd(e.name)
      }), r(p.errorCode), [{
        type: "text",
        text: `Error: failed to load archive skill '${t.name}' from MCP server '${e.name}': ${p.message}`
      }];
      let f = LFn(e, t.url, t.name, p.skillMd, n, p.baseDir);
      if (f.type !== "prompt") return [{
        type: "text",
        text: `Error: archive skill '${t.name}' did not build as a prompt command`
      }];
      return xe("skill_mcp_load"), f.getPromptForCommand(c, u);
    }
  };
}
var Zka,
  SDe,
  Dpo,
  tpt = "skill://index.json",
  Jka = 100,
  dCp = 20,
  pCp,
  fetchMcpSkillsForClient;