// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NZl
// matched 2.1.88 source: src/utils/messages.ts
// class=new  jaccard=0.009  score=0.6708  fileCov=0.0091
// note: nearest: src/utils/messages.ts (0.009); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var NZl = E(() => {
  je();
  At();
  Jt();
  vKf = [200, 800];
});
async function wKf(e, t) {
  try {
    if (t > oCe && !ut(process.env.CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP)) return (await qpn(e, t)).postBoundaryBuf;
    return await FZl.readFile(e);
  } catch {
    return null;
  }
}
async function CKf(e) {
  using t = gy`parseTranscriptEntries(${e.length} bytes)`;
  let n = [],
    r = 10,
    o = e.length,
    s = 0,
    i = BZl;
  while (s < o) {
    if (s >= i) await new Promise(u => setImmediate(u)), i = s + BZl;
    let a = e.indexOf(r, s);
    if (a === -1) a = o;
    let l = s;
    while (l < a && e[l] <= 32) l++;
    if (s = a + 1, l >= a) continue;
    let c = e.toString("utf-8", l, a);
    try {
      let u = qge(c),
        d = u.type;
      if ((d === "user" || d === "assistant" || d === "progress" || d === "system" || d === "attachment") && typeof u.uuid === "string") n.push(u);
    } catch {}
  }
  return n;
}
async function IKf(e) {
  let t = new Map();
  for (let f of e) t.set(f.uuid, f);
  let n = 0;
  for (let f of t.values()) {
    if (f.type !== "system" || f.subtype !== "compact_boundary") continue;
    let m = f.compactMetadata?.preservedMessages,
      g = f.compactMetadata?.preservedSegment;
    if (m) {
      if (m.uuids.length === 0 || m.uuids.some(_ => !t.has(_))) continue;
      let h = m.anchorUuid;
      for (let _ of m.uuids) {
        let S = t.get(_);
        t.set(_, {
          ...S,
          parentUuid: h
        }), h = _;
      }
      let y = m.uuids[0],
        b = m.uuids.at(-1);
      for (let [_, S] of t) {
        if (++n % UZl === 0) await new Promise(A => setImmediate(A));
        if (S.parentUuid === m.anchorUuid && _ !== y) t.set(_, {
          ...S,
          parentUuid: b
        });
      }
    } else if (g) {
      let h = t.get(g.headUuid);
      if (h) t.set(g.headUuid, {
        ...h,
        parentUuid: g.anchorUuid
      });
      for (let [y, b] of t) {
        if (++n % UZl === 0) await new Promise(_ => setImmediate(_));
        if (b.parentUuid === g.anchorUuid && y !== g.headUuid) t.set(y, {
          ...b,
          parentUuid: g.tailUuid
        });
      }
    }
  }
  let r = new Map();
  for (let f = 0; f < e.length; f++) r.set(e[f].uuid, f);
  let o = new Set();
  for (let f of t.values()) if (f.parentUuid) o.add(f.parentUuid);
  let s = [...t.values()].filter(f => !o.has(f.uuid)),
    i = [];
  for (let f of s) {
    let m = f,
      g = new Set();
    while (m) {
      if (g.has(m.uuid)) break;
      if (g.add(m.uuid), m.type === "user" || m.type === "assistant") {
        i.push(m);
        break;
      }
      m = m.parentUuid ? t.get(m.parentUuid) : void 0;
    }
  }
  if (i.length === 0) return [];
  let a = i.filter(f => !f.isSidechain && !f.teamName && !f.isMeta),
    l = f => f.reduce((m, g) => (r.get(g.uuid) ?? -1) > (r.get(m.uuid) ?? -1) ? g : m),
    c = a.length > 0 ? l(a) : l(i),
    u = [],
    d = new Set(),
    p = t.get(c.uuid);
  while (p) {
    if (d.has(p.uuid)) break;
    d.add(p.uuid), u.push(p), p = p.parentUuid ? t.get(p.parentUuid) : void 0;
  }
  return u.reverse(), await new Promise(f => setImmediate(f)), kKf(t, u, d);
}
function D3o(e) {
  if (e.type !== "assistant") return;
  let t = e.message;
  if (typeof t !== "object" || t === null) return;
  let n = t.id;
  return typeof n === "string" ? n : void 0;
}
function xKf(e) {
  if (e.type !== "user" || !e.parentUuid) return !1;
  let t = e.message;
  if (typeof t !== "object" || t === null) return !1;
  let n = t.content;
  if (!Array.isArray(n)) return !1;
  return n.some(r => typeof r === "object" && r !== null && r.type === "tool_result");
}
function kKf(e, t, n) {
  let r = t.filter(d => d.type === "assistant");
  if (r.length === 0) return t;
  let o = new Map();
  for (let d of r) {
    let p = D3o(d);
    if (p) o.set(p, d);
  }
  let s = new Map(),
    i = new Map();
  for (let d of e.values()) {
    let p = D3o(d);
    if (p) {
      let f = s.get(p);
      if (f) f.push(d);else s.set(p, [d]);
    } else if (xKf(d)) {
      let f = d.parentUuid,
        m = i.get(f);
      if (m) m.push(d);else i.set(f, [d]);
    }
  }
  let a = new Set(),
    l = new Map(),
    c = 0;
  for (let d of r) {
    let p = D3o(d);
    if (!p || a.has(p)) continue;
    a.add(p);
    let f = s.get(p) ?? [d],
      m = f.filter(_ => !n.has(_.uuid)),
      g = [];
    for (let _ of f) {
      let S = i.get(_.uuid);
      if (!S) continue;
      for (let A of S) if (!n.has(A.uuid)) g.push(A);
    }
    if (m.length === 0 && g.length === 0) continue;
    let h = (_, S) => (_.timestamp ?? "").localeCompare(S.timestamp ?? "");
    m.sort(h), g.sort(h);
    let y = o.get(p),
      b = [...m, ...g];
    for (let _ of b) n.add(_.uuid);
    c += b.length, l.set(y.uuid, b);
  }
  if (c === 0) return t;
  let u = [];
  for (let d of t) {
    u.push(d);
    let p = l.get(d.uuid);
    if (p) u.push(...p);
  }
  return u;
}
function RKf(e, t) {
  if (e.type === "user" || e.type === "assistant") ;else if (e.type === "system" && t) ;else return !1;
  if (e.isMeta) return !1;
  if (e.isSidechain) return !1;
  if (e.teamName) return !1;
  return !0;
}
function P3o(e, t) {
  return {
    type: e.type,
    uuid: e.uuid,
    session_id: e.sessionId,
    message: e.message,
    parent_tool_use_id: t ?? null,
    timestamp: e.timestamp
  };
}
function M3o(e, t) {
  let n = t?.offset ?? 0;
  if (t?.limit !== void 0 && t.limit > 0) return e.slice(n, n + t.limit);
  if (n > 0) return e.slice(n);
  return e;
}
async function jZl(e, t) {
  let n = [];
  for (let r of e) {
    if (typeof r !== "object" || r === null) continue;
    let o = r,
      s = o.type;
    if ((s === "user" || s === "assistant" || s === "progress" || s === "system" || s === "attachment") && typeof o.uuid === "string") n.push(o);
  }
  return GZl(n, t);
}
async function GZl(e, t) {
  let n = await IKf(e),
    r = t?.includeSystemMessages ?? !1,
    s = n.filter(i => RKf(i, r)).map(i => P3o(i));
  return M3o(s, t);
}
async function WZl(e, t) {
  if (!FS(e)) return [];
  let n = await rCe(e, t?.dir);
  if (!n) return [];
  let r = await wKf(n.filePath, n.fileSize);
  if (!r) return [];
  return GZl(await CKf(r), t);
}
var FZl,
  BZl = 524288,
  UZl = 8192;