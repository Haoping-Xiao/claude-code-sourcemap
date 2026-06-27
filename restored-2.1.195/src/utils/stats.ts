// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NOl
// matched 2.1.88 source: src/utils/stats.ts
// class=modified  jaccard=0.5426  score=0.9443  fileCov=0.5605
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NOl] deps: dn, Bi, vn, Is, bUt, kv
(($Ol = require("child_process")), (fEt = require("fs/promises")), (nNo = require("path")));
async function Vtr(e, t = {}) {
  let { fromDate: n, toDate: r } = t,
    o = qt(),
    s = new Map(),
    i = new Map(),
    a = [],
    l = new Map(),
    c = 0,
    u = 0,
    d = {},
    p = void 0,
    f = new Set(),
    m = 20;
  for (let g = 0; g < e.length; g += m) {
    let h = e.slice(g, g + m),
      y = await Promise.all(
        h.map(async (b) => {
          try {
            if (n)
              try {
                let S = await o.stat(b),
                  A = pse(S.mtime);
                if (HKe(A, n))
                  return {
                    sessionFile: b,
                    entries: null,
                    error: null,
                    skipped: true,
                  };
              } catch {}
            let _ = await Het(b);
            return {
              sessionFile: b,
              entries: _,
              error: null,
              skipped: false,
            };
          } catch (_) {
            return {
              sessionFile: b,
              entries: null,
              error: _,
              skipped: false,
            };
          }
        }),
      );
    for (let { sessionFile: b, entries: _, error: S, skipped: A } of y) {
      if (A) continue;
      if (S || !_) {
        T(`Failed to read session file ${b}: ${be(S)}`);
        continue;
      }
      let v = $fe.basename(b, ".jsonl"),
        C = [];
      for (let N of _)
        if (J5(N)) C.push(N);
        else if (N.type === "speculation-accept") u += N.timeSavedMs;
      if (C.length === 0) continue;
      let x = b.includes(`${$fe.sep}subagents${$fe.sep}`),
        I = x ? C : C.filter((N) => !N.isSidechain);
      if (I.length === 0) continue;
      let k = I[0],
        D = I.at(-1),
        P = new Date(k.timestamp),
        O = new Date(D.timestamp);
      if (isNaN(P.getTime()) || isNaN(O.getTime())) {
        T(`Skipping session with invalid timestamp: ${b}`);
        continue;
      }
      let L = pse(P);
      if (r && HKe(r, L)) continue;
      let M = !n || !HKe(L, n);
      if (!x && M) {
        let N = O.getTime() - P.getTime();
        a.push({
          sessionId: v,
          duration: N,
          messageCount: I.length,
          timestamp: k.timestamp,
        });
        let B = s.get(L);
        if (!B)
          ((B = {
            date: L,
            messageCount: 0,
            sessionCount: 0,
            toolCallCount: 0,
          }),
            s.set(L, B));
        B.sessionCount++;
        let $ = P.getHours();
        l.set($, (l.get($) || 0) + 1);
      }
      for (let N of I) {
        let B = new Date(N.timestamp);
        if (isNaN(B.getTime())) continue;
        let $ = pse(B);
        if (n && HKe($, n)) continue;
        if (r && HKe(r, $)) continue;
        let q = s.get($);
        if (!q && !x)
          ((q = {
            date: $,
            messageCount: 0,
            sessionCount: 0,
            toolCallCount: 0,
          }),
            s.set($, q));
        if (!x) {
          if ((c++, q)) q.messageCount++;
        }
        if (N.type === "assistant") {
          let W = N.message?.content;
          if (Array.isArray(W)) {
            for (let V of W) if (V.type === "tool_use" && q) q.toolCallCount++;
          }
          if (N.message?.usage) {
            let V = N.message.usage,
              Y = N.message.model || "unknown";
            if (Y === _I) continue;
            if (!d[Y])
              d[Y] = {
                inputTokens: 0,
                outputTokens: 0,
                cacheReadInputTokens: 0,
                cacheCreationInputTokens: 0,
                webSearchRequests: 0,
                costUSD: 0,
                contextWindow: 0,
                maxOutputTokens: 0,
              };
            ((d[Y].inputTokens += V.input_tokens || 0),
              (d[Y].outputTokens += V.output_tokens || 0),
              (d[Y].cacheReadInputTokens += V.cache_read_input_tokens || 0),
              (d[Y].cacheCreationInputTokens += V.cache_creation_input_tokens || 0));
            let z = (V.input_tokens || 0) + (V.output_tokens || 0);
            if (z > 0) {
              let K = i.get($) || {};
              ((K[Y] = (K[Y] || 0) + z), i.set($, K));
            }
          }
        }
      }
    }
  }
  return {
    dailyActivity: Array.from(s.values()).sort((g, h) => g.date.localeCompare(h.date)),
    dailyModelTokens: Array.from(i.entries())
      .map(([g, h]) => ({
        date: g,
        tokensByModel: h,
      }))
      .sort((g, h) => g.date.localeCompare(h.date)),
    modelUsage: d,
    sessionStats: a,
    hourCounts: Object.fromEntries(l),
    totalMessages: c,
    totalSpeculationTimeSavedMs: u,
    ...{},
  };
}
async function BOl() {
  let e = oF(),
    t = qt(),
    n;
  try {
    n = await t.readdir(e);
  } catch (s) {
    if (wn(s)) return [];
    throw s;
  }
  let r = n.filter((s) => s.isDirectory()).map((s) => $fe.join(e, s.name));
  return (
    await Promise.all(
      r.map(async (s) => {
        try {
          let i = await t.readdir(s),
            a = i
              .filter((u) => u.isFile() && u.name.endsWith(".jsonl"))
              .map((u) => $fe.join(s, u.name)),
            l = i.filter((u) => u.isDirectory()),
            c = await Promise.all(
              l.map(async (u) => {
                let d = $fe.join(s, u.name, "subagents");
                try {
                  return (await t.readdir(d))
                    .filter(
                      (f) => f.isFile() && f.name.endsWith(".jsonl") && f.name.startsWith("agent-"),
                    )
                    .map((f) => $fe.join(d, f.name));
                } catch {
                  return [];
                }
              }),
            );
          return [...a, ...c.flat()];
        } catch (i) {
          return (T(`Failed to read project directory ${s}: ${be(i)}`), []);
        }
      }),
    )
  ).flat();
}
function oPf(e, t) {
  let n = new Map();
  for (let _ of e.dailyActivity)
    n.set(_.date, {
      ..._,
    });
  if (t)
    for (let _ of t.dailyActivity) {
      let S = n.get(_.date);
      if (S)
        ((S.messageCount += _.messageCount),
          (S.sessionCount += _.sessionCount),
          (S.toolCallCount += _.toolCallCount));
      else
        n.set(_.date, {
          ..._,
        });
    }
  let r = new Map();
  for (let _ of e.dailyModelTokens)
    r.set(_.date, {
      ..._.tokensByModel,
    });
  if (t)
    for (let _ of t.dailyModelTokens) {
      let S = r.get(_.date);
      if (S) for (let [A, v] of Object.entries(_.tokensByModel)) S[A] = (S[A] || 0) + v;
      else
        r.set(_.date, {
          ..._.tokensByModel,
        });
    }
  let o = {
    ...e.modelUsage,
  };
  if (t)
    for (let [_, S] of Object.entries(t.modelUsage))
      if (o[_])
        o[_] = {
          inputTokens: o[_].inputTokens + S.inputTokens,
          outputTokens: o[_].outputTokens + S.outputTokens,
          cacheReadInputTokens: o[_].cacheReadInputTokens + S.cacheReadInputTokens,
          cacheCreationInputTokens: o[_].cacheCreationInputTokens + S.cacheCreationInputTokens,
          webSearchRequests: o[_].webSearchRequests + S.webSearchRequests,
          costUSD: o[_].costUSD + S.costUSD,
          contextWindow: Math.max(o[_].contextWindow, S.contextWindow),
          maxOutputTokens: Math.max(o[_].maxOutputTokens, S.maxOutputTokens),
        };
      else
        o[_] = {
          ...S,
        };
  let s = new Map();
  for (let [_, S] of Object.entries(e.hourCounts)) s.set(parseInt(_, 10), S);
  if (t)
    for (let [_, S] of Object.entries(t.hourCounts)) {
      let A = parseInt(_, 10);
      s.set(A, (s.get(A) || 0) + S);
    }
  let i = Array.from(n.values()).sort((_, S) => _.date.localeCompare(S.date)),
    a = UOl(i),
    l = Array.from(r.entries())
      .map(([_, S]) => ({
        date: _,
        tokensByModel: S,
      }))
      .sort((_, S) => _.date.localeCompare(S.date)),
    c = e.totalSessions + (t?.sessionStats.length || 0),
    u = e.totalMessages + (t?.totalMessages || 0),
    d = e.longestSession;
  if (t) {
    for (let _ of t.sessionStats) if (!d || _.duration > d.duration) d = _;
  }
  let p = e.firstSessionDate,
    f = null;
  if (t)
    for (let _ of t.sessionStats) {
      if (!p || _.timestamp < p) p = _.timestamp;
      if (!f || _.timestamp > f) f = _.timestamp;
    }
  if (!f && i.length > 0) f = i.at(-1).date;
  let m = i.length > 0 ? i.reduce((_, S) => (S.messageCount > _.messageCount ? S : _)).date : null,
    g =
      s.size > 0 ? Array.from(s.entries()).reduce((_, [S, A]) => (A > _[1] ? [S, A] : _))[0] : null,
    h = p && f ? Math.ceil((new Date(f).getTime() - new Date(p).getTime()) / 86400000) + 1 : 0,
    y = e.totalSpeculationTimeSavedMs + (t?.totalSpeculationTimeSavedMs || 0);
  return {
    totalSessions: c,
    totalMessages: u,
    totalDays: h,
    activeDays: n.size,
    streaks: a,
    dailyActivity: i,
    dailyModelTokens: l,
    longestSession: d,
    modelUsage: o,
    firstSessionDate: p,
    lastSessionDate: f,
    peakActivityDay: m,
    peakActivityHour: g,
    totalSpeculationTimeSavedMs: y,
  };
}
async function sPf() {
  let e = await BOl();
  if (e.length === 0) return FOl();
  let t = await EOl(async () => {
      let o = await HOl(),
        s = TOl(),
        i = o;
      if (!o.lastComputedDate) {
        T("Stats cache empty, processing all historical data");
        let a = await Vtr(e, {
          toDate: s,
        });
        if (a.sessionStats.length > 0 || a.dailyActivity.length > 0)
          ((i = X1o(o, a, s)), await M7t(i));
      } else if (HKe(o.lastComputedDate, s)) {
        let a = aPf(o.lastComputedDate);
        T(`Stats cache stale (${o.lastComputedDate}), processing ${a} to ${s}`);
        let l = await Vtr(e, {
          fromDate: a,
          toDate: s,
        });
        if (l.sessionStats.length > 0 || l.dailyActivity.length > 0)
          ((i = X1o(o, l, s)), await M7t(i));
        else
          ((i = {
            ...o,
            lastComputedDate: s,
          }),
            await M7t(i));
      }
      return i;
    }),
    n = J1o(),
    r = await Vtr(e, {
      fromDate: n,
      toDate: n,
    });
  return oPf(t, r);
}
async function rNo(e) {
  if (e === "all") return sPf();
  let t = await BOl();
  if (t.length === 0) return FOl();
  let n = new Date(),
    r = e === "7d" ? 7 : 30,
    o = new Date(n);
  o.setDate(n.getDate() - r + 1);
  let s = pse(o),
    i = await Vtr(t, {
      fromDate: s,
    });
  return iPf(i);
}
function iPf(e) {
  let t = e.dailyActivity.slice().sort((p, f) => p.date.localeCompare(f.date)),
    n = e.dailyModelTokens.slice().sort((p, f) => p.date.localeCompare(f.date)),
    r = UOl(t),
    o = null;
  for (let p of e.sessionStats) if (!o || p.duration > o.duration) o = p;
  let s = null,
    i = null;
  for (let p of e.sessionStats) {
    if (!s || p.timestamp < s) s = p.timestamp;
    if (!i || p.timestamp > i) i = p.timestamp;
  }
  let a = t.length > 0 ? t.reduce((p, f) => (f.messageCount > p.messageCount ? f : p)).date : null,
    l = Object.entries(e.hourCounts),
    c =
      l.length > 0
        ? parseInt(l.reduce((p, [f, m]) => (m > parseInt(p[1].toString()) ? [f, m] : p))[0], 10)
        : null,
    u = s && i ? Math.ceil((new Date(i).getTime() - new Date(s).getTime()) / 86400000) + 1 : 0;
  return {
    totalSessions: e.sessionStats.length,
    totalMessages: e.totalMessages,
    totalDays: u,
    activeDays: e.dailyActivity.length,
    streaks: r,
    dailyActivity: t,
    dailyModelTokens: n,
    longestSession: o,
    modelUsage: e.modelUsage,
    firstSessionDate: s,
    lastSessionDate: i,
    peakActivityDay: a,
    peakActivityHour: c,
    totalSpeculationTimeSavedMs: e.totalSpeculationTimeSavedMs,
  };
}
function aPf(e) {
  let t = new Date(e);
  return (t.setUTCDate(t.getUTCDate() + 1), pse(t));
}
function lPf(e) {
  let t = new Date(e);
  return (t.setUTCDate(t.getUTCDate() - 1), pse(t));
}
function UOl(e) {
  if (e.length === 0)
    return {
      currentStreak: 0,
      longestStreak: 0,
      currentStreakStart: null,
      longestStreakStart: null,
      longestStreakEnd: null,
    };
  let t = 0,
    n = null,
    r = J1o(),
    o = new Set(e.map((c) => c.date));
  while (o.has(r)) (t++, (n = r), (r = lPf(r)));
  let s = 0,
    i = null,
    a = null,
    l = Array.from(o).sort();
  if (l.length > 0) {
    let c = 1,
      u = l[0];
    for (let d = 1; d < l.length; d++) {
      let p = new Date(l[d - 1]),
        f = new Date(l[d]);
      if (Math.round((f.getTime() - p.getTime()) / 86400000) === 1) c++;
      else {
        if (c > s) ((s = c), (i = u), (a = l[d - 1]));
        ((c = 1), (u = l[d]));
      }
    }
    if (c > s) ((s = c), (i = u), (a = l.at(-1)));
  }
  return {
    currentStreak: t,
    longestStreak: s,
    currentStreakStart: n,
    longestStreakStart: i,
    longestStreakEnd: a,
  };
}
function FOl() {
  return {
    totalSessions: 0,
    totalMessages: 0,
    totalDays: 0,
    activeDays: 0,
    streaks: {
      currentStreak: 0,
      longestStreak: 0,
      currentStreakStart: null,
      longestStreakStart: null,
      longestStreakEnd: null,
    },
    dailyActivity: [],
    dailyModelTokens: [],
    longestSession: null,
    modelUsage: {},
    firstSessionDate: null,
    lastSessionDate: null,
    peakActivityDay: null,
    peakActivityHour: null,
    totalSpeculationTimeSavedMs: 0,
  };
}
var $fe;
