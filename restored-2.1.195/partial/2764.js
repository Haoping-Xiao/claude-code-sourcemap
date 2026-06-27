// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ioo
// matched 2.1.88 source: src/utils/cron.ts
// class=partial  jaccard=0.234  score=0.2936  fileCov=0.5353
// note: low-confidence suggestion: src/utils/cron.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ioo = E(() => {
  O2t = new Set(["Frame", "FrameRead", "TeamCreate", "TeamDelete", "SuggestBackgroundPR"]);
});
function aop(e, t) {
  let {
      min: n,
      max: r
    } = t,
    o = new Set();
  for (let s of e.split(",")) {
    let i = s.match(/^\*(?:\/(\d+))?$/);
    if (i) {
      let c = i[1] ? parseInt(i[1], 10) : 1;
      if (c < 1) return null;
      for (let u = n; u <= r; u += c) o.add(u);
      continue;
    }
    let a = s.match(/^(\d+)-(\d+)(?:\/(\d+))?$/);
    if (a) {
      let c = parseInt(a[1], 10),
        u = parseInt(a[2], 10),
        d = a[3] ? parseInt(a[3], 10) : 1,
        p = n === 0 && r === 6,
        f = p ? 7 : r;
      if (c > u || d < 1 || c < n || u > f) return null;
      for (let m = c; m <= u; m += d) o.add(p && m === 7 ? 0 : m);
      continue;
    }
    if (s.match(/^\d+$/)) {
      let c = parseInt(s, 10);
      if (n === 0 && r === 6 && c === 7) c = 0;
      if (c < n || c > r) return null;
      o.add(c);
      continue;
    }
    return null;
  }
  if (o.size === 0) return null;
  return Array.from(o).sort((s, i) => s - i);
}
function F1(e) {
  let t = e.trim().split(/\s+/);
  if (t.length !== 5) return null;
  let n = [];
  for (let r = 0; r < 5; r++) {
    let o = aop(t[r], iop[r]);
    if (!o) return null;
    n.push(o);
  }
  return {
    minute: n[0],
    hour: n[1],
    dayOfMonth: n[2],
    month: n[3],
    dayOfWeek: n[4]
  };
}
function Act(e, t) {
  let n = new Set(e.minute),
    r = new Set(e.hour),
    o = new Set(e.dayOfMonth),
    s = new Set(e.month),
    i = new Set(e.dayOfWeek),
    a = e.dayOfMonth.length === 31,
    l = e.dayOfWeek.length === 7,
    c = new Date(t.getTime());
  c.setSeconds(0, 0), c.setMinutes(c.getMinutes() + 1);
  let u = 527040;
  for (let d = 0; d < u; d++) {
    let p = c.getMonth() + 1;
    if (!s.has(p)) {
      c.setMonth(c.getMonth() + 1, 1), c.setHours(0, 0, 0, 0);
      continue;
    }
    let f = c.getDate(),
      m = c.getDay();
    if (!(a && l ? !0 : a ? i.has(m) : l ? o.has(f) : o.has(f) || i.has(m))) {
      c.setDate(c.getDate() + 1), c.setHours(0, 0, 0, 0);
      continue;
    }
    if (!r.has(c.getHours())) {
      c.setHours(c.getHours() + 1, 0, 0, 0);
      continue;
    }
    if (!n.has(c.getMinutes())) {
      c.setMinutes(c.getMinutes() + 1);
      continue;
    }
    return c;
  }
  return null;
}
function lop(e, t) {
  return new Date(2000, 0, 1, t, e).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
}
function cop(e, t) {
  let n = new Date();
  return n.setUTCHours(t, e, 0, 0), n.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
}
function r$(e, t) {
  let n = t?.utc ?? !1,
    r = e.trim().split(/\s+/);
  if (r.length !== 5) return e;
  let [o, s, i, a, l] = r;
  if (s === "*" && i === "*" && a === "*" && l === "*") {
    if (o === "*") return "Every minute";
    let f = o.match(/^\*\/(\d+)$/);
    if (f) {
      let m = parseInt(f[1], 10);
      return m === 1 ? "Every minute" : `Every ${m} minutes`;
    }
  }
  if (o.match(/^\d+$/) && s === "*" && i === "*" && a === "*" && l === "*") {
    let f = parseInt(o, 10);
    if (f === 0) return "Every hour";
    return `Every hour at :${f.toString().padStart(2, "0")}`;
  }
  let c = s.match(/^\*\/(\d+)$/);
  if (o.match(/^\d+$/) && c && i === "*" && a === "*" && l === "*") {
    let f = parseInt(c[1], 10),
      m = parseInt(o, 10),
      g = m === 0 ? "" : ` at :${m.toString().padStart(2, "0")}`;
    return f === 1 ? `Every hour${g}` : `Every ${f} hours${g}`;
  }
  if (!o.match(/^\d+$/) || !s.match(/^\d+$/)) return e;
  let u = parseInt(o, 10),
    d = parseInt(s, 10),
    p = n ? cop : lop;
  if (i === "*" && a === "*" && l === "*") return `Every day at ${p(u, d)}`;
  if (i === "*" && a === "*" && l.match(/^\d$/)) {
    let f = parseInt(l, 10) % 7,
      m;
    if (n) {
      let g = new Date(),
        h = (f - g.getUTCDay() + 7) % 7;
      g.setUTCDate(g.getUTCDate() + h), g.setUTCHours(d, u, 0, 0), m = jra[g.getDay()];
    } else m = jra[f];
    if (m) return `Every ${m} at ${p(u, d)}`;
  }
  if (i === "*" && a === "*" && l === "1-5") return `Weekdays at ${p(u, d)}`;
  return e;
}
function Hct(e) {
  let t = e.trim();
  if (t === "") return {
    error: "required"
  };
  let n = t.match(/^(\d+)\s*([smhd])$/i);
  if (n) {
    let r = parseInt(n[1], 10),
      o = n[2].toLowerCase();
    if (r < 1) return {
      error: "interval must be at least 1"
    };
    let s;
    switch (o) {
      case "s":
        return {
          error: "minimum interval is 1 minute"
        };
      case "m":
        if (r > 59) return {
          error: "minute interval must be 1\u201359 (use hours instead)"
        };
        s = r === 1 ? "* * * * *" : `*/${r} * * * *`;
        break;
      case "h":
        if (r > 23) return {
          error: "hour interval must be 1\u201323 (use days instead)"
        };
        s = r === 1 ? "0 * * * *" : `0 */${r} * * *`;
        break;
      case "d":
        if (r === 1) {
          s = "0 0 * * *";
          break;
        }
        if (r > 28) return {
          error: "day interval must be 1\u201328 (use a cron expression)"
        };
        s = `0 0 */${r} * *`;
        break;
      default:
        return {
          error: "unknown interval unit"
        };
    }
    return {
      cron: s,
      human: r$(s)
    };
  }
  if (F1(t) !== null) return {
    cron: t,
    human: r$(t)
  };
  return {
    error: "use an interval (5m, 2h, 1d) or 5-field cron (*/5 * * * *)"
  };
}
var iop, jra;