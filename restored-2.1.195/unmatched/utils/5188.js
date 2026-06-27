// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JZl
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0402  score=0.4309  fileCov=0.0424
// note: nearest: src/utils/sessionStorage.ts (0.0402); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JZl = E(() => {
  At();
  BFe();
  cDe();
  jS();
  Jt();
  N3o = require("fs"), hme = require("fs/promises"), vYe = require("path");
});
async function DKf(e, t) {
  let n = `${e}.jsonl`;
  async function r(i) {
    try {
      let a = await qs().readBytes(Pir.join(i, n));
      if (a.length === 0) return null;
      return {
        buf: a,
        projectDir: i
      };
    } catch {
      return null;
    }
  }
  if (t) {
    let i = await jA(t);
    for (let l of await Px(i)) {
      let c = await r(l);
      if (c) return c;
    }
    let a;
    try {
      a = await e9(i);
    } catch {
      a = [];
    }
    for (let l of a) {
      if (l === i) continue;
      for (let c of await Px(l)) {
        let u = await r(c);
        if (u) return u;
      }
    }
    return null;
  }
  let o = PO(),
    s;
  try {
    s = await qs().list(o);
  } catch {
    return null;
  }
  for (let i of s) {
    let a = await r(Pir.join(o, i));
    if (a) return a;
  }
  return null;
}
function MKf(e, t) {
  let n = [],
    r = [],
    o = 10,
    s = e.length,
    i = 0;
  while (i < s) {
    let a = e.indexOf(10, i);
    if (a === -1) a = s;
    let l = i;
    while (l < a && e[l] <= 32) l++;
    if (i = a + 1, l >= a) continue;
    let c = e.toString("utf-8", l, a);
    try {
      QZl(Ft(c), t, n, r);
    } catch {}
  }
  return {
    transcript: n,
    contentReplacements: r
  };
}
function $Kf(e, t) {
  let n = [],
    r = [];
  for (let o of e) {
    if (typeof o !== "object" || o === null) continue;
    QZl(o, t, n, r);
  }
  return {
    transcript: n,
    contentReplacements: r
  };
}
function QZl(e, t, n, r) {
  if (PKf.has(e.type) && typeof e.uuid === "string") n.push(e);else if (e.type === "content-replacement" && e.sessionId === t && Array.isArray(e.replacements)) r.push(...e.replacements);
}
async function ZZl(e, t = {}) {
  if (!FS(e)) throw Error(`Invalid sessionId: ${e}`);
  if (t.upToMessageId && !FS(t.upToMessageId)) throw Error(`Invalid upToMessageId: ${t.upToMessageId}`);
  let n = await DKf(e, t.dir);
  if (!n) throw Error(t.dir ? `Session ${e} not found in project directory for ${t.dir}` : `Session ${e} not found`);
  let {
    entries: r,
    forkedSessionId: o
  } = OKf(n.buf, e, t);
  return await The(Pir.join(n.projectDir, `${o}.jsonl`), r), {
    sessionId: o
  };
}
function OKf(e, t, n) {
  let r = MKf(e, t);
  return tec(r, t, n, () => {
    let s = e.length,
      i = e.toString("utf-8", 0, Math.min(s, Mw)),
      a = e.toString("utf-8", Math.max(0, s - Mw));
    return Kb(a, "customTitle") || Kb(i, "customTitle") || Kb(a, "aiTitle") || Kb(i, "aiTitle") || Gpn(i);
  });
}
function eec(e, t, n) {
  let r = $Kf(e, t);
  return tec(r, t, n, () => NKf(e));
}
function NKf(e) {
  let t, n;
  for (let r of e) {
    if (typeof r !== "object" || r === null) continue;
    let o = r;
    if (typeof o.customTitle === "string" && o.customTitle) t = o.customTitle;
    if (typeof o.aiTitle === "string" && o.aiTitle) n = o.aiTitle;
  }
  return t || n || QEs(e) || void 0;
}
function tec(e, t, n, r) {
  let o = e.transcript.filter(p => !p.isSidechain);
  if (o.length === 0) throw Error(`Session ${t} has no messages to fork`);
  if (n.upToMessageId) {
    let p = o.findIndex(f => f.uuid === n.upToMessageId);
    if (p === -1) throw Error(`Message ${n.upToMessageId} not found in session ${t}`);
    o = o.slice(0, p + 1);
  }
  let s = new Map();
  for (let p of o) s.set(p.uuid, zJt.randomUUID());
  let i = o.filter(p => p.type !== "progress");
  if (i.length === 0) throw Error(`Session ${t} has no messages to fork`);
  let a = new Map();
  for (let p of o) a.set(p.uuid, p);
  let l = zJt.randomUUID(),
    c = new Date().toISOString(),
    u = [];
  for (let p = 0; p < i.length; p++) {
    let f = i[p],
      m = s.get(f.uuid),
      g = null,
      h = f.parentUuid;
    while (h) {
      let A = a.get(h);
      if (!A) break;
      if (A.type !== "progress") {
        g = s.get(h) ?? null;
        break;
      }
      h = A.parentUuid;
    }
    let y = p === i.length - 1 ? c : f.timestamp,
      b = f.logicalParentUuid == null ? f.logicalParentUuid : s.get(f.logicalParentUuid) ?? null,
      _ = f.type === "system" && f.subtype === "model_refusal_fallback" ? {
        neutralizedByFork: !0
      } : void 0,
      S = {
        ...f,
        ..._,
        uuid: m,
        parentUuid: g,
        logicalParentUuid: b,
        sessionId: l,
        timestamp: y,
        isSidechain: !1,
        teamName: void 0,
        agentName: void 0,
        sessionKind: void 0,
        slug: void 0,
        sourceToolAssistantUUID: void 0,
        forkedFrom: {
          sessionId: t,
          messageUuid: f.uuid
        }
      };
    u.push(S);
  }
  if (e.contentReplacements.length > 0) u.push({
    type: "content-replacement",
    sessionId: l,
    replacements: e.contentReplacements,
    uuid: zJt.randomUUID(),
    timestamp: c
  });
  let d = n.title?.trim();
  if (!d) d = `${r() || "Forked session"} (fork)`;
  return u.push({
    type: "custom-title",
    sessionId: l,
    customTitle: d,
    uuid: zJt.randomUUID(),
    timestamp: c
  }), {
    entries: u,
    forkedSessionId: l
  };
}
var zJt, Pir, PKf;