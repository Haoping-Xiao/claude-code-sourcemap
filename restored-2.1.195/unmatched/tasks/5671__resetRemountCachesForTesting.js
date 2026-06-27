// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Akc
// matched 2.1.88 source: src/components/Feedback.tsx
// class=new  jaccard=0.0035  score=0.0061  fileCov=0.0084
// note: nearest: src/components/Feedback.tsx (0.0035); dir inferred from dep-graph -> tasks; 44 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Akc]
_kc = require("fs/promises"), hTm = /"timestamp":"([^"]+)"/;
var i0c = {};
_t(i0c, {
  summarizeEvent: () => summarizeEvent,
  stateBucket: () => stateBucket,
  sortJobs: () => sortJobs,
  seedLastJobs: () => seedLastJobs,
  rollupJobColor: () => rollupJobColor,
  repoGroupLabel: () => repoGroupLabel,
  repoGroup: () => repoGroup,
  pruneMap: () => pruneMap,
  pickIcon: () => pickIcon,
  peerStatusFor: () => peerStatusFor,
  parseUrlRef: () => parseUrlRef,
  parseQuery: () => parseQuery,
  parsePrRef: () => parsePrRef,
  parseDispatch: () => parseDispatch,
  needsRespawn: () => needsRespawn,
  mountFleetView: () => mountFleetView,
  labelReplaceFrame: () => labelReplaceFrame,
  jobStatusKey: () => jobStatusKey,
  jobRowSrLabel: () => jobRowSrLabel,
  jobMatchesUrl: () => jobMatchesUrl,
  jobMatchesPr: () => jobMatchesPr,
  jobLabel: () => jobLabel,
  glyphColor: () => glyphColor,
  formatJobAge: () => formatJobAge,
  fleetVerticalBudget: () => fleetVerticalBudget,
  fleetTitle: () => fleetTitle,
  flattenDetail: () => flattenDetail,
  extractRepoCwd: () => extractRepoCwd,
  effectiveStateSortOrder: () => effectiveStateSortOrder,
  effectiveSortOrder: () => effectiveSortOrder,
  deriveBand: () => deriveBand,
  deriveActivity: () => deriveActivity,
  computeSuggestions: () => computeSuggestions,
  childStatusColor: () => childStatusColor,
  buildPrRefRe: () => buildPrRefRe,
  buildFleetRows: () => buildFleetRows,
  actionableStatus: () => actionableStatus,
  _resetRemountCachesForTesting: () => DTm,
  SessionPreview: () => SessionPreview,
  PEAK_CONCURRENT_GOAL: () => PEAK_CONCURRENT_GOAL,
  InlineEmphasis: () => InlineEmphasis,
  FleetView: () => FleetView,
  AUTO_RELAUNCH_UNFOCUSED_MS: () => AUTO_RELAUNCH_UNFOCUSED_MS,
  AUTO_RELAUNCH_MIN_INTERVAL_MS: () => AUTO_RELAUNCH_MIN_INTERVAL_MS,
  AUTO_RELAUNCH_ENV_KEY: () => AUTO_RELAUNCH_ENV_KEY
});
function pruneMap(e, t) {
  let n;
  for (let r of e.keys()) if (!t.has(r)) (n ??= new Map(e)).delete(r);
  return n ?? e;
}
function bTm(e) {
  let t = e.state,
    n = Vh(t) && !(tue(t.state) === "success" && KGe(t)) ? Date.parse(t.firstTerminalAt ?? t.updatedAt) : Date.now();
  return Yi(Math.max(0, n - Date.parse(t.createdAt)), {
    mostSignificantOnly: true
  });
}
function formatJobAge(e, t) {
  let n = Date.now();
  if (t != null && t > n) return `in ${Yi(t - n, {
    mostSignificantOnly: true
  })}`;
  return bTm(e);
}
function jobLabel(e, t = false) {
  if (e.name) return e.name.replace(IKo, "").replace(/\s+/g, " ").trim();
  let n = 25,
    r = xc(e.displayIntent ?? e.intent).replace(IKo, "").replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  if (r.length === 0) {
    if (t) return "current session";
    if ((e.template === "bg" || e.template === Bse.name) && e.state === "working") return "new session";
    return e.template.replace(IKo, "").replace(/\s+/g, " ").trim();
  }
  let o = r.length > 3 ? `${r.slice(0, 3).join(" ")}\u2026` : r.join(" ");
  if (rn(o) <= n) return o;
  let s = "",
    i = 0;
  for (let a of zin(o)) {
    let l = rn(a);
    if (i + l > n - 1) break;
    s += a, i += l;
  }
  return `${s}\u2026`;
}
function STm(e, t) {
  let n = D7e.c(12),
    r = ks(),
    o;
  if (n[0] !== e || n[1] !== t) o = {
    label: e,
    hasName: t,
    fired: false
  }, n[0] = e, n[1] = t, n[2] = o;else o = n[2];
  let s = jr.useRef(o),
    [i, a] = jr.useState(null),
    l,
    c;
  if (n[3] !== r || n[4] !== e || n[5] !== t) l = () => {
    if (s.current.fired || s.current.hasName || !t) {
      s.current = {
        label: e,
        hasName: t,
        fired: s.current.fired
      };
      return;
    }
    let d = s.current.label;
    s.current = {
      label: e,
      hasName: true,
      fired: true
    };
    let p = Math.max(TUe(d), TUe(e));
    if (p === 0) return;
    a({
      old: d,
      n: 1
    });
    let f = 1,
      m = Math.max(16, Math.floor(360 / p)),
      g = null,
      h = () => {
        if (f = f + 1, f >= p) a(null), g = null;else a({
          old: d,
          n: f
        }), g = r.setTimeout(h, m);
      };
    return g = r.setTimeout(h, m), () => {
      g?.(), a(null);
    };
  }, c = [r, e, t], n[3] = r, n[4] = e, n[5] = t, n[6] = l, n[7] = c;else l = n[6], c = n[7];
  if (jr.useLayoutEffect(l, c), !i) return null;
  let u;
  if (n[8] !== i.n || n[9] !== i.old || n[10] !== e) u = labelReplaceFrame(i.old, e, i.n), n[8] = i.n, n[9] = i.old, n[10] = e, n[11] = u;else u = n[11];
  return u;
}
function labelReplaceFrame(e, t, n) {
  let r = zin(e),
    o = zin(t),
    s = o.slice(0, Math.min(n, o.length)).join(""),
    i = Math.max(rn(e), rn(t)),
    a = rn(s),
    l = "";
  for (let c of r.slice(n)) {
    let u = rn(c);
    if (a + u > i) break;
    l += c, a += u;
  }
  return {
    display: s + l + Ff(" ", i - a),
    newLen: s.length
  };
}
function ETm(e) {
  let t = e.children;
  if (!t?.length) return 0;
  let n = t.filter(r => r.kind !== "frame");
  if (n.length > 1) return rn(`${n.length} PRs`);
  if (n.length === 1) {
    let r = zkc(n[0]);
    return rn(r !== void 0 ? `#${r}` : "PR");
  }
  return rn(t.length > 1 ? `${t.length} ${hCe}` : hCe);
}
function ATm(e, t, n, r) {
  let o = Math.max(yTm, ...e.map(a => rn(formatJobAge(a, t(a))))),
    s = Math.min(Math.max(40, Math.floor(r / 3)), Math.max(12, ...e.map(a => rn(jobLabel(a.state, a.id === n))))),
    i = Math.max(0, ...e.map(a => ETm(a.state)));
  return {
    age: o,
    label: s,
    artifact: i
  };
}
function deriveActivity(e, t) {
  let n = tue(e.state);
  if (n && e.tempo !== "active" && !(n === "success" && KGe(e))) return n;
  let r = e.children?.filter(i => i.kind !== "frame");
  if (t && e.tempo !== "active" && e.template === Bse.name && r?.length && r.every(i => t.get(i.href)?.state === "MERGED")) return "success";
  let o = e.tempo === "active" ? 1 : 5,
    s = Date.now() - Date.parse(e.updatedAt);
  if (s < o * 3 * 60000) return "flowing";
  if (s < o * 15 * 60000) return "slowing";
  return "stuck";
}
function buildFleetRows(e, t, n) {
  let {
      byState: r,
      onRemoteTab: o,
      launcherGroup: s,
      scopedFallbackOrigin: i,
      doneFoldAt: a,
      emptyBucketHint: l
    } = n,
    c = [];
  if (r && l) {
    for (let p of LKo) {
      let f = e.filter(m => t.get(m.id) === p);
      if (p === "review" && f.length === 0) continue;
      c.push({
        kind: "header",
        origin: i,
        group: p
      });
      for (let m of f) c.push({
        kind: "job",
        job: m,
        origin: ybe(m.state),
        group: p
      });
    }
    return {
      rows: c,
      doneCount: 0,
      doneFoldHidden: 0
    };
  }
  let u = !r && !o && !e.some(p => t.get(p.id) === s),
    d = 0;
  for (let p = 0; p < e.length; p++) {
    let f = e[p],
      m = t.get(f.id),
      g = ybe(f.state);
    if (p === 0 || m !== t.get(e[p - 1].id)) {
      if (u && m !== "pinned") c.push({
        kind: "header",
        origin: i,
        group: s
      }), u = false;
      let h = r || m === "pinned" || m === s ? i : g;
      c.push({
        kind: "header",
        origin: h,
        group: m
      });
    }
    if (m === "done" && d++ >= a) continue;
    c.push({
      kind: "job",
      job: f,
      origin: g,
      group: m
    });
  }
  if (u && e.length > 0) c.push({
    kind: "header",
    origin: i,
    group: s
  });
  return {
    rows: c,
    doneCount: d,
    doneFoldHidden: d > a ? d - a : 0
  };
}
function deriveBand(e, t) {
  if (t === "busy") return "active";
  if (Vh(e) && !(tue(e.state) === "success" && KGe(e))) return "completed";
  if (e.tempo === "blocked" || t === "waiting") return "blocked";
  return "active";
}
function fleetTitle(e) {
  return e > 0 ? `${e} awaiting input \xB7 claude agents` : "claude agents";
}
function fleetVerticalBudget(e, t) {
  let n = o => e - vTm - o - t,
    r = n(wTm);
  if (r >= Fkc) return {
    doneCap: r,
    compactHeader: false
  };
  return {
    doneCap: Math.max(0, n(CTm)),
    compactHeader: true
  };
}
function stateBucket(e, t, n) {
  if (n === "busy") return "working";
  if (e.activity === "failure") return "done";
  if (e.activity === "stopped") return "done";
  if (n === "waiting") return "blocked";
  if (!KGe(e.state) && e.state.children?.some(o => {
    let s = t?.get(o.href);
    if (s?.state !== "OPEN") return false;
    let i = Rjn(s);
    return i === "error" || i === "warning" && s.review !== "APPROVED";
  })) return "review";
  if (e.activity === "success") return "done";
  if (e.state.tempo === "blocked") return "blocked";
  return "working";
}
function needsRespawn(e) {
  let t = tue(e.state);
  return (t === "failure" || t === "stopped") && Vh(e) && !V0e(e);
}
function parseQuery(e) {
  let t,
    n,
    r,
    o,
    s,
    i = [];
  for (let a of e.trim().split(/\s+/)) {
    let l = a.toLowerCase();
    if (l.startsWith("a:")) t = l.slice(2) || void 0;else if (l.startsWith("s:")) n = l.slice(2) || void 0;else if (l.startsWith("o:")) r = l.slice(2);else if (parsePrRef(a)) o = parsePrRef(a);else if (parseUrlRef(a)) s = parseUrlRef(a);else i.push(a);
  }
  return {
    template: t,
    state: n,
    output: r,
    pr: o,
    url: s,
    text: i.join(" ").toLowerCase()
  };
}
function parsePrRef(e) {
  let t = e.trim();
  if (/\s/.test(t)) return null;
  return (/^#(\d+)$/.exec(t) ?? /\/pull\/(\d+)(?!\d)/.exec(t))?.[1] ?? null;
}
function buildPrRefRe(e) {
  return new RegExp(`/pull/${e}(?!\\d)`);
}
function jobMatchesPr(e, t, n = buildPrRefRe(t)) {
  return !!e.children?.some(r => r.id === t || n.test(r.href)) || Object.values(e.output ?? {}).some(r => n.test(r));
}
function parseUrlRef(e) {
  let t = e.trim();
  return !/\s/.test(t) && /^https?:\/\//i.test(t) ? t : null;
}
function jobMatchesUrl(e, t) {
  return e.intent.includes(t) || !!e.initialPrompt?.includes(t);
}
function parseDispatch(e, t, n = {}, r = []) {
  let o = e.trim();
  if (RQt() && o.startsWith("!")) {
    let m = o.slice(1).trim();
    return {
      template: Bse,
      intent: "",
      matched: !!m,
      exec: m
    };
  }
  let s = o.toLowerCase();
  if (s.startsWith("a:") || s.startsWith("s:") || s.startsWith("o:")) return null;
  let i,
    a,
    l,
    c = Object.keys(n),
    u = o.replace(/(?:^|\s)@(\S+)/g, (m, g) => {
      let h = g.toLowerCase(),
        y = t.find(S => S.name.toLowerCase() === h);
      if (y) return i ??= y, "";
      let b = r.find(S => S.name.toLowerCase() === h);
      if (b) return l ??= b.name, "";
      let _ = c.find(S => S.toLowerCase() === h);
      if (_) return a ??= n[_], "";
      return m;
    }).trim(),
    d = u.search(/\s/),
    p = (d < 0 ? u : u.slice(0, d)).toLowerCase(),
    f = i ? void 0 : t.find(m => m.name.toLowerCase() === p);
  if (f) return {
    template: f,
    intent: d < 0 ? "" : u.slice(d + 1).trim(),
    matched: true,
    cwd: a,
    routine: l
  };
  if (i) return {
    template: i,
    intent: u,
    matched: true,
    cwd: a,
    routine: l
  };
  return {
    template: Bse,
    intent: u,
    matched: false,
    cwd: a,
    routine: l
  };
}
function $Ko(e, t, n) {
  G("tengu_bg_agent_action", {
    action: $e(e),
    source: We("fleet"),
    jobSessionId: Hr(t.sessionId),
    agent: t.template,
    jobState: t.state,
    tempo: $e(t.tempo),
    ...n,
    ...false
  });
}
function RTm(e, t, n) {
  return [{
    key: "x",
    label: "stop",
    bands: ["active", "blocked"],
    run: async r => {
      t(r.id);
      let o = new Date().toISOString(),
        s = n(i => i.map(a => a.id === r.id && !Vh(a.state) ? {
          ...a,
          state: {
            ...a.state,
            state: "stopped",
            detail: "stopped",
            tempo: "idle",
            updatedAt: o,
            firstTerminalAt: a.state.firstTerminalAt ?? o
          },
          activity: "stopped"
        } : a), void 0, r.id);
      try {
        let i = await yTe(r.id, r.state);
        if (!i.confirmed) throw Le("fleet_view_stop_job", "kill_unconfirmed"), new Kpr(i.error ?? "worker may still be running");
        G("tengu_bg_agent_action", {
          action: We("stop"),
          source: We("fleet"),
          jobSessionId: Hr(r.state.sessionId)
        }), xe("fleet_view_stop_job");
        let a = _c(r.id),
          l = await zi(a);
        if (l && !Vh(l)) await Kd(a, {
          ...l,
          state: "stopped",
          detail: "stopped",
          tempo: "idle",
          updatedAt: o,
          firstTerminalAt: l.firstTerminalAt ?? o
        });
      } finally {
        s?.(), e();
      }
    }
  }, {
    key: "x",
    label: "delete",
    bands: ["completed"],
    run: async r => {
      let o = n(l => l.filter(c => c.id !== r.id), r.id),
        s = false,
        i,
        a;
      try {
        let l = await Sme(r.id, {
          force: true
        });
        if (s = l.removed, i = l.keptWorktree, a = l.keptReason, !s) throw Le("fleet_view_delete_job", "delete_unconfirmed"), new Kpr(l.error ?? "worker may still be running");
      } finally {
        o?.(), e();
      }
      if (s) xe("fleet_view_delete_job"), G("tengu_bg_agent_action", {
        action: We("delete"),
        source: We("fleet"),
        jobSessionId: Hr(r.state.sessionId)
      });
      if (i) return `Worktree ${a === "branch_mismatch" ? "is on a different branch" : "could not be removed"} \u2014 kept at ${i}`;
    }
  }];
}
function Stn(...e) {
  return PHt(...e).catch(t => ({
    ok: false,
    error: `Couldn't respawn \u2014 ${be(t)}`,
    alive: false
  }));
}
function seedLastJobs(e) {
  Etn = sortJobs(e.map(t => ({
    ...t,
    activity: deriveActivity(t.state)
  })));
}
function jobStatusKey(e) {
  return `job:${e}`;
}
function peerStatusFor(e, t) {
  return e.get(t.state.resumeSessionId ?? t.state.sessionId) ?? e.get(jobStatusKey(t.id));
}
function DTm() {
  FKo = [], qpr.clear(), jKo.clear(), GKo.clear(), qkc.clear(), UKo = "local";
}
function XKo() {
  return ube();
}
function PTm() {
  let e = XKo();
  return [...e, ...[...e].reverse()];
}
function MTm() {
  return XKo()[4];
}
function $Tm() {
  return XKo()[1];
}
function glyphColor(e, t, n) {
  if ((t === "success" || t === "failure" || t === "stopped") && tue(e.state)) return {
    color: OTm(t),
    dim: false
  };
  if (n === "busy" || n === "shell") return {
    color: void 0,
    dim: false
  };
  if (e.tempo === "blocked" || n === "waiting") return {
    color: "warning",
    dim: false
  };
  return {
    color: void 0,
    dim: true
  };
}
function OTm(e) {
  switch (e) {
    case "success":
      return "success";
    case "failure":
      return "error";
    case "stopped":
      return "inactive";
  }
}
function rollupJobColor(e, t) {
  let n = e,
    r = e ? vkc[e] ?? 0 : 0;
  for (let o of t) {
    if (o.color === void 0 || Htn(o)) continue;
    let s = vkc[o.color] ?? 0;
    if (s > r) n = o.color, r = s;
  }
  return n;
}
function Htn(e) {
  return e.row.kind === "frame";
}
function zkc(e) {
  let t = parsePrRef(e.href);
  if (t !== null) return Number(t);
  return /^\d+$/.test(e.id) ? Number(e.id) : void 0;
}
function childStatusColor(e) {
  let t = Rjn(e);
  return t === "error" ? "warning" : t;
}
function BTm(e) {
  return [...e].sort((t, n) => n.sortRank - t.sortRank);
}
function actionableStatus(e) {
  if (e.state === "MERGED") return [{
    text: "merged",
    color: "merged"
  }];
  if (e.state === "CLOSED") return [{
    text: "closed",
    color: "inactive"
  }];
  let t = [],
    {
      failed: n,
      pending: r,
      passed: o
    } = e.checks,
    s = n + r + o;
  if (n > 0) t.push({
    text: `${nt.cross} ${n}/${s}`,
    color: "error"
  });else if (r > 0) t.push({
    text: `${o}/${s}`,
    color: "warning"
  });else if (s > 0) t.push({
    text: nt.tick,
    color: "success"
  });
  switch (e.review) {
    case "APPROVED":
      t.push({
        text: "approved",
        color: "success"
      });
      break;
    case "CHANGES_REQUESTED":
      t.push({
        text: nt.cross,
        color: "error"
      });
      break;
    case "REVIEW_REQUIRED":
      t.push({
        text: "needs review",
        color: void 0
      });
      break;
    case null:
      break;
  }
  if (t.length === 0 && e.state !== "DRAFT") t.push({
    text: e.state.toLowerCase(),
    color: childStatusColor(e)
  });
  return t;
}
function Ikc(e, t) {
  return BTm(e.map(n => {
    if (n.kind === "frame") return {
      row: n,
      prNumber: void 0,
      label: n.id,
      status: [],
      diffStat: void 0,
      isDraft: false,
      color: "claude",
      sortRank: 0
    };
    let r = t.get(n.href),
      o = r ? Rjn(r) : void 0;
    return {
      row: n,
      prNumber: r?.number ?? zkc(n),
      label: r?.title ?? "",
      status: r ? actionableStatus(r) : [],
      diffStat: r && r.state !== "MERGED" && r.state !== "CLOSED" ? {
        additions: r.additions,
        deletions: r.deletions
      } : void 0,
      isDraft: r?.state === "DRAFT",
      color: r ? childStatusColor(r) : void 0,
      sortRank: r?.state === "OPEN" && o ? NTm[o] ?? 0 : 0
    };
  }));
}
function repoGroup(e) {
  if (e.backend === "remote") return ybe(e);
  let t = ybe(e);
  return qf(t) ?? t;
}
function repoGroupLabel(e) {
  return fM(e);
}
function effectiveSortOrder(e) {
  return e.sortOrder ?? Date.parse(e.createdAt);
}
function effectiveStateSortOrder(e, t) {
  return e.stateSortOrder ?? Date.parse(t === "done" ? e.firstTerminalAt ?? e.updatedAt : e.updatedAt);
}
function sortJobs(e) {
  return [...e].sort((t, n) => effectiveSortOrder(t.state) - effectiveSortOrder(n.state));
}
function summarizeEvent(e) {
  try {
    let t = Ft(e);
    if (t.type === "assistant") {
      let n = t.message?.content ?? [],
        r = n.find(s => s.type === "text")?.text;
      if (r) return r;
      let o = n.find(s => s.type === "tool_use" && s.name !== _h);
      if (o) {
        let s = o.input?.description;
        if (o.name === "REPL" && typeof s === "string" && s) return `REPL ${s}`;
        return ujo(o.name, o.input, Number.POSITIVE_INFINITY);
      }
    }
    if (t.type === "user") {
      let n = t.message?.content,
        r = typeof n === "string" ? n : n?.find(s => s.type === "text")?.text,
        o = r ? Qkc(r).split(`
`).find(s => s.trim())?.trim() : void 0;
      if (o) return `> ${o}`;
      if (Array.isArray(n)) {
        let s = n.find(i => i.type === "tool_result" && i.is_error);
        if (s) {
          let i = typeof s.content === "string" ? s.content : s.content?.find(a => a.type === "text")?.text;
          if (i) return `\u2717 ${Gd(i)}`;
        }
      }
    }
  } catch {}
  return null;
}
function Qkc(e) {
  return e.replace(/<(system-reminder|task-notification)>[\s\S]*?(<\/\1>|$)/g, " ");
}
function flattenDetail(e) {
  return Qkc(Ja(e)).replace(/<\/?[\w-]+>/g, " ").replace(/\s+/g, " ").trim();
}
function InlineEmphasis(e) {
  let t = D7e.c(8),
    {
      value: n
    } = e,
    r,
    o,
    s;
  if (t[0] !== n) {
    let a = n.split(/(\*\*.+?\*\*|\+\+.+?\+\+|`[^`]+`|https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+)/g);
    r = w, o = true, s = a.map(FTm), t[0] = n, t[1] = r, t[2] = o, t[3] = s;
  } else r = t[1], o = t[2], s = t[3];
  let i;
  if (t[4] !== r || t[5] !== o || t[6] !== s) i = ur.jsx(r, {
    dimColor: o,
    children: s
  }), t[4] = r, t[5] = o, t[6] = s, t[7] = i;else i = t[7];
  return i;
}
function FTm(e, t) {
  let n = e.match(/^(?:\*\*|\+\+|`)(.+?)(?:\*\*|\+\+|`)$/);
  if (n) return ur.jsx(w, {
    bold: true,
    children: n[1]
  }, t);
  if (UTm.test(e)) {
    let r = rCo(e);
    return ur.jsxs(zKo.Fragment, {
      children: [ur.jsx(xs, {
        url: r,
        children: r
      }), e.slice(r.length)]
    }, t);
  }
  return e;
}
function VKo(e) {
  return Gme.join(aj(e.cwd), `${e.sessionId}.jsonl`);
}
function jobRowSrLabel(e, t, n, r, o) {
  let s = o ? "selected, " : "";
  if ((e === "success" || e === "failure" || e === "stopped") && r) return `${s}${e === "success" ? "done" : e === "failure" ? "failed" : "stopped"}:`;
  if (n === "busy" || n === "shell") return `${s}working:`;
  if (n === "waiting") return `${s}waiting:`;
  return `${s}${t === "blocked" ? "blocked" : "idle"}:`;
}
function pickIcon(e, t, n) {
  if (t && e.tempo !== "active" && n === void 0) return ZFe;
  if (n === "busy" || n === "shell") return null;
  if (YUt(e)) return $Tm();
  return MTm();
}
function jTm() {
  let e = D7e.c(1),
    [, t] = Kf(120),
    n;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) n = PTm(), e[0] = n;else n = e[0];
  let r = n;
  return r[Math.floor(t / 120) % r.length];
}
async function GTm(e, t = 1) {
  try {
    let {
        content: n
      } = await vx(VKo(e.state), 16384),
      r = n.split(`
`).map(summarizeEvent).filter(s => s !== null);
    return r.filter((s, i) => s !== r[i - 1]).slice(-t).join(`
`).trim();
  } catch {
    return "";
  }
}
function WTm(e) {
  let t = e.trim();
  if (/\s/.test(t)) return null;
  if (/^https?:\/\//.test(t)) return t;
  let n = LR(t);
  return Gme.isAbsolute(n) ? Mkc.pathToFileURL(n).href : null;
}
function qTm(e) {
  let t = [];
  for (let n of e.matchAll(/(?:^|\s)[aso]:/gi)) {
    let r = n.index + n[0].length;
    t.push([r - 2, r]);
  }
  return t;
}
function VTm(e, t) {
  let n = [];
  for (let r of e.matchAll(/(?:^|\s)@(\S+)/g)) {
    if (!t.has(r[1].toLowerCase())) continue;
    let o = r.index + r[0].length;
    n.push([o - r[1].length - 1, o]);
  }
  return n;
}
function zTm(e, t, n) {
  return e.replace(/[@/]\S*$/, () => `${t}${n} `);
}
function extractRepoCwd(e, t, n = []) {
  let r = new Set(n.map(s => s.name.toLowerCase())),
    o = Object.keys(t);
  for (let s of e.matchAll(/(?:^|\s)@(\S+)/g)) {
    let i = s[1].toLowerCase();
    if (r.has(i)) continue;
    let a = o.find(l => l.toLowerCase() === i);
    if (a) return t[a];
  }
  return;
}
function XTm() {
  return [...aLe().filter(e => e.value).map(e => ({
    kind: "model",
    name: String(e.value),
    description: Gd(e.description)
  })), {
    kind: "model",
    name: "default",
    description: "Reset to configured default"
  }];
}
function xKo(e) {
  return {
    kind: "agent",
    name: e.name,
    description: Gd(e.description)
  };
}
function JTm(e, t) {
  if (e === t || t.length === 0) return e;
  let n = new Set(e.map(r => r.name.toLowerCase()));
  return [...e, ...t.filter(r => !n.has(r.name.toLowerCase()))];
}
function Lkc(e) {
  let t = Dt().agentLastUsed ?? {};
  return e.slice().sort((n, r) => {
    let o = t[n.name] ?? 0,
      s = t[r.name] ?? 0;
    if (o !== s) return s - o;
    return n.name.localeCompare(r.name);
  });
}
function computeSuggestions(e, t, n, r, o, s, i, a) {
  let l = bi(e, " ").toLowerCase(),
    c = l.startsWith("/"),
    u = e.match(/(?:^|\s)@(\S*)$/),
    d = u?.[1]?.toLowerCase(),
    p = u && extractRepoCwd(e.slice(0, -u[0].length), r, t) !== void 0,
    f = new Set(t.map(x => x.name.toLowerCase())),
    m = Object.keys(r).filter(x => !f.has(x.toLowerCase()) && !/\s/.test(x)),
    g = d === void 0 ? [] : [...Lkc(t).filter(x => x.name.toLowerCase().startsWith(d)).map(xKo), ...n.filter(x => x.name.toLowerCase().startsWith(d)).sort((x, I) => x.name.localeCompare(I.name)), ...(p ? [] : m.filter(x => x.toLowerCase().startsWith(d)).sort((x, I) => x.localeCompare(I)).map(x => ({
      kind: "repo",
      name: x,
      description: r[x]
    })))],
    h = e.match(/(?:^|\s)\/(\S*)$/),
    y = h?.[1]?.toLowerCase(),
    b = y === void 0 ? [] : [...(c ? [YTm] : []), ...o].filter(x => x.name.toLowerCase().includes(y)).sort((x, I) => {
      let k = x.name.toLowerCase().startsWith(y),
        D = I.name.toLowerCase().startsWith(y);
      return k !== D ? k ? -1 : 1 : x.name.localeCompare(I.name);
    }),
    _ = e.match(/^\s*\/model\s+(\S*)$/i),
    S = _?.[1]?.toLowerCase(),
    A = S === void 0 ? [] : s.filter(x => x.name.toLowerCase().startsWith(S)),
    v = c ? [] : [...t.filter(x => x.name.toLowerCase().startsWith(l)).sort((x, I) => x.name.localeCompare(I.name)).map(xKo), ...n.filter(x => x.name.toLowerCase().startsWith(l)).sort((x, I) => x.name.localeCompare(I.name)), ...m.filter(x => x.toLowerCase().startsWith(l)).sort((x, I) => x.localeCompare(I)).map(x => ({
      kind: "repo",
      name: x,
      description: r[x]
    })), ...o.filter(x => x.name.toLowerCase().startsWith(l)).sort((x, I) => x.name.localeCompare(I.name))],
    C = !i || i.exec !== void 0 ? [] : _ ? A : u ? g : h ? b : a && !e ? Lkc(t).map(xKo) : !i.matched && l && !e.includes(" ") ? v : [];
  return {
    firstWord: l,
    isSlashQuery: c,
    atMatch: u !== null,
    slashMatch: h !== null,
    modelArgMatch: _ !== null,
    templateNames: f,
    repoNames: m,
    suggestions: C
  };
}
function n0c(e) {
  if (e.key !== "v") return false;
  let t = Vt();
  if (e.ctrl && !e.meta) return t !== "windows";
  if (e.meta && !e.ctrl) return t === "windows" || t === "wsl";
  return false;
}
function r0c(e, t) {
  k0e(Gh(As())).then(n => {
    if (n) e(n);else Le("input_image_paste", "not_found"), t("No image found in clipboard");
  }).catch(n => {
    Le("input_image_paste", "clipboard_read_failed"), ke(n), t("Couldn't read an image from the clipboard");
  });
}
function SessionPreview({
  job: e,
  status: t,
  isPending: n,
  deleteArmed: r,
  onBack: o,
  onAttach: s,
  onReply: i,
  isTerminalFocused: a,
  childRows: l,
  replyDrafts: c,
  replyError: u,
  onReplyError: d,
  renaming: p,
  pastedContents: f,
  nextPasteId: m
}) {
  jr.useEffect(() => $Ko("peek", e.state), []);
  let g = Date.parse(e.state.updatedAt),
    [h, y] = jr.useState(() => Date.now()),
    b = e.state.fan?.some(gt => gt.startedAt && gt.doneAt === void 0) ?? false;
  Gc(() => y(Date.now()), h - g < 60000 || b ? 1000 : 30000);
  let _ = Yi(Math.max(0, h - g), {
      mostSignificantOnly: true
    }),
    S = jr.useRef(false),
    A = jr.useRef(null);
  M0(A, true);
  let v = c.get(e.id) ?? "",
    [C, x] = jr.useState(ek(v) === "bash" ? "bash" : "prompt"),
    I = jr.useRef(C),
    k = gt => {
      I.current = gt, x(gt);
    },
    D = C === "bash",
    P = e.state.tempo === "blocked" && !e.state.block?.questions ? e.state.suggestedReply : void 0,
    O = $me(),
    L = Ht(gt => gt.settings.voice?.mode ?? "hold"),
    M = ks(),
    N = jr.useRef(null),
    B = jr.useRef("idle"),
    $ = jr.useRef(false);
  jr.useEffect(() => () => {
    N.current?.(), N.current = null;
  }, []);
  let {
    query: q,
    queryRef: W,
    setQuery: V,
    cursorOffset: Y,
    setCursorOffset: z,
    handleKeyDown: K,
    handlePaste: Z
  } = Uk({
    isActive: true,
    multiline: true,
    honorEditorMode: true,
    backspaceExitsOnEmpty: false,
    initialQuery: BU(v),
    onExit: () => {
      if (S.current) return;
      let gt = W.current.trim();
      if (!gt && I.current === "prompt") {
        S.current = true, s();
        return;
      }
      if (!gt) return;
      let st = EUt(gt, I.current),
        xt = I.current;
      S.current = true, V(""), k("prompt"), d(null), c.delete(e.id);
      let vt = () => {
        if (W.current === "") c.set(e.id, st), V(gt);
        if (I.current === "prompt") k(xt);
      };
      if (e.state.backend === "remote" && jM(st).some(jt => f.current[jt.id]?.type === "image")) {
        S.current = false, vt(), d("Image attachments aren't available when replying to cloud sessions yet \u2014 open the session to send images");
        return;
      }
      cWo(st, f.current, e.id).catch(jt => (ke(jt), st)).then(jt => i(jt)).then(jt => {
        if (jt) vt(), d(jt);
      }, jt => {
        vt(), d(be(jt));
      }).finally(() => {
        S.current = false;
      });
    },
    onCancel: o,
    onSpaceOnEmpty: D ? void 0 : O && L !== "tap" ? () => {
      N.current?.(), N.current = M.setTimeout(() => {
        if (N.current = null, B.current !== "idle" || $.current) return;
        if (W.current.trim() !== "") return;
        o();
      }, Kkc);
    } : o,
    onTabOnEmpty: P && !D ? () => {
      V(P), G("tengu_prompt_suggestion", {
        outcome: We("accepted"),
        source: We("fleetview_peek")
      });
    } : void 0
  });
  jr.useEffect(() => {
    let gt = EUt(q, C);
    if (gt) c.set(e.id, gt);else c.delete(e.id);
  }, [q, C, e.id, c]);
  let J = dKo(f, m, Z),
    {
      handleKeyDown: ne,
      handlePaste: oe
    } = kUt({
      handleKeyDown: K,
      onPaste: gt => Z(new J_e(gt.replace(/\r\n|\r/g, `
`))),
      onImagePaste: J
    }),
    re = jr.useRef(null);
  re.current = {
    cursorOffset: Y,
    setInputWithCursor: (gt, st) => {
      V(gt), z(st);
    },
    insert: () => {},
    submit: () => {}
  };
  let ee = Ppr({
      setInputValueRaw: V,
      inputValueRef: W,
      insertTextRef: re,
      enableDoubleTapSubmit: false
    }),
    ce = P0(gt => gt.voiceState),
    ae = P0(gt => gt.voiceWarmingUp);
  B.current = ce, $.current = ae, jr.useEffect(() => {
    if (ce !== "idle" && N.current) N.current(), N.current = null;
  }, [ce]);
  let de = Ht(gt => Mv(gt.settings.prefersReducedMotion)),
    Ee = ce === "recording" && !de,
    {
      handleKeyDown: me
    } = Mpr({
      voiceHandleKeyEvent: ee.handleKeyEvent,
      voiceCancelRecording: ee.cancelRecording,
      stripTrailing: ee.stripTrailing,
      resetAnchor: ee.resetAnchor,
      isActive: (L !== "tap" || q.trim().length > 0) && !D && !p,
      inputValueRef: W
    }),
    pe = l.map(gt => gt.row.href),
    ge = gt => pe.some(st => {
      let xt = gt.indexOf(st);
      return xt >= 0 && !/\w/.test(gt[xt + st.length] ?? "") && gt.length - st.length < 16;
    }),
    he = e.state.needs ? [] : Object.entries(e.state.output ?? {}).filter(([, gt]) => !ge(gt)),
    ie = e.state.tempo === "blocked" ? e.state.block?.questions : void 0,
    le = ie ? 2 + (ie[0]?.options.length ?? 0) + 1 : 0,
    {
      rows: He,
      columns: ye
    } = br(),
    ue = 8,
    we = q ? hu(q, `
`) : 0,
    Ce = Math.ceil(Math.max(1, rn(flattenDetail(e.state.needs ?? "")), rn(flattenDetail(e.state.detail)), ...he.map(([, gt]) => rn(flattenDetail(gt)))) / Math.max(40, ye - 6)),
    Ie = ZNt() ? Math.min(Ce, Math.max(Ckc, He - ue - Math.min(l.length, wkc) - le - we - (u ? 1 : 0) - 1)) : Ckc,
    Ve = (e.state.fan ?? []).filter(gt => gt.startedAt && gt.doneAt === void 0 && !gt.failed),
    Ze = "";
  if (Ve.length > 0) {
    let gt = Ve.reduce((Dn, nn) => (Dn.startedAt ?? 0) <= (nn.startedAt ?? 0) ? Dn : nn),
      st = gt.group ? `${flattenDetail(gt.group)} \u203A ${flattenDetail(gt.label)}` : flattenDetail(gt.label),
      xt = Yi(Math.max(0, h - (gt.startedAt ?? h))),
      vt = Ve.length - 1,
      jt = [`  ${xt}`];
    if (vt > 0) jt.push(` \xB7 and ${vt} more`);
    if (e.state.budget) jt.push(` \xB7 ${gl(e.state.budget.spent)}/${gl(e.state.budget.target)} tokens`);
    let en = jt.join("");
    Ze = `${$a(st, Math.max(16, ye - 8 - rn(en)))}${en}`;
  } else if (e.state.budget) Ze = `${gl(e.state.budget.spent)}/${gl(e.state.budget.target)} tokens`;
  let Be = Ze ? 2 : 0,
    Me = he.length * Ie + (ie ? le : e.state.needs ? Ie : 0) + Be + we + (u ? 1 : 0) + 1,
    Ue = Math.max(wkc, He - ue - Me),
    tt = l.slice(0, Ue),
    bt = l.length - tt.length,
    Ke = Math.max(0, ...he.map(([gt]) => rn(gt))),
    Et = l.length > 0 || he.length > 0 || !!e.state.needs,
    ct = 5,
    {
      color: Je
    } = glyphColor(e.state, e.activity, t);
  return ur.jsxs(ur.Fragment, {
    children: [ur.jsxs(U, {
      ref: A,
      flexDirection: "column",
      borderStyle: "round",
      borderColor: D ? "bashBorder" : void 0,
      borderDimColor: !D,
      paddingX: 1,
      minHeight: ct,
      width: "100%",
      tabIndex: 0,
      autoFocus: true,
      onKeyDownCapture: me,
      onKeyDown: gt => {
        if (gt.key !== " " && N.current) N.current(), N.current = null;
        if (p) return;
        if (n0c(gt)) {
          gt.preventDefault(), gt.stopImmediatePropagation(), r0c(st => J(st.base64, st.mediaType, void 0, st.dimensions), d);
          return;
        }
        if (I.current === "prompt") {
          if (gt.key === "right" && !gt.shift && !W.current) {
            if (gt.preventDefault(), S.current) return;
            S.current = true, s();
            return;
          }
          if (AUt(gt.key) && !W.current) {
            gt.preventDefault(), k("bash");
            return;
          }
          if (!W.current) {
            let st = pkc(gt.key, ie);
            if (st) {
              gt.preventDefault(), V(st), z(st.length);
              return;
            }
          }
        } else if (gt.name === "backspace" && !W.current) {
          gt.preventDefault(), k("prompt");
          return;
        }
        ne(gt);
      },
      onPaste: p ? void 0 : oe,
      children: [(!Et || !!Ze) && ur.jsx(U, {
        maxHeight: Ie,
        overflowY: "hidden",
        children: ur.jsxs(w, {
          wrap: "wrap",
          children: [ur.jsx(w, {
            color: Je,
            children: _
          }), " ", ur.jsx(Q8e, {
            children: flattenDetail(e.state.detail)
          })]
        })
      }), Ze ? ur.jsx(U, {
        paddingLeft: 2,
        children: ur.jsx(w, {
          dimColor: true,
          wrap: "truncate",
          children: Ze
        })
      }) : null, tt.length > 0 && ur.jsxs(U, {
        flexDirection: "column",
        children: [tt.map(gt => ur.jsxs(U, {
          children: [ur.jsx(U, {
            flexGrow: 1,
            width: 0,
            children: ur.jsxs(w, {
              wrap: "truncate",
              children: [gt.prNumber !== void 0 ? ur.jsx(u6e, {
                number: gt.prNumber,
                url: gt.row.href,
                color: gt.color,
                underline: false,
                hidePrefix: true
              }) : ur.jsx(w, {
                color: gt.color,
                dimColor: !Htn(gt),
                children: Htn(gt) ? hCe : "PR"
              }), gt.label ? ur.jsxs(ur.Fragment, {
                children: [" ", ur.jsx(xs, {
                  url: gt.row.href,
                  children: ur.jsxs(w, {
                    color: gt.isDraft ? "inactive" : void 0,
                    children: [gt.label, gt.isDraft ? " (draft)" : ""]
                  })
                })]
              }) : null]
            })
          }), gt.diffStat && gt.diffStat.additions + gt.diffStat.deletions > 0 && ur.jsx(U, {
            flexShrink: 0,
            paddingLeft: 1,
            children: ur.jsx(xs, {
              url: `${gt.row.href}/files`,
              children: ur.jsx(d5, {
                added: gt.diffStat.additions,
                removed: gt.diffStat.deletions
              })
            })
          }), ur.jsx(U, {
            flexShrink: 0,
            paddingLeft: 1,
            children: gt.status.map((st, xt) => ur.jsxs(zKo.Fragment, {
              children: [xt > 0 && ur.jsx(w, {
                children: " "
              }), ur.jsx(w, {
                color: st.color,
                dimColor: !st.color,
                children: st.text
              })]
            }, xt))
          })]
        }, gt.row.href)), bt > 0 && ur.jsx(U, {
          paddingLeft: 2,
          children: ur.jsxs(w, {
            dimColor: true,
            children: ["\u2026 ", bt, " more"]
          })
        })]
      }), he.length > 0 && ur.jsx(U, {
        flexDirection: "column",
        marginTop: tt.length > 0 ? 1 : 0,
        children: he.map(([gt, st]) => ur.jsxs(U, {
          children: [he.length > 1 && ur.jsx(U, {
            width: Ke + 2,
            flexShrink: 0,
            children: ur.jsx(w, {
              dimColor: true,
              children: gt
            })
          }), ur.jsx(U, {
            flexGrow: 1,
            width: 0,
            maxHeight: Ie,
            overflowY: "hidden",
            children: ur.jsxs(w, {
              wrap: "wrap",
              children: [ur.jsx(w, {
                color: Je,
                children: _
              }), " ", ur.jsx(InlineEmphasis, {
                value: flattenDetail(st)
              })]
            })
          })]
        }, gt))
      }), ie ? ur.jsx(U, {
        marginTop: l.length > 0 ? 1 : 0,
        children: ur.jsx(dkc, {
          questions: ie,
          ageLabel: _,
          ageColor: Je
        })
      }) : e.state.needs ? ur.jsx(U, {
        marginTop: l.length > 0 ? 1 : 0,
        maxHeight: Ie,
        overflowY: "hidden",
        children: ur.jsxs(w, {
          wrap: "wrap",
          children: [ur.jsx(w, {
            color: Je,
            children: _
          }), " ", ur.jsx(InlineEmphasis, {
            value: flattenDetail(e.state.needs)
          })]
        })
      }) : null, ur.jsx(U, {
        flexGrow: 1
      }), ur.jsx(U, {
        marginTop: 1,
        children: ur.jsx(LP, {
          query: q,
          cursorOffset: Y,
          onCursorOffsetChange: z,
          placeholder: O && (ce !== "idle" || ae) ? "" : ie ? `press 1-${ie[0]?.options.length ?? 2} or type your answer` : P && !D ? P : "reply",
          prefix: D ? "!" : nt.pointer,
          prefixColor: D ? "bashBorder" : void 0,
          prefixDim: !q.trim(),
          dimRange: ee.interimRange ? [ee.interimRange.start, ee.interimRange.end] : void 0,
          cursorChar: Ee ? ur.jsx(edr, {}) : void 0,
          isFocused: !p,
          isTerminalFocused: a,
          width: "100%",
          borderless: true,
          wrapColumns: ye - 4
        })
      }), u && ur.jsx(w, {
        color: "error",
        dimColor: true,
        wrap: "truncate",
        children: u
      })]
    }), ur.jsx(U, {
      paddingLeft: 2,
      children: O && ae && !p ? ur.jsx(u7e, {}) : O && ce !== "idle" && !p ? ur.jsx(Zur, {
        voiceState: ce
      }) : ur.jsx(w, {
        dimColor: true,
        children: p ? ur.jsxs(Tn, {
          children: [ur.jsx(ht, {
            chord: "enter",
            action: "save",
            format: {
              keyCase: "lower"
            }
          }), ur.jsx(ht, {
            chord: "escape",
            action: "cancel",
            format: {
              keyCase: "lower"
            }
          })]
        }) : ur.jsxs(Tn, {
          children: [D && ur.jsx(w, {
            color: "bashBorder",
            children: "! for shell mode"
          }), (q.trim() || !D && !n) && ur.jsx(ht, {
            chord: "enter",
            action: q.trim() ? "send" : needsRespawn(e.state) ? "resume" : "open",
            format: {
              keyCase: "lower"
            }
          }), ur.jsx(ht, {
            chord: q.trim() || D ? "escape" : " ",
            action: "close",
            format: {
              keyCase: "lower"
            }
          }), O && L !== "tap" && !D && !q.trim() ? ur.jsx(w, {
            children: "hold space to speak"
          }) : null, ur.jsx(ht, {
            chord: "ctrl+x",
            action: r ? "confirm" : "delete"
          })]
        })
      })
    })]
  });
}
function QTm(e, t, n) {
  let r = e.slice(t, t + 1) || " ",
    o = e.slice(t + 1),
    s = UV(e.slice(0, t), n - rn(r) - (o ? 1 : 0));
  return ur.jsxs(ur.Fragment, {
    children: [ur.jsx(w, {
      children: s
    }), ur.jsx(w, {
      inverse: true,
      children: r
    }), ur.jsx(w, {
      children: o
    })]
  });
}
function ZTm(e) {
  let t = D7e.c(64),
    {
      job: n,
      isFocused: r,
      focusFg: o,
      isOrigin: s,
      logTail: i,
      status: a,
      cols: l,
      loopKickCount: c,
      age: u,
      childRows: d,
      renaming: p,
      deleteArmed: f,
      attaching: m
    } = e,
    g = tue(n.state.state),
    h,
    y,
    b;
  if (t[0] !== d || t[1] !== n.activity || t[2] !== n.state || t[3] !== a) ({
    color: y,
    dim: b
  } = glyphColor(n.state, n.activity, a)), h = a === "busy" ? y : rollupJobColor(y, d), t[0] = d, t[1] = n.activity, t[2] = n.state, t[3] = a, t[4] = h, t[5] = y, t[6] = b;else h = t[4], y = t[5], b = t[6];
  let _ = h,
    S = _ === y && b,
    A = m === "armed" ? void 0 : f?.justKilled ? ZFe : m ? void 0 : pickIcon(n.state, g, a),
    v = n.state.output?.result,
    C;
  if (t[7] !== v) C = v ? WTm(v) : null, t[7] = v, t[8] = C;else C = t[8];
  let x = C,
    I = x ? void 0 : v,
    k = g !== "success" ? i || void 0 : void 0,
    D = s && r ? n.state.tempo === "blocked" ? n.state.needs : g === "failure" ? n.state.detail : void 0 : void 0,
    P = s && n.state.tempo === "blocked" && n.state.needs === PW && n.state.detail && n.state.detail !== ult && n.state.detail !== clt ? n.state.detail : void 0,
    O = s && r ? D ? D === PW ? P ? `${flattenDetail(P)} \xB7 ${nt.arrowRight}` : `${Gme.basename(n.state.cwd) || n.state.cwd} \xB7 ${nt.arrowRight}` : `${flattenDetail(D)} \xB7 ${nt.arrowRight}` : n.state.detail ? `${flattenDetail(n.state.detail)} \xB7 ${nt.arrowRight}` : nt.arrowRight : g === "success" ? flattenDetail(I || n.state.detail) : n.state.tempo === "active" && flattenDetail(k ?? "") || flattenDetail(P || n.state.tempo === "blocked" && n.state.needs || n.state.detail),
    L = n.state.fan?.length ?? 0,
    M;
  if (t[9] !== n.state.fan) M = n.state.fan ? On(n.state.fan, nvm) : 0, t[9] = n.state.fan, t[10] = M;else M = t[10];
  let N = M,
    B = L >= 2 ? `${N}/${L} \xB7 ` : "",
    $;
  if (t[11] !== s || t[12] !== n.state) $ = jobLabel(n.state, s), t[11] = s, t[12] = n.state, t[13] = $;else $ = t[13];
  let q = $,
    W = eJa(n.state.color) ? C$[n.state.color] : void 0,
    V = STm(q, !!n.state.name),
    Y,
    z,
    K;
  if (t[14] !== d) Y = d.filter(Htn), z = d.filter(tvm), K = z.find(evm) ?? z.at(-1) ?? Y.at(-1), t[14] = d, t[15] = Y, t[16] = z, t[17] = K;else Y = t[15], z = t[16], K = t[17];
  let Z = K,
    J = r ? "selected, " : "",
    ne = m ? `${J}opening:` : f?.justKilled ? `${J}stopped:` : _ !== y ? `${J}needs attention:` : jobRowSrLabel(n.activity, n.state.tempo, a, g, r),
    oe = l.label + 2,
    re = !r,
    ee = S || _ === void 0 && !r,
    ce;
  if (t[18] !== A) ce = A ?? ur.jsx(jTm, {}), t[18] = A, t[19] = ce;else ce = t[19];
  let ae;
  if (t[20] !== _ || t[21] !== ne || t[22] !== ee || t[23] !== ce) ae = ur.jsx(w, {
    "aria-label": ne,
    color: _,
    dimColor: ee,
    children: ce
  }), t[20] = _, t[21] = ne, t[22] = ee, t[23] = ce, t[24] = ae;else ae = t[24];
  let de;
  if (t[25] !== l.label || t[26] !== x || t[27] !== r || t[28] !== q || t[29] !== p || t[30] !== V || t[31] !== W) de = W && !p ? ur.jsx(pE, {
    color: W,
    bold: r,
    children: x ? ur.jsx(xs, {
      url: x,
      children: q
    }) : q
  }) : p ? QTm(p.draft, p.cursor, l.label) : V ? ur.jsxs(ur.Fragment, {
    children: [ur.jsx(w, {
      dimColor: !r,
      children: V.display.slice(0, V.newLen)
    }), ur.jsx(w, {
      dimColor: true,
      children: V.display.slice(V.newLen)
    })]
  }) : x ? ur.jsx(xs, {
    url: x,
    children: q
  }) : q, t[25] = l.label, t[26] = x, t[27] = r, t[28] = q, t[29] = p, t[30] = V, t[31] = W, t[32] = de;else de = t[32];
  let Ee;
  if (t[33] !== o || t[34] !== ae || t[35] !== de || t[36] !== re) Ee = ur.jsxs(w, {
    color: o,
    dimColor: re,
    wrap: "truncate",
    children: [ae, " ", de]
  }), t[33] = o, t[34] = ae, t[35] = de, t[36] = re, t[37] = Ee;else Ee = t[37];
  let me;
  if (t[38] !== Ee || t[39] !== oe) me = ur.jsx(U, {
    width: oe,
    flexShrink: 0,
    children: Ee
  }), t[38] = Ee, t[39] = oe, t[40] = me;else me = t[40];
  let pe;
  if (t[41] !== m || t[42] !== f || t[43] !== B || t[44] !== c || t[45] !== O) pe = ur.jsx(U, {
    flexGrow: 1,
    width: 0,
    paddingLeft: 2,
    children: m === "armed" ? ur.jsx(w, {
      dimColor: true,
      wrap: "truncate",
      children: "opening\u2026 \xB7 esc to cancel"
    }) : f ? ur.jsx(w, {
      color: "error",
      wrap: "truncate",
      children: f.justKilled ? "stopped \xB7 ctrl+x again to delete" : "ctrl+x again to delete"
    }) : m ? ur.jsx(w, {
      dimColor: true,
      wrap: "truncate",
      children: "opening\u2026"
    }) : ur.jsxs(w, {
      dimColor: true,
      wrap: "truncate",
      children: [B, O, c !== void 0 && c > 0 ? ` \xD7${c}` : ""]
    })
  }), t[41] = m, t[42] = f, t[43] = B, t[44] = c, t[45] = O, t[46] = pe;else pe = t[46];
  let ge;
  if (t[47] !== Z || t[48] !== l.artifact || t[49] !== o || t[50] !== Y || t[51] !== r || t[52] !== z) ge = l.artifact > 0 ? ur.jsx(U, {
    width: l.artifact + 2,
    flexShrink: 0,
    paddingLeft: 2,
    justifyContent: "flex-end",
    children: z.length > 1 ? ur.jsxs(w, {
      color: Z?.color,
      dimColor: !r || !Z?.color,
      children: [z.length, " PRs"]
    }) : z.length === 1 ? Z?.prNumber !== void 0 ? ur.jsx(u6e, {
      number: Z.prNumber,
      url: Z.row.href,
      color: Z.color,
      dimColor: !r,
      underline: false,
      hidePrefix: true
    }) : ur.jsx(w, {
      color: o,
      dimColor: !r,
      children: "PR"
    }) : Z ? ur.jsx(xs, {
      url: Z.row.href,
      children: ur.jsxs(w, {
        color: "claude",
        children: [Y.length > 1 && `${Y.length} `, hCe]
      })
    }) : null
  }) : null, t[47] = Z, t[48] = l.artifact, t[49] = o, t[50] = Y, t[51] = r, t[52] = z, t[53] = ge;else ge = t[53];
  let he = l.age + 2,
    ie;
  if (t[54] !== u) ie = ur.jsx(w, {
    dimColor: true,
    children: u
  }), t[54] = u, t[55] = ie;else ie = t[55];
  let le;
  if (t[56] !== he || t[57] !== ie) le = ur.jsx(U, {
    width: he,
    flexShrink: 0,
    paddingLeft: 2,
    justifyContent: "flex-end",
    children: ie
  }), t[56] = he, t[57] = ie, t[58] = le;else le = t[58];
  let He;
  if (t[59] !== me || t[60] !== pe || t[61] !== ge || t[62] !== le) He = ur.jsxs(U, {
    children: [me, pe, ge, le]
  }), t[59] = me, t[60] = pe, t[61] = ge, t[62] = le, t[63] = He;else He = t[63];
  return He;
}
function evm(e) {
  return e.color !== void 0;
}
function tvm(e) {
  return !Htn(e);
}
function nvm(e) {
  return e.doneAt !== void 0 || !!e.failed;
}
function FleetView({
  onAction: e,
  initialJobId: t,
  enteredViaLeftArrow: n,
  initialQuery: r,
  initialCollapsed: o,
  initialWarming: s,
  initialError: i,
  initialGroupMode: a,
  initialSessionModel: l,
  cwdFilter: c,
  dispatchDefaults: u,
  canGoBack: d,
  autoOpenJobId: p
}) {
  let f = ks(),
    [m, g] = jr.useState(Etn),
    h = jr.useRef(null);
  h.current = m;
  let [y, b] = jr.useState([]),
    [_, S] = jr.useState(() => FKo.filter(mt => !mt.id.startsWith("remote-pending-")).map(mt => ({
      ...mt,
      activity: deriveActivity(mt.state)
    })));
  jr.useEffect(() => {
    FKo = _;
  }, [_]);
  let A = jr.useRef(0),
    [v, C] = jr.useState({}),
    [x, I] = jr.useState(() => Jpr),
    k = jr.useRef(x);
  k.current = x, jr.useEffect(() => {
    if (Jpr.size) return;
    aOa().then(mt => {
      if (mt.size) k.current = mt, I(Vn => Vn.size ? new Map([...mt, ...Vn]) : mt);
    });
  }, []), jr.useEffect(() => {
    iOa(x);
  }, [x]);
  let D = jr.useRef(0),
    [P, O] = jr.useState(() => new Map(OKo)),
    L = jr.useRef(P);
  L.current = P;
  let M = jr.useRef(bkc()),
    N = $t(),
    B = repoGroup({
      cwd: N
    }),
    [$, q] = jr.useState(N);
  jr.useEffect(() => {
    let mt = false;
    return jA(N).then(Vn => {
      if (!mt && Vn !== N) q(Vn);
    }), () => {
      mt = true;
    };
  }, [N]);
  let W = c && !PPn({
      cwd: $
    }, c) ? c : $,
    [V, Y] = jr.useState(() => new Map(jKo)),
    [z, K] = jr.useState(N),
    [Z, J] = jr.useState(MNe),
    [ne, oe] = jr.useState(() => new Set()),
    re = jr.useRef(0),
    ee = jr.useRef(null),
    [ce, ae] = jr.useState(() => qpr.get(N) ?? {});
  jr.useEffect(() => {
    if (qpr.has(N)) return;
    let mt = false;
    return Lrc(N).then(Vn => {
      if (qpr.set(N, Vn), !mt && Object.keys(Vn).length > 0) ae(Vn);
    }), () => {
      mt = true;
    };
  }, [N]);
  let de = Uo([...(m ?? []), ...y].map(mt => ybe(mt.state))).sort().join("\x00"),
    Ee = jr.useMemo(() => {
      let mt = {
        ...ce
      };
      for (let Vn of de ? de.split("\x00") : []) {
        let Bn = Gme.basename(Vn);
        if (Bn && !/\s/.test(Bn) && mt[Bn] === void 0) mt[Bn] = Vn;
      }
      return mt;
    }, [ce, de]),
    [me, pe] = jr.useState(() => new Map(GKo)),
    [ge, he] = jr.useState(() => new Map(qkc)),
    [ie, le] = jr.useState(0),
    [He, ye] = jr.useState(null),
    [ue, we] = jr.useState(false),
    Ce = jr.useRef(new Map()),
    [Ie, Ve] = jr.useState(null),
    [Ze, Be] = jr.useState(false),
    [Me, Ue] = jr.useState(false),
    [tt, bt] = jr.useState(false),
    Ke = () => e({
      type: "done"
    }),
    [Et, ct] = jr.useState(false),
    Je = Kj(ct, Ke),
    [gt, st] = jr.useState(null),
    [xt, vt] = jr.useState(null),
    jt = jr.useRef(0),
    en = jr.useRef(new Map(s)),
    [Dn, nn] = jr.useState(() => new Set(en.current.keys()));
  jr.useEffect(() => {
    for (let [mt, Vn] of en.current) Vn.then(() => {
      if (en.current.get(mt) === Vn) en.current.delete(mt), nn(new Set(en.current.keys()));
    });
  }, []);
  let Ln = jr.useRef(null),
    Hn = jr.useRef(null),
    kr = () => {
      st(null), zt(""), Ln.current = null, Hn.current = null;
    },
    [Mr, fe] = jr.useState(() => a ?? Dt().fleetViewGroupMode ?? "state"),
    Te = jr.useRef(Mr);
  Te.current = Mr;
  let [Re, Ne] = jr.useState(() => new Set(o)),
    it = jr.useRef(Re);
  it.current = Re;
  let [Tt, un] = jr.useState(() => new Set()),
    ze = mt => Ne(Vn => {
      let Bn = new Set(Vn);
      if (Bn.has(mt)) Bn.delete(mt);else Bn.add(mt), un(Nr => Nr.has(mt) ? new Set([...Nr].filter(Ur => Ur !== mt)) : Nr);
      return Bn;
    }),
    Mt = jr.useRef(null),
    Qt = jr.useRef(null),
    Er = jr.useRef(void 0),
    pt = Pg();
  jr.useEffect(() => {
    if (pt) D.current = 0;
  }, [pt]);
  let ln = Ht(mt => mt.autoUpdaterResult?.status === "success"),
    {
      columns: pn,
      rows: ir
    } = br(),
    Rr = jr.useRef(Date.now()),
    _o = jr.useRef(false),
    Xo = pn >= 120 ? 1 : 0,
    Pn = jr.useRef(null),
    lr = jr.useRef(null),
    eo = jr.useRef(null);
  M0(eo, m !== null && !ue);
  let Kn = $me(),
    Nt = Ht(mt => mt.settings.voice?.mode ?? "hold"),
    Ut = jr.useRef(null),
    Fn = jr.useRef("idle"),
    xi = jr.useRef(false);
  jr.useEffect(() => () => {
    Ut.current?.(), Ut.current = null;
  }, []);
  let jn = () => {
      if (!Er.current) return;
      Cd(false), we(mt => {
        if (!mt && Er.current) Mt.current = Er.current.id;
        return !mt;
      });
    },
    [So, Mo] = jr.useState(() => RQt() && r?.startsWith("!") ? "bash" : "prompt"),
    rs = jr.useRef(So),
    js = mt => {
      rs.current = mt, Mo(mt);
    },
    [Gn, cr] = jr.useState(UKo),
    Lt = jr.useRef(Gn);
  Lt.current = Gn;
  let En = mt => {
      UKo = mt, cr(mt);
    },
    {
      query: Sn,
      queryRef: Jn,
      setQuery: Qn,
      cursorOffset: gr,
      setCursorOffset: fo,
      handleKeyDown: cs,
      handlePaste: Gs
    } = Uk({
      initialQuery: RQt() && r?.startsWith("!") ? r.slice(1) : r,
      isActive: !ue && gt === null && xt === null,
      multiline: true,
      honorEditorMode: true,
      onExit: () => {},
      onCancel: m === null ? Je : void 0,
      onSpaceOnEmpty: () => {
        if (rs.current === "bash") return;
        if (Kn && Nt !== "tap") Ut.current?.(), Ut.current = f.setTimeout(() => {
          if (Ut.current = null, Fn.current !== "idle" || xi.current) return;
          if (Jn.current.trim() !== "") return;
          jn();
        }, Kkc);else jn();
      }
    }),
    la = jr.useRef(gr);
  la.current = gr, mTc(mt => {
    let Vn = Jn.current,
      Bn = la.current,
      Nr = Fur(mt, Vn[Bn - 1]);
    Qn(Vn.slice(0, Bn) + Nr + Vn.slice(Bn)), fo(Bn + Nr.length);
  });
  let Fi = jr.useRef({}),
    xn = jr.useRef(1),
    nr = dKo(Fi, xn, Gs),
    Yn = jr.useRef(null);
  Yn.current = {
    cursorOffset: gr,
    setInputWithCursor: (mt, Vn) => {
      Qn(mt), fo(Vn);
    },
    insert: () => {},
    submit: () => {}
  };
  let Xn = Ppr({
      setInputValueRaw: Qn,
      inputValueRef: Jn,
      insertTextRef: Yn,
      enableDoubleTapSubmit: false,
      isActive: !ue && gt === null && xt === null
    }),
    Jr = P0(mt => mt.voiceState),
    zr = P0(mt => mt.voiceWarmingUp);
  Fn.current = Jr, xi.current = zr, jr.useEffect(() => {
    if (Jr !== "idle" && Ut.current) Ut.current(), Ut.current = null;
  }, [Jr]);
  let {
      handleKeyDown: to
    } = Mpr({
      voiceHandleKeyEvent: Xn.handleKeyEvent,
      voiceCancelRecording: Xn.cancelRecording,
      stripTrailing: Xn.stripTrailing,
      resetAnchor: Xn.resetAnchor,
      isActive: (Nt !== "tap" || Sn.trim().length > 0) && So !== "bash" && !ue && gt === null && xt === null,
      inputValueRef: Jn
    }),
    vs = Ht(mt => Mv(mt.settings.prefersReducedMotion)),
    bs = Jr === "recording" && !vs;
  jr.useEffect(() => {
    if (Jr !== "recording") d6i();
  }, [Jr]);
  let Da = () => rs.current === "bash" ? `!${Jn.current}` : Jn.current;
  Pd(() => {
    let mt = Da(),
      Vn = [...it.current];
    mt || Vn.length ? Jdr($, {
      q: mt,
      collapsed: Vn
    }) : hSc($);
  }, 300, [Sn, So, Re, $]), jr.useEffect(() => jee(() => {
    let mt = Da(),
      Vn = [...it.current];
    if (mt || Vn.length) gSc($, {
      q: mt,
      collapsed: Vn
    });
  }), [$, Jn]);
  let [Qs, To] = jr.useState(i ?? null),
    [ji, us] = jr.useState(l),
    X = jr.useRef(ji);
  X.current = ji;
  let Se = jr.useMemo(XTm, []),
    {
      query: qe,
      queryRef: ot,
      setQuery: zt,
      cursorOffset: cn,
      handleKeyDown: hr,
      handlePaste: Tr
    } = Uk({
      isActive: gt !== null,
      honorEditorMode: true,
      backspaceExitsOnEmpty: false,
      onExit: () => {
        let mt = Ln.current,
          Vn = Hn.current,
          Bn = ot.current.trim();
        if (kr(), !mt || !Bn) return;
        if (Vn) {
          b(Nr => Nr.map(Ur => Ur.id !== mt ? Ur : {
            ...Ur,
            state: {
              ...Ur.state,
              name: Bn,
              intent: Bn,
              updatedAt: new Date().toISOString()
            }
          })), hTo(Vn, {
            action: "rename",
            name: Bn
          }).then(() => {
            xe("fleet_view_rename_job");
          }).catch(Nr => {
            T(`[fleetview] peer rename failed: ${Nr}`), Le("fleet_view_rename_job", "peer_uds_failed"), To("Couldn't rename \u2014 that session isn't responding"), b(Ur => Ur.map(fs => fs.id === mt && fs.state.name === Bn ? {
              ...fs,
              state: {
                ...fs.state,
                updatedAt: new Date(0).toISOString()
              }
            } : fs));
          });
          return;
        }
        Fd.current = ++Mc.current, g(Nr => Nr ? Nr.map(Ur => Ur.id === mt ? {
          ...Ur,
          state: {
            ...Ur.state,
            name: Bn
          }
        } : Ur) : Nr), Zce(mt, Bn, "user").then(Nr => {
          if (Nr) {
            xe("fleet_view_rename_job");
            return;
          }
          To("Couldn't rename \u2014 the job may have been removed or its state file is unwritable."), Le("fleet_view_rename_job", "sync_name_failed"), g(Ur => Ur ? Ur.map(fs => fs.id === mt && fs.state.name === Bn ? {
            ...fs,
            state: {
              ...fs.state,
              name: void 0
            }
          } : fs) : Ur);
        });
      },
      onCancel: kr
    }),
    Br = V.get(N) ?? kkc,
    fi = extractRepoCwd(Sn, Ee, Br),
    oi = fi ?? z,
    Pa = V.get(oi) ?? kkc,
    nc = jr.useMemo(() => JTm(Pa, Br), [Pa, Br]),
    Qp = me.get(oi) ?? me.get(N) ?? Rkc,
    sd = ge.get(oi) ?? ge.get(N) ?? Rkc,
    ca = So === "bash" ? null : parsePrRef(Sn),
    _p = ca ? buildPrRefRe(ca) : void 0,
    bg = So === "bash" || ca ? null : parseUrlRef(Sn),
    C_ = mt => !c || PPn(mt.state, c),
    Xm = ca ? mt => jobMatchesPr(mt, ca, _p) : bg ? mt => jobMatchesUrl(mt, bg) : null,
    Zy = Xm ? (m ?? []).find(mt => C_(mt) && Xm(mt.state))?.id : void 0,
    dd = jr.useMemo(() => Zy ? null : parseDispatch(So === "bash" ? `!${Sn}` : Sn, nc, Ee, sd), [So, Zy, Sn, nc, Ee, sd]),
    Ch = So === "bash" || dd?.exec !== void 0,
    kS = !!(dd?.intent || dd?.routine || dd?.matched),
    Pb = !!(dd && (dd.intent || dd.routine || dd.matched || dd.cwd !== void 0 || dd.exec !== void 0)),
    ay = jr.useRef(dd);
  ay.current = dd;
  let [dl, nb] = jr.useState([]),
    [KT, rh] = jr.useState(null),
    Jm = jr.useCallback(mt => {
      G("tengu_bg_agent_action", {
        action: `fleetview_update_${mt}`
      }), sir().then(Vn => {
        if (mt === "auto" && Date.now() - Ex() < AUTO_RELAUNCH_UNFOCUSED_MS) return;
        return w1e({
          launcher: Vn,
          args: ["agents", ...(c ? ["--cwd", c] : []), ...Prc()],
          env: {
            [gNt]: "1",
            ...(mt === "auto" && {
              [AUTO_RELAUNCH_ENV_KEY]: String(Date.now())
            }),
            ...tke()
          },
          preSpawn: () => process.stdout.write(wt.dim(`
Switching from ${{
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.195",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-06-26T01:00:56Z",
            GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
          }.VERSION} to latest\u2026

`))
        });
      }).catch(Vn => {
        if (ke(Vn), mt === "manual") To(`Couldn't switch to the latest build \u2014 ${be(Vn)}`);
      });
    }, [c]);
  Gc(() => {
    let mt = Number(process.env[AUTO_RELAUNCH_ENV_KEY]) || 0;
    if (Date.now() - mt < AUTO_RELAUNCH_MIN_INTERVAL_MS) return;
    if (Date.now() - Ex() < AUTO_RELAUNCH_UNFOCUSED_MS) return;
    Jm("auto");
  }, ln && !pt ? AUTO_RELAUNCH_UNFOCUSED_MS : null);
  let [ly, Cd] = jr.useState(false),
    [Ji, oh] = jr.useState(0),
    [Sg, rb] = jr.useState(null);
  jr.useEffect(() => {
    if (Sn) Cd(false);
  }, [Sn]), jr.useEffect(() => {
    oh(0);
  }, [Sn, ly, oi]);
  let [HR, TE] = jr.useReducer(mt => mt + 1, 0),
    RA = jr.useMemo(() => computeSuggestions(Sn, nc, sd, Ee, Qp, Se, dd, ly), [Sn, nc, sd, Ee, Qp, Se, dd, ly, HR]),
    {
      firstWord: mx,
      isSlashQuery: YT,
      atMatch: Ih,
      slashMatch: XT,
      modelArgMatch: Wn,
      templateNames: Cs,
      repoNames: Ya,
      suggestions: Ki
    } = RA,
    Yc = mt => {
      if (rb(null), mt.kind === "model" && Wn) {
        Qn(`/model ${mt.name}`);
        return;
      }
      let Vn = xkc[mt.kind];
      Qn(Ih || XT ? zTm(Sn, Vn, mt.name) : `${Vn}${mt.name} `);
    },
    Yl = () => (Sg ? Ki.find(mt => `${mt.kind}:${mt.name}` === Sg) : void 0) ?? Ki[Math.min(Ji, Ki.length - 1)],
    dc = jr.useRef(false),
    et = mt => {
      dc.current = true, Qn(mt), Be(false);
    },
    Xe = jr.useRef(new Set()),
    tn = jr.useRef(new Map()),
    Ar = mt => (Fd.current = ++Mc.current, tn.current.set(mt, (tn.current.get(mt) ?? 0) + 1), () => {
      Fd.current = ++Mc.current;
      let Vn = (tn.current.get(mt) ?? 1) - 1;
      if (Vn <= 0) tn.current.delete(mt);else tn.current.set(mt, Vn);
    }),
    [Yr, Wo] = jr.useState(null),
    Ri = jr.useRef(null),
    qa = (mt, Vn = false, Bn, Nr) => {
      let Ur = mt === null ? null : {
        id: mt,
        justKilled: Vn,
        group: Bn,
        sortKey: Nr
      };
      Ri.current = Ur, Wo(Ur);
    };
  Pd(() => qa(null), Yr ? 2000 : null, [Yr]);
  let Mc = jr.useRef(0),
    Fd = jr.useRef(0),
    cm = jr.useCallback(async () => {
      let mt = ++Mc.current,
        [Vn, Bn] = await Promise.all([aX(), Tar()]),
        Nr = KUt(aKi(Vn, Bn.records), Bn.shorts).filter(Xc => !Xe.current.has(Xc.id)).map(Xc => ({
          ...Xc,
          activity: deriveActivity(Xc.state, k.current)
        }));
      if (mt <= Fd.current) return;
      Fd.current = mt, g(Xc => {
        let Xu = Xc && tn.current.size > 0 ? new Map(Xc.filter(Uc => tn.current.has(Uc.id)).map(Uc => [Uc.id, Uc])) : null,
          Xl = sortJobs(Xu ? Nr.map(Uc => Xu.get(Uc.id) ?? Uc) : Nr);
        if (Xc && Xc.length === Xl.length && Xc.every((Uc, bp) => Uc.id === Xl[bp].id && Uc.state.updatedAt === Xl[bp].state.updatedAt && Uc.state.state === Xl[bp].state.state && Uc.state.pinned === Xl[bp].state.pinned && Uc.activity === Xl[bp].activity)) return Xc;
        return Xl;
      });
      let Ur = Nr.filter(Xc => deriveBand(Xc.state) !== "completed"),
        fs = await Promise.all(Ur.map(async Xc => [Xc.id, await GTm(Xc)]));
      C(Xc => {
        let Xu = Object.fromEntries(fs),
          Xl = Object.keys(Xc);
        if (Xl.length === fs.length && Xl.every(Uc => Xc[Uc] === Xu[Uc])) return Xc;
        return Xu;
      });
      let wi = Nr.filter(Xc => YUt(Xc.state));
      if (wi.length > 0) {
        let Xu = (await Promise.all(wi.map(async Xl => {
          let Uc = VKo(Xl.state);
          try {
            let bp = await Pkc.stat(Uc);
            return [Xl.state.sessionId, bp.mtimeMs, Uc];
          } catch {
            return null;
          }
        }))).filter(Xl => Xl !== null).filter(([Xl, Uc]) => {
          let bp = L.current.get(Xl);
          return !bp || bp.mtimeMs !== Uc;
        });
        if (Xu.length > 0) {
          let Xl = await Promise.all(Xu.map(async ([Uc, bp, mc]) => {
            try {
              let PS = await Skc(M.current, mc);
              return PS ? [Uc, {
                mtimeMs: bp,
                ...PS
              }] : null;
            } catch {
              return null;
            }
          }));
          O(Uc => {
            let bp = false,
              mc = new Map(Uc);
            for (let PS of Xl) if (PS) mc.set(PS[0], PS[1]), bp = true;
            return bp ? mc : Uc;
          });
        }
      }
      let Ll = Uo(Nr.flatMap(Xc => Xc.state.children?.filter(Xu => Xu.kind !== "frame").map(Xu => Xu.href) ?? [])),
        fc = Ll.filter(Xc => {
          let Xu = k.current.get(Xc)?.state;
          return Xu !== "MERGED" && Xu !== "CLOSED";
        }),
        rl = Date.now(),
        Uf = rl - D.current >= nkc(Sit(), rl - Ex());
      if (fc.length > 0 && Uf) {
        D.current = rl;
        let Xc = at("tengu_fleetview_pr_batch", true);
        (async () => {
          let Xu;
          if (Xc) {
            let Xl = await oOa(fc);
            Xu = Xl.statuses, await Promise.all(Xl.unbatched.map(async Uc => Xu.set(Uc, await Ngo(Uc))));
          } else Xu = new Map(await Promise.all(fc.map(async Xl => [Xl, await Ngo(Xl)])));
          I(Xl => {
            let Uc = false;
            for (let [mc, PS] of Xu) {
              let Nb = Xl.get(mc);
              if (Nb?.state !== PS?.state || Nb?.title !== PS?.title || Nb?.review !== PS?.review || Nb?.checks.passed !== PS?.checks.passed || Nb?.checks.failed !== PS?.checks.failed || Nb?.checks.pending !== PS?.checks.pending || Nb?.additions !== PS?.additions || Nb?.deletions !== PS?.deletions) {
                Uc = true;
                break;
              }
            }
            if (!Uc) return Xl;
            let bp = new Map(Xl);
            for (let [mc, PS] of Xu) if (PS !== null || !Xl.has(mc)) bp.set(mc, PS);
            return bp;
          });
        })();
      }
      if (Fd.current === mt) {
        let Xc = new Set(Nr.map(Xl => Xl.state.sessionId)),
          Xu = new Set(Ll);
        O(Xl => pruneMap(Xl, Xc)), I(Xl => pruneMap(Xl, Xu)), Ekc(M.current, new Set(Nr.map(Xl => VKo(Xl.state))));
      }
    }, []),
    Qm = jr.useMemo(() => RTm(() => void cm(), mt => {
      Mt.current = mt;
    }, (mt, Vn, Bn) => {
      if (Fd.current = ++Mc.current, Vn) Xe.current.add(Vn);
      let Nr = Bn ? Ar(Bn) : void 0;
      return g(Ur => Ur ? mt(Ur) : Ur), Vn || Nr ? () => {
        if (Vn) Fd.current = ++Mc.current, Xe.current.delete(Vn);
        Nr?.();
      } : void 0;
    }), [cm]);
  jr.useEffect(() => {
    T("[PERF:bg-remount-end]"), xe("screen_fleet_view");
  }, []), jr.useEffect(() => () => void esi(), []);
  let Jk = jr.useRef(null);
  jr.useEffect(() => () => Jk.current?.(), []), Gc(cm, 2000);
  let [JT, RS] = jr.useState(() => NKo),
    cD = jr.useRef(JT);
  cD.current = JT;
  let Yu = jr.useRef(BKo);
  Gc(() => {
    e8e().then(mt => {
      let Vn = new Map();
      for (let Ur of mt) {
        if (!Ur.status) continue;
        if (Ur.sessionId) Vn.set(Ur.sessionId, Ur.status);
        if (Ur.jobId) Vn.set(jobStatusKey(Ur.jobId), Ur.status);
      }
      for (let Ur of Vn.keys()) fO.current.delete(Ur);
      let Bn = uWo();
      if (Bn && mt.some(Ur => Ur.sessionId === Bn.sessionId)) $rc(Bn.sessionId);
      let Nr = false;
      for (let [Ur, fs] of uD.current) {
        let wi = mt.find(Ll => Ll.sessionId === Ur || Ll.jobId === fs.jobId);
        if (Vn.get(Ur) === "busy" || Vn.get(jobStatusKey(fs.jobId)) === "busy" || wi !== void 0 && (wi.statusUpdatedAt ?? 0) > fs.kickedAt && wi.startedAt <= fs.kickedAt) uD.current.delete(Ur), Nr = true;
      }
      RS(Ur => !Nr && Ur.size === Vn.size && [...Vn].every(([fs, wi]) => Ur.get(fs) === wi) ? Ur : Vn), Yu.current = Date.now();
    }).catch(() => {});
  }, 500);
  let pl = jr.useRef(0),
    [v2, U3] = jr.useState(false),
    e_ = jr.useRef(new Set()),
    gx = jr.useRef(new Map()),
    Ma = jr.useCallback(() => {
      A.current = Date.now();
      let mt = ++pl.current;
      CTc().then(Vn => {
        if (mt !== pl.current) return;
        let Bn = Vn.map(Nr => {
          let Ur = a4t(Nr.id),
            fs = ITc(Nr),
            wi = gx.current.get(Ur);
          if (wi !== void 0) if (Vh(fs) || Date.now() > wi) gx.current.delete(Ur);else fs = {
            ...fs,
            state: "stopped",
            tempo: "idle",
            needs: void 0
          };
          return {
            id: Ur,
            state: fs,
            activity: deriveActivity(fs)
          };
        }).filter(Nr => !e_.current.has(Nr.id));
        S(Nr => xTc(Nr, Bn)), U3(true);
      }).catch(Vn => {
        if (T(`[fleet:remote] poll mapper threw: ${be(Vn)}`), mt === pl.current) U3(true);
      });
    }, []);
  jr.useEffect(Ma, [Ma]), Gc(Ma, 30000), Gc(() => {}, 2000);
  let Eg = mt => {
      if (mt === Lt.current) return;
      if (mt === "remote" && !wTc()) return;
      if (En(mt), To(null), mt === "remote") Ma();
    },
    fO = jr.useRef(new Set()),
    uD = jr.useRef(new Map()),
    Qk = jr.useRef(new Map()),
    NC = mt => {
      let {
        sessionId: Vn,
        resumeSessionId: Bn
      } = mt.state;
      if (V0e(mt.state)) return mt.state.tempo === "active" ? "busy" : void 0;
      if (mt.state.backend === "remote") return mt.state.tempo === "active" ? "busy" : mt.state.tempo === "blocked" ? "waiting" : void 0;
      if (uD.current.has(Bn ?? Vn)) return "busy";
      if (dl.some(Ur => Ur.state.sessionId === Vn)) return "busy";
      let Nr = peerStatusFor(JT, mt);
      if (Nr) return Nr;
      if (fO.current.has(Vn)) return "busy";
      return;
    },
    JP = false,
    [, ige] = jr.useState(0),
    die = Date.now(),
    dD = jr.useMemo(() => new Set((m ?? []).filter(mt => YUt(mt.state)).map(mt => mt.id)), [m]),
    GZ = (m ?? []).some(mt => {
      if (!dD.has(mt.id)) return false;
      let Vn = P.get(mt.state.sessionId)?.nextAt;
      return Vn != null && Vn > die && Vn - die < 60000;
    });
  Gc(() => ige(mt => mt + 1), GZ ? 1000 : m?.length ? 30000 : null), jr.useEffect(() => {
    cm();
  }, [cm]), jr.useEffect(() => {
    Iar(W, true, u, V.get(W));
  }, [W, u, V]), jr.useEffect(() => {
    if (Wkc) return;
    aX().catch(() => []).then(mt => {
      let Vn = false;
      if (gn(Bn => {
        let Nr = Bn.agentLastUsed ?? {},
          Ur = {
            ...Nr
          };
        for (let fs of mt) {
          if (fs.state.template === Bse.name) continue;
          if (Nr[fs.state.template] !== void 0) continue;
          let wi = Date.parse(fs.state.createdAt);
          if (Number.isNaN(wi)) continue;
          if (wi > (Ur[fs.state.template] ?? 0)) Ur[fs.state.template] = wi, Vn = true;
        }
        if (!Vn) return Bn;
        return {
          ...Bn,
          agentLastUsed: Ur
        };
      }), Vn) TE();
    });
  }, []), jr.useEffect(() => {
    let mt = false;
    if (!V.has(oi)) IQt(oi).catch(() => []).then(Vn => {
      if (mt) return;
      jKo.set(oi, Vn), Y(Bn => Bn.has(oi) ? Bn : new Map(Bn).set(oi, Vn));
    });
    if (!me.has(oi)) mA(oi).catch(() => []).then(Vn => {
      if (mt) return;
      let Bn = Vn.filter(Nr => !Nr.isHidden && !Poe(Nr)).map(Nr => ({
        kind: Nr.type !== "prompt" ? "command" : Nr.kind === "workflow" ? "workflow" : "skill",
        name: Nr.name,
        aliases: Nr.aliases,
        description: Gd(Nr.description ?? "")
      }));
      GKo.set(oi, Bn), pe(Nr => Nr.has(oi) ? Nr : new Map(Nr).set(oi, Bn));
    });
    return () => {
      mt = true;
    };
  }, [oi]);
  let {
      addNotification: pie
    } = Li(),
    fie = Z_e();
  enr(fie, true, mt => pie(Ztr(mt))), tnr(fie);
  let WZ = k1l(fie, Dt().copyOnSelect ?? true);
  jr.useLayoutEffect(() => {
    let mt = Cu.get(process.stdout);
    if (!mt) return;
    return mt.onHyperlinkClick = Vn => {
      dIn(Vn);
    }, () => {
      mt.onHyperlinkClick = void 0;
    };
  }, []);
  let {
      template: w2,
      state: Zp,
      output: gve,
      pr: C2,
      url: lK,
      text: Mb
    } = parseQuery(dd ? "" : Sn),
    BC = C2 ? buildPrRefRe(C2) : void 0,
    mO = false,
    $b = [...(m ?? []), ...(JP ? y : [])],
    lB = c ? $b.filter(mt => PPn(mt.state, c)) : $b,
    hx = mO ? Gn === "remote" ? _ : lB : [...lB, ..._],
    mie = hx.filter(mt => {
      if (w2 && !mt.state.template.toLowerCase().startsWith(w2)) return false;
      if (C2 && !jobMatchesPr(mt.state, C2, BC)) return false;
      if (lK && !jobMatchesUrl(mt.state, lK)) return false;
      if (gve !== void 0 && !Object.values(mt.state.output ?? {}).some(Vn => Vn.toLowerCase().includes(gve))) return false;
      if (Zp && !mt.state.state.toLowerCase().startsWith(Zp) && !deriveBand(mt.state).startsWith(Zp) && !Hkc[stateBucket(mt, k.current, NC(mt))].toLowerCase().startsWith(Zp)) return false;
      if (Mb) {
        if (![mt.state.name, mt.state.intent, mt.state.detail, ...Object.values(mt.state.output ?? {})].join(" ").toLowerCase().includes(Mb)) return false;
      }
      return true;
    }),
    yV = dl.filter(mt => !mie.some(Vn => Vn.id === mt.id)),
    gie = yV.length > 0 ? sortJobs([...yV, ...mie]) : mie,
    ob = Mr === "state",
    QP = new Map(gie.map(mt => [mt.id, mt.state.pinned ? "pinned" : Yr?.id === mt.id && Yr.group ? Yr.group : ob ? stateBucket(mt, k.current, NC(mt)) : repoGroup(mt.state)])),
    sb = [...gie].sort((mt, Vn) => {
      let Bn = QP.get(mt.id),
        Nr = QP.get(Vn.id);
      if (Bn === "pinned" || Nr === "pinned") return (Bn === "pinned" ? 0 : 1) - (Nr === "pinned" ? 0 : 1);
      if (ob) {
        let Ur = LKo.indexOf(Bn) - LKo.indexOf(Nr),
          fs = wi => Yr?.id === wi.id && Yr.sortKey !== void 0 ? Yr.sortKey : effectiveStateSortOrder(wi.state, Bn);
        return Ur !== 0 ? Ur : fs(Vn) - fs(mt) || Vn.state.createdAt.localeCompare(mt.state.createdAt);
      }
      if (Bn === B && Nr !== B) return -1;
      if (Nr === B && Bn !== B) return 1;
      return Bn.localeCompare(Nr);
    }),
    F3 = 1 / 0,
    cB = Fkc,
    qZ = false;
  if (ob) {
    let mt = sb.filter(Ur => QP.get(Ur.id) === "done"),
      Vn = new Set(sb.map(Ur => QP.get(Ur.id))).size,
      Bn = sb.reduce((Ur, fs) => {
        let wi = QP.get(fs.id);
        return wi !== "done" && !Re.has(wi) ? Ur + 1 : Ur;
      }, 0),
      Nr = fleetVerticalBudget(ir, Bn + Math.max(0, Vn * 2 - 1));
    if (cB = Nr.doneCap, qZ = Nr.compactHeader, !Tt.has("done") && mt.length >= cB + Tkc) {
      let Ur = wi => effectiveStateSortOrder(wi.state, "done"),
        fs = cB;
      if (fs > 0) {
        let wi = Ur(mt[fs - 1]);
        while (fs < mt.length && wi - Ur(mt[fs]) < TTm) fs++;
      }
      if (mt.length - fs >= Tkc && Math.max(mt.findIndex(wi => wi.id === t), mt.findIndex(wi => wi.id === Zy)) < fs) F3 = fs;
    }
  }
  let uB = {
      blocked: On(hx, mt => deriveBand(mt.state, NC(mt)) === "blocked"),
      active: On(hx, mt => deriveBand(mt.state, NC(mt)) === "active"),
      completed: On(hx, mt => deriveBand(mt.state, NC(mt)) === "completed")
    },
    j3 = hx.find(mt => mt.id === t),
    TR = j3 && deriveBand(j3.state, NC(j3)) !== "completed",
    vR = uB.blocked + uB.active - (TR ? 1 : 0),
    cK = Dt().fleetViewPeakConcurrent ?? 0,
    LA = Math.max(cK, vR);
  jr.useEffect(() => {
    if (vR > cK) gn(mt => (mt.fleetViewPeakConcurrent ?? 0) >= vR ? mt : {
      ...mt,
      fleetViewPeakConcurrent: vR
    });
  }, [vR, cK]);
  let hie = LA >= PEAK_CONCURRENT_GOAL,
    QT = at("tengu_fleetview_onboarding_v2", false);
  jr.useEffect(() => {
    if (!QT || hie) return;
    let mt = new AbortController();
    return rkc(z, mt.signal).then(Vn => {
      if (!mt.signal.aborted) J(Vn);
    }).catch(() => {}), () => mt.abort();
  }, [z, QT, hie]);
  let LS = QT ? Z.filter((mt, Vn) => !ne.has(Vn)) : [],
    VZ = jr.useRef(LS);
  VZ.current = LS;
  let DS = jr.useRef(Z);
  DS.current = Z;
  let _V = sb.every(mt => mt.id === t),
    Sw = QT && ob && !Sn && _V && !sb[0]?.state.pinned,
    Cm = buildFleetRows(sb, QP, {
      byState: ob,
      onRemoteTab: Gn === "remote",
      launcherGroup: B,
      scopedFallbackOrigin: W,
      doneFoldAt: F3,
      emptyBucketHint: Sw
    }),
    Ef = Cm.rows;
  if (Cm.doneFoldHidden > 0) {
    if (Ef.push({
      kind: "fold",
      origin: W,
      group: "done",
      hidden: Cm.doneFoldHidden
    }), !_o.current) _o.current = true, G("tengu_fleetview_fold_shown", {
      done_count: Cm.doneCount,
      hidden_count: Cm.doneFoldHidden,
      k: cB,
      terminal_rows: ir
    });
  }
  let Zk = new Map();
  for (let mt of sb) {
    let Vn = QP.get(mt.id);
    Zk.set(Vn, (Zk.get(Vn) ?? 0) + 1);
  }
  if (Re.size > 0) Ef = Ef.filter(mt => mt.kind === "header" || !Re.has(mt.group));
  function Ew(mt) {
    return Ef.findIndex(Vn => Vn.kind === "job" && Vn.job.id === mt);
  }
  let Ob = Ef[1]?.kind === "job" && Ef[1].origin === N ? 1 : 0,
    yie = new Set(Ef.filter(mt => mt.kind === "header").map(mt => mt.group)).size > 1,
    ZT = jr.useRef(Ef);
  ZT.current = Ef;
  let Im = Ef[ie],
    ua = Im?.kind === "job" ? Im.job : void 0;
  Er.current = ua;
  let _ie = jr.useMemo(() => Oe.CLAUDE_CODE_DISABLE_TERMINAL_TITLE, []);
  S0e(_ie ? null : fleetTitle(On(hx, mt => deriveBand(mt.state, NC(mt)) === "blocked")));
  let uK = Mt.current ?? ua?.id ?? Im?.group;
  jr.useEffect(() => {
    if (Ri.current !== null && Ri.current.id === Mt.current) return;
    qa(null);
  }, [uK]);
  let dB = jr.useMemo(() => ua?.state.children ? Ikc(ua.state.children, x) : [], [ua, x]),
    G3 = Im?.kind === "job" && Im.job.state.backend !== "daemon" ? W : Im?.origin ?? W,
    pB = Im?.group ?? B,
    gO = ob ? W : G3;
  jr.useEffect(() => {
    K(mt => mt === gO ? mt : gO);
  }, [gO]), jr.useLayoutEffect(() => {
    if (Qt.current) {
      let Vn = Ef.findIndex(Bn => Bn.kind === "header" && Bn.group === Qt.current);
      if (Vn >= 0 && Vn !== ie) le(Vn);
      if (Vn < 0) Qt.current = null;
      return;
    }
    if (!Mt.current) return;
    let mt = Ew(Mt.current);
    if (mt < 0) {
      Mt.current = null;
      return;
    }
    if (mt !== ie) T(`[FV-poll] follow re-pin moved focus: was=${ie} now=${mt} followId=${Mt.current}`), le(mt);
  });
  let hO = ATm(sb, mt => dD.has(mt.id) ? P.get(mt.state.sessionId)?.nextAt : null, t, pn);
  jr.useEffect(() => {
    if (dl.length === 0 || !m) return;
    let mt = dl.filter(Bn => m.some(Nr => Nr.id === Bn.id));
    if (mt.length === 0) return;
    let Vn = new Set(mt.map(Bn => Bn.id));
    for (let Bn of mt) {
      let Nr = Bn.state.sessionId;
      fO.current.add(Nr), f.setTimeout(() => fO.current.delete(Nr), 30000);
    }
    if (nb(Bn => Bn.filter(Nr => !Vn.has(Nr.id))), Mt.current && Vn.has(Mt.current)) {
      let Bn = ZT.current.findIndex(Nr => Nr.kind === "job" && Nr.job.id === Mt.current);
      if (Bn >= 0) le(Bn);
    }
  }, [dl, m]);
  let fB = jr.useRef(true),
    I2 = jr.useRef(null),
    bie = dd === null;
  jr.useEffect(() => {
    if (fB.current) {
      fB.current = false;
      return;
    }
    if (dc.current) {
      dc.current = false;
      return;
    }
    if (To(null), rh(null), !bie) {
      if (I2.current) {
        if (Mt.current === I2.current) Mt.current = null, le(Ob);
        I2.current = null;
      }
      return;
    }
    if (Qt.current = null, Zy) {
      I2.current = Zy, Mt.current = Zy;
      let mt = Ew(Zy);
      if (mt >= 0) le(mt);
      return;
    }
    I2.current = null, Mt.current = null, le(Ob);
  }, [Sn]), jr.useEffect(() => {
    le(mt => _b(mt, 0, Math.max(0, Ef.length - 1)));
  }, [Ef.length]);
  let e0 = jr.useRef(null);
  jr.useEffect(() => {
    if (Zy) {
      e0.current = null;
      return;
    }
    if (!Pb) {
      let Ur = e0.current;
      if (e0.current = null, Ur) {
        Qt.current = null, Mt.current = Ur;
        let fs = ZT.current.findIndex(wi => wi.kind === "job" && wi.job.id === Ur);
        if (fs >= 0) le(fs);
      }
      return;
    }
    let mt = ZT.current[ie];
    if (mt?.kind === "job" && e0.current === null) e0.current = mt.job.id;
    let Vn = Ur => ZT.current.findIndex(fs => fs.kind === "header" && Ur(fs)),
      Bn = -1,
      Nr = null;
    if (ob) Nr = "working";else if (fi) {
      if (Bn = Vn(Ur => Ur.origin === fi && Ur.group !== "pinned"), Bn >= 0) Nr = ZT.current[Bn].group;
    } else if (mt?.kind === "job") {
      if (mt.group === "pinned") Nr = ZT.current.find(fs => fs.kind === "header" && fs.origin === mt.origin && fs.group !== "pinned")?.group ?? null;else Nr = mt.group;
    } else if (mt?.kind === "header") {
      if (mt.group !== "pinned") Nr = mt.group, Bn = ie;
    }
    if (Bn < 0) return;
    if (Mt.current = null, Qt.current = Nr, Bn !== ie) le(Bn);
  }, [Pb, ob, fi]);
  let I_ = (() => {
      if (!Pb || Zy) return null;
      if (ob) return "working";
      if (fi) return Ef.find(Bn => Bn.kind === "header" && Bn.origin === fi && Bn.group !== "pinned")?.group ?? null;
      let mt = Ef[ie];
      if (mt?.kind === "job") {
        if (mt.group === "pinned") return Ef.find(Bn => Bn.kind === "header" && Bn.origin === mt.origin && Bn.group !== "pinned")?.group ?? null;
        return mt.group;
      }
      if (mt?.kind === "header") return mt.group === "pinned" ? null : mt.group;
      return null;
    })(),
    Sie = ue && (sb.length === 0 || Im !== void 0 && Im.kind !== "job" || Im === void 0 && (Mt.current === null || Ew(Mt.current) < 0));
  jr.useEffect(() => {
    if (Sie) we(false);
  }, [Sie]), jr.useLayoutEffect(() => {
    if (!lr.current || ie === He) return;
    let Vn = ZT.current[ie]?.kind === "header" && ie > 0 ? -1 : 0;
    Pn.current?.scrollToElement(lr.current, Vn);
  }, [ie, He]);
  let vE = jr.useRef(0),
    zZ = jr.useRef(null);
  jr.useEffect(() => {
    if (vE.current >= 2 || m === null) return;
    let mt = !!t?.startsWith("remote-"),
      Vn = mt && _.some(Ur => Ur.id === t);
    if (mt && !v2 && !Vn) return;
    if (mt && Gn !== "remote" && Vn) {
      En("remote");
      return;
    }
    if (!mt && t && m === zZ.current) return;
    zZ.current = m, vE.current++;
    let Bn = () => {
      le(Ob);
      let Ur = ZT.current[Ob];
      if (Ur?.kind === "job") Mt.current = Ur.job.id, Qt.current = null;else if (Ur?.kind === "header") Mt.current = null, Qt.current = Ur.group;
    };
    if (!t) {
      vE.current = 2, Bn();
      return;
    }
    let Nr = ZT.current.findIndex(Ur => Ur.kind === "job" && Ur.job.id === t);
    if (Nr >= 0) vE.current = 2, le(Nr), Mt.current = t;else if (vE.current >= 2) Bn();
  }, [m, _, v2, Gn, t, Ob]);
  let hve = mt => {
      let Vn = mt.state.sessionId;
      if (!gtn.test(Vn)) return;
      Mt.current = mt.id, gx.current.set(mt.id, Date.now() + ITm), S(Bn => Bn.map(Nr => Nr.id === mt.id && !Vh(Nr.state) ? {
        ...Nr,
        state: {
          ...Nr.state,
          state: "stopped",
          tempo: "idle",
          needs: void 0
        },
        activity: "stopped"
      } : Nr)), Promise.resolve().then(() => (gP(), i9t)).then(({
        interruptRemoteSession: Bn
      }) => Bn(Vn)).then(Bn => {
        if (Bn) {
          xe("fleet_view_stop_session"), G("tengu_bg_agent_action", {
            action: We("stop"),
            source: We("fleet"),
            jobSessionId: Hr(Vn)
          });
          return;
        }
        throw Error("interrupt rejected");
      }).catch(Bn => {
        Le("fleet_view_stop_session", "interrupt_failed"), T(`[fleet:remote] interrupt ${Vn} failed: ${be(Bn)}`), qa(null), gx.current.delete(mt.id), To("Couldn't stop \u2014 check your connection and try again"), Ma();
      });
    },
    pXe = mt => {
      let Vn = mt.state.sessionId;
      if (!gtn.test(Vn)) {
        To("Can't delete \u2014 session is still being created");
        return;
      }
      e_.current.add(mt.id), S(Bn => Bn.filter(Nr => Nr.id !== mt.id)), Promise.resolve().then(() => (gP(), i9t)).then(({
        archiveRemoteSession: Bn
      }) => Bn(Vn)).then(Bn => {
        if (Bn) {
          xe("fleet_view_archive_session"), G("tengu_bg_agent_action", {
            action: We("archive"),
            source: We("fleet"),
            jobSessionId: Hr(Vn)
          });
          return;
        }
        throw Error("archive rejected");
      }).catch(Bn => {
        Le("fleet_view_archive_session", "archive_failed"), T(`[fleet:remote] archive ${Vn} failed: ${be(Bn)}`), e_.current.delete(mt.id), To("Couldn't delete \u2014 check your connection and try again"), Ma();
      });
    },
    wR = (mt, Vn, Bn = false) => {
      if (!Vn) return;
      if (Vn.state.backend !== "daemon") {
        To("Can't stop or delete \u2014 this session is running in another terminal");
        return;
      }
      let Nr = deriveBand(Vn.state),
        Ur = Qm.find(Ll => Ll.key === mt && Ll.bands.includes(Nr));
      if (!Ur) return;
      let fs = (Ll, fc) => {
        if (fc instanceof Kpr) T(`[FleetView] action '${Ll}' unconfirmed: ${be(fc)}`, {
          level: "warn"
        });else if (Vo(fc)) T(`[FleetView] action '${Ll}' fs failure (${fc.code}): ${be(fc)}`, {
          level: "error"
        });else ke(fc);
        To(`Couldn't ${Ll} \u2014 ${be(fc)}`);
      };
      if (mt === "x" && !Bn && Ri.current?.id !== Vn.id) {
        let Ll = Qm.find(fc => fc.label === "stop");
        if (qa(Vn.id, Ur.label === "stop", QP.get(Vn.id), effectiveStateSortOrder(Vn.state, QP.get(Vn.id))), Ll) Promise.resolve(Ll.run(Vn)).catch(fc => {
          qa(null), fs(Ll.label, fc);
        });
        return;
      }
      qa(null);
      let wi = mt === "x" ? Qm.find(Ll => Ll.label === "delete") ?? Ur : Ur;
      Promise.resolve(wi.run(Vn)).then(Ll => {
        if (Ll) To(Ll);
      }, Ll => fs(wi.label, Ll));
    },
    yO = mt => {
      if (!mt || xt !== null) return;
      if (dl.some(Nr => Nr.id === mt.id)) return;
      if (mt.state.backend === "peer") {
        To("Can't attach \u2014 this session is running in another terminal"), xe("fleet_view_open");
        return;
      }
      if (mt.state.backend === "remote") {
        if (mt.id.startsWith("remote-pending-")) {
          To("Still starting \u2014 try again in a moment"), xe("fleet_view_open");
          return;
        }
        e({
          type: "open",
          job: mt,
          query: ay.current === null ? void 0 : Jn.current,
          collapsed: [...it.current],
          groupMode: Te.current,
          sessionModel: X.current,
          jobs: h.current,
          loopKicks: L.current,
          statuses: cD.current,
          statusesTs: Yu.current,
          prStatuses: k.current,
          warming: en.current,
          respawnResult: {
            ok: true,
            short: mt.id,
            state: mt.state
          }
        });
        return;
      }
      vt(mt.id), To(null);
      let Vn = ++jt.current,
        Bn = en.current.get(mt.id);
      if (!Bn) {
        let Nr = Date.now() - Yu.current < 1500 && peerStatusFor(cD.current, mt) !== void 0 ? true : void 0;
        Bn = Stn(mt.id, {
          knownState: mt.state,
          knownAlive: Nr
        }), en.current.set(mt.id, Bn), nn(new Set(en.current.keys())), Bn.then(() => {
          if (en.current.get(mt.id) === Bn) en.current.delete(mt.id), nn(new Set(en.current.keys()));
        });
      }
      Bn.then(Nr => {
        if (jt.current !== Vn) return;
        if (vt(null), Nr.ok || Nr.alive) e({
          type: "open",
          job: mt,
          query: ay.current === null ? void 0 : Jn.current,
          collapsed: [...it.current],
          groupMode: Te.current,
          sessionModel: X.current,
          jobs: h.current,
          loopKicks: L.current,
          statuses: cD.current,
          statusesTs: Yu.current,
          prStatuses: k.current,
          warming: en.current,
          respawnResult: Nr
        });else Le("fleet_view_open", "respawn_failed"), To(Nr.error);
      });
    },
    KZ = jr.useRef(false),
    Aw = p !== void 0 && (!KZ.current || xt !== null);
  jr.useEffect(() => {
    if (KZ.current || !p || m === null) return;
    KZ.current = true, yO(m.find(mt => mt.id === p));
  }, [p, m]);
  let x2 = (mt, Vn) => {
      let Bn = Ef.length;
      if (Bn === 0) return 0;
      if (Pb && (ob || fi)) return mt;
      let Nr = Pb ? fs => fs?.kind !== "header" || fs.group === "pinned" : ue ? fs => fs?.kind !== "job" : null,
        Ur = (mt + Vn + Bn) % Bn;
      if (Nr) while (Ur !== mt && Nr(Ef[Ur])) Ur = (Ur + Vn + Bn) % Bn;
      return Ur;
    },
    W3 = jr.useRef(new Map()),
    bV = jr.useRef(new Map()),
    q3 = jr.useRef(null),
    SV = jr.useRef([]),
    EV = jr.useCallback(() => {
      let mt = Array.from(W3.current),
        Vn = Array.from(bV.current);
      if (W3.current.clear(), bV.current.clear(), mt.length === 0 && Vn.length === 0) return Promise.resolve();
      return sKi(() => Promise.all([...mt.map(([Bn, Nr]) => rKi(_c(Bn), Nr)), ...Vn.map(([Bn, Nr]) => oKi(_c(Bn), Nr))])).then(() => {
        xe("fleet_view_reorder_job");
      }).catch(Bn => {
        ke(Bn), To(`Couldn't save order \u2014 ${be(Bn)}`), Le("fleet_view_reorder_job", "write_sort_order_failed");
      });
    }, []);
  jr.useEffect(() => () => {
    q3.current?.(), EV();
  }, [EV]);
  let age = mt => {
      let Vn = Ef[ie],
        Bn = Ef[ie + mt];
      if (Vn?.kind !== "job" || Bn?.kind !== "job" || Vn.group !== Bn.group) return;
      let Nr = Vn.job,
        Ur = Bn.job;
      if (dl.some(Xu => Xu.id === Nr.id || Xu.id === Ur.id)) return;
      if (Nr.state.backend !== "daemon" || Ur.state.backend !== "daemon") return;
      To(null);
      let fs = ob && Vn.group !== "pinned",
        wi = fs ? Xu => effectiveStateSortOrder(Xu, Vn.group) : effectiveSortOrder,
        Ll = wi(Nr.state),
        fc = wi(Ur.state),
        rl = new Map();
      if (Ll === fc) {
        let Xu = new Set(dl.map(bp => bp.id)),
          Xl = 0;
        for (let bp of Ef) if (bp.kind === "job" && bp.group === Vn.group && !Xu.has(bp.job.id)) rl.set(bp.job.id, Xl++);
        let Uc = rl.get(Nr.id);
        rl.set(Nr.id, rl.get(Ur.id)), rl.set(Ur.id, Uc);
      } else rl.set(Nr.id, fc), rl.set(Ur.id, Ll);
      Mt.current = Nr.id, Fd.current = ++Mc.current;
      let Uf = fs ? "stateSortOrder" : "sortOrder";
      g(Xu => Xu ? sortJobs(Xu.map(Xl => {
        let Uc = rl.get(Xl.id);
        return Uc === void 0 ? Xl : {
          ...Xl,
          state: {
            ...Xl.state,
            [Uf]: Uc
          }
        };
      })) : Xu);
      let Xc = fs ? bV : W3;
      for (let [Xu, Xl] of rl) Xc.current.set(Xu, Xl), SV.current.push(Ar(Xu));
      q3.current?.(), q3.current = f.setTimeout(() => {
        q3.current = null, Fd.current = ++Mc.current;
        let Xu = SV.current;
        SV.current = [], EV().finally(() => {
          for (let Xl of Xu) Xl();
          cm();
        });
      }, 100);
    },
    YZ = mt => {
      if (mt.key !== " " && Ut.current) Ut.current(), Ut.current = null;
      let Vn = () => {
        mt.preventDefault(), mt.stopImmediatePropagation();
      };
      if (gt !== null) {
        if (Vn(), mt.ctrl && mt.key === "c") {
          kr();
          return;
        }
        if (mt.key === "up" || mt.key === "down") return;
        hr(mt);
        return;
      }
      if (xt !== null) {
        if (Vn(), mt.ctrl && mt.key === "c" || mt.key === "escape") {
          jt.current++, en.current.delete(xt), nn(new Set(en.current.keys())), vt(null);
          return;
        }
        if (!mt.shift && (mt.key === "up" || mt.key === "down" || mt.ctrl && (mt.key === "p" || mt.key === "n"))) {
          if (Ki.length > 0 || (mt.key === "up" || mt.key === "down") && !ue && Jn.current.includes(`
`) || x2(ie, mt.key === "down" || mt.key === "n" ? 1 : -1) === ie) return;
          jt.current++, vt(null);
        } else return;
      }
      if (mt.ctrl && mt.key === "c") {
        if (Vn(), Ze || Me) {
          Be(false), Ue(false);
          return;
        }
        if (Jn.current) Qn("");
        if (rs.current === "bash") js("prompt");
        Je();
        return;
      }
      if (mt.key === "escape") {
        if (Vn(), ue) we(false);else if (Ze) Be(false);else if (Me) Ue(false);else if (ly) Cd(false);else if (Jn.current) Qn("");else if (rs.current === "bash") js("prompt");else if (Ri.current) qa(null);else Ke();
        return;
      }
      if (Ze && mt.key !== "?" && mt.key !== "up" && mt.key !== "down" && !(mt.ctrl && (mt.key === "p" || mt.key === "n"))) Be(false);
      if (mt.shift && (mt.key === "up" || mt.key === "down") && Ki.length === 0 && !ue) {
        Vn(), age(mt.key === "up" ? -1 : 1);
        return;
      }
      if (mt.ctrl && mt.key === "r") {
        if (Vn(), !ua || dl.some(Bn => Bn.id === ua.id)) return;
        if (ua.state.backend !== "daemon" && !ua.state.sock) return;
        Ln.current = ua.id, Hn.current = ua.state.backend !== "daemon" ? ua.state.sock ?? null : null, zt(ua.state.name ?? ""), st(ua.id);
        return;
      }
      if (mt.ctrl && mt.key === "s") {
        Vn(), Mt.current = ua?.id ?? null, Qt.current = null, qa(null);
        let Bn = Te.current === "directory" ? "state" : "directory";
        fe(Bn), gn(Nr => Nr.fleetViewGroupMode === Bn ? Nr : {
          ...Nr,
          fleetViewGroupMode: Bn
        });
        return;
      }
      if (mt.ctrl && mt.key === "g" && !ue) {
        Vn();
        let Bn = K$(Jn.current);
        if (Bn.content !== null && Bn.content !== Jn.current) Qn(Bn.content);
        if (Bn.error) To(Bn.error);
        return;
      }
      if (mt.ctrl && mt.key === "t") {
        if (Vn(), !ua || dl.some(fs => fs.id === ua.id)) return;
        if (ua.state.backend !== "daemon") {
          To(ua.state.backend === "remote" ? "Can't pin a cloud session" : "Can't pin a session that's running in another terminal"), xe("fleet_view_pin_toggle");
          return;
        }
        let Bn = ua.id,
          Nr = !ua.state.pinned;
        if (Mt.current = Bn, Nr) Ne(fs => {
          if (!fs.has("pinned")) return fs;
          let wi = new Set(fs);
          return wi.delete("pinned"), wi;
        });
        Fd.current = ++Mc.current, g(fs => fs?.map(wi => wi.id === Bn ? {
          ...wi,
          state: {
            ...wi.state,
            pinned: Nr
          }
        } : wi) ?? fs);
        let Ur = Ar(Bn);
        iKi(Bn, Nr).then(() => {
          xe("fleet_view_pin_toggle");
        }).catch(fs => {
          ke(fs), To(`Couldn't ${Nr ? "pin" : "unpin"} \u2014 ${be(fs)}`), Le("fleet_view_pin_toggle", "pin_write_failed"), cm();
        }).finally(Ur);
        return;
      }
      if (mt.key === "up" || mt.ctrl && mt.key === "p") {
        if (Vn(), Ki.length > 0) {
          rb(null), oh(Bn => Math.max(0, Bn - 1));
          return;
        }
        if (mt.key === "up" && !ue && Jn.current.includes(`
`)) {
          cs(mt);
          return;
        }
        To(null), ye(null), le(Bn => {
          let Nr = x2(Bn, -1),
            Ur = Ef[Nr];
          if (Ur?.kind === "job") Mt.current = Ur.job.id, Qt.current = null;else if (Ur?.kind === "header") Mt.current = null, Qt.current = Ur.group;else Mt.current = null, Qt.current = null;
          return Nr;
        });
        return;
      }
      if (mt.key === "down" || mt.ctrl && mt.key === "n") {
        if (Vn(), Ki.length > 0) {
          rb(null), oh(Bn => Math.min(Ki.length - 1, Bn + 1));
          return;
        }
        if (mt.key === "down" && !ue && Jn.current.includes(`
`)) {
          cs(mt);
          return;
        }
        To(null), ye(null), le(Bn => {
          let Nr = x2(Bn, 1),
            Ur = Ef[Nr];
          if (Ur?.kind === "job") Mt.current = Ur.job.id, Qt.current = null;else if (Ur?.kind === "header") Mt.current = null, Qt.current = Ur.group;else Mt.current = null, Qt.current = null;
          return Nr;
        });
        return;
      }
      if (ue && mt.ctrl && mt.key === "x") {
        if (Vn(), ua && dl.some(Bn => Bn.id === ua.id)) return;
        wR("x", ua);
        return;
      }
      if (ue) return;
      if (mt.key === "tab") {
        Vn();
        let Bn = VZ.current;
        if ((_V || !hie && vR > 0) && Bn.length > 0 && rs.current === "prompt" && (!Jn.current || Bn.includes(Jn.current))) {
          let Nr = re.current % Bn.length;
          re.current = Nr + 1;
          let Ur = Bn[Nr];
          ee.current = {
            text: Ur,
            slot: DS.current.indexOf(Ur)
          }, Qn(Ur), fo(Ur.length);
          return;
        }
        if (!Jn.current && rs.current === "prompt" && nc.length > 0) Cd(Nr => !Nr);else if (Ki.length > 0) Yc(Yl());
        return;
      }
      if (mt.key === "right" && !mt.shift && !Jn.current && rs.current === "prompt" && !ue) {
        Vn(), yO(ua);
        return;
      }
      if ((mt.meta || mt.superKey) && mt.key >= "1" && mt.key <= "9") {
        Vn();
        let Bn = Number(mt.key),
          Nr = Ef.find(Ur => Ur.kind === "job" && Ur.origin === G3 && --Bn === 0);
        if (Nr?.kind === "job") yO(Nr.job);
        return;
      }
      if (mt.key === "return") {
        if (!mt.shift && (mt.meta || Jn.current[gr - 1] === "\\")) {
          cs(mt);
          return;
        }
        Vn();
        let Bn = rs.current === "bash" ? "!" : Jn.current.trim().toLowerCase(),
          Nr = () => {
            dc.current = true, Qn(""), Jdr($, {
              q: "",
              collapsed: [...it.current]
            });
          };
        if (nir.includes(Bn)) {
          Nr(), Ke();
          return;
        }
        if (Bn.startsWith("/")) {
          let [Ll = "", fc = ""] = Jn.current.trim().slice(1).split(/\s+(.*)/, 2),
            rl = fA(Ll.toLowerCase(), jWo());
          if (rl && Ik(rl) && FHt(rl)) {
            if (rl.fleetHostCall) {
              Nr(), rl.fleetHostCall({
                exit: Ke,
                relaunch: () => Jm("manual"),
                setError: To,
                setInfo: rh
              }, fc).catch(Uf => {
                ke(Uf), To(be(Uf));
              });
              return;
            }
            if (rl.type !== "prompt" && rl.name !== "model") {
              let Uf = Ll.toLowerCase(),
                Xc = Yl();
              if (!Qp.some(Xl => Xl.kind !== "command" && (Xl.name === Uf || Xl.aliases?.includes(Uf))) && (!Xc || Xc.name === rl.name)) {
                Nr(), rh(`/${rl.name} isn't available in agent view \u2014 attach to a session to run it`);
                return;
              }
            }
          }
        }
        if (Bn === "/model" || Bn.startsWith("/model ")) {
          let Ll = Yl();
          if (!Wn && Ll && Ll.kind !== "model") ;else {
            let fc = Jn.current.trim().slice(6).trim(),
              rl = fc.toLowerCase(),
              Uf = Se.map(bp => bp.name),
              Xc = Uf.find(bp => bp.toLowerCase() === rl),
              Xu = Uf.filter(bp => bp.toLowerCase().startsWith(rl)),
              Xl = Wn ? Ll?.name : void 0,
              Uc = Xc ?? (Xu.length === 1 ? Xu[0] : void 0) ?? Xl;
            if (Uc === "default") Nr(), us(void 0), rh("Model reset to default for this session");else if (Uc) Nr(), us(Uc), rh(`Model set to ${Uc} (session-scoped, not persisted)`);else if (!fc) rh("Usage: /model <name> \u2014 session-scoped, not persisted");else rh(`Unknown model '${fc}' \u2014 type /model  to see options`);
            return;
          }
        }
        if (Ki.length > 0) {
          Yc(Yl()), Cd(false);
          return;
        }
        let Ur = Jn.current,
          fs = rs.current === "bash",
          wi = Ur === Sn && !fs ? dd : parseDispatch(fs ? `!${Ur}` : Ur, nc, Ee, sd);
        if (wi?.intent || wi?.routine || wi?.matched) {
          let Ll = sX(wi.intent, Fi.current);
          if (!wi.routine && !wi.matched && Ll.trim().length < _Tm) {
            To(null), rh("Too short \u2014 describe the task");
            return;
          }
          let fc = mt.shift,
            rl = wi.cwd ?? z,
            Uf = V.get(rl);
          if (wi.matched && !wi.exec && !(wi.template.name.includes(":") && rl !== z)) {
            if (Uf && !Uf.some(cy => cy.name === wi.template.name || cy.name.endsWith(`:${wi.template.name}`))) {
              To(`@${wi.template.name} isn't available in ${Gme.basename(rl)}`);
              return;
            }
          }
          let Xc = uWo(),
            Xl = !Object.values(Fi.current).some(cy => cy.type === "image") && Ll.length <= LGe && !Ll.includes(`
`),
            Uc = !!Xc && Xc.ready && !wi.matched && !wi.routine && !ji && rl === Xc.cwd && Xl,
            bp = Uc ? Xc.sessionId : Dkc.randomUUID(),
            mc = bp.slice(0, 8);
          Mt.current = mc, dc.current = true;
          let PS = wi.matched && !wi.exec ? wi.template.name : null,
            Nb = wi.matched ? wi.template : DHt(u, Uf),
            ZZ = Fi.current,
            TV = wi.exec ? sX(wi.exec, ZZ) : void 0,
            gB = {
              id: mc,
              state: eue({
                template: TV ? {
                  name: "exec",
                  description: ""
                } : wi.routine ? {
                  name: wi.routine,
                  description: ""
                } : Nb,
                intent: TV ?? Ll,
                sessionId: bp,
                cwd: rl,
                originCwd: rl
              }),
              activity: "flowing"
            };
          nb(cy => [...cy, gB]);
          let vV = Ur,
            pK = rs.current,
            wV = e0.current,
            yve = Qt.current;
          e0.current = null, Qt.current = null;
          let fBe = VZ.current,
            k2 = ee.current;
          ee.current = null;
          let cge = k2?.text === Ll ? k2.slot : DS.current.indexOf(Ll);
          if (cge !== -1) oe(cy => {
            if (cy.has(cge)) return cy;
            return G("tengu_fleet_suggestion_dispatch", {
              from_fallback: MNe.includes(Ll),
              remaining_after: fBe.length - 1,
              peak_before: LA
            }), re.current = 0, new Set(cy).add(cge);
          });
          Qn(""), js("prompt"), Jdr($, {
            q: "",
            collapsed: [...it.current]
          }), Fi.current = {};
          let wie = cy => {
            nb(n0 => {
              let GH = n0.filter(z3 => z3.id !== mc);
              if (!Jn.current && GH.length === 0) Fi.current = ZZ, e0.current = wV, Qt.current = yve, js(pK), et(vV);
              return GH;
            }), To(cy);
          };
          (async () => {
            let cy = TV || wi.matched || Uf || !u?.agent ? Nb : DHt(u, await IQt(rl).catch(() => []));
            return TV ? Mrc(TV, bp, rl) : Uc ? Orc(Ll, cy) : cWo(Ll, ZZ, mc).then(n0 => Car(cy, n0, bp, rl, wi.routine, ji ? {
              ...u,
              model: ji
            } : u, n0 !== Ll ? Ll : void 0));
          })().then(cy => {
            if (Uc) Iar(W, false, u, V.get(W));
            if (!cy.ok) return wie(cy.error);
            if (Uc && cy.jobId !== mc) Mt.current = cy.jobId, gB = {
              ...gB,
              id: cy.jobId,
              state: {
                ...gB.state,
                sessionId: cy.sessionId
              }
            }, nb(n0 => n0.map(GH => GH.id === mc ? gB : GH));
            if (Uc) {
              let n0 = cy.sessionId,
                GH = {
                  kickedAt: Date.now(),
                  jobId: cy.jobId
                };
              uD.current.set(n0, GH), f.setTimeout(() => {
                if (uD.current.get(n0) === GH) uD.current.delete(n0), RS(z3 => new Map(z3));
              }, 30000);
            }
            if (PS) {
              let n0 = false;
              if (gn(GH => {
                let z3 = Date.now(),
                  _ve = GH.agentLastUsed?.[PS];
                if (_ve !== void 0 && z3 - _ve < 60000) return GH;
                return n0 = true, {
                  ...GH,
                  agentLastUsed: {
                    ...(GH.agentLastUsed ?? {}),
                    [PS]: z3
                  }
                };
              }), n0) TE();
            }
            if (fc) vt(gB.id), e({
              type: "open",
              job: gB,
              collapsed: [...it.current],
              groupMode: Mr,
              sessionModel: X.current,
              jobs: h.current,
              loopKicks: L.current,
              statuses: cD.current,
              statusesTs: Yu.current,
              prStatuses: k.current,
              warming: en.current,
              freshDispatch: true
            });else if (cm(), !Uc) Jk.current?.(), Jk.current = Xzi(mc, () => void cm());
          }, cy => {
            if (Uc) Iar(W, false, u, V.get(W));
            wie(be(cy));
          });
        } else if (!wi?.cwd && wi?.exec === void 0) if (Im?.kind === "fold") Qt.current = null, Mt.current = null, un(Ll => new Set(Ll).add(Im.group)), G("tengu_fleetview_fold_expand", {
          hidden_count: Im.hidden,
          ms_since_mount: Date.now() - Rr.current
        });else if (Im?.kind === "header") {
          if (Sw) return;
          Qt.current = Im.group, Mt.current = null, ze(Im.group);
        } else yO(ua);
        return;
      }
      if (mt.ctrl && mt.key === "x") {
        if (Vn(), Ki.length > 0) return;
        if (!Pb && Im?.kind === "header" && Ot.length > 0) {
          if (Qt.current = Im.group, Mt.current = null, Ri.current?.id !== Im.group) {
            qa(Im.group);
            return;
          }
          qa(null);
          for (let Bn of Ot) {
            if (dl.some(Nr => Nr.id === Bn.id)) continue;
            wR("x", Bn, true);
          }
          return;
        }
        if (ua && dl.some(Bn => Bn.id === ua.id)) return;
        wR("x", ua);
        return;
      }
      if (mt.ctrl && mt.key, mt.key === "?" && Jn.current === "" && rs.current === "prompt") {
        Vn(), Be(Bn => !Bn), G("tengu_bg_agent_action", {
          action: We("help_toggled")
        });
        return;
      }
      if (n0c(mt)) {
        Vn(), r0c(Bn => nr(Bn.base64, Bn.mediaType, void 0, Bn.dimensions), rh);
        return;
      }
      if (RQt() && AUt(mt.key) && !Jn.current && rs.current === "prompt") {
        Vn(), js("bash");
        return;
      }
      if (mt.name === "backspace" && !Jn.current && rs.current === "bash") {
        Vn(), js("prompt");
        return;
      }
      cs(mt);
    },
    {
      handleKeyDown: XZ,
      handlePaste: Eie
    } = kUt({
      handleKeyDown: YZ,
      onPaste: mt => {
        let Vn = mt.replace(/\r\n|\r/g, `
`),
          Bn = L0e(Vn);
        if (Vn.length > LGe || Bn > 2) {
          let Nr = xn.current++;
          Fi.current[Nr] = {
            id: Nr,
            type: "text",
            content: Vn
          }, Gs(new J_e(Kat(Nr, Bn)));
          return;
        }
        Gs(new J_e(Vn));
      },
      onImagePaste: nr
    }),
    Aie = mt => {
      if (gt !== null) {
        Tr(mt);
        return;
      }
      if (Ze) Be(false);
      Eie(mt);
    };
  if (m === null || Aw) return ur.jsx(U, {
    tabIndex: 0,
    autoFocus: true,
    onKeyDownCapture: WZ,
    onKeyDown: cs,
    onPaste: Aie
  });
  let AV = Ki.length > 0 ? ur.jsx(U, {
      paddingLeft: 2,
      marginBottom: 1,
      children: ur.jsx(jGe, {
        suggestions: Ki.map(mt => ({
          id: `${mt.kind}:${mt.name}`,
          displayText: Wn ? mt.name : `${xkc[mt.kind]}${mt.name}`,
          description: `${KTm[mt.kind]} \xB7 ${mt.description}`
        })),
        selectedSuggestion: Math.min(Ji, Ki.length - 1),
        maxColumnWidth: 35,
        noPad: true,
        hoveredId: Sg,
        onHoverChange: rb,
        onSelect: mt => {
          let Vn = Ki[mt];
          if (Vn) Yc(Vn), Cd(false);
        }
      })
    }) : null,
    dK = LS.length > 0 ? ur.jsxs(U, {
      flexDirection: "column",
      children: [ur.jsx(w, {
        dimColor: true,
        children: "Some ideas to start with \u2014 press tab to try one, or write your own:"
      }), LS.map(mt => ur.jsxs(w, {
        dimColor: true,
        children: ["\xB7 ", mt]
      }, mt))]
    }) : null,
    Hie = {
      0: "A different way to work with Claude: hand off a bigger task than you would chat through, and Claude organizes it in the sections above so you know when it needs you.",
      1: "That one's running in its own worktree, isolated from your checkout. You can hand off another at the same time \u2014 they won't step on each other.",
      2: "Each one surfaces here when it needs you. Hand off another if there is more on your list \u2014 the sections above keep track so you don\u2019t have to."
    },
    Tie = sb.some(mt => mt.id === t),
    lge = QT ? ur.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [ur.jsx(w, {
        dimColor: true,
        children: Hie[0]
      }), dK]
    }) : ur.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [ur.jsx(w, {
        dimColor: true,
        children: Tie ? "Type a task to start another session. Each appears as a row \u2014 open any to see its work. Sessions keep running if you close the terminal." : "Type a task to start a Claude session. It appears as a row above \u2014 open it to see its work. Sessions keep running if you close the terminal."
      }), ur.jsx(w, {
        dimColor: true,
        children: 'Try: paste a PR or issue URL \xB7 "investigate why test/auth.test.ts is flaky" \xB7 "address the review comments on #1234"'
      })]
    }),
    JZ = QT ? !hie && !Sw && vR > 0 && !Sn ? ur.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [ur.jsx(w, {
        dimColor: true,
        children: Hie[Math.min(vR, 2)]
      }), dK]
    }) : null : n && Tie && sb.length === 2 && !Sn ? ur.jsx(w, {
      dimColor: true,
      children: "Each row is its own Claude session. Open one to see its work. Sessions keep running if you close the terminal."
    }) : null,
    mB = !kS && dd?.cwd !== void 0,
    HV = new Set([...Cs, ...sd.map(mt => mt.name.toLowerCase()), ...Ya.map(mt => mt.toLowerCase())]),
    V3 = Ch ? [] : VTm(Sn, HV),
    vie = Ch ? [] : dd?.matched && mx === dd.template.name.toLowerCase() ? [[0, mx.length], ...V3] : YT ? [[0, mx.length], ...V3] : [...qTm(Sn), ...V3],
    t0 = !!ua && dl.some(mt => mt.id === ua.id),
    QZ = On([...$b, ..._], mt => {
      let Vn = stateBucket(mt, k.current, NC(mt));
      return Vn === "blocked" || Vn === "working";
    }),
    Bf = kS ? "create" : ua && needsRespawn(ua.state) ? "resume" : "open",
    Ot = Im?.kind === "header" ? sb.filter(mt => QP.get(mt.id) === Im.group) : [],
    {
      version: Mn,
      cwd: Eo
    } = fAt(),
    wa = ji ? `${KY(ji)} (session)` : KY(u?.model ?? As()),
    Rp = h1e(!!Eo && oi !== N && oi !== $ ? fM(oi) : Eo, Math.max(pn - 11 - (wa ? rn(wa) + 3 : 0), 10));
  return ur.jsxs(U, {
    ref: eo,
    flexDirection: "column",
    flexGrow: 1,
    tabIndex: 0,
    autoFocus: true,
    onKeyDownCapture: mt => {
      WZ(mt), to(mt);
    },
    onKeyDown: XZ,
    onPaste: Aie,
    onWheel: mt => {
      if (ue) return;
      mt.preventDefault(), Pn.current?.scrollBy(mt.deltaY > 0 ? 3 : -3);
    },
    children: [ur.jsxs(Rq, {
      ref: Pn,
      flexGrow: 1,
      flexDirection: "column",
      paddingTop: 1,
      stickyScroll: true,
      children: [ur.jsxs(U, {
        gap: 2,
        marginBottom: 1,
        children: [!qZ && pn >= 70 && ur.jsx(rQ, {}), ur.jsxs(U, {
          flexDirection: "column",
          children: [!qZ && ur.jsxs(ur.Fragment, {
            children: [ur.jsxs(w, {
              children: [ur.jsx(w, {
                bold: true,
                children: "Claude Code"
              }), " ", ur.jsxs(w, {
                dimColor: true,
                children: ["v", Mn]
              })]
            }), ur.jsx(w, {
              dimColor: true,
              children: [wa, Rp].filter(Boolean).join(" \xB7 ")
            })]
          }), ur.jsx(w, {
            dimColor: true,
            children: ur.jsxs(Tn, {
              children: [`${uB.blocked} awaiting input`, `${uB.active} working`, `${uB.completed} completed`, QT && !hie && LA > 0 ? `best ${LA} at once` : null]
            })
          })]
        })]
      }), Ef.map((mt, Vn) => {
        let Bn = Vn === ie,
          Nr = Sw && mt.kind === "header",
          Ur = mt.kind === "header" ? Pb ? mt.group === I_ : Bn && !Nr : !Pb && Bn,
          fs = !Pb && Bn && Vn !== He && !Nr ? "userMessageBackground" : void 0,
          wi = fs && "text",
          Ll = () => {
            if (Vn === ie || ue && mt.kind !== "job") return;
            if (mt.kind === "job") Mt.current = mt.job.id, Qt.current = null;else if (mt.kind === "header") Mt.current = null, Qt.current = mt.group;else Mt.current = null, Qt.current = null;
            To(null), ye(Vn), le(Vn);
          };
        if (mt.kind === "header") {
          let rl = !Pb && yie && mt.group === pB,
            Uf = Zk.get(mt.group) ?? 0,
            Xc = Re.has(mt.group);
          return ur.jsxs(U, {
            ref: Bn ? lr : void 0,
            marginTop: Vn > 0 ? 1 : 0,
            flexDirection: "column",
            backgroundColor: fs,
            onMouseEnter: Sn || ue || Sw ? void 0 : Ll,
            onClick: Sw ? void 0 : () => {
              Ll(), Qt.current = mt.group, Mt.current = null, ze(mt.group);
            },
            children: [ur.jsxs(w, {
              bold: rl || Ur,
              color: wi,
              dimColor: !Ur,
              children: [mt.group === "pinned" ? "Pinned" : ob ? Hkc[mt.group] : h1e(repoGroupLabel(mt.group), Math.max(pn - 10, 10)), Xc && ur.jsxs(ur.Fragment, {
                children: [" ", ur.jsx(w, {
                  dimColor: true,
                  children: Uf
                })]
              })]
            }), Sw && ur.jsx(U, {
              paddingLeft: 1,
              children: ur.jsx(w, {
                dimColor: true,
                children: HTm[mt.group]
              })
            })]
          }, `h:${mt.group}`);
        }
        if (mt.kind === "fold") return ur.jsx(U, {
          ref: Bn ? lr : void 0,
          paddingLeft: Xo,
          backgroundColor: fs,
          onMouseEnter: Sn || ue ? void 0 : Ll,
          onClick: () => {
            Ll(), un(rl => new Set(rl).add(mt.group)), G("tengu_fleetview_fold_expand", {
              hidden_count: mt.hidden,
              ms_since_mount: Date.now() - Rr.current,
              via_click: true
            });
          },
          children: ur.jsxs(w, {
            color: wi,
            dimColor: !Ur,
            children: ["\u2026 ", mt.hidden, " more"]
          })
        }, `f:${mt.group}`);
        let fc = mt.job;
        return ur.jsx(U, {
          ref: Bn ? lr : void 0,
          width: "100%",
          paddingLeft: Xo,
          backgroundColor: fs,
          onMouseEnter: Sn || ue ? void 0 : Ll,
          onClick: rl => {
            if (rl.hyperlinkUrl) return rl.allowDefault();
            Ll(), yO(fc);
          },
          children: ur.jsx(ZTm, {
            job: fc,
            isFocused: Bn,
            focusFg: wi,
            isOrigin: fc.id === t,
            logTail: v[fc.id],
            cols: hO,
            status: NC(fc),
            loopKickCount: dD.has(fc.id) ? P.get(fc.state.sessionId)?.count : void 0,
            age: formatJobAge(fc, dD.has(fc.id) ? P.get(fc.state.sessionId)?.nextAt : void 0),
            childRows: fc.state.children ? Ikc(fc.state.children, x) : [],
            renaming: gt === fc.id ? {
              draft: qe,
              cursor: cn
            } : void 0,
            deleteArmed: Yr && (Yr.id === fc.id || Yr.id === mt.group) ? {
              justKilled: Yr.justKilled
            } : void 0,
            attaching: xt === fc.id ? "armed" : Dn.has(fc.id) ? "warming" : false
          })
        }, fc.id);
      }), sb.length === 0 && !!Sn && !dd && ur.jsx(U, {
        paddingLeft: 2,
        children: ur.jsx(w, {
          dimColor: true,
          children: "no sessions match"
        })
      })]
    }), ur.jsxs(U, {
      flexShrink: 0,
      flexDirection: "column",
      marginTop: 1,
      children: [ur.jsx(U, {
        position: "absolute",
        marginTop: -1,
        height: 1,
        width: "100%",
        paddingLeft: 2,
        paddingRight: 1,
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        overflow: "hidden",
        children: ur.jsx(Kur, {})
      }), _V && !Sn && ur.jsx(U, {
        paddingLeft: 1,
        marginBottom: 1,
        children: lge
      }), JZ && ur.jsx(U, {
        paddingLeft: 1,
        marginBottom: 1,
        children: JZ
      }), AV, null, ur.jsx(U, {
        flexDirection: "column",
        borderStyle: "round",
        borderLeft: false,
        borderRight: false,
        borderColor: Ch ? "bashBorder" : void 0,
        borderDimColor: !Ch,
        children: ur.jsx(LP, {
          query: Sn,
          cursorOffset: gr,
          onCursorOffsetChange: fo,
          placeholder: Ch || Kn && (Jr !== "idle" || zr) ? "" : "describe a task for a new session",
          prefix: So === "bash" ? "!" : dd ? nt.pointer : void 0,
          prefixDim: !kS && !Ch,
          prefixColor: Ch ? "bashBorder" : void 0,
          highlights: vie,
          dimRange: Xn.interimRange ? [Xn.interimRange.start, Xn.interimRange.end] : void 0,
          cursorChar: bs ? ur.jsx(edr, {}) : void 0,
          isFocused: !ue && gt === null,
          isTerminalFocused: pt,
          width: "100%",
          borderless: true,
          wrapColumns: pn
        })
      })]
    }), Ze && !ue ? ur.jsx(rvm, {
      focusedPinned: ua?.state.pinned ?? false,
      canReorder: !!ua && (!ob || (ua.state.pinned ?? false)),
      canRename: !!ua && !t0 && !(ua.state.backend !== "daemon" && !ua.state.sock),
      canPin: !!ua && !t0,
      canMention: nc.length + sd.length + Object.keys(Ee).length > 0,
      canSwitchTabs: mO,
      altOpenCount: Math.min(9, On(Ef, mt => mt.kind === "job" && mt.origin === G3))
    }) : Me && !ue ? ur.jsx(ivm, {
      job: ua
    }) : ur.jsx(U, {
      flexShrink: 0,
      paddingLeft: 2,
      height: 1,
      children: Et ? ur.jsxs(w, {
        dimColor: true,
        children: ["Press Ctrl-C again to exit", QZ > 0 && ` \xB7 ${QZ} ${bn(QZ, "agent")} will keep running`]
      }) : gt !== null ? ur.jsx(w, {
        dimColor: true,
        children: ur.jsxs(Tn, {
          children: [ur.jsx(ht, {
            chord: "enter",
            action: "save",
            format: {
              keyCase: "lower"
            }
          }), ur.jsx(ht, {
            chord: "escape",
            action: "cancel",
            format: {
              keyCase: "lower"
            }
          })]
        })
      }) : Yr ? ur.jsx(w, {
        dimColor: true,
        children: ur.jsx(ht, {
          chord: "ctrl+x",
          action: "confirm"
        })
      }) : Qs ? ur.jsx(w, {
        color: "error",
        wrap: "truncate-end",
        children: Qs
      }) : Kn && zr ? ur.jsx(u7e, {}) : Kn && Jr !== "idle" ? ur.jsx(Zur, {
        voiceState: Jr
      }) : KT ? ur.jsx(w, {
        dimColor: true,
        wrap: "truncate-end",
        children: KT
      }) : !ue && Ki.length === 0 ? ur.jsx(w, {
        dimColor: true,
        children: ur.jsxs(Tn, {
          children: [u && akc(u) && ur.jsx(lkc, {
            defaults: u
          }), (ua && !t0 || kS) && !mB && !Ch && ur.jsx(ht, {
            chord: "enter",
            action: Bf,
            format: {
              keyCase: "lower"
            }
          }), Im?.kind === "header" && Sn === "" && !Sw && ur.jsx(ht, {
            chord: "enter",
            action: Re.has(Im.group) ? "expand" : "collapse",
            format: {
              keyCase: "lower"
            }
          }), Im?.kind === "fold" && Sn === "" && ur.jsx(ht, {
            chord: "enter",
            action: "show all",
            format: {
              keyCase: "lower"
            }
          }), ua && Sn === "" && !Ch && pn >= 55 && ur.jsx(ht, {
            chord: " ",
            action: "reply",
            format: {
              keyCase: "lower"
            }
          }), Kn && Nt !== "tap" && Sn === "" && !Ch && pn >= 55 ? ur.jsx(w, {
            children: "hold space to speak"
          }) : null, pn >= 80 && (ua && !t0 && Sn === "" ? ur.jsx(ht, {
            chord: "ctrl+x",
            action: "delete"
          }) : !Pb && Ot.length > 0 ? ur.jsx(ht, {
            chord: "ctrl+x",
            action: "delete all"
          }) : null), Ch ? ur.jsx(w, {
            color: "bashBorder",
            children: "! for shell mode"
          }) : Sn !== "" ? ur.jsx(ht, {
            chord: "escape",
            action: "clear",
            format: {
              keyCase: "lower"
            }
          }) : ur.jsx(w, {
            children: "? for shortcuts"
          }), null]
        })
      }) : null
    }), ur.jsx(zur, {
      isUpdating: tt,
      onChangeIsUpdating: bt,
      showSuccessMessage: true,
      verbose: false
    }), ue && ua && ur.jsx(U, {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: "column",
      opaque: true,
      children: ur.jsx(SessionPreview, {
        job: ua,
        renaming: gt !== null,
        replyDrafts: Ce.current,
        pastedContents: Fi,
        nextPasteId: xn,
        replyError: Ie?.id === ua.id ? Ie.error : null,
        onReplyError: mt => Ve(mt ? {
          id: ua.id,
          error: mt
        } : null),
        status: NC(ua),
        isPending: t0,
        deleteArmed: Yr?.id === ua.id ? {
          justKilled: Yr.justKilled
        } : void 0,
        onBack: () => we(false),
        onAttach: () => {
          we(false), yO(ua);
        },
        childRows: dB,
        onReply: async mt => {
          if (ua.id.startsWith("remote-pending-")) return To("Still starting \u2014 try again in a moment"), null;
          let Vn = Ar(ua.id),
            Bn = ua.state.resumeSessionId ?? ua.state.sessionId,
            Nr = {
              kickedAt: Date.now(),
              jobId: ua.id
            };
          uD.current.set(Bn, Nr), f.setTimeout(() => {
            if (uD.current.get(Bn) === Nr) uD.current.delete(Bn), RS(fc => new Map(fc));
          }, 30000), g(fc => {
            if (!fc?.some(rl => rl.id === ua.id)) return fc;
            return fc.map(rl => {
              if (rl.id !== ua.id) return rl;
              let Uf = IHt(rl.state, mt);
              return {
                ...rl,
                state: Uf,
                activity: deriveActivity(Uf)
              };
            });
          });
          let Ur,
            fs,
            wi = false,
            Ll = false;
          try {
            let fc = await wQt(ua.id, mt, ua.state);
            if (Ur = fc?.err ?? null, fs = fc?.code, Ur === MYe) {
              let rl = en.current.get(ua.id);
              if (rl) {
                await rl;
                let Uf = await wQt(ua.id, mt, ua.state);
                Ur = Uf?.err ?? null, fs = Uf?.code;
              }
            }
            if (Ur === MYe && ek(mt) === "prompt") {
              let rl = await Stn(ua.id, {
                knownState: ua.state,
                initialPrompt: mt
              });
              wi = !rl.ok, Ll = !rl.ok && rl.queued === true, Ur = rl.ok ? null : Ll ? "Reply queued \u2014 will be sent when this session restarts" : rl.error;
            }
            if (Ur) {
              if (uD.current.get(Bn) === Nr) uD.current.delete(Bn);
            }
          } finally {
            Vn();
          }
          if (Ur === null) xe("fleet_view_reply"), Qk.current.delete(Bn);else if (Ur === lWo) xe("fleet_view_reply"), Qk.current.delete(Bn);else {
            if (wi) T(`[fleetview] peek-reply respawn failed: ${Ur}`);
            let fc = Qk.current.get(Bn),
              rl = Date.now();
            if (fc !== void 0 && rl - fc < xTm) It("fleet_view_reply", "retry_of_recent_failure");else if (Ur === MYe) It("fleet_view_reply", "not_running_no_respawn");else if (wi && Ll) It("fleet_view_reply", "queued_for_later");else if (wi) Le("fleet_view_reply", "respawn_failed");else if (xrc(Ur)) It("fleet_view_reply", "daemon_restarting");else {
              let Uf = Ur,
                Xc = [...Uf.matchAll(/\bE[A-Z]{2,14}\b/g)].find(bp => !"/\\".includes(Uf[bp.index - 1] ?? "."))?.[0],
                Xu = fs ?? Xc ?? "unknown";
              T(`[fleetview] peek-reply send failed: ${Uf}`);
              let Xl = false;
              if (!fs && Xc !== void 0 && kTm.has(Xc) && ek(mt) === "prompt") Xl = await Kd(_c(ua.id), {
                ...ua.state,
                queuedPrompt: mt,
                updatedAt: new Date().toISOString()
              }).then(() => true, bp => (T(`[fleetview] queue-to-disk write failed: ${be(bp)}`, {
                level: "error"
              }), false));
              let Uc = {
                errno: Xu
              };
              if (Xl) Ur = "Reply queued \u2014 will be sent when this session restarts", It("fleet_view_reply", "queued_for_later", Uc);else Le("fleet_view_reply", "send_failed", Uc);
            }
            Qk.current.set(Bn, rl);
          }
          return cm(), Ur;
        },
        isTerminalFocused: pt
      }, ua.id)
    })]
  });
}
function rvm(e) {
  let t = D7e.c(8),
    {
      focusedPinned: n,
      canReorder: r,
      canRename: o,
      canPin: s,
      canMention: i,
      canSwitchTabs: a,
      altOpenCount: l
    } = e,
    c;
  if (t[0] !== l || t[1] !== i || t[2] !== s || t[3] !== o || t[4] !== r || t[5] !== a || t[6] !== n) {
    let u = [];
    if (r) u.push(`shift+${nt.arrowUp + nt.arrowDown} to reorder`);
    if (o) u.push("ctrl+r to rename");
    if (u.push("ctrl+s to switch views"), i) u.push("@ to mention");
    if (s) u.push(`ctrl+t to ${n ? "unpin" : "pin to top"}`);
    if (l > 0) u.push(`alt+1${l > 1 ? `-${l}` : ""} to open`);
    u.push("esc to quit"), u.push("? to close");
    let d = [];
    for (let p = 0; p < u.length; p = p + 2, p) d.push(u.slice(p, p + 2));
    c = ur.jsx(U, {
      flexShrink: 0,
      paddingX: 2,
      flexDirection: "row",
      gap: 4,
      children: d.map(ovm)
    }), t[0] = l, t[1] = i, t[2] = s, t[3] = o, t[4] = r, t[5] = a, t[6] = n, t[7] = c;
  } else c = t[7];
  return c;
}
function ovm(e, t) {
  return ur.jsx(U, {
    flexDirection: "column",
    children: e.map(svm)
  }, t);
}
function svm(e) {
  return ur.jsx(w, {
    dimColor: true,
    children: e
  }, e);
}
function ivm(e) {
  let t = D7e.c(43),
    {
      job: n
    } = e,
    r;
  if (t[0] !== n) r = n ? Date.parse(n.state.updatedAt) : 0, t[0] = n, t[1] = r;else r = t[1];
  let o = r,
    [s, i] = jr.useState(avm),
    a;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) a = () => i(Date.now()), t[2] = a;else a = t[2];
  if (Gc(a, !n ? null : s - o < 60000 ? 1000 : 30000), !n) {
    let M;
    if (t[3] === Symbol.for("react.memo_cache_sentinel")) M = ur.jsx(U, {
      flexShrink: 0,
      paddingX: 2,
      children: ur.jsx(w, {
        dimColor: true,
        children: "no job focused"
      })
    }), t[3] = M;else M = t[3];
    return M;
  }
  let l = n.state,
    c = Math.max(0, s - o),
    u;
  if (t[4] !== c) u = Yi(c, {
    mostSignificantOnly: true
  }), t[4] = c, t[5] = u;else u = t[5];
  let d = u,
    p;
  if (t[6] === Symbol.for("react.memo_cache_sentinel")) p = ur.jsx(w, {
    dimColor: true,
    children: "backend "
  }), t[6] = p;else p = t[6];
  let f;
  if (t[7] !== l.backend) f = ur.jsxs(w, {
    children: [p, l.backend]
  }), t[7] = l.backend, t[8] = f;else f = t[8];
  let m;
  if (t[9] === Symbol.for("react.memo_cache_sentinel")) m = ur.jsx(w, {
    dimColor: true,
    children: "dir "
  }), t[9] = m;else m = t[9];
  let g;
  if (t[10] !== n.id) g = _c(n.id), t[10] = n.id, t[11] = g;else g = t[11];
  let h;
  if (t[12] !== g) h = ur.jsxs(w, {
    children: [m, g]
  }), t[12] = g, t[13] = h;else h = t[13];
  let y;
  if (t[14] === Symbol.for("react.memo_cache_sentinel")) y = ur.jsx(w, {
    dimColor: true,
    children: "cwd "
  }), t[14] = y;else y = t[14];
  let b = l.worktreePath ?? l.cwd,
    _;
  if (t[15] !== b) _ = ur.jsxs(w, {
    children: [y, b]
  }), t[15] = b, t[16] = _;else _ = t[16];
  let S;
  if (t[17] !== _ || t[18] !== f || t[19] !== h) S = ur.jsxs(U, {
    flexDirection: "column",
    children: [f, h, _]
  }), t[17] = _, t[18] = f, t[19] = h, t[20] = S;else S = t[20];
  let A;
  if (t[21] !== n.id || t[22] !== l.backend) A = l.backend === "daemon" ? ur.jsxs(w, {
    children: [ur.jsx(w, {
      dimColor: true,
      children: "shell "
    }), "claude attach ", n.id]
  }) : null, t[21] = n.id, t[22] = l.backend, t[23] = A;else A = t[23];
  let v;
  if (t[24] === Symbol.for("react.memo_cache_sentinel")) v = ur.jsx(w, {
    dimColor: true,
    children: "session "
  }), t[24] = v;else v = t[24];
  let C;
  if (t[25] !== l.sessionId) C = ur.jsxs(w, {
    children: [v, l.sessionId]
  }), t[25] = l.sessionId, t[26] = C;else C = t[26];
  let x;
  if (t[27] === Symbol.for("react.memo_cache_sentinel")) x = ur.jsx(w, {
    dimColor: true,
    children: "version "
  }), t[27] = x;else x = t[27];
  let I;
  if (t[28] !== l.cliVersion) I = l.cliVersion === void 0 ? ur.jsx(w, {
    dimColor: true,
    children: "\u2014"
  }) : l.cliVersion === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.VERSION ? l.cliVersion : ur.jsxs(ur.Fragment, {
    children: [ur.jsx(w, {
      color: "warning",
      children: l.cliVersion
    }), ur.jsxs(w, {
      dimColor: true,
      children: [" \xB7 current ", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
      }.VERSION]
    })]
  }), t[28] = l.cliVersion, t[29] = I;else I = t[29];
  let k;
  if (t[30] !== I) k = ur.jsxs(w, {
    children: [x, I]
  }), t[30] = I, t[31] = k;else k = t[31];
  let D;
  if (t[32] === Symbol.for("react.memo_cache_sentinel")) D = ur.jsx(w, {
    dimColor: true,
    children: "updated "
  }), t[32] = D;else D = t[32];
  let P;
  if (t[33] !== d) P = ur.jsxs(w, {
    children: [D, d, " ago"]
  }), t[33] = d, t[34] = P;else P = t[34];
  let O;
  if (t[35] !== A || t[36] !== C || t[37] !== k || t[38] !== P) O = ur.jsxs(U, {
    flexDirection: "column",
    children: [A, C, k, P]
  }), t[35] = A, t[36] = C, t[37] = k, t[38] = P, t[39] = O;else O = t[39];
  let L;
  if (t[40] !== S || t[41] !== O) L = ur.jsxs(U, {
    flexShrink: 0,
    paddingX: 2,
    flexDirection: "row",
    gap: 4,
    children: [S, O]
  }), t[40] = S, t[41] = O, t[42] = L;else L = t[42];
  return L;
}
function avm() {
  return Date.now();
}
async function mountFleetView(e, t) {
  if (Opr(), Upr(), el() && !igo()) yjn();
  if (Drc(t?.dispatchExtraArgs ?? []), G("tengu_bg_agent_action", {
    action: We("list_open")
  }), !Dt().hasOpenedAgentsView) gn(S => ({
    ...S,
    hasOpenedAgentsView: true
  }));
  let n = [];
  function r() {
    let S;
    while ((S = process.stdin.read()) !== null) {
      if ((typeof S === "string" ? Buffer.from(S, "utf8") : S).includes(3)) {
        process.emit("SIGINT");
        return;
      }
      n.push(S);
    }
  }
  process.stdin.on("readable", r);
  let o = t?.cwdFilter ? await jA(Gme.resolve(t.cwdFilter)) : void 0,
    s = ikc(t?.dispatchDefaults);
  Ci(Nrc), Ci(mnr("claude agents"));
  let i = e,
    a = process.env.CLAUDE_AGENTS_SELECT,
    l = t?.autoOpenJobId,
    c = l !== void 0 && t?.canGoBack,
    u = !!a;
  delete process.env.CLAUDE_AGENTS_SELECT;
  let d = await _Sc(await jA($t())),
    p = d?.q || void 0,
    f = d?.collapsed;
  Qdr();
  let m, g, h, y, b;
  process.stdin.off("readable", r);
  while (n.length) process.stdin.unshift(n.pop());
  let _;
  if (l !== void 0) {
    let S = (Etn ??= sortJobs((await aX()).map(A => ({
      ...A,
      activity: deriveActivity(A.state)
    })))).find(A => A.id === l);
    if (S) _ = {
      type: "open",
      job: S,
      jobs: Etn,
      collapsed: f ?? [],
      loopKicks: OKo,
      statuses: NKo,
      statusesTs: BKo,
      prStatuses: Jpr,
      respawnResult: await Stn(S.id, {
        knownState: S.state
      })
    };
  }
  for (;;) {
    let S = _ ?? (await new Promise(I => {
      i.render(ur.jsx(wKo, {
        children: ur.jsx(AH, {
          initialState: b && {
            ...b,
            notifications: {
              current: null,
              queue: [],
              pinned: []
            }
          },
          onChangeAppState: ({
            newState: k
          }) => {
            b = k;
          },
          children: ur.jsx(zLn, {
            children: ur.jsx(TT, {
              children: ur.jsx(FleetView, {
                onAction: I,
                initialJobId: a,
                enteredViaLeftArrow: u,
                initialQuery: p,
                initialCollapsed: f,
                initialError: m,
                initialGroupMode: g,
                initialSessionModel: h,
                initialWarming: y,
                cwdFilter: o,
                dispatchDefaults: s,
                canGoBack: t?.canGoBack,
                autoOpenJobId: l
              })
            })
          })
        })
      }));
    }));
    _ = void 0;
    let A = ZNt();
    if (S.type === "back") {
      i.unmount();
      break;
    }
    if (A && S.type === "open") Cu.get(process.stdout)?.handoffAltScreen();
    if (Vt() === "windows" && S.type === "open") Cu.get(process.stdout)?.handoffRawMode();
    if (!A) i.render(null);
    if (i.unmount(), m = void 0, S.type === "open" && S.job.id !== l) c = false;
    if (l = void 0, S.type === "done") break;
    if (Vt() === "windows" && process.stdin.isTTY) L0(process.stdin, true), process.stdin.ref();
    let v = A ? jee(() => void process.stdout.write(H1())) : () => {};
    a = S.job.id, p = S.query, f = S.collapsed, g = S.groupMode, h = S.sessionModel, y = S.warming, Etn = S.jobs, OKo = S.loopKicks, NKo = S.statuses, BKo = S.statusesTs, Jpr = S.prStatuses, Wkc = true;
    let C = Date.now(),
      x = S.respawnResult ?? (await Stn(S.job.id, S.freshDispatch ? void 0 : {
        knownState: S.job.state,
        knownAlive: Date.now() - S.statusesTs < 1500 && peerStatusFor(S.statuses, S.job) !== void 0 ? true : void 0
      }));
    if (T(`[FV-attach] respawnJob ${S.job.id}: ok=${x.ok} alive=${!x.ok && x.alive} err=${x.ok ? "" : x.error}`), x.ok || x.alive) {
      $Ko("attach", S.job.state, {
        jobId: S.job.id,
        attachShort: x.short ?? S.job.id
      }), process.stdout.write(QS(wy.SET_TITLE_AND_ICON, jobLabel(S.job.state, true)));
      let I = Date.now(),
        k = (O, L) => krc(O, {
          alreadyInAlt: A,
          gateStdinUntilFirstFrame: L
        }).catch(M => (ke(M), Le("job_attach", "threw"), {
          kind: "error",
          msg: `Couldn't attach \u2014 ${be(M)}`
        })),
        D = await k(x.short ?? S.job.id, x.ok),
        P = false;
      if (D.kind === "error" && D.orphaned && !V0e(S.job.state)) {
        let O = await Stn(S.job.id, {
          force: true,
          knownState: S.job.state
        });
        if (O.ok || O.alive) P = true, D = await k(O.short ?? S.job.id, O.ok);else D = {
          kind: "error",
          msg: O.error
        };
      }
      if (D.kind === "error" && !D.ended) {
        if (m = D.msg, P && D.orphaned) It("fleet_view_open", "recovered_then_crashed");else Le("fleet_view_open", P ? "orphan_recovery_failed" : "attach_failed");
      } else {
        if (D.msg) m = D.msg;
        xe("fleet_view_open");
      }
      $Ko("detach", S.job.state, {
        attachDurationMs: Date.now() - I
      }), T(`[FV-attach] attachJob returned after ${Date.now() - C}ms \u2014 remounting list`);
    } else m = x.error, Le("fleet_view_open", "respawn_failed");
    if (Zwt(), i = await rUt(lN(false)), c) return c = false, v(), {
      back: true,
      root: i
    };
    if (A) process.stdout.write(Xke());
    T("[PERF:bg-remount-start]"), v();
  }
}
var D7e,
  Dkc,
  Pkc,
  Gme,
  zKo,
  jr,
  Mkc,
  ur,
  yTm = 3,
  _Tm = 4,
  AUTO_RELAUNCH_UNFOCUSED_MS = 3600000,
  AUTO_RELAUNCH_MIN_INTERVAL_MS = 21600000,
  AUTO_RELAUNCH_ENV_KEY = "CLAUDE_AGENTS_AUTO_RELAUNCHED_AT",
  IKo,
  LKo,
  Hkc,
  PEAK_CONCURRENT_GOAL = 3,
  HTm,
  Fkc = 3,
  Tkc = 3,
  TTm = 60000,
  vTm = 8,
  wTm = 4,
  CTm = 2,
  ITm = 120000,
  xTm = 30000,
  kTm,
  Kpr,
  Etn = null,
  OKo,
  NKo,
  BKo = 0,
  Jpr,
  UKo = "local",
  FKo,
  Wkc = false,
  qpr,
  jKo,
  GKo,
  qkc,
  vkc,
  wkc = 8,
  Ckc = 5,
  Kkc = 500,
  NTm,
  UTm,
  KTm,
  xkc,
  YTm,
  kkc,
  Rkc;