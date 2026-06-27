// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module g0
// matched 2.1.88 source: src/utils/format.ts
// class=modified  jaccard=0.609  score=0.8259  fileCov=0.6987
// note: deminified; 12 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: wrapText, truncateToWidthNoEllipsis, truncateToWidth, truncateStartToWidth, truncatePathMiddle, truncate, formatTokens, formatTokenEstimate, formatSecondsShort, formatResetTime, formatResetText, formatRelativeTimeAgo, formatRelativeTime, formatNumber, formatLogMetadata, formatFileSize, formatDuration, formatBarElapsed
function formatFileSize(e) {
  let t = e / 1024;
  if (t < 1) return `${e} bytes`;
  if (t < 1024) return `${t.toFixed(1).replace(/\.0$/, "")}KB`;
  let n = t / 1024;
  if (n < 1024) return `${n.toFixed(1).replace(/\.0$/, "")}MB`;
  return `${(n / 1024).toFixed(1).replace(/\.0$/, "")}GB`;
}
function formatSecondsShort(e) {
  return `${(e / 1000).toFixed(1)}s`;
}
function formatDuration(e, t) {
  if (e < 60000) {
    if (e === 0) return "0s";
    if (e < 1) return `${(e / 1000).toFixed(1)}s`;
    return `${Math.floor(e / 1000).toString()}s`;
  }
  let n = Math.floor(e / 86400000),
    r = Math.floor((e % 86400000) / 3600000),
    o = Math.floor((e % 3600000) / 60000),
    s = Math.round((e % 60000) / 1000);
  if (s === 60) ((s = 0), o++);
  if (o === 60) ((o = 0), r++);
  if (r === 24) ((r = 0), n++);
  let i = t?.hideTrailingZeros;
  if (t?.mostSignificantOnly) {
    if (n > 0) return `${n}d`;
    if (r > 0) return `${r}h`;
    if (o > 0) return `${o}m`;
    return `${s}s`;
  }
  if (n > 0) {
    if (i && r === 0 && o === 0) return `${n}d`;
    if (i && o === 0) return `${n}d ${r}h`;
    return `${n}d ${r}h ${o}m`;
  }
  if (r > 0) {
    if (i && o === 0 && s === 0) return `${r}h`;
    if (i && s === 0) return `${r}h ${o}m`;
    return `${r}h ${o}m ${s}s`;
  }
  if (o > 0) {
    if (i && s === 0) return `${o}m`;
    return `${o}m ${s}s`;
  }
  return `${s}s`;
}
function formatBarElapsed(e) {
  let t = Math.max(0, Math.floor(e / 1000));
  if (t < 60) return `${t}s`;
  let n = Math.floor(t / 60);
  if (n < 60) return `${n}m${String(t % 60).padStart(2, "0")}s`;
  let r = Math.floor(n / 60);
  if (r < 24) return `${r}h${String(n % 60).padStart(2, "0")}m`;
  return `${Math.floor(r / 24)}d${String(r % 24).padStart(2, "0")}h`;
}
function formatNumber(e) {
  let t = e >= 1000;
  return M7c(t).format(e).toLowerCase();
}
function formatTokens(e) {
  return formatNumber(e).replace(".0", "");
}
function formatTokenEstimate(e) {
  if (e < 20) return "< 20";
  return `~${formatTokens(Math.round(e / 10) * 10)}`;
}
function formatRelativeTime(date, t = {}) {
  let { style: n = "narrow", numeric: r = "always", now: o = new Date() } = t,
    s = date.getTime() - o.getTime(),
    i = Math.trunc(s / 1000),
    a = [
      {
        unit: "year",
        seconds: 31536000,
        shortUnit: "y",
      },
      {
        unit: "month",
        seconds: 2592000,
        shortUnit: "mo",
      },
      {
        unit: "week",
        seconds: 604800,
        shortUnit: "w",
      },
      {
        unit: "day",
        seconds: 86400,
        shortUnit: "d",
      },
      {
        unit: "hour",
        seconds: 3600,
        shortUnit: "h",
      },
      {
        unit: "minute",
        seconds: 60,
        shortUnit: "m",
      },
      {
        unit: "second",
        seconds: 1,
        shortUnit: "s",
      },
    ];
  for (let { unit: l, seconds: c, shortUnit: u } of a)
    if (Math.abs(i) >= c) {
      let d = Math.trunc(i / c);
      if (n === "narrow") return i < 0 ? `${Math.abs(d)}${u} ago` : `in ${d}${u}`;
      return aAr("long", r).format(d, l);
    }
  if (n === "narrow") return i <= 0 ? "0s ago" : "in 0s";
  return aAr(n, r).format(0, "second");
}
function formatRelativeTimeAgo(e, t = {}) {
  let { now: n = new Date(), ...r } = t;
  if (e > n)
    return formatRelativeTime(e, {
      ...r,
      now: n,
    });
  return formatRelativeTime(e, {
    ...r,
    numeric: "always",
    now: n,
  });
}
function formatLogMetadata(log) {
  let t = log.fileSize !== void 0 ? formatFileSize(log.fileSize) : `${log.messageCount} messages`,
    parts = [
      formatRelativeTimeAgo(log.modified, {
        style: "short",
      }),
      ...(log.sessionKind === "bg" ? ["bg"] : []),
      ...(log.gitBranch ? [log.gitBranch] : []),
      t,
    ];
  if (log.tag) parts.push(`#${log.tag}`);
  if (log.agentSetting) parts.push(`@${log.agentSetting}`);
  if (log.prNumber)
    parts.push(log.prRepository ? `${log.prRepository}#${log.prNumber}` : `#${log.prNumber}`);
  return parts.join(" \xB7 ");
}
function formatResetTime(timestampInSeconds, t = false, n = true, r = false) {
  if (!timestampInSeconds) return;
  let date = new Date(timestampInSeconds * 1000),
    s = new Date(),
    i = date.getMinutes(),
    a = (date.getTime() - s.getTime()) / 3600000;
  if (r || a > 24) {
    let c = {
      month: "short",
      day: "numeric",
      hour: n ? "numeric" : void 0,
      minute: !n || i === 0 ? void 0 : "2-digit",
      hour12: n ? true : void 0,
    };
    if (date.getFullYear() !== s.getFullYear()) c.year = "numeric";
    return (
      date.toLocaleString("en-US", c).replace(/ ([AP]M)/i, (d, p) => p.toLowerCase()) +
      (t ? ` (${KIt()})` : "")
    );
  }
  return (
    date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: i === 0 ? void 0 : "2-digit",
        hour12: true,
      })
      .replace(/ ([AP]M)/i, (c, u) => u.toLowerCase()) + (t ? ` (${KIt()})` : "")
  );
}
function formatResetText(e, t = false, n = true, r = false) {
  let o = new Date(e);
  return `${formatResetTime(Math.floor(o.getTime() / 1000), t, n, r)}`;
}
var cAr = null,
  uAr = null,
  M7c = (e) => {
    if (e) {
      if (!cAr)
        cAr = new Intl.NumberFormat("en-US", {
          notation: "compact",
          maximumFractionDigits: 1,
          minimumFractionDigits: 1,
        });
      return cAr;
    } else {
      if (!uAr)
        uAr = new Intl.NumberFormat("en-US", {
          notation: "compact",
          maximumFractionDigits: 1,
          minimumFractionDigits: 0,
        });
      return uAr;
    }
  };
