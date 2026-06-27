// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Ol
// matched 2.1.88 source: src/utils/statsCache.ts
// class=partial  jaccard=0.1897  score=0.2307  fileCov=0.5161
// note: low-confidence suggestion: src/utils/statsCache.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Ol = Q(jtr => {
  (function (e) {
    e.black = "\x1B[30m", e.red = "\x1B[31m", e.green = "\x1B[32m", e.yellow = "\x1B[33m", e.blue = "\x1B[34m", e.magenta = "\x1B[35m", e.cyan = "\x1B[36m", e.lightgray = "\x1B[37m", e.default = "\x1B[39m", e.darkgray = "\x1B[90m", e.lightred = "\x1B[91m", e.lightgreen = "\x1B[92m", e.lightyellow = "\x1B[93m", e.lightblue = "\x1B[94m", e.lightmagenta = "\x1B[95m", e.lightcyan = "\x1B[96m", e.white = "\x1B[97m", e.reset = "\x1B[0m";
    function t(n, r) {
      return r === void 0 ? n : r + n + e.reset;
    }
    e.colored = t, e.plot = function (n, r = void 0) {
      if (typeof n[0] == "number") n = [n];
      r = typeof r < "u" ? r : {};
      let o = typeof r.min < "u" ? r.min : n[0][0],
        s = typeof r.max < "u" ? r.max : n[0][0];
      for (let S = 0; S < n.length; S++) for (let A = 0; A < n[S].length; A++) o = Math.min(o, n[S][A]), s = Math.max(s, n[S][A]);
      let i = ["\u253C", "\u2524", "\u2576", "\u2574", "\u2500", "\u2570", "\u256D", "\u256E", "\u256F", "\u2502"],
        a = Math.abs(s - o),
        l = typeof r.offset < "u" ? r.offset : 3,
        c = typeof r.padding < "u" ? r.padding : "           ",
        u = typeof r.height < "u" ? r.height : a,
        d = typeof r.colors < "u" ? r.colors : [],
        p = a !== 0 ? u / a : 1,
        f = Math.round(o * p),
        m = Math.round(s * p),
        g = Math.abs(m - f),
        h = 0;
      for (let S = 0; S < n.length; S++) h = Math.max(h, n[S].length);
      h = h + l;
      let y = typeof r.symbols < "u" ? r.symbols : i,
        b = typeof r.format < "u" ? r.format : function (S) {
          return (c + S.toFixed(2)).slice(-c.length);
        },
        _ = Array(g + 1);
      for (let S = 0; S <= g; S++) {
        _[S] = Array(h);
        for (let A = 0; A < h; A++) _[S][A] = " ";
      }
      for (let S = f; S <= m; ++S) {
        let A = b(g > 0 ? s - (S - f) * a / g : S, S - f);
        _[S - f][Math.max(l - A.length, 0)] = A, _[S - f][l - 1] = S == 0 ? y[0] : y[1];
      }
      for (let S = 0; S < n.length; S++) {
        let A = d[S % d.length],
          v = Math.round(n[S][0] * p) - f;
        _[g - v][l - 1] = t(y[0], A);
        for (let C = 0; C < n[S].length - 1; C++) {
          let x = Math.round(n[S][C + 0] * p) - f,
            I = Math.round(n[S][C + 1] * p) - f;
          if (x == I) _[g - x][C + l] = t(y[4], A);else {
            _[g - I][C + l] = t(x > I ? y[5] : y[6], A), _[g - x][C + l] = t(x > I ? y[7] : y[8], A);
            let k = Math.min(x, I),
              D = Math.max(x, I);
            for (let P = k + 1; P < D; P++) _[g - P][C + l] = t(y[9], A);
          }
        }
      }
      return _.map(function (S) {
        return S.join("");
      }).join(`
`);
    };
  })(typeof jtr > "u" ? jtr.asciichart = {} : jtr);
});
async function EOl(e) {
  while (Gtr) await Gtr;
  let t;
  Gtr = new Promise(n => {
    t = n;
  });
  try {
    return await e();
  } finally {
    Gtr = null, t?.();
  }
}
function AOl() {
  return SOl.join(tr(), $Df);
}
function Y1o() {
  return {
    version: AKe,
    lastComputedDate: null,
    dailyActivity: [],
    dailyModelTokens: [],
    modelUsage: {},
    totalSessions: 0,
    totalMessages: 0,
    longestSession: null,
    firstSessionDate: null,
    hourCounts: {},
    totalSpeculationTimeSavedMs: 0,
    shotDistribution: {}
  };
}
function ODf(e) {
  if (typeof e.version !== "number" || e.version < MDf || e.version > AKe) return null;
  if (!Array.isArray(e.dailyActivity) || !Array.isArray(e.dailyModelTokens) || typeof e.totalSessions !== "number" || typeof e.totalMessages !== "number") return null;
  return {
    version: AKe,
    lastComputedDate: e.lastComputedDate ?? null,
    dailyActivity: e.dailyActivity,
    dailyModelTokens: e.dailyModelTokens,
    modelUsage: e.modelUsage ?? {},
    totalSessions: e.totalSessions,
    totalMessages: e.totalMessages,
    longestSession: e.longestSession ?? null,
    firstSessionDate: e.firstSessionDate ?? null,
    hourCounts: e.hourCounts ?? {},
    totalSpeculationTimeSavedMs: e.totalSpeculationTimeSavedMs ?? 0,
    shotDistribution: e.shotDistribution
  };
}
async function HOl() {
  let e = AOl();
  try {
    let t = await qs().read(e),
      n = Ft(t);
    if (n.version !== AKe) {
      let r = ODf(n);
      if (!r) return T(`Stats cache version ${n.version} not migratable (expected ${AKe}), returning empty cache`), Y1o();
      return T(`Migrated stats cache from v${n.version} to v${AKe}`), await M7t(r), r;
    }
    if (!Array.isArray(n.dailyActivity) || !Array.isArray(n.dailyModelTokens) || typeof n.totalSessions !== "number" || typeof n.totalMessages !== "number") return T("Stats cache has invalid structure, returning empty cache"), Y1o();
    return n;
  } catch (t) {
    return T(`Failed to load stats cache: ${be(t)}`), Y1o();
  }
}
async function M7t(e) {
  let t = AOl();
  try {
    let n = tr();
    await qs().mkdir(n);
    let r = De(e, null, 2);
    await qs().atomicWrite(t, r, 384), T(`Stats cache saved successfully (lastComputedDate: ${e.lastComputedDate})`);
  } catch (n) {
    T(`Failed to save stats cache: ${be(n)}`, {
      level: "error"
    });
  }
}
function X1o(e, t, n) {
  let r = new Map();
  for (let p of e.dailyActivity) r.set(p.date, {
    ...p
  });
  for (let p of t.dailyActivity) {
    let f = r.get(p.date);
    if (f) f.messageCount += p.messageCount, f.sessionCount += p.sessionCount, f.toolCallCount += p.toolCallCount;else r.set(p.date, {
      ...p
    });
  }
  let o = new Map();
  for (let p of e.dailyModelTokens) o.set(p.date, {
    ...p.tokensByModel
  });
  for (let p of t.dailyModelTokens) {
    let f = o.get(p.date);
    if (f) for (let [m, g] of Object.entries(p.tokensByModel)) f[m] = (f[m] || 0) + g;else o.set(p.date, {
      ...p.tokensByModel
    });
  }
  let s = {
    ...e.modelUsage
  };
  for (let [p, f] of Object.entries(t.modelUsage)) if (s[p]) s[p] = {
    inputTokens: s[p].inputTokens + f.inputTokens,
    outputTokens: s[p].outputTokens + f.outputTokens,
    cacheReadInputTokens: s[p].cacheReadInputTokens + f.cacheReadInputTokens,
    cacheCreationInputTokens: s[p].cacheCreationInputTokens + f.cacheCreationInputTokens,
    webSearchRequests: s[p].webSearchRequests + f.webSearchRequests,
    costUSD: s[p].costUSD + f.costUSD,
    contextWindow: Math.max(s[p].contextWindow, f.contextWindow),
    maxOutputTokens: Math.max(s[p].maxOutputTokens, f.maxOutputTokens)
  };else s[p] = {
    ...f
  };
  let i = {
    ...e.hourCounts
  };
  for (let [p, f] of Object.entries(t.hourCounts)) {
    let m = parseInt(p, 10);
    i[m] = (i[m] || 0) + f;
  }
  let a = e.totalSessions + t.sessionStats.length,
    l = e.totalMessages + t.totalMessages,
    c = e.longestSession;
  for (let p of t.sessionStats) if (!c || p.duration > c.duration) c = p;
  let u = e.firstSessionDate;
  for (let p of t.sessionStats) if (!u || p.timestamp < u) u = p.timestamp;
  return {
    version: AKe,
    lastComputedDate: n,
    dailyActivity: Array.from(r.values()).sort((p, f) => p.date.localeCompare(f.date)),
    dailyModelTokens: Array.from(o.entries()).map(([p, f]) => ({
      date: p,
      tokensByModel: f
    })).sort((p, f) => p.date.localeCompare(f.date)),
    modelUsage: s,
    totalSessions: a,
    totalMessages: l,
    longestSession: c,
    firstSessionDate: u,
    hourCounts: i,
    totalSpeculationTimeSavedMs: e.totalSpeculationTimeSavedMs + t.totalSpeculationTimeSavedMs
  };
}
function pse(e) {
  let n = e.toISOString().split("T")[0];
  if (!n) throw Error("Invalid ISO date string");
  return n;
}
function J1o() {
  return pse(new Date());
}
function TOl() {
  let e = new Date();
  return e.setDate(e.getDate() - 1), pse(e);
}
function HKe(e, t) {
  return e < t;
}
var SOl,
  AKe = 4,
  MDf = 1,
  $Df = "stats-cache.json",
  Gtr = null;