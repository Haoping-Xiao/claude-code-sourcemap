// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J1c
// matched 2.1.88 source: src/utils/plugins/officialMarketplaceGcs.ts
// class=modified (alt of src/utils/plugins/officialMarketplaceGcs.ts)  jaccard=0.0226  score=0.0382  fileCov=0.0525
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module J1c] deps: zod/v4/classic/schemas.js, utils/git/gitConfigParser.ts, main.tsx, utils/errors.ts, utils/fsOperations.ts, services/mcp/officialRegistry.ts
((z1c = require("fs/promises")),
  (K1c = ve(() =>
    dt.object({
      error: dt.object({
        type: dt.string().optional(),
      }),
    }),
  )));
function tNc() {
  let e = Oe.CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
  return e && e > 0 ? e : 5000;
}
function nNc() {
  let e = Oe.CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
  return e && e > 0 ? e : 30000;
}
function P7o() {
  if (!L7o) {
    let e;
    L7o = {
      promise: new Promise((n) => {
        e = n;
      }),
      resolve: e,
    };
  }
  return L7o;
}
function oNc() {
  if (((rNc ??= Amr()), !D7o)) ((D7o = setInterval(() => void Amr(), ckm)), D7o.unref?.());
}
function sNc() {
  let e = P7o();
  return ((rNc ??= Amr()), e.promise);
}
async function iNc() {
  return (await Tvt?.catch(() => {}), Amr());
}
function dkm() {
  (bze(), rF.emit());
}
function tnn() {
  return rD.join(tr(), "skills");
}
function aNc() {
  return rD.join(tnn(), ukm);
}
async function pkm() {
  try {
    let e = await A2.readFile(aNc(), "utf8");
    return Ft(e);
  } catch {
    return null;
  }
}
async function fkm(e) {
  (await A2.mkdir(tnn(), {
    recursive: true,
  }),
    await eg(aNc(), De(e, null, 2)));
}
function fetchOfficialMarketplaceFromGcs() {
  return rD.join(tnn(), ".staging");
}
function vvt(e) {
  let t = e.replace(/[<>"|?*\\/]/g, "_"),
    n = tnn(),
    r = rD.join(n, t),
    o = rD.relative(n, r);
  if (!o || rD.isAbsolute(o) || o === ".." || o.startsWith(`..${rD.sep}`))
    throw Error(`invalid skill name: ${e}`);
  return r;
}
function mkm(e, t) {
  let n = new Map(t.map((l) => [l.skillId, l])),
    r = new Set(e.map((l) => l.skillId)),
    o = new Set(),
    s = [],
    i = [];
  for (let l of e) {
    let c = n.get(l.skillId),
      u;
    try {
      u = vvt(l.name);
    } catch {
      if ((In("warn", "skills_sync_invalid_name"), c)) i.push(c);
      continue;
    }
    if (o.has(u)) {
      if ((In("warn", "skills_sync_name_collision"), c)) i.push(c);
      continue;
    }
    if ((o.add(u), !c || c.updatedAt !== l.updatedAt || c.name !== l.name))
      s.push({
        skill: l,
        prev: c,
      });
    else i.push(c);
  }
  let a = t.filter((l) => !r.has(l.skillId));
  return {
    toDownload: s,
    toRemove: a,
    carryover: i,
    liveDirs: o,
  };
}
function gkm(e) {
  let t = vvt(e.name),
    n = rD.basename(t),
    r = mKt({
      skillName: n,
      displayName: void 0,
      description: e.description,
      hasUserSpecifiedDescription: true,
      markdownContent: "",
      allowedTools: [],
      argumentHint: void 0,
      argumentNames: [],
      whenToUse: void 0,
      version: void 0,
      model: void 0,
      disableModelInvocation: false,
      userInvocable: true,
      source: "userSettings",
      baseDir: t,
      loadedFrom: "skills",
      hooks: void 0,
      executionContext: void 0,
      agent: void 0,
      paths: void 0,
      effort: void 0,
      shell: void 0,
    });
  if (r.type === "prompt")
    r.getPromptForCommand = async (o, s) => {
      let i = await I6n(n);
      if (i.ok) {
        let l = fA(n, await mA(rc()));
        if (l && l.type === "prompt" && l !== r)
          return (
            (r.allowedTools = l.allowedTools),
            (r.hooks = l.hooks),
            (r.model = l.model),
            (r.effort = l.effort),
            (r.getEffort = l.getEffort),
            (r.source = l.source),
            (r.skillRoot = l.skillRoot),
            (r.contentLength = l.contentLength),
            (r.progressMessage = l.progressMessage),
            (r.userInvocable = l.userInvocable),
            l.getPromptForCommand(o, s)
          );
      }
      let a = i.ok ? "skill not found after download" : i.reason;
      return [
        {
          type: "text",
          text: `Skill ${n} could not be downloaded (${a}). Proceed without it.`,
        },
      ];
    };
  return r;
}
async function Z1c(e) {
  let t = vvt(e.name),
    n = rD.join(fetchOfficialMarketplaceFromGcs(), rD.relative(tnn(), t)),
    r = rD.join(vU(), `claude-skill-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
  try {
    if (
      !(await X1c(e.skillId, r, {
        isBackground: true,
      }))
    )
      return false;
    (await A2.rm(n, {
      recursive: true,
      force: true,
    }),
      await A2.mkdir(fetchOfficialMarketplaceFromGcs(), {
        recursive: true,
      }),
      await uOe(r, n));
    let s = n,
      i = await A2.readdir(n, {
        withFileTypes: true,
      });
    if (!i.some((a) => a.name === "SKILL.md") && i.length === 1 && i[0].isDirectory())
      s = rD.join(n, i[0].name);
    return (
      await A2.rm(t, {
        recursive: true,
        force: true,
      }),
      await A2.rename(s, t),
      true
    );
  } finally {
    (await A2.rm(r, {
      force: true,
    }).catch(() => {}),
      await A2.rm(n, {
        recursive: true,
        force: true,
      }).catch(() => {}));
  }
}
async function ykm(e) {
  try {
    return await Z1c(e);
  } catch {
    return (In("warn", "skills_sync_extract_retry"), await Nn(hkm), Z1c(e));
  }
}
async function eNc(e, t, n) {
  let r = 0,
    o = Array.from(
      {
        length: Math.min(t, e.length),
      },
      async () => {
        while (true) {
          let s = r++;
          if (s >= e.length) return;
          await n(e[s]);
        }
      },
    );
  await Promise.all(o);
}
async function Amr() {
  if (Tvt) return Tvt;
  return (
    (Tvt = _km().finally(() => {
      Tvt = null;
    })),
    Tvt
  );
}
async function _km() {
  let e = Date.now(),
    t = new Map();
  try {
    In("info", "skills_sync_starting");
    let n = await Y1c({
      isBackground: true,
    });
    if (!n.success) {
      (In("warn", "skills_sync_list_failed", {
        duration_ms: Date.now() - e,
      }),
        G("tengu_skills_sync_list_failed", {
          duration_ms: Date.now() - e,
        }));
      return;
    }
    let r = await pkm(),
      { toDownload: o, toRemove: s, carryover: i, liveDirs: a } = mkm(n.skills, r?.skills ?? []),
      l = async (f) => {
        try {
          let m = vvt(f);
          if (a.has(m)) return;
          await A2.rm(m, {
            recursive: true,
            force: true,
          });
        } catch {}
      };
    await A2.rm(fetchOfficialMarketplaceFromGcs(), {
      recursive: true,
      force: true,
    }).catch(() => {});
    let c = new Set(Array.from(a, (f) => rD.basename(f)));
    if (hrl(c) > 0) (w5(), rF.emit());
    if (o.length === 0 && s.length === 0) {
      In("info", "skills_sync_no_changes", {
        duration_ms: Date.now() - e,
      });
      return;
    }
    let u = 0;
    for (let { skill: f, prev: m } of o)
      if (!m) (frl(gkm(f)), u++, t.set(f.skillId, prl(rD.basename(vvt(f.name)))));
    if (u > 0) (w5(), rF.emit());
    P7o().resolve();
    let d = [],
      p = [];
    (await eNc(o, Q1c, async ({ skill: f, prev: m }) => {
      let g = false;
      try {
        g = await ykm(f);
      } catch {
        In("warn", "skills_sync_extract_failed");
      }
      if (g) {
        if ((d.push(f), m && m.name !== f.name)) await l(m.name);
        (mrl(rD.basename(vvt(f.name))), bze(), w5());
      } else if (m) p.push(m);
      t.get(f.skillId)?.(
        g
          ? {
              ok: true,
            }
          : {
              ok: false,
              reason: "download failed",
            },
      );
    }),
      await eNc(s, Q1c, (f) => l(f.name)),
      dkm(),
      await fkm({
        lastUpdated: Date.now(),
        skills: [...i, ...d, ...p],
      }),
      In("info", "skills_sync_complete", {
        downloaded: d.length,
        removed: s.length,
        duration_ms: Date.now() - e,
      }),
      G("tengu_skills_sync_success", {
        downloaded: d.length,
        removed: s.length,
        total: n.skills.length,
        duration_ms: Date.now() - e,
      }));
  } catch {
    (In("error", "skills_sync_unexpected_error", {
      duration_ms: Date.now() - e,
    }),
      G("tengu_skills_sync_error", {
        duration_ms: Date.now() - e,
      }));
  } finally {
    for (let n of t.values())
      n({
        ok: false,
        reason: "skills sync failed",
      });
    P7o().resolve();
  }
}
var A2,
  rD,
  ckm = 600000,
  Q1c = 15,
  ukm = "manifest.json",
  Tvt = null,
  rNc = null,
  L7o = null,
  D7o = null,
  hkm = 500;
