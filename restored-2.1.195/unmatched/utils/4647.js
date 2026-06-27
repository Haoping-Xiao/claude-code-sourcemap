// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J$l
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0292  score=0.2331  fileCov=0.0323
// note: nearest: src/components/Settings/Config.tsx (0.0292); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module J$l] deps: Ye, Kce, PUt, sr, ps, si, Xa, er, Rnt, er, Fh, iu, lT, DE, __, kt, dn, utr, uo, EHe, ptr, _1o, GMl, vi, mE, zMl, XMl, dC, gb, j_e, Ko, Cc, Bs, kP, fH, Pfe, aE, dr, HU, G4, wr, fn, lH, rze, S7t, n1o, sre, oo, qd, dse, _i, NE, rtr, W$l, s1o
N1o = R(lt(), 1), z$l = R(rt(), 1), Em = R(rt(), 1), Zo = R(se(), 1);
Y$l = {
  auto: "Auto (match terminal)",
  dark: "Dark mode",
  light: "Light mode",
  "dark-daltonized": "Dark mode (colorblind-friendly)",
  "light-daltonized": "Light mode (colorblind-friendly)",
  "dark-ansi": "Dark mode (ANSI colors only)",
  "light-ansi": "Light mode (ANSI colors only)"
};
function THe(e, t, n, r) {
  let o = e.subarray(n, r).indexOf(t);
  return o < 0 ? -1 : n + o;
}
function HHe(e, t, n, r) {
  let o = THe(e, t, n, r);
  if (o < 0) return;
  let s = o + t.length,
    i = s;
  while (i < r && e[i] !== rOl) i++;
  return e.toString("utf8", s, i);
}
function uDf(e, t, n) {
  let r = t;
  while (true) {
    if (r = THe(e, Z$l, r, n), r < 0) return;
    let o = r + Z$l.length;
    if (THe(e, XLf, o, o + 4) === o) {
      let s = o;
      while (s < n && e[s] !== rOl) s++;
      return e.toString("utf8", o, s);
    }
    r = o;
  }
}
function Dtr(e, t, n, r) {
  let o = THe(e, t, n, r);
  if (o < 0) return 0;
  let s = o + t.length,
    i = 0;
  while (s < r && e[s] >= eOl && e[s] <= cDf) i = i * 10 + (e[s] - eOl), s++;
  return i;
}
function dDf(e) {
  if (!e) return 3;
  let t = e.toLowerCase();
  if (t.includes("fable")) return 10;
  if (t.includes("opus")) return 5;
  if (t.includes("haiku")) return 1;
  return 3;
}
function pDf(e) {
  return (e.cached + e.uncached * 10 + e.cacheCreate * 12.5 + e.output * 50) * e.modelTier;
}
async function $tr() {
  let e = Date.now() - 604800000,
    t = Date.now() - 86400000,
    n = PO(),
    r;
  try {
    r = await pEt.readdir(n);
  } catch (c) {
    if (Vo(c)) return {
      day: nOl(),
      week: nOl()
    };
    throw c;
  }
  let s = (await Promise.all(r.map(c => fDf(BOe.join(n, c))))).flat(),
    i = B1o(),
    a = B1o(),
    l = new Set();
  for (let c = 0; c < s.length; c += Q$l) {
    let u = s.slice(c, c + Q$l),
      d = await Promise.all(u.map(p => mDf(p, e)));
    for (let p of d) for (let f of p) {
      if (f.uuid) {
        if (l.has(f.uuid)) continue;
        l.add(f.uuid);
      }
      if (tOl(a, f), f.ts >= t) tOl(i, f);
    }
  }
  return {
    day: U1o(i),
    week: U1o(a)
  };
}
async function fDf(e) {
  let t;
  try {
    t = await pEt.readdir(e, {
      withFileTypes: true
    });
  } catch (s) {
    if (Vo(s)) return [];
    throw s;
  }
  let n = [],
    r = [];
  for (let s of t) if (s.isFile() && BOe.extname(s.name) === ".jsonl") n.push(BOe.join(e, s.name));else if (s.isDirectory()) r.push(s.name);
  let o = await Promise.all(r.map(async s => {
    let i = BOe.join(e, s, "subagents");
    try {
      return (await pEt.readdir(i, {
        recursive: true
      })).filter(l => BOe.extname(l) === ".jsonl").map(l => BOe.join(i, l));
    } catch (a) {
      if (Vo(a)) return [];
      throw a;
    }
  }));
  for (let s of o) for (let i of s) n.push(i);
  return n;
}
async function mDf(e, t) {
  let n;
  try {
    n = await pEt.stat(e);
  } catch (o) {
    if (Vo(o)) return [];
    throw o;
  }
  if (!n.isFile() || n.mtimeMs < t) return [];
  let r = [];
  try {
    for await (let o of ris(e)) {
      let s = gDf(o, 0, o.length, t);
      if (s) r.push(s);
    }
  } catch (o) {
    if (Vo(o)) return r;
    throw o;
  }
  return r;
}
function gDf(e, t, n, r) {
  if (THe(e, WLf, t, n) < 0) return;
  if (THe(e, qLf, t, n) < 0) return;
  let o = HHe(e, VLf, t, n),
    s = HHe(e, zLf, t, n);
  if (!o || !s) return;
  let i = Date.parse(o);
  if (Number.isNaN(i) || i < r) return;
  let a = Dtr(e, QLf, t, n),
    l = Dtr(e, ZLf, t, n),
    c = Dtr(e, eDf, t, n),
    u = Dtr(e, tDf, t, n);
  if (a + l + c + u === 0) return;
  let d = THe(e, oDf, t, n) >= 0;
  return {
    ts: i,
    sessionId: s,
    cached: u,
    cacheCreate: c,
    uncached: a,
    output: l,
    isSubagent: THe(e, nDf, t, n) >= 0 || THe(e, rDf, t, n) >= 0,
    modelTier: dDf(HHe(e, KLf, t, n)),
    uuid: HHe(e, YLf, t, n) ?? uDf(e, t, n) ?? HHe(e, JLf, t, n) ?? "",
    ...(d && {
      attributionAgent: HHe(e, sDf, t, n),
      attributionSkill: HHe(e, iDf, t, n),
      attributionPlugin: HHe(e, aDf, t, n),
      attributionMcpServer: HHe(e, lDf, t, n)
    })
  };
}
function B1o() {
  return {
    totalCost: 0,
    requestCount: 0,
    cacheMissCost: 0,
    cacheMissCount: 0,
    longCtxCost: 0,
    longCtxCount: 0,
    sessions: new Map(),
    buckets: new Map(),
    byAgent: new Map(),
    bySkill: new Map(),
    byPlugin: new Map(),
    byMcpServer: new Map()
  };
}
function Ptr(e, t, n) {
  if (t) e.set(t, (e.get(t) ?? 0) + n);
}
function tOl(e, t) {
  let n = pDf(t);
  if (e.totalCost += n, e.requestCount++, t.attributionAgent) Ptr(e.byAgent, t.attributionSkill ?? t.attributionAgent, n);else Ptr(e.bySkill, t.attributionSkill, n);
  Ptr(e.byPlugin, t.attributionPlugin, n), Ptr(e.byMcpServer, t.attributionMcpServer, n);
  let r = t.cached + t.cacheCreate + t.uncached;
  if (t.uncached > OLf) e.cacheMissCost += n, e.cacheMissCount++;
  if (r > NLf) e.longCtxCost += n, e.longCtxCount++;
  let o = e.sessions.get(t.sessionId);
  if (!o) o = {
    cost: 0,
    subCost: 0,
    subCount: 0,
    hours: new Set()
  }, e.sessions.set(t.sessionId, o);
  if (o.cost += n, t.isSubagent) o.subCost += n, o.subCount++;
  o.hours.add(Math.floor(t.ts / 3600000));
  let s = Math.floor(t.ts / FLf),
    i = e.buckets.get(s);
  if (!i) i = {
    sids: new Set(),
    cost: 0,
    count: 0
  }, e.buckets.set(s, i);
  i.sids.add(t.sessionId), i.cost += n, i.count++;
}
function U1o(e) {
  let t = 0,
    n = 0;
  for (let l of e.buckets.values()) if (l.sids.size >= jLf) t += l.cost, n += l.count;
  let r = 0,
    o = 0,
    s = 0,
    i = 0;
  for (let l of e.sessions.values()) {
    if (l.subCount >= BLf || l.cost > 0 && l.subCost / l.cost > ULf) r += l.cost, o++;
    if (l.hours.size >= GLf) s += l.cost, i++;
  }
  let a = [{
    key: "cache_miss",
    cost: e.cacheMissCost,
    count: e.cacheMissCount
  }, {
    key: "long_context",
    cost: e.longCtxCost,
    count: e.longCtxCount
  }, {
    key: "subagent_heavy",
    cost: r,
    count: o
  }, {
    key: "high_parallel",
    cost: t,
    count: n
  }, {
    key: "cron",
    cost: s,
    count: i
  }];
  return a.sort((l, c) => c.cost - l.cost), {
    totalCost: e.totalCost,
    requestCount: e.requestCount,
    sessionCount: e.sessions.size,
    behaviors: a,
    agents: Mtr(e.byAgent, e.totalCost),
    skills: Mtr(e.bySkill, e.totalCost),
    plugins: Mtr(e.byPlugin, e.totalCost),
    mcpServers: Mtr(e.byMcpServer, e.totalCost)
  };
}
function nOl() {
  return U1o(B1o());
}
function Mtr(e, t) {
  if (e.size === 0 || t === 0) return [];
  return [...e.entries()].sort((n, r) => r[1] - n[1]).map(([n, r]) => ({
    name: n,
    pct: Math.round(r / t * 100)
  })).filter(n => n.pct > 0);
}
var pEt,
  BOe,
  Q$l = 4,
  OLf = 100000 /* 1e5 */,
  NLf = 150000,
  BLf = 3,
  ULf = 0.5,
  FLf = 300000,
  jLf = 4,
  GLf = 8,
  jL,
  WLf,
  qLf,
  VLf,
  zLf,
  KLf,
  YLf,
  Z$l,
  XLf,
  JLf,
  QLf,
  ZLf,
  eDf,
  tDf,
  nDf,
  rDf,
  oDf,
  sDf,
  iDf,
  aDf,
  lDf,
  rOl = 34,
  eOl = 48,
  cDf = 57;